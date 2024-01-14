import { useState } from "react";
import styled, { css } from "styled-components";

import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

interface IconProps {
  variant: "on" | "off";
}

const variant = {
  on: css`
    background-color: #fff;
    color: var(--color-yellow-400);
  `,
  off: css`
    background-color: none;
    color: var(--color-gray-800);
  `,
};

const StyledDarkModeSwitch = styled.div`
  background-color: var(--color-yellow-50);
  display: flex;
  gap: 0.8rem;
  align-items: center;
  justify-content: center;
  padding: 0.4rem;
  border-radius: 0.9rem;
`;

const Button = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Sun = styled(HiOutlineSun)<IconProps>`
  ${(props) => variant[props.variant]}
  font-size: 3.2rem;
  border-radius: 0.9rem;
  padding: 0.2rem;
`;

const Moon = styled(HiOutlineMoon)<IconProps>`
  ${(props) => variant[props.variant]}
  font-size: 3.2rem;
  border-radius: 0.9rem;
  padding: 0.2rem;
`;

export default function DarkModeSwitch() {
  const [isActivated, setIsActivated] = useState<boolean>(false);

  return (
    <StyledDarkModeSwitch>
      <Button onClick={() => setIsActivated(false)}>
        <Sun variant={!isActivated ? "on" : "off"} />
      </Button>

      <Button onClick={() => setIsActivated(true)}>
        <Moon variant={isActivated ? "on" : "off"} />
      </Button>
    </StyledDarkModeSwitch>
  );
}
