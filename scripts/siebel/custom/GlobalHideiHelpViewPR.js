/**************************************************************************
Author: Shivakumar Badli
View PR to remove SI error for iHelp. 
Below script finds the iHelp applet's placeholder and removes it.

Version History:
v0.1 01-Aug-2014 BADLIS initial version
***************************************************************************/

if(typeof(SiebelAppFacade.GlobalHideiHelpViewPR) === "undefined"){
    SiebelJS.Namespace("SiebelAppFacade.GlobalHideiHelpViewPR");
    define("siebel/custom/GlobalHideiHelpViewPR", ["siebel/viewpr"], function () {
        SiebelAppFacade.GlobalHideiHelpViewPR = (function () {
            var PM;
            var PRName = "GlobalHideiHelpViewPR";

            function GlobalHideiHelpViewPR() {
                SiebelAppFacade.GlobalHideiHelpViewPR.superclass.constructor.apply(this, arguments);
            }
            //Extend view renderer
            SiebelJS.Extend(GlobalHideiHelpViewPR, SiebelAppFacade.ViewPR);

            GlobalHideiHelpViewPR.prototype.Init = function () {
                SiebelAppFacade.GlobalHideiHelpViewPR.superclass.Init.apply(this, arguments);
                PM = this.GetPM();
                //SiebelJS.Log("Custom PR " + PRName + ": Init method reached.");
            };
            GlobalHideiHelpViewPR.prototype.Setup = function () {
                //SiebelJS.Log("Custom PR " + PRName + ": Setup method reached.");
            };

            GlobalHideiHelpViewPR.prototype.SetRenderer = function () {
                //SiebelJS.Log("Custom PR " + PRName + ": SetRenderer method reached.");
                var oAppletMap = PM.GetAppletMap();  //get applet map object
                //some variables we need later
                var oApplet, sAppletName, oAppletPM;
                var sAppletId;

                for (var applet in oAppletMap) {  //loop through applet map
                    oApplet = oAppletMap[applet]; //get current applet object
                    sAppletName = oApplet.GetName(); //get applet name

                    if (sAppletName == "Screen Home Task Assistant List Applet") { // if it is iHelp applet
                        oAppletPM = oApplet.GetPModel(); //get Applet PM
                        sAppletId = oApplet.GetFullId(); //get AppletFullId. You need this for accessing existing placeholder

                        var placeHolder = oAppletPM.Get("GetPlaceholder");

                        //Remove the div for iHelp!
                        $("#s_" + sAppletId + "_div").remove();
                    }
                }
            };

            GlobalHideiHelpViewPR.prototype.EndLife = function () {
                //SiebelJS.Log("Custom PR " + PRName + ": EndLife method reached.");
                //implement EndLife method here
            };
            //implement custom functions here
            return GlobalHideiHelpViewPR;
        } ());

        return "SiebelAppFacade.GlobalHideiHelpViewPR";
    });
}