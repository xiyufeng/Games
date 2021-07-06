const tag = "[g6Default/getFriends.js_v0.12]";
var mysql = require('mysql');
const config = require('../../config'); 
const l = require('../../logger');

 l.tag(tag);
 
exports.getFriends = function(resolve,Service){ 
  _sqlzUtil (resolve,Service);
} 

function _sqlzUtil (resolve,Service){ 
  var r = {};
  r.code = 1;
  r.n = 0;
  r.str = [];
  resolve(Service.successResponse(r));    
}
function _oldUtil (resolve,Service){ 
  var sR = tag+ " [getFriends]--------- " + Date();
  l.tag1(tag,sR);

  var _sql = "SELECT * FROM Friends";

  var con = mysql.createConnection(config.oLocalDB);
  con.connect();
  con.query(_sql, function (err, result, fields) {
    if (err)   {
      console.log(err);  
      console.log(err.sqlMessage);  
      sR = err.sqlMessage;
      resolve(Service.successResponse(sR));    
    } 
    else{ 
        var r = JSON.stringify(result); 
        sR = r;
        var o = {};
        o.code = 1;
        o.n = result.length;
        o.str = r;
        resolve(Service.successResponse(o));    
    }         
  }); 
con.end();
  return sR;
} 