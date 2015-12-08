// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24834_24848 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24835_24849 = null;
var count__24836_24850 = (0);
var i__24837_24851 = (0);
while(true){
if((i__24837_24851 < count__24836_24850)){
var f_24852 = cljs.core._nth.call(null,chunk__24835_24849,i__24837_24851);
cljs.core.println.call(null,"  ",f_24852);

var G__24853 = seq__24834_24848;
var G__24854 = chunk__24835_24849;
var G__24855 = count__24836_24850;
var G__24856 = (i__24837_24851 + (1));
seq__24834_24848 = G__24853;
chunk__24835_24849 = G__24854;
count__24836_24850 = G__24855;
i__24837_24851 = G__24856;
continue;
} else {
var temp__4425__auto___24857 = cljs.core.seq.call(null,seq__24834_24848);
if(temp__4425__auto___24857){
var seq__24834_24858__$1 = temp__4425__auto___24857;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24834_24858__$1)){
var c__17629__auto___24859 = cljs.core.chunk_first.call(null,seq__24834_24858__$1);
var G__24860 = cljs.core.chunk_rest.call(null,seq__24834_24858__$1);
var G__24861 = c__17629__auto___24859;
var G__24862 = cljs.core.count.call(null,c__17629__auto___24859);
var G__24863 = (0);
seq__24834_24848 = G__24860;
chunk__24835_24849 = G__24861;
count__24836_24850 = G__24862;
i__24837_24851 = G__24863;
continue;
} else {
var f_24864 = cljs.core.first.call(null,seq__24834_24858__$1);
cljs.core.println.call(null,"  ",f_24864);

var G__24865 = cljs.core.next.call(null,seq__24834_24858__$1);
var G__24866 = null;
var G__24867 = (0);
var G__24868 = (0);
seq__24834_24848 = G__24865;
chunk__24835_24849 = G__24866;
count__24836_24850 = G__24867;
i__24837_24851 = G__24868;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_24869 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16826__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_24869);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_24869)))?cljs.core.second.call(null,arglists_24869):arglists_24869));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24838 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24839 = null;
var count__24840 = (0);
var i__24841 = (0);
while(true){
if((i__24841 < count__24840)){
var vec__24842 = cljs.core._nth.call(null,chunk__24839,i__24841);
var name = cljs.core.nth.call(null,vec__24842,(0),null);
var map__24843 = cljs.core.nth.call(null,vec__24842,(1),null);
var map__24843__$1 = ((((!((map__24843 == null)))?((((map__24843.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24843.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24843):map__24843);
var doc = cljs.core.get.call(null,map__24843__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24843__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24870 = seq__24838;
var G__24871 = chunk__24839;
var G__24872 = count__24840;
var G__24873 = (i__24841 + (1));
seq__24838 = G__24870;
chunk__24839 = G__24871;
count__24840 = G__24872;
i__24841 = G__24873;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24838);
if(temp__4425__auto__){
var seq__24838__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24838__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__24838__$1);
var G__24874 = cljs.core.chunk_rest.call(null,seq__24838__$1);
var G__24875 = c__17629__auto__;
var G__24876 = cljs.core.count.call(null,c__17629__auto__);
var G__24877 = (0);
seq__24838 = G__24874;
chunk__24839 = G__24875;
count__24840 = G__24876;
i__24841 = G__24877;
continue;
} else {
var vec__24845 = cljs.core.first.call(null,seq__24838__$1);
var name = cljs.core.nth.call(null,vec__24845,(0),null);
var map__24846 = cljs.core.nth.call(null,vec__24845,(1),null);
var map__24846__$1 = ((((!((map__24846 == null)))?((((map__24846.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24846.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24846):map__24846);
var doc = cljs.core.get.call(null,map__24846__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24846__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24878 = cljs.core.next.call(null,seq__24838__$1);
var G__24879 = null;
var G__24880 = (0);
var G__24881 = (0);
seq__24838 = G__24878;
chunk__24839 = G__24879;
count__24840 = G__24880;
i__24841 = G__24881;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1448981697440