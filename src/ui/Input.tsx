import styled, { css } from "styled-components";

type Props = {
  type: string;
  placeholder: string;
  variant: "regular";
  required?: boolean;
};

interface VariantProps {
  $variant: "regular";
}

const variants = {
  regular: css`
    border: 2px solid var(--color-gray-200);
    background-color: none;
    border-radius: 0.9rem;
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem;
    color: var(--color-gray-600);
    margin-bottom: 1.2rem;
  `,
};

const StyledInput = styled.input<VariantProps>`
  font-family: inherit;
  outline: none;

  ${(props) => variants[props.$variant]};
`;

export default function Input({ type, placeholder, variant, required }: Props) {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      $variant={variant}
      required={required}
    />
  );
}
