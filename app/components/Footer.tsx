import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 mt-auto w-full">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Image
              src="/subtrantlogo.png"
              alt="Subtrant Logo"
              className="h-8 w-auto"
              width={30}
              height={30}
            />
          </div>

          <div className="text-sm text-gray-400">
            Copyright © {new Date().getFullYear()} Subtrant Softworks. All
            rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
