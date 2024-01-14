import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { createPost } from "../../services/apiPosts";

export function useCreatePost() {
  const queryClient = useQueryClient();

  const { mutate: addPost, isPending: isCreating } = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      toast.success("Post added succesfully!");
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
    onError: () => {
      toast.error("Something went wrong...");
    },
  });

  return { addPost, isCreating };
}
