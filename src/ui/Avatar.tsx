import styled, { css } from "styled-components";

import { NavLink } from "react-router-dom";
import AvatarImage from "./AvatarImage";

interface Props {
  variant: "profile" | "post" | "friend";
  to: string;
  username: string;
  src: string;
}

interface VariantProps {
  $variant: "profile" | "post" | "friend";
}

const variants = {
  profile: css`
    font-weight: 600;
  `,
  post: css`
    justify-content: flex-end;
    flex-direction: row-reverse;
    font-weight: 500;
  `,
  friend: css`
    justify-content: flex-end;
    flex-direction: row-reverse;
    padding: 1rem 0 1rem 1.2rem;
    font-weight: 500;
  `,
};

const StyledUser = styled(NavLink)<VariantProps>`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  color: var(--color-gray-800);

  ${(props) => variants[props.$variant]}
`;

export default function Avatar({ variant, to, username, src }: Props) {
  return (
    <StyledUser to={to} $variant={variant}>
      <p>{username}</p>
      <AvatarImage src={src} variant="regular" />
    </StyledUser>
  );
}
