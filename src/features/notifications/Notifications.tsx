import styled from "styled-components";

import { HiOutlineBell } from "react-icons/hi2";

const Button = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

const Icon = styled(HiOutlineBell)`
  stroke-width: 3;
  font-size: 1.6rem;
  color: var(--color-gray-600);
`;

export default function Notifications() {
  return (
    <Button>
      <Icon />
    </Button>
  );
}
