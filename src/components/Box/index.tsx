import React from "react"
import { BoxProps } from "./interface"
import { MainStyled, ColumnStyled, RowStyled, LineStyled, LineTempStyled } from "./styles"

const Box = ({title, temp, min, max, icon, description} : BoxProps) =>{
 return(
  <MainStyled>
    <ColumnStyled>
      <RowStyled>
      <LineStyled>{title}</LineStyled>
      <LineTempStyled>{temp} ºC</LineTempStyled>
      </RowStyled>
      <RowStyled>
        <LineStyled>Máx {max} ºC</LineStyled>
        <LineStyled>Mín {min} ºC</LineStyled>
      </RowStyled>
    </ColumnStyled>
    <ColumnStyled>
      <img src={icon} alt={description}/>
    </ColumnStyled>
  </MainStyled>
 )
}

export default Box
