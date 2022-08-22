const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "/build")));

app.post("/api/webhook", function (req, res) {
  const exec = require("child_process").exec;
  var yourscript = exec("sh webhook.sh", (error, stdout, stderr) => {
    console.log(`${stdout}`);
    console.log(`${stderr}`);
    if (error !== null) {
      console.log(`exec error: ${error}`);
    }
  });
  console.log("被打ㄌ");
  res.send("webhook");
});
app.get("/api/:id",(req,res)=>{
  console.log(req.params.id)
  const response = `URL is /api/${req.params.id},If you try this URL three times within five seconds, you will be locked for ten seconds`
  res.end(response)
})
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("我跑了在", PORT);
});
