import { Usecase } from './usecase.abstract';

export class DeleteTodoUsecase extends Usecase {
	execute(id: string) {
		const todo = this.repository.findById(id);

		if (!todo) {
			throw new Error('Todo not found');
		}

		if (!todo.done) {
			throw new Error('Todo is not done');
		}

		this.repository.delete(todo);
	}
}
