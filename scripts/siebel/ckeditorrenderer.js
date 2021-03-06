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
if(typeof(SiebelAppFacade.CKEditorRenderer)==="undefined"){SiebelJS.Namespace("SiebelAppFacade.CKEditorRenderer");define("siebel/ckeditorrenderer",["siebel/phyrenderer","order!3rdParty/ckeditor/ckeditor"],function(){SiebelAppFacade.CKEditorRenderer=(function(){function b(i){SiebelAppFacade.CKEditorRenderer.superclass.constructor.call(this,i);i.AttachPMBinding("SetContentBinder",function(){var k=this.GetPM().Get("Content");var j=this.GetPM().Get("EditorElementId");c(k,j)},{scope:this})}SiebelJS.Extend(b,SiebelAppFacade.PhysicalRenderer);b.prototype.EndLife=function(){var i=this.GetPM().Get("EditorElementId");if(CKEDITOR.instances[i]){CKEDITOR.config.removePlugins="mergefieldsblock,contentruleblock";CKEDITOR.instances[i].destroy(true);CKEDITOR.removeListener("instanceReady");$("#"+i).remove()}};b.prototype.ShowUI=function(){SiebelAppFacade.CKEditorRenderer.superclass.ShowUI.call(this);dir=CKEDITOR.basePath.replace("/ckeditor/","");CKEDITOR.plugins.addExternal("mergefieldsblock",dir+"/ckeditor-custom/mergefieldsblock/plugin.js","");CKEDITOR.plugins.addExternal("contentruleblock",dir+"/ckeditor-custom/contentruleblock/plugin.js","");CKEDITOR.config.extraPlugins="mergefieldsblock,contentruleblock";CKEDITOR.config.removePlugins="";var j=$("table.GridBack tbody tr td:last-child","#s_"+this.GetPM().Get("GetFullId")+"_div");var i=$("div span",j);var k=this.GetPM().Get("GetFullId")+"_editor1";this.GetPM().SetProperty("EditorElementId",k);$("<textarea id='"+k+"' name='"+k+"'></textarea>").appendTo(i);h.call(this)};function h(){var J;var k;var u;var M;var n;var y;var C=700;var I=400;var D=new Array();var H=new Array();var m=new Array();var B=new Array();var t=new Array();var A=new Array();var z=new Array();var L=0;var i="";var q="";var w=new Array();var E="";var s;var G=this.GetPM().Get("ControlConfig");E=G.GetProperty("Content");i=G.GetProperty("OfferType");q=G.GetProperty("Language");w=G.GetProperty("Templates");J=G.GetProperty("filebrowserBrowseUrl");k=G.GetProperty("filebrowserImageBrowseUrl");u=G.GetProperty("filebrowserFlashBrowseUrl");M=G.GetProperty("filebrowserUploadUrl");n=G.GetProperty("filebrowserImageUploadUrl");y=G.GetProperty("filebrowserFlashUploadUrl");C=G.GetProperty("filebrowserWindowWidth");I=G.GetProperty("filebrowserWindowHeight");for(var j=0;j<G.GetChildCount();j++){var O;var v=G.GetChild(j);var r=v.GetType();if(r=="Person"){var p=v.GetProperty("MergeFieldVal");for(var F=0;F<v.GetChildCount();F++){var K=v.GetChild(F);var N=K.GetType();D[F]=N;H[F]=new Array();a(K,H[F],true);if(N==p){L=F}}}else{if(r=="Rule"){for(var F=0;F<v.GetChildCount();F++){var x=v.GetChild(F);var r=x.GetType();if(r=="R"){f(x,m,true);f(x,B,false)}else{if(r=="O"){f(x,t,true);f(x,A,false)}}}}else{if(r=="Caption"){a(v,z,false)}}}}var l;var o;CKEDITOR.config.g_arrCategory=D;CKEDITOR.config.g_arrItem=H;CKEDITOR.config.g_arrRule=m;CKEDITOR.config.g_arrRuleMap=B;CKEDITOR.config.g_arrOperator=t;CKEDITOR.config.g_arrOperatorMap=A;CKEDITOR.config.g_arrStr=z;CKEDITOR.config.g_iMergeField=L;o=this.GetPM();l=o.Get("EditorElementId");CKEDITOR.replace(l,{customConfig:"../ckeditor-custom/custom-config.js",extraPlugins:"mergefieldsblock,contentruleblock",filebrowserBrowseUrl:J,filebrowserImageBrowseUrl:k,filebrowserFlashBrowseUrl:u,filebrowserWindowWidth:C,filebrowserWindowHeight:I,language:e(q),toolbar:d(i),template_files:w,on:{instanceReady:function(P){if(CKEDITOR.instances[l]){c(E,l);CKEDITOR.instances[l].on("blur",function(){})}}}})}function d(i){if(!i||0===i.length){i="Base"}return i+"Block"}function e(j){var i={};i.ENU="en";i.ARA="ar";i.PRC="zh";i.CNT="zh-cn";i.CSY="cs";i.DAN="da";i.DEU="de";i.ENG="en-gb";i.ESN="esn";i.ESP="es";i.FIN="fi";i.FRA="fr";i.HEB="he";i.ITA="it";i.JPN="ja";i.KOR="ko";i.NLD="nl";i.PL="pl";i.PTB="pt-br";i.PTG="pt";i.RUS="ru";i.SVE="sv";i.THA="th";i.TRK="tr";return i[j]}function f(j,o,l){var n=0;var k;for(var i=0;i<j.GetChildCount();i++){var m=j.GetChild(i);if((k=m.EnumProperties(true))!=null&&k!=""){if(l){o[n]=k;n++}else{o[k]=m.GetProperty(k)}}}}function a(i,l,k){for(var j in i.propArray){if(k){l[i.propArray[j]]=j}else{l[j]=i.propArray[j]}}}function g(i,l,k){var j;if((j=i.EnumProperties(true))!=null&&j!=""){do{if(k){l[i.GetProperty(j)]=j}else{l[j]=i.GetProperty(j)}}while((j=i.EnumProperties(false))!=null&&j!="")}}function c(j,i){if(!CKEDITOR.instances[i]||CKEDITOR.instances[i]=="undefined"){return}CKEDITOR.instances[i].setData(j)}return b}());return"SiebelAppFacade.CKEditorRenderer"})};