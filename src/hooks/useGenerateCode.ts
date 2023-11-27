import { useMutation } from '@tanstack/react-query';
import { prepareHeaders } from '../utils/auth';
import { API_URL } from '../constants/api';

type GenetatecodeCreds = {
  value: string;
  purpose: string;
  is_active: boolean;
};

const useGenerateCode = () => {
  const { mutate: generateCode, ...rest } = useMutation({
    mutationFn: async (creds: GenetatecodeCreds) => {
      const headers = await prepareHeaders();
      const data = await fetch(`${API_URL}/links/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...headers
        },
        body: JSON.stringify(creds),
      }).then((res) => res.json());
      return data;
    },
  });

  return { generateCode, ...rest };
};

export default useGenerateCode;
