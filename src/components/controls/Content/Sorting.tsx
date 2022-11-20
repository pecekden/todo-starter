import { SortingColumn, SortingOrder } from "models/Sorting"
import { Todo } from "models/Todo"

export function sortGivenTodoList(todos:Todo[], column: SortingColumn, order: SortingOrder){
    switch (column) {
      case 'Importance':
        if(order === 'ascending'){
          todos.sort((a, b) => {
            if (a.importance < b.importance) return -1
            if (a.importance > b.importance) return 1
            return 0
          })
          break
        }
        else if(order === 'descending'){
            todos.sort((a, b) => {
            if (a.importance < b.importance) return 1
            if (a.importance > b.importance) return -1
            return 0
          })
          break
        }
        else{
          break
        }
      case 'Text':
        if(order === 'ascending'){
            todos.sort((a, b) => {
          if (a.text.toLowerCase() < b.text.toLowerCase()) return 1
          if (a.text.toLowerCase() === b.text.toLowerCase()) return 0
          return -1
        })
        break
      }
      else if(order === 'descending'){
        todos.sort((a, b) => {
          if (a.text.toLowerCase() < b.text.toLowerCase()) return -1
          if (a.text.toLowerCase() === b.text.toLowerCase()) return 0
          return 1
        })
        break
      }
      else{
        break
      }
      case 'None':
        break
    }
    return todos
}

export function setOrderDirection(sortingOrder:SortingOrder){
  if(sortingOrder === 'unsorted'){
    return 'ascending'
  }
  else if(sortingOrder === 'ascending'){
    return 'descending'
  }
  else{
    return 'ascending'
  }
}