function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className={`task-item${task.completed ? ' is-completed' : ''}`}>
      <label className="task-checkbox-wrap">
        <input
          className="task-checkbox"
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          aria-label={`${task.completed ? 'Mark as pending' : 'Mark as completed'}: ${task.title}`}
        />
        <span className="custom-checkbox" aria-hidden="true">
          <svg viewBox="0 0 16 16" fill="none"><path d="m3.5 8.2 3 3 6-6.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </span>
      </label>
      <span className="task-title">{task.title}</span>
      <span className={`status-pill ${task.completed ? 'completed' : 'pending'}`}>
        <span className="status-dot" />
        {task.completed ? 'Completed' : 'Pending'}
      </span>
      <button
        className="delete-button"
        type="button"
        onClick={() => onDelete(task.id)}
        aria-label={`Delete ${task.title}`}
        title="Delete task"
      >
        <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4.5 6h11m-9.5 0 .6 9.3a1 1 0 0 0 1 .9h4.8a1 1 0 0 0 1-.9L14 6M8 6V4.5a.7.7 0 0 1 .7-.7h2.6a.7.7 0 0 1 .7.7V6m-3 2.5v4m3-4v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </button>
    </li>
  )
}

export default TaskItem
