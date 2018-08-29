import React from 'react';
import PropTypes from 'prop-types';
import { Component } from 'react';
import ApolloClient from 'apollo-client';
import { DocumentNode } from 'graphql';
export interface ApolloProviderProps<TCache> {
    client: ApolloClient<TCache>;
    children: React.ReactNode;
}
export interface ApolloProviderContext {
    client?: ApolloClient<any>;
    operations?: Map<string, {
        query: DocumentNode;
        variables: any;
    }>;
}
export default class ApolloProvider<TCache> extends Component<ApolloProviderProps<TCache>> {
    static propTypes: {
        client: PropTypes.Validator<object>;
        children: PropTypes.Validator<string | number | boolean | {} | import("prop-types/node_modules/@types/react").ReactElement<any> | import("prop-types/node_modules/@types/react").ReactNodeArray | import("prop-types/node_modules/@types/react").ReactPortal>;
    };
    static childContextTypes: {
        client: PropTypes.Validator<object>;
        operations: PropTypes.Requireable<object>;
    };
    private operations;
    constructor(props: ApolloProviderProps<TCache>, context: any);
    getChildContext(): {
        client: ApolloClient<TCache>;
        operations: any;
    };
    render(): React.ReactNode;
}
