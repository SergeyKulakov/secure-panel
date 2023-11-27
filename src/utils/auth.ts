import { Auth } from '@aws-amplify/auth';

export const getAuthToken = async () => {
  const session = await Auth.currentSession();
  const accessToken = session.getAccessToken();
  const token = accessToken.getJwtToken();
  return token;
};

export const prepareHeaders = async () => {
  const token = await getAuthToken();
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  return headers;
};
