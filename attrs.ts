//https://codesandbox.io/s/x7y0jw4ooo

import ReactDOM from 'react-dom'
import styled from 'styled-components'

// Attrs
const Red = styled('div').attrs({
  color: props => props.color || 'red'
})`
  color: ${props => props.color};
`

const Blue = styled(Red).attrs({
  color: props => props.color || 'blue'
})``

const Green = Blue

// Default Props

const Text = styled('div')`
  color: ${props => props.color};
`
Text.defaultProps = {
  color: 'red'
}

const BG = styled(Text)`
  background-color: ${props => props.bg};
`
BG.defaultProps = {
  bg: 'lightgrey'
}

function App() {
  return (
    <div className="App">
      <h1>Attrs</h1>
      <Red>Red</Red>
      <Blue>I wanna be blue</Blue>
      <Green color="green">Green</Green>
      <h1>defaultProps</h1>
      <Text>Red text</Text>
      <BG>I wanna be red</BG>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
