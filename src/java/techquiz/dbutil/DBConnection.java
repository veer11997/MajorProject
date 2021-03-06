package techquiz.dbutil;

import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class DBConnection {

    private static Connection conn;

    static {
        try {
            Class.forName("oracle.jdbc.OracleDriver");
            conn = DriverManager.getConnection("jdbc:oracle:thin:@//localhost:1521/xe", "paildb", "pail");
            System.out.println("Connection opened");            

        } catch (Exception e) {

            e.printStackTrace();
        }

    }

    public static Connection getConnection() throws SQLException {
        
        return conn;
    }

    public static void closeConnection() {
        try {
            conn.close();
            System.out.println("Connection Closed");

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

}
