import { useState } from "react";

function Footer() {
    const [count, setCount] = useState(0)
    return (
        <>
            <footer>
                <p>© 2025 Miguel Méndez Cerino | Este portafolio se hizo con fines demostrativos.</p>
            </footer>
        </>
    )
}
export default Footer