import { Collection } from './lib/Collection';
import { View } from './lib/View';
import { User, UserProps } from './User';

export class UserList extends View<User, UserProps> {
	private users: Collection<User, UserProps>;

	constructor(parent: Element, users: Collection<User, UserProps>) {
		super(parent, User.buildUser({ id: '0', name: '', age: 0 }));
		this.users = users;
		this.users.on('change', () => this.render());
		this.users.fetch();
	}

	template(): string {
		return `
            <div>
                <h1>User List</h1>
                <select class="user-select">
                    ${this.users.models
											.map(
												(user) => `
                        <option value="${user.get('id')}">${user.get(
													'name'
												)}</option>
                    `
											)
											.join('')}
                </select>
            </div>
        `;
	}

	eventsMap(): { [key: string]: () => void } {
		return {
			'change:.user-select': this.onUserSelected,
		};
	}

	onUserSelected = () => {
		const select = this.parent.querySelector(
			'.user-select'
		) as HTMLSelectElement;
		const selectedUserId = select.value;

		const selectedUser = this.users.models.find(
			(user) => user.get('id') === selectedUserId
		);

		if (selectedUser) {
			this.model.set(selectedUser.getAll());
			this.model.trigger('change');
		}
	};
}
