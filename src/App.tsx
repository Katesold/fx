import { useState } from 'react';
import { StyledContainer } from './components/Table/styles';
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyle from './components/global';
import { AppContainer } from './AppContainer';
import { TableContainer } from './components/Table/TableContainer';
import { UploadContainer } from './components/Upload/UploadContainer';

function App() {
  const [data, setData] = useState([] as string[]);

  return (
    <>
      <GlobalStyle />
        <AppContainer>
          <UploadContainer uploadPayments={setData} />
          {data.length > 0 ? <TableContainer data={data}/> : null}
          <StyledContainer theme='colored' />
        </AppContainer>
    </>
  );
}

export default App;
