import React from 'react'
import styles from './css/AddNote.module.scss'
const AddNote = ({ Callback }) => {
	return (
		<div>
			<form className={styles.btn__add} onSubmit={Callback}>
				<input type='text' placeholder='Add to new note' name='note' />
				<button className={styles.btn} type='submit'>
					<span>+</span>
				</button>
			</form>
		</div>
	)
}

export default AddNote
