var pg = require('pg');

var host ='130.237.64.8';
var port ='5432';
var dbName = 'spatial_db';
var username = 'group1';
var password = 'banana';

var connectionString = 'postgres://'+username+':'+password+'@'+host+':'+port+'/'+dbName;


// Export the connection string for usage by the API
module.exports = connectionString;

var client = new pg.Client(connectionString);
client.connect();

// these queries will only be run once, for initialization
var queryCreateUserTable = client.query('CREATE TABLE if not exists tweets (tweet_id serial not null, hashtag text, category text, latitude double precision, longitude double precision)'); 
var queryCreateMarkerTable = client.query('CREATE TABLE if not exists stalker (marker_id serial not null, user_id bigint not null, latitude double precision, longitude double precision)');

//Execute queries
//queryCreateUserTable.on('end', function() {
//		queryCreateMarkerTable.on('end', function() {
//			client.end();
//		})
//});

