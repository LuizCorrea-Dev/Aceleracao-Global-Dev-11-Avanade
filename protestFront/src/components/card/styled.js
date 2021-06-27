import styled from 'styled-components'
import * as I from '@styled-icons/boxicons-regular'

export const Container = styled.div`
  display: flex;
  height: 90px;
  width: 80%;
  margin: 10px auto;


  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 420px) {
    width: 90%;
  }
`
export const DescriptionContainer = styled.div`
  box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  display: flex;
  align-items: start;
  flex-direction: column;
  width: 80%;
  background-color: rgb(255,243,224);

`

export const Author = styled.p`
  color: rgb(230,81,0);
  font-size: 1.7rem;
  padding: 10px;
`

export const Description = styled.p`
  color: black;
  font-size: 1.5rem;
  padding: 10px;
`

export const IconContainer = styled.div`
  box-shadow: 0 8px 1px 0 rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.08);
  background-color: rgba(255,243,224,0.9);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  width: 12%;

  @media (max-width: 768px) {
    width: 15%;
  }

  @media (max-width: 768px) {
    width: 20%;
  }
`

export const Like = styled(I.Like)`
  color: green;
  width: 20px;
  cursor: pointer;

  &:hover{
    width: 30px;
    transition: 0.5s all;
  }

`

export const Dislike = styled(I.Dislike)`
  color: red;
  width: 20px;
  cursor: pointer;

  &:hover{
    width: 30px;
    transition: 0.5s all;
  }
`

export const Cont = styled.p`
  color: black;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  margin: 10px;
`
