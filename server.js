require("dotenv").config();

const port = process.env.PORT || 4001;

const app = require("./api/app.js");

app.listen(port, () => console.log(`Listening on port ${port}`));
