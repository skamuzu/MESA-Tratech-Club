import { useQuery } from "@tanstack/react-query"
import { getUserData } from "./api"

export const useUser = () => useQuery({
    queryKey: ["user"],
    queryFn: () => getUserData(),
    staleTime: 10 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: false,
})