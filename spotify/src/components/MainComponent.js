import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { actions } from "react-redux-form";
<<<<<<< HEAD
import SignUp from "./SignUpComponent";
import { postFeedback } from "../redux/ActionCreators";
import Home from "./HomeComponent";

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => ({
  resetFeedbackForm: () => {
    dispatch(actions.reset("feedback"));
  },
  postFeedback: (email, confirmemail, password, name, day, month, year, sex) =>
    dispatch(
      postFeedback(email, confirmemail, password, name, day, month, year, sex)
    )
});

class Main extends Component {
  componentDidMount() {}

  render() {
    const HomePage = () => {
      return <Home />;
    };

=======
import SignUp from "./SignUp/SignUpComponent";
import PremiumComponent from "./PremuimComponent";
import ChangePass from "../../src/components/ChangePassword/ChangePassword";
import AccountOverview from "./AccountOverview/AccountOverviewComponent";
import {
  postFeedback,
  postFacebookLogin,
  PremiumPost,
  GetPassword,
  PostPassword,
  GetAllInfo
} from "../redux/ActionCreators";

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  resetFeedbackForm: () => {
    dispatch(actions.reset("feedback"));
  },
  PostPassword: (password, id) => dispatch(PostPassword(password, id)),
  GetAllInfo: id => dispatch(GetAllInfo(id)),
  GetPassword: id => dispatch(GetPassword(id)),
  PremiumPost: password => dispatch(PremiumPost(password)),
  postFeedback: (email, confirmemail, password, name, day, month, year, sex) =>
    dispatch(
      postFeedback(email, confirmemail, password, name, day, month, year, sex)
    ),
  postFacebookLogin: (email, image, name) =>
    dispatch(postFacebookLogin(email, image, name))
});

class Main extends Component {
  componentDidMount() {}

  render() {
    // const HomePage=()=>{
    //     return(
    //       <Home />
    //     )

    // }

>>>>>>> 13861c1b3b0c24ce0886298fc18a6fa7c77f110c
    return (
      <div className="App">
        {/* <Header /> */}
        {/* <TransitionGroup> */}
        {/* <CSSTransition key={this.props.location.key} classNames="page" timeout={300}> */}
        <Switch>
<<<<<<< HEAD
          <Route exactpath="/" component={Home}></Route>
          <Redirect to="/"></Redirect>
          <Route
            exactpath="/signup"
            component={() => (
              <SignUp
                resetFeedbackForm={this.props.resetFeedbackForm}
                postFeedback={this.props.postFeedback}
              />
            )}
          ></Route>
          <Redirect to="/"></Redirect>
=======
          <Route
            exact
            path="/signup"
            component={() => (
              <SignUp
                resetFeedbackForm={this.props.resetFeedbackForm}
                postFacebookLogin={this.props.postFacebookLogin}
                postFeedback={this.props.postFeedback}
              />
            )}
          />
          <Route
            exact
            path="/changePassword"
            component={() => (
              <ChangePass
                PostPassword={this.props.PostPassword}
                GetPassword={this.props.GetPassword}
              />
            )}
          />
          <Route
            exact
            path="/premium"
            component={() => (
              <PremiumComponent PremiumPost={this.props.PremiumPost} />
            )}
          />
          <Route
            exact
            path="/accountoverview"
            component={() => (
              <AccountOverview GetAllInfo={this.props.GetAllInfo} />
            )}
          />
          <Redirect to="/signup" />
>>>>>>> 13861c1b3b0c24ce0886298fc18a6fa7c77f110c
        </Switch>
        {/* </CSSTransition> */}
        {/* </TransitionGroup> */}
        {/* <Footer /> */}
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
