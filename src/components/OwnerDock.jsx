function OwnerDock({ adminPanelOpen, isAdmin, onAdminLock, onAdminPanelToggle, onThemeToggle, theme }) {
  return (
    <div className="owner-dock" aria-label="Owner and theme controls">
      <button
        className="theme-toggle"
        type="button"
        onClick={onThemeToggle}
        aria-label={`Switch to ${theme === "dark" ? "bright" : "dark"} mode`}
      >
        <span className={`theme-icon ${theme}`} aria-hidden="true" />
      </button>

      {isAdmin ? (
        <>
          <span className="owner-badge">Owner mode</span>
          <button className="owner-button" type="button" onClick={onAdminLock}>
            Lock
          </button>
        </>
      ) : (
        <button className="owner-button" type="button" onClick={onAdminPanelToggle}>
          {adminPanelOpen ? "Close" : "Owner"}
        </button>
      )}
    </div>
  );
}

export default OwnerDock;
