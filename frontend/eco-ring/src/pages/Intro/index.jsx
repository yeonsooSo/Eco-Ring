import React, { useState } from "react";
import styled from "styled-components";
import logo from "./Logo.svg";
import click from "./clickme.svg";
import Outline from "./components/Outline";

import LoginModal from "components/LoginModal";

const Logo = styled.img`
  width: 140px;
`;

const Content = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 1vh;
`;

const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  flex: 1 0 auto;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #e8e5df;
`;

const Intro = () => {
  const [loginModalopened, setLoginModalopened] = useState(false);

  const openLoginModal = () => {
    setLoginModalopened(true);
  };

  return (
    <>
      <LoginModal setOpen={setLoginModalopened} open={loginModalopened} />
      <Wrapper>
        <SubWrapper>
          <Content>
            <Outline />
          </Content>
          <Logo src={logo} onClick={openLoginModal} />
          <img src={click} width="120px" />
        </SubWrapper>
      </Wrapper>
    </>
  );
};

export default Intro;
