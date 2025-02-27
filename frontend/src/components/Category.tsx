import { useState } from 'react';

const categories = [
  {
    name: 'All Categories',
    items: ['Popular Items', 'Recent Searches', 'Featured Products']
  },
  {
    name: 'Electronics',
    items: ['Phones', 'Laptops', 'Accessories', 'Gaming']
  },
  {
    name: 'Fashion',
    items: ['Clothing', 'Shoes', 'Accessories', 'Bags']
  },
  {
    name: 'Food & Groceries',
    items: ['Snacks', 'Drinks', 'Fresh Food', 'Groceries']
  },
  {
    name: 'Stationery',
    items: ['Books', 'Writing Materials', 'Art Supplies', 'School Supplies']
  },
  {
    name: 'Services',
    items: ['Printing', 'Repairs', 'Tutoring', 'Photography']
  }
];

interface CategoryProps {
  className?: string;
}

function Category({ className = '' }: CategoryProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <div className={`w-full max-w-4xl ${className}`}>
      <div className="flex justify-center items-center gap-8">
        {categories.map((category) => (
          <div
            key={category.name}
            className="relative group"
            onMouseEnter={() => setActiveCategory(category.name)}
            onMouseLeave={() => setActiveCategory(null)}
          >
            <button className="text-white hover:text-[#df8714] transition-colors duration-200 font-medium">
              {category.name}
            </button>
            
            {/* Dropdown Menu */}
            <div 
              className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden transition-all duration-200 z-50 ${
                activeCategory === category.name ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}
            >
              {category.items.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#df8714]"
                  onClick={(e) => {
                    e.preventDefault();
                    // Add navigation logic here
                    console.log(`Selected: ${item} from ${category.name}`);
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;