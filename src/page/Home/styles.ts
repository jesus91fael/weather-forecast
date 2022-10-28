import styled from 'styled-components'

export const ContainerStyled = styled.div`
  display: flex ;
  flex-direction: column ;
  justify-content: center ;
  align-items: center ;
`

export const HeaderStyled = styled.header`
  display: flex ;
  flex-direction: row ;
  max-width: 400px ;
  padding: 10px ;
  margin-bottom: 40px ;

  @media only screen and (max-width: 400px) {
    flex-direction: column ;
    align-items: center ;
    padding: 0 ;
  }
`

export const FooterStyled = styled.footer`
  margin-top: 40px ;
`
