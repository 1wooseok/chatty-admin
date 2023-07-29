import { UserModel } from '~/api/requests/users/models.type.ts'
import { ChattyModel } from '~/api/requests/chatty/model.type.ts'

export type ReportModel = {
	question: ChattyModel;
	reporter: UserModel;
}
