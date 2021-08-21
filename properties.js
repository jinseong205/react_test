const PropertiesReader = require('properties-reader');

const dbProperties = PropertiesReader('config/db.properties');

module.exports = {
    getDatabaseUser(){
        console.log(dbProperties.get('db.user'));
        return dbProperties.get('db.user');
    },
    
    getDatabasePw(){
        return dbProperties.get('db.password');
    },
    getDatabaseConnectionString(){
        return dbProperties.get('db.connectionString');
    }
}