import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        error: false
    };

    // error: 에러 정보
    // info: 에러가 발생한 위치 정보
    componentDidCatch(error, info) {
        console.log('에러가 발생했습니다.');
        console.log({
            error,
            info
        });
        this.setState({
            error: true,
        })
    }

    render() {
        if (this.state.error) {
            return <h1>에러 발생!</h1>
        }
        return this.props.children;
    }
}

/*
<ErrorBoundary>
    <User />
</ErrorBoundary>
*/

export default ErrorBoundary;