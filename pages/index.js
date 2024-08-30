import { useState } from 'react';
import Layout from '../components/Layout';
import PropertyList from '../components/PropertyList';
import Filters from '../components/Filters';
import Cart from '../components/Cart';
import { properties } from '../utils/data';
import { useSession , signIn} from 'next-auth/react'

export default function Home() {
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [cart, setCart] = useState([]);
  const session=useSession();
  console.log('session:',session);



 if(session.status==='unauthenticated'){
  return <button onClick={signIn}>Login</button>
 }

  const addToCart = (property) => {
    setCart([...cart, { ...property, quantity: 1 }]);
  };

  const removeFromCart = (propertyId) => {
    setCart(cart.filter((item) => item.id !== propertyId));
  };

  const updateQuantity = (propertyId, newQuantity) => {
    setCart(
      cart.map((item) =>
        item.id === propertyId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <Layout>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold my-8">Property Listings</h1>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-3/4">
            <Filters setFilteredProperties={setFilteredProperties} />
            <PropertyList properties={filteredProperties} addToCart={addToCart} />
          </div>
          <div className="md:w-1/4">
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}