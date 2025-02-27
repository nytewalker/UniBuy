export default function Advert () {
    return (
        <section className=" mt-8 mb-7 w-full max-w-[1512px] h-[400px] md:h-[600px] lg:h-[824px] mx-auto">
            <div className="relative w-full h-full animate-fadeIn">
                {/* Background image - lowest z-index */}
                <div className="absolute inset-0 bg-[url('./src/assets/ads.png')] bg-cover bg-center bg-no-repeat z-0" />
                
                {/* Dark overlay - middle z-index */}
                <div className="absolute inset-0 bg-black/30 z-10" />
                
                {/* Content - highest z-index */}
                <div className="relative z-20 w-full h-full flex items-center justify-center">
                    <div className="text-white text-center animate-slideUp">
                        <h2 className="text-4xl font-bold mb-4 animate-slideInLeft">
                            Connecting Buyers and Sellers together
                        </h2>
                        <button className="bg-[#df8714] px-[8rem] py-4 mt-4 text-2xl font-bold 
                            hover:bg-[#f1972f] transition-all duration-300 ease-in-out
                            hover:scale-105 transform hover:shadow-lg">
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}