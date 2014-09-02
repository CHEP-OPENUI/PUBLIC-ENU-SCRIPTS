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
if(typeof(SiebelApp.OfflineAppMgr)==="undefined"){SiebelJS.Namespace("SiebelApp.OfflineAppMgr");SiebelApp.OfflineAppMgr=(function(){var a=new c();var u=SiebelApp.Offlineconstants;var s=SiebelJS.Dependency("SiebelApp.Constants");var A=SiebelJS.Dependency("SiebelApp.Utils");var y=u.get("IS_DYNAMIC");var w=u.get("CUD_RESPONSE");var B=u.get("SHOW_POPUP");var x=u.get("SWEMETHOD");var h=u.get("BUILDSCREEN_BS_DRILLDOWN");var m=u.get("BUILDSCREEN_BS_DRILLDOWNBYFIELD");var d=u.get("BUILDSCREEN_BS_ALTERNATE");var g=u.get("BUILDSCREEN_BS_NORMAL");var r=u.get("BUILDSCREEN_BS_DRILLDOWNCUSTOM");var i=u.get("LOG_EVT_CLIENT_SYS");var f=true;var k={Method:null,Action:null,Type:null};var p={context:"",type:"",objname:""};var F=[];var C="";var l="";var b=[];var o={};var n=SiebelApp.OfflineUtils;function c(){var O;var L=[];var H={BC:[],prevBC:[],RowId:""};var J=window.localStorage;var M;var N={};var K=[];var G=false;if(!(JSON.parse(J.getItem("CacheType")))){J.setItem("CacheType",JSON.stringify("Reactive"))}this.SetCacheType=function(P){J.setItem("CacheType",JSON.stringify(P))};this.GetCacheType=function(){return(JSON.parse(J.getItem("CacheType")))};this.CallPendingOp=function(){N.asyncFn.apply(N.scope,N.args)};this.HasPendingOp=function(){return G};this.SetPendingOp=function(S,Q,P,R){if(S){N.asyncFn=Q;N.args=P;N.scope=R}else{N={}}G=S};this.SetStatus=function(P){l=P};this.GetStatus=function(P){return l};this.GetControlRegExpMap=function(){return o};this.SetControlRegExpMap=function(P){o=P};I=function I(){return O};this.SetCmdMap=function(){L.push({cmd:"GotoView",cmdTag:"oinf"});L.push({cmd:"GotoViewCold",cmdTag:"oinf"});L.push({cmd:"GetViewLayout",cmdTag:"gvl"});L.push({cmd:"GetAppletLayout",cmdTag:"nl"});L.push({cmd:"NewRecord",cmdTag:"nr"});L.push({cmd:"EditRecord",cmdTag:"er"});L.push({cmd:"WriteRecord",cmdTag:"wr"});L.push({cmd:"DeleteRecord",cmdTag:"dl"});L.push({cmd:"AddRecord",cmdTag:"ar"});L.push({cmd:"GetCachedFrame",cmdTag:"gcf"});L.push({cmd:"GotoPostedAction",cmdTag:"gpa"});L.push({cmd:"EditField",cmdTag:"ef"});L.push({cmd:"NewLayout",cmdTag:"nl"});L.push({cmd:"CreateRecord",cmdTag:"cr"});L.push({cmd:"ShowPopup",cmdTag:"puoinf"});J.setItem("cmdMap",JSON.stringify(L))};this.GetCmdMap=function(){if(J.getItem("cmdMap")){return(JSON.parse(J.getItem("cmdMap")))}else{this.SetCmdMap();return(JSON.parse(J.getItem("cmdMap")))}};this.GetOfflineAppContext=function(){return H};$.extend({callback:function(Q,P){var R=SiebelApp.OfflineAppMgr;var S;if(P){if(!R.CheckResolvedState()){$.when.apply($,F).done(function(T){if(!(R.CheckResolvedState())){$.callback(Q,P)}else{S=C;C={err:false};P.call(Q,S)}})}else{S=C;C={err:false};P.call(Q,S)}}else{$.setReturnValue({err:true})}},setReturnValue:function(P){C=P},eachAsyncOp:function(S,R){if(!(R instanceof Array)){if(!R){return}R=[R]}else{if(!R.length){return}}var Q=0;var P=R.length;var T=SiebelApp.OfflineAppMgr;var U=function(V){$.setReturnValue(V);if(Q<P-1){Q++;T.HandleSingleObj(S,R[Q]);$.callback(T,U)}};T.HandleSingleObj(S,R[Q]);$.callback(T,U)}});I.prototype=this;O=new I();O.constructor=I;return O}c.prototype.ClearDeferredArray=function(){F=[]};c.prototype.GetCurrentRetVal=function(){return C};c.prototype.PopulateDeferredArray=function(G){F.push(G)};c.prototype.RemoveObj=function(G){for(var H=0;H<F.length;H++){if(F[H]===G){break}}F.splice(H,1)};c.prototype.CheckResolvedState=function(){var G=F.length;for(var H=G-1;H>-1;H--){if((F[H].state()!=="resolved")){return false}}return true};c.prototype.HandleSingleObj=function(R,H){var K=R;var M=H.preExecute;var N=H.postExecute;var J=H.execute;var G=H.executeScope;var P=H.iterations;var Q;if(!P){P=1}var L=0;var O=this;if(M){Q=M.call(K,L)}else{Q=[]}var I=function(S){if(N){N.call(K,S)}if(L<P-1){L++;if(M){Q=M.call(K,L)}else{Q=[]}J.apply(G,Q);$.callback(O,I)}};J.apply(G,Q);$.callback(O,I)};c.prototype.HandleNullResponse=function(K){var I=0;var G=A.DecodeFromQueryString(K);var H=G.GetProperty(u.get("SWECMD"));if(H==="GetLastTxn"){I="IDS_DOUI_ERR_SYNC";var J=SiebelApp.S_App.OfflineLocaleObject.GetLocalString(I);SiebelApp.OfflineUtils.CcfLogEvent([u.get("LOG_EVT_ALL"),27,5,90,J]);alert(J)}else{return SiebelApp.OfflineAppMgr.HandleValidation(G)}};c.prototype.OfflineRequestHandler=function(H,I,G){this.ClearDeferredArray();if(SiebelApp.RequestProcessor.IsSupported(H,false,I)){SiebelApp.RequestProcessor.ProcessReq(H,I,G)}else{n.CcfLogEvent([i,68,5,61,H])}};c.prototype.HandleCallback=function(I,G,H){this.AddDefHandlers(I,G,H)};c.prototype.HandleValidation=function(G){SiebelApp.S_App.uiStatus.Free()};c.prototype.IsCachableRequest=function(J){var I=[".js",".htm"];if(J!=="undefined"&&J!==""){for(var H=0;H<I.length;H++){var G=I[H];if(J.indexOf(G)!==-1){return false}}return true}else{return false}};c.prototype.CacheResponse=function(J,H){if(!SiebelApp.OfflineAppSettings.GetMode()&&!SiebelApp.S_App.GetActiveView()&&SiebelApp.OfflineAppMgr.IsCachableRequest(J)&&H[0]&&H[0]!=="undefined"&&H[0]!==""&&(SiebelApp.RequestProcessor.IsSupported(J))){if(H[0].indexOf("SBL-UIF-00335")!==-1){var G=window.location.pathname;G=G.concat("?SWENeedContext=false&SWECmd=Logoff&SWEBID=-1&SRN=&SWETS=");Top().location.replace(G);return false}if(q.call(this)){var L=this.GetCacheType();var K={};if((J.search("scriptfiles.txt")!==-1)){K.SweCmd=u.get("TEXT");K.ObjName="scriptfiles";K.Response=H[0];K.Type=u.get("DEFAULT_VIEW_INFO")}else{var I=A.DecodeFromQueryString(J);K.SweCmd=SiebelApp.RequestProcessor.GetCmdTag(I.GetPropertyAsStr("SWECmd"));K.ObjName=I.GetPropertyAsStr("SWEFrame");K.Response=H[0];K.Type=u.get("DEFAULT_VIEW_INFO")}if(K.ObjName){SiebelApp.BrowserCacheMgr.CacheOnlineOp(K)}return true}}};function q(){if(SiebelApp.OfflineAppSettings.GetPkgStatus()){if(SiebelApp.S_App.GetUserName){if(SiebelApp.S_App.GetUserName()!==SiebelApp.S_App.Model.GetLoginName()){return false}}var H=window.localStorage.getItem("appURL");if(H){H=JSON.parse(H)}var G=window.location;var I=G.origin.concat(G.pathname);if(H!==I){return false}}return true}c.prototype.SetContext=function(G,H,I){p={};p.context=G;p.type=H;p.objname=I};c.prototype.GetContext=function(){return p};c.prototype.ClearContext=function(){p={}};c.prototype.InvokeMethod=function(G,H,J,I){n.CcfLogEvent([i,44,5,11,"methodName",H]);if(G.GetProperty(s.get("SWE_APPLET_STR"))){this.InvokeAppletMethod(G,H,J,I);$.callback(this,function(K){if(K.err){$.setReturnValue({err:true});return}})}else{if(G.GetProperty(s.get("SWE_SERVICE"))&&G.GetProperty(s.get("SWE_SERVICE"))!==""){this.InvokeServiceMethod(G,H,J,I);$.callback(this,function(K){if(K.err){$.setReturnValue(K);return}})}else{J.apply(this,[u.get("CUD_RESPONSE")])}}};c.prototype.ClearPostedActions=function(){k={}};c.prototype.GetPostedAction=function(){return k};c.prototype.PostActions=function(I,G,H){k={};k.Method=G;k.Action=I;k.Type=H};c.prototype.BuildViewAsync=function(G,H,I){k={};k.Method=u.get("GOTOVIEW");k.Action=u.get("ACTION_RPC_BUILD_VIEW_ASYNC");k.Type=u.get("VIEW_INFO");k.ViewName=G;k.DrilldownDef=I;k.BuildScreenType=H};c.prototype.ClearQueueMethod=function(){b=[]
};c.prototype.QueueMethod=function(J,G,K,H){var I={};I.objName=J;I.methodName=G;I.psInputArgs=K;if(H){I.methodType=H}else{I.methodType=u.get("TYPE_FRAME")}b.push(I)};function j(M){if(SiebelApp.S_App.GetTimer()){SiebelApp.S_App.GetTimer().StartTime("OfflineAppMgr.prototype.DoPostedActions")}var G=false;var K=CCFMiscUtil_CreatePropSet();switch(k.Action){case u.get("ACTION_RPC_REFRESH_VIEW"):var L=SiebelApp.S_App.GetActiveView().GetName();var H=SiebelApp.S_App.GetActiveView().GetActiveApplet();var J=SiebelApp.AjaxRequestMgr.GetActiveRequest();var N=A.DecodeFromQueryString(J.data);var I=N.GetProperty(x).toString();if(I==="UndoRecord"||I==="WriteRecord"){H.SetActiveControl(null)}if((k.Method!==u.get("GOTOVIEW"))&&(k.Method!==u.get("GOTOVIEWCOLD"))){L=L.concat("/",H.GetName())}SiebelApp.OfflineAppMgr.ShowView(M.request,k.Method,M.callback,L,k.Type,u.get("REFRESHLAYOUT"));G=true;break;case u.get("ACTION_RPC_COMPLETED"):SiebelApp.OfflineAppMgr.GetReturnPropSet(s.get("SWE_RPC_PROP_STATUS_COMPLETED"),K,M.request,M.callback);G=true;break;case u.get("ACTION_RPC_CONTINUE"):SiebelApp.OfflineAppMgr.GetReturnPropSet(s.get("SWE_RPC_PROP_STATUS_CONTINUE"),K,M.request,M.callback);G=true;break;case u.get("ACTION_RPC_CLOSE_POPUP"):SiebelApp.OfflineAppMgr.GetReturnPropSet(s.get("SWE_RPC_PROP_CLOSE_POPUP"),K,M.request,M.callback);G=true;break;case u.get("ACTION_RPC_BUILD_VIEW_ASYNC"):L=k.ViewName;SiebelApp.OfflineAppMgr.ShowView(M.request,k.Method,M.callback,L,k.Type,"",k.BuildScreenType,k.DrilldownDef);G=true;break}$.callback(this,function(O){$.setReturnValue(O);if(SiebelApp.S_App.GetTimer()){SiebelApp.S_App.GetTimer().EndTime("OfflineAppMgr.prototype.DoPostedActions")}});return G}c.prototype.ShowViewOrApplet=function(I,L){if(SiebelApp.S_App.GetTimer()){SiebelApp.S_App.GetTimer().StartTime("OfflineAppMgr.prototype.ShowViewOrApplet")}var H=this.GetContext();var K=H.objname;if(!K){var G=SiebelApp.S_App.GetActiveView().GetName();var J=SiebelApp.S_App.GetActiveView().GetActiveApplet().GetName();K=G.concat("/",J)}if(H.context===s.get("SWE_RPC_PROP_APPLET")){SiebelApp.OfflineAppMgr.ShowView(L.request,I,L.callback,K,H.type,u.get("NEWPOPUP"))}else{if(H.context===s.get("SWE_RPC_PROP_VIEW")){SiebelApp.OfflineAppMgr.ShowView(L.request,I,L.callback,K,H.type)}}SiebelApp.OfflineAppMgr.ClearContext();$.callback(this,function(M){$.setReturnValue(M);if(SiebelApp.S_App.GetTimer()){SiebelApp.S_App.GetTimer().EndTime("OfflineAppMgr.prototype.ShowViewOrApplet")}})};c.prototype.ShowView=function(H,G,O,K,M,J,P,L){if(SiebelApp.S_App.GetTimer()){SiebelApp.S_App.GetTimer().StartTime("OfflineAppMgr.prototype.ShowView")}if(!J){var I=SiebelApp.S_App.GetActiveView();if(I){var N=A.DecodeFromQueryString(H).GetPropertyAsStr("SWESP");if(A.IsTrue(N)){J=u.get("NEWPOPUP")}else{J=u.get("NEWLAYOUT")}}else{J=u.get("NEWLAYOUT")}}SiebelApp.S_App.BuildView(H,G,O,K,M);$.callback(this,function(R){var Q=CCFMiscUtil_CreatePropSet();Q.DecodeFromString(R.retVal);SiebelApp.OfflineAppMgr.GetReturnPropSet(J,Q,H,O,P,L);$.callback(this,function(S){$.setReturnValue(S);if(SiebelApp.S_App.GetTimer()){SiebelApp.S_App.GetTimer().EndTime("OfflineAppMgr.prototype.ShowView")}})})};c.prototype.GetReturnPropSet=function(aa,H,Y,M,ac,U){if(SiebelApp.S_App.GetTimer()){SiebelApp.S_App.GetTimer().StartTime("OfflineAppMgr.prototype.GetReturnPropSet")}var J=s.get("SWE_RPC_PROP_NEW_POPUP");var S=SiebelApp.S_App;var N=null;var L=[];var Q="";var R="";this.SetStatus(aa);var P;var X;H.SetPropertyStr(u.get("STATUS"),aa);var ad=s.get("SWE_PROP_SESSION_RANDOM_NUMBER");var O=window.localStorage.getItem(ad);if(O){H.SetPropertyStr(ad,O)}n.CcfLogEvent([i,73,5,62,aa]);if(aa!==u.get("REFRESHLAYOUT")&&aa!==u.get("NEWLAYOUT")&&aa!==u.get("NEWPOPUP")){H.SetPropertyStr(u.get("STATUS"),aa);var I=S.GetActiveView();if(I){I.GetNotifyPropSet(H,Y)}$.callback(this,function(ae){if(!ae.err){Q=H.EncodeAsString();L[0]=Q;M.apply(S,L);$.callback(this,function(af){$.setReturnValue(af);if(SiebelApp.S_App.GetTimer()){SiebelApp.S_App.GetTimer().EndTime("OfflineAppMgr.prototype.GetReturnPropSet")}})}else{$.setReturnValue(ae)}})}else{if(typeof Y==="string"){R=A.DecodeFromQueryString(Y)}P=A.IsEmpty(U)?"":U.viewname;var T=S.GetActiveView();var Z=A.IsEmpty(T)?"":T.GetName();var G;var W=false;var ab=R.GetProperty(s.get("SWE_ARG_KEEP_CONTEXT"));if(ab){ab=ab.toString()}else{ab=0}if(ac===h||ac===m){if(!U){$.setReturnValue({err:true});return}if(P==="Drill Down To Same View"){P=Z}if(A.IsEmpty(P)){$.setReturnValue({err:true});return}}if(!ac){if(ab){G=d;W=true}else{G=g}}else{G=ac;W=true}var V=null;if(T){V=T.GetActiveApplet()}var K;if(V){if(G===h||G===m){K=V.GetBusComp();if(!V.GetName()||U.srcFieldName!==s.get("SWE_ROW_ID_FIELD")){}if(K.IsCommitPending()){K.WriteRecord()}}}$.callback(this,function(ao){var av=s.get("SWE_PST_APP_INFO");var aC=s.get("SWE_PST_BUSOBJ_INFO");var aE=s.get("SWE_PST_NEW_BUSOBJ");var aG=s.get("SWE_PST_VIEW_INFO");var ax=s.get("SWE_PROP_NAME");var aF=s.get("SWE_PST_NEW_VIEW");var am=H.Clone();var al=CCFMiscUtil_CreatePropSet();var af=H.GetChildCount();if(V&&(G===h||G===m)){var aH=V.GetName();if(A.IsEmpty(aH)){return}}for(var aB=0;aB<af;aB++){am.RemoveChild(0);al.AddChild(H.GetChild(aB))}var ar=s.get("SWE_RPC_PROP_RETURN_STATUS");var ay=H.GetProperty(ar);if(ay===J){if(R&&R.PropertyExists(x)){var aj=R.GetProperty(x).toString();if(aj===B){H.SetProperty("URL",H.GetProperty("URL").toString()+"&ObjName="+R.GetProperty("SWETA").toString()+"&Type="+u.get("POPUP_INFO"))}}S.GetPopupPM().SetProperty("CanProcessLayout",false);S.GetPopupPM().ExecuteMethod("ProcessNewPopup",H);N="refreshpopup";am=CCFMiscUtil_CreatePropSet()}am.SetProperty(y,true);var ag=CCFMiscUtil_CreatePropSet();var ah=CCFMiscUtil_CreatePropSet();var au=CCFMiscUtil_CreatePropSet();ag.SetType(av);ah.SetType(aG);au.SetType(aC);ag.SetProperty(y,true);ah.SetProperty(y,true);au.SetProperty(y,true);var an;var az;var ak=s.get("SWE_RPC_PROP_NOTIFICATION");var ai=null;var aw=null;var aD=S.GetActiveBusObj();var ae=null;var aq=null;var ap;if(V&&(G===h||G===m)){if(!U.busCompName){aq=V.GetName()}else{aq=U.busCompName}if(G===h&&T.GetBusObj().GetName()===ae&&aq===V.GetBusComp().GetName()){G=d}}if(G===r){G=g}else{if(G===h||G===m){W=true;if(Z===P){bKeepFrames=true}if(V!==null){if(G===m){ap=U.destFieldName;K.FieldValue(U.srcFieldName)}}}}if(aD){aw=al.GetChildByType(av);var at=aw.GetChildByType(aE);if(at){ai=at.GetChildByType(aC);var aA=aD.GetName();ae=at.GetChildByType(aC).GetProperty(ax);if(aA!==ae||!W){G=g}}else{ai=aw.GetChildByType(aC)}}else{G=g}$.callback(this,function(aM){if(aM){if(!aM.err){if(!A.IsEmpty(aM.retVal)){X=aM.retVal}}else{return}}if(ay===J&&aD){ai.SetProperty("isPopup",true);au.SetProperty("isPopup",true)}var aV;var aQ;if(G===d||G===h||G===m){var aS=ai.Clone();var aN=(aw.GetChildByType(aF)).Clone();S.ClearMainView(true,S);var aW=aw.GetChildCount();for(var aI=0;aI<aW;aI++){aV=aw.GetChild(aI);aQ=aV.GetType();if(aQ===aE||(aN&&aQ===aF)){aw.RemoveChild(aI);aI--;aW--}}aw.AddChild(aS);if(aN){aw.AddChild(aN)}}var aL=al.FindChildPosition(ak);
if(aL>=0){al.RemoveChild(aL)}var aU=s.get("SWE_HIST_OUI_UPDATE_INFO");var aT=al.GetChildByType(aU);if(aT){var aK=window.location.origin;aK=aK.concat(window.location.pathname);aT.SetProperty(s.get("SWE_HIST_NAV_URL"),HtmlEncode(aK))}var aX=["dPS",av,aG,aC];var aP=[am,ag,ah,au];SiebelApp.S_App.Model.SetDyncPS(aX,aP,4);Q=al.EncodeAsString();L.push(Q);L.push("success");n.CcfLogEvent([i,74,5,62,"Static"]);var aR=S.ProcessResponse.apply(S,L);this.PopulateDeferredArray(aR);var aO;var aJ;aR.done(function(){SiebelApp.OfflineAppMgr.RemoveObj(aR);var aY=S.GetActiveView();aY.ActivateFields();$.callback(this,function(){var aZ=U?U.visibilityType:null;SiebelApp.S_App.Model.EndSetupView(S.GetActiveBusObj(),P,aq,ap,X,aZ);$.callback(this,function(a4){if(!a4.err){var a3=false;if(window.localStorage.getItem("reload")&&JSON.parse(window.localStorage.getItem("reload"))&&window.localStorage.getItem("contextArray")){a3=true;var a0=JSON.parse(window.localStorage.getItem("contextArray"));aO=a0.length;aJ=SiebelApp.S_App.GetActiveBusObj()}if(a3){for(var a1=0;a1<aO;a1++){var a2=aJ.GetBusCompX(a0[a1].bc,true);if(!A.IsEmpty(a0[a1].ss)){a2.SetSearchSpec(a0[a1].ss)}if(a0[a1].sc>0){a2.SetScrollCount(a0[a1].sc);var a5=a2.GetCursor();a5[0]=a0[a1].sc;a2.SetCursor(a5)}}}aY.Populate();$.callback(this,function(a8){if(a3){var a7=0;var a6=function(){};a6=function(){var ba=aJ.GetBusCompX(a0[a7].bc,true);if(ba){if(a0[a7].Id){ba.PositionById(a0[a7].Id)}else{var a9=(ba.GetWS().size)?ba.GetWS()[0]:undefined;if(a9&&a9.Id){ba.PositionById(a9.Id)}}}$.callback(this,function(bb){if(!bb.err){a7++;if(a7<aO){a6.call(this)}}})};if(a7<aO){a6.call(this)}}$.callback(this,function(bc){window.localStorage.setItem("reload",false);if(!bc.err){var bd,a9,bb;a9=aY.GetAppletMap();var ba=null;while(b.length>0){bd=b.shift();if(bd.methodType===u.get("TYPE_BUSCOMP")){for(ba in a9){if(a9[ba].GetBusComp().GetName()===bd.objName){bb=a9[ba];break}}}else{if(bd.methodType===u.get("TYPE_FRAME")){for(ba in a9){if(a9[ba].GetName()===bd.objName){bb=a9[ba];break}}}}}if(bb){if(bd.methodName){bb.InvokeMethodX(bd.methodName,bd.psInputArgs)}}$.callback(this,function(bk){if(!bk.err){var bn=S.GetActiveBusObj();var bg=SiebelApp.S_App.Model.GetDyncPS("",true);var bh=bg.dPS;var be=bg.vi;if(!aT.GetProperty(s.get("SWE_HIST_REPLACE"))){window.localStorage.setItem("view",aY.GetName());var bp=[];var bj="";for(app in a9){var bf=a9[app];var bm=bf.GetBusComp();if(!bm){continue}var bo=bm.GetName();if((bj.indexOf(bo)===-1)&&!(bm.IsCommitPending())&&!((typeof(bf.GetAssocAppletName)!=="undefined")||(typeof(bf.GetPickAppletName)!=="undefined"))){var bl={};bj=bj.concat(bo);bl.bc=bo;bl.ss=bm.GetSearchSpec();bl.sc=bm.GetScrollCount();if(bm.CheckActiveRow()&&bm.GetWS()[bm.GetActiveRow()]){bl.Id=bm.GetWS()[bm.GetActiveRow()].Id}bp.push(bl)}}var bi=[];bi=SiebelApp.OfflineAppMgr.SortBCOrder(bp,bi);window.localStorage.setItem("contextArray",JSON.stringify(bi))}aY.InterpolateDyncUIPS(be);$.callback(this,function(){var bq=bg.boi;bn.InterpolateBCPS(bq);$.callback(this,function(){var br=bg.api;br.AddChild(bq);br.AddChild(be);bh.AddChild(br);aY.GetNotifyPropSet(bh,Y);$.callback(this,function(){aY.SetNotifyObjData(au);$.callback(this,function(bu){if(!bu.err){var bs=bh.EncodeAsString();n.CcfLogEvent([i,74,5,62,"Dynamic"]);var bt=M.call(S,bs);SiebelApp.OfflineAppMgr.PopulateDeferredArray(bt);bt.done(function(){SiebelApp.OfflineAppMgr.RemoveObj(aR);SiebelApp.S_App.Model.ResetDyncPS();var bv=0;var bw=SiebelApp.OfflineAppMgr.HasPendingOp();if(bw){bv=1;SiebelApp.OfflineAppMgr.CallPendingOp();$.callback(this,function(){if(N==="refreshpopup"){SiebelApp.S_App.GetPopupPM().SetProperty("CanProcessLayout",true);SiebelApp.EventManager.fireEvent(N)}SiebelApp.OfflineAppMgr.SetPendingOp(false);$.setReturnValue(bc);if(SiebelApp.S_App.GetTimer()){SiebelApp.S_App.GetTimer().EndTime("OfflineAppMgr.prototype.GetReturnPropSet")}SiebelApp.OfflineAppMgr.SetStatus("")})}if(!bv){$.setReturnValue(bc);SiebelApp.OfflineAppMgr.SetStatus("")}})}else{SiebelApp.OfflineAppMgr.SetStatus("");$.setReturnValue(bu)}})})})})}})}})})}})})})})})}};c.prototype.SortBCOrder=function(G,L,J){var I=SiebelApp.S_App.GetActiveBusObj();if(G.length===1){L.push(G[0]);G.splice(0,1);return L}else{if(G.length===0){return L}}for(var H=0;H<G.length;H++){var K=I.GetBusCompX(G[H].bc,true);if(!K.GetParentBusComp()||(K.GetParentBusComp().GetName()===J)){L.push(G[H]);G.splice(H,1);this.SortBCOrder(G,L,K.GetName())}}return L};c.prototype.InvokeAppletMethod=function(G,H,N,M){n.CcfLogEvent([i,44,5,21,"methodName",H]);if(SiebelApp.S_App.GetTimer()){SiebelApp.S_App.GetTimer().StartTime("OfflineAppMgr.prototype.InvokeAppletMethod")}var L;var K;var J=unescape(G.GetProperty(s.get("SWE_APPLET_STR")).toString());K=SiebelApp.S_App.GetActiveView().GetActiveApplet();if(K&&(K.GetParentApplet()!==null)&&(K.GetName()===J)){L=K}else{L=SiebelApp.S_App.GetActiveView().GetApplet(J)}var I=G.GetProperty(u.get("SWE_FRAME_ID_STR"));L.PrepareToInvokeMethod(H,M);$.callback(this,function(){L.SetDefaultShowMode();var O={};O.callback=N;O.request=M;var P=CCFMiscUtil_CreatePropSet();P.SetProperty("Request",M);L.InvokeMethodX(H,P);$.callback(this,function(Q){if(!Q.err){if(k.Action){j.call(this,O)}else{if(!I){SiebelApp.OfflineAppMgr.ShowViewOrApplet(H,O)}else{this.PostActions(u.get("ACTION_RPC_COMPLETED"),H);j.call(this,O)}}$.callback(this,function(R){if(!R.err){SiebelApp.OfflineAppMgr.ClearPostedActions();$.setReturnValue(R);if(SiebelApp.S_App.GetTimer()){SiebelApp.S_App.GetTimer().EndTime("OfflineAppMgr.prototype.InvokeAppletMethod")}}else{$.setReturnValue({err:true});return}})}else{if(Q.err){SiebelApp.OfflineAppMgr.ClearPostedActions();$.setReturnValue({err:true});return}}})})};c.prototype.PrepareWriteRecordResponse=function(G){var J=CCFMiscUtil_CreatePropSet();J.DecodeFromString(G);var S=J.GetChildByType("api");var W;var M;var N=S.GetChildByType("nbo");N=N.GetChildByType("boi");var R=S.FindChildPosition("nbo");S.RemoveChild(R);S.AddChild(N);var I=null;var T=S.GetChildByType("nv");var L=T.GetChildByType("vi");var H=L.Clone("vi");var K=L.GetChildCount();for(var O=0;O<K;O++){H.RemoveChild(0)}for(O=0;O<K;O++){var P=L.GetChild(O);var Q=P.GetChildCount();W=null;M=null;var V=P.GetType();if(V==="na"){W=CCFMiscUtil_CreatePropSet();W.SetType("rctl")}else{if(V==="nla"){M=CCFMiscUtil_CreatePropSet();M.SetType("rcl");W=CCFMiscUtil_CreatePropSet();W.SetType("rctl")}}if(Q>0){for(var U=0;U<Q;U++){I=P.GetChild(U);if(I.GetType()==="ai"){if(W){I.InsertChildAt(W,0)}if(M){I.InsertChildAt(M,0)}if(V==="na"){if(I.GetPropertyAsStr(s.get("SWE_PST_APPLET_MODE"))===s.get("SWE_PST_APPLET_MODE_BASE")){I.SetPropertyStr(s.get("SWE_PROP_IS_EDIT"),"0")}}}H.AddChild(I)}}else{H.AddChild(P)}}R=S.FindChildPosition("nv");S.RemoveChild(R);S.AddChild(H);J.SetProperty("Status","RefreshLayout");var X=J.EncodeAsString();return X};c.prototype.ShowRPCError=function(J,N,L){var I=CCFMiscUtil_CreatePropSet();var H=CCFMiscUtil_CreatePropSet();var M=CCFMiscUtil_CreatePropSet();if(J&&J.HasErrorMsg()){var G=J.GetErrorCode();var K=J.GetErrorText();
H.SetProperty("ErrMsg",K);H.SetProperty("ErrCode",G);M.SetType("Errors");M.AddChild(H);I.AddChild(M)}SiebelApp.OfflineAppMgr.GetReturnPropSet("Error",I,L,N)};c.prototype.CheckValidation=function(J){var H=J.GetType();var G=true;if(H==="Ack_ValidateRequest"){SiebelApp.OfflineAppSettings.SetMode(false);var I=J.GetPropertyAsStr("Status");alert(I);$(".progressbar").remove();SiebelApp.S_App.CustomToolbar.Update("DownLoadFailed");G=false}return G};c.prototype.CheckServerConnection=function(I,H,L){var J=false;SiebelApp.OfflineUtils.CcfLogEvent([u.get("LOG_EVT_COMMON"),39,5,86,""]);if(L){if(!(I.indexOf("<!DOCTYPE")!==-1&&I.indexOf("scripts/login.js")!==-1)&&!(I.indexOf("SWECmd=Login")!==-1&&I.indexOf('alert("')!==-1)){J=true}}else{var G=I.length;if(G<=3&&I.indexOf("OK")!==-1){J=true}else{if(I.indexOf("<!DOCTYPE")===0&&I.indexOf("manifest")!==-1){J=true}else{if(!H&&SiebelApp.OfflineUtils.IsValidServerResponse(I)){J=true}else{if(I.indexOf('name="SWECmd"')!==-1&&I.indexOf('value="Ping"')!==-1){J=true}else{if(I.indexOf("SWECmd=Login")!==-1&&I.indexOf('alert("')!==-1){window.localStorage.setItem("SRN","");J=true}}}}}}if(!J&&H){if(SiebelApp.OfflineAppSettings.GetPkgStatus()){if(SiebelApp.OfflineAppSettings.GetMode()){SiebelApp.OfflineAppSettings.SetUpSyncStatus(true);SiebelApp.OfflineUtils.CcfLogEvent([u.get("LOG_EVT_COMMON"),21,5,86])}this.HandleNetworkError(I)}else{var K=SiebelApp.S_App.OfflineLocaleObject.GetLocalString("IDS_DOUI_ERR_OFFLINE_PKG");SiebelApp.OfflineUtils.CcfLogEvent([u.get("LOG_EVT_COMMON"),27,5,86,K]);alert(K)}}SiebelApp.OfflineUtils.CcfLogEvent([u.get("LOG_EVT_COMMON"),39,5,86,J?"Passed":"Failed"]);return J};c.prototype.HandleNetworkError=function(I){var J=I;var G=window.location;var H=G.origin.concat(G.pathname);var L='<link id="OfflineButton" type="text/css" rel="stylesheet" href="files/theme-mb-structure.css"/><script>function OnClick(){window.localStorage.setItem("UpSyncInProgress", JSON.stringify(false));window.localStorage.setItem("WorkOffline", JSON.stringify(true));}<\/script>';L=L+'<div id="returntoappcontainer" class="siebui-rta-c"><div class="siebui-rta-logo"></div><a href="'+H+'"><input id="continueofflinebutton" type="button" value="Continue to work offline" onclick="OnClick()" class="siebui-rta-btn"/></a></div>';var K=document.implementation.createHTMLDocument(J);document.open("text/html");document.write(J,L);document.close()};c.prototype.Ping=function(K){var H=SiebelApp.S_App.GetPageURL();var J=window.localStorage.getItem("SRN");H=H+"?SWECmd=Ping";if(J.length){H=H+"&SRN="+J;var G=Math.random();H=H+"&SWETS="+G}var I;SiebelApp.OfflineUtils.CcfLogEvent([u.get("LOG_EVT_COMMON"),82,5,92,""]);$.ajax({type:"POST",async:false,url:H,success:function(M,N,L){if(SiebelApp.OfflineAppMgr.CheckServerConnection(M,true)){I=true}SiebelApp.OfflineUtils.CcfLogEvent([u.get("LOG_EVT_COMMON"),82,5,92,I?"Passed":"Failed"])},complete:function(L,N,M){if(N==="error"){SiebelApp.OfflineUtils.CcfLogEvent([u.get("LOG_EVT_COMMON"),82,5,92,"Failed"]);I=e.call(this)}}});return I};function e(){var G;SiebelApp.OfflineUtils.CcfLogEvent([u.get("LOG_EVT_COMMON"),83,5,93,""]);$.ajax({type:"POST",url:window.location.href,data:window.location.href,async:false,success:function(I){if(I){if(SiebelApp.OfflineAppSettings.GetMode()){SiebelApp.OfflineAppSettings.SetUpSyncStatus(true)}var H=window.location.origin.concat(window.location.pathname)+"?";H=H+"&SWETS="+Math.random();SiebelApp.S_App.uiStatus.Busy({mask:true,timeOut:false});var J=SiebelApp.Offlineconstants.get("DM_APP_REDIRECT_TIMEOUT");J=parseInt(J);setTimeout(function(){SiebelApp.S_App.uiStatus.Free();SiebelApp.OfflineAppSettings.ReloadApp()},J);G=false;SiebelApp.OfflineUtils.CcfLogEvent([u.get("LOG_EVT_COMMON"),86,5,93])}},complete:function(H,J,I){if(J==="error"){SiebelApp.OfflineAppMgr.HandleServerUnavailabilty();G=false;SiebelApp.OfflineUtils.CcfLogEvent([u.get("LOG_EVT_COMMON"),87,5,93])}}});return G}c.prototype.HandleServerUnavailabilty=function(){var G="";if(!SiebelApp.OfflineAppSettings.GetMode()){if(SiebelApp.OfflineAppSettings.GetPkgStatus()){SiebelApp.OfflineAppSettings.OnSuccessfulDataDownload();var H=window.location;H.replace(H.origin.concat(H.pathname))}else{G=SiebelApp.S_App.OfflineLocaleObject.GetLocalString("IDS_DOUI_ERR_OFFLINE_PKG");SiebelApp.OfflineUtils.CcfLogEvent([u.get("LOG_EVT_COMMON"),27,5,91,G]);alert(G)}}else{G=SiebelApp.S_App.OfflineLocaleObject.GetLocalString("IDS_DOUI_ERR_SYNC");SiebelApp.OfflineUtils.CcfLogEvent([u.get("LOG_EVT_COMMON"),27,5,91,G]);alert(G)}};c.prototype.ModifyLayout=function(G){var I=this.GetControlRegExpMap();for(var H in I){G=G.replace(I[H],H)}SiebelApp.OfflineAppMgr.SetControlRegExpMap({});return G};c.prototype.InvokeServiceMethod=function(H,P,S,J){var R=CCFMiscUtil_CreatePropSet();var M=CCFMiscUtil_CreatePropSet();var L=H.GetProperty("SWEService");var O=false;SiebelApp.OfflineUtils.CcfLogEvent([u.get("LOG_EVT_CLIENT_SYS"),50,5,94,L,P]);if(L!==""){SiebelApp.S_App.Model.SetIsInterFace(1);var N=SiebelApp.S_App.GetService(L);if(!A.IsEmpty(N)){O=true;var Q=H.GetPropertyAsStr(s.get("SWE_INPUT_PS"));Q=unescape(Q);var K=CCFMiscUtil_CreatePropSet();K.DecodeFromString(Q);var G=K.GetType();var I=K.GetValue();if(K.GetPropertyCount()>0||K.GetChildCount()>0||(!A.IsEmpty(I))||(!A.IsEmpty(G))){svcIP=K}else{svcIP=H}if(P==="SetProperty"||P==="PropertyExists"||P==="RemoveProperty"||P==="GetProperty"||P==="GetFirstProperty"||P==="GetNextProperty"){M=E.call(this,N,P,svcIP)}else{N.Invoke(P,K)}$.callback(this,function(V){SiebelApp.S_App.Model.SetIsInterFace(-1);if(V.err){SiebelApp.OfflineUtils.CcfLogEvent([u.get("LOG_EVT_CLIENT_SYS"),84,5,94,V.err]);$.setReturnValue(V);return}else{var U={};U.request=J;U.callback=S;var T=j.call(this,U);if(T){return}if(V.retVal){M=V.retVal}M.SetType("ResultSet");R.AddChild(M);SiebelApp.OfflineUtils.CcfLogEvent([u.get("LOG_EVT_CLIENT_SYS"),85,5,94,JSON.stringify(M)]);this.GetReturnPropSet(s.get("SWE_RPC_PROP_STATUS_COMPLETED"),R,J,S)}})}else{SiebelApp.S_App.Model.SetIsInterFace(-1)}}if(O){return}if(P==="PrepareAppletMenu"){O=true;D.call(this,H,P,S,J)}else{if(P==="BatchCanInvoke"){O=true;z.call(this,H,P,S,J)}else{t.call(this,H,P,S,J,true);return}}if(O){$.callback(this,function(T){if(T.err){SiebelApp.OfflineUtils.CcfLogEvent([u.get("LOG_EVT_CLIENT_SYS"),84,5,94,T.err]);$.setReturnValue(T);return}else{M=T.retVal;R.AddChild(M);R.SetType("ResultSet");SiebelApp.OfflineUtils.CcfLogEvent([u.get("LOG_EVT_CLIENT_SYS"),85,5,94,JSON.stringify(M)]);SiebelApp.OfflineAppMgr.GetReturnPropSet("1",R,J,S)}})}};function E(N,Q,K){var J=N.Invoke("GetPropertySet");var H;var P;var I;var O;var M=CCFMiscUtil_CreatePropSet();if(!J){return}if(Q==="SetProperty"){H=K.GetProperty("Name");P=K.GetProperty("value");J.SetProperty(H,P)}else{if(Q==="PropertyExists"){H=K.GetProperty("Name");I=J.PropertyExists(H);M.SetProperty("Value",I?1:0)}else{if(Q==="RemoveProperty"){H=K.GetProperty("Name");J.RemoveProperty(H)}else{if(Q==="GetProperty"){H=K.GetProperty("Name");P=J.GetProperty(H);M.SetProperty("Value",P)}else{if(Q==="GetFirstProperty"){H=J.GetFirstProperty();
P=J.GetProperty(H);M.SetProperty("Name",H);M.SetProperty("Value",P);M.SetProperty("Iterator","1")}else{if(Q==="GetNextProperty"){O=K.GetProperty("Iterator");var G=J.propEnumArray;if(!G||(G&&!G.length)){var L=J.GetFirstProperty()}if(J.GetPropertyCount()>0){H=J.propEnumArray[O];P=J.GetProperty(H);M.SetProperty("Name",H);M.SetProperty("Value",P);M.SetProperty("Iterator",O)}}}}}}}return M}function z(G,N,O,J){var P;var M=CCFMiscUtil_CreatePropSet();var I=CCFMiscUtil_CreatePropSet();var K;var L=unescape(G.GetProperty("SWEIPS"));I.DecodeFromString(L);P=I.EnumProperties(true);var H=function(){t.call(this,G,P,"","",false);$.callback(this,function(Q){if(Q.err){$.setReturnValue(Q);return}K=Q.retVal;if(K){M.SetProperty(P,true)}else{M.SetProperty(P,false)}});if(P=I.EnumProperties(false)){H.call(this)}};H.call(this);$.callback(this,function(Q){$.setReturnValue({err:"",retVal:M})})}function D(H,R,T,K){var M;var J=CCFMiscUtil_CreatePropSet();var L=CCFMiscUtil_CreatePropSet();var N=CCFMiscUtil_CreatePropSet();var S=CCFMiscUtil_CreatePropSet();var G;var P=u.get("MENU_INFO");var I=u.get("MENU_DATA_REQ");var O;O=H.GetProperty("SWEIPS").toString();O=unescape(O);if(!A.IsEmpty(O)){var Q=CCFMiscUtil_CreatePropSet();Q.DecodeFromString(O);O=Q.GetProperty("Name");if(A.IsEmpty(O)){O=H.GetProperty("SWEActiveApplet").toString()}}else{O=H.GetProperty("SWEActiveApplet").toString()}SiebelApp.BrowserCacheMgr.DiscoverMetadata(K,T,I,O,P);$.callback(this,function(U){if(U.err){$.setReturnValue(U);return}G=U.retVal;J.DecodeFromString(G);$.setReturnValue({err:"",retVal:J});return})}function t(H,K,T,L,Q){var O="";var I=null;var R="";var G="";var N={};var P=s.get("PROP_SERVICE");if(!K){$.setReturnValue({err:"",retVal:false});return}N=v.call(this,K);if(!N){$.setReturnValue({err:"",retVal:false});return}if(N[s.get("PROP_TARGET")]!=="Server"&&N[s.get("PROP_TARGET")]!=="SI Plus"){var J=SiebelApp.S_App.GetActiveView();if(N[s.get("PROP_APPLET")]){if(J===null){$.setReturnValue({err:"",retVal:false});return}}if(N[s.get("PROP_TARGET")]!=="Browser Applet"&&J&&J.GetName()==="Task Pane View"){if(N.method!=="Logoff"){$.setReturnValue({err:"",retVal:false});return}}}if(N[s.get("PROP_ARGUMENT")]){H.SetProperty("Method Argument",N[s.get("PROP_ARGUMENT")])}H.SetProperty("Command",K);if(N[P]!==" "&&N[P]){O=N[P];R=N.method;I=SiebelApp.S_App.GetService(O);if(I){if(Q){I.Invoke(R,H);$.callback(this,function(U){if(U.err){$.setReturnValue(U);return}})}else{I.DoCanInvokeMethod(R);$.callback(this,function(U){if(U.err){$.setReturnValue(U);return}else{var V=U.retVal;$.setReturnValue({err:"",retVal:V});return}})}}}else{if(N[s.get("PROP_APPLET")]){G=N[s.get("PROP_APPLET")];R=N.method;if(!Q){var S;var M=SiebelApp.S_App.GetActiveView().GetActiveApplet();if(M&&(M.GetParentApplet()!==null)&&(M.GetName()===G)){S=M}else{S=SiebelApp.S_App.GetActiveView().GetApplet(G)}S.CanInvokeMethodX(R);$.callback(this,function(V){if(V.err){$.setReturnValue(V);return}else{var U=V.retVal;$.setReturnValue({err:"",retVal:U});return}})}}else{$.setReturnValue({err:"",retVal:false});return}}}function v(K){var G={};var I=[];var J=CCFMiscUtil_CreatePropSet();var H=0;if(!K){return}if(K.indexOf(s.get("CMDMGR_AT"))>=0){J.DecodeFromString(K);return(true)}if(K.indexOf(s.get("CMDMGR_STAR"))<0){return(false)}I=K.split(s.get("CMDMGR_STAR"));for(H=0;H<I.length;H++){if(H===0){continue}switch(H){case 1:G[s.get("PROP_TARGET")]=I[H];break;case 2:G[s.get("PROP_SERVICE")]=I[H];break;case 3:G[s.get("PROP_METHOD")]=I[H];break;case 4:G[s.get("PROP_APPLET")]=I[H];break;case 5:G[s.get("PROP_ARGUMENT")]=I[H];break;case 6:G[s.get("PROP_DX")]=I[H];break;case 7:G[s.get("PROP_DY")]=I[H];break;case 8:G.popup=I[H];break;default:break}}return(G)}return a}())};