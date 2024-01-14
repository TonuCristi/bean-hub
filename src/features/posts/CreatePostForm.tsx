import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect } from "react";
import styled from "styled-components";
import toast from "react-hot-toast";

import AvatarImage from "../../ui/AvatarImage";
import Button from "../../ui/Button";

import { useCreatePost } from "./useCreatePost";

interface FormInput {
  content: string;
}

const StyledCreatePostForm = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2.4rem;
  background-color: #fff;
  padding: 2.4rem;
  border-radius: 0.9rem;
  box-shadow: 0rem 1.2rem 1.2rem var(--color-gray-200);
  margin-bottom: 2.4rem;
`;

const Form = styled.form`
  display: flex;
  align-items: flex-start;
  gap: 2.4rem;
`;

const Input = styled.textarea`
  width: 100%;
  height: 7rem;
  padding: 1.2rem;
  border: 2px solid var(--color-gray-200);
  border-radius: 0.9rem;
  background: none;
  font-family: inherit;
  font-size: 1.6rem;
  font-weight: 500;
  outline: none;
  resize: none;
`;

// const Button = styled.button`
//   align-self: flex-start;
//   border: none;
//   background-color: var(--color-teal-500);
//   color: #fff;
//   font-family: inherit;
//   font-size: 1.6rem;
//   font-weight: 500;
//   padding: 1.2rem 2.4rem;
//   border-radius: 0.9rem;
//   cursor: pointer;
// `;

export default function CreatePostForm() {
  const { addPost, isCreating } = useCreatePost();

  const { register, handleSubmit, reset, formState } = useForm<FormInput>();
  const onSubmit: SubmitHandler<FormInput> = (data) => {
    if (!data.content) {
      return toast.error("You have to write something...");
    }
    addPost({ content: data.content, userId: 1 });
  };

  useEffect(() => {
    reset({
      content: "",
    });
  }, [formState.isSubmitSuccessful, reset]);

  return (
    <StyledCreatePostForm onSubmit={handleSubmit(onSubmit)}>
      <AvatarImage
        src="https://bycbloluzgweztroyymv.supabase.co/storage/v1/object/public/avatars/user-4.jpg"
        variant="regular"
      />
      <Form>
        <Input
          placeholder="What are you thinking?"
          disabled={isCreating}
          {...register("content")}
        />

        <Button disabled={isCreating} variant="regular">
          Post
        </Button>
      </Form>
    </StyledCreatePostForm>
  );
}
