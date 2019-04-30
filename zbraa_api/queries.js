const Pool = require('pg').Pool;
const spawn = require("child_process").spawn;
const pool = new Pool({
    user: 'pilou',
    host: 'localhost',
    database: 'zbraa',
    password: 'P13rr3 l0u15',
    port: 5432  
})

const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const postUser = (request, response) => {
    console.log("Posting user !");
    const {name, firstname, info} = request.body;
    pool.query('INSERT INTO users (name, firstname, info) VALUES ($1, $2, $3);', [name, firstname, info], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(201).json(request.body)
    })
}

const genZbravatar = (request, response) => {
    console.log("Zbravatar is generating");
    const {id, zbra_path} = request.body;
    spawn('sh ../zbravatar/zbravatar.sh $1 $2', [id, zbra_path],
        (error, stdout, stderr) => {
            console.log(stdout);
            console.log(stderr);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
            response.status(201)
        });

}

module.exports = {
    getUsers,
    postUser,
    genZbravatar
}