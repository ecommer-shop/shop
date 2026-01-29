import { Button, defineDashboardExtension, Page, PageBlock, PageLayout, PageTitle } from '@vendure/dashboard';
import { StrictMode, useState } from 'react';
import { ClerkProvider, SignIn } from '@clerk/clerk-react'
import { App } from './App';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
    || 'pk_test_Z29sZGVuLWZsZWEtNDEuY2xlcmsuYWNjb3VudHMuZGV2JA'

if (!PUBLISHABLE_KEY) {
    console.warn('[Clerk] Missing publishable key');
}

defineDashboardExtension({
    routes: [
        {
            path: '/custom-login',
            authenticated: false,
            component: () => (
                <StrictMode>
                    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
                        <App />
                    </ClerkProvider>
                </StrictMode>
            ),
        },
    ],
    login: {
        beforeForm: {
            component: () => <div>Ecommer</div>
        },
        afterForm: {
            component: () => (
                <StrictMode>
                    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
                        <App />
                    </ClerkProvider>
                </StrictMode>
            ),
        }
    }
});
