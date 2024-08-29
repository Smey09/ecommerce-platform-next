import React from "react";

interface ButtonProps {
  text: string;
  backgroundColor?: string;
  textColor?: string;
  hoverColor?: string;
  padding?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  backgroundColor = "bg-red-500",
  textColor = "text-white",
  hoverColor = "hover:bg-red-600",
  padding = "py-3 px-5",
  className = "",
}) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div
        className={`${backgroundColor} ${padding} rounded-sm ${textColor} ${hoverColor} transition-colors duration-300`}
      >
        <p className="font-light text-xs">{text}</p>
      </div>
    </div>
  );
};

export default Button;
