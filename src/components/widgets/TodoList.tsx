import { Button } from 'components/controls/Tasks/Button'
import { Checkbox } from 'components/controls/Tasks/Checkbox'
import { ImportanceDisplay } from 'components/controls/Tasks/ImportanceDisplay'
import { TaskDescription } from 'components/controls/Tasks/TaskDescription'
import { Sorting } from 'models/Sorting'
import { Todo } from 'models/Todo'
import { Dispatch, SetStateAction, useState } from 'react'
import './TodoList.css'

interface Props {
  showAll: boolean
  showExact: boolean
  todoInputText: string
  todos: Todo[]
  // Check if that is the right way for a UseState Action and compare with the project from the others
  setTodos: Dispatch<SetStateAction<Todo[]>>
}

export const TodoList = ({
  showAll,
  showExact,
  todoInputText,
  todos,
  setTodos,
}: Props) => {
  const [sorting, setSorting] = useState<Sorting>('unsorted')

  // TODO: Check if there is a better place (other file?) for the methods 
  const setSortingForImportance = () => {
    if (sorting === 'descendingImportance') {
      setSorting('ascendingImportance')
    } else setSorting('descendingImportance')
  }

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

  const getFilteredTodosRelatedToDone = () => {
    if (showAll) {
      return todos
    }
    return todos.filter(todo => !todo.done)
  }

  const getFilteredTodosRelatedToInputText = (todoList: Todo[]) => {
    if (todoInputText) {
      if (showExact) {
        return todoList.filter(todo => todo.text.includes(todoInputText))
      } else {
        return todoList.filter(todo =>
          todo.text
            .toLowerCase()
            .replace(' ', '')
            .includes(todoInputText.toLowerCase().replace(' ', ''))
        )
      }
    }
    return todoList
  }

  const setSortingForTodoText = () => {
    if (sorting === 'descendingTodoText') {
      setSorting('ascendingTodoText')
    } else setSorting('descendingTodoText')
  }
// Check if method is correct (compare with other project)
  const getSortedTodos = (todoList: Todo[]) => {
    switch (sorting) {
      case 'ascendingImportance':
        todoList.sort((a, b) => {
          if (a.importance < b.importance) return -1
          if (a.importance > b.importance) return 1
          return 0
        })
        break
      case 'descendingImportance':
        todoList.sort((a, b) => {
          if (a.importance < b.importance) return 1
          if (a.importance > b.importance) return -1
          return 0
        })
        break
      case 'ascendingTodoText':
        todoList.sort((a, b) => {
          if (a.text < b.text) return 1
          if (a.text === b.text) return 0
          return -1
        })
        break
      case 'descendingTodoText':
        todoList.sort((a, b) => {
          if (a.text < b.text) return -1
          if (a.text === b.text) return 0
          return 1
        })
        break
      case 'unsorted':
        break
    }
    return todoList
  }
// TODO: check what is a smart way to do that (naming!!!)
  const getFilteredTodos = () => {
    return getFilteredTodosRelatedToInputText(getFilteredTodosRelatedToDone())
  }

  const getFilteredAndSortedTodos = () => {
    return getSortedTodos(getFilteredTodos())
  }

  return todos.length ? (
    <div className="table">
      <div></div>
      <div className="headerClickable" onClick={setSortingForImportance}>
        Wichtigkeit
        {/* TODO: check if it's better with a function */}
        {sorting === 'ascendingImportance' ? <div> &#8593;</div> : ''}
        {sorting === 'descendingImportance' ? <div> &#8595;</div> : ''}
      </div>
      <div className="headerClickable" onClick={setSortingForTodoText}>
        Aufgabe
        {sorting === 'ascendingTodoText' ? <div> &#8593;</div> : ''}
        {sorting === 'descendingTodoText' ? <div>&#8595;</div> : ''}
      </div>
      <div></div>
      {/* TODO: check mapping table from the lecture */}
      {getFilteredAndSortedTodos().map(todo => (
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
