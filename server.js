const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
const gachaRouter = require('./backend/routes/gachalogic.js');

app.use('/gacha', gachaRouter);
app.use(express.static('./dist/mabinogi-gacha'))


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});