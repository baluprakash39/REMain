// import React, { createContext, useContext, useState } from 'react';
// import * as Keychain from 'react-native-keychain';

// const AuthContext = createContext(null);

// const AuthProvider = ({ children }) => {
//   const [authState, setAuthState] = useState({
//     accessToken: null,
//     refreshToken: null,
//     authenticated: null,
//     isRefreshingToken: false,
//   });

//   const logout = async () => {
//     await Keychain.resetGenericPassword();
//     setAuthState({
//       accessToken: null,
//       refreshToken: null,
//       authenticated: false,
//       isRefreshingToken: false,
//     });
//   };

//   const getAccessToken = () => {
//     return authState.accessToken;
//   };

//   const handleTokenRefresh = async (deviceId) => {
//     if (authState.isRefreshingToken) {
//       // Prevent concurrent token refreshes
//       return;
//     }

//     if (!authState.accessToken) {
//       console.error('Token is missing. Please log in or fetch the token.');
//       return;
//     }

//     if (isAccessTokenExpired(authState.accessToken)) {
//       try {
//         setAuthState({ ...authState, isRefreshingToken: true });

//         // Make a request to the refresh-token endpoint using the refresh token
//         const refreshTokenResponse = await fetch('https://dull-plum-woodpecker-veil.cyclic.cloud/registerPhoneNumber/refresh-token', {
//           method: 'POST',
//           headers: {
//             'Authorization': `Bearer ${authState.refreshToken}`,
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             'device_id': deviceId,
//           }),
//         });

//         if (refreshTokenResponse.ok) {
//           const newAccessToken = await refreshTokenResponse.json();
//           if (newAccessToken && newAccessToken.access_token) {
//             setAuthState({
//               ...authState,
//               accessToken: newAccessToken.access_token,
//               isRefreshingToken: false,
//             });
//             console.log('Access token refreshed successfully.');
//           } else {
//             console.error('Refresh token response is missing access_token.');
//           }
//         } else {
//           console.error('Failed to refresh access token:', refreshTokenResponse.statusText);
//         }
//       } catch (error) {
//         console.error('Failed to refresh access token:', error);
//       }
//     }
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         authState,
//         getAccessToken,
//         handleTokenRefresh,
//         logout,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export { AuthContext, AuthProvider };
