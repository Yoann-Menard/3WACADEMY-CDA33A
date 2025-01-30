import { Todo } from '../todo.entity';

export interface ITodoRepository {
	findById(id: string): Todo | null;
	save(todo: Todo): void;
	update(todo: Todo): void;
	delete(todo: Todo): void;
}
