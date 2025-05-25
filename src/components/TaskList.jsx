import TaskItem from './TaskItem'
import { useSelector } from 'react-redux'

function TaskList({inputRef}) {
  const tasks = useSelector(state => state.todos.list)
  return (
    <>
      {tasks.map((task, idx) => {
        return <TaskItem {...task} key={`task-${idx}`} />;
      })}
      {tasks.length === 0 && (
        <div className="p-10 flex flex-col gap-5 justify-center items-center">
          <div className="text-3xl">There is no tasks!</div>
          <button
            onClick={() => {
              inputRef.current.focus();
              inputRef.current.form.requestSubmit();
            }}
            type="button"
            className="h-12 px-5 bg-blue-500 cursor-pointer text-white rounded hover:bg-blue-700"
          >
            Add a new one
          </button>
        </div>
      )}
    </>
  );
}

export default TaskList