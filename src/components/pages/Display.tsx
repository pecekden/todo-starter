import { Importance } from 'models/Importance'
import { Sorting } from 'models/Sorting'
import { Todo } from 'models/Todo'
import { Dispatch, SetStateAction, useState } from 'react'

interface Props {
  showAll: boolean
  todoInputText: string
  todos: Todo[]
  setTodos: Dispatch<SetStateAction<Todo[]>>
}

export const Display = ({ showAll, todoInputText, todos, setTodos }: Props) => {
  const [sorting, setSorting] = useState<Sorting>('unsorted')

  const importanceArray: Importance[] = [1, 2, 3]

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

  const updateTodoImportance = (id: string, newImportance: Importance) => {
    const newTodos = todos.map(t => {
      if (t.id === id) {
        return { ...t, importance: newImportance }
      }
      return t
    })
    setTodos(newTodos)
  }

  const getImportanceIcons = (todoId: string, importance: Importance) => {
    return (
      <div className="imprtance">
        {importanceArray.map(n => {
          return (
            <button
              className="lightning"
              key={n}
              style={{ opacity: n <= importance ? '1' : '0.3' }}
              onClick={() => updateTodoImportance(todoId, n)}
            >
              &#128498;
            </button>
          )
        })}
      </div>
    )
  }

  const getFilteredTodosRelatedToDone = () => {
    if (showAll) {
      return todos
    }
    return todos.filter(todo => !todo.done)
  }

  const getFilteredTodosRelatedToInputText = (todoList: Todo[]) => {
    if (todoInputText) {
      return todoList.filter(todo => todo.text.includes(todoInputText))
    }
    return todoList
  }

  const setSortingForTodoText = () => {
    if (sorting === 'descendingTodoText') {
      setSorting('ascendingTodoText')
    } else setSorting('descendingTodoText')
  }

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
        {sorting === 'ascendingImportance' ? <div> &#8593;</div> : ''}
        {sorting === 'descendingImportance' ? <div> &#8595;</div> : ''}
      </div>
      <div className="headerClickable" onClick={setSortingForTodoText}>
        Aufgabe
        {sorting === 'ascendingTodoText' ? <div> &#8593;</div> : ''}
        {sorting === 'descendingTodoText' ? <div>&#8595;</div> : ''}
      </div>
      <div></div>
      {getFilteredAndSortedTodos().map(todo => (
        <>
          <input
            type="checkbox"
            className="regularCheckbox"
            checked={todo.done}
            onClick={() => changeTodoIsDone(todo.id)}
          ></input>
          <div>{getImportanceIcons(todo.id, todo.importance)}</div>
          <div
            style={{
              textDecoration: todo.done ? 'line-through' : 'none',
            }}
          >
            {todo.text}
          </div>
          <div>
            <button
              type="button"
              className="regularButton"
              onClick={() => removeTodo(todo.id)}
            >
              Löschen
            </button>
          </div>
        </>
      ))}
    </div>
  ) : (
    <div>Es gibt keine Todos</div>
  )
}
