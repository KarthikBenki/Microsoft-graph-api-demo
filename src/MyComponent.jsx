import { useMsal } from '@azure/msal-react';
import axios from 'axios';

function MyComponent() {
  const { instance, accounts } = useMsal();

  const callGraphApi = async () => {
    const response = await instance.acquireTokenSilent({
      scopes: ['User.Read'], // Add the required scopes for the API call
      account: accounts[0], // Use the first signed-in account
    });

    const accessToken = response.accessToken;

    // Make API calls using the access token
    // Example: Fetch user profile
    try {
      const apiResponse = await axios.get('https://graph.microsoft.com/v1.0/me', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      
      const userProfile = apiResponse.data;
      console.log(userProfile);
    } catch (error) {
      console.error('Error calling Microsoft Graph API:', error);
    }
  };

  return (
    <div>
      <button onClick={callGraphApi}>Call Microsoft Graph API</button>
    </div>
  );
}

export default MyComponent
