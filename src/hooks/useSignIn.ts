import { Auth } from '@aws-amplify/auth';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { setPassword as setPasswordRoute } from '../routes/constants';
import { saveResetPasswordData } from '../redux/auth/slice';
import { useAppDispatch } from './redux';

const useSignIn = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { mutate, ...rest } = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) => {
      return Auth.signIn(email, password);
    },
    onSuccess: async (user, { email, password }) => {
      if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
        dispatch(saveResetPasswordData({ email, code: password }));
        navigate(setPasswordRoute);
      }
    },
  });
  const signIn = async (email: string, password: string) => {
    try {
      mutate({ email, password });
    } catch (error) {
      console.log('ERROR', error);
    }
  };

  return { signIn, ...rest };
};

export default useSignIn;
