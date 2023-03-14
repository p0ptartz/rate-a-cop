const authenticate = (resolve, parent, args, context, info) => {
  // add this conditional to any resolver that requires authentication
    if (!context.user) {
      throw new Error('You must be logged in to access this resource');
    }
  
    // Call the original resolver function with the updated context
    return resolve(parent, args, context, info);
  };
  
  module.exports = {
    authenticate,
  };
  