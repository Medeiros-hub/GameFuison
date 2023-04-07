import React, { useState } from "react";
import Input from "../../../components/Input";
import "./index.sass";

import { AiOutlineMail } from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";
import { BsGoogle, BsFacebook } from "react-icons/bs";
import Button from "../../../components/Button";

interface RegisterProps {
  toggleAuth: () => void | boolean
}

const Register: React.FC<RegisterProps> = ({
  toggleAuth
}) => {
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <h1>Crie sua conta</h1>
      <Input
        type={"email"}
        icon={<AiOutlineMail />}
        description="E-mail"
        inputPassword={false}
      />
      <Input
        type={"password"}
        icon={<BiLockAlt />}
        description="Senha"
        inputPassword={true}
      />
      <Input
        type={"password"}
        icon={<BiLockAlt />}
        description="Confirmar Senha"
        inputPassword={true}
      />
      <Button description="Cadastrar" />
      <div className="social-midia">
        <i>
          <BsGoogle />
        </i>
        <span>OU</span>
        <i>
          <BsFacebook />
        </i>
      </div>
      <span className="login-button pointer" onClick={() => toggleAuth()}>
        Login
      </span>
    </form>
  );
};

export default Register;
