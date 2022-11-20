import { getFilteredTodos, getFinishedTodos } from 'components/controls/Content/Filtering'
import { setOrderDirection, sortGivenTodoList } from 'components/controls/Content/Sorting'
import { Button } from 'components/controls/Tasks/Button'
import { Checkbox } from 'components/controls/Tasks/Checkbox'
import { ImportanceDisplay } from 'components/controls/Tasks/ImportanceDisplay'
import { TaskDescription } from 'components/controls/Tasks/TaskDescription'
import { SortingColumn, SortingOrder } from 'models/Sorting'
import { Todo } from 'models/Todo'
import { Dispatch, SetStateAction } from 'react'
import './TodoList.css'

interface Props {
  showAll: boolean
  showExact: boolean
  todoInputText: string
  sortingColumn:SortingColumn
  sortingOrder:SortingOrder
  todos: Todo[]
  // Check if that is the right way for a UseState Action and compare with the project from the others
  setTodos: Dispatch<SetStateAction<Todo[]>>
  setSortingColumn: Dispatch<SetStateAction<SortingColumn>>
  setSortingOrder: Dispatch<SetStateAction<SortingOrder>>
}

export const TodoList = ({
  showAll,
  showExact,
  todoInputText,
  todos,
  sortingColumn,
  setSortingColumn,
  sortingOrder,
  setSortingOrder,
  setTodos,
}: Props) => {
  
  const removeTodo = (id: string) => {
    setTodos(todos.filter(t => t.id !== id))
  }
  const changeTodoIsDone = (id: string) => {
    const newTodos = todos.map(t => {
      if (t.id === id) {
        return { ...t, done: !t.done }
      }
      return t
    })
    setTodos(newTodos)
  }
  const filterTodoList = () => {
    return getFilteredTodos(getFinishedTodos(todos, showAll), todoInputText, showExact)
  }

  const sortTodoList = (column:SortingColumn) => {
    setSortingColumn(column)
    setSortingOrder(setOrderDirection(sortingOrder))
    setTodos(sortGivenTodoList(filterTodoList(),sortingColumn,sortingOrder))
  }
  const getSortingArrow = (column:SortingColumn) => {
    if(column === sortingColumn){
      switch(sortingOrder){
        case 'ascending':
          return <div> &#8593;</div>
        case 'descending':
          return <div> &#8595;</div>
        default:
          return ''
      }
    }
    else{
      return ''
    }
  }

  return todos.length ? (
    <div className="table">
      <div></div>
      <div className="headerClickable" onClick={() => sortTodoList('Importance')}>
        Wichtigkeit {getSortingArrow('Importance')}
      </div>
      <div className="headerClickable" onClick={() => sortTodoList('Text')}>
        Aufgabe {getSortingArrow('Text')}
      </div>
      <div></div>
      {/* TODO: check mapping table from the lecture */}
      {todos.map(todo => (
        <>
          <Checkbox
            isChecked={todo.done}
            onClick={() => changeTodoIsDone(todo.id)}
          ></Checkbox>
          <ImportanceDisplay
            todoId={todo.id}
            importance={todo.importance}
            todos={todos}
            setTodos={setTodos}
          ></ImportanceDisplay>
          <TaskDescription
            isDone={todo.done}
            todoText={todo.text}
          ></TaskDescription>
          <Button
            buttonText="Löschen"
            onClick={() => removeTodo(todo.id)}
          ></Button>
        </>
      ))}
    </div>
  ) : (
    <div>Es gibt keine Todos</div>
  )
}

