(this["webpackJsonp@js-code-runner/local-client"]=this["webpackJsonp@js-code-runner/local-client"]||[]).push([[195],{361:function(n,e){!function(n){var e=n.languages.javadoclike={parameter:{pattern:/(^\s*(?:\/{3}|\*|\/\*\*)\s*@(?:param|arg|arguments)\s+)\w+/m,lookbehind:!0},keyword:{pattern:/(^\s*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,lookbehind:!0},punctuation:/[{}]/};Object.defineProperty(e,"addSupport",{value:function(e,a){"string"==typeof e&&(e=[e]),e.forEach((function(e){!function(e,a){var t="doc-comment",o=n.languages[e];if(o){var r=o[t];if(!r){r=(o=n.languages.insertBefore(e,"comment",{"doc-comment":{pattern:/(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,lookbehind:!0,alias:"comment"}}))[t]}if(r instanceof RegExp&&(r=o[t]={pattern:r}),Array.isArray(r))for(var i=0,s=r.length;i<s;i++)r[i]instanceof RegExp&&(r[i]={pattern:r[i]}),a(r[i]);else a(r)}}(e,(function(n){n.inside||(n.inside={}),n.inside.rest=a}))}))}}),e.addSupport(["java","javascript","php"],e)}(Prism)}}]);
//# sourceMappingURL=195.f5fa7ce6.chunk.js.map