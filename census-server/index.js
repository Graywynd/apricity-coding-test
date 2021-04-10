const Express = require("express");
const cors = require("express");
const knex = require("knex");
const dbConfig = require("./config/db");
const censusRouter = require("./routes/census/index");


const db = knex(dbConfig);


const app = Express();

app.use(Express.urlencoded({ extended: false }));
app.use(Express.json());

app.use(cors());

app.use((req, res, next) => {
  // Forward db instance in request to access it in lower layers of the application
  req.db = db;

  next();
});

app.use('/api/persons', censusRouter());

app.listen(8888, console.log(`Server is running on port 8888`));
