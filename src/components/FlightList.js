import React from "react";
import {useSelector} from "react-redux";

export const FlightList = () => {

    const flights = useSelector(state =>
        state.flight.flight
    )
    if (!flights.length) {
        return (
            <p className={'center'}>There are no any flights</p>
        )
    }
    return (
        <table>
            <thead>
            <tr>
                <th>N</th>
                <th>From</th>
                <th>To</th>
                <th>Departure time</th>
                <th>Landing time</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>
            {flights.map((flight) => {
                return (
                    <tr key={flight.id}>
                        <td>{flight.id}</td>
                        <td>{flight.from}</td>
                        <td>{flight.to}</td>
                        <td>{flight.departureTime}</td>
                        <td>{flight.landingTime}</td>
                        <td>{flight.price}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}
