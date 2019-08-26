import React, { Component } from "react";
import { Container } from "react-bootstrap";
import i18n from '../../i18n';
import { withNamespaces } from 'react-i18next';

import "./styles.scss";

class LandingPage extends Component {
  navigateToDashBoard = () => {
    this.props.history.push("/dashboard");
  };

 changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }
  render() {
    const { t } = this.props;

    return (
      <Container>
           <div>
      <button onClick={() => this.changeLanguage('dn')}>dn</button>
      <button onClick={() => this.changeLanguage('en')}>en</button>
      <h1>{t('Welcome to React')}</h1>
    </div>
        <div>
          <div className="bgimg">
            <div className="carousel-caption d-md-block">
              <h2 className="display-4">{t('welcome')}</h2>
              <p className="lead" onClick={() => this.navigateToDashBoard()}>
                Click here to navigate to Dashboard
              </p>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
export default withNamespaces() (LandingPage);
