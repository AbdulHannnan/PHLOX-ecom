const HeroPage = () => {
    return (
      <section className="relative bg-gray-200 py-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          {/* Left Side - Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-lg text-gray-600">Beats Solo</h2>
            <h1 className="text-6xl font-bold text-gray-900">
              Wireless <br />
              <span className="text-gray-400">HEADPHONE</span>
            </h1>
            <p className="text-gray-600 mt-4">
              Experience the best sound quality with our latest wireless headphones.
            </p>
            <button className="mt-6 bg-red-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-600">
              Shop by Category
            </button>
          </div>
  
          {/* Right Side - Product Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/haedphone.webp" // Change this to the actual image path
              alt="Wireless Headphone"
              className="w-96"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroPage;
  