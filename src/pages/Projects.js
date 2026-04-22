function Projects() {
  return (
    <div style={styles.container}>
      <h1>Projects</h1>

      <div style={styles.card}>
        <h2>Faculty–Student Project Platform</h2>
        <p>
          A full-stack web application that allows faculty to publish research
          opportunities and students to discover and apply.
        </p>
        <ul>
          <li>Backend built using Node.js & Express</li>
          <li>Firebase for authentication & database</li>
          <li>Designed for scalability across universities</li>
        </ul>
      </div>

      <div style={styles.card}>
        <h2>Multilingual Meeting Summarizer</h2>
        <p>
          NLP-based system that processes multilingual meeting data and
          generates concise summaries.
        </p>
        <ul>
          <li>Used Python, NLTK, Transformers</li>
          <li>Implemented preprocessing and language detection</li>
        </ul>
      </div>

      <div style={styles.card}>
        <h2>Adaptive Smart Learning System</h2>
        <p>
          Personalized learning system that adapts content based on user
          performance.
        </p>
        <ul>
          <li>Built using Python with OOP principles</li>
          <li>Future scope: large-scale education platform</li>
        </ul>
      </div>
    </div>
  );
}

const styles = {
  container: { padding: "20px", maxWidth: "900px", margin: "auto" },
  card: {
    border: "1px solid #ddd",
    padding: "15px",
    marginBottom: "20px",
    borderRadius: "10px",
  },
};

export default Projects;