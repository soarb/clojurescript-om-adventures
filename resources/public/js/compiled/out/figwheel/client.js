// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__25253 = cljs.core._EQ_;
var expr__25254 = (function (){var or__16826__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__25253.call(null,"true",expr__25254))){
return true;
} else {
if(cljs.core.truth_(pred__25253.call(null,"false",expr__25254))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__25254)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__25256__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__25256 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25257__i = 0, G__25257__a = new Array(arguments.length -  0);
while (G__25257__i < G__25257__a.length) {G__25257__a[G__25257__i] = arguments[G__25257__i + 0]; ++G__25257__i;}
  args = new cljs.core.IndexedSeq(G__25257__a,0);
} 
return G__25256__delegate.call(this,args);};
G__25256.cljs$lang$maxFixedArity = 0;
G__25256.cljs$lang$applyTo = (function (arglist__25258){
var args = cljs.core.seq(arglist__25258);
return G__25256__delegate(args);
});
G__25256.cljs$core$IFn$_invoke$arity$variadic = G__25256__delegate;
return G__25256;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__25259){
var map__25262 = p__25259;
var map__25262__$1 = ((((!((map__25262 == null)))?((((map__25262.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25262.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25262):map__25262);
var message = cljs.core.get.call(null,map__25262__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__25262__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16826__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16814__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16814__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16814__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__20867__auto___25424 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20867__auto___25424,ch){
return (function (){
var f__20868__auto__ = (function (){var switch__20755__auto__ = ((function (c__20867__auto___25424,ch){
return (function (state_25393){
var state_val_25394 = (state_25393[(1)]);
if((state_val_25394 === (7))){
var inst_25389 = (state_25393[(2)]);
var state_25393__$1 = state_25393;
var statearr_25395_25425 = state_25393__$1;
(statearr_25395_25425[(2)] = inst_25389);

(statearr_25395_25425[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (1))){
var state_25393__$1 = state_25393;
var statearr_25396_25426 = state_25393__$1;
(statearr_25396_25426[(2)] = null);

(statearr_25396_25426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (4))){
var inst_25346 = (state_25393[(7)]);
var inst_25346__$1 = (state_25393[(2)]);
var state_25393__$1 = (function (){var statearr_25397 = state_25393;
(statearr_25397[(7)] = inst_25346__$1);

return statearr_25397;
})();
if(cljs.core.truth_(inst_25346__$1)){
var statearr_25398_25427 = state_25393__$1;
(statearr_25398_25427[(1)] = (5));

} else {
var statearr_25399_25428 = state_25393__$1;
(statearr_25399_25428[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (15))){
var inst_25353 = (state_25393[(8)]);
var inst_25368 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25353);
var inst_25369 = cljs.core.first.call(null,inst_25368);
var inst_25370 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_25369);
var inst_25371 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_25370)].join('');
var inst_25372 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_25371);
var state_25393__$1 = state_25393;
var statearr_25400_25429 = state_25393__$1;
(statearr_25400_25429[(2)] = inst_25372);

(statearr_25400_25429[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (13))){
var inst_25377 = (state_25393[(2)]);
var state_25393__$1 = state_25393;
var statearr_25401_25430 = state_25393__$1;
(statearr_25401_25430[(2)] = inst_25377);

(statearr_25401_25430[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (6))){
var state_25393__$1 = state_25393;
var statearr_25402_25431 = state_25393__$1;
(statearr_25402_25431[(2)] = null);

(statearr_25402_25431[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (17))){
var inst_25375 = (state_25393[(2)]);
var state_25393__$1 = state_25393;
var statearr_25403_25432 = state_25393__$1;
(statearr_25403_25432[(2)] = inst_25375);

(statearr_25403_25432[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (3))){
var inst_25391 = (state_25393[(2)]);
var state_25393__$1 = state_25393;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25393__$1,inst_25391);
} else {
if((state_val_25394 === (12))){
var inst_25352 = (state_25393[(9)]);
var inst_25366 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_25352,opts);
var state_25393__$1 = state_25393;
if(cljs.core.truth_(inst_25366)){
var statearr_25404_25433 = state_25393__$1;
(statearr_25404_25433[(1)] = (15));

} else {
var statearr_25405_25434 = state_25393__$1;
(statearr_25405_25434[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (2))){
var state_25393__$1 = state_25393;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25393__$1,(4),ch);
} else {
if((state_val_25394 === (11))){
var inst_25353 = (state_25393[(8)]);
var inst_25358 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25359 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_25353);
var inst_25360 = cljs.core.async.timeout.call(null,(1000));
var inst_25361 = [inst_25359,inst_25360];
var inst_25362 = (new cljs.core.PersistentVector(null,2,(5),inst_25358,inst_25361,null));
var state_25393__$1 = state_25393;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25393__$1,(14),inst_25362);
} else {
if((state_val_25394 === (9))){
var inst_25353 = (state_25393[(8)]);
var inst_25379 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_25380 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25353);
var inst_25381 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25380);
var inst_25382 = [cljs.core.str("Not loading: "),cljs.core.str(inst_25381)].join('');
var inst_25383 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_25382);
var state_25393__$1 = (function (){var statearr_25406 = state_25393;
(statearr_25406[(10)] = inst_25379);

return statearr_25406;
})();
var statearr_25407_25435 = state_25393__$1;
(statearr_25407_25435[(2)] = inst_25383);

(statearr_25407_25435[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (5))){
var inst_25346 = (state_25393[(7)]);
var inst_25348 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_25349 = (new cljs.core.PersistentArrayMap(null,2,inst_25348,null));
var inst_25350 = (new cljs.core.PersistentHashSet(null,inst_25349,null));
var inst_25351 = figwheel.client.focus_msgs.call(null,inst_25350,inst_25346);
var inst_25352 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_25351);
var inst_25353 = cljs.core.first.call(null,inst_25351);
var inst_25354 = figwheel.client.autoload_QMARK_.call(null);
var state_25393__$1 = (function (){var statearr_25408 = state_25393;
(statearr_25408[(8)] = inst_25353);

(statearr_25408[(9)] = inst_25352);

return statearr_25408;
})();
if(cljs.core.truth_(inst_25354)){
var statearr_25409_25436 = state_25393__$1;
(statearr_25409_25436[(1)] = (8));

} else {
var statearr_25410_25437 = state_25393__$1;
(statearr_25410_25437[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (14))){
var inst_25364 = (state_25393[(2)]);
var state_25393__$1 = state_25393;
var statearr_25411_25438 = state_25393__$1;
(statearr_25411_25438[(2)] = inst_25364);

(statearr_25411_25438[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (16))){
var state_25393__$1 = state_25393;
var statearr_25412_25439 = state_25393__$1;
(statearr_25412_25439[(2)] = null);

(statearr_25412_25439[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (10))){
var inst_25385 = (state_25393[(2)]);
var state_25393__$1 = (function (){var statearr_25413 = state_25393;
(statearr_25413[(11)] = inst_25385);

return statearr_25413;
})();
var statearr_25414_25440 = state_25393__$1;
(statearr_25414_25440[(2)] = null);

(statearr_25414_25440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (8))){
var inst_25352 = (state_25393[(9)]);
var inst_25356 = figwheel.client.reload_file_state_QMARK_.call(null,inst_25352,opts);
var state_25393__$1 = state_25393;
if(cljs.core.truth_(inst_25356)){
var statearr_25415_25441 = state_25393__$1;
(statearr_25415_25441[(1)] = (11));

} else {
var statearr_25416_25442 = state_25393__$1;
(statearr_25416_25442[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20867__auto___25424,ch))
;
return ((function (switch__20755__auto__,c__20867__auto___25424,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20756__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20756__auto____0 = (function (){
var statearr_25420 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25420[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20756__auto__);

(statearr_25420[(1)] = (1));

return statearr_25420;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20756__auto____1 = (function (state_25393){
while(true){
var ret_value__20757__auto__ = (function (){try{while(true){
var result__20758__auto__ = switch__20755__auto__.call(null,state_25393);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20758__auto__;
}
break;
}
}catch (e25421){if((e25421 instanceof Object)){
var ex__20759__auto__ = e25421;
var statearr_25422_25443 = state_25393;
(statearr_25422_25443[(5)] = ex__20759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25393);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25421;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25444 = state_25393;
state_25393 = G__25444;
continue;
} else {
return ret_value__20757__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20756__auto__ = function(state_25393){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20756__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20756__auto____1.call(this,state_25393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20756__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20756__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20756__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20756__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20756__auto__;
})()
;})(switch__20755__auto__,c__20867__auto___25424,ch))
})();
var state__20869__auto__ = (function (){var statearr_25423 = f__20868__auto__.call(null);
(statearr_25423[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20867__auto___25424);

return statearr_25423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20869__auto__);
});})(c__20867__auto___25424,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__25445_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__25445_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_25452 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_25452){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_25450 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_25451 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_25450,_STAR_print_newline_STAR_25451,base_path_25452){
return (function() { 
var G__25453__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__25453 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25454__i = 0, G__25454__a = new Array(arguments.length -  0);
while (G__25454__i < G__25454__a.length) {G__25454__a[G__25454__i] = arguments[G__25454__i + 0]; ++G__25454__i;}
  args = new cljs.core.IndexedSeq(G__25454__a,0);
} 
return G__25453__delegate.call(this,args);};
G__25453.cljs$lang$maxFixedArity = 0;
G__25453.cljs$lang$applyTo = (function (arglist__25455){
var args = cljs.core.seq(arglist__25455);
return G__25453__delegate(args);
});
G__25453.cljs$core$IFn$_invoke$arity$variadic = G__25453__delegate;
return G__25453;
})()
;})(_STAR_print_fn_STAR_25450,_STAR_print_newline_STAR_25451,base_path_25452))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_25451;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_25450;
}}catch (e25449){if((e25449 instanceof Error)){
var e = e25449;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_25452], null));
} else {
var e = e25449;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_25452))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__25456){
var map__25463 = p__25456;
var map__25463__$1 = ((((!((map__25463 == null)))?((((map__25463.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25463.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25463):map__25463);
var opts = map__25463__$1;
var build_id = cljs.core.get.call(null,map__25463__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__25463,map__25463__$1,opts,build_id){
return (function (p__25465){
var vec__25466 = p__25465;
var map__25467 = cljs.core.nth.call(null,vec__25466,(0),null);
var map__25467__$1 = ((((!((map__25467 == null)))?((((map__25467.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25467.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25467):map__25467);
var msg = map__25467__$1;
var msg_name = cljs.core.get.call(null,map__25467__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25466,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__25466,map__25467,map__25467__$1,msg,msg_name,_,map__25463,map__25463__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__25466,map__25467,map__25467__$1,msg,msg_name,_,map__25463,map__25463__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__25463,map__25463__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__25473){
var vec__25474 = p__25473;
var map__25475 = cljs.core.nth.call(null,vec__25474,(0),null);
var map__25475__$1 = ((((!((map__25475 == null)))?((((map__25475.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25475.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25475):map__25475);
var msg = map__25475__$1;
var msg_name = cljs.core.get.call(null,map__25475__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25474,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__25477){
var map__25487 = p__25477;
var map__25487__$1 = ((((!((map__25487 == null)))?((((map__25487.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25487.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25487):map__25487);
var on_compile_warning = cljs.core.get.call(null,map__25487__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__25487__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__25487,map__25487__$1,on_compile_warning,on_compile_fail){
return (function (p__25489){
var vec__25490 = p__25489;
var map__25491 = cljs.core.nth.call(null,vec__25490,(0),null);
var map__25491__$1 = ((((!((map__25491 == null)))?((((map__25491.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25491.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25491):map__25491);
var msg = map__25491__$1;
var msg_name = cljs.core.get.call(null,map__25491__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25490,(1));
var pred__25493 = cljs.core._EQ_;
var expr__25494 = msg_name;
if(cljs.core.truth_(pred__25493.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__25494))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__25493.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__25494))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__25487,map__25487__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20867__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20867__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20868__auto__ = (function (){var switch__20755__auto__ = ((function (c__20867__auto__,msg_hist,msg_names,msg){
return (function (state_25710){
var state_val_25711 = (state_25710[(1)]);
if((state_val_25711 === (7))){
var inst_25634 = (state_25710[(2)]);
var state_25710__$1 = state_25710;
if(cljs.core.truth_(inst_25634)){
var statearr_25712_25758 = state_25710__$1;
(statearr_25712_25758[(1)] = (8));

} else {
var statearr_25713_25759 = state_25710__$1;
(statearr_25713_25759[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25711 === (20))){
var inst_25704 = (state_25710[(2)]);
var state_25710__$1 = state_25710;
var statearr_25714_25760 = state_25710__$1;
(statearr_25714_25760[(2)] = inst_25704);

(statearr_25714_25760[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25711 === (27))){
var inst_25700 = (state_25710[(2)]);
var state_25710__$1 = state_25710;
var statearr_25715_25761 = state_25710__$1;
(statearr_25715_25761[(2)] = inst_25700);

(statearr_25715_25761[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25711 === (1))){
var inst_25627 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_25710__$1 = state_25710;
if(cljs.core.truth_(inst_25627)){
var statearr_25716_25762 = state_25710__$1;
(statearr_25716_25762[(1)] = (2));

} else {
var statearr_25717_25763 = state_25710__$1;
(statearr_25717_25763[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25711 === (24))){
var inst_25702 = (state_25710[(2)]);
var state_25710__$1 = state_25710;
var statearr_25718_25764 = state_25710__$1;
(statearr_25718_25764[(2)] = inst_25702);

(statearr_25718_25764[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25711 === (4))){
var inst_25708 = (state_25710[(2)]);
var state_25710__$1 = state_25710;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25710__$1,inst_25708);
} else {
if((state_val_25711 === (15))){
var inst_25706 = (state_25710[(2)]);
var state_25710__$1 = state_25710;
var statearr_25719_25765 = state_25710__$1;
(statearr_25719_25765[(2)] = inst_25706);

(statearr_25719_25765[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25711 === (21))){
var inst_25665 = (state_25710[(2)]);
var state_25710__$1 = state_25710;
var statearr_25720_25766 = state_25710__$1;
(statearr_25720_25766[(2)] = inst_25665);

(statearr_25720_25766[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25711 === (31))){
var inst_25689 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_25710__$1 = state_25710;
if(cljs.core.truth_(inst_25689)){
var statearr_25721_25767 = state_25710__$1;
(statearr_25721_25767[(1)] = (34));

} else {
var statearr_25722_25768 = state_25710__$1;
(statearr_25722_25768[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25711 === (32))){
var inst_25698 = (state_25710[(2)]);
var state_25710__$1 = state_25710;
var statearr_25723_25769 = state_25710__$1;
(statearr_25723_25769[(2)] = inst_25698);

(statearr_25723_25769[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25711 === (33))){
var inst_25687 = (state_25710[(2)]);
var state_25710__$1 = state_25710;
var statearr_25724_25770 = state_25710__$1;
(statearr_25724_25770[(2)] = inst_25687);

(statearr_25724_25770[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25711 === (13))){
var inst_25648 = figwheel.client.heads_up.clear.call(null);
var state_25710__$1 = state_25710;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25710__$1,(16),inst_25648);
} else {
if((state_val_25711 === (22))){
var inst_25669 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25670 = figwheel.client.heads_up.append_message.call(null,inst_25669);
var state_25710__$1 = state_25710;
var statearr_25725_25771 = state_25710__$1;
(statearr_25725_25771[(2)] = inst_25670);

(statearr_25725_25771[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25711 === (36))){
var inst_25696 = (state_25710[(2)]);
var state_25710__$1 = state_25710;
var statearr_25726_25772 = state_25710__$1;
(statearr_25726_25772[(2)] = inst_25696);

(statearr_25726_25772[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25711 === (29))){
var inst_25680 = (state_25710[(2)]);
var state_25710__$1 = state_25710;
var statearr_25727_25773 = state_25710__$1;
(statearr_25727_25773[(2)] = inst_25680);

(statearr_25727_25773[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25711 === (6))){
var inst_25629 = (state_25710[(7)]);
var state_25710__$1 = state_25710;
var statearr_25728_25774 = state_25710__$1;
(statearr_25728_25774[(2)] = inst_25629);

(statearr_25728_25774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25711 === (28))){
var inst_25676 = (state_25710[(2)]);
var inst_25677 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25678 = figwheel.client.heads_up.display_warning.call(null,inst_25677);
var state_25710__$1 = (function (){var statearr_25729 = state_25710;
(statearr_25729[(8)] = inst_25676);

return statearr_25729;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25710__$1,(29),inst_25678);
} else {
if((state_val_25711 === (25))){
var inst_25674 = figwheel.client.heads_up.clear.call(null);
var state_25710__$1 = state_25710;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25710__$1,(28),inst_25674);
} else {
if((state_val_25711 === (34))){
var inst_25691 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25710__$1 = state_25710;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25710__$1,(37),inst_25691);
} else {
if((state_val_25711 === (17))){
var inst_25656 = (state_25710[(2)]);
var state_25710__$1 = state_25710;
var statearr_25730_25775 = state_25710__$1;
(statearr_25730_25775[(2)] = inst_25656);

(statearr_25730_25775[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25711 === (3))){
var inst_25646 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_25710__$1 = state_25710;
if(cljs.core.truth_(inst_25646)){
var statearr_25731_25776 = state_25710__$1;
(statearr_25731_25776[(1)] = (13));

} else {
var statearr_25732_25777 = state_25710__$1;
(statearr_25732_25777[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25711 === (12))){
var inst_25642 = (state_25710[(2)]);
var state_25710__$1 = state_25710;
var statearr_25733_25778 = state_25710__$1;
(statearr_25733_25778[(2)] = inst_25642);

(statearr_25733_25778[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25711 === (2))){
var inst_25629 = (state_25710[(7)]);
var inst_25629__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_25710__$1 = (function (){var statearr_25734 = state_25710;
(statearr_25734[(7)] = inst_25629__$1);

return statearr_25734;
})();
if(cljs.core.truth_(inst_25629__$1)){
var statearr_25735_25779 = state_25710__$1;
(statearr_25735_25779[(1)] = (5));

} else {
var statearr_25736_25780 = state_25710__$1;
(statearr_25736_25780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25711 === (23))){
var inst_25672 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_25710__$1 = state_25710;
if(cljs.core.truth_(inst_25672)){
var statearr_25737_25781 = state_25710__$1;
(statearr_25737_25781[(1)] = (25));

} else {
var statearr_25738_25782 = state_25710__$1;
(statearr_25738_25782[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25711 === (35))){
var state_25710__$1 = state_25710;
var statearr_25739_25783 = state_25710__$1;
(statearr_25739_25783[(2)] = null);

(statearr_25739_25783[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25711 === (19))){
var inst_25667 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_25710__$1 = state_25710;
if(cljs.core.truth_(inst_25667)){
var statearr_25740_25784 = state_25710__$1;
(statearr_25740_25784[(1)] = (22));

} else {
var statearr_25741_25785 = state_25710__$1;
(statearr_25741_25785[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25711 === (11))){
var inst_25638 = (state_25710[(2)]);
var state_25710__$1 = state_25710;
var statearr_25742_25786 = state_25710__$1;
(statearr_25742_25786[(2)] = inst_25638);

(statearr_25742_25786[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25711 === (9))){
var inst_25640 = figwheel.client.heads_up.clear.call(null);
var state_25710__$1 = state_25710;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25710__$1,(12),inst_25640);
} else {
if((state_val_25711 === (5))){
var inst_25631 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_25710__$1 = state_25710;
var statearr_25743_25787 = state_25710__$1;
(statearr_25743_25787[(2)] = inst_25631);

(statearr_25743_25787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25711 === (14))){
var inst_25658 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_25710__$1 = state_25710;
if(cljs.core.truth_(inst_25658)){
var statearr_25744_25788 = state_25710__$1;
(statearr_25744_25788[(1)] = (18));

} else {
var statearr_25745_25789 = state_25710__$1;
(statearr_25745_25789[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25711 === (26))){
var inst_25682 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_25710__$1 = state_25710;
if(cljs.core.truth_(inst_25682)){
var statearr_25746_25790 = state_25710__$1;
(statearr_25746_25790[(1)] = (30));

} else {
var statearr_25747_25791 = state_25710__$1;
(statearr_25747_25791[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25711 === (16))){
var inst_25650 = (state_25710[(2)]);
var inst_25651 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25652 = figwheel.client.format_messages.call(null,inst_25651);
var inst_25653 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25654 = figwheel.client.heads_up.display_error.call(null,inst_25652,inst_25653);
var state_25710__$1 = (function (){var statearr_25748 = state_25710;
(statearr_25748[(9)] = inst_25650);

return statearr_25748;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25710__$1,(17),inst_25654);
} else {
if((state_val_25711 === (30))){
var inst_25684 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25685 = figwheel.client.heads_up.display_warning.call(null,inst_25684);
var state_25710__$1 = state_25710;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25710__$1,(33),inst_25685);
} else {
if((state_val_25711 === (10))){
var inst_25644 = (state_25710[(2)]);
var state_25710__$1 = state_25710;
var statearr_25749_25792 = state_25710__$1;
(statearr_25749_25792[(2)] = inst_25644);

(statearr_25749_25792[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25711 === (18))){
var inst_25660 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25661 = figwheel.client.format_messages.call(null,inst_25660);
var inst_25662 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25663 = figwheel.client.heads_up.display_error.call(null,inst_25661,inst_25662);
var state_25710__$1 = state_25710;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25710__$1,(21),inst_25663);
} else {
if((state_val_25711 === (37))){
var inst_25693 = (state_25710[(2)]);
var state_25710__$1 = state_25710;
var statearr_25750_25793 = state_25710__$1;
(statearr_25750_25793[(2)] = inst_25693);

(statearr_25750_25793[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25711 === (8))){
var inst_25636 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25710__$1 = state_25710;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25710__$1,(11),inst_25636);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20867__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20755__auto__,c__20867__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20756__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20756__auto____0 = (function (){
var statearr_25754 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25754[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20756__auto__);

(statearr_25754[(1)] = (1));

return statearr_25754;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20756__auto____1 = (function (state_25710){
while(true){
var ret_value__20757__auto__ = (function (){try{while(true){
var result__20758__auto__ = switch__20755__auto__.call(null,state_25710);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20758__auto__;
}
break;
}
}catch (e25755){if((e25755 instanceof Object)){
var ex__20759__auto__ = e25755;
var statearr_25756_25794 = state_25710;
(statearr_25756_25794[(5)] = ex__20759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25710);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25795 = state_25710;
state_25710 = G__25795;
continue;
} else {
return ret_value__20757__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20756__auto__ = function(state_25710){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20756__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20756__auto____1.call(this,state_25710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20756__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20756__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20756__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20756__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20756__auto__;
})()
;})(switch__20755__auto__,c__20867__auto__,msg_hist,msg_names,msg))
})();
var state__20869__auto__ = (function (){var statearr_25757 = f__20868__auto__.call(null);
(statearr_25757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20867__auto__);

return statearr_25757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20869__auto__);
});})(c__20867__auto__,msg_hist,msg_names,msg))
);

return c__20867__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20867__auto___25858 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20867__auto___25858,ch){
return (function (){
var f__20868__auto__ = (function (){var switch__20755__auto__ = ((function (c__20867__auto___25858,ch){
return (function (state_25841){
var state_val_25842 = (state_25841[(1)]);
if((state_val_25842 === (1))){
var state_25841__$1 = state_25841;
var statearr_25843_25859 = state_25841__$1;
(statearr_25843_25859[(2)] = null);

(statearr_25843_25859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (2))){
var state_25841__$1 = state_25841;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25841__$1,(4),ch);
} else {
if((state_val_25842 === (3))){
var inst_25839 = (state_25841[(2)]);
var state_25841__$1 = state_25841;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25841__$1,inst_25839);
} else {
if((state_val_25842 === (4))){
var inst_25829 = (state_25841[(7)]);
var inst_25829__$1 = (state_25841[(2)]);
var state_25841__$1 = (function (){var statearr_25844 = state_25841;
(statearr_25844[(7)] = inst_25829__$1);

return statearr_25844;
})();
if(cljs.core.truth_(inst_25829__$1)){
var statearr_25845_25860 = state_25841__$1;
(statearr_25845_25860[(1)] = (5));

} else {
var statearr_25846_25861 = state_25841__$1;
(statearr_25846_25861[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (5))){
var inst_25829 = (state_25841[(7)]);
var inst_25831 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_25829);
var state_25841__$1 = state_25841;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25841__$1,(8),inst_25831);
} else {
if((state_val_25842 === (6))){
var state_25841__$1 = state_25841;
var statearr_25847_25862 = state_25841__$1;
(statearr_25847_25862[(2)] = null);

(statearr_25847_25862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (7))){
var inst_25837 = (state_25841[(2)]);
var state_25841__$1 = state_25841;
var statearr_25848_25863 = state_25841__$1;
(statearr_25848_25863[(2)] = inst_25837);

(statearr_25848_25863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (8))){
var inst_25833 = (state_25841[(2)]);
var state_25841__$1 = (function (){var statearr_25849 = state_25841;
(statearr_25849[(8)] = inst_25833);

return statearr_25849;
})();
var statearr_25850_25864 = state_25841__$1;
(statearr_25850_25864[(2)] = null);

(statearr_25850_25864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__20867__auto___25858,ch))
;
return ((function (switch__20755__auto__,c__20867__auto___25858,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20756__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20756__auto____0 = (function (){
var statearr_25854 = [null,null,null,null,null,null,null,null,null];
(statearr_25854[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20756__auto__);

(statearr_25854[(1)] = (1));

return statearr_25854;
});
var figwheel$client$heads_up_plugin_$_state_machine__20756__auto____1 = (function (state_25841){
while(true){
var ret_value__20757__auto__ = (function (){try{while(true){
var result__20758__auto__ = switch__20755__auto__.call(null,state_25841);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20758__auto__;
}
break;
}
}catch (e25855){if((e25855 instanceof Object)){
var ex__20759__auto__ = e25855;
var statearr_25856_25865 = state_25841;
(statearr_25856_25865[(5)] = ex__20759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25841);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25855;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25866 = state_25841;
state_25841 = G__25866;
continue;
} else {
return ret_value__20757__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20756__auto__ = function(state_25841){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20756__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20756__auto____1.call(this,state_25841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20756__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20756__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20756__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20756__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20756__auto__;
})()
;})(switch__20755__auto__,c__20867__auto___25858,ch))
})();
var state__20869__auto__ = (function (){var statearr_25857 = f__20868__auto__.call(null);
(statearr_25857[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20867__auto___25858);

return statearr_25857;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20869__auto__);
});})(c__20867__auto___25858,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__20867__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20867__auto__){
return (function (){
var f__20868__auto__ = (function (){var switch__20755__auto__ = ((function (c__20867__auto__){
return (function (state_25887){
var state_val_25888 = (state_25887[(1)]);
if((state_val_25888 === (1))){
var inst_25882 = cljs.core.async.timeout.call(null,(3000));
var state_25887__$1 = state_25887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25887__$1,(2),inst_25882);
} else {
if((state_val_25888 === (2))){
var inst_25884 = (state_25887[(2)]);
var inst_25885 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_25887__$1 = (function (){var statearr_25889 = state_25887;
(statearr_25889[(7)] = inst_25884);

return statearr_25889;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25887__$1,inst_25885);
} else {
return null;
}
}
});})(c__20867__auto__))
;
return ((function (switch__20755__auto__,c__20867__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20756__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20756__auto____0 = (function (){
var statearr_25893 = [null,null,null,null,null,null,null,null];
(statearr_25893[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20756__auto__);

(statearr_25893[(1)] = (1));

return statearr_25893;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20756__auto____1 = (function (state_25887){
while(true){
var ret_value__20757__auto__ = (function (){try{while(true){
var result__20758__auto__ = switch__20755__auto__.call(null,state_25887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20758__auto__;
}
break;
}
}catch (e25894){if((e25894 instanceof Object)){
var ex__20759__auto__ = e25894;
var statearr_25895_25897 = state_25887;
(statearr_25895_25897[(5)] = ex__20759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25894;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25898 = state_25887;
state_25887 = G__25898;
continue;
} else {
return ret_value__20757__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20756__auto__ = function(state_25887){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20756__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20756__auto____1.call(this,state_25887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20756__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20756__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20756__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20756__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20756__auto__;
})()
;})(switch__20755__auto__,c__20867__auto__))
})();
var state__20869__auto__ = (function (){var statearr_25896 = f__20868__auto__.call(null);
(statearr_25896[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20867__auto__);

return statearr_25896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20869__auto__);
});})(c__20867__auto__))
);

return c__20867__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__25899){
var map__25906 = p__25899;
var map__25906__$1 = ((((!((map__25906 == null)))?((((map__25906.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25906.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25906):map__25906);
var ed = map__25906__$1;
var formatted_exception = cljs.core.get.call(null,map__25906__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__25906__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__25906__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__25908_25912 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__25909_25913 = null;
var count__25910_25914 = (0);
var i__25911_25915 = (0);
while(true){
if((i__25911_25915 < count__25910_25914)){
var msg_25916 = cljs.core._nth.call(null,chunk__25909_25913,i__25911_25915);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25916);

var G__25917 = seq__25908_25912;
var G__25918 = chunk__25909_25913;
var G__25919 = count__25910_25914;
var G__25920 = (i__25911_25915 + (1));
seq__25908_25912 = G__25917;
chunk__25909_25913 = G__25918;
count__25910_25914 = G__25919;
i__25911_25915 = G__25920;
continue;
} else {
var temp__4425__auto___25921 = cljs.core.seq.call(null,seq__25908_25912);
if(temp__4425__auto___25921){
var seq__25908_25922__$1 = temp__4425__auto___25921;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25908_25922__$1)){
var c__17629__auto___25923 = cljs.core.chunk_first.call(null,seq__25908_25922__$1);
var G__25924 = cljs.core.chunk_rest.call(null,seq__25908_25922__$1);
var G__25925 = c__17629__auto___25923;
var G__25926 = cljs.core.count.call(null,c__17629__auto___25923);
var G__25927 = (0);
seq__25908_25912 = G__25924;
chunk__25909_25913 = G__25925;
count__25910_25914 = G__25926;
i__25911_25915 = G__25927;
continue;
} else {
var msg_25928 = cljs.core.first.call(null,seq__25908_25922__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25928);

var G__25929 = cljs.core.next.call(null,seq__25908_25922__$1);
var G__25930 = null;
var G__25931 = (0);
var G__25932 = (0);
seq__25908_25912 = G__25929;
chunk__25909_25913 = G__25930;
count__25910_25914 = G__25931;
i__25911_25915 = G__25932;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__25933){
var map__25936 = p__25933;
var map__25936__$1 = ((((!((map__25936 == null)))?((((map__25936.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25936.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25936):map__25936);
var w = map__25936__$1;
var message = cljs.core.get.call(null,map__25936__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16814__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16814__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16814__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__25944 = cljs.core.seq.call(null,plugins);
var chunk__25945 = null;
var count__25946 = (0);
var i__25947 = (0);
while(true){
if((i__25947 < count__25946)){
var vec__25948 = cljs.core._nth.call(null,chunk__25945,i__25947);
var k = cljs.core.nth.call(null,vec__25948,(0),null);
var plugin = cljs.core.nth.call(null,vec__25948,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25950 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25944,chunk__25945,count__25946,i__25947,pl_25950,vec__25948,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_25950.call(null,msg_hist);
});})(seq__25944,chunk__25945,count__25946,i__25947,pl_25950,vec__25948,k,plugin))
);
} else {
}

var G__25951 = seq__25944;
var G__25952 = chunk__25945;
var G__25953 = count__25946;
var G__25954 = (i__25947 + (1));
seq__25944 = G__25951;
chunk__25945 = G__25952;
count__25946 = G__25953;
i__25947 = G__25954;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25944);
if(temp__4425__auto__){
var seq__25944__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25944__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__25944__$1);
var G__25955 = cljs.core.chunk_rest.call(null,seq__25944__$1);
var G__25956 = c__17629__auto__;
var G__25957 = cljs.core.count.call(null,c__17629__auto__);
var G__25958 = (0);
seq__25944 = G__25955;
chunk__25945 = G__25956;
count__25946 = G__25957;
i__25947 = G__25958;
continue;
} else {
var vec__25949 = cljs.core.first.call(null,seq__25944__$1);
var k = cljs.core.nth.call(null,vec__25949,(0),null);
var plugin = cljs.core.nth.call(null,vec__25949,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25959 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25944,chunk__25945,count__25946,i__25947,pl_25959,vec__25949,k,plugin,seq__25944__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_25959.call(null,msg_hist);
});})(seq__25944,chunk__25945,count__25946,i__25947,pl_25959,vec__25949,k,plugin,seq__25944__$1,temp__4425__auto__))
);
} else {
}

var G__25960 = cljs.core.next.call(null,seq__25944__$1);
var G__25961 = null;
var G__25962 = (0);
var G__25963 = (0);
seq__25944 = G__25960;
chunk__25945 = G__25961;
count__25946 = G__25962;
i__25947 = G__25963;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args25964 = [];
var len__17884__auto___25967 = arguments.length;
var i__17885__auto___25968 = (0);
while(true){
if((i__17885__auto___25968 < len__17884__auto___25967)){
args25964.push((arguments[i__17885__auto___25968]));

var G__25969 = (i__17885__auto___25968 + (1));
i__17885__auto___25968 = G__25969;
continue;
} else {
}
break;
}

var G__25966 = args25964.length;
switch (G__25966) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25964.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17891__auto__ = [];
var len__17884__auto___25975 = arguments.length;
var i__17885__auto___25976 = (0);
while(true){
if((i__17885__auto___25976 < len__17884__auto___25975)){
args__17891__auto__.push((arguments[i__17885__auto___25976]));

var G__25977 = (i__17885__auto___25976 + (1));
i__17885__auto___25976 = G__25977;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((0) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17892__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__25972){
var map__25973 = p__25972;
var map__25973__$1 = ((((!((map__25973 == null)))?((((map__25973.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25973.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25973):map__25973);
var opts = map__25973__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq25971){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25971));
});

//# sourceMappingURL=client.js.map?rel=1448981698894