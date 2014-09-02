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
if(typeof(SiebelAppFacade.PDQPresentationModel)==="undefined"){SiebelJS.Namespace("SiebelAppFacade.PDQPresentationModel");define("siebel/pdqpmodel",[],function(){SiebelAppFacade.PDQPresentationModel=(function(){var e=SiebelJS.Dependency("SiebelApp.Constants");var b=SiebelJS.Dependency("SiebelApp.Utils");function d(i){this.constructor.superclass.constructor.call(this,i)}SiebelJS.Extend(d,SiebelAppFacade.PresentationModel);d.prototype.Init=function(){this.AddProperty("GetContainer","s_pdq");this.AddProperty("PDQRefresh",false);this.AddProperty("bInQueryState",false);this.AddMethod("InvokeMethod",null,{core:true});this.AttachEventHandler("PDQSelect",function(i){if(this.Get("SelectedPDQItem")==i||i===-1){return}var j=this.Get("PDQItem");if(j&&j[i]==""){i=this.Get("SelectedPDQItem");this.AddProperty("SelectedPDQItem",i);this.SetProperty("PDQRefresh",true);return}this.AddProperty("SelectedPDQItem",i);var k=CCFMiscUtil_CreatePropSet();k.SetProperty(e.get("SWE_PROP_QUERYNAME"),j[i]);this.ExecuteMethod("InvokeMethod",e.get("SWE_METHOD_EXECUTENAMEQUERY"),k)});this.AttachPSHandler(e.get("SWE_PROP_NC_PDQ_INFO"),function(i){h.call(this,i);this.SetProperty("PDQRefresh",true)});this.AttachNotificationHandler(e.get("SWE_PROP_BC_NOTI_STATE_CHANGED"),function(i){var l=i.GetProperty("state");var j=this.Get("bInQueryState");if((l==="bInQueryState")){this.SetProperty("bInQueryState",true)}else{if((l==="bExecuted")&&j){var k=CCFMiscUtil_CreatePropSet();k.SetType(e.get("SWE_PROP_NC_PDQ_INFO"));k.SetProperty("SHOW_EMPTY_STRING","TRUE");h.call(this,k);this.SetProperty("PDQRefresh",true);this.SetProperty("bInQueryState",false)}}})};d.prototype.Setup=function(){var i=CCFMiscUtil_CreatePropSet();if(SiebelApp.S_App.IsMobileApplication()==="true"){i.SetProperty("SWE_OUI_RENDERER","JQMPDQPhyRenderer")}else{i.SetProperty("SWE_OUI_RENDERER","PDQPhyRenderer")}SiebelAppFacade.PDQPresentationModel.superclass.Setup.call(this,i)};function h(i){var j=i.GetProperty("SHOW_EMPTY_STRING");if((String(j)==="TRUE")){c.call(this)}else{this.SetProperty("CleanPdq",true);this.AddProperty("PDQItem",a.call(this,i));f.call(this,i)}j=i.GetProperty(e.get("SWE_PROP_NC_SELECTED_INDEX"));if((j!=="")&&(0<=j)&&(j<this.Get("PDQItem").length)){this.AddProperty("SelectedPDQItem",j)}else{if(this.Get("CleanPdq")===true){c.call(this)}}this.SetProperty("CleanPdq",false);return}function c(){this.SetProperty("SelectedPDQItem",0);var i=this.Get("PDQItem")||[];if(i[0]!==""){i.unshift("")}this.SetProperty("PDQItem",i)}function a(o){var j=[];if(o){var l=o.GetChildCount();for(var k=0;k<l;k++){var m=o.GetChild(k);var n=m.GetProperty(e.get("SWE_PROP_NC_CAPTION"));if(!b.IsEmpty(n)){j.push(n)}}}return j}function g(n){var l=n.GetChildCount();var o=[];for(var k=0;k<l;k++){var m=n.GetChild(k);if(m.GetChildCount()>0){for(var j=0;j<m.GetChildCount();j++){if(m.GetChild(j).GetType()===e.get("SWE_PST_QTP_INFO")){o.push(m.GetChild(j))}}}}return o}function f(m){var k=m.GetChildCount();for(var j=0;j<k;j++){var l=m.GetChild(j);if(l.GetType()===e.get("SWE_PST_QTP_INFO")){this.AddProperty("PDQComboBoxQTPPS",l);break}}this.AddProperty("PDQItemQTPInfo",g.call(this,m))}return d}());return"SiebelAppFacade.PDQPresentationModel"})};