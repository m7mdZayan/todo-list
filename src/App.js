import TodoCard from './components/todoCard'
import { Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import AddTodoModal from './components/addTodoModal'
import { useState } from 'react'

const setInitialValue = label => {
  try {
    return JSON.parse(localStorage.getItem(label)) || []
  } catch (error) {
    return []
  }
}

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [todos, setTodos] = useState(setInitialValue('todos'))
  const [doneTasks, setDoneTasks] = useState(setInitialValue('doneTasks'))

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const deleteTodo = deletedTodo => {
    if (deletedTodo.done === true) {
      const newDoneTasks = doneTasks?.filter(todo => todo.id !== deletedTodo.id)
      setDoneTasks(newDoneTasks)
      localStorage.setItem('doneTasks', JSON.stringify(newDoneTasks))
    } else {
      const newTodos = todos?.filter(todo => todo.id !== deletedTodo.id)
      setTodos(newTodos)
      localStorage.setItem('todos', JSON.stringify(newTodos))
    }
  }

  const completeTask = task => {
    const newTodos = todos?.filter(todo => todo.id !== task.id)
    setTodos(newTodos)
    task.done = true
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

        {todos?.length ? (
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

        {doneTasks?.length
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
