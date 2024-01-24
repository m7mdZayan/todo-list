import TodoCard from './components/todoCard'
import { Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import AddTodoModal from './components/addTodoModal'
import { useState } from 'react'

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')))

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const deleteTodo = id => {
    console.log(id)
    const newTodos = todos?.filter(todo => todo.id !== id)

    setTodos(newTodos)
    localStorage.setItem('todos', JSON.stringify(newTodos))
  }

  return (
    <div className="flex justify-center font-bold mt-28">
      <main className="w-2/3">
        <section className="flex justify-between text-white-500 mb-8">
          <div>
            <span className="inline-block mr-6">To do ({todos?.length})</span>
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

        {todos.length ? (
          todos?.map(todo => (
            <TodoCard
              todo={todo}
              key={todo.id}
              date={todo.date}
              title={todo.title}
              description={todo.description}
              deleteTodo={deleteTodo}
            />
          ))
        ) : (
          <p className="text-white-1000 text-base text-center">
            nothing to do today !
          </p>
        )}
      </main>

      <AddTodoModal
        isModalOpen={isModalOpen}
        todos={todos}
        handleOk={handleOk}
        handleCancel={handleCancel}
        setTodos={setTodos}
      />
    </div>
  )
}

export default App
