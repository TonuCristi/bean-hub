import styled from "styled-components";

import {
  HiOutlineBookmark,
  HiOutlineChartBar,
  HiOutlineCog6Tooth,
  HiOutlineHome,
} from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import DarkModeSwitch from "./DarkModeSwitch";

const links = [
  {
    path: "",
    field: "Home",
    icon: (
      <HiOutlineHome
        style={{
          strokeWidth: "3",
        }}
      />
    ),
  },
  {
    path: "statistics",
    field: "Statistics",
    icon: (
      <HiOutlineChartBar
        style={{
          strokeWidth: "3",
        }}
      />
    ),
  },
  {
    path: "favourites",
    field: "Favourites",
    icon: (
      <HiOutlineBookmark
        style={{
          strokeWidth: "3",
        }}
      />
    ),
  },
  {
    path: "settings",
    field: "Settings",
    icon: (
      <HiOutlineCog6Tooth
        style={{
          strokeWidth: "3",
        }}
      />
    ),
  },
];

const StyledSidebar = styled.aside`
  background-color: #fff;
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Nav = styled.nav`
  padding-bottom: 2.4rem;
  width: 100%;
  margin-bottom: auto;
`;

const NavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  list-style: none;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  color: var(--color-gray-600);
  font-weight: 500;
  padding: 1.2rem 1.6rem;
  border-radius: 0.9rem;
  transition: 0.1s all;

  &:hover {
    color: var(--color-gray-0);
    background-color: var(--color-teal-500);
  }
`;

export default function Sidebar() {
  return (
    <StyledSidebar>
      <Nav>
        <NavLinks>
          {links.map((link) => (
            <li key={link.path}>
              <StyledNavLink to={`/${link.path}`}>
                {link.icon}
                {link.field}
              </StyledNavLink>
            </li>
          ))}
        </NavLinks>
      </Nav>

      <DarkModeSwitch />
    </StyledSidebar>
  );
}
