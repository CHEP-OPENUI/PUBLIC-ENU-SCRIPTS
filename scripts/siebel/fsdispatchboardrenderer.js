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
if(typeof(SiebelAppFacade.fsDispatchBoardRenderer)==="undefined"){SiebelJS.Namespace("SiebelAppFacade.fsDispatchBoardRenderer");define("siebel/fsdispatchboardrenderer",["siebel/ganttrenderer"],function(){SiebelAppFacade.fsDispatchBoardRenderer=(function(){var q=SiebelJS.Dependency("SiebelApp.Constants"),c=q.get("SWE_GANTT_ACTIVITY_LABEL"),s=q.get("SWE_GANTT_ACTIVITY_EARLIEST_LATEST_VIOLATION"),t=q.get("SWE_GANTT_LOAD_ACTIVITY_INTO_ABS"),d=q.get("SWE_GANTT_SERVICE_REGION_ID"),e=q.get("SWE_GANTT_DRILLDOWN_CLS"),k=q.get("SWE_GANTT_RENDER_INFO"),w=q.get("SWE_GANTT_ACTIVITY_NO_DAYS_IN_WEEK"),f=q.get("SWE_GANTT_ACTIVITY_WEEK_DAY_START"),j,n=q.get("SWE_GANTT_TIME_SCALE"),o=q.get("SWE_GANTT_STARTMILLIS"),m=$("#Show_Less_Label").html(),g=$("#Show_More_Label").html();function a(){SiebelAppFacade.fsDispatchBoardRenderer.superclass.constructor.apply(this,arguments)}SiebelJS.Extend(a,SiebelAppFacade.GanttRenderer);a.prototype.ShowUI=function(){var x=this.GetPM(),y=this.GetPM().Get(k);y.AppName=SiebelApp.S_App.GetName();l.call(this);h.call(this);SiebelAppFacade.fsDispatchBoardRenderer.superclass.ShowUI.call(this);if($("#s_at_m_1")!="undefined"&&$("#s_at_m_1").parent()!="undefined"&&$("#s_at_m_1").parent().parent()!="undefined"&&$("#s_at_m_1").parent().parent().parent()!="undefined"&&$("#s_at_m_1").parent().parent().parent().prop("tagName").toLowerCase()==="td"){$("#s_at_m_1").parent().parent().parent().attr("class","AppletMenu")}};a.prototype.BindEvents=function(){SiebelAppFacade.fsDispatchBoardRenderer.superclass.BindEvents.call(this);j=this;var D=this,z=D.GetPM(),F,y,G,E,A,B,x,C=0;$("#s_"+z.Get("GetFullId")+"_div").on("mouseup",(".siebui-splitBox3"),{ctx:this},v).on("mousedown",(".siebui-taskBox.Dragpble"),{ctx:this},p);F=z.Get("GetControls");y=F["Time Scale"];if(y){G=y.GetInputName();$("#s_"+z.Get("GetFullId")+"_div").find("[Name="+G+"]").bind("autocompleteclose",{ctx:this},function(H){C=0;C=C|(1<<1);C=C|(1<<3);C=C|(1<<4);z.SetProperty("PanesToRefresh",C);z.ExecuteMethod("InvokeServer");$("#s_"+z.Get("GetFullId")+"_div").find("#ganttdatePicker").removeClass("siebui-dateInput").addClass("siebui-dateRange").val(z.ExecuteMethod("getDateRange",""))})}$("#db_resize").bind("click",{ctx:this},function(I){if($("#db_resize").hasClass("siebui-showmore")){$("#db_resize").html("");var J='<a href="javascript:void()"><img src="images/btn_less.gif" border="0" space="0" hspace="0" alt="'+m+'"title="'+m+'"></a>';$("#db_resize").append(J);$("#db_resize").attr("class","siebui-link-icon-e siebui-fs-db-common siebui-showless");var H=j.getGanttCtrlHeight();j.setGanttCtrlHeight(parseInt((H*2),10));u()}else{if($("#db_resize").hasClass("siebui-showless")){$("#db_resize").html("");var J='<a href="javascript:void()"><img src="images/btn_more.gif" border="0" space="0" hspace="0" alt="'+g+'"title="'+g+'"></a>';$("#db_resize").append(J);$("#db_resize").attr("class","siebui-link-icon-e siebui-fs-db-common siebui-showmore");var H=j.getGanttCtrlHeight();j.setGanttCtrlHeight(parseInt((H/2),10));u()}}})};function h(){$("#db_resize").html("");var x='<a href="javascript:void()"><img src="images/btn_more.gif" border="0" space="0" hspace="0" alt="'+g+'"title="'+g+'"></a>';$("#db_resize").append(x);$("#db_resize").attr("class","siebui-link-icon-e siebui-fs-db-common siebui-showmore")}function u(){var y=j.GetPM(),z,x=j.getGanttCtrlHeight();z=$("#"+j.GetCustCtrlName()).addClass("siebui-ganttControl");z.css({height:parseInt(x,10)})}function l(){var B=this,y=B.GetPM(),F=$(window).height(),E=$("#_sweappmenu").height(),x=$(".siebui-button-toolbar").height(),z=$("#_swethreadbar").height(),C=$("#_swescrnbar").height(),A=60,D;if(y.Get("DefaultNavCtrl")==="Tree"){C=0}D=F-(E+x+z+C+A);B.setGanttCtrlHeight(parseInt((D/2),10))}a.prototype.BindData=function(){SiebelAppFacade.fsDispatchBoardRenderer.superclass.BindData.call(this);var x=this.GetPM().Get("Schedulerecordset");if(x.length>0){b.call(this,x)}};a.prototype.SetHScrollPos=function(){var A=this.GetPM();if((A.Get(n)=="4")||(A.Get(n)=="512")||(A.Get(n)=="1024")||(A.Get(n)=="2048")||(A.Get(n)=="4096")||(A.Get(n)=="1")||(A.Get(n)=="64")){if(A.Get("EndTime")){var y=new Date(A.Get("StartDate")),C=String(A.Get("StartTime")),x=new Date(A.Get("paddingMiddleDayMillis")),z=A.Get("DayLoc"),B=0;A.ExecuteMethod("setHoursFrom",y,C);B=z[(x).format("MM/dd/yyyy")];B=B*A.Get("MinGanttsize");$(".siebui-splitBox3").scrollLeft(B)}else{SiebelAppFacade.fsDispatchBoardRenderer.superclass.SetHScrollPos.call(this)}}else{SiebelAppFacade.fsDispatchBoardRenderer.superclass.SetHScrollPos.call(this)}};function p(z){var y=z.data.ctx,x=y.GetPM();$(this).draggable({containment:$("#s_"+x.Get("GetFullId")+"_div").find("#UGrid"),zIndex:9999,drag:function(A,B){},start:function(E,F){var B=$(this).closest("div.siebui-gdfRow").attr("taskid"),A=$(this).closest("div.siebui-gdfRow").attr("Id"),C=$(this).attr("taskid"),D=0;console.log("In Drag");$(this).draggable("option","sResId",B);$(this).draggable("option","resindex",A);$(this).draggable("option","dragType",D);x.SetProperty("InEvent",true);console.log(B,A,C)}})}a.prototype.calcNonContiguousTime=function(B){var z=this.GetPM();if((z.Get(n)=="1")||(z.Get(n)=="64")||(z.Get(n)=="4")||(z.Get(n)=="512")||(z.Get(n)=="1024")||(z.Get(n)=="2048")||(z.Get(n)=="4096")){var A=z.Get("PixelsPerUnit"),D=z.Get("TDays"),E=z.Get("StartTime"),C=z.Get("EndTime"),x=0;var y=new Date(z.Get(o));var F=z.Get("FinalWeekDays");pixels=A*$("#UGrid").width();if(pixels){noOfUnits=parseInt(B/pixels)}for(i=0;i<noOfUnits;){if(F.indexOf(y.getDay())!==-1){i++}x++;y.setDate(y.getDate()+1)}while(F.indexOf(y.getDay())==-1){x++;y.setDate(y.getDate()+1)}timePixels=B%pixels;startDay=z.Get(o)+x*D;if(pixels){startTime=parseInt(z.Get("StartTime")+timePixels/pixels*z.Get("AxisDuration"),10)}startDay=startDay+startTime;return parseInt(startDay,10)}else{return(SiebelAppFacade.fsDispatchBoardRenderer.superclass.calcNonContiguousTime.call(this,B))}};function v(z){var y=z.data.ctx,x=y.GetPM();$("#s_"+x.Get("GetFullId")+"_div").find(".siebui-taskEditUtility").droppable({drop:function(R,P){var E=null,G=$(this).attr("taskId"),B=P.draggable.attr("taskId"),N=$(this).scrollLeft()+R.clientX-$(this).offset().left,J,Q,I,S,U,H,C,D,M=0,L,A,T,O;A=x.Get(s);T=x.Get(t);O=x.Get(d);L=$(P.draggable).draggable("option","dragType");if(L===0){if(x.Get("EndTime")){E=new Date(y.calcNonContiguousTime(P.position.left))}else{E=new Date(Math.round((P.position.left/x.Get("fx"))+x.Get("startMillis")))}}else{if(x.Get("EndTime")){E=new Date(y.calcNonContiguousTime(N))}else{J=Math.round((N/x.Get("fx"))+x.Get("startMillis"));E=new Date(J)}}Q=(parseInt(((E.getMinutes()+7.5)/15),10)*15);E=new Date(E.setMinutes(Q,0));I=E.format("MM/dd/yyyy");S=E.format("HH:mm:ss");U=E.format("MM/dd/yyyy HH:mm:ss");H=SiebelApp.S_App.NewPropertySet();x.SetProperty("InEvent",true);if(L===0){console.log("Within Gantt");B=P.draggable.attr("taskId"),C=$(P.draggable).draggable("option","sResId");H.SetProperty("DropSrcApplet","FS Dispatch Board Gantt Applet")}else{console.log("Applet to Gantt Drag");
var F=P.draggable.attr("id");var K=P.draggable.parent().parent().jqGrid("getRowData",F);H.SetProperty("DropSrcApplet","FS DB Unplanned Activity List Ax Applet");B=K.Activity_UID;C=""}H.SetProperty("DropSrcYId",C);H.SetProperty("DropObjId",B);H.SetProperty("DropTrgtYId",G);H.SetProperty("Start Date",I);H.SetProperty("Start Time",S);H.SetProperty("DropTime",U);H.SetProperty("EnableEarlyLatestStartViolation",A);H.SetProperty("LoadActivityIntoABS",T);H.SetProperty("Gantt Chart Service Region Id",O);H.SetProperty("operation","DragnDrop");M=0;M=M|(1<<1);M=M|(1<<2);M=M|(1<<4);H.SetProperty("PanesToRefresh",M);x.SetProperty("PanesToRefresh",M);console.log("New ",E,B,C,G);x.ExecuteMethod("InvokeOperation",H);if($("body").attr("style")!="undefined"&&$("body").attr("style")==="cursor: crosshair;"){$("body").attr("style","cursor: auto;")}}})}function r(z,A){var y=z.getMinutes(),x;x=(parseInt(((y+A/2)/A),10)*A);z=new Date(z.setMinutes(x,0));return z}a.prototype.preparerowtasks=function(U,F){var S="";var T=this.GetPM(),X=T.Get("Color Display By"),N=T.Get("Status Abbreviations"),y=T.Get("Booking Colors"),W,P,B,Q,O,C,E,J,Y,K,R,G,M,A,z,D,I;if(N){W=N.substring(N.indexOf(X)+X.length+1,N.indexOf(";",N.indexOf(X)))}if(U){for(R in U){if(U.hasOwnProperty(R)){P=U[R][W];B=W+"_"+P;E="BGRCLR_"+U[R]["BGRCLR"];J="BDRCLR_"+U[R]["BDRCLR"];Y="TXTCLR_"+U[R]["LBL"];Q=y[B];Q=y[E];O=y[J];C=y[Y];if(!Q){Q=T.Get("EventDefaultColor")}M=U[R]["width"];if(typeof(M)==="undefined"||M==0){continue}A="";z=U[R]["OLPCNT"];if(typeof(O)!="undefined"&&typeof(z)==="undefined"){A="border-color:#"+O+";border-width:2px;"}G=U[R][c];if(!C||!G){C=""}if(!G){G=""}D=U[R]["DDID"];if(!D){D="";I=""}else{I=e}S=S+'<div class="siebui-taskBox '+U[R]["CLS"]+'" taskId="'+U[R]["ID"]+'" id= "'+F.toString()+'" style="width:'+U[R]["width"]+"%;height:"+U[R]["height"]+"px;left:"+U[R]["left"]+"%;margin-top:"+U[R]["top"]+"px;"+A+'"><div class="siebui-layout" style="background-color:#'+Q+';"><div class="taskStatus" status="'+U[R]["GS"]+'"><a class="'+I+'" data-drilldown-type= "UGrid" data-drilldown-id="'+D+'" style="color:#'+C+';">'+G+"</a></div></div>";if(U[R]["ACTTT"]!=""&&y.ACTTT_TTD==="Y"){var V=new Date(U[R]["ST"]);var L=new Date(U[R]["ET"]);var x=U[R]["top"]-U[R]["height"]+4;var H=(U[R]["ACTTT"]*6000000)/(L-V);S=S+'<div class="siebui-layout" style="width:'+H+"%;margin-top:"+x+"px;background-color:#"+y.ACTTT_HPC+';"/>'}S=S+"</div>"}}}return S};function b(D){var C="";if(D){for(var z in D){C="";var B="";var A="";for(var y in D[z].EVENTS){var x=""+(parseInt(D[z].EVENTS[y]["height"])-1);C='<div class="siebui-taskBox '+D[z].EVENTS[y]["BCLS"]+'" id="'+D[z].EVENTS[y]["ID"]+'" style="width:'+D[z].EVENTS[y]["width"]+"%;height:"+x+"px;left:"+D[z].EVENTS[y]["left"]+"%;margin-top:"+D[z].EVENTS[y]["top"]+'px;"/>';B=D[z].EVENTS[y]["Zyid"];A='div[taskid="'+B+'"]';$(A).children(".siebui-eventContainer").append(C);$("#"+D[z].EVENTS[y]["ID"]).bind("click",{ctx:this},function(E){$(this).parent().click()})}}}}return a}());return"SiebelAppFacade.fsDispatchBoardRenderer"})};