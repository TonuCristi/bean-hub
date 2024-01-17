import styled from "styled-components";

import Avatar from "./Avatar";
import SearchBar from "./SearchBar";
import Notifications from "../features/notifications/Notifications";
import Button from "./Button";
import { NavLink, useNavigate } from "react-router-dom";

import { useUser } from "../hooks/useUser";
import { signOutUser } from "../services/apiUsers";
import { useQueryClient } from "@tanstack/react-query";

const StyledHeader = styled.header`
  background-color: #fff;
  display: grid;
  grid-template-columns: 25rem auto 25rem;
  align-items: center;
  padding: 1.8rem 2.4rem 1.8rem 4rem;
  position: relative;
`;

const Logo = styled(NavLink)`
  text-decoration: none;
  color: var(--color-gray-800);
  font-weight: 500;
  font-size: 2.4rem;
`;

const Span = styled.span`
  color: var(--color-teal-500);
  font-weight: 700;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-self: end;
`;

export default function Header() {
  const queryClient = useQueryClient();
  const { data } = useUser();
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <Logo to="/">
        Bean<Span>HUB</Span>
      </Logo>

      <SearchBar placeholder="Search new people..." variant="header" />

      {!!data && (
        <Wrapper>
          <Notifications />
          <Avatar
            variant="profile"
            to="/"
            // username={"John"}
            username={data?.user.user_metadata.name}
            src="https://bycbloluzgweztroyymv.supabase.co/storage/v1/object/public/avatars/user-4.jpg"
          />
          <Button
            variant="border"
            onClick={() => {
              signOutUser();
              queryClient.removeQueries();
              navigate("authentication");
            }}
          >
            Sign out
          </Button>
        </Wrapper>
      )}
    </StyledHeader>
  );
}
