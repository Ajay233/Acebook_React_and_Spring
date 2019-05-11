import React from 'react'

const NavBar = ({children}) => {
        return(
            <ul>
                <li>
                {children}
                </li>
                <li>
                    <a href="/logout">Logout</a>
                </li>
            </ul>
        )
}

export default NavBar;