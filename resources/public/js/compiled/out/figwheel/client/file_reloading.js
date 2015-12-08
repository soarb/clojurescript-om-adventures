// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16826__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16826__auto__){
return or__16826__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16826__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__23810_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__23810_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__23815 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__23816 = null;
var count__23817 = (0);
var i__23818 = (0);
while(true){
if((i__23818 < count__23817)){
var n = cljs.core._nth.call(null,chunk__23816,i__23818);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__23819 = seq__23815;
var G__23820 = chunk__23816;
var G__23821 = count__23817;
var G__23822 = (i__23818 + (1));
seq__23815 = G__23819;
chunk__23816 = G__23820;
count__23817 = G__23821;
i__23818 = G__23822;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23815);
if(temp__4425__auto__){
var seq__23815__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23815__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__23815__$1);
var G__23823 = cljs.core.chunk_rest.call(null,seq__23815__$1);
var G__23824 = c__17629__auto__;
var G__23825 = cljs.core.count.call(null,c__17629__auto__);
var G__23826 = (0);
seq__23815 = G__23823;
chunk__23816 = G__23824;
count__23817 = G__23825;
i__23818 = G__23826;
continue;
} else {
var n = cljs.core.first.call(null,seq__23815__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__23827 = cljs.core.next.call(null,seq__23815__$1);
var G__23828 = null;
var G__23829 = (0);
var G__23830 = (0);
seq__23815 = G__23827;
chunk__23816 = G__23828;
count__23817 = G__23829;
i__23818 = G__23830;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__23869_23876 = cljs.core.seq.call(null,deps);
var chunk__23870_23877 = null;
var count__23871_23878 = (0);
var i__23872_23879 = (0);
while(true){
if((i__23872_23879 < count__23871_23878)){
var dep_23880 = cljs.core._nth.call(null,chunk__23870_23877,i__23872_23879);
topo_sort_helper_STAR_.call(null,dep_23880,(depth + (1)),state);

var G__23881 = seq__23869_23876;
var G__23882 = chunk__23870_23877;
var G__23883 = count__23871_23878;
var G__23884 = (i__23872_23879 + (1));
seq__23869_23876 = G__23881;
chunk__23870_23877 = G__23882;
count__23871_23878 = G__23883;
i__23872_23879 = G__23884;
continue;
} else {
var temp__4425__auto___23885 = cljs.core.seq.call(null,seq__23869_23876);
if(temp__4425__auto___23885){
var seq__23869_23886__$1 = temp__4425__auto___23885;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23869_23886__$1)){
var c__17629__auto___23887 = cljs.core.chunk_first.call(null,seq__23869_23886__$1);
var G__23888 = cljs.core.chunk_rest.call(null,seq__23869_23886__$1);
var G__23889 = c__17629__auto___23887;
var G__23890 = cljs.core.count.call(null,c__17629__auto___23887);
var G__23891 = (0);
seq__23869_23876 = G__23888;
chunk__23870_23877 = G__23889;
count__23871_23878 = G__23890;
i__23872_23879 = G__23891;
continue;
} else {
var dep_23892 = cljs.core.first.call(null,seq__23869_23886__$1);
topo_sort_helper_STAR_.call(null,dep_23892,(depth + (1)),state);

var G__23893 = cljs.core.next.call(null,seq__23869_23886__$1);
var G__23894 = null;
var G__23895 = (0);
var G__23896 = (0);
seq__23869_23876 = G__23893;
chunk__23870_23877 = G__23894;
count__23871_23878 = G__23895;
i__23872_23879 = G__23896;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__23873){
var vec__23875 = p__23873;
var x = cljs.core.nth.call(null,vec__23875,(0),null);
var xs = cljs.core.nthnext.call(null,vec__23875,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__23875,x,xs,get_deps__$1){
return (function (p1__23831_SHARP_){
return clojure.set.difference.call(null,p1__23831_SHARP_,x);
});})(vec__23875,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__23909 = cljs.core.seq.call(null,provides);
var chunk__23910 = null;
var count__23911 = (0);
var i__23912 = (0);
while(true){
if((i__23912 < count__23911)){
var prov = cljs.core._nth.call(null,chunk__23910,i__23912);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__23913_23921 = cljs.core.seq.call(null,requires);
var chunk__23914_23922 = null;
var count__23915_23923 = (0);
var i__23916_23924 = (0);
while(true){
if((i__23916_23924 < count__23915_23923)){
var req_23925 = cljs.core._nth.call(null,chunk__23914_23922,i__23916_23924);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23925,prov);

var G__23926 = seq__23913_23921;
var G__23927 = chunk__23914_23922;
var G__23928 = count__23915_23923;
var G__23929 = (i__23916_23924 + (1));
seq__23913_23921 = G__23926;
chunk__23914_23922 = G__23927;
count__23915_23923 = G__23928;
i__23916_23924 = G__23929;
continue;
} else {
var temp__4425__auto___23930 = cljs.core.seq.call(null,seq__23913_23921);
if(temp__4425__auto___23930){
var seq__23913_23931__$1 = temp__4425__auto___23930;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23913_23931__$1)){
var c__17629__auto___23932 = cljs.core.chunk_first.call(null,seq__23913_23931__$1);
var G__23933 = cljs.core.chunk_rest.call(null,seq__23913_23931__$1);
var G__23934 = c__17629__auto___23932;
var G__23935 = cljs.core.count.call(null,c__17629__auto___23932);
var G__23936 = (0);
seq__23913_23921 = G__23933;
chunk__23914_23922 = G__23934;
count__23915_23923 = G__23935;
i__23916_23924 = G__23936;
continue;
} else {
var req_23937 = cljs.core.first.call(null,seq__23913_23931__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23937,prov);

var G__23938 = cljs.core.next.call(null,seq__23913_23931__$1);
var G__23939 = null;
var G__23940 = (0);
var G__23941 = (0);
seq__23913_23921 = G__23938;
chunk__23914_23922 = G__23939;
count__23915_23923 = G__23940;
i__23916_23924 = G__23941;
continue;
}
} else {
}
}
break;
}

var G__23942 = seq__23909;
var G__23943 = chunk__23910;
var G__23944 = count__23911;
var G__23945 = (i__23912 + (1));
seq__23909 = G__23942;
chunk__23910 = G__23943;
count__23911 = G__23944;
i__23912 = G__23945;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23909);
if(temp__4425__auto__){
var seq__23909__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23909__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__23909__$1);
var G__23946 = cljs.core.chunk_rest.call(null,seq__23909__$1);
var G__23947 = c__17629__auto__;
var G__23948 = cljs.core.count.call(null,c__17629__auto__);
var G__23949 = (0);
seq__23909 = G__23946;
chunk__23910 = G__23947;
count__23911 = G__23948;
i__23912 = G__23949;
continue;
} else {
var prov = cljs.core.first.call(null,seq__23909__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__23917_23950 = cljs.core.seq.call(null,requires);
var chunk__23918_23951 = null;
var count__23919_23952 = (0);
var i__23920_23953 = (0);
while(true){
if((i__23920_23953 < count__23919_23952)){
var req_23954 = cljs.core._nth.call(null,chunk__23918_23951,i__23920_23953);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23954,prov);

var G__23955 = seq__23917_23950;
var G__23956 = chunk__23918_23951;
var G__23957 = count__23919_23952;
var G__23958 = (i__23920_23953 + (1));
seq__23917_23950 = G__23955;
chunk__23918_23951 = G__23956;
count__23919_23952 = G__23957;
i__23920_23953 = G__23958;
continue;
} else {
var temp__4425__auto___23959__$1 = cljs.core.seq.call(null,seq__23917_23950);
if(temp__4425__auto___23959__$1){
var seq__23917_23960__$1 = temp__4425__auto___23959__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23917_23960__$1)){
var c__17629__auto___23961 = cljs.core.chunk_first.call(null,seq__23917_23960__$1);
var G__23962 = cljs.core.chunk_rest.call(null,seq__23917_23960__$1);
var G__23963 = c__17629__auto___23961;
var G__23964 = cljs.core.count.call(null,c__17629__auto___23961);
var G__23965 = (0);
seq__23917_23950 = G__23962;
chunk__23918_23951 = G__23963;
count__23919_23952 = G__23964;
i__23920_23953 = G__23965;
continue;
} else {
var req_23966 = cljs.core.first.call(null,seq__23917_23960__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23966,prov);

var G__23967 = cljs.core.next.call(null,seq__23917_23960__$1);
var G__23968 = null;
var G__23969 = (0);
var G__23970 = (0);
seq__23917_23950 = G__23967;
chunk__23918_23951 = G__23968;
count__23919_23952 = G__23969;
i__23920_23953 = G__23970;
continue;
}
} else {
}
}
break;
}

var G__23971 = cljs.core.next.call(null,seq__23909__$1);
var G__23972 = null;
var G__23973 = (0);
var G__23974 = (0);
seq__23909 = G__23971;
chunk__23910 = G__23972;
count__23911 = G__23973;
i__23912 = G__23974;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__23979_23983 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__23980_23984 = null;
var count__23981_23985 = (0);
var i__23982_23986 = (0);
while(true){
if((i__23982_23986 < count__23981_23985)){
var ns_23987 = cljs.core._nth.call(null,chunk__23980_23984,i__23982_23986);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_23987);

var G__23988 = seq__23979_23983;
var G__23989 = chunk__23980_23984;
var G__23990 = count__23981_23985;
var G__23991 = (i__23982_23986 + (1));
seq__23979_23983 = G__23988;
chunk__23980_23984 = G__23989;
count__23981_23985 = G__23990;
i__23982_23986 = G__23991;
continue;
} else {
var temp__4425__auto___23992 = cljs.core.seq.call(null,seq__23979_23983);
if(temp__4425__auto___23992){
var seq__23979_23993__$1 = temp__4425__auto___23992;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23979_23993__$1)){
var c__17629__auto___23994 = cljs.core.chunk_first.call(null,seq__23979_23993__$1);
var G__23995 = cljs.core.chunk_rest.call(null,seq__23979_23993__$1);
var G__23996 = c__17629__auto___23994;
var G__23997 = cljs.core.count.call(null,c__17629__auto___23994);
var G__23998 = (0);
seq__23979_23983 = G__23995;
chunk__23980_23984 = G__23996;
count__23981_23985 = G__23997;
i__23982_23986 = G__23998;
continue;
} else {
var ns_23999 = cljs.core.first.call(null,seq__23979_23993__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_23999);

var G__24000 = cljs.core.next.call(null,seq__23979_23993__$1);
var G__24001 = null;
var G__24002 = (0);
var G__24003 = (0);
seq__23979_23983 = G__24000;
chunk__23980_23984 = G__24001;
count__23981_23985 = G__24002;
i__23982_23986 = G__24003;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16826__auto__ = goog.require__;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__24004__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__24004 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24005__i = 0, G__24005__a = new Array(arguments.length -  0);
while (G__24005__i < G__24005__a.length) {G__24005__a[G__24005__i] = arguments[G__24005__i + 0]; ++G__24005__i;}
  args = new cljs.core.IndexedSeq(G__24005__a,0);
} 
return G__24004__delegate.call(this,args);};
G__24004.cljs$lang$maxFixedArity = 0;
G__24004.cljs$lang$applyTo = (function (arglist__24006){
var args = cljs.core.seq(arglist__24006);
return G__24004__delegate(args);
});
G__24004.cljs$core$IFn$_invoke$arity$variadic = G__24004__delegate;
return G__24004;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__24008 = cljs.core._EQ_;
var expr__24009 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__24008.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__24009))){
var path_parts = ((function (pred__24008,expr__24009){
return (function (p1__24007_SHARP_){
return clojure.string.split.call(null,p1__24007_SHARP_,/[\/\\]/);
});})(pred__24008,expr__24009))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__24008,expr__24009){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e24011){if((e24011 instanceof Error)){
var e = e24011;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e24011;

}
}})());
});
;})(path_parts,sep,root,pred__24008,expr__24009))
} else {
if(cljs.core.truth_(pred__24008.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__24009))){
return ((function (pred__24008,expr__24009){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__24008,expr__24009){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__24008,expr__24009))
);

return deferred.addErrback(((function (deferred,pred__24008,expr__24009){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__24008,expr__24009))
);
});
;})(pred__24008,expr__24009))
} else {
return ((function (pred__24008,expr__24009){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__24008,expr__24009))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__24012,callback){
var map__24015 = p__24012;
var map__24015__$1 = ((((!((map__24015 == null)))?((((map__24015.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24015.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24015):map__24015);
var file_msg = map__24015__$1;
var request_url = cljs.core.get.call(null,map__24015__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__24015,map__24015__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__24015,map__24015__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__20867__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20867__auto__){
return (function (){
var f__20868__auto__ = (function (){var switch__20755__auto__ = ((function (c__20867__auto__){
return (function (state_24039){
var state_val_24040 = (state_24039[(1)]);
if((state_val_24040 === (7))){
var inst_24035 = (state_24039[(2)]);
var state_24039__$1 = state_24039;
var statearr_24041_24061 = state_24039__$1;
(statearr_24041_24061[(2)] = inst_24035);

(statearr_24041_24061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24040 === (1))){
var state_24039__$1 = state_24039;
var statearr_24042_24062 = state_24039__$1;
(statearr_24042_24062[(2)] = null);

(statearr_24042_24062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24040 === (4))){
var inst_24019 = (state_24039[(7)]);
var inst_24019__$1 = (state_24039[(2)]);
var state_24039__$1 = (function (){var statearr_24043 = state_24039;
(statearr_24043[(7)] = inst_24019__$1);

return statearr_24043;
})();
if(cljs.core.truth_(inst_24019__$1)){
var statearr_24044_24063 = state_24039__$1;
(statearr_24044_24063[(1)] = (5));

} else {
var statearr_24045_24064 = state_24039__$1;
(statearr_24045_24064[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24040 === (6))){
var state_24039__$1 = state_24039;
var statearr_24046_24065 = state_24039__$1;
(statearr_24046_24065[(2)] = null);

(statearr_24046_24065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24040 === (3))){
var inst_24037 = (state_24039[(2)]);
var state_24039__$1 = state_24039;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24039__$1,inst_24037);
} else {
if((state_val_24040 === (2))){
var state_24039__$1 = state_24039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24039__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_24040 === (11))){
var inst_24031 = (state_24039[(2)]);
var state_24039__$1 = (function (){var statearr_24047 = state_24039;
(statearr_24047[(8)] = inst_24031);

return statearr_24047;
})();
var statearr_24048_24066 = state_24039__$1;
(statearr_24048_24066[(2)] = null);

(statearr_24048_24066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24040 === (9))){
var inst_24023 = (state_24039[(9)]);
var inst_24025 = (state_24039[(10)]);
var inst_24027 = inst_24025.call(null,inst_24023);
var state_24039__$1 = state_24039;
var statearr_24049_24067 = state_24039__$1;
(statearr_24049_24067[(2)] = inst_24027);

(statearr_24049_24067[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24040 === (5))){
var inst_24019 = (state_24039[(7)]);
var inst_24021 = figwheel.client.file_reloading.blocking_load.call(null,inst_24019);
var state_24039__$1 = state_24039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24039__$1,(8),inst_24021);
} else {
if((state_val_24040 === (10))){
var inst_24023 = (state_24039[(9)]);
var inst_24029 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_24023);
var state_24039__$1 = state_24039;
var statearr_24050_24068 = state_24039__$1;
(statearr_24050_24068[(2)] = inst_24029);

(statearr_24050_24068[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24040 === (8))){
var inst_24025 = (state_24039[(10)]);
var inst_24019 = (state_24039[(7)]);
var inst_24023 = (state_24039[(2)]);
var inst_24024 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_24025__$1 = cljs.core.get.call(null,inst_24024,inst_24019);
var state_24039__$1 = (function (){var statearr_24051 = state_24039;
(statearr_24051[(9)] = inst_24023);

(statearr_24051[(10)] = inst_24025__$1);

return statearr_24051;
})();
if(cljs.core.truth_(inst_24025__$1)){
var statearr_24052_24069 = state_24039__$1;
(statearr_24052_24069[(1)] = (9));

} else {
var statearr_24053_24070 = state_24039__$1;
(statearr_24053_24070[(1)] = (10));

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
});})(c__20867__auto__))
;
return ((function (switch__20755__auto__,c__20867__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__20756__auto__ = null;
var figwheel$client$file_reloading$state_machine__20756__auto____0 = (function (){
var statearr_24057 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24057[(0)] = figwheel$client$file_reloading$state_machine__20756__auto__);

(statearr_24057[(1)] = (1));

return statearr_24057;
});
var figwheel$client$file_reloading$state_machine__20756__auto____1 = (function (state_24039){
while(true){
var ret_value__20757__auto__ = (function (){try{while(true){
var result__20758__auto__ = switch__20755__auto__.call(null,state_24039);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20758__auto__;
}
break;
}
}catch (e24058){if((e24058 instanceof Object)){
var ex__20759__auto__ = e24058;
var statearr_24059_24071 = state_24039;
(statearr_24059_24071[(5)] = ex__20759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24039);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24058;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24072 = state_24039;
state_24039 = G__24072;
continue;
} else {
return ret_value__20757__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20756__auto__ = function(state_24039){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20756__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20756__auto____1.call(this,state_24039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20756__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20756__auto____0;
figwheel$client$file_reloading$state_machine__20756__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20756__auto____1;
return figwheel$client$file_reloading$state_machine__20756__auto__;
})()
;})(switch__20755__auto__,c__20867__auto__))
})();
var state__20869__auto__ = (function (){var statearr_24060 = f__20868__auto__.call(null);
(statearr_24060[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20867__auto__);

return statearr_24060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20869__auto__);
});})(c__20867__auto__))
);

return c__20867__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__24073,callback){
var map__24076 = p__24073;
var map__24076__$1 = ((((!((map__24076 == null)))?((((map__24076.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24076.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24076):map__24076);
var file_msg = map__24076__$1;
var namespace = cljs.core.get.call(null,map__24076__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__24076,map__24076__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__24076,map__24076__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__24078){
var map__24081 = p__24078;
var map__24081__$1 = ((((!((map__24081 == null)))?((((map__24081.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24081.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24081):map__24081);
var file_msg = map__24081__$1;
var namespace = cljs.core.get.call(null,map__24081__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16814__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16814__auto__){
var or__16826__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
var or__16826__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16826__auto____$1)){
return or__16826__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16814__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__24083,callback){
var map__24086 = p__24083;
var map__24086__$1 = ((((!((map__24086 == null)))?((((map__24086.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24086.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24086):map__24086);
var file_msg = map__24086__$1;
var request_url = cljs.core.get.call(null,map__24086__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__24086__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__20867__auto___24174 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20867__auto___24174,out){
return (function (){
var f__20868__auto__ = (function (){var switch__20755__auto__ = ((function (c__20867__auto___24174,out){
return (function (state_24156){
var state_val_24157 = (state_24156[(1)]);
if((state_val_24157 === (1))){
var inst_24134 = cljs.core.nth.call(null,files,(0),null);
var inst_24135 = cljs.core.nthnext.call(null,files,(1));
var inst_24136 = files;
var state_24156__$1 = (function (){var statearr_24158 = state_24156;
(statearr_24158[(7)] = inst_24135);

(statearr_24158[(8)] = inst_24136);

(statearr_24158[(9)] = inst_24134);

return statearr_24158;
})();
var statearr_24159_24175 = state_24156__$1;
(statearr_24159_24175[(2)] = null);

(statearr_24159_24175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24157 === (2))){
var inst_24139 = (state_24156[(10)]);
var inst_24136 = (state_24156[(8)]);
var inst_24139__$1 = cljs.core.nth.call(null,inst_24136,(0),null);
var inst_24140 = cljs.core.nthnext.call(null,inst_24136,(1));
var inst_24141 = (inst_24139__$1 == null);
var inst_24142 = cljs.core.not.call(null,inst_24141);
var state_24156__$1 = (function (){var statearr_24160 = state_24156;
(statearr_24160[(10)] = inst_24139__$1);

(statearr_24160[(11)] = inst_24140);

return statearr_24160;
})();
if(inst_24142){
var statearr_24161_24176 = state_24156__$1;
(statearr_24161_24176[(1)] = (4));

} else {
var statearr_24162_24177 = state_24156__$1;
(statearr_24162_24177[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24157 === (3))){
var inst_24154 = (state_24156[(2)]);
var state_24156__$1 = state_24156;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24156__$1,inst_24154);
} else {
if((state_val_24157 === (4))){
var inst_24139 = (state_24156[(10)]);
var inst_24144 = figwheel.client.file_reloading.reload_js_file.call(null,inst_24139);
var state_24156__$1 = state_24156;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24156__$1,(7),inst_24144);
} else {
if((state_val_24157 === (5))){
var inst_24150 = cljs.core.async.close_BANG_.call(null,out);
var state_24156__$1 = state_24156;
var statearr_24163_24178 = state_24156__$1;
(statearr_24163_24178[(2)] = inst_24150);

(statearr_24163_24178[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24157 === (6))){
var inst_24152 = (state_24156[(2)]);
var state_24156__$1 = state_24156;
var statearr_24164_24179 = state_24156__$1;
(statearr_24164_24179[(2)] = inst_24152);

(statearr_24164_24179[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24157 === (7))){
var inst_24140 = (state_24156[(11)]);
var inst_24146 = (state_24156[(2)]);
var inst_24147 = cljs.core.async.put_BANG_.call(null,out,inst_24146);
var inst_24136 = inst_24140;
var state_24156__$1 = (function (){var statearr_24165 = state_24156;
(statearr_24165[(12)] = inst_24147);

(statearr_24165[(8)] = inst_24136);

return statearr_24165;
})();
var statearr_24166_24180 = state_24156__$1;
(statearr_24166_24180[(2)] = null);

(statearr_24166_24180[(1)] = (2));


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
});})(c__20867__auto___24174,out))
;
return ((function (switch__20755__auto__,c__20867__auto___24174,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20756__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20756__auto____0 = (function (){
var statearr_24170 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24170[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20756__auto__);

(statearr_24170[(1)] = (1));

return statearr_24170;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20756__auto____1 = (function (state_24156){
while(true){
var ret_value__20757__auto__ = (function (){try{while(true){
var result__20758__auto__ = switch__20755__auto__.call(null,state_24156);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20758__auto__;
}
break;
}
}catch (e24171){if((e24171 instanceof Object)){
var ex__20759__auto__ = e24171;
var statearr_24172_24181 = state_24156;
(statearr_24172_24181[(5)] = ex__20759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24171;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24182 = state_24156;
state_24156 = G__24182;
continue;
} else {
return ret_value__20757__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20756__auto__ = function(state_24156){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20756__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20756__auto____1.call(this,state_24156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20756__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20756__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20756__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20756__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20756__auto__;
})()
;})(switch__20755__auto__,c__20867__auto___24174,out))
})();
var state__20869__auto__ = (function (){var statearr_24173 = f__20868__auto__.call(null);
(statearr_24173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20867__auto___24174);

return statearr_24173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20869__auto__);
});})(c__20867__auto___24174,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__24183,opts){
var map__24187 = p__24183;
var map__24187__$1 = ((((!((map__24187 == null)))?((((map__24187.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24187.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24187):map__24187);
var eval_body__$1 = cljs.core.get.call(null,map__24187__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__24187__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16814__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16814__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16814__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e24189){var e = e24189;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__24190_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__24190_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__24195){
var vec__24196 = p__24195;
var k = cljs.core.nth.call(null,vec__24196,(0),null);
var v = cljs.core.nth.call(null,vec__24196,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__24197){
var vec__24198 = p__24197;
var k = cljs.core.nth.call(null,vec__24198,(0),null);
var v = cljs.core.nth.call(null,vec__24198,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__24202,p__24203){
var map__24450 = p__24202;
var map__24450__$1 = ((((!((map__24450 == null)))?((((map__24450.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24450.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24450):map__24450);
var opts = map__24450__$1;
var before_jsload = cljs.core.get.call(null,map__24450__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__24450__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__24450__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__24451 = p__24203;
var map__24451__$1 = ((((!((map__24451 == null)))?((((map__24451.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24451.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24451):map__24451);
var msg = map__24451__$1;
var files = cljs.core.get.call(null,map__24451__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__24451__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__24451__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__20867__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20867__auto__,map__24450,map__24450__$1,opts,before_jsload,on_jsload,reload_dependents,map__24451,map__24451__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__20868__auto__ = (function (){var switch__20755__auto__ = ((function (c__20867__auto__,map__24450,map__24450__$1,opts,before_jsload,on_jsload,reload_dependents,map__24451,map__24451__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_24604){
var state_val_24605 = (state_24604[(1)]);
if((state_val_24605 === (7))){
var inst_24466 = (state_24604[(7)]);
var inst_24468 = (state_24604[(8)]);
var inst_24465 = (state_24604[(9)]);
var inst_24467 = (state_24604[(10)]);
var inst_24473 = cljs.core._nth.call(null,inst_24466,inst_24468);
var inst_24474 = figwheel.client.file_reloading.eval_body.call(null,inst_24473,opts);
var inst_24475 = (inst_24468 + (1));
var tmp24606 = inst_24466;
var tmp24607 = inst_24465;
var tmp24608 = inst_24467;
var inst_24465__$1 = tmp24607;
var inst_24466__$1 = tmp24606;
var inst_24467__$1 = tmp24608;
var inst_24468__$1 = inst_24475;
var state_24604__$1 = (function (){var statearr_24609 = state_24604;
(statearr_24609[(11)] = inst_24474);

(statearr_24609[(7)] = inst_24466__$1);

(statearr_24609[(8)] = inst_24468__$1);

(statearr_24609[(9)] = inst_24465__$1);

(statearr_24609[(10)] = inst_24467__$1);

return statearr_24609;
})();
var statearr_24610_24696 = state_24604__$1;
(statearr_24610_24696[(2)] = null);

(statearr_24610_24696[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (20))){
var inst_24508 = (state_24604[(12)]);
var inst_24516 = figwheel.client.file_reloading.sort_files.call(null,inst_24508);
var state_24604__$1 = state_24604;
var statearr_24611_24697 = state_24604__$1;
(statearr_24611_24697[(2)] = inst_24516);

(statearr_24611_24697[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (27))){
var state_24604__$1 = state_24604;
var statearr_24612_24698 = state_24604__$1;
(statearr_24612_24698[(2)] = null);

(statearr_24612_24698[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (1))){
var inst_24457 = (state_24604[(13)]);
var inst_24454 = before_jsload.call(null,files);
var inst_24455 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_24456 = (function (){return ((function (inst_24457,inst_24454,inst_24455,state_val_24605,c__20867__auto__,map__24450,map__24450__$1,opts,before_jsload,on_jsload,reload_dependents,map__24451,map__24451__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24199_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__24199_SHARP_);
});
;})(inst_24457,inst_24454,inst_24455,state_val_24605,c__20867__auto__,map__24450,map__24450__$1,opts,before_jsload,on_jsload,reload_dependents,map__24451,map__24451__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24457__$1 = cljs.core.filter.call(null,inst_24456,files);
var inst_24458 = cljs.core.not_empty.call(null,inst_24457__$1);
var state_24604__$1 = (function (){var statearr_24613 = state_24604;
(statearr_24613[(13)] = inst_24457__$1);

(statearr_24613[(14)] = inst_24454);

(statearr_24613[(15)] = inst_24455);

return statearr_24613;
})();
if(cljs.core.truth_(inst_24458)){
var statearr_24614_24699 = state_24604__$1;
(statearr_24614_24699[(1)] = (2));

} else {
var statearr_24615_24700 = state_24604__$1;
(statearr_24615_24700[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (24))){
var state_24604__$1 = state_24604;
var statearr_24616_24701 = state_24604__$1;
(statearr_24616_24701[(2)] = null);

(statearr_24616_24701[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (39))){
var inst_24558 = (state_24604[(16)]);
var state_24604__$1 = state_24604;
var statearr_24617_24702 = state_24604__$1;
(statearr_24617_24702[(2)] = inst_24558);

(statearr_24617_24702[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (46))){
var inst_24599 = (state_24604[(2)]);
var state_24604__$1 = state_24604;
var statearr_24618_24703 = state_24604__$1;
(statearr_24618_24703[(2)] = inst_24599);

(statearr_24618_24703[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (4))){
var inst_24502 = (state_24604[(2)]);
var inst_24503 = cljs.core.List.EMPTY;
var inst_24504 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_24503);
var inst_24505 = (function (){return ((function (inst_24502,inst_24503,inst_24504,state_val_24605,c__20867__auto__,map__24450,map__24450__$1,opts,before_jsload,on_jsload,reload_dependents,map__24451,map__24451__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24200_SHARP_){
var and__16814__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__24200_SHARP_);
if(cljs.core.truth_(and__16814__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__24200_SHARP_));
} else {
return and__16814__auto__;
}
});
;})(inst_24502,inst_24503,inst_24504,state_val_24605,c__20867__auto__,map__24450,map__24450__$1,opts,before_jsload,on_jsload,reload_dependents,map__24451,map__24451__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24506 = cljs.core.filter.call(null,inst_24505,files);
var inst_24507 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_24508 = cljs.core.concat.call(null,inst_24506,inst_24507);
var state_24604__$1 = (function (){var statearr_24619 = state_24604;
(statearr_24619[(17)] = inst_24504);

(statearr_24619[(18)] = inst_24502);

(statearr_24619[(12)] = inst_24508);

return statearr_24619;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_24620_24704 = state_24604__$1;
(statearr_24620_24704[(1)] = (16));

} else {
var statearr_24621_24705 = state_24604__$1;
(statearr_24621_24705[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (15))){
var inst_24492 = (state_24604[(2)]);
var state_24604__$1 = state_24604;
var statearr_24622_24706 = state_24604__$1;
(statearr_24622_24706[(2)] = inst_24492);

(statearr_24622_24706[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (21))){
var inst_24518 = (state_24604[(19)]);
var inst_24518__$1 = (state_24604[(2)]);
var inst_24519 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_24518__$1);
var state_24604__$1 = (function (){var statearr_24623 = state_24604;
(statearr_24623[(19)] = inst_24518__$1);

return statearr_24623;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24604__$1,(22),inst_24519);
} else {
if((state_val_24605 === (31))){
var inst_24602 = (state_24604[(2)]);
var state_24604__$1 = state_24604;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24604__$1,inst_24602);
} else {
if((state_val_24605 === (32))){
var inst_24558 = (state_24604[(16)]);
var inst_24563 = inst_24558.cljs$lang$protocol_mask$partition0$;
var inst_24564 = (inst_24563 & (64));
var inst_24565 = inst_24558.cljs$core$ISeq$;
var inst_24566 = (inst_24564) || (inst_24565);
var state_24604__$1 = state_24604;
if(cljs.core.truth_(inst_24566)){
var statearr_24624_24707 = state_24604__$1;
(statearr_24624_24707[(1)] = (35));

} else {
var statearr_24625_24708 = state_24604__$1;
(statearr_24625_24708[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (40))){
var inst_24579 = (state_24604[(20)]);
var inst_24578 = (state_24604[(2)]);
var inst_24579__$1 = cljs.core.get.call(null,inst_24578,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_24580 = cljs.core.get.call(null,inst_24578,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_24581 = cljs.core.not_empty.call(null,inst_24579__$1);
var state_24604__$1 = (function (){var statearr_24626 = state_24604;
(statearr_24626[(20)] = inst_24579__$1);

(statearr_24626[(21)] = inst_24580);

return statearr_24626;
})();
if(cljs.core.truth_(inst_24581)){
var statearr_24627_24709 = state_24604__$1;
(statearr_24627_24709[(1)] = (41));

} else {
var statearr_24628_24710 = state_24604__$1;
(statearr_24628_24710[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (33))){
var state_24604__$1 = state_24604;
var statearr_24629_24711 = state_24604__$1;
(statearr_24629_24711[(2)] = false);

(statearr_24629_24711[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (13))){
var inst_24478 = (state_24604[(22)]);
var inst_24482 = cljs.core.chunk_first.call(null,inst_24478);
var inst_24483 = cljs.core.chunk_rest.call(null,inst_24478);
var inst_24484 = cljs.core.count.call(null,inst_24482);
var inst_24465 = inst_24483;
var inst_24466 = inst_24482;
var inst_24467 = inst_24484;
var inst_24468 = (0);
var state_24604__$1 = (function (){var statearr_24630 = state_24604;
(statearr_24630[(7)] = inst_24466);

(statearr_24630[(8)] = inst_24468);

(statearr_24630[(9)] = inst_24465);

(statearr_24630[(10)] = inst_24467);

return statearr_24630;
})();
var statearr_24631_24712 = state_24604__$1;
(statearr_24631_24712[(2)] = null);

(statearr_24631_24712[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (22))){
var inst_24522 = (state_24604[(23)]);
var inst_24518 = (state_24604[(19)]);
var inst_24521 = (state_24604[(24)]);
var inst_24526 = (state_24604[(25)]);
var inst_24521__$1 = (state_24604[(2)]);
var inst_24522__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_24521__$1);
var inst_24523 = (function (){var all_files = inst_24518;
var res_SINGLEQUOTE_ = inst_24521__$1;
var res = inst_24522__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_24522,inst_24518,inst_24521,inst_24526,inst_24521__$1,inst_24522__$1,state_val_24605,c__20867__auto__,map__24450,map__24450__$1,opts,before_jsload,on_jsload,reload_dependents,map__24451,map__24451__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24201_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__24201_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_24522,inst_24518,inst_24521,inst_24526,inst_24521__$1,inst_24522__$1,state_val_24605,c__20867__auto__,map__24450,map__24450__$1,opts,before_jsload,on_jsload,reload_dependents,map__24451,map__24451__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24524 = cljs.core.filter.call(null,inst_24523,inst_24521__$1);
var inst_24525 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_24526__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_24525);
var inst_24527 = cljs.core.not_empty.call(null,inst_24526__$1);
var state_24604__$1 = (function (){var statearr_24632 = state_24604;
(statearr_24632[(23)] = inst_24522__$1);

(statearr_24632[(26)] = inst_24524);

(statearr_24632[(24)] = inst_24521__$1);

(statearr_24632[(25)] = inst_24526__$1);

return statearr_24632;
})();
if(cljs.core.truth_(inst_24527)){
var statearr_24633_24713 = state_24604__$1;
(statearr_24633_24713[(1)] = (23));

} else {
var statearr_24634_24714 = state_24604__$1;
(statearr_24634_24714[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (36))){
var state_24604__$1 = state_24604;
var statearr_24635_24715 = state_24604__$1;
(statearr_24635_24715[(2)] = false);

(statearr_24635_24715[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (41))){
var inst_24579 = (state_24604[(20)]);
var inst_24583 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_24584 = cljs.core.map.call(null,inst_24583,inst_24579);
var inst_24585 = cljs.core.pr_str.call(null,inst_24584);
var inst_24586 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_24585)].join('');
var inst_24587 = figwheel.client.utils.log.call(null,inst_24586);
var state_24604__$1 = state_24604;
var statearr_24636_24716 = state_24604__$1;
(statearr_24636_24716[(2)] = inst_24587);

(statearr_24636_24716[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (43))){
var inst_24580 = (state_24604[(21)]);
var inst_24590 = (state_24604[(2)]);
var inst_24591 = cljs.core.not_empty.call(null,inst_24580);
var state_24604__$1 = (function (){var statearr_24637 = state_24604;
(statearr_24637[(27)] = inst_24590);

return statearr_24637;
})();
if(cljs.core.truth_(inst_24591)){
var statearr_24638_24717 = state_24604__$1;
(statearr_24638_24717[(1)] = (44));

} else {
var statearr_24639_24718 = state_24604__$1;
(statearr_24639_24718[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (29))){
var inst_24558 = (state_24604[(16)]);
var inst_24522 = (state_24604[(23)]);
var inst_24524 = (state_24604[(26)]);
var inst_24518 = (state_24604[(19)]);
var inst_24521 = (state_24604[(24)]);
var inst_24526 = (state_24604[(25)]);
var inst_24554 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_24557 = (function (){var all_files = inst_24518;
var res_SINGLEQUOTE_ = inst_24521;
var res = inst_24522;
var files_not_loaded = inst_24524;
var dependencies_that_loaded = inst_24526;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24558,inst_24522,inst_24524,inst_24518,inst_24521,inst_24526,inst_24554,state_val_24605,c__20867__auto__,map__24450,map__24450__$1,opts,before_jsload,on_jsload,reload_dependents,map__24451,map__24451__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24556){
var map__24640 = p__24556;
var map__24640__$1 = ((((!((map__24640 == null)))?((((map__24640.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24640.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24640):map__24640);
var namespace = cljs.core.get.call(null,map__24640__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24558,inst_24522,inst_24524,inst_24518,inst_24521,inst_24526,inst_24554,state_val_24605,c__20867__auto__,map__24450,map__24450__$1,opts,before_jsload,on_jsload,reload_dependents,map__24451,map__24451__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24558__$1 = cljs.core.group_by.call(null,inst_24557,inst_24524);
var inst_24560 = (inst_24558__$1 == null);
var inst_24561 = cljs.core.not.call(null,inst_24560);
var state_24604__$1 = (function (){var statearr_24642 = state_24604;
(statearr_24642[(16)] = inst_24558__$1);

(statearr_24642[(28)] = inst_24554);

return statearr_24642;
})();
if(inst_24561){
var statearr_24643_24719 = state_24604__$1;
(statearr_24643_24719[(1)] = (32));

} else {
var statearr_24644_24720 = state_24604__$1;
(statearr_24644_24720[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (44))){
var inst_24580 = (state_24604[(21)]);
var inst_24593 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24580);
var inst_24594 = cljs.core.pr_str.call(null,inst_24593);
var inst_24595 = [cljs.core.str("not required: "),cljs.core.str(inst_24594)].join('');
var inst_24596 = figwheel.client.utils.log.call(null,inst_24595);
var state_24604__$1 = state_24604;
var statearr_24645_24721 = state_24604__$1;
(statearr_24645_24721[(2)] = inst_24596);

(statearr_24645_24721[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (6))){
var inst_24499 = (state_24604[(2)]);
var state_24604__$1 = state_24604;
var statearr_24646_24722 = state_24604__$1;
(statearr_24646_24722[(2)] = inst_24499);

(statearr_24646_24722[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (28))){
var inst_24524 = (state_24604[(26)]);
var inst_24551 = (state_24604[(2)]);
var inst_24552 = cljs.core.not_empty.call(null,inst_24524);
var state_24604__$1 = (function (){var statearr_24647 = state_24604;
(statearr_24647[(29)] = inst_24551);

return statearr_24647;
})();
if(cljs.core.truth_(inst_24552)){
var statearr_24648_24723 = state_24604__$1;
(statearr_24648_24723[(1)] = (29));

} else {
var statearr_24649_24724 = state_24604__$1;
(statearr_24649_24724[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (25))){
var inst_24522 = (state_24604[(23)]);
var inst_24538 = (state_24604[(2)]);
var inst_24539 = cljs.core.not_empty.call(null,inst_24522);
var state_24604__$1 = (function (){var statearr_24650 = state_24604;
(statearr_24650[(30)] = inst_24538);

return statearr_24650;
})();
if(cljs.core.truth_(inst_24539)){
var statearr_24651_24725 = state_24604__$1;
(statearr_24651_24725[(1)] = (26));

} else {
var statearr_24652_24726 = state_24604__$1;
(statearr_24652_24726[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (34))){
var inst_24573 = (state_24604[(2)]);
var state_24604__$1 = state_24604;
if(cljs.core.truth_(inst_24573)){
var statearr_24653_24727 = state_24604__$1;
(statearr_24653_24727[(1)] = (38));

} else {
var statearr_24654_24728 = state_24604__$1;
(statearr_24654_24728[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (17))){
var state_24604__$1 = state_24604;
var statearr_24655_24729 = state_24604__$1;
(statearr_24655_24729[(2)] = recompile_dependents);

(statearr_24655_24729[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (3))){
var state_24604__$1 = state_24604;
var statearr_24656_24730 = state_24604__$1;
(statearr_24656_24730[(2)] = null);

(statearr_24656_24730[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (12))){
var inst_24495 = (state_24604[(2)]);
var state_24604__$1 = state_24604;
var statearr_24657_24731 = state_24604__$1;
(statearr_24657_24731[(2)] = inst_24495);

(statearr_24657_24731[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (2))){
var inst_24457 = (state_24604[(13)]);
var inst_24464 = cljs.core.seq.call(null,inst_24457);
var inst_24465 = inst_24464;
var inst_24466 = null;
var inst_24467 = (0);
var inst_24468 = (0);
var state_24604__$1 = (function (){var statearr_24658 = state_24604;
(statearr_24658[(7)] = inst_24466);

(statearr_24658[(8)] = inst_24468);

(statearr_24658[(9)] = inst_24465);

(statearr_24658[(10)] = inst_24467);

return statearr_24658;
})();
var statearr_24659_24732 = state_24604__$1;
(statearr_24659_24732[(2)] = null);

(statearr_24659_24732[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (23))){
var inst_24522 = (state_24604[(23)]);
var inst_24524 = (state_24604[(26)]);
var inst_24518 = (state_24604[(19)]);
var inst_24521 = (state_24604[(24)]);
var inst_24526 = (state_24604[(25)]);
var inst_24529 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_24531 = (function (){var all_files = inst_24518;
var res_SINGLEQUOTE_ = inst_24521;
var res = inst_24522;
var files_not_loaded = inst_24524;
var dependencies_that_loaded = inst_24526;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24522,inst_24524,inst_24518,inst_24521,inst_24526,inst_24529,state_val_24605,c__20867__auto__,map__24450,map__24450__$1,opts,before_jsload,on_jsload,reload_dependents,map__24451,map__24451__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24530){
var map__24660 = p__24530;
var map__24660__$1 = ((((!((map__24660 == null)))?((((map__24660.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24660.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24660):map__24660);
var request_url = cljs.core.get.call(null,map__24660__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24522,inst_24524,inst_24518,inst_24521,inst_24526,inst_24529,state_val_24605,c__20867__auto__,map__24450,map__24450__$1,opts,before_jsload,on_jsload,reload_dependents,map__24451,map__24451__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24532 = cljs.core.reverse.call(null,inst_24526);
var inst_24533 = cljs.core.map.call(null,inst_24531,inst_24532);
var inst_24534 = cljs.core.pr_str.call(null,inst_24533);
var inst_24535 = figwheel.client.utils.log.call(null,inst_24534);
var state_24604__$1 = (function (){var statearr_24662 = state_24604;
(statearr_24662[(31)] = inst_24529);

return statearr_24662;
})();
var statearr_24663_24733 = state_24604__$1;
(statearr_24663_24733[(2)] = inst_24535);

(statearr_24663_24733[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (35))){
var state_24604__$1 = state_24604;
var statearr_24664_24734 = state_24604__$1;
(statearr_24664_24734[(2)] = true);

(statearr_24664_24734[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (19))){
var inst_24508 = (state_24604[(12)]);
var inst_24514 = figwheel.client.file_reloading.expand_files.call(null,inst_24508);
var state_24604__$1 = state_24604;
var statearr_24665_24735 = state_24604__$1;
(statearr_24665_24735[(2)] = inst_24514);

(statearr_24665_24735[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (11))){
var state_24604__$1 = state_24604;
var statearr_24666_24736 = state_24604__$1;
(statearr_24666_24736[(2)] = null);

(statearr_24666_24736[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (9))){
var inst_24497 = (state_24604[(2)]);
var state_24604__$1 = state_24604;
var statearr_24667_24737 = state_24604__$1;
(statearr_24667_24737[(2)] = inst_24497);

(statearr_24667_24737[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (5))){
var inst_24468 = (state_24604[(8)]);
var inst_24467 = (state_24604[(10)]);
var inst_24470 = (inst_24468 < inst_24467);
var inst_24471 = inst_24470;
var state_24604__$1 = state_24604;
if(cljs.core.truth_(inst_24471)){
var statearr_24668_24738 = state_24604__$1;
(statearr_24668_24738[(1)] = (7));

} else {
var statearr_24669_24739 = state_24604__$1;
(statearr_24669_24739[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (14))){
var inst_24478 = (state_24604[(22)]);
var inst_24487 = cljs.core.first.call(null,inst_24478);
var inst_24488 = figwheel.client.file_reloading.eval_body.call(null,inst_24487,opts);
var inst_24489 = cljs.core.next.call(null,inst_24478);
var inst_24465 = inst_24489;
var inst_24466 = null;
var inst_24467 = (0);
var inst_24468 = (0);
var state_24604__$1 = (function (){var statearr_24670 = state_24604;
(statearr_24670[(7)] = inst_24466);

(statearr_24670[(8)] = inst_24468);

(statearr_24670[(9)] = inst_24465);

(statearr_24670[(10)] = inst_24467);

(statearr_24670[(32)] = inst_24488);

return statearr_24670;
})();
var statearr_24671_24740 = state_24604__$1;
(statearr_24671_24740[(2)] = null);

(statearr_24671_24740[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (45))){
var state_24604__$1 = state_24604;
var statearr_24672_24741 = state_24604__$1;
(statearr_24672_24741[(2)] = null);

(statearr_24672_24741[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (26))){
var inst_24522 = (state_24604[(23)]);
var inst_24524 = (state_24604[(26)]);
var inst_24518 = (state_24604[(19)]);
var inst_24521 = (state_24604[(24)]);
var inst_24526 = (state_24604[(25)]);
var inst_24541 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_24543 = (function (){var all_files = inst_24518;
var res_SINGLEQUOTE_ = inst_24521;
var res = inst_24522;
var files_not_loaded = inst_24524;
var dependencies_that_loaded = inst_24526;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24522,inst_24524,inst_24518,inst_24521,inst_24526,inst_24541,state_val_24605,c__20867__auto__,map__24450,map__24450__$1,opts,before_jsload,on_jsload,reload_dependents,map__24451,map__24451__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24542){
var map__24673 = p__24542;
var map__24673__$1 = ((((!((map__24673 == null)))?((((map__24673.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24673.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24673):map__24673);
var namespace = cljs.core.get.call(null,map__24673__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__24673__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24522,inst_24524,inst_24518,inst_24521,inst_24526,inst_24541,state_val_24605,c__20867__auto__,map__24450,map__24450__$1,opts,before_jsload,on_jsload,reload_dependents,map__24451,map__24451__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24544 = cljs.core.map.call(null,inst_24543,inst_24522);
var inst_24545 = cljs.core.pr_str.call(null,inst_24544);
var inst_24546 = figwheel.client.utils.log.call(null,inst_24545);
var inst_24547 = (function (){var all_files = inst_24518;
var res_SINGLEQUOTE_ = inst_24521;
var res = inst_24522;
var files_not_loaded = inst_24524;
var dependencies_that_loaded = inst_24526;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24522,inst_24524,inst_24518,inst_24521,inst_24526,inst_24541,inst_24543,inst_24544,inst_24545,inst_24546,state_val_24605,c__20867__auto__,map__24450,map__24450__$1,opts,before_jsload,on_jsload,reload_dependents,map__24451,map__24451__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24522,inst_24524,inst_24518,inst_24521,inst_24526,inst_24541,inst_24543,inst_24544,inst_24545,inst_24546,state_val_24605,c__20867__auto__,map__24450,map__24450__$1,opts,before_jsload,on_jsload,reload_dependents,map__24451,map__24451__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24548 = setTimeout(inst_24547,(10));
var state_24604__$1 = (function (){var statearr_24675 = state_24604;
(statearr_24675[(33)] = inst_24546);

(statearr_24675[(34)] = inst_24541);

return statearr_24675;
})();
var statearr_24676_24742 = state_24604__$1;
(statearr_24676_24742[(2)] = inst_24548);

(statearr_24676_24742[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (16))){
var state_24604__$1 = state_24604;
var statearr_24677_24743 = state_24604__$1;
(statearr_24677_24743[(2)] = reload_dependents);

(statearr_24677_24743[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (38))){
var inst_24558 = (state_24604[(16)]);
var inst_24575 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24558);
var state_24604__$1 = state_24604;
var statearr_24678_24744 = state_24604__$1;
(statearr_24678_24744[(2)] = inst_24575);

(statearr_24678_24744[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (30))){
var state_24604__$1 = state_24604;
var statearr_24679_24745 = state_24604__$1;
(statearr_24679_24745[(2)] = null);

(statearr_24679_24745[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (10))){
var inst_24478 = (state_24604[(22)]);
var inst_24480 = cljs.core.chunked_seq_QMARK_.call(null,inst_24478);
var state_24604__$1 = state_24604;
if(inst_24480){
var statearr_24680_24746 = state_24604__$1;
(statearr_24680_24746[(1)] = (13));

} else {
var statearr_24681_24747 = state_24604__$1;
(statearr_24681_24747[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (18))){
var inst_24512 = (state_24604[(2)]);
var state_24604__$1 = state_24604;
if(cljs.core.truth_(inst_24512)){
var statearr_24682_24748 = state_24604__$1;
(statearr_24682_24748[(1)] = (19));

} else {
var statearr_24683_24749 = state_24604__$1;
(statearr_24683_24749[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (42))){
var state_24604__$1 = state_24604;
var statearr_24684_24750 = state_24604__$1;
(statearr_24684_24750[(2)] = null);

(statearr_24684_24750[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (37))){
var inst_24570 = (state_24604[(2)]);
var state_24604__$1 = state_24604;
var statearr_24685_24751 = state_24604__$1;
(statearr_24685_24751[(2)] = inst_24570);

(statearr_24685_24751[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (8))){
var inst_24465 = (state_24604[(9)]);
var inst_24478 = (state_24604[(22)]);
var inst_24478__$1 = cljs.core.seq.call(null,inst_24465);
var state_24604__$1 = (function (){var statearr_24686 = state_24604;
(statearr_24686[(22)] = inst_24478__$1);

return statearr_24686;
})();
if(inst_24478__$1){
var statearr_24687_24752 = state_24604__$1;
(statearr_24687_24752[(1)] = (10));

} else {
var statearr_24688_24753 = state_24604__$1;
(statearr_24688_24753[(1)] = (11));

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
});})(c__20867__auto__,map__24450,map__24450__$1,opts,before_jsload,on_jsload,reload_dependents,map__24451,map__24451__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20755__auto__,c__20867__auto__,map__24450,map__24450__$1,opts,before_jsload,on_jsload,reload_dependents,map__24451,map__24451__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20756__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20756__auto____0 = (function (){
var statearr_24692 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24692[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20756__auto__);

(statearr_24692[(1)] = (1));

return statearr_24692;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20756__auto____1 = (function (state_24604){
while(true){
var ret_value__20757__auto__ = (function (){try{while(true){
var result__20758__auto__ = switch__20755__auto__.call(null,state_24604);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20758__auto__;
}
break;
}
}catch (e24693){if((e24693 instanceof Object)){
var ex__20759__auto__ = e24693;
var statearr_24694_24754 = state_24604;
(statearr_24694_24754[(5)] = ex__20759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24604);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24693;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24755 = state_24604;
state_24604 = G__24755;
continue;
} else {
return ret_value__20757__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20756__auto__ = function(state_24604){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20756__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20756__auto____1.call(this,state_24604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20756__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20756__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20756__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20756__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20756__auto__;
})()
;})(switch__20755__auto__,c__20867__auto__,map__24450,map__24450__$1,opts,before_jsload,on_jsload,reload_dependents,map__24451,map__24451__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__20869__auto__ = (function (){var statearr_24695 = f__20868__auto__.call(null);
(statearr_24695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20867__auto__);

return statearr_24695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20869__auto__);
});})(c__20867__auto__,map__24450,map__24450__$1,opts,before_jsload,on_jsload,reload_dependents,map__24451,map__24451__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__20867__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__24758,link){
var map__24761 = p__24758;
var map__24761__$1 = ((((!((map__24761 == null)))?((((map__24761.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24761.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24761):map__24761);
var file = cljs.core.get.call(null,map__24761__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__24761,map__24761__$1,file){
return (function (p1__24756_SHARP_,p2__24757_SHARP_){
if(cljs.core._EQ_.call(null,p1__24756_SHARP_,p2__24757_SHARP_)){
return p1__24756_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__24761,map__24761__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__24767){
var map__24768 = p__24767;
var map__24768__$1 = ((((!((map__24768 == null)))?((((map__24768.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24768.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24768):map__24768);
var match_length = cljs.core.get.call(null,map__24768__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__24768__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__24763_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__24763_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args24770 = [];
var len__17884__auto___24773 = arguments.length;
var i__17885__auto___24774 = (0);
while(true){
if((i__17885__auto___24774 < len__17884__auto___24773)){
args24770.push((arguments[i__17885__auto___24774]));

var G__24775 = (i__17885__auto___24774 + (1));
i__17885__auto___24774 = G__24775;
continue;
} else {
}
break;
}

var G__24772 = args24770.length;
switch (G__24772) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24770.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__24777_SHARP_,p2__24778_SHARP_){
return cljs.core.assoc.call(null,p1__24777_SHARP_,cljs.core.get.call(null,p2__24778_SHARP_,key),p2__24778_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__24779){
var map__24782 = p__24779;
var map__24782__$1 = ((((!((map__24782 == null)))?((((map__24782.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24782.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24782):map__24782);
var f_data = map__24782__$1;
var file = cljs.core.get.call(null,map__24782__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__24784,files_msg){
var map__24791 = p__24784;
var map__24791__$1 = ((((!((map__24791 == null)))?((((map__24791.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24791.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24791):map__24791);
var opts = map__24791__$1;
var on_cssload = cljs.core.get.call(null,map__24791__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__24793_24797 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__24794_24798 = null;
var count__24795_24799 = (0);
var i__24796_24800 = (0);
while(true){
if((i__24796_24800 < count__24795_24799)){
var f_24801 = cljs.core._nth.call(null,chunk__24794_24798,i__24796_24800);
figwheel.client.file_reloading.reload_css_file.call(null,f_24801);

var G__24802 = seq__24793_24797;
var G__24803 = chunk__24794_24798;
var G__24804 = count__24795_24799;
var G__24805 = (i__24796_24800 + (1));
seq__24793_24797 = G__24802;
chunk__24794_24798 = G__24803;
count__24795_24799 = G__24804;
i__24796_24800 = G__24805;
continue;
} else {
var temp__4425__auto___24806 = cljs.core.seq.call(null,seq__24793_24797);
if(temp__4425__auto___24806){
var seq__24793_24807__$1 = temp__4425__auto___24806;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24793_24807__$1)){
var c__17629__auto___24808 = cljs.core.chunk_first.call(null,seq__24793_24807__$1);
var G__24809 = cljs.core.chunk_rest.call(null,seq__24793_24807__$1);
var G__24810 = c__17629__auto___24808;
var G__24811 = cljs.core.count.call(null,c__17629__auto___24808);
var G__24812 = (0);
seq__24793_24797 = G__24809;
chunk__24794_24798 = G__24810;
count__24795_24799 = G__24811;
i__24796_24800 = G__24812;
continue;
} else {
var f_24813 = cljs.core.first.call(null,seq__24793_24807__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_24813);

var G__24814 = cljs.core.next.call(null,seq__24793_24807__$1);
var G__24815 = null;
var G__24816 = (0);
var G__24817 = (0);
seq__24793_24797 = G__24814;
chunk__24794_24798 = G__24815;
count__24795_24799 = G__24816;
i__24796_24800 = G__24817;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__24791,map__24791__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__24791,map__24791__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1448981697304