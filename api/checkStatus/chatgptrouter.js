const express = require("express");
const router = express.Router();
const axios = require("axios");

// const app = express();
// router.use(express.json());

router.post("/testurl", async (req, res) => {
  console.log("testurl-chatGPTrouter");
  const testUrl = req.body.url;
  try {
    const response = await axios.get(testUrl.toString(), { timeout: 5000 });
    if (response.status === 200) {
      res.status(200).json({ message: "up" });
    } else {
      res.status(200).json({ message: "down" });
    }
  } catch (error) {
    if (error.code === "ECONNABORTED") {
      res.set("Retry-After", "5").status(202).json({ message: "retry" });
    } else {
      res.status(200).json({ message: "down" });
    }
  }
});

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

module.exports = router;
