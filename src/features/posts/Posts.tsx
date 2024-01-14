import styled from "styled-components";

import Post from "./Post";
import { usePosts } from "./usePosts";

const StyledPosts = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 3.2rem;
`;

export default function Posts() {
  const { posts, isLoading, isError } = usePosts();

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Something went wrong...</div>;

  return (
    <StyledPosts>
      {posts?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </StyledPosts>
  );
}
