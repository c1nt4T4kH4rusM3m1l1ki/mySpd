"use client";

import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-red-500 text-center my-[200px]">
          Terjadi kesalahan. Silakan muat ulang halaman.
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;