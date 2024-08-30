import '../styles/globals.css';
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'


function MyApp({ Component, pageProps }) {
  const publishableKey= process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
  return (
    <ClerkProvider publishableKey={publishableKey}>
    <SignedOut>
      <SignInButton />
    </SignedOut>
    <SignedIn>
      <UserButton />
      <Component {...pageProps} />
    </SignedIn>
   
  </ClerkProvider>
  )
    
}

export default MyApp;