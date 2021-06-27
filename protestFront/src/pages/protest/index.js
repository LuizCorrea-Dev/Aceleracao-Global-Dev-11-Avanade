import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Container from 'components/container'
import Input from 'components/input'
import Breadcrumb from 'components/breadcrumb'
import Card from 'components/card'
import Button from 'components/button'
import * as S from './styled'
import LogoMenor from '../../components/logoMenor'

import { postProtest, fetchProtest, likeAction, dislikeAction } from './actions'

const Protest = () => {
  const [values, setValues] = useState({ message: '' })
  const dispatch = useDispatch()
  const protests = useSelector(
    (state) => state.protestsReducers.result
  )

  useEffect(() => {
    dispatch(fetchProtest())
  }, [dispatch])

  const inputChange = (e) => {
    const { name, value } = e.target

    setValues({
      ...values,
      [name]: value
    })
  }

  const handleKeyDown = (e) => {
    const { name, value } = e.target
    const user = localStorage.getItem('@DioEvent:username')

    if (e.key === 'Enter') {
      e.preventDefault()
      setValues({ ...values, [name]: value })
      dispatch(postProtest(user, values.message))
      setValues({ message: '' })
    }
  }

  const submitForm = () => {
    const user = localStorage.getItem('@DioEvent:username')
    dispatch(postProtest(user, values.message))
    setValues({ message: '' })
  }

  const allProtests = protests || []
  return (
    <Container>
      <Breadcrumb />
      <S.Main>

        <LogoMenor/>
        <S.Form>

          <Input
            name="message"
            onChange={inputChange}
            onKeyDown={handleKeyDown}
            placeholder="Enviar protesto"
            value={values.message}
          />
          <Button
            backgroundColor="rgb(230,81,0)"
            onClick={submitForm}
            type="button"
          >
            Enviar
          </Button>
        </S.Form>
        {
          allProtests.map(protest => (
            <Card
              likeAction={likeAction}
              like={protest.like}
              dislikeAction={dislikeAction}
              dislike={protest.dislike}
              dispatch={dispatch}
              id={protest.id}
              user={protest.user}
              key={protest.id}
              message={protest.message}
            />
          ))
        }
      </S.Main>
    </Container>
  )
}

export default Protest
