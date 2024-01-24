import { Checkbox } from 'antd'

import { CalendarOutlined, DeleteOutlined } from '@ant-design/icons'

const TodoCard = ({ title, description, date }) => {
  const onChange = e => {
    console.log(`checked = ${e.target.checked}`)
  }

  return (
    <div className="bg-dark-card-bg p-6 rounded-xl text-white-500 mb-8 last:mb-0 ">
      <div className="flex justify-between mb-2">
        <div>
          <Checkbox onChange={onChange}></Checkbox>
          <h3 className="inline-block ml-2 text-white-1000 text-base">
            {title}
          </h3>
        </div>
        <span className="text-sm">
          <CalendarOutlined width="16" className="mr-1 text-base" /> {date}
          <DeleteOutlined className="ml-6 text-base" />
        </span>
      </div>
      <p className="text-sm">{description}</p>
    </div>
  )
}

export default TodoCard
