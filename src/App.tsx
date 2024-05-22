import { styled } from 'styled-components'
export const App: React.FC = function App () {
  return (
    <Wrapper>
      <Title>Kitchen Display System</Title>
      <Container>
        p
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  display: grid;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
  color: #fafafa;
  background-color: #353A47;
`
const Title = styled.h1`
  padding: 24px;
  margin-bottom: 48px;
`
const Container = styled.section`
  height: 100%;
`
