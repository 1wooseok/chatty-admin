import { ServerDateFormat } from '~/utils/date/type.types.ts'

export type IPFormat = `${number}.${number}.${number}.${string}.`

export type UserModel = {
	username: string;
	profile_name: string;
	profile_message: string | null;
	email: string;
	date_joined: ServerDateFormat; // "2023-01-24T09:12:34.648903",
	profile_image: string;
	background_image: string;
	recent_access_ip: IPFormat;
	deactivation_date: ServerDateFormat | null;
	is_active: boolean;
}
