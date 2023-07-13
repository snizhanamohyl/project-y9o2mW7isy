import { useState } from "react";
import {
    ButtonsFooterContainer,
    EmailInput,
    EmailInputBox,
    IconLetter,
    SubscribeBtn,
    SubscribeMainText,
    SubscribeText
} from "./SubscribeBlock.styled";
import sprite from '../../assets/sprite.svg';
import useWindowWidth from "../../hooks/useWindowWidth";


export default function SubscribeBlock() {
  const [email, setEmail] = useState("");
  const width = useWindowWidth();
  let logoHeight = 16;
  let logoWidth = 12;

  if (width > 768) {
   logoHeight = 24;
   logoWidth = 18;
  }

  if (width > 1450) {
    logoWidth = 24;
    logoHeight = 28;
  }


  
  const onInputChange = (e) => {
    const { value } = e.currentTarget;
    setEmail(value);
  }; 
   
  const onSendEmail = () => {
    setEmail("");
  };
  

  return (<ButtonsFooterContainer>
    
    <SubscribeMainText>Subscribe to our Newsletter</SubscribeMainText>  
    <SubscribeText>Subscribe up to our newsletter. Be in touch with latest news and special offers, etc.</SubscribeText>

    <EmailInputBox>
    <IconLetter width={logoWidth} height={logoHeight}>
    <use href={`${sprite}#icon-letter`}></use>    
    </IconLetter>      
    <EmailInput
      onChange={onInputChange}
      name="email"
      value={email}
      type="email"
      placeholder="Enter your email address"
      />     
    </EmailInputBox>

    <SubscribeBtn onClick={onSendEmail}>
      Subscribe
    </SubscribeBtn>
    </ButtonsFooterContainer>);
};

