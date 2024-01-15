import { useMutation } from "@tanstack/react-query";
import { signInUser } from "../../services/apiUsers";
import toast from "react-hot-toast";

export function useSignUser() {
  const { mutate: signIn, isError } = useMutation({
    mutationFn: signInUser,
    onSuccess: () => toast.success("Succesfully signed in!"),
    onError: () => toast.error("Something went wrong with signing in!"),
  });

  return { signIn, isError };
}
