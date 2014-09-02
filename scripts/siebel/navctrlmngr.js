/*<ORACLECOPYRIGHT>
* Copyright (C) 1994-2013 Oracle and/or its affiliates. All rights reserved.
* Oracle and Java are registered trademarks of Oracle and/or its affiliates.
* Other names may be trademarks of their respective owners.
* UNIX is a registered trademark of The Open Group.
*
* This software and related documentation are provided under a license agreement
* containing restrictions on use and disclosure and are protected by intellectual property laws.
* Except as expressly permitted in your license agreement or allowed by law, you may not use, copy,
* reproduce, translate, broadcast, modify, license, transmit, distribute, exhibit, perform, publish,
* or display any part, in any form, or by any means. Reverse engineering, disassembly,
* or decompilation of this software, unless required by law for interoperability, is prohibited.
*
* The information contained herein is subject to change without notice and is not warranted to be error-free.
* If you find any errors, please report them to us in writing.
*
* U.S. GOVERNMENT RIGHTS Programs, software, databases, and related documentation and technical data delivered to U.S.
* Government customers are "commercial computer software" or "commercial technical data" pursuant to the applicable
* Federal Acquisition Regulation and agency-specific supplemental regulations.
* As such, the use, duplication, disclosure, modification, and adaptation shall be subject to the restrictions and
* license terms set forth in the applicable Government contract, and, to the extent applicable by the terms of the
* Government contract, the additional rights set forth in FAR 52.227-19, Commercial Computer Software License
* (December 2007). Oracle America, Inc., 500 Oracle Parkway, Redwood City, CA 94065.
*
* This software or hardware is developed for general use in a variety of information management applications.
* It is not developed or intended for use in any inherently dangerous applications, including applications that
* may create a risk of personal injury. If you use this software or hardware in dangerous applications,
* then you shall be responsible to take all appropriate fail-safe, backup, redundancy,
* and other measures to ensure its safe use. Oracle Corporation and its affiliates disclaim any liability for any
* damages caused by use of this software or hardware in dangerous applications.
*
* This software or hardware and documentation may provide access to or information on content,
* products, and services from third parties. Oracle Corporation and its affiliates are not responsible for and
* expressly disclaim all warranties of any kind with respect to third-party content, products, and services.
* Oracle Corporation and its affiliates will not be responsible for any loss, costs,
* or damages incurred due to your access to or use of third-party content, products, or services.
</ORACLECOPYRIGHT>*/
if(typeof(SiebelApp.S_App.NavCtrlMgr)=="undefined"){SiebelJS.Namespace("SiebelApp.S_App.NavCtrlMgr");SiebelApp.S_App.NavCtrlMgr=(function(){var a=SiebelApp.Utils;var c=SiebelApp.Constants;var f=SiebelApp.S_App.NavigationRenderer;var b=new f(c.get("SWE_PROP_NC_ID_SCREEN_CONTROL"));var e=new f(c.get("SWE_PROP_NC_ID_VIEW_CONTROL"));function g(){var h;var l;var k;var j;this.SetVisPM=function(m){l=m};this.GetVisPM=function(){return l};var i;this.SetPDQPM=function(m){i=m};this.SetscreenNavigationPM=function(m){k=m};this.GetscreenNavigationPM=function(){return k};this.SetdetailNavigationPM=function(m){j=m};this.GetdetailNavigationPM=function(){return j};this.SetName=function(m){this.m_name=m};this.GetPDQPM=function(){return i}}g.prototype.Initialize=function(i){this.SetName("PDQNavCtrlObject");this.SetPDQPM(new SiebelAppFacade.PDQPresentationModel(this));this.GetPDQPM().Setup();this.SetName("visiNavCtrlObject");this.SetVisPM(new SiebelAppFacade.VisDropdownPresentationModel(this));this.GetVisPM().Setup();var h=i.GetChild(0);this.GetFilesAndInitialize(h);d.call(this,h)};function d(h){this.SetName("NavigationScreenObject");this.SetscreenNavigationPM(new SiebelAppFacade.NavigationPresentationModel(this,c.get("SWE_PROP_NC_ID_SCREEN_CONTROL")));this.GetscreenNavigationPM().Setup(h);this.SetName("NavigationDetailObject");this.SetdetailNavigationPM(new SiebelAppFacade.NavigationPresentationModel(this,c.get("SWE_PROP_NC_ID_VIEW_CONTROL")));this.GetdetailNavigationPM().Setup(h)}g.prototype.Refresh=function(){};g.prototype.GetName=function(){return this.m_name};g.prototype.Show=function(h){if(h){if(!this.screenNavigationDone){if($("#"+c.get("SWE_PROP_NC_ID_SCREEN_CONTROL")).length===1){this.GetscreenNavigationPM().Show();this.screenNavigationDone=true}}else{this.Refresh();this.GetscreenNavigationPM().SetProperty("GetDataReload",false)}}else{if($("#"+c.get("SWE_PROP_NC_ID_VIEW_CONTROL")).length===1){this.GetdetailNavigationPM().Show();this.GetdetailNavigationPM().SetProperty("GetDataReload",false)}}if(!this.pdqPMDone){this.GetPDQPM().Show();this.pdqPMDone=true}if(this.GetVisPM()&&!h){this.GetVisPM().Show()}};g.prototype.ShowVisDropdown=function(){if(this.GetVisPM()){this.GetVisPM().ExecuteMethod("ShowVisDropdown")}};g.prototype.ProcessObjectInfo=function(m){if(SiebelApp.S_App.IsMobileApplication()!=="true"){return}if(m==null||m==undefined){return}var o=m.GetType();if(o!=SiebelApp.Constants.get("SWE_PST_NAV_CTRL_INFO")){return}var n=m.GetChildCount();var r=SiebelApp.Constants.get("SWE_PROP_NC_SCREENCTRL_INFO");var p=SiebelApp.Constants.get("SWE_PROP_NC_AGGREGATE_INFO");var l=SiebelApp.Constants.get("SWE_PROP_NC_DETAIL_INFO");var k=SiebelApp.Constants.get("SWE_PROP_NC_SUBDETAIL_INFO");var h=SiebelApp.Constants.get("SWE_PROP_NC_FLOATING_TAB_INFO");for(var j=0;j<n;j++){var q=m.GetChild(j);o=q.GetType();switch(o){case p:case h:this.DecodePropertySet(q);b.ProcessObjectInfo(q);break;case l:case k:this.DecodePropertySet(q);e.ProcessObjectInfo(q);break;case r:b.ProcessObjectInfo(q);break}}};g.prototype.GetFilesAndInitialize=function(k){if(!a.IsEmpty(k)){var m=k.GetProperty(c.get("SWE_PST_CLIENT_DESCRIPTOR_INFO"));if(!a.IsEmpty(m)){var j=[];CCFMiscUtil_StringToArray(m,j);for(var i=0;i<j.length;i++){j[i]=j[i].split(".js");if(j[i][j[i].length-1]===""){j[i].pop()}j[i]="order!"+j[i].join(".js")}if(j.length>0){var n=this;var h;var o;require(j,function(){try{if(arguments){o=arguments[arguments.length-1];h=arguments[arguments.length-2]}if(h){k.SetProperty(SiebelApp.Constants.get("SWE_UIDEF_PM_CTR"),h)}if(o){k.SetProperty(SiebelApp.Constants.get("SWE_UIDEF_PR_CTR"),o)}}catch(l){}k=n=null})}fileArray=null}}};g.prototype.HandleResponsePS=function(h){this.GetPDQPM().HandleResponsePS(h);this.GetVisPM().HandleResponsePS(h);this.GetscreenNavigationPM().HandleResponsePS(h);this.GetdetailNavigationPM().HandleResponsePS(h)};g.prototype.HandleNotify=function(h){this.GetPDQPM().HandleNotify(h);this.GetVisPM().HandleNotify(h);this.GetscreenNavigationPM().HandleNotify(h);this.GetdetailNavigationPM().HandleNotify(h)};g.prototype.InvokeMethod=function(h,i){if(h=="ExecuteNamedQuery"){SiebelApp.S_App.InvokeMethod(SiebelApp.Constants.get("SWE_METHOD_EXECUTENAMEQUERY"),i,true)}};g.prototype.DecodePropertySet=function(h){var l=true;var k=null;var n=null;var m=SiebelApp.S_App;n=h.GetType();if((n==SiebelApp.Constants.get("SWE_PROP_NC_PDQ_INFO"))||(n==SiebelApp.Constants.get("SWE_PST_QTP_INFO"))){return}for(l=true;(k=h.EnumProperties(l))!=null;l=false){if(k!=SiebelApp.Constants.get("SWE_PROP_NC_SELECTED_INDEX")){n=h.GetProperty(k);if(m==null||m==undefined){break}else{var o=m.LookupStringCache(n);if(o==null||o==undefined){continue}h.SetProperty(k,o)}}}for(var j=0;j<h.GetChildCount();j++){if(h.GetType()!=SiebelApp.Constants.get("SWE_PST_QTP_INFO")){this.DecodePropertySet(h.GetChild(j))}}};g.prototype.FocusLevelTab=function(h){this.FocusFirstTabElement(h)};g.prototype.FocusFirstTabElement=function(h){};return new g()}())};