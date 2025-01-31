import { User } from './User';
import { UserEdit } from './UserEdit';
import { UserList } from './UserList';

const rootElement = document.getElementById('root');

const john = User.buildUser({ name: 'John Doe', age: 45 });

const userEdit = new UserEdit(rootElement!, john);
userEdit.render();
console.log(userEdit);
console.log(UserList);
