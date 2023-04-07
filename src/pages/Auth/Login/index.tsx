import React from "react";
import Input from "../../../components/Input";
import "./index.sass";

import { AiOutlineMail } from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";
import { BsGoogle, BsFacebook } from 'react-icons/bs'
import Button from "../../../components/Button";

interface LoginProps {
  toggleAuth: () => void
}

const Login: React.FC<LoginProps> = ({
  toggleAuth
}) => {
  return (
    <form style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }}>
      <h1>Bem-vindo</h1>
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
      <span className="forgot-password pointer">Esqueci minha senha</span>
      <Button description="Login" />
      <span className="register pointer">
        Não tem uma conta? 
        <span onClick={() => toggleAuth()}> Registre-se</span>
      </span>
      <div className="social-midia">
        <i><BsGoogle /></i>
        <span>OU</span>
        <i><BsFacebook /></i>
      </div>
    </form>
  );
};

export default Login;
