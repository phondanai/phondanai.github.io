goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___22832 = arguments.length;
var i__5727__auto___22833 = (0);
while(true){
if((i__5727__auto___22833 < len__5726__auto___22832)){
args__5732__auto__.push((arguments[i__5727__auto___22833]));

var G__22834 = (i__5727__auto___22833 + (1));
i__5727__auto___22833 = G__22834;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq22368){
var G__22369 = cljs.core.first(seq22368);
var seq22368__$1 = cljs.core.next(seq22368);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22369,seq22368__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__22376 = cljs.core.seq(sources);
var chunk__22377 = null;
var count__22378 = (0);
var i__22379 = (0);
while(true){
if((i__22379 < count__22378)){
var map__22388 = chunk__22377.cljs$core$IIndexed$_nth$arity$2(null,i__22379);
var map__22388__$1 = cljs.core.__destructure_map(map__22388);
var src = map__22388__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22388__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22388__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22388__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22388__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e22389){var e_22836 = e22389;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_22836);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_22836.message)].join('')));
}

var G__22837 = seq__22376;
var G__22838 = chunk__22377;
var G__22839 = count__22378;
var G__22840 = (i__22379 + (1));
seq__22376 = G__22837;
chunk__22377 = G__22838;
count__22378 = G__22839;
i__22379 = G__22840;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22376);
if(temp__5804__auto__){
var seq__22376__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22376__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22376__$1);
var G__22841 = cljs.core.chunk_rest(seq__22376__$1);
var G__22842 = c__5525__auto__;
var G__22843 = cljs.core.count(c__5525__auto__);
var G__22844 = (0);
seq__22376 = G__22841;
chunk__22377 = G__22842;
count__22378 = G__22843;
i__22379 = G__22844;
continue;
} else {
var map__22390 = cljs.core.first(seq__22376__$1);
var map__22390__$1 = cljs.core.__destructure_map(map__22390);
var src = map__22390__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22390__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22390__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22390__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22390__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e22391){var e_22845 = e22391;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_22845);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_22845.message)].join('')));
}

var G__22846 = cljs.core.next(seq__22376__$1);
var G__22847 = null;
var G__22848 = (0);
var G__22849 = (0);
seq__22376 = G__22846;
chunk__22377 = G__22847;
count__22378 = G__22848;
i__22379 = G__22849;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (next){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__22392 = cljs.core.seq(js_requires);
var chunk__22393 = null;
var count__22394 = (0);
var i__22395 = (0);
while(true){
if((i__22395 < count__22394)){
var js_ns = chunk__22393.cljs$core$IIndexed$_nth$arity$2(null,i__22395);
var require_str_22852 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_22852);


var G__22853 = seq__22392;
var G__22854 = chunk__22393;
var G__22855 = count__22394;
var G__22856 = (i__22395 + (1));
seq__22392 = G__22853;
chunk__22393 = G__22854;
count__22394 = G__22855;
i__22395 = G__22856;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22392);
if(temp__5804__auto__){
var seq__22392__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22392__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22392__$1);
var G__22857 = cljs.core.chunk_rest(seq__22392__$1);
var G__22858 = c__5525__auto__;
var G__22859 = cljs.core.count(c__5525__auto__);
var G__22860 = (0);
seq__22392 = G__22857;
chunk__22393 = G__22858;
count__22394 = G__22859;
i__22395 = G__22860;
continue;
} else {
var js_ns = cljs.core.first(seq__22392__$1);
var require_str_22861 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_22861);


var G__22862 = cljs.core.next(seq__22392__$1);
var G__22863 = null;
var G__22864 = (0);
var G__22865 = (0);
seq__22392 = G__22862;
chunk__22393 = G__22863;
count__22394 = G__22864;
i__22395 = G__22865;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__22401){
var map__22402 = p__22401;
var map__22402__$1 = cljs.core.__destructure_map(map__22402);
var msg = map__22402__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22402__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22402__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22403(s__22404){
return (new cljs.core.LazySeq(null,(function (){
var s__22404__$1 = s__22404;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22404__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__22410 = cljs.core.first(xs__6360__auto__);
var map__22410__$1 = cljs.core.__destructure_map(map__22410);
var src = map__22410__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22410__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22410__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__22404__$1,map__22410,map__22410__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22402,map__22402__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22403_$_iter__22405(s__22406){
return (new cljs.core.LazySeq(null,((function (s__22404__$1,map__22410,map__22410__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22402,map__22402__$1,msg,info,reload_info){
return (function (){
var s__22406__$1 = s__22406;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__22406__$1);
if(temp__5804__auto____$1){
var s__22406__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22406__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22406__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22408 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22407 = (0);
while(true){
if((i__22407 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__22407);
cljs.core.chunk_append(b__22408,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__22866 = (i__22407 + (1));
i__22407 = G__22866;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22408),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22403_$_iter__22405(cljs.core.chunk_rest(s__22406__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22408),null);
}
} else {
var warning = cljs.core.first(s__22406__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22403_$_iter__22405(cljs.core.rest(s__22406__$2)));
}
} else {
return null;
}
break;
}
});})(s__22404__$1,map__22410,map__22410__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22402,map__22402__$1,msg,info,reload_info))
,null,null));
});})(s__22404__$1,map__22410,map__22410__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22402,map__22402__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22403(cljs.core.rest(s__22404__$1)));
} else {
var G__22868 = cljs.core.rest(s__22404__$1);
s__22404__$1 = G__22868;
continue;
}
} else {
var G__22869 = cljs.core.rest(s__22404__$1);
s__22404__$1 = G__22869;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__22415_22870 = cljs.core.seq(warnings);
var chunk__22416_22871 = null;
var count__22417_22872 = (0);
var i__22418_22873 = (0);
while(true){
if((i__22418_22873 < count__22417_22872)){
var map__22421_22874 = chunk__22416_22871.cljs$core$IIndexed$_nth$arity$2(null,i__22418_22873);
var map__22421_22875__$1 = cljs.core.__destructure_map(map__22421_22874);
var w_22876 = map__22421_22875__$1;
var msg_22877__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22421_22875__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_22878 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22421_22875__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_22879 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22421_22875__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_22880 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22421_22875__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_22880)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_22878),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_22879),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_22877__$1)].join(''));


var G__22881 = seq__22415_22870;
var G__22882 = chunk__22416_22871;
var G__22883 = count__22417_22872;
var G__22884 = (i__22418_22873 + (1));
seq__22415_22870 = G__22881;
chunk__22416_22871 = G__22882;
count__22417_22872 = G__22883;
i__22418_22873 = G__22884;
continue;
} else {
var temp__5804__auto___22885 = cljs.core.seq(seq__22415_22870);
if(temp__5804__auto___22885){
var seq__22415_22886__$1 = temp__5804__auto___22885;
if(cljs.core.chunked_seq_QMARK_(seq__22415_22886__$1)){
var c__5525__auto___22887 = cljs.core.chunk_first(seq__22415_22886__$1);
var G__22888 = cljs.core.chunk_rest(seq__22415_22886__$1);
var G__22889 = c__5525__auto___22887;
var G__22890 = cljs.core.count(c__5525__auto___22887);
var G__22891 = (0);
seq__22415_22870 = G__22888;
chunk__22416_22871 = G__22889;
count__22417_22872 = G__22890;
i__22418_22873 = G__22891;
continue;
} else {
var map__22422_22892 = cljs.core.first(seq__22415_22886__$1);
var map__22422_22893__$1 = cljs.core.__destructure_map(map__22422_22892);
var w_22894 = map__22422_22893__$1;
var msg_22895__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22422_22893__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_22896 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22422_22893__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_22897 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22422_22893__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_22898 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22422_22893__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_22898)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_22896),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_22897),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_22895__$1)].join(''));


var G__22899 = cljs.core.next(seq__22415_22886__$1);
var G__22900 = null;
var G__22901 = (0);
var G__22902 = (0);
seq__22415_22870 = G__22899;
chunk__22416_22871 = G__22900;
count__22417_22872 = G__22901;
i__22418_22873 = G__22902;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__22397_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__22397_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__22429 = node_uri;
G__22429.setQuery(null);

G__22429.setPath(new$);

return G__22429;
})());
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__22430){
var map__22431 = p__22430;
var map__22431__$1 = cljs.core.__destructure_map(map__22431);
var msg = map__22431__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22431__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22431__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__22434 = cljs.core.seq(updates);
var chunk__22436 = null;
var count__22437 = (0);
var i__22438 = (0);
while(true){
if((i__22438 < count__22437)){
var path = chunk__22436.cljs$core$IIndexed$_nth$arity$2(null,i__22438);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__22587_22908 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__22591_22909 = null;
var count__22592_22910 = (0);
var i__22593_22911 = (0);
while(true){
if((i__22593_22911 < count__22592_22910)){
var node_22912 = chunk__22591_22909.cljs$core$IIndexed$_nth$arity$2(null,i__22593_22911);
if(cljs.core.not(node_22912.shadow$old)){
var path_match_22913 = shadow.cljs.devtools.client.browser.match_paths(node_22912.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22913)){
var new_link_22914 = (function (){var G__22622 = node_22912.cloneNode(true);
G__22622.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22913),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22622;
})();
(node_22912.shadow$old = true);

(new_link_22914.onload = ((function (seq__22587_22908,chunk__22591_22909,count__22592_22910,i__22593_22911,seq__22434,chunk__22436,count__22437,i__22438,new_link_22914,path_match_22913,node_22912,path,map__22431,map__22431__$1,msg,updates,reload_info){
return (function (e){
var seq__22623_22915 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22625_22916 = null;
var count__22626_22917 = (0);
var i__22627_22918 = (0);
while(true){
if((i__22627_22918 < count__22626_22917)){
var map__22634_22919 = chunk__22625_22916.cljs$core$IIndexed$_nth$arity$2(null,i__22627_22918);
var map__22634_22920__$1 = cljs.core.__destructure_map(map__22634_22919);
var task_22921 = map__22634_22920__$1;
var fn_str_22922 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22634_22920__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22923 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22634_22920__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22924 = goog.getObjectByName(fn_str_22922,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22923)].join(''));

(fn_obj_22924.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22924.cljs$core$IFn$_invoke$arity$2(path,new_link_22914) : fn_obj_22924.call(null,path,new_link_22914));


var G__22925 = seq__22623_22915;
var G__22926 = chunk__22625_22916;
var G__22927 = count__22626_22917;
var G__22928 = (i__22627_22918 + (1));
seq__22623_22915 = G__22925;
chunk__22625_22916 = G__22926;
count__22626_22917 = G__22927;
i__22627_22918 = G__22928;
continue;
} else {
var temp__5804__auto___22929 = cljs.core.seq(seq__22623_22915);
if(temp__5804__auto___22929){
var seq__22623_22930__$1 = temp__5804__auto___22929;
if(cljs.core.chunked_seq_QMARK_(seq__22623_22930__$1)){
var c__5525__auto___22932 = cljs.core.chunk_first(seq__22623_22930__$1);
var G__22933 = cljs.core.chunk_rest(seq__22623_22930__$1);
var G__22934 = c__5525__auto___22932;
var G__22935 = cljs.core.count(c__5525__auto___22932);
var G__22936 = (0);
seq__22623_22915 = G__22933;
chunk__22625_22916 = G__22934;
count__22626_22917 = G__22935;
i__22627_22918 = G__22936;
continue;
} else {
var map__22639_22937 = cljs.core.first(seq__22623_22930__$1);
var map__22639_22938__$1 = cljs.core.__destructure_map(map__22639_22937);
var task_22939 = map__22639_22938__$1;
var fn_str_22940 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22639_22938__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22941 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22639_22938__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22942 = goog.getObjectByName(fn_str_22940,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22941)].join(''));

(fn_obj_22942.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22942.cljs$core$IFn$_invoke$arity$2(path,new_link_22914) : fn_obj_22942.call(null,path,new_link_22914));


var G__22943 = cljs.core.next(seq__22623_22930__$1);
var G__22944 = null;
var G__22945 = (0);
var G__22946 = (0);
seq__22623_22915 = G__22943;
chunk__22625_22916 = G__22944;
count__22626_22917 = G__22945;
i__22627_22918 = G__22946;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22912);
});})(seq__22587_22908,chunk__22591_22909,count__22592_22910,i__22593_22911,seq__22434,chunk__22436,count__22437,i__22438,new_link_22914,path_match_22913,node_22912,path,map__22431,map__22431__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22913], 0));

goog.dom.insertSiblingAfter(new_link_22914,node_22912);


var G__22947 = seq__22587_22908;
var G__22948 = chunk__22591_22909;
var G__22949 = count__22592_22910;
var G__22950 = (i__22593_22911 + (1));
seq__22587_22908 = G__22947;
chunk__22591_22909 = G__22948;
count__22592_22910 = G__22949;
i__22593_22911 = G__22950;
continue;
} else {
var G__22951 = seq__22587_22908;
var G__22952 = chunk__22591_22909;
var G__22953 = count__22592_22910;
var G__22954 = (i__22593_22911 + (1));
seq__22587_22908 = G__22951;
chunk__22591_22909 = G__22952;
count__22592_22910 = G__22953;
i__22593_22911 = G__22954;
continue;
}
} else {
var G__22955 = seq__22587_22908;
var G__22956 = chunk__22591_22909;
var G__22957 = count__22592_22910;
var G__22958 = (i__22593_22911 + (1));
seq__22587_22908 = G__22955;
chunk__22591_22909 = G__22956;
count__22592_22910 = G__22957;
i__22593_22911 = G__22958;
continue;
}
} else {
var temp__5804__auto___22959 = cljs.core.seq(seq__22587_22908);
if(temp__5804__auto___22959){
var seq__22587_22960__$1 = temp__5804__auto___22959;
if(cljs.core.chunked_seq_QMARK_(seq__22587_22960__$1)){
var c__5525__auto___22961 = cljs.core.chunk_first(seq__22587_22960__$1);
var G__22962 = cljs.core.chunk_rest(seq__22587_22960__$1);
var G__22963 = c__5525__auto___22961;
var G__22964 = cljs.core.count(c__5525__auto___22961);
var G__22965 = (0);
seq__22587_22908 = G__22962;
chunk__22591_22909 = G__22963;
count__22592_22910 = G__22964;
i__22593_22911 = G__22965;
continue;
} else {
var node_22966 = cljs.core.first(seq__22587_22960__$1);
if(cljs.core.not(node_22966.shadow$old)){
var path_match_22967 = shadow.cljs.devtools.client.browser.match_paths(node_22966.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22967)){
var new_link_22968 = (function (){var G__22645 = node_22966.cloneNode(true);
G__22645.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22967),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22645;
})();
(node_22966.shadow$old = true);

(new_link_22968.onload = ((function (seq__22587_22908,chunk__22591_22909,count__22592_22910,i__22593_22911,seq__22434,chunk__22436,count__22437,i__22438,new_link_22968,path_match_22967,node_22966,seq__22587_22960__$1,temp__5804__auto___22959,path,map__22431,map__22431__$1,msg,updates,reload_info){
return (function (e){
var seq__22651_22969 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22653_22970 = null;
var count__22654_22971 = (0);
var i__22655_22972 = (0);
while(true){
if((i__22655_22972 < count__22654_22971)){
var map__22659_22973 = chunk__22653_22970.cljs$core$IIndexed$_nth$arity$2(null,i__22655_22972);
var map__22659_22974__$1 = cljs.core.__destructure_map(map__22659_22973);
var task_22975 = map__22659_22974__$1;
var fn_str_22976 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22659_22974__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22977 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22659_22974__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22978 = goog.getObjectByName(fn_str_22976,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22977)].join(''));

(fn_obj_22978.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22978.cljs$core$IFn$_invoke$arity$2(path,new_link_22968) : fn_obj_22978.call(null,path,new_link_22968));


var G__22979 = seq__22651_22969;
var G__22980 = chunk__22653_22970;
var G__22981 = count__22654_22971;
var G__22982 = (i__22655_22972 + (1));
seq__22651_22969 = G__22979;
chunk__22653_22970 = G__22980;
count__22654_22971 = G__22981;
i__22655_22972 = G__22982;
continue;
} else {
var temp__5804__auto___22983__$1 = cljs.core.seq(seq__22651_22969);
if(temp__5804__auto___22983__$1){
var seq__22651_22984__$1 = temp__5804__auto___22983__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22651_22984__$1)){
var c__5525__auto___22985 = cljs.core.chunk_first(seq__22651_22984__$1);
var G__22986 = cljs.core.chunk_rest(seq__22651_22984__$1);
var G__22987 = c__5525__auto___22985;
var G__22988 = cljs.core.count(c__5525__auto___22985);
var G__22989 = (0);
seq__22651_22969 = G__22986;
chunk__22653_22970 = G__22987;
count__22654_22971 = G__22988;
i__22655_22972 = G__22989;
continue;
} else {
var map__22661_22990 = cljs.core.first(seq__22651_22984__$1);
var map__22661_22991__$1 = cljs.core.__destructure_map(map__22661_22990);
var task_22992 = map__22661_22991__$1;
var fn_str_22993 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22661_22991__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22994 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22661_22991__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22995 = goog.getObjectByName(fn_str_22993,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22994)].join(''));

(fn_obj_22995.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22995.cljs$core$IFn$_invoke$arity$2(path,new_link_22968) : fn_obj_22995.call(null,path,new_link_22968));


var G__22996 = cljs.core.next(seq__22651_22984__$1);
var G__22997 = null;
var G__22998 = (0);
var G__22999 = (0);
seq__22651_22969 = G__22996;
chunk__22653_22970 = G__22997;
count__22654_22971 = G__22998;
i__22655_22972 = G__22999;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22966);
});})(seq__22587_22908,chunk__22591_22909,count__22592_22910,i__22593_22911,seq__22434,chunk__22436,count__22437,i__22438,new_link_22968,path_match_22967,node_22966,seq__22587_22960__$1,temp__5804__auto___22959,path,map__22431,map__22431__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22967], 0));

goog.dom.insertSiblingAfter(new_link_22968,node_22966);


var G__23000 = cljs.core.next(seq__22587_22960__$1);
var G__23001 = null;
var G__23002 = (0);
var G__23003 = (0);
seq__22587_22908 = G__23000;
chunk__22591_22909 = G__23001;
count__22592_22910 = G__23002;
i__22593_22911 = G__23003;
continue;
} else {
var G__23004 = cljs.core.next(seq__22587_22960__$1);
var G__23005 = null;
var G__23006 = (0);
var G__23007 = (0);
seq__22587_22908 = G__23004;
chunk__22591_22909 = G__23005;
count__22592_22910 = G__23006;
i__22593_22911 = G__23007;
continue;
}
} else {
var G__23008 = cljs.core.next(seq__22587_22960__$1);
var G__23009 = null;
var G__23010 = (0);
var G__23011 = (0);
seq__22587_22908 = G__23008;
chunk__22591_22909 = G__23009;
count__22592_22910 = G__23010;
i__22593_22911 = G__23011;
continue;
}
}
} else {
}
}
break;
}


var G__23012 = seq__22434;
var G__23013 = chunk__22436;
var G__23014 = count__22437;
var G__23015 = (i__22438 + (1));
seq__22434 = G__23012;
chunk__22436 = G__23013;
count__22437 = G__23014;
i__22438 = G__23015;
continue;
} else {
var G__23016 = seq__22434;
var G__23017 = chunk__22436;
var G__23018 = count__22437;
var G__23019 = (i__22438 + (1));
seq__22434 = G__23016;
chunk__22436 = G__23017;
count__22437 = G__23018;
i__22438 = G__23019;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22434);
if(temp__5804__auto__){
var seq__22434__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22434__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22434__$1);
var G__23020 = cljs.core.chunk_rest(seq__22434__$1);
var G__23021 = c__5525__auto__;
var G__23022 = cljs.core.count(c__5525__auto__);
var G__23023 = (0);
seq__22434 = G__23020;
chunk__22436 = G__23021;
count__22437 = G__23022;
i__22438 = G__23023;
continue;
} else {
var path = cljs.core.first(seq__22434__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__22686_23024 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__22690_23025 = null;
var count__22691_23026 = (0);
var i__22692_23027 = (0);
while(true){
if((i__22692_23027 < count__22691_23026)){
var node_23028 = chunk__22690_23025.cljs$core$IIndexed$_nth$arity$2(null,i__22692_23027);
if(cljs.core.not(node_23028.shadow$old)){
var path_match_23029 = shadow.cljs.devtools.client.browser.match_paths(node_23028.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23029)){
var new_link_23030 = (function (){var G__22771 = node_23028.cloneNode(true);
G__22771.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23029),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22771;
})();
(node_23028.shadow$old = true);

(new_link_23030.onload = ((function (seq__22686_23024,chunk__22690_23025,count__22691_23026,i__22692_23027,seq__22434,chunk__22436,count__22437,i__22438,new_link_23030,path_match_23029,node_23028,path,seq__22434__$1,temp__5804__auto__,map__22431,map__22431__$1,msg,updates,reload_info){
return (function (e){
var seq__22772_23031 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22774_23032 = null;
var count__22775_23033 = (0);
var i__22776_23034 = (0);
while(true){
if((i__22776_23034 < count__22775_23033)){
var map__22780_23035 = chunk__22774_23032.cljs$core$IIndexed$_nth$arity$2(null,i__22776_23034);
var map__22780_23036__$1 = cljs.core.__destructure_map(map__22780_23035);
var task_23037 = map__22780_23036__$1;
var fn_str_23038 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22780_23036__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23039 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22780_23036__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23040 = goog.getObjectByName(fn_str_23038,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23039)].join(''));

(fn_obj_23040.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23040.cljs$core$IFn$_invoke$arity$2(path,new_link_23030) : fn_obj_23040.call(null,path,new_link_23030));


var G__23042 = seq__22772_23031;
var G__23043 = chunk__22774_23032;
var G__23044 = count__22775_23033;
var G__23045 = (i__22776_23034 + (1));
seq__22772_23031 = G__23042;
chunk__22774_23032 = G__23043;
count__22775_23033 = G__23044;
i__22776_23034 = G__23045;
continue;
} else {
var temp__5804__auto___23046__$1 = cljs.core.seq(seq__22772_23031);
if(temp__5804__auto___23046__$1){
var seq__22772_23047__$1 = temp__5804__auto___23046__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22772_23047__$1)){
var c__5525__auto___23048 = cljs.core.chunk_first(seq__22772_23047__$1);
var G__23049 = cljs.core.chunk_rest(seq__22772_23047__$1);
var G__23050 = c__5525__auto___23048;
var G__23051 = cljs.core.count(c__5525__auto___23048);
var G__23052 = (0);
seq__22772_23031 = G__23049;
chunk__22774_23032 = G__23050;
count__22775_23033 = G__23051;
i__22776_23034 = G__23052;
continue;
} else {
var map__22781_23053 = cljs.core.first(seq__22772_23047__$1);
var map__22781_23054__$1 = cljs.core.__destructure_map(map__22781_23053);
var task_23055 = map__22781_23054__$1;
var fn_str_23056 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22781_23054__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23057 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22781_23054__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23058 = goog.getObjectByName(fn_str_23056,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23057)].join(''));

(fn_obj_23058.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23058.cljs$core$IFn$_invoke$arity$2(path,new_link_23030) : fn_obj_23058.call(null,path,new_link_23030));


var G__23059 = cljs.core.next(seq__22772_23047__$1);
var G__23060 = null;
var G__23061 = (0);
var G__23062 = (0);
seq__22772_23031 = G__23059;
chunk__22774_23032 = G__23060;
count__22775_23033 = G__23061;
i__22776_23034 = G__23062;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23028);
});})(seq__22686_23024,chunk__22690_23025,count__22691_23026,i__22692_23027,seq__22434,chunk__22436,count__22437,i__22438,new_link_23030,path_match_23029,node_23028,path,seq__22434__$1,temp__5804__auto__,map__22431,map__22431__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23029], 0));

goog.dom.insertSiblingAfter(new_link_23030,node_23028);


var G__23063 = seq__22686_23024;
var G__23064 = chunk__22690_23025;
var G__23065 = count__22691_23026;
var G__23066 = (i__22692_23027 + (1));
seq__22686_23024 = G__23063;
chunk__22690_23025 = G__23064;
count__22691_23026 = G__23065;
i__22692_23027 = G__23066;
continue;
} else {
var G__23067 = seq__22686_23024;
var G__23068 = chunk__22690_23025;
var G__23069 = count__22691_23026;
var G__23070 = (i__22692_23027 + (1));
seq__22686_23024 = G__23067;
chunk__22690_23025 = G__23068;
count__22691_23026 = G__23069;
i__22692_23027 = G__23070;
continue;
}
} else {
var G__23071 = seq__22686_23024;
var G__23072 = chunk__22690_23025;
var G__23073 = count__22691_23026;
var G__23074 = (i__22692_23027 + (1));
seq__22686_23024 = G__23071;
chunk__22690_23025 = G__23072;
count__22691_23026 = G__23073;
i__22692_23027 = G__23074;
continue;
}
} else {
var temp__5804__auto___23075__$1 = cljs.core.seq(seq__22686_23024);
if(temp__5804__auto___23075__$1){
var seq__22686_23076__$1 = temp__5804__auto___23075__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22686_23076__$1)){
var c__5525__auto___23077 = cljs.core.chunk_first(seq__22686_23076__$1);
var G__23078 = cljs.core.chunk_rest(seq__22686_23076__$1);
var G__23079 = c__5525__auto___23077;
var G__23080 = cljs.core.count(c__5525__auto___23077);
var G__23081 = (0);
seq__22686_23024 = G__23078;
chunk__22690_23025 = G__23079;
count__22691_23026 = G__23080;
i__22692_23027 = G__23081;
continue;
} else {
var node_23082 = cljs.core.first(seq__22686_23076__$1);
if(cljs.core.not(node_23082.shadow$old)){
var path_match_23083 = shadow.cljs.devtools.client.browser.match_paths(node_23082.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23083)){
var new_link_23084 = (function (){var G__22782 = node_23082.cloneNode(true);
G__22782.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23083),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22782;
})();
(node_23082.shadow$old = true);

(new_link_23084.onload = ((function (seq__22686_23024,chunk__22690_23025,count__22691_23026,i__22692_23027,seq__22434,chunk__22436,count__22437,i__22438,new_link_23084,path_match_23083,node_23082,seq__22686_23076__$1,temp__5804__auto___23075__$1,path,seq__22434__$1,temp__5804__auto__,map__22431,map__22431__$1,msg,updates,reload_info){
return (function (e){
var seq__22783_23085 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22785_23086 = null;
var count__22786_23087 = (0);
var i__22787_23088 = (0);
while(true){
if((i__22787_23088 < count__22786_23087)){
var map__22791_23089 = chunk__22785_23086.cljs$core$IIndexed$_nth$arity$2(null,i__22787_23088);
var map__22791_23090__$1 = cljs.core.__destructure_map(map__22791_23089);
var task_23091 = map__22791_23090__$1;
var fn_str_23092 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22791_23090__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23093 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22791_23090__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23094 = goog.getObjectByName(fn_str_23092,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23093)].join(''));

(fn_obj_23094.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23094.cljs$core$IFn$_invoke$arity$2(path,new_link_23084) : fn_obj_23094.call(null,path,new_link_23084));


var G__23095 = seq__22783_23085;
var G__23096 = chunk__22785_23086;
var G__23097 = count__22786_23087;
var G__23098 = (i__22787_23088 + (1));
seq__22783_23085 = G__23095;
chunk__22785_23086 = G__23096;
count__22786_23087 = G__23097;
i__22787_23088 = G__23098;
continue;
} else {
var temp__5804__auto___23099__$2 = cljs.core.seq(seq__22783_23085);
if(temp__5804__auto___23099__$2){
var seq__22783_23100__$1 = temp__5804__auto___23099__$2;
if(cljs.core.chunked_seq_QMARK_(seq__22783_23100__$1)){
var c__5525__auto___23101 = cljs.core.chunk_first(seq__22783_23100__$1);
var G__23102 = cljs.core.chunk_rest(seq__22783_23100__$1);
var G__23103 = c__5525__auto___23101;
var G__23104 = cljs.core.count(c__5525__auto___23101);
var G__23105 = (0);
seq__22783_23085 = G__23102;
chunk__22785_23086 = G__23103;
count__22786_23087 = G__23104;
i__22787_23088 = G__23105;
continue;
} else {
var map__22793_23106 = cljs.core.first(seq__22783_23100__$1);
var map__22793_23107__$1 = cljs.core.__destructure_map(map__22793_23106);
var task_23108 = map__22793_23107__$1;
var fn_str_23109 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22793_23107__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23110 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22793_23107__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23111 = goog.getObjectByName(fn_str_23109,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23110)].join(''));

(fn_obj_23111.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23111.cljs$core$IFn$_invoke$arity$2(path,new_link_23084) : fn_obj_23111.call(null,path,new_link_23084));


var G__23112 = cljs.core.next(seq__22783_23100__$1);
var G__23113 = null;
var G__23114 = (0);
var G__23115 = (0);
seq__22783_23085 = G__23112;
chunk__22785_23086 = G__23113;
count__22786_23087 = G__23114;
i__22787_23088 = G__23115;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23082);
});})(seq__22686_23024,chunk__22690_23025,count__22691_23026,i__22692_23027,seq__22434,chunk__22436,count__22437,i__22438,new_link_23084,path_match_23083,node_23082,seq__22686_23076__$1,temp__5804__auto___23075__$1,path,seq__22434__$1,temp__5804__auto__,map__22431,map__22431__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23083], 0));

goog.dom.insertSiblingAfter(new_link_23084,node_23082);


var G__23116 = cljs.core.next(seq__22686_23076__$1);
var G__23117 = null;
var G__23118 = (0);
var G__23119 = (0);
seq__22686_23024 = G__23116;
chunk__22690_23025 = G__23117;
count__22691_23026 = G__23118;
i__22692_23027 = G__23119;
continue;
} else {
var G__23120 = cljs.core.next(seq__22686_23076__$1);
var G__23121 = null;
var G__23122 = (0);
var G__23123 = (0);
seq__22686_23024 = G__23120;
chunk__22690_23025 = G__23121;
count__22691_23026 = G__23122;
i__22692_23027 = G__23123;
continue;
}
} else {
var G__23124 = cljs.core.next(seq__22686_23076__$1);
var G__23125 = null;
var G__23126 = (0);
var G__23127 = (0);
seq__22686_23024 = G__23124;
chunk__22690_23025 = G__23125;
count__22691_23026 = G__23126;
i__22692_23027 = G__23127;
continue;
}
}
} else {
}
}
break;
}


var G__23128 = cljs.core.next(seq__22434__$1);
var G__23129 = null;
var G__23130 = (0);
var G__23131 = (0);
seq__22434 = G__23128;
chunk__22436 = G__23129;
count__22437 = G__23130;
i__22438 = G__23131;
continue;
} else {
var G__23132 = cljs.core.next(seq__22434__$1);
var G__23133 = null;
var G__23134 = (0);
var G__23135 = (0);
seq__22434 = G__23132;
chunk__22436 = G__23133;
count__22437 = G__23134;
i__22438 = G__23135;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__22795 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__22795) : success.call(null,G__22795));
}catch (e22794){var e = e22794;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__22796,success,fail){
var map__22797 = p__22796;
var map__22797__$1 = cljs.core.__destructure_map(map__22797);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22797__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__22801 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__22801) : success.call(null,G__22801));
}catch (e22798){var e = e22798;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__22802,done,error){
var map__22803 = p__22802;
var map__22803__$1 = cljs.core.__destructure_map(map__22803);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22803__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__22807,done,error){
var map__22808 = p__22807;
var map__22808__$1 = cljs.core.__destructure_map(map__22808);
var msg = map__22808__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22808__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22808__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22808__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__22809){
var map__22811 = p__22809;
var map__22811__$1 = cljs.core.__destructure_map(map__22811);
var src = map__22811__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22811__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__22812 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__22812) : done.call(null,G__22812));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__22813){
var map__22815 = p__22813;
var map__22815__$1 = cljs.core.__destructure_map(map__22815);
var msg__$1 = map__22815__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22815__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e22816){var ex = e22816;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__22817){
var map__22818 = p__22817;
var map__22818__$1 = cljs.core.__destructure_map(map__22818);
var env = map__22818__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22818__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__22819){
var map__22820 = p__22819;
var map__22820__$1 = cljs.core.__destructure_map(map__22820);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22820__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22820__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__22822){
var map__22824 = p__22822;
var map__22824__$1 = cljs.core.__destructure_map(map__22824);
var svc = map__22824__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22824__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
