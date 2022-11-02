import GlobalStyle from "./components/global";
import { AppContainer } from './AppContainer';
import { Button } from './components/Button/Button';
import { Table } from "./components/Table/Table";
function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Table data={[{
              name: 'test',
              id: 'test1',
              amount: 10,
              currency: '£',
              reference: '124',
        }]}/>
        <Button text="Button Text" />
      </AppContainer>
    </>
  );
}

export default App;
