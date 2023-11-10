import React from 'react'
import styles from './Footer.module.css'
import GitHub from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Instagram from '@mui/icons-material/Instagram';

export default function index() {
  return (
    <footer className={styles.rodape}>
        <p>Clone Trello 2023 - Darlan Martins &copy; </p>
        <ul>
            <li><a href="https://github.com/Darlan0307" target='_blank'><GitHub /></a></li>
            <li><a href="https://www.linkedin.com/in/darlan-martins-8a7956259/" target='_blank'><LinkedIn/></a></li>
            <li><a href="https://www.instagram.com/darlan_sw_/" target='_blank'><Instagram/></a></li>
        </ul>
    </footer>
  )
}
