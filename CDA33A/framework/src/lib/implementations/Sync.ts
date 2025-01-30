import axios from 'axios';
import { HasId } from '../interfaces/HasId.interface';
export class Sync<P extends HasId> {
	constructor(public apiUrl: string) {}
	fetch(id: string) {
		return axios.get(`${this.apiUrl}/${id}`);
		// .then((response) => {
		// this.set(response.data);
		// });
	}

	save(data: P) {
		// const id = this.get('id');
		const { id } = data;
		if (id) {
			return axios.patch(`${this.apiUrl}/${id}`, data);
		}
		return axios.post(`${this.apiUrl}`, data);
		// } else {
		// 	axios.post('http://localhost:3000/users', data);
	}
}
