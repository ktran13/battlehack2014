package org.fundmatch;

import java.io.FileInputStream;
import java.sql.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Properties;

/**
 * Created by jrodley on 8/9/2014.
 */
public class Db {
        public static String url = null;
        public static String user = null;
        public static String password = null;
        //    static Logger log = Logger.getLogger(Version.class.getName());
        static Properties properties = null;
    
        public static Connection getConnection() {
            Connection con = null;
            try {
                if (properties == null) {
                    String base = System.getProperty("catalina.base") + "/conf";
    //        if (properties == null) {
                    properties = new Properties();
                    try { // Catch and eat this exception in case these properties are passed in rather than file based
                        if (url == null) {
                            url="jdbc:mysql://openrehab.esuncebra.com/RockStar";
                            System.out.println("Got url " + url + " from " );
                        }
                        if (user == null) {
                            user = "rodley";
                            System.out.println("Got user " + user + " from ");
                        }
                        if (password == null) {
                            password = "openrehab";
                            System.out.println("Got password " + password + " from ");
                        }
                    } catch (Exception e) {
                        System.out.println("No database properties file but that's okay if the properties are defined on command line."+e);
                    }
                }
                Class.forName("com.mysql.jdbc.Driver");
                con = DriverManager.getConnection(url, user, password);
            } catch (Exception ex) {
                System.out.println("DB open failure "+ ex);
            }
    //        System.out.println("trace connection " + con);
            return (con);
        }
    
        public static void releaseConnection(Connection con) {
            try {
                if (con != null) {
    //                System.out.println("Closing connection " + con);
                    con.close();
                } else
                    System.out.println("Tried to release null connection");
            } catch (Exception e) {
                System.out.println(""+e);
            }
        }
    

    }

