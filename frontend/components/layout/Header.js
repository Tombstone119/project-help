"use client";
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image src="/logo-bg-removed2.png" alt="Logo" width={200} height={100} unoptimized />
        </div>

        <div>
          search
        </div>

        <div>
          shooping cart
        </div>
        
      </div>
    </header>
  );
};

export default Header;
