function Greeting({ name, greeting = "Привет" }) {
  
  const displayName = name && name.trim() !== "" ? name : "гость";

  return (
    <p>
      {greeting}, {displayName}!
    </p>
  );
}

export default Greeting;