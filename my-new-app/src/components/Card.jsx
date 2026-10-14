function Card({ title, children }) {
  const styles = {
    border: '1px solid #d1d5db',
    borderRadius: '12px',
    padding: '20px',
    margin: '16px 0',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
    maxWidth: '400px',
  };

  const titleStyles = {
    marginTop: 0,
    marginBottom: '12px',
    color: '#1f2937',
    borderBottom: '1px solid #e5e7eb',
    paddingBottom: '8px',
  };

  return (
    <div style={styles}>
      <h3 style={titleStyles}>{title}</h3>
      <div>{children}</div>
    </div>
  );
}

export default Card;