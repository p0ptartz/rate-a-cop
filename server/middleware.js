const authenticate = (resolve, parent, args, context, info) => {
    if (!context.user) {
      throw new Error('You must be logged in to access this resource');
    }
  
    // Call the original resolver function with the updated context
    return resolve(parent, args, context, info);
  };
  
  module.exports = {
    authenticate,
  };
  