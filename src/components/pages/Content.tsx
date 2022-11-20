import { SortingColumn, SortingOrder } from 'models/Sorting'
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
  const [sortingColumn, setSortingColumn] = useState<SortingColumn>('None')
  const [sortingOrder, setSortingOrder] = useState<SortingOrder>('unsorted')

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
          sortingColumn={sortingColumn}
          setSortingColumn={setSortingColumn}
          sortingOrder={sortingOrder}
          setSortingOrder={setSortingOrder}
          todos={todos}
          setTodos={setTodos}
        ></TodoList>
      </div>
    </>
  )
}
