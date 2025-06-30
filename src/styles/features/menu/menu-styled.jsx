import styled from "styled-components";
import { Link } from "react-router-dom";

const MenuWrapper = styled.nav`
  padding: 0.5rem 0;
`;

const MenuList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  margin: 0;
  padding: 0;
`;

const MenuItem = styled(Link)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #222;
  cursor: pointer;
  border-radius: 0.5rem;
  margin-bottom: 0.125rem;
  transition: background 0.15s;

  &:hover,
  &:focus,
  &.active {
    background: #84d1eb;
    color: black;
  }
`;

const MenuLabel = styled.span`
  flex: 1;
  text-align: left;
  font-weight: 500;
`;

const MenuCount = styled.span`
  background: #f0f6ff;
  color: #2196f3;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 50rem;
  padding: 0.125rem 0.5rem;
  margin-left: 0.5rem;
  min-width: 1.5rem;
  text-align: center;
`;
