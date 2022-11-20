import { Button } from 'components/controls/Tasks/Button'
import { Checkbox } from 'components/controls/Tasks/Checkbox'
import { InputText } from 'components/controls/Tasks/InputText'
import { createTodo, Todo } from 'models/Todo'
import { ChangeEvent } from 'react'

//Was ist dispatch, change event und setstateaction?

interface Props {
  todoInputText: string
  setTodoInputText: (inputText: string) => void
  setTodos: (todos: Todo[]) => void
  todos: Todo[]
  showAll: boolean
  setShowAll: (setShowAll: boolean) => void
  showExact: boolean
  setShowExact: (showExact: boolean) => void
}

export const InputSearch = ({
  todoInputText,
  setTodoInputText,
  setTodos,
  todos,
  showAll,
  setShowAll,
  showExact,
  setShowExact,
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
      <InputText
        placeholder="Aufgabe..."
        onChange={updateTodoInputText}
        value={todoInputText}
      ></InputText>
      <Button buttonText="Hinzufügen" onClick={addTodo}></Button>
      <div>
        <Checkbox
          text="Alle Anzeigen"
          isChecked={showAll}
          onChange={() => setShowAll(!showAll)}
        ></Checkbox>
        <Checkbox
          text="Nache exakter Bezeichnung filtern"
          isChecked={showExact}
          onChange={() => setShowExact(!showExact)}
        ></Checkbox>
      </div>
    </>
  )
}
