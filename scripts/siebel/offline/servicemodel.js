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
if(typeof(SiebelApp.ServiceModel)==="undefined"){SiebelJS.Namespace("SiebelApp.ServiceModel");SiebelApp.ServiceModel=(function(){var c=SiebelApp.S_App;var a;function b(){}b.prototype.Invoke=function(h,f){if(c.GetTimer()){c.GetTimer().StartTime("ServiceModel.prototype.InvokeMethod ")}SiebelJS.Log("ServiceModel: Invoked ServiceModel.prototype.Invoke");if(!h){$.setReturnValue({err:false,retVal:false});return}var e=CCFMiscUtil_CreatePropSet();var g=false;var d=function(i){if(i){g=i.retVal}if(g){SiebelApp.S_App.Model.SetIsInterFace(1);this.InvokeMethod(h,f);$.callback(this,function(j){$.setReturnValue(j);if(c.GetTimer()){c.GetTimer().EndTime("ServiceModel.prototype.Invoke ")}SiebelApp.S_App.Model.SetIsInterFace(-1)})}else{$.setReturnValue({err:false,retVal:false});if(c.GetTimer()){c.GetTimer().EndTime("ServiceModel.prototype.Invoke ")}}};if(typeof(this.CanInvokeMethod)==="function"){SiebelApp.S_App.Model.SetIsInterFace(1);this.CanInvokeMethod(h);SiebelApp.S_App.Model.SetIsInterFace(-1);$.callback(this,d)}else{d.call(this)}};b.prototype.SetContext=function(d){a=d};b.prototype.GetContext=function(){return a};b.prototype.CanInvokeMethod=function(d){$.setReturnValue({err:true,retVal:false})};b.prototype.InvokeMethod=function(f,e){var d=CCFMiscUtil_CreatePropSet();if(!f){$.setReturnValue({err:true,retVal:false});return}$.setReturnValue({err:true,retVal:d})};return b}())}if(typeof(SiebelApp.Service)){(function(){var f=SiebelApp.Service;var c=f.prototype.InvokeMethod;var e=SiebelApp.OfflineAppSettings;f.prototype.InvokeMethod=function(h,g,k){if(!e.GetMode()){return(c.call(this,h,g,k))}else{var j=true;var n=CCFMiscUtil_CreatePropSet();g=g||CCFMiscUtil_CreatePropSet();var m=g.Clone();j=b.call(this,h,g);if(!j){return n}var i={};var l=this;if(typeof(k)==="object"||k===true||k===false){i.scope=this;i.async=(typeof(k.async)==="boolean")?k.async:k;i.selfbusy=k.selfbusy||false;i.mask=k.mask||false;i.npr=k.npr||false;i.args=[];i.args.push(h);i.args.push(g);i.cb=function(){var o=Array.prototype.slice.call(arguments);l.PostServiceExecute.apply(l,arguments);if(typeof(k.cb)==="function"){k.cb.apply(k.scope||null,o)}}}else{i={scope:this,cb:function(){}}}a.call(this,h,g,n,i);$.callback(this,function(p){if(typeof(k)==="undefined"){var o=[];o.push(h);o.push(g);o.push(n);this.PostServiceExecute.apply(this,o);$.setReturnValue({err:false,retVal:n});return n}})}};function a(i,h,m,j){var k=h.EncodeAsString();var g=CCFMiscUtil_CreatePropSet();m=m||CCFMiscUtil_CreatePropSet();if(h.GetProperty(consts.get("SWE_BUSINESS_SERVICE"))==consts.get("SWE_NUMERIC_TRUE")){g.SetProperty(consts.get("SWE_BUSINESS_SERVICE"),consts.get("SWE_NUMERIC_TRUE"))}g.SetProperty(consts.get("SWE_CMD_ARG"),consts.get("SWE_CMD_INVOKE_METHOD_STR"));g.SetProperty(consts.get("SWE_SERVICE"),this.GetName());g.SetProperty(consts.get("SWE_METHOD_STR"),i);g.SetProperty(consts.get("SWE_INPUT_PS"),k);var l=true;if(j&&j.npr===true){l=false}SiebelApp.S_App.CallServer(g,m,l,j);$.callback(this,function(n){$.setReturnValue(n)});return true}function b(i,h){var g;if(this.shadow&&typeof(this.shadow.OnPreInvokeMethod)==="function"){g=this.shadow.OnPreInvokeMethod(i,h);if(g=="CancelOperation"){return false}return true}return true}function d(h,g){if(this.shadow&&typeof(this.shadow.OnInvokeMethod)==="function"){this.shadow.OnInvokeMethod(h,g)}}}())};