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
if(typeof(SiebelApp.S_App.ListApplet)==="undefined"){SiebelJS.Namespace("SiebelApp.S_App.ListApplet");SiebelApp.S_App.ListApplet=(function(){var u=SiebelJS.Dependency("SiebelApp.Utils");var o=SiebelJS.Dependency("SiebelApp.Constants");var f=o.get("SWE_PST_COL_LIST");var y=o.get("SWE_FIELD_STR");var d=o.get("SWE_ROW_STR");var j=o.get("SWE_ROW_ID_STR");var x=o.get("SWE_APPLET_STR");var l=o.get("SWE_ACTIVE_APPLET_STR");var t=o.get("SWE_ROW_IDS_STR");var s=o.get("SWE_METHOD_STR");var n=o.get("SWE_VIEW_ID_STR");var e=o.get("SWE_VIEW_ARG");var g=o.get("SWE_REQ_ROW_ID_STR");var k=o.get("SWE_SHOW_POPUP_STR");var a=o.get("SWE_LPF_TILDE");var r=o.get("SWE_LPF_PIPE");function h(){SiebelApp.S_App.ListApplet.superclass.constructor.call(this);var D={};var C={};var E=[];var F="";var A=o.get("DELT_ROWCOUNT");var z=false;var B={};this.GetRowListRowCount=function(){return Number(A)};this.SetRowListRowCount=function(G){A=G};this.GetRowsSelectedArray=function(){return E};this.GetListCol=function(G){return D[G]};this.GetListOfColumns=function(){return D};this.RemoveColumns=function(){C=D=null;D={};C={}};this.GetColumnsByFieldName=function(){return C};this.GetListPrefs=function(){return F};this.SetListPrefs=function(G){F=G};this.GetBeginRow=function(){return(this.GetBusComp()?this.GetBusComp().GetNotifyObject().GetBegRow(this.GetName()):null)};this.GetHasTotalRow=function(){return z};this.SetHasTotalRow=function(G){z=G};this.GetTotalMap=function(){var J=this.GetBusComp();if(J){var H=J.GetTotalsChanged();if(H){B={};var I=this.GetListOfColumns();for(var G in I){if(I.hasOwnProperty(G)){B[I[G].GetFieldName()]=H[J.GetField(I[G].GetFieldName()).index];if(!B[G]){B[G]=""}}}}}return B}}SiebelJS.Extend(h,SiebelApp.S_App.Applet);function p(z){this.GetListOfColumns()[z.GetName()]=z;this.GetColumnsByFieldName()[z.GetFieldName()]=z;this.GetControls()[z.GetName()]=z}h.prototype.EndLife=function(){var z=this.GetListOfColumns();for(var A in z){if(z.hasOwnProperty(A)){delete z[A]}}z=null;SiebelApp.S_App.ListApplet.superclass.EndLife.call(this)};h.prototype.GetPropArray=function(){var z=SiebelApp.S_App.ListApplet.superclass.GetPropArray.call(this);return z.concat(["GetListOfColumns","GetRowsSelectedArray","GetRowIdentifier","HasHierarchy","GetRowListRowCount","GetBeginRow","GetHasTotalRow","GetTotalMap"])};h.prototype.Show=function(){if(this.GetListPrefs()){i.call(this)}SiebelApp.S_App.ListApplet.superclass.Show.call(this)};h.prototype.ShowOnly=function(){if(this.GetListPrefs()){i.call(this)}SiebelApp.S_App.ListApplet.superclass.ShowOnly.call(this)};function i(){var C="";var I="";var N="";var E=0;var B=0;var z=null;var L=this.GetListOfColumns();var P="";var J=[];var H=0;var M=0;var O=[];if(!L){return}for(var A in L){if(L.hasOwnProperty(A)){++M}}P=this.GetListPrefs();H=P.indexOf(a);if(H<0){P=""}else{J=P.split(a)}for(var G=1;G<J.length&&B<M;G++){O=[];I=J[G];O=I.split(r);if(O.length>0&&O[0]==="0"){N=O[1];E=O[2]}else{continue}for(var K in L){if(L.hasOwnProperty(K)){z=L[K];if(z.GetName()===N){L[K].SetWidth(E);L[K].SetColNum(B);B++;break}}}}for(var F in L){if(L.hasOwnProperty(F)){if(u.IsTrue(L[F].IsDynamic())){for(var D in L){if(L.hasOwnProperty(D)){if((L[D].GetColNum()>=L[F].GetColNum())&&!u.IsTrue(L[D].IsDynamic())){this.GetListOfColumns()[D].SetColNum(L[D].GetColNum()+1)}}}}}}}h.prototype.HasDynamicColumns=function(){var A=this.GetListOfColumns();if(A){for(var z in A){if(A.hasOwnProperty(z)){if(u.IsTrue(A[z].IsDynamic())){return true}}}}return false};h.prototype.Initialize=function(){var z=this.GetBusComp();if(z){z.SetWorkSetSize(this.GetName(),this.GetRowListRowCount())}SiebelApp.S_App.ListApplet.superclass.Initialize.call(this)};h.prototype.GetMethodArray=function(){var z=SiebelApp.S_App.ListApplet.superclass.GetMethodArray.call(this);return z.concat(["HandleRowSelect","OnVerticalScroll","SetMultiSelectMode","OnClickSort","OnCtrlBlur","OnCtrlFocus","OnDrillDown","CellChange","UpdateColIndex","UpdateColWidth"])};h.prototype.ProcessObjectInfo=function(z){SiebelApp.S_App.ListApplet.superclass.ProcessObjectInfo.call(this,z);var A=SiebelApp.S_App.GetPopupPM();if(A.Get("state")===o.get("POPUP_STATE_VISIBLE")){if(typeof(this.GetPopupAppletName)!=="undefined"){if(typeof(this.GetPickAppletName)!=="undefined"){A.SetProperty("isPopupPick",true);A.SetProperty("PickAppletObject",this);A.SetProperty("baseParentAppletId",this.GetParentApplet().GetFullId())}else{if(typeof(this.GetAssocAppletName)!=="undefined"){A.SetProperty("isPopupAssoc",true);A.SetProperty("AssocAppletObject",this);A.SetProperty("baseParentAppletId",this.GetParentApplet().GetFullId())}else{if(typeof(this.GetMvgSelectedAppletName)!=="undefined"){A.SetProperty("isPopupMVGSelected",true);A.SetProperty("MVGSelectedAppletObject",this);A.SetProperty("baseParentAppletId",this.GetParentApplet().GetFullId())}else{if(typeof(this.GetMvgAssocAppletName)!=="undefined"){A.SetProperty("isPopupMVGAssoc",true);A.SetProperty("MVGAssocAppletObject",this);A.SetProperty("MVGAssocParentAppletObject",this.GetParentApplet());A.SetProperty("parentAppletId",this.GetParentApplet().GetFullId());A.SetProperty("baseParentAppletId",this.GetParentApplet().GetParentApplet().GetFullId())}else{A.SetProperty("isPopupNonStandard",true);A.SetProperty("NonStandardAppletObject",this);this.GetParentApplet()?A.SetProperty("baseParentAppletId",this.GetParentApplet().GetFullId()):A.SetProperty("baseParentAppletId",null)}}}}}}};h.prototype.ProcessSelfProps=function(z){SiebelApp.S_App.ListApplet.superclass.ProcessSelfProps.call(this,z);this.SetListPrefs(z.GetProperty(o.get("SWE_PROP_PREFERENCES")));var A=z.GetProperty(o.get("SWE_PROP_ROW_COUNT"));if(!u.IsEmpty(A)){this.SetRowListRowCount(A)}if(u.IsTrue(z.GetProperty(o.get("SWE_PROP_HAS_TOTAL")))){this.SetHasTotalRow(true)}this.SetOnLoadRowSelection(z)};h.prototype.ProcessListControlInfo=function(z){var A=new SiebelApp.S_App.AppletControl();A.SetApplet(this);A.ProcessObjectInfo(z);p.call(this,A)};h.prototype.ProcessChildrenProps=function(E){var B=u.Curry(SiebelApp.S_App.constructor.prototype.DefineAccessor,this,E);var A=E.GetType();var D=o.get("SWE_PST_ACCESSIBILITY_INFO");var C=o.get("SWE_PST_REMOVE_COL_LIST");switch(A){case f:var z=E.EnumChildren(true);do{this.ProcessListControlInfo(z)}while((z=E.EnumChildren(false)));break;case C:this.RemoveColumns();SiebelApp.S_App.ListApplet.superclass.ProcessChildrenProps.call(this,E);break;case D:B("GetRowIdentifier","SWE_PST_ACCESSIBILITY_ROWID");if(this.GetRowIdentifier()==undefined){this.GetRowIdentifier=function(){return""}}SiebelApp.S_App.ListApplet.superclass.ProcessChildrenProps.call(this,E);break;default:SiebelApp.S_App.ListApplet.superclass.ProcessChildrenProps.call(this,E);break}if(this.GetRowIdentifier==undefined||this.GetRowIdentifier()==undefined){this.GetRowIdentifier=function(){return""}}};h.prototype.SetOnLoadRowSelection=function(z){var D=z.GetProperty(o.get("SWE_PROP_ROW_SELECTION"));if(!u.IsEmpty(D)){var A=[];CCFMiscUtil_StringToArray(D,A);v.call(this,null,A)}else{var C=this.GetSelection();if(!u.IsEmpty(C)){for(var B=0;
B<C;B++){this.GetRowsSelectedArray()[B]=false}this.GetRowsSelectedArray()[B]=true}}return true};function v(A,C){if(!this.CanUpdateUI()){return}if(C.length>0){var z=C[0];if(z===this.GetName()){C.shift();w.call(this,C);var B={};B.ev=o.get("EVENT_ROW_SELECTION");this.SetUIEventMap(B)}}}function w(B){this.GetRowsSelectedArray().splice(0,this.GetRowsSelectedArray().length);var A;for(var z=0;z<B.length;z++){switch(B[z]){case"0":A=false;break;case"1":A=true;break;default:continue}this.GetRowsSelectedArray().push(A)}}h.prototype.NotifyGeneric=function(A,z){if(A==="SWEIRowSelection"){v.call(this,A,z)}else{SiebelApp.S_App.ListApplet.superclass.NotifyGeneric.call(this,A,z)}};h.prototype.GetRecordSet=function(z){var A=[];A=c.call(this);h.prototype.GetRecordSet=function(B){if(!B){A=[];A=c.call(this)}return A};return A};function c(){var H=SiebelApp.S_App.ListApplet.superclass.GetRecordSet.call(this);var A=H.length;var F=[];var z=this.GetBusComp();var B=z?u.IsTrue(z.IsHierarchyBusComp()):false;var G=B?z.GetHierarchyParentId():null;if(this.IsInQueryMode()){F=H}else{var D=this.GetColumnsByFieldName(),I=null;for(var C=0;C<A;C++){var E={};for(I in D){if(D.hasOwnProperty(I)){E[I]=this.GetFormattedFieldValue(D[I],true,C)}}if(B){E["Outline Number"]=H[C]["Outline Number"];E["Has Children"]=H[C]["Has Children"];E["Is Expanded"]=H[C]["Is Expanded"];E.Id=H[C]["Id"];E[G]=H[C][G]}F.push(E)}if(B){F=this.GetBusComp().UpdateHierInfo(F)}listCols=D=null}return F}h.prototype.GetRecord=function(z){return this.GetRecordSet(true)[this.GetBeginRow()+z]};h.prototype.GetAllFieldValues=function(C,E){var A=this.GetBusComp();if(A.GetParentBusComp()){var B=this.GetListOfColumns();for(var z in B){if(B.hasOwnProperty(z)){var D=B[z];C.SetProperty(D.GetSpanPrefix()+E,A.GetFieldValue(D.GetFieldName()))}}}};h.prototype.GetDrilldownURL=function(z,D,C){var B=CCFMiscUtil_CreatePropSet();var A=this.GetListCol(z);z=A.GetSpanPrefix()+D;B.SetProperty(y,z);B.SetProperty(d,D);B.SetProperty(j,C);this.GetRowIds(B);this.GetAllFieldValues(B,D);B.SetProperty(x,this.GetName());B.SetProperty(l,this.GetName());return SiebelApp.S_App.GetDrilldownURL(B)};h.prototype.OnDrillDown=function(A,F){var E=CCFMiscUtil_CreatePropSet();var D=this.GetListOfColumns();this.GetBusComp().SetCurRow(this.GetName(),F-1);var C;for(var B in D){if(D.hasOwnProperty(B)){if(A===B){C=D[B]}}}var z=C.GetSpanPrefix()+F;E.SetProperty(y,z);E.SetProperty(d,F);this.GetRowIds(E);E.SetProperty(x,this.GetName());E.SetProperty(l,this.GetName());if(!this.PostChangesToBC(true,null)){return false}this.InvokeMethod("Drilldown",E,true)};h.prototype.HandleRowSelect=function(D,E,B){var A=true;var F=new SiebelApp.UIStatus();if(this.IsInQueryMode()){return true}var C=CCFMiscUtil_CreatePropSet();var z="PositionOnRow";SiebelApp.S_App.OfflineCallMethod("HandleRowSelect",D);z+=((E===true)?"1":"0")+((B===true)?"1":"0")+"0";C.SetProperty(s,z);C.SetProperty(n,"");if(!u.IsEmpty(this.GetView())){C.SetProperty(e,this.GetView().GetName())}C.SetProperty(x,this.GetName());C.SetProperty(d,D);C.SetProperty(g,"1");C.SetProperty(k,"false");return this.InvokeControlMethod(z,C,true)};h.prototype.NotifyNewPrimary=function(E){var B=this.GetBusComp();var C;if(u.IsEmpty(B)){return}C=B.GetNotifyObject();if(!C||!C.Get_EnableUIUpdate(this.GetName())){return}var A;var D=B.GetRawRecords().length;var z=B.GetSelection();for(A=0;A<D;A++){B.SetSelection(A);this.RepopulateField(E,true)}B.SetSelection(z)};h.prototype.NotifyNewActiveRow=function(){var z=this.GetBusComp().GetNotifyObject();if(!z||!z.Get_EnableUIUpdate(this.GetName())){return}};h.prototype.NotifyEndQuery=function(){var z;if(u.IsEmpty(this.GetBusComp())){return}z=this.GetBusComp().GetNotifyObject();if(!z||!z.Get_EnableUIUpdate(this.GetName())){return}z.SetDoPopulate(this.GetName(),true);this.GetBusComp().SetSelection(this.GetBusComp().GetSelection());SiebelApp.S_App.ListApplet.superclass.NotifyEndQuery.call(this)};h.prototype.NotifyExecute=function(){var z;if(u.IsEmpty(this.GetBusComp())){return}z=this.GetBusComp().GetNotifyObject();if(!z||!z.Get_EnableUIUpdate(this.GetName())){return}z.SetDoPopulate(this.GetName(),true);this.GetBusComp().SetSelection(this.GetBusComp().GetSelection())};h.prototype.DoExecuteUIUpdate=function(){var A;if(u.IsEmpty(this.GetBusComp())){return}A=this.GetBusComp().GetNotifyObject();if(!A||!A.Get_EnableUIUpdate(this.GetName())){return}var z=this.GetBusComp().tempCommitPending;if(A.Get_DoPopulate(this.GetName())){this.RefreshData(true);this.ShowSelection();this.GetBusComp().tempCommitPending=false;if(SiebelApp.S_App.GetEnablePerfHooks()&&SiebelApp.S_App.GetTimer()){SiebelApp.S_App.GetTimer().TimePopulateApplet(this.GetName(),"Finished Populate Applet")}}if(this.GetUpdateConditionals()){this.UpdateConditionals()}this.InvokeStateChange();A.Set_DoPopulate(this.GetName(),false);this.SetScrollDir(null);this.SetScrollAmount(0)};h.prototype.OnCtrlFocus=function(C,B,A){var z=this.EnterField(B,A,false)};h.prototype.EnterField=function(B,z,A){var C=this.GetPrsrvControl();this.SetPrsrvControl(this.GetActiveControl());if(this.GetView()){if(!(this.GetView().SetActiveApplet(this))){this.GetView().ProcessError();this.SetPrsrvControl(C);return false}}if(B.GetCaseSensitive()&&this.IsInQueryMode()){this.UpdateCSQueryMsg(true)}this.SetActiveControl(B);return true};h.prototype.OnCtrlBlur=function(B,A,z){return this.LeaveField(A,z,false)};h.prototype.LeaveField=function(D,H,E){var F=this.GetBusComp();var B=D.GetFieldName();if(!D&&!this.GetActiveControl()){return true}var A=this.GetFormattedValue(D);var C=this.TransformValue(D,H,A);if(C!==null){SiebelApp.S_App.OfflineCallMethod("PassOldValue",this,D,H,A);if(this.IsInQueryMode()&&!u.IsEmpty(B)){var G=D.GetUIType();if(G==o.get("SWE_CTRL_DATE_TZ_PICK")||G==o.get("SWE_CTRL_DATE_TIME_PICK")||G==o.get("SWE_CTRL_DATE_PICK")){if(H&&!H.match(/[><=!&|]/g)){C=this.AssignQuotes(D,C,H)}}if(!u.IsEmpty(B)){F.SetFieldValue(B,C)}}else{if(this.CanUpdate(D.GetName())&&(this.IsPrivateField(D.GetName())||F.GetSelection()>=0)){if(G==o.get("SWE_CTRL_COMBOBOX")){A=this.GetFormattedFieldValue(D,true)}if(!this.SetFormattedValue(D,C)){this.SetPrsrvControl(this.GetActiveControl());F.ProcessError();return false}if(!u.IsEmpty(B)&&this.HasCustomShadow()){var z=this.GetFormattedFieldValue(D,false);if(z!=A){this.FireOnChangeFieldValue(B,z)}}}}}if(!E){if(this.GetActiveControl()){this.SetPrsrvControl(this.GetActiveControl());if(D.GetCaseSensitive()&&this.IsInQueryMode()){this.UpdateCSQueryMsg(false)}this.SetActiveControl(null)}}return true};h.prototype.SetFormattedValue=function(C,F){var z=C.GetName();var B=0;var A,E;if(this.IsPrivateField(z)){var G=this.GetPrivateFieldMap()[z];if(G.bInList&&this.GetBusComp()){B=this.GetBusComp().GetSelection()}if(G.valueArray.length>B){if(G.valueArray[B]!=F){this.GetPrivateFieldMap()[z].valueArray[B]=String(F);this.GetPrivateFieldMap()[z].bDirty=true}}else{this.GetPrivateFieldMap()[z].valueArray.push(F);this.GetPrivateFieldMap()[z].bDirty=true}this.CellChange(this.GetSelection(),z,F)}if(!u.IsEmpty(C.GetFieldName())){A=this.GetFormattedValue(C,true);
E=this.GetBusComp().SetFormattedValue(C.GetFieldName(),F,C.GetDisplayFormat());if(!E){this.CellChange(this.GetSelection(),z,A);this.SetFocusToCtrl(z,true);return E}}else{return true}var D=this.GetBusComp().GetField(C.GetFieldName());F=this.GetFormattedValue(C,true);if(D&&(A!=F)&&(D.IsPostChanges()||D.IsBoundedPick())){E=this.PostChangesToBC(false,C.GetFieldName())}return E};h.prototype.OnClickSort=function(z,F){var C=this.GetListOfColumns();var B;for(var A in C){if(C.hasOwnProperty(A)){B=C[A];if(B.GetName()===z){break}}}var E=B.GetSpanPrefix()+"0";var D=CCFMiscUtil_CreatePropSet();D.SetProperty(y,E);switch(F){case o.get("SORT_ASCENDING"):this.InvokeMethod("SortAscending",D,true);break;case o.get("SORT_DESCENDING"):this.InvokeMethod("SortDescending",D,true);break;default:return}return};h.prototype.OnVerticalScroll=function(B){var z=null;var A=true;if(this.GetView()){if(!this.GetView().SetActiveApplet(this)){this.GetView().ProcessError();return false}}switch(B){case o.get("PAG_PREV_SET"):z="GotoPreviousSet";break;case o.get("PAG_NEXT_SET"):z="GotoNextSet";break;case o.get("PAG_NEXT_RECORD"):z="GotoNext";break;case o.get("PAG_PREV_RECORD"):z="GotoPrevious";break;case o.get("PAG_SCROLL_DN"):z="ScrollNextData";break;case o.get("PAG_SCROLL_UP"):z="ScrollPrevData";break;default:}if(z){var C=CCFMiscUtil_CreatePropSet();if((z==="ScrollPrevData"||z==="ScrollNextData")){A=false}if(!this.CanInvokeMethod(z)){if(z==="GotoPreviousSet"&&this.GetBusComp().GetSelection()!==0&&this.GetBusComp().GetRawRecords().length>0){this.HandleRowSelect(0,false,false)}else{if(z==="GotoNextSet"&&this.GetBusComp().GetSelection()!==(this.GetBusComp().GetRawRecords().length-1)&&this.GetBusComp().GetRawRecords().length>0){this.HandleRowSelect((this.GetBusComp().GetRawRecords().length-1),false,false)}}return}this.InvokeMethod(z,C,A)}};h.prototype.DoCollectFieldValues=function(B){var z=this.GetBusComp();if(z){var I="";var H=z.GetSelection();var G=this.GetListOfColumns();var A;var C="OF_";for(var J in G){if(G.hasOwnProperty(J)){var D=G[J];var F=D.GetFieldName();var E=D.GetName();if(F||this.IsPrivateField(E)){if(!this.CanUpdate(E)){continue}if(this.IsInQueryMode()){if(!u.IsEmpty(F)){B.SetProperty(D.GetSpanPrefix()+"0",this.GetFieldValue(D))}}else{A=this.GetFormattedValue(D);B.SetProperty(D.GetSpanPrefix()+H,A);if(IsOfflineModeEnabled()){if(SiebelApp.OfflineAppSettings.GetMode()===true||(!navigator.onLine&&SiebelApp.OfflineAppMgr.GetCacheType()==="Reactive")){B.SetProperty(C+F,A)}}}}}}SiebelApp.S_App.ListApplet.superclass.DoCollectFieldValues.call(this,B)}};h.prototype.InvokeMethod=function(B,D,C){D=D||CCFMiscUtil_CreatePropSet();if(this.GetActiveControl()){if(B.indexOf("PositionOnRow")!==-1){return false}}var A=D.GetProperty(o.get("SWE_REQ_ROW_ID_STR"));if(A=="1"){var E=D.GetProperty(o.get("SWE_ROW_STR"));if(this.GetBusComp().GetSelection()!==Number(E)){var F;if(B.indexOf("PositionOnRow")!==-1){F=true}SiebelApp.S_App.SetShowNewPage(false);if(!this.PostChangesToBC(true,null,F)||SiebelApp.S_App.GetShowNewPage()){return false}var z=Number(this.GetBeginRow())+Number(E);if(!this.GetBusComp().SetSelection(z)){return(false)}}}if(B.indexOf("PositionOnRow")!==-1){if(0){}else{this.GetBusComp().ClearUpdates();return(m.call(this,B,D))}}return(SiebelApp.S_App.ListApplet.superclass.InvokeMethod.call(this,B,D,C))};h.prototype.NotifyNewFieldData=function(z){this.RepopulateField(z)};h.prototype.NotifyNewDataWS=function(z){this.RepopulateField(z)};h.prototype.RepopulateField=function(B,A){var z=this.GetBusComp().GetIdValue();this.GetBusComp().SetCurRow(this.GetName(),this.GetBusComp().GetSelection());this.DoRepopulateField(z,B,A);SiebelApp.S_App.ListApplet.superclass.DoRepopulateField.call(this,B)};h.prototype.DoRepopulateField=function(z,G,E){var F;var C=this.IsInQueryMode();var D=this.GetListOfColumns();for(var H in D){if(D.hasOwnProperty(H)){var A=D[H];var B=A.GetFieldName();if(B===G){F=(C)?this.GetBusComp().GetFieldValue(G):this.GetFormattedFieldValue(A,E);this.CellChange(z,A.GetName(),F)}}}};h.prototype.CellChange=function(A,B,z){};h.prototype.DoSetAppletActive=function(z,A){if(!this.CanUpdateUI()){return true}this.SetHighlightState(z,A);this.ClearErrorMsg();return true};h.prototype.SetFocusToCtrl=function(z){};h.prototype.SetHighlightState=function(z,A){};h.prototype.HasHierarchy=function(){return this.GetBusComp()?this.GetBusComp().IsHierarchyBusComp():false};h.prototype.UpdateColWidth=function(){var A=this.GetListOfColumns(),B=false,E=arguments[0]||{},C=0,D;for(var z in E){if(E.hasOwnProperty(z)&&A[z]){A[z].SetWidth(E[z]);C++}}D=u.sortObjectMap(A,function(G,F){return(G.GetColNum()-F.GetColNum())});if(C>0){B=b.call(this,D)}A=D=null;return B};h.prototype.UpdateColIndex=function(){var E=arguments[0]||{},B=false,C=0,A=this.GetListOfColumns(),D;for(var z in E){if(E.hasOwnProperty(z)&&A[z]){A[z].SetColNum(E[z]);C++}}D=u.sortObjectMap(A,function(G,F){return(G.GetColNum()-F.GetColNum())});if(C>0){B=b.call(this,D)}A=D=null;return B};function q(B,A){var z;if(u.IsEmpty(this.GetBusComp())){return}z=this.GetBusComp().GetNotifyObject();if(!z||!z.Get_EnableUIUpdate(this.GetName())){return}if(!B){z.SetDoPopulate(this.GetName(),true)}}function m(A,D){var E="0";var C="0";var z="0";if(A.length>13){E=A.charAt(13);C=A.charAt(14);if(A.length>15){z=A.charAt(15)}}var B=D.Clone();B.SetProperty("SWEControlClicked",E);B.SetProperty("SWEShiftClicked",C);B.SetProperty("SWEIgnoreCtrlShift",z);return SiebelApp.S_App.ListApplet.superclass.InvokeMethod.call(this,"PositionOnRow",B)}function b(){var K=this.GetListPrefs(),A="",H,E=0,J,F,G=arguments[0]||[],z=!K||G.length<=0||K.indexOf(a)<0,C,B,I=this.GetListOfColumns(),D=false;if(z){K=null;return}H=K.split(a);A+=H[0];E=G.length;for(B=0;B<E;B++){if(!u.IsTrue(G[B].IsDynamic())){F="0"+r+G[B].GetName()+r+G[B].GetWidth();A+=a+F}}E=H.length;for(B=1;B<E;B++){J=H[B].split(r);if(J.length>0&&!I[J[1]]){A+=a+H[B]}J.splice(0,J.length)}C=CCFMiscUtil_CreatePropSet();C.SetProperty("SWEUserPreference",A);C.SetProperty("SWEKeepContext","1");C.SetProperty("SWEDIC","1");D=this.InvokeMethod("SetListAppletLayout",C);if(D){this.SetListPrefs(A)}C=K=I=null;return D}h.prototype.ChangeSelectionInPopup=function(A){var z=SiebelApp.S_App.GetActiveView().GetActiveApplet();if(z.GetBusComp().GetSelection()!==(A-1)){z.GetBusComp().SetSelection(A-1);z.InvokeMethod("PositionOnRow")}};return h}())};