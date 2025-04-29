goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_16540 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null,this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_16540(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_16543 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null,this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_16543(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__15607 = coll;
var G__15608 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__15607,G__15608) : shadow.dom.lazy_native_coll_seq.call(null,G__15607,G__15608));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__15621 = arguments.length;
switch (G__15621) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__15626 = arguments.length;
switch (G__15626) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__15633 = arguments.length;
switch (G__15633) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__15662 = arguments.length;
switch (G__15662) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__15681 = arguments.length;
switch (G__15681) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__15694 = arguments.length;
switch (G__15694) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e15698){if((e15698 instanceof Object)){
var e = e15698;
return console.log("didnt support attachEvent",el,e);
} else {
throw e15698;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__15704 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__15705 = null;
var count__15706 = (0);
var i__15707 = (0);
while(true){
if((i__15707 < count__15706)){
var el = chunk__15705.cljs$core$IIndexed$_nth$arity$2(null,i__15707);
var handler_16573__$1 = ((function (seq__15704,chunk__15705,count__15706,i__15707,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__15704,chunk__15705,count__15706,i__15707,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_16573__$1);


var G__16574 = seq__15704;
var G__16575 = chunk__15705;
var G__16576 = count__15706;
var G__16577 = (i__15707 + (1));
seq__15704 = G__16574;
chunk__15705 = G__16575;
count__15706 = G__16576;
i__15707 = G__16577;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15704);
if(temp__5804__auto__){
var seq__15704__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15704__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__15704__$1);
var G__16578 = cljs.core.chunk_rest(seq__15704__$1);
var G__16579 = c__5525__auto__;
var G__16580 = cljs.core.count(c__5525__auto__);
var G__16581 = (0);
seq__15704 = G__16578;
chunk__15705 = G__16579;
count__15706 = G__16580;
i__15707 = G__16581;
continue;
} else {
var el = cljs.core.first(seq__15704__$1);
var handler_16582__$1 = ((function (seq__15704,chunk__15705,count__15706,i__15707,el,seq__15704__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__15704,chunk__15705,count__15706,i__15707,el,seq__15704__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_16582__$1);


var G__16583 = cljs.core.next(seq__15704__$1);
var G__16584 = null;
var G__16585 = (0);
var G__16586 = (0);
seq__15704 = G__16583;
chunk__15705 = G__16584;
count__15706 = G__16585;
i__15707 = G__16586;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__15723 = arguments.length;
switch (G__15723) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__15724 = cljs.core.seq(events);
var chunk__15725 = null;
var count__15726 = (0);
var i__15727 = (0);
while(true){
if((i__15727 < count__15726)){
var vec__15734 = chunk__15725.cljs$core$IIndexed$_nth$arity$2(null,i__15727);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15734,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15734,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__16590 = seq__15724;
var G__16591 = chunk__15725;
var G__16592 = count__15726;
var G__16593 = (i__15727 + (1));
seq__15724 = G__16590;
chunk__15725 = G__16591;
count__15726 = G__16592;
i__15727 = G__16593;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15724);
if(temp__5804__auto__){
var seq__15724__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15724__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__15724__$1);
var G__16594 = cljs.core.chunk_rest(seq__15724__$1);
var G__16595 = c__5525__auto__;
var G__16596 = cljs.core.count(c__5525__auto__);
var G__16597 = (0);
seq__15724 = G__16594;
chunk__15725 = G__16595;
count__15726 = G__16596;
i__15727 = G__16597;
continue;
} else {
var vec__15737 = cljs.core.first(seq__15724__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15737,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15737,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__16600 = cljs.core.next(seq__15724__$1);
var G__16601 = null;
var G__16602 = (0);
var G__16603 = (0);
seq__15724 = G__16600;
chunk__15725 = G__16601;
count__15726 = G__16602;
i__15727 = G__16603;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__15740 = cljs.core.seq(styles);
var chunk__15741 = null;
var count__15742 = (0);
var i__15743 = (0);
while(true){
if((i__15743 < count__15742)){
var vec__15750 = chunk__15741.cljs$core$IIndexed$_nth$arity$2(null,i__15743);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15750,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15750,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__16604 = seq__15740;
var G__16605 = chunk__15741;
var G__16606 = count__15742;
var G__16607 = (i__15743 + (1));
seq__15740 = G__16604;
chunk__15741 = G__16605;
count__15742 = G__16606;
i__15743 = G__16607;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15740);
if(temp__5804__auto__){
var seq__15740__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15740__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__15740__$1);
var G__16609 = cljs.core.chunk_rest(seq__15740__$1);
var G__16610 = c__5525__auto__;
var G__16611 = cljs.core.count(c__5525__auto__);
var G__16612 = (0);
seq__15740 = G__16609;
chunk__15741 = G__16610;
count__15742 = G__16611;
i__15743 = G__16612;
continue;
} else {
var vec__15753 = cljs.core.first(seq__15740__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15753,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15753,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__16613 = cljs.core.next(seq__15740__$1);
var G__16614 = null;
var G__16615 = (0);
var G__16616 = (0);
seq__15740 = G__16613;
chunk__15741 = G__16614;
count__15742 = G__16615;
i__15743 = G__16616;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__15768_16618 = key;
var G__15768_16619__$1 = (((G__15768_16618 instanceof cljs.core.Keyword))?G__15768_16618.fqn:null);
switch (G__15768_16619__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_16627 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_16627,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_16627,"aria-");
}
})())){
el.setAttribute(ks_16627,value);
} else {
(el[ks_16627] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__15774){
var map__15775 = p__15774;
var map__15775__$1 = cljs.core.__destructure_map(map__15775);
var props = map__15775__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15775__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__15776 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15776,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15776,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15776,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__15779 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__15779,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__15779;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__15781 = arguments.length;
switch (G__15781) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__15783){
var vec__15784 = p__15783;
var seq__15785 = cljs.core.seq(vec__15784);
var first__15786 = cljs.core.first(seq__15785);
var seq__15785__$1 = cljs.core.next(seq__15785);
var nn = first__15786;
var first__15786__$1 = cljs.core.first(seq__15785__$1);
var seq__15785__$2 = cljs.core.next(seq__15785__$1);
var np = first__15786__$1;
var nc = seq__15785__$2;
var node = vec__15784;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__15787 = nn;
var G__15788 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__15787,G__15788) : create_fn.call(null,G__15787,G__15788));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__15791 = nn;
var G__15792 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__15791,G__15792) : create_fn.call(null,G__15791,G__15792));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__15793 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15793,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15793,(1),null);
var seq__15797_16646 = cljs.core.seq(node_children);
var chunk__15798_16647 = null;
var count__15799_16648 = (0);
var i__15800_16649 = (0);
while(true){
if((i__15800_16649 < count__15799_16648)){
var child_struct_16650 = chunk__15798_16647.cljs$core$IIndexed$_nth$arity$2(null,i__15800_16649);
var children_16651 = shadow.dom.dom_node(child_struct_16650);
if(cljs.core.seq_QMARK_(children_16651)){
var seq__15836_16652 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_16651));
var chunk__15838_16653 = null;
var count__15839_16654 = (0);
var i__15840_16655 = (0);
while(true){
if((i__15840_16655 < count__15839_16654)){
var child_16656 = chunk__15838_16653.cljs$core$IIndexed$_nth$arity$2(null,i__15840_16655);
if(cljs.core.truth_(child_16656)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16656);


var G__16657 = seq__15836_16652;
var G__16658 = chunk__15838_16653;
var G__16659 = count__15839_16654;
var G__16660 = (i__15840_16655 + (1));
seq__15836_16652 = G__16657;
chunk__15838_16653 = G__16658;
count__15839_16654 = G__16659;
i__15840_16655 = G__16660;
continue;
} else {
var G__16661 = seq__15836_16652;
var G__16662 = chunk__15838_16653;
var G__16663 = count__15839_16654;
var G__16664 = (i__15840_16655 + (1));
seq__15836_16652 = G__16661;
chunk__15838_16653 = G__16662;
count__15839_16654 = G__16663;
i__15840_16655 = G__16664;
continue;
}
} else {
var temp__5804__auto___16665 = cljs.core.seq(seq__15836_16652);
if(temp__5804__auto___16665){
var seq__15836_16666__$1 = temp__5804__auto___16665;
if(cljs.core.chunked_seq_QMARK_(seq__15836_16666__$1)){
var c__5525__auto___16667 = cljs.core.chunk_first(seq__15836_16666__$1);
var G__16668 = cljs.core.chunk_rest(seq__15836_16666__$1);
var G__16669 = c__5525__auto___16667;
var G__16670 = cljs.core.count(c__5525__auto___16667);
var G__16671 = (0);
seq__15836_16652 = G__16668;
chunk__15838_16653 = G__16669;
count__15839_16654 = G__16670;
i__15840_16655 = G__16671;
continue;
} else {
var child_16672 = cljs.core.first(seq__15836_16666__$1);
if(cljs.core.truth_(child_16672)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16672);


var G__16673 = cljs.core.next(seq__15836_16666__$1);
var G__16674 = null;
var G__16675 = (0);
var G__16676 = (0);
seq__15836_16652 = G__16673;
chunk__15838_16653 = G__16674;
count__15839_16654 = G__16675;
i__15840_16655 = G__16676;
continue;
} else {
var G__16677 = cljs.core.next(seq__15836_16666__$1);
var G__16678 = null;
var G__16679 = (0);
var G__16680 = (0);
seq__15836_16652 = G__16677;
chunk__15838_16653 = G__16678;
count__15839_16654 = G__16679;
i__15840_16655 = G__16680;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_16651);
}


var G__16681 = seq__15797_16646;
var G__16682 = chunk__15798_16647;
var G__16683 = count__15799_16648;
var G__16684 = (i__15800_16649 + (1));
seq__15797_16646 = G__16681;
chunk__15798_16647 = G__16682;
count__15799_16648 = G__16683;
i__15800_16649 = G__16684;
continue;
} else {
var temp__5804__auto___16685 = cljs.core.seq(seq__15797_16646);
if(temp__5804__auto___16685){
var seq__15797_16686__$1 = temp__5804__auto___16685;
if(cljs.core.chunked_seq_QMARK_(seq__15797_16686__$1)){
var c__5525__auto___16689 = cljs.core.chunk_first(seq__15797_16686__$1);
var G__16690 = cljs.core.chunk_rest(seq__15797_16686__$1);
var G__16691 = c__5525__auto___16689;
var G__16692 = cljs.core.count(c__5525__auto___16689);
var G__16693 = (0);
seq__15797_16646 = G__16690;
chunk__15798_16647 = G__16691;
count__15799_16648 = G__16692;
i__15800_16649 = G__16693;
continue;
} else {
var child_struct_16694 = cljs.core.first(seq__15797_16686__$1);
var children_16695 = shadow.dom.dom_node(child_struct_16694);
if(cljs.core.seq_QMARK_(children_16695)){
var seq__15853_16696 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_16695));
var chunk__15855_16697 = null;
var count__15856_16698 = (0);
var i__15857_16699 = (0);
while(true){
if((i__15857_16699 < count__15856_16698)){
var child_16700 = chunk__15855_16697.cljs$core$IIndexed$_nth$arity$2(null,i__15857_16699);
if(cljs.core.truth_(child_16700)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16700);


var G__16701 = seq__15853_16696;
var G__16702 = chunk__15855_16697;
var G__16703 = count__15856_16698;
var G__16704 = (i__15857_16699 + (1));
seq__15853_16696 = G__16701;
chunk__15855_16697 = G__16702;
count__15856_16698 = G__16703;
i__15857_16699 = G__16704;
continue;
} else {
var G__16705 = seq__15853_16696;
var G__16706 = chunk__15855_16697;
var G__16707 = count__15856_16698;
var G__16708 = (i__15857_16699 + (1));
seq__15853_16696 = G__16705;
chunk__15855_16697 = G__16706;
count__15856_16698 = G__16707;
i__15857_16699 = G__16708;
continue;
}
} else {
var temp__5804__auto___16709__$1 = cljs.core.seq(seq__15853_16696);
if(temp__5804__auto___16709__$1){
var seq__15853_16710__$1 = temp__5804__auto___16709__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15853_16710__$1)){
var c__5525__auto___16711 = cljs.core.chunk_first(seq__15853_16710__$1);
var G__16712 = cljs.core.chunk_rest(seq__15853_16710__$1);
var G__16713 = c__5525__auto___16711;
var G__16714 = cljs.core.count(c__5525__auto___16711);
var G__16715 = (0);
seq__15853_16696 = G__16712;
chunk__15855_16697 = G__16713;
count__15856_16698 = G__16714;
i__15857_16699 = G__16715;
continue;
} else {
var child_16716 = cljs.core.first(seq__15853_16710__$1);
if(cljs.core.truth_(child_16716)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16716);


var G__16717 = cljs.core.next(seq__15853_16710__$1);
var G__16718 = null;
var G__16719 = (0);
var G__16720 = (0);
seq__15853_16696 = G__16717;
chunk__15855_16697 = G__16718;
count__15856_16698 = G__16719;
i__15857_16699 = G__16720;
continue;
} else {
var G__16721 = cljs.core.next(seq__15853_16710__$1);
var G__16722 = null;
var G__16723 = (0);
var G__16724 = (0);
seq__15853_16696 = G__16721;
chunk__15855_16697 = G__16722;
count__15856_16698 = G__16723;
i__15857_16699 = G__16724;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_16695);
}


var G__16725 = cljs.core.next(seq__15797_16686__$1);
var G__16726 = null;
var G__16727 = (0);
var G__16728 = (0);
seq__15797_16646 = G__16725;
chunk__15798_16647 = G__16726;
count__15799_16648 = G__16727;
i__15800_16649 = G__16728;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__15901 = cljs.core.seq(node);
var chunk__15902 = null;
var count__15903 = (0);
var i__15904 = (0);
while(true){
if((i__15904 < count__15903)){
var n = chunk__15902.cljs$core$IIndexed$_nth$arity$2(null,i__15904);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__16733 = seq__15901;
var G__16734 = chunk__15902;
var G__16735 = count__15903;
var G__16736 = (i__15904 + (1));
seq__15901 = G__16733;
chunk__15902 = G__16734;
count__15903 = G__16735;
i__15904 = G__16736;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15901);
if(temp__5804__auto__){
var seq__15901__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15901__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__15901__$1);
var G__16738 = cljs.core.chunk_rest(seq__15901__$1);
var G__16739 = c__5525__auto__;
var G__16740 = cljs.core.count(c__5525__auto__);
var G__16741 = (0);
seq__15901 = G__16738;
chunk__15902 = G__16739;
count__15903 = G__16740;
i__15904 = G__16741;
continue;
} else {
var n = cljs.core.first(seq__15901__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__16742 = cljs.core.next(seq__15901__$1);
var G__16743 = null;
var G__16744 = (0);
var G__16745 = (0);
seq__15901 = G__16742;
chunk__15902 = G__16743;
count__15903 = G__16744;
i__15904 = G__16745;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__15931 = arguments.length;
switch (G__15931) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__15944 = arguments.length;
switch (G__15944) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__15978 = arguments.length;
switch (G__15978) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16761 = arguments.length;
var i__5727__auto___16762 = (0);
while(true){
if((i__5727__auto___16762 < len__5726__auto___16761)){
args__5732__auto__.push((arguments[i__5727__auto___16762]));

var G__16763 = (i__5727__auto___16762 + (1));
i__5727__auto___16762 = G__16763;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__16039_16765 = cljs.core.seq(nodes);
var chunk__16040_16766 = null;
var count__16041_16767 = (0);
var i__16042_16768 = (0);
while(true){
if((i__16042_16768 < count__16041_16767)){
var node_16769 = chunk__16040_16766.cljs$core$IIndexed$_nth$arity$2(null,i__16042_16768);
fragment.appendChild(shadow.dom._to_dom(node_16769));


var G__16770 = seq__16039_16765;
var G__16771 = chunk__16040_16766;
var G__16772 = count__16041_16767;
var G__16773 = (i__16042_16768 + (1));
seq__16039_16765 = G__16770;
chunk__16040_16766 = G__16771;
count__16041_16767 = G__16772;
i__16042_16768 = G__16773;
continue;
} else {
var temp__5804__auto___16775 = cljs.core.seq(seq__16039_16765);
if(temp__5804__auto___16775){
var seq__16039_16776__$1 = temp__5804__auto___16775;
if(cljs.core.chunked_seq_QMARK_(seq__16039_16776__$1)){
var c__5525__auto___16777 = cljs.core.chunk_first(seq__16039_16776__$1);
var G__16778 = cljs.core.chunk_rest(seq__16039_16776__$1);
var G__16779 = c__5525__auto___16777;
var G__16780 = cljs.core.count(c__5525__auto___16777);
var G__16781 = (0);
seq__16039_16765 = G__16778;
chunk__16040_16766 = G__16779;
count__16041_16767 = G__16780;
i__16042_16768 = G__16781;
continue;
} else {
var node_16782 = cljs.core.first(seq__16039_16776__$1);
fragment.appendChild(shadow.dom._to_dom(node_16782));


var G__16783 = cljs.core.next(seq__16039_16776__$1);
var G__16784 = null;
var G__16785 = (0);
var G__16786 = (0);
seq__16039_16765 = G__16783;
chunk__16040_16766 = G__16784;
count__16041_16767 = G__16785;
i__16042_16768 = G__16786;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq16018){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16018));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__16074_16787 = cljs.core.seq(scripts);
var chunk__16075_16788 = null;
var count__16077_16789 = (0);
var i__16078_16790 = (0);
while(true){
if((i__16078_16790 < count__16077_16789)){
var vec__16089_16791 = chunk__16075_16788.cljs$core$IIndexed$_nth$arity$2(null,i__16078_16790);
var script_tag_16792 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16089_16791,(0),null);
var script_body_16793 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16089_16791,(1),null);
eval(script_body_16793);


var G__16794 = seq__16074_16787;
var G__16795 = chunk__16075_16788;
var G__16796 = count__16077_16789;
var G__16797 = (i__16078_16790 + (1));
seq__16074_16787 = G__16794;
chunk__16075_16788 = G__16795;
count__16077_16789 = G__16796;
i__16078_16790 = G__16797;
continue;
} else {
var temp__5804__auto___16798 = cljs.core.seq(seq__16074_16787);
if(temp__5804__auto___16798){
var seq__16074_16799__$1 = temp__5804__auto___16798;
if(cljs.core.chunked_seq_QMARK_(seq__16074_16799__$1)){
var c__5525__auto___16802 = cljs.core.chunk_first(seq__16074_16799__$1);
var G__16803 = cljs.core.chunk_rest(seq__16074_16799__$1);
var G__16804 = c__5525__auto___16802;
var G__16805 = cljs.core.count(c__5525__auto___16802);
var G__16806 = (0);
seq__16074_16787 = G__16803;
chunk__16075_16788 = G__16804;
count__16077_16789 = G__16805;
i__16078_16790 = G__16806;
continue;
} else {
var vec__16099_16807 = cljs.core.first(seq__16074_16799__$1);
var script_tag_16808 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16099_16807,(0),null);
var script_body_16809 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16099_16807,(1),null);
eval(script_body_16809);


var G__16810 = cljs.core.next(seq__16074_16799__$1);
var G__16811 = null;
var G__16812 = (0);
var G__16813 = (0);
seq__16074_16787 = G__16810;
chunk__16075_16788 = G__16811;
count__16077_16789 = G__16812;
i__16078_16790 = G__16813;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__16104){
var vec__16105 = p__16104;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16105,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16105,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__16116 = arguments.length;
switch (G__16116) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__16148 = cljs.core.seq(style_keys);
var chunk__16149 = null;
var count__16150 = (0);
var i__16151 = (0);
while(true){
if((i__16151 < count__16150)){
var it = chunk__16149.cljs$core$IIndexed$_nth$arity$2(null,i__16151);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__16824 = seq__16148;
var G__16825 = chunk__16149;
var G__16826 = count__16150;
var G__16827 = (i__16151 + (1));
seq__16148 = G__16824;
chunk__16149 = G__16825;
count__16150 = G__16826;
i__16151 = G__16827;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16148);
if(temp__5804__auto__){
var seq__16148__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16148__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__16148__$1);
var G__16828 = cljs.core.chunk_rest(seq__16148__$1);
var G__16829 = c__5525__auto__;
var G__16830 = cljs.core.count(c__5525__auto__);
var G__16831 = (0);
seq__16148 = G__16828;
chunk__16149 = G__16829;
count__16150 = G__16830;
i__16151 = G__16831;
continue;
} else {
var it = cljs.core.first(seq__16148__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__16833 = cljs.core.next(seq__16148__$1);
var G__16834 = null;
var G__16835 = (0);
var G__16836 = (0);
seq__16148 = G__16833;
chunk__16149 = G__16834;
count__16150 = G__16835;
i__16151 = G__16836;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k16156,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__16162 = k16156;
var G__16162__$1 = (((G__16162 instanceof cljs.core.Keyword))?G__16162.fqn:null);
switch (G__16162__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16156,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__16163){
var vec__16167 = p__16163;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16167,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16167,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16155){
var self__ = this;
var G__16155__$1 = this;
return (new cljs.core.RecordIter((0),G__16155__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16157,other16158){
var self__ = this;
var this16157__$1 = this;
return (((!((other16158 == null)))) && ((((this16157__$1.constructor === other16158.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16157__$1.x,other16158.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16157__$1.y,other16158.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16157__$1.__extmap,other16158.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k16156){
var self__ = this;
var this__5307__auto____$1 = this;
var G__16185 = k16156;
var G__16185__$1 = (((G__16185 instanceof cljs.core.Keyword))?G__16185.fqn:null);
switch (G__16185__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k16156);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__16155){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__16187 = cljs.core.keyword_identical_QMARK_;
var expr__16188 = k__5309__auto__;
if(cljs.core.truth_((pred__16187.cljs$core$IFn$_invoke$arity$2 ? pred__16187.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__16188) : pred__16187.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__16188)))){
return (new shadow.dom.Coordinate(G__16155,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__16187.cljs$core$IFn$_invoke$arity$2 ? pred__16187.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__16188) : pred__16187.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__16188)))){
return (new shadow.dom.Coordinate(self__.x,G__16155,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__16155),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__16155){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__16155,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__16160){
var extmap__5342__auto__ = (function (){var G__16201 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16160,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__16160)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16201);
} else {
return G__16201;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__16160),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__16160),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k16218,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__16235 = k16218;
var G__16235__$1 = (((G__16235 instanceof cljs.core.Keyword))?G__16235.fqn:null);
switch (G__16235__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16218,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__16238){
var vec__16239 = p__16238;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16239,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16239,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16217){
var self__ = this;
var G__16217__$1 = this;
return (new cljs.core.RecordIter((0),G__16217__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16219,other16220){
var self__ = this;
var this16219__$1 = this;
return (((!((other16220 == null)))) && ((((this16219__$1.constructor === other16220.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16219__$1.w,other16220.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16219__$1.h,other16220.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16219__$1.__extmap,other16220.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k16218){
var self__ = this;
var this__5307__auto____$1 = this;
var G__16291 = k16218;
var G__16291__$1 = (((G__16291 instanceof cljs.core.Keyword))?G__16291.fqn:null);
switch (G__16291__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k16218);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__16217){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__16294 = cljs.core.keyword_identical_QMARK_;
var expr__16295 = k__5309__auto__;
if(cljs.core.truth_((pred__16294.cljs$core$IFn$_invoke$arity$2 ? pred__16294.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__16295) : pred__16294.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__16295)))){
return (new shadow.dom.Size(G__16217,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__16294.cljs$core$IFn$_invoke$arity$2 ? pred__16294.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__16295) : pred__16294.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__16295)))){
return (new shadow.dom.Size(self__.w,G__16217,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__16217),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__16217){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__16217,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__16224){
var extmap__5342__auto__ = (function (){var G__16322 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16224,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__16224)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16322);
} else {
return G__16322;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__16224),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__16224),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__16893 = (i + (1));
var G__16894 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__16893;
ret = G__16894;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__16347){
var vec__16350 = p__16347;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16350,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16350,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__16354 = arguments.length;
switch (G__16354) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__16901 = ps;
var G__16902 = (i + (1));
el__$1 = G__16901;
i = G__16902;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__16390 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16390,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16390,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16390,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__16398_16906 = cljs.core.seq(props);
var chunk__16399_16907 = null;
var count__16400_16908 = (0);
var i__16401_16909 = (0);
while(true){
if((i__16401_16909 < count__16400_16908)){
var vec__16423_16912 = chunk__16399_16907.cljs$core$IIndexed$_nth$arity$2(null,i__16401_16909);
var k_16913 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16423_16912,(0),null);
var v_16914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16423_16912,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_16913);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_16913),v_16914);


var G__16919 = seq__16398_16906;
var G__16920 = chunk__16399_16907;
var G__16921 = count__16400_16908;
var G__16922 = (i__16401_16909 + (1));
seq__16398_16906 = G__16919;
chunk__16399_16907 = G__16920;
count__16400_16908 = G__16921;
i__16401_16909 = G__16922;
continue;
} else {
var temp__5804__auto___16923 = cljs.core.seq(seq__16398_16906);
if(temp__5804__auto___16923){
var seq__16398_16924__$1 = temp__5804__auto___16923;
if(cljs.core.chunked_seq_QMARK_(seq__16398_16924__$1)){
var c__5525__auto___16925 = cljs.core.chunk_first(seq__16398_16924__$1);
var G__16926 = cljs.core.chunk_rest(seq__16398_16924__$1);
var G__16927 = c__5525__auto___16925;
var G__16928 = cljs.core.count(c__5525__auto___16925);
var G__16929 = (0);
seq__16398_16906 = G__16926;
chunk__16399_16907 = G__16927;
count__16400_16908 = G__16928;
i__16401_16909 = G__16929;
continue;
} else {
var vec__16428_16930 = cljs.core.first(seq__16398_16924__$1);
var k_16931 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16428_16930,(0),null);
var v_16932 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16428_16930,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_16931);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_16931),v_16932);


var G__16933 = cljs.core.next(seq__16398_16924__$1);
var G__16934 = null;
var G__16935 = (0);
var G__16936 = (0);
seq__16398_16906 = G__16933;
chunk__16399_16907 = G__16934;
count__16400_16908 = G__16935;
i__16401_16909 = G__16936;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__16441 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16441,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16441,(1),null);
var seq__16445_16940 = cljs.core.seq(node_children);
var chunk__16447_16941 = null;
var count__16448_16942 = (0);
var i__16449_16943 = (0);
while(true){
if((i__16449_16943 < count__16448_16942)){
var child_struct_16944 = chunk__16447_16941.cljs$core$IIndexed$_nth$arity$2(null,i__16449_16943);
if((!((child_struct_16944 == null)))){
if(typeof child_struct_16944 === 'string'){
var text_16946 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_16946),child_struct_16944].join(''));
} else {
var children_16947 = shadow.dom.svg_node(child_struct_16944);
if(cljs.core.seq_QMARK_(children_16947)){
var seq__16485_16949 = cljs.core.seq(children_16947);
var chunk__16487_16950 = null;
var count__16488_16951 = (0);
var i__16489_16952 = (0);
while(true){
if((i__16489_16952 < count__16488_16951)){
var child_16953 = chunk__16487_16950.cljs$core$IIndexed$_nth$arity$2(null,i__16489_16952);
if(cljs.core.truth_(child_16953)){
node.appendChild(child_16953);


var G__16954 = seq__16485_16949;
var G__16955 = chunk__16487_16950;
var G__16956 = count__16488_16951;
var G__16957 = (i__16489_16952 + (1));
seq__16485_16949 = G__16954;
chunk__16487_16950 = G__16955;
count__16488_16951 = G__16956;
i__16489_16952 = G__16957;
continue;
} else {
var G__16958 = seq__16485_16949;
var G__16959 = chunk__16487_16950;
var G__16960 = count__16488_16951;
var G__16961 = (i__16489_16952 + (1));
seq__16485_16949 = G__16958;
chunk__16487_16950 = G__16959;
count__16488_16951 = G__16960;
i__16489_16952 = G__16961;
continue;
}
} else {
var temp__5804__auto___16962 = cljs.core.seq(seq__16485_16949);
if(temp__5804__auto___16962){
var seq__16485_16963__$1 = temp__5804__auto___16962;
if(cljs.core.chunked_seq_QMARK_(seq__16485_16963__$1)){
var c__5525__auto___16964 = cljs.core.chunk_first(seq__16485_16963__$1);
var G__16965 = cljs.core.chunk_rest(seq__16485_16963__$1);
var G__16966 = c__5525__auto___16964;
var G__16967 = cljs.core.count(c__5525__auto___16964);
var G__16968 = (0);
seq__16485_16949 = G__16965;
chunk__16487_16950 = G__16966;
count__16488_16951 = G__16967;
i__16489_16952 = G__16968;
continue;
} else {
var child_16969 = cljs.core.first(seq__16485_16963__$1);
if(cljs.core.truth_(child_16969)){
node.appendChild(child_16969);


var G__16971 = cljs.core.next(seq__16485_16963__$1);
var G__16972 = null;
var G__16973 = (0);
var G__16974 = (0);
seq__16485_16949 = G__16971;
chunk__16487_16950 = G__16972;
count__16488_16951 = G__16973;
i__16489_16952 = G__16974;
continue;
} else {
var G__16975 = cljs.core.next(seq__16485_16963__$1);
var G__16976 = null;
var G__16977 = (0);
var G__16978 = (0);
seq__16485_16949 = G__16975;
chunk__16487_16950 = G__16976;
count__16488_16951 = G__16977;
i__16489_16952 = G__16978;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_16947);
}
}


var G__16979 = seq__16445_16940;
var G__16980 = chunk__16447_16941;
var G__16981 = count__16448_16942;
var G__16982 = (i__16449_16943 + (1));
seq__16445_16940 = G__16979;
chunk__16447_16941 = G__16980;
count__16448_16942 = G__16981;
i__16449_16943 = G__16982;
continue;
} else {
var G__16983 = seq__16445_16940;
var G__16984 = chunk__16447_16941;
var G__16985 = count__16448_16942;
var G__16986 = (i__16449_16943 + (1));
seq__16445_16940 = G__16983;
chunk__16447_16941 = G__16984;
count__16448_16942 = G__16985;
i__16449_16943 = G__16986;
continue;
}
} else {
var temp__5804__auto___16987 = cljs.core.seq(seq__16445_16940);
if(temp__5804__auto___16987){
var seq__16445_16988__$1 = temp__5804__auto___16987;
if(cljs.core.chunked_seq_QMARK_(seq__16445_16988__$1)){
var c__5525__auto___16990 = cljs.core.chunk_first(seq__16445_16988__$1);
var G__16991 = cljs.core.chunk_rest(seq__16445_16988__$1);
var G__16992 = c__5525__auto___16990;
var G__16993 = cljs.core.count(c__5525__auto___16990);
var G__16994 = (0);
seq__16445_16940 = G__16991;
chunk__16447_16941 = G__16992;
count__16448_16942 = G__16993;
i__16449_16943 = G__16994;
continue;
} else {
var child_struct_16995 = cljs.core.first(seq__16445_16988__$1);
if((!((child_struct_16995 == null)))){
if(typeof child_struct_16995 === 'string'){
var text_16997 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_16997),child_struct_16995].join(''));
} else {
var children_16998 = shadow.dom.svg_node(child_struct_16995);
if(cljs.core.seq_QMARK_(children_16998)){
var seq__16505_16999 = cljs.core.seq(children_16998);
var chunk__16507_17000 = null;
var count__16508_17001 = (0);
var i__16509_17002 = (0);
while(true){
if((i__16509_17002 < count__16508_17001)){
var child_17003 = chunk__16507_17000.cljs$core$IIndexed$_nth$arity$2(null,i__16509_17002);
if(cljs.core.truth_(child_17003)){
node.appendChild(child_17003);


var G__17005 = seq__16505_16999;
var G__17006 = chunk__16507_17000;
var G__17007 = count__16508_17001;
var G__17008 = (i__16509_17002 + (1));
seq__16505_16999 = G__17005;
chunk__16507_17000 = G__17006;
count__16508_17001 = G__17007;
i__16509_17002 = G__17008;
continue;
} else {
var G__17011 = seq__16505_16999;
var G__17012 = chunk__16507_17000;
var G__17013 = count__16508_17001;
var G__17014 = (i__16509_17002 + (1));
seq__16505_16999 = G__17011;
chunk__16507_17000 = G__17012;
count__16508_17001 = G__17013;
i__16509_17002 = G__17014;
continue;
}
} else {
var temp__5804__auto___17015__$1 = cljs.core.seq(seq__16505_16999);
if(temp__5804__auto___17015__$1){
var seq__16505_17016__$1 = temp__5804__auto___17015__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16505_17016__$1)){
var c__5525__auto___17017 = cljs.core.chunk_first(seq__16505_17016__$1);
var G__17018 = cljs.core.chunk_rest(seq__16505_17016__$1);
var G__17019 = c__5525__auto___17017;
var G__17020 = cljs.core.count(c__5525__auto___17017);
var G__17021 = (0);
seq__16505_16999 = G__17018;
chunk__16507_17000 = G__17019;
count__16508_17001 = G__17020;
i__16509_17002 = G__17021;
continue;
} else {
var child_17022 = cljs.core.first(seq__16505_17016__$1);
if(cljs.core.truth_(child_17022)){
node.appendChild(child_17022);


var G__17023 = cljs.core.next(seq__16505_17016__$1);
var G__17024 = null;
var G__17025 = (0);
var G__17026 = (0);
seq__16505_16999 = G__17023;
chunk__16507_17000 = G__17024;
count__16508_17001 = G__17025;
i__16509_17002 = G__17026;
continue;
} else {
var G__17027 = cljs.core.next(seq__16505_17016__$1);
var G__17028 = null;
var G__17029 = (0);
var G__17030 = (0);
seq__16505_16999 = G__17027;
chunk__16507_17000 = G__17028;
count__16508_17001 = G__17029;
i__16509_17002 = G__17030;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_16998);
}
}


var G__17031 = cljs.core.next(seq__16445_16988__$1);
var G__17032 = null;
var G__17033 = (0);
var G__17034 = (0);
seq__16445_16940 = G__17031;
chunk__16447_16941 = G__17032;
count__16448_16942 = G__17033;
i__16449_16943 = G__17034;
continue;
} else {
var G__17035 = cljs.core.next(seq__16445_16988__$1);
var G__17036 = null;
var G__17037 = (0);
var G__17038 = (0);
seq__16445_16940 = G__17035;
chunk__16447_16941 = G__17036;
count__16448_16942 = G__17037;
i__16449_16943 = G__17038;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17043 = arguments.length;
var i__5727__auto___17047 = (0);
while(true){
if((i__5727__auto___17047 < len__5726__auto___17043)){
args__5732__auto__.push((arguments[i__5727__auto___17047]));

var G__17049 = (i__5727__auto___17047 + (1));
i__5727__auto___17047 = G__17049;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq16524){
var G__16525 = cljs.core.first(seq16524);
var seq16524__$1 = cljs.core.next(seq16524);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16525,seq16524__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
