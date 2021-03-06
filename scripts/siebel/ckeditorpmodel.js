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
if(typeof(SiebelAppFacade.CKEditorPresentationModel)==="undefined"){SiebelJS.Namespace("SiebelAppFacade.CKEditorPresentationModel");define("siebel/ckeditorpmodel",[],function(){SiebelAppFacade.CKEditorPresentationModel=(function(){function a(b){SiebelAppFacade.CKEditorPresentationModel.superclass.constructor.call(this,b)}SiebelJS.Extend(a,SiebelAppFacade.PresentationModel);a.prototype.Setup=function(c){var f;var b=c.GetChildByType("cl");if(b){var e=b.GetChildByType("cc");if(e){var d=e.GetChildByType("cc");if(d){f=d;this.AddProperty("ControlConfig",d)}}}SiebelAppFacade.CKEditorPresentationModel.superclass.Setup.call(this,c)};a.prototype.Init=function(){SiebelAppFacade.CKEditorPresentationModel.superclass.Init.call(this);this.AddMethod("InvokeMethod",b,{scope:this,sequence:true});this.AddProperty("Content",[]);this.AddProperty("EditorElementId","");this.AddProperty("StrContent","");this.AddProperty("ContentText","");this.AddProperty("onInit",true);this.AddMethod("SetContentBinder",function(){});this.AttachNotificationHandler(consts.get("SWE_PROP_BC_NOTI_GENERIC"),function(c){var e=c.GetProperty(consts.get("SWE_PROP_NOTI_TYPE"));var h=this.Get("onInit");if(e=="SWEIPrivFlds"){var d=c.propArray.ArgsArray;var g=d.substr(d.indexOf("**HTML RTCEmbedded"));var i=g.substr(g.indexOf("?")+1);this.SetProperty("onInit",false);this.SetProperty("Content",i);this.ExecuteMethod("SetContentBinder")}else{if(e=="SetContent"&&h){this.SetProperty("onInit",false);var d=c.propArray.ArgsArray;if(d.split("*")!=null&&d.split("*").length>=2&&d.split("*")[1]!=null){var f=d.split("*")[1];this.SetProperty("Content",d);this.ExecuteMethod("SetContentBinder")}}}});function b(c,i,d,h){if(c==="SaveTemplate"){var f=this.Get("EditorElementId");var g=CKEDITOR.instances[f];templateContents=g.getData();i.SetProperty("Content",templateContents)}if(c==="PromptSaveTemplateText"){var f=this.Get("EditorElementId");var g=CKEDITOR.instances[f];if(typeof g.document=="undefined"){alert("Please donot save Templatetext in Source Mode");h.CancelOperation=true;return}templateContents=g.document.getBody().getText();CKEDITOR.tools.trim(templateContents);i.SetProperty("ContentText",templateContents)}if(c==="TemplateVerifyPopup"){var f=this.Get("EditorElementId");var g=CKEDITOR.instances[f];templateContents=g.document.getBody().getText();CKEDITOR.tools.trim(templateContents);i.SetProperty("ContentText",templateContents)}}};return a}());return"SiebelAppFacade.CKEditorPresentationModel"})};