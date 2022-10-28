import React, { useEffect, useState } from 'react';
import {Link } from 'react-router-dom'
import { HeaderStyled, ContainerStyled, FooterStyled } from './styles';
import { api } from '../../Service/api';
import Button from '../../components/Button';
import Box from '../../components/Box';
import {addWeather} from '../../storeConfig/store'
import { useDispatch } from 'react-redux';

function Home() {
  const [post, setPost] = useState<any>();
  const [long, setLong] = useState('-23.483063401164245');
  const [lat, setLat] = useState('-46.661715598213945');
  const [title, setTitle] = useState('São Paulo')
  const dispatch = useDispatch()
  const handleClick = (id : number) => {
    switch(id){
      case 1:
        setLong("-23.526603154062983")
        setLat("-46.62095410262092")
        setTitle('São Paulo')
        break
      case 2:
        setLong("-22.92365944894421")
        setLat("-43.18277388005018")
        setTitle('Rio de Janeiro')
        break
      case 3:
        setLong("-19.908319594661467")
        setLat("-43.93631910577775")
        setTitle('Belo Horizonte')
        break
      default:
        setLong("-23.483063401164245")
        setLat("-46.661715598213945")
        setTitle('São Paulo')
        break
    }    
  }  

  useEffect(() => {
    api
      .get(`/api/current?lat=${lat}&lon=${long}`)
      .then((response) => setPost(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      })      
      
      

  }, [long, lat]);

  useEffect(() => {
  dispatch(
    addWeather([
      post?.main.temp_min,
      post?.main.temp_max
    ])
  )
  },[dispatch, post])
  
  console.log('post', post?.main.temp_max)
  
  return (
    <ContainerStyled> 
      <HeaderStyled>
        <Button text='São Paulo' onClick={() => handleClick(1)}/>
        <Button text='Rio de Janeiro' onClick={() => handleClick(2)}/>
        <Button text='Belo Horizonte' onClick={() => handleClick(3)}/>      
      </HeaderStyled> 
        <Box 
          title={title} 
          temp={post?.main.temp} 
          min={post?.main.temp_min} 
          max={post?.main.temp_max} 
          icon={post?.weather[0].icon} 
          description={post?.weather[0].description}
        />
        <FooterStyled>
        <Link to='/detalhe'><Button text='Mostrar Min/Máx' /></Link>   
        </FooterStyled>
    </ContainerStyled>
  );
}


export default Home
