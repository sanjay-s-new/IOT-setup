import { HttpRouteIntegrationBindOptions, HttpRouteIntegrationConfig, HttpMethod, HttpRouteIntegration, ParameterMapping } from '../../../aws-apigatewayv2';
import { Duration } from '../../../core';
/**
 * Properties to initialize a new `HttpProxyIntegration`.
 */
export interface HttpUrlIntegrationProps {
    /**
     * The HTTP method that must be used to invoke the underlying HTTP proxy.
     * @default HttpMethod.ANY
     */
    readonly method?: HttpMethod;
    /**
     * Specifies how to transform HTTP requests before sending them to the backend
     * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html
     * @default undefined requests are sent to the backend unmodified
     */
    readonly parameterMapping?: ParameterMapping;
    /**
     * The maximum amount of time an integration will run before it returns without a response.
     * Must be between 50 milliseconds and 29 seconds.
     *
     * @default Duration.seconds(29)
     */
    readonly timeout?: Duration;
}
/**
 * The HTTP Proxy integration resource for HTTP API
 */
export declare class HttpUrlIntegration extends HttpRouteIntegration {
    private readonly url;
    private readonly props;
    /**
     * @param id id of the underlying integration construct
     * @param url the URL to proxy to
     * @param props properties to configure the integration
     */
    constructor(id: string, url: string, props?: HttpUrlIntegrationProps);
    bind(_options: HttpRouteIntegrationBindOptions): HttpRouteIntegrationConfig;
}
