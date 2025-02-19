"use client";
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image src="/logo-type2_enhanced.jpg" alt="Logo" width={200} height={90} unoptimized />
        </div>

        
      </div>
    </header>
  );
};

export default Header;
