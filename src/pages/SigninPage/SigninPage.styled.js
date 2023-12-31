import styled from '@emotion/styled';
import { Field } from 'formik';
import { NavLink } from 'react-router-dom';

import bgMob from 'assets/images/mobile/bg-register-mob.png';
import bgDesk from 'assets/images/desktop/bg-register-desk.png';

const Img = styled.picture`
  width: 285px;
  height: 250px;
  margin-top: 87px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  @media screen and (min-width: 768px) {
    margin-top: 96px;
    width: 409px;
    height: 359px;
  }
  @media screen and (min-width: 1440px) {
    margin: 0;
    width: 532px;
    height: 468px;
    margin-right: 115px;
  }
`;

const Section = styled.div`
  height: 490px;
  background-size: cover;
  background-image: url(${bgMob});
  position: relative;
  /* @media screen and (min-width: 768px) {
    height: 606px;
  } */
  @media screen and (min-width: 1440px) {
    background-image: none;
  }
`;

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 335px;
  height: 315px;
  margin: auto;
  background-color: #2a2c36;
  border-radius: 30px;
  padding-top: 32px;
  padding-left: 28px;
  padding-right: 28px;
  position: relative;
  z-index: 10;
  position: relative;
  bottom: 30px;
  @media screen and (min-width: 768px) {
    width: 500px;
    height: 419px;
    padding-top: 44px;
    padding-left: 50px;
  }
  @media screen and (min-width: 1440px) {
    position: static;
    margin-bottom: 18px;
  }
`;

const Title = styled.h1`
  color: var(--main-light-color);
  font-size: 24;
  line-height: 1.17;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`;

const Input = styled(Field)`
  box-sizing: border-box;
  font-family: inherit;
  font-size: 14px;
  width: 279px;
  height: 45px;
  margin-bottom: 16px;
  border-radius: 6px;
  border: 0.5px solid var(--input-grey);
  background-color: transparent;
  color: var(--main-light-color);
  padding-left: 45px;
  outline: none;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: var(--input-grey);
    padding-left: 7px;
  }
  :-ms-input-placeholder {
    color: var(--input-grey);
    padding-left: 7px;
  }
  :focus::-webkit-input-placeholder {
    color: var(--main-light-color);
  }
  :focus::placeholder {
    color: var(--main-light-color);
  }
  :hover::placeholder {
    color: var(--main-light-color);
  }
  :hover::-webkit-input-placeholder {
    color: var(--main-light-color);
  }
  @media screen and (min-width: 768px) {
    width: 400px;
    height: 59px;
    font-size: 18px;
    margin-bottom: 24px;
  }
  &:hover {
    border: 1px solid var(--white);
  }
  &:focus {
    border: 1px solid var(--white);
  }
`;

const ErrorInput = styled(Input)`
  border: 1px solid var(--error-red);
`;

const LastInput = styled(Input)`
  margin-bottom: 28px;
  @media screen and (min-width: 768px) {
    margin-bottom: 50px;
  }
`;

const ErrorLastInput = styled(LastInput)`
  border: 1px solid var(--error-red);
`;

const Button = styled.button`
  box-sizing: border-box;
  width: 279px;
  height: 45px;
  background-color: var(--accent-green);
  padding: 12px 106px;
  border-radius: 6px;
  font-family: inherit;
  font-size: 16px;
  line-height: 1.13;
  color: var(--main-light-color);
  transition: color var(--transition-time) var(--transition-function);
  cursor: pointer;
  @media screen and (min-width: 768px) {
    width: 400px;
    height: 56px;
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  &:hover {
    color: var(--dark);
  }
`;

const Link = styled(NavLink)`
  font-family: inherit;
  font-size: 14px;
  color: var(--main-light-color);
  margin: auto;
  display: block;
  text-align: center;
  text-decoration: underline;
  margin-top: -10px;
  transition: color var(--transition-time) var(--transition-function);

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 0;
  }
  &:hover {
    color: var(--accent-green);
  }
`;

const Svg = styled.svg`
  width: 18px;
  height: 18px;
  position: absolute;
  top: 118px;
  left: 40px;
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
    top: 133px;
    left: 65px;
  }
`;

const SvgPass = styled(Svg)`
  width: 20px;
  height: 20px;
  top: 178px;
  @media screen and (min-width: 768px) {
    top: 216px;
  }
`;

const Container = styled.div`
  @media screen and (min-width: 1440px) {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    height: 100vh;
    align-items: center;
    background-image: url(${bgDesk});
    background-position: 100% 100%;
    background-repeat: no-repeat;
    background-size: contain;
  }
`;

const Error = styled.div`
  font-size: 10px;
  color: var(--error-red);
  position: absolute;
  top: 151px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    top: 177px;
  }
`;

const ErrorPass = styled(Error)`
  top: 213px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    top: 260px;
  }
`;

const ServerError = styled(ErrorPass)`
  font-size: 10px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    top: 260px;
  }
`;

const MailCrossSvg = styled.svg`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 40px;
  top: 117px;

  @media screen and (min-width: 768px) {
    right: 65px;
    top: 135px;
  }
`;

const PassCrossSvg = styled(MailCrossSvg)`
  right: 40px;
  top: 178px;
  @media screen and (min-width: 768px) {
    right: 65px;
    top: 220px;
  }
`;

const SvgDiv = styled.div`
  color: var(--icon-grey);
  background-color: var(--icon-grey);
`;

const SvgDivError = styled.div`
  color: var(--error-red);
  background-color: var(--error-red);
`;

const Loader = styled.div`
  position: absolute;
  z-index: 10;
  bottom: 41px;
  right: 110px;

  @media screen and (min-width: 768px) {
    bottom: 69px;
    right: 180px;
  }

  @media screen and (min-width: 1440px) {
    bottom: 141px;
    right: 180px;
  }
`;

export {
  Img,
  Section,
  Wrapper,
  Title,
  Input,
  LastInput,
  Button,
  Link,
  Svg,
  SvgPass,
  Container,
  Error,
  ErrorPass,
  ErrorInput,
  ErrorLastInput,
  MailCrossSvg,
  PassCrossSvg,
  SvgDiv,
  SvgDivError,
  ServerError,
  Loader,
};
