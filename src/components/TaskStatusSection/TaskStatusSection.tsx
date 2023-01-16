import { ChangeEvent, useEffect, useRef, useState } from "react";
import {
  TaskAddButton,
  TaskPriorityContainer,
  TaskStatusSectionContainer,
} from "./TaskStatusSection.styled";

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

type TaskProps = {
  title?: string;
  content?: string;
  priority: number;
  inProgress: boolean;
  completed: boolean;
  inBacklog: boolean;
};

const TaskStatusSection = ({ title }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [taskValues, setTaskValues] = useState<TaskProps>({
    title: "",
    content: "",
    priority: 0,
    inProgress: false,
    completed: false,
    inBacklog: false,
  });

  const titleRef = useRef<HTMLHeadingElement>(null);

  const taskValuesHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskValues({ ...taskValues, [e.target.name]: e.target.value });
  };

  const conditionalStatus = () => {
    if (titleRef.current?.textContent === "Backlog") {
      setTaskValues({ ...taskValues, inBacklog: true });
      if (taskValues.inBacklog)
        return setTaskValues({ ...taskValues, inBacklog: false });
    } else if (titleRef.current?.textContent === "In Progress") {
      setTaskValues({ ...taskValues, inProgress: true });
      if (taskValues.inProgress)
        return setTaskValues({ ...taskValues, inProgress: false });
    } else {
      setTaskValues({ ...taskValues, completed: true });
      if (taskValues.completed)
        return setTaskValues({ ...taskValues, completed: false });
    }
  };

  useEffect(() => {
    conditionalStatus();
  }, [isOpen]);

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
      <TaskAddButton>Add</TaskAddButton>
    </form>
  );
  
//!JSX
  return (
    <TaskStatusSectionContainer>
      <h1 ref={titleRef}>{title}</h1>
      {isOpen && backlogForm}
      <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? "x" : "+"}</button>
    </TaskStatusSectionContainer>
  );
};

export default TaskStatusSection;
