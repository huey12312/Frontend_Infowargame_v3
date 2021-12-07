import React from "react";
import CtfTemplete from "../../components/Admin_Manage/Admin_Problem/ctfTemplete";
import CtfProviders from "../../providers/CtfProviders";
import styled from "styled-components";

const BackgroundStyle = styled.div`
  background-color: #2c2c2c;
  background-size: cover;
  margin: 0 0 0 0;
`;

const AdminProblem = ({ match }) => {
  console.log(match.params);
  return (
    <BackgroundStyle>
      <CtfProviders>
        <CtfTemplete id={match} />
      </CtfProviders>
    </BackgroundStyle>
  );
};

export default AdminProblem;
