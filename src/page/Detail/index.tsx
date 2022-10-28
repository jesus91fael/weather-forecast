import React from 'react';
import {Link } from 'react-router-dom'

import { connect, useSelector } from 'react-redux'
import Button from '../../components/Button';

const Detail = (props: any) => {
  const weather = useSelector((state: any) => state.weatherReducer.weather)
  console.log('aq', weather)
  return(
   <>
   <span>Min {weather[1][0]}ºC</span><br/>
   <span>Max {weather[1][1]}ºC</span>
    <Link to='/'><Button text='Voltar'/></Link>   
   </> 
  )
}

function mapStateToProps(state: any) {
	return {
		prop1: state.prop1,
}
}

export default connect(mapStateToProps)(Detail)