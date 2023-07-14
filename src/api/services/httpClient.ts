import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

class HttpClient
{
	private readonly instance: AxiosInstance
	private readonly BASE_URL = 'https://chatty.kr/api/v1'
	private TIMEOUT = 10000
	
	constructor()
	{
		this.instance = axios.create({
			baseURL: this.BASE_URL,
			timeout: this.TIMEOUT,
		})
	}
	
	public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T>
	{
		const res = await this.instance.get<T>(url, config)
		return res.data
	}
	
	public async post<T, D>(url: string, data?: D, config?: AxiosRequestConfig): Promise<T>
	{
		const res = await this.instance.post<T>(url, data, config)
		return res.data
	}
	
	public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T>
	{
		const res = await this.instance.delete<T>(url, config)
		return res.data
	}
	
	public async put<T, D>(url: string, data?: D, config?: AxiosRequestConfig): Promise<T>
	{
		const res = await this.instance.put<T>(url, data, config)
		return res.data
	}
	
	public async patch<T, D>(url: string, data?: D, config?: AxiosRequestConfig): Promise<T>
	{
		const res = await this.instance.put<T>(url, data, config)
		return res.data
	}
}

export default new HttpClient()
