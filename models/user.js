const mongoose = require(`mongoose`)

//mongoose.connect(`mongodb://127.0.0.1:27017/testapp1`)
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.error("❌ MongoDB connection error:", err));
const userSchema = mongoose.Schema({
    image: String,
    name: String,
    email: String
})

module.exports = mongoose.model(`user`,userSchema)
