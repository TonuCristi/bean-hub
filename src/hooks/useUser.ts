import { useQuery } from "@tanstack/react-query";

import { getUser } from "../services/apiUsers";

export function useUser(userId: number) {
  const { data: user } = useQuery({
    queryKey: [`user${userId}`],
    queryFn: () => getUser(userId),
  });

  return { user };
}
