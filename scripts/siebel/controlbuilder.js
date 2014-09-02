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
SiebelAppFacade.ControlBuilder={_default:null,defaults:function(){if(!this._default){this._default={direction:SiebelApp.S_App.GetDirection()}}return this._default},SetDefaultConfig:function(a){a=$.extend(a,this.defaults());var c=$(a.target),b=(a.inputName||c.attr("id")||a.control.GetInputName())+"_icon",d=$("<img id='"+b+"' class='"+(a.className||"")+(a.direction?" siebui-icon-align-right":"")+(a.allowdblclick?"' data-allowdblclick='"+a.allowdblclick:"")+"' src='"+a.imgSrc+"' alt='"+a.title+"' />");d.bind("click",function(e){a.click.call(a.scope,a.control,a.target,a.inputName);e.stopPropagation()});c.addClass("siebui-input-popup "+(a.direction?"siebui-rtl-input-popup ":"")+a.controlClass).after(d);c.addClass("siebui-input-align-"+a.control.GetJustification());if(SiebelApp.Utils.IsTrue(SiebelApp.S_App.GetAccessibilityEnhanced())){c.attr("aria-describedby",(c.attr("aria-describedby")||"")+" "+b)}c=d=null},Pick:function(b){if(b&&$(b.target).length>=1){b=$.extend(b,{imgSrc:"images/janna/pick.gif",title:SiebelApp.S_App.LocaleObject.GetLocalString("IDS_SWE_PICK_TITLE")});var a=this;setTimeout(function(){a.SetDefaultConfig(b)},2)}},Mvg:function(b){if(b&&$(b.target).length>=1){b=$.extend(b,{imgSrc:"images/janna/mvg.gif",title:SiebelApp.S_App.LocaleObject.GetLocalString("IDS_SWE_MVG_TITLE"),controlClass:"siebui-ctrl-mvg"});var a=this;setTimeout(function(){a.SetDefaultConfig(b)},2)}},SelectCtrl:function(b){if(b&&$(b.target).length>=1){b=$.extend(b,{imgSrc:"images/janna/down.gif",allowdblclick:"true"});var a=this;setTimeout(function(){a.SetDefaultConfig(b)},2)}},EffDat:function(b){if(b&&$(b.target).length>=1){b=$.extend(b,{imgSrc:"images/icon_effdate.gif",title:SiebelApp.S_App.LocaleObject.GetLocalString("IDS_SWE_EFFECTIVE_DATE_TITLE")});var a=this;setTimeout(function(){a.SetDefaultConfig(b)},2)}},DatePick:function(b){if(b&&$(b.target).length>=1){var a=this;setTimeout(function(){if(false===b.showPopup){b=$.extend(b,{imgSrc:"images/janna/icon_calendar_sm.gif",title:SiebelApp.S_App.LocaleObject.GetLocalString("IDS_SWE_DATE_FIELD_TITLE"),allowdblclick:"true"});a.SetDefaultConfig(b)}else{var d=$(b.target);d.datetimepicker({changeMonth:true,changeYear:true,showTime:false,showTimepicker:false,dateFormat:"yy-mm-dd",yearRange:b.yearRange,beforeShow:b.beforeShow||function(){return true},onClose:b.onClose});if(SiebelApp.Utils.IsTrue(SiebelApp.S_App.GetAccessibilityEnhanced())){var c=(d.attr("name")||b.control.GetInputName())+"_icon";d.next("img").attr("alt",SiebelApp.S_App.LocaleObject.GetLocalString("IDS_SWE_DATE_FIELD_TITLE")).attr("id",c)}d.addClass("siebui-input-popup "+(a.defaults().direction?"siebui-rtl-input-popup ":"")).next("img").addClass(b.className||"");var e=b.getISOVal();if(e!==consts.get("JS_INVALID_DATE")){d.datetimepicker("setDate",e)}if(a.defaults().direction){$("#"+c).addClass("siebui-icon-align-right")}d.datetimepicker("show");d.datepicker("widget").find(".ui-datepicker-calendar").attr("tabindex","0").focus();d=null}},2)}},DateTimePick:function(b){if(b&&$(b.target).length>=1){var a=this;setTimeout(function(){var e;var c=b.direction||a.defaults().direction;if(false===b.showPopup){b=$.extend(b,{imgSrc:"images/janna/icon_calendar_sm.gif",title:SiebelApp.S_App.LocaleObject.GetLocalString("IDS_SWE_DATETIME_FIELD_TITLE"),allowdblclick:"true"});a.SetDefaultConfig(b)}else{var e=$(b.target);e.datetimepicker({changeMonth:true,changeYear:true,dateFormat:"yy-mm-dd",timeFormat:"HH:mm:ss",separator:" ",yearRange:b.yearRange,beforeShow:b.beforeShow||function(){return true},onClose:b.onClose,isRTL:(c?true:false)});if(SiebelApp.Utils.IsTrue(SiebelApp.S_App.GetAccessibilityEnhanced())){var d=(e.attr("name")||b.control.GetInputName())+"_icon";e.next("img").attr("alt",SiebelApp.S_App.LocaleObject.GetLocalString("IDS_SWE_DATETIME_FIELD_TITLE")).attr("id",d)}e.addClass("siebui-input-popup "+(a.defaults().direction?"siebui-rtl-input-popup ":"")).next("img").addClass(b.className||"");var f=b.getISOVal();if(f!==consts.get("JS_INVALID_DATE")){e.datetimepicker("setDate",f)}if(a.defaults().direction){$("#"+d).addClass("siebui-icon-align-right")}e.datetimepicker("show");e.datepicker("widget").find(".ui-datepicker-calendar").attr("tabindex","0").focus();e=null}},2)}},DateTimeZonePick:function(a){},Calculator:function(b){if(b&&$(b.target).length>=1){var a=this;setTimeout(function(){var h;if(b.show===true){h=$(b.target);h.next("img").hide();var c;if(SiebelApp.S_App.LocaleObject.GetDispNumberDecimal()){c=SiebelApp.S_App.LocaleObject.GetDispNumberDecimal()}else{c=SiebelApp.Constants.get("SWE_DECIMAL_CONST")}var k=c[0].toLowerCase();var g=["a","b","c","d","e","f","A","B","C","D","E","F"];var f="";var j=g.length;for(var d=0;d<j;d++){if(g[d]===c[0]){f=c[0].replace(g[d],"["+g[d]+"]");break}}c=f?(f+c.substring(1,c.length)):c;$.calculator.addKeyDef("dc",c,$.calculator.digit,null,"mykey","DC",k);$.extend(b,{layout:["_%BSCECA","_1_2_3_+@X","_4_5_6_-@U","_7_8_9_*@E","dc_0_=_/"]});h.calculator({showOn:"opbutton",buttonImage:"images/janna/icon_calculator_sm.gif",buttonImageOnly:true,layout:b.layout,onOpen:b.beforeShow,onClose:b.close,decimalChar:c});if(SiebelApp.Utils.IsTrue(SiebelApp.S_App.GetAccessibilityEnhanced())){var e=(h.attr("id")||b.control.GetInputName())+"_icon";h.next("img").attr("alt",SiebelApp.S_App.LocaleObject.GetLocalString("IDS_SWE_CALC_FIELD_TITLE")).attr("id",e)}if(a.defaults().direction){h.next("img").addClass("siebui-icon-align-right")}h.addClass("siebui-input-popup "+b.direction?"siebui-rtl-input-popup ":"").next("img").addClass(b.className||"");h.calculator("show");h=null}else{b=$.extend(b,{imgSrc:"images/janna/icon_calculator_sm.gif",title:SiebelApp.S_App.LocaleObject.GetLocalString("IDS_SWE_CALC_FIELD_TITLE")});a.SetDefaultConfig(b)}},2)}},Currency:function(b){if(b&&$(b.target).length>=1){b=$.extend(b,{imgSrc:"images/janna/icon_calculator_sm.gif",title:SiebelApp.S_App.LocaleObject.GetLocalString("IDS_SWE_CURRENCY_CALC_FIELD_TITLE")});var a=this;setTimeout(function(){a.SetDefaultConfig(b)},2)}},RTCeditor:function(b){CKEDITOR.focusManager.prototype.blur=CKEDITOR.focusManager.prototype.forceBlur;$.extend(b,{toolbar:[{name:"styles",items:["Font","FontSize"]},{name:"clipboard",items:["Cut","Copy","Paste"]},{name:"colors",items:["TextColor","BGColor"]},{name:"basicstyles",items:["Bold","Italic","Underline"]},{name:"paragraph",items:["NumberedList","BulletedList","Outdent","Indent","JustifyLeft","JustifyCenter","JustifyRight"]}]});var e=b.control.GetInputName();var c=CKEDITOR.instances[e];if(c){c.destroy(true)}if($(b.target).length===0){return false}b=$.extend(b,this.defaults());$(b.target).ckeditor(function(){},{toolbar:b.toolbar,skin:"kama",width:b.control.GetWidth(),height:b.control.GetHeight(),startupFocus:false,resize_enabled:true,contentsLangDirection:b.direction,resize_maxHeight:b.control.GetHeight(),resize_maxWidth:b.control.GetWidth(),autoParagraph:false,fillEmptyBlocks:false,ignoreEmptyParagraph:true});var d=$(b.target).ckeditorGet();d.config.protectedSource.push(SiebelApp.S_App.LocaleObject.GetLocalString("IDS_SWE_CSQ_WATERMARK"));
d.on("blur",function(){var f=this.getData();b.blur.call(b.scope,b.control,f)});d.on("focus",function(){var f=this.getData();b.focus.call(b.scope,b.control,f)});d.on("instanceReady",function(g){var f=CKEDITOR.dtd;for(var h in CKEDITOR.tools.extend({},f.$nonBodyContent,f.$block,f.$listItem,f.$tableContent)){this.dataProcessor.writer.setRules(h,{indent:false,breakBeforeOpen:false,breakAfterOpen:false,breakBeforeClose:false,breakAfterClose:false})}if(b.control.GetMaxSize()){$(g.editor.container.$).find("table tr:last").after('<tr><td class="siebui-rtc-count"></td></tr>');g.editor.on("contentDom",function(){if(b.control.GetApplet().IsInQueryMode()){$(this.container.$).find(".siebui-rtc-count").hide()}else{$(this.container.$).find(".siebui-rtc-count").show()}g.editor.document.on("keyup",function(i){a(b.control,g.editor)})});d.on("saveSnapshot",function(i){a(b.control,this)});d.on("updateData",function(i){a(b.control,this)})}});$(b.target).addClass("siebui-input-popup ").next("img").addClass(b.className||"");function a(i,f){var j=$(f.container.$).find(".siebui-rtc-count"),h=f.getSnapshot().length,g;if(j.length){g=h+"/"+i.GetMaxSize();j.html(g);if(h>i.GetMaxSize()){j.addClass("siebui-rtc-errormsg")}else{if(j.hasClass("siebui-rtc-errormsg")){j.removeClass("siebui-rtc-errormsg")}}}}},FileUploader:function(a){$.extend(a,{type:"POST",replaceFileInput:false,forceIframeTransport:false,multipart:true});var b={url:a.url,type:a.type,fileInput:a.fileInput,dropZone:a.dropZone,replaceFileInput:a.replaceFileInput,forceIframeTransport:a.forceIframeTransport,multipart:a.multipart,formData:a.formData,drop:function(d,c){SiebelApp.S_App.uiStatus.Busy({target:SiebelApp.S_App.GetTargetViewContainer(),mask:true,timeOut:false,message:""});$(this).fileupload("option","remainingFilesToUpload",c.files.length);(a.drop||function(){}).call(a.scope||this,d,c,this)},done:function(f,d){var c=$(this).fileupload("option","remainingFilesToUpload");$(this).fileupload("option","remainingFilesToUpload",--c);(a.done||function(){}).call(a.scope||this,f,d);if(SiebelApp.S_App.uiStatus.IsBusy()&&c<=0){SiebelApp.S_App.uiStatus.Free()}},fail:function(d,c){(a.fail||function(){}).call(a.scope||this,d,c);if(SiebelApp.S_App.uiStatus.IsBusy()){SiebelApp.S_App.uiStatus.Free()}}};if(a.isDisplayOption){b.add=function(d,c){$(this).fileupload("option","importfiles",c.files);(a.add||function(){}).call(a.scope||this,d,c,this)}}else{b.change=function(d,c){SiebelApp.S_App.uiStatus.Busy({target:SiebelApp.S_App.GetTargetViewContainer(),mask:true,timeOut:false,message:""});$(this).fileupload("option","remainingFilesToUpload",c.files.length);(a.change||function(){}).call(a.scope||this,d,c,this)}}$(a.fileInput).fileupload(b)},DetailPopup:function(b){if(b&&$(b.target).length>=1){b=$.extend(b,{imgSrc:"images/janna/pick.gif",title:SiebelApp.S_App.LocaleObject.GetLocalString("IDS_SWE_DETAIL_POPUP_APPLET")});var a=this;setTimeout(function(){a.SetDefaultConfig(b)},2)}},PhoneCtrl:function(b){if(b&&$(b.target).length>=1){b=$.extend(b,{imgSrc:"images/icon_call_enabled.gif",title:SiebelApp.S_App.LocaleObject.GetLocalString("IDS_CTI_PHONE_NUMBER_FIELD")});var a=this;setTimeout(function(){a.SetDefaultConfig(b)},2)}}};