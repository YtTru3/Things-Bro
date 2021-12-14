//Makes Thing Work As Well As Errors
require("express")().use(require("express").static(__dirname + "/public")).use((_, res) => {
    res.status(404).sendFile(__dirname + "/404.html");
    res.status(400).sendFile(__dirname + "/400.html");
    res.status(401).sendFile(__dirname + "/401.html");
    res.status(402).sendFile(__dirname + "/402.html");
    res.status(408).sendFile(__dirname + "/408.html");
    res.status(410).sendFile(__dirname + "/410.html");
    res.status(413).sendFile(__dirname + "/413.html");
    res.status(414).sendFile(__dirname + "/414.html");
    res.status(418).sendFile(__dirname + "/418.html");
    res.status(421).sendFile(__dirname + "/421.html");
    res.status(423).sendFile(__dirname + "/423.html");
    res.status(429).sendFile(__dirname + "/429.html");
    res.status(451).sendFile(__dirname + "/451.html");
    res.status(500).sendFile(__dirname + "/500.html");
    res.status(502).sendFile(__dirname + "/502.html");
    res.status(503).sendFile(__dirname + "/503.html");
    res.status(508).sendFile(__dirname + "/508.html");
}).listen(8080);