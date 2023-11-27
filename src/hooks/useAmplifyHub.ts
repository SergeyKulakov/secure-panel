/* eslint-disable indent */
import { useEffect } from 'react';
import { Hub } from '@aws-amplify/core';
import { Auth } from '@aws-amplify/auth';
import { useAppDispatch } from './redux';
import { saveUserData } from '../redux/user/slice';
import { useNavigate } from 'react-router-dom';
import { console as consoleRoute } from '../routes/constants';

const useAmplifyHub = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  useEffect(() => {
    const unsubscribe = Hub.listen('auth', async ({ payload: { event } }) => {
      switch (event) {
        case 'signIn':
          try {
            const userInfo = await Auth.currentUserInfo();
            dispatch(saveUserData(userInfo));
            navigate(consoleRoute, { replace: true });
          } catch (err) {
            // console.log('Get User Error:', err);
          }
          break;
      }
    });

    return unsubscribe;
  }, [dispatch]);
};

export default useAmplifyHub;
