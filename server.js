const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3010

// Static Folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`\n\nServing on port ${PORT} \n http://localhost:${PORT}`);``
});
