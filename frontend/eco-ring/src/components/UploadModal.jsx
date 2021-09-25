import React, { useState, useRef } from "react";
import { Modal, Grid, Form, Icon } from "semantic-ui-react";
import styled from "styled-components";
import logo from "pages/Intro/Eco-ring.svg";
import BackImgAPI from "api/BackImgAPI";

const ReportModal = styled(Modal)`
  width: 400px;
  max-width: 400px;
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

const ImgContainer = styled.div`
  display: inline-block;
  width: 100%;
  position: relative;
  padding-bottom: 80%;
  margin-top: 1rem;
  margin-right: 1rem;
`;

const Img = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`;

const UploadModal = (props) => {
  const [img, setImg] = useState("");
  const inputFile = useRef(null);

  const cleanInput = () => {
    setImg("");
  };

  const closeModal = () => {
    cleanInput();
    props.setOpen(false);
  };

  const handleInputFile = (e) => {
    e.preventDefault();
    inputFile.current.click();
  };

  const upload = (e) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result;
      if (base64) {
        setImg(base64.toString());
      }
    };
    const imgTarget = e.target.files;
    if (imgTarget[0]) {
      reader.readAsDataURL(imgTarget[0]);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await BackImgAPI.createBackImage({
      image: img,
      email: window.sessionStorage.getItem("email"),
    })
      .then((result) => {
        console.log(result);
        closeModal();
      })
      .catch((err) => {
        console.log(err);
      });
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
      <Modal.Content style={{ fontFamily: "NS-R" }}>
        <ModalHeader
          style={{ justifyContent: "center", padding: "0 0 1rem 0" }}
        >
          <ModalTitle>배경 설정하기</ModalTitle>
        </ModalHeader>
        <Form onSubmit={handleSubmit}>
          <Grid.Column>
            {img === "" ? (
              <Field fluid>
                <label
                  style={{
                    fontWeight: "normal",
                    fontSize: "0.85rem",
                    color: "#a1a1a1",
                  }}
                >
                  한번 설정한 사진은 수정할 수 없으니 신중히 선택해주세요!
                </label>
                <label htmlFor="file">
                  <Form.Button
                    fluid
                    basic
                    type="button"
                    content="사진첨부"
                    icon="camera"
                    onClick={handleInputFile}
                    style={{ padding: "1rem 0", fontFamily: "NS-R" }}
                  />
                </label>
                <input
                  type="file"
                  id="file"
                  accept="image/*"
                  content_type="multipart/form-data"
                  ref={inputFile}
                  onChange={upload}
                  style={{ display: "none" }}
                />
              </Field>
            ) : (
              <div>
                <ImgContainer>
                  <Img src={img} />
                </ImgContainer>
                <Form.Button
                  fluid
                  type="submit"
                  content="등록하기"
                  style={{
                    padding: "1rem 0",
                    fontFamily: "NS-R",
                    fontWeight: "lighter",
                    background: "#009F5A",
                    color: "#ffffff",
                  }}
                />
              </div>
            )}
          </Grid.Column>
        </Form>
      </Modal.Content>
    </ReportModal>
  );
};

export default UploadModal;
