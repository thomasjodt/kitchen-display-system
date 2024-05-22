import { styled } from 'styled-components'
export const App: React.FC = function App () {
  return (
    <Wrapper>
      hola, mundo
    </Wrapper>
  )
}

const Wrapper = styled.main`
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
`
