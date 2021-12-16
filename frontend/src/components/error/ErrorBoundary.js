/* eslint-disable no-console */
/* eslint-disable object-shorthand */
/* eslint-disable no-unused-expressions */
/* eslint-disable semi */

import React from 'react';
import ErrorPage from './ErrorPage';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      errorInfo: ''
    };
  }

  static getDerivedStateFromError(error) {
    return { error: error };
  }

  componentDidMount() {
    window.addEventListener('unhandledrejection', this.promiseRejectionHandler)
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.promiseRejectionHandler);
  }

  promiseRejectionHandler(event) {
    this.setState({
      error: event.reason
    });
  }

  render() {
    if (this.state.error === 500) {
      return <ErrorPage errorCode="500" />;
    }
    if (this.state.error || this.state.errorInfo) {
      return <h1>{this.state.errorInfo.componentStack}</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
