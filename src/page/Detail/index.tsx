import React from 'react'
import {Link } from 'react-router-dom'
import { ContainerStyled, ContentStyeld } from './styles'

import { useSelector } from 'react-redux'
import Button from '../../components/Button'

const Detail = (props: any) => {
  const weather = useSelector((state: any) => state.weatherReducer.weather)

  return(
   <ContainerStyled>
    <ContentStyeld>
      <span>Minima:  {weather[1][0]} - {weather[1][1]}ºC</span><br/>
      <span>Máxima:  {weather[1][0]} - {weather[1][2]}ºC</span>
    </ContentStyeld>
    <Link to='/'><Button text='Voltar'/></Link>   
   </ContainerStyled> 
  )
}

export default Detail
