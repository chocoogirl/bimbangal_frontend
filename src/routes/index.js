import React from 'react'
import { BrowserRouter,Route,Switch } from 'react-router-dom'
import styled from 'styled-components'
import { App,Header,Overview,WhoAmI,NoImageFound } from 'components'
import { PictureDetail,PictureResults } from 'containers'


const Container = styled.div`
  width: 75%;
  margin: 0 auto;
`;

function Routes() {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Switch>
          <Route path={"/picture/:id"} component={PictureDetail} />
          <Route path={"/aboutme"} component={WhoAmI} />
          <Route path={"/overview"} component={Overview} />
          <Route path={"/searchresults/:term"} component={PictureResults} />
          <Route path={"/noimagefound"} component={NoImageFound} />
          <Route path={"/"} component={App} />
        </Switch>
      </Container>
    </BrowserRouter>
  )
}

export default Routes
