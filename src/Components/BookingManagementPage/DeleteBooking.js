import React, { useContext } from "react";
import { BookingsContext } from "../../Context/BookingsContext";
import Button from "react-bootstrap/Button";
// import Swal from 'sweetalert2'

const DeleteProduct = ({ _id }) => {
	const { deleteItem } = useContext(BookingsContext);

	const removeItem = () => {
		if (window.confirm("Diese Buchung permanent löschen?")) {
			if (window.confirm("Wirklich löschen?")) {
				deleteItem(_id);
			}
		} else {
			alert("Buchung wurde nicht gelöscht");
		}

		// Swal.fire({
		// 	title: 'Diese Buchung permanent löschen?',
		// 	icon: 'warning',
		// 	showCancelButton: true,
		// 	confirmButtonColor: '#3085d6',
		// 	cancelButtonColor: '#d33',
		// 	confirmButtonText: 'Löschen!'
		// }).then((result) => {
		// 	if (result.isConfirmed) {
		// 		Swal.fire({
		// 			title: 'Wirklich löschen?',
		// 			icon: 'warning',
		// 			showCancelButton: true,
		// 			confirmButtonColor: '#3085d6',
		// 			cancelButtonColor: '#d33',
		// 			confirmButtonText: 'Ja wirklich!'
		// 		})
		// 	} else if (result.dismiss === Swal.DismissReason.cancel) {
		// 		Swal.fire({
		// 			title: 'Buchung wurde nicht gelöscht!',
		// 			icon: 'error'
		// 		})
		// 	}
		// })
	};

	return (
		<Button variant="danger" onClick={removeItem}>
			<i className="fa fa-trash fa-lg" aria-hidden="true"></i>
		</Button>
	);
};

export default DeleteProduct;
