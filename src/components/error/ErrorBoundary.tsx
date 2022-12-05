import React from "react";

const ErrorPage = React.lazy(() => import("../../pages/404/ErrorPage"));

type ErrorBoundaryState = {
  hasError: boolean;
};
class ErrorBoundary extends React.Component<React.PropsWithChildren, ErrorBoundaryState> {
  constructor(props: React.PropsWithChildren) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError() {
    return {hasError: true};
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.debug("[REACT ERROR]", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorPage />;
    }
    return this.props.children;
  }
}

export {ErrorBoundary};
