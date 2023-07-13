// import { Injectable } from '@nestjs/common';
// import AWS from 'aws-sdk';

// @Injectable()
// export class OpenSearchService {
//   private readonly opensearch: AWS.OpenSearchService;

//   constructor() {
//     // Initialize the OpenSearch client
//     this.opensearch = new AWS.OpenSearchService();
//   }

//   async createIndex(): Promise<string> {
//     // Set the index name and parameters
//     const indexName = 'JOB';
//     const indexParams = {
//       DomainName: 'your_opensearch_domain_name',
//       IndexName: indexName,
//       IndexParams: {
//         mappings: {
//           properties: {
//             field1: {
//               type: 'text',
//             },
//             field2: {
//               type: 'keyword',
//             },
//           },
//         },
//         settings: {
//           index: {
//             number_of_shards: 1,
//             number_of_replicas: 0,
//           },
//         },
//       },
//     };

//     try {
//       // Create the index
//       const createIndexResponse = await this.opensearch
//         .createOutboundConnection(indexParams)
//         .promise();

//       if (createIndexResponse.ConnectionId) {
//         return `Successfully created index: ${indexName}`;
//       } else {
//         throw new Error(`Failed to create index: ${indexName}`);
//       }
//     } catch (error) {
//       throw new Error(`Failed to create index: ${indexName}. Error: ${error.message}`);
//     }
//   }
// }
