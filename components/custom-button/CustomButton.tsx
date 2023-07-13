import React from 'react';
import { text } from 'stream/consumers';

interface CustomButtonProps {
  text: string;
  styleClasses?: string;
  type?: 'button' | 'submit';
}

function CustomButton({
  text,
  styleClasses,
  type = 'button',
}: CustomButtonProps) {
  return (
    <button
      className={`rounded-md text-sm font-semibold px-3 py-2 ${styleClasses}`}
      type={type}
    >
      {text}
    </button>
  );
}

export default CustomButton;
