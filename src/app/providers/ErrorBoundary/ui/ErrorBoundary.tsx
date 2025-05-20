import React, {ErrorInfo, PropsWithChildren, Suspense} from "react";
import {PageError} from "widgets/PageError";

interface State {
    hasError: boolean;
}

export class ErrorBoundary extends React.Component<PropsWithChildren, State> {
    constructor(props: PropsWithChildren) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError() {
        return {hasError: true};
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        const {hasError} = this.state;
        const {children} = this.props;

        if (hasError) {
            return (
                <Suspense fallback="">
                    <PageError/>
                </Suspense>
            );
        }

        return children;
    }
}