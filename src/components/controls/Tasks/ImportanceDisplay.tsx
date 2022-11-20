import { Importance } from 'models/Importance'
import { Todo } from 'models/Todo'
import './ImportanceDisplay.css'

interface Props {
  todoId: string
  importance: Importance
  todos: Todo[]
  setTodos: (todos: Todo[]) => void
}

const importanceArray: Importance[] = [1, 2, 3]

export const ImportanceDisplay = ({
  todoId,
  importance,
  todos,
  setTodos,
}: Props) => {
  const updateTodoImportance = (newImportance: Importance) => {
    const newTodos = todos.map(t => {
      if (t.id === todoId) {
        return { ...t, importance: newImportance }
      }
      return t
    })
    setTodos(newTodos)
  }
  return (
    <div className="importance">
      {importanceArray.map(n => {
        return (
          <div
            className="lightning"
            key={n}
            style={{ opacity: n <= importance ? '1' : '0.3' }}
            onClick={() => updateTodoImportance(n)}
          >
            &#128498;
          </div>
        )
      })}
    </div>
  )
}
