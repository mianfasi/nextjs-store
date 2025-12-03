export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
          Welcome to NextStore
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
          Discover amazing products at unbeatable prices. Shop the latest trends and exclusive deals.
        </p>
        <div className="mt-8">
          <a 
            href="#products" 
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition inline-block"
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
}