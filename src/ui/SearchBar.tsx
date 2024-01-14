import styled, { css } from "styled-components";

import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { useRef } from "react";

type Props = {
  placeholder: string;
  variant: "header" | "friends";
};

interface VariantProps {
  $variant: "header" | "friends";
}

const variantsWrapper = {
  header: css`
    margin-right: auto;
    border: 2px solid var(--color-gray-200);
    border-radius: 0.9rem;
    color: var(--color-gray-600);
    padding: 0.8rem 1.2rem;
    width: 35rem;
  `,
  friends: css`
    background-color: var(--color-gray-100);
    padding: 1rem 1.2rem;
    border-radius: 0.9rem;
  `,
};

const variantsBar = {
  header: css`
    font-size: 1.6rem;
    font-weight: 500;

    &::placeholder {
      font-weight: 500;
      color: var(--color-gray-600);
    }
  `,
  friends: css`
    font-size: 1.6rem;
    font-weight: 500;
    color: var(--color-gray-600);

    &::placeholder {
      font-weight: 500;
      color: var(--color-gray-500);
    }
  `,
};

const SearchBarWrapper = styled.div<VariantProps>`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  ${(props) => variantsWrapper[props.$variant]}
`;

const StyledSearchBar = styled.input<VariantProps>`
  border: none;
  background: none;
  font-family: inherit;
  width: 100%;
  outline: none;

  ${(props) => variantsBar[props.$variant]}
`;

const Icon = styled(HiOutlineMagnifyingGlass)`
  stroke-width: 3;
`;

export default function SearchBar({ placeholder, variant }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => inputRef.current?.focus();

  return (
    <SearchBarWrapper $variant={variant} onClick={handleClick}>
      <Icon />
      <StyledSearchBar
        placeholder={placeholder}
        $variant={variant}
        ref={inputRef}
      />
    </SearchBarWrapper>
  );
}
