import { getFilteredTodosByInputText, getFinishedTodos } from 'components/controls/Content/Filtering'
import { changeOrderDirection, sortGivenTodoList } from 'components/controls/Content/Sorting'
import { Button } from 'components/controls/Tasks/Button'
import { Checkbox } from 'components/controls/Tasks/Checkbox'
import { ImportanceDisplay } from 'components/controls/Tasks/ImportanceDisplay'
import { TaskDescription } from 'components/controls/Tasks/TaskDescription'
import { SortingColumn, SortingOrder } from 'models/Sorting'
import { Todo } from 'models/Todo'
import { Fragment, useState } from 'react'
import './TodoList.css'

interface Props {
  showAll: boolean
  showExact: boolean
  todoInputText: string
  todos: Todo[]
  setTodos: (todos:Todo[]) => void
}

export const TodoList = ({
  showAll,
  showExact,
  todoInputText,
  todos,
  setTodos,
}: Props) => {
  const [sortingColumn, setSortingColumn] = useState<SortingColumn>('None')
  const [sortingOrder, setSortingOrder] = useState<SortingOrder>('unsorted')
  
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
  const setSorting = (sortingColumn:SortingColumn) => {
    setSortingColumn(sortingColumn)
    setSortingOrder(changeOrderDirection(sortingOrder))
  }
  const sortByGivenAttributes = (todoList: Todo[]) => {
    return sortGivenTodoList(todoList,sortingColumn,sortingOrder )
}
  const getFilteredAndSortedTodos = () => {
    return sortByGivenAttributes(getFilteredTodosByInputText(getFinishedTodos(todos,showAll),todoInputText,showExact))
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
      <div className="headerClickable" onClick={() => setSorting('Importance')}>
        Wichtigkeit {getSortingArrow('Importance')}
      </div>
      <div className="headerClickable" onClick={() => setSorting('Text')}>
        Aufgabe {getSortingArrow('Text')}
      </div>
      <div></div>
      {/* TODO: check mapping table from the lecture */}
      {getFilteredAndSortedTodos().map(todo => (
        <Fragment key={todo.id}>
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
        </Fragment>
      ))}
    </div>
    
  ) : (
    <div>Es gibt keine Todos</div>
  )
}
