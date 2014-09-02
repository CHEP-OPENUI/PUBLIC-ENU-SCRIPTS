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
if(typeof(SiebelApp.S_App.CustomToolbar)==="undefined"){Namespace("SiebelApp.S_App.CustomToolbar");SiebelApp.S_App.CustomToolbar=(function(){var c;var b=SiebelJS.Dependency("SiebelApp.Utils");var d=SiebelApp.Constants;var a=SiebelApp.Offlineconstants;function e(){var f;g=function g(){return f};g.prototype=this;f=new g();f.constructor=g;return f}c=new e();e.prototype.Init=function(){if(SiebelApp.OfflineAppSettings.GetMode()===false){SiebelApp.OfflineUtils.GetPreference("DisconnectedMobile","LogEvt")}var g=document.getElementById("Sync");if(g&&window.localStorage.getItem("LogEvt")){$("#Sync").append('<a id="Log" ><img src = "images/log.png"></a>');$("#Sync").find("img").attr("title","Log");$("#Sync").trigger("create");$("#Sync").attr("id","Log");g.onclick=function(){var n=a.get("ERRLOG_VIEW");SiebelApp.S_App.GotoView(n)}}var l=document.getElementById("GoOffline");if(l){if(IsOfflineModeEnabled()){var m="";var f="";var k="";var j="";var h="";if(SiebelApp.S_App.IsAutoOn()==="true"){m="ot='PopUp' rn='DMPwd' un='DMPwd'";f="ot='PopUp' rn='DMCancel' un='DMCancel'";k="ot='PopUp' rn='DMOk' un='DMOk'";j='ot="href" rn="DMOffline" un="DMOffline"';h='ot="href" rn="DMOnline" un="DMOnline"';$("div[id='GoOffline']").attr("ot","Btn");$("div[id='GoOffline']").attr("rn","GoOffline");$("div[id='GoOffline']").attr("un","GoOffline")}var i="<div data-role='popup' id='popupMenu' data-theme='a'><div data-role='popup' id='popupLogin' data-theme='a' class='ui-corner-all' data-dismissible='false'><form><div style='padding:10px 20px;'><h3>";i=i+"Please enter password</h3>";i=i+"<label for='pw' class='ui-hidden-accessible'>Password:</label><input name='pass' class='ui-input-text ui-corner-all ui-body-e' id='pw'"+m+"value='' data-theme='e' type='password' />";i=i+"<a href='#' data-role='button' data-theme='b' data-icon='delete' id='Cancel'"+f+" data-inline='true' data-rel='back'>Cancel</a>";i=i+"<a href='#' data-role='button' data-theme='c' data-icon='check' id = 'Ok'"+k+" data-inline='true' data-rel='back'>Ok</a>";i=i+"</div></form></div></div>";if(SiebelApp.OfflineAppSettings.GetMode()){$("div[id='GoOffline']").append('<a href="#popupLogin" id="Offline"'+j+'data-rel="popup" data-position-to="origin" data-transition= "pop"><img src = "images/GoOffline.png"></a>');$("#GoOffline").find("img").attr("title","Go Online");$("div #GoOffline").find("a").append("<img class = 'stati' src='images/white.gif'></img>");$("div #GoOffline").find("a").append(i);$("div[id='GoOffline']").trigger("create")}else{$("div[id='GoOffline']").append('<a href="#popupLogin" id="Online"'+h+'data-rel="popup" data-position-to="origin" data-transition= "pop"><img src = "images/GoOnline.png"></a>');$("#GoOffline").find("img").attr("title","Go Offline");$("div #GoOffline").find("a").append("<img class = 'stati' src='images/white.gif'></img>");$("div #GoOffline").find("a").append(i);$("div[id='GoOffline']").trigger("create")}l.onclick=function(){var v;if(SiebelApp.SyncThreadHandler.SyncInProgress()){v=SiebelApp.S_App.OfflineLocaleObject.GetLocalString("SSASqlErrTrxInProgress");SiebelApp.OfflineUtils.CcfLogEvent([a.get("LOG_EVT_COMMON"),27,13,84,v]);alert(v);return false}if(!SiebelApp.BrowserCacheMgr.GetBrowserStorage()){v=SiebelApp.S_App.OfflineLocaleObject.GetLocalString("IDS_DOUI_ERR_INSUFFICIENT_MEMORY");SiebelApp.OfflineUtils.CcfLogEvent([a.get("LOG_EVT_COMMON"),27,13,84,v]);alert(v);return false}if(!b.IsEmpty(SiebelApp.S_App.Model.GetLoginName())&&SiebelApp.S_App.Model.GetLoginName()!==SiebelApp.S_App.GetUserName()){v=SiebelApp.S_App.OfflineLocaleObject.GetLocalString("IDS_DOUI_ERR_UNAUTH_USER");SiebelApp.OfflineUtils.CcfLogEvent([a.get("LOG_EVT_COMMON"),27,13,84,v]);alert(v);return false}if(!SiebelApp.OfflineAppSettings.GetMode()){if(navigator.onLine){var p=SiebelApp.OfflineAppMgr.Ping(true);if(p){if(SiebelApp.S_App.GetTimer()){var o=JSON.parse(window.localStorage.getItem(d.get("SWE_PERF_LOG_DATA")));if(o){var u=this;var n=SiebelApp.S_App.GetPageURL();var s=SiebelApp.S_App.GetSRN();n=n+"?SWECmd=InvokeMethod&SWEMethod=WritePerfLog&SRN="+s;var q=""+d.get("SWE_PERF_LOG_DATA")+"="+URLEncode(o);$.ajax({type:"POST",url:n,data:q,processData:false,complete:function(w,A,x){if(A!=="error"){window.localStorage.removeItem(d.get("SWE_PERF_LOG_DATA"));SiebelApp.S_App.CustomToolbar.GiveLoginPopup.call(u)}else{if(SiebelApp.OfflineAppSettings.GetPkgStatus()){SiebelApp.OfflineAppSettings.OnSuccessfulDataDownload();SiebelApp.OfflineUtils.CcfLogEvent([a.get("LOG_EVT_COMMON"),21,13,84]);var z=window.location;z.replace(z.origin.concat(z.pathname));return false}else{var y=SiebelApp.S_App.OfflineLocaleObject.GetLocalString("IDS_DOUI_ERR_SYNC");SiebelApp.OfflineUtils.CcfLogEvent([a.get("LOG_EVT_COMMON"),27,13,84,y]);alert(y);return false}}}})}else{SiebelApp.S_App.CustomToolbar.GiveLoginPopup.call(this)}}else{SiebelApp.S_App.CustomToolbar.GiveLoginPopup.call(this)}}else{return false}}else{if(SiebelApp.OfflineAppSettings.GetPkgStatus()){SiebelApp.OfflineAppSettings.OnSuccessfulDataDownload();SiebelApp.OfflineUtils.CcfLogEvent([a.get("LOG_EVT_COMMON"),40,13,84]);var t=window.location;t.replace(t.origin.concat(t.pathname));return false}else{v=SiebelApp.S_App.OfflineLocaleObject.GetLocalString("IDS_DOUI_ERR_OFFLINE_PKG");SiebelApp.OfflineUtils.CcfLogEvent([a.get("LOG_EVT_COMMON"),27,13,84,v]);alert(v);return false}}}else{if(navigator.onLine){var r=SiebelApp.OfflineAppMgr.Ping(true);if(r){if(SiebelApp.OfflineAppSettings.GetSyncStatus()){SiebelApp.S_App.CustomToolbar.GiveLoginPopup();return true}else{SiebelApp.OfflineUtils.CcfLogEvent([a.get("LOG_EVT_COMMON"),46,13,84]);SiebelApp.ProactiveCacheBuilder.ProcessGoOnline();return false}}else{return false}}else{if(SiebelApp.OfflineAppSettings.GetSyncStatus()){v=SiebelApp.S_App.OfflineLocaleObject.GetLocalString("IDS_DOUI_ERR_NETWORK_CONN");SiebelApp.OfflineUtils.CcfLogEvent([a.get("LOG_EVT_COMMON"),27,13,84,v]);alert(v)}else{v=SiebelApp.S_App.OfflineLocaleObject.GetLocalString("IDS_DOUI_ERR_INTERN_CONN");SiebelApp.OfflineUtils.CcfLogEvent([a.get("LOG_EVT_COMMON"),27,13,84,v]);alert(v)}return false}}};if(SiebelApp.OfflineAppSettings.GetSyncStatus()===true){if(SiebelApp.S_App.GetUserName()===SiebelApp.S_App.Model.GetLoginName()){this.Update("SyncPendng")}}}else{$("div[id='GoOffline']").addClass("siebui-StateButton");$("div[id='Sync']").addClass("siebui-StateButton")}}};e.prototype.GiveLoginPopup=function(){$("#pw").val("");$("#Ok").unbind("click",f);$("#Cancel").unbind("click",g);var f=function(){var h={};h.pwd=$("#pw").val();if(h.pwd!==""){h.url="request";h.type="GET";h.async=true;$("#pw").val("");$("#Ok").unbind("click",f);$("#Cancel").unbind("click",g);SiebelApp.OfflineUtils.GetPreference("DisconnectedMobile","LogEvt");SiebelApp.SyncThreadHandler.OnCall(h)}else{alert(SiebelApp.S_App.OfflineLocaleObject.GetLocalString("IDS_SWE_INVALID_OLD_PASSWORD"));return false}};var g=function(){$("#pw").val("");$("#Ok").unbind("click",f);$("#Cancel").unbind("click",g)};$("#pw").focus();$("#Ok").bind("click",f);$("#Cancel").bind("click",g)
};e.prototype.Update=function(f){var g=document.getElementById("GoOffline");if(g){if(IsOfflineModeEnabled()){if(f==="FullDownLoad"){$("div #GoOffline").find(".stati").removeClass().addClass("stati statusFullDownLoad")}else{if(f==="FullDownLoadFailed"){$("div #GoOffline").find(".stati").removeClass().addClass("stati statusFullDownLoadFailed")}else{if(SiebelApp.OfflineAppSettings.GetSyncStatus()===true&&f==="SyncPendng"){$("div #GoOffline").find(".stati").removeClass().addClass("stati statusSyncPending")}else{if(f==="IncDataDownLoad"){$("div #GoOffline").find(".stati").removeClass().addClass("stati statusIncDataDownLoad")}else{if(f==="IncDownLoadFailed"){$("div #GoOffline").find(".stati").removeClass().addClass("stati statusIncDownLoadFailed")}else{if(f==="UpSync"){$("div #GoOffline").find(".stati").removeClass().addClass("stati statusUpSync")}else{if(f==="UpSyncFailed"){$("div #GoOffline").find(".stati").removeClass().addClass("stati statusUpSyncFailed")}else{if(f==="UpSyncDataConflict"){$("div #GoOffline").find(".stati").removeClass().addClass("stati statusSyncPendingSec")}else{if(f==="UpSyncDone"){$("div #GoOffline").find(".stati").removeClass().addClass("stati statusSyncPendingSec")}else{if(f==="DownLoadFailed"){if($("div #GoOffline").find(".statusFullDownLoad").length){$("div #GoOffline").find(".statusFullDownLoad").removeClass().addClass("stati statusFullDownLoadFailed")}else{if($("div #GoOffline").find(".statusIncDataDownLoad").length){$("div #GoOffline").find(".stati").removeClass().addClass("stati statusIncDownLoadFailed")}else{if($("div #GoOffline").find(".statusUpSync").length){$("div #GoOffline").find(".stati").removeClass().addClass("stati statusUpSyncFailed")}}}}else{$("#Sync").find("img").attr("title","No Data to Sync");$("#Sync").find("img").attr("src","images/SyncNotPending.png")}}}}}}}}}}if(SiebelApp.S_App.IsAutoOn()==="true"){$("div #GoOffline").find("a").attr("ot",f);$("div #GoOffline").find("a").attr("rn",f);$("div #GoOffline").find("a").attr("un",f)}}}};$(document).bind("keypress",function(g){var f=g?g.which:window.event.keyCode;if($("#popupLogin").parent().hasClass("ui-popup-active")){if(f===a.get("KEYCODE_ENTER")){g.preventDefault();g.stopPropagation();$("#popupLogin").popup("close");var h={};h.pwd=$("#pw").val();if(h.pwd!==""){h.url="request";h.type="GET";h.async=true;$("#pw").val("");SiebelApp.OfflineUtils.GetPreference("DisconnectedMobile","LogEvt");SiebelApp.SyncThreadHandler.OnCall(h)}else{alert(SiebelApp.S_App.OfflineLocaleObject.GetLocalString("IDS_SWE_INVALID_OLD_PASSWORD"));return false}}}});return c}())};