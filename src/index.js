import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "components/navigation";
import NotFound from "components/notFound";
import { ThemeProvider } from "styled-components";
import Main from "./components/main";
import theme from "./common/theme/theme";
import { MainWrapper } from "./common/styles/common.styled";
import "./common/theme/fontFace.scss";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <MainWrapper>
        <Navigation />
        <Switch>
          <Route path="/" component={Main} exact />
          <Route component={NotFound} />
        </Switch>
      </MainWrapper>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById("mainApp")
);
