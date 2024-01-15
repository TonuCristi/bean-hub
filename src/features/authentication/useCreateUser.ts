import { Dispatch, SetStateAction } from "react";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { createUser } from "../../services/apiUsers";

import { IsOpen } from "../../ui/Header";

export function useCreateUser(setIsOpen: Dispatch<SetStateAction<IsOpen>>) {
  const { mutate: signUp, isError } = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      setIsOpen({
        signUp: false,
        signIn: false,
      });
      toast.success("User created succesfully!");
    },
    onError: () => toast.error("User creating went wrong!"),
  });

  return { signUp, isError };
}
