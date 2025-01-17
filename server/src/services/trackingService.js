const redis = require("../config/redis");

async function trackFailedRequest (errorType) {  
    await redis.hincrby('requestFails', errorType, 1);
};

async function trackSlowQuery(timestamp) {
    await redis.hincrby('querySlowLoading', errorType, 1);
};

async function getTrackingData() {
    const requestFails = await redis.hgetall('requestFails');  
    const querySlowLoading = await redis.hgetall('querySlowLoading');

    return {
        requestFails: Object.entries(requestFails).map(([errorType, count]) => ({
            errorType,
            count: parseInt(count, 10),  
        })),
        querySlowLoading: Object.entries(querySlowLoading).map(([errorType, count]) => ({
            errorType,
            count: parseInt(count, 10), 
        })),
    };

};

module.exports = { trackFailedRequest, trackSlowQuery, getTrackingData };
