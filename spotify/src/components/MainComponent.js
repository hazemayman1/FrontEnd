import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { actions } from "react-redux-form";
import SignUp from "./SignUpComponent";
import { postFeedback } from "../redux/ActionCreators";
import Header from "../components/PremuimComponent";

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
    // const HomePage=()=>{
    //     return(
    //       <Home />
    //     )

    // }

    return (
      <div className="App">
        {/* <Header /> */}
        {/* <TransitionGroup> */}
        {/* <CSSTransition key={this.props.location.key} classNames="page" timeout={300}> */}
        <Switch>
          <Route
            exact
            path="/signup"
            component={() => (
              <SignUp
                resetFeedbackForm={this.props.resetFeedbackForm}
                postFeedback={this.props.postFeedback}
              />
            )}
          ></Route>
          <Route exact path="/premium" component={() => <Header />}></Route>
          <Redirect to="/signup"></Redirect>
        </Switch>
        {/* </CSSTransition> */}
        {/* </TransitionGroup> */}
        {/* <Footer /> */}
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));