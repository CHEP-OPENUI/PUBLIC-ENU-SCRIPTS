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
if(typeof(SiebelApp.S_App.BusComp)=="undefined"){Namespace("SiebelApp.S_App.BusComp");SiebelApp.S_App.BusComp=(function(){var Y=SiebelApp.Utils;var E=SiebelApp.Constants;var H=E.get("SWE_PROP_BC_OPERATION");var aw=E.get("SWE_PROP_BC_NOTI_BEGIN");var z=E.get("SWE_PROP_BC_NOTI_GENERIC");var u=E.get("SWE_PROP_BC_NOTI_STATE_CHANGED");var y=E.get("SWE_PROP_BC_NOTI_NEW_ACTIVE_ROW");var ac=E.get("SWE_PROP_BC_NOTI_DELETE_RECORD");var ab=E.get("SWE_PROP_BC_NOTI_DELETE_WORKSET");var ak=E.get("SWE_PROP_BC_NOTI_INSERT_WORKSET");var aB=E.get("SWE_PROP_BC_NOTI_NEW_SELECTION");var h=E.get("SWE_PROP_BC_NOTI_NEW_DATA");var a=E.get("SWE_PROP_BC_NOTI_NEW_RECORD");var am=E.get("SWE_PROP_BC_NOTI_NEW_DATA_WS");var Z=E.get("SWE_PROP_BC_NOTI_NEW_FIELD_DATA");var ad=E.get("SWE_PROP_BC_NOTI_NEW_RECORD_DATA");var g=E.get("SWE_PROP_BC_NOTI_NEW_RECORD_DATA_WS");var P=E.get("SWE_PROP_BC_NOTI_END");var aj=E.get("SWE_PROP_BC_NOTI_CHANGE_SELECTION");var e=E.get("SWE_PROP_BC_NOTI_NEW_PRIMARY");var av=E.get("SWE_PROP_BC_NOTI_BEGIN_QUERY");var b=E.get("SWE_PROP_BC_NOTI_NEW_QUERYSPEC");var T=E.get("SWE_PROP_BC_NOTI_NEW_FIELD_QUERYSPEC");var O=E.get("SWE_PROP_BC_NOTI_END_QUERY");var B=E.get("SWE_PROP_BC_NOTI_EXECUTE");var w=E.get("SWE_PROP_BC_NOTI_SCROLL_AMOUNT");var ai=E.get("SWE_PROP_IS_IN_QUERY");var o=E.get("SWE_NOTIFY_PAGE_REFRESH");var W=E.get("SWE_PROP_BC_NOTI_NEW_FIELD_LIST");var af=E.get("SWE_NOTIFY_TOTALS_CHANGED");function K(){fieldName="";newValue="";changed=false;setOnServer=false}function an(){var aC={};var a4=[];var aX=null;var aQ=[];var aZ=[];var a1=null;var aJ=new SiebelApp.S_App.NotifyObject();var a2;var aF=false;var aP=true;var aU=-1;var aO=-1;var aG=0;var aL=false;var aM=false;var a0=false;var aV=true;var a5=true;var aY=true;var aT=true;var aS=true;this.canUpdate=true;this.canUpdateDynamic=true;this.commitPending=false;this.tempCommitPending=false;var aR=false;var a3=false;var aW=false;var aN=false;var aE=false;var aI;var aD;var aH=0;var aK=[];this.m_bHierarchyBusComp=false;this.m_bHierarchyParentIdFld=null;this._EndLife=function(){a1=aJ=null};this.IsStale=function(){return aP};this.SetStale=function(a6){aP=a6};this.Reset=function(){aC={};aQ=[]};this.GetEnumUpdatePos=function(){return aH};this.SetEnumUpdatePos=function(a6){aH=a6};this.GetUpdateMode=function(){return m_updateMode};this.SetUpdateMode=function(a6){m_updateMode=a6};this.GetUpdateArray=function(){return a4};this.SetUpdateArray=function(a6){a4=a6};this.SetUpdateArrayValue=function(a6,a7){a4[a6]=a7};this.IsDeletePending=function(){return aR};this.IsInsertPending=function(){return a3};this.IsCommitPending=function(){return(this.commitPending||(this.GetUpdateArray()&&this.GetUpdateArray().length!==0)||Y.IsTrue(this.GetCommitPending()))};this.SetSortSpec=function(a6){aI=a6};this.GetSortSpec=function(){return aI};this.SetSearchSpec=function(a6){aD=a6};this.GetSearchSpec=function(){return aD};this.HasCommitPending=function(){return(this.commitPending||this.tempCommitPending)};this.IsInQueryState=function(){return aN};this.SetInQueryState=function(a6){aN=a6};this.GetNotifyObject=function(){return aJ};this.GetFieldMap=function(){return aC};this.GetFieldList=function(){return aQ};this.RemoveAllFields=function(){aQ=[];aC=null;aC={}};this.GetRawRecords=function(){return aZ};this.ReInitializeRawRecords=function(){this.SetStale(true);aZ=[]};this.SetBusObj=function(a6){a1=a6};this.GetBusObj=function(){this.ClearErrorMsg();return a1};this.SetSelection=function(a6){this.ClearUpdates();aU=parseInt(a6);return(true)};this.GetSelection=function(){while(this.GetRawRecords().length<=aU){aU--}return aU};this.IsNumRowsKnown=function(){return aL};this.GetNumRows=function(){return aG};this.SetNumRowsKnown=function(a6){aL=a6};this.SetNumRows=function(a6){aG=a6};this.GetCurRowNum=function(){return aO};this.SetCurRowNum=function(a6){aO=a6};this.GetTotalsChanged=function(){return aK};this.SetUpdateTotalValue=function(a6,a7){aK[a6]=a7};this.SetUpdateTotalArray=function(a6){aK=a6};this.GetParentBusComp=function(){if(Y.IsEmpty(this.GetParentId())){a2=null}else{a2=this.GetBusObj().GetBusComp(this.GetParentId())}this.GetParentBuscomp=function(){return a2};return a2};this.GetRecordSet=function(a7){var a9=this.GetFieldList();var bc=[];var bb=this.GetRawRecords();var a6=bb.length;var bh=[];for(var bd=0,be=a9.length;bd<be;bd++){bh[bd]=SiebelApp.S_App.LookupStringCache(a9[bd])}for(var a8=0;a8<a6;a8++){var ba={};for(var bf=0,be=bh.length;bf<be;bf++){var bg=bh[bf];ba[bg]=bb[a8][bf]}bc.push(ba)}if(true==this.IsHierarchyBusComp()){bc=this.UpdateHierInfo(bc)}this.GetRecordSet=function(bj){if(bj==true||this.IsStale()){var bl=this.GetFieldList();var bn=this.GetRawRecords();var bi=bn.length;bc=[];var bs=[];for(var bo=0,bp=bl.length;bo<bp;bo++){bs[bo]=SiebelApp.S_App.LookupStringCache(bl[bo])}for(var bk=0;bk<bi;bk++){var bm={};for(var bq=0,bp=bs.length;bq<bp;bq++){var br=bs[bq];bm[br]=bn[bk][bq]}bc.push(bm)}if(true==this.IsHierarchyBusComp()){bc=this.UpdateHierInfo(bc)}this.SetStale(false);return bc}else{return bc}};return bc};this.UpdateHierInfo=function(a8){var bg=a8.length;var bd,a7,a6,ba,bb;var bf=this.GetHierarchyParentId();for(var be=0;be<bg;be++){bd=a8[be]["Outline Number"];a7=false;a6=0;ba=null;bb=false;for(var a9=0,bc=bd.length;a9<bc;a9++){if(bd.charAt(a9)=="."){a6++}}a8[be]["Hierarchy Level"]=a6;bb=a8[be]["Has Children"];if(Y.IsTrue(bb)){a7=false}else{a7=true}a8[be]["Is Leaf"]=a7;ba=this.GetHierarchyParentRowIdx(a8,a8[be][bf]);a8[be]["Parent Id"]=ba;if(Y.IsTrue(String(a8[be]["Is Expanded"]))){a8[be]["Is Expanded"]=true}else{a8[be]["Is Expanded"]=false}}return a8};this.GetHierarchyParentRowIdx=function(a9,ba){var a7=a9.length;var a8=-1;if(ba){for(var a6=0;a6<a7;a6++){if(ba===a9[a6]["Id"]){a8=a6}}}return a8};this.ClearUpdates=function(){if(this.GetUpdateArray()!=null){this.tempCommitPending=true}this.SetUpdateArray(null);this.SetUpdateMode(null)};this.NewSelection=function(a6){var a7;if(a6<-1||this.GetRawRecords()==null||a6>=this.GetRawRecords().length){return}if(a6==this.GetSelection()){return}this.ClearUpdates();this.SetSelection(a6)};this.NewFieldData=function(a7,a6){};this.HasCustomShadow=function(){return aF};this.SetCustomShadow=function(a6){aF=a6};SiebelApp.S_App.ErrorObject.DecorateErrorCapability(this)}an.prototype.CanUpdate=function(){return this.canUpdate};an.prototype.EndLife=function(){var aD=this.GetFieldMap();for(var aC in aD){if(aD.hasOwnProperty(aC)){aD[aC].SetBusComp(null);delete aD[aC]}}aD=null;SiebelApp.S_App.ErrorObject.DeleteErrorObj(this);this._EndLife()};an.prototype.WSHome=function(aC){this.GetNotifyObject().SetCurrRow(aC,0);if(this.GetNotifyObject().GetCurrRow(aC)>this.GetRawRecords().length){this.GetNotifyObject().SetCurrRow(aC,-1);return false}return true};an.prototype.WSNextRecord=function(aC){var aF=this.GetNotifyObject();var aE=aF.GetCurrRow(aC);var aD=aF.GetWorkSetSize(aC);if(aE+1>=aD){return(false)}if(aF.GetBegRow(aC)+aE+1>=this.GetRawRecords().length){return false}this.GetNotifyObject().SetCurrRow(aC,aE+1);return(true)};an.prototype.IsCurWSRecActive=function(aD){var aG=this.GetSelection();
var aE=this.GetNotifyObject();var aC=aE.GetBegRow(aD);var aF=aE.GetCurrRow(aD);if((aG>=0)&&(aC+aF==aG)){return true}return false};an.prototype.SetWorkSetSize=function(aC,aD){if(this.GetNotifyObject().GetCurrRow(aC)>=aD){this.GetNotifyObject().SetCurrRow(aC,aD-1);return}else{this.GetNotifyObject().SetWorkSetSize(aC,aD)}};an.prototype.GetCurRow=function(aC){return this.GetNotifyObject().GetCurrRow(aC)};an.prototype.SetCurRow=function(aC,aD){return this.GetNotifyObject().SetCurrRow(aC,aD)};an.prototype.EnumUpdates=function(aC){if(aC){this.SetEnumUpdatePos(0)}if(this.GetUpdateArray()==null||this.GetEnumUpdatePos()>=this.GetUpdateArray().length){return(null)}var aD=this.GetUpdateArray()[this.GetEnumUpdatePos()];while((aD==null||!aD.changed||aD.setOnServer)&&(this.GetEnumUpdatePos()<this.GetUpdateArray().length)){this.SetEnumUpdatePos(this.GetEnumUpdatePos()+1);aD=this.GetUpdateArray()[this.GetEnumUpdatePos()]}if(this.GetEnumUpdatePos>=this.GetUpdateArray().length){return(null)}this.SetEnumUpdatePos(this.GetEnumUpdatePos()+1);return(aD)};an.prototype.AddRecord=function(aC){this.SetStale(true);this.GetRawRecords().push(aC)};an.prototype.InsertRecord=function(aD,aC){this.SetStale(true);this.GetRawRecords().splice(aD,0,aC)};an.prototype.RemoveRecord=function(aD,aC){if(aC===undefined){aC=1}this.SetStale(true);this.GetRawRecords().splice(aD,aC)};an.prototype.PositionById=function(aE){var aD=this.GetRecordSet();var aF=this.GetRawRecords().length;for(var aC=0;aC<aF;aC++){if(aD[aC]["Id"]==aE){this.SetSelection(aC);this.GetNotifyObject().Notify(E.get("SWE_NOTIFICATION_TYPE_POSITION"));break}}};an.prototype.HandleQuery=function(aC){var aK=this.GetRecordSet();var aF=[];for(var aD=0,aE=aK.length;aD<aE;aD++){var aG=true;for(var aI in aC){if(aC.hasOwnProperty(aI)){for(var aH in aC[aI]){if(aC[aI].hasOwnProperty(aH)){var aJ=aC[aI][aH];if(aK[aD][aI].indexOf(aJ)==-1){aG=false;break}}}}}if(aG){aF.push(aK[aD])}}this.GetRecordSet=function(){return aF};this.GetNotifyObject().Notify(E.get("SWE_NOTIFICATION_TYPE_REQUERY"));this.GetRecordSet=function(){return aK}};an.prototype.GetIdValue=function(){var aC=this.GetRecordSet();if(this.GetSelection()<0){return""}if(aC.length>0&&this.GetSelection()>=0){return aC[this.GetSelection()][E.get("SWE_ROW_ID_FIELD")]}return""};an.prototype.Register=function(aC){this.GetNotifyObject().Register(aC)};an.prototype.DeRegister=function(aC){this.GetNotifyObject().DeRegister(aC)};an.prototype.ProcessObjectInfo=function(aC){if(aC.GetType()!=E.get("SWE_PST_BUSCOMP_INFO")){return}this.SetBusObj(SiebelApp.S_App.GetActiveBusObj());var aE=Y.Curry(SiebelApp.S_App.constructor.prototype.DefineAccessor,this,aC);aE("GetName","SWE_PROP_NAME");aE("GetCommitPending","SWE_PROP_IS_COMMIT");aE("IsHierarchyBusComp","SWE_PROP_HAS_HIER");aE("GetNewRecPending","SWE_PROP_IS_NEW_REC_PEND");aE("IsTransientBC","SWE_PROP_IS_TRANSIENT");if(aC.PropertyExists(ai)){this.SetInQueryState(Y.IsTrue(aC.GetProperty(ai)))}var aD=this.IsHierarchyBusComp();if(!Y.IsEmpty(aD)&&aD=="1"){this.m_bHierarchyBusComp=true}var aG=aC.GetValue();this.GetVarName=function(){return aG};var aF=aC.GetProperty(E.get("SWE_PROP_SHADOW"));if(aF!=null&&aF!=undefined){if(SiebelApp.S_App.CreateJSShadow(this,aF)){this.SetCustomShadow(true)}}this.ProcessObjectInfoDync(aC);this.ProcessChildObjectInfo(aC);aC=null};an.prototype.ProcessObjectInfoDync=function(aC){var aE=Y.Curry(SiebelApp.S_App.constructor.prototype.DefineAccessor,this,aC);aE("GetParentId","SWE_PROP_PARENT_ID");aE("GetHierarchyParentId","SWE_PROP_HIER_PAR_ID_FLD");var aD=this.GetHierarchyParentId();if(!Y.IsEmpty(aD)){this.m_bHierarchyParentIdFld=aD}};an.prototype.ProcessNFLObjectInfo=function(aG){var aD=SiebelApp.S_App.BCField;var aC=aG.EnumChildren(true);do{var aF=aC.GetProperty(E.get("SWE_PROP_NAME"));if(!this.GetFieldMap()[SiebelApp.S_App.LookupStringCache(aF)]){var aE=new aD();aE.SetBusComp(this);aE.ProcessObjectInfo(aC);this.AddField(aE)}}while(aC=aG.EnumChildren(false))};an.prototype.ProcessRLObjectInfo=function(aJ){var aI;var aG=E.get("SWE_PROP_RECORD");var aD=E.get("SWE_PROP_VALUE");var aH=E.get("SWE_PST_TOTALS_REC");var aF;var aE;this.ReInitializeRawRecords();var aC=aJ.EnumChildren(true);aI=parseInt(aJ.GetProperty(E.get("SWE_PROP_IS_NROWS_KNOWN")));if(aI===1){this.SetNumRowsKnown(true)}else{this.SetNumRowsKnown(false)}aI=parseInt(aJ.GetProperty(E.get("SWE_PROP_CURR_RNUM")));if(aI){this.SetCurRowNum(aI)}aI=parseInt(aJ.GetProperty(E.get("SWE_PROP_NUM_ROWS")));if(aI){this.SetNumRows(aI)}do{if(aC.GetType()==aG){aF=[];aE=aC.GetPropertyAsStr(aD);CCFMiscUtil_StringToArray(aE,aF);this.AddRecord(aF);this.SetSelection(parseInt(aJ.GetProperty(E.get("SWE_PROP_ACTIVE_ROW"))))}else{if(aC.GetType()===aH){aF=[];aE=aC.GetPropertyAsStr(aD);CCFMiscUtil_StringToArray(aE,aF);this.SetUpdateTotalArray(aF)}}}while(aC=aJ.EnumChildren(false))};an.prototype.ProcessChildObjectInfo=function(aD){var aH=aD.EnumChildren(true);if(!aH){return}do{var aE=aH.GetType();var aF=E.get("SWE_PST_FIELD_LIST");var aC=E.get("SWE_PST_REMOVE_FIELD_LIST");var aG=E.get("SWE_PST_REC_LIST");switch(aE){case aC:this.RemoveAllFields();break;case aF:this.ProcessNFLObjectInfo(aH);break;case aG:this.ProcessRLObjectInfo(aH);break}}while(aH=aD.EnumChildren(false))};an.prototype.AddField=function(aC){if(!this.GetFieldMap()[SiebelApp.S_App.LookupStringCache(aC.GetName())]){aC.index=this.GetFieldList().length;var aD=SiebelApp.S_App.LookupStringCache(aC.GetName());this.GetFieldMap()[aD]=aC;this.GetFieldList().push(aC.GetName())}};an.prototype.GetField=function(aC){return this.GetFieldMap()[aC]};an.prototype.HandleServerNotifications=function(aC){var aE=SiebelApp.Constants;var aF=aC.GetProperty(aE.get("SWE_PROP_BC_NOTI_ACTIVE_ROW"));if(aF&&aF>=-1&&this.GetRawRecords()!=null&&aF<this.GetRawRecords().length){if(aF!=this.GetSelection()){this.NewSelection(aF)}}var aD=aC.GetProperty(H);switch(aD){case aw:r.call(this,aC);break;case z:ax.call(this,aC);break;case aB:x.call(this,aC);break;case u:aA.call(this,aC);break;case y:al.call(this,aC);break;case ac:v.call(this,aC);break;case ab:k.call(this,aC);break;case ak:m.call(this,aC);break;case h:ar.call(this,aC);break;case e:p.call(this,aC);break;case a:at.call(this,aC);case ad:ae.call(this,aC);break;case am:F.call(this,aC);break;case Z:G.call(this,aC);break;case W:J.call(this,aC);break;case g:d.call(this,aC);break;case aj:l.call(this,aC);break;case P:t.call(this,aC);break;case av:az.call(this,aC);break;case b:U.call(this,aC);break;case T:R.call(this,aC);break;case O:ah.call(this,aC);break;case B:ay.call(this,aC);break;case w:aa.call(this,aC);break;case o:N.call(this,aC);break;case af:n.call(this,aC);break;default:break}};function r(aC){this.GetNotifyObject().NotifyBeginNotifys()}function ax(aC){var aE=aC.GetProperty(E.get("SWE_PROP_NOTI_TYPE"));var aD=aC.GetProperty(E.get("SWE_PROP_ARGS_ARRAY"));var aF=[];if(aD){CCFMiscUtil_StringToArray(aD,aF)}this.GetNotifyObject().NotifyGeneric(aE,aF)}function x(aC){var aD=aC.GetProperty(E.get("SWE_PROP_NOTI_SELECTED"));I.call(this,aD)}function I(aC){this.GetNotifyObject().NotifyNewSelection(aC)
}function l(aC){this.GetNotifyObject().NotifyChangeSelection()}function p(aC){var aF;var aE;var aD;var aG;aG=aC.GetProperty("f");if(aG==null){Y.Alert("Missing primary field name for NotifyNewPrimary!");return}aD=this.GetSelection();for(aF=0;aF<this.GetRawRecords().length;aF++){this.SetSelection(aF);ag.call(this,aG,"N")}this.SetSelection(aD);ag.call(this,aG,"Y");this.GetNotifyObject().NotifyNewPrimary(aG)}function F(aJ){var aK=[];var aG=[];var aM,aL,aC;var aL=aJ.GetProperty(E.get("SWE_PROP_NOTI_FIELD"));if(aL==null){return}var aD=E.get("SWE_PROP_FIELD_VALUES");var aH=aJ.GetChildCount();for(var aF=0;aF<aH;aF++){var aO=aJ.GetChild(aF);if(aO.GetType()==aD){var aI=aO.GetProperty(E.get("SWE_PROP_FIELD_ARRAY"));var aE=aO.GetProperty(E.get("SWE_PROP_VALUE_ARRAY"));break}}if(aF==aH){return}if((CCFMiscUtil_StringToArray(aI,aK)==true)&&(CCFMiscUtil_StringToArray(aE,aG)==true)){var aN=aG.length;for(aF=0;aF<aN;aF++){if(aK.length==0){aL=this.GetFieldList()[aF];if(!aL){continue}}else{aL=aK[aF];if(!aL){break}fieldIndex=parseInt(aL);if(isNaN(fieldIndex)){return}if(fieldIndex<0||fieldIndex>this.GetFieldList().length){continue}aL=this.GetFieldList()[fieldIndex];if(!aL){continue}}aC=aG[aF];aL=SiebelApp.S_App.LookupStringCache(aL);ag.call(this,aL,aC)}}this.GetNotifyObject().NotifyNewDataWS(aL)}function ag(aI,aF){var aG;var aD;if(this.GetSelection()<0){return}if(aI==null||aI==""){this.SetErrorMsg("BCErrInvalidFieldName");return(false)}aG=this.GetField(aI);if(aG==null){this.SetErrorMsg("BCErrNoSuchField",aI);return(false)}aD=aG.index;if(aD<0){this.SetErrorMsg("BCErrNoSuchField",aI);return(false)}var aE=this.GetUpdateArray();if(aE&&aD<aE.length){var aH=aE[aD];if(aH&&aH.newValue!=aF){this.SetUpdateArrayValue(aD,null)}}var aC=this.GetRawRecords()[this.GetSelection()];aC[aD]=aF;this.SetStale(true)}function G(aC){this.SetStale(true);var aD=aC.GetProperty(E.get("SWE_PROP_NOTI_FIELD"));if(aD==null){Y.Alert("missing fieldname for new field notification");return}this.GetNotifyObject().NotifyNewFieldData(aD)}function J(aC){this.GetNotifyObject().NotifyNewFieldList()}function at(aC){this.GetNotifyObject().NotifyNewRecord()}function d(aI){var aJ=[];var aF=[];var aH;var aD;var aC=E.get("SWE_PROP_FIELD_VALUES");var aG=aI.GetChildCount();for(var aE=0;aE<aG;aE++){var aL=aI.GetChild(aE);if(aL.GetType()==aC){aH=aL.GetProperty(E.get("SWE_PROP_FIELD_ARRAY"));aD=aL.GetProperty(E.get("SWE_PROP_VALUE_ARRAY"))}}if(aE==aG){}if((CCFMiscUtil_StringToArray(aH,aJ)==true)&&(CCFMiscUtil_StringToArray(aD,aF)==true)){var aK=aF.length;for(aE=0;aE<aK;aE++){if(aJ.length==0){fieldName=this.GetFieldList()[aE];if(!fieldName){continue}}else{fieldName=aJ[aE];if(!fieldName){break}fieldIndex=parseint(fieldName);if(isNaN(fieldIndex)){return}if(fieldIndex<0||fieldIndex>this.GetFieldList().length){continue}fieldName=this.GetFieldList()[fieldIndex];if(!fieldName){continue}}fieldValue=aF[aE];fieldName=SiebelApp.S_App.LookupStringCache(fieldName);ag.call(this,fieldName,fieldValue)}}this.GetNotifyObject().NotifyNewRecordDataWS(fieldName)}function ae(aC){this.GetNotifyObject().NotifyNewRecordData(aC)}function aA(aC){var aE;var aD;aE=aC.GetProperty("state");if(aE==null||aE==""){return}aD=parseInt(aC.GetProperty("value"));if(isNaN(aD)){aD=0}switch(aE){case"activeRow":case"ar":this.SetSelection(aD);this.NewSelection(aD);break;case"bCanAssociate":case"ca":this.canAssociate=(aD!=0);break;case"bCanDelete":case"cd":this.canDelete=(aD!=0);break;case"bCanInsert":case"ci":this.canInsert=(aD!=0);break;case"bCanInsertDynamic":case"cid":this.canInsertDynamic=(aD!=0);break;case"bCanMergeRecords":case"cm":this.canMerge=(aD!=0);break;case"bCanQuery":case"cq":this.canQuery=(aD!=0);break;case"bCanUpdate":case"cu":this.canUpdate=(aD!=0);break;case"bCanUpdateDynamic":case"cud":this.canUpdateDynamic=(aD!=0);break;case"bCommitPending":case"cp":this.commitPending=(aD!=0);if(!this.commitPending){this.ClearUpdates();this.GetCommitPending=function(){return false}}break;case"bDelRecPending":case"dp":this.deletePending=(aD!=0);break;case"bHasAssocList":case"hal":this.hasAssocList=(aD!=0);break;case"bNewRecPending":case"np":this.insertPending=(aD!=0);break;case"curRowNum":case"cr":this.SetCurRowNum(aD);break;case"numRows":case"nr":this.SetNumRows(aD);break;case"bNumRowsKnown":case"nrk":this.SetNumRowsKnown(aD!==0);break;case"bNotifyEnabled":case"n":this.disableNotfiy=(aD==0);break;case"bInMultiSelMode":case"ms":this.inMultiSelMode=(aD!=0);break;case"bInverseSelection":case"is":break;case"numSelected":case"ns":break;case"bNumSelectedKnown":case"nsk":break;case"bInQueryState":case"qs":this.inQueryState=(aD!=0);if(!this.inQueryState){this.SetInQueryState(false)}else{this.SetInQueryState(true)}break}this.GetNotifyObject().NotifyStateChanged(aE,aD)}function ar(aC){this.GetNotifyObject().NotifyNewData(aC)}function t(aC){this.GetNotifyObject().NotifyEndNotifys(aC)}function al(aC){var aD;aD=aC.GetProperty("ar");if(aD==null){Y.Alert("Missing row index in NotifyNewActiveRow!");return}aD=parseInt(aD);if(isNaN(aD)||aD<0||aD>=this.GetRawRecords().length){Y.Alert("Invalid row index in NotifyNewActiveRow!");return}this.NewSelection(aD);this.GetNotifyObject().NotifyNewActiveRow()}function v(aE){var aD;var aC;aD=(aE.GetProperty("bSetup")=="true");aC=(aE.GetProperty("bUp")=="true");this.GetNotifyObject().NotifyDeleteRecord(aD,aC)}function k(aD){var aH;var aG;var aF;var aE;var aC;var aI;aF=parseInt(aD.GetProperty("index"));if(isNaN(aF)){Y.Alert("Missing index property for NotifyDeleteWorkSet!");return}aE=parseInt(aD.GetProperty("nr"));if(isNaN(aE)){Y.Alert("Missing numRecords property for NotifyDeleteWorkSet!");return}if((aE!=-1)&&(aF<0||aF>=this.GetRawRecords().length)){Y.Alert("Index out of bounds for NotifyDeleteWorkSet!");return}if(aF<=this.GetSelection()){this.ClearUpdates()}if(aE>0){aI=aF+aE}else{if(aE==-1){aI=this.GetRawRecords().length}else{aI=aF}}aC=(aE==1)?this.GetRawRecords()[aF]:null;if(aF<aI){if(aE==-1){aE=aI-aF}this.RemoveRecord(aF,aE)}if(this.GetRawRecords().length<1){this.ReInitializeRawRecords()}this.GetNotifyObject().NotifyDeleteWorkSet(aF,aE,aC)}function az(aC){this.ClearUpdates();this.GetNotifyObject().NotifyBeginQuery()}function U(aC){var aD=aC.GetProperty(E.get("SWE_NOTIFY_SEARCHSPEC_STR"));if(Y.IsEmpty(aD)){var aE=this.GetFieldMap();if(!Y.IsEmpty(aE)){for(field in aE){if(aE.hasOwnProperty(field)){aE[field].SetSearchSpec("")}}}}this.SetSearchSpec(aD);this.GetNotifyObject().NotifyNewQuerySpec()}function R(aC){var aI;var aG;var aF;aF=(aC.GetProperty("err"));if(!Y.IsEmpty(aF)){return}aI=(aC.GetProperty("f"));if(Y.IsEmpty(aI)){return}aG=(aC.GetProperty("v"));var aE=this.GetFieldMap()[aI];if(aE){aE.SetSearchSpec(aG);var aD=aE.index}else{return}if(this.GetUpdateArray()!=null&&aD>=0&&aD<this.GetUpdateArray().length){var aH=this.GetUpdateArray()[aD];if(aH!=null&&aG!=aH.newValue){delete aH;this.SetUpdateArrayValue(aD,null)}}this.GetNotifyObject().NotifyNewFieldQuerySpec(aI)}function ah(aC){this.ClearUpdates();this.GetNotifyObject().NotifyEndQuery()}function ay(aC){m_sortSpec=(aC.GetProperty("srt"));
m_searchSpec=(aC.GetProperty("s"));this.GetNotifyObject().NotifyExecute()}function aa(aC){var aD;var aE=0;aD=Y.IsTrue(aC.GetProperty("bUp"));aE=aC.GetProperty("scrollAmount");this.GetNotifyObject().NotifyScrollAmount(aD,aE)}function N(aC){this.GetNotifyObject().NotifyPageRefresh()}function n(aD){var aG,aJ,aI,aH,aC,aE;if(aD){aG=aD.GetProperty("FieldArray");aJ=aD.GetProperty("ValueArray");if(aG&&aJ){aI=[];aH=[];CCFMiscUtil_StringToArray(aG,aI);CCFMiscUtil_StringToArray(aJ,aH);aC=aH.length;for(var aF=0;aF<aC;aF++){if(this.GetField(aI[aF])){aE=(this.GetField(aI[aF])).index;if(aE>=0){this.SetUpdateTotalValue(aE,aH[aF])}}}}}}an.prototype.GetFieldValue=function(aD){var aC="";if(this.IsInQueryState()){aC=this.GetFieldSearchSpec(aD)}else{aC=this.DoGetFieldValue(aD)}return aC};an.prototype.WSGetFieldValue=function(aC){return this.WSDoGetFieldValue(aC)};an.prototype.DoGetFieldValue=function(aG){var aD;var aC;var aF;var aE;if(this.GetSelection()<0){this.SetErrorMsg("BCErrNoActiveRow");return""}if(aG==null||aG==""){this.SetErrorMsg("BCErrInvalidFieldName");return(null)}field=this.GetField(aG);if(field==null){this.SetErrorMsg("BCErrNoSuchField",aG);return(false)}aD=field.index;if(aD<0){this.SetErrorMsg("BCErrNoSuchField",aG);return(null)}if(this.GetUpdateArray()!=null){aF=this.GetUpdateArray()[aD];if(aF!=null){return(aF.newValue)}}if(this.GetRawRecords()[this.GetSelection()]!=null&&!this.IsInQueryState()){aE=this.GetRawRecords()[this.GetSelection()][aD];if(aE==null){aE=""}}else{aE=""}return(aE)};an.prototype.WSDoGetFieldValue=function(aG){var aD;var aC;var aF;var aE;if(this.GetSelection()<0){return""}if(aG==null||aG==""){return(null)}field=this.GetField(aG);if(field==null){return(false)}aD=field.index;if(aD<0){this.SetErrorMsg("BCErrNoSuchField",aG);return(null)}if(this.GetRawRecords()[this.GetSelection()]!=null){aE=this.GetRawRecords()[this.GetSelection()][aD];if(aE==null){aE=""}}else{aE=""}return(aE)};function m(aI){var aG=[];var aD;var aJ;var aK;var aE;var aL;var aH;var aF;var aC;if(this.GetFieldList()==null){Y.Alert("Missing field array for NotifyInsertWorkSet!");return}aH=parseInt(aI.GetProperty("index"));if(isNaN(aH)){Y.Alert("Missing index property for NotifyInsertWorkSet!");return}if(aH<0){aH=0}if(aH>this.GetRawRecords().length){aH=this.GetRawRecords().length}aK=aI.GetChildByType("FieldValues");if(aK==null){return}if(aH<=this.GetSelection()){this.ClearUpdates()}aC=aK.GetProperty("ValueArray");CCFMiscUtil_StringToArray(aC,aG);this.InsertRecord(aH,aG);this.GetNotifyObject().NotifyInsertWorkSet(aH,aG)}an.prototype.GetFormattedValue=function(aM,aE,aQ){var aO="";if(!aE||aE.length==0){this.SetErrorMsg("BCErrInvalidFieldName");return aO}if(this.inQueryState){aO=this.GetFieldSearchSpec(aE);return aO}if(aM!=-1){aO=this.WSGetFieldValue(aE)}else{aO=this.GetFieldValue(aE)}var aD=false;if(aO!=""&&SiebelApp.S_App.LocaleObject){var aF=this.GetField(aE);if(!aF){this.SetErrorMsg("BCErrNoSuchField",aE);return""}if(aF.GetDataType()=="currency"){var aI;var aJ;var aL,aK;var aG=aF.GetCurrField();aL=aG.indexOf("|");if(aL>=0){aK=(aG.substring(aL+1).indexOf("|")==-1)?-1:(aG.substring(aL+1).indexOf("|")+aL);if(aK<0){aK=aG.length}aI=aG.substr(0,aL);if(aI.length!=0){bHasCurrCode=true;sCurrCode=this.GetFieldValue(aI);if(sCurrCode){SiebelApp.S_App.LocaleObject.SetCurrencyCode(sCurrCode)}else{SiebelApp.S_App.LocaleObject.SetCurrencyCode("")}}aI=aG.substr(aL+1,aK-aL-1);if(aI.length!=0){aJ=this.GetFieldValue(aI);if(aJ){SiebelApp.S_App.LocaleObject.SetExchDate(aJ)}}}}if(aF.GetScale()!=0){SiebelApp.S_App.LocaleObject.SetScale(aF.GetScale());aD=true}var aC=aF.GetDataType();var aP=aO;var aH=aQ;var aN=SiebelApp.S_App.LocaleObject.StringToFormatted(aC,aP,aH);aO=aN;if(aD){SiebelApp.S_App.LocaleObject.SetScale(0)}if(SiebelApp.S_App.LocaleObject.HasErrorMsg()){this.SetErrorMsg(SiebelApp.S_App.LocaleObject.GetErrorCode());return""}}this.ClearErrorMsg();return aO};an.prototype.SetFormattedValue=function(aM,aD,aI){var aJ;var aE;if(this.IsInQueryState()&&!Y.IsEmpty(aM)){this.SetFieldSearchSpec(aM,aD)}if(Y.IsEmpty(aD)){return this.SetFieldValue(aM,"")}if(Y.IsEmpty(aM)){this.SetErrorMsg("BCErrInvalidFieldName");return false}aJ=this.GetField(aM);if(aJ==null){this.SetErrorMsg("BCErrNoSuchField",aM);return(false)}aE=aD;if(SiebelApp.S_App.LocaleObject){var aC=aJ.GetDataType();var aL=aD;var aF=aI;var aK=0;if(aC=="utcdatetime"&&aF&&((aK=aF.indexOf("MMM "))!=-1)){if((SiebelApp.Utils.FindIndexOfFrom(aF,"DD,YYYY",aK+4)!=-1)||(SiebelApp.Utils.FindIndexOfFrom(aF,"dd,yyyy",aK+4)!=-1)||(SiebelApp.Utils.FindIndexOfFrom(aF,"dd,yy",aK+4)!=-1)||(SiebelApp.Utils.FindIndexOfFrom(aF,"dd,YYYY",aK+4)!=-1)||(SiebelApp.Utils.FindIndexOfFrom(aF,"dd,YY",aK+4)!=-1)||(SiebelApp.Utils.FindIndexOfFrom(aF,"DD, YYYY",aK+4)!=-1)||(SiebelApp.Utils.FindIndexOfFrom(aF,"dd, yyyy",aK+4)!=-1)||(SiebelApp.Utils.FindIndexOfFrom(aF,"dd, yy",aK+4)!=-1)||(SiebelApp.Utils.FindIndexOfFrom(aF,"dd, YYYY",aK+4)!=-1)||(SiebelApp.Utils.FindIndexOfFrom(aF,"dd, YY",aK+4)!=-1)){strVal=aL.split("");var aG=strVal.length;if((aG>(aK+3))&&(strVal[aK+3]==" ")){strVal.splice(aK+3,1);strVal[aK+3]="-"}if((aG>(aK+5))&&(strVal[aK+5]==",")){if((aG>(aK+6))&&(strVal[aK+6]==" ")){strVal.splice(aK+5,2)}else{strVal.splice(aK+5,1)}strVal[aK+5]="-"}else{if((aG>(aK+6))&&(strVal[aK+6]==",")){if((aG>(aK+7))&&(strVal[aK+7]==" ")){strVal.splice(aK+6,2)}else{strVal.splice(aK+6,1)}strVal[aK+6]="-"}}aL=strVal.join("")}}var aH=SiebelApp.S_App.LocaleObject.FormattedToString(aC,aL,aF);aE=aH;if(SiebelApp.S_App.LocaleObject.HasErrorMsg()){this.SetErrorMsg(SiebelApp.S_App.LocaleObject.GetErrorCode(),aD);aE="";return(false)}}return this.SetFieldValue(aM,aE)};an.prototype.SetFieldValue=function(aD,aC){if(this.IsInQueryState()){this.SetFieldSearchSpec(aD,aC)}else{if(!s.call(this,aD,aC)){return(false)}if(!this.DoFieldValidation(aD,aC)){return false}if(!this.DoFieldDataUpdate(aD,aC)){return false}if(!this.DoFieldDataNotify(aD,aC)){return false}}this.ClearErrorMsg();return true};an.prototype.UpdateRecord=function(){if(this.GetUpdateArray()!=null){this.ClearErrorMsg();return(true)}if(!this.CanUpdate(true)){this.SetErrorMsg("BCErrCantUpdate");return(false)}var aC=new Array(this.GetFieldList().length);this.SetUpdateArray(aC);this.SetUpdateMode("update");this.ClearErrorMsg();return(true)};an.prototype.DoFieldValidation=function(aF,aD){var aE;var aC;if(this.GetUpdateArray()==null&&!this.UpdateRecord()){this.SetErrorMsg("BCErrCantUpdate");return(false)}if(aF==null||aF==""){this.SetErrorMsg("BCErrInvalidFieldName");return(false)}aE=this.GetField(aF);if(aE==null){this.SetErrorMsg("BCErrNoSuchField",aF);return(false)}aC=aE.index;if(aC<0){this.SetErrorMsg("BCErrNoSuchField",aF);return(false)}return(true)};an.prototype.DoFieldDataUpdate=function(aG,aD){var aF;var aC;var aE;aE=this.GetField(aG);aC=aE.index;aF=this.GetUpdateArray()[aC];if(aF==null){aF=this.GetUpdateArray()[aC]=new K;aF.fieldName=aG;aF.field=aE;aF.oldValue=this.GetRawRecords()[this.GetSelection()][aC];aF.newValue=aF.oldValue}if(aD!=aF.newValue){aF.fieldName=aG;
aF.newValue=aD;aF.changed=true;aF.setOnServer=false}return(true)};an.prototype.DoFieldDataNotify=function(aD,aC){this.GetNotifyObject().NotifyNewFieldData(aD,aC);return true};an.prototype.CanUpdate=function(){return this.CanUpdate()};an.prototype.GetFieldSearchSpec=function(aG){if(!aG){this.SetErrorMsg("BCErrInvalidFieldName");return""}var aD=this.GetFieldMap()[aG];if(!aD){this.SetErrorMsg("BCErrNoSuchField",aG);return""}var aE=null;if(aD){var aC=aD.index}if(aC>=0){if(this.GetUpdateArray()!=null&&aC<this.GetUpdateArray().length){var aF=this.GetUpdateArray()[aC];if(aF!=null){aE=aF.newValue}}}if(aE===null&&aD){aE=aD.GetSearchSpec()}this.ClearErrorMsg();return aE};an.prototype.SetFieldSearchSpec=function(aI,aE){var aF,aC,aH,aI,aG;if(Y.IsEmpty(aI)){this.SetErrorMsg("BCErrInvalidFieldName",aI);return""}aG=this.GetFieldSearchSpec(aI);if(aG===aE){return""}aF=this.GetFieldMap()[aI];if(!aF){this.SetErrorMsg("BCErrNoSuchField",aI);return""}aC=aF.index;if(aC<0){this.SetErrorMsg("BCErrNoSuchField",aI);return""}if(Y.IsEmpty(this.GetUpdateArray())){var aD=new Array(this.GetFieldList().length);this.SetUpdateArray(aD);this.SetUpdateMode("update")}if(aC<this.GetUpdateArray().length){aH=this.GetUpdateArray()[aC]}if(!aH){aH=new K;this.GetUpdateArray()[aC]=aH;aH.fieldName=aI;aH.field=aF;aH.oldValue=aF.GetSearchSpec();aH.newValue=aH.oldValue}if(aE!=aH.newValue){aH.newValue=aE;aH.changed=true;aH.setOnServer=false}this.GetNotifyObject().NotifyNewFieldQuerySpec(aI);this.ClearErrorMsg()};an.prototype.InvokeMethod=function(aC,aD){var aE;aD=aD||CCFMiscUtil_CreatePropSet();aE=C.call(this,aC,aD);return(aE)};function C(aI,aD){var aH;var aE;var aC;var aG;var aF;this.ClearErrorMsg();switch(aI){case"CanDeleteRecords":aG=this.CanDelete();break;case"CanInsertRecords":aG=this.CanInsert(true);break;case"CanMergeRecords":aG=this.CanMerge();break;case"CanUpdateRecords":aG=this.CanUpdate(true);break;case"CopyRecord":aG=this.CopyRecord();break;case"DeleteRecord":aG=this.DeleteRecord();break;case"End":aG=this.End();break;case"Home":aG=this.Home();break;case"NewRecord":aG=this.NewRecord();break;case"NextSet":aG=this.NextSet(null);break;case"PriorRecord":aG=this.PriorRecord();break;case"PriorSet":aG=this.PriorSet(null);break;case"RedoRecord":aG=this.RedoRecord();break;case"UndoRecord":aG=this.UndoRecord();break;case"UpdateRecord":aG=this.UpdateRecord();break;case"WriteRecord":aG=this.WriteRecord();break;default:aC=CCFMiscUtil_CreatePropSet();aC.SetType("InvokeMethod");if(this.GetSelection()>=0){aC.SetProperty("r",this.GetIdValue())}else{aC.SetProperty("r","")}aC.SetProperty("Method",aI);aC.SetProperty("ArgCount","0");aG=D.call(this,aI,aC);break}if(aG){return("Y")}return("N")}function D(aG,aF){var aE;var aC=CCFMiscUtil_CreatePropSet();var aD;aE=CCFMiscUtil_CreatePropSet();aE.SetProperty("SWECmd","InvokeMethod");aE.SetProperty("SWEVI",this.GetBusObj().GetZone());aE.SetProperty("SWEBusComp",this.GetVarName());aE.SetProperty("SWEMethod",aG);aE.SetProperty("SWEIPS",aF.EncodeAsString());SiebelApp.S_App.CallServer(aE,aC,true,{scope:this,cb:function(){}});if(aC!=null){aD=aC.GetProperty("Status");if(aD===E.get("SWE_RPC_PROP_STATUS_ERROR")){this.ProcessError()}return(aD!="Error")}return(true)}an.prototype.CanDelete=function(){return Q.call(this)};an.prototype.CanInsert=function(aC){return f.call(this,aC)};an.prototype.CanUpdate=function(aC){return c.call(this,aC)};an.prototype.CanMergeRecords=function(){return M.call(this)};an.prototype.CopyRecord=function(aC){return i.call(this,aC)};an.prototype.DeleteRecord=function(){return L.call(this)};an.prototype.End=function(){return X.call(this)};an.prototype.Home=function(){return au.call(this)};an.prototype.NewRecord=function(aC){return aq.call(this,aC)};an.prototype.NextSet=function(aC){return A.call(this,aC)};an.prototype.PriorRecord=function(){return j.call(this)};an.prototype.PriorSet=function(aC){return ap.call(this,aC)};an.prototype.RedoRecord=function(){return V.call(this)};an.prototype.UndoRecord=function(){return q.call(this)};an.prototype.WriteRecord=function(){return S.call(this)};function Q(){return(this.canDelete)}function f(aC){if(aC){return(this.canInsertDynamic)}else{return(this.canInsert)}}function M(){return(this.canMerge)}function i(aD){var aC;if(!this.CanInsert()){this.SetErrorMsg("BCErrCantInsert");return false}this.ClearUpdates();if(this.GetSelection()<0||this.GetSelection()>=this.GetRecordSet().length){this.SetErrorMsg("BCErrNoActiveRow");return false}aC=CCFMiscUtil_CreatePropSet();aC.SetType("CopyRecord");aC.SetProperty("r",this.GetIdValue());aC.SetProperty("Before",aD?"Y":"N");if(!D.call(this,"CopyRecord",aC)){return false}this.ClearErrorMsg();return true}function L(){var aC;if(!this.CanDelete()){this.SetErrorMsg("BCErrCantDelete");return false}this.ClearUpdates();if(this.GetSelection()<0||this.GetSelection()>=this.GetRecordSet().length){this.SetErrorMsg("BCErrNoActiveRow");return false}aC=CCFMiscUtil_CreatePropSet();aC.SetType("DeleteRecord");aC.SetProperty("r",this.GetIdValue());if(!D.call(this,"DeleteRecord",aC)){return false}this.ClearErrorMsg();return true}function X(){var aC;this.ClearUpdates();aC=CCFMiscUtil_CreatePropSet();aC.SetType("End");if(!D.call(this,"End",aC)){return false}this.ClearErrorMsg();return true}function au(){var aC;this.ClearUpdates();aC=CCFMiscUtil_CreatePropSet();aC.SetType("Home");if(!D.call(this,"Home",aC)){return false}this.ClearErrorMsg();return true}function aq(aD){var aC;this.ClearUpdates();if(!this.CanInsert(true)){this.SetErrorMsg("BCErrCantInsert");return false}aC=CCFMiscUtil_CreatePropSet();aC.SetType("NewRecord");aC.SetProperty("r",this.GetIdValue());aC.SetProperty("Before",aD?"Y":"N");if(!D.call(this,"NewRecord",aC)){return false}this.ClearErrorMsg();return true}function ao(){var aC;this.ClearUpdates();aC=CCFMiscUtil_CreatePropSet();aC.SetType("NextRecord");aC.SetProperty("r",this.GetIdValue());if(!D.call(this,"NextRecord",aC)){return false}this.ClearErrorMsg();return true}function A(aD){var aC;this.ClearUpdates();aC=CCFMiscUtil_CreatePropSet();aC.SetType("NextSet");aC.SetProperty("r",this.GetIdValue());if(!D.call(this,"NextSet",aC)){return false}this.ClearErrorMsg();return true}function j(){var aC;this.ClearUpdates();aC=CCFMiscUtil_CreatePropSet();aC.SetType("PriorRecord");aC.SetProperty("r",this.GetIdValue());if(!D.call(this,"PriorRecord",aC)){return false}this.ClearErrorMsg();return true}function ap(aD){var aC;this.ClearUpdates();aC=CCFMiscUtil_CreatePropSet();aC.SetType("PriorSet");aC.SetProperty("r",this.GetIdValue());if(!D.call(this,"PriorSet",aC)){return false}this.ClearErrorMsg();return true}function V(){var aC;this.ClearUpdates();aC=CCFMiscUtil_CreatePropSet();aC.SetType("RedoRecord");aC.SetProperty("r",this.GetIdValue());if(!D.call(this,"RedoRecord",aC)){return false}this.ClearErrorMsg();return true}function q(){var aC;if(this.GetUpdateArray()==null){this.ClearErrorMsg();return true}this.ClearUpdates();aC=CCFMiscUtil_CreatePropSet();aC.SetType("UndoRecord");aC.SetProperty("r",this.GetIdValue());if(!D.call(this,"UndoRecord",aC)){return false
}this.ClearErrorMsg();return true}function S(){var aG;var aH;var aI;var aE;var aD;var aJ;var aC;var aF;if(!this.IsCommitPending()){this.ClearErrorMsg();return true}aG=0;if(this.GetUpdateArray()!=null){for(aE=0;aE<this.GetUpdateArray().length;aE++){aJ=this.GetUpdateArray()[aE];if(aJ!=null&&aJ.changed&&!aJ.setOnServer){aG++}}}if(aG>0||this.IsCommitPending()){aD=CCFMiscUtil_CreatePropSet();aD.SetType("WriteRecord");aD.SetProperty("r",this.GetIdValue());if(aG>0){aC=new Array();aF=new Array();aI=CCFMiscUtil_CreatePropSet();aI.SetType("FieldValues");aH=0;for(aE=0;aE<this.GetUpdateArray().length;aE++){aJ=this.GetUpdateArray()[aE];if(aJ!=null&&aJ.changed&&!aJ.setOnServer){aC[aH]=aJ.field.name;aF[aH]=aJ.newValue;aH++}}aI.SetProperty("FieldArray",CCFMiscUtil_ArrayToString(aC));aI.SetProperty("ValueArray",CCFMiscUtil_ArrayToString(aF));aD.AddChild(aI)}if(!D.call(this,"WriteRecord",aD)){return false}}this.ClearUpdates();this.ClearErrorMsg();return true}function c(aC){if(aC){return(this.canUpdateDynamic)}else{return(this.canUpdate)}}function s(aE,aD){var aC;if(this.HasCustomShadow()&&this.shadow&&typeof(this.shadow.OnPreSetFieldValue)==="function"){aC=this.shadow.OnPreSetFieldValue(aE,aD);if(aC=="CancelOperation"){return false}return true}return true}return an}())};