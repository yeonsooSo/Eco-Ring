import styled from 'styled-components';
import Container from './components/Container';
import Progress_bar from './components/ProgressBar';
import ecoring from './Eco-ring-white.svg';
import Margin from '../../Margin';
import logo from './Logo.svg';
import save from './Save.svg';
import share from "./Share.png";

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
  background-color: #009F5A;
`;

const Mosaic = styled.div`
  background-color: tomato;
  width: 360px;
  height: 360px;
`;

const Main = () => (
  <>
    <Wrapper>
      <img src={ecoring} width="140px"/>
      <Container>
        <Content>
          {/* 아래 태그의 progress 속성에 퍼센테이지 (62부분) */}
          <Progress_bar progress="62" height={40}/>
          <Margin size={40} />

          {/* 모자이크 사진 부분 */}
          <Mosaic />
          <Margin size={55} />

          {/* 파일 업로드 버튼 */}
          <img src={logo} width="70px"/>
          
          <img src={save} width="180px" />
          <Margin size={30} />
          <img src={share} width="140px" cursor="pointer" />
        </Content>
      </Container>
    </Wrapper>
  </>
);

export default Main;