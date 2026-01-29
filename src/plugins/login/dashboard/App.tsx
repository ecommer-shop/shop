import { SignedOut, SignIn, SignInButton, SignUpButton } from "@clerk/clerk-react";

export function App() {
    return (
        <div style={{ padding: 32 }}>
            <SignedOut>
                <SignIn routing="hash" />
            </SignedOut>
        </div>
    )
}