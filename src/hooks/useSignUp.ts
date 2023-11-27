import { useMutation } from '@tanstack/react-query';

import { API_URL } from '../constants/api';

const useSignUp = () => {
  const { mutate: signUp, ...rest } = useMutation({
    mutationFn: async (creds: any) => {
      const data = await fetch(`${API_URL}/sign-up/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(creds), // body data type must match "Content-Type" header
      });
      return data;
    },
  });

  return { signUp, ...rest };
};

export default useSignUp;
