import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

class Http
{
	private readonly instance: AxiosInstance
	private readonly BASE_URL = 'https://admin.chatty.kr/api/v1'
	
	constructor()
	{
		const Token = localStorage.getItem('CHATTY_ADMIN_ACCESS')

		this.instance = axios.create({
			baseURL: this.BASE_URL,
			headers: {
				Authorization: Token ? `Token ${Token}` : null,
			},
		})
		
		this.instance.interceptors.request.use((config) =>
		{
			const Token = localStorage.getItem('CHATTY_ADMIN_ACCESS')
			
			if (Token)
			{
				const currAuthHeader = config.headers.Authorization
				
				if (!currAuthHeader)
				{
					config.headers.Authorization = `Token ${Token}`
				}
			}

			return config
		})
	}
	
	public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T>
	{
		const res = await this.instance.get<T>(url, config)
		return res.data
	}
	
	public async post<T>(url: string,  data?: unknown, config?: AxiosRequestConfig): Promise<T>
	{
		const res = await this.instance.post<T>(url, data, config)
		return res.data
	}
	
	// public async put<T>(url: string, data?: Request, config?: AxiosRequestConfig): Promise<T>
	// {
	// 	const res = await this.instance.put<T>(url, data, config)
	// 	return res.data
	// }
	//
	// public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T>
	// {
	// 	const res = await this.instance.delete<T>(url, config)
	// 	return res.data
	// }
}

const http = new Http()

export default http
