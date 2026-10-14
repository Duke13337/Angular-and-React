const COLORS = {
  primary: '#3b82f6',
  secondary: '#6b7280',
  danger: '#ef4444',
};

function Button({
  children,
  variant = 'primary',
  onClick,
  disabled = false,
}) {
  const styles = {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: COLORS[variant] || COLORS.primary, 
    color: '#ffffff',
    fontSize: '14px',
    fontWeight: '600',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'opacity 0.2s, transform 0.1s',
  };

  return (
    <button
      style={styles}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;