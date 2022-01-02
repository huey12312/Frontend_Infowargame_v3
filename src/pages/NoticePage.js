import React from "react";
import styled from "styled-components";
import NoticeTemplete from "../components/notice/noticeTemplete";
import NoticeProviders from "../providers/NoticeProviders";

const NoticePage = () => {
  return (
    <NoticeProviders>
      <NoticeTemplete />
    </NoticeProviders>
  );
};

export default NoticePage;
