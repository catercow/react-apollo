import React from 'react';
import { ApolloProviderContext } from './ApolloProvider';
export interface Context extends ApolloProviderContext {
    subContexts?: Map<React.ComponentClass, any>;
}
export declare function walkTree(element: React.ReactNode, context: Context, visitor: (element: React.ReactNode, instance: React.Component<any> | null, context: Context, childContext?: Context) => boolean | void): void;
export default function getDataFromTree(rootElement: React.ReactNode, rootContext?: any): Promise<any>;
