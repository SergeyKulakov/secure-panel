import { useMutation } from '@tanstack/react-query';
import { prepareHeaders } from '../utils/auth';
import { API_URL } from '../constants/api';

const useDisableEnableLink = () => {
  const { mutate: disableEnableLink, ...rest } = useMutation({
    mutationFn: async ({ id, isActive }: { id: number; isActive: boolean }) => {
      const headers = await prepareHeaders();
      const dataLink = await fetch(
        `${API_URL}/links/${id}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            ...headers
          },
          body: JSON.stringify({ is_active: isActive }),
        }
      );
      return dataLink;
    },
  });

  return { disableEnableLink, ...rest };
};

export default useDisableEnableLink;
