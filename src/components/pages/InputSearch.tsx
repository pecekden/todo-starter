import { createTodo, Todo } from 'models/Todo'
import { ChangeEvent, Dispatch, SetStateAction } from 'react'

interface Props {
  todoInputText: string
  setTodoInputText: Dispatch<SetStateAction<string>>
  setTodos: Dispatch<SetStateAction<Todo[]>>
  todos: Todo[]
  showAll: boolean
  setShowAll: Dispatch<SetStateAction<boolean>>
}

export const InputSearch = ({
  todoInputText,
  setTodoInputText,
  setTodos,
  todos,
  showAll,
  setShowAll
}: Props) => {
  const addTodo = () => {
    if (todoInputText) {
      setTodos([...todos, createTodo(todoInputText)])
      setTodoInputText('')
    }
  }
  const updateTodoInputText = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoInputText(event.target.value)
  }

  return (
    <>
      <input
        type="text"
        className="regularInput"
        placeholder="Aufgabe..."
        onChange={updateTodoInputText}
        value={todoInputText}
      ></input>
      <button type="button" className="regularButton" onClick={addTodo}>
        Hinzufügen
      </button>
      <div>
        <input
          type="checkbox"
          className="regularCheckbox"
          checked={showAll}
          onClick={() => setShowAll(!showAll)}
        ></input>
        Alle Anzeigen
      </div>
    </>
  )
}
