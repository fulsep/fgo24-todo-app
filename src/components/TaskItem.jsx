import { Pencil, Square, SquareCheck, Trash } from 'lucide-react'
import React from 'react'
import { editTask, removeTask, toggleComplete } from '../redux/reducers/todos'
import { useDispatch } from 'react-redux'

function EditInput({id, taskName, onEnterPress}){
  const dispatch = useDispatch()
  const [text,setText] = React.useState(taskName)
  React.useEffect(()=>{
    return ()=>{
      dispatch(editTask({id, taskName: text}))
    }
  })
  function onEnter(e){
    if(e.keyCode === 13){
      onEnterPress()
    }
  }
  return(
    <input
      autoFocus
      onInput={e=>setText(e.target.value)}
      onKeyDown={onEnter}
      className='border-b outline-none'
      type="text"
      defaultValue={taskName} />
  )
}

function TaskItem({taskName, checked, id}) {
  const [edit, setEdit] = React.useState(false)
  const dispatch = useDispatch()

  function deleteTask(id){
    dispatch(removeTask(id))
  }
  function updateCheckedStatus(id, newValue){
    dispatch(toggleComplete({id, checked: newValue}))
  }

  function toggleEdit(){
    setEdit(!edit)
  }

  return (
    <label className='select-none'>
      <span className='relative flex items-center min-h-20 gap-5 p-5 px-10 hover:bg-gray-100 group'>
        <span className='hidden peer'>
          <input
            onChange={(e)=>updateCheckedStatus(id, e.target.checked)}
            checked={checked}
            type="checkbox" />
        </span>
        <span className='peer-has-checked:hidden'>
          <Square size={30} />
        </span>
        <span className='hidden peer-has-checked:block'>
          <span>
            <SquareCheck size={30} />
          </span>
        </span>
        <span className='flex-1 text-xl peer-has-checked:line-through'>
          {edit ? <EditInput onEnterPress={toggleEdit} id={id} taskName={taskName} /> : `${taskName}`}
        </span>
        <span className='absolute z-10 right-10 bg-[#F3F4F6] px-2 h-full items-center hidden gap-3 group-hover:flex'>
          <button onClick={toggleEdit} type='button' className='cursor-pointer size-10 hover:bg-blue-300 flex items-center justify-center rounded'>
            <Pencil />
          </button>
          <button onClick={()=>deleteTask(id)} type='button' className='cursor-pointer size-10 hover:bg-red-300 flex items-center justify-center rounded'>
            <Trash />
          </button>
        </span>
      </span>
    </label>
  )
}

export default TaskItem