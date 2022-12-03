class Config {
  public port = 3001;
  public mySQLhost = "localhost";
  public mySQLUser = "root";
  public mySQLPassword = "12345678";
  public mySqlDB = "foodapp";
  public mySqlPort = 3306;
}

const config = new Config();
export default config;
