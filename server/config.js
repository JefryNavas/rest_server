// --------------------------
// Puerto
// --------------------------

process.env.PORT = process.env.PORT || 3000;
// --------------------------
// Base de datos Online y local
// --------------------------

process.env.NODE_ENV = process.env.NODE_ENV || "dev";

let urlDB;
if (process.env.NODE_ENV === "dev") {
    urlDB = 'mongodb://localhost:27017/Cafe'

} else {
    urlDB = 'mongodb+srv://bree:UycPXtA3U5Xuraz@aravis.vegw4.mongodb.net/Cafe?retryWrites=true&w=majority'
}

process.env.URLDB = urlDB;