import { useQuery } from "@tanstack/react-query";

import { getLoggedUser } from "../services/apiUsers";

export function useUser() {
  const { data, isSuccess, error } = useQuery({
    queryKey: ["user"],
    queryFn: getLoggedUser,
  });

  return { data, isSuccess, error };
}
