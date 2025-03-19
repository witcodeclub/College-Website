import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarIcon } from "lucide-react";

const styles = {
    container: {
        border: "4px solid #1E3A8A",
        backgroundColor: "#FFFFFF",
        color: "black",
        padding: "24px",
        borderRadius: "12px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        marginBottom: "20px",
    },
    header: {
        fontSize: "20px",
        fontWeight: "bold",
        marginBottom: "16px"
    },
    button: {
        display: "flex",
        alignItems: "center",
        padding: "8px 12px",
        border: "2px solid #1E3A8A",
        borderRadius: "8px",
        backgroundColor: "transparent",
        color: "#1E3A8A",
        cursor: "pointer",
        fontWeight: "bold"
    },
    icon: {
        width: "20px",
        height: "20px",
        marginRight: "8px"
    },
    cardGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "16px",
        marginTop: "16px",
    },
    card: {
        position: "relative",
        borderRadius: "10px",
        overflow: "hidden",
        cursor: "pointer",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)"
    },
    cardImage: {
        width: "100%",
        height: "120px",
        objectFit: "cover",
    },
    cardTitle: {
        position: "absolute",
        bottom: "0",
        left: "0",
        width: "100%",
        background: "rgba(0, 0, 0, 0.7)",
        color: "#fff",
        padding: "8px",
        fontWeight: "bold",
        textAlign: "center",
    }
};

export default function Important() {
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <div>
            {/* Announcements Section */}
            <div style={styles.container}>
                <h2 style={styles.header}>Announcements</h2>
                <button style={styles.button} onClick={() => setIsCalendarOpen(true)}>
                    <CalendarIcon style={styles.icon} />
                    Holiday Calendar
                </button>
                <Card style={{ marginTop: "12px" }}>
                    <CardContent style={{ padding: "12px", fontWeight: "600" }}>
                        Nostalgia 2025 Coming Soon
                    </CardContent>
                </Card>
            </div>

            {/* Accreditations & Recognitions Section */}
            <div style={styles.container}>
                <h2 style={styles.header}>Accreditations & Recognitions</h2>
                <div style={styles.cardGrid}>
                    <div style={styles.card} onClick={() => navigate("/aicte")}>
                        <img src="/images/aicte.jpg" alt="AICTE" style={styles.cardImage} />
                        <div style={styles.cardTitle}>AICTE</div>
                    </div>
                    <div style={styles.card} onClick={() => navigate("/dst-bihar")}>
                        <img src="/images/dst-bihar.jpg" alt="DST Bihar" style={styles.cardImage} />
                        <div style={styles.cardTitle}>DST Bihar</div>
                    </div>
                    <div style={styles.card} onClick={() => navigate("/higher-education")}>
                        <img src="/images/higher-edu.jpg" alt="Higher Education" style={styles.cardImage} />
                        <div style={styles.cardTitle}>Higher Education</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
