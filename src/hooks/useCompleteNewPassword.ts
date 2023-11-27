import { Auth } from '@aws-amplify/auth';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { console as consoleRoute } from '../routes/constants';

type CompleteNewPasswordSubmit = {
  email: string;
  password: string;
  tempPassword: string;
};

const useCompleteNewPassword = () => {
  const navigate = useNavigate();
  const { mutate: completeNewPassword, ...rest } = useMutation({
    mutationFn: async ({
      email,
      password,
      tempPassword,
    }: CompleteNewPasswordSubmit) => {
      const user = await Auth.signIn(email, tempPassword);

      if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
        await Auth.completeNewPassword(user, password);
      }
      navigate(consoleRoute);
    },
  });

  return { completeNewPassword, ...rest };
};

export default useCompleteNewPassword;
