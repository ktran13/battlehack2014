package org.fundmatch;

import com.google.gson.Gson;

import java.io.DataInputStream;
import java.io.FileInputStream;

/**
 * Created by jrodley on 8/9/2014.
 */
public class JSONImporter {
    public static void main(String[] args) {
        DataInputStream fis;
        try {
            fis = new DataInputStream(new FileInputStream( args[0] ));
            while( true ) {
                String line = fis.readLine();
                if( line == null ) {
                    break;
                }
                Output output = Output.fromJson(line);
                if( output.results != null ) {
                    System.out.println("Got output " + output.results[0].name);
                    int x = output.results[0].insert();
                    if( x < 0 )
                        System.out.println("error");
                    else
                        System.out.println("inserted navdataid " + x);
                }
            }

        }
        catch(Exception e ) {
            e.printStackTrace();
        }
    }
}
