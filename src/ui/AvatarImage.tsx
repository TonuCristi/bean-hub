import styled, { css } from "styled-components";

type Props = {
  src: string;
  variant: "regular" | "post";
};

interface VariantProps {
  $variant: "regular" | "post";
}

const variants = {
  regular: css`
    width: 4rem;
    height: 4rem;
  `,
  post: css`
    width: 3rem;
    height: 3rem;
  `,
};

const Image = styled.img<VariantProps>`
  border-radius: 100%;

  ${(props) => variants[props.$variant]}
`;

const Empty = styled.div<VariantProps>`
  background-color: var(--color-teal-500);
  border-radius: 100%;

  ${(props) => variants[props.$variant]}
`;

export default function AvatarImage({ src, variant }: Props) {
  return (
    <>
      {src ? (
        <Image src={src} $variant={variant} />
      ) : (
        <Empty $variant={variant} />
      )}
    </>
  );
}
