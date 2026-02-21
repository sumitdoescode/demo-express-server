import express from "express";

const app = express();
app.get("/", (req, res) => {
    res.send("This is a clothes application");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
