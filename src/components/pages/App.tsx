import { Importance } from 'models/Importance'
import { createTodo, Todo } from 'models/Todo'
import { ChangeEvent, useState } from 'react'
import './App.css'

export const App = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [todoInputText, setTodoInputText] = useState<string>('')
  const [showAll, setShowAll] = useState<boolean>(true)

  const importanceArray: Importance[] = [1, 2, 3]

  const addTodo = () => {
    if (todoInputText) {
      setTodos([...todos, createTodo(todoInputText)])
      setTodoInputText('')
    }
  }

  const removeTodo = (id: string) => {
    setTodos(todos.filter(t => t.id !== id))
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
  const changeTodoIsDone = (id: string) => {
    const newTodos = todos.map(t => {
      if (t.id === id) {
        return { ...t, done: !t.done }
      }
      return t
    })
    setTodos(newTodos)
  }

  const updateTodoInputText = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoInputText(event.target.value)
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

  return (
    <>
      <div className="title">ToDo App</div>
      <div className="content">
        <div>
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
        </div>
        <div>
          <input
            type="checkbox"
            className="regularCheckbox"
            checked={showAll}
            onClick={() => setShowAll(!showAll)}
          ></input>
          Alle Anzeigen
        </div>
        {todos.length ? (
          <div className="table">
            <div className="header"></div>
            <div className="header">Wichtigkeit</div>
            <div className="header">Aufgabe</div>
            <div className="header"></div>
            {todos.map(todo => (
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
          <div>Keine Todos gefunden</div>
        )}
      </div>
    </>
  )
}
