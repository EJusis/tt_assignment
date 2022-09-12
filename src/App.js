import GlobalStyles from "./components/styles/GlobalStyles";
import { ContainerBody } from "./components/styles/ContainerBody.styled";
import MainReceiptsComponent from "./components/MainReceiptsComponent";
import BottomTotalComponent from "./components/BottomTotalComponent";


function App() {
  return (
      <>
          <GlobalStyles />
          <ContainerBody>
              <MainReceiptsComponent />
              <BottomTotalComponent />
          </ContainerBody>
      </>

  );
}

export default App;

