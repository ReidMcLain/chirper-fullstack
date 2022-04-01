import * as mysql from 'mysql';
import Chirps from './chirps'



export const Connection = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'chirp2',
    password: 'passwordpls',
    database: 'c16_chirpr'
});

export const Query = (query, values) => {
    return new Promise((resolve, reject) => {
        Connection.query(query, values, (err, results) => {
            if (err) throw err;
            resolve(results)
        });
    });
};

export default {
    Chirps
}