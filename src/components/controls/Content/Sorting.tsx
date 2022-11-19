import { SortingColumn, SortingOrder } from "models/Sorting"
import { Todo } from "models/Todo"
import { useState } from "react"


export const getSortedTodoList = (todos:Todo[], column: SortingColumn, order: SortingOrder) => {
    return SortedToDoList(todos, column, order)
}

const SortedToDoList = (todos:Todo[], column: SortingColumn, order: SortingOrder) => {
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
          if (a.text < b.text) return 1
          if (a.text === b.text) return 0
          return -1
        })
        break
      }
      else if(order === 'descending'){
        todos.sort((a, b) => {
          if (a.text < b.text) return -1
          if (a.text === b.text) return 0
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