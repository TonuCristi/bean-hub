import styled from "styled-components";

import CreatePostForm from "../features/posts/CreatePostForm";
import Posts from "../features/posts/Posts";

const StyledHome = styled.div`
  height: 100%;
  padding: 0 1.2rem;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    background: none;
    width: 1rem;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-teal-500);
    border-radius: 0.9rem;
  }
`;

const Container = styled.div`
  padding: 2.4rem 3.2rem;
  border: 2px solid var(--color-gray-200);
  border-bottom: none;
  border-radius: 2.7rem 2.7rem 0 0;
  background-color: var(--color-gray-50);
`;

const Scroll = styled.div`
  height: 5rem;
`;

export default function Home() {
  return (
    <Container>
      <StyledHome>
        <Scroll>
          <CreatePostForm />
          <Posts />
        </Scroll>
      </StyledHome>
    </Container>
  );
}
