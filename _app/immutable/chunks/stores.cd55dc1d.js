import{s as r}from"./singletons.f438e9f0.js";const e=()=>{const s=r;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},a={subscribe(s){return e().page.subscribe(s)}},i={subscribe(s){return e().navigating.subscribe(s)}};export{i as n,a as p};