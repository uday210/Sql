var mysql = require("mysql");
function REST_ROUTER(router,connection,md5) {
    var self = this;
    self.handleRoutes(router,connection,md5);
}

REST_ROUTER.prototype.handleRoutes= function(router,connection,md5) {
    router.get("/",function(req,res){
           
    });
    router.post("/users",function(req,res){
        var query = "INSERT INTO ??(??,??) VALUES (?,?)";
        var table = ["user_login","user_email","user_password",req.body.email,md5(req.body.password)];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "User Added !"});
            }
        });
    });
	
	router.get("/users/insertlead/:fname&:phone&:email&:loggeduserid",function(req,res){
	    var query = "INSERT INTO ??(??,??,??,??) VALUES (?,?,?,?)";
        var table = ["user_leads","Lead_name","Lead_Phone","Lead_email","user_id",req.params.fname,req.params.phone,req.params.email,req.params.loggeduserid];
        query = mysql.format(query,table);
		console.log(query);
      connection.query(query,function(err,rows){
           if(err) {
               res.json({"Error" : true, "Message" : "Error executing MySQL query"});
           } else {
                res.json({"Error" : false, "Message" : "Lead Added !"});
            }
        });
    });
	

	  router.get("/users",function(req,res){
        var query = "SELECT * FROM ??";
        var table = ["user_login"];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Success", "Users" : rows});
            }
        });
    });
	
	
	
	 router.get("/users/:user_id&:user_password",function(req,res){
		 console.log(req.params.user_id);
		 console.log(req.params.user_password);
        var query = "SELECT * FROM ?? WHERE ??=? AND ??=?";
        var table = ["user_login","user_email",req.params.user_id,"user_password",req.params.user_password];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Success", "Users" : rows});
            }
        });
    });
	
	//code for 
	//ex: query SELECT `user_info_id`, `user_id_fk`, `user_name`, `user_location` FROM `user_info` WHERE user_id_fk=11 
	
	router.get("/users/loguserdetails/:user_id",function(req,res){
		 console.log(req.params.user_id);
		var query = "SELECT * FROM ?? WHERE ??=? ";
        var table = ["user_leads","user_id",req.params.user_id];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Success", "Users" : rows});
            }
        });
    });
	
	
}


module.exports = REST_ROUTER;