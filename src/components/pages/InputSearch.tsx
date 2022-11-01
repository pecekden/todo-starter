import { ChangeEvent } from 'react'

interface Props {
  updateTodoInputText: (event: ChangeEvent<HTMLInputElement>) => void
  todoInputText: string
  addTodo: () => void
}

export const InputSearch = ({
  updateTodoInputText,
  todoInputText,
  addTodo,
}: Props) => {
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
    </>
  )
}
