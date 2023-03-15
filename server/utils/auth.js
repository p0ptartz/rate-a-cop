// const passport = require('passport');
// const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
// const jwt = require('jsonwebtoken');

// const secret = 'mysecretssshhhhhhh';
// const expiration = '2h';

// const jwtOptions = {
//   jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//   secretOrKey: secret,
// };

// passport.use(new JwtStrategy(jwtOptions, (payload, done) => {
//   // verify the payload and extract the user data
//   const { email, username, _id } = payload.data;
//   const user = { email, username, _id };
//   done(null, user);
// }));

// module.exports = {
//   authMiddleware: function (req, res, next) {
//     // authenticate the request using Passport
//     passport.authenticate('jwt', { session: false }, (err, user) => {
//       if (err) {
//         console.log(err);
//         return res.status(401).json({ message: 'Invalid token' });
//       }
//       if (!user) {
//         return res.status(401).json({ message: 'Unauthorized' });
//       }
//       req.user = user;
//       next();
//     })(req, res, next);
//   },
//   signToken: function ({ email, username, _id }) {
//     const payload = { email, username, _id };
//     return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
//   },
// };
