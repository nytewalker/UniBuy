import { Link } from 'react-router-dom'

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

function ProductCard({ image, price, name }: ProductCardProps) {
  // Format price to Naira
  const formattedPrice = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0
  }).format(price)

  return (
    <Link 
      to="/Product" 
      state={{ image, price, name }}
      className="block hover:opacity-95 transition-opacity"
    >
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative h-[200px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{name}</h3>
          <p className="text-xl font-bold text-[#111111]">{formattedPrice}</p>
        </div>
      </div>
    </Link>
  )
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
  )
}

export default ProductGrid