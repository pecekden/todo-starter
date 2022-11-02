import { Todo } from 'models/Todo'
import { useState } from 'react'
import './App.css'
import { Display } from './Display'
import { InputSearch } from './InputSearch'
import { Title } from './Title'

export const App = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [todoInputText, setTodoInputText] = useState<string>('')
  const [showAll, setShowAll] = useState<boolean>(true)

  return (
    <>
      <Title />
      <div className="content">
        <InputSearch
          todoInputText={todoInputText}
          setTodoInputText={setTodoInputText}
          setTodos={setTodos}
          todos={todos}
          showAll={showAll}
          setShowAll={setShowAll}
        ></InputSearch>
        <Display
          showAll={showAll}
          todoInputText={todoInputText}
          todos={todos}
          setTodos={setTodos}
        ></Display>
      </div>
    </>
  )
}
