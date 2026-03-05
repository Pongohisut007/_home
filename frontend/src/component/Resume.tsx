export function Resume(){

    return(
         
    <main
    style={{
      minHeight: "100vh",
      background: "#f4f6f8",
      display: "flex",
      justifyContent: "center",
      padding: "40px 0"
    }}
  >
    <section
      style={{
        width: "900px",
        background: "#fff",
        padding: "40px",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        fontSize: "14px",
        lineHeight: "1.6"
      }}
    >
      {/* ===== HEADER ===== */}
      <header style={{ textAlign: "center", marginBottom: "32px" }}>
        <h2 style={{ marginBottom: "4px" }}>PONGPHISUT THEPTHONMG</h2>
        <p style={{ margin: "0 0 8px 0" }}>(พงศ์พิสุทธิ์ เทพทอง)</p>
        <p style={{ margin: 0 }}>
          Email: pongphisut.thepthong@gmail.com |{" "}
          <a href="https://github.com/Pongohisut007" target="_blank">
            GitHub
          </a>{" "}
        
        </p>
      </header>

      <hr />

      {/* ===== SUMMARY ===== */}
      <section style={{ marginBottom: "28px" }}>
        <h4>Summary</h4>
        <p>
        I am a Computer Engineering student with hands-on experience in backend web server development, CI/CD pipelines, and cloud platforms such as AWS and GCP. I have experience using Jenkins and Proxmox, and I am looking for an internship or small project-based opportunities to gain practical DevOps experience
        </p>
      </section>

      {/* ===== TECHNICAL SKILLS ===== */}
      <section style={{ marginBottom: "28px" }}>
        <h4>Technical Skills</h4>
        <ul>
          <li>
            <strong>Programming:</strong> JavaScript, TypeScript, Go, Python
          </li>
          <li>
            <strong>Frontend:</strong> HTML, CSS, React.js, Bootstrap
          </li>
          <li>
            <strong>Backend:</strong> Node.js, Next.js, REST API
          </li>
          <li>
            <strong>Database:</strong> MySQL, PostgreSQL, MongoDB
          </li>
          <li>
            <strong>DevOps & Tools:</strong> Docker, Kubernetes, Jenkins, Git,
            Linux (Ubuntu)
          </li>
          <li>
            <strong>Cloud:</strong> AWS, Google Cloud Platform (GCP)
          </li>
          <li>
            <strong>Networking:</strong> HTTP/HTTPS, DNS, Load Balancing,
            WebSocket (ws/wss)
          </li>
        </ul>
      </section>

      {/* ===== PROJECTS ===== */}
      <section style={{ marginBottom: "28px" }}>
        <h4>Projects</h4>

        <div style={{ marginBottom: "16px" }}>
          <p>
            <strong>Web Application on GCP</strong> —{" "}
            <a href="https://github.com/Pongohisut007/assignment">
              GitHub
            </a>
          </p>
          <ul>
            <li>
              Built and deployed a backend web application on Google Cloud
              Platform
            </li>
            <li>
              Configured DNS, API Gateway, and Kubernetes Ingress for traffic
              management
            </li>
            <li>
              Implemented HTTPS with TLS and high-availability architecture
            </li>
          </ul>
        </div>

        <div style={{ marginBottom: "16px" }}>
          <p>
            <strong>Deploy Kubernetes with MySQL</strong> —{" "}
            <a href="https://github.com/Pongohisut007/deploy-kubernetes-mysql">
              GitHub
            </a>
          </p>
          <ul>
            <li>Deployed backend services using Docker and Kubernetes</li>
            <li>Integrated MySQL database with persistent storage</li>
            <li>Implemented container orchestration for scalable deployment</li>
          </ul>
        </div>

        <div>
          <p>
            <strong>Nginx Reverse Proxy Setup</strong> —{" "}
            <a href="https://github.com/Pongohisut007/setup_webserver_nginx">
              GitHub
            </a>
          </p>
          <ul>
            <li>Configured Nginx as a reverse proxy for backend services</li>
            <li>
              Implemented basic HTTP request forwarding and routing
            </li>
          </ul>
        </div>
      </section>

      {/* ===== EDUCATION ===== */}
      <section style={{ marginBottom: "28px" }}>
        <h4>Education</h4>
        <p>
          Bachelor of Engineering in Computer Engineering Prince of Songkla University Year 3 (Currently Studying)  
        </p>
      </section>

      {/* ===== SOFT SKILLS ===== */}
      <section style={{ marginBottom: "28px" }}>
        <h4>Soft Skills</h4>
        <ul>
          <li>Problem-solving</li>
          <li>Critical Thinking</li>
          <li>Communication</li>
          <li>Teamwork</li>
          <li>Adaptability</li>
          <li>Responsibility</li>
        </ul>
      </section>

      {/* ===== LANGUAGES ===== */}
      <section>
        <h4>Languages</h4>
        <ul>
          <li>Thai: Native</li>
          <li>English: Basic (strong in technical reading and documentation)</li>
        </ul>
      </section>
    </section>
  </main>
  
    )
}