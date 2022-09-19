import React from 'react'
import Note from './Note'
const Notes = ({ notes, ChangeActive, ChangeLabel, onDelete }) => {
	let notes_all = notes()
	return notes_all ? (
		notes_all.map(obj => {
			return (
				<Note
					key={obj.id}
					id={obj.id}
					label={obj.label}
					active={obj.active}
					time={obj.time}
					onChangeActive={ChangeActive}
					onChangeLabel={ChangeLabel}
					onDelete={onDelete}
				/>
			)
		})
	) : (
		<div className='empty'>Ничего нет</div>
	)
}

export default Notes
