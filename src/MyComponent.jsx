import { useMsal } from '@azure/msal-react';
import axios from 'axios';
import { endPoints, loginRequest } from './authConfig';

function MyComponent() {
  const { instance, accounts } = useMsal();

  const signIn = async () => {
    const response = await instance.loginPopup(loginRequest);

    const accessToken = response.accessToken;

    console.log(accessToken);

    // Make API calls using the access token
    // Example: Fetch user profile
    try {
      const apiResponse = await axios.get(endPoints.graphMeEndPoint, {
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

  const signOut = async () => {
     await instance.logoutPopup(loginRequest)
     .then(()=>{
      console.log("logged out");
     })
     .catch((err)=>{
      console.log(err);
     })
  }

  return (
    <div>
      <button onClick={signIn}>SignIn</button>
      <button onClick={signOut}>SignOut</button>
    </div>
  );
}

export default MyComponent
