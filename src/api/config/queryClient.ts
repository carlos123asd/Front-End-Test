import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60, // despues de 1 hora, se considera que los datos están obsoletos - refetch
      gcTime: 1000 * 60 * 60, // despues de 1 hora, se considera que los datos pueden ser eliminados de la cache
      retry: 1, // reintentar una vez en caso de error
      refetchOnWindowFocus: false, // no refetch al enfocar la ventana
    },
  },
});