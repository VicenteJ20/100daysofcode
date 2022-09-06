import React from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/task";

const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);

    const changeState = (id) => {
        console.log('To do: Cambiar estado de una tarea.')
    }

    return (
        <div>
            <div>
                Your Tasks:
            </div>
            {/* APLICAR FOR / MAP PARA RENDERIZAR UNA LISTA DE TAREAS */}
            <TaskComponent task={defaultTask}/>
        </div>
    );
};



export default TaskListComponent;