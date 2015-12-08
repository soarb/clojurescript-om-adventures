// Compiled by ClojureScript 1.7.170 {}
goog.provide('om_tut.core');
goog.require('cljs.core');
goog.require('om.core');
goog.require('om.dom');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Edits to this text should show up in your developer console.");
if(typeof om_tut.core.app_state !== 'undefined'){
} else {
om_tut.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"contacts","contacts",333503174),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"first","first",-644103046),"Ben",new cljs.core.Keyword(null,"last","last",1105735132),"Bitdiddle",new cljs.core.Keyword(null,"email","email",1415816706),"benb@mit.edu"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"first","first",-644103046),"Alyssa",new cljs.core.Keyword(null,"middle-initial","middle-initial",854677765),"P",new cljs.core.Keyword(null,"last","last",1105735132),"Hacker",new cljs.core.Keyword(null,"email","email",1415816706),"aphacker@mit.edu"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"first","first",-644103046),"Eva",new cljs.core.Keyword(null,"middle","middle",-701029031),"Lu",new cljs.core.Keyword(null,"last","last",1105735132),"Ator",new cljs.core.Keyword(null,"email","email",1415816706),"eval@mit.edu"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"first","first",-644103046),"Louis",new cljs.core.Keyword(null,"last","last",1105735132),"Reasoner",new cljs.core.Keyword(null,"email","email",1415816706),"prolog@mit.edu"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"first","first",-644103046),"Cy",new cljs.core.Keyword(null,"middle-initial","middle-initial",854677765),"D",new cljs.core.Keyword(null,"last","last",1105735132),"Effect",new cljs.core.Keyword(null,"email","email",1415816706),"bugs@mit.edu"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"first","first",-644103046),"Lem",new cljs.core.Keyword(null,"middle-initial","middle-initial",854677765),"E",new cljs.core.Keyword(null,"last","last",1105735132),"Tweakit",new cljs.core.Keyword(null,"email","email",1415816706),"morebugs@mit.edu"], null)], null)], null));
}
om_tut.core.middle_name = (function om_tut$core$middle_name(p__19548){
var map__19551 = p__19548;
var map__19551__$1 = ((((!((map__19551 == null)))?((((map__19551.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19551.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19551):map__19551);
var middle = cljs.core.get.call(null,map__19551__$1,new cljs.core.Keyword(null,"middle","middle",-701029031));
var middle_initial = cljs.core.get.call(null,map__19551__$1,new cljs.core.Keyword(null,"middle-initial","middle-initial",854677765));
if(cljs.core.truth_(middle)){
return [cljs.core.str(" "),cljs.core.str(middle)].join('');
} else {
if(cljs.core.truth_(middle_initial)){
return [cljs.core.str(" "),cljs.core.str(middle_initial),cljs.core.str(".")].join('');
} else {
return null;
}
}
});
om_tut.core.display_name = (function om_tut$core$display_name(p__19553){
var map__19556 = p__19553;
var map__19556__$1 = ((((!((map__19556 == null)))?((((map__19556.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19556.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19556):map__19556);
var contact = map__19556__$1;
var first = cljs.core.get.call(null,map__19556__$1,new cljs.core.Keyword(null,"first","first",-644103046));
var last = cljs.core.get.call(null,map__19556__$1,new cljs.core.Keyword(null,"last","last",1105735132));
return [cljs.core.str(last),cljs.core.str(", "),cljs.core.str(first),cljs.core.str(om_tut.core.middle_name.call(null,contact))].join('');
});
om_tut.core.contact_view = (function om_tut$core$contact_view(contact,owner){
if(typeof om_tut.core.t_om_tut$core19564 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
om_tut.core.t_om_tut$core19564 = (function (contact_view,contact,owner,meta19565){
this.contact_view = contact_view;
this.contact = contact;
this.owner = owner;
this.meta19565 = meta19565;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_tut.core.t_om_tut$core19564.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19566,meta19565__$1){
var self__ = this;
var _19566__$1 = this;
return (new om_tut.core.t_om_tut$core19564(self__.contact_view,self__.contact,self__.owner,meta19565__$1));
});

om_tut.core.t_om_tut$core19564.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19566){
var self__ = this;
var _19566__$1 = this;
return self__.meta19565;
});

om_tut.core.t_om_tut$core19564.prototype.om$core$IRenderState$ = true;

om_tut.core.t_om_tut$core19564.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__19567){
var self__ = this;
var map__19568 = p__19567;
var map__19568__$1 = ((((!((map__19568 == null)))?((((map__19568.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19568.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19568):map__19568);
var delete$ = cljs.core.get.call(null,map__19568__$1,new cljs.core.Keyword(null,"delete","delete",-1768633620));
var this$__$1 = this;
return React.DOM.li(null,React.DOM.span(null,om_tut.core.display_name.call(null,self__.contact)),React.DOM.button({"onClick": ((function (this$__$1,map__19568,map__19568__$1,delete$){
return (function (e){
return cljs.core.async.put_BANG_.call(null,delete$,cljs.core.deref.call(null,self__.contact));
});})(this$__$1,map__19568,map__19568__$1,delete$))
},"Delete"));
});

om_tut.core.t_om_tut$core19564.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"contact-view","contact-view",1690125007,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"contact","contact",-2045342397,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"contact","contact",-2045342397,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta19565","meta19565",1442121744,null)], null);
});

om_tut.core.t_om_tut$core19564.cljs$lang$type = true;

om_tut.core.t_om_tut$core19564.cljs$lang$ctorStr = "om-tut.core/t_om_tut$core19564";

om_tut.core.t_om_tut$core19564.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"om-tut.core/t_om_tut$core19564");
});

om_tut.core.__GT_t_om_tut$core19564 = (function om_tut$core$contact_view_$___GT_t_om_tut$core19564(contact_view__$1,contact__$1,owner__$1,meta19565){
return (new om_tut.core.t_om_tut$core19564(contact_view__$1,contact__$1,owner__$1,meta19565));
});

}

return (new om_tut.core.t_om_tut$core19564(om_tut$core$contact_view,contact,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om_tut.core.contacts_view = (function om_tut$core$contacts_view(data,owner){
if(typeof om_tut.core.t_om_tut$core19598 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
om_tut.core.t_om_tut$core19598 = (function (contacts_view,data,owner,meta19599){
this.contacts_view = contacts_view;
this.data = data;
this.owner = owner;
this.meta19599 = meta19599;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_tut.core.t_om_tut$core19598.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19600,meta19599__$1){
var self__ = this;
var _19600__$1 = this;
return (new om_tut.core.t_om_tut$core19598(self__.contacts_view,self__.data,self__.owner,meta19599__$1));
});

om_tut.core.t_om_tut$core19598.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19600){
var self__ = this;
var _19600__$1 = this;
return self__.meta19599;
});

om_tut.core.t_om_tut$core19598.prototype.om$core$IInitState$ = true;

om_tut.core.t_om_tut$core19598.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"delete","delete",-1768633620),cljs.core.async.chan.call(null)], null);
});

om_tut.core.t_om_tut$core19598.prototype.om$core$IWillMount$ = true;

om_tut.core.t_om_tut$core19598.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var delete$ = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"delete","delete",-1768633620));
var c__19487__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19487__auto__,delete$,___$1){
return (function (){
var f__19488__auto__ = (function (){var switch__19466__auto__ = ((function (c__19487__auto__,delete$,___$1){
return (function (state_19610){
var state_val_19611 = (state_19610[(1)]);
if((state_val_19611 === (1))){
var state_19610__$1 = state_19610;
var statearr_19612_19625 = state_19610__$1;
(statearr_19612_19625[(2)] = null);

(statearr_19612_19625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19611 === (2))){
var state_19610__$1 = state_19610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19610__$1,(4),delete$);
} else {
if((state_val_19611 === (3))){
var inst_19608 = (state_19610[(2)]);
var state_19610__$1 = state_19610;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19610__$1,inst_19608);
} else {
if((state_val_19611 === (4))){
var inst_19603 = (state_19610[(2)]);
var inst_19604 = (function (){var contact = inst_19603;
return ((function (contact,inst_19603,state_val_19611,c__19487__auto__,delete$,___$1){
return (function (contacts){
return cljs.core.vec.call(null,cljs.core.remove.call(null,((function (contact,inst_19603,state_val_19611,c__19487__auto__,delete$,___$1){
return (function (p1__19570_SHARP_){
return cljs.core._EQ_.call(null,contact,p1__19570_SHARP_);
});})(contact,inst_19603,state_val_19611,c__19487__auto__,delete$,___$1))
,contacts));
});
;})(contact,inst_19603,state_val_19611,c__19487__auto__,delete$,___$1))
})();
var inst_19605 = om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"contacts","contacts",333503174),inst_19604);
var state_19610__$1 = (function (){var statearr_19613 = state_19610;
(statearr_19613[(7)] = inst_19605);

return statearr_19613;
})();
var statearr_19614_19626 = state_19610__$1;
(statearr_19614_19626[(2)] = null);

(statearr_19614_19626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__19487__auto__,delete$,___$1))
;
return ((function (switch__19466__auto__,c__19487__auto__,delete$,___$1){
return (function() {
var om_tut$core$contacts_view_$_state_machine__19467__auto__ = null;
var om_tut$core$contacts_view_$_state_machine__19467__auto____0 = (function (){
var statearr_19618 = [null,null,null,null,null,null,null,null];
(statearr_19618[(0)] = om_tut$core$contacts_view_$_state_machine__19467__auto__);

(statearr_19618[(1)] = (1));

return statearr_19618;
});
var om_tut$core$contacts_view_$_state_machine__19467__auto____1 = (function (state_19610){
while(true){
var ret_value__19468__auto__ = (function (){try{while(true){
var result__19469__auto__ = switch__19466__auto__.call(null,state_19610);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19469__auto__;
}
break;
}
}catch (e19619){if((e19619 instanceof Object)){
var ex__19470__auto__ = e19619;
var statearr_19620_19627 = state_19610;
(statearr_19620_19627[(5)] = ex__19470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19610);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19619;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19628 = state_19610;
state_19610 = G__19628;
continue;
} else {
return ret_value__19468__auto__;
}
break;
}
});
om_tut$core$contacts_view_$_state_machine__19467__auto__ = function(state_19610){
switch(arguments.length){
case 0:
return om_tut$core$contacts_view_$_state_machine__19467__auto____0.call(this);
case 1:
return om_tut$core$contacts_view_$_state_machine__19467__auto____1.call(this,state_19610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tut$core$contacts_view_$_state_machine__19467__auto__.cljs$core$IFn$_invoke$arity$0 = om_tut$core$contacts_view_$_state_machine__19467__auto____0;
om_tut$core$contacts_view_$_state_machine__19467__auto__.cljs$core$IFn$_invoke$arity$1 = om_tut$core$contacts_view_$_state_machine__19467__auto____1;
return om_tut$core$contacts_view_$_state_machine__19467__auto__;
})()
;})(switch__19466__auto__,c__19487__auto__,delete$,___$1))
})();
var state__19489__auto__ = (function (){var statearr_19621 = f__19488__auto__.call(null);
(statearr_19621[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19487__auto__);

return statearr_19621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19489__auto__);
});})(c__19487__auto__,delete$,___$1))
);

return c__19487__auto__;
});

om_tut.core.t_om_tut$core19598.prototype.om$core$IRenderState$ = true;

om_tut.core.t_om_tut$core19598.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__19622){
var self__ = this;
var map__19623 = p__19622;
var map__19623__$1 = ((((!((map__19623 == null)))?((((map__19623.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19623.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19623):map__19623);
var delete$ = cljs.core.get.call(null,map__19623__$1,new cljs.core.Keyword(null,"delete","delete",-1768633620));
var this$__$1 = this;
return React.DOM.div(null,React.DOM.h2(null,"Contact list"),cljs.core.apply.call(null,om.dom.ul,null,om.core.build_all.call(null,om_tut.core.contact_view,new cljs.core.Keyword(null,"contacts","contacts",333503174).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"delete","delete",-1768633620),delete$], null)], null))));
});

om_tut.core.t_om_tut$core19598.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"contacts-view","contacts-view",-1128678803,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta19599","meta19599",-24057027,null)], null);
});

om_tut.core.t_om_tut$core19598.cljs$lang$type = true;

om_tut.core.t_om_tut$core19598.cljs$lang$ctorStr = "om-tut.core/t_om_tut$core19598";

om_tut.core.t_om_tut$core19598.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"om-tut.core/t_om_tut$core19598");
});

om_tut.core.__GT_t_om_tut$core19598 = (function om_tut$core$contacts_view_$___GT_t_om_tut$core19598(contacts_view__$1,data__$1,owner__$1,meta19599){
return (new om_tut.core.t_om_tut$core19598(contacts_view__$1,data__$1,owner__$1,meta19599));
});

}

return (new om_tut.core.t_om_tut$core19598(om_tut$core$contacts_view,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,om_tut.core.contacts_view,om_tut.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("contacts")], null));
om_tut.core.on_js_reload = (function om_tut$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1449487928355