using Probability_Calc.Models;
using Probability_Calc.Utility;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Probability_Calc.Controllers
{
    public class HomeController : Controller
    {
        //controller method to dump log file 
        [HttpPost]
        public string DumpLog(CalculationModel resultData)
        {
            var log = "";
            try
            {
                var operation = resultData.selectedOpertion == 0 ? "Combined With" : "Either";
                log = $@"Date: {DateTime.Now.ToString("dd/MM/yyyy HH:mm:ss")}, Calculation: {operation}, Input A: {resultData.valueA}, Input B: {resultData.valueB}, Result: {resultData.result}";
                Log.Info(log);
            } catch(Exception ex)
            {
                Log.Error(ex.Message);
            }
            
            return log;
        }
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}