/** @author : Dishant Soni 
    @Date   : 09/21/2016 **/


    let users = [];

    function MyUser(name, age){
	this.name = name;
	this.age = age;
    }


   
    MyUser.prototype.save = function(){
         users.push(this);
	 console.log("Records Saved ", users);
	 return users;
    }

    MyUser.prototype.getCount = function(){
	return users.length;
    }


    export default MyUser; 

