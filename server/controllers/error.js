function errorHandler(error, request, response, next) {
    console.log("error: ", error);
    if(error.mesage){
        console.log("err message: ", error.message);
    
    }
    return response.status(error.status || 500).json({
        error: {
            message: error.message || 'Something went wrong!'
        }
    })
}

module.exports = errorHandler;