const {BookingService} = require('../services/index')


const bookingService = new BookingService();


exports.create = async (req, res)=> {
    try {
        const result = await bookingService.create(req.body)
        return res.status(200).json({
            message: 'Successfully completed booking',
            status:"Success",
            data: result
        })
    } catch (error) {
        return res.status(400).json({
            status: "failed",
            err: error,
        });
    
}
}