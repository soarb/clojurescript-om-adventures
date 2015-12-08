// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args20912 = [];
var len__17884__auto___20918 = arguments.length;
var i__17885__auto___20919 = (0);
while(true){
if((i__17885__auto___20919 < len__17884__auto___20918)){
args20912.push((arguments[i__17885__auto___20919]));

var G__20920 = (i__17885__auto___20919 + (1));
i__17885__auto___20919 = G__20920;
continue;
} else {
}
break;
}

var G__20914 = args20912.length;
switch (G__20914) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20912.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async20915 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20915 = (function (f,blockable,meta20916){
this.f = f;
this.blockable = blockable;
this.meta20916 = meta20916;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20915.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20917,meta20916__$1){
var self__ = this;
var _20917__$1 = this;
return (new cljs.core.async.t_cljs$core$async20915(self__.f,self__.blockable,meta20916__$1));
});

cljs.core.async.t_cljs$core$async20915.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20917){
var self__ = this;
var _20917__$1 = this;
return self__.meta20916;
});

cljs.core.async.t_cljs$core$async20915.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20915.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20915.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async20915.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async20915.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta20916","meta20916",-1989608474,null)], null);
});

cljs.core.async.t_cljs$core$async20915.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20915.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20915";

cljs.core.async.t_cljs$core$async20915.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async20915");
});

cljs.core.async.__GT_t_cljs$core$async20915 = (function cljs$core$async$__GT_t_cljs$core$async20915(f__$1,blockable__$1,meta20916){
return (new cljs.core.async.t_cljs$core$async20915(f__$1,blockable__$1,meta20916));
});

}

return (new cljs.core.async.t_cljs$core$async20915(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args20924 = [];
var len__17884__auto___20927 = arguments.length;
var i__17885__auto___20928 = (0);
while(true){
if((i__17885__auto___20928 < len__17884__auto___20927)){
args20924.push((arguments[i__17885__auto___20928]));

var G__20929 = (i__17885__auto___20928 + (1));
i__17885__auto___20928 = G__20929;
continue;
} else {
}
break;
}

var G__20926 = args20924.length;
switch (G__20926) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20924.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args20931 = [];
var len__17884__auto___20934 = arguments.length;
var i__17885__auto___20935 = (0);
while(true){
if((i__17885__auto___20935 < len__17884__auto___20934)){
args20931.push((arguments[i__17885__auto___20935]));

var G__20936 = (i__17885__auto___20935 + (1));
i__17885__auto___20935 = G__20936;
continue;
} else {
}
break;
}

var G__20933 = args20931.length;
switch (G__20933) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20931.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args20938 = [];
var len__17884__auto___20941 = arguments.length;
var i__17885__auto___20942 = (0);
while(true){
if((i__17885__auto___20942 < len__17884__auto___20941)){
args20938.push((arguments[i__17885__auto___20942]));

var G__20943 = (i__17885__auto___20942 + (1));
i__17885__auto___20942 = G__20943;
continue;
} else {
}
break;
}

var G__20940 = args20938.length;
switch (G__20940) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20938.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_20945 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_20945);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_20945,ret){
return (function (){
return fn1.call(null,val_20945);
});})(val_20945,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args20946 = [];
var len__17884__auto___20949 = arguments.length;
var i__17885__auto___20950 = (0);
while(true){
if((i__17885__auto___20950 < len__17884__auto___20949)){
args20946.push((arguments[i__17885__auto___20950]));

var G__20951 = (i__17885__auto___20950 + (1));
i__17885__auto___20950 = G__20951;
continue;
} else {
}
break;
}

var G__20948 = args20946.length;
switch (G__20948) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20946.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17729__auto___20953 = n;
var x_20954 = (0);
while(true){
if((x_20954 < n__17729__auto___20953)){
(a[x_20954] = (0));

var G__20955 = (x_20954 + (1));
x_20954 = G__20955;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__20956 = (i + (1));
i = G__20956;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async20960 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20960 = (function (alt_flag,flag,meta20961){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta20961 = meta20961;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20960.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20962,meta20961__$1){
var self__ = this;
var _20962__$1 = this;
return (new cljs.core.async.t_cljs$core$async20960(self__.alt_flag,self__.flag,meta20961__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async20960.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20962){
var self__ = this;
var _20962__$1 = this;
return self__.meta20961;
});})(flag))
;

cljs.core.async.t_cljs$core$async20960.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20960.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async20960.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20960.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20960.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta20961","meta20961",-744551031,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async20960.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20960.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20960";

cljs.core.async.t_cljs$core$async20960.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async20960");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async20960 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async20960(alt_flag__$1,flag__$1,meta20961){
return (new cljs.core.async.t_cljs$core$async20960(alt_flag__$1,flag__$1,meta20961));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async20960(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async20966 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20966 = (function (alt_handler,flag,cb,meta20967){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta20967 = meta20967;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20966.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20968,meta20967__$1){
var self__ = this;
var _20968__$1 = this;
return (new cljs.core.async.t_cljs$core$async20966(self__.alt_handler,self__.flag,self__.cb,meta20967__$1));
});

cljs.core.async.t_cljs$core$async20966.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20968){
var self__ = this;
var _20968__$1 = this;
return self__.meta20967;
});

cljs.core.async.t_cljs$core$async20966.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20966.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async20966.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20966.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async20966.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta20967","meta20967",1432941813,null)], null);
});

cljs.core.async.t_cljs$core$async20966.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20966.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20966";

cljs.core.async.t_cljs$core$async20966.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async20966");
});

cljs.core.async.__GT_t_cljs$core$async20966 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async20966(alt_handler__$1,flag__$1,cb__$1,meta20967){
return (new cljs.core.async.t_cljs$core$async20966(alt_handler__$1,flag__$1,cb__$1,meta20967));
});

}

return (new cljs.core.async.t_cljs$core$async20966(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20969_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20969_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20970_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20970_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16826__auto__ = wport;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return port;
}
})()], null));
} else {
var G__20971 = (i + (1));
i = G__20971;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16826__auto__ = ret;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16814__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16814__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16814__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17891__auto__ = [];
var len__17884__auto___20977 = arguments.length;
var i__17885__auto___20978 = (0);
while(true){
if((i__17885__auto___20978 < len__17884__auto___20977)){
args__17891__auto__.push((arguments[i__17885__auto___20978]));

var G__20979 = (i__17885__auto___20978 + (1));
i__17885__auto___20978 = G__20979;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((1) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17892__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__20974){
var map__20975 = p__20974;
var map__20975__$1 = ((((!((map__20975 == null)))?((((map__20975.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20975.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20975):map__20975);
var opts = map__20975__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq20972){
var G__20973 = cljs.core.first.call(null,seq20972);
var seq20972__$1 = cljs.core.next.call(null,seq20972);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20973,seq20972__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args20980 = [];
var len__17884__auto___21030 = arguments.length;
var i__17885__auto___21031 = (0);
while(true){
if((i__17885__auto___21031 < len__17884__auto___21030)){
args20980.push((arguments[i__17885__auto___21031]));

var G__21032 = (i__17885__auto___21031 + (1));
i__17885__auto___21031 = G__21032;
continue;
} else {
}
break;
}

var G__20982 = args20980.length;
switch (G__20982) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20980.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20867__auto___21034 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20867__auto___21034){
return (function (){
var f__20868__auto__ = (function (){var switch__20755__auto__ = ((function (c__20867__auto___21034){
return (function (state_21006){
var state_val_21007 = (state_21006[(1)]);
if((state_val_21007 === (7))){
var inst_21002 = (state_21006[(2)]);
var state_21006__$1 = state_21006;
var statearr_21008_21035 = state_21006__$1;
(statearr_21008_21035[(2)] = inst_21002);

(statearr_21008_21035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21007 === (1))){
var state_21006__$1 = state_21006;
var statearr_21009_21036 = state_21006__$1;
(statearr_21009_21036[(2)] = null);

(statearr_21009_21036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21007 === (4))){
var inst_20985 = (state_21006[(7)]);
var inst_20985__$1 = (state_21006[(2)]);
var inst_20986 = (inst_20985__$1 == null);
var state_21006__$1 = (function (){var statearr_21010 = state_21006;
(statearr_21010[(7)] = inst_20985__$1);

return statearr_21010;
})();
if(cljs.core.truth_(inst_20986)){
var statearr_21011_21037 = state_21006__$1;
(statearr_21011_21037[(1)] = (5));

} else {
var statearr_21012_21038 = state_21006__$1;
(statearr_21012_21038[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21007 === (13))){
var state_21006__$1 = state_21006;
var statearr_21013_21039 = state_21006__$1;
(statearr_21013_21039[(2)] = null);

(statearr_21013_21039[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21007 === (6))){
var inst_20985 = (state_21006[(7)]);
var state_21006__$1 = state_21006;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21006__$1,(11),to,inst_20985);
} else {
if((state_val_21007 === (3))){
var inst_21004 = (state_21006[(2)]);
var state_21006__$1 = state_21006;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21006__$1,inst_21004);
} else {
if((state_val_21007 === (12))){
var state_21006__$1 = state_21006;
var statearr_21014_21040 = state_21006__$1;
(statearr_21014_21040[(2)] = null);

(statearr_21014_21040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21007 === (2))){
var state_21006__$1 = state_21006;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21006__$1,(4),from);
} else {
if((state_val_21007 === (11))){
var inst_20995 = (state_21006[(2)]);
var state_21006__$1 = state_21006;
if(cljs.core.truth_(inst_20995)){
var statearr_21015_21041 = state_21006__$1;
(statearr_21015_21041[(1)] = (12));

} else {
var statearr_21016_21042 = state_21006__$1;
(statearr_21016_21042[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21007 === (9))){
var state_21006__$1 = state_21006;
var statearr_21017_21043 = state_21006__$1;
(statearr_21017_21043[(2)] = null);

(statearr_21017_21043[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21007 === (5))){
var state_21006__$1 = state_21006;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21018_21044 = state_21006__$1;
(statearr_21018_21044[(1)] = (8));

} else {
var statearr_21019_21045 = state_21006__$1;
(statearr_21019_21045[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21007 === (14))){
var inst_21000 = (state_21006[(2)]);
var state_21006__$1 = state_21006;
var statearr_21020_21046 = state_21006__$1;
(statearr_21020_21046[(2)] = inst_21000);

(statearr_21020_21046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21007 === (10))){
var inst_20992 = (state_21006[(2)]);
var state_21006__$1 = state_21006;
var statearr_21021_21047 = state_21006__$1;
(statearr_21021_21047[(2)] = inst_20992);

(statearr_21021_21047[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21007 === (8))){
var inst_20989 = cljs.core.async.close_BANG_.call(null,to);
var state_21006__$1 = state_21006;
var statearr_21022_21048 = state_21006__$1;
(statearr_21022_21048[(2)] = inst_20989);

(statearr_21022_21048[(1)] = (10));


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
});})(c__20867__auto___21034))
;
return ((function (switch__20755__auto__,c__20867__auto___21034){
return (function() {
var cljs$core$async$state_machine__20756__auto__ = null;
var cljs$core$async$state_machine__20756__auto____0 = (function (){
var statearr_21026 = [null,null,null,null,null,null,null,null];
(statearr_21026[(0)] = cljs$core$async$state_machine__20756__auto__);

(statearr_21026[(1)] = (1));

return statearr_21026;
});
var cljs$core$async$state_machine__20756__auto____1 = (function (state_21006){
while(true){
var ret_value__20757__auto__ = (function (){try{while(true){
var result__20758__auto__ = switch__20755__auto__.call(null,state_21006);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20758__auto__;
}
break;
}
}catch (e21027){if((e21027 instanceof Object)){
var ex__20759__auto__ = e21027;
var statearr_21028_21049 = state_21006;
(statearr_21028_21049[(5)] = ex__20759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21006);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21027;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21050 = state_21006;
state_21006 = G__21050;
continue;
} else {
return ret_value__20757__auto__;
}
break;
}
});
cljs$core$async$state_machine__20756__auto__ = function(state_21006){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20756__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20756__auto____1.call(this,state_21006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20756__auto____0;
cljs$core$async$state_machine__20756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20756__auto____1;
return cljs$core$async$state_machine__20756__auto__;
})()
;})(switch__20755__auto__,c__20867__auto___21034))
})();
var state__20869__auto__ = (function (){var statearr_21029 = f__20868__auto__.call(null);
(statearr_21029[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20867__auto___21034);

return statearr_21029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20869__auto__);
});})(c__20867__auto___21034))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__21234){
var vec__21235 = p__21234;
var v = cljs.core.nth.call(null,vec__21235,(0),null);
var p = cljs.core.nth.call(null,vec__21235,(1),null);
var job = vec__21235;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20867__auto___21417 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20867__auto___21417,res,vec__21235,v,p,job,jobs,results){
return (function (){
var f__20868__auto__ = (function (){var switch__20755__auto__ = ((function (c__20867__auto___21417,res,vec__21235,v,p,job,jobs,results){
return (function (state_21240){
var state_val_21241 = (state_21240[(1)]);
if((state_val_21241 === (1))){
var state_21240__$1 = state_21240;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21240__$1,(2),res,v);
} else {
if((state_val_21241 === (2))){
var inst_21237 = (state_21240[(2)]);
var inst_21238 = cljs.core.async.close_BANG_.call(null,res);
var state_21240__$1 = (function (){var statearr_21242 = state_21240;
(statearr_21242[(7)] = inst_21237);

return statearr_21242;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21240__$1,inst_21238);
} else {
return null;
}
}
});})(c__20867__auto___21417,res,vec__21235,v,p,job,jobs,results))
;
return ((function (switch__20755__auto__,c__20867__auto___21417,res,vec__21235,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20756__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20756__auto____0 = (function (){
var statearr_21246 = [null,null,null,null,null,null,null,null];
(statearr_21246[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20756__auto__);

(statearr_21246[(1)] = (1));

return statearr_21246;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20756__auto____1 = (function (state_21240){
while(true){
var ret_value__20757__auto__ = (function (){try{while(true){
var result__20758__auto__ = switch__20755__auto__.call(null,state_21240);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20758__auto__;
}
break;
}
}catch (e21247){if((e21247 instanceof Object)){
var ex__20759__auto__ = e21247;
var statearr_21248_21418 = state_21240;
(statearr_21248_21418[(5)] = ex__20759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21240);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21247;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21419 = state_21240;
state_21240 = G__21419;
continue;
} else {
return ret_value__20757__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20756__auto__ = function(state_21240){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20756__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20756__auto____1.call(this,state_21240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20756__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20756__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20756__auto__;
})()
;})(switch__20755__auto__,c__20867__auto___21417,res,vec__21235,v,p,job,jobs,results))
})();
var state__20869__auto__ = (function (){var statearr_21249 = f__20868__auto__.call(null);
(statearr_21249[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20867__auto___21417);

return statearr_21249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20869__auto__);
});})(c__20867__auto___21417,res,vec__21235,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__21250){
var vec__21251 = p__21250;
var v = cljs.core.nth.call(null,vec__21251,(0),null);
var p = cljs.core.nth.call(null,vec__21251,(1),null);
var job = vec__21251;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17729__auto___21420 = n;
var __21421 = (0);
while(true){
if((__21421 < n__17729__auto___21420)){
var G__21252_21422 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__21252_21422) {
case "compute":
var c__20867__auto___21424 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21421,c__20867__auto___21424,G__21252_21422,n__17729__auto___21420,jobs,results,process,async){
return (function (){
var f__20868__auto__ = (function (){var switch__20755__auto__ = ((function (__21421,c__20867__auto___21424,G__21252_21422,n__17729__auto___21420,jobs,results,process,async){
return (function (state_21265){
var state_val_21266 = (state_21265[(1)]);
if((state_val_21266 === (1))){
var state_21265__$1 = state_21265;
var statearr_21267_21425 = state_21265__$1;
(statearr_21267_21425[(2)] = null);

(statearr_21267_21425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21266 === (2))){
var state_21265__$1 = state_21265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21265__$1,(4),jobs);
} else {
if((state_val_21266 === (3))){
var inst_21263 = (state_21265[(2)]);
var state_21265__$1 = state_21265;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21265__$1,inst_21263);
} else {
if((state_val_21266 === (4))){
var inst_21255 = (state_21265[(2)]);
var inst_21256 = process.call(null,inst_21255);
var state_21265__$1 = state_21265;
if(cljs.core.truth_(inst_21256)){
var statearr_21268_21426 = state_21265__$1;
(statearr_21268_21426[(1)] = (5));

} else {
var statearr_21269_21427 = state_21265__$1;
(statearr_21269_21427[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21266 === (5))){
var state_21265__$1 = state_21265;
var statearr_21270_21428 = state_21265__$1;
(statearr_21270_21428[(2)] = null);

(statearr_21270_21428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21266 === (6))){
var state_21265__$1 = state_21265;
var statearr_21271_21429 = state_21265__$1;
(statearr_21271_21429[(2)] = null);

(statearr_21271_21429[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21266 === (7))){
var inst_21261 = (state_21265[(2)]);
var state_21265__$1 = state_21265;
var statearr_21272_21430 = state_21265__$1;
(statearr_21272_21430[(2)] = inst_21261);

(statearr_21272_21430[(1)] = (3));


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
});})(__21421,c__20867__auto___21424,G__21252_21422,n__17729__auto___21420,jobs,results,process,async))
;
return ((function (__21421,switch__20755__auto__,c__20867__auto___21424,G__21252_21422,n__17729__auto___21420,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20756__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20756__auto____0 = (function (){
var statearr_21276 = [null,null,null,null,null,null,null];
(statearr_21276[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20756__auto__);

(statearr_21276[(1)] = (1));

return statearr_21276;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20756__auto____1 = (function (state_21265){
while(true){
var ret_value__20757__auto__ = (function (){try{while(true){
var result__20758__auto__ = switch__20755__auto__.call(null,state_21265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20758__auto__;
}
break;
}
}catch (e21277){if((e21277 instanceof Object)){
var ex__20759__auto__ = e21277;
var statearr_21278_21431 = state_21265;
(statearr_21278_21431[(5)] = ex__20759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21277;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21432 = state_21265;
state_21265 = G__21432;
continue;
} else {
return ret_value__20757__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20756__auto__ = function(state_21265){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20756__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20756__auto____1.call(this,state_21265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20756__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20756__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20756__auto__;
})()
;})(__21421,switch__20755__auto__,c__20867__auto___21424,G__21252_21422,n__17729__auto___21420,jobs,results,process,async))
})();
var state__20869__auto__ = (function (){var statearr_21279 = f__20868__auto__.call(null);
(statearr_21279[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20867__auto___21424);

return statearr_21279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20869__auto__);
});})(__21421,c__20867__auto___21424,G__21252_21422,n__17729__auto___21420,jobs,results,process,async))
);


break;
case "async":
var c__20867__auto___21433 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21421,c__20867__auto___21433,G__21252_21422,n__17729__auto___21420,jobs,results,process,async){
return (function (){
var f__20868__auto__ = (function (){var switch__20755__auto__ = ((function (__21421,c__20867__auto___21433,G__21252_21422,n__17729__auto___21420,jobs,results,process,async){
return (function (state_21292){
var state_val_21293 = (state_21292[(1)]);
if((state_val_21293 === (1))){
var state_21292__$1 = state_21292;
var statearr_21294_21434 = state_21292__$1;
(statearr_21294_21434[(2)] = null);

(statearr_21294_21434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21293 === (2))){
var state_21292__$1 = state_21292;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21292__$1,(4),jobs);
} else {
if((state_val_21293 === (3))){
var inst_21290 = (state_21292[(2)]);
var state_21292__$1 = state_21292;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21292__$1,inst_21290);
} else {
if((state_val_21293 === (4))){
var inst_21282 = (state_21292[(2)]);
var inst_21283 = async.call(null,inst_21282);
var state_21292__$1 = state_21292;
if(cljs.core.truth_(inst_21283)){
var statearr_21295_21435 = state_21292__$1;
(statearr_21295_21435[(1)] = (5));

} else {
var statearr_21296_21436 = state_21292__$1;
(statearr_21296_21436[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21293 === (5))){
var state_21292__$1 = state_21292;
var statearr_21297_21437 = state_21292__$1;
(statearr_21297_21437[(2)] = null);

(statearr_21297_21437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21293 === (6))){
var state_21292__$1 = state_21292;
var statearr_21298_21438 = state_21292__$1;
(statearr_21298_21438[(2)] = null);

(statearr_21298_21438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21293 === (7))){
var inst_21288 = (state_21292[(2)]);
var state_21292__$1 = state_21292;
var statearr_21299_21439 = state_21292__$1;
(statearr_21299_21439[(2)] = inst_21288);

(statearr_21299_21439[(1)] = (3));


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
});})(__21421,c__20867__auto___21433,G__21252_21422,n__17729__auto___21420,jobs,results,process,async))
;
return ((function (__21421,switch__20755__auto__,c__20867__auto___21433,G__21252_21422,n__17729__auto___21420,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20756__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20756__auto____0 = (function (){
var statearr_21303 = [null,null,null,null,null,null,null];
(statearr_21303[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20756__auto__);

(statearr_21303[(1)] = (1));

return statearr_21303;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20756__auto____1 = (function (state_21292){
while(true){
var ret_value__20757__auto__ = (function (){try{while(true){
var result__20758__auto__ = switch__20755__auto__.call(null,state_21292);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20758__auto__;
}
break;
}
}catch (e21304){if((e21304 instanceof Object)){
var ex__20759__auto__ = e21304;
var statearr_21305_21440 = state_21292;
(statearr_21305_21440[(5)] = ex__20759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21292);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21304;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21441 = state_21292;
state_21292 = G__21441;
continue;
} else {
return ret_value__20757__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20756__auto__ = function(state_21292){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20756__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20756__auto____1.call(this,state_21292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20756__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20756__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20756__auto__;
})()
;})(__21421,switch__20755__auto__,c__20867__auto___21433,G__21252_21422,n__17729__auto___21420,jobs,results,process,async))
})();
var state__20869__auto__ = (function (){var statearr_21306 = f__20868__auto__.call(null);
(statearr_21306[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20867__auto___21433);

return statearr_21306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20869__auto__);
});})(__21421,c__20867__auto___21433,G__21252_21422,n__17729__auto___21420,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__21442 = (__21421 + (1));
__21421 = G__21442;
continue;
} else {
}
break;
}

var c__20867__auto___21443 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20867__auto___21443,jobs,results,process,async){
return (function (){
var f__20868__auto__ = (function (){var switch__20755__auto__ = ((function (c__20867__auto___21443,jobs,results,process,async){
return (function (state_21328){
var state_val_21329 = (state_21328[(1)]);
if((state_val_21329 === (1))){
var state_21328__$1 = state_21328;
var statearr_21330_21444 = state_21328__$1;
(statearr_21330_21444[(2)] = null);

(statearr_21330_21444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21329 === (2))){
var state_21328__$1 = state_21328;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21328__$1,(4),from);
} else {
if((state_val_21329 === (3))){
var inst_21326 = (state_21328[(2)]);
var state_21328__$1 = state_21328;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21328__$1,inst_21326);
} else {
if((state_val_21329 === (4))){
var inst_21309 = (state_21328[(7)]);
var inst_21309__$1 = (state_21328[(2)]);
var inst_21310 = (inst_21309__$1 == null);
var state_21328__$1 = (function (){var statearr_21331 = state_21328;
(statearr_21331[(7)] = inst_21309__$1);

return statearr_21331;
})();
if(cljs.core.truth_(inst_21310)){
var statearr_21332_21445 = state_21328__$1;
(statearr_21332_21445[(1)] = (5));

} else {
var statearr_21333_21446 = state_21328__$1;
(statearr_21333_21446[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21329 === (5))){
var inst_21312 = cljs.core.async.close_BANG_.call(null,jobs);
var state_21328__$1 = state_21328;
var statearr_21334_21447 = state_21328__$1;
(statearr_21334_21447[(2)] = inst_21312);

(statearr_21334_21447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21329 === (6))){
var inst_21314 = (state_21328[(8)]);
var inst_21309 = (state_21328[(7)]);
var inst_21314__$1 = cljs.core.async.chan.call(null,(1));
var inst_21315 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21316 = [inst_21309,inst_21314__$1];
var inst_21317 = (new cljs.core.PersistentVector(null,2,(5),inst_21315,inst_21316,null));
var state_21328__$1 = (function (){var statearr_21335 = state_21328;
(statearr_21335[(8)] = inst_21314__$1);

return statearr_21335;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21328__$1,(8),jobs,inst_21317);
} else {
if((state_val_21329 === (7))){
var inst_21324 = (state_21328[(2)]);
var state_21328__$1 = state_21328;
var statearr_21336_21448 = state_21328__$1;
(statearr_21336_21448[(2)] = inst_21324);

(statearr_21336_21448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21329 === (8))){
var inst_21314 = (state_21328[(8)]);
var inst_21319 = (state_21328[(2)]);
var state_21328__$1 = (function (){var statearr_21337 = state_21328;
(statearr_21337[(9)] = inst_21319);

return statearr_21337;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21328__$1,(9),results,inst_21314);
} else {
if((state_val_21329 === (9))){
var inst_21321 = (state_21328[(2)]);
var state_21328__$1 = (function (){var statearr_21338 = state_21328;
(statearr_21338[(10)] = inst_21321);

return statearr_21338;
})();
var statearr_21339_21449 = state_21328__$1;
(statearr_21339_21449[(2)] = null);

(statearr_21339_21449[(1)] = (2));


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
});})(c__20867__auto___21443,jobs,results,process,async))
;
return ((function (switch__20755__auto__,c__20867__auto___21443,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20756__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20756__auto____0 = (function (){
var statearr_21343 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21343[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20756__auto__);

(statearr_21343[(1)] = (1));

return statearr_21343;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20756__auto____1 = (function (state_21328){
while(true){
var ret_value__20757__auto__ = (function (){try{while(true){
var result__20758__auto__ = switch__20755__auto__.call(null,state_21328);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20758__auto__;
}
break;
}
}catch (e21344){if((e21344 instanceof Object)){
var ex__20759__auto__ = e21344;
var statearr_21345_21450 = state_21328;
(statearr_21345_21450[(5)] = ex__20759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21328);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21344;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21451 = state_21328;
state_21328 = G__21451;
continue;
} else {
return ret_value__20757__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20756__auto__ = function(state_21328){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20756__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20756__auto____1.call(this,state_21328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20756__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20756__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20756__auto__;
})()
;})(switch__20755__auto__,c__20867__auto___21443,jobs,results,process,async))
})();
var state__20869__auto__ = (function (){var statearr_21346 = f__20868__auto__.call(null);
(statearr_21346[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20867__auto___21443);

return statearr_21346;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20869__auto__);
});})(c__20867__auto___21443,jobs,results,process,async))
);


var c__20867__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20867__auto__,jobs,results,process,async){
return (function (){
var f__20868__auto__ = (function (){var switch__20755__auto__ = ((function (c__20867__auto__,jobs,results,process,async){
return (function (state_21384){
var state_val_21385 = (state_21384[(1)]);
if((state_val_21385 === (7))){
var inst_21380 = (state_21384[(2)]);
var state_21384__$1 = state_21384;
var statearr_21386_21452 = state_21384__$1;
(statearr_21386_21452[(2)] = inst_21380);

(statearr_21386_21452[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21385 === (20))){
var state_21384__$1 = state_21384;
var statearr_21387_21453 = state_21384__$1;
(statearr_21387_21453[(2)] = null);

(statearr_21387_21453[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21385 === (1))){
var state_21384__$1 = state_21384;
var statearr_21388_21454 = state_21384__$1;
(statearr_21388_21454[(2)] = null);

(statearr_21388_21454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21385 === (4))){
var inst_21349 = (state_21384[(7)]);
var inst_21349__$1 = (state_21384[(2)]);
var inst_21350 = (inst_21349__$1 == null);
var state_21384__$1 = (function (){var statearr_21389 = state_21384;
(statearr_21389[(7)] = inst_21349__$1);

return statearr_21389;
})();
if(cljs.core.truth_(inst_21350)){
var statearr_21390_21455 = state_21384__$1;
(statearr_21390_21455[(1)] = (5));

} else {
var statearr_21391_21456 = state_21384__$1;
(statearr_21391_21456[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21385 === (15))){
var inst_21362 = (state_21384[(8)]);
var state_21384__$1 = state_21384;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21384__$1,(18),to,inst_21362);
} else {
if((state_val_21385 === (21))){
var inst_21375 = (state_21384[(2)]);
var state_21384__$1 = state_21384;
var statearr_21392_21457 = state_21384__$1;
(statearr_21392_21457[(2)] = inst_21375);

(statearr_21392_21457[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21385 === (13))){
var inst_21377 = (state_21384[(2)]);
var state_21384__$1 = (function (){var statearr_21393 = state_21384;
(statearr_21393[(9)] = inst_21377);

return statearr_21393;
})();
var statearr_21394_21458 = state_21384__$1;
(statearr_21394_21458[(2)] = null);

(statearr_21394_21458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21385 === (6))){
var inst_21349 = (state_21384[(7)]);
var state_21384__$1 = state_21384;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21384__$1,(11),inst_21349);
} else {
if((state_val_21385 === (17))){
var inst_21370 = (state_21384[(2)]);
var state_21384__$1 = state_21384;
if(cljs.core.truth_(inst_21370)){
var statearr_21395_21459 = state_21384__$1;
(statearr_21395_21459[(1)] = (19));

} else {
var statearr_21396_21460 = state_21384__$1;
(statearr_21396_21460[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21385 === (3))){
var inst_21382 = (state_21384[(2)]);
var state_21384__$1 = state_21384;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21384__$1,inst_21382);
} else {
if((state_val_21385 === (12))){
var inst_21359 = (state_21384[(10)]);
var state_21384__$1 = state_21384;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21384__$1,(14),inst_21359);
} else {
if((state_val_21385 === (2))){
var state_21384__$1 = state_21384;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21384__$1,(4),results);
} else {
if((state_val_21385 === (19))){
var state_21384__$1 = state_21384;
var statearr_21397_21461 = state_21384__$1;
(statearr_21397_21461[(2)] = null);

(statearr_21397_21461[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21385 === (11))){
var inst_21359 = (state_21384[(2)]);
var state_21384__$1 = (function (){var statearr_21398 = state_21384;
(statearr_21398[(10)] = inst_21359);

return statearr_21398;
})();
var statearr_21399_21462 = state_21384__$1;
(statearr_21399_21462[(2)] = null);

(statearr_21399_21462[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21385 === (9))){
var state_21384__$1 = state_21384;
var statearr_21400_21463 = state_21384__$1;
(statearr_21400_21463[(2)] = null);

(statearr_21400_21463[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21385 === (5))){
var state_21384__$1 = state_21384;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21401_21464 = state_21384__$1;
(statearr_21401_21464[(1)] = (8));

} else {
var statearr_21402_21465 = state_21384__$1;
(statearr_21402_21465[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21385 === (14))){
var inst_21364 = (state_21384[(11)]);
var inst_21362 = (state_21384[(8)]);
var inst_21362__$1 = (state_21384[(2)]);
var inst_21363 = (inst_21362__$1 == null);
var inst_21364__$1 = cljs.core.not.call(null,inst_21363);
var state_21384__$1 = (function (){var statearr_21403 = state_21384;
(statearr_21403[(11)] = inst_21364__$1);

(statearr_21403[(8)] = inst_21362__$1);

return statearr_21403;
})();
if(inst_21364__$1){
var statearr_21404_21466 = state_21384__$1;
(statearr_21404_21466[(1)] = (15));

} else {
var statearr_21405_21467 = state_21384__$1;
(statearr_21405_21467[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21385 === (16))){
var inst_21364 = (state_21384[(11)]);
var state_21384__$1 = state_21384;
var statearr_21406_21468 = state_21384__$1;
(statearr_21406_21468[(2)] = inst_21364);

(statearr_21406_21468[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21385 === (10))){
var inst_21356 = (state_21384[(2)]);
var state_21384__$1 = state_21384;
var statearr_21407_21469 = state_21384__$1;
(statearr_21407_21469[(2)] = inst_21356);

(statearr_21407_21469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21385 === (18))){
var inst_21367 = (state_21384[(2)]);
var state_21384__$1 = state_21384;
var statearr_21408_21470 = state_21384__$1;
(statearr_21408_21470[(2)] = inst_21367);

(statearr_21408_21470[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21385 === (8))){
var inst_21353 = cljs.core.async.close_BANG_.call(null,to);
var state_21384__$1 = state_21384;
var statearr_21409_21471 = state_21384__$1;
(statearr_21409_21471[(2)] = inst_21353);

(statearr_21409_21471[(1)] = (10));


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
});})(c__20867__auto__,jobs,results,process,async))
;
return ((function (switch__20755__auto__,c__20867__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20756__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20756__auto____0 = (function (){
var statearr_21413 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21413[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20756__auto__);

(statearr_21413[(1)] = (1));

return statearr_21413;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20756__auto____1 = (function (state_21384){
while(true){
var ret_value__20757__auto__ = (function (){try{while(true){
var result__20758__auto__ = switch__20755__auto__.call(null,state_21384);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20758__auto__;
}
break;
}
}catch (e21414){if((e21414 instanceof Object)){
var ex__20759__auto__ = e21414;
var statearr_21415_21472 = state_21384;
(statearr_21415_21472[(5)] = ex__20759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21384);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21414;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21473 = state_21384;
state_21384 = G__21473;
continue;
} else {
return ret_value__20757__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20756__auto__ = function(state_21384){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20756__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20756__auto____1.call(this,state_21384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20756__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20756__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20756__auto__;
})()
;})(switch__20755__auto__,c__20867__auto__,jobs,results,process,async))
})();
var state__20869__auto__ = (function (){var statearr_21416 = f__20868__auto__.call(null);
(statearr_21416[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20867__auto__);

return statearr_21416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20869__auto__);
});})(c__20867__auto__,jobs,results,process,async))
);

return c__20867__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args21474 = [];
var len__17884__auto___21477 = arguments.length;
var i__17885__auto___21478 = (0);
while(true){
if((i__17885__auto___21478 < len__17884__auto___21477)){
args21474.push((arguments[i__17885__auto___21478]));

var G__21479 = (i__17885__auto___21478 + (1));
i__17885__auto___21478 = G__21479;
continue;
} else {
}
break;
}

var G__21476 = args21474.length;
switch (G__21476) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21474.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args21481 = [];
var len__17884__auto___21484 = arguments.length;
var i__17885__auto___21485 = (0);
while(true){
if((i__17885__auto___21485 < len__17884__auto___21484)){
args21481.push((arguments[i__17885__auto___21485]));

var G__21486 = (i__17885__auto___21485 + (1));
i__17885__auto___21485 = G__21486;
continue;
} else {
}
break;
}

var G__21483 = args21481.length;
switch (G__21483) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21481.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args21488 = [];
var len__17884__auto___21541 = arguments.length;
var i__17885__auto___21542 = (0);
while(true){
if((i__17885__auto___21542 < len__17884__auto___21541)){
args21488.push((arguments[i__17885__auto___21542]));

var G__21543 = (i__17885__auto___21542 + (1));
i__17885__auto___21542 = G__21543;
continue;
} else {
}
break;
}

var G__21490 = args21488.length;
switch (G__21490) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21488.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20867__auto___21545 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20867__auto___21545,tc,fc){
return (function (){
var f__20868__auto__ = (function (){var switch__20755__auto__ = ((function (c__20867__auto___21545,tc,fc){
return (function (state_21516){
var state_val_21517 = (state_21516[(1)]);
if((state_val_21517 === (7))){
var inst_21512 = (state_21516[(2)]);
var state_21516__$1 = state_21516;
var statearr_21518_21546 = state_21516__$1;
(statearr_21518_21546[(2)] = inst_21512);

(statearr_21518_21546[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21517 === (1))){
var state_21516__$1 = state_21516;
var statearr_21519_21547 = state_21516__$1;
(statearr_21519_21547[(2)] = null);

(statearr_21519_21547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21517 === (4))){
var inst_21493 = (state_21516[(7)]);
var inst_21493__$1 = (state_21516[(2)]);
var inst_21494 = (inst_21493__$1 == null);
var state_21516__$1 = (function (){var statearr_21520 = state_21516;
(statearr_21520[(7)] = inst_21493__$1);

return statearr_21520;
})();
if(cljs.core.truth_(inst_21494)){
var statearr_21521_21548 = state_21516__$1;
(statearr_21521_21548[(1)] = (5));

} else {
var statearr_21522_21549 = state_21516__$1;
(statearr_21522_21549[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21517 === (13))){
var state_21516__$1 = state_21516;
var statearr_21523_21550 = state_21516__$1;
(statearr_21523_21550[(2)] = null);

(statearr_21523_21550[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21517 === (6))){
var inst_21493 = (state_21516[(7)]);
var inst_21499 = p.call(null,inst_21493);
var state_21516__$1 = state_21516;
if(cljs.core.truth_(inst_21499)){
var statearr_21524_21551 = state_21516__$1;
(statearr_21524_21551[(1)] = (9));

} else {
var statearr_21525_21552 = state_21516__$1;
(statearr_21525_21552[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21517 === (3))){
var inst_21514 = (state_21516[(2)]);
var state_21516__$1 = state_21516;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21516__$1,inst_21514);
} else {
if((state_val_21517 === (12))){
var state_21516__$1 = state_21516;
var statearr_21526_21553 = state_21516__$1;
(statearr_21526_21553[(2)] = null);

(statearr_21526_21553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21517 === (2))){
var state_21516__$1 = state_21516;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21516__$1,(4),ch);
} else {
if((state_val_21517 === (11))){
var inst_21493 = (state_21516[(7)]);
var inst_21503 = (state_21516[(2)]);
var state_21516__$1 = state_21516;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21516__$1,(8),inst_21503,inst_21493);
} else {
if((state_val_21517 === (9))){
var state_21516__$1 = state_21516;
var statearr_21527_21554 = state_21516__$1;
(statearr_21527_21554[(2)] = tc);

(statearr_21527_21554[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21517 === (5))){
var inst_21496 = cljs.core.async.close_BANG_.call(null,tc);
var inst_21497 = cljs.core.async.close_BANG_.call(null,fc);
var state_21516__$1 = (function (){var statearr_21528 = state_21516;
(statearr_21528[(8)] = inst_21496);

return statearr_21528;
})();
var statearr_21529_21555 = state_21516__$1;
(statearr_21529_21555[(2)] = inst_21497);

(statearr_21529_21555[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21517 === (14))){
var inst_21510 = (state_21516[(2)]);
var state_21516__$1 = state_21516;
var statearr_21530_21556 = state_21516__$1;
(statearr_21530_21556[(2)] = inst_21510);

(statearr_21530_21556[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21517 === (10))){
var state_21516__$1 = state_21516;
var statearr_21531_21557 = state_21516__$1;
(statearr_21531_21557[(2)] = fc);

(statearr_21531_21557[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21517 === (8))){
var inst_21505 = (state_21516[(2)]);
var state_21516__$1 = state_21516;
if(cljs.core.truth_(inst_21505)){
var statearr_21532_21558 = state_21516__$1;
(statearr_21532_21558[(1)] = (12));

} else {
var statearr_21533_21559 = state_21516__$1;
(statearr_21533_21559[(1)] = (13));

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
});})(c__20867__auto___21545,tc,fc))
;
return ((function (switch__20755__auto__,c__20867__auto___21545,tc,fc){
return (function() {
var cljs$core$async$state_machine__20756__auto__ = null;
var cljs$core$async$state_machine__20756__auto____0 = (function (){
var statearr_21537 = [null,null,null,null,null,null,null,null,null];
(statearr_21537[(0)] = cljs$core$async$state_machine__20756__auto__);

(statearr_21537[(1)] = (1));

return statearr_21537;
});
var cljs$core$async$state_machine__20756__auto____1 = (function (state_21516){
while(true){
var ret_value__20757__auto__ = (function (){try{while(true){
var result__20758__auto__ = switch__20755__auto__.call(null,state_21516);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20758__auto__;
}
break;
}
}catch (e21538){if((e21538 instanceof Object)){
var ex__20759__auto__ = e21538;
var statearr_21539_21560 = state_21516;
(statearr_21539_21560[(5)] = ex__20759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21538;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21561 = state_21516;
state_21516 = G__21561;
continue;
} else {
return ret_value__20757__auto__;
}
break;
}
});
cljs$core$async$state_machine__20756__auto__ = function(state_21516){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20756__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20756__auto____1.call(this,state_21516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20756__auto____0;
cljs$core$async$state_machine__20756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20756__auto____1;
return cljs$core$async$state_machine__20756__auto__;
})()
;})(switch__20755__auto__,c__20867__auto___21545,tc,fc))
})();
var state__20869__auto__ = (function (){var statearr_21540 = f__20868__auto__.call(null);
(statearr_21540[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20867__auto___21545);

return statearr_21540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20869__auto__);
});})(c__20867__auto___21545,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__20867__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20867__auto__){
return (function (){
var f__20868__auto__ = (function (){var switch__20755__auto__ = ((function (c__20867__auto__){
return (function (state_21625){
var state_val_21626 = (state_21625[(1)]);
if((state_val_21626 === (7))){
var inst_21621 = (state_21625[(2)]);
var state_21625__$1 = state_21625;
var statearr_21627_21648 = state_21625__$1;
(statearr_21627_21648[(2)] = inst_21621);

(statearr_21627_21648[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21626 === (1))){
var inst_21605 = init;
var state_21625__$1 = (function (){var statearr_21628 = state_21625;
(statearr_21628[(7)] = inst_21605);

return statearr_21628;
})();
var statearr_21629_21649 = state_21625__$1;
(statearr_21629_21649[(2)] = null);

(statearr_21629_21649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21626 === (4))){
var inst_21608 = (state_21625[(8)]);
var inst_21608__$1 = (state_21625[(2)]);
var inst_21609 = (inst_21608__$1 == null);
var state_21625__$1 = (function (){var statearr_21630 = state_21625;
(statearr_21630[(8)] = inst_21608__$1);

return statearr_21630;
})();
if(cljs.core.truth_(inst_21609)){
var statearr_21631_21650 = state_21625__$1;
(statearr_21631_21650[(1)] = (5));

} else {
var statearr_21632_21651 = state_21625__$1;
(statearr_21632_21651[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21626 === (6))){
var inst_21612 = (state_21625[(9)]);
var inst_21605 = (state_21625[(7)]);
var inst_21608 = (state_21625[(8)]);
var inst_21612__$1 = f.call(null,inst_21605,inst_21608);
var inst_21613 = cljs.core.reduced_QMARK_.call(null,inst_21612__$1);
var state_21625__$1 = (function (){var statearr_21633 = state_21625;
(statearr_21633[(9)] = inst_21612__$1);

return statearr_21633;
})();
if(inst_21613){
var statearr_21634_21652 = state_21625__$1;
(statearr_21634_21652[(1)] = (8));

} else {
var statearr_21635_21653 = state_21625__$1;
(statearr_21635_21653[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21626 === (3))){
var inst_21623 = (state_21625[(2)]);
var state_21625__$1 = state_21625;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21625__$1,inst_21623);
} else {
if((state_val_21626 === (2))){
var state_21625__$1 = state_21625;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21625__$1,(4),ch);
} else {
if((state_val_21626 === (9))){
var inst_21612 = (state_21625[(9)]);
var inst_21605 = inst_21612;
var state_21625__$1 = (function (){var statearr_21636 = state_21625;
(statearr_21636[(7)] = inst_21605);

return statearr_21636;
})();
var statearr_21637_21654 = state_21625__$1;
(statearr_21637_21654[(2)] = null);

(statearr_21637_21654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21626 === (5))){
var inst_21605 = (state_21625[(7)]);
var state_21625__$1 = state_21625;
var statearr_21638_21655 = state_21625__$1;
(statearr_21638_21655[(2)] = inst_21605);

(statearr_21638_21655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21626 === (10))){
var inst_21619 = (state_21625[(2)]);
var state_21625__$1 = state_21625;
var statearr_21639_21656 = state_21625__$1;
(statearr_21639_21656[(2)] = inst_21619);

(statearr_21639_21656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21626 === (8))){
var inst_21612 = (state_21625[(9)]);
var inst_21615 = cljs.core.deref.call(null,inst_21612);
var state_21625__$1 = state_21625;
var statearr_21640_21657 = state_21625__$1;
(statearr_21640_21657[(2)] = inst_21615);

(statearr_21640_21657[(1)] = (10));


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
});})(c__20867__auto__))
;
return ((function (switch__20755__auto__,c__20867__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20756__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20756__auto____0 = (function (){
var statearr_21644 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21644[(0)] = cljs$core$async$reduce_$_state_machine__20756__auto__);

(statearr_21644[(1)] = (1));

return statearr_21644;
});
var cljs$core$async$reduce_$_state_machine__20756__auto____1 = (function (state_21625){
while(true){
var ret_value__20757__auto__ = (function (){try{while(true){
var result__20758__auto__ = switch__20755__auto__.call(null,state_21625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20758__auto__;
}
break;
}
}catch (e21645){if((e21645 instanceof Object)){
var ex__20759__auto__ = e21645;
var statearr_21646_21658 = state_21625;
(statearr_21646_21658[(5)] = ex__20759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21645;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21659 = state_21625;
state_21625 = G__21659;
continue;
} else {
return ret_value__20757__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20756__auto__ = function(state_21625){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20756__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20756__auto____1.call(this,state_21625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20756__auto____0;
cljs$core$async$reduce_$_state_machine__20756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20756__auto____1;
return cljs$core$async$reduce_$_state_machine__20756__auto__;
})()
;})(switch__20755__auto__,c__20867__auto__))
})();
var state__20869__auto__ = (function (){var statearr_21647 = f__20868__auto__.call(null);
(statearr_21647[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20867__auto__);

return statearr_21647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20869__auto__);
});})(c__20867__auto__))
);

return c__20867__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args21660 = [];
var len__17884__auto___21712 = arguments.length;
var i__17885__auto___21713 = (0);
while(true){
if((i__17885__auto___21713 < len__17884__auto___21712)){
args21660.push((arguments[i__17885__auto___21713]));

var G__21714 = (i__17885__auto___21713 + (1));
i__17885__auto___21713 = G__21714;
continue;
} else {
}
break;
}

var G__21662 = args21660.length;
switch (G__21662) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21660.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20867__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20867__auto__){
return (function (){
var f__20868__auto__ = (function (){var switch__20755__auto__ = ((function (c__20867__auto__){
return (function (state_21687){
var state_val_21688 = (state_21687[(1)]);
if((state_val_21688 === (7))){
var inst_21669 = (state_21687[(2)]);
var state_21687__$1 = state_21687;
var statearr_21689_21716 = state_21687__$1;
(statearr_21689_21716[(2)] = inst_21669);

(statearr_21689_21716[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21688 === (1))){
var inst_21663 = cljs.core.seq.call(null,coll);
var inst_21664 = inst_21663;
var state_21687__$1 = (function (){var statearr_21690 = state_21687;
(statearr_21690[(7)] = inst_21664);

return statearr_21690;
})();
var statearr_21691_21717 = state_21687__$1;
(statearr_21691_21717[(2)] = null);

(statearr_21691_21717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21688 === (4))){
var inst_21664 = (state_21687[(7)]);
var inst_21667 = cljs.core.first.call(null,inst_21664);
var state_21687__$1 = state_21687;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21687__$1,(7),ch,inst_21667);
} else {
if((state_val_21688 === (13))){
var inst_21681 = (state_21687[(2)]);
var state_21687__$1 = state_21687;
var statearr_21692_21718 = state_21687__$1;
(statearr_21692_21718[(2)] = inst_21681);

(statearr_21692_21718[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21688 === (6))){
var inst_21672 = (state_21687[(2)]);
var state_21687__$1 = state_21687;
if(cljs.core.truth_(inst_21672)){
var statearr_21693_21719 = state_21687__$1;
(statearr_21693_21719[(1)] = (8));

} else {
var statearr_21694_21720 = state_21687__$1;
(statearr_21694_21720[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21688 === (3))){
var inst_21685 = (state_21687[(2)]);
var state_21687__$1 = state_21687;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21687__$1,inst_21685);
} else {
if((state_val_21688 === (12))){
var state_21687__$1 = state_21687;
var statearr_21695_21721 = state_21687__$1;
(statearr_21695_21721[(2)] = null);

(statearr_21695_21721[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21688 === (2))){
var inst_21664 = (state_21687[(7)]);
var state_21687__$1 = state_21687;
if(cljs.core.truth_(inst_21664)){
var statearr_21696_21722 = state_21687__$1;
(statearr_21696_21722[(1)] = (4));

} else {
var statearr_21697_21723 = state_21687__$1;
(statearr_21697_21723[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21688 === (11))){
var inst_21678 = cljs.core.async.close_BANG_.call(null,ch);
var state_21687__$1 = state_21687;
var statearr_21698_21724 = state_21687__$1;
(statearr_21698_21724[(2)] = inst_21678);

(statearr_21698_21724[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21688 === (9))){
var state_21687__$1 = state_21687;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21699_21725 = state_21687__$1;
(statearr_21699_21725[(1)] = (11));

} else {
var statearr_21700_21726 = state_21687__$1;
(statearr_21700_21726[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21688 === (5))){
var inst_21664 = (state_21687[(7)]);
var state_21687__$1 = state_21687;
var statearr_21701_21727 = state_21687__$1;
(statearr_21701_21727[(2)] = inst_21664);

(statearr_21701_21727[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21688 === (10))){
var inst_21683 = (state_21687[(2)]);
var state_21687__$1 = state_21687;
var statearr_21702_21728 = state_21687__$1;
(statearr_21702_21728[(2)] = inst_21683);

(statearr_21702_21728[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21688 === (8))){
var inst_21664 = (state_21687[(7)]);
var inst_21674 = cljs.core.next.call(null,inst_21664);
var inst_21664__$1 = inst_21674;
var state_21687__$1 = (function (){var statearr_21703 = state_21687;
(statearr_21703[(7)] = inst_21664__$1);

return statearr_21703;
})();
var statearr_21704_21729 = state_21687__$1;
(statearr_21704_21729[(2)] = null);

(statearr_21704_21729[(1)] = (2));


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
});})(c__20867__auto__))
;
return ((function (switch__20755__auto__,c__20867__auto__){
return (function() {
var cljs$core$async$state_machine__20756__auto__ = null;
var cljs$core$async$state_machine__20756__auto____0 = (function (){
var statearr_21708 = [null,null,null,null,null,null,null,null];
(statearr_21708[(0)] = cljs$core$async$state_machine__20756__auto__);

(statearr_21708[(1)] = (1));

return statearr_21708;
});
var cljs$core$async$state_machine__20756__auto____1 = (function (state_21687){
while(true){
var ret_value__20757__auto__ = (function (){try{while(true){
var result__20758__auto__ = switch__20755__auto__.call(null,state_21687);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20758__auto__;
}
break;
}
}catch (e21709){if((e21709 instanceof Object)){
var ex__20759__auto__ = e21709;
var statearr_21710_21730 = state_21687;
(statearr_21710_21730[(5)] = ex__20759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21687);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21709;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21731 = state_21687;
state_21687 = G__21731;
continue;
} else {
return ret_value__20757__auto__;
}
break;
}
});
cljs$core$async$state_machine__20756__auto__ = function(state_21687){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20756__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20756__auto____1.call(this,state_21687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20756__auto____0;
cljs$core$async$state_machine__20756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20756__auto____1;
return cljs$core$async$state_machine__20756__auto__;
})()
;})(switch__20755__auto__,c__20867__auto__))
})();
var state__20869__auto__ = (function (){var statearr_21711 = f__20868__auto__.call(null);
(statearr_21711[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20867__auto__);

return statearr_21711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20869__auto__);
});})(c__20867__auto__))
);

return c__20867__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17481__auto__ = (((_ == null))?null:_);
var m__17482__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,_);
} else {
var m__17482__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17482__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,ch);
} else {
var m__17482__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m);
} else {
var m__17482__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async21953 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21953 = (function (mult,ch,cs,meta21954){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta21954 = meta21954;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21953.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21955,meta21954__$1){
var self__ = this;
var _21955__$1 = this;
return (new cljs.core.async.t_cljs$core$async21953(self__.mult,self__.ch,self__.cs,meta21954__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async21953.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21955){
var self__ = this;
var _21955__$1 = this;
return self__.meta21954;
});})(cs))
;

cljs.core.async.t_cljs$core$async21953.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21953.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async21953.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async21953.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21953.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21953.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21953.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta21954","meta21954",2120460267,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async21953.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21953.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21953";

cljs.core.async.t_cljs$core$async21953.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async21953");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async21953 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async21953(mult__$1,ch__$1,cs__$1,meta21954){
return (new cljs.core.async.t_cljs$core$async21953(mult__$1,ch__$1,cs__$1,meta21954));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async21953(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__20867__auto___22174 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20867__auto___22174,cs,m,dchan,dctr,done){
return (function (){
var f__20868__auto__ = (function (){var switch__20755__auto__ = ((function (c__20867__auto___22174,cs,m,dchan,dctr,done){
return (function (state_22086){
var state_val_22087 = (state_22086[(1)]);
if((state_val_22087 === (7))){
var inst_22082 = (state_22086[(2)]);
var state_22086__$1 = state_22086;
var statearr_22088_22175 = state_22086__$1;
(statearr_22088_22175[(2)] = inst_22082);

(statearr_22088_22175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22087 === (20))){
var inst_21987 = (state_22086[(7)]);
var inst_21997 = cljs.core.first.call(null,inst_21987);
var inst_21998 = cljs.core.nth.call(null,inst_21997,(0),null);
var inst_21999 = cljs.core.nth.call(null,inst_21997,(1),null);
var state_22086__$1 = (function (){var statearr_22089 = state_22086;
(statearr_22089[(8)] = inst_21998);

return statearr_22089;
})();
if(cljs.core.truth_(inst_21999)){
var statearr_22090_22176 = state_22086__$1;
(statearr_22090_22176[(1)] = (22));

} else {
var statearr_22091_22177 = state_22086__$1;
(statearr_22091_22177[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22087 === (27))){
var inst_21958 = (state_22086[(9)]);
var inst_22034 = (state_22086[(10)]);
var inst_22027 = (state_22086[(11)]);
var inst_22029 = (state_22086[(12)]);
var inst_22034__$1 = cljs.core._nth.call(null,inst_22027,inst_22029);
var inst_22035 = cljs.core.async.put_BANG_.call(null,inst_22034__$1,inst_21958,done);
var state_22086__$1 = (function (){var statearr_22092 = state_22086;
(statearr_22092[(10)] = inst_22034__$1);

return statearr_22092;
})();
if(cljs.core.truth_(inst_22035)){
var statearr_22093_22178 = state_22086__$1;
(statearr_22093_22178[(1)] = (30));

} else {
var statearr_22094_22179 = state_22086__$1;
(statearr_22094_22179[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22087 === (1))){
var state_22086__$1 = state_22086;
var statearr_22095_22180 = state_22086__$1;
(statearr_22095_22180[(2)] = null);

(statearr_22095_22180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22087 === (24))){
var inst_21987 = (state_22086[(7)]);
var inst_22004 = (state_22086[(2)]);
var inst_22005 = cljs.core.next.call(null,inst_21987);
var inst_21967 = inst_22005;
var inst_21968 = null;
var inst_21969 = (0);
var inst_21970 = (0);
var state_22086__$1 = (function (){var statearr_22096 = state_22086;
(statearr_22096[(13)] = inst_21968);

(statearr_22096[(14)] = inst_21969);

(statearr_22096[(15)] = inst_21970);

(statearr_22096[(16)] = inst_21967);

(statearr_22096[(17)] = inst_22004);

return statearr_22096;
})();
var statearr_22097_22181 = state_22086__$1;
(statearr_22097_22181[(2)] = null);

(statearr_22097_22181[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22087 === (39))){
var state_22086__$1 = state_22086;
var statearr_22101_22182 = state_22086__$1;
(statearr_22101_22182[(2)] = null);

(statearr_22101_22182[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22087 === (4))){
var inst_21958 = (state_22086[(9)]);
var inst_21958__$1 = (state_22086[(2)]);
var inst_21959 = (inst_21958__$1 == null);
var state_22086__$1 = (function (){var statearr_22102 = state_22086;
(statearr_22102[(9)] = inst_21958__$1);

return statearr_22102;
})();
if(cljs.core.truth_(inst_21959)){
var statearr_22103_22183 = state_22086__$1;
(statearr_22103_22183[(1)] = (5));

} else {
var statearr_22104_22184 = state_22086__$1;
(statearr_22104_22184[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22087 === (15))){
var inst_21968 = (state_22086[(13)]);
var inst_21969 = (state_22086[(14)]);
var inst_21970 = (state_22086[(15)]);
var inst_21967 = (state_22086[(16)]);
var inst_21983 = (state_22086[(2)]);
var inst_21984 = (inst_21970 + (1));
var tmp22098 = inst_21968;
var tmp22099 = inst_21969;
var tmp22100 = inst_21967;
var inst_21967__$1 = tmp22100;
var inst_21968__$1 = tmp22098;
var inst_21969__$1 = tmp22099;
var inst_21970__$1 = inst_21984;
var state_22086__$1 = (function (){var statearr_22105 = state_22086;
(statearr_22105[(13)] = inst_21968__$1);

(statearr_22105[(14)] = inst_21969__$1);

(statearr_22105[(18)] = inst_21983);

(statearr_22105[(15)] = inst_21970__$1);

(statearr_22105[(16)] = inst_21967__$1);

return statearr_22105;
})();
var statearr_22106_22185 = state_22086__$1;
(statearr_22106_22185[(2)] = null);

(statearr_22106_22185[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22087 === (21))){
var inst_22008 = (state_22086[(2)]);
var state_22086__$1 = state_22086;
var statearr_22110_22186 = state_22086__$1;
(statearr_22110_22186[(2)] = inst_22008);

(statearr_22110_22186[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22087 === (31))){
var inst_22034 = (state_22086[(10)]);
var inst_22038 = done.call(null,null);
var inst_22039 = cljs.core.async.untap_STAR_.call(null,m,inst_22034);
var state_22086__$1 = (function (){var statearr_22111 = state_22086;
(statearr_22111[(19)] = inst_22038);

return statearr_22111;
})();
var statearr_22112_22187 = state_22086__$1;
(statearr_22112_22187[(2)] = inst_22039);

(statearr_22112_22187[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22087 === (32))){
var inst_22028 = (state_22086[(20)]);
var inst_22026 = (state_22086[(21)]);
var inst_22027 = (state_22086[(11)]);
var inst_22029 = (state_22086[(12)]);
var inst_22041 = (state_22086[(2)]);
var inst_22042 = (inst_22029 + (1));
var tmp22107 = inst_22028;
var tmp22108 = inst_22026;
var tmp22109 = inst_22027;
var inst_22026__$1 = tmp22108;
var inst_22027__$1 = tmp22109;
var inst_22028__$1 = tmp22107;
var inst_22029__$1 = inst_22042;
var state_22086__$1 = (function (){var statearr_22113 = state_22086;
(statearr_22113[(22)] = inst_22041);

(statearr_22113[(20)] = inst_22028__$1);

(statearr_22113[(21)] = inst_22026__$1);

(statearr_22113[(11)] = inst_22027__$1);

(statearr_22113[(12)] = inst_22029__$1);

return statearr_22113;
})();
var statearr_22114_22188 = state_22086__$1;
(statearr_22114_22188[(2)] = null);

(statearr_22114_22188[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22087 === (40))){
var inst_22054 = (state_22086[(23)]);
var inst_22058 = done.call(null,null);
var inst_22059 = cljs.core.async.untap_STAR_.call(null,m,inst_22054);
var state_22086__$1 = (function (){var statearr_22115 = state_22086;
(statearr_22115[(24)] = inst_22058);

return statearr_22115;
})();
var statearr_22116_22189 = state_22086__$1;
(statearr_22116_22189[(2)] = inst_22059);

(statearr_22116_22189[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22087 === (33))){
var inst_22045 = (state_22086[(25)]);
var inst_22047 = cljs.core.chunked_seq_QMARK_.call(null,inst_22045);
var state_22086__$1 = state_22086;
if(inst_22047){
var statearr_22117_22190 = state_22086__$1;
(statearr_22117_22190[(1)] = (36));

} else {
var statearr_22118_22191 = state_22086__$1;
(statearr_22118_22191[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22087 === (13))){
var inst_21977 = (state_22086[(26)]);
var inst_21980 = cljs.core.async.close_BANG_.call(null,inst_21977);
var state_22086__$1 = state_22086;
var statearr_22119_22192 = state_22086__$1;
(statearr_22119_22192[(2)] = inst_21980);

(statearr_22119_22192[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22087 === (22))){
var inst_21998 = (state_22086[(8)]);
var inst_22001 = cljs.core.async.close_BANG_.call(null,inst_21998);
var state_22086__$1 = state_22086;
var statearr_22120_22193 = state_22086__$1;
(statearr_22120_22193[(2)] = inst_22001);

(statearr_22120_22193[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22087 === (36))){
var inst_22045 = (state_22086[(25)]);
var inst_22049 = cljs.core.chunk_first.call(null,inst_22045);
var inst_22050 = cljs.core.chunk_rest.call(null,inst_22045);
var inst_22051 = cljs.core.count.call(null,inst_22049);
var inst_22026 = inst_22050;
var inst_22027 = inst_22049;
var inst_22028 = inst_22051;
var inst_22029 = (0);
var state_22086__$1 = (function (){var statearr_22121 = state_22086;
(statearr_22121[(20)] = inst_22028);

(statearr_22121[(21)] = inst_22026);

(statearr_22121[(11)] = inst_22027);

(statearr_22121[(12)] = inst_22029);

return statearr_22121;
})();
var statearr_22122_22194 = state_22086__$1;
(statearr_22122_22194[(2)] = null);

(statearr_22122_22194[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22087 === (41))){
var inst_22045 = (state_22086[(25)]);
var inst_22061 = (state_22086[(2)]);
var inst_22062 = cljs.core.next.call(null,inst_22045);
var inst_22026 = inst_22062;
var inst_22027 = null;
var inst_22028 = (0);
var inst_22029 = (0);
var state_22086__$1 = (function (){var statearr_22123 = state_22086;
(statearr_22123[(20)] = inst_22028);

(statearr_22123[(27)] = inst_22061);

(statearr_22123[(21)] = inst_22026);

(statearr_22123[(11)] = inst_22027);

(statearr_22123[(12)] = inst_22029);

return statearr_22123;
})();
var statearr_22124_22195 = state_22086__$1;
(statearr_22124_22195[(2)] = null);

(statearr_22124_22195[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22087 === (43))){
var state_22086__$1 = state_22086;
var statearr_22125_22196 = state_22086__$1;
(statearr_22125_22196[(2)] = null);

(statearr_22125_22196[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22087 === (29))){
var inst_22070 = (state_22086[(2)]);
var state_22086__$1 = state_22086;
var statearr_22126_22197 = state_22086__$1;
(statearr_22126_22197[(2)] = inst_22070);

(statearr_22126_22197[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22087 === (44))){
var inst_22079 = (state_22086[(2)]);
var state_22086__$1 = (function (){var statearr_22127 = state_22086;
(statearr_22127[(28)] = inst_22079);

return statearr_22127;
})();
var statearr_22128_22198 = state_22086__$1;
(statearr_22128_22198[(2)] = null);

(statearr_22128_22198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22087 === (6))){
var inst_22018 = (state_22086[(29)]);
var inst_22017 = cljs.core.deref.call(null,cs);
var inst_22018__$1 = cljs.core.keys.call(null,inst_22017);
var inst_22019 = cljs.core.count.call(null,inst_22018__$1);
var inst_22020 = cljs.core.reset_BANG_.call(null,dctr,inst_22019);
var inst_22025 = cljs.core.seq.call(null,inst_22018__$1);
var inst_22026 = inst_22025;
var inst_22027 = null;
var inst_22028 = (0);
var inst_22029 = (0);
var state_22086__$1 = (function (){var statearr_22129 = state_22086;
(statearr_22129[(20)] = inst_22028);

(statearr_22129[(29)] = inst_22018__$1);

(statearr_22129[(21)] = inst_22026);

(statearr_22129[(11)] = inst_22027);

(statearr_22129[(30)] = inst_22020);

(statearr_22129[(12)] = inst_22029);

return statearr_22129;
})();
var statearr_22130_22199 = state_22086__$1;
(statearr_22130_22199[(2)] = null);

(statearr_22130_22199[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22087 === (28))){
var inst_22026 = (state_22086[(21)]);
var inst_22045 = (state_22086[(25)]);
var inst_22045__$1 = cljs.core.seq.call(null,inst_22026);
var state_22086__$1 = (function (){var statearr_22131 = state_22086;
(statearr_22131[(25)] = inst_22045__$1);

return statearr_22131;
})();
if(inst_22045__$1){
var statearr_22132_22200 = state_22086__$1;
(statearr_22132_22200[(1)] = (33));

} else {
var statearr_22133_22201 = state_22086__$1;
(statearr_22133_22201[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22087 === (25))){
var inst_22028 = (state_22086[(20)]);
var inst_22029 = (state_22086[(12)]);
var inst_22031 = (inst_22029 < inst_22028);
var inst_22032 = inst_22031;
var state_22086__$1 = state_22086;
if(cljs.core.truth_(inst_22032)){
var statearr_22134_22202 = state_22086__$1;
(statearr_22134_22202[(1)] = (27));

} else {
var statearr_22135_22203 = state_22086__$1;
(statearr_22135_22203[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22087 === (34))){
var state_22086__$1 = state_22086;
var statearr_22136_22204 = state_22086__$1;
(statearr_22136_22204[(2)] = null);

(statearr_22136_22204[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22087 === (17))){
var state_22086__$1 = state_22086;
var statearr_22137_22205 = state_22086__$1;
(statearr_22137_22205[(2)] = null);

(statearr_22137_22205[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22087 === (3))){
var inst_22084 = (state_22086[(2)]);
var state_22086__$1 = state_22086;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22086__$1,inst_22084);
} else {
if((state_val_22087 === (12))){
var inst_22013 = (state_22086[(2)]);
var state_22086__$1 = state_22086;
var statearr_22138_22206 = state_22086__$1;
(statearr_22138_22206[(2)] = inst_22013);

(statearr_22138_22206[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22087 === (2))){
var state_22086__$1 = state_22086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22086__$1,(4),ch);
} else {
if((state_val_22087 === (23))){
var state_22086__$1 = state_22086;
var statearr_22139_22207 = state_22086__$1;
(statearr_22139_22207[(2)] = null);

(statearr_22139_22207[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22087 === (35))){
var inst_22068 = (state_22086[(2)]);
var state_22086__$1 = state_22086;
var statearr_22140_22208 = state_22086__$1;
(statearr_22140_22208[(2)] = inst_22068);

(statearr_22140_22208[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22087 === (19))){
var inst_21987 = (state_22086[(7)]);
var inst_21991 = cljs.core.chunk_first.call(null,inst_21987);
var inst_21992 = cljs.core.chunk_rest.call(null,inst_21987);
var inst_21993 = cljs.core.count.call(null,inst_21991);
var inst_21967 = inst_21992;
var inst_21968 = inst_21991;
var inst_21969 = inst_21993;
var inst_21970 = (0);
var state_22086__$1 = (function (){var statearr_22141 = state_22086;
(statearr_22141[(13)] = inst_21968);

(statearr_22141[(14)] = inst_21969);

(statearr_22141[(15)] = inst_21970);

(statearr_22141[(16)] = inst_21967);

return statearr_22141;
})();
var statearr_22142_22209 = state_22086__$1;
(statearr_22142_22209[(2)] = null);

(statearr_22142_22209[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22087 === (11))){
var inst_21987 = (state_22086[(7)]);
var inst_21967 = (state_22086[(16)]);
var inst_21987__$1 = cljs.core.seq.call(null,inst_21967);
var state_22086__$1 = (function (){var statearr_22143 = state_22086;
(statearr_22143[(7)] = inst_21987__$1);

return statearr_22143;
})();
if(inst_21987__$1){
var statearr_22144_22210 = state_22086__$1;
(statearr_22144_22210[(1)] = (16));

} else {
var statearr_22145_22211 = state_22086__$1;
(statearr_22145_22211[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22087 === (9))){
var inst_22015 = (state_22086[(2)]);
var state_22086__$1 = state_22086;
var statearr_22146_22212 = state_22086__$1;
(statearr_22146_22212[(2)] = inst_22015);

(statearr_22146_22212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22087 === (5))){
var inst_21965 = cljs.core.deref.call(null,cs);
var inst_21966 = cljs.core.seq.call(null,inst_21965);
var inst_21967 = inst_21966;
var inst_21968 = null;
var inst_21969 = (0);
var inst_21970 = (0);
var state_22086__$1 = (function (){var statearr_22147 = state_22086;
(statearr_22147[(13)] = inst_21968);

(statearr_22147[(14)] = inst_21969);

(statearr_22147[(15)] = inst_21970);

(statearr_22147[(16)] = inst_21967);

return statearr_22147;
})();
var statearr_22148_22213 = state_22086__$1;
(statearr_22148_22213[(2)] = null);

(statearr_22148_22213[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22087 === (14))){
var state_22086__$1 = state_22086;
var statearr_22149_22214 = state_22086__$1;
(statearr_22149_22214[(2)] = null);

(statearr_22149_22214[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22087 === (45))){
var inst_22076 = (state_22086[(2)]);
var state_22086__$1 = state_22086;
var statearr_22150_22215 = state_22086__$1;
(statearr_22150_22215[(2)] = inst_22076);

(statearr_22150_22215[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22087 === (26))){
var inst_22018 = (state_22086[(29)]);
var inst_22072 = (state_22086[(2)]);
var inst_22073 = cljs.core.seq.call(null,inst_22018);
var state_22086__$1 = (function (){var statearr_22151 = state_22086;
(statearr_22151[(31)] = inst_22072);

return statearr_22151;
})();
if(inst_22073){
var statearr_22152_22216 = state_22086__$1;
(statearr_22152_22216[(1)] = (42));

} else {
var statearr_22153_22217 = state_22086__$1;
(statearr_22153_22217[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22087 === (16))){
var inst_21987 = (state_22086[(7)]);
var inst_21989 = cljs.core.chunked_seq_QMARK_.call(null,inst_21987);
var state_22086__$1 = state_22086;
if(inst_21989){
var statearr_22154_22218 = state_22086__$1;
(statearr_22154_22218[(1)] = (19));

} else {
var statearr_22155_22219 = state_22086__$1;
(statearr_22155_22219[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22087 === (38))){
var inst_22065 = (state_22086[(2)]);
var state_22086__$1 = state_22086;
var statearr_22156_22220 = state_22086__$1;
(statearr_22156_22220[(2)] = inst_22065);

(statearr_22156_22220[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22087 === (30))){
var state_22086__$1 = state_22086;
var statearr_22157_22221 = state_22086__$1;
(statearr_22157_22221[(2)] = null);

(statearr_22157_22221[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22087 === (10))){
var inst_21968 = (state_22086[(13)]);
var inst_21970 = (state_22086[(15)]);
var inst_21976 = cljs.core._nth.call(null,inst_21968,inst_21970);
var inst_21977 = cljs.core.nth.call(null,inst_21976,(0),null);
var inst_21978 = cljs.core.nth.call(null,inst_21976,(1),null);
var state_22086__$1 = (function (){var statearr_22158 = state_22086;
(statearr_22158[(26)] = inst_21977);

return statearr_22158;
})();
if(cljs.core.truth_(inst_21978)){
var statearr_22159_22222 = state_22086__$1;
(statearr_22159_22222[(1)] = (13));

} else {
var statearr_22160_22223 = state_22086__$1;
(statearr_22160_22223[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22087 === (18))){
var inst_22011 = (state_22086[(2)]);
var state_22086__$1 = state_22086;
var statearr_22161_22224 = state_22086__$1;
(statearr_22161_22224[(2)] = inst_22011);

(statearr_22161_22224[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22087 === (42))){
var state_22086__$1 = state_22086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22086__$1,(45),dchan);
} else {
if((state_val_22087 === (37))){
var inst_21958 = (state_22086[(9)]);
var inst_22045 = (state_22086[(25)]);
var inst_22054 = (state_22086[(23)]);
var inst_22054__$1 = cljs.core.first.call(null,inst_22045);
var inst_22055 = cljs.core.async.put_BANG_.call(null,inst_22054__$1,inst_21958,done);
var state_22086__$1 = (function (){var statearr_22162 = state_22086;
(statearr_22162[(23)] = inst_22054__$1);

return statearr_22162;
})();
if(cljs.core.truth_(inst_22055)){
var statearr_22163_22225 = state_22086__$1;
(statearr_22163_22225[(1)] = (39));

} else {
var statearr_22164_22226 = state_22086__$1;
(statearr_22164_22226[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22087 === (8))){
var inst_21969 = (state_22086[(14)]);
var inst_21970 = (state_22086[(15)]);
var inst_21972 = (inst_21970 < inst_21969);
var inst_21973 = inst_21972;
var state_22086__$1 = state_22086;
if(cljs.core.truth_(inst_21973)){
var statearr_22165_22227 = state_22086__$1;
(statearr_22165_22227[(1)] = (10));

} else {
var statearr_22166_22228 = state_22086__$1;
(statearr_22166_22228[(1)] = (11));

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
});})(c__20867__auto___22174,cs,m,dchan,dctr,done))
;
return ((function (switch__20755__auto__,c__20867__auto___22174,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20756__auto__ = null;
var cljs$core$async$mult_$_state_machine__20756__auto____0 = (function (){
var statearr_22170 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22170[(0)] = cljs$core$async$mult_$_state_machine__20756__auto__);

(statearr_22170[(1)] = (1));

return statearr_22170;
});
var cljs$core$async$mult_$_state_machine__20756__auto____1 = (function (state_22086){
while(true){
var ret_value__20757__auto__ = (function (){try{while(true){
var result__20758__auto__ = switch__20755__auto__.call(null,state_22086);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20758__auto__;
}
break;
}
}catch (e22171){if((e22171 instanceof Object)){
var ex__20759__auto__ = e22171;
var statearr_22172_22229 = state_22086;
(statearr_22172_22229[(5)] = ex__20759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22086);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22171;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22230 = state_22086;
state_22086 = G__22230;
continue;
} else {
return ret_value__20757__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20756__auto__ = function(state_22086){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20756__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20756__auto____1.call(this,state_22086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20756__auto____0;
cljs$core$async$mult_$_state_machine__20756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20756__auto____1;
return cljs$core$async$mult_$_state_machine__20756__auto__;
})()
;})(switch__20755__auto__,c__20867__auto___22174,cs,m,dchan,dctr,done))
})();
var state__20869__auto__ = (function (){var statearr_22173 = f__20868__auto__.call(null);
(statearr_22173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20867__auto___22174);

return statearr_22173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20869__auto__);
});})(c__20867__auto___22174,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args22231 = [];
var len__17884__auto___22234 = arguments.length;
var i__17885__auto___22235 = (0);
while(true){
if((i__17885__auto___22235 < len__17884__auto___22234)){
args22231.push((arguments[i__17885__auto___22235]));

var G__22236 = (i__17885__auto___22235 + (1));
i__17885__auto___22235 = G__22236;
continue;
} else {
}
break;
}

var G__22233 = args22231.length;
switch (G__22233) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22231.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,ch);
} else {
var m__17482__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,ch);
} else {
var m__17482__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m);
} else {
var m__17482__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,state_map);
} else {
var m__17482__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,mode);
} else {
var m__17482__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17891__auto__ = [];
var len__17884__auto___22248 = arguments.length;
var i__17885__auto___22249 = (0);
while(true){
if((i__17885__auto___22249 < len__17884__auto___22248)){
args__17891__auto__.push((arguments[i__17885__auto___22249]));

var G__22250 = (i__17885__auto___22249 + (1));
i__17885__auto___22249 = G__22250;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((3) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17892__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__22242){
var map__22243 = p__22242;
var map__22243__$1 = ((((!((map__22243 == null)))?((((map__22243.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22243.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22243):map__22243);
var opts = map__22243__$1;
var statearr_22245_22251 = state;
(statearr_22245_22251[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__22243,map__22243__$1,opts){
return (function (val){
var statearr_22246_22252 = state;
(statearr_22246_22252[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__22243,map__22243__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_22247_22253 = state;
(statearr_22247_22253[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq22238){
var G__22239 = cljs.core.first.call(null,seq22238);
var seq22238__$1 = cljs.core.next.call(null,seq22238);
var G__22240 = cljs.core.first.call(null,seq22238__$1);
var seq22238__$2 = cljs.core.next.call(null,seq22238__$1);
var G__22241 = cljs.core.first.call(null,seq22238__$2);
var seq22238__$3 = cljs.core.next.call(null,seq22238__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22239,G__22240,G__22241,seq22238__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async22417 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22417 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22418){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta22418 = meta22418;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22417.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22419,meta22418__$1){
var self__ = this;
var _22419__$1 = this;
return (new cljs.core.async.t_cljs$core$async22417(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta22418__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22417.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22419){
var self__ = this;
var _22419__$1 = this;
return self__.meta22418;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22417.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22417.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22417.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async22417.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22417.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22417.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22417.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22417.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22417.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta22418","meta22418",-1177801220,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22417.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22417.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22417";

cljs.core.async.t_cljs$core$async22417.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async22417");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async22417 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async22417(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22418){
return (new cljs.core.async.t_cljs$core$async22417(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22418));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async22417(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20867__auto___22580 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20867__auto___22580,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20868__auto__ = (function (){var switch__20755__auto__ = ((function (c__20867__auto___22580,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22517){
var state_val_22518 = (state_22517[(1)]);
if((state_val_22518 === (7))){
var inst_22435 = (state_22517[(2)]);
var state_22517__$1 = state_22517;
var statearr_22519_22581 = state_22517__$1;
(statearr_22519_22581[(2)] = inst_22435);

(statearr_22519_22581[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22518 === (20))){
var inst_22447 = (state_22517[(7)]);
var state_22517__$1 = state_22517;
var statearr_22520_22582 = state_22517__$1;
(statearr_22520_22582[(2)] = inst_22447);

(statearr_22520_22582[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22518 === (27))){
var state_22517__$1 = state_22517;
var statearr_22521_22583 = state_22517__$1;
(statearr_22521_22583[(2)] = null);

(statearr_22521_22583[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22518 === (1))){
var inst_22423 = (state_22517[(8)]);
var inst_22423__$1 = calc_state.call(null);
var inst_22425 = (inst_22423__$1 == null);
var inst_22426 = cljs.core.not.call(null,inst_22425);
var state_22517__$1 = (function (){var statearr_22522 = state_22517;
(statearr_22522[(8)] = inst_22423__$1);

return statearr_22522;
})();
if(inst_22426){
var statearr_22523_22584 = state_22517__$1;
(statearr_22523_22584[(1)] = (2));

} else {
var statearr_22524_22585 = state_22517__$1;
(statearr_22524_22585[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22518 === (24))){
var inst_22477 = (state_22517[(9)]);
var inst_22470 = (state_22517[(10)]);
var inst_22491 = (state_22517[(11)]);
var inst_22491__$1 = inst_22470.call(null,inst_22477);
var state_22517__$1 = (function (){var statearr_22525 = state_22517;
(statearr_22525[(11)] = inst_22491__$1);

return statearr_22525;
})();
if(cljs.core.truth_(inst_22491__$1)){
var statearr_22526_22586 = state_22517__$1;
(statearr_22526_22586[(1)] = (29));

} else {
var statearr_22527_22587 = state_22517__$1;
(statearr_22527_22587[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22518 === (4))){
var inst_22438 = (state_22517[(2)]);
var state_22517__$1 = state_22517;
if(cljs.core.truth_(inst_22438)){
var statearr_22528_22588 = state_22517__$1;
(statearr_22528_22588[(1)] = (8));

} else {
var statearr_22529_22589 = state_22517__$1;
(statearr_22529_22589[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22518 === (15))){
var inst_22464 = (state_22517[(2)]);
var state_22517__$1 = state_22517;
if(cljs.core.truth_(inst_22464)){
var statearr_22530_22590 = state_22517__$1;
(statearr_22530_22590[(1)] = (19));

} else {
var statearr_22531_22591 = state_22517__$1;
(statearr_22531_22591[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22518 === (21))){
var inst_22469 = (state_22517[(12)]);
var inst_22469__$1 = (state_22517[(2)]);
var inst_22470 = cljs.core.get.call(null,inst_22469__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22471 = cljs.core.get.call(null,inst_22469__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22472 = cljs.core.get.call(null,inst_22469__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_22517__$1 = (function (){var statearr_22532 = state_22517;
(statearr_22532[(13)] = inst_22471);

(statearr_22532[(12)] = inst_22469__$1);

(statearr_22532[(10)] = inst_22470);

return statearr_22532;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_22517__$1,(22),inst_22472);
} else {
if((state_val_22518 === (31))){
var inst_22499 = (state_22517[(2)]);
var state_22517__$1 = state_22517;
if(cljs.core.truth_(inst_22499)){
var statearr_22533_22592 = state_22517__$1;
(statearr_22533_22592[(1)] = (32));

} else {
var statearr_22534_22593 = state_22517__$1;
(statearr_22534_22593[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22518 === (32))){
var inst_22476 = (state_22517[(14)]);
var state_22517__$1 = state_22517;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22517__$1,(35),out,inst_22476);
} else {
if((state_val_22518 === (33))){
var inst_22469 = (state_22517[(12)]);
var inst_22447 = inst_22469;
var state_22517__$1 = (function (){var statearr_22535 = state_22517;
(statearr_22535[(7)] = inst_22447);

return statearr_22535;
})();
var statearr_22536_22594 = state_22517__$1;
(statearr_22536_22594[(2)] = null);

(statearr_22536_22594[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22518 === (13))){
var inst_22447 = (state_22517[(7)]);
var inst_22454 = inst_22447.cljs$lang$protocol_mask$partition0$;
var inst_22455 = (inst_22454 & (64));
var inst_22456 = inst_22447.cljs$core$ISeq$;
var inst_22457 = (inst_22455) || (inst_22456);
var state_22517__$1 = state_22517;
if(cljs.core.truth_(inst_22457)){
var statearr_22537_22595 = state_22517__$1;
(statearr_22537_22595[(1)] = (16));

} else {
var statearr_22538_22596 = state_22517__$1;
(statearr_22538_22596[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22518 === (22))){
var inst_22477 = (state_22517[(9)]);
var inst_22476 = (state_22517[(14)]);
var inst_22475 = (state_22517[(2)]);
var inst_22476__$1 = cljs.core.nth.call(null,inst_22475,(0),null);
var inst_22477__$1 = cljs.core.nth.call(null,inst_22475,(1),null);
var inst_22478 = (inst_22476__$1 == null);
var inst_22479 = cljs.core._EQ_.call(null,inst_22477__$1,change);
var inst_22480 = (inst_22478) || (inst_22479);
var state_22517__$1 = (function (){var statearr_22539 = state_22517;
(statearr_22539[(9)] = inst_22477__$1);

(statearr_22539[(14)] = inst_22476__$1);

return statearr_22539;
})();
if(cljs.core.truth_(inst_22480)){
var statearr_22540_22597 = state_22517__$1;
(statearr_22540_22597[(1)] = (23));

} else {
var statearr_22541_22598 = state_22517__$1;
(statearr_22541_22598[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22518 === (36))){
var inst_22469 = (state_22517[(12)]);
var inst_22447 = inst_22469;
var state_22517__$1 = (function (){var statearr_22542 = state_22517;
(statearr_22542[(7)] = inst_22447);

return statearr_22542;
})();
var statearr_22543_22599 = state_22517__$1;
(statearr_22543_22599[(2)] = null);

(statearr_22543_22599[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22518 === (29))){
var inst_22491 = (state_22517[(11)]);
var state_22517__$1 = state_22517;
var statearr_22544_22600 = state_22517__$1;
(statearr_22544_22600[(2)] = inst_22491);

(statearr_22544_22600[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22518 === (6))){
var state_22517__$1 = state_22517;
var statearr_22545_22601 = state_22517__$1;
(statearr_22545_22601[(2)] = false);

(statearr_22545_22601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22518 === (28))){
var inst_22487 = (state_22517[(2)]);
var inst_22488 = calc_state.call(null);
var inst_22447 = inst_22488;
var state_22517__$1 = (function (){var statearr_22546 = state_22517;
(statearr_22546[(7)] = inst_22447);

(statearr_22546[(15)] = inst_22487);

return statearr_22546;
})();
var statearr_22547_22602 = state_22517__$1;
(statearr_22547_22602[(2)] = null);

(statearr_22547_22602[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22518 === (25))){
var inst_22513 = (state_22517[(2)]);
var state_22517__$1 = state_22517;
var statearr_22548_22603 = state_22517__$1;
(statearr_22548_22603[(2)] = inst_22513);

(statearr_22548_22603[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22518 === (34))){
var inst_22511 = (state_22517[(2)]);
var state_22517__$1 = state_22517;
var statearr_22549_22604 = state_22517__$1;
(statearr_22549_22604[(2)] = inst_22511);

(statearr_22549_22604[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22518 === (17))){
var state_22517__$1 = state_22517;
var statearr_22550_22605 = state_22517__$1;
(statearr_22550_22605[(2)] = false);

(statearr_22550_22605[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22518 === (3))){
var state_22517__$1 = state_22517;
var statearr_22551_22606 = state_22517__$1;
(statearr_22551_22606[(2)] = false);

(statearr_22551_22606[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22518 === (12))){
var inst_22515 = (state_22517[(2)]);
var state_22517__$1 = state_22517;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22517__$1,inst_22515);
} else {
if((state_val_22518 === (2))){
var inst_22423 = (state_22517[(8)]);
var inst_22428 = inst_22423.cljs$lang$protocol_mask$partition0$;
var inst_22429 = (inst_22428 & (64));
var inst_22430 = inst_22423.cljs$core$ISeq$;
var inst_22431 = (inst_22429) || (inst_22430);
var state_22517__$1 = state_22517;
if(cljs.core.truth_(inst_22431)){
var statearr_22552_22607 = state_22517__$1;
(statearr_22552_22607[(1)] = (5));

} else {
var statearr_22553_22608 = state_22517__$1;
(statearr_22553_22608[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22518 === (23))){
var inst_22476 = (state_22517[(14)]);
var inst_22482 = (inst_22476 == null);
var state_22517__$1 = state_22517;
if(cljs.core.truth_(inst_22482)){
var statearr_22554_22609 = state_22517__$1;
(statearr_22554_22609[(1)] = (26));

} else {
var statearr_22555_22610 = state_22517__$1;
(statearr_22555_22610[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22518 === (35))){
var inst_22502 = (state_22517[(2)]);
var state_22517__$1 = state_22517;
if(cljs.core.truth_(inst_22502)){
var statearr_22556_22611 = state_22517__$1;
(statearr_22556_22611[(1)] = (36));

} else {
var statearr_22557_22612 = state_22517__$1;
(statearr_22557_22612[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22518 === (19))){
var inst_22447 = (state_22517[(7)]);
var inst_22466 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22447);
var state_22517__$1 = state_22517;
var statearr_22558_22613 = state_22517__$1;
(statearr_22558_22613[(2)] = inst_22466);

(statearr_22558_22613[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22518 === (11))){
var inst_22447 = (state_22517[(7)]);
var inst_22451 = (inst_22447 == null);
var inst_22452 = cljs.core.not.call(null,inst_22451);
var state_22517__$1 = state_22517;
if(inst_22452){
var statearr_22559_22614 = state_22517__$1;
(statearr_22559_22614[(1)] = (13));

} else {
var statearr_22560_22615 = state_22517__$1;
(statearr_22560_22615[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22518 === (9))){
var inst_22423 = (state_22517[(8)]);
var state_22517__$1 = state_22517;
var statearr_22561_22616 = state_22517__$1;
(statearr_22561_22616[(2)] = inst_22423);

(statearr_22561_22616[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22518 === (5))){
var state_22517__$1 = state_22517;
var statearr_22562_22617 = state_22517__$1;
(statearr_22562_22617[(2)] = true);

(statearr_22562_22617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22518 === (14))){
var state_22517__$1 = state_22517;
var statearr_22563_22618 = state_22517__$1;
(statearr_22563_22618[(2)] = false);

(statearr_22563_22618[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22518 === (26))){
var inst_22477 = (state_22517[(9)]);
var inst_22484 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22477);
var state_22517__$1 = state_22517;
var statearr_22564_22619 = state_22517__$1;
(statearr_22564_22619[(2)] = inst_22484);

(statearr_22564_22619[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22518 === (16))){
var state_22517__$1 = state_22517;
var statearr_22565_22620 = state_22517__$1;
(statearr_22565_22620[(2)] = true);

(statearr_22565_22620[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22518 === (38))){
var inst_22507 = (state_22517[(2)]);
var state_22517__$1 = state_22517;
var statearr_22566_22621 = state_22517__$1;
(statearr_22566_22621[(2)] = inst_22507);

(statearr_22566_22621[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22518 === (30))){
var inst_22477 = (state_22517[(9)]);
var inst_22471 = (state_22517[(13)]);
var inst_22470 = (state_22517[(10)]);
var inst_22494 = cljs.core.empty_QMARK_.call(null,inst_22470);
var inst_22495 = inst_22471.call(null,inst_22477);
var inst_22496 = cljs.core.not.call(null,inst_22495);
var inst_22497 = (inst_22494) && (inst_22496);
var state_22517__$1 = state_22517;
var statearr_22567_22622 = state_22517__$1;
(statearr_22567_22622[(2)] = inst_22497);

(statearr_22567_22622[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22518 === (10))){
var inst_22423 = (state_22517[(8)]);
var inst_22443 = (state_22517[(2)]);
var inst_22444 = cljs.core.get.call(null,inst_22443,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22445 = cljs.core.get.call(null,inst_22443,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22446 = cljs.core.get.call(null,inst_22443,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22447 = inst_22423;
var state_22517__$1 = (function (){var statearr_22568 = state_22517;
(statearr_22568[(16)] = inst_22444);

(statearr_22568[(17)] = inst_22445);

(statearr_22568[(7)] = inst_22447);

(statearr_22568[(18)] = inst_22446);

return statearr_22568;
})();
var statearr_22569_22623 = state_22517__$1;
(statearr_22569_22623[(2)] = null);

(statearr_22569_22623[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22518 === (18))){
var inst_22461 = (state_22517[(2)]);
var state_22517__$1 = state_22517;
var statearr_22570_22624 = state_22517__$1;
(statearr_22570_22624[(2)] = inst_22461);

(statearr_22570_22624[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22518 === (37))){
var state_22517__$1 = state_22517;
var statearr_22571_22625 = state_22517__$1;
(statearr_22571_22625[(2)] = null);

(statearr_22571_22625[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22518 === (8))){
var inst_22423 = (state_22517[(8)]);
var inst_22440 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22423);
var state_22517__$1 = state_22517;
var statearr_22572_22626 = state_22517__$1;
(statearr_22572_22626[(2)] = inst_22440);

(statearr_22572_22626[(1)] = (10));


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
});})(c__20867__auto___22580,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20755__auto__,c__20867__auto___22580,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20756__auto__ = null;
var cljs$core$async$mix_$_state_machine__20756__auto____0 = (function (){
var statearr_22576 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22576[(0)] = cljs$core$async$mix_$_state_machine__20756__auto__);

(statearr_22576[(1)] = (1));

return statearr_22576;
});
var cljs$core$async$mix_$_state_machine__20756__auto____1 = (function (state_22517){
while(true){
var ret_value__20757__auto__ = (function (){try{while(true){
var result__20758__auto__ = switch__20755__auto__.call(null,state_22517);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20758__auto__;
}
break;
}
}catch (e22577){if((e22577 instanceof Object)){
var ex__20759__auto__ = e22577;
var statearr_22578_22627 = state_22517;
(statearr_22578_22627[(5)] = ex__20759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22517);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22577;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22628 = state_22517;
state_22517 = G__22628;
continue;
} else {
return ret_value__20757__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20756__auto__ = function(state_22517){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20756__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20756__auto____1.call(this,state_22517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20756__auto____0;
cljs$core$async$mix_$_state_machine__20756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20756__auto____1;
return cljs$core$async$mix_$_state_machine__20756__auto__;
})()
;})(switch__20755__auto__,c__20867__auto___22580,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20869__auto__ = (function (){var statearr_22579 = f__20868__auto__.call(null);
(statearr_22579[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20867__auto___22580);

return statearr_22579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20869__auto__);
});})(c__20867__auto___22580,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17481__auto__ = (((p == null))?null:p);
var m__17482__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17482__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17481__auto__ = (((p == null))?null:p);
var m__17482__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,p,v,ch);
} else {
var m__17482__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args22629 = [];
var len__17884__auto___22632 = arguments.length;
var i__17885__auto___22633 = (0);
while(true){
if((i__17885__auto___22633 < len__17884__auto___22632)){
args22629.push((arguments[i__17885__auto___22633]));

var G__22634 = (i__17885__auto___22633 + (1));
i__17885__auto___22633 = G__22634;
continue;
} else {
}
break;
}

var G__22631 = args22629.length;
switch (G__22631) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22629.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17481__auto__ = (((p == null))?null:p);
var m__17482__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,p);
} else {
var m__17482__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17481__auto__ = (((p == null))?null:p);
var m__17482__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,p,v);
} else {
var m__17482__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args22637 = [];
var len__17884__auto___22762 = arguments.length;
var i__17885__auto___22763 = (0);
while(true){
if((i__17885__auto___22763 < len__17884__auto___22762)){
args22637.push((arguments[i__17885__auto___22763]));

var G__22764 = (i__17885__auto___22763 + (1));
i__17885__auto___22763 = G__22764;
continue;
} else {
}
break;
}

var G__22639 = args22637.length;
switch (G__22639) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22637.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16826__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16826__auto__,mults){
return (function (p1__22636_SHARP_){
if(cljs.core.truth_(p1__22636_SHARP_.call(null,topic))){
return p1__22636_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22636_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16826__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async22640 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22640 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta22641){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta22641 = meta22641;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22640.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22642,meta22641__$1){
var self__ = this;
var _22642__$1 = this;
return (new cljs.core.async.t_cljs$core$async22640(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta22641__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22640.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22642){
var self__ = this;
var _22642__$1 = this;
return self__.meta22641;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22640.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22640.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22640.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async22640.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22640.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22640.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22640.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22640.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta22641","meta22641",-2101747305,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22640.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22640.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22640";

cljs.core.async.t_cljs$core$async22640.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async22640");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async22640 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async22640(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22641){
return (new cljs.core.async.t_cljs$core$async22640(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22641));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async22640(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20867__auto___22766 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20867__auto___22766,mults,ensure_mult,p){
return (function (){
var f__20868__auto__ = (function (){var switch__20755__auto__ = ((function (c__20867__auto___22766,mults,ensure_mult,p){
return (function (state_22714){
var state_val_22715 = (state_22714[(1)]);
if((state_val_22715 === (7))){
var inst_22710 = (state_22714[(2)]);
var state_22714__$1 = state_22714;
var statearr_22716_22767 = state_22714__$1;
(statearr_22716_22767[(2)] = inst_22710);

(statearr_22716_22767[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22715 === (20))){
var state_22714__$1 = state_22714;
var statearr_22717_22768 = state_22714__$1;
(statearr_22717_22768[(2)] = null);

(statearr_22717_22768[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22715 === (1))){
var state_22714__$1 = state_22714;
var statearr_22718_22769 = state_22714__$1;
(statearr_22718_22769[(2)] = null);

(statearr_22718_22769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22715 === (24))){
var inst_22693 = (state_22714[(7)]);
var inst_22702 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22693);
var state_22714__$1 = state_22714;
var statearr_22719_22770 = state_22714__$1;
(statearr_22719_22770[(2)] = inst_22702);

(statearr_22719_22770[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22715 === (4))){
var inst_22645 = (state_22714[(8)]);
var inst_22645__$1 = (state_22714[(2)]);
var inst_22646 = (inst_22645__$1 == null);
var state_22714__$1 = (function (){var statearr_22720 = state_22714;
(statearr_22720[(8)] = inst_22645__$1);

return statearr_22720;
})();
if(cljs.core.truth_(inst_22646)){
var statearr_22721_22771 = state_22714__$1;
(statearr_22721_22771[(1)] = (5));

} else {
var statearr_22722_22772 = state_22714__$1;
(statearr_22722_22772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22715 === (15))){
var inst_22687 = (state_22714[(2)]);
var state_22714__$1 = state_22714;
var statearr_22723_22773 = state_22714__$1;
(statearr_22723_22773[(2)] = inst_22687);

(statearr_22723_22773[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22715 === (21))){
var inst_22707 = (state_22714[(2)]);
var state_22714__$1 = (function (){var statearr_22724 = state_22714;
(statearr_22724[(9)] = inst_22707);

return statearr_22724;
})();
var statearr_22725_22774 = state_22714__$1;
(statearr_22725_22774[(2)] = null);

(statearr_22725_22774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22715 === (13))){
var inst_22669 = (state_22714[(10)]);
var inst_22671 = cljs.core.chunked_seq_QMARK_.call(null,inst_22669);
var state_22714__$1 = state_22714;
if(inst_22671){
var statearr_22726_22775 = state_22714__$1;
(statearr_22726_22775[(1)] = (16));

} else {
var statearr_22727_22776 = state_22714__$1;
(statearr_22727_22776[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22715 === (22))){
var inst_22699 = (state_22714[(2)]);
var state_22714__$1 = state_22714;
if(cljs.core.truth_(inst_22699)){
var statearr_22728_22777 = state_22714__$1;
(statearr_22728_22777[(1)] = (23));

} else {
var statearr_22729_22778 = state_22714__$1;
(statearr_22729_22778[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22715 === (6))){
var inst_22695 = (state_22714[(11)]);
var inst_22693 = (state_22714[(7)]);
var inst_22645 = (state_22714[(8)]);
var inst_22693__$1 = topic_fn.call(null,inst_22645);
var inst_22694 = cljs.core.deref.call(null,mults);
var inst_22695__$1 = cljs.core.get.call(null,inst_22694,inst_22693__$1);
var state_22714__$1 = (function (){var statearr_22730 = state_22714;
(statearr_22730[(11)] = inst_22695__$1);

(statearr_22730[(7)] = inst_22693__$1);

return statearr_22730;
})();
if(cljs.core.truth_(inst_22695__$1)){
var statearr_22731_22779 = state_22714__$1;
(statearr_22731_22779[(1)] = (19));

} else {
var statearr_22732_22780 = state_22714__$1;
(statearr_22732_22780[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22715 === (25))){
var inst_22704 = (state_22714[(2)]);
var state_22714__$1 = state_22714;
var statearr_22733_22781 = state_22714__$1;
(statearr_22733_22781[(2)] = inst_22704);

(statearr_22733_22781[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22715 === (17))){
var inst_22669 = (state_22714[(10)]);
var inst_22678 = cljs.core.first.call(null,inst_22669);
var inst_22679 = cljs.core.async.muxch_STAR_.call(null,inst_22678);
var inst_22680 = cljs.core.async.close_BANG_.call(null,inst_22679);
var inst_22681 = cljs.core.next.call(null,inst_22669);
var inst_22655 = inst_22681;
var inst_22656 = null;
var inst_22657 = (0);
var inst_22658 = (0);
var state_22714__$1 = (function (){var statearr_22734 = state_22714;
(statearr_22734[(12)] = inst_22655);

(statearr_22734[(13)] = inst_22680);

(statearr_22734[(14)] = inst_22656);

(statearr_22734[(15)] = inst_22657);

(statearr_22734[(16)] = inst_22658);

return statearr_22734;
})();
var statearr_22735_22782 = state_22714__$1;
(statearr_22735_22782[(2)] = null);

(statearr_22735_22782[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22715 === (3))){
var inst_22712 = (state_22714[(2)]);
var state_22714__$1 = state_22714;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22714__$1,inst_22712);
} else {
if((state_val_22715 === (12))){
var inst_22689 = (state_22714[(2)]);
var state_22714__$1 = state_22714;
var statearr_22736_22783 = state_22714__$1;
(statearr_22736_22783[(2)] = inst_22689);

(statearr_22736_22783[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22715 === (2))){
var state_22714__$1 = state_22714;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22714__$1,(4),ch);
} else {
if((state_val_22715 === (23))){
var state_22714__$1 = state_22714;
var statearr_22737_22784 = state_22714__$1;
(statearr_22737_22784[(2)] = null);

(statearr_22737_22784[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22715 === (19))){
var inst_22695 = (state_22714[(11)]);
var inst_22645 = (state_22714[(8)]);
var inst_22697 = cljs.core.async.muxch_STAR_.call(null,inst_22695);
var state_22714__$1 = state_22714;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22714__$1,(22),inst_22697,inst_22645);
} else {
if((state_val_22715 === (11))){
var inst_22655 = (state_22714[(12)]);
var inst_22669 = (state_22714[(10)]);
var inst_22669__$1 = cljs.core.seq.call(null,inst_22655);
var state_22714__$1 = (function (){var statearr_22738 = state_22714;
(statearr_22738[(10)] = inst_22669__$1);

return statearr_22738;
})();
if(inst_22669__$1){
var statearr_22739_22785 = state_22714__$1;
(statearr_22739_22785[(1)] = (13));

} else {
var statearr_22740_22786 = state_22714__$1;
(statearr_22740_22786[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22715 === (9))){
var inst_22691 = (state_22714[(2)]);
var state_22714__$1 = state_22714;
var statearr_22741_22787 = state_22714__$1;
(statearr_22741_22787[(2)] = inst_22691);

(statearr_22741_22787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22715 === (5))){
var inst_22652 = cljs.core.deref.call(null,mults);
var inst_22653 = cljs.core.vals.call(null,inst_22652);
var inst_22654 = cljs.core.seq.call(null,inst_22653);
var inst_22655 = inst_22654;
var inst_22656 = null;
var inst_22657 = (0);
var inst_22658 = (0);
var state_22714__$1 = (function (){var statearr_22742 = state_22714;
(statearr_22742[(12)] = inst_22655);

(statearr_22742[(14)] = inst_22656);

(statearr_22742[(15)] = inst_22657);

(statearr_22742[(16)] = inst_22658);

return statearr_22742;
})();
var statearr_22743_22788 = state_22714__$1;
(statearr_22743_22788[(2)] = null);

(statearr_22743_22788[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22715 === (14))){
var state_22714__$1 = state_22714;
var statearr_22747_22789 = state_22714__$1;
(statearr_22747_22789[(2)] = null);

(statearr_22747_22789[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22715 === (16))){
var inst_22669 = (state_22714[(10)]);
var inst_22673 = cljs.core.chunk_first.call(null,inst_22669);
var inst_22674 = cljs.core.chunk_rest.call(null,inst_22669);
var inst_22675 = cljs.core.count.call(null,inst_22673);
var inst_22655 = inst_22674;
var inst_22656 = inst_22673;
var inst_22657 = inst_22675;
var inst_22658 = (0);
var state_22714__$1 = (function (){var statearr_22748 = state_22714;
(statearr_22748[(12)] = inst_22655);

(statearr_22748[(14)] = inst_22656);

(statearr_22748[(15)] = inst_22657);

(statearr_22748[(16)] = inst_22658);

return statearr_22748;
})();
var statearr_22749_22790 = state_22714__$1;
(statearr_22749_22790[(2)] = null);

(statearr_22749_22790[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22715 === (10))){
var inst_22655 = (state_22714[(12)]);
var inst_22656 = (state_22714[(14)]);
var inst_22657 = (state_22714[(15)]);
var inst_22658 = (state_22714[(16)]);
var inst_22663 = cljs.core._nth.call(null,inst_22656,inst_22658);
var inst_22664 = cljs.core.async.muxch_STAR_.call(null,inst_22663);
var inst_22665 = cljs.core.async.close_BANG_.call(null,inst_22664);
var inst_22666 = (inst_22658 + (1));
var tmp22744 = inst_22655;
var tmp22745 = inst_22656;
var tmp22746 = inst_22657;
var inst_22655__$1 = tmp22744;
var inst_22656__$1 = tmp22745;
var inst_22657__$1 = tmp22746;
var inst_22658__$1 = inst_22666;
var state_22714__$1 = (function (){var statearr_22750 = state_22714;
(statearr_22750[(12)] = inst_22655__$1);

(statearr_22750[(14)] = inst_22656__$1);

(statearr_22750[(15)] = inst_22657__$1);

(statearr_22750[(17)] = inst_22665);

(statearr_22750[(16)] = inst_22658__$1);

return statearr_22750;
})();
var statearr_22751_22791 = state_22714__$1;
(statearr_22751_22791[(2)] = null);

(statearr_22751_22791[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22715 === (18))){
var inst_22684 = (state_22714[(2)]);
var state_22714__$1 = state_22714;
var statearr_22752_22792 = state_22714__$1;
(statearr_22752_22792[(2)] = inst_22684);

(statearr_22752_22792[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22715 === (8))){
var inst_22657 = (state_22714[(15)]);
var inst_22658 = (state_22714[(16)]);
var inst_22660 = (inst_22658 < inst_22657);
var inst_22661 = inst_22660;
var state_22714__$1 = state_22714;
if(cljs.core.truth_(inst_22661)){
var statearr_22753_22793 = state_22714__$1;
(statearr_22753_22793[(1)] = (10));

} else {
var statearr_22754_22794 = state_22714__$1;
(statearr_22754_22794[(1)] = (11));

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
});})(c__20867__auto___22766,mults,ensure_mult,p))
;
return ((function (switch__20755__auto__,c__20867__auto___22766,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20756__auto__ = null;
var cljs$core$async$state_machine__20756__auto____0 = (function (){
var statearr_22758 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22758[(0)] = cljs$core$async$state_machine__20756__auto__);

(statearr_22758[(1)] = (1));

return statearr_22758;
});
var cljs$core$async$state_machine__20756__auto____1 = (function (state_22714){
while(true){
var ret_value__20757__auto__ = (function (){try{while(true){
var result__20758__auto__ = switch__20755__auto__.call(null,state_22714);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20758__auto__;
}
break;
}
}catch (e22759){if((e22759 instanceof Object)){
var ex__20759__auto__ = e22759;
var statearr_22760_22795 = state_22714;
(statearr_22760_22795[(5)] = ex__20759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22714);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22759;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22796 = state_22714;
state_22714 = G__22796;
continue;
} else {
return ret_value__20757__auto__;
}
break;
}
});
cljs$core$async$state_machine__20756__auto__ = function(state_22714){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20756__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20756__auto____1.call(this,state_22714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20756__auto____0;
cljs$core$async$state_machine__20756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20756__auto____1;
return cljs$core$async$state_machine__20756__auto__;
})()
;})(switch__20755__auto__,c__20867__auto___22766,mults,ensure_mult,p))
})();
var state__20869__auto__ = (function (){var statearr_22761 = f__20868__auto__.call(null);
(statearr_22761[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20867__auto___22766);

return statearr_22761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20869__auto__);
});})(c__20867__auto___22766,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args22797 = [];
var len__17884__auto___22800 = arguments.length;
var i__17885__auto___22801 = (0);
while(true){
if((i__17885__auto___22801 < len__17884__auto___22800)){
args22797.push((arguments[i__17885__auto___22801]));

var G__22802 = (i__17885__auto___22801 + (1));
i__17885__auto___22801 = G__22802;
continue;
} else {
}
break;
}

var G__22799 = args22797.length;
switch (G__22799) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22797.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args22804 = [];
var len__17884__auto___22807 = arguments.length;
var i__17885__auto___22808 = (0);
while(true){
if((i__17885__auto___22808 < len__17884__auto___22807)){
args22804.push((arguments[i__17885__auto___22808]));

var G__22809 = (i__17885__auto___22808 + (1));
i__17885__auto___22808 = G__22809;
continue;
} else {
}
break;
}

var G__22806 = args22804.length;
switch (G__22806) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22804.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args22811 = [];
var len__17884__auto___22882 = arguments.length;
var i__17885__auto___22883 = (0);
while(true){
if((i__17885__auto___22883 < len__17884__auto___22882)){
args22811.push((arguments[i__17885__auto___22883]));

var G__22884 = (i__17885__auto___22883 + (1));
i__17885__auto___22883 = G__22884;
continue;
} else {
}
break;
}

var G__22813 = args22811.length;
switch (G__22813) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22811.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__20867__auto___22886 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20867__auto___22886,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20868__auto__ = (function (){var switch__20755__auto__ = ((function (c__20867__auto___22886,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22852){
var state_val_22853 = (state_22852[(1)]);
if((state_val_22853 === (7))){
var state_22852__$1 = state_22852;
var statearr_22854_22887 = state_22852__$1;
(statearr_22854_22887[(2)] = null);

(statearr_22854_22887[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22853 === (1))){
var state_22852__$1 = state_22852;
var statearr_22855_22888 = state_22852__$1;
(statearr_22855_22888[(2)] = null);

(statearr_22855_22888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22853 === (4))){
var inst_22816 = (state_22852[(7)]);
var inst_22818 = (inst_22816 < cnt);
var state_22852__$1 = state_22852;
if(cljs.core.truth_(inst_22818)){
var statearr_22856_22889 = state_22852__$1;
(statearr_22856_22889[(1)] = (6));

} else {
var statearr_22857_22890 = state_22852__$1;
(statearr_22857_22890[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22853 === (15))){
var inst_22848 = (state_22852[(2)]);
var state_22852__$1 = state_22852;
var statearr_22858_22891 = state_22852__$1;
(statearr_22858_22891[(2)] = inst_22848);

(statearr_22858_22891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22853 === (13))){
var inst_22841 = cljs.core.async.close_BANG_.call(null,out);
var state_22852__$1 = state_22852;
var statearr_22859_22892 = state_22852__$1;
(statearr_22859_22892[(2)] = inst_22841);

(statearr_22859_22892[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22853 === (6))){
var state_22852__$1 = state_22852;
var statearr_22860_22893 = state_22852__$1;
(statearr_22860_22893[(2)] = null);

(statearr_22860_22893[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22853 === (3))){
var inst_22850 = (state_22852[(2)]);
var state_22852__$1 = state_22852;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22852__$1,inst_22850);
} else {
if((state_val_22853 === (12))){
var inst_22838 = (state_22852[(8)]);
var inst_22838__$1 = (state_22852[(2)]);
var inst_22839 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22838__$1);
var state_22852__$1 = (function (){var statearr_22861 = state_22852;
(statearr_22861[(8)] = inst_22838__$1);

return statearr_22861;
})();
if(cljs.core.truth_(inst_22839)){
var statearr_22862_22894 = state_22852__$1;
(statearr_22862_22894[(1)] = (13));

} else {
var statearr_22863_22895 = state_22852__$1;
(statearr_22863_22895[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22853 === (2))){
var inst_22815 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_22816 = (0);
var state_22852__$1 = (function (){var statearr_22864 = state_22852;
(statearr_22864[(7)] = inst_22816);

(statearr_22864[(9)] = inst_22815);

return statearr_22864;
})();
var statearr_22865_22896 = state_22852__$1;
(statearr_22865_22896[(2)] = null);

(statearr_22865_22896[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22853 === (11))){
var inst_22816 = (state_22852[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22852,(10),Object,null,(9));
var inst_22825 = chs__$1.call(null,inst_22816);
var inst_22826 = done.call(null,inst_22816);
var inst_22827 = cljs.core.async.take_BANG_.call(null,inst_22825,inst_22826);
var state_22852__$1 = state_22852;
var statearr_22866_22897 = state_22852__$1;
(statearr_22866_22897[(2)] = inst_22827);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22852__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22853 === (9))){
var inst_22816 = (state_22852[(7)]);
var inst_22829 = (state_22852[(2)]);
var inst_22830 = (inst_22816 + (1));
var inst_22816__$1 = inst_22830;
var state_22852__$1 = (function (){var statearr_22867 = state_22852;
(statearr_22867[(7)] = inst_22816__$1);

(statearr_22867[(10)] = inst_22829);

return statearr_22867;
})();
var statearr_22868_22898 = state_22852__$1;
(statearr_22868_22898[(2)] = null);

(statearr_22868_22898[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22853 === (5))){
var inst_22836 = (state_22852[(2)]);
var state_22852__$1 = (function (){var statearr_22869 = state_22852;
(statearr_22869[(11)] = inst_22836);

return statearr_22869;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22852__$1,(12),dchan);
} else {
if((state_val_22853 === (14))){
var inst_22838 = (state_22852[(8)]);
var inst_22843 = cljs.core.apply.call(null,f,inst_22838);
var state_22852__$1 = state_22852;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22852__$1,(16),out,inst_22843);
} else {
if((state_val_22853 === (16))){
var inst_22845 = (state_22852[(2)]);
var state_22852__$1 = (function (){var statearr_22870 = state_22852;
(statearr_22870[(12)] = inst_22845);

return statearr_22870;
})();
var statearr_22871_22899 = state_22852__$1;
(statearr_22871_22899[(2)] = null);

(statearr_22871_22899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22853 === (10))){
var inst_22820 = (state_22852[(2)]);
var inst_22821 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_22852__$1 = (function (){var statearr_22872 = state_22852;
(statearr_22872[(13)] = inst_22820);

return statearr_22872;
})();
var statearr_22873_22900 = state_22852__$1;
(statearr_22873_22900[(2)] = inst_22821);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22852__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22853 === (8))){
var inst_22834 = (state_22852[(2)]);
var state_22852__$1 = state_22852;
var statearr_22874_22901 = state_22852__$1;
(statearr_22874_22901[(2)] = inst_22834);

(statearr_22874_22901[(1)] = (5));


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
});})(c__20867__auto___22886,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20755__auto__,c__20867__auto___22886,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20756__auto__ = null;
var cljs$core$async$state_machine__20756__auto____0 = (function (){
var statearr_22878 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22878[(0)] = cljs$core$async$state_machine__20756__auto__);

(statearr_22878[(1)] = (1));

return statearr_22878;
});
var cljs$core$async$state_machine__20756__auto____1 = (function (state_22852){
while(true){
var ret_value__20757__auto__ = (function (){try{while(true){
var result__20758__auto__ = switch__20755__auto__.call(null,state_22852);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20758__auto__;
}
break;
}
}catch (e22879){if((e22879 instanceof Object)){
var ex__20759__auto__ = e22879;
var statearr_22880_22902 = state_22852;
(statearr_22880_22902[(5)] = ex__20759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22852);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22879;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22903 = state_22852;
state_22852 = G__22903;
continue;
} else {
return ret_value__20757__auto__;
}
break;
}
});
cljs$core$async$state_machine__20756__auto__ = function(state_22852){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20756__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20756__auto____1.call(this,state_22852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20756__auto____0;
cljs$core$async$state_machine__20756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20756__auto____1;
return cljs$core$async$state_machine__20756__auto__;
})()
;})(switch__20755__auto__,c__20867__auto___22886,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20869__auto__ = (function (){var statearr_22881 = f__20868__auto__.call(null);
(statearr_22881[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20867__auto___22886);

return statearr_22881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20869__auto__);
});})(c__20867__auto___22886,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args22905 = [];
var len__17884__auto___22961 = arguments.length;
var i__17885__auto___22962 = (0);
while(true){
if((i__17885__auto___22962 < len__17884__auto___22961)){
args22905.push((arguments[i__17885__auto___22962]));

var G__22963 = (i__17885__auto___22962 + (1));
i__17885__auto___22962 = G__22963;
continue;
} else {
}
break;
}

var G__22907 = args22905.length;
switch (G__22907) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22905.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20867__auto___22965 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20867__auto___22965,out){
return (function (){
var f__20868__auto__ = (function (){var switch__20755__auto__ = ((function (c__20867__auto___22965,out){
return (function (state_22937){
var state_val_22938 = (state_22937[(1)]);
if((state_val_22938 === (7))){
var inst_22917 = (state_22937[(7)]);
var inst_22916 = (state_22937[(8)]);
var inst_22916__$1 = (state_22937[(2)]);
var inst_22917__$1 = cljs.core.nth.call(null,inst_22916__$1,(0),null);
var inst_22918 = cljs.core.nth.call(null,inst_22916__$1,(1),null);
var inst_22919 = (inst_22917__$1 == null);
var state_22937__$1 = (function (){var statearr_22939 = state_22937;
(statearr_22939[(7)] = inst_22917__$1);

(statearr_22939[(9)] = inst_22918);

(statearr_22939[(8)] = inst_22916__$1);

return statearr_22939;
})();
if(cljs.core.truth_(inst_22919)){
var statearr_22940_22966 = state_22937__$1;
(statearr_22940_22966[(1)] = (8));

} else {
var statearr_22941_22967 = state_22937__$1;
(statearr_22941_22967[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22938 === (1))){
var inst_22908 = cljs.core.vec.call(null,chs);
var inst_22909 = inst_22908;
var state_22937__$1 = (function (){var statearr_22942 = state_22937;
(statearr_22942[(10)] = inst_22909);

return statearr_22942;
})();
var statearr_22943_22968 = state_22937__$1;
(statearr_22943_22968[(2)] = null);

(statearr_22943_22968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22938 === (4))){
var inst_22909 = (state_22937[(10)]);
var state_22937__$1 = state_22937;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22937__$1,(7),inst_22909);
} else {
if((state_val_22938 === (6))){
var inst_22933 = (state_22937[(2)]);
var state_22937__$1 = state_22937;
var statearr_22944_22969 = state_22937__$1;
(statearr_22944_22969[(2)] = inst_22933);

(statearr_22944_22969[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22938 === (3))){
var inst_22935 = (state_22937[(2)]);
var state_22937__$1 = state_22937;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22937__$1,inst_22935);
} else {
if((state_val_22938 === (2))){
var inst_22909 = (state_22937[(10)]);
var inst_22911 = cljs.core.count.call(null,inst_22909);
var inst_22912 = (inst_22911 > (0));
var state_22937__$1 = state_22937;
if(cljs.core.truth_(inst_22912)){
var statearr_22946_22970 = state_22937__$1;
(statearr_22946_22970[(1)] = (4));

} else {
var statearr_22947_22971 = state_22937__$1;
(statearr_22947_22971[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22938 === (11))){
var inst_22909 = (state_22937[(10)]);
var inst_22926 = (state_22937[(2)]);
var tmp22945 = inst_22909;
var inst_22909__$1 = tmp22945;
var state_22937__$1 = (function (){var statearr_22948 = state_22937;
(statearr_22948[(10)] = inst_22909__$1);

(statearr_22948[(11)] = inst_22926);

return statearr_22948;
})();
var statearr_22949_22972 = state_22937__$1;
(statearr_22949_22972[(2)] = null);

(statearr_22949_22972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22938 === (9))){
var inst_22917 = (state_22937[(7)]);
var state_22937__$1 = state_22937;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22937__$1,(11),out,inst_22917);
} else {
if((state_val_22938 === (5))){
var inst_22931 = cljs.core.async.close_BANG_.call(null,out);
var state_22937__$1 = state_22937;
var statearr_22950_22973 = state_22937__$1;
(statearr_22950_22973[(2)] = inst_22931);

(statearr_22950_22973[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22938 === (10))){
var inst_22929 = (state_22937[(2)]);
var state_22937__$1 = state_22937;
var statearr_22951_22974 = state_22937__$1;
(statearr_22951_22974[(2)] = inst_22929);

(statearr_22951_22974[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22938 === (8))){
var inst_22909 = (state_22937[(10)]);
var inst_22917 = (state_22937[(7)]);
var inst_22918 = (state_22937[(9)]);
var inst_22916 = (state_22937[(8)]);
var inst_22921 = (function (){var cs = inst_22909;
var vec__22914 = inst_22916;
var v = inst_22917;
var c = inst_22918;
return ((function (cs,vec__22914,v,c,inst_22909,inst_22917,inst_22918,inst_22916,state_val_22938,c__20867__auto___22965,out){
return (function (p1__22904_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__22904_SHARP_);
});
;})(cs,vec__22914,v,c,inst_22909,inst_22917,inst_22918,inst_22916,state_val_22938,c__20867__auto___22965,out))
})();
var inst_22922 = cljs.core.filterv.call(null,inst_22921,inst_22909);
var inst_22909__$1 = inst_22922;
var state_22937__$1 = (function (){var statearr_22952 = state_22937;
(statearr_22952[(10)] = inst_22909__$1);

return statearr_22952;
})();
var statearr_22953_22975 = state_22937__$1;
(statearr_22953_22975[(2)] = null);

(statearr_22953_22975[(1)] = (2));


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
});})(c__20867__auto___22965,out))
;
return ((function (switch__20755__auto__,c__20867__auto___22965,out){
return (function() {
var cljs$core$async$state_machine__20756__auto__ = null;
var cljs$core$async$state_machine__20756__auto____0 = (function (){
var statearr_22957 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22957[(0)] = cljs$core$async$state_machine__20756__auto__);

(statearr_22957[(1)] = (1));

return statearr_22957;
});
var cljs$core$async$state_machine__20756__auto____1 = (function (state_22937){
while(true){
var ret_value__20757__auto__ = (function (){try{while(true){
var result__20758__auto__ = switch__20755__auto__.call(null,state_22937);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20758__auto__;
}
break;
}
}catch (e22958){if((e22958 instanceof Object)){
var ex__20759__auto__ = e22958;
var statearr_22959_22976 = state_22937;
(statearr_22959_22976[(5)] = ex__20759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22937);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22958;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22977 = state_22937;
state_22937 = G__22977;
continue;
} else {
return ret_value__20757__auto__;
}
break;
}
});
cljs$core$async$state_machine__20756__auto__ = function(state_22937){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20756__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20756__auto____1.call(this,state_22937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20756__auto____0;
cljs$core$async$state_machine__20756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20756__auto____1;
return cljs$core$async$state_machine__20756__auto__;
})()
;})(switch__20755__auto__,c__20867__auto___22965,out))
})();
var state__20869__auto__ = (function (){var statearr_22960 = f__20868__auto__.call(null);
(statearr_22960[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20867__auto___22965);

return statearr_22960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20869__auto__);
});})(c__20867__auto___22965,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args22978 = [];
var len__17884__auto___23027 = arguments.length;
var i__17885__auto___23028 = (0);
while(true){
if((i__17885__auto___23028 < len__17884__auto___23027)){
args22978.push((arguments[i__17885__auto___23028]));

var G__23029 = (i__17885__auto___23028 + (1));
i__17885__auto___23028 = G__23029;
continue;
} else {
}
break;
}

var G__22980 = args22978.length;
switch (G__22980) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22978.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20867__auto___23031 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20867__auto___23031,out){
return (function (){
var f__20868__auto__ = (function (){var switch__20755__auto__ = ((function (c__20867__auto___23031,out){
return (function (state_23004){
var state_val_23005 = (state_23004[(1)]);
if((state_val_23005 === (7))){
var inst_22986 = (state_23004[(7)]);
var inst_22986__$1 = (state_23004[(2)]);
var inst_22987 = (inst_22986__$1 == null);
var inst_22988 = cljs.core.not.call(null,inst_22987);
var state_23004__$1 = (function (){var statearr_23006 = state_23004;
(statearr_23006[(7)] = inst_22986__$1);

return statearr_23006;
})();
if(inst_22988){
var statearr_23007_23032 = state_23004__$1;
(statearr_23007_23032[(1)] = (8));

} else {
var statearr_23008_23033 = state_23004__$1;
(statearr_23008_23033[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23005 === (1))){
var inst_22981 = (0);
var state_23004__$1 = (function (){var statearr_23009 = state_23004;
(statearr_23009[(8)] = inst_22981);

return statearr_23009;
})();
var statearr_23010_23034 = state_23004__$1;
(statearr_23010_23034[(2)] = null);

(statearr_23010_23034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23005 === (4))){
var state_23004__$1 = state_23004;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23004__$1,(7),ch);
} else {
if((state_val_23005 === (6))){
var inst_22999 = (state_23004[(2)]);
var state_23004__$1 = state_23004;
var statearr_23011_23035 = state_23004__$1;
(statearr_23011_23035[(2)] = inst_22999);

(statearr_23011_23035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23005 === (3))){
var inst_23001 = (state_23004[(2)]);
var inst_23002 = cljs.core.async.close_BANG_.call(null,out);
var state_23004__$1 = (function (){var statearr_23012 = state_23004;
(statearr_23012[(9)] = inst_23001);

return statearr_23012;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23004__$1,inst_23002);
} else {
if((state_val_23005 === (2))){
var inst_22981 = (state_23004[(8)]);
var inst_22983 = (inst_22981 < n);
var state_23004__$1 = state_23004;
if(cljs.core.truth_(inst_22983)){
var statearr_23013_23036 = state_23004__$1;
(statearr_23013_23036[(1)] = (4));

} else {
var statearr_23014_23037 = state_23004__$1;
(statearr_23014_23037[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23005 === (11))){
var inst_22981 = (state_23004[(8)]);
var inst_22991 = (state_23004[(2)]);
var inst_22992 = (inst_22981 + (1));
var inst_22981__$1 = inst_22992;
var state_23004__$1 = (function (){var statearr_23015 = state_23004;
(statearr_23015[(8)] = inst_22981__$1);

(statearr_23015[(10)] = inst_22991);

return statearr_23015;
})();
var statearr_23016_23038 = state_23004__$1;
(statearr_23016_23038[(2)] = null);

(statearr_23016_23038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23005 === (9))){
var state_23004__$1 = state_23004;
var statearr_23017_23039 = state_23004__$1;
(statearr_23017_23039[(2)] = null);

(statearr_23017_23039[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23005 === (5))){
var state_23004__$1 = state_23004;
var statearr_23018_23040 = state_23004__$1;
(statearr_23018_23040[(2)] = null);

(statearr_23018_23040[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23005 === (10))){
var inst_22996 = (state_23004[(2)]);
var state_23004__$1 = state_23004;
var statearr_23019_23041 = state_23004__$1;
(statearr_23019_23041[(2)] = inst_22996);

(statearr_23019_23041[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23005 === (8))){
var inst_22986 = (state_23004[(7)]);
var state_23004__$1 = state_23004;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23004__$1,(11),out,inst_22986);
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
});})(c__20867__auto___23031,out))
;
return ((function (switch__20755__auto__,c__20867__auto___23031,out){
return (function() {
var cljs$core$async$state_machine__20756__auto__ = null;
var cljs$core$async$state_machine__20756__auto____0 = (function (){
var statearr_23023 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23023[(0)] = cljs$core$async$state_machine__20756__auto__);

(statearr_23023[(1)] = (1));

return statearr_23023;
});
var cljs$core$async$state_machine__20756__auto____1 = (function (state_23004){
while(true){
var ret_value__20757__auto__ = (function (){try{while(true){
var result__20758__auto__ = switch__20755__auto__.call(null,state_23004);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20758__auto__;
}
break;
}
}catch (e23024){if((e23024 instanceof Object)){
var ex__20759__auto__ = e23024;
var statearr_23025_23042 = state_23004;
(statearr_23025_23042[(5)] = ex__20759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23004);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23024;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23043 = state_23004;
state_23004 = G__23043;
continue;
} else {
return ret_value__20757__auto__;
}
break;
}
});
cljs$core$async$state_machine__20756__auto__ = function(state_23004){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20756__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20756__auto____1.call(this,state_23004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20756__auto____0;
cljs$core$async$state_machine__20756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20756__auto____1;
return cljs$core$async$state_machine__20756__auto__;
})()
;})(switch__20755__auto__,c__20867__auto___23031,out))
})();
var state__20869__auto__ = (function (){var statearr_23026 = f__20868__auto__.call(null);
(statearr_23026[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20867__auto___23031);

return statearr_23026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20869__auto__);
});})(c__20867__auto___23031,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23051 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23051 = (function (map_LT_,f,ch,meta23052){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23052 = meta23052;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23051.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23053,meta23052__$1){
var self__ = this;
var _23053__$1 = this;
return (new cljs.core.async.t_cljs$core$async23051(self__.map_LT_,self__.f,self__.ch,meta23052__$1));
});

cljs.core.async.t_cljs$core$async23051.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23053){
var self__ = this;
var _23053__$1 = this;
return self__.meta23052;
});

cljs.core.async.t_cljs$core$async23051.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23051.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23051.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23051.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23051.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async23054 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23054 = (function (map_LT_,f,ch,meta23052,_,fn1,meta23055){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23052 = meta23052;
this._ = _;
this.fn1 = fn1;
this.meta23055 = meta23055;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23054.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_23056,meta23055__$1){
var self__ = this;
var _23056__$1 = this;
return (new cljs.core.async.t_cljs$core$async23054(self__.map_LT_,self__.f,self__.ch,self__.meta23052,self__._,self__.fn1,meta23055__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async23054.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_23056){
var self__ = this;
var _23056__$1 = this;
return self__.meta23055;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23054.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23054.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23054.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23054.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__23044_SHARP_){
return f1.call(null,(((p1__23044_SHARP_ == null))?null:self__.f.call(null,p1__23044_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async23054.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23052","meta23052",-285683964,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async23051","cljs.core.async/t_cljs$core$async23051",1471850968,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta23055","meta23055",1112939691,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23054.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23054.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23054";

cljs.core.async.t_cljs$core$async23054.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async23054");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async23054 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23054(map_LT___$1,f__$1,ch__$1,meta23052__$1,___$2,fn1__$1,meta23055){
return (new cljs.core.async.t_cljs$core$async23054(map_LT___$1,f__$1,ch__$1,meta23052__$1,___$2,fn1__$1,meta23055));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async23054(self__.map_LT_,self__.f,self__.ch,self__.meta23052,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16814__auto__ = ret;
if(cljs.core.truth_(and__16814__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16814__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async23051.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23051.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async23051.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23052","meta23052",-285683964,null)], null);
});

cljs.core.async.t_cljs$core$async23051.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23051.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23051";

cljs.core.async.t_cljs$core$async23051.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async23051");
});

cljs.core.async.__GT_t_cljs$core$async23051 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23051(map_LT___$1,f__$1,ch__$1,meta23052){
return (new cljs.core.async.t_cljs$core$async23051(map_LT___$1,f__$1,ch__$1,meta23052));
});

}

return (new cljs.core.async.t_cljs$core$async23051(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23060 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23060 = (function (map_GT_,f,ch,meta23061){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta23061 = meta23061;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23060.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23062,meta23061__$1){
var self__ = this;
var _23062__$1 = this;
return (new cljs.core.async.t_cljs$core$async23060(self__.map_GT_,self__.f,self__.ch,meta23061__$1));
});

cljs.core.async.t_cljs$core$async23060.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23062){
var self__ = this;
var _23062__$1 = this;
return self__.meta23061;
});

cljs.core.async.t_cljs$core$async23060.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23060.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23060.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23060.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23060.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23060.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async23060.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23061","meta23061",1368836755,null)], null);
});

cljs.core.async.t_cljs$core$async23060.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23060.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23060";

cljs.core.async.t_cljs$core$async23060.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async23060");
});

cljs.core.async.__GT_t_cljs$core$async23060 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async23060(map_GT___$1,f__$1,ch__$1,meta23061){
return (new cljs.core.async.t_cljs$core$async23060(map_GT___$1,f__$1,ch__$1,meta23061));
});

}

return (new cljs.core.async.t_cljs$core$async23060(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async23066 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23066 = (function (filter_GT_,p,ch,meta23067){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta23067 = meta23067;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23066.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23068,meta23067__$1){
var self__ = this;
var _23068__$1 = this;
return (new cljs.core.async.t_cljs$core$async23066(self__.filter_GT_,self__.p,self__.ch,meta23067__$1));
});

cljs.core.async.t_cljs$core$async23066.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23068){
var self__ = this;
var _23068__$1 = this;
return self__.meta23067;
});

cljs.core.async.t_cljs$core$async23066.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23066.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23066.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23066.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23066.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23066.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23066.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async23066.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23067","meta23067",-1852785051,null)], null);
});

cljs.core.async.t_cljs$core$async23066.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23066.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23066";

cljs.core.async.t_cljs$core$async23066.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async23066");
});

cljs.core.async.__GT_t_cljs$core$async23066 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async23066(filter_GT___$1,p__$1,ch__$1,meta23067){
return (new cljs.core.async.t_cljs$core$async23066(filter_GT___$1,p__$1,ch__$1,meta23067));
});

}

return (new cljs.core.async.t_cljs$core$async23066(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args23069 = [];
var len__17884__auto___23113 = arguments.length;
var i__17885__auto___23114 = (0);
while(true){
if((i__17885__auto___23114 < len__17884__auto___23113)){
args23069.push((arguments[i__17885__auto___23114]));

var G__23115 = (i__17885__auto___23114 + (1));
i__17885__auto___23114 = G__23115;
continue;
} else {
}
break;
}

var G__23071 = args23069.length;
switch (G__23071) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23069.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20867__auto___23117 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20867__auto___23117,out){
return (function (){
var f__20868__auto__ = (function (){var switch__20755__auto__ = ((function (c__20867__auto___23117,out){
return (function (state_23092){
var state_val_23093 = (state_23092[(1)]);
if((state_val_23093 === (7))){
var inst_23088 = (state_23092[(2)]);
var state_23092__$1 = state_23092;
var statearr_23094_23118 = state_23092__$1;
(statearr_23094_23118[(2)] = inst_23088);

(statearr_23094_23118[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23093 === (1))){
var state_23092__$1 = state_23092;
var statearr_23095_23119 = state_23092__$1;
(statearr_23095_23119[(2)] = null);

(statearr_23095_23119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23093 === (4))){
var inst_23074 = (state_23092[(7)]);
var inst_23074__$1 = (state_23092[(2)]);
var inst_23075 = (inst_23074__$1 == null);
var state_23092__$1 = (function (){var statearr_23096 = state_23092;
(statearr_23096[(7)] = inst_23074__$1);

return statearr_23096;
})();
if(cljs.core.truth_(inst_23075)){
var statearr_23097_23120 = state_23092__$1;
(statearr_23097_23120[(1)] = (5));

} else {
var statearr_23098_23121 = state_23092__$1;
(statearr_23098_23121[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23093 === (6))){
var inst_23074 = (state_23092[(7)]);
var inst_23079 = p.call(null,inst_23074);
var state_23092__$1 = state_23092;
if(cljs.core.truth_(inst_23079)){
var statearr_23099_23122 = state_23092__$1;
(statearr_23099_23122[(1)] = (8));

} else {
var statearr_23100_23123 = state_23092__$1;
(statearr_23100_23123[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23093 === (3))){
var inst_23090 = (state_23092[(2)]);
var state_23092__$1 = state_23092;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23092__$1,inst_23090);
} else {
if((state_val_23093 === (2))){
var state_23092__$1 = state_23092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23092__$1,(4),ch);
} else {
if((state_val_23093 === (11))){
var inst_23082 = (state_23092[(2)]);
var state_23092__$1 = state_23092;
var statearr_23101_23124 = state_23092__$1;
(statearr_23101_23124[(2)] = inst_23082);

(statearr_23101_23124[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23093 === (9))){
var state_23092__$1 = state_23092;
var statearr_23102_23125 = state_23092__$1;
(statearr_23102_23125[(2)] = null);

(statearr_23102_23125[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23093 === (5))){
var inst_23077 = cljs.core.async.close_BANG_.call(null,out);
var state_23092__$1 = state_23092;
var statearr_23103_23126 = state_23092__$1;
(statearr_23103_23126[(2)] = inst_23077);

(statearr_23103_23126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23093 === (10))){
var inst_23085 = (state_23092[(2)]);
var state_23092__$1 = (function (){var statearr_23104 = state_23092;
(statearr_23104[(8)] = inst_23085);

return statearr_23104;
})();
var statearr_23105_23127 = state_23092__$1;
(statearr_23105_23127[(2)] = null);

(statearr_23105_23127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23093 === (8))){
var inst_23074 = (state_23092[(7)]);
var state_23092__$1 = state_23092;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23092__$1,(11),out,inst_23074);
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
});})(c__20867__auto___23117,out))
;
return ((function (switch__20755__auto__,c__20867__auto___23117,out){
return (function() {
var cljs$core$async$state_machine__20756__auto__ = null;
var cljs$core$async$state_machine__20756__auto____0 = (function (){
var statearr_23109 = [null,null,null,null,null,null,null,null,null];
(statearr_23109[(0)] = cljs$core$async$state_machine__20756__auto__);

(statearr_23109[(1)] = (1));

return statearr_23109;
});
var cljs$core$async$state_machine__20756__auto____1 = (function (state_23092){
while(true){
var ret_value__20757__auto__ = (function (){try{while(true){
var result__20758__auto__ = switch__20755__auto__.call(null,state_23092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20758__auto__;
}
break;
}
}catch (e23110){if((e23110 instanceof Object)){
var ex__20759__auto__ = e23110;
var statearr_23111_23128 = state_23092;
(statearr_23111_23128[(5)] = ex__20759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23110;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23129 = state_23092;
state_23092 = G__23129;
continue;
} else {
return ret_value__20757__auto__;
}
break;
}
});
cljs$core$async$state_machine__20756__auto__ = function(state_23092){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20756__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20756__auto____1.call(this,state_23092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20756__auto____0;
cljs$core$async$state_machine__20756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20756__auto____1;
return cljs$core$async$state_machine__20756__auto__;
})()
;})(switch__20755__auto__,c__20867__auto___23117,out))
})();
var state__20869__auto__ = (function (){var statearr_23112 = f__20868__auto__.call(null);
(statearr_23112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20867__auto___23117);

return statearr_23112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20869__auto__);
});})(c__20867__auto___23117,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args23130 = [];
var len__17884__auto___23133 = arguments.length;
var i__17885__auto___23134 = (0);
while(true){
if((i__17885__auto___23134 < len__17884__auto___23133)){
args23130.push((arguments[i__17885__auto___23134]));

var G__23135 = (i__17885__auto___23134 + (1));
i__17885__auto___23134 = G__23135;
continue;
} else {
}
break;
}

var G__23132 = args23130.length;
switch (G__23132) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23130.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__20867__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20867__auto__){
return (function (){
var f__20868__auto__ = (function (){var switch__20755__auto__ = ((function (c__20867__auto__){
return (function (state_23302){
var state_val_23303 = (state_23302[(1)]);
if((state_val_23303 === (7))){
var inst_23298 = (state_23302[(2)]);
var state_23302__$1 = state_23302;
var statearr_23304_23345 = state_23302__$1;
(statearr_23304_23345[(2)] = inst_23298);

(statearr_23304_23345[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23303 === (20))){
var inst_23268 = (state_23302[(7)]);
var inst_23279 = (state_23302[(2)]);
var inst_23280 = cljs.core.next.call(null,inst_23268);
var inst_23254 = inst_23280;
var inst_23255 = null;
var inst_23256 = (0);
var inst_23257 = (0);
var state_23302__$1 = (function (){var statearr_23305 = state_23302;
(statearr_23305[(8)] = inst_23255);

(statearr_23305[(9)] = inst_23257);

(statearr_23305[(10)] = inst_23256);

(statearr_23305[(11)] = inst_23254);

(statearr_23305[(12)] = inst_23279);

return statearr_23305;
})();
var statearr_23306_23346 = state_23302__$1;
(statearr_23306_23346[(2)] = null);

(statearr_23306_23346[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23303 === (1))){
var state_23302__$1 = state_23302;
var statearr_23307_23347 = state_23302__$1;
(statearr_23307_23347[(2)] = null);

(statearr_23307_23347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23303 === (4))){
var inst_23243 = (state_23302[(13)]);
var inst_23243__$1 = (state_23302[(2)]);
var inst_23244 = (inst_23243__$1 == null);
var state_23302__$1 = (function (){var statearr_23308 = state_23302;
(statearr_23308[(13)] = inst_23243__$1);

return statearr_23308;
})();
if(cljs.core.truth_(inst_23244)){
var statearr_23309_23348 = state_23302__$1;
(statearr_23309_23348[(1)] = (5));

} else {
var statearr_23310_23349 = state_23302__$1;
(statearr_23310_23349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23303 === (15))){
var state_23302__$1 = state_23302;
var statearr_23314_23350 = state_23302__$1;
(statearr_23314_23350[(2)] = null);

(statearr_23314_23350[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23303 === (21))){
var state_23302__$1 = state_23302;
var statearr_23315_23351 = state_23302__$1;
(statearr_23315_23351[(2)] = null);

(statearr_23315_23351[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23303 === (13))){
var inst_23255 = (state_23302[(8)]);
var inst_23257 = (state_23302[(9)]);
var inst_23256 = (state_23302[(10)]);
var inst_23254 = (state_23302[(11)]);
var inst_23264 = (state_23302[(2)]);
var inst_23265 = (inst_23257 + (1));
var tmp23311 = inst_23255;
var tmp23312 = inst_23256;
var tmp23313 = inst_23254;
var inst_23254__$1 = tmp23313;
var inst_23255__$1 = tmp23311;
var inst_23256__$1 = tmp23312;
var inst_23257__$1 = inst_23265;
var state_23302__$1 = (function (){var statearr_23316 = state_23302;
(statearr_23316[(8)] = inst_23255__$1);

(statearr_23316[(9)] = inst_23257__$1);

(statearr_23316[(10)] = inst_23256__$1);

(statearr_23316[(11)] = inst_23254__$1);

(statearr_23316[(14)] = inst_23264);

return statearr_23316;
})();
var statearr_23317_23352 = state_23302__$1;
(statearr_23317_23352[(2)] = null);

(statearr_23317_23352[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23303 === (22))){
var state_23302__$1 = state_23302;
var statearr_23318_23353 = state_23302__$1;
(statearr_23318_23353[(2)] = null);

(statearr_23318_23353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23303 === (6))){
var inst_23243 = (state_23302[(13)]);
var inst_23252 = f.call(null,inst_23243);
var inst_23253 = cljs.core.seq.call(null,inst_23252);
var inst_23254 = inst_23253;
var inst_23255 = null;
var inst_23256 = (0);
var inst_23257 = (0);
var state_23302__$1 = (function (){var statearr_23319 = state_23302;
(statearr_23319[(8)] = inst_23255);

(statearr_23319[(9)] = inst_23257);

(statearr_23319[(10)] = inst_23256);

(statearr_23319[(11)] = inst_23254);

return statearr_23319;
})();
var statearr_23320_23354 = state_23302__$1;
(statearr_23320_23354[(2)] = null);

(statearr_23320_23354[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23303 === (17))){
var inst_23268 = (state_23302[(7)]);
var inst_23272 = cljs.core.chunk_first.call(null,inst_23268);
var inst_23273 = cljs.core.chunk_rest.call(null,inst_23268);
var inst_23274 = cljs.core.count.call(null,inst_23272);
var inst_23254 = inst_23273;
var inst_23255 = inst_23272;
var inst_23256 = inst_23274;
var inst_23257 = (0);
var state_23302__$1 = (function (){var statearr_23321 = state_23302;
(statearr_23321[(8)] = inst_23255);

(statearr_23321[(9)] = inst_23257);

(statearr_23321[(10)] = inst_23256);

(statearr_23321[(11)] = inst_23254);

return statearr_23321;
})();
var statearr_23322_23355 = state_23302__$1;
(statearr_23322_23355[(2)] = null);

(statearr_23322_23355[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23303 === (3))){
var inst_23300 = (state_23302[(2)]);
var state_23302__$1 = state_23302;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23302__$1,inst_23300);
} else {
if((state_val_23303 === (12))){
var inst_23288 = (state_23302[(2)]);
var state_23302__$1 = state_23302;
var statearr_23323_23356 = state_23302__$1;
(statearr_23323_23356[(2)] = inst_23288);

(statearr_23323_23356[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23303 === (2))){
var state_23302__$1 = state_23302;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23302__$1,(4),in$);
} else {
if((state_val_23303 === (23))){
var inst_23296 = (state_23302[(2)]);
var state_23302__$1 = state_23302;
var statearr_23324_23357 = state_23302__$1;
(statearr_23324_23357[(2)] = inst_23296);

(statearr_23324_23357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23303 === (19))){
var inst_23283 = (state_23302[(2)]);
var state_23302__$1 = state_23302;
var statearr_23325_23358 = state_23302__$1;
(statearr_23325_23358[(2)] = inst_23283);

(statearr_23325_23358[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23303 === (11))){
var inst_23268 = (state_23302[(7)]);
var inst_23254 = (state_23302[(11)]);
var inst_23268__$1 = cljs.core.seq.call(null,inst_23254);
var state_23302__$1 = (function (){var statearr_23326 = state_23302;
(statearr_23326[(7)] = inst_23268__$1);

return statearr_23326;
})();
if(inst_23268__$1){
var statearr_23327_23359 = state_23302__$1;
(statearr_23327_23359[(1)] = (14));

} else {
var statearr_23328_23360 = state_23302__$1;
(statearr_23328_23360[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23303 === (9))){
var inst_23290 = (state_23302[(2)]);
var inst_23291 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_23302__$1 = (function (){var statearr_23329 = state_23302;
(statearr_23329[(15)] = inst_23290);

return statearr_23329;
})();
if(cljs.core.truth_(inst_23291)){
var statearr_23330_23361 = state_23302__$1;
(statearr_23330_23361[(1)] = (21));

} else {
var statearr_23331_23362 = state_23302__$1;
(statearr_23331_23362[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23303 === (5))){
var inst_23246 = cljs.core.async.close_BANG_.call(null,out);
var state_23302__$1 = state_23302;
var statearr_23332_23363 = state_23302__$1;
(statearr_23332_23363[(2)] = inst_23246);

(statearr_23332_23363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23303 === (14))){
var inst_23268 = (state_23302[(7)]);
var inst_23270 = cljs.core.chunked_seq_QMARK_.call(null,inst_23268);
var state_23302__$1 = state_23302;
if(inst_23270){
var statearr_23333_23364 = state_23302__$1;
(statearr_23333_23364[(1)] = (17));

} else {
var statearr_23334_23365 = state_23302__$1;
(statearr_23334_23365[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23303 === (16))){
var inst_23286 = (state_23302[(2)]);
var state_23302__$1 = state_23302;
var statearr_23335_23366 = state_23302__$1;
(statearr_23335_23366[(2)] = inst_23286);

(statearr_23335_23366[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23303 === (10))){
var inst_23255 = (state_23302[(8)]);
var inst_23257 = (state_23302[(9)]);
var inst_23262 = cljs.core._nth.call(null,inst_23255,inst_23257);
var state_23302__$1 = state_23302;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23302__$1,(13),out,inst_23262);
} else {
if((state_val_23303 === (18))){
var inst_23268 = (state_23302[(7)]);
var inst_23277 = cljs.core.first.call(null,inst_23268);
var state_23302__$1 = state_23302;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23302__$1,(20),out,inst_23277);
} else {
if((state_val_23303 === (8))){
var inst_23257 = (state_23302[(9)]);
var inst_23256 = (state_23302[(10)]);
var inst_23259 = (inst_23257 < inst_23256);
var inst_23260 = inst_23259;
var state_23302__$1 = state_23302;
if(cljs.core.truth_(inst_23260)){
var statearr_23336_23367 = state_23302__$1;
(statearr_23336_23367[(1)] = (10));

} else {
var statearr_23337_23368 = state_23302__$1;
(statearr_23337_23368[(1)] = (11));

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
});})(c__20867__auto__))
;
return ((function (switch__20755__auto__,c__20867__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20756__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20756__auto____0 = (function (){
var statearr_23341 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23341[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20756__auto__);

(statearr_23341[(1)] = (1));

return statearr_23341;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20756__auto____1 = (function (state_23302){
while(true){
var ret_value__20757__auto__ = (function (){try{while(true){
var result__20758__auto__ = switch__20755__auto__.call(null,state_23302);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20758__auto__;
}
break;
}
}catch (e23342){if((e23342 instanceof Object)){
var ex__20759__auto__ = e23342;
var statearr_23343_23369 = state_23302;
(statearr_23343_23369[(5)] = ex__20759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23302);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23342;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23370 = state_23302;
state_23302 = G__23370;
continue;
} else {
return ret_value__20757__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20756__auto__ = function(state_23302){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20756__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20756__auto____1.call(this,state_23302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20756__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20756__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20756__auto__;
})()
;})(switch__20755__auto__,c__20867__auto__))
})();
var state__20869__auto__ = (function (){var statearr_23344 = f__20868__auto__.call(null);
(statearr_23344[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20867__auto__);

return statearr_23344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20869__auto__);
});})(c__20867__auto__))
);

return c__20867__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args23371 = [];
var len__17884__auto___23374 = arguments.length;
var i__17885__auto___23375 = (0);
while(true){
if((i__17885__auto___23375 < len__17884__auto___23374)){
args23371.push((arguments[i__17885__auto___23375]));

var G__23376 = (i__17885__auto___23375 + (1));
i__17885__auto___23375 = G__23376;
continue;
} else {
}
break;
}

var G__23373 = args23371.length;
switch (G__23373) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23371.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args23378 = [];
var len__17884__auto___23381 = arguments.length;
var i__17885__auto___23382 = (0);
while(true){
if((i__17885__auto___23382 < len__17884__auto___23381)){
args23378.push((arguments[i__17885__auto___23382]));

var G__23383 = (i__17885__auto___23382 + (1));
i__17885__auto___23382 = G__23383;
continue;
} else {
}
break;
}

var G__23380 = args23378.length;
switch (G__23380) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23378.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args23385 = [];
var len__17884__auto___23436 = arguments.length;
var i__17885__auto___23437 = (0);
while(true){
if((i__17885__auto___23437 < len__17884__auto___23436)){
args23385.push((arguments[i__17885__auto___23437]));

var G__23438 = (i__17885__auto___23437 + (1));
i__17885__auto___23437 = G__23438;
continue;
} else {
}
break;
}

var G__23387 = args23385.length;
switch (G__23387) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23385.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20867__auto___23440 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20867__auto___23440,out){
return (function (){
var f__20868__auto__ = (function (){var switch__20755__auto__ = ((function (c__20867__auto___23440,out){
return (function (state_23411){
var state_val_23412 = (state_23411[(1)]);
if((state_val_23412 === (7))){
var inst_23406 = (state_23411[(2)]);
var state_23411__$1 = state_23411;
var statearr_23413_23441 = state_23411__$1;
(statearr_23413_23441[(2)] = inst_23406);

(statearr_23413_23441[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23412 === (1))){
var inst_23388 = null;
var state_23411__$1 = (function (){var statearr_23414 = state_23411;
(statearr_23414[(7)] = inst_23388);

return statearr_23414;
})();
var statearr_23415_23442 = state_23411__$1;
(statearr_23415_23442[(2)] = null);

(statearr_23415_23442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23412 === (4))){
var inst_23391 = (state_23411[(8)]);
var inst_23391__$1 = (state_23411[(2)]);
var inst_23392 = (inst_23391__$1 == null);
var inst_23393 = cljs.core.not.call(null,inst_23392);
var state_23411__$1 = (function (){var statearr_23416 = state_23411;
(statearr_23416[(8)] = inst_23391__$1);

return statearr_23416;
})();
if(inst_23393){
var statearr_23417_23443 = state_23411__$1;
(statearr_23417_23443[(1)] = (5));

} else {
var statearr_23418_23444 = state_23411__$1;
(statearr_23418_23444[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23412 === (6))){
var state_23411__$1 = state_23411;
var statearr_23419_23445 = state_23411__$1;
(statearr_23419_23445[(2)] = null);

(statearr_23419_23445[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23412 === (3))){
var inst_23408 = (state_23411[(2)]);
var inst_23409 = cljs.core.async.close_BANG_.call(null,out);
var state_23411__$1 = (function (){var statearr_23420 = state_23411;
(statearr_23420[(9)] = inst_23408);

return statearr_23420;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23411__$1,inst_23409);
} else {
if((state_val_23412 === (2))){
var state_23411__$1 = state_23411;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23411__$1,(4),ch);
} else {
if((state_val_23412 === (11))){
var inst_23391 = (state_23411[(8)]);
var inst_23400 = (state_23411[(2)]);
var inst_23388 = inst_23391;
var state_23411__$1 = (function (){var statearr_23421 = state_23411;
(statearr_23421[(10)] = inst_23400);

(statearr_23421[(7)] = inst_23388);

return statearr_23421;
})();
var statearr_23422_23446 = state_23411__$1;
(statearr_23422_23446[(2)] = null);

(statearr_23422_23446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23412 === (9))){
var inst_23391 = (state_23411[(8)]);
var state_23411__$1 = state_23411;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23411__$1,(11),out,inst_23391);
} else {
if((state_val_23412 === (5))){
var inst_23391 = (state_23411[(8)]);
var inst_23388 = (state_23411[(7)]);
var inst_23395 = cljs.core._EQ_.call(null,inst_23391,inst_23388);
var state_23411__$1 = state_23411;
if(inst_23395){
var statearr_23424_23447 = state_23411__$1;
(statearr_23424_23447[(1)] = (8));

} else {
var statearr_23425_23448 = state_23411__$1;
(statearr_23425_23448[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23412 === (10))){
var inst_23403 = (state_23411[(2)]);
var state_23411__$1 = state_23411;
var statearr_23426_23449 = state_23411__$1;
(statearr_23426_23449[(2)] = inst_23403);

(statearr_23426_23449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23412 === (8))){
var inst_23388 = (state_23411[(7)]);
var tmp23423 = inst_23388;
var inst_23388__$1 = tmp23423;
var state_23411__$1 = (function (){var statearr_23427 = state_23411;
(statearr_23427[(7)] = inst_23388__$1);

return statearr_23427;
})();
var statearr_23428_23450 = state_23411__$1;
(statearr_23428_23450[(2)] = null);

(statearr_23428_23450[(1)] = (2));


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
});})(c__20867__auto___23440,out))
;
return ((function (switch__20755__auto__,c__20867__auto___23440,out){
return (function() {
var cljs$core$async$state_machine__20756__auto__ = null;
var cljs$core$async$state_machine__20756__auto____0 = (function (){
var statearr_23432 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23432[(0)] = cljs$core$async$state_machine__20756__auto__);

(statearr_23432[(1)] = (1));

return statearr_23432;
});
var cljs$core$async$state_machine__20756__auto____1 = (function (state_23411){
while(true){
var ret_value__20757__auto__ = (function (){try{while(true){
var result__20758__auto__ = switch__20755__auto__.call(null,state_23411);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20758__auto__;
}
break;
}
}catch (e23433){if((e23433 instanceof Object)){
var ex__20759__auto__ = e23433;
var statearr_23434_23451 = state_23411;
(statearr_23434_23451[(5)] = ex__20759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23433;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23452 = state_23411;
state_23411 = G__23452;
continue;
} else {
return ret_value__20757__auto__;
}
break;
}
});
cljs$core$async$state_machine__20756__auto__ = function(state_23411){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20756__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20756__auto____1.call(this,state_23411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20756__auto____0;
cljs$core$async$state_machine__20756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20756__auto____1;
return cljs$core$async$state_machine__20756__auto__;
})()
;})(switch__20755__auto__,c__20867__auto___23440,out))
})();
var state__20869__auto__ = (function (){var statearr_23435 = f__20868__auto__.call(null);
(statearr_23435[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20867__auto___23440);

return statearr_23435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20869__auto__);
});})(c__20867__auto___23440,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args23453 = [];
var len__17884__auto___23523 = arguments.length;
var i__17885__auto___23524 = (0);
while(true){
if((i__17885__auto___23524 < len__17884__auto___23523)){
args23453.push((arguments[i__17885__auto___23524]));

var G__23525 = (i__17885__auto___23524 + (1));
i__17885__auto___23524 = G__23525;
continue;
} else {
}
break;
}

var G__23455 = args23453.length;
switch (G__23455) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23453.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20867__auto___23527 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20867__auto___23527,out){
return (function (){
var f__20868__auto__ = (function (){var switch__20755__auto__ = ((function (c__20867__auto___23527,out){
return (function (state_23493){
var state_val_23494 = (state_23493[(1)]);
if((state_val_23494 === (7))){
var inst_23489 = (state_23493[(2)]);
var state_23493__$1 = state_23493;
var statearr_23495_23528 = state_23493__$1;
(statearr_23495_23528[(2)] = inst_23489);

(statearr_23495_23528[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23494 === (1))){
var inst_23456 = (new Array(n));
var inst_23457 = inst_23456;
var inst_23458 = (0);
var state_23493__$1 = (function (){var statearr_23496 = state_23493;
(statearr_23496[(7)] = inst_23458);

(statearr_23496[(8)] = inst_23457);

return statearr_23496;
})();
var statearr_23497_23529 = state_23493__$1;
(statearr_23497_23529[(2)] = null);

(statearr_23497_23529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23494 === (4))){
var inst_23461 = (state_23493[(9)]);
var inst_23461__$1 = (state_23493[(2)]);
var inst_23462 = (inst_23461__$1 == null);
var inst_23463 = cljs.core.not.call(null,inst_23462);
var state_23493__$1 = (function (){var statearr_23498 = state_23493;
(statearr_23498[(9)] = inst_23461__$1);

return statearr_23498;
})();
if(inst_23463){
var statearr_23499_23530 = state_23493__$1;
(statearr_23499_23530[(1)] = (5));

} else {
var statearr_23500_23531 = state_23493__$1;
(statearr_23500_23531[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23494 === (15))){
var inst_23483 = (state_23493[(2)]);
var state_23493__$1 = state_23493;
var statearr_23501_23532 = state_23493__$1;
(statearr_23501_23532[(2)] = inst_23483);

(statearr_23501_23532[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23494 === (13))){
var state_23493__$1 = state_23493;
var statearr_23502_23533 = state_23493__$1;
(statearr_23502_23533[(2)] = null);

(statearr_23502_23533[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23494 === (6))){
var inst_23458 = (state_23493[(7)]);
var inst_23479 = (inst_23458 > (0));
var state_23493__$1 = state_23493;
if(cljs.core.truth_(inst_23479)){
var statearr_23503_23534 = state_23493__$1;
(statearr_23503_23534[(1)] = (12));

} else {
var statearr_23504_23535 = state_23493__$1;
(statearr_23504_23535[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23494 === (3))){
var inst_23491 = (state_23493[(2)]);
var state_23493__$1 = state_23493;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23493__$1,inst_23491);
} else {
if((state_val_23494 === (12))){
var inst_23457 = (state_23493[(8)]);
var inst_23481 = cljs.core.vec.call(null,inst_23457);
var state_23493__$1 = state_23493;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23493__$1,(15),out,inst_23481);
} else {
if((state_val_23494 === (2))){
var state_23493__$1 = state_23493;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23493__$1,(4),ch);
} else {
if((state_val_23494 === (11))){
var inst_23473 = (state_23493[(2)]);
var inst_23474 = (new Array(n));
var inst_23457 = inst_23474;
var inst_23458 = (0);
var state_23493__$1 = (function (){var statearr_23505 = state_23493;
(statearr_23505[(7)] = inst_23458);

(statearr_23505[(8)] = inst_23457);

(statearr_23505[(10)] = inst_23473);

return statearr_23505;
})();
var statearr_23506_23536 = state_23493__$1;
(statearr_23506_23536[(2)] = null);

(statearr_23506_23536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23494 === (9))){
var inst_23457 = (state_23493[(8)]);
var inst_23471 = cljs.core.vec.call(null,inst_23457);
var state_23493__$1 = state_23493;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23493__$1,(11),out,inst_23471);
} else {
if((state_val_23494 === (5))){
var inst_23458 = (state_23493[(7)]);
var inst_23466 = (state_23493[(11)]);
var inst_23457 = (state_23493[(8)]);
var inst_23461 = (state_23493[(9)]);
var inst_23465 = (inst_23457[inst_23458] = inst_23461);
var inst_23466__$1 = (inst_23458 + (1));
var inst_23467 = (inst_23466__$1 < n);
var state_23493__$1 = (function (){var statearr_23507 = state_23493;
(statearr_23507[(11)] = inst_23466__$1);

(statearr_23507[(12)] = inst_23465);

return statearr_23507;
})();
if(cljs.core.truth_(inst_23467)){
var statearr_23508_23537 = state_23493__$1;
(statearr_23508_23537[(1)] = (8));

} else {
var statearr_23509_23538 = state_23493__$1;
(statearr_23509_23538[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23494 === (14))){
var inst_23486 = (state_23493[(2)]);
var inst_23487 = cljs.core.async.close_BANG_.call(null,out);
var state_23493__$1 = (function (){var statearr_23511 = state_23493;
(statearr_23511[(13)] = inst_23486);

return statearr_23511;
})();
var statearr_23512_23539 = state_23493__$1;
(statearr_23512_23539[(2)] = inst_23487);

(statearr_23512_23539[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23494 === (10))){
var inst_23477 = (state_23493[(2)]);
var state_23493__$1 = state_23493;
var statearr_23513_23540 = state_23493__$1;
(statearr_23513_23540[(2)] = inst_23477);

(statearr_23513_23540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23494 === (8))){
var inst_23466 = (state_23493[(11)]);
var inst_23457 = (state_23493[(8)]);
var tmp23510 = inst_23457;
var inst_23457__$1 = tmp23510;
var inst_23458 = inst_23466;
var state_23493__$1 = (function (){var statearr_23514 = state_23493;
(statearr_23514[(7)] = inst_23458);

(statearr_23514[(8)] = inst_23457__$1);

return statearr_23514;
})();
var statearr_23515_23541 = state_23493__$1;
(statearr_23515_23541[(2)] = null);

(statearr_23515_23541[(1)] = (2));


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
});})(c__20867__auto___23527,out))
;
return ((function (switch__20755__auto__,c__20867__auto___23527,out){
return (function() {
var cljs$core$async$state_machine__20756__auto__ = null;
var cljs$core$async$state_machine__20756__auto____0 = (function (){
var statearr_23519 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23519[(0)] = cljs$core$async$state_machine__20756__auto__);

(statearr_23519[(1)] = (1));

return statearr_23519;
});
var cljs$core$async$state_machine__20756__auto____1 = (function (state_23493){
while(true){
var ret_value__20757__auto__ = (function (){try{while(true){
var result__20758__auto__ = switch__20755__auto__.call(null,state_23493);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20758__auto__;
}
break;
}
}catch (e23520){if((e23520 instanceof Object)){
var ex__20759__auto__ = e23520;
var statearr_23521_23542 = state_23493;
(statearr_23521_23542[(5)] = ex__20759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23493);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23520;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23543 = state_23493;
state_23493 = G__23543;
continue;
} else {
return ret_value__20757__auto__;
}
break;
}
});
cljs$core$async$state_machine__20756__auto__ = function(state_23493){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20756__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20756__auto____1.call(this,state_23493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20756__auto____0;
cljs$core$async$state_machine__20756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20756__auto____1;
return cljs$core$async$state_machine__20756__auto__;
})()
;})(switch__20755__auto__,c__20867__auto___23527,out))
})();
var state__20869__auto__ = (function (){var statearr_23522 = f__20868__auto__.call(null);
(statearr_23522[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20867__auto___23527);

return statearr_23522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20869__auto__);
});})(c__20867__auto___23527,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args23544 = [];
var len__17884__auto___23618 = arguments.length;
var i__17885__auto___23619 = (0);
while(true){
if((i__17885__auto___23619 < len__17884__auto___23618)){
args23544.push((arguments[i__17885__auto___23619]));

var G__23620 = (i__17885__auto___23619 + (1));
i__17885__auto___23619 = G__23620;
continue;
} else {
}
break;
}

var G__23546 = args23544.length;
switch (G__23546) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23544.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20867__auto___23622 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20867__auto___23622,out){
return (function (){
var f__20868__auto__ = (function (){var switch__20755__auto__ = ((function (c__20867__auto___23622,out){
return (function (state_23588){
var state_val_23589 = (state_23588[(1)]);
if((state_val_23589 === (7))){
var inst_23584 = (state_23588[(2)]);
var state_23588__$1 = state_23588;
var statearr_23590_23623 = state_23588__$1;
(statearr_23590_23623[(2)] = inst_23584);

(statearr_23590_23623[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23589 === (1))){
var inst_23547 = [];
var inst_23548 = inst_23547;
var inst_23549 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23588__$1 = (function (){var statearr_23591 = state_23588;
(statearr_23591[(7)] = inst_23549);

(statearr_23591[(8)] = inst_23548);

return statearr_23591;
})();
var statearr_23592_23624 = state_23588__$1;
(statearr_23592_23624[(2)] = null);

(statearr_23592_23624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23589 === (4))){
var inst_23552 = (state_23588[(9)]);
var inst_23552__$1 = (state_23588[(2)]);
var inst_23553 = (inst_23552__$1 == null);
var inst_23554 = cljs.core.not.call(null,inst_23553);
var state_23588__$1 = (function (){var statearr_23593 = state_23588;
(statearr_23593[(9)] = inst_23552__$1);

return statearr_23593;
})();
if(inst_23554){
var statearr_23594_23625 = state_23588__$1;
(statearr_23594_23625[(1)] = (5));

} else {
var statearr_23595_23626 = state_23588__$1;
(statearr_23595_23626[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23589 === (15))){
var inst_23578 = (state_23588[(2)]);
var state_23588__$1 = state_23588;
var statearr_23596_23627 = state_23588__$1;
(statearr_23596_23627[(2)] = inst_23578);

(statearr_23596_23627[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23589 === (13))){
var state_23588__$1 = state_23588;
var statearr_23597_23628 = state_23588__$1;
(statearr_23597_23628[(2)] = null);

(statearr_23597_23628[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23589 === (6))){
var inst_23548 = (state_23588[(8)]);
var inst_23573 = inst_23548.length;
var inst_23574 = (inst_23573 > (0));
var state_23588__$1 = state_23588;
if(cljs.core.truth_(inst_23574)){
var statearr_23598_23629 = state_23588__$1;
(statearr_23598_23629[(1)] = (12));

} else {
var statearr_23599_23630 = state_23588__$1;
(statearr_23599_23630[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23589 === (3))){
var inst_23586 = (state_23588[(2)]);
var state_23588__$1 = state_23588;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23588__$1,inst_23586);
} else {
if((state_val_23589 === (12))){
var inst_23548 = (state_23588[(8)]);
var inst_23576 = cljs.core.vec.call(null,inst_23548);
var state_23588__$1 = state_23588;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23588__$1,(15),out,inst_23576);
} else {
if((state_val_23589 === (2))){
var state_23588__$1 = state_23588;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23588__$1,(4),ch);
} else {
if((state_val_23589 === (11))){
var inst_23556 = (state_23588[(10)]);
var inst_23552 = (state_23588[(9)]);
var inst_23566 = (state_23588[(2)]);
var inst_23567 = [];
var inst_23568 = inst_23567.push(inst_23552);
var inst_23548 = inst_23567;
var inst_23549 = inst_23556;
var state_23588__$1 = (function (){var statearr_23600 = state_23588;
(statearr_23600[(11)] = inst_23566);

(statearr_23600[(12)] = inst_23568);

(statearr_23600[(7)] = inst_23549);

(statearr_23600[(8)] = inst_23548);

return statearr_23600;
})();
var statearr_23601_23631 = state_23588__$1;
(statearr_23601_23631[(2)] = null);

(statearr_23601_23631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23589 === (9))){
var inst_23548 = (state_23588[(8)]);
var inst_23564 = cljs.core.vec.call(null,inst_23548);
var state_23588__$1 = state_23588;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23588__$1,(11),out,inst_23564);
} else {
if((state_val_23589 === (5))){
var inst_23556 = (state_23588[(10)]);
var inst_23549 = (state_23588[(7)]);
var inst_23552 = (state_23588[(9)]);
var inst_23556__$1 = f.call(null,inst_23552);
var inst_23557 = cljs.core._EQ_.call(null,inst_23556__$1,inst_23549);
var inst_23558 = cljs.core.keyword_identical_QMARK_.call(null,inst_23549,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_23559 = (inst_23557) || (inst_23558);
var state_23588__$1 = (function (){var statearr_23602 = state_23588;
(statearr_23602[(10)] = inst_23556__$1);

return statearr_23602;
})();
if(cljs.core.truth_(inst_23559)){
var statearr_23603_23632 = state_23588__$1;
(statearr_23603_23632[(1)] = (8));

} else {
var statearr_23604_23633 = state_23588__$1;
(statearr_23604_23633[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23589 === (14))){
var inst_23581 = (state_23588[(2)]);
var inst_23582 = cljs.core.async.close_BANG_.call(null,out);
var state_23588__$1 = (function (){var statearr_23606 = state_23588;
(statearr_23606[(13)] = inst_23581);

return statearr_23606;
})();
var statearr_23607_23634 = state_23588__$1;
(statearr_23607_23634[(2)] = inst_23582);

(statearr_23607_23634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23589 === (10))){
var inst_23571 = (state_23588[(2)]);
var state_23588__$1 = state_23588;
var statearr_23608_23635 = state_23588__$1;
(statearr_23608_23635[(2)] = inst_23571);

(statearr_23608_23635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23589 === (8))){
var inst_23556 = (state_23588[(10)]);
var inst_23548 = (state_23588[(8)]);
var inst_23552 = (state_23588[(9)]);
var inst_23561 = inst_23548.push(inst_23552);
var tmp23605 = inst_23548;
var inst_23548__$1 = tmp23605;
var inst_23549 = inst_23556;
var state_23588__$1 = (function (){var statearr_23609 = state_23588;
(statearr_23609[(7)] = inst_23549);

(statearr_23609[(14)] = inst_23561);

(statearr_23609[(8)] = inst_23548__$1);

return statearr_23609;
})();
var statearr_23610_23636 = state_23588__$1;
(statearr_23610_23636[(2)] = null);

(statearr_23610_23636[(1)] = (2));


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
});})(c__20867__auto___23622,out))
;
return ((function (switch__20755__auto__,c__20867__auto___23622,out){
return (function() {
var cljs$core$async$state_machine__20756__auto__ = null;
var cljs$core$async$state_machine__20756__auto____0 = (function (){
var statearr_23614 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23614[(0)] = cljs$core$async$state_machine__20756__auto__);

(statearr_23614[(1)] = (1));

return statearr_23614;
});
var cljs$core$async$state_machine__20756__auto____1 = (function (state_23588){
while(true){
var ret_value__20757__auto__ = (function (){try{while(true){
var result__20758__auto__ = switch__20755__auto__.call(null,state_23588);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20758__auto__;
}
break;
}
}catch (e23615){if((e23615 instanceof Object)){
var ex__20759__auto__ = e23615;
var statearr_23616_23637 = state_23588;
(statearr_23616_23637[(5)] = ex__20759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23588);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23615;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23638 = state_23588;
state_23588 = G__23638;
continue;
} else {
return ret_value__20757__auto__;
}
break;
}
});
cljs$core$async$state_machine__20756__auto__ = function(state_23588){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20756__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20756__auto____1.call(this,state_23588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20756__auto____0;
cljs$core$async$state_machine__20756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20756__auto____1;
return cljs$core$async$state_machine__20756__auto__;
})()
;})(switch__20755__auto__,c__20867__auto___23622,out))
})();
var state__20869__auto__ = (function (){var statearr_23617 = f__20868__auto__.call(null);
(statearr_23617[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20867__auto___23622);

return statearr_23617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20869__auto__);
});})(c__20867__auto___23622,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1448981695728