import TaskItem from './TaskItem.jsx'

function TaskList({ tasks, filter, onToggle, onDelete }) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <span className="empty-icon" aria-hidden="true">✓</span>
        <h3>{filter === 'All Tasks' ? 'A fresh start!' : `No ${filter.toLowerCase()} tasks`}</h3>
        <p>{filter === 'All Tasks' ? 'Add a task above and make today count.' : 'Try another filter or add a new task.'}</p>
      </div>
    )
  }

  return (
    <ul className="task-list" aria-label={`${filter} task list`}>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  )
}

export default TaskList
