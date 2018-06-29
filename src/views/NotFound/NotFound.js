import React from "react";
import { Header } from "semantic-ui-react";
import Placeholder from "components/Placeholder/Placeholder";

export default class extends React.Component {
  render() {
    return (
      <div>
        <Header size="huge" style={{ fontSize: "4rem", margin: "2em 0" }}>
          The mighty 404!
        </Header>
        <Placeholder />
      </div>
    );
  }
}
