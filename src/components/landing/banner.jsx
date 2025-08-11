
const Banner = () => {
  
  return (
    <div className="relative">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-black/10 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-black/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-black/10 rounded-full blur-xl"></div>
        <div className="absolute top-60 left-1/3 w-16 h-16 bg-black/10 rounded-full blur-xl"></div>
        <img
          src="/images/karot.png"
          className="absolute w-[550px] top-30 right-32 opacity-15 animate-pulse"
          alt="decor"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-black/80 leading-tight">
                What Would you like
                <br />
                to
                <span className="text-green-800"> Order </span>
                today?
              </h1>
              <p className="text-black/80 text-lg max-w-md">
                Our job is to filling your tummy with delicious food with fast and easy delivery.
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <button className="border-2 border-black/30 hover:bg-gray-400 text-black/80 px-8 py-3 rounded-full font-semibold transition-colors">
                Buy Now
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative w-[500px] mx-auto">
              <img src="/images/salat.png" className="mb-4" alt="Dish" />
              <img
                src="/images/mtes.png"
                className="absolute w-[130px] top-7 right-5 animate-pulse"
                style={{ animationDelay: '0.5s' }}
                alt="mtes"
              />
              <img
                src="/images/tae.png"
                className="absolute -bottom-4 -left-4 text-3xl w-[170px] animate-pulse"
                style={{ animationDelay: '1s' }}
                alt="tae"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
