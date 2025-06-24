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
  gap: 10px;
  padding: 0.5vw 1vw;
  font-size: 16px;
  color: #222;
  cursor: pointer;
  border-radius: 8px;
  margin-bottom: 2px;
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
  font-size: 13px;
  font-weight: 600;
  border-radius: 999px;
  padding: 2px 8px;
  margin-left: 8px;
  min-width: 24px;
  text-align: center;
`;
