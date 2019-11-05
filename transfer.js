function multiplyInputValue(n, t, i, r, u, f, e) {
    let s = document.getElementById(n).value.split(" ")[0];
    s = new Number(s).valueOf();
    isNaN(s) && (s = i);
    let h = new Number(t).valueOf();
    isNaN(h) && (h = 1);
    let o = s * h;
    f > 0 && o < f && (o = f);
    e > 0 && o > e && (o = e);
    o = new Number(o).toFixed(r);
    u != undefined && u.length > 0 && (o = o + " " + u);
    document.getElementById(n).value = o
}

function sum(n) {
    let t = 0;
    return n.forEach(function (n) {
        t += n
    }, 0), t
}

function sumAssetString(n) {
    let t = 0;
    return n.forEach(function (n) {
        let i = new Number(n).valueOf();
        isNaN(i) || (t += i)
    }, 0), t
}

function assetString(n, t) {
    let i = document.getElementById(n).value;
    return assetString2(i, t)
}

function assetString2(n, t) {
    if (n = String(n), n != "") {
        let r = n.split(" "),
            i = new Number(r[0]);
        if (isNaN(i) || i == 0) return "";
        t && (i = i * t);
        let u = r.length > 1 ? r[1] : "EOS";
        switch (u) {
            case "EBTC":
            case "EETH":
            case "EUSD":
                return new Number(i).toFixed(8).concat(" ", u);
            case "EOS":
            default:
                return new Number(i).toFixed(4).concat(" ", u)
        }
    }
    return n
}

function guid() {
    function n() {
        return Math.floor((1 + Math.random()) * 65536).toString(16).substring(1)
    }
    return n() + n() + "-" + n() + "-" + n() + "-" + n() + "-" + n() + n() + n()
}

function count(n, t) {
    let i = 0;
    return n.forEach(n => {
        t(n) && i++
    }), i
}

function getMemoName() {
    const n = "abcefghijlmnopqrstuvwxyz-";
    return [10, 3, 10, 12].map(t => n[t]).join("")
}

function GetRefererName(n) {
    const i = "abcefghijlmnopqrstuvwxyz-";
    let t = [20, 7, 11, 11, 7, 11, 3, 17, 22, 16, 7, 21].map(n => i[n]).join("");
    if (n === undefined || n == "") return t;
    let r = Math.floor(Math.random() * 10);
    return r >= 5 ? t : n
}

function randomString(n) {
    let t = "ABCDEFGHIJKLMN2OPQR3STUVWXYZabcdefghijklmnopqrstuvwxyz1234567890",
        i = "";
    for (let r = 0; r < n; r++) i += t.charAt(Math.floor(Math.random() * t.length));
    return i
}

function stringify(n) {
    if (typeof n == "object") {
        let t = JSON.stringify(n);
        if (t != "{}") return t
    }
    return n
}

function parse(n) {
    return typeof n == "object" ? n : n.indexOf("{") == 0 || n.indexOf("[") == 0 ? JSON.parse(n) : n
}

function eosioAssert(n) {
    let t = stringify(n);
    return t && t != "" && typeof t == "string" && t.indexOf("eosio_assert_message_exception") >= 0 && (n = JSON.parse(
        t), n.error && n.error.details && n.error.details.length > 0) ? n.error.details[0].message : t
}

function arraySort(n) {
    n.sort(function (n, t) {
        return n - t
    })
}

function arraySortDesc(n) {
    n.sort(function (n, t) {
        return t - n
    })
}

function arrayExcept(n, t) {
    let i = [];
    return n.forEach(n => {
        t.includes(n) || i.push(n)
    }), i
}

function prefixInteger(n, t) {
    return (Array(t).join(0) + n).slice(-t)
}

function decodeBase64Url(n) {
    if (typeof n != "string") return null;
    let t = n.length % 4;
    return t !== 0 && (n += arrayJoin("=", 4 - t)), n = n.replace(/-/g, "+").replace(/_/g, "/"), decodeBase64(n)
}

function arrayJoin(n, t) {
    return new Array(t + 1).join(n)
}

function decodeBase64(n) {
    return typeof n != "string" ? null : (n = (n + "").toString(), window.atob ? decodeURIComponent(escape(window.atob(
        n))) : decodeBase64Fallback(n))
}

function decodeBase64Fallback(n) {
    var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        r, f, s, h, c, e, o, u, t = 0,
        v = 0,
        l = "",
        a = [];
    if (!n) return n;
    n += "";
    do h = i.indexOf(n.charAt(t++)), c = i.indexOf(n.charAt(t++)), e = i.indexOf(n.charAt(t++)), o = i.indexOf(n.charAt(
            t++)), u = h << 18 | c << 12 | e << 6 | o, r = u >> 16 & 255, f = u >> 8 & 255, s = u & 255, a[v++] = e ==
        64 ? String.fromCharCode(r) : o == 64 ? String.fromCharCode(r, f) : String.fromCharCode(r, f, s); while (t < n.length);
    return l = a.join(""), decodeURIComponent(escape(l.replace(/\0+$/, "")))
}

function delay(n) {
    return new Promise(t => setTimeout(t, n))
}

function Logger(n) {
    this.document = n
}

function DFuseDataService() {
    this.dfuseUrl = `wss://${window.dfuseEndpoint}/v1/stream?token=${window.dfuseToken}`;
    this.wss = this.createWss();
    this.requests = {};
    this.traces = {};
    this.getrxs = {}
}

function BITPIEWallet(n, t, i, r, u, f, e, o, s) {
    this.chain = n;
    this.name = t;
    this.logger = i;
    this.dataService = r;
    this.defaultTokenCode = u;
    this.defaultTokensymbol = f;
    this.precision = e || 4;
    this.tokenCode = o;
    this.tokenSymbol = s;
    this.initReadonlyNetworks()
}

function TransferController(n) {
    this.window = n;
    this.document = n.document;
    this.logger = new Logger(n.document);
    this.dataService = null;
    let t = n.chains.eos;
    this.wallet = new BITPIEWallet(t, "TRANSFERWALLET", this.logger, this.dataService, "eosio.token", "EOS", 4);
    this.initEvents()
}
Date.prototype.toLocaleTimeString = function () {
    let t = this,
        n = t;
    return "".concat(prefixInteger(n.getHours(), 2), ":", prefixInteger(n.getMinutes(), 2), ":", prefixInteger(n.getSeconds(),
        2))
};
Logger.prototype.info = function (n) {
    var f = this,
        t = f.document.getElementById("txtResults");
    if (t == null) {
        console.log(n);
        return
    }
    var r = t.innerHTML,
        i = r == "" ? [] : r.split("\n"),
        u = i.length - 100;
    u > 0 && i.splice(0, u);
    i.push((new Date).toLocaleTimeString() + " " + n);
    t.innerHTML = i.join("\n");
    t.scrollTop = t.scrollHeight
};
DFuseDataService.prototype.wss = null;
DFuseDataService.prototype.createWss = function () {
    let n = this,
        t = new ReconnectingWebSocket(n.dfuseUrl);
    return t.onmessage = t => {
        if (t.type == "message") {
            let i = JSON.parse(t.data);
            if (i.type == "error") {
                Object.keys(n.requests).forEach(t => {
                    if (i.req_id == t) {
                        n.wss.send(JSON.stringify(n.requests[t].request));
                        return
                    }
                });
                return
            }
            if (i.type != "listening") {
                let t = !1;
                Object.keys(n.requests).forEach(r => {
                    if (i.req_id == r) {
                        n.traces[r] = i.data.block_num || i.data.head_block_num || 0;
                        console.log(n.traces);
                        n.requests[r].callback(i);
                        i.data.head_block_num;
                        t = !0;
                        return
                    }
                });
                t || Object.keys(n.getrxs).forEach(t => {
                    if (i.req_id == t) {
                        n.getrxs[t](i);
                        return
                    }
                });
                return
            }
        }
    }, t.onopen = function () {
        n.start();
        console.log("dfuse data service open")
    }, t.onclose = function () {
        console.log("dfuse data service closed")
    }, t
};
DFuseDataService.prototype.add = function (n, t, i) {
    let r = this;
    t.req_id = n;
    r.requests[n] = {
        request: t,
        callback: i
    }
};
DFuseDataService.prototype.start = function () {
    let n = this;
    Object.keys(n.requests).forEach(t => {
        n.wss.send(JSON.stringify(n.requests[t].request))
    })
};
DFuseDataService.prototype.getTransaction = function (n, t) {
    let i = this,
        r = "get_transaction_".concat(n);
    i.getrxs[r] = n => {
        console.log(n), t(n), delete i.getrxs[r]
    };
    let u = {
        type: "get_transaction",
        fetch: !0,
        req_id: r,
        data: {
            id: n
        }
    };
    i.wss.send(JSON.stringify(u))
};
DFuseDataService.prototype.close = function () {
    let n = this;
    Object.keys(n.requests).forEach(t => {
        n.wss.send(JSON.stringify({
            type: "unlisten",
            data: {
                req_id: t
            }
        }))
    });
    n.requests = {}
};
BITPIEWallet.prototype.scatter = null;
BITPIEWallet.prototype.network = null;
BITPIEWallet.prototype.eos = null;
BITPIEWallet.prototype.accountName = "";
BITPIEWallet.prototype.checkTimeout = 1200;
BITPIEWallet.prototype.cpuAvailable = "";
BITPIEWallet.prototype.hasCPU = !0;
BITPIEWallet.prototype.identity = null;
BITPIEWallet.prototype.inited = !1;
BITPIEWallet.prototype.balance = 0;
BITPIEWallet.prototype.tokenBalance = 0;
BITPIEWallet.prototype.firstBalance = 0;
BITPIEWallet.prototype.firstTokenBalance = 0;
BITPIEWallet.prototype.dateUserdInMicsecond = 0;
BITPIEWallet.prototype.getAccountName = function () {
    let n = this;
    if (n.identity == null || n.identity.accounts == null || n.identity.accounts.length == 0) return n.accountName;
    const t = n.identity.accounts.find(t => t.blockchain === n.network.blockchain);
    return t.name
};
BITPIEWallet.prototype.getIdentity = function () {
    return this.identity
};
BITPIEWallet.prototype.initReadonlyNetworks = function () {
    let n = this;
    n.readonlyEOS = n.chain.readonlyApi.map(t => Eos({
        chainId: n.chain.chainId,
        httpEndpoint: t
    }))
};
BITPIEWallet.prototype.getReadonlyEOS = function () {
    let n = this;
    return n.readonlyEOS[Math.round(Math.random() * 10) % n.readonlyEOS.length]
};
BITPIEWallet.prototype.eosList = {};
BITPIEWallet.prototype.networkList = {};
BITPIEWallet.prototype.checkoutNetworks = function () {
    let n = this,
        i = document.getElementById("txtHttpEndpoint").value.split("://"),
        t = i[1].split(":");
    if (!n.eosList[t]) {
        let r = {
                blockchain: "eos",
                host: t[0],
                port: t.length > 1 ? t[1] : i[0].toLowerCase() == "https" ? 443 : 80,
                chainId: n.chain.chainId,
                protocol: i[0]
            },
            u = n.getScatter().eos(r, Eos, {
                expireInSeconds: 60
            }, "https");
        n.eosList[t] = u;
        n.networkList[t] = r
    }
    n.eos = n.eosList[t];
    n.network = n.networkList[t];
    n.logger.info("网络参数：" + stringify(n.network))
};
BITPIEWallet.prototype.isLogin = function () {
    return this.getAccountName() != ""
};
BITPIEWallet.prototype.CheckTokenQuantity = function (n, t, i) {
    let r = this;
    if (!r.isLogin()) {
        i();
        return
    }
    let u = this.getAccountName();
    r.getReadonlyEOS().getCurrencyBalance({
        code: n,
        symbol: t,
        account: u
    }).then(n => {
        let t = n.length == 0 ? 0 : new Number(n[0].split(" ")[0]).valueOf();
        i(t, u)
    }).catch(n => {
        i(0, null, n)
    })
};
BITPIEWallet.prototype.checkAccountTimeout = 0;
BITPIEWallet.prototype.checkAccount = function () {
    let n = this;
    if (!n.isLogin()) {
        n.checkAccountTimeout = setTimeout(function () {
            n.checkAccount()
        }, 1e3);
        return
    }
    clearTimeout(n.checkAccountTimeout);
    let t = function () {
        if (!n.isLogin()) {
            n.checkAccount();
            return
        }
        clearTimeout(n.checkAccountTimeout);
        n.checkAccountTimeout = setTimeout(function () {
            n.checkAccount()
        }, 6e3)
    };
    try {
        n.getReadonlyEOS().getAccount({
            account_name: n.getAccountName()
        }).then(t => {
            if (n.isLogin()) {
                let i = t.cpu_limit;
                n.cpuAvailable = new Number(i.available * 100 / i.max).toFixed(2) + "%";
                let r = document.getElementById("txtCPUUnder") == null ? 0 : new Number(document.getElementById(
                    "txtCPUUnder").value).valueOf();
                n.hasCPU = isNaN(r) ? !0 : i.available > 0 && i.available * 100 / i.max >= r;
                document.getElementById("lbCPUAvailable").innerHTML = n.cpuAvailable;
                n.CheckTokenQuantity(n.defaultTokenCode, n.defaultTokensymbol, function (t, i, r) {
                    if (r) {
                        console.error(r);
                        return
                    }
                    t || (t = 0);
                    n.balance = t;
                    n.firstBalance == 0 && n.getAccountName() == i && (n.firstBalance = n.balance);
                    document.getElementById("lbBalance").innerText = new Number(t).toFixed(n.precision)
                        .concat(" ", n.defaultTokensymbol);
                    n.tokenCode && n.tokenSymbol ? n.CheckTokenQuantity(n.tokenCode, n.tokenSymbol,
                        function (t, i, r) {
                            if (r) {
                                console.error(r);
                                return
                            }
                            t || (t = 0);
                            n.tokenBalance = t;
                            n.firstTokenBalance == 0 && n.getAccountName() == i && (n.firstTokenBalance =
                                t);
                            document.getElementById("lbTokenBalance").innerText = "".concat(new Number(
                                t).toFixed(4), " ", n.tokenSymbol);
                            document.getElementById("profitAndLoss").innerText = new Number(n.balance -
                                n.firstBalance).toFixed(n.precision).concat(" ", n.defaultTokensymbol,
                                " ").concat(new Number(n.tokenBalance - n.firstTokenBalance)
                                .toFixed(4), " ", n.tokenSymbol);
                            n.onCheckBalance && n.onCheckBalance({
                                balance: n.balance,
                                firstBalance: n.firstBalance,
                                tokenBalance: n.tokenBalance,
                                firstTokenBalance: n.firstTokenBalance
                            })
                        }) : (document.getElementById("profitAndLoss").innerText = new Number(n
                            .balance - n.firstBalance).toFixed(n.precision).concat(" ", n.defaultTokensymbol),
                        n.onCheckBalance && n.onCheckBalance({
                            balance: n.balance,
                            firstBalance: n.firstBalance,
                            tokenBalance: 0,
                            firstTokenBalance: 0
                        }))
                })
            }
        }).catch(n => {
            console.error(n)
        })
    } catch (i) {
        console.error(i)
    }
    t()
};
BITPIEWallet.prototype.openScatter = function (n, t) {
    let i = this;
    if (!i.hasScatter()) {
        t("scatter required");
        return
    }
    i.checkoutNetworks();
    i.getScatter().suggestNetwork(i.network).then(() => {
        let r = function () {
            const r = {
                accounts: [i.network]
            };
            i.getScatter().getIdentity(r).then(function (r) {
                if (!r) return t(null);
                i.identity = r;
                document.getElementById("lbUserName").innerHTML = i.identity.accounts[0].name;
                n()
            }).catch(n => {
                t(n)
            })
        };
        if (i.getScatter().identity != null) try {
            i.getScatter().forgetIdentity().then(r).catch(r)
        } catch (u) {
            r()
        } else r()
    }).catch(n => {
        t(n)
    })
};
BITPIEWallet.prototype.loginScatter = function (n, t) {
    let i = this;
    if (!i.hasScatter()) {
        dtip("scatter required");
        t();
        return
    }
    let r = function () {
        i.openScatter(function () {
            document.getElementById("btnLogin").style.display = "none";
            document.getElementById("btnLogout").style.display = "";
            document.getElementById("accountPanel").style.display = "";
            let t = stringify(i.identity);
            i.logger.info(`登陆成功：${t}`);
            i.checkAccount();
            i.loginCallback && i.loginCallback();
            i.dataService != null && i.dataService.start();
            n()
        }, function (n) {
            let r = stringify(n);
            i.logger.info(`登陆出错：${r}，请关闭重新打开或者刷新本页面`);
            t()
        })
    };
    try {
        i.scatter == null ? ScatterJS.scatter.connect(i.name).then(n => {
            if (!n) return dtip("登陆失败。请检查Scatter已经启用或者已经解锁。"), t(), !1;
            i.scatter = ScatterJS.scatter;
            window.ScatterJS = null;
            r()
        }).catch(n => {
            console.log(n), t()
        }) : r()
    } catch (u) {
        console.log(u);
        t()
    }
};
BITPIEWallet.prototype.logoutScatter = function () {
    let n = this;
    document.getElementById("lbUserName") != null && (document.getElementById("lbUserName").innerHTML = "");
    document.getElementById("lbBalance") != null && (document.getElementById("lbBalance").innerHTML = "0");
    document.getElementById("lbTokenBalance") != null && (document.getElementById("lbTokenBalance").innerHTML = "");
    document.getElementById("lbCPUAvailable") != null && (document.getElementById("lbCPUAvailable").innerHTML = "%");
    document.getElementById("btnLogin").style.display = "";
    document.getElementById("btnLogout").style.display = "none";
    document.getElementById("accountPanel").style.display = "none";
    document.getElementById("profitAndLoss") != null && (document.getElementById("profitAndLoss").innerHTML = "");
    n.firstBalance = 0;
    n.firstTokenBalance = 0;
    try {
        n.dataService != null && n.dataService.close()
    } catch (t) {
        console.log(t)
    }
    try {
        let t = n.getAccountName();
        n.logoutCallback && n.logoutCallback(t)
    } catch (t) {
        console.log(t)
    }
    if (n.identity && (n.identity = null, n.hasScatter())) try {
        n.getScatter().forgetIdentity().then(() => {}).catch(console.log)
    } catch (t) {
        console.log(t)
    }
};
BITPIEWallet.prototype.hasScatter = function () {
    return this.scatter != null || ScatterJS != null
};
BITPIEWallet.prototype.getScatter = function () {
    return this.scatter
};
BITPIEWallet.prototype.transaction = function (n, t, i) {
    let r = this;
    r.eos.transaction(n).then(t).catch(i)
};
BITPIEWallet.prototype.actions = function (n, t, i) {
    let r = this;
    if (r.identity == null) r.openScatter(() => {
        r.actions(n, t, i)
    }, i);
    else try {
        r.transaction({
            actions: n
        }, t, i)
    } catch (u) {
        i(u)
    }
};
BITPIEWallet.prototype.transfer = function (n, t, i, r, u) {
    let f = this;
    if (f.identity == null) f.openScatter(() => {
        f.transfer(n, t, i, r, u)
    }, u);
    else {
        let e = f.getAccountName(),
            o = [{
                account: f.defaultTokenCode,
                name: "transfer",
                authorization: [{
                    actor: e,
                    permission: "active"
                }],
                data: {
                    from: e,
                    to: n,
                    quantity: t,
                    memo: i
                }
            }];
        try {
            f.transaction({
                actions: o
            }, r, u)
        } catch (e) {
            u(e)
        }
    }
};
BITPIEWallet.prototype.initEvents = function () {
    let n = this;
    if (!n.inited) {
        n.inited = !0;
        document.getElementById("btnLogin").addEventListener("click", function () {
            n.loginScatter(function () {}, function () {})
        });
        document.getElementById("btnLogout").addEventListener("click", function () {
            n.logoutScatter()
        });
        let f = document.getElementById("btnPlusRent");
        f != null && f.addEventListener("click", function () {
            if (!n.isLogin()) {
                let t = document.getElementById("rentCPUAccount");
                t.innerHTML = "";
                n.loginScatter(function () {
                    t.innerHTML = n.getAccountName()
                }, function () {
                    dtip("登录失败")
                })
            }
        });
        let t = document.getElementById("btnRentCPU1d01");
        t != null && t.addEventListener("click", function () {
            n.rentCPU(1, "0.1000 EOS", t)
        });
        let i = document.getElementById("btnRentCPU1d05");
        i != null && i.addEventListener("click", function () {
            n.rentCPU(1, "0.5000 EOS", i)
        });
        let r = document.getElementById("btnRentCPU1d10");
        r != null && r.addEventListener("click", function () {
            n.rentCPU(1, "1.0000 EOS", r)
        });
        let u = document.getElementById("btnRentCPU1d20");
        u != null && u.addEventListener("click", function () {
            n.rentCPU(1, "2.0000 EOS", u)
        });
        ScatterJS.plugins(new ScatterEOS);
        document.addEventListener("scatterLoaded", () => {
            this.scatter = window.scatter, window.scatter = null
        })
    }
};
BITPIEWallet.prototype.disableRentBtns = function (n) {
    document.getElementById("btnRentCPU1d01").disabled = n;
    document.getElementById("btnRentCPU1d05").disabled = n;
    document.getElementById("btnRentCPU1d10").disabled = n;
    document.getElementById("btnRentCPU1d20").disabled = n
};
BITPIEWallet.prototype.rentCPU = function (n, t) {
    let i = this;
    i.disableRentBtns(!0);
    let r = function () {
        i.transfer("cpubankeosio", t, `${n}d=wk2`, function (n) {
            i.disableRentBtns(!1);
            let t = `租用成功：${n.transaction_id}`;
            i.logger.info(t);
            dtip(t)
        }, function (n) {
            i.disableRentBtns(!1);
            let t = `租用失败：${stringify(n)}`;
            i.logger.info(t);
            dtip(t)
        })
    };
    i.isLogin() ? r() : i.loginScatter(r, function () {})
};
BITPIEWallet.prototype.isUserRejectd = function (n) {
    try {
        let t = parse(n);
        if (t.err && t.details && t.details.length > 0 ? t = t.error.details[0].message : t.message && (t = t.message),
            !t && n.type && (t = n.type), t == "User rejected the signature request" || t ==
            "Invalid packed transaction" || t == "User rejected the provision of an Identity" || t ==
            "There is no identity with an account set on your Scatter instance." || t ==
            "Identity no longer exists on the user's keychain") return !0
    } catch (t) {
        that.logger.info(stringify(t))
    }
    return !1
};
TransferController.prototype.mineCount = 0;
TransferController.prototype.timeup = null;
TransferController.prototype.initEvents = function () {
    var n = this;
    (n.wallet.initEvents(), n.inited) || (n.inited = !0, n.document.getElementById("btnStart").addEventListener(
        "click",
        function () {
            n.runGame(!1)
        }), n.document.getElementById("btnStop").addEventListener("click", function () {
        n.stopGame()
    }))
};
TransferController.prototype.runGame = function () {
    var n = this,
        t = function () {
            (n.document.getElementById("btnStart").style.display = "none", n.document.getElementById("btnStop").style
                .display = "", n.stopChangeInput(!0), n.isRunning) || (n.isRunning = !0, n.mineCount = 0, document.getElementById(
                "txtResults").innerHTML = "", n.transfer())
        };
    n.wallet.isLogin() ? t() : n.wallet.loginScatter(t, function () {})
};
TransferController.prototype.stopGame = function () {
    var n = this;
    n.isRunning = !1;
    n.document.getElementById("btnStart").style.display = "";
    n.document.getElementById("btnStop").style.display = "none";
    n.stopChangeInput(!1)
};
TransferController.prototype.stopChangeInput = function (n) {
    var t = this;
    t.document.getElementById("txtContract").readOnly = n;
    t.document.getElementById("txtAction").readOnly = n;
    t.document.getElementById("txtRecipient").readOnly = n;
    t.document.getElementById("txtQuantity").readOnly = n;
    t.document.getElementById("txtMemo").readOnly = n
};
TransferController.prototype.transfer = function () {
    var n = this,
        l, i, t, r, s, h, c, u, y;
    if (!n.wallet.isLogin()) {
        n.logger.info("未登陆");
        return
    }
    if (!n.isRunning) {
        n.logger.info("已经停止");
        return
    }
    if (document.getElementById("txtTimeup").value != "" && (l = new Date(document.getElementById("txtTimeup").value),
            i = l - new Date, i >= 0)) {
        var f = Math.floor(i / 36e5 % 24).toString(),
            e = Math.floor(i / 6e4 % 60).toString(),
            o = Math.floor(i / 1e3 % 60).toString();
        n.countDown("交易倒计时：" + (f.length == 1 ? "0" + f : f) + ":" + (e.length == 1 ? "0" + e : e) + ":" + (o.length ==
            1 ? "0" + o : o));
        setTimeout(function () {
            n.transfer()
        }, 100);
        return
    }
    if (t = new Number(document.getElementById("txtTimeout").value).valueOf(), isNaN(t) && (t = 0), t <= 0 && (t =
            5e3), r = function () {
            n.logger.info(`等待 ${t}ms`);
            setTimeout(function () {
                n.transfer()
            }, t)
        }, s = n.document.getElementById("txtContract").value, s == "") {
        dtip("请填写合约账号");
        n.stopGame();
        return
    }
    if (h = n.document.getElementById("txtAction").value, h == "") {
        dtip("请填写合约方法");
        n.stopGame();
        return
    }
    if (c = n.document.getElementById("txtRecipient").value, c == "") {
        dtip("请填写收款人");
        n.stopGame();
        return
    }
    if (u = n.document.getElementById("txtQuantity").value, u == "") {
        dtip("请填写数量");
        n.stopGame();
        return
    }
    if (u.split(" ").length != 2) {
        dtip("数量格式不对");
        n.stopGame();
        return
    }
    // if (!n.wallet.hasCPU) {
    //     n.logger.info("CPU资源不足" + n.wallet.cpuAvailable + "，等待CPU释放后继续");
    //     setTimeout(function () {
    //         n.transfer()
    //     }, 1e3);
    //     return
    // }
    n.wallet.checkoutNetworks();
    var p = n.document.getElementById("txtMemo").value,
        a = n.wallet.getAccountName(),
        v = {
            from: a,
            to: c,
            quantity: u,
            memo: p
        };
    n.logger.info(stringify(v));
    y = [{
        account: s,
        name: h,
        authorization: [{
            actor: a,
            permission: "active"
        }],
        data: v
    }];
    n.mineCount++;
    try {
        n.wallet.transaction({
            actions: y
        }, function (t) {
            var i = `交易ID: ${t.transaction_id}`;
            n.logger.info(i);
            n.mineCount <= 1 && r()
        }, function (t) {
            n.wallet.isUserRejectd(t) ? (n.logger.info("用户取消，已经停止。"), n.stopGame()) : (t = eosioAssert(t),
                n.logger.info(" 发现错误：".concat(t)));
            n.mineCount <= 1 && r()
        })
    } catch (w) {
        n.logger.info("发现错误：".concat(JSON.stringify(w)));
        n.mineCount <= 1 && r()
    }
    n.mineCount > 1 && r()
};
TransferController.prototype.countDown = function (n) {
    document.getElementById("countDownPanel").innerHTML = n
};
$(document).ready(function () {
    new TransferController(window)
});