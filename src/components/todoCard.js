import { Checkbox } from 'antd'

import { CalendarOutlined, DeleteOutlined } from '@ant-design/icons'

const TodoCard = ({ todo, deleteTodo }) => {
  const onChange = e => {
    console.log(`checked = ${e.target.checked}`)
  }

  return (
    <div className="bg-dark-card-bg p-6 rounded-xl text-white-500 mb-8 last:mb-0 ">
      <div className="flex justify-between mb-2">
        <div>
          <Checkbox onChange={onChange}></Checkbox>
          <h3 className="inline-block ml-2 text-white-1000 text-base">
            {todo.title}
          </h3>
        </div>
        <span className="text-sm">
          <CalendarOutlined width="16" className="mr-1 text-base" /> {todo.date}
          <DeleteOutlined
            className="ml-6 text-base"
            onClick={() => deleteTodo(todo.id)}
          />
        </span>
      </div>
      <p className="text-sm">{todo.description}</p>
    </div>
  )
}

export default TodoCard
