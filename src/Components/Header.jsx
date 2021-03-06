import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
} from "reactstrap";
import "../style/style.css";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };
    this.togglerNav = this.togglerNav.bind(this);
  }
  togglerNav = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  };
  render() {
    return (
      <Navbar color="dark" light expand="md">
        <div className="container">
          <NavbarBrand className="ml-auto " href="/">
            <h3 className="text-light">FliprEmail</h3>
          </NavbarBrand>
          <NavbarToggler onClick={this.togglerNav} />

          <Collapse
            isOpen={this.state.isNavOpen}
            navbar
            className="text-left ml-4 ml-md-1 "
          >
            <Nav classname="mr-auto" navbar>
              <NavItem>
                <NavLink className="nav-link" to="/Home">
                  <i className="fa fa-home"></i>
                  <span className="text-light">Home</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/History">
                  <i className="fas fa-history"></i>{" "}
                  <span className="text-light">History</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/email">
                  <i className="fas fa-envelope-open"></i>{" "}
                  <span className="text-light">Compose email</span>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    );
  }
}
export default Header;
