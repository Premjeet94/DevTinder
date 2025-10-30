const express = require(`express`);

const app = express();

app.get("/user", (req,res) => {
    res.send({Firstname: "Premjeet", Lastname: "Vivek"});
});

app.post("/user", (req,res) => {
    res.send("Data successfully saved to the Db");
});

app.delete("/user", (req,res) => {
    res.send("Deleted successfully");
});


app.use("/test",(req,res) => {
    res.send("hello from server")
});



app.listen(3000, () => {
    console.log("server is successfully listening on port 3000...");
});