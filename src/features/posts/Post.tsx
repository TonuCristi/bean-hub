import styled from "styled-components";

import Avatar from "../../ui/Avatar";
import PostInteractionBar from "./PostInteractionBar";
import CommentBox from "./CommentBox";

import { getTimePassed } from "../../utils/getTimePassed";
import { useUserByEmail } from "../../hooks/useUserByEmail";

type Props = {
  created_at: string;
  content: string;
  userId: number;
};

const StyledPost = styled.div`
  background-color: #fff;
  border-radius: 0.9rem;
  box-shadow: 0rem 1.2rem 1.2rem var(--color-gray-200);
  padding: 2.4rem;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TimePassed = styled.p`
  color: var(--color-gray-400);
`;

const Pre = styled.pre`
  color: var(--color-gray-600);
  font-family: inherit;
  width: 90%;
  margin: 2.4rem auto 0;
  line-height: 1.4;
  font-weight: 500;
  font-size: 1.5rem;
  border-bottom: 2px solid var(--color-gray-200);
  padding-bottom: 1.2rem;
  margin-bottom: 1.2rem;
`;

export default function Post({ post }: { post: Props }) {
  // const { data: userData, isSuccess } = useUserByEmail(post?.email);

  return (
    <StyledPost>
      <Wrapper>
        <Avatar variant="post" to="/" username={"John"} src={""} />
        <TimePassed>{getTimePassed(post.created_at)}</TimePassed>
      </Wrapper>

      <Pre>{post.content}</Pre>

      <PostInteractionBar />

      <CommentBox />
    </StyledPost>
  );
}
