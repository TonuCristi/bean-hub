import { HiOutlineHeart } from "react-icons/hi2";

import styled from "styled-components";

const StyledPostInteractionBar = styled.div`
  width: 90%;
  margin: 0 auto;
  border-bottom: 2px solid var(--color-gray-200);
  padding-bottom: 1.2rem;
  margin-bottom: 1.2rem;
  display: flex;
  align-items: center;
  gap: 3.2rem;
  font-weight: 500;
  font-size: 1.4rem;
`;

const LikeButton = styled.button`
  margin-right: auto;
  border: none;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
  font-size: 1.4rem;
  font-weight: 500;
  color: inherit;
  cursor: pointer;
`;

const Icon = styled(HiOutlineHeart)`
  font-size: 2.4rem;
  /* fill: var(--color-gray-200); */
`;

export default function PostInteractionBar() {
  return (
    <StyledPostInteractionBar>
      <LikeButton>
        <Icon />
        Like
      </LikeButton>

      <p>10 Comments</p>
      <p>12 Likes</p>
    </StyledPostInteractionBar>
  );
}
