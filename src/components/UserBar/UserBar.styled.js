import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const UserBarBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media screen and (min-width: 769px) {
    gap: 16px;
  }
`;

export const UserBarLink = styled(Link)`
  width: 24px;
  height: 24px;
  display: inline-block;
`;

export const UserAvatar = styled.div`
  width: 37px;
  height: 37px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px #e6533c;
  border-radius: 50%;
`;

export const IconSettings = styled.svg({
  width: '24px',
  height: '24px',
});

export const IconUserAvatar = styled.svg({
  width: '21px',
  height: '21px',
});

export const Burger = styled.svg`
  width: 24px;
  height: 24px;

@media screen and (min-width: 1440px) {
  display: none;
}
`;

export const LogOut = styled(Link)`
@media screen and (min-width: 1440px) {
  display: flex;
  align-items: center;
  gap: 8px;
}
  @media screen and (min-width: 769px) {
    display: none;
  }
`;

export const LogOutText = styled.div`
  color: #efede8;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;

export const LogOutSvg = styled.svg`
  width: 20px;
  height: 20px;
`;
