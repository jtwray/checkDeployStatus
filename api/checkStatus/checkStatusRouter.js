const express = require("express");
const router = express.Router();
const axios = require("axios");

async function checkApiStatus(url) {
  try {
    const response = await axios.get(urltoString(), { timeout: 5000 });
    if (response.status === 200) {
      return { isActive: true, status: response.status };
      // return true;
      // 'UP!';
    } else if (response.status === 400 || response.status === 500) {
      return { isActive: false, status: response.status };
      //  'DOWN!';
    }
  } catch (error) {
    return { isActive: false, status: 503 };
    console.error(error);
  }
}

router.post("/:url", (req, res) => {
  let { url } = req.params;
  console.log({ url, rparams: req.params });
  checkApiStatus(url)
    .then(({ isActive, status }) =>
      isActive
        ? res.status(200).send(`<span>✅${status}</span>`)
        : res.status(200).send(`<span>❌${status}</span>`)
    )
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error });
    });
});

router.post("/testurl", (req, res) => {
  let { url } = req.body;
  console.log({ url, rbody: req.body });
  checkApiStatus(url)
    .then(({ isActive, status }) =>
      isActive
        ? res.status(200).send(`<span>✅${status}</span>`)
        : res.status(200).send(`<span>❌${status}</span>`)
    )
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error });
    });
});

router.get("&url", (req, res) => {
  let { url } = req.query;
  console.log({ url, rq: req.query });
  checkApiStatus(url)
    .then(({ isActive, status }) =>
      isActive
        ? res.status(200).send(`<span>✅${status}</span>`)
        : res.status(200).send(`<span>❌${status}</span>`)
    )
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error });
    });
});

router.post("/body", (req, res) => {
  let { url } = req.body;
  console.log({ url, rq: req.body });
  checkApiStatus(url)
    .then(({ isActive, status }) =>
      isActive
        ? res.status(200).send(`<span>✅${status}</span>`)
        : res.status(200).send(`<span>❌${status}</span>`)
    )
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error });
    });
});

module.exports = router;
