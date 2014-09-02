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
if(typeof(SiebelApp.S_App.Currency)==="undefined"){SiebelJS.Namespace("SiebelApp.S_App.Currency");SiebelApp.S_App.Currency=(function(){var a=SiebelJS.Dependency("SiebelApp.Utils");var f=SiebelJS.Dependency("SiebelApp.Constants");var e=207;var d=208;var c=209;function b(){var w=null;var u;var E;var A;var G;var D;var z;var m;var C;var j;var t=false;var s;var y;var H;var K;var B;var k;var v;var h;var F;var J;var r;var i;var p=true;var o;var x;var n;var I=false;var q;var l;this.isShowingPick=function(){return I};this.SetShowingPick=function(L){I=L};this.GetEDateFieldName=function(){return j};this.SetEDateFieldName=function(L){j=L};this.GetCCodeMethod=function(){return D};this.SetCCodeMethod=function(L){D=L};this.GetCCodeFieldName=function(){return G};this.SetCCodeFieldName=function(L){G=L};this.GetPopupBM=function(){return h};this.SetPopupBM=function(L){h=L};this.GetRowID=function(){return v};this.SetRowID=function(L){v=L};this.GetCurrentView=function(){return B};this.SetCurrentView=function(L){B=L};this.GetCurrencySign=function(){return w};this.SetCurrencySign=function(L){w=L};this.SetEDateLabel=function(L){u=L};this.GetEDateLabel=function(){return u};this.SetAmountLabel=function(L){E=L};this.GetAmountLabel=function(){return E};this.SetCCodeLabel=function(L){A=L};this.GetCCodeLabel=function(){return A};this.CanDisplayDate=function(){return t};this.HideExchDate=function(){t=true};this.GetCurrencyApplet=function(){return k};this.SetCurrencyApplet=function(L){k=L};this.SetCurrencyControl=function(L){F=L};this.GetCurrencyControl=function(){return F};this.SetDateControlName=function(L){J=L};this.GetDateControlName=function(){return J};this.SetCalculatorControlName=function(L){r=L};this.GetCalculatorControlName=function(){return r};this.SetCurcyCode=function(L){z=L};this.GetCurcyCode=function(){return z};this.SetExchDate=function(L){s=L};this.GetAmountValue=function(){return y};this.SetAmountValue=function(L){y=L};this.GetExchDate=function(){return s};this.SetEDateReadOnly=function(L){C=L};this.IsDateReadOnly=function(){return C};this.SetCCodeReadOnly=function(L){m=L};this.IsCCodeReadOnly=function(){return m};this.SetAmountReadOnly=function(L){H=L};this.IsAmountReadOnly=function(){return H};this.SaveCurrentValues=function(){o=this.GetCurcyCode();x=this.GetExchDate();n=this.GetAmountValue()};this.GetOrigCCode=function(){return o};this.GetOrigEDate=function(){return x};this.GetOrigAmount=function(){return n};this.SetSourceField=function(L){q=L};this.GetSourceField=function(){return q};this.SetQTPInfo=function(L){l=L};this.GetQTPInfo=function(){return l}}b.prototype.GetCurrencyCalInfo=function(){var h=[];h.push(this.GetCurrencyControl());h.push(this.GetCCodeLabel());h.push(this.GetCurcyCode());h.push(this.GetDateControlName());h.push(this.GetEDateLabel());h.push(this.GetExchDate());h.push(this.GetCalculatorControlName());h.push(this.GetAmountLabel());h.push(this.GetAmountValue());h.push(this.CanDisplayDate());h.push(this.IsCCodeReadOnly());h.push(this.IsDateReadOnly());h.push(this.IsAmountReadOnly());h.push(this.GetSourceField());h.push(this.GetQTPInfo());return h};b.prototype.UpdateCurrencyInfo=function(h,i){SiebelApp.S_App.GetPopupPM().SetProperty("isCurrencyOpen",true);this.Update(h,i);if(h===2){return}return};b.prototype.Update=function(h,i){switch(h){case 0:this.Reconfig(i);break;case 1:this.UpdateCCode(i);break;default:break}this.SetShowingPick(false);this.SaveCurrentValues();return};b.prototype.UpdateCCode=function(k){var i=6;var h=[];CCFMiscUtil_StringToArray(k,h);this.SetCurcyCode(h[i-1]);this.SetCurrencySign(h[i]);this.SetAmount(this.GetAmountValue(),false);$("[name="+this.GetSourceField()+"]").val(this.GetAmountValue());this.PostChanges()};b.prototype.PostChanges=function(){if(!(this.isValuesChanged())){return}var h=CCFMiscUtil_CreatePropSet();h=this.SetDefaultParams();h=this.SetValueParams(h);var i=CCFMiscUtil_CreatePropSet();h.SetProperty("SWEMethod","PostChanges");SiebelApp.S_App.CallServer(h,i,false);this.SaveCurrentValues()};b.prototype.WriteRecord=function(){if(!(this.isValuesChanged())){return}var h=CCFMiscUtil_CreatePropSet();var i=CCFMiscUtil_CreatePropSet();h=this.SetDefaultParams();h=this.SetValueParams(h);h.SetProperty(f.get("SWE_METHOD_STR"),"WriteRecord");SiebelApp.S_App.CallServer(h,i,true);this.SaveCurrentValues()};b.prototype.CloseServerApplet=function(){if(this.isValuesChanged()){return}var h=CCFMiscUtil_CreatePropSet();var i=CCFMiscUtil_CreatePropSet();h=this.SetDefaultParams();h=this.SetValueParams(h);h.SetProperty(f.get("SWE_METHOD_STR"),"CloseApplet");SiebelApp.S_App.CallServer(h,i,true)};b.prototype.SetValueParams=function(n){if($("#"+this.GetCCodeFieldName()).length>0){var h=$("#"+this.GetCCodeFieldName()).val();var k=$("#"+this.GetEDateFieldName()).val();var m=$("#"+this.GetCalculatorControlName()).val();this.SetCurcyCode(h);this.SetExchDate(k);this.SetAmount(m,false)}n.SetProperty(this.GetCCodeFieldName(),this.GetCurcyCode());if(!(this.CanDisplayDate())){n.SetProperty(this.GetEDateFieldName(),this.GetExchDate())}var j=this.GetAmountValue();var l=0;while(isNaN(j.charAt(l))){l++}j=j.substring(l);n.SetProperty(this.GetCalculatorControlName(),j);return n};b.prototype.Reconfig=function(B){var C=[];CCFMiscUtil_StringToArray(B,C);var v=0;var s=C[v++];var t=C[v++];var z=C[v++];var k=C[v++];var w=C[v++];var p=C[v++];var h=C[v++];var m=C[v++];var y=C[v++];var q=C[v++];var x=(C.length)-1;var A;var l;this.SetCurrencySign(C[x]);this.SetCurrentView(t);this.SetCurrencyApplet(k);this.SetRowID(p);this.SetPopupBM(h);this.SetSourceField(w);var o;var n=-1;var r;for(var u=v;u<x;u++){r=C[u].split("|");if(r.length>0){switch(Number(r[0])){case 1:this.ReinitControl(d,r);this.SetCurrencyControl(r[4]);break;case 2:n=u;this.ReinitControl(c,r);this.SetDateControlName(r[4]);break;case 3:o=u;this.SetCalculatorControlName(r[4]);break;case 4:A=r[1];break;case 5:l=r[1];break;case 6:this.SetCCodeLabel(r[1]);break;case 7:this.SetEDateLabel(r[1]);break;case 8:this.SetAmountLabel(r[1]);break;case 9:g.call(this,r[1]);break;default:break}}}if(o>-1){r=C[o].split("|");this.ReinitControl(e,r)}if(n<0){this.HideExchDate()}return};function g(i){var h=CCFMiscUtil_CreatePropSet();h.DecodeFromString(i);this.SetQTPInfo(h)}b.prototype.ReinitControl=function(k,r){var m=1;var q=r[m++];var l=r[m++];var o=r[m++];var n=r[m++];var h=r[m++];var p=r[m++];var s=r[m++];var i=false;if(l==="false"){i=true}if(k===d){this.SetCurcyCode(q);this.SetCCodeFieldName(n);this.SetCCodeMethod(h);this.SetCCodeReadOnly(i)}else{if(k===c){this.SetExchDate(q);this.SetEDateReadOnly(i);if(o===true){this.HideExchDate()}this.SetEDateFieldName(n)}else{if(k===e){this.SetAmount(q,false);this.SetAmountReadOnly(i);this.SetCalculatorControlName(n)}}}return};b.prototype.SetDefaultParams=function(){var h=CCFMiscUtil_CreatePropSet();h.SetProperty("SWECmd","InvokeMethod");h.SetProperty("SWEView",this.GetCurrentView());h.SetProperty(f.get("SWE_APPLET_STR"),this.GetCurrencyApplet());h.SetProperty("SWERowId",this.GetRowID());h.SetProperty("SWERowIds:SWERowId0",this.GetRowID());
h.SetProperty("SWEReqRowId","true");h.SetProperty("SWENeedContext","false");h.SetProperty("SWEDIC","true");h.SetProperty("SWEP",this.GetPopupBM());h.SetProperty("SWESP","true");h.SetProperty("SWEActiveApplet","");h.SetProperty("SWEActiveView",this.GetCurrentView());return h};b.prototype.ShowPickPopup=function(h){var i=CCFMiscUtil_CreatePropSet();var j=CCFMiscUtil_CreatePropSet();i=this.SetDefaultParams();i.SetProperty("SWEMethod",this.GetCCodeMethod());i.SetProperty("SWEField",this.GetCCodeFieldName());i.SetProperty(f.get("SWE_METHOD_STR"),"EditField");SiebelApp.S_App.CallServer(i,j,true);this.SetShowingPick(true)};b.prototype.isValuesChanged=function(){return((this.GetOrigCCode()!==this.GetCurcyCode())||(this.GetOrigEDate()!==this.GetExchDate())||(this.GetOrigAmount()!==this.GetAmountValue()))};b.prototype.NotifyClosePopup=function(){this.GetNewValues();if(!this.isShowingPick()){if(this.isValuesChanged()){this.WriteRecord()}else{this.CloseServerApplet()}}};b.prototype.GetNewValues=function(){if($("#"+this.GetCCodeFieldName()).length===1){var h=$("#"+this.GetCCodeFieldName()).val();var i=$("#"+this.GetEDateFieldName()).val();var j=$("#"+this.GetCalculatorControlName()).val();this.SetCurcyCode(h);this.SetExchDate(i);this.SetAmount(j,false)}};b.prototype.SetAmount=function(k,j){var l=SiebelApp.S_App.LocaleObject.GetCurrency(this.GetCurcyCode());var h=0;while(isNaN(k.charAt(h))){h++}k=k.substring(h);if(l){k=l.m_sSymbol+k}this.SetAmountValue(k)};b.prototype.PostChangesOnBlur=function(){this.GetNewValues()};return b}())};