import { Auth } from '@aws-amplify/auth';
import { useMutation } from '@tanstack/react-query';
import { useAppDispatch } from './redux';
import { saveUserData } from '../redux/user/slice';

const useSignOut = () => {
  const dispatch = useAppDispatch();
  const { mutate: signOut, ...rest } = useMutation({
    mutationFn: () => {
      return Auth.signOut();
    },
    onSuccess: () => {
      dispatch(saveUserData(undefined));
    },
  });

  return { signOut, ...rest };
};

export default useSignOut;
