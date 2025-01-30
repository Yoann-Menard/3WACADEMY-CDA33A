import { Todo } from './todo.entity';
import { ITodoRepository } from './usecases/todo-repository.interface';

export class InMemoryTodoRepository implements ITodoRepository {
	deleteById(id: string) {
		throw new Error('Method not implemented.');
	}
	todos: Todo[] = [];

	save(todo: Todo) {
		this.todos.push(todo);
	}
	findById(id: string) {
		const todo = this.todos.find((t) => t.id === id);
		return todo ?? null;
	}

	update(updatedTodo: Todo): void {
		const idx = this.todos.findIndex((t) => t.id === updatedTodo.id);
		this.todos[idx] = updatedTodo;
	}

	delete(todo: Todo): void {
		const idx = this.todos.findIndex((t) => t.id === todo.id);
		this.todos.splice(idx, 1);
		// this.todos.slice();
	}
}
