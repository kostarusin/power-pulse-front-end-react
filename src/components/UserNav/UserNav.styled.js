import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const UserNavBlock = styled.nav`
  display: none;
  @media screen and (min-width: 769px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
  }
`;
export const UserNavLink = styled(NavLink)`
  display: flex;
  padding: 10px 27px;
  justify-content: center;
  align-items: center;
  color: #EFEDE8;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.20);
    &.active {
      background-color: #e6533c;
      border: 1px solid #e6533c;
    }
`;