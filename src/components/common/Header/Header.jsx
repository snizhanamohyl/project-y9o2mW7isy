import BurgerBtn from "components/common/BurgerBtn/BurgerBtn";
import UserLogo from "components/common/UserLogo/UserLogo";
import { HeaderBox, HeaderWrapper, Menu, NavigationMenu } from "./Header.styled";
import Navigation from "components/common/Navigation/Navigation";
import ThemeToggler from "components/common/ThemeToggler/ThemeToggler";
import { Link, useLocation } from 'react-router-dom';
import useResize from 'hooks/useWindowWidth';
import SharedContainer from 'components/common/SharedContainer/SharedContainer';
import Logo from 'components/common/Logo/Logo';

export default function Header({ toggleMenu }) {
    const width = useResize();
    const logoSize = width < 768 ? 40 : 44;
    
    const { pathname } = useLocation();
    const isRecipePage = pathname.includes('/recipe/');
    
    return <HeaderWrapper>
        <SharedContainer>
            <HeaderBox $isRecipePage={isRecipePage}>
                <NavigationMenu>
                    <Link to='/'>
                        <Logo size={logoSize} />
                    </Link>
                    <Navigation/>
                </NavigationMenu>
                <Menu>
                    <UserLogo />
                    <BurgerBtn toggleMenu={toggleMenu} />
                    { (width > 1439) && <ThemeToggler/> }
                    </Menu>
            </HeaderBox>
        </SharedContainer>
    </HeaderWrapper>
}