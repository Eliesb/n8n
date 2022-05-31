import {
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';

import {
	questionsFields,
	questionsOperations,
} from './QuestionsDescription';

import {
	metricsFields,
	metricsOperations,
} from './MetricsDescription';

import {
	databasesFields,
	databasesOperations,
} from './DatabasesDescription';

import {
	alertsFields,
	alertsOperations,
} from './AlertsDescription';

export class Metabase implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Metabase',
		name: 'metabase',
		icon: 'file:metabase.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Use the Metabase API',
		defaults: {
			name: 'Metabase',
			color: '#ff0000',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'metabaseApi',
				required: true,
				testedBy: {
					request: {
						method: 'GET',
						url: '/api/user/current',
					},
				},
			},
		],
		requestDefaults: {
			returnFullResponse: true,
			baseURL: '={{$credentials.url}}',
			headers: {
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Question',
						value: 'questions',
					},
					{
						name: 'Metric',
						value: 'metrics',
					},
					{
						name: 'Database',
						value: 'databases',
					},
					{
						name: 'Alert',
						value: 'alerts',
					},
				],
				default: 'questions',
			},
			...questionsOperations,
			...questionsFields,
			...metricsOperations,
			...metricsFields,
			...databasesOperations,
			...databasesFields,
			...alertsOperations,
			...alertsFields,
		],
	};
}
