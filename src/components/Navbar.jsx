function Navbar() {
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <a className="brand" href="/" aria-label="QuickTrack home">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M5 12.5 9.2 17 19 7" stroke="currentColor" strokeWidth="2.7" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 3.5a8.5 8.5 0 1 0 8.5 8.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </span>
          <span>quick<span className="brand-accent">track</span></span>
        </a>

        <div className="topbar-right">
          <span className="workspace-label">Personal workspace</span>
          <button className="avatar" type="button" aria-label="Swetha profile">SS</button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
