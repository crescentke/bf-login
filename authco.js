// config/auth.js


// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'        : 'UOvghD62lX5b8DMXQdMzpRAAI', // your App ID
        'clientSecret'    : 'FKVXNDvfYjmqs0KJ657iiONd3nUPBFULRXXxjJeG8EqW83Rtbv', // your App Secret
        'callbackURL'     : 'https://localhost:8181/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'        : 'xxxxxxxxxxxxxxxxxx',
        'consumerSecret'     : 'xxxxxxxxxxxxxxxxxx',
        'callbackURL'        : 'https://uourserver:8181/auth/twitter/callback'
    },

    'linkedinAuth' : {
        'consumerKey'        : 'xxxxxxxxxxxxxxxxxx',
        'consumerSecret'     : 'xxxxxxxxxxxxxxxxxx',
        'callbackURL'        : 'https://yourserver:8181/auth/linkedin/callback'
    },

    'googleAuth' : {
        'clientID'         : 'xxxxxxxxxxxxxxxxxx',
        'clientSecret'     : 'xxxxxxxxxxxxxxxxxx',
        'callbackURL'      : 'https://yourserver:8181/auth/google/callback'
    }

};
