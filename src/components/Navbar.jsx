import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className="contacts">
                <p>Contact rapide:</p>
                <p>Email: <a href="mailto:chamssidineab@gmail.com">chamssidineab@gmail.com</a></p>
                <p>LinkedIn: <a href="https://www.linkedin.com/in/abdallah-ambininstoa-chamssidine-219450219/">LinkedIn Profile</a></p>
                <p>GitHub: <a href="https://github.com/Chamssidine">Chamssidine</a></p>
            </div>
        </nav>
    );
};

export default Navbar;