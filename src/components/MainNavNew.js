import React from "react";
import PropTypes from "prop-types";

export function MainNav({ children }) {
  return (
    <nav className="sgds-navbar" role="navigation">
      {children}
    </nav>
  );
}

export function MainNavBrand(props) {
  return <div className="sgds-navbar-brand">{props.children}</div>;
}

export function MainNavItem(props) {
  if (props.as) {
    const MorphedComponent = props.as;
    return <MorphedComponent {...props}>{props.children}</MorphedComponent>;
  }
  return (
    <a className="sgds-navbar-item" href={props.href}>
      {props.children}
    </a>
  );
}
MainNavItem.propTypes = {
  as: PropTypes.elementType,
  href: PropTypes.string,
};

export function MainNavBurger() {
  return (
    <div className="sgds-navbar-burger">
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export function MainNavMenu({ children }) {
  return <div className="sgds-navbar-menu">{children}</div>;
}

export function MainNavMenuStart() {}

export function MainNavMenuEnd() {}
