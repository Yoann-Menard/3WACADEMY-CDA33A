import { IEventing } from './interfaces/Eventing.interface';
import { HasId } from './interfaces/HasId.interface';
import { IModelAttributes } from './interfaces/ModelAttributes.interface';
import { ISync } from './interfaces/sync.interface';

export abstract class Model<P extends HasId> {
	constructor(
		private attributes: IModelAttributes<P>,
		private eventing: IEventing,
		private sync: ISync<P>
	) {}

	get on() {
		return this.eventing.on;
	}
	get trigger() {
		return this.eventing.trigger;
	}

	get get() {
		return this.attributes.get;
	}

	set(update: P) {
		this.attributes.set(update);
		this.trigger('change');
	}

	fetch() {
		const id = this.get('id');
		if (id) {
			this.sync.fetch(id).then((response) => {
				this.set(response.data);
			});
		}
	}

	save() {
		this.sync
			.save(this.attributes.getAll())
			.then((response) => {
				this.trigger('save');
			})
			.catch(() => {
				this.trigger('error');
			});
	}
}
