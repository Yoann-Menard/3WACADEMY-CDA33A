import { InMemoryTodoRepository } from '../src/in-memory-todo-repository';
import { Todo } from '../src/todo.entity';
import { CreateTodoUsecase } from '../src/usecases/create-todo-usecase';
import { DeleteTodoUsecase } from '../src/usecases/delete-todo-usecase';
import { ToggleDoneUsecase } from '../src/usecases/toggle-done-usecase';

describe('Todolist', () => {
	let repository: InMemoryTodoRepository;
	let createTodoUsecase: CreateTodoUsecase;
	let toggleDoneUsecase: ToggleDoneUsecase;
	let deleteTodoUsecase: DeleteTodoUsecase;
	let todo: Todo;

	beforeEach(() => {
		repository = new InMemoryTodoRepository();
		createTodoUsecase = new CreateTodoUsecase(repository);
		toggleDoneUsecase = new ToggleDoneUsecase(repository);
		deleteTodoUsecase = new DeleteTodoUsecase(repository);
		todo = createTodoUsecase.execute('A new todo');
	});

	describe('Scenario: create todo', () => {
		it('should create a new todo in db', () => {
			// const repository = new InMemoryTodoRepository();
			// const createTodoUsecase = new CreateTodoUsecase(repository);
			const todo = createTodoUsecase.execute('A new todo');

			const fetchedTodo = repository.findById(todo.id);

			expect(fetchedTodo).not.toBeNull();
			expect(fetchedTodo!.title).toEqual('A new todo');
		});
	});

	describe('Scenario: Toggle done a todo', () => {
		it('it should fail if todo does not exist', () => {
			// const repository = new InMemoryTodoRepository();
			// const createTodoUsecase = new CreateTodoUsecase(repository);
			createTodoUsecase.execute('A new todo');
			// const toggleDoneUsecase = new ToggleDoneUsecase(repository);
			expect(() => toggleDoneUsecase.execute('non-existing-id')).toThrow(
				'Todo not found'
			);
		});
		it('it should toggle done a todo', () => {
			const todo = createTodoUsecase.execute('A new todo');
			// const repository = new InMemoryTodoRepository();
			toggleDoneUsecase.execute(todo.id);

			const updatedTodo = repository.findById(todo.id);
			expect(updatedTodo!.done).toBeTruthy();
		});
	});

	describe('Scenario: Delete todo', () => {
		it('should fail if todo does not exist', () => {
			// const repository = new InMemoryTodoRepository();
			// const createTodoUsecase = new CreateTodoUsecase(repository);
			createTodoUsecase.execute('A new todo');
			// const deleteTodoUsecase = new DeleteTodoUsecase(repository);
			expect(() => deleteTodoUsecase.execute('non-existing-id')).toThrow(
				'Todo not found'
			);
		});
		it('should fail if todo is not done', () => {
			const todo = createTodoUsecase.execute('A new todo');
			expect(() => deleteTodoUsecase.execute(todo.id)).toThrow(
				'Todo is not done'
			);
			// const repository = new InMemoryTodoRepository();
		});
		it('should delete a todo', () => {
			toggleDoneUsecase.execute(todo.id);
			deleteTodoUsecase.execute(todo.id);

			const deletedTodo = repository.findById(todo.id);
			expect(deletedTodo).toBeNull();
		});
	});
});
