/** @Author : Dishant Soni 
    @Date   : 09/21/2016 **/


    import chai, {expect} from 'chai';
    import MyUser from '../User.js';    

     describe('User Test', function(){
    	it('getUsers() should return 0 if there are no users defined', function(){
		var User  = new MyUser();
		expect(User.getCount()).to.equal(0);
	});

	it('save() should return a newly created user', function(){
        	var User = new MyUser('Dishant', 28);
		User.save();

		expect(User.getCount()).to.equal(1);
	});
    });

		
