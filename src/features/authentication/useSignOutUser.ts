import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { signOutUser } from "../../services/apiUsers";

export function useSignOutUser() {
  const queryClient = useQueryClient();

  const {
    mutate: signOut,
    isSuccess,
    isError,
  } = useMutation({
    mutationFn: signOutUser,
    onSuccess: () => toast.success("Signed out successfully!"),
    onError: () => toast.error("Something went wrong with signing out!!"),
  });

  queryClient.removeQueries({ queryKey: ["user"], exact: true });

  return { signOut, isSuccess, isError };
}
