import { User } from './User';
import { UserEdit } from './UserEdit';

const rootElement = document.getElementById('root');
const john = User.buildUser({ name: 'John Doe', age: 45 });

const userEdit = new UserEdit(rootElement!, john);
userEdit.render();
console.log(userEdit);
// const userShow = new UserShow(rootElement!, john);
// userShow.render();

// const userForm = new UserForm(rootElement!, john);
// userForm.render();

// const obj = {
// 	name: 'John Doe',
// 	age: 34,
// };

// for (let key in obj) {
// 	console.log(key);
// }
// const collectionUsers = new Collection<User, UserProps>(
// 	'http://localhost:3000/users',
// 	(json: UserProps) => User.buildUser(json)
// );

// const collection = User.buildUserCollection();
// collection.on('change', () => {
// 	console.log('Chargement des données');
// });
// collection.fetch();

// console.log(collection.models);

// collectionUsers.fetch();
// const john = User.buildUser({ id: 'e2ca' });
// john.fetch();
// console.log(john);
// alice.on('change', () => console.log('mise a jour de mes donnees'));
// alice.fetch();
// console.log(alice);
// const john = new User({ name: 'John Doe', age: 34 });
// const name = john.attributes.get('name');
// const age = john.attributes.get('age');
// john.on('change', () => console.log("j'ai changé"));
// john.set({ age: 56 });
// // john.sync.save({ name, age });
// // john.on();
// // john.sync.fetch();
// // john.set({ age: 67 });
// console.log(john.get('name'));

// const obj = {
// 	couleur: 'rouge',
// 	printcolor() {
// 		console.log(this.couleur);
// 	},
// };

// const toto = obj.printcolor;
// toto();

// john.eventing.on('click', () => console.log('click'));
// john.eventing.trigger('click');
// john.save();

// const alice = new User({ name: 'Alice Bowman', age: 34 });
// alice.save();
// console.log(alice);
// const john = new User({ name: 'John Doe', age: 30 });
// {name: ..., age: ...}
// john.save();
// {name: ..., age: ..., id: ...}
// const alice = new User({ id: '62c9' });
// {id: ...}
// alice.fetch();
// {name: ..., age: ..., id: ...}
// axios.post('http://localhost:3000/users', {
// 	name: 'John Doe',
// 	age: 30,
// });

// const john = new User({ name: 'John', age: 30 });
// john.set({ age: 45 });

// console.log(john.get('age'));
// console.log(john.get('name'));
// console.log(john);
// console.table(john);
// {
// 	click: [() => console.log('Hello'), () => console.log('bonsoir')];
// }

// john.on('click', () => console.log('Callback 1'));
// john.on('click', () => console.log('Callback 2'));
// john.on('submit', () => console.log('Callback 3'));

// john.trigger('click');
// console.log(john.events);
