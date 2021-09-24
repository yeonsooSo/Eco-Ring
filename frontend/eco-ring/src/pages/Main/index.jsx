import styled from 'styled-components';
import Container from './components/Container';
import Progress_bar from './components/ProgressBar';
import ecoring from './Eco-ring-white.svg';
import Margin from '../../Margin';
import logo from './Logo.svg';

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
  padding-top: 28px;
  width: 100vw;
  height: 100vh;
  background-color: #009F5A;
`;

const Main = () => (
  <>
    <Wrapper>
      <img src={ecoring} width="150px"/>
      <Container>
        <Content>
          {/* 아래 태그의 progress 속성에 퍼센테이지 (62부분) */}
          <Progress_bar progress="62" height={40}/>
          <Margin size={40} />

          {/* 모자이크 사진 부분 */}
          <img src={logo} width="320px" height="320px"/>

          <Margin size={50} />

          {/* 파일 업로드 버튼 */}
          <img src={logo} width="50px"/>
        </Content>
      </Container>
    </Wrapper>
  </>
);

export default Main;