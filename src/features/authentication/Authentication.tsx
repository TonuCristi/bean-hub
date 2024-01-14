import styled from "styled-components";

import Button from "../../ui/Button";
import Input from "../../ui/Input";
import { NavLink } from "react-router-dom";
import { HiMiniXMark } from "react-icons/hi2";

type Props = {
  title: string;
  onClick: (e?: any) => void;
};

const Overlay = styled.div`
  width: 100%;
  height: 100vh;

  /* background: rgba(0, 0, 0, 0.8); */
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

export default function Authentication({ title, onClick }: Props) {
  return (
    <Overlay>
      <StyledAuthentication>
        <Title>{title}</Title>

        <Form>
          <Input
            type="text"
            placeholder="Full name"
            variant="regular"
            required={true}
          />
          <Input
            type="email"
            placeholder="Email"
            variant="regular"
            required={true}
          />
          <Input
            type="password"
            placeholder="Password"
            variant="regular"
            required={true}
          />
          <ForgotPassword to="/">Forgot password?</ForgotPassword>

          <Button variant="regular">{title}</Button>
          <CloseButton onClick={onClick}>
            <Icon />
          </CloseButton>
        </Form>
      </StyledAuthentication>
    </Overlay>
  );
}
