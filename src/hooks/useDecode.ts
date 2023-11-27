import { useMutation } from '@tanstack/react-query';

import { API_URL } from '../constants/api';

const useDecode = () => {
  const { mutate: decode, ...rest } = useMutation({
    mutationFn: async (creds: DecodeCredits) => {
      const data = await fetch(`${API_URL}/decode/${creds.code}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => res.json());
      return data;
    },
  });

  return { decode, ...rest };
};

export default useDecode;
