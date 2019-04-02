import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Main from "./containers/main";
import Store from "./store";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "components/navigation";
import NotFound from "components/notFound";
import { ThemeProvider } from "styled-components";
import theme from "./common/theme/theme";
import { MainWrapper } from "./common/styles/common.styled.js";
import "./common/theme/fontFace.scss";

ReactDOM.render(
  <Provider store={Store}>
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
    </ThemeProvider>
  </Provider>,
  document.getElementById("mainApp")
);
