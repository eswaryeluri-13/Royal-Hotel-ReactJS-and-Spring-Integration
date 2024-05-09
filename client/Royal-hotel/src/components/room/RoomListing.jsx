import React from "react"
import Room from "./Room"
import Header from "../common/Header";


const RoomListing = () => {
	return (
		<>
		<Header title={"Browse All Rooms"} />

		<section className="bg-light p-2 mb-5 mt-5 shadow">
			<Room />
		</section>
		</>
	)
}

export default RoomListing