import execute from "../2-data-access/dal";

const mysql_item =
  "CREATE TABLE IF NOT EXISTS items (id INT NOT NULL AUTO_INCREMENT, name VARCHAR(50) NULL, describes VARCHAR(250) NULL, price DECIMAL(8,2) NULL, PRIMARY KEY (id))";

const mySql_init = () => {
  execute(mysql_item);
};

export default mySql_init;

// ALTER USER use_your_user IDENTIFIED WITH mysql_native_password BY 'your_password';
// flush privileges;
