export const msalConfig = {
    auth: {
      clientId: process.env.REACT_APP_MSAL_CLIENT_ID,
      authority: `https://login.microsoftonline.com/${process.env.REACT_APP_MSAL_TENANT_ID}`,
      redirectUri: 'http://localhost:3000', // The redirect URI of your app
    },
    cache: {
      cacheLocation: 'sessionStorage', // This configures where your cache will be stored
      storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
  };

  export const loginRequest = {
    scopes:["User.Read"]
  }

  export const endPoints ={
    graphMeEndPoint:"https://graph.microsoft.com/v1.0/me"
  }
  