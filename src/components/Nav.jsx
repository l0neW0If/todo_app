import React from 'react'
import styles from './css/Nav.module.scss'
const Nav = ({ active, changeActiveLink }) => {
	const links = ['All', 'Pending', 'Done']
	const newPage = e => {
		changeActiveLink(e.target.innerHTML)
	}
	return (
		<nav className={styles.nav}>
			<ul className={styles.nav__list}>
				{links.map(link => {
					return (
						<li
							className={active === link ? styles.active : ''}
							onClick={newPage}
						>
							{link}
						</li>
					)
				})}
			</ul>
		</nav>
	)
}

export default Nav
