import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <>
      <nav className="bg-[#015ca8] p-4">
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-black">PropertyBooker</p>
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
