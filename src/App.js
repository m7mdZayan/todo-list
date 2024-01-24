import TodoCard from './components/todoCard'
import { Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import AddTodoModal from './components/addTodoModal'
import { useState } from 'react'

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="flex items-center justify-center min-h-[100vh] font-bold">
      <main className="w-2/3">
        <section className="flex justify-between text-white-500 mb-8">
          <div>
            <span className="inline-block mr-6">To do (4)</span>
            <span>Done (1)</span>
          </div>
          <Button
            className="bg-primary border-0 px-4 py-2 h-auto text-white-1000 rounded-[12px] text-sm font-bold"
            icon={<PlusOutlined />}
            onClick={showModal}
          >
            Add a new task
          </Button>
        </section>

        <TodoCard
          title="Design new ui presentation"
          description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when unknown printer took a galley of type and scrambled it to make a type specimen book."
          date="19 May 2022"
        />
        <TodoCard
          title="Design new ui presentation"
          description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when unknown printer took a galley of type and scrambled it to make a type specimen book."
          date="19 May 2022"
        />
        <TodoCard
          title="Design new ui presentation"
          description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when unknown printer took a galley of type and scrambled it to make a type specimen book."
          date="19 May 2022"
        />
        <TodoCard
          title="Design new ui presentation"
          description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when unknown printer took a galley of type and scrambled it to make a type specimen book."
          date="19 May 2022"
        />
      </main>

      <AddTodoModal
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </div>
  )
}

export default App
