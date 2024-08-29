import PropertyCard from './PropertyCard';

export default function PropertyList({ properties, addToCart }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} addToCart={addToCart} />
      ))}
    </div>
  );
}