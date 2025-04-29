goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18006 = (function (f,blockable,meta18007){
this.f = f;
this.blockable = blockable;
this.meta18007 = meta18007;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18006.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18008,meta18007__$1){
var self__ = this;
var _18008__$1 = this;
return (new cljs.core.async.t_cljs$core$async18006(self__.f,self__.blockable,meta18007__$1));
}));

(cljs.core.async.t_cljs$core$async18006.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18008){
var self__ = this;
var _18008__$1 = this;
return self__.meta18007;
}));

(cljs.core.async.t_cljs$core$async18006.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18006.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18006.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async18006.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async18006.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta18007","meta18007",-1155007547,null)], null);
}));

(cljs.core.async.t_cljs$core$async18006.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18006.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18006");

(cljs.core.async.t_cljs$core$async18006.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async18006");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18006.
 */
cljs.core.async.__GT_t_cljs$core$async18006 = (function cljs$core$async$__GT_t_cljs$core$async18006(f,blockable,meta18007){
return (new cljs.core.async.t_cljs$core$async18006(f,blockable,meta18007));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__18005 = arguments.length;
switch (G__18005) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async18006(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__18022 = arguments.length;
switch (G__18022) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__18031 = arguments.length;
switch (G__18031) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__18044 = arguments.length;
switch (G__18044) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_20256 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_20256) : fn1.call(null,val_20256));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_20256) : fn1.call(null,val_20256));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__18057 = arguments.length;
switch (G__18057) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___20260 = n;
var x_20261 = (0);
while(true){
if((x_20261 < n__5593__auto___20260)){
(a[x_20261] = x_20261);

var G__20262 = (x_20261 + (1));
x_20261 = G__20262;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18075 = (function (flag,meta18076){
this.flag = flag;
this.meta18076 = meta18076;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18075.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18077,meta18076__$1){
var self__ = this;
var _18077__$1 = this;
return (new cljs.core.async.t_cljs$core$async18075(self__.flag,meta18076__$1));
}));

(cljs.core.async.t_cljs$core$async18075.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18077){
var self__ = this;
var _18077__$1 = this;
return self__.meta18076;
}));

(cljs.core.async.t_cljs$core$async18075.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18075.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async18075.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18075.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async18075.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta18076","meta18076",-522465685,null)], null);
}));

(cljs.core.async.t_cljs$core$async18075.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18075.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18075");

(cljs.core.async.t_cljs$core$async18075.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async18075");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18075.
 */
cljs.core.async.__GT_t_cljs$core$async18075 = (function cljs$core$async$__GT_t_cljs$core$async18075(flag,meta18076){
return (new cljs.core.async.t_cljs$core$async18075(flag,meta18076));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async18075(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18088 = (function (flag,cb,meta18089){
this.flag = flag;
this.cb = cb;
this.meta18089 = meta18089;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18088.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18090,meta18089__$1){
var self__ = this;
var _18090__$1 = this;
return (new cljs.core.async.t_cljs$core$async18088(self__.flag,self__.cb,meta18089__$1));
}));

(cljs.core.async.t_cljs$core$async18088.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18090){
var self__ = this;
var _18090__$1 = this;
return self__.meta18089;
}));

(cljs.core.async.t_cljs$core$async18088.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18088.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async18088.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18088.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async18088.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta18089","meta18089",-890268020,null)], null);
}));

(cljs.core.async.t_cljs$core$async18088.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18088.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18088");

(cljs.core.async.t_cljs$core$async18088.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async18088");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18088.
 */
cljs.core.async.__GT_t_cljs$core$async18088 = (function cljs$core$async$__GT_t_cljs$core$async18088(flag,cb,meta18089){
return (new cljs.core.async.t_cljs$core$async18088(flag,cb,meta18089));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async18088(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18103_SHARP_){
var G__18109 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18103_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__18109) : fret.call(null,G__18109));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18105_SHARP_){
var G__18110 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18105_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__18110) : fret.call(null,G__18110));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__20270 = (i + (1));
i = G__20270;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__5732__auto__ = [];
var len__5726__auto___20272 = arguments.length;
var i__5727__auto___20273 = (0);
while(true){
if((i__5727__auto___20273 < len__5726__auto___20272)){
args__5732__auto__.push((arguments[i__5727__auto___20273]));

var G__20274 = (i__5727__auto___20273 + (1));
i__5727__auto___20273 = G__20274;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__18118){
var map__18125 = p__18118;
var map__18125__$1 = cljs.core.__destructure_map(map__18125);
var opts = map__18125__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq18116){
var G__18117 = cljs.core.first(seq18116);
var seq18116__$1 = cljs.core.next(seq18116);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18117,seq18116__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
var G__18133 = arguments.length;
switch (G__18133) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__17938__auto___20285 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17939__auto__ = (function (){var switch__17782__auto__ = (function (state_18185){
var state_val_18186 = (state_18185[(1)]);
if((state_val_18186 === (7))){
var inst_18181 = (state_18185[(2)]);
var state_18185__$1 = state_18185;
var statearr_18213_20286 = state_18185__$1;
(statearr_18213_20286[(2)] = inst_18181);

(statearr_18213_20286[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18186 === (1))){
var state_18185__$1 = state_18185;
var statearr_18214_20291 = state_18185__$1;
(statearr_18214_20291[(2)] = null);

(statearr_18214_20291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18186 === (4))){
var inst_18151 = (state_18185[(7)]);
var inst_18151__$1 = (state_18185[(2)]);
var inst_18165 = (inst_18151__$1 == null);
var state_18185__$1 = (function (){var statearr_18215 = state_18185;
(statearr_18215[(7)] = inst_18151__$1);

return statearr_18215;
})();
if(cljs.core.truth_(inst_18165)){
var statearr_18217_20292 = state_18185__$1;
(statearr_18217_20292[(1)] = (5));

} else {
var statearr_18218_20293 = state_18185__$1;
(statearr_18218_20293[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18186 === (13))){
var state_18185__$1 = state_18185;
var statearr_18222_20294 = state_18185__$1;
(statearr_18222_20294[(2)] = null);

(statearr_18222_20294[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18186 === (6))){
var inst_18151 = (state_18185[(7)]);
var state_18185__$1 = state_18185;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18185__$1,(11),to,inst_18151);
} else {
if((state_val_18186 === (3))){
var inst_18183 = (state_18185[(2)]);
var state_18185__$1 = state_18185;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18185__$1,inst_18183);
} else {
if((state_val_18186 === (12))){
var state_18185__$1 = state_18185;
var statearr_18231_20302 = state_18185__$1;
(statearr_18231_20302[(2)] = null);

(statearr_18231_20302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18186 === (2))){
var state_18185__$1 = state_18185;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18185__$1,(4),from);
} else {
if((state_val_18186 === (11))){
var inst_18174 = (state_18185[(2)]);
var state_18185__$1 = state_18185;
if(cljs.core.truth_(inst_18174)){
var statearr_18249_20303 = state_18185__$1;
(statearr_18249_20303[(1)] = (12));

} else {
var statearr_18256_20304 = state_18185__$1;
(statearr_18256_20304[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18186 === (9))){
var state_18185__$1 = state_18185;
var statearr_18268_20305 = state_18185__$1;
(statearr_18268_20305[(2)] = null);

(statearr_18268_20305[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18186 === (5))){
var state_18185__$1 = state_18185;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18269_20306 = state_18185__$1;
(statearr_18269_20306[(1)] = (8));

} else {
var statearr_18270_20307 = state_18185__$1;
(statearr_18270_20307[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18186 === (14))){
var inst_18179 = (state_18185[(2)]);
var state_18185__$1 = state_18185;
var statearr_18271_20310 = state_18185__$1;
(statearr_18271_20310[(2)] = inst_18179);

(statearr_18271_20310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18186 === (10))){
var inst_18171 = (state_18185[(2)]);
var state_18185__$1 = state_18185;
var statearr_18276_20312 = state_18185__$1;
(statearr_18276_20312[(2)] = inst_18171);

(statearr_18276_20312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18186 === (8))){
var inst_18168 = cljs.core.async.close_BANG_(to);
var state_18185__$1 = state_18185;
var statearr_18289_20313 = state_18185__$1;
(statearr_18289_20313[(2)] = inst_18168);

(statearr_18289_20313[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__17783__auto__ = null;
var cljs$core$async$state_machine__17783__auto____0 = (function (){
var statearr_18295 = [null,null,null,null,null,null,null,null];
(statearr_18295[(0)] = cljs$core$async$state_machine__17783__auto__);

(statearr_18295[(1)] = (1));

return statearr_18295;
});
var cljs$core$async$state_machine__17783__auto____1 = (function (state_18185){
while(true){
var ret_value__17784__auto__ = (function (){try{while(true){
var result__17785__auto__ = switch__17782__auto__(state_18185);
if(cljs.core.keyword_identical_QMARK_(result__17785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17785__auto__;
}
break;
}
}catch (e18306){var ex__17786__auto__ = e18306;
var statearr_18309_20314 = state_18185;
(statearr_18309_20314[(2)] = ex__17786__auto__);


if(cljs.core.seq((state_18185[(4)]))){
var statearr_18320_20315 = state_18185;
(statearr_18320_20315[(1)] = cljs.core.first((state_18185[(4)])));

} else {
throw ex__17786__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20316 = state_18185;
state_18185 = G__20316;
continue;
} else {
return ret_value__17784__auto__;
}
break;
}
});
cljs$core$async$state_machine__17783__auto__ = function(state_18185){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17783__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17783__auto____1.call(this,state_18185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17783__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17783__auto____0;
cljs$core$async$state_machine__17783__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17783__auto____1;
return cljs$core$async$state_machine__17783__auto__;
})()
})();
var state__17940__auto__ = (function (){var statearr_18321 = f__17939__auto__();
(statearr_18321[(6)] = c__17938__auto___20285);

return statearr_18321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17940__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__18324){
var vec__18325 = p__18324;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18325,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18325,(1),null);
var job = vec__18325;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__17938__auto___20319 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17939__auto__ = (function (){var switch__17782__auto__ = (function (state_18340){
var state_val_18341 = (state_18340[(1)]);
if((state_val_18341 === (1))){
var state_18340__$1 = state_18340;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18340__$1,(2),res,v);
} else {
if((state_val_18341 === (2))){
var inst_18333 = (state_18340[(2)]);
var inst_18334 = cljs.core.async.close_BANG_(res);
var state_18340__$1 = (function (){var statearr_18347 = state_18340;
(statearr_18347[(7)] = inst_18333);

return statearr_18347;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18340__$1,inst_18334);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17783__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17783__auto____0 = (function (){
var statearr_18348 = [null,null,null,null,null,null,null,null];
(statearr_18348[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17783__auto__);

(statearr_18348[(1)] = (1));

return statearr_18348;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17783__auto____1 = (function (state_18340){
while(true){
var ret_value__17784__auto__ = (function (){try{while(true){
var result__17785__auto__ = switch__17782__auto__(state_18340);
if(cljs.core.keyword_identical_QMARK_(result__17785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17785__auto__;
}
break;
}
}catch (e18350){var ex__17786__auto__ = e18350;
var statearr_18351_20325 = state_18340;
(statearr_18351_20325[(2)] = ex__17786__auto__);


if(cljs.core.seq((state_18340[(4)]))){
var statearr_18352_20326 = state_18340;
(statearr_18352_20326[(1)] = cljs.core.first((state_18340[(4)])));

} else {
throw ex__17786__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20327 = state_18340;
state_18340 = G__20327;
continue;
} else {
return ret_value__17784__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17783__auto__ = function(state_18340){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17783__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17783__auto____1.call(this,state_18340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17783__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17783__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17783__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17783__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17783__auto__;
})()
})();
var state__17940__auto__ = (function (){var statearr_18353 = f__17939__auto__();
(statearr_18353[(6)] = c__17938__auto___20319);

return statearr_18353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17940__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__18354){
var vec__18355 = p__18354;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18355,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18355,(1),null);
var job = vec__18355;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___20328 = n;
var __20329 = (0);
while(true){
if((__20329 < n__5593__auto___20328)){
var G__18359_20331 = type;
var G__18359_20332__$1 = (((G__18359_20331 instanceof cljs.core.Keyword))?G__18359_20331.fqn:null);
switch (G__18359_20332__$1) {
case "compute":
var c__17938__auto___20334 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__20329,c__17938__auto___20334,G__18359_20331,G__18359_20332__$1,n__5593__auto___20328,jobs,results,process__$1,async){
return (function (){
var f__17939__auto__ = (function (){var switch__17782__auto__ = ((function (__20329,c__17938__auto___20334,G__18359_20331,G__18359_20332__$1,n__5593__auto___20328,jobs,results,process__$1,async){
return (function (state_18372){
var state_val_18373 = (state_18372[(1)]);
if((state_val_18373 === (1))){
var state_18372__$1 = state_18372;
var statearr_18374_20335 = state_18372__$1;
(statearr_18374_20335[(2)] = null);

(statearr_18374_20335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18373 === (2))){
var state_18372__$1 = state_18372;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18372__$1,(4),jobs);
} else {
if((state_val_18373 === (3))){
var inst_18370 = (state_18372[(2)]);
var state_18372__$1 = state_18372;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18372__$1,inst_18370);
} else {
if((state_val_18373 === (4))){
var inst_18362 = (state_18372[(2)]);
var inst_18363 = process__$1(inst_18362);
var state_18372__$1 = state_18372;
if(cljs.core.truth_(inst_18363)){
var statearr_18376_20339 = state_18372__$1;
(statearr_18376_20339[(1)] = (5));

} else {
var statearr_18377_20340 = state_18372__$1;
(statearr_18377_20340[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18373 === (5))){
var state_18372__$1 = state_18372;
var statearr_18378_20342 = state_18372__$1;
(statearr_18378_20342[(2)] = null);

(statearr_18378_20342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18373 === (6))){
var state_18372__$1 = state_18372;
var statearr_18379_20344 = state_18372__$1;
(statearr_18379_20344[(2)] = null);

(statearr_18379_20344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18373 === (7))){
var inst_18368 = (state_18372[(2)]);
var state_18372__$1 = state_18372;
var statearr_18380_20345 = state_18372__$1;
(statearr_18380_20345[(2)] = inst_18368);

(statearr_18380_20345[(1)] = (3));


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
});})(__20329,c__17938__auto___20334,G__18359_20331,G__18359_20332__$1,n__5593__auto___20328,jobs,results,process__$1,async))
;
return ((function (__20329,switch__17782__auto__,c__17938__auto___20334,G__18359_20331,G__18359_20332__$1,n__5593__auto___20328,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17783__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17783__auto____0 = (function (){
var statearr_18381 = [null,null,null,null,null,null,null];
(statearr_18381[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17783__auto__);

(statearr_18381[(1)] = (1));

return statearr_18381;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17783__auto____1 = (function (state_18372){
while(true){
var ret_value__17784__auto__ = (function (){try{while(true){
var result__17785__auto__ = switch__17782__auto__(state_18372);
if(cljs.core.keyword_identical_QMARK_(result__17785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17785__auto__;
}
break;
}
}catch (e18382){var ex__17786__auto__ = e18382;
var statearr_18383_20346 = state_18372;
(statearr_18383_20346[(2)] = ex__17786__auto__);


if(cljs.core.seq((state_18372[(4)]))){
var statearr_18384_20347 = state_18372;
(statearr_18384_20347[(1)] = cljs.core.first((state_18372[(4)])));

} else {
throw ex__17786__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20348 = state_18372;
state_18372 = G__20348;
continue;
} else {
return ret_value__17784__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17783__auto__ = function(state_18372){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17783__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17783__auto____1.call(this,state_18372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17783__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17783__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17783__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17783__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17783__auto__;
})()
;})(__20329,switch__17782__auto__,c__17938__auto___20334,G__18359_20331,G__18359_20332__$1,n__5593__auto___20328,jobs,results,process__$1,async))
})();
var state__17940__auto__ = (function (){var statearr_18385 = f__17939__auto__();
(statearr_18385[(6)] = c__17938__auto___20334);

return statearr_18385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17940__auto__);
});})(__20329,c__17938__auto___20334,G__18359_20331,G__18359_20332__$1,n__5593__auto___20328,jobs,results,process__$1,async))
);


break;
case "async":
var c__17938__auto___20349 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__20329,c__17938__auto___20349,G__18359_20331,G__18359_20332__$1,n__5593__auto___20328,jobs,results,process__$1,async){
return (function (){
var f__17939__auto__ = (function (){var switch__17782__auto__ = ((function (__20329,c__17938__auto___20349,G__18359_20331,G__18359_20332__$1,n__5593__auto___20328,jobs,results,process__$1,async){
return (function (state_18398){
var state_val_18399 = (state_18398[(1)]);
if((state_val_18399 === (1))){
var state_18398__$1 = state_18398;
var statearr_18401_20351 = state_18398__$1;
(statearr_18401_20351[(2)] = null);

(statearr_18401_20351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18399 === (2))){
var state_18398__$1 = state_18398;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18398__$1,(4),jobs);
} else {
if((state_val_18399 === (3))){
var inst_18396 = (state_18398[(2)]);
var state_18398__$1 = state_18398;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18398__$1,inst_18396);
} else {
if((state_val_18399 === (4))){
var inst_18388 = (state_18398[(2)]);
var inst_18389 = async(inst_18388);
var state_18398__$1 = state_18398;
if(cljs.core.truth_(inst_18389)){
var statearr_18402_20353 = state_18398__$1;
(statearr_18402_20353[(1)] = (5));

} else {
var statearr_18403_20354 = state_18398__$1;
(statearr_18403_20354[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18399 === (5))){
var state_18398__$1 = state_18398;
var statearr_18404_20356 = state_18398__$1;
(statearr_18404_20356[(2)] = null);

(statearr_18404_20356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18399 === (6))){
var state_18398__$1 = state_18398;
var statearr_18405_20357 = state_18398__$1;
(statearr_18405_20357[(2)] = null);

(statearr_18405_20357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18399 === (7))){
var inst_18394 = (state_18398[(2)]);
var state_18398__$1 = state_18398;
var statearr_18406_20358 = state_18398__$1;
(statearr_18406_20358[(2)] = inst_18394);

(statearr_18406_20358[(1)] = (3));


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
});})(__20329,c__17938__auto___20349,G__18359_20331,G__18359_20332__$1,n__5593__auto___20328,jobs,results,process__$1,async))
;
return ((function (__20329,switch__17782__auto__,c__17938__auto___20349,G__18359_20331,G__18359_20332__$1,n__5593__auto___20328,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17783__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17783__auto____0 = (function (){
var statearr_18407 = [null,null,null,null,null,null,null];
(statearr_18407[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17783__auto__);

(statearr_18407[(1)] = (1));

return statearr_18407;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17783__auto____1 = (function (state_18398){
while(true){
var ret_value__17784__auto__ = (function (){try{while(true){
var result__17785__auto__ = switch__17782__auto__(state_18398);
if(cljs.core.keyword_identical_QMARK_(result__17785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17785__auto__;
}
break;
}
}catch (e18408){var ex__17786__auto__ = e18408;
var statearr_18409_20366 = state_18398;
(statearr_18409_20366[(2)] = ex__17786__auto__);


if(cljs.core.seq((state_18398[(4)]))){
var statearr_18410_20367 = state_18398;
(statearr_18410_20367[(1)] = cljs.core.first((state_18398[(4)])));

} else {
throw ex__17786__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20368 = state_18398;
state_18398 = G__20368;
continue;
} else {
return ret_value__17784__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17783__auto__ = function(state_18398){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17783__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17783__auto____1.call(this,state_18398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17783__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17783__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17783__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17783__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17783__auto__;
})()
;})(__20329,switch__17782__auto__,c__17938__auto___20349,G__18359_20331,G__18359_20332__$1,n__5593__auto___20328,jobs,results,process__$1,async))
})();
var state__17940__auto__ = (function (){var statearr_18412 = f__17939__auto__();
(statearr_18412[(6)] = c__17938__auto___20349);

return statearr_18412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17940__auto__);
});})(__20329,c__17938__auto___20349,G__18359_20331,G__18359_20332__$1,n__5593__auto___20328,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18359_20332__$1)].join('')));

}

var G__20369 = (__20329 + (1));
__20329 = G__20369;
continue;
} else {
}
break;
}

var c__17938__auto___20370 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17939__auto__ = (function (){var switch__17782__auto__ = (function (state_18434){
var state_val_18435 = (state_18434[(1)]);
if((state_val_18435 === (7))){
var inst_18430 = (state_18434[(2)]);
var state_18434__$1 = state_18434;
var statearr_18436_20371 = state_18434__$1;
(statearr_18436_20371[(2)] = inst_18430);

(statearr_18436_20371[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18435 === (1))){
var state_18434__$1 = state_18434;
var statearr_18437_20373 = state_18434__$1;
(statearr_18437_20373[(2)] = null);

(statearr_18437_20373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18435 === (4))){
var inst_18415 = (state_18434[(7)]);
var inst_18415__$1 = (state_18434[(2)]);
var inst_18416 = (inst_18415__$1 == null);
var state_18434__$1 = (function (){var statearr_18439 = state_18434;
(statearr_18439[(7)] = inst_18415__$1);

return statearr_18439;
})();
if(cljs.core.truth_(inst_18416)){
var statearr_18440_20374 = state_18434__$1;
(statearr_18440_20374[(1)] = (5));

} else {
var statearr_18441_20375 = state_18434__$1;
(statearr_18441_20375[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18435 === (6))){
var inst_18420 = (state_18434[(8)]);
var inst_18415 = (state_18434[(7)]);
var inst_18420__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_18421 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18422 = [inst_18415,inst_18420__$1];
var inst_18423 = (new cljs.core.PersistentVector(null,2,(5),inst_18421,inst_18422,null));
var state_18434__$1 = (function (){var statearr_18442 = state_18434;
(statearr_18442[(8)] = inst_18420__$1);

return statearr_18442;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18434__$1,(8),jobs,inst_18423);
} else {
if((state_val_18435 === (3))){
var inst_18432 = (state_18434[(2)]);
var state_18434__$1 = state_18434;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18434__$1,inst_18432);
} else {
if((state_val_18435 === (2))){
var state_18434__$1 = state_18434;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18434__$1,(4),from);
} else {
if((state_val_18435 === (9))){
var inst_18427 = (state_18434[(2)]);
var state_18434__$1 = (function (){var statearr_18443 = state_18434;
(statearr_18443[(9)] = inst_18427);

return statearr_18443;
})();
var statearr_18444_20376 = state_18434__$1;
(statearr_18444_20376[(2)] = null);

(statearr_18444_20376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18435 === (5))){
var inst_18418 = cljs.core.async.close_BANG_(jobs);
var state_18434__$1 = state_18434;
var statearr_18445_20377 = state_18434__$1;
(statearr_18445_20377[(2)] = inst_18418);

(statearr_18445_20377[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18435 === (8))){
var inst_18420 = (state_18434[(8)]);
var inst_18425 = (state_18434[(2)]);
var state_18434__$1 = (function (){var statearr_18446 = state_18434;
(statearr_18446[(10)] = inst_18425);

return statearr_18446;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18434__$1,(9),results,inst_18420);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17783__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17783__auto____0 = (function (){
var statearr_18447 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18447[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17783__auto__);

(statearr_18447[(1)] = (1));

return statearr_18447;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17783__auto____1 = (function (state_18434){
while(true){
var ret_value__17784__auto__ = (function (){try{while(true){
var result__17785__auto__ = switch__17782__auto__(state_18434);
if(cljs.core.keyword_identical_QMARK_(result__17785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17785__auto__;
}
break;
}
}catch (e18449){var ex__17786__auto__ = e18449;
var statearr_18450_20381 = state_18434;
(statearr_18450_20381[(2)] = ex__17786__auto__);


if(cljs.core.seq((state_18434[(4)]))){
var statearr_18451_20382 = state_18434;
(statearr_18451_20382[(1)] = cljs.core.first((state_18434[(4)])));

} else {
throw ex__17786__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20383 = state_18434;
state_18434 = G__20383;
continue;
} else {
return ret_value__17784__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17783__auto__ = function(state_18434){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17783__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17783__auto____1.call(this,state_18434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17783__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17783__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17783__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17783__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17783__auto__;
})()
})();
var state__17940__auto__ = (function (){var statearr_18452 = f__17939__auto__();
(statearr_18452[(6)] = c__17938__auto___20370);

return statearr_18452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17940__auto__);
}));


var c__17938__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17939__auto__ = (function (){var switch__17782__auto__ = (function (state_18490){
var state_val_18491 = (state_18490[(1)]);
if((state_val_18491 === (7))){
var inst_18486 = (state_18490[(2)]);
var state_18490__$1 = state_18490;
var statearr_18493_20386 = state_18490__$1;
(statearr_18493_20386[(2)] = inst_18486);

(statearr_18493_20386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18491 === (20))){
var state_18490__$1 = state_18490;
var statearr_18494_20388 = state_18490__$1;
(statearr_18494_20388[(2)] = null);

(statearr_18494_20388[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18491 === (1))){
var state_18490__$1 = state_18490;
var statearr_18495_20389 = state_18490__$1;
(statearr_18495_20389[(2)] = null);

(statearr_18495_20389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18491 === (4))){
var inst_18455 = (state_18490[(7)]);
var inst_18455__$1 = (state_18490[(2)]);
var inst_18456 = (inst_18455__$1 == null);
var state_18490__$1 = (function (){var statearr_18496 = state_18490;
(statearr_18496[(7)] = inst_18455__$1);

return statearr_18496;
})();
if(cljs.core.truth_(inst_18456)){
var statearr_18497_20391 = state_18490__$1;
(statearr_18497_20391[(1)] = (5));

} else {
var statearr_18498_20392 = state_18490__$1;
(statearr_18498_20392[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18491 === (15))){
var inst_18468 = (state_18490[(8)]);
var state_18490__$1 = state_18490;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18490__$1,(18),to,inst_18468);
} else {
if((state_val_18491 === (21))){
var inst_18481 = (state_18490[(2)]);
var state_18490__$1 = state_18490;
var statearr_18499_20393 = state_18490__$1;
(statearr_18499_20393[(2)] = inst_18481);

(statearr_18499_20393[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18491 === (13))){
var inst_18483 = (state_18490[(2)]);
var state_18490__$1 = (function (){var statearr_18500 = state_18490;
(statearr_18500[(9)] = inst_18483);

return statearr_18500;
})();
var statearr_18501_20394 = state_18490__$1;
(statearr_18501_20394[(2)] = null);

(statearr_18501_20394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18491 === (6))){
var inst_18455 = (state_18490[(7)]);
var state_18490__$1 = state_18490;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18490__$1,(11),inst_18455);
} else {
if((state_val_18491 === (17))){
var inst_18476 = (state_18490[(2)]);
var state_18490__$1 = state_18490;
if(cljs.core.truth_(inst_18476)){
var statearr_18502_20396 = state_18490__$1;
(statearr_18502_20396[(1)] = (19));

} else {
var statearr_18504_20397 = state_18490__$1;
(statearr_18504_20397[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18491 === (3))){
var inst_18488 = (state_18490[(2)]);
var state_18490__$1 = state_18490;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18490__$1,inst_18488);
} else {
if((state_val_18491 === (12))){
var inst_18465 = (state_18490[(10)]);
var state_18490__$1 = state_18490;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18490__$1,(14),inst_18465);
} else {
if((state_val_18491 === (2))){
var state_18490__$1 = state_18490;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18490__$1,(4),results);
} else {
if((state_val_18491 === (19))){
var state_18490__$1 = state_18490;
var statearr_18505_20399 = state_18490__$1;
(statearr_18505_20399[(2)] = null);

(statearr_18505_20399[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18491 === (11))){
var inst_18465 = (state_18490[(2)]);
var state_18490__$1 = (function (){var statearr_18506 = state_18490;
(statearr_18506[(10)] = inst_18465);

return statearr_18506;
})();
var statearr_18507_20401 = state_18490__$1;
(statearr_18507_20401[(2)] = null);

(statearr_18507_20401[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18491 === (9))){
var state_18490__$1 = state_18490;
var statearr_18508_20402 = state_18490__$1;
(statearr_18508_20402[(2)] = null);

(statearr_18508_20402[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18491 === (5))){
var state_18490__$1 = state_18490;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18509_20403 = state_18490__$1;
(statearr_18509_20403[(1)] = (8));

} else {
var statearr_18510_20404 = state_18490__$1;
(statearr_18510_20404[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18491 === (14))){
var inst_18468 = (state_18490[(8)]);
var inst_18470 = (state_18490[(11)]);
var inst_18468__$1 = (state_18490[(2)]);
var inst_18469 = (inst_18468__$1 == null);
var inst_18470__$1 = cljs.core.not(inst_18469);
var state_18490__$1 = (function (){var statearr_18511 = state_18490;
(statearr_18511[(8)] = inst_18468__$1);

(statearr_18511[(11)] = inst_18470__$1);

return statearr_18511;
})();
if(inst_18470__$1){
var statearr_18512_20405 = state_18490__$1;
(statearr_18512_20405[(1)] = (15));

} else {
var statearr_18513_20406 = state_18490__$1;
(statearr_18513_20406[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18491 === (16))){
var inst_18470 = (state_18490[(11)]);
var state_18490__$1 = state_18490;
var statearr_18514_20407 = state_18490__$1;
(statearr_18514_20407[(2)] = inst_18470);

(statearr_18514_20407[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18491 === (10))){
var inst_18462 = (state_18490[(2)]);
var state_18490__$1 = state_18490;
var statearr_18515_20408 = state_18490__$1;
(statearr_18515_20408[(2)] = inst_18462);

(statearr_18515_20408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18491 === (18))){
var inst_18473 = (state_18490[(2)]);
var state_18490__$1 = state_18490;
var statearr_18516_20409 = state_18490__$1;
(statearr_18516_20409[(2)] = inst_18473);

(statearr_18516_20409[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18491 === (8))){
var inst_18459 = cljs.core.async.close_BANG_(to);
var state_18490__$1 = state_18490;
var statearr_18518_20411 = state_18490__$1;
(statearr_18518_20411[(2)] = inst_18459);

(statearr_18518_20411[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17783__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17783__auto____0 = (function (){
var statearr_18519 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18519[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17783__auto__);

(statearr_18519[(1)] = (1));

return statearr_18519;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17783__auto____1 = (function (state_18490){
while(true){
var ret_value__17784__auto__ = (function (){try{while(true){
var result__17785__auto__ = switch__17782__auto__(state_18490);
if(cljs.core.keyword_identical_QMARK_(result__17785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17785__auto__;
}
break;
}
}catch (e18520){var ex__17786__auto__ = e18520;
var statearr_18521_20413 = state_18490;
(statearr_18521_20413[(2)] = ex__17786__auto__);


if(cljs.core.seq((state_18490[(4)]))){
var statearr_18522_20414 = state_18490;
(statearr_18522_20414[(1)] = cljs.core.first((state_18490[(4)])));

} else {
throw ex__17786__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20415 = state_18490;
state_18490 = G__20415;
continue;
} else {
return ret_value__17784__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17783__auto__ = function(state_18490){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17783__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17783__auto____1.call(this,state_18490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17783__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17783__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17783__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17783__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17783__auto__;
})()
})();
var state__17940__auto__ = (function (){var statearr_18523 = f__17939__auto__();
(statearr_18523[(6)] = c__17938__auto__);

return statearr_18523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17940__auto__);
}));

return c__17938__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__18526 = arguments.length;
switch (G__18526) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

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
var G__18529 = arguments.length;
switch (G__18529) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

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
var G__18532 = arguments.length;
switch (G__18532) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__17938__auto___20426 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17939__auto__ = (function (){var switch__17782__auto__ = (function (state_18559){
var state_val_18560 = (state_18559[(1)]);
if((state_val_18560 === (7))){
var inst_18555 = (state_18559[(2)]);
var state_18559__$1 = state_18559;
var statearr_18561_20427 = state_18559__$1;
(statearr_18561_20427[(2)] = inst_18555);

(statearr_18561_20427[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (1))){
var state_18559__$1 = state_18559;
var statearr_18562_20428 = state_18559__$1;
(statearr_18562_20428[(2)] = null);

(statearr_18562_20428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (4))){
var inst_18535 = (state_18559[(7)]);
var inst_18535__$1 = (state_18559[(2)]);
var inst_18536 = (inst_18535__$1 == null);
var state_18559__$1 = (function (){var statearr_18563 = state_18559;
(statearr_18563[(7)] = inst_18535__$1);

return statearr_18563;
})();
if(cljs.core.truth_(inst_18536)){
var statearr_18564_20429 = state_18559__$1;
(statearr_18564_20429[(1)] = (5));

} else {
var statearr_18565_20430 = state_18559__$1;
(statearr_18565_20430[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (13))){
var state_18559__$1 = state_18559;
var statearr_18566_20431 = state_18559__$1;
(statearr_18566_20431[(2)] = null);

(statearr_18566_20431[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (6))){
var inst_18535 = (state_18559[(7)]);
var inst_18541 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18535) : p.call(null,inst_18535));
var state_18559__$1 = state_18559;
if(cljs.core.truth_(inst_18541)){
var statearr_18568_20433 = state_18559__$1;
(statearr_18568_20433[(1)] = (9));

} else {
var statearr_18569_20434 = state_18559__$1;
(statearr_18569_20434[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (3))){
var inst_18557 = (state_18559[(2)]);
var state_18559__$1 = state_18559;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18559__$1,inst_18557);
} else {
if((state_val_18560 === (12))){
var state_18559__$1 = state_18559;
var statearr_18570_20435 = state_18559__$1;
(statearr_18570_20435[(2)] = null);

(statearr_18570_20435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (2))){
var state_18559__$1 = state_18559;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18559__$1,(4),ch);
} else {
if((state_val_18560 === (11))){
var inst_18535 = (state_18559[(7)]);
var inst_18545 = (state_18559[(2)]);
var state_18559__$1 = state_18559;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18559__$1,(8),inst_18545,inst_18535);
} else {
if((state_val_18560 === (9))){
var state_18559__$1 = state_18559;
var statearr_18571_20436 = state_18559__$1;
(statearr_18571_20436[(2)] = tc);

(statearr_18571_20436[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (5))){
var inst_18538 = cljs.core.async.close_BANG_(tc);
var inst_18539 = cljs.core.async.close_BANG_(fc);
var state_18559__$1 = (function (){var statearr_18572 = state_18559;
(statearr_18572[(8)] = inst_18538);

return statearr_18572;
})();
var statearr_18573_20437 = state_18559__$1;
(statearr_18573_20437[(2)] = inst_18539);

(statearr_18573_20437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (14))){
var inst_18553 = (state_18559[(2)]);
var state_18559__$1 = state_18559;
var statearr_18575_20439 = state_18559__$1;
(statearr_18575_20439[(2)] = inst_18553);

(statearr_18575_20439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (10))){
var state_18559__$1 = state_18559;
var statearr_18576_20445 = state_18559__$1;
(statearr_18576_20445[(2)] = fc);

(statearr_18576_20445[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (8))){
var inst_18547 = (state_18559[(2)]);
var state_18559__$1 = state_18559;
if(cljs.core.truth_(inst_18547)){
var statearr_18577_20446 = state_18559__$1;
(statearr_18577_20446[(1)] = (12));

} else {
var statearr_18578_20447 = state_18559__$1;
(statearr_18578_20447[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__17783__auto__ = null;
var cljs$core$async$state_machine__17783__auto____0 = (function (){
var statearr_18579 = [null,null,null,null,null,null,null,null,null];
(statearr_18579[(0)] = cljs$core$async$state_machine__17783__auto__);

(statearr_18579[(1)] = (1));

return statearr_18579;
});
var cljs$core$async$state_machine__17783__auto____1 = (function (state_18559){
while(true){
var ret_value__17784__auto__ = (function (){try{while(true){
var result__17785__auto__ = switch__17782__auto__(state_18559);
if(cljs.core.keyword_identical_QMARK_(result__17785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17785__auto__;
}
break;
}
}catch (e18580){var ex__17786__auto__ = e18580;
var statearr_18581_20454 = state_18559;
(statearr_18581_20454[(2)] = ex__17786__auto__);


if(cljs.core.seq((state_18559[(4)]))){
var statearr_18582_20455 = state_18559;
(statearr_18582_20455[(1)] = cljs.core.first((state_18559[(4)])));

} else {
throw ex__17786__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20456 = state_18559;
state_18559 = G__20456;
continue;
} else {
return ret_value__17784__auto__;
}
break;
}
});
cljs$core$async$state_machine__17783__auto__ = function(state_18559){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17783__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17783__auto____1.call(this,state_18559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17783__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17783__auto____0;
cljs$core$async$state_machine__17783__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17783__auto____1;
return cljs$core$async$state_machine__17783__auto__;
})()
})();
var state__17940__auto__ = (function (){var statearr_18584 = f__17939__auto__();
(statearr_18584[(6)] = c__17938__auto___20426);

return statearr_18584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17940__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__17938__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17939__auto__ = (function (){var switch__17782__auto__ = (function (state_18606){
var state_val_18607 = (state_18606[(1)]);
if((state_val_18607 === (7))){
var inst_18602 = (state_18606[(2)]);
var state_18606__$1 = state_18606;
var statearr_18609_20461 = state_18606__$1;
(statearr_18609_20461[(2)] = inst_18602);

(statearr_18609_20461[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18607 === (1))){
var inst_18585 = init;
var inst_18586 = inst_18585;
var state_18606__$1 = (function (){var statearr_18610 = state_18606;
(statearr_18610[(7)] = inst_18586);

return statearr_18610;
})();
var statearr_18611_20462 = state_18606__$1;
(statearr_18611_20462[(2)] = null);

(statearr_18611_20462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18607 === (4))){
var inst_18589 = (state_18606[(8)]);
var inst_18589__$1 = (state_18606[(2)]);
var inst_18590 = (inst_18589__$1 == null);
var state_18606__$1 = (function (){var statearr_18612 = state_18606;
(statearr_18612[(8)] = inst_18589__$1);

return statearr_18612;
})();
if(cljs.core.truth_(inst_18590)){
var statearr_18613_20463 = state_18606__$1;
(statearr_18613_20463[(1)] = (5));

} else {
var statearr_18614_20464 = state_18606__$1;
(statearr_18614_20464[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18607 === (6))){
var inst_18593 = (state_18606[(9)]);
var inst_18586 = (state_18606[(7)]);
var inst_18589 = (state_18606[(8)]);
var inst_18593__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_18586,inst_18589) : f.call(null,inst_18586,inst_18589));
var inst_18594 = cljs.core.reduced_QMARK_(inst_18593__$1);
var state_18606__$1 = (function (){var statearr_18615 = state_18606;
(statearr_18615[(9)] = inst_18593__$1);

return statearr_18615;
})();
if(inst_18594){
var statearr_18616_20469 = state_18606__$1;
(statearr_18616_20469[(1)] = (8));

} else {
var statearr_18618_20470 = state_18606__$1;
(statearr_18618_20470[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18607 === (3))){
var inst_18604 = (state_18606[(2)]);
var state_18606__$1 = state_18606;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18606__$1,inst_18604);
} else {
if((state_val_18607 === (2))){
var state_18606__$1 = state_18606;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18606__$1,(4),ch);
} else {
if((state_val_18607 === (9))){
var inst_18593 = (state_18606[(9)]);
var inst_18586 = inst_18593;
var state_18606__$1 = (function (){var statearr_18619 = state_18606;
(statearr_18619[(7)] = inst_18586);

return statearr_18619;
})();
var statearr_18620_20471 = state_18606__$1;
(statearr_18620_20471[(2)] = null);

(statearr_18620_20471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18607 === (5))){
var inst_18586 = (state_18606[(7)]);
var state_18606__$1 = state_18606;
var statearr_18621_20478 = state_18606__$1;
(statearr_18621_20478[(2)] = inst_18586);

(statearr_18621_20478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18607 === (10))){
var inst_18600 = (state_18606[(2)]);
var state_18606__$1 = state_18606;
var statearr_18622_20479 = state_18606__$1;
(statearr_18622_20479[(2)] = inst_18600);

(statearr_18622_20479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18607 === (8))){
var inst_18593 = (state_18606[(9)]);
var inst_18596 = cljs.core.deref(inst_18593);
var state_18606__$1 = state_18606;
var statearr_18623_20480 = state_18606__$1;
(statearr_18623_20480[(2)] = inst_18596);

(statearr_18623_20480[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__17783__auto__ = null;
var cljs$core$async$reduce_$_state_machine__17783__auto____0 = (function (){
var statearr_18625 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18625[(0)] = cljs$core$async$reduce_$_state_machine__17783__auto__);

(statearr_18625[(1)] = (1));

return statearr_18625;
});
var cljs$core$async$reduce_$_state_machine__17783__auto____1 = (function (state_18606){
while(true){
var ret_value__17784__auto__ = (function (){try{while(true){
var result__17785__auto__ = switch__17782__auto__(state_18606);
if(cljs.core.keyword_identical_QMARK_(result__17785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17785__auto__;
}
break;
}
}catch (e18626){var ex__17786__auto__ = e18626;
var statearr_18627_20481 = state_18606;
(statearr_18627_20481[(2)] = ex__17786__auto__);


if(cljs.core.seq((state_18606[(4)]))){
var statearr_18628_20482 = state_18606;
(statearr_18628_20482[(1)] = cljs.core.first((state_18606[(4)])));

} else {
throw ex__17786__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20483 = state_18606;
state_18606 = G__20483;
continue;
} else {
return ret_value__17784__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__17783__auto__ = function(state_18606){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__17783__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__17783__auto____1.call(this,state_18606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__17783__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__17783__auto____0;
cljs$core$async$reduce_$_state_machine__17783__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__17783__auto____1;
return cljs$core$async$reduce_$_state_machine__17783__auto__;
})()
})();
var state__17940__auto__ = (function (){var statearr_18629 = f__17939__auto__();
(statearr_18629[(6)] = c__17938__auto__);

return statearr_18629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17940__auto__);
}));

return c__17938__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__17938__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17939__auto__ = (function (){var switch__17782__auto__ = (function (state_18636){
var state_val_18637 = (state_18636[(1)]);
if((state_val_18637 === (1))){
var inst_18631 = cljs.core.async.reduce(f__$1,init,ch);
var state_18636__$1 = state_18636;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18636__$1,(2),inst_18631);
} else {
if((state_val_18637 === (2))){
var inst_18633 = (state_18636[(2)]);
var inst_18634 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_18633) : f__$1.call(null,inst_18633));
var state_18636__$1 = state_18636;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18636__$1,inst_18634);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__17783__auto__ = null;
var cljs$core$async$transduce_$_state_machine__17783__auto____0 = (function (){
var statearr_18639 = [null,null,null,null,null,null,null];
(statearr_18639[(0)] = cljs$core$async$transduce_$_state_machine__17783__auto__);

(statearr_18639[(1)] = (1));

return statearr_18639;
});
var cljs$core$async$transduce_$_state_machine__17783__auto____1 = (function (state_18636){
while(true){
var ret_value__17784__auto__ = (function (){try{while(true){
var result__17785__auto__ = switch__17782__auto__(state_18636);
if(cljs.core.keyword_identical_QMARK_(result__17785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17785__auto__;
}
break;
}
}catch (e18640){var ex__17786__auto__ = e18640;
var statearr_18641_20490 = state_18636;
(statearr_18641_20490[(2)] = ex__17786__auto__);


if(cljs.core.seq((state_18636[(4)]))){
var statearr_18642_20491 = state_18636;
(statearr_18642_20491[(1)] = cljs.core.first((state_18636[(4)])));

} else {
throw ex__17786__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20492 = state_18636;
state_18636 = G__20492;
continue;
} else {
return ret_value__17784__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__17783__auto__ = function(state_18636){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__17783__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__17783__auto____1.call(this,state_18636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__17783__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__17783__auto____0;
cljs$core$async$transduce_$_state_machine__17783__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__17783__auto____1;
return cljs$core$async$transduce_$_state_machine__17783__auto__;
})()
})();
var state__17940__auto__ = (function (){var statearr_18643 = f__17939__auto__();
(statearr_18643[(6)] = c__17938__auto__);

return statearr_18643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17940__auto__);
}));

return c__17938__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__18646 = arguments.length;
switch (G__18646) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__17938__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17939__auto__ = (function (){var switch__17782__auto__ = (function (state_18671){
var state_val_18673 = (state_18671[(1)]);
if((state_val_18673 === (7))){
var inst_18653 = (state_18671[(2)]);
var state_18671__$1 = state_18671;
var statearr_18674_20495 = state_18671__$1;
(statearr_18674_20495[(2)] = inst_18653);

(statearr_18674_20495[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18673 === (1))){
var inst_18647 = cljs.core.seq(coll);
var inst_18648 = inst_18647;
var state_18671__$1 = (function (){var statearr_18675 = state_18671;
(statearr_18675[(7)] = inst_18648);

return statearr_18675;
})();
var statearr_18676_20501 = state_18671__$1;
(statearr_18676_20501[(2)] = null);

(statearr_18676_20501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18673 === (4))){
var inst_18648 = (state_18671[(7)]);
var inst_18651 = cljs.core.first(inst_18648);
var state_18671__$1 = state_18671;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18671__$1,(7),ch,inst_18651);
} else {
if((state_val_18673 === (13))){
var inst_18665 = (state_18671[(2)]);
var state_18671__$1 = state_18671;
var statearr_18677_20502 = state_18671__$1;
(statearr_18677_20502[(2)] = inst_18665);

(statearr_18677_20502[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18673 === (6))){
var inst_18656 = (state_18671[(2)]);
var state_18671__$1 = state_18671;
if(cljs.core.truth_(inst_18656)){
var statearr_18679_20503 = state_18671__$1;
(statearr_18679_20503[(1)] = (8));

} else {
var statearr_18680_20504 = state_18671__$1;
(statearr_18680_20504[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18673 === (3))){
var inst_18669 = (state_18671[(2)]);
var state_18671__$1 = state_18671;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18671__$1,inst_18669);
} else {
if((state_val_18673 === (12))){
var state_18671__$1 = state_18671;
var statearr_18681_20505 = state_18671__$1;
(statearr_18681_20505[(2)] = null);

(statearr_18681_20505[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18673 === (2))){
var inst_18648 = (state_18671[(7)]);
var state_18671__$1 = state_18671;
if(cljs.core.truth_(inst_18648)){
var statearr_18682_20506 = state_18671__$1;
(statearr_18682_20506[(1)] = (4));

} else {
var statearr_18683_20507 = state_18671__$1;
(statearr_18683_20507[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18673 === (11))){
var inst_18662 = cljs.core.async.close_BANG_(ch);
var state_18671__$1 = state_18671;
var statearr_18684_20508 = state_18671__$1;
(statearr_18684_20508[(2)] = inst_18662);

(statearr_18684_20508[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18673 === (9))){
var state_18671__$1 = state_18671;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18685_20509 = state_18671__$1;
(statearr_18685_20509[(1)] = (11));

} else {
var statearr_18687_20510 = state_18671__$1;
(statearr_18687_20510[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18673 === (5))){
var inst_18648 = (state_18671[(7)]);
var state_18671__$1 = state_18671;
var statearr_18688_20516 = state_18671__$1;
(statearr_18688_20516[(2)] = inst_18648);

(statearr_18688_20516[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18673 === (10))){
var inst_18667 = (state_18671[(2)]);
var state_18671__$1 = state_18671;
var statearr_18689_20517 = state_18671__$1;
(statearr_18689_20517[(2)] = inst_18667);

(statearr_18689_20517[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18673 === (8))){
var inst_18648 = (state_18671[(7)]);
var inst_18658 = cljs.core.next(inst_18648);
var inst_18648__$1 = inst_18658;
var state_18671__$1 = (function (){var statearr_18690 = state_18671;
(statearr_18690[(7)] = inst_18648__$1);

return statearr_18690;
})();
var statearr_18691_20518 = state_18671__$1;
(statearr_18691_20518[(2)] = null);

(statearr_18691_20518[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__17783__auto__ = null;
var cljs$core$async$state_machine__17783__auto____0 = (function (){
var statearr_18692 = [null,null,null,null,null,null,null,null];
(statearr_18692[(0)] = cljs$core$async$state_machine__17783__auto__);

(statearr_18692[(1)] = (1));

return statearr_18692;
});
var cljs$core$async$state_machine__17783__auto____1 = (function (state_18671){
while(true){
var ret_value__17784__auto__ = (function (){try{while(true){
var result__17785__auto__ = switch__17782__auto__(state_18671);
if(cljs.core.keyword_identical_QMARK_(result__17785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17785__auto__;
}
break;
}
}catch (e18693){var ex__17786__auto__ = e18693;
var statearr_18694_20524 = state_18671;
(statearr_18694_20524[(2)] = ex__17786__auto__);


if(cljs.core.seq((state_18671[(4)]))){
var statearr_18696_20525 = state_18671;
(statearr_18696_20525[(1)] = cljs.core.first((state_18671[(4)])));

} else {
throw ex__17786__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20526 = state_18671;
state_18671 = G__20526;
continue;
} else {
return ret_value__17784__auto__;
}
break;
}
});
cljs$core$async$state_machine__17783__auto__ = function(state_18671){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17783__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17783__auto____1.call(this,state_18671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17783__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17783__auto____0;
cljs$core$async$state_machine__17783__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17783__auto____1;
return cljs$core$async$state_machine__17783__auto__;
})()
})();
var state__17940__auto__ = (function (){var statearr_18697 = f__17939__auto__();
(statearr_18697[(6)] = c__17938__auto__);

return statearr_18697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17940__auto__);
}));

return c__17938__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__18700 = arguments.length;
switch (G__18700) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_20531 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null,_));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_20531(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_20533 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_20533(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_20535 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_20535(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_20536 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null,m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_20536(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18707 = (function (ch,cs,meta18708){
this.ch = ch;
this.cs = cs;
this.meta18708 = meta18708;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18709,meta18708__$1){
var self__ = this;
var _18709__$1 = this;
return (new cljs.core.async.t_cljs$core$async18707(self__.ch,self__.cs,meta18708__$1));
}));

(cljs.core.async.t_cljs$core$async18707.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18709){
var self__ = this;
var _18709__$1 = this;
return self__.meta18708;
}));

(cljs.core.async.t_cljs$core$async18707.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18707.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18707.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18707.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async18707.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async18707.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async18707.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18708","meta18708",625402187,null)], null);
}));

(cljs.core.async.t_cljs$core$async18707.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18707.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18707");

(cljs.core.async.t_cljs$core$async18707.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async18707");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18707.
 */
cljs.core.async.__GT_t_cljs$core$async18707 = (function cljs$core$async$__GT_t_cljs$core$async18707(ch,cs,meta18708){
return (new cljs.core.async.t_cljs$core$async18707(ch,cs,meta18708));
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async18707(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__17938__auto___20545 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17939__auto__ = (function (){var switch__17782__auto__ = (function (state_18853){
var state_val_18854 = (state_18853[(1)]);
if((state_val_18854 === (7))){
var inst_18845 = (state_18853[(2)]);
var state_18853__$1 = state_18853;
var statearr_18856_20546 = state_18853__$1;
(statearr_18856_20546[(2)] = inst_18845);

(statearr_18856_20546[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18854 === (20))){
var inst_18745 = (state_18853[(7)]);
var inst_18757 = cljs.core.first(inst_18745);
var inst_18758 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18757,(0),null);
var inst_18759 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18757,(1),null);
var state_18853__$1 = (function (){var statearr_18861 = state_18853;
(statearr_18861[(8)] = inst_18758);

return statearr_18861;
})();
if(cljs.core.truth_(inst_18759)){
var statearr_18862_20547 = state_18853__$1;
(statearr_18862_20547[(1)] = (22));

} else {
var statearr_18865_20548 = state_18853__$1;
(statearr_18865_20548[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18854 === (27))){
var inst_18794 = (state_18853[(9)]);
var inst_18714 = (state_18853[(10)]);
var inst_18789 = (state_18853[(11)]);
var inst_18787 = (state_18853[(12)]);
var inst_18794__$1 = cljs.core._nth(inst_18787,inst_18789);
var inst_18795 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18794__$1,inst_18714,done);
var state_18853__$1 = (function (){var statearr_18871 = state_18853;
(statearr_18871[(9)] = inst_18794__$1);

return statearr_18871;
})();
if(cljs.core.truth_(inst_18795)){
var statearr_18872_20550 = state_18853__$1;
(statearr_18872_20550[(1)] = (30));

} else {
var statearr_18874_20551 = state_18853__$1;
(statearr_18874_20551[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18854 === (1))){
var state_18853__$1 = state_18853;
var statearr_18878_20555 = state_18853__$1;
(statearr_18878_20555[(2)] = null);

(statearr_18878_20555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18854 === (24))){
var inst_18745 = (state_18853[(7)]);
var inst_18764 = (state_18853[(2)]);
var inst_18765 = cljs.core.next(inst_18745);
var inst_18723 = inst_18765;
var inst_18724 = null;
var inst_18725 = (0);
var inst_18726 = (0);
var state_18853__$1 = (function (){var statearr_18882 = state_18853;
(statearr_18882[(13)] = inst_18764);

(statearr_18882[(14)] = inst_18723);

(statearr_18882[(15)] = inst_18724);

(statearr_18882[(16)] = inst_18726);

(statearr_18882[(17)] = inst_18725);

return statearr_18882;
})();
var statearr_18884_20556 = state_18853__$1;
(statearr_18884_20556[(2)] = null);

(statearr_18884_20556[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18854 === (39))){
var state_18853__$1 = state_18853;
var statearr_18893_20558 = state_18853__$1;
(statearr_18893_20558[(2)] = null);

(statearr_18893_20558[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18854 === (4))){
var inst_18714 = (state_18853[(10)]);
var inst_18714__$1 = (state_18853[(2)]);
var inst_18715 = (inst_18714__$1 == null);
var state_18853__$1 = (function (){var statearr_18897 = state_18853;
(statearr_18897[(10)] = inst_18714__$1);

return statearr_18897;
})();
if(cljs.core.truth_(inst_18715)){
var statearr_18899_20561 = state_18853__$1;
(statearr_18899_20561[(1)] = (5));

} else {
var statearr_18900_20562 = state_18853__$1;
(statearr_18900_20562[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18854 === (15))){
var inst_18723 = (state_18853[(14)]);
var inst_18724 = (state_18853[(15)]);
var inst_18726 = (state_18853[(16)]);
var inst_18725 = (state_18853[(17)]);
var inst_18741 = (state_18853[(2)]);
var inst_18742 = (inst_18726 + (1));
var tmp18889 = inst_18723;
var tmp18890 = inst_18724;
var tmp18891 = inst_18725;
var inst_18723__$1 = tmp18889;
var inst_18724__$1 = tmp18890;
var inst_18725__$1 = tmp18891;
var inst_18726__$1 = inst_18742;
var state_18853__$1 = (function (){var statearr_18905 = state_18853;
(statearr_18905[(14)] = inst_18723__$1);

(statearr_18905[(18)] = inst_18741);

(statearr_18905[(15)] = inst_18724__$1);

(statearr_18905[(16)] = inst_18726__$1);

(statearr_18905[(17)] = inst_18725__$1);

return statearr_18905;
})();
var statearr_18909_20563 = state_18853__$1;
(statearr_18909_20563[(2)] = null);

(statearr_18909_20563[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18854 === (21))){
var inst_18768 = (state_18853[(2)]);
var state_18853__$1 = state_18853;
var statearr_18914_20564 = state_18853__$1;
(statearr_18914_20564[(2)] = inst_18768);

(statearr_18914_20564[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18854 === (31))){
var inst_18794 = (state_18853[(9)]);
var inst_18798 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18794);
var state_18853__$1 = state_18853;
var statearr_18919_20565 = state_18853__$1;
(statearr_18919_20565[(2)] = inst_18798);

(statearr_18919_20565[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18854 === (32))){
var inst_18786 = (state_18853[(19)]);
var inst_18789 = (state_18853[(11)]);
var inst_18787 = (state_18853[(12)]);
var inst_18788 = (state_18853[(20)]);
var inst_18800 = (state_18853[(2)]);
var inst_18801 = (inst_18789 + (1));
var tmp18911 = inst_18786;
var tmp18912 = inst_18787;
var tmp18913 = inst_18788;
var inst_18786__$1 = tmp18911;
var inst_18787__$1 = tmp18912;
var inst_18788__$1 = tmp18913;
var inst_18789__$1 = inst_18801;
var state_18853__$1 = (function (){var statearr_18924 = state_18853;
(statearr_18924[(19)] = inst_18786__$1);

(statearr_18924[(11)] = inst_18789__$1);

(statearr_18924[(12)] = inst_18787__$1);

(statearr_18924[(20)] = inst_18788__$1);

(statearr_18924[(21)] = inst_18800);

return statearr_18924;
})();
var statearr_18928_20573 = state_18853__$1;
(statearr_18928_20573[(2)] = null);

(statearr_18928_20573[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18854 === (40))){
var inst_18816 = (state_18853[(22)]);
var inst_18820 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18816);
var state_18853__$1 = state_18853;
var statearr_18933_20577 = state_18853__$1;
(statearr_18933_20577[(2)] = inst_18820);

(statearr_18933_20577[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18854 === (33))){
var inst_18804 = (state_18853[(23)]);
var inst_18806 = cljs.core.chunked_seq_QMARK_(inst_18804);
var state_18853__$1 = state_18853;
if(inst_18806){
var statearr_18937_20578 = state_18853__$1;
(statearr_18937_20578[(1)] = (36));

} else {
var statearr_18939_20579 = state_18853__$1;
(statearr_18939_20579[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18854 === (13))){
var inst_18735 = (state_18853[(24)]);
var inst_18738 = cljs.core.async.close_BANG_(inst_18735);
var state_18853__$1 = state_18853;
var statearr_18941_20580 = state_18853__$1;
(statearr_18941_20580[(2)] = inst_18738);

(statearr_18941_20580[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18854 === (22))){
var inst_18758 = (state_18853[(8)]);
var inst_18761 = cljs.core.async.close_BANG_(inst_18758);
var state_18853__$1 = state_18853;
var statearr_18946_20581 = state_18853__$1;
(statearr_18946_20581[(2)] = inst_18761);

(statearr_18946_20581[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18854 === (36))){
var inst_18804 = (state_18853[(23)]);
var inst_18808 = cljs.core.chunk_first(inst_18804);
var inst_18810 = cljs.core.chunk_rest(inst_18804);
var inst_18813 = cljs.core.count(inst_18808);
var inst_18786 = inst_18810;
var inst_18787 = inst_18808;
var inst_18788 = inst_18813;
var inst_18789 = (0);
var state_18853__$1 = (function (){var statearr_18950 = state_18853;
(statearr_18950[(19)] = inst_18786);

(statearr_18950[(11)] = inst_18789);

(statearr_18950[(12)] = inst_18787);

(statearr_18950[(20)] = inst_18788);

return statearr_18950;
})();
var statearr_18952_20582 = state_18853__$1;
(statearr_18952_20582[(2)] = null);

(statearr_18952_20582[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18854 === (41))){
var inst_18804 = (state_18853[(23)]);
var inst_18822 = (state_18853[(2)]);
var inst_18823 = cljs.core.next(inst_18804);
var inst_18786 = inst_18823;
var inst_18787 = null;
var inst_18788 = (0);
var inst_18789 = (0);
var state_18853__$1 = (function (){var statearr_18956 = state_18853;
(statearr_18956[(19)] = inst_18786);

(statearr_18956[(11)] = inst_18789);

(statearr_18956[(12)] = inst_18787);

(statearr_18956[(20)] = inst_18788);

(statearr_18956[(25)] = inst_18822);

return statearr_18956;
})();
var statearr_18960_20583 = state_18853__$1;
(statearr_18960_20583[(2)] = null);

(statearr_18960_20583[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18854 === (43))){
var state_18853__$1 = state_18853;
var statearr_18963_20584 = state_18853__$1;
(statearr_18963_20584[(2)] = null);

(statearr_18963_20584[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18854 === (29))){
var inst_18831 = (state_18853[(2)]);
var state_18853__$1 = state_18853;
var statearr_18967_20585 = state_18853__$1;
(statearr_18967_20585[(2)] = inst_18831);

(statearr_18967_20585[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18854 === (44))){
var inst_18842 = (state_18853[(2)]);
var state_18853__$1 = (function (){var statearr_18972 = state_18853;
(statearr_18972[(26)] = inst_18842);

return statearr_18972;
})();
var statearr_18973_20586 = state_18853__$1;
(statearr_18973_20586[(2)] = null);

(statearr_18973_20586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18854 === (6))){
var inst_18778 = (state_18853[(27)]);
var inst_18777 = cljs.core.deref(cs);
var inst_18778__$1 = cljs.core.keys(inst_18777);
var inst_18779 = cljs.core.count(inst_18778__$1);
var inst_18780 = cljs.core.reset_BANG_(dctr,inst_18779);
var inst_18785 = cljs.core.seq(inst_18778__$1);
var inst_18786 = inst_18785;
var inst_18787 = null;
var inst_18788 = (0);
var inst_18789 = (0);
var state_18853__$1 = (function (){var statearr_18978 = state_18853;
(statearr_18978[(19)] = inst_18786);

(statearr_18978[(11)] = inst_18789);

(statearr_18978[(12)] = inst_18787);

(statearr_18978[(20)] = inst_18788);

(statearr_18978[(28)] = inst_18780);

(statearr_18978[(27)] = inst_18778__$1);

return statearr_18978;
})();
var statearr_18980_20587 = state_18853__$1;
(statearr_18980_20587[(2)] = null);

(statearr_18980_20587[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18854 === (28))){
var inst_18786 = (state_18853[(19)]);
var inst_18804 = (state_18853[(23)]);
var inst_18804__$1 = cljs.core.seq(inst_18786);
var state_18853__$1 = (function (){var statearr_18986 = state_18853;
(statearr_18986[(23)] = inst_18804__$1);

return statearr_18986;
})();
if(inst_18804__$1){
var statearr_18987_20588 = state_18853__$1;
(statearr_18987_20588[(1)] = (33));

} else {
var statearr_18991_20589 = state_18853__$1;
(statearr_18991_20589[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18854 === (25))){
var inst_18789 = (state_18853[(11)]);
var inst_18788 = (state_18853[(20)]);
var inst_18791 = (inst_18789 < inst_18788);
var inst_18792 = inst_18791;
var state_18853__$1 = state_18853;
if(cljs.core.truth_(inst_18792)){
var statearr_18993_20590 = state_18853__$1;
(statearr_18993_20590[(1)] = (27));

} else {
var statearr_18997_20591 = state_18853__$1;
(statearr_18997_20591[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18854 === (34))){
var state_18853__$1 = state_18853;
var statearr_18999_20595 = state_18853__$1;
(statearr_18999_20595[(2)] = null);

(statearr_18999_20595[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18854 === (17))){
var state_18853__$1 = state_18853;
var statearr_19003_20596 = state_18853__$1;
(statearr_19003_20596[(2)] = null);

(statearr_19003_20596[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18854 === (3))){
var inst_18847 = (state_18853[(2)]);
var state_18853__$1 = state_18853;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18853__$1,inst_18847);
} else {
if((state_val_18854 === (12))){
var inst_18773 = (state_18853[(2)]);
var state_18853__$1 = state_18853;
var statearr_19008_20597 = state_18853__$1;
(statearr_19008_20597[(2)] = inst_18773);

(statearr_19008_20597[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18854 === (2))){
var state_18853__$1 = state_18853;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18853__$1,(4),ch);
} else {
if((state_val_18854 === (23))){
var state_18853__$1 = state_18853;
var statearr_19011_20600 = state_18853__$1;
(statearr_19011_20600[(2)] = null);

(statearr_19011_20600[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18854 === (35))){
var inst_18829 = (state_18853[(2)]);
var state_18853__$1 = state_18853;
var statearr_19015_20601 = state_18853__$1;
(statearr_19015_20601[(2)] = inst_18829);

(statearr_19015_20601[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18854 === (19))){
var inst_18745 = (state_18853[(7)]);
var inst_18749 = cljs.core.chunk_first(inst_18745);
var inst_18750 = cljs.core.chunk_rest(inst_18745);
var inst_18751 = cljs.core.count(inst_18749);
var inst_18723 = inst_18750;
var inst_18724 = inst_18749;
var inst_18725 = inst_18751;
var inst_18726 = (0);
var state_18853__$1 = (function (){var statearr_19020 = state_18853;
(statearr_19020[(14)] = inst_18723);

(statearr_19020[(15)] = inst_18724);

(statearr_19020[(16)] = inst_18726);

(statearr_19020[(17)] = inst_18725);

return statearr_19020;
})();
var statearr_19022_20603 = state_18853__$1;
(statearr_19022_20603[(2)] = null);

(statearr_19022_20603[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18854 === (11))){
var inst_18745 = (state_18853[(7)]);
var inst_18723 = (state_18853[(14)]);
var inst_18745__$1 = cljs.core.seq(inst_18723);
var state_18853__$1 = (function (){var statearr_19027 = state_18853;
(statearr_19027[(7)] = inst_18745__$1);

return statearr_19027;
})();
if(inst_18745__$1){
var statearr_19029_20605 = state_18853__$1;
(statearr_19029_20605[(1)] = (16));

} else {
var statearr_19031_20606 = state_18853__$1;
(statearr_19031_20606[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18854 === (9))){
var inst_18775 = (state_18853[(2)]);
var state_18853__$1 = state_18853;
var statearr_19035_20607 = state_18853__$1;
(statearr_19035_20607[(2)] = inst_18775);

(statearr_19035_20607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18854 === (5))){
var inst_18721 = cljs.core.deref(cs);
var inst_18722 = cljs.core.seq(inst_18721);
var inst_18723 = inst_18722;
var inst_18724 = null;
var inst_18725 = (0);
var inst_18726 = (0);
var state_18853__$1 = (function (){var statearr_19040 = state_18853;
(statearr_19040[(14)] = inst_18723);

(statearr_19040[(15)] = inst_18724);

(statearr_19040[(16)] = inst_18726);

(statearr_19040[(17)] = inst_18725);

return statearr_19040;
})();
var statearr_19044_20608 = state_18853__$1;
(statearr_19044_20608[(2)] = null);

(statearr_19044_20608[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18854 === (14))){
var state_18853__$1 = state_18853;
var statearr_19046_20609 = state_18853__$1;
(statearr_19046_20609[(2)] = null);

(statearr_19046_20609[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18854 === (45))){
var inst_18839 = (state_18853[(2)]);
var state_18853__$1 = state_18853;
var statearr_19050_20610 = state_18853__$1;
(statearr_19050_20610[(2)] = inst_18839);

(statearr_19050_20610[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18854 === (26))){
var inst_18778 = (state_18853[(27)]);
var inst_18833 = (state_18853[(2)]);
var inst_18834 = cljs.core.seq(inst_18778);
var state_18853__$1 = (function (){var statearr_19055 = state_18853;
(statearr_19055[(29)] = inst_18833);

return statearr_19055;
})();
if(inst_18834){
var statearr_19058_20611 = state_18853__$1;
(statearr_19058_20611[(1)] = (42));

} else {
var statearr_19059_20612 = state_18853__$1;
(statearr_19059_20612[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18854 === (16))){
var inst_18745 = (state_18853[(7)]);
var inst_18747 = cljs.core.chunked_seq_QMARK_(inst_18745);
var state_18853__$1 = state_18853;
if(inst_18747){
var statearr_19064_20613 = state_18853__$1;
(statearr_19064_20613[(1)] = (19));

} else {
var statearr_19065_20614 = state_18853__$1;
(statearr_19065_20614[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18854 === (38))){
var inst_18826 = (state_18853[(2)]);
var state_18853__$1 = state_18853;
var statearr_19070_20615 = state_18853__$1;
(statearr_19070_20615[(2)] = inst_18826);

(statearr_19070_20615[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18854 === (30))){
var state_18853__$1 = state_18853;
var statearr_19076_20616 = state_18853__$1;
(statearr_19076_20616[(2)] = null);

(statearr_19076_20616[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18854 === (10))){
var inst_18724 = (state_18853[(15)]);
var inst_18726 = (state_18853[(16)]);
var inst_18734 = cljs.core._nth(inst_18724,inst_18726);
var inst_18735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18734,(0),null);
var inst_18736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18734,(1),null);
var state_18853__$1 = (function (){var statearr_19081 = state_18853;
(statearr_19081[(24)] = inst_18735);

return statearr_19081;
})();
if(cljs.core.truth_(inst_18736)){
var statearr_19083_20617 = state_18853__$1;
(statearr_19083_20617[(1)] = (13));

} else {
var statearr_19084_20618 = state_18853__$1;
(statearr_19084_20618[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18854 === (18))){
var inst_18771 = (state_18853[(2)]);
var state_18853__$1 = state_18853;
var statearr_19086_20619 = state_18853__$1;
(statearr_19086_20619[(2)] = inst_18771);

(statearr_19086_20619[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18854 === (42))){
var state_18853__$1 = state_18853;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18853__$1,(45),dchan);
} else {
if((state_val_18854 === (37))){
var inst_18714 = (state_18853[(10)]);
var inst_18816 = (state_18853[(22)]);
var inst_18804 = (state_18853[(23)]);
var inst_18816__$1 = cljs.core.first(inst_18804);
var inst_18817 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18816__$1,inst_18714,done);
var state_18853__$1 = (function (){var statearr_19094 = state_18853;
(statearr_19094[(22)] = inst_18816__$1);

return statearr_19094;
})();
if(cljs.core.truth_(inst_18817)){
var statearr_19095_20624 = state_18853__$1;
(statearr_19095_20624[(1)] = (39));

} else {
var statearr_19097_20628 = state_18853__$1;
(statearr_19097_20628[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18854 === (8))){
var inst_18726 = (state_18853[(16)]);
var inst_18725 = (state_18853[(17)]);
var inst_18728 = (inst_18726 < inst_18725);
var inst_18729 = inst_18728;
var state_18853__$1 = state_18853;
if(cljs.core.truth_(inst_18729)){
var statearr_19102_20629 = state_18853__$1;
(statearr_19102_20629[(1)] = (10));

} else {
var statearr_19103_20630 = state_18853__$1;
(statearr_19103_20630[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__17783__auto__ = null;
var cljs$core$async$mult_$_state_machine__17783__auto____0 = (function (){
var statearr_19108 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19108[(0)] = cljs$core$async$mult_$_state_machine__17783__auto__);

(statearr_19108[(1)] = (1));

return statearr_19108;
});
var cljs$core$async$mult_$_state_machine__17783__auto____1 = (function (state_18853){
while(true){
var ret_value__17784__auto__ = (function (){try{while(true){
var result__17785__auto__ = switch__17782__auto__(state_18853);
if(cljs.core.keyword_identical_QMARK_(result__17785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17785__auto__;
}
break;
}
}catch (e19109){var ex__17786__auto__ = e19109;
var statearr_19110_20631 = state_18853;
(statearr_19110_20631[(2)] = ex__17786__auto__);


if(cljs.core.seq((state_18853[(4)]))){
var statearr_19111_20632 = state_18853;
(statearr_19111_20632[(1)] = cljs.core.first((state_18853[(4)])));

} else {
throw ex__17786__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20633 = state_18853;
state_18853 = G__20633;
continue;
} else {
return ret_value__17784__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__17783__auto__ = function(state_18853){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__17783__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__17783__auto____1.call(this,state_18853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__17783__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__17783__auto____0;
cljs$core$async$mult_$_state_machine__17783__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__17783__auto____1;
return cljs$core$async$mult_$_state_machine__17783__auto__;
})()
})();
var state__17940__auto__ = (function (){var statearr_19112 = f__17939__auto__();
(statearr_19112[(6)] = c__17938__auto___20545);

return statearr_19112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17940__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__19114 = arguments.length;
switch (G__19114) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_20635 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_20635(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_20639 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_20639(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_20640 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null,m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_20640(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_20641 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null,m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_20641(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_20645 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null,m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_20645(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___20647 = arguments.length;
var i__5727__auto___20648 = (0);
while(true){
if((i__5727__auto___20648 < len__5726__auto___20647)){
args__5732__auto__.push((arguments[i__5727__auto___20648]));

var G__20649 = (i__5727__auto___20648 + (1));
i__5727__auto___20648 = G__20649;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__19121){
var map__19122 = p__19121;
var map__19122__$1 = cljs.core.__destructure_map(map__19122);
var opts = map__19122__$1;
var statearr_19123_20650 = state;
(statearr_19123_20650[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_19124_20651 = state;
(statearr_19124_20651[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_19125_20658 = state;
(statearr_19125_20658[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq19117){
var G__19118 = cljs.core.first(seq19117);
var seq19117__$1 = cljs.core.next(seq19117);
var G__19119 = cljs.core.first(seq19117__$1);
var seq19117__$2 = cljs.core.next(seq19117__$1);
var G__19120 = cljs.core.first(seq19117__$2);
var seq19117__$3 = cljs.core.next(seq19117__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19118,G__19119,G__19120,seq19117__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19137 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19138){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta19138 = meta19138;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19139,meta19138__$1){
var self__ = this;
var _19139__$1 = this;
return (new cljs.core.async.t_cljs$core$async19137(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta19138__$1));
}));

(cljs.core.async.t_cljs$core$async19137.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19139){
var self__ = this;
var _19139__$1 = this;
return self__.meta19138;
}));

(cljs.core.async.t_cljs$core$async19137.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19137.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async19137.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19137.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19137.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19137.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19137.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19137.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19137.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta19138","meta19138",-1681909666,null)], null);
}));

(cljs.core.async.t_cljs$core$async19137.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19137.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19137");

(cljs.core.async.t_cljs$core$async19137.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async19137");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19137.
 */
cljs.core.async.__GT_t_cljs$core$async19137 = (function cljs$core$async$__GT_t_cljs$core$async19137(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19138){
return (new cljs.core.async.t_cljs$core$async19137(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19138));
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async19137(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__17938__auto___20666 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17939__auto__ = (function (){var switch__17782__auto__ = (function (state_19236){
var state_val_19237 = (state_19236[(1)]);
if((state_val_19237 === (7))){
var inst_19188 = (state_19236[(2)]);
var state_19236__$1 = state_19236;
if(cljs.core.truth_(inst_19188)){
var statearr_19242_20667 = state_19236__$1;
(statearr_19242_20667[(1)] = (8));

} else {
var statearr_19243_20668 = state_19236__$1;
(statearr_19243_20668[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (20))){
var inst_19181 = (state_19236[(7)]);
var state_19236__$1 = state_19236;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19236__$1,(23),out,inst_19181);
} else {
if((state_val_19237 === (1))){
var inst_19164 = calc_state();
var inst_19165 = cljs.core.__destructure_map(inst_19164);
var inst_19166 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19165,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19167 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19165,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19168 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19165,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19169 = inst_19164;
var state_19236__$1 = (function (){var statearr_19248 = state_19236;
(statearr_19248[(8)] = inst_19167);

(statearr_19248[(9)] = inst_19168);

(statearr_19248[(10)] = inst_19169);

(statearr_19248[(11)] = inst_19166);

return statearr_19248;
})();
var statearr_19249_20669 = state_19236__$1;
(statearr_19249_20669[(2)] = null);

(statearr_19249_20669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (24))){
var inst_19172 = (state_19236[(12)]);
var inst_19169 = inst_19172;
var state_19236__$1 = (function (){var statearr_19250 = state_19236;
(statearr_19250[(10)] = inst_19169);

return statearr_19250;
})();
var statearr_19251_20670 = state_19236__$1;
(statearr_19251_20670[(2)] = null);

(statearr_19251_20670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (4))){
var inst_19181 = (state_19236[(7)]);
var inst_19183 = (state_19236[(13)]);
var inst_19180 = (state_19236[(2)]);
var inst_19181__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19180,(0),null);
var inst_19182 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19180,(1),null);
var inst_19183__$1 = (inst_19181__$1 == null);
var state_19236__$1 = (function (){var statearr_19256 = state_19236;
(statearr_19256[(7)] = inst_19181__$1);

(statearr_19256[(14)] = inst_19182);

(statearr_19256[(13)] = inst_19183__$1);

return statearr_19256;
})();
if(cljs.core.truth_(inst_19183__$1)){
var statearr_19257_20671 = state_19236__$1;
(statearr_19257_20671[(1)] = (5));

} else {
var statearr_19258_20672 = state_19236__$1;
(statearr_19258_20672[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (15))){
var inst_19173 = (state_19236[(15)]);
var inst_19206 = (state_19236[(16)]);
var inst_19206__$1 = cljs.core.empty_QMARK_(inst_19173);
var state_19236__$1 = (function (){var statearr_19260 = state_19236;
(statearr_19260[(16)] = inst_19206__$1);

return statearr_19260;
})();
if(inst_19206__$1){
var statearr_19261_20674 = state_19236__$1;
(statearr_19261_20674[(1)] = (17));

} else {
var statearr_19262_20675 = state_19236__$1;
(statearr_19262_20675[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (21))){
var inst_19172 = (state_19236[(12)]);
var inst_19169 = inst_19172;
var state_19236__$1 = (function (){var statearr_19263 = state_19236;
(statearr_19263[(10)] = inst_19169);

return statearr_19263;
})();
var statearr_19264_20676 = state_19236__$1;
(statearr_19264_20676[(2)] = null);

(statearr_19264_20676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (13))){
var inst_19195 = (state_19236[(2)]);
var inst_19196 = calc_state();
var inst_19169 = inst_19196;
var state_19236__$1 = (function (){var statearr_19265 = state_19236;
(statearr_19265[(17)] = inst_19195);

(statearr_19265[(10)] = inst_19169);

return statearr_19265;
})();
var statearr_19266_20679 = state_19236__$1;
(statearr_19266_20679[(2)] = null);

(statearr_19266_20679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (22))){
var inst_19229 = (state_19236[(2)]);
var state_19236__$1 = state_19236;
var statearr_19271_20680 = state_19236__$1;
(statearr_19271_20680[(2)] = inst_19229);

(statearr_19271_20680[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (6))){
var inst_19182 = (state_19236[(14)]);
var inst_19186 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19182,change);
var state_19236__$1 = state_19236;
var statearr_19276_20681 = state_19236__$1;
(statearr_19276_20681[(2)] = inst_19186);

(statearr_19276_20681[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (25))){
var state_19236__$1 = state_19236;
var statearr_19277_20682 = state_19236__$1;
(statearr_19277_20682[(2)] = null);

(statearr_19277_20682[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (17))){
var inst_19182 = (state_19236[(14)]);
var inst_19174 = (state_19236[(18)]);
var inst_19208 = (inst_19174.cljs$core$IFn$_invoke$arity$1 ? inst_19174.cljs$core$IFn$_invoke$arity$1(inst_19182) : inst_19174.call(null,inst_19182));
var inst_19209 = cljs.core.not(inst_19208);
var state_19236__$1 = state_19236;
var statearr_19278_20683 = state_19236__$1;
(statearr_19278_20683[(2)] = inst_19209);

(statearr_19278_20683[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (3))){
var inst_19233 = (state_19236[(2)]);
var state_19236__$1 = state_19236;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19236__$1,inst_19233);
} else {
if((state_val_19237 === (12))){
var state_19236__$1 = state_19236;
var statearr_19283_20684 = state_19236__$1;
(statearr_19283_20684[(2)] = null);

(statearr_19283_20684[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (2))){
var inst_19169 = (state_19236[(10)]);
var inst_19172 = (state_19236[(12)]);
var inst_19172__$1 = cljs.core.__destructure_map(inst_19169);
var inst_19173 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19172__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19174 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19172__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19175 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19172__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_19236__$1 = (function (){var statearr_19288 = state_19236;
(statearr_19288[(15)] = inst_19173);

(statearr_19288[(18)] = inst_19174);

(statearr_19288[(12)] = inst_19172__$1);

return statearr_19288;
})();
return cljs.core.async.ioc_alts_BANG_(state_19236__$1,(4),inst_19175);
} else {
if((state_val_19237 === (23))){
var inst_19220 = (state_19236[(2)]);
var state_19236__$1 = state_19236;
if(cljs.core.truth_(inst_19220)){
var statearr_19289_20689 = state_19236__$1;
(statearr_19289_20689[(1)] = (24));

} else {
var statearr_19290_20690 = state_19236__$1;
(statearr_19290_20690[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (19))){
var inst_19212 = (state_19236[(2)]);
var state_19236__$1 = state_19236;
var statearr_19294_20691 = state_19236__$1;
(statearr_19294_20691[(2)] = inst_19212);

(statearr_19294_20691[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (11))){
var inst_19182 = (state_19236[(14)]);
var inst_19192 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_19182);
var state_19236__$1 = state_19236;
var statearr_19296_20693 = state_19236__$1;
(statearr_19296_20693[(2)] = inst_19192);

(statearr_19296_20693[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (9))){
var inst_19203 = (state_19236[(19)]);
var inst_19182 = (state_19236[(14)]);
var inst_19173 = (state_19236[(15)]);
var inst_19203__$1 = (inst_19173.cljs$core$IFn$_invoke$arity$1 ? inst_19173.cljs$core$IFn$_invoke$arity$1(inst_19182) : inst_19173.call(null,inst_19182));
var state_19236__$1 = (function (){var statearr_19297 = state_19236;
(statearr_19297[(19)] = inst_19203__$1);

return statearr_19297;
})();
if(cljs.core.truth_(inst_19203__$1)){
var statearr_19298_20698 = state_19236__$1;
(statearr_19298_20698[(1)] = (14));

} else {
var statearr_19299_20699 = state_19236__$1;
(statearr_19299_20699[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (5))){
var inst_19183 = (state_19236[(13)]);
var state_19236__$1 = state_19236;
var statearr_19301_20700 = state_19236__$1;
(statearr_19301_20700[(2)] = inst_19183);

(statearr_19301_20700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (14))){
var inst_19203 = (state_19236[(19)]);
var state_19236__$1 = state_19236;
var statearr_19302_20701 = state_19236__$1;
(statearr_19302_20701[(2)] = inst_19203);

(statearr_19302_20701[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (26))){
var inst_19225 = (state_19236[(2)]);
var state_19236__$1 = state_19236;
var statearr_19303_20702 = state_19236__$1;
(statearr_19303_20702[(2)] = inst_19225);

(statearr_19303_20702[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (16))){
var inst_19217 = (state_19236[(2)]);
var state_19236__$1 = state_19236;
if(cljs.core.truth_(inst_19217)){
var statearr_19304_20703 = state_19236__$1;
(statearr_19304_20703[(1)] = (20));

} else {
var statearr_19305_20704 = state_19236__$1;
(statearr_19305_20704[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (10))){
var inst_19231 = (state_19236[(2)]);
var state_19236__$1 = state_19236;
var statearr_19310_20705 = state_19236__$1;
(statearr_19310_20705[(2)] = inst_19231);

(statearr_19310_20705[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (18))){
var inst_19206 = (state_19236[(16)]);
var state_19236__$1 = state_19236;
var statearr_19314_20706 = state_19236__$1;
(statearr_19314_20706[(2)] = inst_19206);

(statearr_19314_20706[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (8))){
var inst_19181 = (state_19236[(7)]);
var inst_19190 = (inst_19181 == null);
var state_19236__$1 = state_19236;
if(cljs.core.truth_(inst_19190)){
var statearr_19316_20707 = state_19236__$1;
(statearr_19316_20707[(1)] = (11));

} else {
var statearr_19317_20708 = state_19236__$1;
(statearr_19317_20708[(1)] = (12));

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
});
return (function() {
var cljs$core$async$mix_$_state_machine__17783__auto__ = null;
var cljs$core$async$mix_$_state_machine__17783__auto____0 = (function (){
var statearr_19321 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19321[(0)] = cljs$core$async$mix_$_state_machine__17783__auto__);

(statearr_19321[(1)] = (1));

return statearr_19321;
});
var cljs$core$async$mix_$_state_machine__17783__auto____1 = (function (state_19236){
while(true){
var ret_value__17784__auto__ = (function (){try{while(true){
var result__17785__auto__ = switch__17782__auto__(state_19236);
if(cljs.core.keyword_identical_QMARK_(result__17785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17785__auto__;
}
break;
}
}catch (e19323){var ex__17786__auto__ = e19323;
var statearr_19324_20709 = state_19236;
(statearr_19324_20709[(2)] = ex__17786__auto__);


if(cljs.core.seq((state_19236[(4)]))){
var statearr_19325_20710 = state_19236;
(statearr_19325_20710[(1)] = cljs.core.first((state_19236[(4)])));

} else {
throw ex__17786__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20711 = state_19236;
state_19236 = G__20711;
continue;
} else {
return ret_value__17784__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__17783__auto__ = function(state_19236){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__17783__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__17783__auto____1.call(this,state_19236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__17783__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__17783__auto____0;
cljs$core$async$mix_$_state_machine__17783__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__17783__auto____1;
return cljs$core$async$mix_$_state_machine__17783__auto__;
})()
})();
var state__17940__auto__ = (function (){var statearr_19330 = f__17939__auto__();
(statearr_19330[(6)] = c__17938__auto___20666);

return statearr_19330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17940__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_20714 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_20714(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_20717 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null,p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_20717(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_20718 = (function() {
var G__20719 = null;
var G__20719__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null,p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__20719__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null,p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__20719 = function(p,v){
switch(arguments.length){
case 1:
return G__20719__1.call(this,p);
case 2:
return G__20719__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20719.cljs$core$IFn$_invoke$arity$1 = G__20719__1;
G__20719.cljs$core$IFn$_invoke$arity$2 = G__20719__2;
return G__20719;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__19343 = arguments.length;
switch (G__19343) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20718(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20718(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19347 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19348){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19348 = meta19348;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19347.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19349,meta19348__$1){
var self__ = this;
var _19349__$1 = this;
return (new cljs.core.async.t_cljs$core$async19347(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19348__$1));
}));

(cljs.core.async.t_cljs$core$async19347.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19349){
var self__ = this;
var _19349__$1 = this;
return self__.meta19348;
}));

(cljs.core.async.t_cljs$core$async19347.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19347.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async19347.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19347.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async19347.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async19347.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async19347.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async19347.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta19348","meta19348",-2109321704,null)], null);
}));

(cljs.core.async.t_cljs$core$async19347.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19347.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19347");

(cljs.core.async.t_cljs$core$async19347.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async19347");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19347.
 */
cljs.core.async.__GT_t_cljs$core$async19347 = (function cljs$core$async$__GT_t_cljs$core$async19347(ch,topic_fn,buf_fn,mults,ensure_mult,meta19348){
return (new cljs.core.async.t_cljs$core$async19347(ch,topic_fn,buf_fn,mults,ensure_mult,meta19348));
});


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
var G__19346 = arguments.length;
switch (G__19346) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__19344_SHARP_){
if(cljs.core.truth_((p1__19344_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__19344_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__19344_SHARP_.call(null,topic)))){
return p1__19344_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__19344_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async19347(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__17938__auto___20729 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17939__auto__ = (function (){var switch__17782__auto__ = (function (state_19425){
var state_val_19426 = (state_19425[(1)]);
if((state_val_19426 === (7))){
var inst_19421 = (state_19425[(2)]);
var state_19425__$1 = state_19425;
var statearr_19429_20730 = state_19425__$1;
(statearr_19429_20730[(2)] = inst_19421);

(statearr_19429_20730[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19426 === (20))){
var state_19425__$1 = state_19425;
var statearr_19430_20732 = state_19425__$1;
(statearr_19430_20732[(2)] = null);

(statearr_19430_20732[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19426 === (1))){
var state_19425__$1 = state_19425;
var statearr_19431_20736 = state_19425__$1;
(statearr_19431_20736[(2)] = null);

(statearr_19431_20736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19426 === (24))){
var inst_19404 = (state_19425[(7)]);
var inst_19413 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_19404);
var state_19425__$1 = state_19425;
var statearr_19432_20741 = state_19425__$1;
(statearr_19432_20741[(2)] = inst_19413);

(statearr_19432_20741[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19426 === (4))){
var inst_19354 = (state_19425[(8)]);
var inst_19354__$1 = (state_19425[(2)]);
var inst_19355 = (inst_19354__$1 == null);
var state_19425__$1 = (function (){var statearr_19433 = state_19425;
(statearr_19433[(8)] = inst_19354__$1);

return statearr_19433;
})();
if(cljs.core.truth_(inst_19355)){
var statearr_19434_20742 = state_19425__$1;
(statearr_19434_20742[(1)] = (5));

} else {
var statearr_19435_20743 = state_19425__$1;
(statearr_19435_20743[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19426 === (15))){
var inst_19398 = (state_19425[(2)]);
var state_19425__$1 = state_19425;
var statearr_19436_20744 = state_19425__$1;
(statearr_19436_20744[(2)] = inst_19398);

(statearr_19436_20744[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19426 === (21))){
var inst_19418 = (state_19425[(2)]);
var state_19425__$1 = (function (){var statearr_19437 = state_19425;
(statearr_19437[(9)] = inst_19418);

return statearr_19437;
})();
var statearr_19438_20745 = state_19425__$1;
(statearr_19438_20745[(2)] = null);

(statearr_19438_20745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19426 === (13))){
var inst_19379 = (state_19425[(10)]);
var inst_19381 = cljs.core.chunked_seq_QMARK_(inst_19379);
var state_19425__$1 = state_19425;
if(inst_19381){
var statearr_19439_20746 = state_19425__$1;
(statearr_19439_20746[(1)] = (16));

} else {
var statearr_19440_20747 = state_19425__$1;
(statearr_19440_20747[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19426 === (22))){
var inst_19410 = (state_19425[(2)]);
var state_19425__$1 = state_19425;
if(cljs.core.truth_(inst_19410)){
var statearr_19441_20748 = state_19425__$1;
(statearr_19441_20748[(1)] = (23));

} else {
var statearr_19442_20749 = state_19425__$1;
(statearr_19442_20749[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19426 === (6))){
var inst_19404 = (state_19425[(7)]);
var inst_19354 = (state_19425[(8)]);
var inst_19406 = (state_19425[(11)]);
var inst_19404__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_19354) : topic_fn.call(null,inst_19354));
var inst_19405 = cljs.core.deref(mults);
var inst_19406__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19405,inst_19404__$1);
var state_19425__$1 = (function (){var statearr_19443 = state_19425;
(statearr_19443[(7)] = inst_19404__$1);

(statearr_19443[(11)] = inst_19406__$1);

return statearr_19443;
})();
if(cljs.core.truth_(inst_19406__$1)){
var statearr_19444_20753 = state_19425__$1;
(statearr_19444_20753[(1)] = (19));

} else {
var statearr_19445_20754 = state_19425__$1;
(statearr_19445_20754[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19426 === (25))){
var inst_19415 = (state_19425[(2)]);
var state_19425__$1 = state_19425;
var statearr_19446_20755 = state_19425__$1;
(statearr_19446_20755[(2)] = inst_19415);

(statearr_19446_20755[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19426 === (17))){
var inst_19379 = (state_19425[(10)]);
var inst_19389 = cljs.core.first(inst_19379);
var inst_19390 = cljs.core.async.muxch_STAR_(inst_19389);
var inst_19391 = cljs.core.async.close_BANG_(inst_19390);
var inst_19392 = cljs.core.next(inst_19379);
var inst_19364 = inst_19392;
var inst_19365 = null;
var inst_19366 = (0);
var inst_19367 = (0);
var state_19425__$1 = (function (){var statearr_19449 = state_19425;
(statearr_19449[(12)] = inst_19364);

(statearr_19449[(13)] = inst_19391);

(statearr_19449[(14)] = inst_19366);

(statearr_19449[(15)] = inst_19365);

(statearr_19449[(16)] = inst_19367);

return statearr_19449;
})();
var statearr_19450_20756 = state_19425__$1;
(statearr_19450_20756[(2)] = null);

(statearr_19450_20756[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19426 === (3))){
var inst_19423 = (state_19425[(2)]);
var state_19425__$1 = state_19425;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19425__$1,inst_19423);
} else {
if((state_val_19426 === (12))){
var inst_19400 = (state_19425[(2)]);
var state_19425__$1 = state_19425;
var statearr_19451_20757 = state_19425__$1;
(statearr_19451_20757[(2)] = inst_19400);

(statearr_19451_20757[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19426 === (2))){
var state_19425__$1 = state_19425;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19425__$1,(4),ch);
} else {
if((state_val_19426 === (23))){
var state_19425__$1 = state_19425;
var statearr_19456_20758 = state_19425__$1;
(statearr_19456_20758[(2)] = null);

(statearr_19456_20758[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19426 === (19))){
var inst_19354 = (state_19425[(8)]);
var inst_19406 = (state_19425[(11)]);
var inst_19408 = cljs.core.async.muxch_STAR_(inst_19406);
var state_19425__$1 = state_19425;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19425__$1,(22),inst_19408,inst_19354);
} else {
if((state_val_19426 === (11))){
var inst_19364 = (state_19425[(12)]);
var inst_19379 = (state_19425[(10)]);
var inst_19379__$1 = cljs.core.seq(inst_19364);
var state_19425__$1 = (function (){var statearr_19457 = state_19425;
(statearr_19457[(10)] = inst_19379__$1);

return statearr_19457;
})();
if(inst_19379__$1){
var statearr_19458_20759 = state_19425__$1;
(statearr_19458_20759[(1)] = (13));

} else {
var statearr_19459_20760 = state_19425__$1;
(statearr_19459_20760[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19426 === (9))){
var inst_19402 = (state_19425[(2)]);
var state_19425__$1 = state_19425;
var statearr_19461_20761 = state_19425__$1;
(statearr_19461_20761[(2)] = inst_19402);

(statearr_19461_20761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19426 === (5))){
var inst_19361 = cljs.core.deref(mults);
var inst_19362 = cljs.core.vals(inst_19361);
var inst_19363 = cljs.core.seq(inst_19362);
var inst_19364 = inst_19363;
var inst_19365 = null;
var inst_19366 = (0);
var inst_19367 = (0);
var state_19425__$1 = (function (){var statearr_19462 = state_19425;
(statearr_19462[(12)] = inst_19364);

(statearr_19462[(14)] = inst_19366);

(statearr_19462[(15)] = inst_19365);

(statearr_19462[(16)] = inst_19367);

return statearr_19462;
})();
var statearr_19463_20762 = state_19425__$1;
(statearr_19463_20762[(2)] = null);

(statearr_19463_20762[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19426 === (14))){
var state_19425__$1 = state_19425;
var statearr_19468_20763 = state_19425__$1;
(statearr_19468_20763[(2)] = null);

(statearr_19468_20763[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19426 === (16))){
var inst_19379 = (state_19425[(10)]);
var inst_19384 = cljs.core.chunk_first(inst_19379);
var inst_19385 = cljs.core.chunk_rest(inst_19379);
var inst_19386 = cljs.core.count(inst_19384);
var inst_19364 = inst_19385;
var inst_19365 = inst_19384;
var inst_19366 = inst_19386;
var inst_19367 = (0);
var state_19425__$1 = (function (){var statearr_19470 = state_19425;
(statearr_19470[(12)] = inst_19364);

(statearr_19470[(14)] = inst_19366);

(statearr_19470[(15)] = inst_19365);

(statearr_19470[(16)] = inst_19367);

return statearr_19470;
})();
var statearr_19471_20764 = state_19425__$1;
(statearr_19471_20764[(2)] = null);

(statearr_19471_20764[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19426 === (10))){
var inst_19364 = (state_19425[(12)]);
var inst_19366 = (state_19425[(14)]);
var inst_19365 = (state_19425[(15)]);
var inst_19367 = (state_19425[(16)]);
var inst_19372 = cljs.core._nth(inst_19365,inst_19367);
var inst_19373 = cljs.core.async.muxch_STAR_(inst_19372);
var inst_19374 = cljs.core.async.close_BANG_(inst_19373);
var inst_19375 = (inst_19367 + (1));
var tmp19465 = inst_19364;
var tmp19466 = inst_19366;
var tmp19467 = inst_19365;
var inst_19364__$1 = tmp19465;
var inst_19365__$1 = tmp19467;
var inst_19366__$1 = tmp19466;
var inst_19367__$1 = inst_19375;
var state_19425__$1 = (function (){var statearr_19474 = state_19425;
(statearr_19474[(12)] = inst_19364__$1);

(statearr_19474[(17)] = inst_19374);

(statearr_19474[(14)] = inst_19366__$1);

(statearr_19474[(15)] = inst_19365__$1);

(statearr_19474[(16)] = inst_19367__$1);

return statearr_19474;
})();
var statearr_19475_20765 = state_19425__$1;
(statearr_19475_20765[(2)] = null);

(statearr_19475_20765[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19426 === (18))){
var inst_19395 = (state_19425[(2)]);
var state_19425__$1 = state_19425;
var statearr_19476_20766 = state_19425__$1;
(statearr_19476_20766[(2)] = inst_19395);

(statearr_19476_20766[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19426 === (8))){
var inst_19366 = (state_19425[(14)]);
var inst_19367 = (state_19425[(16)]);
var inst_19369 = (inst_19367 < inst_19366);
var inst_19370 = inst_19369;
var state_19425__$1 = state_19425;
if(cljs.core.truth_(inst_19370)){
var statearr_19477_20767 = state_19425__$1;
(statearr_19477_20767[(1)] = (10));

} else {
var statearr_19478_20768 = state_19425__$1;
(statearr_19478_20768[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__17783__auto__ = null;
var cljs$core$async$state_machine__17783__auto____0 = (function (){
var statearr_19482 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19482[(0)] = cljs$core$async$state_machine__17783__auto__);

(statearr_19482[(1)] = (1));

return statearr_19482;
});
var cljs$core$async$state_machine__17783__auto____1 = (function (state_19425){
while(true){
var ret_value__17784__auto__ = (function (){try{while(true){
var result__17785__auto__ = switch__17782__auto__(state_19425);
if(cljs.core.keyword_identical_QMARK_(result__17785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17785__auto__;
}
break;
}
}catch (e19483){var ex__17786__auto__ = e19483;
var statearr_19484_20770 = state_19425;
(statearr_19484_20770[(2)] = ex__17786__auto__);


if(cljs.core.seq((state_19425[(4)]))){
var statearr_19485_20771 = state_19425;
(statearr_19485_20771[(1)] = cljs.core.first((state_19425[(4)])));

} else {
throw ex__17786__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20772 = state_19425;
state_19425 = G__20772;
continue;
} else {
return ret_value__17784__auto__;
}
break;
}
});
cljs$core$async$state_machine__17783__auto__ = function(state_19425){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17783__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17783__auto____1.call(this,state_19425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17783__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17783__auto____0;
cljs$core$async$state_machine__17783__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17783__auto____1;
return cljs$core$async$state_machine__17783__auto__;
})()
})();
var state__17940__auto__ = (function (){var statearr_19486 = f__17939__auto__();
(statearr_19486[(6)] = c__17938__auto___20729);

return statearr_19486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17940__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__19501 = arguments.length;
switch (G__19501) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__19516 = arguments.length;
switch (G__19516) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

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
var G__19524 = arguments.length;
switch (G__19524) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__17938__auto___20780 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17939__auto__ = (function (){var switch__17782__auto__ = (function (state_19571){
var state_val_19572 = (state_19571[(1)]);
if((state_val_19572 === (7))){
var state_19571__$1 = state_19571;
var statearr_19577_20781 = state_19571__$1;
(statearr_19577_20781[(2)] = null);

(statearr_19577_20781[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19572 === (1))){
var state_19571__$1 = state_19571;
var statearr_19578_20785 = state_19571__$1;
(statearr_19578_20785[(2)] = null);

(statearr_19578_20785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19572 === (4))){
var inst_19531 = (state_19571[(7)]);
var inst_19532 = (state_19571[(8)]);
var inst_19534 = (inst_19532 < inst_19531);
var state_19571__$1 = state_19571;
if(cljs.core.truth_(inst_19534)){
var statearr_19581_20786 = state_19571__$1;
(statearr_19581_20786[(1)] = (6));

} else {
var statearr_19582_20787 = state_19571__$1;
(statearr_19582_20787[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19572 === (15))){
var inst_19557 = (state_19571[(9)]);
var inst_19562 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_19557);
var state_19571__$1 = state_19571;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19571__$1,(17),out,inst_19562);
} else {
if((state_val_19572 === (13))){
var inst_19557 = (state_19571[(9)]);
var inst_19557__$1 = (state_19571[(2)]);
var inst_19558 = cljs.core.some(cljs.core.nil_QMARK_,inst_19557__$1);
var state_19571__$1 = (function (){var statearr_19584 = state_19571;
(statearr_19584[(9)] = inst_19557__$1);

return statearr_19584;
})();
if(cljs.core.truth_(inst_19558)){
var statearr_19585_20788 = state_19571__$1;
(statearr_19585_20788[(1)] = (14));

} else {
var statearr_19586_20789 = state_19571__$1;
(statearr_19586_20789[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19572 === (6))){
var state_19571__$1 = state_19571;
var statearr_19588_20790 = state_19571__$1;
(statearr_19588_20790[(2)] = null);

(statearr_19588_20790[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19572 === (17))){
var inst_19564 = (state_19571[(2)]);
var state_19571__$1 = (function (){var statearr_19590 = state_19571;
(statearr_19590[(10)] = inst_19564);

return statearr_19590;
})();
var statearr_19591_20791 = state_19571__$1;
(statearr_19591_20791[(2)] = null);

(statearr_19591_20791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19572 === (3))){
var inst_19569 = (state_19571[(2)]);
var state_19571__$1 = state_19571;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19571__$1,inst_19569);
} else {
if((state_val_19572 === (12))){
var _ = (function (){var statearr_19592 = state_19571;
(statearr_19592[(4)] = cljs.core.rest((state_19571[(4)])));

return statearr_19592;
})();
var state_19571__$1 = state_19571;
var ex19589 = (state_19571__$1[(2)]);
var statearr_19593_20792 = state_19571__$1;
(statearr_19593_20792[(5)] = ex19589);


if((ex19589 instanceof Object)){
var statearr_19595_20793 = state_19571__$1;
(statearr_19595_20793[(1)] = (11));

(statearr_19595_20793[(5)] = null);

} else {
throw ex19589;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19572 === (2))){
var inst_19530 = cljs.core.reset_BANG_(dctr,cnt);
var inst_19531 = cnt;
var inst_19532 = (0);
var state_19571__$1 = (function (){var statearr_19597 = state_19571;
(statearr_19597[(7)] = inst_19531);

(statearr_19597[(8)] = inst_19532);

(statearr_19597[(11)] = inst_19530);

return statearr_19597;
})();
var statearr_19598_20794 = state_19571__$1;
(statearr_19598_20794[(2)] = null);

(statearr_19598_20794[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19572 === (11))){
var inst_19536 = (state_19571[(2)]);
var inst_19537 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_19571__$1 = (function (){var statearr_19600 = state_19571;
(statearr_19600[(12)] = inst_19536);

return statearr_19600;
})();
var statearr_19602_20796 = state_19571__$1;
(statearr_19602_20796[(2)] = inst_19537);

(statearr_19602_20796[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19572 === (9))){
var inst_19532 = (state_19571[(8)]);
var _ = (function (){var statearr_19606 = state_19571;
(statearr_19606[(4)] = cljs.core.cons((12),(state_19571[(4)])));

return statearr_19606;
})();
var inst_19543 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_19532) : chs__$1.call(null,inst_19532));
var inst_19544 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_19532) : done.call(null,inst_19532));
var inst_19545 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_19543,inst_19544);
var ___$1 = (function (){var statearr_19607 = state_19571;
(statearr_19607[(4)] = cljs.core.rest((state_19571[(4)])));

return statearr_19607;
})();
var state_19571__$1 = state_19571;
var statearr_19608_20797 = state_19571__$1;
(statearr_19608_20797[(2)] = inst_19545);

(statearr_19608_20797[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19572 === (5))){
var inst_19555 = (state_19571[(2)]);
var state_19571__$1 = (function (){var statearr_19609 = state_19571;
(statearr_19609[(13)] = inst_19555);

return statearr_19609;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19571__$1,(13),dchan);
} else {
if((state_val_19572 === (14))){
var inst_19560 = cljs.core.async.close_BANG_(out);
var state_19571__$1 = state_19571;
var statearr_19610_20798 = state_19571__$1;
(statearr_19610_20798[(2)] = inst_19560);

(statearr_19610_20798[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19572 === (16))){
var inst_19567 = (state_19571[(2)]);
var state_19571__$1 = state_19571;
var statearr_19611_20799 = state_19571__$1;
(statearr_19611_20799[(2)] = inst_19567);

(statearr_19611_20799[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19572 === (10))){
var inst_19532 = (state_19571[(8)]);
var inst_19548 = (state_19571[(2)]);
var inst_19549 = (inst_19532 + (1));
var inst_19532__$1 = inst_19549;
var state_19571__$1 = (function (){var statearr_19612 = state_19571;
(statearr_19612[(14)] = inst_19548);

(statearr_19612[(8)] = inst_19532__$1);

return statearr_19612;
})();
var statearr_19613_20800 = state_19571__$1;
(statearr_19613_20800[(2)] = null);

(statearr_19613_20800[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19572 === (8))){
var inst_19553 = (state_19571[(2)]);
var state_19571__$1 = state_19571;
var statearr_19614_20801 = state_19571__$1;
(statearr_19614_20801[(2)] = inst_19553);

(statearr_19614_20801[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__17783__auto__ = null;
var cljs$core$async$state_machine__17783__auto____0 = (function (){
var statearr_19615 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19615[(0)] = cljs$core$async$state_machine__17783__auto__);

(statearr_19615[(1)] = (1));

return statearr_19615;
});
var cljs$core$async$state_machine__17783__auto____1 = (function (state_19571){
while(true){
var ret_value__17784__auto__ = (function (){try{while(true){
var result__17785__auto__ = switch__17782__auto__(state_19571);
if(cljs.core.keyword_identical_QMARK_(result__17785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17785__auto__;
}
break;
}
}catch (e19616){var ex__17786__auto__ = e19616;
var statearr_19617_20803 = state_19571;
(statearr_19617_20803[(2)] = ex__17786__auto__);


if(cljs.core.seq((state_19571[(4)]))){
var statearr_19618_20804 = state_19571;
(statearr_19618_20804[(1)] = cljs.core.first((state_19571[(4)])));

} else {
throw ex__17786__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20805 = state_19571;
state_19571 = G__20805;
continue;
} else {
return ret_value__17784__auto__;
}
break;
}
});
cljs$core$async$state_machine__17783__auto__ = function(state_19571){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17783__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17783__auto____1.call(this,state_19571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17783__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17783__auto____0;
cljs$core$async$state_machine__17783__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17783__auto____1;
return cljs$core$async$state_machine__17783__auto__;
})()
})();
var state__17940__auto__ = (function (){var statearr_19619 = f__17939__auto__();
(statearr_19619[(6)] = c__17938__auto___20780);

return statearr_19619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17940__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__19622 = arguments.length;
switch (G__19622) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17938__auto___20807 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17939__auto__ = (function (){var switch__17782__auto__ = (function (state_19661){
var state_val_19662 = (state_19661[(1)]);
if((state_val_19662 === (7))){
var inst_19640 = (state_19661[(7)]);
var inst_19639 = (state_19661[(8)]);
var inst_19639__$1 = (state_19661[(2)]);
var inst_19640__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19639__$1,(0),null);
var inst_19641 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19639__$1,(1),null);
var inst_19642 = (inst_19640__$1 == null);
var state_19661__$1 = (function (){var statearr_19664 = state_19661;
(statearr_19664[(7)] = inst_19640__$1);

(statearr_19664[(8)] = inst_19639__$1);

(statearr_19664[(9)] = inst_19641);

return statearr_19664;
})();
if(cljs.core.truth_(inst_19642)){
var statearr_19666_20808 = state_19661__$1;
(statearr_19666_20808[(1)] = (8));

} else {
var statearr_19667_20809 = state_19661__$1;
(statearr_19667_20809[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19662 === (1))){
var inst_19628 = cljs.core.vec(chs);
var inst_19629 = inst_19628;
var state_19661__$1 = (function (){var statearr_19668 = state_19661;
(statearr_19668[(10)] = inst_19629);

return statearr_19668;
})();
var statearr_19672_20810 = state_19661__$1;
(statearr_19672_20810[(2)] = null);

(statearr_19672_20810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19662 === (4))){
var inst_19629 = (state_19661[(10)]);
var state_19661__$1 = state_19661;
return cljs.core.async.ioc_alts_BANG_(state_19661__$1,(7),inst_19629);
} else {
if((state_val_19662 === (6))){
var inst_19657 = (state_19661[(2)]);
var state_19661__$1 = state_19661;
var statearr_19673_20811 = state_19661__$1;
(statearr_19673_20811[(2)] = inst_19657);

(statearr_19673_20811[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19662 === (3))){
var inst_19659 = (state_19661[(2)]);
var state_19661__$1 = state_19661;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19661__$1,inst_19659);
} else {
if((state_val_19662 === (2))){
var inst_19629 = (state_19661[(10)]);
var inst_19631 = cljs.core.count(inst_19629);
var inst_19632 = (inst_19631 > (0));
var state_19661__$1 = state_19661;
if(cljs.core.truth_(inst_19632)){
var statearr_19675_20812 = state_19661__$1;
(statearr_19675_20812[(1)] = (4));

} else {
var statearr_19676_20813 = state_19661__$1;
(statearr_19676_20813[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19662 === (11))){
var inst_19629 = (state_19661[(10)]);
var inst_19650 = (state_19661[(2)]);
var tmp19674 = inst_19629;
var inst_19629__$1 = tmp19674;
var state_19661__$1 = (function (){var statearr_19677 = state_19661;
(statearr_19677[(10)] = inst_19629__$1);

(statearr_19677[(11)] = inst_19650);

return statearr_19677;
})();
var statearr_19678_20814 = state_19661__$1;
(statearr_19678_20814[(2)] = null);

(statearr_19678_20814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19662 === (9))){
var inst_19640 = (state_19661[(7)]);
var state_19661__$1 = state_19661;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19661__$1,(11),out,inst_19640);
} else {
if((state_val_19662 === (5))){
var inst_19655 = cljs.core.async.close_BANG_(out);
var state_19661__$1 = state_19661;
var statearr_19679_20815 = state_19661__$1;
(statearr_19679_20815[(2)] = inst_19655);

(statearr_19679_20815[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19662 === (10))){
var inst_19653 = (state_19661[(2)]);
var state_19661__$1 = state_19661;
var statearr_19680_20817 = state_19661__$1;
(statearr_19680_20817[(2)] = inst_19653);

(statearr_19680_20817[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19662 === (8))){
var inst_19629 = (state_19661[(10)]);
var inst_19640 = (state_19661[(7)]);
var inst_19639 = (state_19661[(8)]);
var inst_19641 = (state_19661[(9)]);
var inst_19645 = (function (){var cs = inst_19629;
var vec__19634 = inst_19639;
var v = inst_19640;
var c = inst_19641;
return (function (p1__19620_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__19620_SHARP_);
});
})();
var inst_19646 = cljs.core.filterv(inst_19645,inst_19629);
var inst_19629__$1 = inst_19646;
var state_19661__$1 = (function (){var statearr_19681 = state_19661;
(statearr_19681[(10)] = inst_19629__$1);

return statearr_19681;
})();
var statearr_19686_20820 = state_19661__$1;
(statearr_19686_20820[(2)] = null);

(statearr_19686_20820[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__17783__auto__ = null;
var cljs$core$async$state_machine__17783__auto____0 = (function (){
var statearr_19687 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19687[(0)] = cljs$core$async$state_machine__17783__auto__);

(statearr_19687[(1)] = (1));

return statearr_19687;
});
var cljs$core$async$state_machine__17783__auto____1 = (function (state_19661){
while(true){
var ret_value__17784__auto__ = (function (){try{while(true){
var result__17785__auto__ = switch__17782__auto__(state_19661);
if(cljs.core.keyword_identical_QMARK_(result__17785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17785__auto__;
}
break;
}
}catch (e19688){var ex__17786__auto__ = e19688;
var statearr_19689_20821 = state_19661;
(statearr_19689_20821[(2)] = ex__17786__auto__);


if(cljs.core.seq((state_19661[(4)]))){
var statearr_19690_20822 = state_19661;
(statearr_19690_20822[(1)] = cljs.core.first((state_19661[(4)])));

} else {
throw ex__17786__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20823 = state_19661;
state_19661 = G__20823;
continue;
} else {
return ret_value__17784__auto__;
}
break;
}
});
cljs$core$async$state_machine__17783__auto__ = function(state_19661){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17783__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17783__auto____1.call(this,state_19661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17783__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17783__auto____0;
cljs$core$async$state_machine__17783__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17783__auto____1;
return cljs$core$async$state_machine__17783__auto__;
})()
})();
var state__17940__auto__ = (function (){var statearr_19695 = f__17939__auto__();
(statearr_19695[(6)] = c__17938__auto___20807);

return statearr_19695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17940__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__19697 = arguments.length;
switch (G__19697) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17938__auto___20825 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17939__auto__ = (function (){var switch__17782__auto__ = (function (state_19721){
var state_val_19722 = (state_19721[(1)]);
if((state_val_19722 === (7))){
var inst_19703 = (state_19721[(7)]);
var inst_19703__$1 = (state_19721[(2)]);
var inst_19704 = (inst_19703__$1 == null);
var inst_19705 = cljs.core.not(inst_19704);
var state_19721__$1 = (function (){var statearr_19725 = state_19721;
(statearr_19725[(7)] = inst_19703__$1);

return statearr_19725;
})();
if(inst_19705){
var statearr_19726_20826 = state_19721__$1;
(statearr_19726_20826[(1)] = (8));

} else {
var statearr_19727_20827 = state_19721__$1;
(statearr_19727_20827[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19722 === (1))){
var inst_19698 = (0);
var state_19721__$1 = (function (){var statearr_19728 = state_19721;
(statearr_19728[(8)] = inst_19698);

return statearr_19728;
})();
var statearr_19729_20828 = state_19721__$1;
(statearr_19729_20828[(2)] = null);

(statearr_19729_20828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19722 === (4))){
var state_19721__$1 = state_19721;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19721__$1,(7),ch);
} else {
if((state_val_19722 === (6))){
var inst_19716 = (state_19721[(2)]);
var state_19721__$1 = state_19721;
var statearr_19730_20829 = state_19721__$1;
(statearr_19730_20829[(2)] = inst_19716);

(statearr_19730_20829[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19722 === (3))){
var inst_19718 = (state_19721[(2)]);
var inst_19719 = cljs.core.async.close_BANG_(out);
var state_19721__$1 = (function (){var statearr_19734 = state_19721;
(statearr_19734[(9)] = inst_19718);

return statearr_19734;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19721__$1,inst_19719);
} else {
if((state_val_19722 === (2))){
var inst_19698 = (state_19721[(8)]);
var inst_19700 = (inst_19698 < n);
var state_19721__$1 = state_19721;
if(cljs.core.truth_(inst_19700)){
var statearr_19735_20830 = state_19721__$1;
(statearr_19735_20830[(1)] = (4));

} else {
var statearr_19736_20831 = state_19721__$1;
(statearr_19736_20831[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19722 === (11))){
var inst_19698 = (state_19721[(8)]);
var inst_19708 = (state_19721[(2)]);
var inst_19709 = (inst_19698 + (1));
var inst_19698__$1 = inst_19709;
var state_19721__$1 = (function (){var statearr_19737 = state_19721;
(statearr_19737[(8)] = inst_19698__$1);

(statearr_19737[(10)] = inst_19708);

return statearr_19737;
})();
var statearr_19738_20832 = state_19721__$1;
(statearr_19738_20832[(2)] = null);

(statearr_19738_20832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19722 === (9))){
var state_19721__$1 = state_19721;
var statearr_19739_20833 = state_19721__$1;
(statearr_19739_20833[(2)] = null);

(statearr_19739_20833[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19722 === (5))){
var state_19721__$1 = state_19721;
var statearr_19740_20834 = state_19721__$1;
(statearr_19740_20834[(2)] = null);

(statearr_19740_20834[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19722 === (10))){
var inst_19713 = (state_19721[(2)]);
var state_19721__$1 = state_19721;
var statearr_19741_20835 = state_19721__$1;
(statearr_19741_20835[(2)] = inst_19713);

(statearr_19741_20835[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19722 === (8))){
var inst_19703 = (state_19721[(7)]);
var state_19721__$1 = state_19721;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19721__$1,(11),out,inst_19703);
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
});
return (function() {
var cljs$core$async$state_machine__17783__auto__ = null;
var cljs$core$async$state_machine__17783__auto____0 = (function (){
var statearr_19742 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19742[(0)] = cljs$core$async$state_machine__17783__auto__);

(statearr_19742[(1)] = (1));

return statearr_19742;
});
var cljs$core$async$state_machine__17783__auto____1 = (function (state_19721){
while(true){
var ret_value__17784__auto__ = (function (){try{while(true){
var result__17785__auto__ = switch__17782__auto__(state_19721);
if(cljs.core.keyword_identical_QMARK_(result__17785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17785__auto__;
}
break;
}
}catch (e19743){var ex__17786__auto__ = e19743;
var statearr_19744_20840 = state_19721;
(statearr_19744_20840[(2)] = ex__17786__auto__);


if(cljs.core.seq((state_19721[(4)]))){
var statearr_19745_20841 = state_19721;
(statearr_19745_20841[(1)] = cljs.core.first((state_19721[(4)])));

} else {
throw ex__17786__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20843 = state_19721;
state_19721 = G__20843;
continue;
} else {
return ret_value__17784__auto__;
}
break;
}
});
cljs$core$async$state_machine__17783__auto__ = function(state_19721){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17783__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17783__auto____1.call(this,state_19721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17783__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17783__auto____0;
cljs$core$async$state_machine__17783__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17783__auto____1;
return cljs$core$async$state_machine__17783__auto__;
})()
})();
var state__17940__auto__ = (function (){var statearr_19746 = f__17939__auto__();
(statearr_19746[(6)] = c__17938__auto___20825);

return statearr_19746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17940__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19751 = (function (f,ch,meta19749,_,fn1,meta19752){
this.f = f;
this.ch = ch;
this.meta19749 = meta19749;
this._ = _;
this.fn1 = fn1;
this.meta19752 = meta19752;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19751.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19753,meta19752__$1){
var self__ = this;
var _19753__$1 = this;
return (new cljs.core.async.t_cljs$core$async19751(self__.f,self__.ch,self__.meta19749,self__._,self__.fn1,meta19752__$1));
}));

(cljs.core.async.t_cljs$core$async19751.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19753){
var self__ = this;
var _19753__$1 = this;
return self__.meta19752;
}));

(cljs.core.async.t_cljs$core$async19751.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19751.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async19751.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async19751.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__19747_SHARP_){
var G__19754 = (((p1__19747_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__19747_SHARP_) : self__.f.call(null,p1__19747_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__19754) : f1.call(null,G__19754));
});
}));

(cljs.core.async.t_cljs$core$async19751.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19749","meta19749",333945829,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async19748","cljs.core.async/t_cljs$core$async19748",-1118297773,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta19752","meta19752",-1582809716,null)], null);
}));

(cljs.core.async.t_cljs$core$async19751.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19751.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19751");

(cljs.core.async.t_cljs$core$async19751.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async19751");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19751.
 */
cljs.core.async.__GT_t_cljs$core$async19751 = (function cljs$core$async$__GT_t_cljs$core$async19751(f,ch,meta19749,_,fn1,meta19752){
return (new cljs.core.async.t_cljs$core$async19751(f,ch,meta19749,_,fn1,meta19752));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19748 = (function (f,ch,meta19749){
this.f = f;
this.ch = ch;
this.meta19749 = meta19749;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19750,meta19749__$1){
var self__ = this;
var _19750__$1 = this;
return (new cljs.core.async.t_cljs$core$async19748(self__.f,self__.ch,meta19749__$1));
}));

(cljs.core.async.t_cljs$core$async19748.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19750){
var self__ = this;
var _19750__$1 = this;
return self__.meta19749;
}));

(cljs.core.async.t_cljs$core$async19748.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19748.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19748.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19748.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19748.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async19751(self__.f,self__.ch,self__.meta19749,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__19755 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__19755) : self__.f.call(null,G__19755));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async19748.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19748.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async19748.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19749","meta19749",333945829,null)], null);
}));

(cljs.core.async.t_cljs$core$async19748.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19748.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19748");

(cljs.core.async.t_cljs$core$async19748.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async19748");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19748.
 */
cljs.core.async.__GT_t_cljs$core$async19748 = (function cljs$core$async$__GT_t_cljs$core$async19748(f,ch,meta19749){
return (new cljs.core.async.t_cljs$core$async19748(f,ch,meta19749));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async19748(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19757 = (function (f,ch,meta19758){
this.f = f;
this.ch = ch;
this.meta19758 = meta19758;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19757.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19759,meta19758__$1){
var self__ = this;
var _19759__$1 = this;
return (new cljs.core.async.t_cljs$core$async19757(self__.f,self__.ch,meta19758__$1));
}));

(cljs.core.async.t_cljs$core$async19757.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19759){
var self__ = this;
var _19759__$1 = this;
return self__.meta19758;
}));

(cljs.core.async.t_cljs$core$async19757.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19757.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19757.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19757.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19757.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19757.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async19757.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19758","meta19758",-1223676063,null)], null);
}));

(cljs.core.async.t_cljs$core$async19757.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19757.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19757");

(cljs.core.async.t_cljs$core$async19757.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async19757");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19757.
 */
cljs.core.async.__GT_t_cljs$core$async19757 = (function cljs$core$async$__GT_t_cljs$core$async19757(f,ch,meta19758){
return (new cljs.core.async.t_cljs$core$async19757(f,ch,meta19758));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async19757(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19763 = (function (p,ch,meta19764){
this.p = p;
this.ch = ch;
this.meta19764 = meta19764;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19763.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19765,meta19764__$1){
var self__ = this;
var _19765__$1 = this;
return (new cljs.core.async.t_cljs$core$async19763(self__.p,self__.ch,meta19764__$1));
}));

(cljs.core.async.t_cljs$core$async19763.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19765){
var self__ = this;
var _19765__$1 = this;
return self__.meta19764;
}));

(cljs.core.async.t_cljs$core$async19763.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19763.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19763.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19763.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19763.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19763.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19763.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async19763.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19764","meta19764",851196650,null)], null);
}));

(cljs.core.async.t_cljs$core$async19763.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19763.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19763");

(cljs.core.async.t_cljs$core$async19763.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async19763");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19763.
 */
cljs.core.async.__GT_t_cljs$core$async19763 = (function cljs$core$async$__GT_t_cljs$core$async19763(p,ch,meta19764){
return (new cljs.core.async.t_cljs$core$async19763(p,ch,meta19764));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async19763(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__19771 = arguments.length;
switch (G__19771) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17938__auto___20860 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17939__auto__ = (function (){var switch__17782__auto__ = (function (state_19792){
var state_val_19793 = (state_19792[(1)]);
if((state_val_19793 === (7))){
var inst_19788 = (state_19792[(2)]);
var state_19792__$1 = state_19792;
var statearr_19808_20861 = state_19792__$1;
(statearr_19808_20861[(2)] = inst_19788);

(statearr_19808_20861[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19793 === (1))){
var state_19792__$1 = state_19792;
var statearr_19815_20862 = state_19792__$1;
(statearr_19815_20862[(2)] = null);

(statearr_19815_20862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19793 === (4))){
var inst_19774 = (state_19792[(7)]);
var inst_19774__$1 = (state_19792[(2)]);
var inst_19775 = (inst_19774__$1 == null);
var state_19792__$1 = (function (){var statearr_19816 = state_19792;
(statearr_19816[(7)] = inst_19774__$1);

return statearr_19816;
})();
if(cljs.core.truth_(inst_19775)){
var statearr_19817_20863 = state_19792__$1;
(statearr_19817_20863[(1)] = (5));

} else {
var statearr_19818_20864 = state_19792__$1;
(statearr_19818_20864[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19793 === (6))){
var inst_19774 = (state_19792[(7)]);
var inst_19779 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_19774) : p.call(null,inst_19774));
var state_19792__$1 = state_19792;
if(cljs.core.truth_(inst_19779)){
var statearr_19819_20865 = state_19792__$1;
(statearr_19819_20865[(1)] = (8));

} else {
var statearr_19820_20866 = state_19792__$1;
(statearr_19820_20866[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19793 === (3))){
var inst_19790 = (state_19792[(2)]);
var state_19792__$1 = state_19792;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19792__$1,inst_19790);
} else {
if((state_val_19793 === (2))){
var state_19792__$1 = state_19792;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19792__$1,(4),ch);
} else {
if((state_val_19793 === (11))){
var inst_19782 = (state_19792[(2)]);
var state_19792__$1 = state_19792;
var statearr_19829_20867 = state_19792__$1;
(statearr_19829_20867[(2)] = inst_19782);

(statearr_19829_20867[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19793 === (9))){
var state_19792__$1 = state_19792;
var statearr_19836_20868 = state_19792__$1;
(statearr_19836_20868[(2)] = null);

(statearr_19836_20868[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19793 === (5))){
var inst_19777 = cljs.core.async.close_BANG_(out);
var state_19792__$1 = state_19792;
var statearr_19837_20869 = state_19792__$1;
(statearr_19837_20869[(2)] = inst_19777);

(statearr_19837_20869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19793 === (10))){
var inst_19785 = (state_19792[(2)]);
var state_19792__$1 = (function (){var statearr_19844 = state_19792;
(statearr_19844[(8)] = inst_19785);

return statearr_19844;
})();
var statearr_19845_20870 = state_19792__$1;
(statearr_19845_20870[(2)] = null);

(statearr_19845_20870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19793 === (8))){
var inst_19774 = (state_19792[(7)]);
var state_19792__$1 = state_19792;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19792__$1,(11),out,inst_19774);
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
});
return (function() {
var cljs$core$async$state_machine__17783__auto__ = null;
var cljs$core$async$state_machine__17783__auto____0 = (function (){
var statearr_19846 = [null,null,null,null,null,null,null,null,null];
(statearr_19846[(0)] = cljs$core$async$state_machine__17783__auto__);

(statearr_19846[(1)] = (1));

return statearr_19846;
});
var cljs$core$async$state_machine__17783__auto____1 = (function (state_19792){
while(true){
var ret_value__17784__auto__ = (function (){try{while(true){
var result__17785__auto__ = switch__17782__auto__(state_19792);
if(cljs.core.keyword_identical_QMARK_(result__17785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17785__auto__;
}
break;
}
}catch (e19847){var ex__17786__auto__ = e19847;
var statearr_19848_20871 = state_19792;
(statearr_19848_20871[(2)] = ex__17786__auto__);


if(cljs.core.seq((state_19792[(4)]))){
var statearr_19849_20872 = state_19792;
(statearr_19849_20872[(1)] = cljs.core.first((state_19792[(4)])));

} else {
throw ex__17786__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20873 = state_19792;
state_19792 = G__20873;
continue;
} else {
return ret_value__17784__auto__;
}
break;
}
});
cljs$core$async$state_machine__17783__auto__ = function(state_19792){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17783__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17783__auto____1.call(this,state_19792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17783__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17783__auto____0;
cljs$core$async$state_machine__17783__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17783__auto____1;
return cljs$core$async$state_machine__17783__auto__;
})()
})();
var state__17940__auto__ = (function (){var statearr_19852 = f__17939__auto__();
(statearr_19852[(6)] = c__17938__auto___20860);

return statearr_19852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17940__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__19855 = arguments.length;
switch (G__19855) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__17938__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17939__auto__ = (function (){var switch__17782__auto__ = (function (state_19920){
var state_val_19921 = (state_19920[(1)]);
if((state_val_19921 === (7))){
var inst_19916 = (state_19920[(2)]);
var state_19920__$1 = state_19920;
var statearr_19922_20877 = state_19920__$1;
(statearr_19922_20877[(2)] = inst_19916);

(statearr_19922_20877[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19921 === (20))){
var inst_19886 = (state_19920[(7)]);
var inst_19897 = (state_19920[(2)]);
var inst_19898 = cljs.core.next(inst_19886);
var inst_19872 = inst_19898;
var inst_19873 = null;
var inst_19874 = (0);
var inst_19875 = (0);
var state_19920__$1 = (function (){var statearr_19923 = state_19920;
(statearr_19923[(8)] = inst_19897);

(statearr_19923[(9)] = inst_19873);

(statearr_19923[(10)] = inst_19875);

(statearr_19923[(11)] = inst_19874);

(statearr_19923[(12)] = inst_19872);

return statearr_19923;
})();
var statearr_19924_20878 = state_19920__$1;
(statearr_19924_20878[(2)] = null);

(statearr_19924_20878[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19921 === (1))){
var state_19920__$1 = state_19920;
var statearr_19925_20879 = state_19920__$1;
(statearr_19925_20879[(2)] = null);

(statearr_19925_20879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19921 === (4))){
var inst_19861 = (state_19920[(13)]);
var inst_19861__$1 = (state_19920[(2)]);
var inst_19862 = (inst_19861__$1 == null);
var state_19920__$1 = (function (){var statearr_19926 = state_19920;
(statearr_19926[(13)] = inst_19861__$1);

return statearr_19926;
})();
if(cljs.core.truth_(inst_19862)){
var statearr_19927_20882 = state_19920__$1;
(statearr_19927_20882[(1)] = (5));

} else {
var statearr_19928_20883 = state_19920__$1;
(statearr_19928_20883[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19921 === (15))){
var state_19920__$1 = state_19920;
var statearr_19932_20885 = state_19920__$1;
(statearr_19932_20885[(2)] = null);

(statearr_19932_20885[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19921 === (21))){
var state_19920__$1 = state_19920;
var statearr_19933_20886 = state_19920__$1;
(statearr_19933_20886[(2)] = null);

(statearr_19933_20886[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19921 === (13))){
var inst_19873 = (state_19920[(9)]);
var inst_19875 = (state_19920[(10)]);
var inst_19874 = (state_19920[(11)]);
var inst_19872 = (state_19920[(12)]);
var inst_19882 = (state_19920[(2)]);
var inst_19883 = (inst_19875 + (1));
var tmp19929 = inst_19873;
var tmp19930 = inst_19874;
var tmp19931 = inst_19872;
var inst_19872__$1 = tmp19931;
var inst_19873__$1 = tmp19929;
var inst_19874__$1 = tmp19930;
var inst_19875__$1 = inst_19883;
var state_19920__$1 = (function (){var statearr_19934 = state_19920;
(statearr_19934[(9)] = inst_19873__$1);

(statearr_19934[(14)] = inst_19882);

(statearr_19934[(10)] = inst_19875__$1);

(statearr_19934[(11)] = inst_19874__$1);

(statearr_19934[(12)] = inst_19872__$1);

return statearr_19934;
})();
var statearr_19935_20888 = state_19920__$1;
(statearr_19935_20888[(2)] = null);

(statearr_19935_20888[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19921 === (22))){
var state_19920__$1 = state_19920;
var statearr_19936_20889 = state_19920__$1;
(statearr_19936_20889[(2)] = null);

(statearr_19936_20889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19921 === (6))){
var inst_19861 = (state_19920[(13)]);
var inst_19870 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19861) : f.call(null,inst_19861));
var inst_19871 = cljs.core.seq(inst_19870);
var inst_19872 = inst_19871;
var inst_19873 = null;
var inst_19874 = (0);
var inst_19875 = (0);
var state_19920__$1 = (function (){var statearr_19937 = state_19920;
(statearr_19937[(9)] = inst_19873);

(statearr_19937[(10)] = inst_19875);

(statearr_19937[(11)] = inst_19874);

(statearr_19937[(12)] = inst_19872);

return statearr_19937;
})();
var statearr_19938_20890 = state_19920__$1;
(statearr_19938_20890[(2)] = null);

(statearr_19938_20890[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19921 === (17))){
var inst_19886 = (state_19920[(7)]);
var inst_19890 = cljs.core.chunk_first(inst_19886);
var inst_19891 = cljs.core.chunk_rest(inst_19886);
var inst_19892 = cljs.core.count(inst_19890);
var inst_19872 = inst_19891;
var inst_19873 = inst_19890;
var inst_19874 = inst_19892;
var inst_19875 = (0);
var state_19920__$1 = (function (){var statearr_19939 = state_19920;
(statearr_19939[(9)] = inst_19873);

(statearr_19939[(10)] = inst_19875);

(statearr_19939[(11)] = inst_19874);

(statearr_19939[(12)] = inst_19872);

return statearr_19939;
})();
var statearr_19940_20896 = state_19920__$1;
(statearr_19940_20896[(2)] = null);

(statearr_19940_20896[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19921 === (3))){
var inst_19918 = (state_19920[(2)]);
var state_19920__$1 = state_19920;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19920__$1,inst_19918);
} else {
if((state_val_19921 === (12))){
var inst_19906 = (state_19920[(2)]);
var state_19920__$1 = state_19920;
var statearr_19941_20897 = state_19920__$1;
(statearr_19941_20897[(2)] = inst_19906);

(statearr_19941_20897[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19921 === (2))){
var state_19920__$1 = state_19920;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19920__$1,(4),in$);
} else {
if((state_val_19921 === (23))){
var inst_19914 = (state_19920[(2)]);
var state_19920__$1 = state_19920;
var statearr_19942_20898 = state_19920__$1;
(statearr_19942_20898[(2)] = inst_19914);

(statearr_19942_20898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19921 === (19))){
var inst_19901 = (state_19920[(2)]);
var state_19920__$1 = state_19920;
var statearr_19943_20899 = state_19920__$1;
(statearr_19943_20899[(2)] = inst_19901);

(statearr_19943_20899[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19921 === (11))){
var inst_19886 = (state_19920[(7)]);
var inst_19872 = (state_19920[(12)]);
var inst_19886__$1 = cljs.core.seq(inst_19872);
var state_19920__$1 = (function (){var statearr_19944 = state_19920;
(statearr_19944[(7)] = inst_19886__$1);

return statearr_19944;
})();
if(inst_19886__$1){
var statearr_19945_20900 = state_19920__$1;
(statearr_19945_20900[(1)] = (14));

} else {
var statearr_19946_20901 = state_19920__$1;
(statearr_19946_20901[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19921 === (9))){
var inst_19908 = (state_19920[(2)]);
var inst_19909 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_19920__$1 = (function (){var statearr_19947 = state_19920;
(statearr_19947[(15)] = inst_19908);

return statearr_19947;
})();
if(cljs.core.truth_(inst_19909)){
var statearr_19948_20903 = state_19920__$1;
(statearr_19948_20903[(1)] = (21));

} else {
var statearr_19949_20904 = state_19920__$1;
(statearr_19949_20904[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19921 === (5))){
var inst_19864 = cljs.core.async.close_BANG_(out);
var state_19920__$1 = state_19920;
var statearr_19950_20905 = state_19920__$1;
(statearr_19950_20905[(2)] = inst_19864);

(statearr_19950_20905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19921 === (14))){
var inst_19886 = (state_19920[(7)]);
var inst_19888 = cljs.core.chunked_seq_QMARK_(inst_19886);
var state_19920__$1 = state_19920;
if(inst_19888){
var statearr_19951_20906 = state_19920__$1;
(statearr_19951_20906[(1)] = (17));

} else {
var statearr_19952_20907 = state_19920__$1;
(statearr_19952_20907[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19921 === (16))){
var inst_19904 = (state_19920[(2)]);
var state_19920__$1 = state_19920;
var statearr_19953_20908 = state_19920__$1;
(statearr_19953_20908[(2)] = inst_19904);

(statearr_19953_20908[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19921 === (10))){
var inst_19873 = (state_19920[(9)]);
var inst_19875 = (state_19920[(10)]);
var inst_19880 = cljs.core._nth(inst_19873,inst_19875);
var state_19920__$1 = state_19920;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19920__$1,(13),out,inst_19880);
} else {
if((state_val_19921 === (18))){
var inst_19886 = (state_19920[(7)]);
var inst_19895 = cljs.core.first(inst_19886);
var state_19920__$1 = state_19920;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19920__$1,(20),out,inst_19895);
} else {
if((state_val_19921 === (8))){
var inst_19875 = (state_19920[(10)]);
var inst_19874 = (state_19920[(11)]);
var inst_19877 = (inst_19875 < inst_19874);
var inst_19878 = inst_19877;
var state_19920__$1 = state_19920;
if(cljs.core.truth_(inst_19878)){
var statearr_19954_20910 = state_19920__$1;
(statearr_19954_20910[(1)] = (10));

} else {
var statearr_19955_20911 = state_19920__$1;
(statearr_19955_20911[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__17783__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__17783__auto____0 = (function (){
var statearr_19964 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19964[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__17783__auto__);

(statearr_19964[(1)] = (1));

return statearr_19964;
});
var cljs$core$async$mapcat_STAR__$_state_machine__17783__auto____1 = (function (state_19920){
while(true){
var ret_value__17784__auto__ = (function (){try{while(true){
var result__17785__auto__ = switch__17782__auto__(state_19920);
if(cljs.core.keyword_identical_QMARK_(result__17785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17785__auto__;
}
break;
}
}catch (e19968){var ex__17786__auto__ = e19968;
var statearr_19969_20916 = state_19920;
(statearr_19969_20916[(2)] = ex__17786__auto__);


if(cljs.core.seq((state_19920[(4)]))){
var statearr_19970_20917 = state_19920;
(statearr_19970_20917[(1)] = cljs.core.first((state_19920[(4)])));

} else {
throw ex__17786__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20918 = state_19920;
state_19920 = G__20918;
continue;
} else {
return ret_value__17784__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__17783__auto__ = function(state_19920){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__17783__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__17783__auto____1.call(this,state_19920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__17783__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__17783__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__17783__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__17783__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__17783__auto__;
})()
})();
var state__17940__auto__ = (function (){var statearr_19971 = f__17939__auto__();
(statearr_19971[(6)] = c__17938__auto__);

return statearr_19971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17940__auto__);
}));

return c__17938__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__19973 = arguments.length;
switch (G__19973) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__19975 = arguments.length;
switch (G__19975) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__19977 = arguments.length;
switch (G__19977) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17938__auto___20928 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17939__auto__ = (function (){var switch__17782__auto__ = (function (state_20003){
var state_val_20004 = (state_20003[(1)]);
if((state_val_20004 === (7))){
var inst_19998 = (state_20003[(2)]);
var state_20003__$1 = state_20003;
var statearr_20007_20933 = state_20003__$1;
(statearr_20007_20933[(2)] = inst_19998);

(statearr_20007_20933[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20004 === (1))){
var inst_19979 = null;
var state_20003__$1 = (function (){var statearr_20008 = state_20003;
(statearr_20008[(7)] = inst_19979);

return statearr_20008;
})();
var statearr_20009_20934 = state_20003__$1;
(statearr_20009_20934[(2)] = null);

(statearr_20009_20934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20004 === (4))){
var inst_19983 = (state_20003[(8)]);
var inst_19983__$1 = (state_20003[(2)]);
var inst_19984 = (inst_19983__$1 == null);
var inst_19985 = cljs.core.not(inst_19984);
var state_20003__$1 = (function (){var statearr_20012 = state_20003;
(statearr_20012[(8)] = inst_19983__$1);

return statearr_20012;
})();
if(inst_19985){
var statearr_20013_20937 = state_20003__$1;
(statearr_20013_20937[(1)] = (5));

} else {
var statearr_20014_20938 = state_20003__$1;
(statearr_20014_20938[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20004 === (6))){
var state_20003__$1 = state_20003;
var statearr_20015_20939 = state_20003__$1;
(statearr_20015_20939[(2)] = null);

(statearr_20015_20939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20004 === (3))){
var inst_20000 = (state_20003[(2)]);
var inst_20001 = cljs.core.async.close_BANG_(out);
var state_20003__$1 = (function (){var statearr_20016 = state_20003;
(statearr_20016[(9)] = inst_20000);

return statearr_20016;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20003__$1,inst_20001);
} else {
if((state_val_20004 === (2))){
var state_20003__$1 = state_20003;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20003__$1,(4),ch);
} else {
if((state_val_20004 === (11))){
var inst_19983 = (state_20003[(8)]);
var inst_19992 = (state_20003[(2)]);
var inst_19979 = inst_19983;
var state_20003__$1 = (function (){var statearr_20019 = state_20003;
(statearr_20019[(7)] = inst_19979);

(statearr_20019[(10)] = inst_19992);

return statearr_20019;
})();
var statearr_20020_20947 = state_20003__$1;
(statearr_20020_20947[(2)] = null);

(statearr_20020_20947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20004 === (9))){
var inst_19983 = (state_20003[(8)]);
var state_20003__$1 = state_20003;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20003__$1,(11),out,inst_19983);
} else {
if((state_val_20004 === (5))){
var inst_19979 = (state_20003[(7)]);
var inst_19983 = (state_20003[(8)]);
var inst_19987 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19983,inst_19979);
var state_20003__$1 = state_20003;
if(inst_19987){
var statearr_20022_20953 = state_20003__$1;
(statearr_20022_20953[(1)] = (8));

} else {
var statearr_20023_20954 = state_20003__$1;
(statearr_20023_20954[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20004 === (10))){
var inst_19995 = (state_20003[(2)]);
var state_20003__$1 = state_20003;
var statearr_20024_20955 = state_20003__$1;
(statearr_20024_20955[(2)] = inst_19995);

(statearr_20024_20955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20004 === (8))){
var inst_19979 = (state_20003[(7)]);
var tmp20021 = inst_19979;
var inst_19979__$1 = tmp20021;
var state_20003__$1 = (function (){var statearr_20025 = state_20003;
(statearr_20025[(7)] = inst_19979__$1);

return statearr_20025;
})();
var statearr_20026_20956 = state_20003__$1;
(statearr_20026_20956[(2)] = null);

(statearr_20026_20956[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__17783__auto__ = null;
var cljs$core$async$state_machine__17783__auto____0 = (function (){
var statearr_20027 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20027[(0)] = cljs$core$async$state_machine__17783__auto__);

(statearr_20027[(1)] = (1));

return statearr_20027;
});
var cljs$core$async$state_machine__17783__auto____1 = (function (state_20003){
while(true){
var ret_value__17784__auto__ = (function (){try{while(true){
var result__17785__auto__ = switch__17782__auto__(state_20003);
if(cljs.core.keyword_identical_QMARK_(result__17785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17785__auto__;
}
break;
}
}catch (e20028){var ex__17786__auto__ = e20028;
var statearr_20029_20960 = state_20003;
(statearr_20029_20960[(2)] = ex__17786__auto__);


if(cljs.core.seq((state_20003[(4)]))){
var statearr_20030_20961 = state_20003;
(statearr_20030_20961[(1)] = cljs.core.first((state_20003[(4)])));

} else {
throw ex__17786__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20962 = state_20003;
state_20003 = G__20962;
continue;
} else {
return ret_value__17784__auto__;
}
break;
}
});
cljs$core$async$state_machine__17783__auto__ = function(state_20003){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17783__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17783__auto____1.call(this,state_20003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17783__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17783__auto____0;
cljs$core$async$state_machine__17783__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17783__auto____1;
return cljs$core$async$state_machine__17783__auto__;
})()
})();
var state__17940__auto__ = (function (){var statearr_20031 = f__17939__auto__();
(statearr_20031[(6)] = c__17938__auto___20928);

return statearr_20031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17940__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__20033 = arguments.length;
switch (G__20033) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17938__auto___20971 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17939__auto__ = (function (){var switch__17782__auto__ = (function (state_20074){
var state_val_20075 = (state_20074[(1)]);
if((state_val_20075 === (7))){
var inst_20070 = (state_20074[(2)]);
var state_20074__$1 = state_20074;
var statearr_20086_20972 = state_20074__$1;
(statearr_20086_20972[(2)] = inst_20070);

(statearr_20086_20972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20075 === (1))){
var inst_20037 = (new Array(n));
var inst_20038 = inst_20037;
var inst_20039 = (0);
var state_20074__$1 = (function (){var statearr_20090 = state_20074;
(statearr_20090[(7)] = inst_20039);

(statearr_20090[(8)] = inst_20038);

return statearr_20090;
})();
var statearr_20091_20976 = state_20074__$1;
(statearr_20091_20976[(2)] = null);

(statearr_20091_20976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20075 === (4))){
var inst_20042 = (state_20074[(9)]);
var inst_20042__$1 = (state_20074[(2)]);
var inst_20043 = (inst_20042__$1 == null);
var inst_20044 = cljs.core.not(inst_20043);
var state_20074__$1 = (function (){var statearr_20092 = state_20074;
(statearr_20092[(9)] = inst_20042__$1);

return statearr_20092;
})();
if(inst_20044){
var statearr_20093_20981 = state_20074__$1;
(statearr_20093_20981[(1)] = (5));

} else {
var statearr_20094_20982 = state_20074__$1;
(statearr_20094_20982[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20075 === (15))){
var inst_20064 = (state_20074[(2)]);
var state_20074__$1 = state_20074;
var statearr_20102_20983 = state_20074__$1;
(statearr_20102_20983[(2)] = inst_20064);

(statearr_20102_20983[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20075 === (13))){
var state_20074__$1 = state_20074;
var statearr_20106_20984 = state_20074__$1;
(statearr_20106_20984[(2)] = null);

(statearr_20106_20984[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20075 === (6))){
var inst_20039 = (state_20074[(7)]);
var inst_20060 = (inst_20039 > (0));
var state_20074__$1 = state_20074;
if(cljs.core.truth_(inst_20060)){
var statearr_20107_20987 = state_20074__$1;
(statearr_20107_20987[(1)] = (12));

} else {
var statearr_20108_20988 = state_20074__$1;
(statearr_20108_20988[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20075 === (3))){
var inst_20072 = (state_20074[(2)]);
var state_20074__$1 = state_20074;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20074__$1,inst_20072);
} else {
if((state_val_20075 === (12))){
var inst_20038 = (state_20074[(8)]);
var inst_20062 = cljs.core.vec(inst_20038);
var state_20074__$1 = state_20074;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20074__$1,(15),out,inst_20062);
} else {
if((state_val_20075 === (2))){
var state_20074__$1 = state_20074;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20074__$1,(4),ch);
} else {
if((state_val_20075 === (11))){
var inst_20054 = (state_20074[(2)]);
var inst_20055 = (new Array(n));
var inst_20038 = inst_20055;
var inst_20039 = (0);
var state_20074__$1 = (function (){var statearr_20119 = state_20074;
(statearr_20119[(7)] = inst_20039);

(statearr_20119[(10)] = inst_20054);

(statearr_20119[(8)] = inst_20038);

return statearr_20119;
})();
var statearr_20123_20989 = state_20074__$1;
(statearr_20123_20989[(2)] = null);

(statearr_20123_20989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20075 === (9))){
var inst_20038 = (state_20074[(8)]);
var inst_20052 = cljs.core.vec(inst_20038);
var state_20074__$1 = state_20074;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20074__$1,(11),out,inst_20052);
} else {
if((state_val_20075 === (5))){
var inst_20042 = (state_20074[(9)]);
var inst_20039 = (state_20074[(7)]);
var inst_20047 = (state_20074[(11)]);
var inst_20038 = (state_20074[(8)]);
var inst_20046 = (inst_20038[inst_20039] = inst_20042);
var inst_20047__$1 = (inst_20039 + (1));
var inst_20048 = (inst_20047__$1 < n);
var state_20074__$1 = (function (){var statearr_20128 = state_20074;
(statearr_20128[(11)] = inst_20047__$1);

(statearr_20128[(12)] = inst_20046);

return statearr_20128;
})();
if(cljs.core.truth_(inst_20048)){
var statearr_20129_20996 = state_20074__$1;
(statearr_20129_20996[(1)] = (8));

} else {
var statearr_20130_20998 = state_20074__$1;
(statearr_20130_20998[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20075 === (14))){
var inst_20067 = (state_20074[(2)]);
var inst_20068 = cljs.core.async.close_BANG_(out);
var state_20074__$1 = (function (){var statearr_20134 = state_20074;
(statearr_20134[(13)] = inst_20067);

return statearr_20134;
})();
var statearr_20135_20999 = state_20074__$1;
(statearr_20135_20999[(2)] = inst_20068);

(statearr_20135_20999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20075 === (10))){
var inst_20058 = (state_20074[(2)]);
var state_20074__$1 = state_20074;
var statearr_20136_21001 = state_20074__$1;
(statearr_20136_21001[(2)] = inst_20058);

(statearr_20136_21001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20075 === (8))){
var inst_20047 = (state_20074[(11)]);
var inst_20038 = (state_20074[(8)]);
var tmp20133 = inst_20038;
var inst_20038__$1 = tmp20133;
var inst_20039 = inst_20047;
var state_20074__$1 = (function (){var statearr_20137 = state_20074;
(statearr_20137[(7)] = inst_20039);

(statearr_20137[(8)] = inst_20038__$1);

return statearr_20137;
})();
var statearr_20138_21002 = state_20074__$1;
(statearr_20138_21002[(2)] = null);

(statearr_20138_21002[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__17783__auto__ = null;
var cljs$core$async$state_machine__17783__auto____0 = (function (){
var statearr_20139 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20139[(0)] = cljs$core$async$state_machine__17783__auto__);

(statearr_20139[(1)] = (1));

return statearr_20139;
});
var cljs$core$async$state_machine__17783__auto____1 = (function (state_20074){
while(true){
var ret_value__17784__auto__ = (function (){try{while(true){
var result__17785__auto__ = switch__17782__auto__(state_20074);
if(cljs.core.keyword_identical_QMARK_(result__17785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17785__auto__;
}
break;
}
}catch (e20140){var ex__17786__auto__ = e20140;
var statearr_20141_21003 = state_20074;
(statearr_20141_21003[(2)] = ex__17786__auto__);


if(cljs.core.seq((state_20074[(4)]))){
var statearr_20142_21004 = state_20074;
(statearr_20142_21004[(1)] = cljs.core.first((state_20074[(4)])));

} else {
throw ex__17786__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21005 = state_20074;
state_20074 = G__21005;
continue;
} else {
return ret_value__17784__auto__;
}
break;
}
});
cljs$core$async$state_machine__17783__auto__ = function(state_20074){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17783__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17783__auto____1.call(this,state_20074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17783__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17783__auto____0;
cljs$core$async$state_machine__17783__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17783__auto____1;
return cljs$core$async$state_machine__17783__auto__;
})()
})();
var state__17940__auto__ = (function (){var statearr_20143 = f__17939__auto__();
(statearr_20143[(6)] = c__17938__auto___20971);

return statearr_20143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17940__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__20145 = arguments.length;
switch (G__20145) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17938__auto___21009 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17939__auto__ = (function (){var switch__17782__auto__ = (function (state_20190){
var state_val_20191 = (state_20190[(1)]);
if((state_val_20191 === (7))){
var inst_20186 = (state_20190[(2)]);
var state_20190__$1 = state_20190;
var statearr_20192_21010 = state_20190__$1;
(statearr_20192_21010[(2)] = inst_20186);

(statearr_20192_21010[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20191 === (1))){
var inst_20146 = [];
var inst_20147 = inst_20146;
var inst_20148 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20190__$1 = (function (){var statearr_20193 = state_20190;
(statearr_20193[(7)] = inst_20148);

(statearr_20193[(8)] = inst_20147);

return statearr_20193;
})();
var statearr_20194_21012 = state_20190__$1;
(statearr_20194_21012[(2)] = null);

(statearr_20194_21012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20191 === (4))){
var inst_20151 = (state_20190[(9)]);
var inst_20151__$1 = (state_20190[(2)]);
var inst_20152 = (inst_20151__$1 == null);
var inst_20153 = cljs.core.not(inst_20152);
var state_20190__$1 = (function (){var statearr_20197 = state_20190;
(statearr_20197[(9)] = inst_20151__$1);

return statearr_20197;
})();
if(inst_20153){
var statearr_20198_21013 = state_20190__$1;
(statearr_20198_21013[(1)] = (5));

} else {
var statearr_20199_21014 = state_20190__$1;
(statearr_20199_21014[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20191 === (15))){
var inst_20147 = (state_20190[(8)]);
var inst_20178 = cljs.core.vec(inst_20147);
var state_20190__$1 = state_20190;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20190__$1,(18),out,inst_20178);
} else {
if((state_val_20191 === (13))){
var inst_20173 = (state_20190[(2)]);
var state_20190__$1 = state_20190;
var statearr_20200_21015 = state_20190__$1;
(statearr_20200_21015[(2)] = inst_20173);

(statearr_20200_21015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20191 === (6))){
var inst_20147 = (state_20190[(8)]);
var inst_20175 = inst_20147.length;
var inst_20176 = (inst_20175 > (0));
var state_20190__$1 = state_20190;
if(cljs.core.truth_(inst_20176)){
var statearr_20202_21016 = state_20190__$1;
(statearr_20202_21016[(1)] = (15));

} else {
var statearr_20213_21017 = state_20190__$1;
(statearr_20213_21017[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20191 === (17))){
var inst_20183 = (state_20190[(2)]);
var inst_20184 = cljs.core.async.close_BANG_(out);
var state_20190__$1 = (function (){var statearr_20214 = state_20190;
(statearr_20214[(10)] = inst_20183);

return statearr_20214;
})();
var statearr_20215_21018 = state_20190__$1;
(statearr_20215_21018[(2)] = inst_20184);

(statearr_20215_21018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20191 === (3))){
var inst_20188 = (state_20190[(2)]);
var state_20190__$1 = state_20190;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20190__$1,inst_20188);
} else {
if((state_val_20191 === (12))){
var inst_20147 = (state_20190[(8)]);
var inst_20166 = cljs.core.vec(inst_20147);
var state_20190__$1 = state_20190;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20190__$1,(14),out,inst_20166);
} else {
if((state_val_20191 === (2))){
var state_20190__$1 = state_20190;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20190__$1,(4),ch);
} else {
if((state_val_20191 === (11))){
var inst_20147 = (state_20190[(8)]);
var inst_20155 = (state_20190[(11)]);
var inst_20151 = (state_20190[(9)]);
var inst_20163 = inst_20147.push(inst_20151);
var tmp20216 = inst_20147;
var inst_20147__$1 = tmp20216;
var inst_20148 = inst_20155;
var state_20190__$1 = (function (){var statearr_20218 = state_20190;
(statearr_20218[(7)] = inst_20148);

(statearr_20218[(8)] = inst_20147__$1);

(statearr_20218[(12)] = inst_20163);

return statearr_20218;
})();
var statearr_20219_21019 = state_20190__$1;
(statearr_20219_21019[(2)] = null);

(statearr_20219_21019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20191 === (9))){
var inst_20148 = (state_20190[(7)]);
var inst_20159 = cljs.core.keyword_identical_QMARK_(inst_20148,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_20190__$1 = state_20190;
var statearr_20221_21024 = state_20190__$1;
(statearr_20221_21024[(2)] = inst_20159);

(statearr_20221_21024[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20191 === (5))){
var inst_20156 = (state_20190[(13)]);
var inst_20148 = (state_20190[(7)]);
var inst_20155 = (state_20190[(11)]);
var inst_20151 = (state_20190[(9)]);
var inst_20155__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_20151) : f.call(null,inst_20151));
var inst_20156__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20155__$1,inst_20148);
var state_20190__$1 = (function (){var statearr_20222 = state_20190;
(statearr_20222[(13)] = inst_20156__$1);

(statearr_20222[(11)] = inst_20155__$1);

return statearr_20222;
})();
if(inst_20156__$1){
var statearr_20223_21025 = state_20190__$1;
(statearr_20223_21025[(1)] = (8));

} else {
var statearr_20224_21026 = state_20190__$1;
(statearr_20224_21026[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20191 === (14))){
var inst_20155 = (state_20190[(11)]);
var inst_20151 = (state_20190[(9)]);
var inst_20168 = (state_20190[(2)]);
var inst_20169 = [];
var inst_20170 = inst_20169.push(inst_20151);
var inst_20147 = inst_20169;
var inst_20148 = inst_20155;
var state_20190__$1 = (function (){var statearr_20225 = state_20190;
(statearr_20225[(7)] = inst_20148);

(statearr_20225[(8)] = inst_20147);

(statearr_20225[(14)] = inst_20168);

(statearr_20225[(15)] = inst_20170);

return statearr_20225;
})();
var statearr_20226_21027 = state_20190__$1;
(statearr_20226_21027[(2)] = null);

(statearr_20226_21027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20191 === (16))){
var state_20190__$1 = state_20190;
var statearr_20227_21028 = state_20190__$1;
(statearr_20227_21028[(2)] = null);

(statearr_20227_21028[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20191 === (10))){
var inst_20161 = (state_20190[(2)]);
var state_20190__$1 = state_20190;
if(cljs.core.truth_(inst_20161)){
var statearr_20228_21031 = state_20190__$1;
(statearr_20228_21031[(1)] = (11));

} else {
var statearr_20229_21032 = state_20190__$1;
(statearr_20229_21032[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20191 === (18))){
var inst_20180 = (state_20190[(2)]);
var state_20190__$1 = state_20190;
var statearr_20230_21033 = state_20190__$1;
(statearr_20230_21033[(2)] = inst_20180);

(statearr_20230_21033[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20191 === (8))){
var inst_20156 = (state_20190[(13)]);
var state_20190__$1 = state_20190;
var statearr_20231_21034 = state_20190__$1;
(statearr_20231_21034[(2)] = inst_20156);

(statearr_20231_21034[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__17783__auto__ = null;
var cljs$core$async$state_machine__17783__auto____0 = (function (){
var statearr_20232 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20232[(0)] = cljs$core$async$state_machine__17783__auto__);

(statearr_20232[(1)] = (1));

return statearr_20232;
});
var cljs$core$async$state_machine__17783__auto____1 = (function (state_20190){
while(true){
var ret_value__17784__auto__ = (function (){try{while(true){
var result__17785__auto__ = switch__17782__auto__(state_20190);
if(cljs.core.keyword_identical_QMARK_(result__17785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17785__auto__;
}
break;
}
}catch (e20233){var ex__17786__auto__ = e20233;
var statearr_20234_21045 = state_20190;
(statearr_20234_21045[(2)] = ex__17786__auto__);


if(cljs.core.seq((state_20190[(4)]))){
var statearr_20235_21057 = state_20190;
(statearr_20235_21057[(1)] = cljs.core.first((state_20190[(4)])));

} else {
throw ex__17786__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21058 = state_20190;
state_20190 = G__21058;
continue;
} else {
return ret_value__17784__auto__;
}
break;
}
});
cljs$core$async$state_machine__17783__auto__ = function(state_20190){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17783__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17783__auto____1.call(this,state_20190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17783__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17783__auto____0;
cljs$core$async$state_machine__17783__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17783__auto____1;
return cljs$core$async$state_machine__17783__auto__;
})()
})();
var state__17940__auto__ = (function (){var statearr_20236 = f__17939__auto__();
(statearr_20236[(6)] = c__17938__auto___21009);

return statearr_20236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17940__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
