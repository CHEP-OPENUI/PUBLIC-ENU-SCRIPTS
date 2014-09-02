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
if(typeof(SiebelAppFacade.JQMPDQPhyRenderer)==="undefined"){SiebelJS.Namespace("SiebelAppFacade.JQMPDQPhyRenderer");define("siebel/jqmpdqphyrenderer",[],function(){var a=SiebelJS.Dependency("SiebelApp.Utils");var b=SiebelJS.Dependency("SiebelApp.Constants");var c="jqm_pdquery_popup";SiebelAppFacade.JQMPDQPhyRenderer=(function(){function e(f){this.pdqTimeOut=null;SiebelAppFacade.JQMPDQPhyRenderer.superclass.constructor.call(this,f)}SiebelJS.Extend(e,SiebelAppFacade.BasePR);e.prototype.Init=function(){SiebelAppFacade.JQMPDQPhyRenderer.superclass.Init.call(this);this.AttachPMBinding("PDQRefresh",this.BindData)};e.prototype.ShowUI=function(){var g=this.GetPM();var f=$("[id="+g.Get("GetContainer")+"]");f.children().removeAttr("href");if(f.length!==1){SiebelJS.Log("Can't find single instance of PDQ - ["+g.Get("GetContainer")+"]");return}};function d(f){var j=b.get("SWE_PROP_QTP_OT");var l=b.get("SWE_PROP_QTP_RN");var k=b.get("SWE_PROP_QTP_UN");var n=this.GetPM().Get("PDQComboBoxQTPPS");var h=this.GetPM().Get("PDQItemQTPInfo")||[];if(n&&typeof n.GetProperty==="function"){f.attr("ot",n.GetProperty(j)).attr("rn",n.GetProperty(l)).attr("un",n.GetProperty(k))}for(var m=0;m<h.length;m++){if(h[m]&&typeof h[m].GetProperty==="function"){var q=h[m].GetProperty(k);var g=h[m].GetProperty(j);var p=h[m].GetProperty(l);var o=$(f).children(".pdqitem").find("#"+m);if(o.length===1){o.attr("ot",g);o.attr("rn",p);o.attr("un",q)}}}}e.prototype.BindEvents=function(){var h=this.GetPM();var g=$("[id="+h.Get("GetContainer")+"]");var f=$("[id="+h.Get("GetContainer")+"_a]");f.bind("click",{ctx:this},function(p){if($("body").find(".menuitem").length){$(".menuitem").remove()}var o=$(".pdqitem").is(":visible");if(o){$(".pdqitem").remove()}else{var q=h.Get("SelectedPDQItem");var l=h.Get("PDQItem")||[];var k='<div class= "pdqitem" id= "pdq" ><ul data-role="listview" data-inset="true">';var j;for(var m=0;m<l.length;m++){var n=l[m].replace(/ /g,"&nbsp;");if(q===m.toString()){j='<li data-icon="false" id='+m+' class="hilight"> '+n+" </li>"}else{j='<li data-icon="false" id='+m+"> "+n+" </li>"}k+=j}g.append(k).trigger("create");d.call(p.data.ctx,g)}return false});g.delegate("li","click",{ctx:this},function(l){var j=l.data.ctx;var n=parseInt(SiebelApp.S_App.GetCancelQueryTimeout(),10);if(isNaN(n)||n<30){n=30}n*=1000;var m=j.GetPM().GetRenderer();if(m.pdqTimeOut!==null){clearTimeout(m.pdqTimeOut);m.pdqTimeOut=null}m.ProcessPDQPopup();m.pdqTimeOut=setTimeout(m.ClosePDQPopup,n);var k=$(this).attr("id");j.GetPM().OnControlEvent("PDQSelect",k)});$("body").click(function(i){$(".pdqitem").remove()})};e.prototype.ProcessPDQPopup=function(){var k=c;if($("#"+k).length>0){$("#"+k).remove()}var i="";var f=SiebelApp.S_App.LocaleObject;var j=f.GetLocalString("IDS_CANCELQRY_INITIALTEXT");i='<div align ="center" id = "response_txt_div"><p id="init_txt_cqm"><b>'+j+"</b></p></br></div>";var h='<div id="'+k+'" name="'+k+'" data-role="popup" data-position-to="window" class="ui-content"><div id="jqm_pdq_popup_content" name="jqm_pdq_popup_content">'+i+"</div></div>";var g=$("#s_pdq");$(g[0]).append(h).trigger("create");$("#"+k).on({popupbeforeposition:function(){$("#"+k+"-screen").off()}});$("#"+k).popup("open")};e.prototype.ClosePDQPopup=function(){var g=c;var f=$("#"+g);if(f.length>0){$("#"+g).popup("close")}};e.prototype.BindData=function(){var g=this.GetPM();var f=$("[id="+g.Get("GetContainer")+"]");d.call(this,f);if(f.length!==1){SiebelJS.Log("Can't find single instance of PDQ - ["+g.Get("GetContainer")+"]");return}};return e}());return"SiebelAppFacade.JQMPDQPhyRenderer"})};