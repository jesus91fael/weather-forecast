import React from 'react'
import {Link } from 'react-router-dom'
import Button from '../../Button'

const Detail = ({max, min}: any) => {
  return(
   <>
    Máx {max}ºC
    Min {min}ºC
    <Link to='/'><Button text='Voltar'/></Link>   

   </> 
  )
}

export default Detail