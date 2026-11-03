const filters = ['All Tasks', 'Pending', 'Completed']

function FilterTabs({ activeFilter, onChange, stats }) {
  const counts = {
    'All Tasks': stats.total,
    Pending: stats.pending,
    Completed: stats.completed,
  }

  return (
    <div className="filter-tabs" role="tablist" aria-label="Filter tasks">
      {filters.map((filter) => (
        <button
          key={filter}
          className={`filter-tab${activeFilter === filter ? ' active' : ''}`}
          type="button"
          role="tab"
          aria-selected={activeFilter === filter}
          onClick={() => onChange(filter)}
        >
          {filter}<span className="filter-count">{counts[filter]}</span>
        </button>
      ))}
    </div>
  )
}

export default FilterTabs
