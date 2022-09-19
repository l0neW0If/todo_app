import { useEffect, useState } from 'react'
import AddNote from './components/AddNote'
import Header from './components/Header'
import Nav from './components/Nav'
import Notes from './components/Notes'

function App() {
	const [note, setNote] = useState([])
	const [activeLink, setActiveLink] = useState('All')
	useEffect(() => {
		if (localStorage.getItem('notes')) {
			const notes = JSON.parse(localStorage.getItem('notes'))
			if (notes) {
				setNote(notes)
			}
		} else {
			setNote([
				{
					id: new Date().getTime(),
					label: 'Right click to open context menu',
					active: false,
					time: '00:00 AM',
				},
			])
		}
	}, [])
	const ChangeActive = key => {
		let todoAll = [...note]
		todoAll.map(todo => {
			if (todo.id === key) {
				todo.active = !todo.active
			}
		})
		setNote(todoAll)
	}
	const ChangeLabel = (key, label) => {
		if (label.length > 0) {
			let todoAll = [...note]
			todoAll.map(todo => {
				if (todo.id === key) {
					todo.label = label
				}
			})
			setNote(todoAll)
		} else {
			onDelete(key)
		}
	}
	const onDelete = key => {
		let todoAll = [...note.filter(el => el.id !== key)]
		setNote(todoAll)
	}
	const filterNote = () => {
		let todoAll
		if (activeLink === 'All') todoAll = note
		else if (activeLink === 'Pending') todoAll = note.filter(el => !el.active)
		else if (activeLink === 'Done') todoAll = note.filter(el => el.active)
		if (todoAll.length <= 0) {
			return false
		}
		return todoAll
	}
	const addNote = event => {
		event.preventDefault()
		if (event.target.note.value) {
			let data = {
				id: new Date().getTime(),
				label: event.target.note.value,
				active: false,
				time: new Date().toLocaleTimeString('en-us', {
					hour: '2-digit',
					minute: '2-digit',
				}),
			}
			setNote([...note, data])
			event.target.note.value = ''
		}
	}
	useEffect(() => {
		localStorage.setItem('notes', JSON.stringify(note))
	}, [note])
	return (
		<div className='wrapper'>
			<div className='card'>
				<div className='top'>
					<Header />
					<Nav active={activeLink} changeActiveLink={setActiveLink} />
					<main>
						<Notes
							notes={filterNote}
							ChangeActive={ChangeActive}
							ChangeLabel={ChangeLabel}
							onDelete={onDelete}
						/>
					</main>
				</div>
				<div className='btn__add'>
					<AddNote Callback={addNote} />
				</div>
			</div>
		</div>
	)
}

export default App
