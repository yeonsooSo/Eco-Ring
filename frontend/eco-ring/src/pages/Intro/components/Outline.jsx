import styled from 'styled-components';
import ecoring from '../Eco-ring.svg';
import Margin from '../../../Margin';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 10px;
`;

const Text = styled.div`
  line-height: 1.2;
  font-size: 20pt;
  color: black;
  font-weight: 800;
  margin-bottom: 120px;
  font-family: 'Noto Sans KR', sans-serif;
`;

const Outline = () => (
  <>
    <Wrapper>
      <div>
        <Text>
          당신의 작은 움직임이 모여
          <br />
          아름다운 결과를 만들 때까지,
          <br />
          <Margin size={10}/>
          <img src={ecoring} width="160px"/>
        </Text>
      </div>
    </Wrapper>
  </>
);

export default Outline;