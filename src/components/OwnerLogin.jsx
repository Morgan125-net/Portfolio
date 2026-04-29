function OwnerLogin({ adminError, adminPin, onPinChange, onSubmit }) {
  return (
    <form className="owner-login section-shell" onSubmit={onSubmit}>
      <label>
        Owner PIN
        <input
          value={adminPin}
          onChange={(event) => onPinChange(event.target.value)}
          type="password"
          placeholder="Enter your private PIN"
          autoComplete="current-password"
        />
      </label>
      <button className="button button-primary" type="submit">
        Unlock Editing
      </button>
      {adminError && <p>{adminError}</p>}
    </form>
  );
}

export default OwnerLogin;
