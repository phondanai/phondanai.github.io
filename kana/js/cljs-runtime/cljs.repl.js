goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__20880){
var map__20881 = p__20880;
var map__20881__$1 = cljs.core.__destructure_map(map__20881);
var m = map__20881__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20881__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20881__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20891_21263 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20892_21264 = null;
var count__20893_21265 = (0);
var i__20894_21266 = (0);
while(true){
if((i__20894_21266 < count__20893_21265)){
var f_21267 = chunk__20892_21264.cljs$core$IIndexed$_nth$arity$2(null,i__20894_21266);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_21267], 0));


var G__21268 = seq__20891_21263;
var G__21269 = chunk__20892_21264;
var G__21270 = count__20893_21265;
var G__21271 = (i__20894_21266 + (1));
seq__20891_21263 = G__21268;
chunk__20892_21264 = G__21269;
count__20893_21265 = G__21270;
i__20894_21266 = G__21271;
continue;
} else {
var temp__5804__auto___21272 = cljs.core.seq(seq__20891_21263);
if(temp__5804__auto___21272){
var seq__20891_21273__$1 = temp__5804__auto___21272;
if(cljs.core.chunked_seq_QMARK_(seq__20891_21273__$1)){
var c__5525__auto___21274 = cljs.core.chunk_first(seq__20891_21273__$1);
var G__21275 = cljs.core.chunk_rest(seq__20891_21273__$1);
var G__21276 = c__5525__auto___21274;
var G__21277 = cljs.core.count(c__5525__auto___21274);
var G__21278 = (0);
seq__20891_21263 = G__21275;
chunk__20892_21264 = G__21276;
count__20893_21265 = G__21277;
i__20894_21266 = G__21278;
continue;
} else {
var f_21279 = cljs.core.first(seq__20891_21273__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_21279], 0));


var G__21280 = cljs.core.next(seq__20891_21273__$1);
var G__21281 = null;
var G__21282 = (0);
var G__21283 = (0);
seq__20891_21263 = G__21280;
chunk__20892_21264 = G__21281;
count__20893_21265 = G__21282;
i__20894_21266 = G__21283;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_21284 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_21284], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_21284)))?cljs.core.second(arglists_21284):arglists_21284)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20923_21290 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20924_21291 = null;
var count__20925_21292 = (0);
var i__20926_21293 = (0);
while(true){
if((i__20926_21293 < count__20925_21292)){
var vec__20963_21294 = chunk__20924_21291.cljs$core$IIndexed$_nth$arity$2(null,i__20926_21293);
var name_21295 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20963_21294,(0),null);
var map__20966_21296 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20963_21294,(1),null);
var map__20966_21297__$1 = cljs.core.__destructure_map(map__20966_21296);
var doc_21298 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20966_21297__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21299 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20966_21297__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_21295], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_21299], 0));

if(cljs.core.truth_(doc_21298)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_21298], 0));
} else {
}


var G__21300 = seq__20923_21290;
var G__21301 = chunk__20924_21291;
var G__21302 = count__20925_21292;
var G__21303 = (i__20926_21293 + (1));
seq__20923_21290 = G__21300;
chunk__20924_21291 = G__21301;
count__20925_21292 = G__21302;
i__20926_21293 = G__21303;
continue;
} else {
var temp__5804__auto___21304 = cljs.core.seq(seq__20923_21290);
if(temp__5804__auto___21304){
var seq__20923_21305__$1 = temp__5804__auto___21304;
if(cljs.core.chunked_seq_QMARK_(seq__20923_21305__$1)){
var c__5525__auto___21306 = cljs.core.chunk_first(seq__20923_21305__$1);
var G__21307 = cljs.core.chunk_rest(seq__20923_21305__$1);
var G__21308 = c__5525__auto___21306;
var G__21309 = cljs.core.count(c__5525__auto___21306);
var G__21310 = (0);
seq__20923_21290 = G__21307;
chunk__20924_21291 = G__21308;
count__20925_21292 = G__21309;
i__20926_21293 = G__21310;
continue;
} else {
var vec__20977_21311 = cljs.core.first(seq__20923_21305__$1);
var name_21312 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20977_21311,(0),null);
var map__20980_21313 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20977_21311,(1),null);
var map__20980_21314__$1 = cljs.core.__destructure_map(map__20980_21313);
var doc_21315 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20980_21314__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21316 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20980_21314__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_21312], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_21316], 0));

if(cljs.core.truth_(doc_21315)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_21315], 0));
} else {
}


var G__21317 = cljs.core.next(seq__20923_21305__$1);
var G__21318 = null;
var G__21319 = (0);
var G__21320 = (0);
seq__20923_21290 = G__21317;
chunk__20924_21291 = G__21318;
count__20925_21292 = G__21319;
i__20926_21293 = G__21320;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__20990 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__20991 = null;
var count__20992 = (0);
var i__20993 = (0);
while(true){
if((i__20993 < count__20992)){
var role = chunk__20991.cljs$core$IIndexed$_nth$arity$2(null,i__20993);
var temp__5804__auto___21322__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___21322__$1)){
var spec_21323 = temp__5804__auto___21322__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_21323)], 0));
} else {
}


var G__21324 = seq__20990;
var G__21325 = chunk__20991;
var G__21326 = count__20992;
var G__21327 = (i__20993 + (1));
seq__20990 = G__21324;
chunk__20991 = G__21325;
count__20992 = G__21326;
i__20993 = G__21327;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__20990);
if(temp__5804__auto____$1){
var seq__20990__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__20990__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20990__$1);
var G__21328 = cljs.core.chunk_rest(seq__20990__$1);
var G__21329 = c__5525__auto__;
var G__21330 = cljs.core.count(c__5525__auto__);
var G__21331 = (0);
seq__20990 = G__21328;
chunk__20991 = G__21329;
count__20992 = G__21330;
i__20993 = G__21331;
continue;
} else {
var role = cljs.core.first(seq__20990__$1);
var temp__5804__auto___21333__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___21333__$2)){
var spec_21334 = temp__5804__auto___21333__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_21334)], 0));
} else {
}


var G__21335 = cljs.core.next(seq__20990__$1);
var G__21336 = null;
var G__21337 = (0);
var G__21338 = (0);
seq__20990 = G__21335;
chunk__20991 = G__21336;
count__20992 = G__21337;
i__20993 = G__21338;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__21043 = datafied_throwable;
var map__21043__$1 = cljs.core.__destructure_map(map__21043);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21043__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21043__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21043__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__21044 = cljs.core.last(via);
var map__21044__$1 = cljs.core.__destructure_map(map__21044);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21044__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21044__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21044__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__21046 = data;
var map__21046__$1 = cljs.core.__destructure_map(map__21046);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21046__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21046__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21046__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__21056 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__21056__$1 = cljs.core.__destructure_map(map__21056);
var top_data = map__21056__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21056__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__21066 = phase;
var G__21066__$1 = (((G__21066 instanceof cljs.core.Keyword))?G__21066.fqn:null);
switch (G__21066__$1) {
case "read-source":
var map__21068 = data;
var map__21068__$1 = cljs.core.__destructure_map(map__21068);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21068__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21068__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__21069 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__21069__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21069,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__21069);
var G__21069__$2 = (cljs.core.truth_((function (){var fexpr__21085 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__21085.cljs$core$IFn$_invoke$arity$1 ? fexpr__21085.cljs$core$IFn$_invoke$arity$1(source) : fexpr__21085.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__21069__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__21069__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21069__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__21069__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__21087 = top_data;
var G__21087__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21087,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__21087);
var G__21087__$2 = (cljs.core.truth_((function (){var fexpr__21097 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__21097.cljs$core$IFn$_invoke$arity$1 ? fexpr__21097.cljs$core$IFn$_invoke$arity$1(source) : fexpr__21097.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__21087__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__21087__$1);
var G__21087__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21087__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__21087__$2);
var G__21087__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21087__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__21087__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21087__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__21087__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__21113 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21113,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21113,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21113,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21113,(3),null);
var G__21120 = top_data;
var G__21120__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21120,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__21120);
var G__21120__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21120__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__21120__$1);
var G__21120__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21120__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__21120__$2);
var G__21120__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21120__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__21120__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21120__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__21120__$4;
}

break;
case "execution":
var vec__21147 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21147,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21147,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21147,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21147,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__21030_SHARP_){
var or__5002__auto__ = (p1__21030_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__21159 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__21159.cljs$core$IFn$_invoke$arity$1 ? fexpr__21159.cljs$core$IFn$_invoke$arity$1(p1__21030_SHARP_) : fexpr__21159.call(null,p1__21030_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__21160 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__21160__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21160,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__21160);
var G__21160__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21160__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__21160__$1);
var G__21160__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21160__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__21160__$2);
var G__21160__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21160__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__21160__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21160__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__21160__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21066__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__21176){
var map__21177 = p__21176;
var map__21177__$1 = cljs.core.__destructure_map(map__21177);
var triage_data = map__21177__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21177__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21177__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21177__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21177__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21177__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21177__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21177__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21177__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__21180 = phase;
var G__21180__$1 = (((G__21180 instanceof cljs.core.Keyword))?G__21180.fqn:null);
switch (G__21180__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__21181 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__21182 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21183 = loc;
var G__21184 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__21190_21368 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__21191_21369 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__21192_21370 = true;
var _STAR_print_fn_STAR__temp_val__21193_21371 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__21192_21370);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__21193_21371);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21174_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__21174_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__21191_21369);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__21190_21368);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__21181,G__21182,G__21183,G__21184) : format.call(null,G__21181,G__21182,G__21183,G__21184));

break;
case "macroexpansion":
var G__21205 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__21206 = cause_type;
var G__21207 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21208 = loc;
var G__21209 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__21205,G__21206,G__21207,G__21208,G__21209) : format.call(null,G__21205,G__21206,G__21207,G__21208,G__21209));

break;
case "compile-syntax-check":
var G__21211 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__21212 = cause_type;
var G__21213 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21214 = loc;
var G__21215 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__21211,G__21212,G__21213,G__21214,G__21215) : format.call(null,G__21211,G__21212,G__21213,G__21214,G__21215));

break;
case "compilation":
var G__21216 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__21217 = cause_type;
var G__21218 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21219 = loc;
var G__21220 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__21216,G__21217,G__21218,G__21219,G__21220) : format.call(null,G__21216,G__21217,G__21218,G__21219,G__21220));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__21228 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__21229 = symbol;
var G__21230 = loc;
var G__21231 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__21232_21382 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__21233_21383 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__21234_21384 = true;
var _STAR_print_fn_STAR__temp_val__21235_21385 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__21234_21384);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__21235_21385);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21175_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__21175_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__21233_21383);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__21232_21382);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__21228,G__21229,G__21230,G__21231) : format.call(null,G__21228,G__21229,G__21230,G__21231));
} else {
var G__21243 = "Execution error%s at %s(%s).\n%s\n";
var G__21244 = cause_type;
var G__21245 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21246 = loc;
var G__21247 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__21243,G__21244,G__21245,G__21246,G__21247) : format.call(null,G__21243,G__21244,G__21245,G__21246,G__21247));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21180__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
