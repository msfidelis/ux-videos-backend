'use strict';

process.env.MONGO_HOST = '0.0.0.0';
process.env.MONGO_PORT = 27017;
process.env.MONGO_DATABASE = 'ux-videos';


const videoScrapyService = require('../modules/scrapy/services/videos');
const userService = require('../modules/users/services/users');

const defaultUser = {
    email : "admin@admin.com",
    password : "123",
    name : "Admin"
};

// userService.createUser(defaultUser)
//     .then(success => console.log("Admin user created", defaultUser))
//     .catch(err => console.log("Unable to create admin user!", err));

const videosMock = [{
        "channel_link": "https://www.youtube.com/user/gonowtecnologia",
        "title": "10 princípios de UX do Google - Gustavo Moura - Google Brasil",
        "channel_name": "Gonow Tecnologia",
        "link": "https://www.youtube.com/watch?v=rrn1P-U8kMY",
        "thumbnail": "https://img.youtube.com/vi/rrn1P-U8kMY/hqdefault.jpg",
        "__v": 0,
        "updated_at": "2018-01-20T15:37:42.134Z",
        "tags": [
            "UX",
            "youtube"
        ]
    },
    {
        "channel_link": "https://www.youtube.com/user/Harvardilab",
        "title": "Harvard i-lab | Why You're Over-Thinking Your UI/UX with Rohan Puri",
        "channel_name": "Harvard Innovation Labs",
        "link": "https://www.youtube.com/watch?v=Is2O666qDPs",
        "thumbnail": "https://img.youtube.com/vi/Is2O666qDPs/hqdefault.jpg",
        "__v": 0,
        "updated_at": "2018-01-20T15:37:49.663Z",
        "tags": [
            "UX",
            "youtube"
        ]
    },
    {
        "channel_link": "https://www.youtube.com/user/AdobeCreativeCloud",
        "title": "Live UX Design with Johny Vino 1/3",
        "channel_name": "Adobe Creative Cloud",
        "link": "https://www.youtube.com/watch?v=xmUvUyD_d0Q",
        "thumbnail": "https://img.youtube.com/vi/xmUvUyD_d0Q/hqdefault.jpg",
        "__v": 0,
        "updated_at": "2018-01-20T15:37:53.653Z",
        "tags": [
            "UX",
            "youtube"
        ]
    },
    {
        "channel_link": "https://www.youtube.com/user/8itoporcento",
        "title": "Aula 2 - UX Design",
        "channel_name": "8itoporcento",
        "link": "https://www.youtube.com/watch?v=aDs13sTH45Y",
        "thumbnail": "https://img.youtube.com/vi/aDs13sTH45Y/hqdefault.jpg",
        "__v": 0,
        "updated_at": "2018-01-20T15:38:00.645Z",
        "tags": [
            "UX",
            "youtube"
        ]
    },
    {
        "channel_link": "https://www.youtube.com/user/TheSkoolRocks",
        "title": "What is UX Design? Defining User Experience Design & Explaining the Process",
        "channel_name": "The Futur",
        "link": "https://www.youtube.com/watch?v=CJnfAXlBRTE",
        "thumbnail": "https://img.youtube.com/vi/CJnfAXlBRTE/hqdefault.jpg",
        "__v": 0,
        "updated_at": "2018-01-20T15:38:04.098Z",
        "tags": [
            "UX",
            "youtube"
        ]
    },
    {
        "channel_link": "https://www.youtube.com/channel/UCzBkNPSxw15qrW_Y8p-oCUw",
        "title": "#19: UX master, Jared Spool, evolves our thinking on design maturity and product vision",
        "channel_name": "High Resolution",
        "link": "https://www.youtube.com/watch?v=hlk8GsYkqi4",
        "thumbnail": "https://img.youtube.com/vi/hlk8GsYkqi4/hqdefault.jpg",
        "__v": 0,
        "updated_at": "2018-01-20T15:38:24.815Z",
        "tags": [
            "UX",
            "youtube"
        ]
    },
    {
        "channel_link": "https://www.youtube.com/user/GoogleDevelopers",
        "title": "Creating UX that “Just Feels Right” with Progressive Web Apps (Google I/O '17)",
        "channel_name": "Google Developers",
        "link": "https://www.youtube.com/watch?v=mmq-KVeO-uU",
        "thumbnail": "https://img.youtube.com/vi/mmq-KVeO-uU/hqdefault.jpg",
        "__v": 0,
        "updated_at": "2018-01-20T15:38:28.224Z",
        "tags": [
            "UX",
            "youtube"
        ]
    },
    {
        "channel_link": "https://www.youtube.com/channel/UCeB_OpLspKJGiKv1CYkWFFw",
        "title": "How to stay ahead of the game as a UX Designer in 2017",
        "channel_name": "AJ&Smart",
        "link": "https://www.youtube.com/watch?v=zK0hUwrIqcw",
        "thumbnail": "https://img.youtube.com/vi/zK0hUwrIqcw/hqdefault.jpg",
        "__v": 0,
        "updated_at": "2018-01-20T15:38:31.632Z",
        "tags": [
            "UX",
            "youtube"
        ]
    },
    {
        "channel_link": "https://www.youtube.com/user/bukalapak",
        "title": "Reza Novriansyah - UX  di Balik Layar Go-Jek | BukaTalks",
        "channel_name": "Bukalapak",
        "link": "https://www.youtube.com/watch?v=XxDvhzg3nTk",
        "thumbnail": "https://img.youtube.com/vi/XxDvhzg3nTk/hqdefault.jpg",
        "__v": 0,
        "updated_at": "2018-01-20T15:38:36.554Z",
        "tags": [
            "UX",
            "youtube"
        ]
    },
    {
        "channel_link": "https://www.youtube.com/user/AdobeCreativeCloud",
        "title": "Live UX Design with Ashley Karr 1/3",
        "channel_name": "Adobe Creative Cloud",
        "link": "https://www.youtube.com/watch?v=mAL4e82HjbA",
        "thumbnail": "https://img.youtube.com/vi/mAL4e82HjbA/hqdefault.jpg",
        "__v": 0,
        "updated_at": "2018-01-20T15:38:39.942Z",
        "tags": [
            "UX",
            "youtube"
        ]
    },
    {
        "channel_link": "https://www.youtube.com/user/mlwebco",
        "title": "Specific Things to Say (and talk about) In Your UX Design Interview",
        "channel_name": "Mike Locke",
        "link": "https://www.youtube.com/watch?v=aQmCkuAH3JI",
        "thumbnail": "https://img.youtube.com/vi/aQmCkuAH3JI/hqdefault.jpg",
        "__v": 0,
        "updated_at": "2018-01-20T15:38:43.557Z",
        "tags": [
            "UX",
            "youtube"
        ]
    },
    {
        "channel_link": "https://www.youtube.com/channel/UCNWWTrX67U9YW30shHgRmgQ",
        "title": "Putting Users in UX: Research Methods for Strategy",
        "channel_name": "Usability Matters Inc.",
        "link": "https://www.youtube.com/watch?v=_pZmdeD4u3Y",
        "thumbnail": "https://img.youtube.com/vi/_pZmdeD4u3Y/hqdefault.jpg",
        "__v": 0,
        "updated_at": "2018-01-20T15:38:48.995Z",
        "tags": [
            "UX",
            "youtube"
        ]
    },
    {
        "channel_link": "https://www.youtube.com/channel/UCN7dywl5wDxTu1RM3eJ_h9Q",
        "title": "Getting Started In User Experience Design",
        "channel_name": "Flux",
        "link": "https://www.youtube.com/watch?v=BQ8J1riPvN0",
        "thumbnail": "https://img.youtube.com/vi/BQ8J1riPvN0/hqdefault.jpg",
        "__v": 0,
        "updated_at": "2018-01-20T15:39:02.833Z",
        "tags": [
            "User Experience",
            "youtube"
        ]
    }
];

videoScrapyService
    .createLogBatch(videosMock)
    .then( (videosBatch) => {

        return new Promise((resolve, reject) => {

            videosBatch.forEach(video => {

                videoScrapyService.acceptLogAsVideo(video._id)
                .then(success => resolve(success))
                .catch(err => reject(err));

            });

        });

    })