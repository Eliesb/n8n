import {
    IExecuteFunctions,
} from 'n8n-core';

import {
    IDataObject,
    INodeExecutionData,
    INodeType,
    INodeTypeDescription,
} from 'n8n-workflow';

import {
    OptionsWithUri,
} from 'request';

export class CortexXdr implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'CortexXdr',
        name: 'cortexXdr',
        icon: 'file:cortexXdr.png',
        group: ['transform'],
        version: 1,
        description: 'Consume Cortex XDR API',
        defaults: {
            name: 'CortexXdr',
            color: '#1A82e2',
        },
        inputs: ['main'],
        outputs: ['main'],
        credentials: [
        ],
        properties: [
            // Node properties which the user gets displayed and
            // can change on the node.
        ],
    };

    async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
        return [[]];
    }
}

