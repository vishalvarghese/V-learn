import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'

function Connect_requests() {
	const PF = process.env.REACT_APP_PUBLIC_FOLDER
	const user = useSelector((state) => state.user)
	const [requestList, setRequestList] = useState([])
	const axiosInstance=axios.create({
		baseURL:process.env.REACT_APP_API_URL
	})
	useEffect(() => {
		axiosInstance.get(`/connectionRequestList/${user._id}`, {
		}).then((response) => {
			setRequestList(response.data)
			//    console.log(requestList,"hhhhhhhhhhhhhhhhhhhh");
		}).catch((err) => {
			console.log(err);
		})

	}, [])

	const acceptConnection = (id) => {
		// console.log(id,"accepted you");
		axiosInstance.post(`/acceptConnection/${user._id}/${id}`, {
		}).then((response) => {
			//    setRequestList(response.data)
			console.log(response.data, "acepterrrrrrrrrrrrrrrr");
			window.location.reload()
		}).catch((err) => {
			console.log(err);
		})
	}

	return (
		<div>
			<section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
				<div className="container p-6 mx-auto space-y-8">
					<div className="space-y-2 text-center">
						{requestList.length ? <h2 className="text-3xl font-bold">New Connection Requests</h2> :
							<h2 className='space-y-2 text-center text-3xl font-bold'>No new Connection Requests</h2>}
						{/* <p className="font-serif text-sm dark:text-gray-400">Qualisque erroribus usu at, duo te agam soluta mucius.</p> */}
					</div>
					<div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 lg:grid-cols-3">


						{
							requestList.map((obj) => {
								return (
									<article className="flex flex-col dark:bg-gray-900">
										<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
											<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={obj.profilePicture} />
										</a>
										<div className="flex flex-col flex-1 p-6">
											<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
											<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">{obj.name}</a>
											<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">MERN Stack developer,Microsoft</h3>
											<div className="flex flex-wrap justify-between pt-3 space-x-2 text-sm dark:text-gray-400">
												<button onClick={() => { acceptConnection(obj._id) }} className='bg-green-300 p-2 rounded-2xl'><span>Accept</span></button>
												<button className='bg-red-400 p-2 rounded-2xl'><span>Reject</span></button>
											</div>
										</div>
									</article>
								)
							})}






						{/* <article className="flex flex-col dark:bg-gray-900">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?4" />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Muhammed Rizwan</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">MERN Stack developer,Facebook</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-sm dark:text-gray-400">
						<button className='bg-green-300 p-2 rounded-2xl'><span>Accept</span></button>
						<button className='bg-red-400 p-2 rounded-2xl'><span>Reject</span></button>
					</div>
				</div>
			</article> */}
					</div>
				</div>
			</section>
		</div>
	)
}

export default Connect_requests
