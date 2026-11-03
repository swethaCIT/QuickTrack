const statItems = [
  {
    key: 'total',
    label: 'Total tasks',
    caption: 'All your to-dos in one place',
    icon: 'grid',
    color: 'blue',
  },
  {
    key: 'completed',
    label: 'Completed',
    caption: 'Look at you go!',
    icon: 'check',
    color: 'purple',
  },
  {
    key: 'pending',
    label: 'Pending',
    caption: 'One step at a time',
    icon: 'clock',
    color: 'orange',
  },
]

function StatIcon({ type }) {
  if (type === 'check') {
    return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m5 12.5 4.2 4.2L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
  }
  if (type === 'clock') {
    return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" /><path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
  }
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="4" y="4" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.8" /><rect x="14" y="4" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.8" /><rect x="4" y="14" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.8" /><rect x="14" y="14" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.8" /></svg>
}

function DashboardStats({ stats }) {
  return (
    <section className="stats-grid" aria-label="Task statistics">
      {statItems.map((item) => (
        <article className="stat-card" key={item.key}>
          <div className={`stat-icon ${item.color}`}><StatIcon type={item.icon} /></div>
          <div className="stat-content">
            <p className="stat-label">{item.label}</p>
            <p className="stat-value">{stats[item.key]}</p>
            <p className="stat-caption">{item.caption}</p>
          </div>
          <span className={`stat-indicator ${item.color}`} aria-hidden="true" />
        </article>
      ))}
    </section>
  )
}

export default DashboardStats
