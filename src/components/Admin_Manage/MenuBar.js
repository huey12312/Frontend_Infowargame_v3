import React from "react";
import MenuBarBox from "./MenuBarBox";
import * as S from "./style";

const DefaultTemplete = (params) => {
  console.log(params.page);
  let mainTopic;
  switch (params.page) {
    case "pwnable":
    case "reversing":
    case "web":
      mainTopic = "challenge";
      break;
    case "notification":
      mainTopic = "notification";
      break;
    case "adminevent":
      mainTopic = "adminevent";
      break;
    case "users":
      mainTopic = "users";
      break;
    default:
      mainTopic = "/";
  }

  return (
    <S.MenuBarStyled>
      <MenuBarBox />
      <S.NavigatorAreaStyled>
        <S.TopicAreaStyled>
          <S.LinkStyled to="/Adminctf/pwnable">
            <div
              className={
                mainTopic === "challenge" ? "btn__white" : "btn__black"
              }
            >
              CHALLENGE
            </div>
          </S.LinkStyled>
        </S.TopicAreaStyled>
        <S.LinkStyled to="/notification">
          <div
            className={
              mainTopic === "notification" ? "btn__white" : "btn__black"
            }
          >
            NOTICE
          </div>
        </S.LinkStyled>

        <S.LinkStyled to="/adminevent">
          <div
            className={mainTopic === "adminevent" ? "btn__white" : "btn__black"}
          >
            EVENT
          </div>
        </S.LinkStyled>

        <S.LinkStyled to="/users">
          <div className={mainTopic === "users" ? "btn__white" : "btn__black"}>
            USER
          </div>
        </S.LinkStyled>
      </S.NavigatorAreaStyled>
    </S.MenuBarStyled>
  );
};

export default DefaultTemplete;
