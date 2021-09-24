import React, { useState } from "react";
import { Modal, Grid, Form, Icon, ModalContent } from "semantic-ui-react";
import styled from "styled-components";
import useInput from "hooks/useInput";
import logo from "pages/Intro/Eco-ring.svg";

const ReportModal = styled(Modal)`
  max-width: 25rem;
`;

const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1rem 1rem;
`;

const Logo = styled.img`
  width: 10rem;
  margin: 10px;
  vertical-align: middle;
`;

const Text = styled.div`
  font-family: "NS-R";
  color: gray;
  display: inline-block;
`;

const BtnText = styled.div`
  font-family: "NS-R";
  cursor: pointer;
  color: gray;
  display: inline-block;
`;

const ModalTitle = styled.div`
  font-family: "NS-R";
  font-weight: bold;
  font-size: 1.5rem;
`;
const Field = styled(Form.Field)`
  display: flex;
  flex-direction: column;
  font-family: "NS-R";
  margin-bottom: 1rem !important;

  label {
    font-weight: bold;
    padding-bottom: 0.3rem;
  }

  input {
    font-family: "NS-R" !important;
  }
`;

const LoginModal = (props) => {
  const [onLogin, setOnLogin] = useState(true);
  const [username, onChangeUsername, setUsername] = useInput("");
  const [email, onChangeEmail, setEmail] = useInput("");
  const [password1, onChangePassword1, setPassword1] = useInput("");
  const [password2, onChangePassword2, setPassword2] = useInput("");

  const cleanInput = () => {
    setUsername("");
    setEmail("");
    setPassword1("");
    setPassword2("");
  };

  const closeModal = () => {
    cleanInput();
    props.setOpen(false);
  };

  const switchOnLogin = () => {
    cleanInput();
    setOnLogin(!onLogin);
  };

  return (
    <ReportModal
      onClose={() => closeModal()}
      onOpen={() => props.setOpen(true)}
      open={props.open}
    >
      <ModalHeader>
        <BtnText style={{ visibility: "hidden" }}>
          <Icon name="cancel" />
        </BtnText>
        <Logo src={logo} />
        <BtnText onClick={() => closeModal()}>
          <Icon name="cancel" />
        </BtnText>
      </ModalHeader>
      {onLogin ? (
        <Modal.Content style={{ fontFamily: "NS-R" }}>
          <ModalHeader
            style={{ justifyContent: "center", padding: "0 0 1rem 0" }}
          >
            <ModalTitle>로그인</ModalTitle>
          </ModalHeader>
          <Form>
            <Grid.Column>
              <Field
                fluid
                required
                value={email}
                onChange={onChangeEmail}
                label="이메일"
                control={Form.Input}
              />
              <Field
                fluid
                required
                value={password1}
                onChange={onChangePassword1}
                label="비밀번호"
                control={Form.Input}
              />
              <Form.Button
                fluid
                type="button"
                content="로그인"
                style={{
                  padding: "1rem 0",
                  fontFamily: "NS-R",
                  background: "#009F5A",
                  color: "#ffffff",
                }}
              />
            </Grid.Column>
          </Form>
          <Grid.Column style={{ marginTop: "2rem", textAlign: "center" }}>
            <Text>계정이 없으신가요?</Text>
            <BtnText
              onClick={() => switchOnLogin()}
              style={{
                color: "#009F5A",
                fontWeight: "bold",
                marginLeft: "0.5rem",
              }}
            >
              회원가입
            </BtnText>
          </Grid.Column>
        </Modal.Content>
      ) : (
        // 회원가입
        <ModalContent>
          <ModalHeader
            style={{ justifyContent: "center", padding: "0 0 1rem 0" }}
          >
            <ModalTitle>회원가입</ModalTitle>
          </ModalHeader>
          <Form>
            <Grid.Column>
              <Field
                fluid
                required
                value={username}
                onChange={onChangeUsername}
                label="닉네임"
                control={Form.Input}
              />
              <Field
                fluid
                required
                value={email}
                onChange={onChangeEmail}
                label="이메일"
                control={Form.Input}
              />
              <Field
                fluid
                required
                value={password1}
                onChange={onChangePassword1}
                label="비밀번호"
                control={Form.Input}
              />
              <Field
                fluid
                required
                value={password2}
                onChange={onChangePassword2}
                label="비밀번호 확인"
                control={Form.Input}
              />
              <Form.Button
                fluid
                type="button"
                content="회원가입"
                style={{
                  padding: "1rem 0",
                  fontFamily: "NS-R",
                  background: "#009F5A",
                  color: "#ffffff",
                }}
              />
            </Grid.Column>
          </Form>
          <Grid.Column style={{ marginTop: "2rem", textAlign: "center" }}>
            <Text>이미 가입하셨나요?</Text>
            <BtnText
              onClick={() => switchOnLogin()}
              style={{
                color: "#009F5A",
                fontWeight: "bold",
                marginLeft: "0.5rem",
              }}
            >
              로그인
            </BtnText>
          </Grid.Column>
        </ModalContent>
      )}
    </ReportModal>
  );
};

export default LoginModal;