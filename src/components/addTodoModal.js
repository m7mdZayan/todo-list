import { Button, Modal } from 'antd'
import { CloseCircleOutlined } from '@ant-design/icons'
import { Input } from 'antd'

const { TextArea } = Input

const AddTodoModal = ({ isModalOpen, handleCancel, handleOk }) => {
  return (
    <Modal
      title="Add a new task"
      centered
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      closeIcon={<CloseCircleOutlined className="text-white-500 text-base" />}
      className="bg-dark-bg text-white-500 rounded-xl"
      footer={[]}
    >
      <label htmlFor="title" className="mt-5 mb-2 inline-block">
        Title*
      </label>
      <Input id="title" className="text-white-1000 mb-4" />

      <label htmlFor="description" className="mt-5 mb-2 inline-block">
        Description**
      </label>
      <TextArea
        id="description"
        className="text-white-1000"
        autoSize={{ minRows: 2 }}
      />
    </Modal>
  )
}

export default AddTodoModal
