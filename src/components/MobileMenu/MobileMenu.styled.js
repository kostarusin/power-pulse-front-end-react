import styled from 'styled-components';

export const MobileMenuBlock = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--orange-dark);
  z-index: 100;
  padding: 20px;
  padding-top: 245px;
`;

export const MobileMenuItem = styled.div`
  flex: 1;
  flex-direction: column;
  font-size: 14px;
  color: var(--white);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

`;

export const MobileMenuBtn = styled.button`
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.20);
  padding: 10px 27px;
  gap: 16px;
  background-color: var(--orange-dark);
  color: var(--white);
  margin-bottom: 16px;

  &:hover {
    border-color: var(--white);
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  color: var(--white);
  cursor: pointer;
`;

export const LogOut = styled.button`
  margin-left: 20px;
  margin-bottom: 20px;
  /* margin-top: 350px; */
`;

export const LogOutTextMob = styled.div`
  color: var(--white);
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  cursor: pointer;


`;

export const LogOutSvgMob = styled.svg`
  width: 20px;
  height: 20px;
  color: var(--white);
  fill: var(--white);
  font-size: 14px;
  cursor: pointer;
  display: flex;
  /* justify-content: center;
  align-items: center; */

`;

