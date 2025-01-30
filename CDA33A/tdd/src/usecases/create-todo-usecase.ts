import { Todo } from '../todo.entity';
import { Usecase } from './usecase.abstract';

export class CreateTodoUsecase extends Usecase {
	// constructor(private readonly repository: InMemoryTodoRepository) {}

	execute(title: string) {
		const todo = new Todo('1', title);
		this.repository.save(todo);
		return todo;
	}
}
