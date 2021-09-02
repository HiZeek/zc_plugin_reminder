import React from 'react'
import UserIcon from './users.png'
import DateIcon from './date.png'
import TimeIcon from './time.png'

function Card() {
	return (
		<div>
			<div className="flex gap-8 my-12">
				<div>
					<h2 className="font-bold text-2xl text-left">
						Designing Zuri&#39;s Dashboard
					</h2>
					<p>This task will be a sprint, we are to use the design...</p>
				</div>
				<div className="flex">
					<img src={UserIcon} alt="users" className="w-16 h-10" />
					<img src={UserIcon} alt="users" className="w-16 h-10 -ml-8" />
				</div>
			</div>
			<hr className="border-gray-200 border-2" />
			<div className="flex gap-8 justify-center my-12">
				<div className="flex gap-4 pr-4 border-r-2">
					<img src={DateIcon} alt="date" className="w-4 h-4" />
					<p className="text-left -mt-2">
						Start Date:
						<br></br>
						<b>31st Aug, 2021</b>
					</p>
				</div>
				<div className="flex gap-4 pr-4 border-r-2">
					<img src={DateIcon} alt="date" className="w-4 h-4" />
					<p className="text-left -mt-2">
						Due Date:
						<br></br>
						<b>31st Aug, 2021</b>
					</p>
				</div>
				<div className="flex gap-4">
					<img src={TimeIcon} alt="date" className="w-4 h-4" />
					<p className="text-left -mt-2">
						Time:
						<br></br>
						<b>5:00pm</b>
					</p>
				</div>
			</div>
		</div>
	)
}

export default Card
