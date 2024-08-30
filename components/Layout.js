import Head from 'next/head';
import Link from 'next/link';
import { useSession , signOut} from 'next-auth/react';

export default function Layout({ children }) {
  const session = useSession();
  return (
    <>
      <nav className="bg-[#015ca8] p-4">
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-black">PropertyBooker</p>
          <p className="text-black">Hello {session.data.user.name}</p> 
          <buttpn onClick={signOut}>logut</buttpn>
          <Link href="/checkout" legacyBehavior>
            <a className="text-black">Checkout</a>
          </Link>
        </div>
      </nav>
      <main>{children}</main>
      <footer className="bg-[#015ca8] p-4 mt-8">
        <div className="container mx-auto text-center">
          &copy; 2024 Aryan Saxena | Totality Corp
        </div>
      </footer>
    </>
  );
}
