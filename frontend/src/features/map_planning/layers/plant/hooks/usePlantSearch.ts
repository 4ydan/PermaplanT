import { searchPlants } from '@/features/seeds/api/searchPlants';
import useDebouncedValue from '@/hooks/useDebouncedValue';
import { useQuery } from '@tanstack/react-query';
import { useCallback, useState } from 'react';

export function usePlantSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebouncedValue(searchTerm, 500);

  const { data } = useQuery(['plants/search', debouncedSearchTerm] as const, {
    queryFn: ({ queryKey: [, search] }) => searchPlants(search, 0),
    // prevent the query from being fetched again for the
    // same search term. plants are not expected to change
    staleTime: Infinity,
    // keep the previous data while the new data is being fetched, prevents flickering
    keepPreviousData: true,
  });

  const clearSearchTerm = useCallback(() => {
    setSearchTerm('');
  }, []);

  return {
    plants: data?.results ?? [],
    actions: {
      searchPlants: setSearchTerm,
      clearSearchTerm,
    },
  };
}