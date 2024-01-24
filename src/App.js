import TodoCard from './components/todoCard'
import { Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import AddTodoModal from './components/addTodoModal'
import { useState } from 'react'

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')))
  const [doneTasks, setDoneTasks] = useState(
    JSON.parse(localStorage.getItem('doneTasks'))
  )

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
    const newTodos = todos?.filter(todo => todo.id !== id)
    setTodos(newTodos)
    localStorage.setItem('todos', JSON.stringify(newTodos))
  }

  const completeTask = task => {
    const newTodos = todos?.filter(todo => todo.id !== task.id)
    setTodos(newTodos)
    setDoneTasks([...doneTasks, task])
    localStorage.setItem('doneTasks', JSON.stringify([...doneTasks, task]))
  }

  return (
    <div className="flex justify-center font-bold mt-28">
      <main className="w-2/3">
        <section className="flex justify-between text-white-500 mb-8">
          <div>
            <span className="inline-block mr-6">To do ({todos?.length})</span>
            <span>Done ({doneTasks?.length})</span>
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
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              completeTask={completeTask}
            />
          ))
        ) : (
          <p className="text-white-1000 text-base text-center mb-4">
            nothing to do today !
          </p>
        )}

        {doneTasks.length
          ? doneTasks?.map(todo => (
              <TodoCard
                key={todo.id}
                todo={todo}
                done={true}
                deleteTodo={deleteTodo}
                completeTask={completeTask}
              />
            ))
          : null}
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
