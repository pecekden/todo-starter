import { Todo } from 'models/Todo'
import { useState } from 'react'
import { InputSearch } from '../widgets/InputSearch'
import { TodoList } from '../widgets/TodoList'
import './Content.css'

export const Content = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [todoInputText, setTodoInputText] = useState<string>('')
  const [showAll, setShowAll] = useState<boolean>(true)
  const [showExact, setShowExact] = useState<boolean>(true)

  return (
    <>
      <div className="content">
        <InputSearch
          todoInputText={todoInputText}
          setTodoInputText={setTodoInputText}
          setTodos={setTodos}
          todos={todos}
          showAll={showAll}
          setShowAll={setShowAll}
          showExact={showExact}
          setShowExact={setShowExact}
        ></InputSearch>
        <TodoList
          showAll={showAll}
          showExact={showExact}
          todoInputText={todoInputText}
          todos={todos}
          setTodos={setTodos}
        ></TodoList>
      </div>
    </>
  )
}
