import { InMemoryTodoRepository } from '../in-memory-todo-repository';
import { Todo } from '../todo.entity';

export abstract class Usecase {
	constructor(protected readonly repository: InMemoryTodoRepository) {}

	abstract execute(data: string): Todo | void;
}
