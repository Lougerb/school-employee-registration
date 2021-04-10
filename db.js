const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://db_admin:<password>@cluster0.gkpyz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
var client = null;

var getConnect = function getConnection() {
  client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  client.connect((err) => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
  });
};

const sumMe = function (x, y) {
  return x + y;
};
module.exports.getConnect = getConnection();
