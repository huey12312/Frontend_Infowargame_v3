import styled from "styled-components";
import { Link } from "react-router-dom";

export const DefaultLinkStyled = styled(Link)`
  text-decoration: none;
`;

export const AnserBox = styled.div`
  position: absolute;
  width: 500px;
  height: 36px;
  left: 0%;
  top: 90px;

  font-family: "Noto Sans KR", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 36px;
  text-align: left;

  color: black;
`;

export const QuestBoxStyled = styled.div`
  width: 313px;
  height: 151px;
  background-color: #fff;
  box-shadow: 4px 4px 0px rgba(249, 249, 249, 0.25);
  border-radius: 20px;
  margin: 0 35px 33px 0;
  box-sizing: border-box;
  position: relative;

  cursor: pointer;
`;

export const QuestTextStyled = styled.div`
  font-size: 27px;
  color: #2c2c2c;
  position: absolute;
  top: 17px;
  left: 36px;

  &::after {
    content: "";
    background-color: white;
    border: 1px solid #2c2c2c;
    position: absolute;
    width: 259px;
    left: -10px;
    top: 35px;
  }
`;

export const QuestScoreStyled = styled.div`
  width: 77px;
  height: 27px;
  border-top: 2px solid #2c2c2c;
  border-bottom: 2px solid #2c2c2c;
  position: absolute;
  bottom: 22px;
  right: 26px;

  font-weight: normal;
  color: #2c2c2c;
  font-size: 20px;
  display: flex;
  align-items: center;
`;

export const ProblemAreaStyled = styled.div`
  margin: 0;
  padding-top: 65px;
  padding-left: 34px;
  width: 1445px;
  height: calc(100vh - 80px);
  position: absolute;
  top: 47px;
  right: 97px;
  bottom: 37px;
  left: 378px;
  border: 3px solid white;
  border-radius: 30px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-content: start;
`;

export const ProblemTopicStyled = styled.div`
  position: absolute;
  width: 178px;
  height: 58px;
  left: 22px;
  top: -32px;
  background-color: #2c2c2c;
  z-index: 1;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 900;
  font-size: 40px;
  line-height: 58px;

  text-align: center;

  color: #fff;
`;

export const WriteButton = styled(DefaultLinkStyled)`
  width: 177px;
  height: 41px;

  font-family: Noto Sans KR;
  text-align: right;
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 36px;

  display: bloack;
  text-align: center;

  color: #2c2c2c;

  background: #fff;
  border-radius: 20px;
`;

export const CtfDetailAreaStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 2;
  background-color: white;

  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
`;

export const CtfProblemStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 616px;
  height: 826px;
  background-color: white;
  border: 5px solid #000000;
  box-sizing: border-box;
  border-radius: 40px;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ExitButtonStyled = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  right: -5px;
  top: -5px;

  background: #ffffff;
  border: 5px solid #000000;
  box-sizing: border-box;
  border-radius: 0px 40px 0px 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: black;
  padding-top: 5px;
  padding-right: 5px;
  font-size: 20px;
`;

export const ContentStyled = styled.div`
  margin: 81px 59px;
  color: #000000;

  .title {
    font-size: 35px;
    line-height: 48px;
    margin-bottom: 43px;
  }
  .content {
    max-height: 324px;
    overflow: auto;
    font-size: 20px;
    line-height: 27px;

    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export const ButtonAreaStyled = styled.div`
  height: 229px;
  width: 506px;
  margin-bottom: 66px;

  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  a {
    position: absolute;
    left: 0;
    right: 0;

    text-decoration: none;
    padding: 4px 14px;

    background: #2c2c2c;
    border-radius: 10px;
    width: 174px;
    height: 33px;

    font-size: 18px;
    text-align: center;
    color: #ffffff;
    font-weight: 500;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  input {
    position: absolute;
    width: 506px;
    height: 51px;

    padding-left: 27px;

    bottom: 102px;
    left: 50%;
    transform: translateX(-50%);

    background: white;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 10px;

    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    color: #9b9b9b;
  }

  .editButton {
    position: absolute;
    width: 187px;
    height: 52px;
    background: #2c2c2c;
    border-radius: 10px;
    border: 0;

    bottom: 0;
    left: 25%;
    transform: translateX(-50%);

    cursor: pointer;
    color: white;
    font-size: 27px;
  }

  .deleteButton {
    position: absolute;
    width: 187px;
    height: 52px;
    background: #dfdfdf;
    border-radius: 10px;
    border: 0;

    bottom: 0;
    left: 75%;
    transform: translateX(-50%);

    cursor: pointer;
    color: #2c2c2c;
    font-size: 27px;
  }
`;

export const LinkStyled = styled(DefaultLinkStyled)`
  width: 291px;
  height: 56px;
  background-color: #fff;
  border-radius: 10px;
  margin-top: 7px;

  color: #2c2c2c;
  font-size: 28px;
  font-weight: 500;
  text-align: center;
  line-height: 51px;

  transition: 0.1s;

  display: block;

  &:first-child {
    margin-top: 0;
  }

  div {
    border-radius: 10px;
    height: 56px;
  }

  .btn__black,
  .btn__white:hover {
    background-color: #2c2c2c;
    color: #fff;
  }

  .btn__white,
  .btn__black:hover {
    background-color: #fff;
    color: #2c2c2c;
  }
`;

// In the menu bar, the area where the logo and logout button are located.
export const HeaderStyled = styled.div`
  width: 303px;
  height: 160px;
  background-color: #2c2c2c;
  position: relative;
`;

// The area where the main logo and site name are in it.
export const TitleAreaStyled = styled.div`
  position: absolute;
  top: 29px;
  left: 16px;
  display: flex;
  cursor: pointer;
`;

// Style setting for the main logo.
export const MainLogoStyled = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-image: url(${process.env.PUBLIC_URL + "/images/InfoLogo.jpg"});
  background-size: contain;
  background-repeat: no-repeat;
`;

// The area where the site name is located.
export const TitleTextAreaStyled = styled.div`
  margin-top: 5px;
  margin-left: 5px;

  div {
    &:first-child {
      font-family: "CookieRunOTF-Bold", sans-serif;
      color: #949494;
      font-size: 32px;
    }
    &:nth-child(2) {
      font-family: "CookieRun-Regular", sans-serif;
      color: #fff;
      font-size: 28px;
    }
  }
`;

// Set the login/logout button style.
export const AccountButtonStyled = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  color: #fff;
  font-size: 20px;

  position: absolute;
  right: 12px;
  bottom: 11px;

  cursor: pointer;
`;

//
export const MenuBarStyled = styled.div`
  width: 303px;
  height: 100vh;
  background-color: #bcbcbc;
  border-bottom-right-radius: 40px;
`;

//
export const NavigatorAreaStyled = styled.div`
  padding: 7px 6px 40px 6px;
  display: flex;
  flex-direction: column;
  align-items: center;

  height: calc(100% - 250px);
  overflow-x: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0;
  }
`;

//
export const TopicAreaStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

//
export const SubAreaStyled = styled.div`
  height: auto;

  div {
    width: 235px;
    height: 56px;
    background: #fff;
    border-radius: 5px;
    margin-top: 7px;

    color: #2c2c2c;
    font-size: 24px;
    font-weight: 500;
    text-align: center;
    line-height: 51px;
  }

  .btn__black,
  .btn__white:hover {
    background-color: #2c2c2c;
    color: #fff;
  }

  .btn__white,
  .btn__black:hover {
    background-color: #fff;
    color: #2c2c2c;
  }
`;

export const writeArea = styled.div`
  position: absolute;
  display: flex;
  top: 11px;
  right: 53px;

  width: 177px;
  height: 41px;
  font-family: "Noto Sans KR", sans-serif;
  flex-direction: column;
  align-items: center;
`;
