import React from 'react';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 sm:px-6">
        <div className="flex items-center justify-between gap-4 w-full">
          {/* Main Logo - Left Side */}
          <div className="flex-1 w-1/2 h-full px-4">  {/* Added padding-x (px-4) */}
            <img 
              src="/images/logomain.png" 
              alt="Main Logo" 
              className="w-full h-[100%] max-h-24 object-contain object-left "
            />
          </div>

          {/* Secondary Logo - Right Side */}
          <div className="flex-1 w-1/2 h-full flex justify-end px-4">  {/* Added padding-x (px-4) */}
            <img 
              src="/images/right.png" 
              alt="Secondary Logo" 
              className="w-full h-auto max-h-24 object-contain object-right"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
