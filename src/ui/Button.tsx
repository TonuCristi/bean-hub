import styled, { css } from "styled-components";

type Props = {
  children: string;
  disabled?: boolean;
  variant: "regular" | "border";
  onClick?: (e?: any) => void;
};

interface VariantProps {
  $variant: "regular" | "border";
}

const variants = {
  regular: css`
    background-color: var(--color-teal-500);
    color: #fff;
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    border-radius: 0.9rem;
    transition: all 0.2s;

    &:hover {
      background-color: var(--color-teal-600);
    }
  `,
  border: css`
    border: 2px solid transparent;
    background-color: var(--color-gray-50);
    color: var(--color-gray-300);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    border-radius: 0.9rem;
    transition: all 0.2s;

    &:hover {
      background-color: #fff;
      border: 2px solid var(--color-teal-500);
      color: var(--color-teal-500);
    }
  `,
};

const StyledButton = styled.button<VariantProps>`
  border: none;
  background: none;
  font-family: inherit;
  cursor: pointer;

  ${(props) => variants[props.$variant]}
`;

export default function Button({
  children,
  disabled,
  variant,
  onClick,
}: Props) {
  return (
    <StyledButton disabled={disabled} onClick={onClick} $variant={variant}>
      {children}
    </StyledButton>
  );
}
