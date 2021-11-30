import {useState, useEffect} from "react"

// SOMEONE DO THE NAVBAR
const Navbar = () => {
    return (
        <div id="navbar">
            <p>navbar......</p>
            <div onClick={() => window.location.replace("/login")}>login</div>
        </div>
    )
}

export default Navbar