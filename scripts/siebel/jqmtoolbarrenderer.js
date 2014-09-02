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
if(typeof(SiebelAppFacade.JQMToolbarRenderer)==="undefined"){SiebelJS.Namespace("SiebelAppFacade.JQMToolbarRenderer");SiebelAppFacade.JQMToolbarRenderer=(function(){var h=SiebelJS.Dependency("SiebelApp.Utils");var e=SiebelJS.Dependency("SiebelApp.Constants");var d=e.get("SWE_PST_BUTTON_CTRL");var f=e.get("SWE_CTRL_LINK");var c=e.get("SWE_CTRL_IMAGECONTROL");var i=e.get("SWE_CTRL_TEXTDATA");function b(j){SiebelAppFacade.JQMToolbarRenderer.superclass.constructor.call(this,j)}SiebelJS.Extend(b,SiebelAppFacade.BasePR);b.prototype.Init=function(){SiebelAppFacade.JQMToolbarRenderer.superclass.Init.call(this)};b.prototype.ShowUI=function(){var o=this.GetPM();var n=o.Get("itemArray");var l=o.Get("placeholder");var j=new JSSPropertySet();var k;var m;var q="";var r;for(r=0;r<n.length;r++){var u=n[r];var t=o.ExecuteMethod("CanInvoke",u.GetProperty("command"));var v=u.GetProperty("type");m=u.GetProperty("toolbarname");q=' rn="'+u.GetProperty("name")+'" ot="'+u.GetProperty("type")+'" un="'+u.GetProperty("caption")+'" ';var x="N";if(u.childArray.length>0){x="Y";t=true}switch(v){case d:case f:case c:var p;if(x==="Y"){p="<a id='jqm_tb_a_"+r+"' href='#jqm_toolbar_popup' data-rel='popup'"+q+"><img src='"+u.GetProperty("onbitmap")+"' /></a>"}else{p="<a id='jqm_tb_a_"+r+"' href='#'"+q+"><img src='"+((!t&&!!u.GetProperty("offbitmap"))?u.GetProperty("offbitmap"):u.GetProperty("onbitmap"))+"' /></a>"}k="<div id='jqm_tb_"+r+"' tb_index='"+r+"' class='ToolbarButton "+(!t?"ui-disabled":"siebui-tb-enabled")+"' data-cmd='"+u.GetProperty("command")+"' has-subtoolbar-items='"+x+"' role ='button' title = '"+u.GetProperty("caption")+"' name='"+u.GetProperty("name")+"'"+q+">"+p+"</div>";break}if(j.GetProperty(m)){j.SetProperty(m,j.GetProperty(m)+k)}else{j.SetProperty(m,k)}}for(r=0;r<j.propArrayLen;r++){if(r===0){m=j.GetFirstProperty()}else{m=j.GetNextProperty()}var w=m.replace(/\s+/g,"-").toLowerCase();var s=$("#siebui-toolbar-"+w);if(s.length>0){s.html(j.GetProperty(m)).attr("role","toolbar").addClass("siebui-toolbar").addClass("siebui-toolbar-"+w).parent().parent().addClass(SiebelApp.S_App.GetDirection()?"siebui-rtl-element-right":"")}}};b.prototype.BindEvents=function(){var j=$("#"+this.GetPM().Get("placeholder"));j.delegate("div.siebui-tb-enabled","click",{ctx:this},function(l){var n=$(this).attr("has-subtoolbar-items");if(n==="N"){var m=$(this).attr("data-cmd");var k=$(this).attr("name");setTimeout(function(){l.data.ctx.GetPM().OnControlEvent("TOOLBAR_INVOKE",m)},0)}else{a.call(l.data.ctx,$(this))}});j=null};function a(l){var x=this.GetPM();var D=x.Get("itemArray");var v=D[l.attr("tb_index")];var n=v.childArray;var j=v.GetProperty("toolbarname");var C=j.replace(/\s+/g,"-").toLowerCase();var t=$("#siebui-toolbar-"+C);if(n.length<=0){return}if($("#jqm_toolbar_popup").length>0){$("#jqm_toolbar_popup").remove()}var k;var q="";var z="";var r="";var A="";for(var w=0;w<n.length;w++){var s=n[w];var p=x.ExecuteMethod("CanInvoke",s.GetProperty("command"));var o=s.GetProperty("type");A=' ot="'+s.GetProperty("type")+'" rn="'+s.GetProperty("name")+'" un="'+s.GetProperty("caption")+'" ';switch(o){case c:q+='<div id="jqm_tb_item_'+w+'" class="siebui-tb-item-img"><span '+A+'><img src="'+s.GetProperty("onbitmap")+'"></img></span></div>';break;case i:var y=s.GetProperty("caption");if(!h.IsEmpty(y)){z+='<div id="jqm_tb_item_'+w+'" class="siebui-tb-item-text"><span '+A+">"+y+"</span></div>"}break;case d:case f:var u;var B=(!p&&!!s.GetProperty("offbitmap"))?s.GetProperty("offbitmap"):s.GetProperty("onbitmap");if(B){u="<img src='"+B+"' />"}else{u=s.GetProperty("caption")}r+='<div id="jqm_tb_item_'+w+'" class="siebui-tb-item-btn '+(!p?"ui-disabled":"siebui-tb-item-enabled")+'" data-cmd="'+s.GetProperty("command")+'"><a href="#" data-role="button" '+A+">"+u+"</a></div>";break}}k='<div id="jqm_toolbar_popup" name="jqm_toolbar_popup" data-role="popup" data-position-to="#'+l.attr("id")+'" class="siebui-tb-popup"><div class="siebui-tb-popup-top">'+q+z+'</div><div class="siebui-tb-popup-bottom">'+r+"</div></div>";$(t).append(k).trigger("create");$("#jqm_toolbar_popup").popup("open");var m=$("div.siebui-tb-item-enabled");m.unbind();m.bind("click",{ctx:this},function(E){var F=$(this).attr("data-cmd");setTimeout(function(){E.data.ctx.GetPM().OnControlEvent("TOOLBAR_INVOKE",F);$("#jqm_toolbar_popup").popup("close")},0)});$(window).unbind("orientationchange.SiebelAppFacade.JQMToolbarRenderer");$(window).bind("orientationchange.SiebelAppFacade.JQMToolbarRenderer",{ctx:this},function(E){g.call(this)});return false}function g(){var k=$("#jqm_toolbar_popup");var j=k.parent().hasClass("ui-popup-active");if(j){var l=k.attr("positionTo");k.popup("close");k.attr("positionTo",l);k.popup("open")}}b.prototype.BindData=function(){};return b}())};