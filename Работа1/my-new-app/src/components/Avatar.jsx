function Avatar({ name, size = 48 }) {
  const styles = {
    width: size,
    height: size,
    borderRadius: '50%',
    backgroundColor: '#6366f1', 
    color: '#ffffff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: size / 2,        
    fontWeight: 'bold',
    userSelect: 'none',
  };

 
  const letter = name ? name[0].toUpperCase() : '?';

  return <div style={styles}>{letter}</div>;
}

export default Avatar;