import './Tasks.scss'
import { SlOptionsVertical } from 'react-icons/sl';
import { AiFillPlusCircle } from 'react-icons/ai';

export const Tasks = () => {
    return (
        <div className="task-container">
            <div className="task-create">
                <div className="task-create-nav">
                    <h1>Tasks</h1>
                    <i><SlOptionsVertical/> </i>
                </div>
                <div className="task-create-border"/>
            </div>
            <div className="task-add">
                <button><AiFillPlusCircle/> Add Task</button>
            </div>
        </div>
    )
}