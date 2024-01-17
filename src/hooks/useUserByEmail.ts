import { useQuery, useQueryClient } from "@tanstack/react-query";

import { getUserByEmail } from "../services/apiUsers";

export function useUserByEmail(email?: string) {
  const queryClient = useQueryClient();
  const dataUser: any = queryClient.getQueryData(["user"]);

  const { data, isSuccess, error } = useQuery({
    queryKey: ["userByEmail"],
    queryFn: () => getUserByEmail(dataUser?.user.email || email),
  });

  return { data, isSuccess, error };
}
