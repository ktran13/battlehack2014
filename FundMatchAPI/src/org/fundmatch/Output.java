package org.fundmatch;

import com.google.gson.Gson;

/**
 * Created by jrodley on 8/9/2014.
 */
public class Output {
    public String offset;
    public String connectorGuid;

    public NavData[] results;
    public static Output fromJson( String json ) {
        Gson gson = new Gson();
        Output nvd = gson.fromJson(json,Output.class);
        return( nvd);
    }
}
