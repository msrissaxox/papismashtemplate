export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-gray-400 to-white text-white">
      <h1 className="text-7xl font-bold pt-20 bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
        PAPI SMASH'D
      </h1>
      <h2 className="p-10 text-black text-2xl">
        Delicious Food for Every Mood{" "}
      </h2>
      <img src="papi1.png" alt="Papi Smash'd Logo" className="h-170 w-75%" />
    </div>
  );
}
