interface Props {
  isDone: boolean
  todoText: string
}
export const TaskDescription = ({ isDone, todoText }: Props) => (
  <div
    style={{
      textDecoration: isDone ? 'line-through' : 'none',
    }}
  >
    {todoText}
  </div>
)
