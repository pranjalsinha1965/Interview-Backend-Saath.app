const mysql = require('mysql2/promise');

exports.handler = async (event) => {
    const db = mysql.createPool({ /* DB Config */ });
    const { user_id, destination } = event.pathParameters;

    try {
        const recommendations = await getRecommendations(user_id, destination);
        const itinerary = recommendations.map((activity, index) => ({
            day: index + 1,
            activity: activity,
            cost: calculateCost(activity),
        }));

        return {
            statusCode: 200,
            body: JSON.stringify({ success: true, itinerary }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ success: false, message: 'Error generating itinerary' }),
        };
    }
};
