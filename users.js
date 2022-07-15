const {mysql} = require('./index');

function signup(body) {
    const {
        id,
        password,
        nickname,
        email,
        phone_number,
        age
    } = body;

    return new Promise((resolve, reject) => {
        mysql.query(`INSERT INTO (id, password, nickname, email, phone_number, age)
        VALUES ('${id}', '${password}', '${nickname}', '${email}', '${phone_number}', ${age});
        `, (err) => {
            if (!err) {
                resolve({
                    success: true
                });
            }
            else {
                reject(err);
            }
        });

    });
}


module.exports = {
    signup: signup
};
