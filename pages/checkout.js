import { useState } from 'react';
import Layout from '../components/Layout';
import CheckoutForm from '../components/CheckoutForm';

export default function Checkout() {
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleCheckout = (formData) => {
    // Here you would typically send the form data to your backend
    console.log('Order placed:', formData);
    setOrderPlaced(true);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold my-8">Checkout</h1>
        {orderPlaced ? (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
            Thank you for your order! We'll be in touch soon.
          </div>
        ) : (
          <CheckoutForm onSubmit={handleCheckout} />
        )}
      </div>
    </Layout>
  );
}