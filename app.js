'use strict';

const app = require('./config/server')();

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`UXVideos Server Running on Port ${port}`);
});