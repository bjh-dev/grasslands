'use client'
import axios from 'axios'
import { useState } from 'react'

const FormBuilder = () => {
	const [formState, setFormState] = useState('idle')
	const [FNAME, setFNAME] = useState('')
	const [LNAME, setLNAME] = useState('')
	const [email, setEmail] = useState('')
	const [PHONE, setPHONE] = useState('')
	const [MESSAGE, setMESSAGE] = useState('')
	const [HOWHEARD, setHOWHEARD] = useState('none')
	const [error, setError] = useState(null)

	const handleSubmit = async (e) => {
		e.preventDefault()
		setFormState('loading')
		try {
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			const response = await axios.post('/api/handle-submit', {
				FNAME,
				LNAME,
				email,
				PHONE,
				HOWHEARD,
				MESSAGE,
			})
			setFormState('success')
			setFNAME('')
			setLNAME('')
			setEmail('')
			setPHONE('')
			setHOWHEARD('')
			setMESSAGE('')
		} catch (e) {
			setError(e.response.data.error)
			setFormState('error')
		}
	}
	return (
		<form
			onSubmit={handleSubmit}
			className='relative grid grid-cols-2 gap-x-2 gap-y-4 rounded-lg border-2 border-tuatara-50 p-6'
		>
			{formState !== 'success' && (
				<>
					<div className='col-span-2 md:col-span-1'>
						<label htmlFor='FNAME'>
							<input
								className='w-full rounded-md py-3 text-sm text-tuatara-800 placeholder-tuatara-300'
								type='text'
								name='FNAME'
								id='FNAME'
								placeholder='First Name'
								value={FNAME}
								onChange={(e) => setFNAME(e.target.value)}
							/>
						</label>
					</div>
					<div className='col-span-2 md:col-span-1'>
						<label htmlFor='LNAME'>
							<input
								className='w-full rounded-md py-3 text-sm text-tuatara-800 placeholder-tuatara-300'
								type='text'
								name='LNAME'
								id='LNAME'
								placeholder='Last Name'
								value={LNAME}
								onChange={(e) => setLNAME(e.target.value)}
							/>
						</label>
					</div>
					<div className='col-span-2'>
						<label htmlFor='email'>
							<input
								className='w-full rounded-md py-3 text-sm text-tuatara-800 placeholder-tuatara-300'
								type='email'
								name='email'
								id='email'
								placeholder='Your Email'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</label>
					</div>
					<div className='col-span-2'>
						<label htmlFor='PHONE'>
							<input
								className='w-full rounded-md py-3 text-sm text-tuatara-800 placeholder-tuatara-300'
								type='tel'
								name='PHONE'
								id='PHONE'
								placeholder='Your Contact Number'
								value={PHONE}
								onChange={(e) => setPHONE(e.target.value)}
							/>
						</label>
					</div>
					<div className='col-span-2'>
						<label htmlFor='HOWHEARD'></label>
						<select
							className='w-full rounded-md py-3 text-sm text-tuatara-800 disabled:text-tuatara-300 disabled:placeholder-tuatara-300'
							name='HOWHEARD'
							id='HOWHEARD'
							required
							value={HOWHEARD}
							onChange={(e) => setHOWHEARD(e.target.value)}
						>
							<option className='text-tuatara-300' value='0'>
								--&nbsp;&nbsp;How did you hear about us?&nbsp;&nbsp;--
							</option>
							<option value='Someone who attends Inner West Church'>
								Someone who attends Inner West Church
							</option>
							<option value='Social Media'>Social Media</option>
							<option value='Google Search'>Google Search</option>
							<option value='Someone from another church'>
								Someone from another church
							</option>
							<option value='Friend or Family'>Friend or Family</option>
							<option value='Another Websit'>Another Websit</option>
						</select>
					</div>
					<div className='col-span-2'>
						<label htmlFor='MESSAGE'></label>
						<textarea
							className='w-full rounded-md py-3 text-sm text-tuatara-800 placeholder-tuatara-300'
							name='MESSAGE'
							id='MESSAGE'
							placeholder='Message'
							rows={5}
							value={MESSAGE}
							onChange={(e) => setMESSAGE(e.target.value)}
						/>
					</div>
					<div className='col-span-2'>
						<div className='flex justify-end'>
							<button
								className='rounded-md bg-indian-khaki px-6 py-2 text-sm font-bold text-tuatara-800 placeholder-tuatara-300'
								type='submit'
								disabled={formState === 'Loading'}
								onClick={handleSubmit}
							>
								Submit
							</button>
						</div>
					</div>
				</>
			)}
			<div>
				{formState === 'error' && (
					<div className='mt-6 border border-r-ronchi px-5 py-2 text-ronchi'>
						<p className='py-4 text-2xl font-bold'>
							There was an error with you submission.
						</p>
						<p className='text-sm'>See the datails below for information</p>
						<p className='text-sm'>{error}</p>
					</div>
				)}
				{formState === 'success' && (
					<div className='mt-6 text-tuatara-50'>
						<p className='py-4 text-2xl font-bold'>
							Thanks for making contact!
						</p>
						<p className='mb-3 text-sm'>
							We&apos;ve recieved your message and look forward to meeting you.
						</p>
						<p className='mb-3 text-sm'>
							If you&apos;re message has a question or required a response,
							we&apos;ll do our best to make contact before your visit.
						</p>
						<p className='mb-3 text-sm'>God bless you!</p>
					</div>
				)}
			</div>
		</form>
	)
}

export default FormBuilder
