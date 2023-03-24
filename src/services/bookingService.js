const { BookingRepository } = require('../repository/index')
const axios = require('axios')
const { FLIGHT_SERVICE_PATH } = require('../config/serverConfig');

const bookingRepository = new BookingRepository();

class BookingService{

    async create(data){
        try {
            const flightId = data.flightId;
            const flightRequestURL = `${FLIGHT_SERVICE_PATH}/api/v1/flights/${flightId}`;
            const response = await axios.get(flightRequestURL);
            const flightData = response.data.data
            const priceOfFlight = flightData.price
            if(data.noOfSeats > flightData.totalSeats){
                throw new Error('Insufficients seats ')
            }
            const totalCost = priceOfFlight * data.noOfSeats;
            const bookingPayload = {...data,totalCost};
            console.log(bookingPayload);
            let bookingDetails = await bookingRepository.create(bookingPayload)
            await axios.patch(flightRequestURL, {totalSeats: flightData.totalSeats - bookingDetails.noOfSeats});
            bookingDetails = await bookingRepository.update({status:"Booked"},bookingDetails.id)
            return bookingDetails
        } catch (error) {
            throw { error :"Can't find the flight at service layer"}
        }
    }
}

module.exports = BookingService;