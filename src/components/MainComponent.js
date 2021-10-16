import React, { Component } from "react";
import Directory from "./DirectoryComponent";
import { CAMPSITES } from "../shared/campsites";
import Home from "./HomeComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Contact from "./ContactComponent";
import { COMMENTS } from '../shared/comments';
import { PARTNERS } from '../shared/partners';
import { PROMOTIONS } from '../shared/promotions';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
        campsites: CAMPSITES,
        comments: COMMENTS,
        partners: PARTNERS,
        promotions: PROMOTIONS
    };
}

  render() {
    const HomePage = () => {
      return <Home />;
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/contactus" component={Contact} />
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/directory"
            render={() => <Directory campsites={this.state.campsites} />}
          />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}
export default Main;
