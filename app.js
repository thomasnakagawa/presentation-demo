const express = require('express')
const app = express()
app.use(express.urlencoded())

var userData = "no data specified"

const generateHTMLPage = () => `
<html>
<body>
    <h1>XSS demo website</h1>
    <p>Submitted user data is: <b>${ userData }</b></p>
    <form method="post">
        <h2>Submit new data</h2>
        <textarea type="text" name="data"></textarea>
        <input type="submit"/>
    </form>
</body>
</html>
`;

app.get('/', (req, res) => {
    res.send(generateHTMLPage());
});

app.post('/', (req, res) => {
    userData = req.body.data;

    res.send(generateHTMLPage());
});

app.listen(3000, () => console.log(`App is running`));
