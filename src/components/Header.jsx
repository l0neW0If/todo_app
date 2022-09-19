import React from 'react'
import styles from './css/Header.module.scss'
const Header = () => {
	const date_now = new Date(Date.now())
	return (
		<header>
			<div className={styles.date}>
				<div className={styles.date__views}>
					<span className={styles.date__day}>{date_now.getUTCDate()}</span>
					<span className={styles.date__month}>
						{date_now.toLocaleString('en-EN', { month: 'short' })}
					</span>
					<span className={styles.date__years}>
						{date_now.getUTCFullYear()}
					</span>
				</div>
				<div className={styles.date__day__name}>
					{date_now.toLocaleString('en-EN', { weekday: 'long' })}
				</div>
			</div>
		</header>
	)
}

export default Header
