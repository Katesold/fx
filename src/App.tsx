import { useState } from 'react';
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
        </AppContainer>
    </>
  );
}

export default App;
