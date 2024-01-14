import styled from "styled-components";

import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Friends from "../features/friends/Friends";

const StyledRootLayout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: min-content auto;
`;

const Main = styled.main`
  display: grid;
  grid-template-columns: 25rem auto 35rem;
`;

export default function RootLayout() {
  return (
    <StyledRootLayout>
      <Header />

      <Main>
        <Sidebar />
        <Outlet />
        <Friends />
      </Main>
    </StyledRootLayout>
  );
}
