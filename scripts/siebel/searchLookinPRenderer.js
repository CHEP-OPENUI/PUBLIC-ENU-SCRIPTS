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
if(typeof(SiebelAppFacade.SearchLookinPhyRenderer)==="undefined"){SiebelJS.Namespace("SiebelAppFacade.SearchLookinPhyRenderer");define("siebel/searchLookinPRenderer",[],function(){SiebelAppFacade.SearchLookinPhyRenderer=(function(){var w=SiebelJS.Dependency("SiebelApp.Utils");var m=SiebelJS.Dependency("SiebelApp.Constants");var t=SiebelApp.S_App.LocaleObject;var u=0;var n=0;var d=0;var i=[];var q=[];var b="";var e=0;var a="";var g=0;var h=false;var f="";var y=[];var k=[];var x=[];function p(A){var z=A;this.GetPM=function(){return z};this._EndLife=function(){z=null};z.AttachPMBinding("OpenSearchPanel",function(){var B=z.Get("OpenSearchPanel");if(B){j.call(this,1);this.GetPM().SetProperty("OpenSearchPanel",false)}},{scope:this});z.AttachPMBinding("fillLookin",function(){var B=z.Get("fillLookin");if(B){c.call(this,z.Get("SetLookinInput"),z.Get("SetLookinInputFind"),z.Get("SetLookinInputCategory"),z.Get("SetLookinInputOther"),z.Get("SetLookupDS"),z.Get("DefaultFindCategory"))}},{scope:this});z.AttachPMBinding("ShowSearchResultsDialog",function(){var B=z.Get("ShowSearchResultsDialog");if(B){o.call(this,z.Get("GetSearchOutput"),z.Get("GetSearchError"))}},{scope:this});z.AttachPMBinding("ShowSearchResultsDialogFromAdvSearch",function(){var B=z.Get("ShowSearchResultsDialogFromAdvSearch");if(B){v.call(this,z.Get("GetSearchOutputFromAdvSearch"),z.Get("GetSearchError"))}},{scope:this});z.AttachPMBinding("showAdvancedSearchPopup",function(){var B=z.Get("showAdvancedSearchPopup");if(B){r.call(this,z.Get("GetAdvSearchOutputForCategory"),z.Get("GetAdvSearchOutputForDataSource"),z.Get("GetAdvSearchOutputForFileFormat"))}},{scope:this});z.AttachPMBinding("showAdvancedFindPopup",function(){var B=z.Get("showAdvancedFindPopup");if(B){s.call(this,z.Get("GetAdvFindOutputForFindFields"),z.Get("GetAdvFindOutputForFindDisplayFields"),z.Get("findSelectedCategory"),false)}},{scope:this});z.AttachPMBinding("showSearchPreferencePopup",function(){var B=z.Get("showSearchPreferencePopup");if(B){l.call(this,z.Get("GetSearchPrefOutputForPage"),z.Get("GetSearchPrefOutputForSort"),z.Get("GetSearchPrefOutputForQueryLang"),z.Get("GetSearchPrefOutputForDocLang"))}},{scope:this});z.AttachPMBinding("getlookupDS",function(){var B=z.Get("getlookupDS");if(B){l.call(this,z.Get("GetSearchPrefOutputForPage"),z.Get("GetSearchPrefOutputForSort"))}},{scope:this})}function j(A){if(A.type==="keypress"&&A.which===$.ui.keyCode.ESCAPE){$("#srchDivCont").hide()}else{if(((A.type==="keypress"||A.type==="keyup")&&(A.keyCode===$.ui.keyCode.ENTER||A.keyCode===$.ui.keyCode.ESCAPE))||A.type==="click"){var B=$("#s_srch").find("button");if(B.length===0&&(A.keyCode===$.ui.keyCode.ENTER||A.type==="click")){var z=A.data.ctx;var D=z.GetPM();var G='<div id="srchDivCont"></div>';$("#s_srch").append(G).trigger("create");D.OnControlEvent("OnLoadSearch");var E='<input type = "text" id= "text-box" class="siebui-search-textbox-srch" title="'+t.GetLocalString("IDS_SWE_SEARCH_WATER_MARK")+" "+t.GetLocalString("IDS_SEARCH_OUI_SRCH_TEXTBOX")+'"/>';$("#srchDivCont").append(E).trigger("create");var F='<button type = "button" id= "srch-button" class="siebui-search-button" title="'+t.GetLocalString("IDS_SWE_SEARCH_WATER_MARK")+'"><img src="images/esearch_submitsearch.png" class="siebui-search-image" alt="GO"/></button>';$("#srchDivCont").append(F).trigger("create");var C='<button type = "button" id= "adv-srch-button" class="siebui-search-button" title="'+t.GetLocalString("IDS_SWE_CKEDITOR_ADVANCED_TAB")+" "+t.GetLocalString("IDS_SWE_SEARCH_WATER_MARK")+'"><img src="images/esearch_advsearch.png" class="siebui-search-image" alt="ADV"/></button>';$("#srchDivCont").append(C).trigger("create");var H='<button type = "button" id= "srch-pref-button" class="siebui-search-button" title="'+t.GetLocalString("IDS_SWE_SEARCH_WATER_MARK")+" "+t.GetLocalString("IDS_BHC_COL_SETTINGS")+'"><img src="images/esearch_settings.png" class="siebui-search-image" alt="PREF"/></button>';$("#srchDivCont").append(H).trigger("create");$("#lookinCombo").attr("tabindex","0");$("#lookinCombo select:first-child").attr("aria-labelledby","Report_Name_Label");$("#text-box").attr("role","text");$("#srch-button").attr("role","button");$("#adv-srch-button").attr("role","button");$("#srch-pref-button").attr("role","button");z.BindEvents("eSearch")}else{if(($("#srchDivCont").is(":hidden"))&&(A.keyCode===$.ui.keyCode.ENTER||A.type==="click")){$("#srchDivCont").show()}else{if(($("#srchDivCont").is(":hidden")===false)&&(A.keyCode===$.ui.keyCode.ESCAPE||A.type==="click")){$("#Adv_Find_Dialog").remove();$("#srchDivCont").hide()}}}}}}p.prototype.ShowUI=function(){var C=this.GetPM();var A=C.Get("GetSelectedLookin");var D=C.Get("GetTitle");if(SiebelApp.S_App.GetDirection()){$("#s_srch").attr("class","siebui-search-esearch siebui-search-esearch-rtl bannerDiv")}else{$("#s_srch").attr("class","siebui-search-esearch bannerDiv")}var z='<span class ="ui-menubar ui-widget-header ui-menubar-link siebui-search-srchheading">'+t.GetLocalString("IDS_SWE_SEARCH_WATER_MARK")+"</span>";var B='<div id="srch_icon" class="ui-menubar siebui-search-icon" tabindex="" title="'+t.GetLocalString("IDS_SWE_SEARCH_WATER_MARK")+'"><img id="srch_img" alt="" src="images/esearch_toggleoff.png" class="siebui-search-mover"/>'+z+"</div>";$("#s_srch").append(B).trigger("create");$("#srch_icon").attr("tabindex","0");$("#srch_icon").attr("role","text");$("#srch_icon").bind("click keypress keyup",{ctx:this},j)};p.prototype.BindEvents=function(A){var z=this.GetPM();switch(A){case"eSearch":$("#lookinCombo").bind("click keypress keyup",{ctx:this},function(B){if(B.type==="click"||(B.type==="keypress"&&B.which===$.ui.keyCode.ENTER)){var D=false;var J=navigator.userAgent.toString().toLowerCase();var C=(J.indexOf("safari")!=-1);var F=(J.indexOf("chrome")!=-1);var E=(J.indexOf("firefox")!=-1);var G=(J.indexOf("msie")!=-1);var H=$("#lookinCombo").val();if(b===H){D=true}b=H;if(H.indexOf("f")===0&&H.indexOf("i")===1&&H.indexOf("d")===3){$("#Adv_Find_Dialog").remove();H=w.Trim(H.substring(4));if(F||E||G){var I=false;if(e===2){e=1;I=true;$("#text-box").hide();$("#srch-button").hide();$("#adv-srch-button").hide();$("#srch-pref-button").hide();z.OnControlEvent("OnLoadAdvancedFind",H);if(D){SiebelApp.S_App.GotoView("Find All Results View")}}if(e===1&&!I){if(a===H){$("#text-box").show();$("#srch-button").show();$("#adv-srch-button").show();$("#srch-pref-button").show()}e++}if(e===0){a=H;e++;$("#text-box").hide();$("#srch-button").hide();$("#adv-srch-button").hide();$("#srch-pref-button").hide();z.OnControlEvent("OnLoadAdvancedFind",H);if(D){SiebelApp.S_App.GotoView("Find All Results View")}}}else{$("#text-box").hide();$("#srch-button").hide();$("#adv-srch-button").hide();$("#srch-pref-button").hide();z.OnControlEvent("OnLoadAdvancedFind",H);if(D){SiebelApp.S_App.GotoView("Find All Results View")}}}else{$("#Adv_Find_Dialog").remove();$("#text-box").show();$("#srch-button").show();$("#adv-srch-button").show();$("#srch-pref-button").show()}}else{if(B.type==="keyup"&&B.keyCode===$.ui.keyCode.ESCAPE){$("#Adv_Find_Dialog").remove();
$("#srchDivCont").hide()}}});$("#text-box").bind("click keypress keyup",{ctx:this},function(B){if(B.type==="keyup"&&B.keyCode===$.ui.keyCode.ESCAPE){$("#Adv_Find_Dialog").remove();$("#srchDivCont").hide()}});$("#srch-button").unbind("click");$("#srch-button").bind("click",{ctx:this},function(D){$("#Srch_Dialog").dialog("close");var B=$("#lookinCombo").val();if(B.indexOf("d")===0&&B.indexOf("e")===1&&B.indexOf("l")===2&&B.indexOf("i")===3&&B.indexOf("m")===4){}else{if(B.indexOf("f")===0&&B.indexOf("i")===1&&B.indexOf("d")===3){B=w.Trim(B.substring(4));z.SetProperty("SearchType","FIND");z.SetProperty("BCType",B)}else{z.SetProperty("SearchType","BASIC");var C="1#"+B.length+"#"+B;z.SetProperty("BCType",C)}z.SetProperty("Freetext",$("#text-box").val());z.OnControlEvent("OnExecuteSearch",B)}});$("#adv-srch-button").unbind("click");$("#adv-srch-button").bind("click",{ctx:this},function(C){$("#Adv_Srch_Dialog").dialog("close");$("#Srch_Dialog").dialog("close");var B=$("#lookinCombo").val();if(B.indexOf("f")===0&&B.indexOf("i")===1&&B.indexOf("d")===3){B=w.Trim(B.substring(4));z.OnControlEvent("OnLoadAdvancedFind",B)}else{if(B.indexOf("d")===0&&B.indexOf("e")===1&&B.indexOf("l")===2&&B.indexOf("i")===3&&B.indexOf("m")===4){}else{z.OnControlEvent("OnLoadAdvancedSearch",B)}}});$("#srch-pref-button").unbind("click");$("#srch-pref-button").bind("click",{ctx:this},function(B){$("#Search_Pref_Dialog").dialog("close");z.OnControlEvent("OnLoadSearchPreference")});case"AdvSrch":$(document).undelegate("#inner-adv-srch-button","click");$(document).delegate("#inner-adv-srch-button","click",{ctx:this},function(C){var E=[];var N=[];var L=0;var J=0;var I=0;var H=0;var G=false;for(L=0;L<u;L++){var K="ChkBox"+L;if($("#"+K+"").is(":checked")){var P=$("#"+K+"").val();G=true;E[J]=P;J++}}if(G){N[H]="buscomp";z.SetProperty("DataSource"+H,"buscomp");H+=1}var M="";if(E.length>0){M=w.SearchUtil_ArrayToString(E)}else{M="1#3#All"}var R=[];for(L=0;L<n;L++){var K="FFChkBox"+L;if($("#"+K+"").is(":checked")){var D=$("#"+K+"").val();R[I]=D;I++}}var F="";if(R.length>0){F=w.SearchUtil_ArrayToString(R)}var B=[];var L=0;var J=0;var I=0;var Q=false;for(L=0;L<d;L++){var K="DSChkBox"+L;if($("#"+K+"").is(":checked")){var O=$("#"+K+"").val();Q=true;z.SetProperty("DataSource"+H,O);J++;H++}}z.SetProperty("NumDataSource",H);z.SetProperty("Contains AND",$("#all-text-box").val());z.SetProperty("Contains NOT",$("#none-text-box").val());z.SetProperty("Contains EXACT",$("#exact-text-box").val());z.SetProperty("Contains OR",$("#any-text-box").val());z.SetProperty("BCType",M);z.SetProperty("SearchType","ADVANCED");z.SetProperty("Fileformat",F);$("#Adv_Srch_Dialog").dialog("close");z.OnControlEvent("OnExecuteSearch")});break;case"AdvFind":$(document).undelegate("#inner-adv-find-button","click");$(document).delegate("#inner-adv-find-button","click",{ctx:this},function(H){z.SetProperty("SearchType","ADVANCEDFIND");var F=false;var D=false;var C=0;var I=g+"#";for(C=0;C<g;C++){var E="findFieldTextBox"+C;var B=$("#"+E+"").val();y[C]=B;if(B===""){B="0";F=false}else{var G=B.length;B=G+"#"+B;F=true}if(F){I=I+B}else{I=I+B+"#"}}z.SetProperty("SearchText",I);$("#Adv_Find_Dialog").remove();z.OnControlEvent("OnExecuteSearch")});$(document).undelegate("#adv-find-reset-button","click");$(document).delegate("#adv-find-reset-button","click",{ctx:this},function(B){$("#Adv_Find_Dialog").remove();f="";var C=$("#lookinCombo").val();s.call(this,x,k,w.Trim(C.substring(4)),true)});case"SrchFromAdvSrch":$(document).delegate("#srch-showall-button","click",{ctx:this},function(B){$("#Srch_Dialog").dialog("close");z.OnControlEvent("OnExecuteShowAllSearchResults")});$(document).undelegate("#Srch_AltWordsAdv","click");$(document).delegate("#Srch_AltWordsAdv","click",{ctx:this},function(B){z.SetProperty("Contains AND",$("#Srch_AltWordsAdv").text());z.SetProperty("Contains NOT","");z.SetProperty("Contains EXACT","");z.SetProperty("Contains OR","");z.OnControlEvent("OnExecuteSearch");$("#Srch_Dialog").dialog("close")});break;case"SrchShowAll":$(document).undelegate("#srch-showall-button","click");$(document).delegate("#srch-showall-button","click",{ctx:this},function(B){z.OnControlEvent("OnExecuteShowAllSearchResults");$("#Srch_Dialog").dialog("close")});$(document).undelegate("#Srch_AltWords","click");$(document).delegate("#Srch_AltWords","click",{ctx:this},function(E){var B=$("#lookinCombo").val();var D=B.length;var C="1#"+D+"#"+B;$("#text-box").val($("#Srch_AltWords").text());z.SetProperty("Freetext",$("#Srch_AltWords").text());z.SetProperty("BCType",C);z.SetProperty("SearchType","BASIC");z.OnControlEvent("OnExecuteSearch");$("#Srch_Dialog").dialog("close")});break;case"SrchPref":$(document).undelegate("#save-pref-button","click");$(document).delegate("#save-pref-button","click",{ctx:this},function(B){z.SetProperty("SEARCH_PER_PAGE",$("#numPagesCombo").val());z.SetProperty("SEARCH_SORT",$("#sortCombo").val());z.SetProperty("SEARCH_LANGUAGE",$("#queryLangCombo").val());if($("#docLangChkBox").is(":checked")){z.SetProperty("DOC_LANGUAGE","true")}else{z.SetProperty("DOC_LANGUAGE","false")}$("#Search_Pref_Dialog").dialog("close");z.OnControlEvent("OnExecuteSavePreference")});break;default:break}};p.prototype.BindData=function(){var A=this.GetPM();var z=$("[name="+A.Get("GetContainer")+"]")};function o(E,C){var O="";var N='<span class="siebui-popup-action-bar"><button type = "button" id= "srch-showall-button" class="appletButton" title="'+t.GetLocalString("IDS_SWE_SEARCH_WATER_MARK")+" "+t.GetLocalString("IDS_SWE_CKEDITOR_SCALE_ALL")+'">'+t.GetLocalString("IDS_SWE_CKEDITOR_SCALE_ALL")+"</button></span>";var G='<span class="siebui-search-newline-dialog"> </span>';var B=CCFMiscUtil_CreatePropSet();var M='<span class="siebui-search-bigheadingtext-dialog">'+t.GetLocalString("IDS_SEARCH_OUI_SRCH_TITLE_TEXT")+"</span>";var H='<span class="siebui-search-bigheadingtext-dialog">'+t.GetLocalString("IDS_SWE_CKEDITOR_SOURCE")+"</span>";var P='<span class="siebui-search-bigheadingtext-dialog">'+t.GetLocalString("IDS_CALENDAR_DATE_COMBOBOX_TITLE")+"</span>";var D='<span class="siebui-search-bigheadingtext-dialog"></span>';var Y='<span class="siebui-search-bigheadingtext-dialog"></span>';var z='<span class="siebui-search-bigheadingtext-dialog"></span>';var K='<table class="siebui-search-row-heading">';var A='<tr class="siebui-search-row-heading">';var L='<td class="siebui-search-row-heading">';var I="<table title="+t.GetLocalString("IDS_SWE_SEARCH_WATER_MARK")+t.GetLocalString("IDS_SEARCH_OUI_SRCH_RESULTS_TEXT")+"><tbody><tr><th class=siebui-search-table-h1>"+M+"</th><th class=siebui-search-table-h2>"+H+"</th><th class=siebui-search-table-h3>"+P+"</th></tr>";var R=5;var Q=0;var X=E.GetProperty("AltWords");if(typeof(X)!=="undefined"){if(X.length!==0){I+=G+'<span class="siebui-search-bigtext-dialog" title="'+t.GetLocalString("IDS_SEARCH_OUI_DID_YOU_MEAN_TEXT")+'">'+t.GetLocalString("IDS_SEARCH_OUI_DID_YOU_MEAN_TEXT")+': </span><a href="javascript:void(0)"id="Srch_AltWords"value ="'+X+'">'+X+"</a>"
}}if(E.GetChildCount()<R){R=E.GetChildCount()}if(E.GetChildCount()>0){for(Q=0;Q<R;Q++){B=E.GetChild(Q);var J="<tr class=siebui-row-first siebui-row-odd>";var U="<tr class=siebui-row-odd>";var S="<tr class=siebui-row-even>";var F="<td class=siebui-search-col1><p><span class=siebui-search-highlight>"+B.GetProperty("Title")+"</span></p><span class=siebui-search-subtext>"+B.GetProperty("Summary")+"</span></td><td class=siebui-search-col2>"+B.GetProperty("DataSource")+"</td><td class=siebui-search-col3>"+B.GetProperty("Date")+"</td></tr>";if(Q===0){I+=J+F}else{if(Q%2===0){I+=S+F}else{I+=U+F}}}I+="</tbody></table>"+N}else{I+="</table>"+G;if($(C).text()!==""){w.Alert(C)}}var W=navigator.userAgent.toString().toLowerCase();var T=(W.indexOf("msie")!=-1);O=t.GetLocalString("IDS_SWE_SEARCH_WATER_MARK");var Z='<span class="siebui-search-titletext-dialog" title="'+t.GetLocalString("IDS_SWE_SEARCH_WATER_MARK")+'">'+O+"</span>";$("#Srch_Dialog").attr("tabindex","0");if(T){var V=$('<div id="Srch_Dialog" class="siebui-search-dialog" title="'+t.GetLocalString("IDS_SWE_SEARCH_WATER_MARK")+'"></div>').html(I).dialog({autoOpen:false,title:O,position:["center",80],height:800,width:500,modal:false,cleanOnClose:true,resizable:true,open:function(aa,ab){},beforeClose:function(aa,ab){if($("#Srch_Dialog").length>0){$("#Srch_Dialog").remove()}}})}else{var V=$('<div id="Srch_Dialog" class="siebui-search-dialog" title="'+t.GetLocalString("IDS_SWE_SEARCH_WATER_MARK")+'"></div>').html(I).dialog({autoOpen:false,title:O,position:["center",80],height:800,width:500,modal:false,cleanOnClose:true,resizable:true,show:{effect:"drop",direction:"up",duration:1000},hide:{effect:"drop",direction:"up",duration:1000},open:function(aa,ab){},beforeClose:function(aa,ab){if($("#Srch_Dialog").length>0){$("#Srch_Dialog").remove()}}})}V.dialog("open");this.BindEvents("SrchShowAll");this.GetPM().SetProperty("ShowSearchResultsDialog",false)}function v(D,B){var L="";var K='<span class="siebui-popup-action-bar"><button type="button" id="srch-showall-button" class="appletButton" title="'+t.GetLocalString("IDS_SWE_SEARCH_WATER_MARK")+" "+t.GetLocalString("IDS_SWE_CKEDITOR_SCALE_ALL")+'">'+t.GetLocalString("IDS_SWE_CKEDITOR_SCALE_ALL")+"</button></span>";var F='<span class="siebui-search-newline-dialog"></span>';var A=CCFMiscUtil_CreatePropSet();var J='<span class="siebui-search-bigheadingtext-dialog">'+t.GetLocalString("IDS_SEARCH_OUI_SRCH_TITLE_TEXT")+"</span>";var G='<span class="siebui-search-bigheadingtext-dialog">'+t.GetLocalString("IDS_SWE_CKEDITOR_SOURCE")+"</span>";var M='<span class="siebui-search-bigheadingtext-dialog">'+t.GetLocalString("IDS_CALENDAR_DATE_COMBOBOX_TITLE")+"</span>";var C='<span class="siebui-search-bigheadingtext-dialog"></span>';var U='<span class="siebui-search-bigheadingtext-dialog"></span>';var z='<span class="siebui-search-bigheadingtext-dialog"></span>';var H="<table title="+t.GetLocalString("IDS_SWE_SEARCH_WATER_MARK")+t.GetLocalString("IDS_SEARCH_OUI_SRCH_RESULTS_TEXT")+"><tbody><tr><th class=siebui-search-table-h1>"+J+"</th><th class=siebui-search-table-h2>"+G+"</th><th class=siebui-search-table-h3>"+M+"</th></tr>";var N=5;var O=0;var V=D.GetProperty("AltWords");if(typeof(V)!=="undefined"){if(V.length!==0){H+=F+'<span class="siebui-search-bigtext-dialog" title="'+t.GetLocalString("IDS_SEARCH_OUI_DID_YOU_MEAN_TEXT")+'">'+t.GetLocalString("IDS_SEARCH_OUI_DID_YOU_MEAN_TEXT")+': </span><a href="javascript:void(0)"id="Srch_AltWordsAdv"value ="'+V.replace(/<\/B>/g,"").replace(/(<B>)/g,"").replace(/"/g,"")+'">'+V+"</a>"}}if(D.GetChildCount()<N){N=D.GetChildCount()}if(D.GetChildCount()>0){for(O=0;O<N;O++){A=D.GetChild(O);var I="<tr class=siebui-row-first siebui-row-odd>";var R="<tr class=siebui-row-odd>";var P="<tr class=siebui-row-even>";var E="<td class=siebui-search-col1><p><span class=siebui-search-highlight>"+A.GetProperty("Title")+"</span></p><span class=siebui-search-subtext>"+A.GetProperty("Summary")+"</span></td><td class=siebui-search-col2>"+A.GetProperty("DataSource")+"</td><td class=siebui-search-col3>"+A.GetProperty("Date")+"</td></tr>";if(O===0){H+=I+E}else{if(O%2===0){H+=P+E}else{H+=R+E}}}H+="</tbody></table>"+K}else{H+="</table>"+F;if($(B).text()!==""){w.Alert(B)}}var T=navigator.userAgent.toString().toLowerCase();var Q=(T.indexOf("msie")!=-1);L=t.GetLocalString("IDS_SWE_SEARCH_WATER_MARK");var W='<span class="siebui-search-titletext-dialog" id="searchdialogtitle" title="'+t.GetLocalString("IDS_SWE_SEARCH_WATER_MARK")+'">'+L+"</span>";$("#Srch_Dialog").attr("tabindex","0");if(Q){var S=$('<div id="Srch_Dialog" class="siebui-search-dialog" title="'+t.GetLocalString("IDS_SWE_SEARCH_WATER_MARK")+'"></div>').html(H).dialog({autoOpen:false,title:L,position:["center",80],height:800,width:500,modal:false,cleanOnClose:true,resizable:true,open:function(X,Y){},beforeClose:function(X,Y){if($("#Srch_Dialog").length>0){$("#Srch_Dialog").remove()}}})}else{var S=$('<div id="Srch_Dialog" class="siebui-search-dialog" title="'+t.GetLocalString("IDS_SWE_SEARCH_WATER_MARK")+'"></div>').html(H).dialog({autoOpen:false,title:L,position:["center",80],height:800,width:500,modal:false,cleanOnClose:true,resizable:true,show:{effect:"drop",direction:"up",duration:1000},hide:{effect:"drop",direction:"up",duration:1000},open:function(X,Y){},beforeClose:function(X,Y){if($("#Srch_Dialog").length>0){$("#Srch_Dialog").remove()}}})}S.dialog("open");this.BindEvents("SrchFromAdvSrch");this.GetPM().SetProperty("ShowSearchResultsDialogFromAdvSearch",false)}function r(Z,C,E){var R="";var F='<span class="siebui-popup-action-bar"><button type = "button" id= "inner-adv-srch-button" class="appletButton" title="'+t.GetLocalString("IDS_SWE_CKEDITOR_ADVANCED_TAB")+t.GetLocalString("IDS_SWE_SEARCH_WATER_MARK")+'">'+t.GetLocalString("IDS_SWE_SEARCH_WATER_MARK")+"</button>";var D='<input type = "text" id= "all-text-box" title="'+t.GetLocalString("IDS_SEARCH_OUI_ADV_SRCH_ALL_TEXT")+'"/>'+t.GetLocalString("IDS_SEARCH_OUI_ADV_SRCH_ALL_TEXT");var H='<input type = "text" id= "none-text-box" title="'+t.GetLocalString("IDS_SEARCH_OUI_ADV_SRCH_NONE_TEXT")+'"/>'+t.GetLocalString("IDS_SEARCH_OUI_ADV_SRCH_NONE_TEXT");var G='<input type = "text" id= "exact-text-box" title="'+t.GetLocalString("IDS_SEARCH_OUI_ADV_SRCH_EXACT_TEXT")+'"/>'+t.GetLocalString("IDS_SEARCH_OUI_ADV_SRCH_EXACT_TEXT");var P='<input type = "text" id= "any-text-box" title="'+t.GetLocalString("IDS_SEARCH_OUI_ADV_SRCH_ANY_TEXT")+'"/>'+t.GetLocalString("IDS_SEARCH_OUI_ADV_SRCH_ANY_TEXT");var B='<span class="siebui-search-headingtext-dialog">'+t.GetLocalString("IDS_SEARCH_OUI_ADV_SRCH_LOOKIN")+"</span>";var O='<div class="siebui-popup-form-section siebui-search-source">';var z='<div class="siebui-popup-form-section">';var A="</div>";var S=0;var W=[];while(Z[S]){var U="ChkBox"+S;if(SiebelApp.S_App.GetDirection()){W[S]='<span class="siebui-popup-form-action"><input type = "checkbox" id='+U+' value ="'+Z[S]+'" title ="'+Z[S]+'"/><label for='+U+' class="siebui-search-advsearch-rtl-padding">'+Z[S]+"</label></span>"
}else{W[S]='<span class="siebui-popup-form-action"><input type = "checkbox" id='+U+' value ="'+Z[S]+'" title ="'+Z[S]+'"/><label for='+U+">"+Z[S]+"</label></span>"}S++}u=S;var S=0;var I=[];while(E[S]){var U="FFChkBox"+S;if(SiebelApp.S_App.GetDirection()){I[S]='<span class="siebui-popup-form-action"><input type = "checkbox" id='+U+' value ="'+E[S]+'" title ="'+E[S]+'"/><label for='+U+' class="siebui-search-advsearch-rtl-padding">'+E[S]+"</label></span>"}else{I[S]='<span class="siebui-popup-form-action"><input type = "checkbox" id='+U+' value ="'+E[S]+'" title ="'+E[S]+'"/><label for='+U+">"+E[S]+"</label></span>"}S++}n=S;var S=0;var K=[];while(C[S]){var U="DSChkBox"+S;if(SiebelApp.S_App.GetDirection()){K[S]='<span class="siebui-popup-form-action"><input type = "checkbox" id='+U+' value ="'+C[S]+'" title ="'+C[S]+'"/><label for='+U+' class="siebui-search-advsearch-rtl-padding">'+C[S]+"</label></span>"}else{K[S]='<span class="siebui-popup-form-action"><input type = "checkbox" id='+U+' value ="'+C[S]+'" title ="'+C[S]+'"/><label for='+U+">"+C[S]+"</label></span>"}S++}d=S;var J='<span class="siebui-search-newline-dialog"></span>';var Q=0;var L=J+D+J+P+J+G+J+H+J+B+O;for(Q=0;Q<u;Q++){L=L+W[Q]}L+=A;var V='<span class="siebui-search-headingtext-dialog">'+t.GetLocalString("IDS_SEARCH_OUI_ADV_SRCH_FILE_FORMAT")+"</span>";L=L+J+V+z;for(Q=0;Q<n;Q++){L=L+I[Q]}L+=A;var N='<span class="siebui-search-headingtext-dialog">'+t.GetLocalString("IDS_SWE_CKEDITOR_DATA")+t.GetLocalString("IDS_SWE_CKEDITOR_SOURCE")+"</span>";L+=J+N+z;for(Q=0;Q<d;Q++){L=L+K[Q]}L+=A;L+=J+F;var Y=navigator.userAgent.toString().toLowerCase();var T=(Y.indexOf("msie")!=-1);R=t.GetLocalString("IDS_SWE_CKEDITOR_ADVANCED_TAB")+" "+t.GetLocalString("IDS_SWE_SEARCH_WATER_MARK");var M='<span class="siebui-search-titletext-dialog" id="advsrchdialogtitle" title="'+t.GetLocalString("IDS_SWE_CKEDITOR_ADVANCED_TAB")+t.GetLocalString("IDS_SWE_SEARCH_WATER_MARK")+'">'+R+"</span>";$("#Adv_Srch_Dialog").attr("tabindex","0");if(T){var X=$('<div id="Adv_Srch_Dialog" class="siebui-search-dialog" title="'+t.GetLocalString("IDS_SWE_CKEDITOR_ADVANCED_TAB")+t.GetLocalString("IDS_SWE_SEARCH_WATER_MARK")+'"></div>').html(L).dialog({autoOpen:false,title:R,position:["center",80],height:800,width:450,modal:false,cleanOnClose:true,resizable:false,open:function(aa,ab){$(this).parent().find("div.ui-dialog-titlebar").addClass("titleClass")},beforeClose:function(aa,ab){if($("#Adv_Srch_Dialog").length>0){$("#Adv_Srch_Dialog").remove()}}})}else{var X=$('<div id="Adv_Srch_Dialog" class="siebui-search-dialog" title="'+t.GetLocalString("IDS_SWE_CKEDITOR_ADVANCED_TAB")+'"></div>').html(L).dialog({autoOpen:false,title:R,position:["center",80],height:800,width:450,modal:false,cleanOnClose:true,resizable:false,show:{effect:"drop",direction:"up",duration:1000},hide:{effect:"drop",direction:"up",duration:1000},open:function(aa,ab){$(this).parent().find("div.ui-dialog-titlebar").addClass("titleClass")},beforeClose:function(aa,ab){if($("#Adv_Srch_Dialog").length>0){$("#Adv_Srch_Dialog").remove()}}})}X.dialog("open");this.BindEvents("AdvSrch");this.GetPM().SetProperty("showAdvancedSearchPopup",false)}function s(N,P,K,I){var z="";var C="";var M='<div id="Adv_Find_Dialog"></div>';$("#srchDivCont").append(M).trigger("create");var O=navigator.userAgent.toString().toLowerCase();var L=(O.indexOf("msie")!=-1);var B=(O.indexOf("chrome")!=-1);x=N;k=P;if(typeof(K)!=="undefined"){if(I){if(K==="Contacts"||K==="Personen"){K="Corporate Contact"}}if(f!==K.toString()){f=K.toString();h=false}else{h=true}}var G='<button type = "button" id= "inner-adv-find-button" class="siebui-search-button" title="'+t.GetLocalString("RTCFindTxt")+'"><img src="images/esearch_submitsearch.png" class="siebui-search-image"/></button>';var J='<button type = "button" id= "adv-find-reset-button" class="siebui-search-button" title="'+t.GetLocalString("IDS_SWE_JQGRID_SEARCH_RESET")+'"><img src="images/esearch_find_reset.png" class="siebui-search-image"/></button>';var F=0;var D=0;var A=[];while(P[F]){var E="findFieldTextBox"+F;if(h){if(typeof(y[F])==="undefined"){y[F]=C}A[F]='<div class="siebui-search-div-find-field"><span class="siebui-search-div-find-field-cell1"><label for='+E+' + title="'+P[F]+'" + class="siebui-search-find-field-text" + >'+P[F]+'</label></span><span class="siebui-search-div-find-field-cell2"><input type = "text" class="siebui-search-textbox-srch siebui-search-textbox-find" id= "'+E+'" + value="'+y[F]+'" + title="'+P[F]+'"/></span></div>'}else{A[F]='<div class="siebui-search-div-find-field"><span class="siebui-search-div-find-field-cell1"><label for='+E+' + title="'+P[F]+'" + class="siebui-search-find-field-text" + >'+P[F]+'</label></span><span class="siebui-search-div-find-field-cell2"><input type = "text" class="siebui-search-textbox-srch siebui-search-textbox-find" id= "'+E+'" + value="'+C+'" + title="'+P[F]+'"/></span></div>'}F++}g=F;var H;for(D=0;D<g;D++){if(D===0){H=A[D]}else{H=H+A[D]}}H+='<div class="siebui-search-div-find-field siebui-search-div-find-buttons"><span class="siebui-search-div-find-field-cell1">&nbsp;</span><span class="siebui-search-div-find-field-cell2">'+J+G+"</span></div>";$("#Adv_Find_Dialog").append(H).trigger("create");$("#Adv_Find_Dialog").show();this.BindEvents("AdvFind");this.GetPM().SetProperty("showAdvancedFindPopup",false)}function l(N,D,R,X){var A="";var K='<span class="siebui-popup-action-bar"><button type = "button" id= "save-pref-button" class="appletButton" title="'+t.GetLocalString("IDS_CLIENT_SAVE")+t.GetLocalString("IDS_BHC_COL_SETTINGS")+'">'+t.GetLocalString("IDS_CLIENT_SAVE")+"</button>";var B='<span class="siebui-search-headingtext-dialog">'+t.GetLocalString("IDS_SEARCH_OUI_SRCH_PREF_RECORDS")+"</span>";var F='<span class="siebui-search-newline-dialog"></span>';var J="<select id='numPagesCombo' title='"+t.GetLocalString("IDS_SEARCH_OUI_SRCH_PREF_RECORDS")+"'>";var P=0;var M=N.length;for(P=0;P<M;P++){J=J+"<option value='"+N[P]+"'>"+N[P]+"</option>"}J=J+"</select>";var O='<span class="siebui-search-headingtext-dialog">'+t.GetLocalString("IDS_SEARCH_OUI_SRCH_PREF_SORT")+"</span>";var E="<select id='sortCombo' title='"+t.GetLocalString("IDS_SEARCH_OUI_SRCH_PREF_SORT")+"'>";var C=D.length;for(P=0;P<C;P++){E=E+"<option value='"+D[P]+"'>"+D[P]+"</option>"}E=E+"</select>";var T='<span class="siebui-search-headingtext-dialog">'+t.GetLocalString("IDS_SEARCH_OUI_SRCH_PREF_QUERY_LANG")+"</span>";var z="<select id='queryLangCombo' title='"+t.GetLocalString("IDS_SEARCH_OUI_SRCH_PREF_QUERY_LANG")+"'>";var P=0;var I=R.length;for(P=0;P<I;P++){z=z+"<option value='"+R[P]+"'>"+R[P]+"</option>"}z=z+"</select>";var U=t.GetLocalString("IDS_SEARCH_OUI_SRCH_PREF_DOC_LANG");var Q='<span class="siebui-search-headingtext-dialog">'+U+"</span>";var H='<span class="siebui-popup-form-action"><input type = "checkbox" id= "docLangChkBox" name = "docLangBox" value ="'+X+'" title ="'+U+'"';if(X==="true"){H+=' checked = "true"'}H+="/></span>";var G=F+B+J+F+O+E+F+T+z+F+Q+H+F+K;
var W=navigator.userAgent.toString().toLowerCase();var S=(W.indexOf("msie")!=-1);A=t.GetLocalString("IDS_SWE_SEARCH_WATER_MARK")+" "+t.GetLocalString("IDS_BHC_COL_SETTINGS");var L='<span class="siebui-search-titletext-dialog" id="searchpref" title="'+t.GetLocalString("IDS_SWE_SEARCH_WATER_MARK")+t.GetLocalString("IDS_BHC_COL_SETTINGS")+'">'+A+"</span>";if(S){var V=$('<div id="Search_Pref_Dialog" class="siebui-search-dialog" title="'+t.GetLocalString("IDS_BHC_COL_SETTINGS")+'"></div>').html(G).dialog({autoOpen:false,closeOnEscape:true,title:A,position:["center",80],height:600,width:350,modal:false,resizable:false,})}else{var V=$('<div id="Search_Pref_Dialog" class="siebui-search-dialog" title="'+t.GetLocalString("IDS_BHC_COL_SETTINGS")+'"></div>').html(G).dialog({autoOpen:false,closeOnEscape:true,title:A,position:["center",80],height:600,width:350,modal:false,resizable:false,show:{effect:"drop",direction:"up",duration:1000},hide:{effect:"drop",direction:"up",duration:1000},beforeClose:function(Y,Z){if($("#Search_Pref_Dialog").length>0){$("#Search_Pref_Dialog").remove()}}})}V.dialog("open");this.BindEvents("SrchPref");this.GetPM().SetProperty("showSearchPreferencePopup",false)}function c(B,z,G,I,E,A){var C=0;var H;var D="-------------";var J="<select id='lookinCombo' class='siebui-search-combobox-searchLookin' title='"+t.GetLocalString("IDS_SWE_SEARCH_WATER_MARK")+"'>";var F=B.length;for(C=0;C<F;C++){H=B[C];J=J+"<option id='ALL'value='"+H+"'>&nbsp;&nbsp;"+H+"</option>"}J=J+"<option class=siebui-search-dropdown-delimeter value='delimeter'>"+t.GetLocalString("RTCFindTxt")+"</option>";for(C=0;C<z.length;C++){H=z[C];H=H.split("&").join("&amp;").split("<").join("&lt;").split('"').join("&quot;").split("'").join("&#39;");J=J+"<option value='find"+H+"'>&nbsp;&nbsp;"+H+"</option>"}J=J+"<option class=siebui-search-dropdown-delimeter value='delimeter'>"+t.GetLocalString("IDS_SWE_SEARCH_WATER_MARK")+"</option>";for(C=0;C<G.length;C++){H=G[C];J=J+"<option value='"+H+"'>&nbsp;&nbsp;"+H+"</option>"}J=J+"<option class=siebui-search-dropdown-delimeter value='delimeter'>"+t.GetLocalString("IDS_SWE_CKEDITOR_DATA")+t.GetLocalString("IDS_SWE_CKEDITOR_SOURCE")+"</option>";for(C=0;C<I.length;C++){H=I[C];q[C]=H;i[C]=E[C];J=J+"<option value='"+H+"'>&nbsp;&nbsp;"+H+"</option>"}J=J+"</select>";$("#srchDivCont").append(J).trigger("create");this.GetPM().SetProperty("fillLookin",false)}return p}());return"SiebelAppFacade.SearchLookinPhyRenderer"})};