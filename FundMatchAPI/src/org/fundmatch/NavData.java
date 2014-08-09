package org.fundmatch;

import com.google.gson.Gson;
import org.apache.logging.log4j.LogManager;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Date;

/**
 * Created by jrodley on 8/9/2014.
 */
public class NavData {
    private static org.apache.logging.log4j.Logger log = LogManager.getLogger(NavData.class.getName());

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
            log.debug("Added encryption " + navdataid);
            rs.close();
            ps.close();
            Db.releaseConnection(con);
        } catch (Exception e) {
            log.error("",e);
            navdataid = 0;
            Db.releaseConnection(con);
        }
        return (navdataid);
    }

    public static NavData[] getAll() {
        Connection con = null;
        PreparedStatement ps;
        ResultSet rs;
        ArrayList<NavData> alfaq = new ArrayList<NavData>();

        try {
            con = Db.getConnection();

            String ssql = "select * from navdata order by navdataid desc";
            ps = con.prepareStatement(ssql, Statement.RETURN_GENERATED_KEYS);
            rs = ps.executeQuery();
            while (rs.next()) {
                NavData faq = new NavData();
                faq.fromResultSet(rs);
                alfaq.add(faq);
            }
            rs.close();
            ps.close();
        } catch (Exception e) {
            log.error("" , e);
        } finally {
            Db.releaseConnection(con);
        }
        NavData[] ret = new NavData[alfaq.size()];
        alfaq.toArray(ret);
        return (ret);

    }

    public boolean fromResultSet(ResultSet rs ) {
        log.debug("Faq.fromresultset");
        boolean ret = true;
        try {
            this.navdataid = rs.getInt("navdataid");
            this.address = rs.getString("address");
            this.na = rs.getString("na");
            this.phone = rs.getString("phone");
            this.fax = rs.getString("fax");
            this.na2 = rs.getString("na2");
            this.ein_number = rs.getString("ein_number");
            this.financial_score = rs.getString("financial_score");
            this.acct_n_transparency = rs.getString("acct_n_transparency");
            this.overall = rs.getString("overall");
            this.score_graph = rs.getString("score_graph");
            this.program_expenses = rs.getString("program_expenses");
            this.admin_expenses = rs.getString("admin_expenses");
            this.fundraising_expenses = rs.getString("fundraising_expenses");
            this.primary_revenue_growth = rs.getString("primary_revenue_growth");
            this.program_expnse_growth = rs.getString("program_expnse_growth");
            this.wrkng_capital_ratio = rs.getString("wrkng_capital_ratio");
            this.mission = rs.getString("mission");
            this.year_fye = rs.getString("year_fye");
            this.cont_gifts_grants = rs.getString("cont_gifts_grants");
            this.federated_campaigns = rs.getString("federated_campaigns");
            this.related_orgs = rs.getString("related_orgs");
            this.govt_grants = rs.getString("govt_grants");
            this.total_contributions = rs.getString("total_contributions");
            this.program_service_reven = rs.getString("program_service_reven");
            this.total_primary_revenue = rs.getString("total_primary_revenue");
            this.other_revenue = rs.getString("other_revenue");
            this.total_revenue = rs.getString("total_revenue");
            this.program_expense = rs.getString("program_expense");
            this.admin_expense = rs.getString("admin_expense");
            this.fundraising_expense = rs.getString("fundraising_expense");
            this.total_func_expenses = rs.getString("total_func_expenses");
            this.payments_affiliates = rs.getString("payments_affiliates");
            this.excessordeficit_year = rs.getString("excessordeficit_year");
            this.net_assets = rs.getString("net_assets");
            this.board_leadership = rs.getString("board_leadership");
            this.ceo = rs.getString("ceo");
            this.email = rs.getString("email");
            this.website = rs.getString("website");
        } catch (Exception e) {
            log.error("", e);
            ret = false;
        }
        log.debug("fromresultset returning " + ret);
        return (ret);

    }
}
