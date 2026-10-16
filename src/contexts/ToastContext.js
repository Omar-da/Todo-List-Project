import { createContext, useContext, useState } from "react";
import Toast from "../components/Toast";

const ToastContext = createContext()

export default function ToastProvider({children}) {
    const [open, setOpen] = useState(false);
    const [toastMessage, setToastMessage] = useState("")
    const createToast = (message) => {
        setToastMessage(message)
        setOpen(true);
        setTimeout(() => {
        setOpen(false)
        }, 3000)
    };

    return (
        <ToastContext.Provider value={createToast}>
            <Toast isOpen={open} toastMessage={toastMessage} />
            {children}
        </ToastContext.Provider>
    )
}

export const useToast = () => useContext(ToastContext)
