class users{
    constructor(username,password){
      this.username = username;
      this.password = password;
      this.numUsers = 0;
      this.signIn = false;
      this.userList = [];
      this.userType='';
    }
    
    createNewUser(username,password,loginStatus,userType){
      loginStatus = this.signIn;
      userType = this.userType;
      this.username = username;
      this.password = password;
      this.numUsers += 1;
      this.userList.push({username,password,loginStatus,userType});
    }
    
    signUserOut(username, password){
      let list = this.userList;
      for (let user of list){
        if (username === user.username && password === user.password){
          return username + ' signed out';
        }
      }
      return 'user cannot be found';
    }
    
    UserLogIn(username,password){
      let list = this.userList;
      for (let user of list){
        if (username === user.username && password === user.password){
          user.loginStatus = true;
          return username + ' signed in';
        }
      }
      return 'Sorry! Username or Password is incorrect' ;
    }
    
    displayUsersList(){
      console.log( this.userList);
    }
    displayNumUsers(){
      console.log(this.numUsers);
    }
  }
  
  
  class student extends users{
    constructor(username,password,type){
      super(username,password);
      this.userType='student';
    }
  }
  class teacher extends users{
    constructor(username,password,type){
      super(username,password);
      this.userType='teacher';
    }
  }

  