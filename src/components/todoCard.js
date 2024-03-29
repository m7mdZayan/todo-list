import { Checkbox } from 'antd'

import { CalendarOutlined, DeleteOutlined } from '@ant-design/icons'

const TodoCard = ({ todo, done, deleteTodo, completeTask }) => {
  const handleCheckChange = completedTask => {
    completeTask(completedTask)
  }

  return (
    <div className="p-3 bg-dark-card-bg md:p-6 rounded-xl text-white-500 mb-8 last:mb-0 ">
      <div className="flex justify-between mb-2">
        <div>
          <Checkbox
            checked={done}
            onChange={() => handleCheckChange(todo)}
          ></Checkbox>
          <h3
            className={`inline-block ml-2 text-base ${done ? 'text-done line-through' : 'text-white-1000'}`}
          >
            {todo.title}
          </h3>
        </div>
        <span className="text-sm">
          <CalendarOutlined width="16" className="mr-1 text-base" /> {todo.date}
          <DeleteOutlined
            className="ml-6 text-base"
            onClick={() => deleteTodo(todo)}
          />
        </span>
      </div>
      <p className="text-sm">{todo.description}</p>
    </div>
  )
}

export default TodoCard
