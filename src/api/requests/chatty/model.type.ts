import { ServerDateFormat } from '~/utils/date/type.types.ts'

export type ChattyModel = {
	pk: number;
	created_date: ServerDateFormat;
	answered_date: null | ServerDateFormat;
	profile: Profile;
	author: Profile | null;
	content: string;
	answer_content: string | null;
	refusal_status: boolean;
	like: number;
	anonymous_status: boolean;
}

export type Profile = {
	username: string;
	profile_name: string;
	profile_image: string
	background_image: string;
}

// todo: 질문, 답변 내용 <td > 최대 길이 지정
// todo: 무한 스크롤 + virtual scroll로 수정
