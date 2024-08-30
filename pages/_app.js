import '../styles/globals.css';
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'


function MyApp({ Component, pageProps }) {
  return (
    <ClerkProvider>
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