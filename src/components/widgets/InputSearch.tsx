import { Button } from 'components/controls/Tasks/Button'
import { Checkbox } from 'components/controls/Tasks/Checkbox'
import { InputText } from 'components/controls/Tasks/InputText'
import { createTodo, Todo } from 'models/Todo'
import { ChangeEvent, Dispatch, SetStateAction } from 'react'

//Was ist dispatch, change event und setstateaction?

interface Props {
  todoInputText: string
  setTodoInputText: Dispatch<SetStateAction<string>>
  setTodos: Dispatch<SetStateAction<Todo[]>>
  todos: Todo[]
  showAll: boolean
  setShowAll: Dispatch<SetStateAction<boolean>>
  showExact: boolean
  setShowExact: Dispatch<SetStateAction<boolean>>
}

export const InputSearch = ({
  todoInputText,
  setTodoInputText,
  setTodos,
  todos,
  showAll,
  setShowAll,
  showExact,
  setShowExact
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
          onClick={() => setShowAll(!showAll)}
        ></Checkbox>
        <Checkbox
          text="Nache exakter Bezeichnung filtern"
          isChecked={showExact}
          onClick={() => setShowExact(!showExact)}
        ></Checkbox>
      </div>
    </>
  )
}
