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
if(typeof(SiebelAppFacade.JQMGridRenderer)==="undefined"){SiebelJS.Namespace("SiebelAppFacade.JQMGridRenderer");define("siebel/jqmgridrenderer",["order!3rdParty/jqmobile/mobiscroll.custom-2.5.0.min","order!3rdParty/jqmobile/jquery.swipeButton.min","order!3rdParty/jqmobile/jquery.easing.1.3","order!3rdParty/jqmobile/jquery.mobile.scrollview","order!3rdParty/jquery.mobile.scrollview-ext","order!siebel/jqmsearchctrl","order!siebel/jqmformrenderer","order!siebel/jqmscrollcontainer"],function(){SiebelAppFacade.JQMGridRenderer=(function(){var y=SiebelJS.Dependency("SiebelApp.Utils");var r=SiebelJS.Dependency("SiebelApp.Constants");var w=r.get("SWE_PST_BUTTON_CTRL");var n=r.get("SWE_CTRL_LINK");var c=r.get("SWE_CTRL_PICK");var o=r.get("SWE_CTRL_CHECKBOX");var z=r.get("SWE_CTRL_COMBOBOX");var e=r.get("SWE_CTRL_DATE_TIME_PICK");var d=r.get("SWE_CTRL_DATE_PICK");var t=r.get("SWE_CTRL_DATE_TZ_PICK");var b=r.get("SWE_CTRL_CALC");var x=r.get("SWE_CTRL_MAILTO");var v=r.get("SWE_CTRL_TEXTAREA");var m=r.get("SWE_CTRL_TEXT");var f=r.get("SWE_CTRL_URL");var g=r.get("SWE_CTRL_PHONE");var h=r.get("SWE_CTRL_MVG");var p=r.get("SWE_CTRL_CURRENCY_CALC");var i=r.get("SWE_CTRL_PWD");var D=SiebelApp.S_App.LocaleObject.GetLocalString("IDS_SWE_MOBILE_NO_RECORDS_TO_DISPLAY");var l=SiebelApp.S_App.LocaleObject.GetLocalString("IDS_SWE_MOBILE_TAP_TO_CREATE");var u=SiebelApp.S_App.LocaleObject;var j=u.GetLocalString("IDS_SWE_MOBILE_ON")||"On";var B=u.GetLocalString("IDS_SWE_MOBILE_OFF")||"Off";function a(Q){SiebelAppFacade.JQMGridRenderer.superclass.constructor.call(this,Q);var T;var G;var P;var O;var M;var U=false;var K=false;var E;var J=false;var R=new SiebelAppFacade.TableColumnHelper();this.SetColumnsToDisplay=function(V){M=V};this.GetColumnsToDisplay=function(){return M};this.SetSortOrder=function(V){E=V};this.GetSortOrder=function(){return E};this.GetColumnHelper=function(){return R};this.GetRowCount=function(){return($("#jqmtable_"+this.GetPM().Get("GetPlaceholder")).find("tbody").find("tr").length)};this.GetCurRowSel=function(){return P};this.SetCurRowSel=function(V){P=V};this.GetDelControl=function(){return T};this.SetDelControl=function(V){T=V};this.GetDelBtnStatus=function(){return G};this.SetDelBtnStatus=function(V){G=V};this.GetToggleFlag=function(){return U};this.SetToggleFlag=function(V){U=V};this.GetDisableToggle=function(){return K};this.SetDisableToggle=function(V){K=V};var I=new SiebelAppFacade.JQMMapCtrl(this);this.GetMapCtrl=function(){return I};var S=null;this.SetMapFieldArray=function(){S=this.GetPM().Get("GetMapFields")};this.GetMapFieldArray=function(){return S};var N=null;this.GetMapLocationArray=function(){return N};this.SetMapLocationArray=function(V){N=V};var L;this.GetMapControl=function(){return L};this.SetMapControl=function(V){L=V};var F=null;var H=null}SiebelJS.Extend(a,SiebelAppFacade.JQMScrollContainer);a.prototype.Init=function(){SiebelAppFacade.JQMGridRenderer.superclass.Init.call(this);this.AttachPMBinding("MultiSelectMode",this.SetCellEdit);this.AttachPMBinding("InQueryMode",this.SetCellEdit);this.AttachPMBinding("CellChange",this.SetCellValue);this.AttachPMBinding("GetPhysicalControlValue",this.GetPhysicalControlValue);this.AttachPMBinding("HandleRowSelect",function(){if(!this.GetDisableToggle()){SiebelAppFacade.JQMLayout.ToggleMobileLayout(true)}},{scope:this,when:function(){return $("#"+this.GetPM().Get("GetFullId")).parent().children("div[enabletoggle='true']").length===1||$("#s_"+this.GetPM().Get("GetFullId")+"_div").children("div[enabletoggle='true']").length===1}})};function q(I,F,G,J,H,E){if(H===""){return'<a id = "listcol_'+J+"_"+G+'" '+E+' href="javascript:void(0);" class="listdrilldown '+I+'" name="'+F+'"></a>'}else{return'<a id = "listcol_'+J+"_"+G+'" '+E+' href="javascript:void(0);" class="listdrilldown '+I+'" name="'+F+'">'+H+"</a>"}}a.prototype.ShowUI=function(E){SiebelAppFacade.JQMGridRenderer.superclass.ShowUI.call(this);this.m_Offset=0;var G=this.GetPM();G.ExecuteMethod("SetActiveControl",null);var J=G.Get("GetPlaceholder");var I=G.Get("ListOfColumns");var H="jqmtable_"+J;$("#"+J).empty();$("#"+J).append("<table data-role='table' data-mode='columntoggle' class='jqmtable' id='"+H+"'></table>").trigger("create");$("#jqmtable_"+J).append("<table class='ui-body-b'><thead class='ui-bar-b'> </thead></table>").trigger("create");$("#jqmtable_"+J).append("<table class='ui-body-d'><tbody> </tbody></table>").trigger("create");var F="scrollviewcontainer_"+J;$("#jqmtable_"+J).find("tbody").append("<div id='"+F+"'><div></div></div>").trigger("create");this.MakecontainerScrollable(F,true,false,true);this.SetMapFieldArray();if($("#"+G.Get("GetFullId")).parent().children("div[enabletoggle='true']").length===1||$("#s_"+G.Get("GetFullId")+"_div").children("div[enabletoggle='true']").length===1){this.SetToggleFlag(true)}this.SetSortOrder(r.get("SORT_ASCENDING"));this.SetMaxListColumns();this.SetColumns();this.ShowSearch();this.ShowTitle();J=null};a.prototype.SetMaxListColumns=function(){var E=this.GetPM().Get("maxListColPhone");if(!y.IsEmpty(E)){this.m_maxListColumns=E}else{this.SetDefaultMaxListColumns();this.m_maxListColumns=this.GetDefaultMaxListColumns()}};a.prototype.SetDefaultMaxListColumns=function(){this.m_defaultMaxListColumns=4};a.prototype.GetDefaultMaxListColumns=function(){return this.m_defaultMaxListColumns};a.prototype.GetMaxListColumns=function(){return this.m_maxListColumns};a.prototype.ShowSearch=function(){if(false===this.IsPopup()){var I=this.GetPM().Get("GetPlaceholder");var G=[];var H=this.GetPM().Get("ListOfColumns");for(var F=0,E=H.length;F<E;F++){G.push(H[F].control.GetDisplayName())}this.GetSearchCtrl().ShowUI(G,I)}};function C(E,H){var I=SiebelApp.S_App.GetIconMap();var J=SiebelApp.S_App.LookupStringCache(H.GetIconMap());if(J){var G=I[J];if(G){for(var F=0;F<G.length;F++){if(G[F].iconName===E){if(G[F].iconName==="DrilldownIcon"){return G[F].iconImage}else{return G[F].iconImage+"<span style='display:none;'>"+(E)+"</span>"}}}}}return E}a.prototype.SetColumns=function(){var I=this.GetPM().Get("ListOfColumns");var K;var E=0;var H=I.slice();var F=this.GetMaxListColumns();for(E=0;E<I.length;E++){if(E===0){K=E}if(I[E].isLink){K=E;break}}if(K!==0){var J=H.splice(K,1);H.splice(0,0,J[0])}for(E=0;E<H.length;E++){if(E>F-1){H.splice(E,H.length-E);break}}var G=this.GetColumnHelper();for(E=0;E<H.length;E++){G.AddColumn(H[E].control.GetName(),H[E].control)}this.SetColumnsToDisplay(H)};a.prototype.ShowTitle=function(){var M=this.GetPM().Get("GetPlaceholder");var N=0;var E=this.GetColumnsToDisplay();var T="";for(N=0;N<E.length;N++){var L=E[N].control.GetDisplayName();var J=E[N].control.GetName();var Q=this.GetColumnHelper().GetModifiedColumnName(J);var R=A.call(this,E[N].control,"label");var G="jqmtable_"+M+"_label_"+Q;var K=E[N].control?E[N].control.IsSortable()===r.get("SWE_NUMERIC_TRUE"):false;var P=u.GetLocalString(r.get("IDS_SORTABLE_TOOL_TIP"));var I=u.GetLocalString(r.get("IDS_NON_SORTABLE_TOOL_TIP"));var S=K?P:I;var O=E[N].control.GetLabelJustification();
var F=N+1;T=T.concat("<th id ='"+G+"' "+R+" class ='jqmtable_label ui-bar-b' title='"+S+"' style='text-align:"+O+"' data-priority='"+F+"'>"+L+"</th>")}$("#jqmtable_"+M).find("thead").append(T).trigger("create");var H=100/E.length;$(".ui-table th").css("width",H+"%")};a.prototype.GetSelectedControl=function(F){var H=this.GetPM().Get("GetPlaceholder");var E="jqmtable_"+H+"_";F=F.replace(E,"");var G=F.indexOf("_");F=F.slice(G+1);H=null;return F};function k(H){var E=H.data.ctx;var G=E.GetSortOrder();if(G===r.get("SORT_DESCENDING")){E.SetSortOrder(r.get("SORT_ASCENDING"))}else{E.SetSortOrder(r.get("SORT_DESCENDING"))}var F=E.GetSelectedControl($(this).attr("id"));var I=E.GetColumnHelper().GetActualControlName(F);var J=$(this).attr("title");var K=true;if(J===u.GetLocalString(r.get("IDS_SORTABLE_TOOL_TIP"))){E.GetPM().OnControlEvent(r.get("PHYEVENT_SORT_LIST"),I,G)}}a.prototype.BindData=function(ag){if(this.inProgress){return false}var T=this.GetPM().Get("GetPlaceholder");var ab=$("#jqmtable_"+T).find("tbody").find("#scrollviewcontainer_"+T).find(".ui-scrollview-view");var Q=this.GetPM();var ap=null;var ad=0;var O=0;ap=Q.Get("GetScrollDir");ad=Q.Get("GetScrollAmount");ad=parseInt(ad,10);var W=Q.Get("GetRecordSet").length;var F=W;var ai=0;if(ap!==null&&ad!==0&&ad<W){O=true;if(ad<0){ad=-ad}if(ap){ai=W-ad;this.m_Offset=this.m_Offset+ad}else{ai=0;F=ad;this.m_Offset=this.m_Offset-ad}}else{if(ag){Q.ExecuteMethod("SetActiveControl",null);this.ClearData();this.m_Offset=0}}var G=Q.Get("GetRecordSet");var af=Q.Get("ListOfColumns");var az=this.GetPM().Get("GetBusComp");var av=false;var ay="jqml_"+T+"_";var ak=0;var ar=[];var ae=this.GetMapFieldArray();var aq=null;var am=ay+"NR";if($("#"+am).length===1){$("#"+am).remove()}if(W<1){var ao=false;var ac=jQuery.event.special.orientationchange.orientation();if(this.GetToggleFlag()){if($("div["+ac+"='Hide']").length>0){ao=true}}var P='<div id="'+am+'" class="jqmNoRecord">';if(ao){P=P.concat('<a href="#" data-role="link">'+l+"</a></div>")}else{P=P.concat("<span>"+D+"</span></div>")}$("#scrollviewcontainer_"+T).prepend(P);if(ao){$("#"+am+" a").bind("click.SiebelAppFacade.JQMGridRenderer",{ctx:this},function(aA){SiebelAppFacade.JQMLayout.ToggleMobileLayout(true)})}$("#"+am).bind("orientationchange.SiebelAppFacade.JQMGridRenderer",{ctx:this},function(aC){var aB=$(this);var aA;if($("div["+aC.orientation+"='Hide']").length===0){if(aB.children("a").length===1){aB.children("a").remove();aA="<span>"+D+"</span>";aB.append(aA)}}else{if(aB.children("span").length===1&&aC.data.ctx.GetToggleFlag()){aB.children("span").remove();aA='<a href="#" data-role="link">'+l+"</a>";aB.append(aA);$("#"+aB.attr("id")+" a").bind("click.SiebelAppFacade.JQMGridRenderer",{ctx:this},function(aD){SiebelAppFacade.JQMLayout.ToggleMobileLayout(true)})}}})}var M=this.GetColumnsToDisplay();var Y="";var aa="";for(ak=0;ak<M.length;ak++){if(M[ak].isLink){av=true;break}}for(var aw=ai;aw<F;aw++){var U=aw+this.m_Offset;var L;var ax="ui-icon-siebui-drilldown";var S="";aa='<tr id="'+ay+U+'">';if(ae!==null){for(var N=0;N<ae.length;N++){var I=HtmlEncode(G[aw][ae[N]]);if(!y.IsEmpty(I)){I=I.replace(/(^,)|(,$)/g,"");I=I.replace(/^\s+|\s+$/g,"")}if(!y.IsEmpty(I)){ar.push(I)}}}for(ak=0;ak<M.length;ak++){var Z=M[ak].control.GetDisplayName();aq=M[ak].control.GetFieldName();var V=HtmlEncode(G[aw][aq]);var J;var H=M[ak].control.GetUIType();var an=aw+this.m_Offset;var X=M[ak].control.GetName();X=this.GetColumnHelper().GetModifiedColumnName(X);var at="jqmtable_"+T+"_"+an+"_"+X;var au=M[ak].control.GetJustification();var K=A.call(this,M[ak].control);if(ak===0){if(av){if(M[ak].control.GetIconMap()){S=C.call(this,"DrilldownIcon",M[ak].control);if(S==="DrilldownIcon"){S=""}else{ax="siebui-attachment"}}var aj=A.call(this,M[ak].control,"Icon");if(S!==""){L="<td><div>"+q(ax,M[ak].name,aw,T,S,aj)+"</div>";aa=aa.concat(L+"<div class='ui-tr-heading ui-body-d' style='text-align:"+au+"'><span>"+HtmlEncode(G[aw][aq])+"</span></div></td>")}else{L=q(ax,M[ak].name,aw,T,S,aj);aa=aa.concat("<td class='ui-tr-heading ui-body-d' style='text-align:"+au+"'><span>"+HtmlEncode(G[aw][aq])+"</span>"+L+"</td>")}}else{if(M[ak].control.GetIconMap()){J=C.call(this,V,M[ak].control);aa=aa.concat("<td id='"+at+"' "+K+" class='jqmtable_"+H+" ui-tr-heading ui-body-d' value='"+V+"' style='text-align:"+au+"'>"+J+"</td>")}else{aa=aa.concat("<td id='"+at+"' "+K+" class='jqmtable_"+H+" ui-tr-heading ui-body-d' value='"+V+"' style='text-align:"+au+"'>"+HtmlEncode(G[aw][aq])+"</td>")}}}else{if(M[ak].control.GetIconMap()){J=C.call(this,V,M[ak].control);aa=aa.concat("<td id='"+at+"' "+K+" class='jqmtable_"+H+" ui-body-d' value='"+V+"'style='text-align:"+au+"'>"+J+"</td>")}else{aa=aa.concat("<td id='"+at+"' "+K+" class='jqmtable_"+H+" ui-body-d' value='"+V+"' style='text-align:"+au+"'>"+V+"</td>")}}}aa=aa.concat("</tr>");Y=Y.concat(aa)}if(O){for(aw=1;aw<=ad;aw++){if(ap){ak=this.m_Offset-aw}else{ak=this.m_Offset+aw+W-1}$("#"+ay+ak).addClass("removeli")}}var ah;if(ap!==null&&!ap){ah=this.m_Offset+ad;ah=ay+ah;$(Y).insertBefore("#"+ah)}else{ab.append(Y).trigger("create")}if(O){ab.find(".removeli").remove();this.SetNewscrollpos(ap,ad);O=false}var E=100/M.length;$(".ui-table td").css("width",E+"%");for(aw=ai;aw<F;aw++){for(ak=0;ak<M.length;ak++){this.PostUITablePrep(aw+this.m_Offset,M[ak].control,HtmlEncode(G[aw][M[ak].control.GetFieldName()]))}}var al=this.GetDelControl();if(al!==undefined){var R=$("#jqmtable_"+T+" tr");if(R.length>0){$("#jqmtable_"+T+" tr").swipeDelete({btnLabel:al.GetDisplayName(),click:function(aA){aA.preventDefault();setTimeout(function(){var aF=al;var aE=aF.GetMethodPropSet();var aC=aE.Clone();var aD={};aD.async=false;aD.mask=true;aD.target=SiebelApp.S_App.GetTargetViewContainer();aD.cb=function(){var aH=Array.prototype.slice.call(arguments);if(aH[aH.length-1]===false){SiebelApp.S_App.uiStatus.Free()}};Q.OnControlEvent(r.get("PHYEVENT_INVOKE_CONTROL"),al.GetMethodName(),aC,aD);var aG="jqmtable_"+Q.Get("GetPlaceholder");var aB="#"+aG;$(aB+" .aSwipeBtn").remove()},0);return false}})}}this.CheckScrollboundries();this.SetMapLocationArray(ar);if((this.GetPM().Get("IsPopup"))&&this.adjustPopup!==undefined){this.ReSizePopup()}T=null};a.prototype.PostUITablePrep=function(G,K,H){var E=K.GetUIType();var L=K.GetName();var M=this.GetPM().Get("GetPlaceholder");L=this.GetColumnHelper().GetModifiedColumnName(L);var R="jqmtable_"+M+"_"+G+"_"+L;var F=A.call(this,K);switch(E){case o:var J="<select class='jqmtable_CheckBox_slide' "+F+" name="+R+" id='"+R+"' data-role='slider'><option value='N'>"+B+"</option><option value='Y'>"+j+"</option></select>";$("#"+R).html(J).trigger("create");var N=C.call(this,"Y",K);var Q=C.call(this,"N",K);if(N!==""&&Q!==""){var O=$("#"+R).parent();var I=$(O).find("span.ui-slider-label:first");var P=I.html()===j?N:Q;I.empty().append(P);I=$(O).find("span.ui-slider-label:last");P=I.html()===B?Q:N;I.empty().append(P)}$("#"+R+".jqmtable_CheckBox_slide").val(H);$("#"+R+".jqmtable_CheckBox_slide").slider("disable");$("#"+R+".jqmtable_CheckBox_slide").slider("refresh");
break}};a.prototype.GetOffset=function(I,H){I=I+this.m_Offset;H=H+this.m_Offset;var G=this.GetPM();var K=G.Get("GetPlaceholder");var F="jqml_"+K+"_";var E=F+I;var L=F+H;var J=$("#"+L).offset().top-$("#"+E).offset().top;return J};a.prototype.GetListHeight=function(){return $(".ui-scrollview-view").height()};a.prototype.EndLife=function(){this.SetMapLocationArray(null);$("#"+this.GetPM().Get("GetPlaceholder")).undelegate("a.listdrilldown","click");$("#jqmtable_"+this.GetPM().Get("GetPlaceholder")).undelegate("tr","click");$("#jqmtable_"+this.GetPM().Get("GetPlaceholder")).undelegate("tr","swiperight");this.GetSearchCtrl().SetContainer(null);SiebelAppFacade.JQMGridRenderer.superclass.EndLife.call(this)};a.prototype.BindEvents=function(E){SiebelAppFacade.JQMGridRenderer.superclass.BindEvents.call(this,E);$("#"+this.GetPM().Get("GetPlaceholder")).delegate("a.listdrilldown","click",{ctx:this},function(M){SiebelApp.S_App.uiStatus.Busy({target:SiebelApp.S_App.GetTargetViewContainer(),mask:true});var V=M.data.ctx;var N=V.GetPM();var R=N.Get("GetPlaceholder");var Q="listcol_"+R+"_";var P=$(this).attr("name");var U=$(this).attr("id");P=V.GetColumnHelper().GetModifiedColumnName(P);var T=V.GetSelectedControl(U);var O=V.GetColumnControl(P);var L=O.GetName();var S=parseInt(U.replace(Q,""),10);S=S-V.m_Offset;setTimeout(function(){if(S>=0){V.SetDisableToggle(true);var W=V.OnRowSelect(S);V.SetDisableToggle(false);if(W===false||V.GetPM().OnControlEvent(r.get("PHYEVENT_DRILLDOWN_LIST"),L,S)===false){SiebelApp.S_App.uiStatus.Free();return false}}},0)});var G=this.GetPM();var K=G.Get("GetPlaceholder");var F="jqml_"+K+"_";$("#jqmtable_"+K).delegate(".jqmtable_label","click",{ctx:this},k);$("#jqmtable_"+K).delegate(".jqmtable_JText","click",{ctx:this},this.OnFocusInput);$("#jqmtable_"+K).delegate(".jqmtable_JText","blur",{ctx:this},this.OnBlurInput);$("#jqmtable_"+K).delegate(".jqmtable_Pick","click",{ctx:this},this.OnFocusInput);$("#jqmtable_"+K).delegate(".jqmtable_Pick","blur",{ctx:this},this.OnBlurInput);$("#jqmtable_"+K).delegate(".jqmtable_CheckBox_slide","slidestart",{ctx:this},this.OnFocusInput);$("#jqmtable_"+K).delegate(".jqmtable_CheckBox_slide","slidestop",{ctx:this},this.OnBlurInput);$("#jqmtable_"+K).delegate(".jqmtable_JDateTimeZonePick","click",{ctx:this},this.OnFocusInput);$("#jqmtable_"+K).delegate(".jqmtable_JDateTimeZonePick","blur",{ctx:this},this.OnBlurInput);$("#jqmtable_"+K).delegate(".jqmtable_JDateTimePick","click",{ctx:this},this.OnFocusInput);$("#jqmtable_"+K).delegate(".jqmtable_JDateTimePick","blur",{ctx:this},this.OnBlurInput);$("#jqmtable_"+K).delegate(".jqmtable_JDatePick","click",{ctx:this},this.OnFocusInput);$("#jqmtable_"+K).delegate(".jqmtable_JDatePick","blur",{ctx:this},this.OnBlurInput);$("#jqmtable_"+K).delegate(".jqmtable_Mailto","click",{ctx:this},this.OnFocusInput);$("#jqmtable_"+K).delegate(".jqmtable_Mailto","blur",{ctx:this},this.OnBlurInput);$("#jqmtable_"+K).delegate(".jqmtable_URL","click",{ctx:this},this.OnFocusInput);$("#jqmtable_"+K).delegate(".jqmtable_URL","blur",{ctx:this},this.OnBlurInput);$("#jqmtable_"+K).delegate(".jqmtable_JComboBox","click",{ctx:this},this.OnFocusInput);$("#jqmtable_"+K).delegate(".jqmtable_JCalculator","click",{ctx:this},this.OnFocusInput);$("#jqmtable_"+K).delegate(".jqmtable_JCalculator","blur",{ctx:this},this.OnBlurInput);$("#jqmtable_"+K).delegate(".jqmtable_JCurrencyCalc","click",{ctx:this},this.OnFocusInput);$("#jqmtable_"+K).delegate(".jqmtable_JCurrencyCalc","blur",{ctx:this},this.OnBlurInput);$("#jqmtable_"+K).delegate(".jqmtable_JPassword","click",{ctx:this},this.OnFocusInput);$("#jqmtable_"+K).delegate(".jqmlist_JPassword","blur",{ctx:this},this.OnBlurInput);$("#jqmtable_"+K).delegate(".jqmtable_JTextArea","click",{ctx:this},this.OnFocusInput);$("#jqmtable_"+K).delegate(".jqmtable_JTextArea","blur",{ctx:this},this.OnBlurInput);$("#jqmtable_"+K).delegate("tr","click",{ctx:this},function(N){var L=N.data.ctx;if(L.m_IsSwipeRight){L.m_IsSwipeRight=false;N.preventDefault();N.stopPropagation();return}$(".aSwipeBtn").remove();var M=$(this).attr("id");M=parseInt(M.replace(F,""),10);M=M-N.data.ctx.m_Offset;var P=L.GetCurRowSel();if(P!==M){N.preventDefault();N.stopPropagation()}var O=N.target.className;if(O.indexOf("listdrilldown")!==-1){L.SetDisableToggle(true)}L.OnRowSelect(M);if(O.indexOf("listdrilldown")!==-1){L.SetDisableToggle(false)}});$("#jqmtable_"+K).delegate("tr","swiperight",{ctx:this},function(N){N.preventDefault();var L=N.data.ctx;var M=$(this).attr("id");M=parseInt(M.replace(F,""),10);M=M-N.data.ctx.m_Offset;L.SetDisableToggle(true);L.OnRowSelect(M);L.SetDisableToggle(false);if(L.GetDelBtnStatus()===false){$(this).find(".aSwipeBtn").addClass("ui-disabled")}L.m_IsSwipeRight=true});$("body").bind("tap",{ctx:this},function(M){$(".aSwipeBtn").remove();var L=M.data.ctx;L.m_IsSwipeRight=false});var I=this.GetMapControl();if(I!==undefined&&I!==null){if(I.GetMethodName()==="ShowMapLocations"&&typeof(google)!=="undefined"){var J=this.GetMapCtrl();var H=[];$("#"+(I.GetInputName()+"_Ctrl")).bind("click",{ctx:this,ctrl:I},function(L){var M=new SiebelApp.UIStatus();M.Busy({});setTimeout(function(){H=L.data.ctx.GetMapLocationArray();J.ShowMapLocations(H);M.Free()},0);return false})}}K=null};a.prototype.GetSelectedRow=function(F){var H=this.GetPM().Get("GetPlaceholder");var E="jqmtable_"+H+"_";F=F.replace(E,"");var I=F;var G=F.indexOf("_");if(G>=0){I=F.slice(0,G)}I=parseInt(I,10);I=I-this.m_Offset;H=null;return I};function s(E){$(this).attr("value",E)}a.prototype.resetCell=function(E){return true};a.prototype.GetColumnControl=function(E){return this.GetColumnHelper().GetColumnControl(E)};a.prototype.ShowSelection=function(){if(this.inProgress){return false}this.ClearSelection();var E=this.GetRowCount();var G=this.GetPM().Get("GetRowsSelectedArray");for(var F=0;F<E&&F<G.length;F++){if(G[F]){this.setSelection(F,false)}}SiebelAppFacade.JQMGridRenderer.superclass.ShowSelection.call(this)};a.prototype.ClearData=function(){var F="jqmtable_"+this.GetPM().Get("GetPlaceholder");var E="#"+F;$(E).find("tr").remove()};a.prototype.setSelection=function(G){var I="jqml_"+this.GetPM().Get("GetPlaceholder")+"_";var H=this.m_Offset+G;H=parseInt(H,10);var F=I+H;var E="#"+F;$(E).addClass("hilight");this.SetCurRowSel(G)};a.prototype.OnRowSelect=function(G){var J=false;var I=this.GetPopupType();if(I==="Assoc"){var H=this.GetPM().Get("GetRowsSelectedArray");var F=0;for(var E=0;E<H.length;E++){if(H[E]){J=true;break}}}if(I==="Assoc"||parseInt(G,10)!==this.GetCurRowSel()){SiebelApp.S_App.uiStatus.Busy({});if(this.GetPM().OnControlEvent(r.get("PHYEVENT_SELECT_ROW"),G,J)===false){SiebelApp.S_App.uiStatus.Free();return false}SiebelApp.S_App.uiStatus.Free()}return true};a.prototype.ClearSelection=function(){var G=this.GetCurRowSel();var K="jqml_"+this.GetPM().Get("GetPlaceholder")+"_";var J=this.m_Offset+G;J=parseInt(J,10);var F=K+J;var E="#"+F;var I="jqmtable_"+this.GetPM().Get("GetPlaceholder");var H=$("#"+I).find(".hilight");H.removeClass("hilight");
$(E).find(".jqmtable_CheckBox_slide").slider("disable");$(E+" .aSwipeBtn").remove()};a.prototype.ShowUIControl=function(H,G,J){SiebelAppFacade.JQMGridRenderer.superclass.ShowUIControl.call(this,H,G,J);var K=H.GetUIType();var F;var I;var E=H.GetInputName();if(K===w){F=H.GetMethodName();if(F==="DeleteRecord"){I=this.GetPM().ExecuteMethod("CanInvokeMethod",F);this.SetDelControl(H);this.SetDelBtnStatus(I);$("#"+E).hide()}if(F==="ShowMapLocations"){this.SetMapControl(H)}}};a.prototype.EnableControl=function(J,H){SiebelAppFacade.JQMGridRenderer.superclass.EnableControl.call(this,J,H);if(typeof(J.GetInputName)==="function"){if(J.GetUIType()===w){if(J.GetMethodName()==="DeleteRecord"){this.SetDelBtnStatus(H)}if(J.GetMethodName()==="ShowMapLocations"&&typeof(google)!=="undefined"){$("#"+J.GetInputName()+"_Ctrl").button("enable");$("#"+J.GetInputName()+"_Ctrl").addClass("showMapLocations")}}}if(J.GetUIType()===o){var I=J.GetName();var E=this.GetCurRowSel();var F=E+this.m_Offset;var K=this.GetPM().Get("GetPlaceholder");I=this.GetColumnHelper().GetModifiedColumnName(I);var G="jqmtable_"+K+"_"+F+"_"+I;if(H){$("#"+G+".jqmtable_CheckBox_slide").slider("enable")}else{$("#"+G+".jqmtable_CheckBox_slide").slider("disable")}$("#"+G+".jqmtable_CheckBox_slide").slider("refresh")}};a.prototype.SetCellEdit=function(E){};a.prototype.SetCellValue=function(J,P,H){var K=this.GetPM();var O=K.Get("GetPlaceholder");var N=this.GetCurRowSel();var F=N+this.m_Offset;var M=this.GetColumnHelper().GetModifiedColumnName(P);var Q="jqmtable_"+O+"_"+F+"_"+M;var L=this.GetColumnControl(M);var G=$("#"+Q);if(G.length!==0){var E=L.GetUIType();G.attr("value",H);if((K.Get("IsPopup"))&&this.processEnter){this.setCellValCalled=true}switch(E){case m:case b:case p:case x:case g:case f:case d:case e:case t:case z:G.html(H);break;case c:var I=G.find("input").length;if(I!==0&&!y.IsEmpty(H)){G.find("input").val(H);G.find("input").focus()}else{G.html(H)}break;case o:$("#"+Q+".jqmtable_CheckBox_slide").val(H);$("#"+Q+".jqmtable_CheckBox_slide").slider("refresh");break}}};a.prototype.GetPhysicalControlValue=function(I){SiebelAppFacade.JQMGridRenderer.superclass.GetPhysicalControlValue.call(this,I);var L,F;var H=this.GetPM();var K=H.Get("GetPlaceholder");var M=H.Get("GetSelection");M=M+this.m_Offset;if(I){var J=this.GetColumnHelper().GetModifiedColumnName(I.GetName());var N="jqmtable_"+K+"_"+M+"_"+J;L=$("#"+N);if(L.length>0){var G;F="";var E=I.GetUIType();switch(E){case m:case x:case g:case f:case b:case i:case p:G=$("#"+N).find("input");if(H.Get("IsPopup")){this.processEnter=true}break;case v:G=$("#"+N).find("textarea");if(H.Get("IsPopup")){this.processEnter=true}break}if(G!==undefined&&G.length!==0){F=G.val()||""}else{F=L.attr("value")||""}switch(E){case d:case e:case t:F=y.toISOFormat(this.ConvertToDispTimeAMPM(y.Trim(F)),(I.GetUIType()!==d))||F;break}H.AddProperty("PhysicalCtrlVal",F)}}};a.prototype.fixWidth=function(G){SiebelAppFacade.JQMGridRenderer.superclass.fixWidth.call(this,G);if(this.IsPopup()){var H=this.GetPM().Get("GetPlaceholder");var F="jqmtable_"+H;var E=$("#"+F);if(E!==undefined){E.attr("style","max-width:"+G+" !important")}}};function A(H,G){var E="";var F=H;if((F!==undefined)){if(!y.IsEmpty(G)){G="_"+G}else{G=""}if(typeof(F.GetObjectType)==="function"){E=E+'ot="'+F.GetObjectType()+G+'"'}if(typeof(F.GetRepstrName)==="function"){E=E+' rn="'+F.GetRepstrName()+G+'"'}if(typeof(F.GetUIName)==="function"){E=E+' un="'+F.GetUIName()+G+'" '}}return E}return a}());return"SiebelAppFacade.JQMGridRenderer"});SiebelAppFacade.TableColumnHelper=function(){var b={};var a={};var c={};this.GetColMap=function(){return b};this.GetColControl=function(){return a};this.GetColField=function(){return c}};SiebelAppFacade.TableColumnHelper.prototype={AddColumn:function(c,b){var a=null;if(typeof(c)==="string"){a=c.replace(/ /g,"_");a=a.replace(/\//g,"_");a=a.replace(/#/g,"_");this.GetColMap()[a]=c;this.GetColControl()[a]=b;this.GetColField()[b.GetFieldName()]=c}return a},GetActualControlName:function(a){return this.GetColMap()[a]},GetActualColumnName:function(a){return this.GetColControl()[a].GetDisplayName()},GetModifiedColumnName:function(b){var a=null;if(typeof(b)==="string"){a=b.replace(/ /g,"_");a=a.replace(/\//g,"_");a=a.replace(/#/g,"_")}return a},GetColumnControl:function(a){return this.GetColControl()[a]},GetColumnOfField:function(a){return this.GetColField()[a]},TranslateObject:function(c,f){var d={};var b=null;for(var a=0;a<c.length;a++){var e=c[a].control.GetFieldName();b=c[a].name;if(!SiebelApp.Utils.IsEmpty(b)){d[b.replace(/ /g,"_").replace(/\//g,"_").replace(/#/g,"_")]=f[e]}}if(f.Id){d.Id=f.Id}return d}}};