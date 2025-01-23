

const LandingPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>EVIL TO-DO LIST</h1>
      <p style={styles.subtitle}>
        Your "friendly" companion for procrastination and chaos.
      </p>
      <ul style={styles.featureList}>
        <li>✅ Annoying Task Generator</li>
        <li>💣 Sabotage Mode</li>
        <li>🎉 Sarcastic Motivational Quotes</li>
      </ul>
      <button style={styles.ctaButton} onClick={() => alert("Coming Soon!")}>
        Get Started (If You Dare)
      </button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "2rem",
    fontFamily: "'Arial', sans-serif",
    backgroundColor: "#f3f3f3",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: "3rem",
    color: "#d9534f",
    marginBottom: "1rem",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#333",
    marginBottom: "2rem",
  },
  featureList: {
    listStyle: "none",
    padding: 0,
    marginBottom: "2rem",
  },
  ctaButton: {
    padding: "1rem 2rem",
    fontSize: "1.2rem",
    color: "#fff",
    backgroundColor: "#d9534f",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
};

export default LandingPage;
