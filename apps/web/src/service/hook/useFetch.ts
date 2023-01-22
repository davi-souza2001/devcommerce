import { api } from "../../data/client"

const UseFetch = (url: string, method: 'POST' | 'GET', body?: any) => {
	if(method === "POST"){
		return api.post(url, body).then(res => res.data)
	} else if(method === "GET"){
		return api.get(url, body).then(res => res.data)
	} else{
		throw new Error('Invalid request method')
	}
}

export default UseFetch
