export const asyncHandler = (requestHandler) => {
  return Promise.resolve(requestHandler(err, req, res, next)).catch(
    (err) => next(err)
  );
};
