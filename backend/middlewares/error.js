import ErrorResponse from "../helpers/errorResponse.js";

const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;
  // Log to console for dev
  // console.log(err);
  // console.log(err.stack);

  // Mongoose bad ObjectId (girilen id ile birşey yok veya id uygun formatta değil)
  if (err.name === "CastError") {
    const message = "Resource not found";
    error = new ErrorResponse(message, 404);
  }

  // Mongoode dublicate key (model de name e unique verdik. aynı isimle veri kaydedilmeye çalışılırsa error u bununla handle edicez);
  if (err.code === 11000) {
    const message = "Duplicate field value entered!";
    error = new ErrorResponse(message, 400);
  }

  // Mongoose Validation Error (modelde ki required alanlar boş bırakılırsa)
  if (err.name === "ValidationError") {
    // bu error mesajında errors adlı bir obje dönüyor
    const message = Object.values(err.errors).map((val) => val.message);

    error = new ErrorResponse(message, 400);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || "Server Error",
  });
};

export default errorHandler;
