/**************************************************************************
Author: Shivakumar Badli
View PR to replace SI error for salutation with a nice welcome message. 
Below script finds the salutation applet's placeholder and replaces with 
a new message in the format:
Welcome <Full Name>!. Your last logon was on dddd, mmmm dS, yyyy, h:MM:ss TT

Version History:
v0.1 01-Aug-2014 BADLIS initial version
***************************************************************************/
if(typeof(SiebelAppFacade.HomePageSalutationPR) === "undefined"){
    SiebelJS.Namespace("SiebelAppFacade.HomePageSalutationPR");
    define("siebel/custom/HomePageSalutationPR", ["siebel/viewpr"], function () {
        SiebelAppFacade.HomePageSalutationPR = (function () {
            var PM;
            var PRName = "HomePageSalutationPR";

            function HomePageSalutationPR() {
                SiebelAppFacade.HomePageSalutationPR.superclass.constructor.apply(this, arguments);
            }
            //Extend view renderer
            SiebelJS.Extend(HomePageSalutationPR, SiebelAppFacade.ViewPR);

            HomePageSalutationPR.prototype.Init = function () {
                SiebelAppFacade.HomePageSalutationPR.superclass.Init.apply(this, arguments);
                PM = this.GetPM();
                //SiebelJS.Log("Custom PR " + PRName + ": Init method reached.");
            };
            
            HomePageSalutationPR.prototype.SetRenderer = function () {
                //SiebelJS.Log("Custom PR " + PRName + ": SetRenderer method reached.");
                var oAppletMap = PM.GetAppletMap();  //get applet map object
                //some variables we need later
                var oApplet, sAppletName, oAppletPM;
                var sAppletId;

                for (var applet in oAppletMap) {  //loop through applet map
                    oApplet = oAppletMap[applet]; //get current applet object
                    sAppletName = oApplet.GetName(); //get applet name

                    if (sAppletName == "Salutation Applet (SSE)") { // if it is salutation applet
                        oAppletPM = oApplet.GetPModel(); //get Applet PM
                        sAppletId = oApplet.GetFullId(); //get AppletFullId. You need this for accessing existing placeholder

		                var placeHolder = oAppletPM.Get( "GetPlaceholder" );  
			
                        //Replace HTML for existing placeholder with your own!
		                $("#s_" + sAppletId + "_div").html( '<div class="salutation-pr-applet" id="' + placeHolder + '"></div>' );

                        //Now add a span with your own salution message
		                $("#" + placeHolder).append('<span class="salutation-pr-title"> Welcome ' + 
                        SiebelApp.S_App.GetProfileAttr("Full Name") + '!. Your last logon was on '+
                        new Date(SiebelApp.S_App.GetProfileAttr("Last Logged In")).format("dddd, mmmm dS, yyyy, h:MM:ss TT")+'.</span>');
                    }
                }
            };
            return HomePageSalutationPR;
        } ());

        return "SiebelAppFacade.HomePageSalutationPR";
    });
}