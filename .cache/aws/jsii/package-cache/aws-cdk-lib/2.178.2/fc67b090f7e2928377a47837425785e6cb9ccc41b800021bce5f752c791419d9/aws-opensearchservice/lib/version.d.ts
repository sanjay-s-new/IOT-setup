/**
 * OpenSearch version
 */
export declare class EngineVersion {
    readonly version: string;
    /** AWS Elasticsearch 1.5 */
    static readonly ELASTICSEARCH_1_5: EngineVersion;
    /** AWS Elasticsearch 2.3 */
    static readonly ELASTICSEARCH_2_3: EngineVersion;
    /** AWS Elasticsearch 5.1 */
    static readonly ELASTICSEARCH_5_1: EngineVersion;
    /** AWS Elasticsearch 5.3 */
    static readonly ELASTICSEARCH_5_3: EngineVersion;
    /** AWS Elasticsearch 5.5 */
    static readonly ELASTICSEARCH_5_5: EngineVersion;
    /** AWS Elasticsearch 5.6 */
    static readonly ELASTICSEARCH_5_6: EngineVersion;
    /** AWS Elasticsearch 6.0 */
    static readonly ELASTICSEARCH_6_0: EngineVersion;
    /** AWS Elasticsearch 6.2 */
    static readonly ELASTICSEARCH_6_2: EngineVersion;
    /** AWS Elasticsearch 6.3 */
    static readonly ELASTICSEARCH_6_3: EngineVersion;
    /** AWS Elasticsearch 6.4 */
    static readonly ELASTICSEARCH_6_4: EngineVersion;
    /** AWS Elasticsearch 6.5 */
    static readonly ELASTICSEARCH_6_5: EngineVersion;
    /** AWS Elasticsearch 6.7 */
    static readonly ELASTICSEARCH_6_7: EngineVersion;
    /** AWS Elasticsearch 6.8 */
    static readonly ELASTICSEARCH_6_8: EngineVersion;
    /** AWS Elasticsearch 7.1 */
    static readonly ELASTICSEARCH_7_1: EngineVersion;
    /** AWS Elasticsearch 7.4 */
    static readonly ELASTICSEARCH_7_4: EngineVersion;
    /** AWS Elasticsearch 7.7 */
    static readonly ELASTICSEARCH_7_7: EngineVersion;
    /** AWS Elasticsearch 7.8 */
    static readonly ELASTICSEARCH_7_8: EngineVersion;
    /** AWS Elasticsearch 7.9 */
    static readonly ELASTICSEARCH_7_9: EngineVersion;
    /** AWS Elasticsearch 7.10 */
    static readonly ELASTICSEARCH_7_10: EngineVersion;
    /** AWS OpenSearch 1.0 */
    static readonly OPENSEARCH_1_0: EngineVersion;
    /** AWS OpenSearch 1.1 */
    static readonly OPENSEARCH_1_1: EngineVersion;
    /** AWS OpenSearch 1.2 */
    static readonly OPENSEARCH_1_2: EngineVersion;
    /** AWS OpenSearch 1.3 */
    static readonly OPENSEARCH_1_3: EngineVersion;
    /**
     * AWS OpenSearch 2.3
     *
     * OpenSearch 2.3 is now available on Amazon OpenSearch Service across 26
     * regions globally. Please refer to the AWS Region Table for more
     * information about Amazon OpenSearch Service availability:
     * https://aws.amazon.com/about-aws/global-infrastructure/regional-product-services/
     * */
    static readonly OPENSEARCH_2_3: EngineVersion;
    /** AWS OpenSearch 2.5 */
    static readonly OPENSEARCH_2_5: EngineVersion;
    /** AWS OpenSearch 2.7 */
    static readonly OPENSEARCH_2_7: EngineVersion;
    /** AWS OpenSearch 2.9 */
    static readonly OPENSEARCH_2_9: EngineVersion;
    /**
     * AWS OpenSearch 2.10
     * @deprecated use latest version of the OpenSearch engine
     **/
    static readonly OPENSEARCH_2_10: EngineVersion;
    /** AWS OpenSearch 2.11 */
    static readonly OPENSEARCH_2_11: EngineVersion;
    /** AWS OpenSearch 2.13 */
    static readonly OPENSEARCH_2_13: EngineVersion;
    /** AWS OpenSearch 2.15 */
    static readonly OPENSEARCH_2_15: EngineVersion;
    /** AWS OpenSearch 2.17 */
    static readonly OPENSEARCH_2_17: EngineVersion;
    /**
     * Custom ElasticSearch version
     * @param version custom version number
     */
    static elasticsearch(version: string): EngineVersion;
    /**
     * Custom OpenSearch version
     * @param version custom version number
     */
    static openSearch(version: string): EngineVersion;
    /**
     * @param version engine version identifier
     */
    private constructor();
}
