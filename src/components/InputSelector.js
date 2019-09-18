import React from 'react'
import styled from 'styled-components'
import { StyledIcon } from '../styles/StyledComponents'

const searchOptions = ['Latitude and longitude', 'City name']

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const StyledSelect = styled.select`
  border-radius: 0.5rem;
  border: 1px solid black;
  background-color: white;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 0.5rem 0.7rem;
  width: 30rem;
`

// const


export default function InputSelector (props) {
  return (
    <Container>
      <StyledSelect onChange={props.handleChange} name='inputType'>
        {!props.inputType && <option>Choose a search type</option>}
        {searchOptions.map(option => (
          <option value={option} key={option}>{option}</option>
        ))}
      </StyledSelect>
      <StyledIcon className='material-icons'>expand_more</StyledIcon>
    </Container>
  )
}
