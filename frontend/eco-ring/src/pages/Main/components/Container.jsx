import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 100px;
  bottom: 0;
  width: 100%;
  padding: ${(props) => (props.padding ? `${props.padding}px` : '30px')};
  background-color: white;
  border-top-left-radius: 70px;
  overflow: scroll;
  transition: top 0.5s;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default Container;