import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="text-white shadow-md w-full">
      <div className="container mx-auto px-4 py-3 max-w-5xl">
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-2">
            <Image
              src="/subtrantlogo.png"
              alt="Subtrant Logo"
              className="h-10 w-auto"
              width={50}
              height={50}
            />
            <span className="ml-3 font-semibold text-xl">
              Subtrant Softworks
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
