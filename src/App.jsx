import { useMemo, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import DashboardStats from './components/DashboardStats.jsx'
import TaskForm from './components/TaskForm.jsx'
import TaskList from './components/TaskList.jsx'
import FilterTabs from './components/FilterTabs.jsx'

const initialTasks = [
  { id: 1, title: 'Review the Q3 product roadmap', completed: false },
  { id: 2, title: 'Send project updates to the team', completed: true },
  { id: 3, title: 'Prepare notes for the design sync', completed: false },
  { id: 4, title: 'Update the onboarding checklist', completed: false },
]

function App() {
  const [tasks, setTasks] = useState(initialTasks)
  const [activeFilter, setActiveFilter] = useState('All Tasks')

  const stats = useMemo(() => {
    const completed = tasks.filter((task) => task.completed).length
    return {
      total: tasks.length,
      completed,
      pending: tasks.length - completed,
    }
  }, [tasks])

  const visibleTasks = tasks.filter((task) => {
    if (activeFilter === 'Pending') return !task.completed
    if (activeFilter === 'Completed') return task.completed
    return true
  })

  function addTask(title) {
    setTasks((currentTasks) => [
      { id: Date.now(), title, completed: false },
      ...currentTasks,
    ])
  }

  function toggleTask(id) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    )
  }

  function deleteTask(id) {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id))
  }

  return (
    <div className="app-shell min-h-screen">
      <Navbar />
      <main className="dashboard mx-auto">
        <section className="welcome-row">
          <div>
            <p className="eyebrow">YOUR WORKSPACE</p>
            <h1>Good morning, Alex <span aria-hidden="true">✦</span></h1>
            <p className="welcome-copy">Here’s what’s happening with your tasks today.</p>
          </div>
          <div className="date-chip">
            <span className="date-dot" />
            <span>{new Intl.DateTimeFormat('en', { weekday: 'long', month: 'long', day: 'numeric' }).format(new Date())}</span>
          </div>
        </section>

        <DashboardStats stats={stats} />

        <section className="tasks-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">STAY ON TOP OF IT</p>
              <h2>Your tasks</h2>
            </div>
            <span className="task-count">{stats.total} {stats.total === 1 ? 'task' : 'tasks'}</span>
          </div>

          <TaskForm onAddTask={addTask} />

          <div className="list-toolbar">
            <FilterTabs
              activeFilter={activeFilter}
              onChange={setActiveFilter}
              stats={stats}
            />
            <span className="list-hint">Stay focused, you’re doing great.</span>
          </div>

          <TaskList
            tasks={visibleTasks}
            filter={activeFilter}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        </section>
        <footer className="footer-note">Made for a more focused day <span aria-hidden="true">✦</span></footer>
      </main>
    </div>
  )
}

export default App
