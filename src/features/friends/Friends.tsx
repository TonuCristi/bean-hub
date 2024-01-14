import styled from "styled-components";

import SearchBar from "../../ui/SearchBar";
import Avatar from "../../ui/Avatar";

const friends = ["David O'Donnell", "Frances Neagley", "Karla Dixon"];

const StyledFriendsSearch = styled.aside`
  background-color: #fff;
  padding: 2.4rem;
`;

const Title = styled.h3`
  color: var(--color-gray-800);
  margin: 2.4rem 0 1.6rem;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const Item = styled.li`
  background-color: var(--color-gray-100);
  border-radius: 0.9rem;
`;

export default function Friends() {
  return (
    <StyledFriendsSearch>
      <SearchBar placeholder="Search friends..." variant="friends" />
      <Title>Friends</Title>
      <List>
        {friends.map((friend) => (
          <Item key={friend}>
            <Avatar variant="friend" to="/" username={friend} src="" />
          </Item>
        ))}
      </List>
    </StyledFriendsSearch>
  );
}
