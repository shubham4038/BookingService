const {Booking} = require('../models/index');

class BookingRepository{

    async create(data){
        try {
            const booking = await Booking.create(data)
            return booking
        } catch (error) {
            throw {error : "There is some error at repository layer in creation of Booking"}
        }
    }

    async update(data,id){
        try {
            const booking = await Booking.update(data,{
                where:{
                    id
                }
            })
            const updatedBooking = await Booking.finfByPk(id)
            return updatedBooking;
        } catch (error) {
            throw {error : "There is some error at repository layer in creation of Booking"}
        }
    }
  
}


module.exports = BookingRepository;