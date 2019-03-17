import React from 'react';
import App, { Container } from 'next/app';
import Page from 'components/Page';
import { ApolloProvider } from 'react-apollo';
import withData from '../lib/withApollo';

class MyApp extends App {
    // eslint-disable-next-line
    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <Container>
                <ApolloProvider client={this.props.apollo}>
                    <Page>
                        <Component {...pageProps} />
                    </Page>
                </ApolloProvider>
            </Container>
        );
    }
}

export default withData(MyApp);
