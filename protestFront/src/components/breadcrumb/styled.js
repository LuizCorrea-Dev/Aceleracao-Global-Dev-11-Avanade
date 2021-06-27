import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  grid-column: col 3 / span 8;
`

export const List = styled.li`
  display: inline-block;
  list-style: none;
  margin: 20px 5px;
  font-size: 14px;
  & + &:before {
    color: rgb(230,81,0);
    content: '>';
    margin-right: 10px;
  }
`

export const LinkStyled = styled(Link)`
  text-decoration: none;
`

export const Span = styled.span`
  color: white;
  cursor: pointer;

  &:hover {
    color: #fff;
  }
`
