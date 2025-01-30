import { View } from './lib/View';
import { User, UserProps } from './User';
import { UserForm } from './UserForm';
import { UserShow } from './UserShow';
export class UserEdit extends View<User, UserProps> {
	template(): string {
		return `
    <div>
      <div class="user-show"></div>
      <div class="user-form"></div>
    </div>
  `;
	}

	regionsMap(): { [key: string]: string } {
		return {
			userShow: '.user-show',
			userForm: '.user-form',
		};
	}

	attachViews(): void {
		console.log(this.regions);
		new UserForm(this.regions.userForm, this.model).render()
    new UserShow(this.regions.userShow, this.model).render()
    
	}

	eventsMap(): { [key: string]: () => void } {
		return {};
	}
}
