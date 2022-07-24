import React from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/Task.class'

const TaskComponent = ({task}) => {
  return (
    <li>{task.nombre} </li>
  )
}

TaskComponent.propTypes = {
  task: PropTypes.object(Task)
}

export default TaskComponent;