import styled from "styled-components";
import { SubmitHandler, useForm } from "react-hook-form";

import Button from "../../ui/Button";
import Input from "../../ui/Input";
import { NavLink } from "react-router-dom";
import { HiMiniXMark } from "react-icons/hi2";

import { User } from "../../services/apiUsers";
// import { UseMutateFunction } from "@tanstack/react-query";

type Props = {
  title: string;
  onClick: (e?: any) => void;
  onSubmitUser: any;
  // UseMutateFunction<any[], Error, User, unknown, any>
};

const Overlay = styled.div`
  width: 100%;
  height: 100vh;

  backdrop-filter: blur(10px);

  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledAuthentication = styled.div`
  width: 20%;
  padding: 4.8rem 2.4rem;

  background-color: #fff;
  border: 2px solid var(--color-teal-500);
  border-radius: 2.5rem;
`;

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

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  padding: 1.2rem;
  cursor: pointer;
`;

const Icon = styled(HiMiniXMark)`
  font-size: 3.2rem;
  color: var(--color-teal-500);
`;

export default function Authentication({
  title,
  onClick,
  onSubmitUser,
}: Props) {
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
    <Overlay>
      <StyledAuthentication>
        <Title>{title}</Title>

        <Form onSubmit={handleSubmit((data) => onSubmit(data as User))}>
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
          <CloseButton onClick={onClick}>
            <Icon />
          </CloseButton>
        </Form>
      </StyledAuthentication>
    </Overlay>
  );
}
