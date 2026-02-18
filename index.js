const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("PaaS Practical Exam - ZAIDU");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
// Updated before practical exam
