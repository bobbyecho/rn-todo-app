import React from "react"

type ErrorBoundaryProps = {
  onError(error: Error, errorInfo: React.ErrorInfo): void
  children: JSX.Element
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps> {
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.props.onError(error, errorInfo)
  }

  render() {
    return this.props.children
  }
}

export default ErrorBoundary