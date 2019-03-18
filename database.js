var sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE user (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text
            )`,
        (err) => {
            if (err) {
                // Table already created
            }else{
                // Table just created, creating some rows
                var insert = 'INSERT INTO user (name) VALUES (?)'
                db.run(insert, ["admin"])
                db.run(insert, ["ky"])
            }
        });
        
        db.run(`CREATE TABLE virtualmachine (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text,
            leasee text,
            status text,
            notes text
            )`,
        (err) => {
            if (err) {
                // Table already created
            }else{
                // Table just created, creating some rows
                var insert = 'INSERT INTO virtualmachine (name, leasee, status, notes) VALUES (?,?,?,?)'
                db.run(insert, ["kytran-w2k16-01", "", "idle", "personal"])
                db.run(insert, ["kytran-w10-01", "", "idle", "personal"])
            }
        });         
    }
});


module.exports = db