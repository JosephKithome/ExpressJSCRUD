// CREATE TABLE posts (id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,title VARCHAR(30) ,description VARCHAR(1000) ,date_posted TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,);

class  Post{
    constructor(id,title,description){
      this.id = id;
      this.title = title;
      this.description = description;
    }
  }
  
  module.exports = Post;
  