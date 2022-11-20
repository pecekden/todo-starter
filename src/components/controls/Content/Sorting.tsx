import { Sorting } from 'models/Sorting'
import { Todo } from 'models/Todo'

export function sortGivenTodoList(todos: Todo[], sorting?: Sorting) {
  if (sorting) {
    switch (sorting.column) {
      case 'Importance':
        if (sorting.order === 'ascending') {
          todos.sort((a, b) => {
            if (a.importance < b.importance) return -1
            if (a.importance > b.importance) return 1
            return 0
          })
          break
        } else if (sorting.order === 'descending') {
          todos.sort((a, b) => {
            if (a.importance < b.importance) return 1
            if (a.importance > b.importance) return -1
            return 0
          })
          break
        } else {
          break
        }
      case 'Text':
        if (sorting.order === 'ascending') {
          todos.sort((a, b) => {
            if (a.text.toLowerCase() < b.text.toLowerCase()) return -1
            if (a.text.toLowerCase() === b.text.toLowerCase()) return 0
            return 1
          })
          break
        } else if (sorting.order === 'descending') {
          todos.sort((a, b) => {
            if (a.text.toLowerCase() < b.text.toLowerCase()) return 1
            if (a.text.toLowerCase() === b.text.toLowerCase()) return 0
            return -1
          })
          break
        } else {
          break
        }
      default:
        break
    }
    return todos
  } else {
    return todos
  }
}
export function reverseOrderDirection(sorting?: Sorting) {
  if (sorting && sorting.order === 'ascending') {
    return 'descending'
  } else {
    return 'ascending'
  }
}
