import { useQuery } from '@tanstack/react-query';
import { prepareHeaders } from '../utils/auth';
import { API_URL } from '../constants/api';

type GetLinksQueryParams = {
  search: string;
  limit: number;
  offset: number;
};

const useGetLinks = (args: GetLinksQueryParams) => {
  const result = useQuery<ResultPage<Link>, unknown>({
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    queryKey: ['links', args],
    queryFn: async () => {
      const { search = '', offset = 0, limit = 50 } = args;

      const params: string | string[][] | Record<string, string> | URLSearchParams | undefined = {
        search,
        offset: offset.toString(),
        limit: limit.toString(),
      };

      const headers = await prepareHeaders();
      const init = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          ...headers
        },
      };

      const data = await fetch(
        `${API_URL}/links/` +
          '?' +
          ( new URLSearchParams(params)).toString(),
        init
      ).then((res) => res.json());

      return data;
    },
  });

  return result;
};

export default useGetLinks;
