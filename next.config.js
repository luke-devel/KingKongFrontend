require("dotenv").config();

const withImages = require('next-images')
module.exports = withImages()

module.exports = {
    env: {
        NEXT_PUBLIC_STRIPE_SECRET_KEY: 'pk_test_51Hd74zB2UDN8x91m7JZkc7d7x8sx1TETZcXW4oOJyVnqjEY50ba95YomEfmhL4O6gc4czseo4W5EYOGO1wj1MsWf00I3elDlbq',
        PUB_HOST_NAME: 'http://kingkongbackups.com',
        PRICE_ID_MONTHLY_USD: "price_1Hd7leB2UDN8x91m8IO8YpBm"
    },
  };