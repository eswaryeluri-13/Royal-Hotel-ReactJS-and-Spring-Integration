import React from "react"
import { Container } from "react-bootstrap"

const Parallax2 = () => {
	return (
		<div className="parallax mb-5">
			<Container className="text-center px-5 py-5 justify-content-center">
				<div className="animated-texts bounceIn">
					<h1>
                    Experience a symphony of <span className="hotel-color">Luxury</span> and <span className="hotel-color">Convenience</span>
					</h1>
					<h3>Where every guest is treated like royalty.</h3>
				</div>
			</Container>
		</div>
	)
}

export default Parallax2