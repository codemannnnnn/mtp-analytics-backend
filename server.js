require("dotenv").config();
const app = require("./api/app.js");

const port = process.env.PORT || 8001;

app.listen(port, () => console.log(`running on port ${port}`));
