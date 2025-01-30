import { View } from './lib/View';
import { User, UserProps } from './User';
export class UserForm extends View<User, UserProps> {
	// parent: Element;
	// parent: HTMLElement;

	template() {
		return `
    <div>
    <h1>User Details</h1>
    <h1>Name: ${this.model.get('name')}</h1>
    <h1>Age: ${this.model.get('age')}</h1>
    <hr>
    <h1>User UserForm</h1>
    <label>Name:</label>
    <input minlength = 5  />
    <button>Save</button>
    <button class="set-age">Set Random Age</button>
		<button class="save-model">Save</button>
    </div>
    `;
	}

	eventsMap() {
		return {
			// 'click:button': this.onButtonClick,
			'click:.set-age': this.onSetAgeClick,
			'click:.set-name': this.onSetNameClick,
			'click:.save-model': this.onSaveClick,
			// 'hover:h1': () => console.log('hover'),
			// 'submit:form': () => console.log('submit'),
		};
	}

	onSaveClick = () => {
		this.model.save();
	};

	onSetNameClick = () => {
		const input = this.parent.querySelector('input');
		const name = input!.value;
		if (name.length) {
			this.model.set({ name });
		}
	};
	onSetAgeClick = () => {
		this.model.setRandomAge();
	};
	// onButtonClick() {
	// 	console.log('Bouton cliquer');
	// }
}
