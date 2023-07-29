import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

class Http
{
	private readonly instance: AxiosInstance
	private readonly BASE_URL = 'https://admin.chatty.kr/api/v1'
	
	constructor()
	{
		this.instance = axios.create({
			baseURL: this.BASE_URL,
			headers: {
				Authorization: 'Token f7c00e5f68073a1786744b81e58c0968c68708fd',
			},
			// withCredentials: true
		})
	}
	
	public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T>
	{
		const res = await this.instance.get<T>(url, config)
		return res.data
	}
	
	public async post<T>(url: string,  data?: any, config?: AxiosRequestConfig): Promise<T>
	{
		const res = await this.instance.post<T>(url, data, config)
		return res.data
	}
	
	public async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>
	{
		const res = await this.instance.put<T>(url, data, config)
		return res.data
	}
	
	public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T>
	{
		const res = await this.instance.delete<T>(url, config)
		return res.data
	}
}

const http = new Http()

export default http
