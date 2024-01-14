import styled from "styled-components";

import AvatarImage from "../../ui/AvatarImage";
import { HiOutlinePaperAirplane } from "react-icons/hi2";

const StyledCommentBox = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 2.4rem;
`;

const CommentForm = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2.4rem;
`;

const Input = styled.input`
  width: 100%;
  border: 2px solid var(--color-gray-200);
  border-radius: 0.9rem;
  font-family: inherit;
  color: var(--color-gray-600);
  font-weight: 500;
  font-size: 1.4rem;
  padding: 1.2rem;
  outline: none;

  &::placeholder {
    font-family: inherit;
    color: var(--color-gray-500);
  }
`;

const PostCommentButton = styled.button`
  border: none;
  background-color: var(--color-teal-500);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 2.4rem;
  padding: 0.4rem;
  border-radius: 0.9rem;
  cursor: pointer;
`;

const Icon = styled(HiOutlinePaperAirplane)``;

export default function CommentBox() {
  return (
    <StyledCommentBox>
      <AvatarImage
        src="https://bycbloluzgweztroyymv.supabase.co/storage/v1/object/public/avatars/user-4.jpg"
        variant="post"
      />

      <CommentForm>
        <Input placeholder="Write a comment..." />

        <PostCommentButton>
          <Icon />
        </PostCommentButton>
      </CommentForm>
    </StyledCommentBox>
  );
}
