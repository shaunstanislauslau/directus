import { Meta } from './meta';

export type Query = {
	fields?: string[];
	sort?: Sort[];
	filter?: Filter;
	limit?: number;
	offset?: number;
	page?: number;
	meta?: Meta[];
	search?: string;
	export?: 'json' | 'csv' | 'xml';
	group?: string[];
	aggregate?: Aggregate;
	deep?: Record<string, Query>;
};

export type Sort = {
	column: string;
	order: 'asc' | 'desc';
};

export type Filter = {
	[keyOrOperator: string]: Filter | any;
};

/**
 * Aggregate operation. Contains column name, and the field alias it should be returned as
 */
export type Aggregate = {
	avg?: {
		[column: string]: string;
	};
	min?: {
		[column: string]: string;
	};
	max?: {
		[column: string]: string;
	};
	count?: {
		[column: string]: string;
	};
	sum?: {
		[column: string]: string;
	};
};

export type FilterOperator =
	| 'eq'
	| 'neq'
	| 'contains'
	| 'ncontains'
	| 'in'
	| 'nin'
	| 'gt'
	| 'gte'
	| 'lt'
	| 'lte'
	| 'null'
	| 'nnull'
	| 'empty'
	| 'nempty';

export type ValidationOperator = 'required' | 'regex';
