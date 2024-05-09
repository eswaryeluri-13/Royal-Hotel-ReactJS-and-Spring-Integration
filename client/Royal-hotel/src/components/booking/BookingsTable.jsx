"use strict";

import { parseISO } from "date-fns";
import React, { useState, useEffect } from "react";
import DateSlider from "../common/DateSlider";

function formatDate(dateString) {
  const date = new Date(dateString); // Parse the date string
  const year = date.getFullYear(); // Get the year
  const month = ('0' + (date.getMonth() + 1)).slice(-2); // Get the month (zero-based index, so add 1)
  const day = ('0' + date.getDate()).slice(-2); // Get the day
  return `${year}-${month}-${day}`; // Return formatted date string
}

const BookingsTable = ({ bookingInfo, handleBookingCancellation }) => {
  const [filteredBookings, setFilteredBookings] = useState(bookingInfo);

  const filterBookings = (startDate, endDate) => {
    let filtered = bookingInfo;
    if (startDate && endDate) {
      filtered = bookingInfo.filter((booking) => {
        const bookingStarDate = parseISO(booking.checkInDate);
        const bookingEndDate = parseISO(booking.checkOutDate);
        return (
          bookingStarDate >= startDate &&
          bookingEndDate <= endDate &&
          bookingEndDate > startDate
        );
      });
    }
    setFilteredBookings(filtered);
  };

  useEffect(() => {
    setFilteredBookings(bookingInfo);
  }, [bookingInfo]);

  return (
    <section className="p-1">
      <DateSlider
        onDateChange={filterBookings}
        onFilterChange={filterBookings}
      />
      <table className="table table-bordered table-hover shadow">
        <thead>
          <tr>
            <th>S/N</th>
            <th>Booking ID</th>
            <th>Room ID</th>
            <th>Room Type</th>
            <th>Check-In Date</th>
            <th>Check-Out Date</th>
            <th>Guest Name</th>
            <th>Guest Email</th>
            <th>Adults</th>
            <th>Children</th>
            <th>Total Guest</th>
            <th>Confirmation Code</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {filteredBookings.map((booking, index) => (
            <tr key={booking.id}>
              <td>{index + 1}</td>
              <td>{booking.id}</td>
              <td>{booking.room.id}</td>
              <td>{booking.room.roomType}</td>
              <td>{formatDate(booking.checkInDate)}</td>
              <td>{formatDate(booking.checkInDate)}</td>
              <td>{booking.guestFullName}</td>
              <td>{booking.guestEmail}</td>
              <td>{booking.numOfAdults}</td>
              <td>{booking.numOfChildren}</td>
              <td>{booking.totalNumOfGuests}</td>
              <td>{booking.bookingConfirmationCode}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleBookingCancellation(booking.id)}
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {filterBookings.length === 0 && (
        <p> No booking found for the selected dates</p>
      )}
    </section>
  );
};

export default BookingsTable;
