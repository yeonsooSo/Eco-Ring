import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Container from './components/Container';
import ecoring from './Eco-ring-white.svg';

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
        </Content>
      </Container>
        <Link to="/Login">
        </Link>
    </Wrapper>
  </>
);

export default Main;