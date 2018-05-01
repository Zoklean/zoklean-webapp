/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import Navbar from '../../components/Universal/Navbar/Navbar';
import Footer from '../../components/Universal/Footer/Footer';
import Toplayer from './Toplayer';
import Middlelayer from './Middlelayer';
import MeetyourPartner from './MeetyourPartner';
import Contractor from './Contractor';
import './HomePage.scss';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div class="globalContainer">
          <Navbar/>
          <Toplayer/>
          <Middlelayer/>
          <MeetyourPartner/>
          <Contractor/>
           <Footer/>
      </div>
    );
  }
}
