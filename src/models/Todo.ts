import { Importance } from 'models/Importance'
import { v4 as uuid } from 'uuid'

export interface Todo {
  id: string
  text: string
  done: boolean
  importance: Importance
}

export const createTodo = (text: string): Todo => ({
  id: uuid(),
  text: text,
  done: false,
  importance: 2,
})
