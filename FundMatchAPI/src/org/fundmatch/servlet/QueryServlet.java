package org.fundmatch.servlet;

import com.google.gson.Gson;
import org.fundmatch.NavData;
import org.fundmatch.Output;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * Created by jrodley on 8/9/2014.
 */
public class QueryServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        NavData[] ndd;
        if( request.getParameter("id") == null ) {
            ndd = NavData.getAll();
        }
        else {
            NavData[] nnnddd = NavData.getAll();
            ndd = new NavData[1];
            ndd[0] = nnnddd[0];
        }
        Output output = new Output();
        output.results = ndd;
        Gson gson = new Gson();
        String json = gson.toJson(output);
        response.setHeader("Content-Type","application/json");
        response.setHeader("Access-Control-Allow-Origin","*");
        response.setStatus(200);
        PrintWriter out = response.getWriter();
        out.println(json);
    }
}
