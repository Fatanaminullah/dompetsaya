import React, { Component } from 'react';
import { AtiRouter } from 'ati-web-security';
import routeSources from './router-config';

class Router extends Component {
    render() {
        const { history } = this.props;
        const baseUrl = process.env.PUBLIC_URL;
        return (
            <AtiRouter
                history={history}
                routeSources={routeSources}
                accessDeniedUrl="/page403"
                baseUrl={baseUrl}
                // cookies={this.props.cookies}
            />
        );
    }
}

export default Router;