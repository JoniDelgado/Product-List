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
  width: min(100vw, 1280px);
  height: 100vh;
  display: flex;
`;
