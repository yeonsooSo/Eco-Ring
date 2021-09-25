import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Container from "./components/Container";
import Progress_bar from "./components/ProgressBar";
import ecoring from "./Eco-ring-white.svg";
import Margin from "../../Margin";
import logo from "./Logo.svg";
import save from "./Save.svg";
import share from "./Share.png";
import { Button } from "semantic-ui-react";
import UploadModal from "components/UploadModal";
import BackImgAPI from "api/BackImgAPI";
import { useHistory } from "react-router";
import photo from "./photo.png";

const Content = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 1vh;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 26px;
  width: 100vw;
  height: 100vh;
  background-color: #009f5a;
`;

const MosaicBg = styled.div`
  background-color: lightgray;
  width: 360px;
  height: 360px;
  color: #000;
  text-align: center;
  font-family: "NS-R";
  line-height: 360px;
`;

const Mosaic = styled.img`
  background-color: lightgray;
  width: 360px;
  height: 360px;
`;

const Main = (props) => {
  const [uploadModalopened, setUploadModalopened] = useState(false);
  const [mosaic, setMosaic] = useState("");
  const [progress, setProgress] = useState("");
  const history = useHistory();

  const getMosaic = async () => {
    await BackImgAPI.getBackImage(window.sessionStorage.getItem("email"))
      .then((result) => {
        console.log(result);
        setMosaic(result.data.image);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMosaic();
  }, [history, mosaic]);

  return (
    <>
      <UploadModal setOpen={setUploadModalopened} open={uploadModalopened} />
      <Wrapper>
        <img src={ecoring} width="140px" />
        <Container>
          <Content>
            {/* 아래 태그의 progress 속성에 퍼센테이지 (62부분) */}
            <Progress_bar progress="62" height={40} />
            <Margin size={40} />

            {/* 모자이크 사진 부분 */}
            <div>
              <Mosaic src={photo} />
            </div>
            <Margin size={55} />

            {mosaic === "" ? (
              <div>
                {/* 배경설정 */}
                <Button
                  size="small"
                  style={{ color: "#ffffff", background: "#009f5a" }}
                  onClick={() => setUploadModalopened(true)}
                >
                  배경 설정하기
                </Button>
                <Margin size={30} />
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* 파일 업로드 버튼 */}
                <img src={logo} width="70px" />
                <img src={save} width="180px" />
              </div>
            )}

            <Margin size={30} />
            <img src={share} style={{ width: "140px", cursor: "pointer" }} />
          </Content>
        </Container>
      </Wrapper>
    </>
  );
};

export default Main;
