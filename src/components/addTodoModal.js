import { Button, Modal } from 'antd'
import { CloseCircleOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import { useState } from 'react'

const { TextArea } = Input
const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

const AddTodoModal = ({
  isModalOpen,
  todos,
  handleCancel,
  handleOk,
  setTodos
}) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const addTodo = () => {
    if (title && description) {
      const date = new Date()
      const day = date.getDate()
      const month = date.getMonth() + 1
      const year = date.getFullYear()

      const newTodo = {
        title,
        description,
        date: `${day} ${monthNames[month - 1]} ${year}`,
        id: date
      }

      setTodos([...todos, newTodo])
      localStorage.setItem('todos', JSON.stringify([newTodo, ...todos]))

      resetInputs()
      handleCancel()
    }
  }

  const resetInputs = () => {
    setTitle('')
    setDescription('')
  }

  return (
    <Modal
      title="Add a new task"
      centered
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      closeIcon={<CloseCircleOutlined className="text-white-500 text-lg " />}
      className="bg-dark-bg text-white-500 rounded-xl"
      footer={[
        <Button key="cancel" onClick={handleCancel} type="link">
          Cancel
        </Button>,
        <Button
          key="submit"
          disabled={!title || !description}
          onClick={addTodo}
          className="bg-primary border-0 px-4 py-2 h-auto text-white-1000 rounded-[12px] text-sm font-bold"
        >
          Add
        </Button>
      ]}
    >
      <label htmlFor="title" className="mt-5 mb-2 inline-block">
        Title*
      </label>
      <Input
        id="title"
        className="text-white-1000 mb-2"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <label htmlFor="description" className="mt-5 mb-2 inline-block">
        Description*
      </label>
      <TextArea
        id="description"
        className="text-white-1000 mb-2"
        autoSize={{ minRows: 2 }}
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
    </Modal>
  )
}

export default AddTodoModal
