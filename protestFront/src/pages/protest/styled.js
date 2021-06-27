import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

`

export const Form = styled.form`
  display: grid;
  border-radius: 8px;
  width: 83%;
  padding-top: 5px;
  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 420px) {
    width: 90%;
  }
`

export const Title = styled.h1`
  color: rgb(255,243,224);
  text-align: center;
  font-size: 2.5rem;
`

