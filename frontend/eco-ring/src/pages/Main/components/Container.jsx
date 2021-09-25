import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 90px;
  bottom: 0;
  width: 100%;
  padding: 30px;
  background-color: white;
  border-top-left-radius: 60px;
  overflow: scroll;
  transition: top 0.5s;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default Container;