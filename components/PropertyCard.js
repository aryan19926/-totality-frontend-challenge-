import Image from 'next/image';

export default function PropertyCard({ property, addToCart }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <Image
        src={property.image}
        alt={property.title}
        width={400}
        height={300}
        layout="responsive"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{property.title}</h2>
        <p className="text-gray-600 mb-2">{property.description}</p>
        <p className="text-lg font-bold mb-4">Rs{property.price} / night</p>
        <p className="text-lg font-bold mb-4">{property.bedrooms}BHK</p>
        <p className="text-lg font-bold mb-4">{property.location}</p>
        
        <button
          onClick={() => addToCart(property)}
          className="bg-green-700 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}