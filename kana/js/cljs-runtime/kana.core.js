goog.provide('kana.core');
kana.core.kana_data = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hiragana","hiragana",-1226472014),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u3042","\u3044","\u3046","\u3048","\u304A"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u304B","\u304D","\u304F","\u3051","\u3053"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u3055","\u3057","\u3059","\u305B","\u305D"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u305F","\u3061","\u3064","\u3066","\u3068"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u306A","\u306B","\u306C","\u306D","\u306E"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u306F","\u3072","\u3075","\u3078","\u307B"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u307E","\u307F","\u3080","\u3081","\u3082"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u3084","\u3086","\u3088","\u3000","\u3000"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u3089","\u308A","\u308B","\u308C","\u308D"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u308F","\u3092","\u3093","\u3000","\u3000"], null)], null),new cljs.core.Keyword(null,"katakana","katakana",1973317576),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u30A2","\u30A4","\u30A6","\u30A8","\u30AA"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u30AB","\u30AD","\u30AF","\u30B1","\u30B3"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u30B5","\u30B7","\u30B9","\u30BB","\u30BD"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u30BF","\u30C1","\u30C4","\u30C6","\u30C8"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u30CA","\u30CB","\u30CC","\u30CD","\u30CE"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u30CF","\u30D2","\u30D5","\u30D8","\u30DB"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u30DE","\u30DF","\u30E0","\u30E1","\u30E2"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u30E4","\u30E6","\u30E8","\u3000","\u3000"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u30E9","\u30EA","\u30EB","\u30EC","\u30ED"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u30EF","\u30F2","\u30F3","\u3000","\u3000"], null)], null)], null);
kana.core.romaji = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","i","u","e","o"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ka","ki","ku","ke","ko"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sa","shi","su","se","so"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ta","chi","tsu","te","to"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["na","ni","nu","ne","no"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ha","hi","fu","he","ho"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ma","mi","mu","me","mo"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ya","yu","yo","",""], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ra","ri","ru","re","ro"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["wa","wo","n","",""], null)], null);
kana.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"current-script","current-script",1834034657),new cljs.core.Keyword(null,"hiragana","hiragana",-1226472014),new cljs.core.Keyword(null,"show-romaji","show-romaji",554351127),true,new cljs.core.Keyword(null,"modal","modal",-1031880850),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"visible","visible",-1024216805),false,new cljs.core.Keyword(null,"kana","kana",184812447),null,new cljs.core.Keyword(null,"romaji","romaji",1263242156),null], null)], null));
kana.core.kana_cell = (function kana$core$kana_cell(kana__$1,rom){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.kana-cell","div.kana-cell",-979609641),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kana__$1,"\u3000"))?"kana-cell-empty":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(kana__$1,"\u3000")){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kana.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modal","modal",-1031880850),new cljs.core.Keyword(null,"visible","visible",-1024216805)], null),true);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kana.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modal","modal",-1031880850),new cljs.core.Keyword(null,"kana","kana",184812447)], null),kana__$1);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kana.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modal","modal",-1031880850),new cljs.core.Keyword(null,"romaji","romaji",1263242156)], null),rom);
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.kana-char","div.kana-char",-637640953),kana__$1], null),(cljs.core.truth_((function (){var and__5000__auto__ = new cljs.core.Keyword(null,"show-romaji","show-romaji",554351127).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kana.core.app_state));
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(rom,"");
} else {
return and__5000__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.kana-romaji","div.kana-romaji",-337888558),rom], null):null)], null);
});
kana.core.kana_grid = (function kana$core$kana_grid(){
var current_script = new cljs.core.Keyword(null,"current-script","current-script",1834034657).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kana.core.app_state));
var kana__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(kana.core.kana_data,current_script);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.kana-grid","div.kana-grid",1457579688),(function (){var iter__5480__auto__ = (function kana$core$kana_grid_$_iter__23344(s__23345){
return (new cljs.core.LazySeq(null,(function (){
var s__23345__$1 = s__23345;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__23345__$1);
if(temp__5804__auto__){
var s__23345__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23345__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__23345__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__23347 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__23346 = (0);
while(true){
if((i__23346 < size__5479__auto__)){
var row_idx = cljs.core._nth(c__5478__auto__,i__23346);
cljs.core.chunk_append(b__23347,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.kana-row","div.kana-row",1953967562),(function (){var iter__5480__auto__ = ((function (i__23346,row_idx,c__5478__auto__,size__5479__auto__,b__23347,s__23345__$2,temp__5804__auto__,current_script,kana__$1){
return (function kana$core$kana_grid_$_iter__23344_$_iter__23348(s__23349){
return (new cljs.core.LazySeq(null,((function (i__23346,row_idx,c__5478__auto__,size__5479__auto__,b__23347,s__23345__$2,temp__5804__auto__,current_script,kana__$1){
return (function (){
var s__23349__$1 = s__23349;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__23349__$1);
if(temp__5804__auto____$1){
var s__23349__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__23349__$2)){
var c__5478__auto____$1 = cljs.core.chunk_first(s__23349__$2);
var size__5479__auto____$1 = cljs.core.count(c__5478__auto____$1);
var b__23351 = cljs.core.chunk_buffer(size__5479__auto____$1);
if((function (){var i__23350 = (0);
while(true){
if((i__23350 < size__5479__auto____$1)){
var col_idx = cljs.core._nth(c__5478__auto____$1,i__23350);
cljs.core.chunk_append(b__23351,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kana.core.kana_cell,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(kana__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_idx,col_idx], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(kana.core.romaji,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_idx,col_idx], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["cell-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_idx),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_idx)].join('')], null)));

var G__23356 = (i__23350 + (1));
i__23350 = G__23356;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23351),kana$core$kana_grid_$_iter__23344_$_iter__23348(cljs.core.chunk_rest(s__23349__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23351),null);
}
} else {
var col_idx = cljs.core.first(s__23349__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kana.core.kana_cell,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(kana__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_idx,col_idx], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(kana.core.romaji,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_idx,col_idx], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["cell-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_idx),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_idx)].join('')], null)),kana$core$kana_grid_$_iter__23344_$_iter__23348(cljs.core.rest(s__23349__$2)));
}
} else {
return null;
}
break;
}
});})(i__23346,row_idx,c__5478__auto__,size__5479__auto__,b__23347,s__23345__$2,temp__5804__auto__,current_script,kana__$1))
,null,null));
});})(i__23346,row_idx,c__5478__auto__,size__5479__auto__,b__23347,s__23345__$2,temp__5804__auto__,current_script,kana__$1))
;
return iter__5480__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(kana__$1,row_idx))));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["row-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_idx)].join('')], null)));

var G__23357 = (i__23346 + (1));
i__23346 = G__23357;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23347),kana$core$kana_grid_$_iter__23344(cljs.core.chunk_rest(s__23345__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23347),null);
}
} else {
var row_idx = cljs.core.first(s__23345__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.kana-row","div.kana-row",1953967562),(function (){var iter__5480__auto__ = ((function (row_idx,s__23345__$2,temp__5804__auto__,current_script,kana__$1){
return (function kana$core$kana_grid_$_iter__23344_$_iter__23352(s__23353){
return (new cljs.core.LazySeq(null,(function (){
var s__23353__$1 = s__23353;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__23353__$1);
if(temp__5804__auto____$1){
var s__23353__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__23353__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__23353__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__23355 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__23354 = (0);
while(true){
if((i__23354 < size__5479__auto__)){
var col_idx = cljs.core._nth(c__5478__auto__,i__23354);
cljs.core.chunk_append(b__23355,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kana.core.kana_cell,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(kana__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_idx,col_idx], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(kana.core.romaji,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_idx,col_idx], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["cell-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_idx),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_idx)].join('')], null)));

var G__23358 = (i__23354 + (1));
i__23354 = G__23358;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23355),kana$core$kana_grid_$_iter__23344_$_iter__23352(cljs.core.chunk_rest(s__23353__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23355),null);
}
} else {
var col_idx = cljs.core.first(s__23353__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kana.core.kana_cell,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(kana__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_idx,col_idx], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(kana.core.romaji,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_idx,col_idx], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["cell-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_idx),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_idx)].join('')], null)),kana$core$kana_grid_$_iter__23344_$_iter__23352(cljs.core.rest(s__23353__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row_idx,s__23345__$2,temp__5804__auto__,current_script,kana__$1))
;
return iter__5480__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(kana__$1,row_idx))));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["row-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_idx)].join('')], null)),kana$core$kana_grid_$_iter__23344(cljs.core.rest(s__23345__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(kana__$1)));
})()], null);
});
kana.core.control_panel = (function kana$core$control_panel(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.control-panel","div.control-panel",-1920239249),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.script-toggle","div.script-toggle",-707902538),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"current-script","current-script",1834034657).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kana.core.app_state)),new cljs.core.Keyword(null,"hiragana","hiragana",-1226472014)))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kana.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"current-script","current-script",1834034657),new cljs.core.Keyword(null,"hiragana","hiragana",-1226472014));
})], null),"Hiragana"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"current-script","current-script",1834034657).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kana.core.app_state)),new cljs.core.Keyword(null,"katakana","katakana",1973317576)))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kana.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"current-script","current-script",1834034657),new cljs.core.Keyword(null,"katakana","katakana",1973317576));
})], null),"Katakana"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.romaji-toggle","div.romaji-toggle",-735885282),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"show-romaji","show-romaji",554351127).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kana.core.app_state)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kana.core.app_state,cljs.core.update,new cljs.core.Keyword(null,"show-romaji","show-romaji",554351127),cljs.core.not);
})], null)], null),"Show Romaji"], null)], null)], null);
});
kana.core.kana_modal = (function kana$core$kana_modal(){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(kana.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modal","modal",-1031880850),new cljs.core.Keyword(null,"visible","visible",-1024216805)], null)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-overlay","div.modal-overlay",-1954461076),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kana.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modal","modal",-1031880850),new cljs.core.Keyword(null,"visible","visible",-1024216805)], null),false);
})], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-content","div.modal-content",-83470844),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return e.stopPropagation();
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-kana","div.modal-kana",825396344),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(kana.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modal","modal",-1031880850),new cljs.core.Keyword(null,"kana","kana",184812447)], null))], null),(cljs.core.truth_(new cljs.core.Keyword(null,"show-romaji","show-romaji",554351127).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kana.core.app_state)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-romaji","div.modal-romaji",-126951793),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(kana.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modal","modal",-1031880850),new cljs.core.Keyword(null,"romaji","romaji",1263242156)], null))], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-close","div.modal-close",1899985259),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kana.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modal","modal",-1031880850),new cljs.core.Keyword(null,"visible","visible",-1024216805)], null),false);
})], null),"\u00D7"], null)], null)], null);
} else {
return null;
}
});
kana.core.app = (function kana$core$app(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Japanese Kana Grid"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kana.core.control_panel], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kana.core.kana_grid], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kana.core.kana_modal], null)], null);
});
kana.core.mount_root = (function kana$core$mount_root(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kana.core.app], null),document.getElementById("app"));
});
kana.core.init_BANG_ = (function kana$core$init_BANG_(){
return kana.core.mount_root();
});
goog.exportSymbol('kana.core.init_BANG_', kana.core.init_BANG_);

//# sourceMappingURL=kana.core.js.map
