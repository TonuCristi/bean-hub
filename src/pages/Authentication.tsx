import { useState } from "react";
import styled from "styled-components";

import AuthenticationForm from "../features/authentication/AuthenticationForm";
import Button from "../ui/Button";

import { useCreateUser } from "../features/authentication/useCreateUser";
import { useSignUser } from "../features/authentication/useSignInUser";

export type IsOpen = {
  signUp: boolean;
  signIn: boolean;
};

const Overlay = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Buttons = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-bottom: 2.4rem;
`;

const StyledAuthentication = styled.div`
  width: 20%;
  padding: 4.8rem 2.4rem;

  background-color: #fff;
  border: 2px solid var(--color-teal-500);
  border-radius: 2.5rem;
`;

export default function Authentication() {
  const [formName, setFormName] = useState<string>("Sign up");
  const { signUp } = useCreateUser();
  const { signIn } = useSignUser();

  function handleClick(state: string) {
    setFormName(state);
  }

  return (
    <Overlay>
      <Buttons>
        <Button variant="regular" onClick={() => handleClick("Sign up")}>
          Sign up
        </Button>
        <Button variant="border" onClick={() => handleClick("Sign in")}>
          Sign in
        </Button>
      </Buttons>

      <StyledAuthentication>
        {formName === "Sign up" && (
          <AuthenticationForm title={formName} onSubmitUser={signUp} />
        )}
        {formName === "Sign in" && (
          <AuthenticationForm title={formName} onSubmitUser={signIn} />
        )}
      </StyledAuthentication>
    </Overlay>
  );
}
