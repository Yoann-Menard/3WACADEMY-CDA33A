import { Attributes } from './lib/implementations/Attributes';
import { Eventing } from './lib/implementations/Eventing';
import { Collection } from './lib/Collection';
import { Model } from './lib/Model';
import { Sync } from './lib/implementations/Sync';
export interface UserProps {
	id?: string;
	name?: string;
	age?: number;
}

const apiUrl = 'http://localhost:3000/users';

export class User extends Model<UserProps> {
	static buildUser(attrs: UserProps) {
		return new User(
			new Attributes<UserProps>(attrs),
			new Eventing(),
			new Sync<UserProps>(apiUrl)
		);
	}

	static buildUserCollection() {
		return new Collection<User, UserProps>(
			'http://localhost:3000/users',
			(json: UserProps) => User.buildUser(json)
		);
	}

	setRandomAge() {
		this.set({
			age: Math.floor(Math.random() * 99 + 1),
		});
	}
}
// events: { [key: string]: Callback[] } = {};
// on(eventName: string, callback: Callback) {
// 	const handlers = this.events[eventName] || [];
// 	handlers.push(callback);
// 	this.events[eventName] = handlers;
// }

// trigger(eventName: string): void {
// 	const handlers = this.events[eventName];
// 	if (!handlers || handlers.length === 0) {
// 		return;
// 	}
// 	handlers.forEach((callback) => {
// 		callback();
// 	});
// }

// 	fetch() {
// 		axios
// 			.get(`http://localhost:3000/users/${this.get('id')}`)
// 			.then((response) => {
// 				this.set(response.data);
// 			});
// 	}

// 	save() {
// 		const id = this.get('id');
// 		if (id) {
// 			axios.put(`http://localhost:3000/users/${this.get('id')}`, this.data);
// 		} else {
// 			axios.post('http://localhost:3000/users', this.data);
// 		}
// 	}
// }
