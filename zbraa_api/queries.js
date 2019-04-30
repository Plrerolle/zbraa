const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'plrerolle',
    host: '35.192.103.167',
    database: 'zbraa',
    password: 'H4b4r1 y4k0 mzur1',
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
    const { name, firstname, info } = request.body;
    pool.query('INSERT INTO users (name, firstname, info) VALUES ($1, $2, $3) RETURNING *;', [name, firstname, info], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(201).json(results.rows[0])
    })
}


const genZbravatar = (request, response) => {
    console.log("Zbravatar is generating");
    const { id, zbra_path } = request.body;
    console.log({ id, zbra_path });
    let runPy = new Promise(function(success, nosuccess) {

        const { spawn } = require('child_process');
        const pyprog = spawn('/home/plrerolle/anaconda3/envs/zbravatar/bin/python', ['/home/plrerolle/zbraa/zbravatar/main.py', id, zbra_path]);
    
        pyprog.stdout.on('data', function(data) {
    
            success(data);
        });
    
        pyprog.stderr.on('data', (data) => {
    
            nosuccess(data);
        });
    });

    runPy.then(function(fromRunpy) {
        console.log(fromRunpy.toString());
        response.status(201).end(fromRunpy);
    });

}

module.exports = {
    getUsers,
    postUser,
    genZbravatar
}