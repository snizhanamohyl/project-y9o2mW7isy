import LogoFooter from "components/common/LogoFooter/LogoFooter";
import ExplanationTextFooter from "../ExplanationTextFooter/ExplanationTextFooter";
import NavFooter from "../NavFooter/NavFooter";
import SubscribeBlock from "components/common/SubscribeBlock/SubscribeBlock";
import BottomBlock from "components/common/BottomBlock/BottomBlock";
import {
    FooterSection,
    FooterBoxTab,
    ElementBoxTab,
    FooterBoxDesk,
} from "./Footer.styled";
import FollowUs from "components/common/FollowUs/FollowUs";
import SharedContainer from "components/common/SharedContainer/SharedContainer";

export default function Footer() {
    return (<>
        <FooterSection>
            <SharedContainer>
                <FooterBoxDesk>
                    <FooterBoxTab>
                        <ElementBoxTab>
                            <LogoFooter />
                            <ExplanationTextFooter />
                        </ElementBoxTab> 
                        <NavFooter />
                    </FooterBoxTab>
                    <SubscribeBlock />           
                </FooterBoxDesk>
                <FollowUs isFooter/>
            </SharedContainer>    
        </FooterSection> 
        <BottomBlock/>
    </>     
    )
};

