const mongoose = require('mongoose');
//change db for new project
const db = "music_shop_db"

//connect to cloud
mongoose.connect(`mongodb+srv://root:root@clustermay.xvmj1.mongodb.net/${db}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));