import StartToastifyInstance from "toastify-js";


export const showToastify = (message: string, type: 'success' | 'error' = 'success') => {
    return StartToastifyInstance({
        text: message,
        duration: 3000,
        gravity: "top",
        position: "center",
        className: type === 'success' ? "toast-success" : "toast-error",
    });
}