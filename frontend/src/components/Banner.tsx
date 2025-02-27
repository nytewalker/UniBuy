import { useState } from 'react';
import { Search } from 'lucide-react';
import Category from './Category';

function Banner() {
  const [location, setLocation] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const response = await fetch(
              `https://api.opencagedata.com/geocode/v1/json?q=${position.coords.latitude}+${position.coords.longitude}&key=YOUR_API_KEY`
            );
            const data = await response.json();
            const city = data.results[0]?.components.city || 'Unknown Location';
            setLocation(city);
          } catch (error) {
            console.error('Error fetching location:', error);
            setLocation('Location not found');
          }
        },
        (error) => {
          console.error('Error getting location:', error);
          setLocation('Location access denied');
        }
      );
    } else {
      setLocation('Geolocation not supported');
    }
  };

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    
    // Mock suggestions - replace with actual API call later
    if (value.length > 0) {
      setSuggestions([
        `${value} in Electronics`,
        `${value} in Books`,
        `${value} in Fashion`,
      ]);
    } else {
      setSuggestions([]);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your search logic here
    console.log('Searching for:', searchQuery);
    setSuggestions([]);
  };

  return (
    <section className="bg-[#310639] min-h-[380px] p-5 text-white flex flex-col items-center">
      <div className="flex items-center gap-2 mt-4">
        <p className="text-lg">Find anything in </p>
        <button
          onClick={handleLocationClick}
          className="px-4 py-2 bg-[#101010] text-white rounded-md hover:bg-[#df8714] transition-colors duration-200 flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          {location || 'Uniben'}
        </button>
      </div>

      <div className="relative mt-8 w-full max-w-2xl">
        <form onSubmit={handleSearchSubmit} className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchInput}
            placeholder="I am looking for... "
            className="w-full px-4 py-5 pr-12 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#df8714]"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-600 hover:text-[#310639] transition-colors duration-200"
          >
            <Search size={24} />
          </button>
        </form>

        {suggestions.length > 0 && (
          <div className="absolute w-full mt-1 bg-white rounded-md shadow-lg max-h-60 overflow-auto z-10">
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                className="px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setSearchQuery(suggestion);
                  setSuggestions([]);
                }}
              >
                {suggestion}
              </div>
            ))}
          </div>
        )}
      </div>
      
      <Category className="mt-auto mb-2" />
    </section>
  );
}

export default Banner;