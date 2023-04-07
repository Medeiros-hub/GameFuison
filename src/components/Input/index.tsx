import React, { useState, useRef } from "react";
import "./index.sass";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

interface InputProps {
  type: React.HTMLInputTypeAttribute;
  icon?: React.ReactNode;
  description: string;
  inputPassword?: boolean;
}

const Input: React.FC<InputProps> = ({
  type,
  icon,
  description,
  inputPassword,
}): JSX.Element => {
  const [view, setView] = useState<boolean>(true);
  const inputRef = useRef<HTMLInputElement>(null);

  const toggleView = () => {
    setView(!view);
    if (inputRef.current) {
      inputRef.current.type = view ? "text" : "password"
    }
  };

  return (
    <>
      <div className="input-item">
        <i>{icon}</i>
        <label htmlFor={description}>
          <input 
            required
            id={description} 
            type={type} 
            placeholder={description} 
            ref={inputRef}
          />
        </label>
        {inputPassword && (
          <i onClick={toggleView} className='pointer'>
            {view ? <AiFillEye /> : <AiFillEyeInvisible />}
          </i>
        )}
      </div>
    </>
  );
};

export default Input;
