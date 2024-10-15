const jwt = require('jsonwebtoken');
router.get('/api/users/:user_id/destination/:destination', authenticate, generateItinerary);

function authenticate(req, res, next) {
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}
