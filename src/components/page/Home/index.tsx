import React, { useEffect, useState } from 'react';
import {Link } from 'react-router-dom'
import Box from '../../Box';
import Button from '../../Button';
import { HeaderStyled, ContainerStyled, FooterStyled } from './styles';
import { api } from '../../../Service/api';
// sp -23.526603154062983, -46.62095410262092
// rj -22.92365944894421, -43.18277388005018
// bh -19.908319594661467, -43.93631910577775

function Home() {

  const [post, setPost] = useState<any>();
  const [long, setLong] = useState('-23.483063401164245');
  const [lat, setLat] = useState('-46.661715598213945');
  const [title, setTitle] = useState('São Paulo')

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

  console.log('lat', lat)
  console.log('long', long)

  useEffect(() => {
    api
      .get(`/api/current?lat=${lat}&lon=${long}`)
      .then((response) => setPost(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [long, lat]);
  
  console.log(post)
  
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
        <Link to='/detalhe'><Button text='Mostrar Min/Máx' onClick={() => handleClick(3)}/></Link>   
        </FooterStyled>
    </ContainerStyled>
  );
}

export default Home;
