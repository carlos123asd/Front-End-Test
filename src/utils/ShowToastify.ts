import StartToastifyInstance from "toastify-js";


export const showToastify = (message: string, type: 'success' | 'error' | 'warning' = 'success') => {
    return StartToastifyInstance({
        text: message,
        duration: 3000,
        gravity: "top",
        position: "center",
        style: { ...styles.containerToast, ...styles[type] } as { [cssRule: string]: string }
    });
}

const styles = {
    containerToast: {
        width: "max-content",
        padding: "1em 2em",
        borderRadius: "8px",
        fontSize: "1rem",
        fontWeight: "bold",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        position: "fixed",
        top: 0,
        left: "40%",
        transform: "translateX(-50%)",
        zIndex: 9999,
    },
    success: {
        backgroundColor: "#4CAF50",
        color: "white",
    },
    error: {
        backgroundColor: "#f44336",
        color: "white",
    },
    warning: {
        backgroundColor: "#ff9800",
        color: "white",
    }
}  as { [key: string]: React.CSSProperties };