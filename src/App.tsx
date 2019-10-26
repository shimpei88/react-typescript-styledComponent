import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
  width: 100vw
  height: 100vh
  background: black
  display: flex
  justify-content: center
  align-items: center
`;

const Header = styled.h1 `
  color: white
  font-size: 3rem
`

const App: React.FC = () => {
  return (
    <Container>
      <Header>Hello styled-components</Header>
    </Container>
  );
}

export default App;
