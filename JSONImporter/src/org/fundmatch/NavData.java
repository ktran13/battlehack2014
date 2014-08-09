package org.fundmatch;

import com.google.gson.Gson;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.Date;

/**
 * Created by jrodley on 8/9/2014.
 */
public class NavData {
    
    public int navdataid;
    public String     name ;
public String     address ;
public String     na ;
public String     phone;
public String     fax ;
public String     na2 ;
public String     ein_number ;
public String     financial_score ;
public String     acct_n_transparency ;
public String     overall ;
public String     score_graph ;
public String     program_expenses ;
public String     admin_expenses ;
public String     fundraising_expenses ;
public String     primary_revenue_growth ;
public String     program_expnse_growth ;
public String     wrkng_capital_ratio ;
public String     mission ;
public String     year_fye ;
public String     cont_gifts_grants ;
public String     federated_campaigns ;
public String     related_orgs ;
public String     govt_grants ;
public String     total_contributions ;
public String     program_service_reven ;
public String     total_primary_revenue ;
public String     other_revenue ;
public String     total_revenue ;
public String     program_expense ;
public String     admin_expense ;
public String     fundraising_expense ;
public String     total_func_expenses ;
public String     payments_affiliates ;
public String     excessordeficit_year ;
public String     net_assets ;
public String     board_leadership ;
public String     ceo ;
public String     email ;
public String     website;

    public static NavData fromJson( String json ) {
        Gson gson = new Gson();
        NavData nvd = gson.fromJson(json,NavData.class);
        return( nvd);
    }

    public int insert() {
        Connection con = null;
        PreparedStatement ps = null;
        ResultSet rs = null;
        java.sql.Date d = new java.sql.Date(new Date().getTime());
        try {
            con = Db.getConnection();
            String ssql = "insert into navdata (" +
                    "name," +
                    "address," +
                    "na," +
                    "phone," +
                    "fax," +
                    "na2," +
                    "ein_number," +
                    "financial_score," +
                    "acct_n_transparency," +
                    "overall," +
                    "score_graph," +
                    "program_expenses," +
                    "admin_expenses," +
                    "fundraising_expenses," +
                    "primary_revenue_growth," +
                    "program_expnse_growth," +
                    "wrkng_capital_ratio," +
                    "mission," +
                    "year_fye," +
                    "cont_gifts_grants," +
                    "federated_campaigns," +
                    "related_orgs," +
                    "govt_grants," +
                    "total_contributions," +
                    "program_service_reven," +
                    "total_primary_revenue," +
                    "other_revenue," +
                    "total_revenue," +
                    "program_expense," +
                    "admin_expense," +
                    "fundraising_expense," +
                    "total_func_expenses," +
                    "payments_affiliates," +
                    "excessordeficit_year," +
                    "net_assets," +
                    "board_leadership," +
                    "ceo," +
                    "email," +
                    "website" +
                    " ) values " +
                    "(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
            ps = con.prepareStatement(ssql, Statement.RETURN_GENERATED_KEYS);

            ps.setString( 1, name);
            ps.setString( 2, address);
            ps.setString( 3, na);
            ps.setString( 4, phone);
            ps.setString( 5, fax);
            ps.setString( 6, na2);
            ps.setString( 7, ein_number);
            ps.setString( 8, financial_score);
            ps.setString( 9, acct_n_transparency);
            ps.setString( 10, overall);
            ps.setString( 11, score_graph);
            ps.setString( 12, program_expenses);
            ps.setString( 13, admin_expenses);
            ps.setString( 14, fundraising_expenses);
            ps.setString( 15, primary_revenue_growth);
            ps.setString( 16, program_expnse_growth);
            ps.setString( 17, wrkng_capital_ratio);
            ps.setString( 18, mission);
            ps.setString( 19, year_fye);
            ps.setString( 20, cont_gifts_grants);
            ps.setString( 21, federated_campaigns);
            ps.setString( 22, related_orgs);
            ps.setString( 23, govt_grants);
            ps.setString( 24, total_contributions);
            ps.setString( 25, program_service_reven);
            ps.setString( 26, total_primary_revenue);
            ps.setString( 27, other_revenue);
            ps.setString( 28, total_revenue);
            ps.setString( 29, program_expense);
            ps.setString( 30, admin_expense);
            ps.setString( 31, fundraising_expense);
            ps.setString( 32, total_func_expenses);
            ps.setString( 33, payments_affiliates);
            ps.setString( 34, excessordeficit_year);
            ps.setString( 35, net_assets);
            ps.setString( 36, board_leadership);
            ps.setString( 37, ceo);
            ps.setString( 38, email);
            ps.setString( 39, website);

            ps.executeUpdate();
            rs = ps.getGeneratedKeys();
            rs.next();
            navdataid = rs.getInt(1);
            System.out.println("Added encryption " + navdataid);
            rs.close();
            ps.close();
            Db.releaseConnection(con);
        } catch (Exception e) {
            System.out.println(""+ e);
            navdataid = 0;
            Db.releaseConnection(con);
        }
        return (navdataid);

    }
}
