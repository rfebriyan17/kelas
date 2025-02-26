export default function ClassCard({ className, friends }) {
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  return (
    <div style={styles.container}>
      <h3 style={styles.subTitle}>Daftar Teman Kelas</h3>
      <div style={{ ...styles.card, maxWidth: isMobile ? "90%" : "600px" }}>
        <h2 style={styles.header}>{className}</h2>
        <div style={styles.friendContainer}>
          {friends.map((friend, index) => (
            <div key={index} style={styles.profileWrapper}>
              <img
                src={friend.image}
                alt={friend.name}
                style={{
                  ...styles.image,
                  width: isMobile ? "60px" : "80px",
                  height: isMobile ? "60px" : "80px",
                }}
              />
              <p style={{ ...styles.name, fontSize: isMobile ? "0.8rem" : "0.9rem" }}>
                {friend.name}
              </p>
            </div>
          ))}
        </div>
        <button
          style={{
            ...styles.assignButton,
            padding: isMobile ? "6px 12px" : "8px 15px",
            fontSize: isMobile ? "0.8rem" : "0.9rem",
          }}
        >
          + Assign Peserta Kelas
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginBottom: "30px",
    padding: "10px",
    borderRadius: "15px",
    background: "linear-gradient(-45deg, #ff0000, #ff7300, #ffeb00, #00ff00, #00ffff, #0000ff, #8000ff)",
    backgroundSize: "400% 400%",
    animation: "gradientBG 8s ease infinite",
    boxShadow: "0 4px 12px rgba(0, 255, 255, 0.3)",
    margin: "auto",
  },
  card: {
    background: "#222",
    borderRadius: "15px",
    padding: "20px",
    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.3)",
    textAlign: "center",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    margin: "auto",
  },
  header: {
    fontSize: "1.6rem",
    color: "#fff",
    fontWeight: "600",
    marginBottom: "15px",
    textShadow: "0 0 10px rgba(0, 255, 255, 0.5)",
  },
  friendContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "15px",
  },
  profileWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    transition: "transform 0.3s ease",
  },
  image: {
    borderRadius: "50%",
    border: "2px solid rgba(255, 255, 255, 0.2)",
    boxShadow: "0 2px 8px rgba(0, 255, 255, 0.3)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  name: {
    marginTop: "5px",
    color: "#ddd",
    fontWeight: "500",
    textAlign: "center",
  },
  assignButton: {
    marginTop: "15px",
    fontWeight: "500",
    color: "#fff",
    background: "linear-gradient(135deg, #4caf50, #81c784)",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background 0.3s ease, transform 0.3s ease",
  },
};

// Efek hover
styles.card[":hover"] = { 
  transform: "scale(1.02)", 
  boxShadow: "0 8px 20px rgba(0, 255, 255, 0.3)" 
};
styles.image[":hover"] = { 
  transform: "scale(1.1)", 
  boxShadow: "0 4px 12px rgba(0, 255, 255, 0.4)" 
};
styles.profileWrapper[":hover"] = { transform: "translateY(-3px)" };
styles.assignButton[":hover"] = { 
  background: "linear-gradient(135deg, #43a047, #66bb6a)", 
  transform: "scale(1.05)" 
};
