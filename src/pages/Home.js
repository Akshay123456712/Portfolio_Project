function Home() {
  return (
    <div style={styles.container}>
      <h1>Akshay Varma</h1>
      <p style={styles.tagline}>
        AI Student at Mahindra University | Aspiring Software Development Engineer
      </p>

      {/* ABOUT */}
      <section style={styles.section}>
        <h2>About Me</h2>
        <p>
          I am a B.Tech student specializing in Artificial Intelligence at Mahindra University.
          I have a strong interest in building intelligent systems and scalable software solutions.
          My academic background includes core subjects like Data Structures & Algorithms,
          Operating Systems, DBMS, Machine Learning, Deep Learning, and NLP.
        </p>

        <p>
          I enjoy working on real-world problems, especially in areas such as Natural Language
          Processing, backend development, and full-stack applications. I aim to combine my AI
          knowledge with strong software engineering skills to build impactful systems.
        </p>

        <p>
          I am actively developing projects involving AI, web platforms, and system design, and
          continuously improving my technical and problem-solving abilities to prepare for
          Software Development roles.
        </p>
      </section>

      {/* RESEARCH */}
      <section style={styles.section}>
        <h2>Research Interests</h2>
        <ul>
          <li>Artificial Intelligence & Machine Learning</li>
          <li>Natural Language Processing (NLP)</li>
          <li>Deep Learning & Computer Vision</li>
          <li>Generative AI & Large Language Models</li>
        </ul>
      </section>

      {/* EDUCATION */}
      <section style={styles.section}>
        <h2>Education</h2>
        <ul>
          <li>
            B.Tech in Artificial Intelligence – Mahindra University <br />
            CGPA: 8.0 (Current)
          </li>
          <li>Intermediate – 96% (Chaitanya College, Visakhapatnam)</li>
          <li>10th Grade – 94% (Timpany School, Visakhapatnam)</li>
        </ul>
      </section>

      {/* SKILLS */}
      <section id="skills" style={styles.section}>
        <h2>Technical Skills</h2>
        <ul>
          <li><b>Programming Languages:</b> Python, C, JavaScript, SQL</li>
          <li><b>AI/ML:</b> OpenCV, NumPy, Pandas, NLP, Transformers</li>
          <li><b>Web Development:</b> HTML, React, Node.js</li>
          <li><b>Tools & Technologies:</b> Git, Docker (Basics), API Testing</li>
        </ul>
      </section>

      {/* PROJECT AREAS */}
      <section style={styles.section}>
        <h2>Key Areas of Work</h2>
        <ul>
          <li>Developing AI/ML-based applications</li>
          <li>Building scalable web platforms using React and Node.js</li>
          <li>Working with NLP and real-world text data</li>
          <li>Backend development and API design</li>
        </ul>
      </section>

      {/* LEADERSHIP */}
      <section style={styles.section}>
        <h2>Achievements & Leadership</h2>
        <ul>
          <li>Logistics Head – EIC Club</li>
          <li>Operations Head – Roots Cultural Fest</li>
          <li>Organising Committee – Faculty Development Program</li>
          <li>U16 District Cricket Team Captain</li>
        </ul>
      </section>

      {/* INTERESTS */}
      <section style={styles.section}>
        <h2>Interests</h2>
        <ul>
          <li>Cricket & Badminton</li>
          <li>Reading books & business podcasts</li>
          <li>Participating in social service initiatives</li>
        </ul>
      </section>

      {/* CONTACT */}
      <section id="contact" style={styles.section}>
        <h2>Contact</h2>
        <ul>
          <li><b>Phone:</b> +91 6281062421</li>
          <li><b>Email:</b> mavarma236@gmail.com</li>
        </ul>
      </section>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    maxWidth: "900px",
    margin: "auto",
    textAlign: "left",
  },
  tagline: {
    color: "gray",
    marginBottom: "15px",
  },
  section: {
    marginBottom: "30px",
  },
};

export default Home;