import { useState } from 'react'
import Header from "@/components/Header"
import { useLocation } from 'react-router-dom'
import placeholder from '../assets/imageplaceholder.png'
import { MessageCircle, Phone, MessageSquare, Star } from 'lucide-react'
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

interface ProductState {
  image: string;
  price: number;
  name: string;  // Add name to interface
  reviews?: Review[]
}

interface Review {
  id: number
  rating: number
  comment: string
}

function ProductPage() {
  const location = useLocation()
  const { image, price, name, reviews = [] } = location.state as ProductState || { 
    image: 'default-product-image.jpg',
    price: 0,
    name: 'Product Name',
    reviews: []
  }
  const [selectedImage, setSelectedImage] = useState(image)
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')

  // Array of placeholder images for the carousel
  const carouselImages = [
    image,
    placeholder,
    placeholder,
    placeholder
  ]

  // Format price to Naira
  const formattedPrice = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0
  }).format(price)

  return (
    <div className="min-h-screen bg-gray-200">
      <Header/>

      <div className="max-w-[1720px] mt-[30px] mx-auto px-8 py-6">
        <div className="flex justify-center gap-8">
          {/* Left Column - Image Section */}
          <div className="flex-shrink-0 space-y-4">
            <img 
              src={selectedImage} 
              alt="Product" 
              className="w-[574px] h-[536px] object-cover rounded-[0.7rem] shadow-md"
            />
            
            {/* Image Carousel */}
            <div className="flex gap-4">
              {carouselImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(img)}
                  className={`relative w-[134px] h-[125px] rounded-[0.5rem] overflow-hidden
                    ${selectedImage === img ? 'ring-2 ring-[#56066a]' : 'hover:opacity-80'}
                    transition-all duration-200`}
                >
                  <img
                    src={img}
                    alt={`Product view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {/* First Card - Price and WhatsApp */}
            <div className="bg-white p-6 rounded-[.8rem] shadow-lg w-[450px]">
              <div className="space-y-6">
                {/* Price Section */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    {formattedPrice}
                  </h2>
                </div>

                {/* WhatsApp Button */}
                <button
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 
                    border-2 border-[#56066a] text-[#56066a] rounded-[.8rem]
                    hover:bg-[#56066a] hover:text-white transition-colors duration-200
                    font-medium text-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </button>
              </div>
            </div>

            {/* Second Card - Description and Contact */}
            <div className="bg-white p-6 rounded-[.8rem] shadow-lg w-[450px]">
              <div className="space-y-6">
                {/* Description Section */}
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Description
                  </h2>
                  <p className="text-lg text-gray-700">
                    {name}
                  </p>
                </div>

                {/* Contact Buttons */}
                <div className="space-y-3">
                  <button
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 
                      bg-[#56066a] text-white rounded-[.8rem]
                      hover:bg-[#6b0884] transition-colors duration-200
                      font-medium text-lg"
                  >
                    <Phone className="w-5 h-5" />
                    Show Contact
                  </button>

                  <button
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 
                      bg-white border-2 border-[#56066a] text-[#56066a] rounded-[.8rem]
                      hover:bg-[#56066a] hover:text-white transition-colors duration-200
                      font-medium text-lg"
                  >
                    <MessageSquare className="w-5 h-5" />
                    Start Chat
                  </button>
                </div>
              </div>
            </div>

            {/* Reviews Card */}
            <div className="bg-white p-6 rounded-[.8rem] shadow-lg w-[450px]">
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Reviews
                  </h2>
                  <p className="text-lg text-gray-700">
                    {reviews.length > 0 
                      ? `${reviews.length} ${reviews.length === 1 ? 'Review' : 'Reviews'}`
                      : 'No reviews yet'}
                  </p>
                </div>
              </div>
            </div>

            {/* Write a Review Card */}
            <div className="bg-white p-6 rounded-[.8rem] shadow-lg w-[450px]">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 text-center">
                  Write a Review
                </h2>
                
                {/* Star Rating */}
                <div className="flex justify-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setRating(star)}
                      className="focus:outline-none"
                    >
                      <Star
                        className={`w-8 h-8 ${
                          rating >= star 
                            ? 'fill-[#56066a] text-[#56066a]' 
                            : 'text-gray-300'
                        } transition-colors duration-200`}
                      />
                    </button>
                  ))}
                </div>

                {/* Review Text Area */}
                <Textarea
                  placeholder="Share your thoughts about this product..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="min-h-[120px] resize-none border-gray-300 focus:ring-[#56066a] focus:border-[#56066a] placeholder:text-gray-400 focus:placeholder:opacity-0 transition-all"
                />

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-[#56066a] hover:bg-[#6b0884] text-white py-3 rounded-[.8rem] font-medium text-lg transition-colors duration-200"
                >
                  Submit
                </Button>
              </div>
            </div>

            {/* Safety Tips Card */}
            <div className="bg-white p-6 rounded-[.8rem] shadow-lg w-[450px]">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 text-center">
                  Safety Tips
                </h2>
                
                <ul className="space-y-3 list-disc pl-6 text-gray-700">
                  <li>Avoid sending any prepayments</li>
                  <li>Meet with the seller at a safe public place</li>
                  <li>Inspect what you're going to buy to make sure it's what you want to buy</li>
                  <li>Check all the docs and only pay if you're satisfied</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage