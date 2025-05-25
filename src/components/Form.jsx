import { CheckSquare2, EllipsisVertical, Trash } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTask as addTaskAction,
  removeTask,
  toggleComplete,
} from "../redux/reducers/todos";

function Form({ ref }) {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todos.list);
  const [showMenu, setShowMenu] = React.useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  function submitTask(e) {
    e.preventDefault();
    const task = e.target.task.value;
    dispatch(addTaskAction(task.trim()));
    e.target.reset();
  }

  function toggleCheckbox() {
    toggleMenu();
    if (tasks.filter((o) => o.checked === true).length === tasks.length) {
      dispatch(toggleComplete({ id: tasks.map((o) => o.id), checked: false }));
    } else {
      dispatch(toggleComplete({ id: tasks.map((o) => o.id), checked: true }));
    }
  }

  function deleteComplete() {
    toggleMenu();
    dispatch(
      removeTask(tasks.filter((o) => o.checked !== true).map((o) => o.id))
    );
    // setTasks(tasks.filter(o=>o.checked!==true))
  }

  return (
    <form onSubmit={submitTask} className="flex flex-col gap-5 mx-5">
      <div>
        <div className="text-3xl font-bold uppercase text-white">Todo</div>
      </div>
      <div className="relative">
        <div className="bg-white h-12 shadow flex rounded overflow-hidden">
          <input
            ref={ref}
            className="flex-1 px-5 outline-none"
            type="text"
            name="task"
            placeholder="Type your activity"
          />
          <button
            onClick={toggleMenu}
            className=" h-full w-12 hover:bg-gray-100 flex justify-center items-center"
            type="button"
          >
            <EllipsisVertical />
          </button>
          {showMenu && (
            <ul
              onMouseLeave={toggleMenu}
              className="absolute py-2 top-14 z-20 right-0 w-50 bg-white overflow-hidden flex flex-col gap-1 rounded shadow *:*:p-2 *:*:flex *:*:gap-3 *:*:hover:bg-gray-200"
            >
              <li>
                <button
                  disabled={tasks.length < 1}
                  onClick={toggleCheckbox}
                  className="w-full text-left disabled:text-gray-300 disabled:cursor-not-allowed"
                  type="button"
                >
                  <CheckSquare2 />
                  <span>Toggle checkbox</span>
                </button>
              </li>
              <li>
                <button
                  disabled={
                    tasks.length < 1 ||
                    tasks.filter((o) => o.checked).length < 1
                  }
                  onClick={deleteComplete}
                  className="w-full text-left disabled:text-gray-300 disabled:cursor-not-allowed"
                  type="button"
                >
                  <Trash />
                  <span>
                    {tasks.length !== 0 &&
                    tasks.length === tasks.filter((o) => o.checked).length
                      ? "Clear"
                      : "Delete Complete"}
                  </span>
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>
      <button className="hidden" type="submit">
        Save
      </button>
    </form>
  );
}

export default Form;
