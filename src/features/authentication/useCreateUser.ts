import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { createUser } from "../../services/apiUsers";

export function useCreateUser() {
  const navigate = useNavigate();

  const { mutate: signUp, isError } = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      navigate("/");
    },
    onError: () => toast.error("User creating went wrong!"),
  });

  return { signUp, isError };
}
