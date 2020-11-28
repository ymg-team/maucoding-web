import mongodb from "mongodb"
import debug from "debug"

const {
  MONGO_USER,
  MONGO_PASSWORD,
  MONGO_HOST,
  MONGO_DB,
  MONGO_WITH_SRV
} = process.env
const debugMongo = debug("app:mongo")
let url = ""
if (MONGO_USER && MONGO_PASSWORD) {
  url = `${
    !MONGO_WITH_SRV ? "mongodb://" : "mongodb+srv://"
  }${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}/${MONGO_DB}`
} else {
  url = `${!MONGO_WITH_SRV ? "mongodb://" : "mongodb+srv://"}${MONGO_HOST}`
}

export default () => {
  return new Promise((resolve, reject) => {
    mongodb.MongoClient.connect(url, (err, client) => {
      if (err) {
        debugMongo("[error] to connect mongo")
        debugMongo(err, "mongo")
      } else {
        debugMongo("[success] connected mongo server")
        const db = client.db(process.env.MONGO_DB)
        resolve({ db, client })
      }
    })
  }).catch(e => {
    debugMongo(e)
  })
}
