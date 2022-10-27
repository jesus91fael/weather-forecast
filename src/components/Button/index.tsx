import React from "react";
import { ButtonProps } from "./interface";
import { ButtonStyled } from "./styles";

const Button = ({text, onClick}: ButtonProps) => {
  return(
    <ButtonStyled onClick={onClick}>{text}</ButtonStyled>
  )
}

export default Button