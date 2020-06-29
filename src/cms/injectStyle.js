// Adapted from https://github.com/yalla-coop/accountability/blob/master/src/cms/preview-templates/injectStyle.js
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { jssPreset, StylesProvider } from '@material-ui/core/styles';
import { create } from 'jss';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from '../gatsby-theme-material-ui-top-layout/theme'

const injectStyle = WrappedComponent => {
  return class StyledComponent extends React.Component {
    state = {
      ready: false,
    };

    handleRef = ref => {
      const ownerDocument = ref ? ref.ownerDocument : null;
      this.setState({
        ready: true,
        jss: create({
          ...jssPreset(),
          insertionPoint: ownerDocument ? ownerDocument.querySelector('#demo-frame-jss') : null,
        }),
        sheetsManager: new Map(),
      });
    };

    render() {
      const { ready, jss, sheetsManager } = this.state;
      return (
        <>
          <div id="demo-frame-jss" ref={this.handleRef} />
          {ready ? (
            <StylesProvider jss={jss} sheetsManager={sheetsManager}>
              <CssBaseline />
              <MuiThemeProvider theme={theme}>
                <WrappedComponent {...this.props} />
              </MuiThemeProvider>
            </StylesProvider>
          ) : null}
        </>
      );
    }
  };
};

export default injectStyle;
