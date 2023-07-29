export type PagingModel<T> = {
	count: number,
	next: 'https://admin.chatty.kr/api/v1/chatty?limit=2&offset=4',
	previous: 'https://admin.chatty.kr/api/v1/chatty?limit=2',
	results: T[]
}

export type PagingParams = {
	limit: number;
	offset: number;
}
