import React from 'react';
import './Footer.css'; 

const Footer = () => {
    return (
        <footer className="footer">
            <div>
            <h2>About us:</h2>
            <p>Our Finance Tracker application is designed to help users manage their finances efficiently. The application provides features for; tracking expenses, and incomes, setting budgets and achieving financial goals.</p>
            </div>
            <div>
            <h2>Contact us</h2>
            <p>Incase of any inquries contact us on our emails:</p>
            <ul>
                <li>anthony.ngonde@student.moringaschool.com</li>
                <li>charles.kibet@student.moringaschool.com</li>
                <li>iqra.mahamed@student.moringaschool.com</li>
                <li>michael.wainaina@student.moringaschool.com</li>
                <li>jason.okingo@student.moringaschool.com</li>
            </ul>
            </div>
        </footer>
    );
};

export default Footer;