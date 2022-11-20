import { Todo } from "models/Todo"

export const getFinishedTodos = (todos: Todo[], showAll: Boolean) => {
    if (showAll) {
        return todos
    }
    return todos.filter(todo => !todo.done)
}

export const getFilteredTodos = (todos: Todo[], todoInputText:string, showExact:boolean) => {
    if (todoInputText) {
      if (showExact) {
        return todos.filter(todo => todo.text.includes(todoInputText))
      } 
      else {
        return todos.filter(todo =>
          todo.text
            .toLowerCase()
            .replace(' ', '')
            .includes(todoInputText.toLowerCase().replace(' ', ''))
        )
      }
    }
    return todos
}