import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles"

const GradientBackground = styled.div`
  background: linear-gradient(100.61deg, #153a69 4.16%, #a9afb8 48%, #cfd7e0 96.76%);
  width: 100%;
  min-height: 100vh;
`

function App() {

  return (
    <GradientBackground>
      <GlobalStyles />
    </GradientBackground>
  )
}

export default App
