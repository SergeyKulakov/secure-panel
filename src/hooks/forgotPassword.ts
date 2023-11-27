import { Auth } from '@aws-amplify/auth';
import { useMutation } from '@tanstack/react-query';

type ForgotPasswordSubmit = {
  email: string;
  code: string;
  newPassword: string;
};

export const useForgotPassword = () => {
  const { mutate: requestRecoveryCode, ...rest } = useMutation({
    mutationFn: ({ email }: { email: string }) => {
      return Auth.forgotPassword(email);
    },
  });

  return { requestRecoveryCode, ...rest };
};

export const useForgotPasswordSubmit = () => {
  const { mutate: forgotPasswordSubmit, ...rest } = useMutation({
    mutationFn: (args: ForgotPasswordSubmit) => {
      const { email, code, newPassword } = args;
      return Auth.forgotPasswordSubmit(email, code, newPassword);
    },
  });

  return { forgotPasswordSubmit, ...rest };
};
