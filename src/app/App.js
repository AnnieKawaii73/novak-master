import React from "react";
import Routes from "./Routes";
import AppLayout from "components/NavBar/NavBar";
import { withRouter } from "react-router-dom";

class App extends React.Component {
  state = {
    language: "english"
  };
  changeLanguageTo = language => {
    this.setState({ spanish: language });
  };
  render() {
    const childProps = {
      language: this.state.language,
      changeLanguageTo: this.changeLanguageTo
    };
    console.log(this.state.isAuthenticated);
    return (
      <AppLayout
        items={["About", "Services", "Products", "Partners", "Contact"]}
        home
        primary
      >
        <div style={{ textAlign: "center", width: "100%", margin: "auto" }}>
          <Routes childProps={childProps} />
        </div>
      </AppLayout>
    );
  }
}

export default withRouter(App);
