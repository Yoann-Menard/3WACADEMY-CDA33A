import { Usecase } from './usecase.abstract';

export class ToggleDoneUsecase extends Usecase {
	// constructor(private readonly repository: InMemoryTodoRepository) {}
	execute(id: string) {
		const todo = this.repository.findById(id);

		if (!todo) {
			throw new Error('Todo not found');
		}

		todo.done = !todo.done;
		this.repository.update(todo);
	}
}
