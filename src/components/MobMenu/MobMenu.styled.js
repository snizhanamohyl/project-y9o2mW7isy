import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

import bgSpinachImg from 'assets/images/mobile/mob-menu-spinach-bg-1x.png';
import bgSpinachRet from 'assets/images/mobile/mob-menu-spinach-bg-2x.png';
import bgSpinachImgTab from 'assets/images/tablet/mob-menu-spinach-bg-1x.png';
import bgSpinachRetTabRet from 'assets/images/tablet/mob-menu-spinach-bg-2x.png';
import { retina } from 'vars/styles';
import ThemeToggler from 'components/ThemeToggler/ThemeToggler';

const BgMob = `url(${bgSpinachImg}) right bottom no-repeat, var(--light-green-bg);`;
const BgMobRet = `url(${bgSpinachRet}) right bottom / 321px 343px no-repeat, var(--light-green-bg);`;
const BgTab = `url(${bgSpinachImgTab}) right bottom no-repeat, var(--light-green-bg);`;
const BgTabRet = `url(${bgSpinachRetTabRet}) right bottom / 591px 505px no-repeat, var(--light-green-bg);`;

export const MobMenuWrap = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 18px 16px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  background: ${BgMob};

  @media ${retina} {
    background: ${BgMobRet};
  }

  @media (min-width: 768px) {
    background: ${BgTab};

    @media ${retina} {
      background: ${BgTabRet};
    }
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 32px;
  }
`;

export const MobHeaderWrap = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 124px;
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.36px;
  transition: color var(--transition-time) var(--transition-function);

  @media (min-width: 768px) {
    font-size: 24px;
    letter-spacing: -0.48px;
  }

  &.active {
    color: var(--accent);
    font-weight: 600;
  }

  &:hover,
  &:focus {
    color: var(--accent);
  }
`;

export const ThemeTogglerMob = styled(ThemeToggler)`
  position: absolute;
  bottom: 100px;
  left: 100px;
  z-index: 1000;

  & button {
    @media (max-width: 1439px) {
      display: block;
    }
  }
`;

// export const ThemeTogglerMob = styled.p`
//   position: absolute;
//   bottom: 18px;
//   left: 16px;
//   z-index: 1000;
// `;
