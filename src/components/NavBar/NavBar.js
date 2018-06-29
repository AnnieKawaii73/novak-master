import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { stringToKebab } from "global/utilities";
import { PEPurple, PEWhite } from "global/assets";

import {
  Container,
  Icon,
  Image,
  Menu,
  Sidebar,
  Responsive,
  Segment
} from "semantic-ui-react";

export default class AppLayout extends React.Component {
  state = { visible: false };
  handlePusher = () => {
    if (this.state.visible) this.setState({ visible: false });
  };
  handleToggle = () => this.setState({ visible: !this.state.visible });
  render() {
    const { items, primary, home, children } = this.props;
    const bkgColor = primary ? "#31647B" : "#fff";
    const color = primary ? "#fff" : "#722ed1";
    const logo = home ? (
      <Menu.Item as={Link} to={"/"}>
        <Image
          size="mini"
          style={{ margin: "auto" }}
          src={!primary ? PEPurple : PEWhite}
        />
      </Menu.Item>
    ) : null;
    const linkItemsMobile = items
      ? items.map((item, i) => (
          <Menu.Item
            as={Link}
            to={stringToKebab(item)}
            key={i}
            content={item}
            style={{ width: "80%", margin: "auto" }}
          />
        ))
      : [];
    linkItemsMobile.unshift(
      <div
        key="close"
        style={{ display: "block", marginTop: "22px", marginBottom: "20px" }}
      >
        <Icon
          name="close"
          style={{ color: color, marginLeft: "16px", verticalAlign: "middle" }}
        />
      </div>
    );
    linkItemsMobile.push(<div key="space" style={{ marginBottom: "60px" }} />);
    const linkItems = items
      ? items.map((item, i) => (
          <Menu.Item
            as={Link}
            to={stringToKebab(item)}
            key={i}
            content={item}
            style={{ color: color }}
          />
        ))
      : [];
    return (
      <div>
        <Responsive {...Responsive.onlyMobile}>
          <Sidebar.Pushable as={Segment}>
            <Sidebar
              as={Menu}
              animation="overlay"
              items={linkItemsMobile}
              vertical
              inverted
              direction="top"
              style={{ backgroundColor: bkgColor }}
              onClick={this.handleToggle}
              visible={this.state.visible}
            />
            <Sidebar.Pusher
              dimmed={this.state.visible}
              onClick={this.handlePusher}
              style={{ minHeight: "100vh" }}
            >
              <Menu
                fixed="top"
                borderless
                style={{ backgroundColor: bkgColor, color: color }}
              >
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name="sidebar" style={{ color: color }} />
                </Menu.Item>
                {logo}
              </Menu>
              <Container style={{ marginTop: "5em" }}>{children}</Container>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <Menu
            style={{ backgroundColor: bkgColor, color: color }}
            fixed="top"
            borderless
            widths={items.length + 1}
          >
            {logo}
            {linkItems}
          </Menu>
          <Container style={{ marginTop: "5em" }}>{children}</Container>
        </Responsive>
      </div>
    );
  }
}

AppLayout.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  primary: PropTypes.bool,
  home: PropTypes.bool
};

AppLayout.defaultProps = {
  items: [],
  primary: false,
  home: false
};
