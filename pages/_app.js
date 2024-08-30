import '../styles/globals.css';
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'


function MyApp({ Component, pageProps }) {
  const publishableKey= 'pk_test_bGFyZ2UtZ2hvdWwtOTEuY2xlcmsuYWNjb3VudHMuZGV2JA';
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