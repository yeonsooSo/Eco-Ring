import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import  Intro from '../pages/Intro';
import  Main from '../pages/Main';


const BodyStyle = createGlobalStyle`
  font-family: 'Noto Sans KR', sans-serif;
`;

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <BodyStyle color="#E8E5DF" />
        <Intro />
      </Route>
      <Route exact path="/main">
        <BodyStyle />
        <Main />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;