import { ChangeEvent, SyntheticEvent, useEffect, useId, useRef, useState } from "react";
import {
  TaskAddButton,
  TaskPriorityContainer,
  TaskStatusSectionContainer,
} from "./TaskStatusSection.styled";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addTask } from "../../features/taskSlice";
import Task from "../Task/Task";

type Props = {
  title: string;
};

const priorities = [
  {
    id: 0,
    text: "Low",
  },
  {
    id: 1,
    text: "Medium",
  },
  {
    id: 2,
    text: "High",
  },
];



const TaskStatusSection = ({ title }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [taskValues, setTaskValues] = useState({
    title: "",
    content: "",
    priority: 0,
    inProgress: false,
    completed: false,
    inBacklog: false,
    id: new Date().getMilliseconds()
  });
  
  const dispatch = useAppDispatch()
  const {tasks} = useAppSelector(state => state.tasks)

  const titleRef = useRef<HTMLHeadingElement>(null);

  const taskValuesHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskValues({ ...taskValues, [e.target.name]: e.target.value });
  };

  const conditionalStatus = () => {
    if (titleRef.current?.textContent === "Backlog") {
      setTaskValues({ ...taskValues, inBacklog: true });
      if (taskValues.inBacklog)
        return setTaskValues({ ...taskValues, inBacklog: false });
    } 
    
    if (titleRef.current?.textContent === "In Progress") {
      setTaskValues({ ...taskValues, inProgress: true });
      if (taskValues.inProgress)
        return setTaskValues({ ...taskValues, inProgress: false });
    }
    if(titleRef.current?.textContent === "Completed"){
      setTaskValues({ ...taskValues, completed: true });
      if (taskValues.completed)
        return setTaskValues({ ...taskValues, completed: false });
    }
  };

  useEffect(() => {
    conditionalStatus();
  }, [isOpen, addTask]);
  
  const priorityIDHandler = priorities.map((priority) => (
    <div
      key={priority.id}
      onClick={() =>
        taskValues.priority === priority.id
          ? setTaskValues({
              ...taskValues,
              priority: 0,
            })
          : setTaskValues({
              ...taskValues,
              priority: priority.id,
            })
      }
    >
      {priority.text}
    </div>
  ));

  const addTaskHandler = (e: SyntheticEvent) => {
    e.preventDefault()
    dispatch(addTask(taskValues))
    setTimeout(() => {
      setIsOpen(false)
    },1000)
  }

  const conditionalTasksFilter = () => {
    switch(titleRef.current?.textContent){
      case "Backlog":
        return tasks?.map((task) => task.inBacklog && <Task key={task} data={task}/>)
      case "In Progress":
        return tasks?.map((task) => task.inProgress && task.title)
      case "Completed":
        return tasks?.map((task) => task.completed && task.title)  
    }
  }
console.log(tasks)
  const backlogForm = (
    <form>
      <TaskPriorityContainer selected={taskValues.priority}>
        {priorityIDHandler}
      </TaskPriorityContainer>
      <input
        placeholder="Enter task title"
        type="text"
        name="title"
        id="title"
        onChange={taskValuesHandler}
        value={taskValues.title}
      />
      <input
        placeholder="Enter task content"
        type="text"
        name="content"
        id="content"
        onChange={taskValuesHandler}
        value={taskValues.content}
      />
      <TaskAddButton onClick={addTaskHandler}>Add</TaskAddButton>
    </form>
  );
    

//!JSX
  return (
    <TaskStatusSectionContainer>
      <h1 ref={titleRef}>{title}</h1>
      {isOpen && backlogForm}
      <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? "x" : "+"}</button>
      {conditionalTasksFilter()}
    </TaskStatusSectionContainer>
  );
};

export default TaskStatusSection;
