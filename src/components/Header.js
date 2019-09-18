import React from 'react'
import styled from 'styled-components'
import logo from '../../static/images/umbrella.png'

const Container = styled.div`
  background-color: pink;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5rem;
  padding: 3rem;
`

const StyledImage = styled.img`
  max-width: 5rem;
`

export default function Header () {
  return (
    <Container>
      <StyledImage src={logo} />
    </Container>
  )
}
