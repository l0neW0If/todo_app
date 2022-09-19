import React, { useState } from 'react'
import styles from './css/Note.module.scss'
import useContextMenu from 'react-use-context-menu'

const Note = ({
	id,
	active,
	time,
	label,
	onChangeActive,
	onChangeLabel,
	onDelete,
}) => {
	const [edit, setEdit] = useState(false)
	const [value, setValue] = useState(label)
	const [bindMenu, bindMenuItems, useContextTrigger, data] = useContextMenu()
	const [bindTrigger] = useContextTrigger({})
	const editActive = () => {
		setEdit(!edit)
		data.setVisible(false)
	}
	function changeLabel(e) {
		e.preventDefault()
		onChangeLabel(id, value)
		setEdit(false)
	}
	return (
		<div className={styles.note}>
			<nav {...bindMenu} className={styles.edit__menu}>
				<div
					{...bindMenuItems}
					className={styles.edit__items}
					onClick={!edit ? editActive : changeLabel}
				>
					<i className='bi bi-pencil-fill'></i>
					<span>Edit</span>
				</div>
				<div
					{...bindMenuItems}
					className={styles.edit__items}
					onClick={() => onDelete(id)}
				>
					<i className='bi bi-trash'></i>
					<span>Delete</span>
				</div>
			</nav>
			<label htmlFor={id} title='Right click to open context menu'>
				<input
					type='checkbox'
					id={id}
					checked={active}
					onChange={() => onChangeActive(id)}
				/>
				<i className='bi bi-check2'></i>
				{edit ? (
					<form action='' onSubmit={changeLabel}>
						<input
							type='text'
							className={styles.edit}
							value={value}
							onChange={e => setValue(e.target.value)}
							name='value'
							autoFocus
							onBlur={changeLabel}
						/>
					</form>
				) : (
					<span className='label' {...bindTrigger}>
						{label}
					</span>
				)}
			</label>
			<span className={styles.time}>{time}</span>
		</div>
	)
}

export default Note
