import { MsalProvider, MsalAuthenticationTemplate } from '@azure/msal-react';
import { PublicClientApplication } from '@azure/msal-browser';
import { msalConfig } from './authConfig';
import MyComponent from './MyComponent';

const pca = new PublicClientApplication(msalConfig);

function App() {
  return (
    <MsalProvider instance={pca}>
        <h1>Graph Api</h1>
        <MyComponent/>
    </MsalProvider>
  );
}

export default App;
