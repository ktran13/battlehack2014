package org.fundmatch;

import org.apache.logging.log4j.LogManager;

import java.io.FileInputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.util.Properties;

/**
 * Created by jrodley on 8/9/2014.
 */
public class Db {
        private static org.apache.logging.log4j.Logger log = LogManager.getLogger(Db.class.getName());
        public static String url = null;
        public static String user = null;
        public static String password = null;
        public static String propertiesFile = "fundmatch_db.properties";
        //    static Logger log = Logger.getLogger(Version.class.getName());
        static Properties properties = null;
    
        public static Connection getConnection() {
            Connection con = null;
            try {
                if (properties == null) {
                    String base = System.getProperty("catalina.base") + "/conf";
    //        if (properties == null) {
                    properties = new Properties();
                    log.info("Loading " + base + "/" + propertiesFile);
                    FileInputStream fis = new FileInputStream(base + "/" + propertiesFile);
                    properties.load(fis);
                    fis.close();
                    try { // Catch and eat this exception in case these properties are passed in rather than file based
                        if (url == null) {
                            url = (String) properties.get("url");
                            log.trace("Got url " + url + " from " + propertiesFile);
                        }
                        if (user == null) {
                            user = (String) properties.get("user");
                            log.trace("Got user " + user + " from " + propertiesFile);
                        }
                        if (password == null) {
                            password = (String) properties.get("password");
                            log.trace("Got password " + password + " from " + propertiesFile);
                        }
                    } catch (Exception e) {
                        log.error("No database properties file " + propertiesFile + " but that's okay if the properties are defined on command line.", e);
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

