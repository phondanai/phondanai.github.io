goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__23163 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__23164 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__23164);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__23167 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__23168 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__23168);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__23167);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__23163);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__23180 = arguments.length;
switch (G__23180) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__23188 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23188,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23188,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__23204_23227 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__23205_23228 = null;
var count__23206_23229 = (0);
var i__23207_23230 = (0);
while(true){
if((i__23207_23230 < count__23206_23229)){
var vec__23220_23231 = chunk__23205_23228.cljs$core$IIndexed$_nth$arity$2(null,i__23207_23230);
var container_23232 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23220_23231,(0),null);
var comp_23233 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23220_23231,(1),null);
reagent.dom.re_render_component(comp_23233,container_23232);


var G__23235 = seq__23204_23227;
var G__23236 = chunk__23205_23228;
var G__23237 = count__23206_23229;
var G__23238 = (i__23207_23230 + (1));
seq__23204_23227 = G__23235;
chunk__23205_23228 = G__23236;
count__23206_23229 = G__23237;
i__23207_23230 = G__23238;
continue;
} else {
var temp__5804__auto___23239 = cljs.core.seq(seq__23204_23227);
if(temp__5804__auto___23239){
var seq__23204_23240__$1 = temp__5804__auto___23239;
if(cljs.core.chunked_seq_QMARK_(seq__23204_23240__$1)){
var c__5525__auto___23241 = cljs.core.chunk_first(seq__23204_23240__$1);
var G__23243 = cljs.core.chunk_rest(seq__23204_23240__$1);
var G__23244 = c__5525__auto___23241;
var G__23245 = cljs.core.count(c__5525__auto___23241);
var G__23246 = (0);
seq__23204_23227 = G__23243;
chunk__23205_23228 = G__23244;
count__23206_23229 = G__23245;
i__23207_23230 = G__23246;
continue;
} else {
var vec__23223_23247 = cljs.core.first(seq__23204_23240__$1);
var container_23248 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23223_23247,(0),null);
var comp_23249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23223_23247,(1),null);
reagent.dom.re_render_component(comp_23249,container_23248);


var G__23250 = cljs.core.next(seq__23204_23240__$1);
var G__23251 = null;
var G__23252 = (0);
var G__23253 = (0);
seq__23204_23227 = G__23250;
chunk__23205_23228 = G__23251;
count__23206_23229 = G__23252;
i__23207_23230 = G__23253;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
