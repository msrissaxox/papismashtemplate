export default function Ingredients() {
  return (
    <div className="py-36 mt-20 bg-gradient-to-r from-gray-200 to-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <h2 className="text-2xl bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent font-bold  md:text-4xl">
              FRESH INGREDIENTS
            </h2>

            <p className="mt-6 text-gray-600">
              Our Menu is Bursting with Flavor Our Latin-inspired menu is
              completely based on fresh, seasonal ingredients. We believe in
              using only the best ingredients to create the most delicious
              burgers you'll ever taste.
            </p>
          </div>
          <div className="md:7/12 lg:w-6/12">
            <img
              src="papi3.png"
              className="rounded-lg shadow-lg object-cover"
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
