
export interface Todo {
  toDoId?: number;
  description?: string;
  startDate?: string | number;
  endDate?: string | number;
}

export interface TodoComponentProps {
  todo: Todo;
  removeTodo: (todoId: number) => void;
}

export interface TodoValidationErrors extends Todo {}

export interface GenericError {
  message?: string;
  description?: string;
}
