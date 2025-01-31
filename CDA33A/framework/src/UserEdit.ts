import { View } from './lib/View';
import { User, UserProps } from './User';
import { UserForm } from './UserForm';
import { UserList } from './UserList';
import { UserShow } from './UserShow';
import { Collection } from './lib/Collection';
export class UserEdit extends View<User, UserProps> {
	template(): string {
		return `
    <div>
      <div class="user-show"></div>
      <div class="user-form"></div>
			<div class="user-list"></div>
    </div>
  `;
	}

	regionsMap(): { [key: string]: string } {
		return {
			userShow: '.user-show',
			userForm: '.user-form',
			userList: '.user-list',
		};
	}

	attachViews(): void {
		console.log(this.regions);
		const users = new Collection<User, UserProps>(
			'http://localhost:3000/users',
			(json: UserProps) => User.buildUser(json)
		);
		new UserForm(this.regions.userForm, this.model).render();
		new UserShow(this.regions.userShow, this.model).render();
		new UserList(this.regions.userList, users).render();
	}

	eventsMap(): { [key: string]: () => void } {
		return {};
	}
}
