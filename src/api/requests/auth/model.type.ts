export type LoginPayload = {
	username: string;
	password: string;
}

export type LoginResponse = LoginPayload & {
	Token: string;
}
