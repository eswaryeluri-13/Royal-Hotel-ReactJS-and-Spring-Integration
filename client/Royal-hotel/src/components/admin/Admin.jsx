import React from "react"
import { Link } from "react-router-dom"
import Header from "../common/Header";
import "./Admin.css"


const Admin = () => {
	return (<>
	    <Header title={"Welcome to Admin Panel"} />
		<hr />
		<section className="d-flex justify-content-center align-items-center mt-5">
			
			<div>
            <Link to={"/existing-rooms"} style={{ textDecoration: "none" }}>
                <button className="custom-button">Manage Rooms</button>
            </Link>
            <Link to={"/existing-bookings"} style={{ textDecoration: "none" }}>
                <button className="custom-button">Manage Bookings</button>
            </Link>
        </div>

		</section>
		</>)
	
}

export default Admin