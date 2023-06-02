import { MsalProvider, MsalAuthenticationTemplate } from '@azure/msal-react';
import { PublicClientApplication } from '@azure/msal-browser';
import { msalConfig } from './authConfig';

const pca = new PublicClientApplication(msalConfig);

function App() {
  return (
    <MsalProvider instance={pca}>
      <MsalAuthenticationTemplate>
        <h1>Graph Api</h1>
      </MsalAuthenticationTemplate>
    </MsalProvider>
  );
}

export default App;
