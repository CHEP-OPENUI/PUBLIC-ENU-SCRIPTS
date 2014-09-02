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
if(typeof(SiebelApp.CommandManager)=="undefined"){SiebelJS.Namespace("SiebelApp.CommandManager");SiebelApp.CommandManager=(function(){var z=SiebelApp.Utils;var s=SiebelApp.Constants;var k;var x;var y;var d={};var n={};var b=CCFMiscUtil_CreatePropSet();var o=CCFMiscUtil_CreatePropSet();var C=CCFMiscUtil_CreatePropSet();var w=CCFMiscUtil_CreatePropSet();var u=CCFMiscUtil_CreatePropSet();var A=CCFMiscUtil_CreatePropSet();var r=CCFMiscUtil_CreatePropSet();var v=CCFMiscUtil_CreatePropSet();var l=CCFMiscUtil_CreatePropSet();var p=CCFMiscUtil_CreatePropSet();var t;var B;function q(D){y=this;SiebelApp.CommandManager=function(){return y};SiebelApp.CommandManager.prototype=q.prototype;SiebelApp.CommandManager.GetInstance=q.GetInstance;y.constructor=q;this.Initialize();k=D;return y}q.GetInstance=function(){return y};q.prototype.Initialize=function(){$("html").bind("keydown",function(D){SiebelApp.S_App.GetCmdMgr().FireAccelerator(D,D.which,z.GetEventNType(D))});window.addEventListener("click",function(E){if(E&&E.detail===2&&$(E.target).attr("type")!=="checkbox"){var D=false;if($(E.target).attr("data-allowdblclick")==="true"){D=true}if($(E.target).parents('[data-allowdblclick="true"]').length>0){D=true}if(!D){E.stopPropagation()}}},true)};q.prototype.SetGlobalAccl=function(D){r=D};q.prototype.GetGlobalAccl=function(){return r};q.prototype.SetBaseAccl=function(D){v=D};q.prototype.GetBaseAccl=function(){return v};q.prototype.GetBatchMethods=function(){return b};q.prototype.SetRefreshTB=function(D){t=D};q.prototype.GetRefreshTB=function(){return t};q.prototype.SetToolbar=function(D){B=D};q.prototype.GetToolbar=function(){return B};q.prototype.UpdateBatchMethods=function(D){b.Reset();return this.AppendBatchMethods(D)};q.prototype.AppendBatchMethods=function(D){var G=true;var F;var E=D.EnumProperties(true);while(!z.IsEmpty(E)){if(E.indexOf(s.get("CMDMGR_HASH"))==0){b.SetProperty(E,D.GetProperty(E))}E=D.EnumProperties(false)}return true};q.prototype.InvokeServerCommand=function(J,E,K,G){if(z.IsEmpty(k)){return false}if(z.IsEmpty(x)){x=k.GetService(s.get("CMDMGR_SERVICE"));if(z.IsEmpty(x)){return false}}if(J.indexOf(s.get("CMDMGR_HASH"))<0){E.SetProperty(s.get("SWEJI"),s.get("CMDMGR_FALSE"));E.SetProperty(s.get("SWEDIC"),s.get("CMDMGR_TRUE"))}var D=E.EncodeAsString();var I=CCFMiscUtil_CreatePropSet();var F={};var H=this;if(typeof(G)==="object"||typeof(G)==="boolean"){F.scope=this;F.async=(typeof(G.async)==="boolean")?G.async:G;F.selfbusy=G.selfbusy||false;F.mask=G.mask||false;F.cb=function(){var L=[];L.push(arguments[0]);L.push(arguments[1]);L.push(H.PostCommandExecute.apply(H,arguments));if(typeof(G.scope.PostExecute)==="function"){G.scope.PostExecute.apply(G.scope||null,L)}}}else{F=undefined}I=x.InvokeMethod(J,E,F);if(typeof(G)==="undefined"){if(!I.IsEmpty()){K.DeepCopy(I.GetChildByType(s.get("SWE_PROP_RESULTSET")));if(K.IsEmpty()){K.Copy(I)}return true}else{return false}}};q.prototype.PostCommandExecute=function(D,G,F){var E=CCFMiscUtil_CreatePropSet();if(!F.IsEmpty()){E.DeepCopy(F.GetChildByType(s.get("SWE_PROP_RESULTSET")));if(E.IsEmpty()){E.Copy(F)}return E}else{return false}};q.prototype.GetCachedMenu=function(D){if(!z.IsEmpty(d[D])){return d[D]}};q.prototype.SetCachedMenu=function(D,E){if(z.IsEmpty(d[D])){d[D]=E}};q.prototype.RemoveCachedMenu=function(D){if(!z.IsEmpty(d[D])){delete d[D]}};q.prototype.InvokeCommand=function(H,D,F){var G;if(D===true||D===false){G=D}else{G=true}if(typeof(F)==="object"||typeof(F)==="boolean"){var E={};E.scope=this;E.async=(typeof(F.async)==="boolean")?F.async:F;E.selfbusy=F.selfbusy||false;E.mask=F.mask||false;E.cb=function(){var I=Array.prototype.slice.call(arguments);if(typeof(F.scope)!=="undefined"&&typeof(F.scope.cb)==="function"){F.scope.cb.apply(F.scope||null,I)}};i.call(this,H,G,E)}else{return(i.call(this,H,G,F))}};q.prototype.AppendBatchMethods=function(F){var E=F.EnumProperties(true);var D=this.GetBatchMethods();while(E){if(!z.IsEmpty(E)&&E.indexOf(s.get("CMDMGR_HASH"))>=0){D.SetProperty(E,F.GetProperty(E))}E=F.EnumProperties(false)}};function i(E,W,J){var ab;var N;var Q;var ad=CCFMiscUtil_CreatePropSet();var Z=CCFMiscUtil_CreatePropSet();var Y=CCFMiscUtil_CreatePropSet();var D=CCFMiscUtil_CreatePropSet();var F=CCFMiscUtil_CreatePropSet();var K;var I=CCFMiscUtil_CreatePropSet();var S=false;if(W){K=CCFMiscUtil_CreatePropSet()}if(!c.call(this,E,I)){if(W){F=CCFMiscUtil_CreatePropSet();var U;F=this.ProcessCommandState(E);U=F.GetProperty(s.get("CMDMGR_DELEGATE_APPLET"));if(z.IsEmpty(U)){if(k){if(!x){x=k.GetService(s.get("CMDMGR_SERVICE"))}if(x){ab=k.GetMainView();if(ab){N=ab.GetActiveApplet();if(N){S=N.InvokeMethod("ImplicitCommit",ad);if(!S){return false}}}}}Y=h.call(this,E,Z);if(!this.InvokeServerCommand(E,Y,D,J)){return false}}else{var M;var aa;M=F.GetProperty(s.get("CMDMGR_DELEGATE_METHOD"));ab=k.GetMainView();if(ab&&U){N=ab.GetApplet(U);if(!N){return(false)}}if(N){bstrName=N.GetName();aa=ab.SetActiveAppletByName(bstrName,false);if(!aa){return(false)}ad=k.NewPropertySet();S=N.InvokeMethod(M,ad);return(S==true)}}}else{return m.call(this,E)}}if(W){K=h.call(this,E,I)}var T=I.GetProperty(s.get("PROP_TARGET"));var X=I.GetProperty(s.get("PROP_APPLET"));var P=I.GetProperty(s.get("PROP_SERVICE"));var O=String(I.GetProperty(s.get("PROP_METHOD")));var R;var H;if(z.IsEmpty(O)||z.IsEmpty(T)){return false}if(z.IsEmpty(k)){return false}if(z.IsEmpty(X)){if(T=="Browser Applet"||!z.IsEmpty(P)){R=k.GetActiveView();if(!z.IsEmpty(R)){H=R.GetActiveApplet()}if(!H){H=SiebelApp.S_App.GetExternalActiveApplet()}if(!z.IsEmpty(H)){X=H.GetName()}}if(T=="Browser Applet"&&z.IsEmpty(X)){return false}}if(!z.IsEmpty(P)){var ac=k.GetService(P);if(!z.IsEmpty(ac)){if(!z.IsEmpty(X)){R=k.GetActiveView();if(!z.IsEmpty(R)){H=R.GetApplet(X);if(!z.IsEmpty(H)){var V=H.GetBusComp()}}}if(W){if(ac.CanInvokeMethod(O)){var G=K.EncodeAsString();var L=CCFMiscUtil_CreatePropSet();L.SetProperty(s.get("SWE_INPUT_PS"),G);S=ac.InvokeMethod(O,L,J)}}else{S=ac.CanInvokeMethod(O)}}}else{if(!z.IsEmpty(X)){R=k.GetActiveView();if(!z.IsEmpty(R)){H=R.GetApplet(X)}if(!H){H=SiebelApp.S_App.GetExternalActiveApplet()}if(!z.IsEmpty(H)){if(W){if(H.CanInvokeMethod(O)){var G=K.EncodeAsString();var L=CCFMiscUtil_CreatePropSet();L.SetProperty(s.get("SWE_INPUT_PS"),G);S=H.InvokeMethod(O,L,J)}}else{S=H.CanInvokeMethod(O)}}}else{if(W){if(k.CanInvokeMethod(O)){var G=K.EncodeAsString();var ad=CCFMiscUtil_CreatePropSet();ad.DecodeFromString(G);var S=k.InvokeMethod(O,ad,J)}}else{S=k.CanInvokeMethod(O)}}}return S}q.prototype.ProcessCommandState=function(E){var D=CCFMiscUtil_CreatePropSet();if(E.indexOf(s.get("CMDMGR_HASH"))>=0){if(C.GetChildByType(E)){D=C.GetChildByType(E)}else{if(w.GetChildByType(E)){D=w.GetChildByType(E)}}}return D};function h(I,H){var D;var F;var E;var G=CCFMiscUtil_CreatePropSet();G=z.IsEmpty(o.GetChildByType(I))?G:o.GetChildByType(I);if(z.IsEmpty(G)){if(u.GetChildByType(I)){return G}}if(I.indexOf(s.get("CMDMGR_HASH"))>=0){return G}G.SetProperty(s.get("PROP_COMMAND"),I);D=H.GetProperty(s.get("PROP_ARGUMENT"));
if(!z.IsEmpty(D)){G.SetProperty(s.get("PROP_ARGUMENT"),D)}F=H.GetProperty(s.get("PROP_DX"));E=H.GetProperty(s.get("PROP_DY"));if(!z.IsEmpty(F)&&!z.IsEmpty(E)){G.SetProperty(s.get("SWE_SHOW_POPUP_STR"),s.get("CMDMGR_TRUE"));G.SetProperty(s.get("SWEW"),F);G.SetProperty(s.get("SWEH"),E)}return G}q.prototype.ProcessNotifications=function(K){var J=K.Clone();var G;var E;var D;var F;var I;l=J.GetChildByType("StateToolBar");w=J.GetChildByType("StateExToolBar");u=J.GetChildByType("FlagsToolBar");E=J.GetProperty("RefreshToolbar");if(E&&E=="true"){this.SetRefreshTB(E)}if(k){D=k.GetMainView();if(D){F=D.GetActiveApplet()}if(F){I=!!F.GetBusComp()?F.GetBusComp().GetName():null}}G=J.GetChildByType("StateEx");if(G){j.call(this,G)}G=J.GetChildByType("Flags");if(G){g.call(this,G)}G=J.GetChildByType("Accelerators");if(G){this.PrepareAccelerators(G)}G=J.GetChildByType("Toolbar");if(G){if(this.GetToolbar()){this.GetToolbar().HandleResponsePS(G)}else{var H=new SiebelAppFacade.ToolbarPM({GetName:function(){return"ToolbarPxy"}});this.SetToolbar(H);H.Setup(G);H.Show()}}J=K=G=null};q.prototype.CanInvokeCommand=function(D){if(!z.IsEmpty(D)){return i.call(this,D,false)}else{return false}};q.prototype.UpdateUIControls=function(){if(this.GetToolbar()){this.GetToolbar().ExecuteMethod("Update")}};q.prototype.PrepareAccelerators=function(D){var H=CCFMiscUtil_CreatePropSet();var E=CCFMiscUtil_CreatePropSet();var F;for(var G=0;G<D.GetChildCount();G++){H=D.GetChild(G);F=H.GetType();if(!A.GetChildByType(F)){A.AddChild(H);this.InitializeAccelerators(H)}}};q.prototype.InitializeAccelerators=function(F){var I;var H;var E;var G;a.call(this,13,0,1,0);a.call(this,27,0,0,0);a.call(this,27,0,1,0);a.call(this,9,0,0,0);a.call(this,9,0,1,0);for(bFirst=true;(child=F.EnumChildren(bFirst))!=null&&child.GetPropertyCount()>0;bFirst=false){var D=child.GetProperty("key");if(D!=null){I=parseInt(D.charAt(0),10);H=parseInt(D.charAt(1),10);E=parseInt(D.charAt(2),10);G=parseInt(D.substr(3),10);if(G!=0){a.call(this,G,I,H,E)}}}};function a(H,I,G,F){var E=0;if(F){E|=4}if(G){E|=1}if(I){E|=2}var D=""+E+H;n[D]=D}q.prototype.FireAccelerator=function(F,E,D){if(E<=0){return false}if(e.call(this,E,D)||E===13){if(this.ProcessAccelerator(F,E)===true){F.preventDefault();F.stopPropagation()}}};q.prototype.ProcessAccelerator=function(Q,V){var W="0";var E="0";var S="0";var G="";var U;var K;var I;var J;var N=CCFMiscUtil_CreatePropSet();var D=CCFMiscUtil_CreatePropSet();var O=CCFMiscUtil_CreatePropSet();var L=CCFMiscUtil_CreatePropSet();var M="";var F;var R,P;var T;var H;if(V==16||V==17||V==18){return false}if(Q.altKey){S="1"}if(Q.ctrlKey){E="1"}if(Q.shiftKey){W="1"}G+=W+E+S+V;if(SiebelApp.S_App){U=SiebelApp.S_App.GetMainView();if(U){K=U.GetActiveApplet();if(!K){K=SiebelApp.S_App.GetExternalActiveApplet()}if(K){if(G=="01013"){J=K.InvokeMethod("OnEnterKey",null);if(!J){return false}return true}else{if(G=="00027"){J=K.InvokeMethod("OnEscapeKey",null);if(!J){return false}return true}else{if(G=="00013"){J=K.InvokeMethod("OnEnterKey");if(!J){return false}return true}}}I=K.GetName();if(!z.IsEmpty(I)){if(A.GetChildByType(I)){N=A.GetChildByType(I);for(R=0;R<N.GetChildCount();R++){D=N.GetChild(R);M=D.GetProperty(s.get("PROP_KEY"));if(G!=M){continue}F=D.GetProperty(s.get("PROP_COMMAND"));this.InvokeCommand(F,true,true);return true}for(R=0;R<N.GetChildCount();R++){D=N.GetChild(R);if(D.GetProperty(s.get("PROP_CLASS"))){T=D.GetProperty(s.get("PROP_CLASS"));if(this.GetBaseAccl().GetChildByType(T)){O=this.GetBaseAccl().GetChildByType(T);for(P=0;P<O.GetChildCount();P++){L=O.GetChild(P);M=L.GetProperty(s.get("PROP_KEY"));if(G!=M){continue}F=L.GetProperty(s.get("PROP_COMMAND"));H=f.call(this,F,I);this.InvokeCommand(H,true,true);return true}}}}}}}}}D.Reset();for(R=0;R<this.GetGlobalAccl().GetChildCount();R++){D=this.GetGlobalAccl().GetChild(R);M=D.GetProperty(s.get("PROP_KEY"));if(G!=M){continue}F=D.GetProperty(s.get("PROP_COMMAND"));this.InvokeCommand(F,true,true);return true}return false};function f(H,E){var G=CCFMiscUtil_CreatePropSet();var F="";c.call(this,H,G);var D=G.GetProperty(s.get("PROP_APPLET"));if(D=="#AN"){G.SetProperty(s.get("PROP_APPLET"),E);F=G.EncodeAsString();return F}return H}function e(F,G){var E=false;var D=""+G+F;if(D=="09"){return false}if(n[D]){E=true}return E}function j(D){var G;var I;var F;var E;var H;for(E=0;E<D.GetChildCount();E++){G=D.GetChild(E);F=G.GetType();H=C.FindChildPosition(F);if(H>=0&&H<C.GetChildCount()){C.RemoveChild(H)}C.AddChild(G)}}function g(E){var D;var F;for(F=0;F<E.GetChildCount();F++){D=E.GetChild(F);o.AddChild(D)}}function m(E){var F=this.GetBatchMethods();var D=false;if(l){D=l.GetProperty(E)}if(z.IsEmpty(D)&&!z.IsEmpty(F)){D=F.GetProperty(E)}return(D==s.get("CMDMGR_TRUE"))}function c(F,E){if(F.indexOf(s.get("CMDMGR_AT"))>=0){E.DecodeFromString(F);return(true)}if(F.indexOf(s.get("CMDMGR_STAR"))<0){return(false)}var D=F.split(s.get("CMDMGR_STAR"));D.shift();if(!z.IsEmpty(D[0])){E.SetProperty(s.get("PROP_TARGET"),z.Trim(D[0]))}if(!z.IsEmpty(D[1])){E.SetProperty(s.get("PROP_SERVICE"),z.Trim(D[1]))}if(!z.IsEmpty(D[2])){E.SetProperty(s.get("PROP_METHOD"),z.Trim(D[2]))}if(!z.IsEmpty(D[3])){E.SetProperty(s.get("PROP_APPLET"),z.Trim(D[3]))}if(!z.IsEmpty(D[4])){E.SetProperty(s.get("PROP_ARGUMENT"),z.Trim(D[4]))}if(!z.IsEmpty(D[5])){E.SetProperty(s.get("PROP_DX"),z.Trim(D[5]))}if(!z.IsEmpty(D[6])){E.SetProperty(s.get("PROP_DY"),z.Trim(D[6]))}return(true)}return q}())};