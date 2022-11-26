import styled from "styled-components";
import AppContainer from "./components/AppContainer";
import { GlobalStyle } from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <StyleAppContainer>
        <AppContainer />
      </StyleAppContainer>
    </>
  );
}

export default App;

const StyleAppContainer = styled.div`
  margin: auto;
  padding: 0.8rem;
  min-width: 320px;
  max-width: 1200px;
  height: 100vh;
  display: flex;
`;
