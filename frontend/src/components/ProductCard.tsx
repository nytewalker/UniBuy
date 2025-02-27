interface ProductCardProps {
  name: string;
  price: number;
  image: string;
}

const products = [
  {
    id: 1,
    name: 'Cute Yellow Book',
    price: 5000,
    image: './src/assets/image1.png'
  },
  {
    id: 2,
    name: 'Reading Glasses',
    price: 10000,
    image: '/src/assets/image2.png'
  },
  {
    id: 3,
    name: 'Laundry Basket',
    price: 2000,
    image: '/src/assets/image3.png'
  },
  {
    id: 4,
    name: 'Student Calculator',
    price: 5000,
    image: '/src/assets/image4.png'
  },
  {
    id: 5,
    name: 'Oraimo Headset',
    price: 25000,
    image: './src/assets/image5.png'
},
{
    id: 6,
    name: 'Power Bank',
    price: 15000,
    image: './src/assets/image6.png'
}
];

function ProductCard({ name, price, image }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl w-[306px] h-[368px]">
      <div className="w-[306px] h-[262px]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate">{name}</h3>
        <p className="text-[#0f0f0f] font-bold">
          ₦{price.toLocaleString()}
        </p>
      </div>
    </div>
  );
}

function ProductGrid() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;