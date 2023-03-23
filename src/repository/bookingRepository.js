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

    async update(data,userid){
        try {
            const update = await Booking.update(data,{
                where:{
                    id:userid
                }
            })
            return update
        } catch (error) {
            throw {error : "There is some error at repository layer in updation of Booking"}
        }
    }
}

module.exports = BookingRepository;