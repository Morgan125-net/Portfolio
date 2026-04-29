function OwnerDock({ adminPanelOpen, isAdmin, onAdminLock, onAdminPanelToggle }) {
  return (
    <div className="owner-dock" aria-label="Owner controls">
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
