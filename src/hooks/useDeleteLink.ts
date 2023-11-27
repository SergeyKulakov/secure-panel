import { useMutation } from '@tanstack/react-query';
import { prepareHeaders } from '../utils/auth';
import { API_URL } from '../constants/api';

const useDeleteLink = () => {
  const { mutate: deleteLink, ...rest } = useMutation({
    mutationFn: async ({ id }: { id: number | null }) => {
      const headers = await prepareHeaders();
      const dataLink = await fetch(
        `${API_URL}/links/${id}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            ...headers
          },
        }
      );
      return dataLink;
    },
  });

  return { deleteLink, ...rest };
};

export default useDeleteLink;
