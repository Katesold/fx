import { createContext, useState } from 'react';
import GlobalStyle from "./components/global";
import { AppContainer } from './AppContainer';
import { TableContainer } from './components/Table/TableContainer';
import { UploadContainer } from './components/Upload/UploadContainer';
import { ResponseData } from './components/Table/types';

export interface AppCtx {
  data: string[],
  uploadPayments: React.Dispatch<React.SetStateAction<string[]>>
}

export const AppContext = createContext<AppCtx | null>(null);

function App() {
  const [data, setData] = useState([] as string[]);

  const providerValues = {
    data,
    uploadPayments: setData
  }

  return (
    <>
      <GlobalStyle />
      <AppContext.Provider value={providerValues} >
        <AppContainer>
          <UploadContainer />
          <TableContainer />
        </AppContainer>
      </AppContext.Provider>
    </>
  );
}

export default App;
