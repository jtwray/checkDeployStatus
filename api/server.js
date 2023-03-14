const express = require("express");
const configMiddleware = require("./configMiddleware");
const server = express();
server.use(express.json());
configMiddleware(server);

const checkStatusRouter = require("../api/checkStatus/checkStatusRouter.js");
server.use("/api/checkstatus", checkStatusRouter);
const checkStatusChatGPTRouter = require("../api/checkStatus/chatgptrouter");
server.use("/api/checkStatusGPT", checkStatusChatGPTRouter);

server.get("/api", (req, res) => {
  let title = "check deploy status with node express axios";
  let image = `https://i.imgur.com/GXJ8srz.jpg?2`;
  let description = `NAME|RV camping Airbnb PITCH| 5th wheel Airbnb is a company that connects land owners and 5th wheel / RV owners. 🤝`;
  let summary = `\n
     >check the deploy status of your api`;
  res.send(` 
<html>
<head>
<meta name="twitter:card" content=${summary}/>
<meta name="twitter:title" content=${title}/>
<meta name="twitter:description" content="check the deploy status of you api" />
<meta name="twitter:image" content=${image} />
<meta name="description" property='og:description' content='NAME|check deploy status PITCH|check the deployment status of your production api 🤝🏼'>
<meta name="image" property="og:image"  content='https://i.imgur.com/GXJ8srz.jpg?2'>
<meta name="title" property="og:title"  content='checkDeployStatusNODEEXPRESS❌✅😎'>
<meta name="author" property="og:title"  content='Tucker Wray | jtwray '>
<meta property='og:image' content='https://i.imgur.com/GXJ8srz.jpg?2'>
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property='og:url' content='https://checkDeployStatus.herokuapp.com/api'>
</head>
<og:title><h1>checkDeployStatusNODEEXPRESS❌✅😎</h1></og:title>

<h2>https://checkDeployStatus.herokuapp.com/  ✔ api status</h2>

<hr>
<h3>https://checkDeployStatus.herokuapp.com/api/ endpoint documentation📃</h3>

<br>
<blockquote class="imgur-embed-pub" lang="en" data-id="hpzN3f8"><a href="//imgur.com/hpzN3f8"></a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>
<og:description>
<main>NAME|<br>
`);
});

server.get("/", (req, res) => {
  console.log("api:uppp");
  res.send(`
  <title>checkDeployStatus</title>
    <h2>server is up 🆙</h2><br>
    <h2>https://checkDeployStatus.herokuapp.com/      ✔   api status</h2>
    <hr>
 
    <h3>https://checkDeployStatus.herokuapp.com/api/ 🔐  endpoint documentation</h3>
    `);
});

module.exports = server;
