import React from "react";
import "./index.sass";

interface ButtonProps {
  description: string;
}

const Button: React.FC<ButtonProps> = ({ description }) => {
  return <button type="submit">{description}</button>;
};

export default Button;
