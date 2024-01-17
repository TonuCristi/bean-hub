import styled from "styled-components";
import { SubmitHandler, useForm } from "react-hook-form";

import Button from "../../ui/Button";
import Input from "../../ui/Input";
import { NavLink } from "react-router-dom";

import { User } from "../../services/apiUsers";

type Props = {
  title: string;
  onSubmitUser: any;
};

const Title = styled.h3`
  text-align: center;
  color: var(--color-teal-500);
  margin-bottom: 2.4rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ForgotPassword = styled(NavLink)`
  font-size: 1.2rem;
  color: var(--color-gray-400);
  margin-bottom: 2.4rem;
  text-decoration: none;
`;

export default function AuthenticationForm({ title, onSubmitUser }: Props) {
  const { register, handleSubmit } = useForm();
  const onSubmit: SubmitHandler<User> = (data) => {
    if (title === "Sign up") onSubmitUser(data);

    if (title === "Sign in")
      onSubmitUser({
        email: data.email,
        password: data.password,
      });
  };

  return (
    <Form onSubmit={handleSubmit((data) => onSubmit(data as User))}>
      <Title>{title}</Title>
      {title === "Sign up" && (
        <Input
          type="text"
          placeholder="Full name"
          variant="regular"
          register={register("name", {
            required: true,
            minLength: 5,
            maxLength: 40,
          })}
        />
      )}
      <Input
        type="email"
        placeholder="Email"
        variant="regular"
        register={register("email")}
      />
      <Input
        type="password"
        placeholder="Password"
        variant="regular"
        register={register("password")}
      />

      {title !== "Sign up" && (
        <ForgotPassword to="/">Forgot password?</ForgotPassword>
      )}

      <Button variant="regular">{title}</Button>
    </Form>
  );
}
