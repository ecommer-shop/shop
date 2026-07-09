declare global {
    interface Window {
        FB: any;
        fbAsyncInit: () => void;
    }
}

export type FBLoginResponse = {
    authResponse?: {
        accessToken: string;
        expiresIn: number;
        signedRequest: string;
        userID: string;
    };
    status: string;
};

let sdkLoaded = false;
let sdkPromise: Promise<void> | null = null;

export function loadFacebookSDK(appId: string): Promise<void> {
    if (sdkLoaded) return Promise.resolve();
    if (sdkPromise) return sdkPromise;

    sdkPromise = new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://connect.facebook.net/en_US/sdk.js';
        script.async = true;
        script.defer = true;
        script.crossOrigin = 'anonymous';

        window.fbAsyncInit = () => {
            window.FB.init({
                appId,
                cookie: true,
                xfbml: false,
                version: 'v18.0',
            });
            sdkLoaded = true;
            resolve();
        };

        script.onerror = () => reject(new Error('Failed to load Facebook SDK'));
        document.head.appendChild(script);
    });

    return sdkPromise;
}

export function fbLogin(options: { scope: string }): Promise<FBLoginResponse> {
    return new Promise((resolve) => {
        window.FB.login((response: FBLoginResponse) => {
            resolve(response);
        }, { scope: options.scope });
    });
}

export function fbApi(path: string): Promise<any> {
    return new Promise((resolve, reject) => {
        window.FB.api(path, (response: any) => {
            if (response.error) {
                reject(new Error(response.error.message || 'Facebook API error'));
            } else {
                resolve(response);
            }
        });
    });
}
