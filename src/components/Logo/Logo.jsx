import sprite from '../../assets/icons-optimized.svg';
import { LogoIcon, LogoText, LogoDiv } from './Logo.styled';

const Logo = () => {
  return (
    <LogoDiv to={'/'}>
      <LogoIcon>
        <use href={`${sprite}#icon-logo-large-img`} />
      </LogoIcon>
      <LogoText>
        <use href={`${sprite}#icon-logo-large-text`} />
      </LogoText>
    </LogoDiv>
  );
};

export default Logo;