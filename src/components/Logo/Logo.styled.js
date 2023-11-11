import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const LogoDiv = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;

`;

export const LogoIcon = styled.svg`
  width: 36px;
  height: 13px;
  fill: #e6533c;
  stroke: none;
  
  
  @media screen and (min-width: 376px) {
    width: 44px;
    height: 17px;
  }
`;

export const LogoText = styled.svg`
  width: 82px;
  height: 13px;
  
  @media screen and (min-width: 376px) {
    width: 100px;
    height: 16px;
  }
`;