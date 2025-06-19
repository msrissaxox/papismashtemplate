import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-gradient-to-r p-5 from-gray-500 to-white text-black">
      <h1 className="text-2xl bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent font-bold ">
        PAPI SMASH'D
      </h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#ourstory" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
