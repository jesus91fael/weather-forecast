import styled from 'styled-components'

export const MainStyled = styled.main`
  display: flex;
  align-items: center ;
  justify-content: center ;
  flex-direction: row ;
  width: 300px ;
  border-radius: 10px ;
  border: 1px solid #836FFF;
  padding: 10px ;
  font-size: 14px ;

  @media only screen and (max-width: 350px) {
    max-width: 250px ;
  }
`

export const ColumnStyled = styled.div`
  display: flex ;
  flex-direction: column ;  
  padding: 10px ;
  width: 200px ;

  @media only screen and (max-width: 350px) {
    max-width: 150px ;
  }
`

export const RowStyled = styled.div`
  display: flex ;
  flex-direction: column ;
  align-items: center ;
  padding: 10px 0;
`

export const LineStyled = styled.span`
  margin: 5px 0 ;
`

export const LineTempStyled = styled.span`
  font-size: 22px;
`
