import express from 'express';

const app = express();
const port = 9000;


app.get('/health', (req, res) => {
  res.send("OK")
});

app.get('/', (req, res) => {
  res.send("Hello Worllll")
})

app.listen(port);

console.log(`[app]: http://localhost:${port}`)
