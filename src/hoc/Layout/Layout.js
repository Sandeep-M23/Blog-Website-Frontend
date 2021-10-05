import React from 'react';
import MainNavigation from '../../Shared/Components/Navigation/MainNavigation';

import './Layout.css'

const Layout = (props) => {
    return (
      <React.Fragment>
        <MainNavigation />
        <main className="Layout">{props.children}</main>
      </React.Fragment>
    );
}
export default Layout