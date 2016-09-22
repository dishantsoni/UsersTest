/** @Author : Dishant Soni 
    @Date   : 09/21/2016 **/


    import chai, {expect} from 'chai';
    

    describe('User Test', function(){
    	it('getUsers() should return 0 if there are no users defined', function(){
		var Users  = new Users();
		expect(Users.getCount()).to.equal(0);
	});
    });

		
