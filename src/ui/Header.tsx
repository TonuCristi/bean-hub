import styled from "styled-components";
import { useState } from "react";

import Avatar from "./Avatar";
import SearchBar from "./SearchBar";
import Notifications from "../features/notifications/Notifications";
import Button from "./Button";
import Authentication from "../features/authentication/Authentication";
import { NavLink } from "react-router-dom";

type StateIsOpen = {
  signUp: boolean;
  signIn: boolean;
};

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
  const [isOpen, setIsOpen] = useState<StateIsOpen>({
    signUp: false,
    signIn: false,
  });

  function handleClick(e: any, state: StateIsOpen) {
    e.stopPropagation();

    return setIsOpen(state);
  }

  return (
    <StyledHeader>
      <Logo to="/">
        Bean<Span>HUB</Span>
      </Logo>

      <SearchBar placeholder="Search new people..." variant="header" />

      <Wrapper>
        {/* <Notifications /> */}
        {/* <Avatar
          variant="profile"
          to="/"
          username="John Smith"
          src="https://bycbloluzgweztroyymv.supabase.co/storage/v1/object/public/avatars/user-4.jpg"
        /> */}
        <Button
          variant="regular"
          onClick={(e) => handleClick(e, { signUp: true, signIn: false })}
        >
          Sign up
        </Button>
        <Button
          variant="border"
          onClick={(e) => handleClick(e, { signUp: false, signIn: true })}
        >
          Sign in
        </Button>
        {isOpen.signUp && (
          <Authentication
            title="Sign up"
            onClick={(e) => handleClick(e, { signUp: false, signIn: false })}
          />
        )}
        {isOpen.signIn && (
          <Authentication
            title="Sign in"
            onClick={(e) => handleClick(e, { signUp: false, signIn: false })}
          />
        )}
      </Wrapper>
    </StyledHeader>
  );
}
