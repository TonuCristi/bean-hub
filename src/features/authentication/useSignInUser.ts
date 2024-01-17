import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { signInUser } from "../../services/apiUsers";

export function useSignUser() {
  const navigate = useNavigate();

  const { mutate: signIn, isError } = useMutation({
    mutationFn: signInUser,
    onSuccess: () => {
      navigate("/");
    },
    onError: () => toast.error("Something went wrong with signing in!"),
  });

  return { signIn, isError };
}
