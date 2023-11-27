import { useEffect } from 'react';
import { Auth } from '@aws-amplify/auth';
import { CognitoUser, CognitoUserAttribute } from 'amazon-cognito-identity-js';

import { useAppDispatch } from './redux';
import { saveUserData } from '../redux/user/slice';

const useAuthCheck = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const cognitUser: CognitoUser = await Auth.currentAuthenticatedUser({
          bypassCache: true,
        });
        // console.log('cognitUser', cognitUser);
        // const token = cognitUser.signInUserSession.idToken.jwtToken;
        // console.log('token', token);
        const userInfo = await Auth.currentUserInfo();

        dispatch(saveUserData(userInfo));
      } catch (err) {
        dispatch(saveUserData(undefined));
      }
    };
    checkAuth();
  }, [dispatch]);
};

export default useAuthCheck;
