import React from 'react';

interface HeaderProps {
  title: string;
}

function Header({ title }: HeaderProps) {
  return (
    <div className="px-6 py-4 bg-red-500 ">
      <h1 className="text-center text-white text-xl font-semibold">{title}</h1>
    </div>
  );
}

export default Header;
