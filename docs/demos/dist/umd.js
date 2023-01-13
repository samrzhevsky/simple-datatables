(function(f) {
    if (typeof exports==="object"&&typeof module!=="undefined") {
        module.exports=f()
    } else if (typeof define==="function"&&define.amd) {
        define([], f)
    } else {
        let g; if (typeof window!=="undefined") {
            g=window
        } else if (typeof global!=="undefined") {
            g=global
        } else if (typeof self!=="undefined") {
            g=self
        } else {
            g=this
        }g.simpleDatatables = f()
    }
}(() => {
    let define, exports, module; return (function() {
        function r(e, n, t) {
            function o(i, f) {
                if (!n[i]) {
                    if (!e[i]) {
                        const c="function"==typeof require&&require; if (!f&&c) return c(i, !0); if (u) return u(i, !0); const a=new Error(`Cannot find module '${i}'`); throw a.code="MODULE_NOT_FOUND", a
                    } const p=n[i]={exports: {}}; e[i][0].call(p.exports, r => {
                        const n=e[i][1][r]; return o(n||r)
                    }, p, p.exports, r, e, n, t)
                } return n[i].exports
            } for (var u="function"==typeof require&&require, i=0; i<t.length; i++)o(t[i]); return o
        } return r
    }())({1: [
        function(require, module, exports) {
            (function (global) {
                (function () {


                    let t=function() {
                        return t=Object.assign||function(t) {
                            for (var e, n=1, s=arguments.length; n<s; n++) for (const i in e=arguments[n])Object.prototype.hasOwnProperty.call(e, i)&&(t[i]=e[i]); return t
                        }, t.apply(this, arguments)
                    }; function e(t, n, s) {
                        let i; return "#text"===t.nodeName?i=s.document.createTextNode(t.data):"#comment"===t.nodeName?i=s.document.createComment(t.data):(n?i=s.document.createElementNS("http://www.w3.org/2000/svg", t.nodeName):"svg"===t.nodeName.toLowerCase()?(i=s.document.createElementNS("http://www.w3.org/2000/svg", "svg"), n=!0):i=s.document.createElement(t.nodeName), t.attributes&&Object.entries(t.attributes).forEach((([t, e]) => i.setAttribute(t, e))), t.childNodes&&t.childNodes.forEach((t => i.appendChild(e(t, n, s)))), s.valueDiffing&&(t.value&&(i.value=t.value), t.checked&&(i.checked=t.checked), t.selected&&(i.selected=t.selected))), i
                    } function n(t, e) {
                        for (e=e.slice(); e.length>0;) {
                            if (!t.childNodes) return !1; const n=e.splice(0, 1)[0]; t=t.childNodes[n]
                        } return t
                    } function s(t, s, i) {
                        let o, a, r, l, d,
                            c=n(t, s[i._const.route]); const u={diff: s,
                            node: c}; if (i.preDiffApply(u)) return !0; switch (s[i._const.action]) {
                        case i._const.addAttribute: if (!c||!c.setAttribute) return !1; c.setAttribute(s[i._const.name], s[i._const.value]); break; case i._const.modifyAttribute: if (!c||!c.setAttribute) return !1; c.setAttribute(s[i._const.name], s[i._const.newValue]), "INPUT"===c.nodeName&&"value"===s[i._const.name]&&(c.value=s[i._const.newValue]); break; case i._const.removeAttribute: if (!c||!c.removeAttribute) return !1; c.removeAttribute(s[i._const.name]); break; case i._const.modifyTextElement: if (!c||3!==c.nodeType) return !1; i.textDiff(c, c.data, s[i._const.oldValue], s[i._const.newValue]); break; case i._const.modifyValue: if (!c||void 0===c.value) return !1; c.value=s[i._const.newValue]; break; case i._const.modifyComment: if (!c||void 0===c.data) return !1; i.textDiff(c, c.data, s[i._const.oldValue], s[i._const.newValue]); break; case i._const.modifyChecked: if (!c||void 0===c.checked) return !1; c.checked=s[i._const.newValue]; break; case i._const.modifySelected: if (!c||void 0===c.selected) return !1; c.selected=s[i._const.newValue]; break; case i._const.replaceElement: c.parentNode.replaceChild(e(s[i._const.newValue], "svg"===s[i._const.newValue].nodeName.toLowerCase(), i), c); break; case i._const.relocateGroup: l=Array(...new Array(s.groupLength)).map((() => c.removeChild(c.childNodes[s[i._const.from]]))), l.forEach(((t, e) => {
                            0===e&&(a=c.childNodes[s[i._const.to]]), c.insertBefore(t, a||null)
                        })); break; case i._const.removeElement: c.parentNode.removeChild(c); break; case i._const.addElement: r=s[i._const.route].slice(), d=r.splice(r.length-1, 1)[0], c=n(t, r), c.insertBefore(e(s[i._const.element], "http://www.w3.org/2000/svg"===c.namespaceURI, i), c.childNodes[d]||null); break; case i._const.removeTextElement: if (!c||3!==c.nodeType) return !1; c.parentNode.removeChild(c); break; case i._const.addTextElement: if (r=s[i._const.route].slice(), d=r.splice(r.length-1, 1)[0], o=i.document.createTextNode(s[i._const.value]), c=n(t, r), !c||!c.childNodes) return !1; c.insertBefore(o, c.childNodes[d]||null); break; default: console.log("unknown action")
                        } return u.newNode=o, i.postDiffApply(u), !0
                    } function i(t, e, n) {
                        const s=t[e]; t[e]=t[n], t[n]=s
                    } function o(t, e, n) {
                        e.length||(e=[e]), (e=e.slice()).reverse(), e.forEach((e => {
                            !(function(t, e, n) {
                                switch (e[n._const.action]) {
                                case n._const.addAttribute: e[n._const.action]=n._const.removeAttribute, s(t, e, n); break; case n._const.modifyAttribute: i(e, n._const.oldValue, n._const.newValue), s(t, e, n); break; case n._const.removeAttribute: e[n._const.action]=n._const.addAttribute, s(t, e, n); break; case n._const.modifyTextElement: case n._const.modifyValue: case n._const.modifyComment: case n._const.modifyChecked: case n._const.modifySelected: case n._const.replaceElement: i(e, n._const.oldValue, n._const.newValue), s(t, e, n); break; case n._const.relocateGroup: i(e, n._const.from, n._const.to), s(t, e, n); break; case n._const.removeElement: e[n._const.action]=n._const.addElement, s(t, e, n); break; case n._const.addElement: e[n._const.action]=n._const.removeElement, s(t, e, n); break; case n._const.removeTextElement: e[n._const.action]=n._const.addTextElement, s(t, e, n); break; case n._const.addTextElement: e[n._const.action]=n._const.removeTextElement, s(t, e, n); break; default: console.log("unknown action")
                                }
                            }(t, e, n))
                        }))
                    } class a {
                        constructor(t={}) {
                            Object.entries(t).forEach((([t, e]) => this[t]=e))
                        }

                        toString() {
                            return JSON.stringify(this)
                        }

                        setValue(t, e) {
                            return this[t]=e, this
                        }
                    } function r(t) {
                        const e=[]; return e.push(t.nodeName), "#text"!==t.nodeName&&"#comment"!==t.nodeName&&t.attributes&&(t.attributes.class&&e.push(`${t.nodeName}.${t.attributes.class.replace(/ /g, ".")}`), t.attributes.id&&e.push(`${t.nodeName}#${t.attributes.id}`)), e
                    } function l(t) {
                        const e={},
                            n={}; return t.forEach((t => {
                            r(t).forEach((t => {
                                const s=t in e; s||t in n?s&&(delete e[t], n[t]=!0):e[t]=!0
                            }))
                        })), e
                    } function d(t, e) {
                        const n=l(t),
                            s=l(e),
                            i={}; return Object.keys(n).forEach((t => {
                            s[t]&&(i[t]=!0)
                        })), i
                    } function c(t) {
                        return delete t.outerDone, delete t.innerDone, delete t.valueDone, !t.childNodes||t.childNodes.every(c)
                    } function u(t, e) {
                        if (!["nodeName", "value", "checked", "selected", "data"].every((n => t[n]===e[n]))) return !1; if (Boolean(t.attributes)!==Boolean(e.attributes)) return !1; if (Boolean(t.childNodes)!==Boolean(e.childNodes)) return !1; if (t.attributes) {
                            const n=Object.keys(t.attributes),
                                s=Object.keys(e.attributes); if (n.length!==s.length) return !1; if (!n.every((n => t.attributes[n]===e.attributes[n]))) return !1
                        } if (t.childNodes) {
                            if (t.childNodes.length!==e.childNodes.length) return !1; if (!t.childNodes.every(((t, n) => u(t, e.childNodes[n])))) return !1
                        } return !0
                    } function h(t, e, n, s, i) {
                        if (!t||!e) return !1; if (t.nodeName!==e.nodeName) return !1; if ("#text"===t.nodeName) return !!i||t.data===e.data; if (t.nodeName in n) return !0; if (t.attributes&&e.attributes) {
                            if (t.attributes.id) {
                                if (t.attributes.id!==e.attributes.id) return !1; if (`${t.nodeName}#${t.attributes.id}`in n) return !0
                            } if (t.attributes.class&&t.attributes.class===e.attributes.class) {
                                if (`${t.nodeName}.${t.attributes.class.replace(/ /g, ".")}`in n) return !0
                            }
                        } if (s) return !0; const o=t.childNodes?t.childNodes.slice().reverse():[],
                            a=e.childNodes?e.childNodes.slice().reverse():[]; if (o.length!==a.length) return !1; if (i) return o.every(((t, e) => t.nodeName===a[e].nodeName)); { const t=d(o, a); return o.every(((e, n) => h(e, a[n], t, !0, !0))) }
                    } function p(t) {
                        return JSON.parse(JSON.stringify(t))
                    } function f(t, e, n, s) {
                        let i=0,
                            o=[]; const a=t.length,
                            l=e.length,
                            c=Array(...new Array(a+1)).map((() => [])),
                            u=d(t, e); let p=a===l; p&&t.some(((t, n) => {
                            const s=r(t),
                                i=r(e[n]); return s.length!==i.length?
                                (p=!1, !0):
                                (s.some(((t, e) => {
                                    if (t!==i[e]) return p=!1, !0
                                })), !p||void 0)
                        })); for (let r=0; r<a; r++) {
                            const a=t[r]; for (let t=0; t<l; t++) {
                                const l=e[t]; n[r]||s[t]||!h(a, l, u, p)?c[r+1][t+1]=0:(c[r+1][t+1]=c[r][t]?c[r][t]+1:1, c[r+1][t+1]>=i&&(i=c[r+1][t+1], o=[r+1, t+1]))
                            }
                        } return 0!==i&&{oldValue: o[0]-i,
                            newValue: o[1]-i,
                            length: i}
                    } function m(t, e) {
                        return Array(...new Array(t)).map((() => e))
                    } class g {
                        constructor() {
                            this.list=[]
                        }

                        add(t) {
                            this.list.push(...t)
                        }

                        forEach(t) {
                            this.list.forEach((e => t(e)))
                        }
                    } function v(t, e) {
                        let n, s,
                            i=t; for (e=e.slice(); e.length>0;) {
                            if (!i.childNodes) return !1; s=e.splice(0, 1)[0], n=i, i=i.childNodes[s]
                        } return {node: i,
                            parentNode: n,
                            nodeIndex: s}
                    } function b(t, e, n) {
                        return e.forEach((e => {
                            !(function(t, e, n) {
                                const s=v(t, e[n._const.route]); let i=s.node; const o=s.parentNode,
                                    a=s.nodeIndex,
                                    r=[],
                                    l={diff: e,
                                        node: i}; if (n.preVirtualDiffApply(l)) return !0; let c, d, h, u; switch (e[n._const.action]) {
                                case n._const.addAttribute: i.attributes||(i.attributes={}), i.attributes[e[n._const.name]]=e[n._const.value], "checked"===e[n._const.name]?i.checked=!0:"selected"===e[n._const.name]?i.selected=!0:"INPUT"===i.nodeName&&"value"===e[n._const.name]&&(i.value=e[n._const.value]); break; case n._const.modifyAttribute: i.attributes[e[n._const.name]]=e[n._const.newValue]; break; case n._const.removeAttribute: delete i.attributes[e[n._const.name]], 0===Object.keys(i.attributes).length&&delete i.attributes, "checked"===e[n._const.name]?i.checked=!1:"selected"===e[n._const.name]?delete i.selected:"INPUT"===i.nodeName&&"value"===e[n._const.name]&&delete i.value; break; case n._const.modifyTextElement: i.data=e[n._const.newValue]; break; case n._const.modifyValue: i.value=e[n._const.newValue]; break; case n._const.modifyComment: i.data=e[n._const.newValue]; break; case n._const.modifyChecked: i.checked=e[n._const.newValue]; break; case n._const.modifySelected: i.selected=e[n._const.newValue]; break; case n._const.replaceElement: d=p(e[n._const.newValue]), d.outerDone=!0, d.innerDone=!0, d.valueDone=!0, o.childNodes[a]=d; break; case n._const.relocateGroup: c=i.childNodes.splice(e[n._const.from], e.groupLength).reverse(), c.forEach((t => i.childNodes.splice(e[n._const.to], 0, t))), i.subsets&&i.subsets.forEach((t => {
                                    if (e[n._const.from]<e[n._const.to]&&t.oldValue<=e[n._const.to]&&t.oldValue>e[n._const.from]) {
                                        t.oldValue-=e.groupLength; const s=t.oldValue+t.length-e[n._const.to]; s>0&&(r.push({oldValue: e[n._const.to]+e.groupLength,
                                            newValue: t.newValue+t.length-s,
                                            length: s}), t.length-=s)
                                    } else if (e[n._const.from]>e[n._const.to]&&t.oldValue>e[n._const.to]&&t.oldValue<e[n._const.from]) {
                                        t.oldValue+=e.groupLength; const s=t.oldValue+t.length-e[n._const.to]; s>0&&(r.push({oldValue: e[n._const.to]+e.groupLength,
                                            newValue: t.newValue+t.length-s,
                                            length: s}), t.length-=s)
                                    } else t.oldValue===e[n._const.from]&&(t.oldValue=e[n._const.to])
                                })); break; case n._const.removeElement: o.childNodes.splice(a, 1), o.subsets&&o.subsets.forEach((t => {
                                    t.oldValue>a?
                                        t.oldValue-=1:
                                        t.oldValue===a?
                                            t.delete=!0:
                                            t.oldValue<a&&t.oldValue+t.length>a&&(t.oldValue+t.length-1===a?
                                                t.length--:
                                                (r.push({newValue: t.newValue+a-t.oldValue,
                                                    oldValue: a,
                                                    length: t.length-a+t.oldValue-1}), t.length=a-t.oldValue))
                                })), i=o; break; case n._const.addElement: u=e[n._const.route].slice(), h=u.splice(u.length-1, 1)[0], i=v(t, u).node, d=p(e[n._const.element]), d.outerDone=!0, d.innerDone=!0, d.valueDone=!0, i.childNodes||(i.childNodes=[]), h>=i.childNodes.length?i.childNodes.push(d):i.childNodes.splice(h, 0, d), i.subsets&&i.subsets.forEach((t => {
                                    if (t.oldValue>=h)t.oldValue+=1; else if (t.oldValue<h&&t.oldValue+t.length>h) {
                                        const e=t.oldValue+t.length-h; r.push({newValue: t.newValue+t.length-e,
                                            oldValue: h+1,
                                            length: e}), t.length-=e
                                    }
                                })); break; case n._const.removeTextElement: o.childNodes.splice(a, 1), "TEXTAREA"===o.nodeName&&delete o.value, o.subsets&&o.subsets.forEach((t => {
                                    t.oldValue>a?
                                        t.oldValue-=1:
                                        t.oldValue===a?
                                            t.delete=!0:
                                            t.oldValue<a&&t.oldValue+t.length>a&&(t.oldValue+t.length-1===a?
                                                t.length--:
                                                (r.push({newValue: t.newValue+a-t.oldValue,
                                                    oldValue: a,
                                                    length: t.length-a+t.oldValue-1}), t.length=a-t.oldValue))
                                })), i=o; break; case n._const.addTextElement: u=e[n._const.route].slice(), h=u.splice(u.length-1, 1)[0], d={}, d.nodeName="#text", d.data=e[n._const.value], i=v(t, u).node, i.childNodes||(i.childNodes=[]), h>=i.childNodes.length?i.childNodes.push(d):i.childNodes.splice(h, 0, d), "TEXTAREA"===i.nodeName&&(i.value=e[n._const.newValue]), i.subsets&&i.subsets.forEach((t => {
                                    if (t.oldValue>=h&&(t.oldValue+=1), t.oldValue<h&&t.oldValue+t.length>h) {
                                        const e=t.oldValue+t.length-h; r.push({newValue: t.newValue+t.length-e,
                                            oldValue: h+1,
                                            length: e}), t.length-=e
                                    }
                                })); break; default: console.log("unknown action")
                                }i.subsets&&(i.subsets=i.subsets.filter((t => !t.delete&&t.oldValue!==t.newValue)), r.length&&(i.subsets=i.subsets.concat(r))), l.newNode=d, n.postVirtualDiffApply(l)
                            }(t, e, n))
                        })), !0
                    } function w(t, e={}) {
                        const n={}; if (n.nodeName=t.nodeName, "#text"===n.nodeName||"#comment"===n.nodeName)n.data=t.data; else {
                            if (t.attributes&&t.attributes.length>0) {
                                n.attributes={}; Array.prototype.slice.call(t.attributes).forEach((t => n.attributes[t.name]=t.value))
                            } if ("TEXTAREA"===n.nodeName)n.value=t.value; else if (t.childNodes&&t.childNodes.length>0) {
                                n.childNodes=[]; Array.prototype.slice.call(t.childNodes).forEach((t => n.childNodes.push(w(t, e))))
                            }e.valueDiffing&&(void 0!==t.checked&&t.type&&["radio", "checkbox"].includes(t.type.toLowerCase())?n.checked=t.checked:void 0!==t.value&&(n.value=t.value), void 0!==t.selected&&(n.selected=t.selected))
                        } return n
                    } const y=/<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g,
                        N=Object.create?Object.create(null):{},
                        x=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g; function _(t) {
                        return t.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&")
                    } const V={area: !0,
                        base: !0,
                        br: !0,
                        col: !0,
                        embed: !0,
                        hr: !0,
                        img: !0,
                        input: !0,
                        keygen: !0,
                        link: !0,
                        menuItem: !0,
                        meta: !0,
                        param: !0,
                        source: !0,
                        track: !0,
                        wbr: !0}; function E(t) {
                        const e={nodeName: "",
                            attributes: {}}; const n=t.match(/<\/?([^\s]+?)[/\s>]/); if (n&&(e.nodeName=n[1].toUpperCase(), (V[n[1]]||"/"===t.charAt(t.length-2))&&(e.voidElement=!0), e.nodeName.startsWith("!--"))) {
                            const e=t.indexOf("--\x3e"); return {type: "comment",
                                data: -1!==e?t.slice(4, e):""}
                        } let s=new RegExp(x),
                            i=null,
                            o=!1; for (;!o;) if (i=s.exec(t), null===i)o=!0; else if (i[0].trim()) if (i[1]) {
                            let t=i[1].trim(),
                                n=[t, ""]; t.indexOf("=")>-1&&(n=t.split("=")), e.attributes[n[0]]=n[1], s.lastIndex--
                        } else i[2]&&(e.attributes[i[2]]=i[3].trim().substring(1, i[3].length-1)); return e
                    } function D(t) {
                        return delete t.voidElement, t.childNodes&&t.childNodes.forEach((t => D(t))), t
                    } function M(t) {
                        return D(function(t, e={components: N}) {
                            const n=[]; let s,
                                i=-1; const o=[]; let a=!1; if (0!==t.indexOf("<")) {
                                const e=t.indexOf("<"); n.push({nodeName: "#text",
                                    data: -1===e?t:t.substring(0, e)})
                            } return t.replace(y, ((r, l) => {
                                if (a) {
                                    if (r!==`</${s.nodeName}>`) return; a=!1
                                } const d="/"!==r.charAt(1),
                                    c=r.startsWith("\x3c!--"),
                                    u=l+r.length,
                                    h=t.charAt(u); let p; if (c) {
                                    const t=E(r); return i<0?(n.push(t), n):(p=o[i], p&&(p.childNodes||(p.childNodes=[]), p.childNodes.push(t)), n)
                                } if (d&&(s=E(r), i++, "tag"===s.type&&e.components[s.nodeName]&&(s.type="component", a=!0), s.voidElement||a||!h||"<"===h||(s.childNodes||(s.childNodes=[]), s.childNodes.push({nodeName: "#text",
                                    data: _(t.slice(u, t.indexOf("<", u)))})), 0===i&&n.push(s), p=o[i-1], p&&(p.childNodes||(p.childNodes=[]), p.childNodes.push(s)), o[i]=s), (!d||s.voidElement)&&(i>-1&&(s.voidElement||s.nodeName===r.slice(2, -1).toUpperCase())&&(i--, s=-1===i?n:o[i]), !a&&"<"!==h&&h)) {
                                    p=-1===i?n:o[i].childNodes||[]; const e=t.indexOf("<", u); const s=_(t.slice(u, -1===e?void 0:e)); p.push({nodeName: "#text",
                                        data: s})
                                }
                            })), n[0]
                        }(t))
                    } class k {
                        constructor(t, e, n) {
                            this.options=n, this.t1="undefined"!=typeof HTMLElement&&t instanceof HTMLElement?w(t, this.options):"string"==typeof t?M(t, this.options):JSON.parse(JSON.stringify(t)), this.t2="undefined"!=typeof HTMLElement&&e instanceof HTMLElement?w(e, this.options):"string"==typeof e?M(e, this.options):JSON.parse(JSON.stringify(e)), this.diffcount=0, this.foundAll=!1, this.debug&&(this.t1Orig=w(t, this.options), this.t2Orig=w(e, this.options)), this.tracker=new g()
                        }

                        init() {
                            return this.findDiffs(this.t1, this.t2)
                        }

                        findDiffs(t, e) {
                            let n; do {
                                if (this.options.debug&&(this.diffcount+=1, this.diffcount>this.options.diffcap)) throw new Error(`surpassed diffcap:${JSON.stringify(this.t1Orig)} -> ${JSON.stringify(this.t2Orig)}`); n=this.findNextDiff(t, e, []), 0===n.length&&(u(t, e)||(this.foundAll?console.error("Could not find remaining diffs!"):(this.foundAll=!0, c(t), n=this.findNextDiff(t, e, [])))), n.length>0&&(this.foundAll=!1, this.tracker.add(n), b(t, n, this.options))
                            } while (n.length>0); return this.tracker.list
                        }

                        findNextDiff(t, e, n) {
                            let i, s; if (this.options.maxDepth&&n.length>this.options.maxDepth) return []; if (!t.outerDone) {
                                if (s=this.findOuterDiff(t, e, n), this.options.filterOuterDiff&&(i=this.options.filterOuterDiff(t, e, s), i&&(s=i)), s.length>0) return t.outerDone=!0, s; t.outerDone=!0
                            } if (!t.innerDone) {
                                if (s=this.findInnerDiff(t, e, n), s.length>0) return s; t.innerDone=!0
                            } if (this.options.valueDiffing&&!t.valueDone) {
                                if (s=this.findValueDiff(t, e, n), s.length>0) return t.valueDone=!0, s; t.valueDone=!0
                            } return []
                        }

                        findOuterDiff(t, e, n) {
                            const s=[]; let c, d, i, l, o, r; if (t.nodeName!==e.nodeName) {
                                if (!n.length) throw new Error("Top level nodes have to be of the same kind."); return [(new a()).setValue(this.options._const.action, this.options._const.replaceElement).setValue(this.options._const.oldValue, p(t)).setValue(this.options._const.newValue, p(e)).setValue(this.options._const.route, n)]
                            } if (n.length&&this.options.maxNodeDiffCount<Math.abs((t.childNodes||[]).length-(e.childNodes||[]).length)) return [(new a()).setValue(this.options._const.action, this.options._const.replaceElement).setValue(this.options._const.oldValue, p(t)).setValue(this.options._const.newValue, p(e)).setValue(this.options._const.route, n)]; if (t.data!==e.data) return "#text"===t.nodeName?[(new a()).setValue(this.options._const.action, this.options._const.modifyTextElement).setValue(this.options._const.route, n).setValue(this.options._const.oldValue, t.data).setValue(this.options._const.newValue, e.data)]:[(new a()).setValue(this.options._const.action, this.options._const.modifyComment).setValue(this.options._const.route, n).setValue(this.options._const.oldValue, t.data).setValue(this.options._const.newValue, e.data)]; for (o=t.attributes?Object.keys(t.attributes).sort():[], r=e.attributes?Object.keys(e.attributes).sort():[], l=o.length, c=0; c<l; c++)i=o[c], d=r.indexOf(i), -1===d?s.push((new a()).setValue(this.options._const.action, this.options._const.removeAttribute).setValue(this.options._const.route, n).setValue(this.options._const.name, i).setValue(this.options._const.value, t.attributes[i])):(r.splice(d, 1), t.attributes[i]!==e.attributes[i]&&s.push((new a()).setValue(this.options._const.action, this.options._const.modifyAttribute).setValue(this.options._const.route, n).setValue(this.options._const.name, i).setValue(this.options._const.oldValue, t.attributes[i]).setValue(this.options._const.newValue, e.attributes[i]))); for (l=r.length, c=0; c<l; c++)i=r[c], s.push((new a()).setValue(this.options._const.action, this.options._const.addAttribute).setValue(this.options._const.route, n).setValue(this.options._const.name, i).setValue(this.options._const.value, e.attributes[i])); return s
                        }

                        findInnerDiff(t, e, n) {
                            const s=t.childNodes?t.childNodes.slice():[],
                                i=e.childNodes?e.childNodes.slice():[],
                                o=Math.max(s.length, i.length); let r=Math.abs(s.length-i.length),
                                l=[],
                                d=0; if (!this.options.maxChildCount||o<this.options.maxChildCount) {
                                const s=t.subsets&&t.subsetsAge--,
                                    i=s?
                                        t.subsets:
                                        t.childNodes&&e.childNodes?
                                            (function(t, e) {
                                                const n=t.childNodes?t.childNodes:[],
                                                    s=e.childNodes?e.childNodes:[],
                                                    i=m(n.length, !1),
                                                    o=m(s.length, !1),
                                                    a=[]; let r=!0; const l=function() {
                                                    return arguments[1]
                                                }; for (;r;)r=f(n, s, i, o), r&&(a.push(r), Array(...new Array(r.length)).map(l).forEach((t => {
                                                    return e=t, i[r.oldValue+e]=!0, void (o[r.newValue+e]=!0); let e
                                                }))); return t.subsets=a, t.subsetsAge=100, a
                                            }(t, e)):
                                            []; if (i.length>0&&(l=this.attemptGroupRelocation(t, e, i, n, s), l.length>0)) return l
                            } for (let t=0; t<o; t+=1) {
                                const e=s[t],
                                    c=i[t]; r&&(e&&!c?"#text"===e.nodeName?(l.push((new a()).setValue(this.options._const.action, this.options._const.removeTextElement).setValue(this.options._const.route, n.concat(d)).setValue(this.options._const.value, e.data)), d-=1):(l.push((new a()).setValue(this.options._const.action, this.options._const.removeElement).setValue(this.options._const.route, n.concat(d)).setValue(this.options._const.element, p(e))), d-=1):c&&!e&&("#text"===c.nodeName?l.push((new a()).setValue(this.options._const.action, this.options._const.addTextElement).setValue(this.options._const.route, n.concat(d)).setValue(this.options._const.value, c.data)):l.push((new a()).setValue(this.options._const.action, this.options._const.addElement).setValue(this.options._const.route, n.concat(d)).setValue(this.options._const.element, p(c))))), e&&c&&(!this.options.maxChildCount||o<this.options.maxChildCount?l=l.concat(this.findNextDiff(e, c, n.concat(d))):u(e, c)||(s.length>i.length?("#text"===e.nodeName?l.push((new a()).setValue(this.options._const.action, this.options._const.removeTextElement).setValue(this.options._const.route, n.concat(d)).setValue(this.options._const.value, e.data)):l.push((new a()).setValue(this.options._const.action, this.options._const.removeElement).setValue(this.options._const.element, p(e)).setValue(this.options._const.route, n.concat(d))), s.splice(t, 1), t-=1, d-=1, r-=1):s.length<i.length?(l=l.concat([(new a()).setValue(this.options._const.action, this.options._const.addElement).setValue(this.options._const.element, p(c)).setValue(this.options._const.route, n.concat(d))]), s.splice(t, 0, {}), r-=1):l=l.concat([(new a()).setValue(this.options._const.action, this.options._const.replaceElement).setValue(this.options._const.oldValue, p(e)).setValue(this.options._const.newValue, p(c)).setValue(this.options._const.route, n.concat(d))]))), d+=1
                            } return t.innerDone=!0, l
                        }

                        attemptGroupRelocation(t, e, n, s, i) {
                            const o=(function(t, e, n) {
                                    const s=t.childNodes?m(t.childNodes.length, !0):[],
                                        i=e.childNodes?m(e.childNodes.length, !0):[]; let o=0; return n.forEach((t => {
                                        const e=t.oldValue+t.length,
                                            n=t.newValue+t.length; for (let n=t.oldValue; n<e; n+=1)s[n]=o; for (let e=t.newValue; e<n; e+=1)i[e]=o; o+=1
                                    })), {gaps1: s,
                                        gaps2: i}
                                }(t, e, n)),
                                r=o.gaps1,
                                l=o.gaps2; let d, c, u, f, g, v,
                                b=Math.min(r.length, l.length); const w=[]; for (let m=0, o=0; o<b; m+=1, o+=1) if (!i||!0!==r[o]&&!0!==l[o]) {
                                if (!0===r[o]) if (f=t.childNodes[m], "#text"===f.nodeName) if ("#text"===e.childNodes[o].nodeName) {
                                    if (f.data!==e.childNodes[o].data) {
                                        for (v=m; t.childNodes.length>v+1&&"#text"===t.childNodes[v+1].nodeName;) if (v+=1, e.childNodes[o].data===t.childNodes[v].data) {
                                            g=!0; break
                                        } if (!g) return w.push((new a()).setValue(this.options._const.action, this.options._const.modifyTextElement).setValue(this.options._const.route, s.concat(o)).setValue(this.options._const.oldValue, f.data).setValue(this.options._const.newValue, e.childNodes[o].data)), w
                                    }
                                } else w.push((new a()).setValue(this.options._const.action, this.options._const.removeTextElement).setValue(this.options._const.route, s.concat(o)).setValue(this.options._const.value, f.data)), r.splice(o, 1), b=Math.min(r.length, l.length), o-=1; else w.push((new a()).setValue(this.options._const.action, this.options._const.removeElement).setValue(this.options._const.route, s.concat(o)).setValue(this.options._const.element, p(f))), r.splice(o, 1), b=Math.min(r.length, l.length), o-=1; else if (!0===l[o])f=e.childNodes[o], "#text"===f.nodeName?(w.push((new a()).setValue(this.options._const.action, this.options._const.addTextElement).setValue(this.options._const.route, s.concat(o)).setValue(this.options._const.value, f.data)), r.splice(o, 0, !0), b=Math.min(r.length, l.length), m-=1):(w.push((new a()).setValue(this.options._const.action, this.options._const.addElement).setValue(this.options._const.route, s.concat(o)).setValue(this.options._const.element, p(f))), r.splice(o, 0, !0), b=Math.min(r.length, l.length), m-=1); else if (r[o]!==l[o]) {
                                    if (w.length>0) return w; if (u=n[r[o]], c=Math.min(u.newValue, t.childNodes.length-u.length), c!==u.oldValue) {
                                        d=!1; for (let e=0; e<u.length; e+=1)h(t.childNodes[c+e], t.childNodes[u.oldValue+e], [], !1, !0)||(d=!0); if (d) return [(new a()).setValue(this.options._const.action, this.options._const.relocateGroup).setValue("groupLength", u.length).setValue(this.options._const.from, u.oldValue).setValue(this.options._const.to, c).setValue(this.options._const.route, s)]
                                    }
                                }
                            } else;return w
                        }

                        findValueDiff(t, e, n) {
                            const s=[]; return t.selected!==e.selected&&s.push((new a()).setValue(this.options._const.action, this.options._const.modifySelected).setValue(this.options._const.oldValue, t.selected).setValue(this.options._const.newValue, e.selected).setValue(this.options._const.route, n)), (t.value||e.value)&&t.value!==e.value&&"OPTION"!==t.nodeName&&s.push((new a()).setValue(this.options._const.action, this.options._const.modifyValue).setValue(this.options._const.oldValue, t.value||"").setValue(this.options._const.newValue, e.value||"").setValue(this.options._const.route, n)), t.checked!==e.checked&&s.push((new a()).setValue(this.options._const.action, this.options._const.modifyChecked).setValue(this.options._const.oldValue, t.checked).setValue(this.options._const.newValue, e.checked).setValue(this.options._const.route, n)), s
                        }
                    } const S={debug: !1,
                        diffcap: 10,
                        maxDepth: !1,
                        maxChildCount: 50,
                        valueDiffing: !0,
                        textDiff(t, e, n, s) {
                            t.data=s
                        },
                        preVirtualDiffApply() {},
                        postVirtualDiffApply() {},
                        preDiffApply() {},
                        postDiffApply() {},
                        filterOuterDiff: null,
                        compress: !1,
                        _const: !1,
                        document: !("undefined"==typeof window||!window.document)&&window.document}; class C {
                        constructor(t={}) {
                            if (this.options=t, Object.entries(S).forEach((([t, e]) => {
                                Object.prototype.hasOwnProperty.call(this.options, t)||(this.options[t]=e)
                            })), !this.options._const) {
                                const t=["addAttribute", "modifyAttribute", "removeAttribute", "modifyTextElement", "relocateGroup", "removeElement", "addElement", "removeTextElement", "addTextElement", "replaceElement", "modifyValue", "modifyChecked", "modifySelected", "modifyComment", "action", "route", "oldValue", "newValue", "element", "group", "from", "to", "name", "value", "data", "attributes", "nodeName", "childNodes", "checked", "selected"]; this.options._const={}, this.options.compress?t.forEach(((t, e) => this.options._const[t]=e)):t.forEach((t => this.options._const[t]=t))
                            } this.DiffFinder=k
                        }

                        apply(t, e) {
                            return (function(t, e, n) {
                                return e.every((e => s(t, e, n)))
                            }(t, e, this.options))
                        }

                        undo(t, e) {
                            return o(t, e, this.options)
                        }

                        diff(t, e) {
                            return new this.DiffFinder(t, e, this.options).init()
                        }
                    } let A=function(t, e, n, s, i) {
                            const o=s.classes,
                                a=s.hiddenHeader,
                                r=s.sortable,
                                l=s.scrollY,
                                d=i.noColumnWidths,
                                c=i.unhideHeader; return {nodeName: "TR",
                                childNodes: t.map(((t, s) => {
                                    let i, u,
                                        h=e.columns[s]||{}; if (!h.hidden) {
                                        const p={}; !h.notSortable&&r&&(p["data-sortable"]="true"), (null===(i=e.sort)||void 0===i?void 0:i.column)===s&&(p.class=e.sort.dir, p["aria-sort"]="asc"===e.sort.dir?"ascending":"descending"); let f=""; n[s]&&!d&&(f+="width: ".concat(n[s], "%;")), l.length&&!c&&(f+="padding-bottom: 0;padding-top: 0;border: 0;"), f.length&&(p.style=f); const m="node"===t.type?
                                            t.data:
                                            [
                                                {nodeName: "#text",
                                                    data: null!==(u=t.text)&&void 0!==u?u:String(t.data)}
                                            ]; return {nodeName: "TH",
                                            attributes: p,
                                            childNodes: !a&&!l.length||c?
                                                h.notSortable||!r?
                                                    m:
                                                    [
                                                        {nodeName: "a",
                                                            attributes: {href: "#",
                                                                class: o.sorter},
                                                            childNodes: m}
                                                    ]:
                                                [
                                                    {nodeName: "#text",
                                                        data: ""}
                                                ]}
                                    }
                                })).filter((t => t))}
                        },
                        O=function(t, e, n, s, i, o, a, r) {
                            const l=a.classes,
                                d=a.hiddenHeader,
                                c=a.header,
                                u=a.footer,
                                h=a.sortable,
                                p=a.scrollY,
                                f=a.rowRender,
                                m=a.tabIndex,
                                g=r.noColumnWidths,
                                v=r.unhideHeader,
                                b=r.renderHeader,
                                w={nodeName: "TABLE",
                                    attributes: {class: l.table},
                                    childNodes: [
                                        {nodeName: "TBODY",
                                            childNodes: n.map((t => {
                                                const e=t.row,
                                                    n=t.index,
                                                    a={nodeName: "TR",
                                                        attributes: {"data-index": String(n)},
                                                        childNodes: e.map(((t, e) => {
                                                            let o,
                                                                a=s.columns[e]||{}; if (!a.hidden) {
                                                                const r="node"===t.type?
                                                                    {nodeName: "TD",
                                                                        childNodes: t.data}:
                                                                    {nodeName: "TD",
                                                                        childNodes: [
                                                                            {nodeName: "#text",
                                                                                data: null!==(o=t.text)&&void 0!==o?o:String(t.data)}
                                                                        ]}; if (c||u||!i[e]||g||(r.attributes={style: "width: ".concat(i[e], "%;")}), a.render) {
                                                                    const l=a.render(t.data, r, n, e); if (l) {
                                                                        if ("string"!=typeof l) return l; const d=M("<td>".concat(l, "</td>")); 1!==d.childNodes.length||"#text"!==d.childNodes[0].nodeName?r.childNodes=d.childNodes:r.childNodes[0].data=l
                                                                    }
                                                                } return r
                                                            }
                                                        })).filter((t => t))}; if (n===o&&(a.attributes.class=l.cursor), f) {
                                                    const r=f(e, a, n); if (r) {
                                                        if ("string"!=typeof r) return r; const d=M("<tr>".concat(r, "</tr>")); !d.childNodes||1===d.childNodes.length&&"#text"===d.childNodes[0].nodeName?a.childNodes[0].data=r:a.childNodes=d.childNodes
                                                    }
                                                } return a
                                            }))}
                                    ]}; if (t.length&&(w.attributes.id=t), c||u||b) {
                                const y=A(e, s, i, {classes: l,
                                    hiddenHeader: d,
                                    sortable: h,
                                    scrollY: p}, {noColumnWidths: g,
                                    unhideHeader: v}); if (c||b) {
                                    const N={nodeName: "THEAD",
                                        childNodes: [y]}; !p.length&&!d||v||(N.attributes={style: "height: 0px;"}), w.childNodes.unshift(N)
                                } if (u) {
                                    const x={nodeName: "TFOOT",
                                        childNodes: [c?structuredClone(y):y]}; !p.length&&!d||v||(x.attributes={style: "height: 0px;"}), w.childNodes.push(x)
                                }
                            } return !1!==m&&(w.attributes.tabindex=String(m)), w
                        },
                        L=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self, {}); ({get exports() {
                        return L
                    },
                    set exports(t) {
                        L=t
                    }}).exports=(function() {
                        let t=1e3,
                            e=6e4,
                            n=36e5,
                            s="millisecond",
                            i="second",
                            o="minute",
                            a="hour",
                            r="day",
                            l="week",
                            d="month",
                            c="quarter",
                            u="year",
                            h="date",
                            p="Invalid Date",
                            f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
                            m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
                            g={name: "en",
                                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                                ordinal(t) {
                                    const e=["th", "st", "nd", "rd"],
                                        n=t%100; return `[${t}${e[(n-20)%10]||e[n]||e[0]}]`
                                }},
                            v=function(t, e, n) {
                                const s=String(t); return !s||s.length>=e?t:`${Array(e+1-s.length).join(n)}${t}`
                            },
                            b={s: v,
                                z(t) {
                                    const e=-t.utcOffset(),
                                        n=Math.abs(e),
                                        s=Math.floor(n/60),
                                        i=n%60; return `${(e<=0?"+":"-")+v(s, 2, "0")}:${v(i, 2, "0")}`
                                },
                                m: function t(e, n) {
                                    if (e.date()<n.date()) return -t(n, e); const s=12*(n.year()-e.year())+(n.month()-e.month()),
                                        i=e.clone().add(s, d),
                                        o=n-i<0,
                                        a=e.clone().add(s+(o?-1:1), d); return +(-(s+(n-i)/(o?i-a:a-i))||0)
                                },
                                a(t) {
                                    return t<0?Math.ceil(t)||0:Math.floor(t)
                                },
                                p(t) {
                                    return {M: d,
                                        y: u,
                                        w: l,
                                        d: r,
                                        D: h,
                                        h: a,
                                        m: o,
                                        s: i,
                                        ms: s,
                                        Q: c}[t]||String(t||"").toLowerCase().replace(/s$/, "")
                                },
                                u(t) {
                                    return void 0===t
                                }},
                            w="en",
                            y={}; y[w]=g; const N=function(t) {
                                return t instanceof E
                            },
                            x=function t(e, n, s) {
                                let i; if (!e) return w; if ("string"==typeof e) {
                                    const o=e.toLowerCase(); y[o]&&(i=o), n&&(y[o]=n, i=o); const a=e.split("-"); if (!i&&a.length>1) return t(a[0])
                                } else {
                                    const r=e.name; y[r]=e, i=r
                                } return !s&&i&&(w=i), i||!s&&w
                            },
                            _=function(t, e) {
                                if (N(t)) return t.clone(); const n="object"==typeof e?e:{}; return n.date=t, n.args=arguments, new E(n)
                            },
                            V=b; V.l=x, V.i=N, V.w=function(t, e) {
                            return _(t, {locale: e.$L,
                                utc: e.$u,
                                x: e.$x,
                                $offset: e.$offset})
                        }; var E=(function() {
                                function g(t) {
                                    this.$L=x(t.locale, null, !0), this.parse(t)
                                } const v=g.prototype; return v.parse=function(t) {
                                    this.$d=(function(t) {
                                        const e=t.date,
                                            n=t.utc; if (null===e) return new Date(NaN); if (V.u(e)) return new Date(); if (e instanceof Date) return new Date(e); if ("string"==typeof e&&!/Z$/i.test(e)) {
                                            const s=e.match(f); if (s) {
                                                const i=s[2]-1||0,
                                                    o=(s[7]||"0").substring(0, 3); return n?new Date(Date.UTC(s[1], i, s[3]||1, s[4]||0, s[5]||0, s[6]||0, o)):new Date(s[1], i, s[3]||1, s[4]||0, s[5]||0, s[6]||0, o)
                                            }
                                        } return new Date(e)
                                    }(t)), this.$x=t.x||{}, this.init()
                                }, v.init=function() {
                                    const t=this.$d; this.$y=t.getFullYear(), this.$M=t.getMonth(), this.$D=t.getDate(), this.$W=t.getDay(), this.$H=t.getHours(), this.$m=t.getMinutes(), this.$s=t.getSeconds(), this.$ms=t.getMilliseconds()
                                }, v.$utils=function() {
                                    return V
                                }, v.isValid=function() {
                                    return !(this.$d.toString()===p)
                                }, v.isSame=function(t, e) {
                                    const n=_(t); return this.startOf(e)<=n&&n<=this.endOf(e)
                                }, v.isAfter=function(t, e) {
                                    return _(t)<this.startOf(e)
                                }, v.isBefore=function(t, e) {
                                    return this.endOf(e)<_(t)
                                }, v.$g=function(t, e, n) {
                                    return V.u(t)?this[e]:this.set(n, t)
                                }, v.unix=function() {
                                    return Math.floor(this.valueOf()/1e3)
                                }, v.valueOf=function() {
                                    return this.$d.getTime()
                                }, v.startOf=function(t, e) {
                                    const n=this,
                                        s=!!V.u(e)||e,
                                        c=V.p(t),
                                        p=function(t, e) {
                                            const i=V.w(n.$u?Date.UTC(n.$y, e, t):new Date(n.$y, e, t), n); return s?i:i.endOf(r)
                                        },
                                        f=function(t, e) {
                                            return V.w(n.toDate()[t].apply(n.toDate("s"), (s?[0, 0, 0, 0]:[23, 59, 59, 999]).slice(e)), n)
                                        },
                                        m=this.$W,
                                        g=this.$M,
                                        v=this.$D,
                                        b=`set${this.$u?"UTC":""}`; switch (c) {
                                    case u: return s?p(1, 0):p(31, 11); case d: return s?p(1, g):p(0, g+1); case l: var w=this.$locale().weekStart||0,
                                        y=(m<w?m+7:m)-w; return p(s?v-y:v+(6-y), g); case r: case h: return f(`${b}Hours`, 0); case a: return f(`${b}Minutes`, 1); case o: return f(`${b}Seconds`, 2); case i: return f(`${b}Milliseconds`, 3); default: return this.clone()
                                    }
                                }, v.endOf=function(t) {
                                    return this.startOf(t, !1)
                                }, v.$set=function(t, e) {
                                    let n,
                                        l=V.p(t),
                                        c=`set${this.$u?"UTC":""}`,
                                        p=(n={}, n[r]=`${c}Date`, n[h]=`${c}Date`, n[d]=`${c}Month`, n[u]=`${c}FullYear`, n[a]=`${c}Hours`, n[o]=`${c}Minutes`, n[i]=`${c}Seconds`, n[s]=`${c}Milliseconds`, n)[l],
                                        f=l===r?this.$D+(e-this.$W):e; if (l===d||l===u) {
                                        const m=this.clone().set(h, 1); m.$d[p](f), m.init(), this.$d=m.set(h, Math.min(this.$D, m.daysInMonth())).$d
                                    } else p&&this.$d[p](f); return this.init(), this
                                }, v.set=function(t, e) {
                                    return this.clone().$set(t, e)
                                }, v.get=function(t) {
                                    return this[V.p(t)]()
                                }, v.add=function(s, c) {
                                    let h,
                                        p=this; s=Number(s); const f=V.p(c),
                                        m=function(t) {
                                            const e=_(p); return V.w(e.date(e.date()+Math.round(t*s)), p)
                                        }; if (f===d) return this.set(d, this.$M+s); if (f===u) return this.set(u, this.$y+s); if (f===r) return m(1); if (f===l) return m(7); const g=(h={}, h[o]=e, h[a]=n, h[i]=t, h)[f]||1,
                                        v=this.$d.getTime()+s*g; return V.w(v, this)
                                }, v.subtract=function(t, e) {
                                    return this.add(-1*t, e)
                                }, v.format=function(t) {
                                    const e=this,
                                        n=this.$locale(); if (!this.isValid()) return n.invalidDate||p; const s=t||"YYYY-MM-DDTHH:mm:ssZ",
                                        i=V.z(this),
                                        o=this.$H,
                                        a=this.$m,
                                        r=this.$M,
                                        l=n.weekdays,
                                        d=n.months,
                                        c=function(t, n, i, o) {
                                            return t&&(t[n]||t(e, s))||i[n].slice(0, o)
                                        },
                                        u=function(t) {
                                            return V.s(o%12||12, t, "0")
                                        },
                                        h=n.meridiem||function(t, e, n) {
                                            const s=t<12?"AM":"PM"; return n?s.toLowerCase():s
                                        },
                                        f={YY: String(this.$y).slice(-2),
                                            YYYY: this.$y,
                                            M: r+1,
                                            MM: V.s(r+1, 2, "0"),
                                            MMM: c(n.monthsShort, r, d, 3),
                                            MMMM: c(d, r),
                                            D: this.$D,
                                            DD: V.s(this.$D, 2, "0"),
                                            d: String(this.$W),
                                            dd: c(n.weekdaysMin, this.$W, l, 2),
                                            ddd: c(n.weekdaysShort, this.$W, l, 3),
                                            dddd: l[this.$W],
                                            H: String(o),
                                            HH: V.s(o, 2, "0"),
                                            h: u(1),
                                            hh: u(2),
                                            a: h(o, a, !0),
                                            A: h(o, a, !1),
                                            m: String(a),
                                            mm: V.s(a, 2, "0"),
                                            s: String(this.$s),
                                            ss: V.s(this.$s, 2, "0"),
                                            SSS: V.s(this.$ms, 3, "0"),
                                            Z: i}; return s.replace(m, ((t, e) => e||f[t]||i.replace(":", "")))
                                }, v.utcOffset=function() {
                                    return 15*-Math.round(this.$d.getTimezoneOffset()/15)
                                }, v.diff=function(s, h, p) {
                                    let f,
                                        m=V.p(h),
                                        g=_(s),
                                        v=(g.utcOffset()-this.utcOffset())*e,
                                        b=this-g,
                                        w=V.m(this, g); return w=(f={}, f[u]=w/12, f[d]=w, f[c]=w/3, f[l]=(b-v)/6048e5, f[r]=(b-v)/864e5, f[a]=b/n, f[o]=b/e, f[i]=b/t, f)[m]||b, p?w:V.a(w)
                                }, v.daysInMonth=function() {
                                    return this.endOf(d).$D
                                }, v.$locale=function() {
                                    return y[this.$L]
                                }, v.locale=function(t, e) {
                                    if (!t) return this.$L; const n=this.clone(),
                                        s=x(t, e, !0); return s&&(n.$L=s), n
                                }, v.clone=function() {
                                    return V.w(this.$d, this)
                                }, v.toDate=function() {
                                    return new Date(this.valueOf())
                                }, v.toJSON=function() {
                                    return this.isValid()?this.toISOString():null
                                }, v.toISOString=function() {
                                    return this.$d.toISOString()
                                }, v.toString=function() {
                                    return this.$d.toUTCString()
                                }, g
                            }()),
                            D=E.prototype; return _.prototype=D, [["$ms", s], ["$s", i], ["$m", o], ["$H", a], ["$W", r], ["$M", d], ["$y", u], ["$D", h]].forEach((t => {
                            D[t[1]]=function(e) {
                                return this.$g(e, t[0], t[1])
                            }
                        })), _.extend=function(t, e) {
                            return t.$i||(t(e, E, _), t.$i=!0), _
                        }, _.locale=x, _.isDayjs=N, _.unix=function(t) {
                            return _(1e3*t)
                        }, _.en=y[w], _.Ls=y, _.p={}, _
                    }()); let T=L,
                        $={}; ({get exports() {
                        return $
                    },
                    set exports(t) {
                        $=t
                    }}).exports=(function() {
                        let t={LTS: "h:mm:ss A",
                                LT: "h:mm A",
                                L: "MM/DD/YYYY",
                                LL: "MMMM D, YYYY",
                                LLL: "MMMM D, YYYY h:mm A",
                                LLLL: "dddd, MMMM D, YYYY h:mm A"},
                            e=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,
                            n=/\d\d/,
                            s=/\d\d?/,
                            i=/\d*[^-_:/,()\s\d]+/,
                            o={},
                            a=function(t) {
                                return (t=+t)+(t>68?1900:2e3)
                            },
                            r=function(t) {
                                return function(e) {
                                    this[t]=+e
                                }
                            },
                            l=[
                                /[+-]\d\d:?(\d\d)?|Z/, function(t) {
                                    (this.zone||(this.zone={})).offset=(function(t) {
                                        if (!t) return 0; if ("Z"===t) return 0; const e=t.match(/([+-]|\d\d)/g),
                                            n=60*e[1]+(+e[2]||0); return 0===n?0:"+"===e[0]?-n:n
                                    }(t))
                                }
                            ],
                            d=function(t) {
                                const e=o[t]; return e&&(e.indexOf?e:e.s.concat(e.f))
                            },
                            c=function(t, e) {
                                let n,
                                    s=o.meridiem; if (s) {
                                    for (let i=1; i<=24; i+=1) if (t.indexOf(s(i, 0, e))>-1) {
                                        n=i>12; break
                                    }
                                } else n=t===(e?"pm":"PM"); return n
                            },
                            u={A: [
                                i, function(t) {
                                    this.afternoon=c(t, !1)
                                }
                            ],
                            a: [
                                i, function(t) {
                                    this.afternoon=c(t, !0)
                                }
                            ],
                            S: [
                                /\d/, function(t) {
                                    this.milliseconds=100*+t
                                }
                            ],
                            SS: [
                                n, function(t) {
                                    this.milliseconds=10*+t
                                }
                            ],
                            SSS: [
                                /\d{3}/, function(t) {
                                    this.milliseconds=+t
                                }
                            ],
                            s: [s, r("seconds")],
                            ss: [s, r("seconds")],
                            m: [s, r("minutes")],
                            mm: [s, r("minutes")],
                            H: [s, r("hours")],
                            h: [s, r("hours")],
                            HH: [s, r("hours")],
                            hh: [s, r("hours")],
                            D: [s, r("day")],
                            DD: [n, r("day")],
                            Do: [
                                i, function(t) {
                                    const e=o.ordinal,
                                        n=t.match(/\d+/); if (this.day=n[0], e) for (let s=1; s<=31; s+=1)e(s).replace(/\[|\]/g, "")===t&&(this.day=s)
                                }
                            ],
                            M: [s, r("month")],
                            MM: [n, r("month")],
                            MMM: [
                                i, function(t) {
                                    const e=d("months"),
                                        n=(d("monthsShort")||e.map((t => t.slice(0, 3)))).indexOf(t)+1; if (n<1) throw new Error(); this.month=n%12||n
                                }
                            ],
                            MMMM: [
                                i, function(t) {
                                    const e=d("months").indexOf(t)+1; if (e<1) throw new Error(); this.month=e%12||e
                                }
                            ],
                            Y: [/[+-]?\d+/, r("year")],
                            YY: [
                                n, function(t) {
                                    this.year=a(t)
                                }
                            ],
                            YYYY: [/\d{4}/, r("year")],
                            Z: l,
                            ZZ: l}; function h(n) {
                            let i, s; s=n, i=o&&o.formats; for (var a=(n=s.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, ((e, n, s) => {
                                    const o=s&&s.toUpperCase(); return n||i[s]||t[s]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, ((t, e, n) => e||n.slice(1)))
                                }))).match(e), r=a.length, l=0; l<r; l+=1) {
                                const d=a[l],
                                    c=u[d],
                                    h=c&&c[0],
                                    p=c&&c[1]; a[l]=p?
                                    {regex: h,
                                        parser: p}:
                                    d.replace(/^\[|\]$/g, "")
                            } return function(t) {
                                for (var e={}, n=0, s=0; n<r; n+=1) {
                                    const i=a[n]; if ("string"==typeof i)s+=i.length; else {
                                        const o=i.regex,
                                            l=i.parser,
                                            d=t.slice(s),
                                            c=o.exec(d)[0]; l.call(e, c), t=t.replace(c, "")
                                    }
                                } return (function(t) {
                                    const e=t.afternoon; if (void 0!==e) {
                                        const n=t.hours; e?n<12&&(t.hours+=12):12===n&&(t.hours=0), delete t.afternoon
                                    }
                                }(e)), e
                            }
                        } return function(t, e, n) {
                            n.p.customParseFormat=!0, t&&t.parseTwoDigitYear&&(a=t.parseTwoDigitYear); const s=e.prototype,
                                i=s.parse; s.parse=function(t) {
                                const e=t.date,
                                    s=t.utc,
                                    a=t.args; this.$u=s; const r=a[1]; if ("string"==typeof r) {
                                    let l=!0===a[2],
                                        d=!0===a[3],
                                        c=l||d,
                                        u=a[2]; d&&(u=a[2]), o=this.$locale(), !l&&u&&(o=n.Ls[u]), this.$d=(function(t, e, n) {
                                        try {
                                            if (["x", "X"].indexOf(e)>-1) return new Date(("X"===e?1e3:1)*t); let s=h(e)(t),
                                                i=s.year,
                                                o=s.month,
                                                a=s.day,
                                                r=s.hours,
                                                l=s.minutes,
                                                d=s.seconds,
                                                c=s.milliseconds,
                                                u=s.zone,
                                                p=new Date(),
                                                f=a||(i||o?1:p.getDate()),
                                                m=i||p.getFullYear(),
                                                g=0; i&&!o||(g=o>0?o-1:p.getMonth()); const v=r||0,
                                                b=l||0,
                                                w=d||0,
                                                y=c||0; return u?new Date(Date.UTC(m, g, f, v, b, w, y+60*u.offset*1e3)):n?new Date(Date.UTC(m, g, f, v, b, w, y)):new Date(m, g, f, v, b, w, y)
                                        } catch (t) {
                                            return new Date("")
                                        }
                                    }(e, r, s)), this.init(), u&&!0!==u&&(this.$L=this.locale(u).$L), c&&e!=this.format(r)&&(this.$d=new Date("")), o={}
                                } else if (r instanceof Array) for (let p=r.length, f=1; f<=p; f+=1) {
                                    a[1]=r[f-1]; const m=n.apply(this, a); if (m.isValid()) {
                                        this.$d=m.$d, this.$L=m.$L, this.init(); break
                                    }f===p&&(this.$d=new Date(""))
                                } else i.call(this, t)
                            }
                        }
                    }()); const P=$; T.extend(P); const H=function(t) {
                            return "[object Object]"===Object.prototype.toString.call(t)
                        },
                        R=function(t) {
                            let e=!1; try {
                                e=JSON.parse(t)
                            } catch (t) {
                                return !1
                            } return !(null===e||!Array.isArray(e)&&!H(e))&&e
                        },
                        Y=function(t, e) {
                            const n=document.createElement(t); if (e&&"object"==typeof e) for (const s in e)"html"===s?n.innerHTML=e[s]:n.setAttribute(s, e[s]); return n
                        },
                        I=function(t) {
                            Array.isArray(t)?
                                t.forEach((t => I(t))):
                                t.innerHTML=""
                        },
                        j=function(t, e, n) {
                            return Y("li", {class: t,
                                html: "<a href=\"#\" data-page=\"".concat(e, "\">").concat(n, "</a>")})
                        },
                        W=function(t) {
                            return "#text"===t.nodeName?
                                t.data:
                                t.childNodes?
                                    t.childNodes.map((t => W(t))).join(""):
                                    ""
                        },
                        q=function(t) {
                            return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        },
                        B=function(t, e) {
                            for (var n=0, s=0; n<t+1;) {
                                (e[s]||{}).hidden||(n+=1), s+=1
                            } return s-1
                        },
                        z=function(t, e) {
                            if (void 0===e&&(e={}), t instanceof Object&&t.constructor===Object&&t.hasOwnProperty("data")&&("string"==typeof t.text||"string"==typeof t.data)) return t; const n={data: t}; if ("string"==typeof t) {
                                if (t.length) {
                                    const s=M("<td>".concat(t, "</td>")); if (s.childNodes&&(1!==s.childNodes.length||"#text"!==s.childNodes[0].nodeName)) {
                                        n.data=s.childNodes, n.type="node"; const i=W(s); n.text=i, n.order=i
                                    }
                                }
                            } else [null, void 0].includes(t)?(n.text="", n.order=0):n.text=JSON.stringify(t); return "date"===e.type&&e.format&&(n.order=(function(t, e) {
                                let n; if (e) switch (e) {
                                case "ISO_8601": n=t; break; case "RFC_2822": n=T(t.slice(5), "DD MMM YYYY HH:mm:ss ZZ").unix(); break; case "MYSQL": n=T(t, "YYYY-MM-DD hh:mm:ss").unix(); break; case "UNIX": n=T(t).unix(); break; default: n=T(t, e, !0).valueOf()
                                } return n
                            }(String(t), e.format))), n
                        },
                        U=function(t) {
                            if (t instanceof Object&&t.constructor===Object&&t.hasOwnProperty("data")&&("string"==typeof t.text||"string"==typeof t.data)) return t; const e={data: t}; if ("string"==typeof t) {
                                if (t.length) {
                                    const n=M("<th>".concat(t, "</th>")); if (n.childNodes&&(1!==n.childNodes.length||"#text"!==n.childNodes[0].nodeName)) {
                                        e.data=n.childNodes, e.type="node"; const s=W(n); e.text=s
                                    }
                                }
                            } else [null, void 0].includes(t)?e.text="":e.text=JSON.stringify(t); return e
                        },
                        J=function(e, n, s) {
                            let i, o; void 0===n&&(n=void 0); const a={data: [],
                                headings: []}; if (e.headings?
                                a.headings=e.headings.map((t => U(t))):
                                (null==n?void 0:n.tHead)?
                                    a.headings=Array.from(n.tHead.querySelectorAll("th")).map(((e, n) => {
                                        const i=U(e.innerHTML),
                                            o={}; return "false"!==e.dataset.sortable&&"false"!==e.dataset.sort||(o.notSortable=!0), "true"!==e.dataset.hidden&&"true"!==e.getAttribute("hidden")||(o.hidden=!0), "date"===e.dataset.type&&(o.type="date", e.dataset.format&&(o.format=e.dataset.format)), Object.keys(o).length&&(s.columns[n]||(s.columns[n]={}), s.columns[n]={...s.columns[n],
                                            ...o}), i
                                    })):
                                    (null===(i=e.data)||void 0===i?void 0:i.length)?
                                        a.headings=e.data[0].map((t => U(""))):
                                        (null==n?void 0:n.tBodies.length)&&(a.headings=Array.from(n.tBodies[0].rows[0].cells).map((t => U("")))), e.data?
                                a.data=e.data.map((t => t.map(((t, e) => z(t, s.columns[e]))))):
                                (null===(o=null==n?void 0:n.tBodies)||void 0===o?void 0:o.length)&&(a.data=Array.from(n.tBodies[0].rows).map((t => Array.from(t.cells).map(((t, e) => z(t.dataset.content||t.innerHTML, s.columns[e])))))), a.data.length&&a.data[0].length!==a.headings.length) throw new Error("Data heading length mismatch."); return a
                        },
                        F=(function() {
                            function t(t) {
                                this.dt=t, this.cursor=!1
                            } return t.prototype.setCursor=function(t) {
                                if (void 0===t&&(t=!1), t!==this.cursor) {
                                    const e=this.cursor; if (this.cursor=t, this.dt.renderTable(), !1!==t&&this.dt.options.scrollY) {
                                        const n=this.dt.dom.querySelector("tr.".concat(this.dt.options.classes.cursor)); n&&n.scrollIntoView({block: "nearest"})
                                    } this.dt.emit("datatable.cursormove", this.cursor, e)
                                }
                            }, t.prototype.add=function(t) {
                                const e=this,
                                    n=t.map(((t, n) => {
                                        const s=e.dt.columns.settings.columns[n]||{}; return z(t, s)
                                    })); this.dt.data.data.push(n), this.dt.data.data.length&&(this.dt.hasRows=!0), this.dt.columns.measureWidths(), this.dt.update()
                            }, t.prototype.remove=function(t) {
                                if (!Array.isArray(t)) return this.remove([t]); this.dt.data.data=this.dt.data.data.filter(((e, n) => !t.includes(n))), this.dt.data.data.length||(this.dt.hasRows=!1), this.dt.columns.measureWidths(), this.dt.update()
                            }, t.prototype.findRowIndex=function(t, e) {
                                return this.dt.data.data.findIndex((n => {
                                    let s; return (null!==(s=n[t].text)&&void 0!==s?s:String(n[t].data)).toLowerCase().includes(String(e).toLowerCase())
                                }))
                            }, t.prototype.findRow=function(t, e) {
                                const n=this.findRowIndex(t, e); if (n<0) return {index: -1,
                                    row: null,
                                    cols: []}; const s=this.dt.data.data[n],
                                    i=s.map((t => t.data)); return {index: n,
                                    row: s,
                                    cols: i}
                            }, t.prototype.updateRow=function(t, e) {
                                const n=this,
                                    s=e.map(((t, e) => {
                                        const s=n.dt.columns.settings.columns[e]||{}; return z(t, s)
                                    })); this.dt.data.data.splice(t, 1, s), this.dt.columns.measureWidths(), this.dt.update()
                            }, t
                        }()),
                        Z=(function() {
                            function t(t) {
                                this.dt=t, this.widths=[], this.init()
                            } return t.prototype.init=function() {
                                this.settings=(function(t) {
                                    void 0===t&&(t=[]); let e=[],
                                        n=!1; return t.forEach((t => {
                                        (Array.isArray(t.select)?t.select:[t.select]).forEach((s => {
                                            e[s]||(e[s]={}); const i=e[s]; t.render&&(i.render=t.render), t.type&&(i.type=t.type), t.format&&(i.format=t.format), !1===t.sortable&&(i.notSortable=!0), t.hidden&&(i.hidden=!0), t.filter&&(i.filter=t.filter), t.sortSequence&&(i.sortSequence=t.sortSequence), t.sort&&(n={column: s,
                                                dir: t.sort})
                                        }))
                                    })), {columns: e,
                                        sort: n}
                                }(this.dt.options.columns))
                            }, t.prototype.swap=function(t) {
                                if (2===t.length) {
                                    const e=this.dt.data.headings.map(((t, e) => e)),
                                        n=t[0],
                                        s=t[1],
                                        i=e[s]; return e[s]=e[n], e[n]=i, this.order(e)
                                }
                            }, t.prototype.order=function(t) {
                                const e=this; this.dt.data.headings=t.map((t => e.dt.data.headings[t])), this.dt.data.data=this.dt.data.data.map((e => t.map((t => e[t])))), this.settings.columns=t.map((t => e.settings.columns[t])), this.dt.update()
                            }, t.prototype.hide=function(t) {
                                const e=this; t.length&&(t.forEach((t => {
                                    e.settings.columns[t]||(e.settings.columns[t]={}), e.settings.columns[t].hidden=!0
                                })), this.dt.update())
                            }, t.prototype.show=function(t) {
                                const e=this; t.length&&(t.forEach((t => {
                                    e.settings.columns[t]||(e.settings.columns[t]={}), delete e.settings.columns[t].hidden
                                })), this.dt.update())
                            }, t.prototype.visible=function(t) {
                                let e,
                                    n=this; return Array.isArray(t)?
                                    t.map((t => {
                                        let e; return !(null===(e=n.settings.columns[t])||void 0===e?void 0:e.hidden)
                                    })):
                                    !(null===(e=this.settings.columns[t])||void 0===e?void 0:e.hidden)
                            }, t.prototype.add=function(t) {
                                const e=this.dt.data.headings.length; if (this.dt.data.headings=this.dt.data.headings.concat([{data: t.heading}]), this.dt.data.data=this.dt.data.data.map(((e, n) => e.concat([z(t.data[n], t)]))), t.type||t.format||t.sortable||t.render) {
                                    this.settings.columns[e]||(this.settings.columns[e]={}); const n=this.settings.columns[e]; t.type&&(n.type=t.type), t.format&&(n.format=t.format), t.notSortable&&(n.notSortable=t.notSortable), t.filter&&(n.filter=t.filter), t.type&&(n.type=t.type), t.render&&(n.render=t.render)
                                } this.measureWidths(), this.dt.update()
                            }, t.prototype.remove=function(t) {
                                if (!Array.isArray(t)) return this.remove([t]); this.dt.data.headings=this.dt.data.headings.filter(((e, n) => !t.includes(n))), this.dt.data.data=this.dt.data.data.map((e => e.filter(((e, n) => !t.includes(n))))), this.measureWidths(), this.dt.update()
                            }, t.prototype.filter=function(t, e) {
                                let n, s; if (void 0===e&&(e=!1), null===(s=null===(n=this.settings.columns[t])||void 0===n?void 0:n.filter)||void 0===s?void 0:s.length) {
                                    let i,
                                        o=this.dt.filterStates.find((e => e.column===t)); if (o) {
                                        let a=!1; i=this.settings.columns[t].filter.find((t => !!a||(t===o.state&&(a=!0), !1)))
                                    } else i=this.settings.columns[t].filter[0]; o&&i?
                                        o.state=i:
                                        o?
                                            this.dt.filterStates=this.dt.filterStates.filter((e => e.column!==t)):
                                            this.dt.filterStates.push({column: t,
                                                state: i}), this.dt.update(), e||this.dt.emit("datatable.filter", t, i)
                                }
                            }, t.prototype.sort=function(t, e, n) {
                                let i, s; void 0===e&&(e=void 0), void 0===n&&(n=!1); const o=this.settings.columns[t]; if (null===(s=null==o?void 0:o.filter)||void 0===s?void 0:s.length) return this.filter(t, n); if (n||this.dt.emit("datatable.sorting", t, e), !e) {
                                    const a=!!this.settings.sort&&(null===(i=this.settings.sort)||void 0===i?void 0:i.dir),
                                        r=(null==o?void 0:o.sortSequence)||["asc", "desc"]; if (a) {
                                        const l=r.indexOf(a); e=-1===l?"asc":l===r.length-1?r[0]:r[l+1]
                                    } else e=r.length?r[0]:"asc"
                                } this.dt.data.data.sort(((n, s) => {
                                    let i=n[t].order||n[t].data,
                                        o=s[t].order||s[t].data; if ("desc"===e) {
                                        const a=i; i=o, o=a
                                    } return i<o?-1:i>o?1:0
                                })), this.settings.sort={column: t,
                                    dir: e}, this.dt.update(), n||this.dt.emit("datatable.sort", t, e)
                            }, t.prototype.measureWidths=function() {
                                let t, e, n, s,
                                    i=this,
                                    o=this.dt.data.headings.filter(((t, e) => {
                                        let n; return !(null===(n=i.settings.columns[e])||void 0===n?void 0:n.hidden)
                                    })); if ((this.dt.options.scrollY.length||this.dt.options.fixedColumns)&&(null==o?void 0:o.length)) {
                                    this.widths=[]; const a={noPaging: !0}; if (this.dt.options.header||this.dt.options.footer) {
                                        this.dt.options.scrollY.length&&(a.unhideHeader=!0), this.dt.headerDOM&&this.dt.headerDOM.parentElement.removeChild(this.dt.headerDOM), a.noColumnWidths=!0, this.dt.renderTable(a); var r=Array.from((null===(e=null===(t=this.dt.dom.querySelector("thead, tfoot"))||void 0===t?void 0:t.firstElementChild)||void 0===e?void 0:e.querySelectorAll("th"))||[]),
                                            l=0,
                                            d=this.dt.data.headings.map(((t, e) => {
                                                let n; if (null===(n=i.settings.columns[e])||void 0===n?void 0:n.hidden) return 0; const s=r[l].offsetWidth; return l+=1, s
                                            })),
                                            c=d.reduce(((t, e) => t+e), 0); this.widths=d.map((t => t/c*100))
                                    } else {
                                        a.renderHeader=!0, this.dt.renderTable(a); let u=Array.from((null===(s=null===(n=this.dt.dom.querySelector("thead, tfoot"))||void 0===n?void 0:n.firstElementChild)||void 0===s?void 0:s.querySelectorAll("th"))||[]),
                                            h=0,
                                            p=(d=this.dt.data.headings.map(((t, e) => {
                                                let n; if (null===(n=i.settings.columns[e])||void 0===n?void 0:n.hidden) return 0; const s=u[h].offsetWidth; return h+=1, s
                                            })), d.reduce(((t, e) => t+e), 0)); this.widths=d.map((t => t/p*100))
                                    } this.dt.renderTable()
                                }
                            }, t
                        }()),
                        X={sortable: !0,
                            searchable: !0,
                            destroyable: !0,
                            data: {},
                            paging: !0,
                            perPage: 10,
                            perPageSelect: [5, 10, 15, 20, 25],
                            nextPrev: !0,
                            firstLast: !1,
                            prevText: "&lsaquo;",
                            nextText: "&rsaquo;",
                            firstText: "&laquo;",
                            lastText: "&raquo;",
                            ellipsisText: "&hellip;",
                            ascText: "▴",
                            descText: "▾",
                            truncatePager: !0,
                            pagerDelta: 2,
                            scrollY: "",
                            fixedColumns: !0,
                            fixedHeight: !1,
                            header: !0,
                            hiddenHeader: !1,
                            footer: !1,
                            tabIndex: !1,
                            rowNavigation: !1,
                            rowRender: !1,
                            labels: {placeholder: "Search...",
                                perPage: "{select} entries per page",
                                noRows: "No entries found",
                                noResults: "No results match your search query",
                                info: "Showing {start} to {end} of {rows} entries"},
                            layout: {top: "{select}{search}",
                                bottom: "{info}{pager}"},
                            classes: {bottom: "datatable-bottom",
                                container: "datatable-container",
                                cursor: "datatable-cursor",
                                dropdown: "datatable-dropdown",
                                empty: "datatable-empty",
                                headercontainer: "datatable-headercontainer",
                                info: "datatable-info",
                                input: "datatable-input",
                                loading: "datatable-loading",
                                pagination: "datatable-pagination",
                                paginationList: "datatable-pagination-list",
                                search: "datatable-search",
                                selector: "datatable-selector",
                                sorter: "datatable-sorter",
                                table: "datatable-table",
                                top: "datatable-top",
                                wrapper: "datatable-wrapper"}},
                        G=(function() {
                            function e(e, n) {
                                void 0===n&&(n={}); const s=this; this.dom="string"==typeof e?document.querySelector(e):e, this.id=this.dom.id, this.options={...X,
                                    ...n,
                                    layout: {...X.layout,
                                        ...n.layout},
                                    labels: {...X.labels,
                                        ...n.labels},
                                    classes: {...X.classes,
                                        ...n.classes}}, this.initialInnerHTML=this.options.destroyable?this.dom.innerHTML:"", this.options.tabIndex?this.dom.tabIndex=this.options.tabIndex:this.options.rowNavigation&&-1===this.dom.tabIndex&&(this.dom.tabIndex=0), this.listeners={onResize() {
                                    return s.onResize()
                                }}, this.dd=new C(), this.initialized=!1, this.events={}, this.currentPage=0, this.onFirstPage=!0, this.hasHeadings=!1, this.hasRows=!1, this.filterStates=[], this.init()
                            } return e.prototype.init=function() {
                                const t=this; if (this.initialized||this.dom.classList.contains(this.options.classes.table)) return !1; this.virtualDOM=w(this.dom), this.rows=new F(this), this.columns=new Z(this), this.data=J(this.options.data, this.dom, this.columns.settings), this.hasRows=Boolean(this.data.data.length), this.hasHeadings=Boolean(this.data.headings.length), this.render(), setTimeout((() => {
                                    t.emit("datatable.init"), t.initialized=!0
                                }), 10)
                            }, e.prototype.render=function() {
                                const t=this; this.wrapper=Y("div", {class: "".concat(this.options.classes.wrapper, " ").concat(this.options.classes.loading)}); let e=""; if (e+="<div class='".concat(this.options.classes.top, "'>"), e+=this.options.layout.top, e+="</div>", this.options.scrollY.length?e+="<div class='".concat(this.options.classes.container, "' style='height: ").concat(this.options.scrollY, "; overflow-Y: auto;'></div>"):e+="<div class='".concat(this.options.classes.container, "'></div>"), e+="<div class='".concat(this.options.classes.bottom, "'>"), e+=this.options.layout.bottom, e=(e+="</div>").replace("{info}", this.options.paging?"<div class='".concat(this.options.classes.info, "'></div>"):""), this.options.paging&&this.options.perPageSelect) {
                                    let n="<div class='".concat(this.options.classes.dropdown, "'><label>"); n+=this.options.labels.perPage, n+="</label></div>"; const s=Y("select", {class: this.options.classes.selector}); this.options.perPageSelect.forEach((e => {
                                        const n=Array.isArray(e)?[e[0], e[1]]:[String(e), e],
                                            i=n[0],
                                            o=n[1],
                                            a=o===t.options.perPage,
                                            r=new Option(i, String(o), a, a); s.appendChild(r)
                                    })), n=n.replace("{select}", s.outerHTML), e=e.replace("{select}", n)
                                } else e=e.replace("{select}", ""); if (this.options.searchable) {
                                    const i="<div class='".concat(this.options.classes.search, "'><input class='").concat(this.options.classes.input, "' placeholder='").concat(this.options.labels.placeholder, "' type='text'></div>"); e=e.replace("{search}", i)
                                } else e=e.replace("{search}", ""); const o=Y("nav", {class: this.options.classes.pagination}),
                                    a=Y("ul", {class: this.options.classes.paginationList}); o.appendChild(a), e=e.replace(/\{pager\}/g, o.outerHTML), this.wrapper.innerHTML=e, this.container=this.wrapper.querySelector(".".concat(this.options.classes.container)), this.pagers=Array.from(this.wrapper.querySelectorAll("ul.".concat(this.options.classes.paginationList))), this.label=this.wrapper.querySelector(".".concat(this.options.classes.info)), this.dom.parentNode.replaceChild(this.wrapper, this.dom), this.container.appendChild(this.dom), this.rect=this.dom.getBoundingClientRect(), this.update(!1), this.fixHeight(), this.options.header||this.wrapper.classList.add("no-header"), this.options.footer||this.wrapper.classList.add("no-footer"), this.options.sortable&&this.wrapper.classList.add("sortable"), this.options.searchable&&this.wrapper.classList.add("searchable"), this.options.fixedHeight&&this.wrapper.classList.add("fixed-height"), this.options.fixedColumns&&this.wrapper.classList.add("fixed-columns"), this.bindEvents(), this.columns.settings.sort&&this.columns.sort(this.columns.settings.sort.column, this.columns.settings.sort.dir, !0), this.columns.measureWidths(), this.update()
                            }, e.prototype.renderTable=function(t) {
                                void 0===t&&(t={}); const e=O(this.id, this.data.headings, this.options.paging&&this.currentPage&&!t.noPaging?
                                        this.pages[this.currentPage-1]:
                                        this.data.data.map(((t, e) => ({row: t,
                                            index: e}))), this.columns.settings, this.columns.widths, this.rows.cursor, this.options, t),
                                    n=this.dd.diff(this.virtualDOM, e); this.dd.apply(this.dom, n), this.virtualDOM=e
                            }, e.prototype.renderPage=function(t, e) {
                                const n=this; void 0===t&&(t=!0), void 0===e&&(e=!1), this.hasRows&&this.totalPages?(this.currentPage>this.totalPages&&(this.currentPage=1), t&&this.renderTable(), this.onFirstPage=1===this.currentPage, this.onLastPage=this.currentPage===this.lastPage):this.setMessage(this.options.labels.noRows); let a=0,
                                    i=0,
                                    o=0,
                                    s; if (this.totalPages&&(a=(o=(i=this.currentPage-1)*this.options.perPage)+this.pages[i].length, o+=1, s=this.searching?this.searchData.length:this.data.data.length), this.label&&this.options.labels.info.length) {
                                    const r=this.options.labels.info.replace("{start}", String(o)).replace("{end}", String(a)).replace("{page}", String(this.currentPage)).replace("{pages}", String(this.totalPages)).replace("{rows}", String(s)); this.label.innerHTML=s?r:""
                                } if (1==this.currentPage&&this.fixHeight(), this.options.rowNavigation&&this.currentPage&&(!this.rows.cursor||!this.pages[this.currentPage-1].find((t => t.index===n.rows.cursor)))) {
                                    const l=this.pages[this.currentPage-1]; l.length&&(e?this.rows.setCursor(l[l.length-1].index):this.rows.setCursor(l[0].index))
                                }
                            }, e.prototype.renderPager=function() {
                                if (I(this.pagers), this.totalPages>1) {
                                    const t="pager",
                                        e=document.createDocumentFragment(),
                                        n=this.onFirstPage?1:this.currentPage-1,
                                        s=this.onLastPage?this.totalPages:this.currentPage+1; this.options.firstLast&&e.appendChild(j(t, 1, this.options.firstText)), this.options.nextPrev&&!this.onFirstPage&&e.appendChild(j(t, n, this.options.prevText)); let i=this.links; this.options.truncatePager&&(i=(function(t, e, n, s, i) {
                                        let o,
                                            a=2*(s=s||2),
                                            r=e-s,
                                            l=e+s,
                                            d=[],
                                            c=[]; e<4-s+a?l=3+a:e>n-(3-s+a)&&(r=n-(2+a)); for (let u=1; u<=n; u++) if (1==u||u==n||u>=r&&u<=l) {
                                            const h=t[u-1]; h.classList.remove("active"), d.push(h)
                                        } return d.forEach((e => {
                                            const n=e.children[0].getAttribute("data-page"); if (o) {
                                                const s=o.children[0].getAttribute("data-page"); if (n-s==2)c.push(t[s]); else if (n-s!=1) {
                                                    const a=Y("li", {class: "ellipsis",
                                                        html: "<a href=\"#\">".concat(i, "</a>")}); c.push(a)
                                                }
                                            }c.push(e), o=e
                                        })), c
                                    }(this.links, this.currentPage, this.pages.length, this.options.pagerDelta, this.options.ellipsisText))), this.links[this.currentPage-1].classList.add("active"), i.forEach((t => {
                                        t.classList.remove("active"), e.appendChild(t)
                                    })), this.links[this.currentPage-1].classList.add("active"), this.options.nextPrev&&!this.onLastPage&&e.appendChild(j(t, s, this.options.nextText)), this.options.firstLast&&e.appendChild(j(t, this.totalPages, this.options.lastText)), this.pagers.forEach((t => {
                                        t.appendChild(e.cloneNode(!0))
                                    }))
                                }
                            }, e.prototype.renderSeparateHeader=function() {
                                const t=this.dom.parentElement; this.headerDOM||(this.headerDOM=document.createElement("div"), this.virtualHeaderDOM={nodeName: "DIV"}), t.parentElement.insertBefore(this.headerDOM, t); const e={nodeName: "DIV",
                                        attributes: {class: this.options.classes.headercontainer},
                                        childNodes: [
                                            {nodeName: "TABLE",
                                                attributes: {class: this.options.classes.table},
                                                childNodes: [
                                                    {nodeName: "THEAD",
                                                        childNodes: [A(this.data.headings, this.columns.settings, this.columns.widths, this.options, {unhideHeader: !0})]}
                                                ]}
                                        ]},
                                    n=this.dd.diff(this.virtualHeaderDOM, e); this.dd.apply(this.headerDOM, n), this.virtualHeaderDOM=e; const s=this.headerDOM.firstElementChild.clientWidth-this.dom.clientWidth; if (s) {
                                    const i=structuredClone(this.virtualHeaderDOM); i.attributes.style="padding-right: ".concat(s, "px;"); const o=this.dd.diff(this.virtualHeaderDOM, i); this.dd.apply(this.headerDOM, o), this.virtualHeaderDOM=i
                                }t.scrollHeight>t.clientHeight&&(t.style.overflowY="scroll")
                            }, e.prototype.bindEvents=function() {
                                const t=this; if (this.options.perPageSelect) {
                                    const e=this.wrapper.querySelector("select.".concat(this.options.classes.selector)); e&&e instanceof HTMLSelectElement&&e.addEventListener("change", (() => {
                                        t.options.perPage=parseInt(e.value, 10), t.update(), t.fixHeight(), t.emit("datatable.perpage", t.options.perPage)
                                    }), !1)
                                } this.options.searchable&&(this.input=this.wrapper.querySelector(".".concat(this.options.classes.input)), this.input&&this.input.addEventListener("keyup", (() => t.search(t.input.value)), !1)), this.wrapper.addEventListener("click", (e => {
                                    const n=e.target.closest("a"); if (n&&"a"===n.nodeName.toLowerCase()) if (n.hasAttribute("data-page"))t.page(parseInt(n.getAttribute("data-page"), 10)), e.preventDefault(); else if (t.options.sortable&&n.classList.contains(t.options.classes.sorter)&&"false"!=n.parentNode.getAttribute("data-sortable")) {
                                        const s=Array.from(n.parentNode.parentNode.children).indexOf(n.parentNode),
                                            i=B(s, t.columns.settings.columns); t.columns.sort(i), e.preventDefault()
                                    }
                                }), !1), this.options.rowNavigation?
                                    (this.dom.addEventListener("keydown", (e => {
                                        let n; if ("ArrowUp"===e.key)e.preventDefault(), e.stopPropagation(), t.pages[t.currentPage-1].find((e => e.index===t.rows.cursor||(n=e, !1))), n?t.rows.setCursor(n.index):t.onFirstPage||t.page(t.currentPage-1, !0); else if ("ArrowDown"===e.key) {
                                            let s; e.preventDefault(), e.stopPropagation(); const i=t.pages[t.currentPage-1].find((e => !!s||(e.index===t.rows.cursor&&(s=!0), !1))); i?t.rows.setCursor(i.index):t.onLastPage||t.page(t.currentPage+1)
                                        } else ["Enter", " "].includes(e.key)&&t.emit("datatable.selectrow", t.rows.cursor, e)
                                    })), this.dom.addEventListener("mousedown", (e => {
                                        if (t.dom.matches(":focus")) {
                                            const n=Array.from(t.dom.querySelectorAll("body tr")).find((t => t.contains(e.target))); n&&n instanceof HTMLElement&&t.emit("datatable.selectrow", parseInt(n.dataset.index, 10), e)
                                        }
                                    }))):
                                    this.dom.addEventListener("mousedown", (e => {
                                        const n=Array.from(t.dom.querySelectorAll("body tr")).find((t => t.contains(e.target))); n&&n instanceof HTMLElement&&t.emit("datatable.selectrow", parseInt(n.dataset.index, 10), e)
                                    })), window.addEventListener("resize", this.listeners.onResize)
                            }, e.prototype.onResize=function() {
                                this.rect=this.container.getBoundingClientRect(), this.rect.width&&(this.columns.measureWidths(), this.update())
                            }, e.prototype.destroy=function() {
                                this.options.destroyable&&(this.dom.innerHTML=this.initialInnerHTML, this.dom.classList.remove(this.options.classes.table), this.wrapper.parentNode&&this.wrapper.parentNode.replaceChild(this.dom, this.wrapper), this.initialized=!1, window.removeEventListener("resize", this.listeners.onResize))
                            }, e.prototype.update=function(t) {
                                void 0===t&&(t=!0), this.wrapper.classList.remove(this.options.classes.empty), this.paginate(), this.renderPage(t), this.links=[]; for (let e=this.pages.length; e--;) {
                                    const n=e+1; this.links[e]=j(0===e?"active":"", n, n)
                                } this.renderPager(), this.options.scrollY.length&&this.renderSeparateHeader(), this.emit("datatable.update")
                            }, e.prototype.paginate=function() {
                                let t=this,
                                    e=this.data.data.map(((t, e) => ({row: t,
                                        index: e}))); return this.searching&&(e=[], this.searchData.forEach((n => e.push({index: n,
                                    row: t.data.data[n]})))), this.filterStates.length&&this.filterStates.forEach((t => {
                                    e=e.filter((e => "function"==typeof t.state?t.state(e.row[t.column].data):e.row[t.column].data===t.state))
                                })), this.options.paging&&this.options.perPage>0?
                                    this.pages=e.map(((n, s) => s%t.options.perPage==0?e.slice(s, s+t.options.perPage):null)).filter((t => t)):
                                    this.pages=[e], this.totalPages=this.lastPage=this.pages.length, this.currentPage=1, this.totalPages
                            }, e.prototype.fixHeight=function() {
                                this.options.fixedHeight&&(this.container.style.height=null, this.rect=this.container.getBoundingClientRect(), this.container.style.height="".concat(this.rect.height, "px"))
                            }, e.prototype.search=function(t) {
                                const e=this; return !!this.hasRows&&(t=t.toLowerCase(), this.currentPage=1, this.searching=!0, this.searchData=[], t.length?
                                    (this.data.data.forEach(((n, s) => {
                                        const i=e.searchData.includes(s); t.split(" ").reduce(((t, s) => {
                                            for (var i=!1, o=null, a=null, r=0; r<n.length; r++) if (a=(o=n[r]).text||String(o.data), e.columns.visible(r)&&a.toLowerCase().includes(s)) {
                                                i=!0; break
                                            } return t&&i
                                        }), !0)&&!i&&e.searchData.push(s)
                                    })), this.wrapper.classList.add("search-results"), this.searchData.length?this.update():(this.wrapper.classList.remove("search-results"), this.setMessage(this.options.labels.noResults)), void this.emit("datatable.search", t, this.searchData)):
                                    (this.searching=!1, this.update(), this.emit("datatable.search", t, this.searchData), this.wrapper.classList.remove("search-results"), !1))
                            }, e.prototype.page=function(t, e) {
                                return void 0===e&&(e=!1), t!==this.currentPage&&(isNaN(t)||(this.currentPage=t), !(t>this.pages.length||t<0)&&(this.renderPage(void 0, e), this.renderPager(), void this.emit("datatable.page", t)))
                            }, e.prototype.insert=function(t) {
                                let e=this,
                                    n=[]; if (H(t))t.headings&&(this.hasHeadings||this.hasRows||(this.data=J(t, void 0, this.columns.settings), this.hasRows=Boolean(this.data.data.length), this.hasHeadings=Boolean(this.data.headings.length))), t.data&&Array.isArray(t.data)&&(n=t.data); else if (Array.isArray(t)) {
                                    const s=this.data.headings.map((t => t.data)); t.forEach((t => {
                                        const e=[]; Object.entries(t).forEach((t => {
                                            const n=t[0],
                                                i=t[1],
                                                o=s.indexOf(n); o>-1&&(e[o]=i)
                                        })), n.push(e)
                                    }))
                                }n.length&&(n.forEach((t => e.data.data.push(t.map(((t, n) => z(t, e.columns.settings.columns[n])))))), this.hasRows=!0), this.columns.settings.sort?this.columns.sort(this.columns.settings.sort.column, this.columns.settings.sort.dir, !0):this.update(!1), this.columns.measureWidths()
                            }, e.prototype.refresh=function() {
                                this.options.searchable&&(this.input.value="", this.searching=!1), this.currentPage=1, this.onFirstPage=!0, this.update(), this.emit("datatable.refresh")
                            }, e.prototype.print=function() {
                                const t=Y("table"),
                                    e=O(this.id, this.data.headings, this.data.data.map(((t, e) => ({row: t,
                                        index: e}))), this.columns.settings, this.columns.widths, !1, this.options, {noColumnWidths: !0,
                                        unhideHeader: !0}),
                                    n=this.dd.diff({nodeName: "TABLE"}, e); this.dd.apply(t, n); const s=window.open(); s.document.body.appendChild(t), s.print()
                            }, e.prototype.setMessage=function(t) {
                                let e,
                                    n=this,
                                    s=this.data.headings.filter(((t, e) => {
                                        let s; return !(null===(s=n.columns.settings.columns[e])||void 0===s?void 0:s.hidden)
                                    })),
                                    i=s.length||1; this.wrapper.classList.add(this.options.classes.empty), this.label&&(this.label.innerHTML=""), this.totalPages=0, this.renderPager(); let o=structuredClone(this.virtualDOM),
                                    a=null===(e=o.childNodes)||void 0===e?
                                        void 0:
                                        e.find((t => "TBODY"===t.nodeName)); a||(a={nodeName: "TBODY"}, o.childNodes=[a]), a.childNodes=[
                                    {nodeName: "TR",
                                        childNodes: [
                                            {nodeName: "TD",
                                                attributes: {class: this.options.classes.empty,
                                                    colspan: String(i)},
                                                childNodes: [
                                                    {nodeName: "#text",
                                                        data: t}
                                                ]}
                                        ]}
                                ]; const r=this.dd.diff(this.virtualDOM, o); this.dd.apply(this.dom, r), this.virtualDOM=o
                            }, e.prototype.on=function(t, e) {
                                this.events[t]=this.events[t]||[], this.events[t].push(e)
                            }, e.prototype.off=function(t, e) {
                                t in this.events!=!1&&this.events[t].splice(this.events[t].indexOf(e), 1)
                            }, e.prototype.emit=function(t) {
                                for (var e, n=[], s=1; s<arguments.length; s++)n[s-1]=arguments[s]; if (t in this.events!=!1) for (let i=0; i<this.events[t].length; i++)(e=this.events[t])[i].apply(e, n)
                            }, e
                        }()),
                        Q={classes: {row: "datatable-editor-row",
                            form: "datatable-editor-form",
                            item: "datatable-editor-item",
                            menu: "datatable-editor-menu",
                            save: "datatable-editor-save",
                            block: "datatable-editor-block",
                            close: "datatable-editor-close",
                            inner: "datatable-editor-inner",
                            input: "datatable-editor-input",
                            label: "datatable-editor-label",
                            modal: "datatable-editor-modal",
                            action: "datatable-editor-action",
                            header: "datatable-editor-header",
                            wrapper: "datatable-editor-wrapper",
                            editable: "datatable-editor-editable",
                            container: "datatable-editor-container",
                            separator: "datatable-editor-separator"},
                        labels: {editCell: "Edit Cell",
                            editRow: "Edit Row",
                            removeRow: "Remove Row",
                            reallyRemove: "Are you sure?"},
                        hiddenColumns: !1,
                        contextMenu: !0,
                        clickEvent: "dblclick",
                        excludeColumns: [],
                        menuItems: [
                            {text(t) {
                                return t.options.labels.editCell
                            },
                            action(t, e) {
                                const n=t.event.target.closest("td"); return t.editCell(n)
                            }}, {text(t) {
                                return t.options.labels.editRow
                            },
                            action(t, e) {
                                const n=t.event.target.closest("tr"); return t.editRow(n)
                            }}, {separator: !0}, {text(t) {
                                return t.options.labels.removeRow
                            },
                            action(t, e) {
                                if (confirm(t.options.labels.reallyRemove)) {
                                    const n=t.event.target.closest("tr"); t.removeRow(n)
                                }
                            }}
                        ]},
                        K=(function() {
                            function e(e, n) {
                                void 0===n&&(n={}), this.dt=e, this.options={...Q,
                                    ...n}
                            } return e.prototype.init=function() {
                                const t=this; this.initialized||(this.dt.wrapper.classList.add(this.options.classes.editable), this.options.contextMenu&&(this.container=Y("div", {id: this.options.classes.container}), this.wrapper=Y("div", {class: this.options.classes.wrapper}), this.menu=Y("ul", {class: this.options.classes.menu}), this.options.menuItems&&this.options.menuItems.length&&this.options.menuItems.forEach((e => {
                                    const n=Y("li", {class: e.separator?t.options.classes.separator:t.options.classes.item}); if (!e.separator) {
                                        const s=Y("a", {class: t.options.classes.action,
                                            href: e.url||"#",
                                            html: "function"==typeof e.text?e.text(t):e.text}); n.appendChild(s), e.action&&"function"==typeof e.action&&s.addEventListener("click", (n => {
                                            n.preventDefault(), e.action(t, n)
                                        }))
                                    }t.menu.appendChild(n)
                                })), this.wrapper.appendChild(this.menu), this.container.appendChild(this.wrapper), this.update()), this.data={}, this.closed=!0, this.editing=!1, this.editingRow=!1, this.editingCell=!1, this.bindEvents(), setTimeout((() => {
                                    t.initialized=!0, t.dt.emit("editable.init")
                                }), 10))
                            }, e.prototype.bindEvents=function() {
                                this.events={context: this.context.bind(this),
                                    update: this.update.bind(this),
                                    dismiss: this.dismiss.bind(this),
                                    keydown: this.keydown.bind(this),
                                    click: this.click.bind(this)}, this.dt.dom.addEventListener(this.options.clickEvent, this.events.click), document.addEventListener("click", this.events.dismiss), document.addEventListener("keydown", this.events.keydown), this.options.contextMenu&&(this.dt.dom.addEventListener("contextmenu", this.events.context), this.events.reset=(function(t, e) {
                                    let n,
                                        s=this; return void 0===e&&(e=300), function() {
                                        for (var i=[], o=0; o<arguments.length; o++)i[o]=arguments[o]; clearTimeout(n), n=setTimeout((() => {
                                            t.apply(s, i)
                                        }), e)
                                    }
                                }(this.events.update, 50)), window.addEventListener("resize", this.events.reset), window.addEventListener("scroll", this.events.reset))
                            }, e.prototype.context=function(t) {
                                this.event=t; const e=t.target.closest("tbody td"); if (this.options.contextMenu&&!this.disabled&&e) {
                                    t.preventDefault(); let n=t.pageX,
                                        s=t.pageY; n>this.limits.x&&(n-=this.rect.width), s>this.limits.y&&(s-=this.rect.height), this.wrapper.style.top="".concat(s, "px"), this.wrapper.style.left="".concat(n, "px"), this.openMenu(), this.update()
                                }
                            }, e.prototype.click=function(t) {
                                if (this.editing&&this.data&&this.editingCell) this.saveCell(this.data.input.value); else if (!this.editing) {
                                    const e=t.target.closest("tbody td"); e&&(this.editCell(e), t.preventDefault())
                                }
                            }, e.prototype.keydown=function(t) {
                                this.modal?
                                    "Escape"===t.key?
                                        this.closeModal():
                                        "Enter"===t.key&&this.saveRow(this.data.inputs.map((t => t.value.trim())), this.data.row):
                                    this.editing&&this.data&&("Enter"===t.key?
                                        this.editingCell?
                                            this.saveCell(this.data.input.value):
                                            this.editingRow&&this.saveRow(this.data.inputs.map((t => t.value.trim())), this.data.row):
                                        "Escape"===t.key&&this.saveCell(this.data.content))
                            }, e.prototype.editCell=function(t) {
                                const e=this,
                                    n=B(t.cellIndex, this.dt.columns.settings.columns); if (this.options.excludeColumns.includes(n)) this.closeMenu(); else {
                                    const s=parseInt(t.parentNode.dataset.index, 10),
                                        i=this.dt.data.data[s][n]; this.data={cell: i,
                                        rowIndex: s,
                                        columnIndex: n,
                                        content: i.text||String(i.data)}; const o=this.dt.data.headings[n].text||String(this.dt.data.headings[n].data),
                                        a=["<div class='".concat(this.options.classes.inner, "'>"), "<div class='".concat(this.options.classes.header, "'>"), "<h4>Editing cell</h4>", "<button class='".concat(this.options.classes.close, "' type='button' data-editor-close>×</button>"), " </div>", "<div class='".concat(this.options.classes.block, "'>"), "<form class='".concat(this.options.classes.form, "'>"), "<div class='".concat(this.options.classes.row, "'>"), "<label class='".concat(this.options.classes.label, "'>").concat(q(o), "</label>"), "<input class='".concat(this.options.classes.input, "' value='").concat(q(i.text||String(i.data)||""), "' type='text'>"), "</div>", "<div class='".concat(this.options.classes.row, "'>"), "<button class='".concat(this.options.classes.save, "' type='button' data-editor-save>Save</button>"), "</div>", "</form>", "</div>", "</div>"].join(""),
                                        r=Y("div", {class: this.options.classes.modal,
                                            html: a}); this.modal=r, this.openModal(), this.editing=!0, this.editingCell=!0, this.data.input=r.querySelector("input[type=text]"), this.data.input.focus(), this.data.input.selectionStart=this.data.input.selectionEnd=this.data.input.value.length, r.addEventListener("click", (t => {
                                        t.target.hasAttribute("data-editor-close")?e.closeModal():t.target.hasAttribute("data-editor-save")&&e.saveCell(e.data.input.value)
                                    })), this.closeMenu()
                                }
                            }, e.prototype.saveCell=function(t) {
                                const e=this.data.content; this.dt.data.data[this.data.rowIndex][this.data.columnIndex]={data: t.trim()}, this.closeModal(), this.dt.columns.measureWidths(), this.dt.update(), this.dt.emit("editable.save.cell", t, e, this.data.rowIndex, this.data.columnIndex), this.data={}
                            }, e.prototype.editRow=function(t) {
                                let e,
                                    n=this; if (t&&"TR"===t.nodeName&&!this.editing) {
                                    const s=parseInt(t.dataset.index, 10),
                                        i=this.dt.data.data[s],
                                        o=["<div class='".concat(this.options.classes.inner, "'>"), "<div class='".concat(this.options.classes.header, "'>"), "<h4>Editing row</h4>", "<button class='".concat(this.options.classes.close, "' type='button' data-editor-close>×</button>"), " </div>", "<div class='".concat(this.options.classes.block, "'>"), "<form class='".concat(this.options.classes.form, "'>"), "<div class='".concat(this.options.classes.row, "'>"), "<button class='".concat(this.options.classes.save, "' type='button' data-editor-save>Save</button>"), "</div>", "</form>", "</div>", "</div>"].join(""),
                                        a=Y("div", {class: this.options.classes.modal,
                                            html: o}),
                                        r=a.firstElementChild; if (r) {
                                        const l=null===(e=r.lastElementChild)||void 0===e?void 0:e.firstElementChild; if (l) {
                                            i.forEach(((t, e) => {
                                                const s=n.dt.columns.settings.columns[e]||{}; if ((!s.hidden||s.hidden&&n.options.hiddenColumns)&&!n.options.excludeColumns.includes(e)) {
                                                    const i=n.dt.data.headings[e].text||String(n.dt.data.headings[e].data); l.insertBefore(Y("div", {class: n.options.classes.row,
                                                        html: ["<div class='".concat(n.options.classes.row, "'>"), "<label class='".concat(n.options.classes.label, "'>").concat(q(i), "</label>"), "<input class='".concat(n.options.classes.input, "' value='").concat(q(t.text||String(t.data)||""), "' type='text'>"), "</div>"].join("")}), l.lastElementChild)
                                                }
                                            })), this.modal=a, this.openModal(); const d=Array.from(l.querySelectorAll("input[type=text]")); d.pop(), this.data={row: i,
                                                inputs: d,
                                                dataIndex: s}, this.editing=!0, this.editingRow=!0, a.addEventListener("click", (t => {
                                                t.target.hasAttribute("data-editor-close")?
                                                    n.closeModal():
                                                    t.target.hasAttribute("data-editor-save")&&n.saveRow(n.data.inputs.map((t => t.value.trim())), n.data.row)
                                            })), this.closeMenu()
                                        }
                                    }
                                }
                            }, e.prototype.saveRow=function(t, e) {
                                const n=e.map((t => t.text||String(t.data))); this.dt.rows.updateRow(this.data.dataIndex, t), this.data={}, this.closeModal(), this.dt.emit("editable.save.row", t, n, e)
                            }, e.prototype.openModal=function() {
                                !this.editing&&this.modal&&document.body.appendChild(this.modal)
                            }, e.prototype.closeModal=function() {
                                this.editing&&this.modal&&(document.body.removeChild(this.modal), this.modal=this.editing=this.editingRow=this.editingCell=!1)
                            }, e.prototype.removeRow=function(t) {
                                if (t&&"TR"===t.nodeName&&!this.editing) {
                                    const e=parseInt(t.dataset.index, 10); this.dt.rows.remove(e), this.closeMenu()
                                }
                            }, e.prototype.update=function() {
                                const t=window.scrollX||window.pageXOffset,
                                    e=window.scrollY||window.pageYOffset; this.rect=this.wrapper.getBoundingClientRect(), this.limits={x: window.innerWidth+t-this.rect.width,
                                    y: window.innerHeight+e-this.rect.height}
                            }, e.prototype.dismiss=function(t) {
                                let e=!0; this.options.contextMenu&&(e=!this.wrapper.contains(t.target), this.editing&&(e=!this.wrapper.contains(t.target)&&t.target!==this.data.input)), e&&(this.editingCell&&this.saveCell(this.data.content), this.closeMenu())
                            }, e.prototype.openMenu=function() {
                                this.editing&&this.data&&this.editingCell&&this.saveCell(this.data.input.value), this.options.contextMenu&&(document.body.appendChild(this.container), this.closed=!1, this.dt.emit("editable.context.open"))
                            }, e.prototype.closeMenu=function() {
                                this.options.contextMenu&&!this.closed&&(this.closed=!0, document.body.removeChild(this.container), this.dt.emit("editable.context.close"))
                            }, e.prototype.destroy=function() {
                                this.dt.dom.removeEventListener(this.options.clickEvent, this.events.click), this.dt.dom.removeEventListener("contextmenu", this.events.context), document.removeEventListener("click", this.events.dismiss), document.removeEventListener("keydown", this.events.keydown), window.removeEventListener("resize", this.events.reset), window.removeEventListener("scroll", this.events.reset), document.body.contains(this.container)&&document.body.removeChild(this.container), this.initialized=!1
                            }, e
                        }()); exports.DataTable=G, exports.convertCSV=function(e) {
                        let n; if (!H(e)) return !1; const s={lineDelimiter: "\n",
                            columnDelimiter: ",",
                            removeDoubleQuotes: !1,
                            ...e}; if (s.data.length) {
                            n={data: []}; const i=s.data.split(s.lineDelimiter); if (i.length&&(s.headings&&(n.headings=i[0].split(s.columnDelimiter), s.removeDoubleQuotes&&(n.headings=n.headings.map((t => t.trim().replace(/(^"|"$)/g, "")))), i.shift()), i.forEach(((t, e) => {
                                n.data[e]=[]; const i=t.split(s.columnDelimiter); i.length&&i.forEach((t => {
                                    s.removeDoubleQuotes&&(t=t.trim().replace(/(^"|"$)/g, "")), n.data[e].push({data: t})
                                }))
                            }))), n) return n
                        } return !1
                    }, exports.convertJSON=function(e) {
                        let n; if (!H(e)) return !1; const s={data: "",
                            ...e}; if (s.data.length||H(s.data)) {
                            const i=!!R(s.data)&&JSON.parse(s.data); if (i?
                                (n={headings: [],
                                    data: []}, i.forEach(((t, e) => {
                                    n.data[e]=[], Object.entries(t).forEach((t => {
                                        const s=t[0],
                                            i=t[1]; n.headings.includes(s)||n.headings.push(s), (null==i?void 0:i.constructor)==Object?n.data[e].push(i):n.data[e].push({data: i})
                                    }))
                                }))):
                                console.warn("That's not valid JSON!"), n) return n
                        } return !1
                    }, exports.createElement=Y, exports.exportCSV=function(e, n) {
                        if (void 0===n&&(n={}), !e.hasHeadings&&!e.hasRows) return !1; if (!H(n)) return !1; let s={download: !0,
                                skipColumn: [],
                                lineDelimiter: "\n",
                                columnDelimiter: ",",
                                ...n},
                            i=function(t) {
                                let n; return !s.skipColumn.includes(t)&&!(null===(n=e.columns.settings.columns[t])||void 0===n?void 0:n.hidden)
                            },
                            o=[],
                            a=e.data.headings.filter(((t, e) => i(e))).map((t => {
                                let e; return null!==(e=t.text)&&void 0!==e?e:t.data
                            })); if (o[0]=a, s.selection) if (Array.isArray(s.selection)) for (let r=0; r<s.selection.length; r++)o=o.concat(e.pages[s.selection[r]-1].map((t => t.row.filter(((t, e) => i(e))).map((t => {
                            let e; return null!==(e=t.text)&&void 0!==e?e:t.data
                        }))))); else o=o.concat(e.pages[s.selection-1].map((t => t.row.filter(((t, e) => i(e))).map((t => {
                            let e; return null!==(e=t.text)&&void 0!==e?e:t.data
                        }))))); else o=o.concat(e.data.data.map((t => t.filter(((t, e) => i(e))).map((t => {
                            let e; return null!==(e=t.text)&&void 0!==e?e:t.data
                        }))))); if (o.length) {
                            let l=""; if (o.forEach((t => {
                                t.forEach((t => {
                                    "string"==typeof t&&(t=(t=(t=(t=(t=t.trim()).replace(/\s{2,}/g, " ")).replace(/\n/g, "  ")).replace(/"/g, "\"\"")).replace(/#/g, "%23")).includes(",")&&(t="\"".concat(t, "\"")), l+=t+s.columnDelimiter
                                })), l=l.trim().substring(0, l.length-1), l+=s.lineDelimiter
                            })), l=l.trim().substring(0, l.length-1), s.download) {
                                const d=document.createElement("a"); d.href=encodeURI("data:text/csv;charset=utf-8,".concat(l)), d.download="".concat(s.filename||"datatable_export", ".csv"), document.body.appendChild(d), d.click(), document.body.removeChild(d)
                            } return l
                        } return !1
                    }, exports.exportJSON=function(e, n) {
                        if (void 0===n&&(n={}), !e.hasHeadings&&!e.hasRows) return !1; if (!H(n)) return !1; let s={download: !0,
                                skipColumn: [],
                                replacer: null,
                                space: 4,
                                ...n},
                            i=function(t) {
                                let n; return !s.skipColumn.includes(t)&&!(null===(n=e.columns.settings.columns[t])||void 0===n?void 0:n.hidden)
                            },
                            o=[]; if (s.selection) if (Array.isArray(s.selection)) for (let a=0; a<s.selection.length; a++)o=o.concat(e.pages[s.selection[a]-1].map((t => t.row.filter(((t, e) => i(e))).map((t => "node"===t.type?t:t.data))))); else o=o.concat(e.pages[s.selection-1].map((t => t.row.filter(((t, e) => i(e))).map((t => "node"===t.type?t:t.data))))); else o=o.concat(e.data.data.map((t => t.filter(((t, e) => i(e))).map((t => "node"===t.type?t:t.data))))); const r=e.data.headings.filter(((t, e) => i(e))).map((t => t.data)); if (o.length) {
                            const l=[]; o.forEach(((t, e) => {
                                l[e]=l[e]||{}, t.forEach(((t, n) => {
                                    l[e][r[n]]=t
                                }))
                            })); const d=JSON.stringify(l, s.replacer, s.space); if (s.download) {
                                const c=new Blob([d], {type: "data:application/json;charset=utf-8"}),
                                    u=URL.createObjectURL(c),
                                    h=document.createElement("a"); h.href=u, h.download="".concat(s.filename||"datatable_export", ".json"), document.body.appendChild(h), h.click(), document.body.removeChild(h), URL.revokeObjectURL(u)
                            } return d
                        } return !1
                    }, exports.exportSQL=function(e, n) {
                        if (void 0===n&&(n={}), !e.hasHeadings&&!e.hasRows) return !1; if (!H(n)) return !1; let s={download: !0,
                                skipColumn: [],
                                tableName: "myTable",
                                ...n},
                            i=function(t) {
                                let n; return !s.skipColumn.includes(t)&&!(null===(n=e.columns.settings.columns[t])||void 0===n?void 0:n.hidden)
                            },
                            o=[]; if (s.selection) if (Array.isArray(s.selection)) for (let a=0; a<s.selection.length; a++)o=o.concat(e.pages[s.selection[a]-1].map((t => t.row.filter(((t, e) => i(e))).map((t => {
                            let e; return null!==(e=t.text)&&void 0!==e?e:t.data
                        }))))); else o=o.concat(e.pages[s.selection-1].map((t => t.row.filter(((t, e) => i(e))).map((t => {
                            let e; return null!==(e=t.text)&&void 0!==e?e:t.data
                        }))))); else o=o.concat(e.data.data.map((t => t.filter(((t, e) => i(e))).map((t => {
                            let e; return null!==(e=t.text)&&void 0!==e?e:t.data
                        }))))); const r=e.data.headings.filter(((t, e) => i(e))).map((t => {
                            let e; return null!==(e=t.text)&&void 0!==e?e:t.data
                        })); if (o.length) {
                            let l="INSERT INTO `".concat(s.tableName, "` ("); if (r.forEach((t => {
                                l+="`".concat(t, "`,")
                            })), l=l.trim().substring(0, l.length-1), l+=") VALUES ", o.forEach((t => {
                                l+="(", t.forEach((t => {
                                    l+="string"==typeof t?"\"".concat(t, "\","):"".concat(t, ",")
                                })), l=l.trim().substring(0, l.length-1), l+="),"
                            })), l=l.trim().substring(0, l.length-1), l+=";", s.download&&(l="data:application/sql;charset=utf-8,".concat(l)), s.download) {
                                const d=document.createElement("a"); d.href=encodeURI(l), d.download="".concat(s.filename||"datatable_export", ".sql"), document.body.appendChild(d), d.click(), document.body.removeChild(d)
                            } return l
                        } return !1
                    }, exports.exportTXT=function(e, n) {
                        if (void 0===n&&(n={}), !e.hasHeadings&&!e.hasRows) return !1; if (!H(n)) return !1; let s={download: !0,
                                skipColumn: [],
                                lineDelimiter: "\n",
                                columnDelimiter: ",",
                                ...n},
                            i=function(t) {
                                let n; return !s.skipColumn.includes(t)&&!(null===(n=e.columns.settings.columns[t])||void 0===n?void 0:n.hidden)
                            },
                            o=[],
                            a=e.data.headings.filter(((t, e) => i(e))).map((t => {
                                let e; return null!==(e=t.text)&&void 0!==e?e:t.data
                            })); if (o[0]=a, s.selection) if (Array.isArray(s.selection)) for (let r=0; r<s.selection.length; r++)o=o.concat(e.pages[s.selection[r]-1].map((t => t.row.filter(((t, e) => i(e))).map((t => {
                            let e; return null!==(e=t.text)&&void 0!==e?e:t.data
                        }))))); else o=o.concat(e.pages[s.selection-1].map((t => t.row.filter(((t, e) => i(e))).map((t => {
                            let e; return null!==(e=t.text)&&void 0!==e?e:t.data
                        }))))); else o=o.concat(e.data.data.map((t => t.filter(((t, e) => i(e))).map((t => {
                            let e; return null!==(e=t.text)&&void 0!==e?e:t.data
                        }))))); if (o.length) {
                            let l=""; if (o.forEach((t => {
                                t.forEach((t => {
                                    "string"==typeof t&&(t=(t=(t=(t=(t=t.trim()).replace(/\s{2,}/g, " ")).replace(/\n/g, "  ")).replace(/"/g, "\"\"")).replace(/#/g, "%23")).includes(",")&&(t="\"".concat(t, "\"")), l+=t+s.columnDelimiter
                                })), l=l.trim().substring(0, l.length-1), l+=s.lineDelimiter
                            })), l=l.trim().substring(0, l.length-1), s.download&&(l="data:text/csv;charset=utf-8,".concat(l)), s.download) {
                                const d=document.createElement("a"); d.href=encodeURI(l), d.download="".concat(s.filename||"datatable_export", ".txt"), document.body.appendChild(d), d.click(), document.body.removeChild(d)
                            } return l
                        } return !1
                    }, exports.isJson=R, exports.isObject=H, exports.makeEditable=function(t, e) {
                        void 0===e&&(e={}); const n=new K(t, e); return t.initialized?
                            n.init():
                            t.on("datatable.init", (() => n.init())), n
                    }


                }).call(this)
            }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
        }, {}
    ]}, {}, [1])(1)
}))
