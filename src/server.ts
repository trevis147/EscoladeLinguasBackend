import app from './app'

require("@babel/register")({ extensions: ['.js', '.ts'] })

const port = normalizaPort(process.env.PORT || '5000');
const host = '0.0.0.0'

function normalizaPort(val:string):number {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return parseInt(val);
    }
    if (port >= 0) {
        return port;
    }
    return 0;
}

app.listen(port, host, function () {
    console.log(`App listening on port ${port}`)
})
