// controller larımızada async await kullanıyoruz. her seferinde try catch yazmak yerine burda bir asyncHandler middleware i tanımladık. bununla try catch yapmaya gerek kalmadan error ları da handle etmiş olucaz.
const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

export default asyncHandler;
