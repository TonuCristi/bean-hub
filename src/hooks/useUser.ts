import { useQuery } from "@tanstack/react-query";

import { getLoggedUser } from "../services/apiUsers";

export function useUser() {
  const { data, isSuccess } = useQuery({
    queryKey: ["user"],
    queryFn: getLoggedUser,
  });

  return { data, isSuccess };
}
