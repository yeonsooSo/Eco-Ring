import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from './Logo.svg';
import click from './clickme.svg';
import Outline from './components/Outline';

const Logo = styled.img`
	width: 140px;
`

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
  background-color: #E8E5DF;

`;

const Intro = () => (
  <>
    <Wrapper>
      <SubWrapper>
        <Content>
          <Outline />
        </Content>
        <Link to="/Login">
          <Logo src={logo} />
        </Link>
          <img src={click} width="120px"/>
      </SubWrapper>

    </Wrapper>
  </>
);

export default Intro;