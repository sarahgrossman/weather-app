import styled from 'styled-components'

export const MarginContainer = styled.div`
  margin: ${props => props.margin ? props.margin : 'unset'};
`

export const FlexContainer = styled(MarginContainer)`
  display: flex;
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  flex-direction: ${props => props.flexDirection ? props.flexDirection : 'row'};
  align-items: ${props => props.alignCenter ? 'center' : 'unset'};
`

const IconComponent = MarginContainer.withComponent('i')

export const StyledIcon = styled(IconComponent)`
  position: absolute;
  z-index: 5;
  right: 0.5rem;
  cursor: pointer;
  pointer-events: none;
`
