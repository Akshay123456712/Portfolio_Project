import { NavLink } from "react-router-dom";

function Navbar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav style={styles.nav}>
      <div>
        <h2 style={styles.logo}>Akshay Varma</h2>
        <p style={styles.subtitle}>
          AI Student at Mahindra University • Aspiring SDE
        </p>
      </div>

      <div style={styles.links}>
        <NavLink to="/" style={({ isActive }) =>
          isActive ? styles.activeLink : styles.link
        }>
          About
        </NavLink>

        <NavLink to="/projects" style={({ isActive }) =>
          isActive ? styles.activeLink : styles.link
        }>
          Projects
        </NavLink>

        <span style={styles.link} onClick={() => scrollToSection("skills")}>
          Skills
        </span>

        <span style={styles.link} onClick={() => scrollToSection("contact")}>
          Contact
        </span>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 30px",
    background: "#1e1e2f",
    color: "white",
  },
  logo: { margin: 0 },
  subtitle: { margin: 0, fontSize: "12px", color: "#bbb" },
  links: { display: "flex", alignItems: "center" },
  link: {
    margin: "0 15px",
    cursor: "pointer",
    color: "#ddd",
  },
  activeLink: {
    margin: "0 15px",
    color: "#00ffd5",
    fontWeight: "bold",
  },
};

export default Navbar;