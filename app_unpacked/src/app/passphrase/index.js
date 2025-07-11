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
    }, n.p = "", n(n.s = 71)
}([function(e, t, n) {
    e.exports = n(64), e.exports.default = e.exports
}, function(e, t, n) {
    "use strict";
    var r = n(0),
        o = n.n(r),
        a = n(25);
    t.default = class extends o.a.PureComponent {
        constructor(...e) {
            super(...e), this.state = {
                focus: !1
            }, this.handleFocus = (() => this.setState({
                focus: !0
            })), this.handleBlur = (e => {
                this.wrapper && !this.wrapper.contains(e.relatedTarget) && this.setState({
                    focus: !1
                })
            })
        }
        render() {
            const {
                index: e,
                values: t,
                onChange: n,
                inputRef: r,
                onPress: i,
                onSelect: s
            } = this.props, {
                focus: l
            } = this.state, c = t[e];
            return o.a.createElement("div", {
                className: "x-login-mnemonic__input-wrapper",
                ref: e => {
                    this.wrapper = e
                }
            }, o.a.createElement("input", {
                type: "text",
                id: `x-login-mnemonic__input-${e}`,
                className: `x-login-mnemonic__input ${c.error?"x-login-mnemonic__input--error":""}`,
                placeholder: e + 1,
                onFocus: this.handleFocus,
                onBlur: this.handleBlur,
                name: e,
                ref: r,
                onKeyDown: t => i(t, e),
                value: c.value,
                onChange: n
            }), c.error && l && o.a.createElement(a.default, {
                onSelect: t => s(t, e),
                value: c.value
            }))
        }
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "fiatUnit", function() {
        return r
    }), n.d(t, "themeName", function() {
        return o
    }), n.d(t, "adaLegacyAddressEnabled", function() {
        return a
    }), n.d(t, "moneroInitialHeight", function() {
        return i
    }), n.d(t, "moneroSubaddressesEnabled", function() {
        return s
    }), n.d(t, "bitcoinLegacyAddressEnabled", function() {
        return l
    }), n.d(t, "bitcoinTaprootAddressEnabled", function() {
        return c
    }), n.d(t, "rbfEnabledBitcoin", function() {
        return u
    }), n.d(t, "rbfEnabledEthereum", function() {
        return d
    }), n.d(t, "wentThroughFiatOnboarding", function() {
        return f
    });
    const r = "fiat.unit",
        o = "theme.name",
        a = "adaLegacyAddressEnabled",
        i = "moneroInitialHeight",
        s = "moneroSubaddressesEnabled",
        l = "bitcoinLegacyAddressEnabled",
        c = "bitcoinTaprootAddressEnabled",
        u = "advanced.advancedMode.assets.bitcoin",
        d = "advanced.advancedMode.assets.ethereum",
        f = "fiatOnramp.wentThroughFiatOnboarding"
}, function(e, t, n) {
    "use strict";
    n.d(t, "createClient", function() {
        return d
    }), n.d(t, "rpcRenderer", function() {
        return p
    });
    var r = n(14);
    const o = n.n(r).a || r,
        {
            targeted: a,
            rpcListener: i,
            createServer: s
        } = o,
        {
            mainBroadcastListener: l,
            broadcast: c,
            rpcMain: u
        } = o,
        {
            createClient: d,
            createClientMethod: f,
            rpcRenderer: p
        } = o
}, function(e, t) {
    /*!
      Copyright (c) 2017 Jed Watson.
      Licensed under the MIT License (MIT), see
      http://jedwatson.github.io/classnames
    */
    ! function() {
        "use strict";
        var t = {}.hasOwnProperty;

        function n() {
            for (var e = [], r = 0; r < arguments.length; r++) {
                var o = arguments[r];
                if (o) {
                    var a = typeof o;
                    if ("string" === a || "number" === a) e.push(o);
                    else if (Array.isArray(o) && o.length) {
                        var i = n.apply(null, o);
                        i && e.push(i)
                    } else if ("object" === a)
                        for (var s in o) t.call(o, s) && o[s] && e.push(s)
                }
            }
            return e.join(" ")
        }
        void 0 !== e && e.exports ? (n.default = n, e.exports = n) : "function" == typeof define && "object" == typeof define.amd && define.amd ? define("classnames", [], function() {
            return n
        }) : window.classNames = n
    }()
}, function(e, t, n) {
    "use strict";
    n.d(t, "captureStackTrace", function() {
        return o
    }), n.d(t, "stackFramesToString", function() {
        return a
    }), n.d(t, "default", function() {
        return i
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

    function a(e) {
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

    function i(e) {
        return r.has(e) ? r.get(e) : (o(e), r.get(e))
    }
}, function(e) {
    e.exports = ["abandon", "ability", "able", "about", "above", "absent", "absorb", "abstract", "absurd", "abuse", "access", "accident", "account", "accuse", "achieve", "acid", "acoustic", "acquire", "across", "act", "action", "actor", "actress", "actual", "adapt", "add", "addict", "address", "adjust", "admit", "adult", "advance", "advice", "aerobic", "affair", "afford", "afraid", "again", "age", "agent", "agree", "ahead", "aim", "air", "airport", "aisle", "alarm", "album", "alcohol", "alert", "alien", "all", "alley", "allow", "almost", "alone", "alpha", "already", "also", "alter", "always", "amateur", "amazing", "among", "amount", "amused", "analyst", "anchor", "ancient", "anger", "angle", "angry", "animal", "ankle", "announce", "annual", "another", "answer", "antenna", "antique", "anxiety", "any", "apart", "apology", "appear", "apple", "approve", "april", "arch", "arctic", "area", "arena", "argue", "arm", "armed", "armor", "army", "around", "arrange", "arrest", "arrive", "arrow", "art", "artefact", "artist", "artwork", "ask", "aspect", "assault", "asset", "assist", "assume", "asthma", "athlete", "atom", "attack", "attend", "attitude", "attract", "auction", "audit", "august", "aunt", "author", "auto", "autumn", "average", "avocado", "avoid", "awake", "aware", "away", "awesome", "awful", "awkward", "axis", "baby", "bachelor", "bacon", "badge", "bag", "balance", "balcony", "ball", "bamboo", "banana", "banner", "bar", "barely", "bargain", "barrel", "base", "basic", "basket", "battle", "beach", "bean", "beauty", "because", "become", "beef", "before", "begin", "behave", "behind", "believe", "below", "belt", "bench", "benefit", "best", "betray", "better", "between", "beyond", "bicycle", "bid", "bike", "bind", "biology", "bird", "birth", "bitter", "black", "blade", "blame", "blanket", "blast", "bleak", "bless", "blind", "blood", "blossom", "blouse", "blue", "blur", "blush", "board", "boat", "body", "boil", "bomb", "bone", "bonus", "book", "boost", "border", "boring", "borrow", "boss", "bottom", "bounce", "box", "boy", "bracket", "brain", "brand", "brass", "brave", "bread", "breeze", "brick", "bridge", "brief", "bright", "bring", "brisk", "broccoli", "broken", "bronze", "broom", "brother", "brown", "brush", "bubble", "buddy", "budget", "buffalo", "build", "bulb", "bulk", "bullet", "bundle", "bunker", "burden", "burger", "burst", "bus", "business", "busy", "butter", "buyer", "buzz", "cabbage", "cabin", "cable", "cactus", "cage", "cake", "call", "calm", "camera", "camp", "can", "canal", "cancel", "candy", "cannon", "canoe", "canvas", "canyon", "capable", "capital", "captain", "car", "carbon", "card", "cargo", "carpet", "carry", "cart", "case", "cash", "casino", "castle", "casual", "cat", "catalog", "catch", "category", "cattle", "caught", "cause", "caution", "cave", "ceiling", "celery", "cement", "census", "century", "cereal", "certain", "chair", "chalk", "champion", "change", "chaos", "chapter", "charge", "chase", "chat", "cheap", "check", "cheese", "chef", "cherry", "chest", "chicken", "chief", "child", "chimney", "choice", "choose", "chronic", "chuckle", "chunk", "churn", "cigar", "cinnamon", "circle", "citizen", "city", "civil", "claim", "clap", "clarify", "claw", "clay", "clean", "clerk", "clever", "click", "client", "cliff", "climb", "clinic", "clip", "clock", "clog", "close", "cloth", "cloud", "clown", "club", "clump", "cluster", "clutch", "coach", "coast", "coconut", "code", "coffee", "coil", "coin", "collect", "color", "column", "combine", "come", "comfort", "comic", "common", "company", "concert", "conduct", "confirm", "congress", "connect", "consider", "control", "convince", "cook", "cool", "copper", "copy", "coral", "core", "corn", "correct", "cost", "cotton", "couch", "country", "couple", "course", "cousin", "cover", "coyote", "crack", "cradle", "craft", "cram", "crane", "crash", "crater", "crawl", "crazy", "cream", "credit", "creek", "crew", "cricket", "crime", "crisp", "critic", "crop", "cross", "crouch", "crowd", "crucial", "cruel", "cruise", "crumble", "crunch", "crush", "cry", "crystal", "cube", "culture", "cup", "cupboard", "curious", "current", "curtain", "curve", "cushion", "custom", "cute", "cycle", "dad", "damage", "damp", "dance", "danger", "daring", "dash", "daughter", "dawn", "day", "deal", "debate", "debris", "decade", "december", "decide", "decline", "decorate", "decrease", "deer", "defense", "define", "defy", "degree", "delay", "deliver", "demand", "demise", "denial", "dentist", "deny", "depart", "depend", "deposit", "depth", "deputy", "derive", "describe", "desert", "design", "desk", "despair", "destroy", "detail", "detect", "develop", "device", "devote", "diagram", "dial", "diamond", "diary", "dice", "diesel", "diet", "differ", "digital", "dignity", "dilemma", "dinner", "dinosaur", "direct", "dirt", "disagree", "discover", "disease", "dish", "dismiss", "disorder", "display", "distance", "divert", "divide", "divorce", "dizzy", "doctor", "document", "dog", "doll", "dolphin", "domain", "donate", "donkey", "donor", "door", "dose", "double", "dove", "draft", "dragon", "drama", "drastic", "draw", "dream", "dress", "drift", "drill", "drink", "drip", "drive", "drop", "drum", "dry", "duck", "dumb", "dune", "during", "dust", "dutch", "duty", "dwarf", "dynamic", "eager", "eagle", "early", "earn", "earth", "easily", "east", "easy", "echo", "ecology", "economy", "edge", "edit", "educate", "effort", "egg", "eight", "either", "elbow", "elder", "electric", "elegant", "element", "elephant", "elevator", "elite", "else", "embark", "embody", "embrace", "emerge", "emotion", "employ", "empower", "empty", "enable", "enact", "end", "endless", "endorse", "enemy", "energy", "enforce", "engage", "engine", "enhance", "enjoy", "enlist", "enough", "enrich", "enroll", "ensure", "enter", "entire", "entry", "envelope", "episode", "equal", "equip", "era", "erase", "erode", "erosion", "error", "erupt", "escape", "essay", "essence", "estate", "eternal", "ethics", "evidence", "evil", "evoke", "evolve", "exact", "example", "excess", "exchange", "excite", "exclude", "excuse", "execute", "exercise", "exhaust", "exhibit", "exile", "exist", "exit", "exotic", "expand", "expect", "expire", "explain", "expose", "express", "extend", "extra", "eye", "eyebrow", "fabric", "face", "faculty", "fade", "faint", "faith", "fall", "false", "fame", "family", "famous", "fan", "fancy", "fantasy", "farm", "fashion", "fat", "fatal", "father", "fatigue", "fault", "favorite", "feature", "february", "federal", "fee", "feed", "feel", "female", "fence", "festival", "fetch", "fever", "few", "fiber", "fiction", "field", "figure", "file", "film", "filter", "final", "find", "fine", "finger", "finish", "fire", "firm", "first", "fiscal", "fish", "fit", "fitness", "fix", "flag", "flame", "flash", "flat", "flavor", "flee", "flight", "flip", "float", "flock", "floor", "flower", "fluid", "flush", "fly", "foam", "focus", "fog", "foil", "fold", "follow", "food", "foot", "force", "forest", "forget", "fork", "fortune", "forum", "forward", "fossil", "foster", "found", "fox", "fragile", "frame", "frequent", "fresh", "friend", "fringe", "frog", "front", "frost", "frown", "frozen", "fruit", "fuel", "fun", "funny", "furnace", "fury", "future", "gadget", "gain", "galaxy", "gallery", "game", "gap", "garage", "garbage", "garden", "garlic", "garment", "gas", "gasp", "gate", "gather", "gauge", "gaze", "general", "genius", "genre", "gentle", "genuine", "gesture", "ghost", "giant", "gift", "giggle", "ginger", "giraffe", "girl", "give", "glad", "glance", "glare", "glass", "glide", "glimpse", "globe", "gloom", "glory", "glove", "glow", "glue", "goat", "goddess", "gold", "good", "goose", "gorilla", "gospel", "gossip", "govern", "gown", "grab", "grace", "grain", "grant", "grape", "grass", "gravity", "great", "green", "grid", "grief", "grit", "grocery", "group", "grow", "grunt", "guard", "guess", "guide", "guilt", "guitar", "gun", "gym", "habit", "hair", "half", "hammer", "hamster", "hand", "happy", "harbor", "hard", "harsh", "harvest", "hat", "have", "hawk", "hazard", "head", "health", "heart", "heavy", "hedgehog", "height", "hello", "helmet", "help", "hen", "hero", "hidden", "high", "hill", "hint", "hip", "hire", "history", "hobby", "hockey", "hold", "hole", "holiday", "hollow", "home", "honey", "hood", "hope", "horn", "horror", "horse", "hospital", "host", "hotel", "hour", "hover", "hub", "huge", "human", "humble", "humor", "hundred", "hungry", "hunt", "hurdle", "hurry", "hurt", "husband", "hybrid", "ice", "icon", "idea", "identify", "idle", "ignore", "ill", "illegal", "illness", "image", "imitate", "immense", "immune", "impact", "impose", "improve", "impulse", "inch", "include", "income", "increase", "index", "indicate", "indoor", "industry", "infant", "inflict", "inform", "inhale", "inherit", "initial", "inject", "injury", "inmate", "inner", "innocent", "input", "inquiry", "insane", "insect", "inside", "inspire", "install", "intact", "interest", "into", "invest", "invite", "involve", "iron", "island", "isolate", "issue", "item", "ivory", "jacket", "jaguar", "jar", "jazz", "jealous", "jeans", "jelly", "jewel", "job", "join", "joke", "journey", "joy", "judge", "juice", "jump", "jungle", "junior", "junk", "just", "kangaroo", "keen", "keep", "ketchup", "key", "kick", "kid", "kidney", "kind", "kingdom", "kiss", "kit", "kitchen", "kite", "kitten", "kiwi", "knee", "knife", "knock", "know", "lab", "label", "labor", "ladder", "lady", "lake", "lamp", "language", "laptop", "large", "later", "latin", "laugh", "laundry", "lava", "law", "lawn", "lawsuit", "layer", "lazy", "leader", "leaf", "learn", "leave", "lecture", "left", "leg", "legal", "legend", "leisure", "lemon", "lend", "length", "lens", "leopard", "lesson", "letter", "level", "liar", "liberty", "library", "license", "life", "lift", "light", "like", "limb", "limit", "link", "lion", "liquid", "list", "little", "live", "lizard", "load", "loan", "lobster", "local", "lock", "logic", "lonely", "long", "loop", "lottery", "loud", "lounge", "love", "loyal", "lucky", "luggage", "lumber", "lunar", "lunch", "luxury", "lyrics", "machine", "mad", "magic", "magnet", "maid", "mail", "main", "major", "make", "mammal", "man", "manage", "mandate", "mango", "mansion", "manual", "maple", "marble", "march", "margin", "marine", "market", "marriage", "mask", "mass", "master", "match", "material", "math", "matrix", "matter", "maximum", "maze", "meadow", "mean", "measure", "meat", "mechanic", "medal", "media", "melody", "melt", "member", "memory", "mention", "menu", "mercy", "merge", "merit", "merry", "mesh", "message", "metal", "method", "middle", "midnight", "milk", "million", "mimic", "mind", "minimum", "minor", "minute", "miracle", "mirror", "misery", "miss", "mistake", "mix", "mixed", "mixture", "mobile", "model", "modify", "mom", "moment", "monitor", "monkey", "monster", "month", "moon", "moral", "more", "morning", "mosquito", "mother", "motion", "motor", "mountain", "mouse", "move", "movie", "much", "muffin", "mule", "multiply", "muscle", "museum", "mushroom", "music", "must", "mutual", "myself", "mystery", "myth", "naive", "name", "napkin", "narrow", "nasty", "nation", "nature", "near", "neck", "need", "negative", "neglect", "neither", "nephew", "nerve", "nest", "net", "network", "neutral", "never", "news", "next", "nice", "night", "noble", "noise", "nominee", "noodle", "normal", "north", "nose", "notable", "note", "nothing", "notice", "novel", "now", "nuclear", "number", "nurse", "nut", "oak", "obey", "object", "oblige", "obscure", "observe", "obtain", "obvious", "occur", "ocean", "october", "odor", "off", "offer", "office", "often", "oil", "okay", "old", "olive", "olympic", "omit", "once", "one", "onion", "online", "only", "open", "opera", "opinion", "oppose", "option", "orange", "orbit", "orchard", "order", "ordinary", "organ", "orient", "original", "orphan", "ostrich", "other", "outdoor", "outer", "output", "outside", "oval", "oven", "over", "own", "owner", "oxygen", "oyster", "ozone", "pact", "paddle", "page", "pair", "palace", "palm", "panda", "panel", "panic", "panther", "paper", "parade", "parent", "park", "parrot", "party", "pass", "patch", "path", "patient", "patrol", "pattern", "pause", "pave", "payment", "peace", "peanut", "pear", "peasant", "pelican", "pen", "penalty", "pencil", "people", "pepper", "perfect", "permit", "person", "pet", "phone", "photo", "phrase", "physical", "piano", "picnic", "picture", "piece", "pig", "pigeon", "pill", "pilot", "pink", "pioneer", "pipe", "pistol", "pitch", "pizza", "place", "planet", "plastic", "plate", "play", "please", "pledge", "pluck", "plug", "plunge", "poem", "poet", "point", "polar", "pole", "police", "pond", "pony", "pool", "popular", "portion", "position", "possible", "post", "potato", "pottery", "poverty", "powder", "power", "practice", "praise", "predict", "prefer", "prepare", "present", "pretty", "prevent", "price", "pride", "primary", "print", "priority", "prison", "private", "prize", "problem", "process", "produce", "profit", "program", "project", "promote", "proof", "property", "prosper", "protect", "proud", "provide", "public", "pudding", "pull", "pulp", "pulse", "pumpkin", "punch", "pupil", "puppy", "purchase", "purity", "purpose", "purse", "push", "put", "puzzle", "pyramid", "quality", "quantum", "quarter", "question", "quick", "quit", "quiz", "quote", "rabbit", "raccoon", "race", "rack", "radar", "radio", "rail", "rain", "raise", "rally", "ramp", "ranch", "random", "range", "rapid", "rare", "rate", "rather", "raven", "raw", "razor", "ready", "real", "reason", "rebel", "rebuild", "recall", "receive", "recipe", "record", "recycle", "reduce", "reflect", "reform", "refuse", "region", "regret", "regular", "reject", "relax", "release", "relief", "rely", "remain", "remember", "remind", "remove", "render", "renew", "rent", "reopen", "repair", "repeat", "replace", "report", "require", "rescue", "resemble", "resist", "resource", "response", "result", "retire", "retreat", "return", "reunion", "reveal", "review", "reward", "rhythm", "rib", "ribbon", "rice", "rich", "ride", "ridge", "rifle", "right", "rigid", "ring", "riot", "ripple", "risk", "ritual", "rival", "river", "road", "roast", "robot", "robust", "rocket", "romance", "roof", "rookie", "room", "rose", "rotate", "rough", "round", "route", "royal", "rubber", "rude", "rug", "rule", "run", "runway", "rural", "sad", "saddle", "sadness", "safe", "sail", "salad", "salmon", "salon", "salt", "salute", "same", "sample", "sand", "satisfy", "satoshi", "sauce", "sausage", "save", "say", "scale", "scan", "scare", "scatter", "scene", "scheme", "school", "science", "scissors", "scorpion", "scout", "scrap", "screen", "script", "scrub", "sea", "search", "season", "seat", "second", "secret", "section", "security", "seed", "seek", "segment", "select", "sell", "seminar", "senior", "sense", "sentence", "series", "service", "session", "settle", "setup", "seven", "shadow", "shaft", "shallow", "share", "shed", "shell", "sheriff", "shield", "shift", "shine", "ship", "shiver", "shock", "shoe", "shoot", "shop", "short", "shoulder", "shove", "shrimp", "shrug", "shuffle", "shy", "sibling", "sick", "side", "siege", "sight", "sign", "silent", "silk", "silly", "silver", "similar", "simple", "since", "sing", "siren", "sister", "situate", "six", "size", "skate", "sketch", "ski", "skill", "skin", "skirt", "skull", "slab", "slam", "sleep", "slender", "slice", "slide", "slight", "slim", "slogan", "slot", "slow", "slush", "small", "smart", "smile", "smoke", "smooth", "snack", "snake", "snap", "sniff", "snow", "soap", "soccer", "social", "sock", "soda", "soft", "solar", "soldier", "solid", "solution", "solve", "someone", "song", "soon", "sorry", "sort", "soul", "sound", "soup", "source", "south", "space", "spare", "spatial", "spawn", "speak", "special", "speed", "spell", "spend", "sphere", "spice", "spider", "spike", "spin", "spirit", "split", "spoil", "sponsor", "spoon", "sport", "spot", "spray", "spread", "spring", "spy", "square", "squeeze", "squirrel", "stable", "stadium", "staff", "stage", "stairs", "stamp", "stand", "start", "state", "stay", "steak", "steel", "stem", "step", "stereo", "stick", "still", "sting", "stock", "stomach", "stone", "stool", "story", "stove", "strategy", "street", "strike", "strong", "struggle", "student", "stuff", "stumble", "style", "subject", "submit", "subway", "success", "such", "sudden", "suffer", "sugar", "suggest", "suit", "summer", "sun", "sunny", "sunset", "super", "supply", "supreme", "sure", "surface", "surge", "surprise", "surround", "survey", "suspect", "sustain", "swallow", "swamp", "swap", "swarm", "swear", "sweet", "swift", "swim", "swing", "switch", "sword", "symbol", "symptom", "syrup", "system", "table", "tackle", "tag", "tail", "talent", "talk", "tank", "tape", "target", "task", "taste", "tattoo", "taxi", "teach", "team", "tell", "ten", "tenant", "tennis", "tent", "term", "test", "text", "thank", "that", "theme", "then", "theory", "there", "they", "thing", "this", "thought", "three", "thrive", "throw", "thumb", "thunder", "ticket", "tide", "tiger", "tilt", "timber", "time", "tiny", "tip", "tired", "tissue", "title", "toast", "tobacco", "today", "toddler", "toe", "together", "toilet", "token", "tomato", "tomorrow", "tone", "tongue", "tonight", "tool", "tooth", "top", "topic", "topple", "torch", "tornado", "tortoise", "toss", "total", "tourist", "toward", "tower", "town", "toy", "track", "trade", "traffic", "tragic", "train", "transfer", "trap", "trash", "travel", "tray", "treat", "tree", "trend", "trial", "tribe", "trick", "trigger", "trim", "trip", "trophy", "trouble", "truck", "true", "truly", "trumpet", "trust", "truth", "try", "tube", "tuition", "tumble", "tuna", "tunnel", "turkey", "turn", "turtle", "twelve", "twenty", "twice", "twin", "twist", "two", "type", "typical", "ugly", "umbrella", "unable", "unaware", "uncle", "uncover", "under", "undo", "unfair", "unfold", "unhappy", "uniform", "unique", "unit", "universe", "unknown", "unlock", "until", "unusual", "unveil", "update", "upgrade", "uphold", "upon", "upper", "upset", "urban", "urge", "usage", "use", "used", "useful", "useless", "usual", "utility", "vacant", "vacuum", "vague", "valid", "valley", "valve", "van", "vanish", "vapor", "various", "vast", "vault", "vehicle", "velvet", "vendor", "venture", "venue", "verb", "verify", "version", "very", "vessel", "veteran", "viable", "vibrant", "vicious", "victory", "video", "view", "village", "vintage", "violin", "virtual", "virus", "visa", "visit", "visual", "vital", "vivid", "vocal", "voice", "void", "volcano", "volume", "vote", "voyage", "wage", "wagon", "wait", "walk", "wall", "walnut", "want", "warfare", "warm", "warrior", "wash", "wasp", "waste", "water", "wave", "way", "wealth", "weapon", "wear", "weasel", "weather", "web", "wedding", "weekend", "weird", "welcome", "west", "wet", "whale", "what", "wheat", "wheel", "when", "where", "whip", "whisper", "wide", "width", "wife", "wild", "will", "win", "window", "wine", "wing", "wink", "winner", "winter", "wire", "wisdom", "wise", "wish", "witness", "wolf", "woman", "wonder", "wood", "wool", "word", "work", "world", "worry", "worth", "wrap", "wreck", "wrestle", "wrist", "write", "wrong", "yard", "year", "yellow", "you", "young", "youth", "zebra", "zero", "zone", "zoo"]
}, function(e, t, n) {
    "use strict";
    n.d(t, "CHANNEL_PREFIX", function() {
        return r
    });
    const r = "electron-rpc-broadcast"
}, function(e, t, n) {
    "use strict";
    var r = n(4),
        o = n.n(r),
        a = n(0),
        i = n.n(a);
    t.default = (e => {
        const {
            id: t,
            show: n
        } = e;
        return i.a.createElement("button", {
            id: t,
            className: o()("x-login-form__submit", {
                "x-login-form__submit--show": n
            }),
            disabled: !n,
            tabIndex: -1,
            type: "submit"
        }, i.a.createElement("svg", {
            width: "20px",
            height: "16px",
            viewBox: "0 0 20 16",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            xmlnsXlink: "http://www.w3.org/1999/xlink"
        }, i.a.createElement("path", {
            d: "M11.765,0.54 C11.765,0.686 11.814,0.784 11.912,0.882 L18.333,7.304 L0.49,7.304 C0.196,7.304 0,7.5 0,7.794 C0,8.088 0.196,8.284 0.49,8.284 L18.333,8.284 L11.912,14.706 C11.8230383,14.7987317 11.7707976,14.9206265 11.765,15.049 C11.7707976,15.1773735 11.8230383,15.2992683 11.912,15.392 C12.108,15.588 12.402,15.588 12.598,15.392 L19.853,8.137 C19.9467832,8.04755052 19.9998502,7.92360134 19.9998502,7.794 C19.9998502,7.66439866 19.9467832,7.54044948 19.853,7.451 L12.598,0.147 C12.5085505,0.0532167537 12.3846013,0.000149812777 12.255,0.000149812777 C12.1253987,0.000149812777 12.0014495,0.0532167537 11.912,0.147 C11.8138897,0.253579727 11.7611611,0.3941893 11.765,0.539 L11.765,0.54 Z"
        })))
    })
}, function(e, t, n) {
    "use strict";
    var r = n(4),
        o = n.n(r),
        a = n(0),
        i = n.n(a);
    t.default = class extends i.a.Component {
        constructor(...e) {
            super(...e), this.state = {
                show: this.props.status,
                status: this.props.status,
                hasError: this.props.hasError
            }, this.timeout = null
        }
        componentDidUpdate(e) {
            if (e === this.props) return;
            const t = {
                status: this.props.status,
                hasError: this.props.hasError
            };
            clearTimeout(this.timeout), Boolean(this.props.status) !== Boolean(e.status) ? this.setState({
                show: Boolean(this.props.status)
            }, () => {
                this.timeout = setTimeout(() => this.setState(t), 200)
            }) : this.setState(t)
        }
        render() {
            const {
                show: e,
                status: t,
                hasError: n
            } = this.state;
            return i.a.createElement("span", {
                className: o()("x-login-form__note", {
                    "x-login-form__note--error": n,
                    "x-login-form__note--show": e
                })
            }, t)
        }
    }
}, function(e, t, n) {
    "use strict";
    {
        const {
            ipcRenderer: t
        } = globalThis.exodusPreload;
        e.exports = {
            ipcRenderer: t
        }
    }
}, function(e, t, n) {
    "use strict";
    var r = n(3);
    t.default = Object(r.createClient)("#", "wallet-controller")
}, function(e, t, n) {
    e.exports = n(47)()
}, function(e, t, n) {
    "use strict";
    n.d(t, "createClientImplementation", function() {
        return i
    }), n.d(t, "createClientMethodImplementation", function() {
        return s
    });
    var r = n(40),
        o = n(39),
        a = n(7);

    function i(e, t, n, r, o = {}) {
        return new Proxy({}, {
            get: (a, i, l) => "string" == typeof i ? s(e, t, n, r, i, o) : void 0
        })
    }

    function s(e, t, n, i, s, {
        wrap: l,
        unwrap: c
    } = {}) {
        if ("main" === n) throw new Error("Use 'ui' as the target instead of 'main'");
        return function(...u) {
            const d = Object(r.randomUUID)(),
                f = `${a.CHANNEL_PREFIX}:${i}:response:${d}`;
            return new Promise((r, p) => {
                const h = `${a.CHANNEL_PREFIX}:${i}:call`;
                l && (u = l(s, u));
                const m = {
                    func: s,
                    args: u,
                    token: d
                };
                e.once(f, (e, {
                    payload: t
                }) => {
                    const [n, a] = t;
                    n ? p(Object(o.fromObject)(n)) : r(c ? c(s, a) : a)
                }), setTimeout(() => {
                    try {
                        t(n, h, m)
                    } catch (e) {
                        p(e)
                    }
                }, 0)
            })
        }
    }
}, function(e, t, n) {
    e.exports = n(65)
}, function(e, t, n) {
    "use strict";
    n.d(t, "ENV_BUILD_EDEN", function() {
        return s
    });
    var r = n(2),
        o = n(30),
        a = n.n(o),
        i = n(29);
    n.n(i).a;
    const s = !1;
    a()("3s"), r.fiatUnit, r.moneroInitialHeight, r.moneroInitialHeight, r.moneroSubaddressesEnabled, r.moneroSubaddressesEnabled, r.themeName, r.rbfEnabledBitcoin, r.rbfEnabledEthereum, r.adaLegacyAddressEnabled, r.bitcoinLegacyAddressEnabled, r.bitcoinTaprootAddressEnabled, r.wentThroughFiatOnboarding
}, function(e, t, n) {
    var r = n(17).Symbol;
    e.exports = r
}, function(e, t, n) {
    var r = n(56),
        o = self && self.Object === Object && self,
        a = r || o || Function("return this")();
    e.exports = a
}, function(e, t) {
    e.exports = function(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
    }
}, function(e, t, n) {
    e.exports = n(59), e.exports.default = e.exports
}, function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, "SafeError", function() {
        return g
    });
    var r = n(44),
        o = n.n(r),
        a = n(5),
        i = n(43),
        s = 0;

    function l(e) {
        return "__private_" + s++ + "_" + e
    }

    function c(e, t) {
        if (!Object.prototype.hasOwnProperty.call(e, t)) throw new TypeError("attempted to use private field on non-instance");
        return e
    }

    function u(e) {
        return new Set(e)
    }
    const d = u(["EPIPE"]),
        f = u(["Error", "AssertionError", "TypeError", "RangeError", "UnknownError", "SafeErrorFailedToParse", "TimeoutError"]),
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
        h = u(Object.values(p).flatMap(e => Object.values(e)));

    function m(e) {
        if ("string" == typeof e && "" !== e) return function(e) {
            return h.has(e)
        }(e) ? e : [...h].find(t => e.includes(t))
    }
    const v = Symbol("SafeError");
    class g {
        static from(e) {
            let t, n, r;
            try {
                const {
                    name: i,
                    message: s,
                    hint: l,
                    code: c
                } = e;
                o = i, t = f.has(o) ? i : "UnknownError";
                const u = `${c}`;
                n = function(e) {
                    return d.has(e) || /^(EXOD-)?\d{1,4}$/u.test(e)
                }(u) ? u : void 0, r = m(l) || m(s);
                const p = Object(a.default)(e);
                return new g({
                    name: t,
                    code: n,
                    hint: r,
                    stack: p,
                    initSymbol: v
                })
            } catch {
                try {
                    return t ? new g({
                        name: t,
                        code: n,
                        hint: r,
                        initSymbol: v
                    }) : E
                } catch {
                    return E
                }
            }
            var o
        }
        get name() {
            return c(this, y)[y]
        }
        get code() {
            return c(this, b)[b]
        }
        get hint() {
            return c(this, k)[k]
        }
        get stackFrames() {
            var e;
            return null == (e = c(this, w)[w]) ? void 0 : e.map(e => ({
                __proto__: null,
                ...e
            }))
        }
        get stack() {
            const e = Object(a.stackFramesToString)(this.stackFrames);
            return e ? `${this.name}: ${this.code||this.hint||"unknownHint"}\n${e}` : void 0
        }
        get timestamp() {
            return c(this, x)[x]
        }
        toJSON() {
            return Object(i.omitUndefined)({
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
            initSymbol: a
        }) {
            Object.defineProperty(this, y, {
                writable: !0,
                value: void 0
            }), Object.defineProperty(this, b, {
                writable: !0,
                value: void 0
            }), Object.defineProperty(this, k, {
                writable: !0,
                value: void 0
            }), Object.defineProperty(this, w, {
                writable: !0,
                value: void 0
            }), Object.defineProperty(this, x, {
                writable: !0,
                value: void 0
            }), o()(a === v, "SafeError: use SafeError.from()"), c(this, y)[y] = e, c(this, b)[b] = t, c(this, k)[k] = n, c(this, w)[w] = null == r ? void 0 : r.map(e => ({
                ...e
            })), c(this, x)[x] = Date.now()
        }
    }
    g.hints = p;
    var y = l("name"),
        b = l("code"),
        k = l("hint"),
        w = l("stackFrames"),
        x = l("timestamp");
    const E = new g({
        initSymbol: v,
        name: "SafeErrorFailedToParse"
    })
}, function(e, t, n) {
    "use strict";
    t.default = (e => e.replaceAll(/(?:[A-Za-z]{3,20}\s+){11}[A-Za-z]{3,20}/gu, "****").replaceAll(/(?:0x)?[\dA-Fa-f]{20,}/gu, "****").replaceAll(/[1-9A-HJ-NP-Za-km-z]{50,}/gu, "****").replaceAll(/(?:[\d+/A-Za-z]{4}){3,}(?:[\d+/A-Za-z]{2}==|[\d+/A-Za-z]{3}=|[\d+/A-Za-z]{4})/gu, "****"))
}, function(e, t, n) {
    "use strict";
    var r = n(4),
        o = n.n(r),
        a = n(0),
        i = n.n(a),
        s = n(9),
        l = n(8);
    t.default = (e => {
        const {
            status: t,
            loginFailed: n,
            passphrase: r,
            showPassphrase: a,
            handleChangePassphrase: c,
            handleClickLogo: u,
            progress: d,
            inputRef: f,
            handleSubmit: p
        } = e, h = t || (r ? 'Click the arrow or press "ENTER" to unlock.' : null);
        return i.a.createElement("form", {
            className: "x-login-form x-login-form--login",
            onSubmit: p
        }, i.a.createElement("div", {
            className: "x-login-form__container"
        }, i.a.createElement("input", {
            className: "x-login-form__input",
            placeholder: "Type your password...",
            type: a ? "text" : "password",
            onChange: c,
            disabled: d,
            value: r,
            ref: f
        }), i.a.createElement("span", {
            className: "x-tooltip x-login-form__eye-tooltip",
            "data-label": a ? "Hide Password" : "Show Password",
            onClick: u
        }, i.a.createElement("span", {
            className: o()("x-login-form__eye", {
                "x-login-form__eye--show": a
            })
        })), i.a.createElement(l.default, {
            id: "login-form-submit",
            show: r && !n && !d
        })), i.a.createElement("div", {
            className: "x-login-form__loading loading-line"
        }), i.a.createElement(s.default, {
            status: h,
            hasError: n
        }))
    })
}, function(e, t, n) {
    "use strict";
    var r = n(0),
        o = n.n(r);

    function a() {
        return (a = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }
    t.default = (e => o.a.createElement("svg", a({
        width: "30",
        height: "30",
        viewBox: "0 0 30 30",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, e), o.a.createElement("g", {
        filter: "url(#filter0_i_1410_468)"
    }, o.a.createElement("circle", {
        cx: "15",
        cy: "15",
        r: "15",
        fill: "url(#paint0_linear_1410_468)"
    }), o.a.createElement("circle", {
        cx: "15",
        cy: "15",
        r: "15",
        fill: "#00FFA3"
    }), o.a.createElement("circle", {
        cx: "15",
        cy: "15",
        r: "15",
        fill: "black",
        fillOpacity: "0.2"
    })), o.a.createElement("path", {
        d: "M15 22C15 22 8 19.4996 8 10.0001L15 8L22 10.0001C22 19.4996 15 22 15 22Z",
        stroke: "white",
        strokeWidth: "1.5",
        strokeLinecap: "square"
    }), o.a.createElement("path", {
        d: "M13.1338 14.3167L14.4671 15.65L16.8671 13.25",
        stroke: "white",
        strokeWidth: "1.5",
        strokeMiterlimit: "10",
        strokeLinecap: "square"
    }), o.a.createElement("defs", null, o.a.createElement("filter", {
        id: "filter0_i_1410_468",
        x: "0",
        y: "0",
        width: "30",
        height: "31",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB"
    }, o.a.createElement("feFlood", {
        floodOpacity: "0",
        result: "BackgroundImageFix"
    }), o.a.createElement("feBlend", {
        mode: "normal",
        in: "SourceGraphic",
        in2: "BackgroundImageFix",
        result: "shape"
    }), o.a.createElement("feColorMatrix", {
        in: "SourceAlpha",
        type: "matrix",
        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
        result: "hardAlpha"
    }), o.a.createElement("feOffset", {
        dy: "1"
    }), o.a.createElement("feGaussianBlur", {
        stdDeviation: "0.5"
    }), o.a.createElement("feComposite", {
        in2: "hardAlpha",
        operator: "arithmetic",
        k2: "-1",
        k3: "1"
    }), o.a.createElement("feColorMatrix", {
        type: "matrix",
        values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0"
    }), o.a.createElement("feBlend", {
        mode: "normal",
        in2: "shape",
        result: "effect1_innerShadow_1410_468"
    })), o.a.createElement("linearGradient", {
        id: "paint0_linear_1410_468",
        x1: "0",
        y1: "0",
        x2: "30",
        y2: "30",
        gradientUnits: "userSpaceOnUse"
    }, o.a.createElement("stop", {
        stopColor: "white",
        stopOpacity: "0.4"
    }), o.a.createElement("stop", {
        offset: "1",
        stopColor: "white",
        stopOpacity: "0.1"
    })))))
}, function(e, t, n) {
    /*!
     * Fuse.js v3.3.0 - Lightweight fuzzy-search (http://fusejs.io)
     * 
     * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
     * All Rights Reserved. Apache Software License 2.0
     * 
     * http://www.apache.org/licenses/LICENSE-2.0
     */
    var r;
    r = function() {
        return function(e) {
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
            return n.m = e, n.c = t, n.i = function(e) {
                return e
            }, n.d = function(e, t, r) {
                n.o(e, t) || Object.defineProperty(e, t, {
                    configurable: !1,
                    enumerable: !0,
                    get: r
                })
            }, n.n = function(e) {
                var t = e && e.__esModule ? function() {
                    return e.default
                } : function() {
                    return e
                };
                return n.d(t, "a", t), t
            }, n.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, n.p = "", n(n.s = 8)
        }([function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                return Array.isArray ? Array.isArray(e) : "[object Array]" === Object.prototype.toString.call(e)
            }
        }, function(e, t, n) {
            "use strict";
            var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }();
            var o = n(5),
                a = n(7),
                i = n(4),
                s = function() {
                    function e(t, n) {
                        var r = n.location,
                            o = void 0 === r ? 0 : r,
                            a = n.distance,
                            s = void 0 === a ? 100 : a,
                            l = n.threshold,
                            c = void 0 === l ? .6 : l,
                            u = n.maxPatternLength,
                            d = void 0 === u ? 32 : u,
                            f = n.isCaseSensitive,
                            p = void 0 !== f && f,
                            h = n.tokenSeparator,
                            m = void 0 === h ? / +/g : h,
                            v = n.findAllMatches,
                            g = void 0 !== v && v,
                            y = n.minMatchCharLength,
                            b = void 0 === y ? 1 : y;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this.options = {
                            location: o,
                            distance: s,
                            threshold: c,
                            maxPatternLength: d,
                            isCaseSensitive: p,
                            tokenSeparator: m,
                            findAllMatches: g,
                            minMatchCharLength: b
                        }, this.pattern = this.options.isCaseSensitive ? t : t.toLowerCase(), this.pattern.length <= d && (this.patternAlphabet = i(this.pattern))
                    }
                    return r(e, [{
                        key: "search",
                        value: function(e) {
                            if (this.options.isCaseSensitive || (e = e.toLowerCase()), this.pattern === e) return {
                                isMatch: !0,
                                score: 0,
                                matchedIndices: [
                                    [0, e.length - 1]
                                ]
                            };
                            var t = this.options,
                                n = t.maxPatternLength,
                                r = t.tokenSeparator;
                            if (this.pattern.length > n) return o(e, this.pattern, r);
                            var i = this.options,
                                s = i.location,
                                l = i.distance,
                                c = i.threshold,
                                u = i.findAllMatches,
                                d = i.minMatchCharLength;
                            return a(e, this.pattern, this.patternAlphabet, {
                                location: s,
                                distance: l,
                                threshold: c,
                                findAllMatches: u,
                                minMatchCharLength: d
                            })
                        }
                    }]), e
                }();
            e.exports = s
        }, function(e, t, n) {
            "use strict";
            var r = n(0);
            e.exports = function(e, t) {
                return function e(t, n, o) {
                    if (n) {
                        var a = n.indexOf("."),
                            i = n,
                            s = null; - 1 !== a && (i = n.slice(0, a), s = n.slice(a + 1));
                        var l = t[i];
                        if (null != l)
                            if (s || "string" != typeof l && "number" != typeof l)
                                if (r(l))
                                    for (var c = 0, u = l.length; c < u; c += 1) e(l[c], s, o);
                                else s && e(l, s, o);
                        else o.push(l.toString())
                    } else o.push(t);
                    return o
                }(e, t, [])
            }
        }, function(e, t, n) {
            "use strict";
            e.exports = function() {
                for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, n = [], r = -1, o = -1, a = 0, i = e.length; a < i; a += 1) {
                    var s = e[a];
                    s && -1 === r ? r = a : s || -1 === r || ((o = a - 1) - r + 1 >= t && n.push([r, o]), r = -1)
                }
                return e[a - 1] && a - r >= t && n.push([r, a - 1]), n
            }
        }, function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                for (var t = {}, n = e.length, r = 0; r < n; r += 1) t[e.charAt(r)] = 0;
                for (var o = 0; o < n; o += 1) t[e.charAt(o)] |= 1 << n - o - 1;
                return t
            }
        }, function(e, t, n) {
            "use strict";
            var r = /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;
            e.exports = function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : / +/g,
                    o = new RegExp(t.replace(r, "\\$&").replace(n, "|")),
                    a = e.match(o),
                    i = !!a,
                    s = [];
                if (i)
                    for (var l = 0, c = a.length; l < c; l += 1) {
                        var u = a[l];
                        s.push([e.indexOf(u), u.length - 1])
                    }
                return {
                    score: i ? .5 : 1,
                    isMatch: i,
                    matchedIndices: s
                }
            }
        }, function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                var n = t.errors,
                    r = void 0 === n ? 0 : n,
                    o = t.currentLocation,
                    a = void 0 === o ? 0 : o,
                    i = t.expectedLocation,
                    s = void 0 === i ? 0 : i,
                    l = t.distance,
                    c = void 0 === l ? 100 : l,
                    u = r / e.length,
                    d = Math.abs(s - a);
                return c ? u + d / c : d ? 1 : u
            }
        }, function(e, t, n) {
            "use strict";
            var r = n(6),
                o = n(3);
            e.exports = function(e, t, n, a) {
                for (var i = a.location, s = void 0 === i ? 0 : i, l = a.distance, c = void 0 === l ? 100 : l, u = a.threshold, d = void 0 === u ? .6 : u, f = a.findAllMatches, p = void 0 !== f && f, h = a.minMatchCharLength, m = void 0 === h ? 1 : h, v = s, g = e.length, y = d, b = e.indexOf(t, v), k = t.length, w = [], x = 0; x < g; x += 1) w[x] = 0;
                if (-1 !== b) {
                    var E = r(t, {
                        errors: 0,
                        currentLocation: b,
                        expectedLocation: v,
                        distance: c
                    });
                    if (y = Math.min(E, y), -1 !== (b = e.lastIndexOf(t, v + k))) {
                        var _ = r(t, {
                            errors: 0,
                            currentLocation: b,
                            expectedLocation: v,
                            distance: c
                        });
                        y = Math.min(_, y)
                    }
                }
                b = -1;
                for (var C = [], S = 1, O = k + g, N = 1 << k - 1, P = 0; P < k; P += 1) {
                    for (var L = 0, M = O; L < M;) {
                        r(t, {
                            errors: P,
                            currentLocation: v + M,
                            expectedLocation: v,
                            distance: c
                        }) <= y ? L = M : O = M, M = Math.floor((O - L) / 2 + L)
                    }
                    O = M;
                    var j = Math.max(1, v - M + 1),
                        A = p ? g : Math.min(v + M, g) + k,
                        I = Array(A + 2);
                    I[A + 1] = (1 << P) - 1;
                    for (var U = A; U >= j; U -= 1) {
                        var T = U - 1,
                            F = n[e.charAt(T)];
                        if (F && (w[T] = 1), I[U] = (I[U + 1] << 1 | 1) & F, 0 !== P && (I[U] |= (C[U + 1] | C[U]) << 1 | 1 | C[U + 1]), I[U] & N && (S = r(t, {
                                errors: P,
                                currentLocation: T,
                                expectedLocation: v,
                                distance: c
                            })) <= y) {
                            if (y = S, (b = T) <= v) break;
                            j = Math.max(1, 2 * v - b)
                        }
                    }
                    if (r(t, {
                            errors: P + 1,
                            currentLocation: v,
                            expectedLocation: v,
                            distance: c
                        }) > y) break;
                    C = I
                }
                return {
                    isMatch: b >= 0,
                    score: 0 === S ? .001 : S,
                    matchedIndices: o(w, m)
                }
            }
        }, function(e, t, n) {
            "use strict";
            var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }();
            var o = n(1),
                a = n(2),
                i = n(0),
                s = function() {
                    function e(t, n) {
                        var r = n.location,
                            o = void 0 === r ? 0 : r,
                            i = n.distance,
                            s = void 0 === i ? 100 : i,
                            l = n.threshold,
                            c = void 0 === l ? .6 : l,
                            u = n.maxPatternLength,
                            d = void 0 === u ? 32 : u,
                            f = n.caseSensitive,
                            p = void 0 !== f && f,
                            h = n.tokenSeparator,
                            m = void 0 === h ? / +/g : h,
                            v = n.findAllMatches,
                            g = void 0 !== v && v,
                            y = n.minMatchCharLength,
                            b = void 0 === y ? 1 : y,
                            k = n.id,
                            w = void 0 === k ? null : k,
                            x = n.keys,
                            E = void 0 === x ? [] : x,
                            _ = n.shouldSort,
                            C = void 0 === _ || _,
                            S = n.getFn,
                            O = void 0 === S ? a : S,
                            N = n.sortFn,
                            P = void 0 === N ? function(e, t) {
                                return e.score - t.score
                            } : N,
                            L = n.tokenize,
                            M = void 0 !== L && L,
                            j = n.matchAllTokens,
                            A = void 0 !== j && j,
                            I = n.includeMatches,
                            U = void 0 !== I && I,
                            T = n.includeScore,
                            F = void 0 !== T && T,
                            R = n.verbose,
                            D = void 0 !== R && R;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this.options = {
                            location: o,
                            distance: s,
                            threshold: c,
                            maxPatternLength: d,
                            isCaseSensitive: p,
                            tokenSeparator: m,
                            findAllMatches: g,
                            minMatchCharLength: b,
                            id: w,
                            keys: E,
                            includeMatches: U,
                            includeScore: F,
                            shouldSort: C,
                            getFn: O,
                            sortFn: P,
                            verbose: D,
                            tokenize: M,
                            matchAllTokens: A
                        }, this.setCollection(t)
                    }
                    return r(e, [{
                        key: "setCollection",
                        value: function(e) {
                            return this.list = e, e
                        }
                    }, {
                        key: "search",
                        value: function(e) {
                            this._log('---------\nSearch pattern: "' + e + '"');
                            var t = this._prepareSearchers(e),
                                n = t.tokenSearchers,
                                r = t.fullSearcher,
                                o = this._search(n, r),
                                a = o.weights,
                                i = o.results;
                            return this._computeScore(a, i), this.options.shouldSort && this._sort(i), this._format(i)
                        }
                    }, {
                        key: "_prepareSearchers",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                t = [];
                            if (this.options.tokenize)
                                for (var n = e.split(this.options.tokenSeparator), r = 0, a = n.length; r < a; r += 1) t.push(new o(n[r], this.options));
                            return {
                                tokenSearchers: t,
                                fullSearcher: new o(e, this.options)
                            }
                        }
                    }, {
                        key: "_search",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                t = arguments[1],
                                n = this.list,
                                r = {},
                                o = [];
                            if ("string" == typeof n[0]) {
                                for (var a = 0, i = n.length; a < i; a += 1) this._analyze({
                                    key: "",
                                    value: n[a],
                                    record: a,
                                    index: a
                                }, {
                                    resultMap: r,
                                    results: o,
                                    tokenSearchers: e,
                                    fullSearcher: t
                                });
                                return {
                                    weights: null,
                                    results: o
                                }
                            }
                            for (var s = {}, l = 0, c = n.length; l < c; l += 1)
                                for (var u = n[l], d = 0, f = this.options.keys.length; d < f; d += 1) {
                                    var p = this.options.keys[d];
                                    if ("string" != typeof p) {
                                        if (s[p.name] = {
                                                weight: 1 - p.weight || 1
                                            }, p.weight <= 0 || p.weight > 1) throw new Error("Key weight has to be > 0 and <= 1");
                                        p = p.name
                                    } else s[p] = {
                                        weight: 1
                                    };
                                    this._analyze({
                                        key: p,
                                        value: this.options.getFn(u, p),
                                        record: u,
                                        index: l
                                    }, {
                                        resultMap: r,
                                        results: o,
                                        tokenSearchers: e,
                                        fullSearcher: t
                                    })
                                }
                            return {
                                weights: s,
                                results: o
                            }
                        }
                    }, {
                        key: "_analyze",
                        value: function(e, t) {
                            var n = e.key,
                                r = e.arrayIndex,
                                o = void 0 === r ? -1 : r,
                                a = e.value,
                                s = e.record,
                                l = e.index,
                                c = t.tokenSearchers,
                                u = void 0 === c ? [] : c,
                                d = t.fullSearcher,
                                f = void 0 === d ? [] : d,
                                p = t.resultMap,
                                h = void 0 === p ? {} : p,
                                m = t.results,
                                v = void 0 === m ? [] : m;
                            if (null != a) {
                                var g = !1,
                                    y = -1,
                                    b = 0;
                                if ("string" == typeof a) {
                                    this._log("\nKey: " + ("" === n ? "-" : n));
                                    var k = f.search(a);
                                    if (this._log('Full text: "' + a + '", score: ' + k.score), this.options.tokenize) {
                                        for (var w = a.split(this.options.tokenSeparator), x = [], E = 0; E < u.length; E += 1) {
                                            var _ = u[E];
                                            this._log('\nPattern: "' + _.pattern + '"');
                                            for (var C = !1, S = 0; S < w.length; S += 1) {
                                                var O = w[S],
                                                    N = _.search(O),
                                                    P = {};
                                                N.isMatch ? (P[O] = N.score, g = !0, C = !0, x.push(N.score)) : (P[O] = 1, this.options.matchAllTokens || x.push(1)), this._log('Token: "' + O + '", score: ' + P[O])
                                            }
                                            C && (b += 1)
                                        }
                                        y = x[0];
                                        for (var L = x.length, M = 1; M < L; M += 1) y += x[M];
                                        y /= L, this._log("Token score average:", y)
                                    }
                                    var j = k.score;
                                    y > -1 && (j = (j + y) / 2), this._log("Score average:", j);
                                    var A = !this.options.tokenize || !this.options.matchAllTokens || b >= u.length;
                                    if (this._log("\nCheck Matches: " + A), (g || k.isMatch) && A) {
                                        var I = h[l];
                                        I ? I.output.push({
                                            key: n,
                                            arrayIndex: o,
                                            value: a,
                                            score: j,
                                            matchedIndices: k.matchedIndices
                                        }) : (h[l] = {
                                            item: s,
                                            output: [{
                                                key: n,
                                                arrayIndex: o,
                                                value: a,
                                                score: j,
                                                matchedIndices: k.matchedIndices
                                            }]
                                        }, v.push(h[l]))
                                    }
                                } else if (i(a))
                                    for (var U = 0, T = a.length; U < T; U += 1) this._analyze({
                                        key: n,
                                        arrayIndex: U,
                                        value: a[U],
                                        record: s,
                                        index: l
                                    }, {
                                        resultMap: h,
                                        results: v,
                                        tokenSearchers: u,
                                        fullSearcher: f
                                    })
                            }
                        }
                    }, {
                        key: "_computeScore",
                        value: function(e, t) {
                            this._log("\n\nComputing score:\n");
                            for (var n = 0, r = t.length; n < r; n += 1) {
                                for (var o = t[n].output, a = o.length, i = 1, s = 1, l = 0; l < a; l += 1) {
                                    var c = e ? e[o[l].key].weight : 1,
                                        u = (1 === c ? o[l].score : o[l].score || .001) * c;
                                    1 !== c ? s = Math.min(s, u) : (o[l].nScore = u, i *= u)
                                }
                                t[n].score = 1 === s ? i : s, this._log(t[n])
                            }
                        }
                    }, {
                        key: "_sort",
                        value: function(e) {
                            this._log("\n\nSorting...."), e.sort(this.options.sortFn)
                        }
                    }, {
                        key: "_format",
                        value: function(e) {
                            var t = [];
                            this.options.verbose && this._log("\n\nOutput:\n\n", JSON.stringify(e));
                            var n = [];
                            this.options.includeMatches && n.push(function(e, t) {
                                var n = e.output;
                                t.matches = [];
                                for (var r = 0, o = n.length; r < o; r += 1) {
                                    var a = n[r];
                                    if (0 !== a.matchedIndices.length) {
                                        var i = {
                                            indices: a.matchedIndices,
                                            value: a.value
                                        };
                                        a.key && (i.key = a.key), a.hasOwnProperty("arrayIndex") && a.arrayIndex > -1 && (i.arrayIndex = a.arrayIndex), t.matches.push(i)
                                    }
                                }
                            }), this.options.includeScore && n.push(function(e, t) {
                                t.score = e.score
                            });
                            for (var r = 0, o = e.length; r < o; r += 1) {
                                var a = e[r];
                                if (this.options.id && (a.item = this.options.getFn(a.item, this.options.id)[0]), n.length) {
                                    for (var i = {
                                            item: a.item
                                        }, s = 0, l = n.length; s < l; s += 1) n[s](a, i);
                                    t.push(i)
                                } else t.push(a.item)
                            }
                            return t
                        }
                    }, {
                        key: "_log",
                        value: function() {
                            var e;
                            this.options.verbose && (e = console).log.apply(e, arguments)
                        }
                    }]), e
                }();
            e.exports = s
        }])
    }, e.exports = r()
}, function(e, t, n) {
    "use strict";
    var r = n(6),
        o = n(24),
        a = n.n(o),
        i = n(0),
        s = n.n(i);
    const l = new a.a(r, {
        shouldSort: !0,
        threshold: .6,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1
    });
    t.default = class extends s.a.Component {
        componentDidMount() {
            document.addEventListener("click", this.handleClickOutside)
        }
        componentWillUnmount() {
            document.removeEventListener("click", this.handleClickOutside)
        }
        render() {
            const {
                onSelect: e,
                value: t
            } = this.props, n = l.search(t);
            return n.length ? s.a.createElement("div", {
                className: "x-login-mnemonic__suggestions",
                tabIndex: -1
            }, n.map(t => {
                const n = r[t];
                return s.a.createElement("div", {
                    tabIndex: -1,
                    className: "x-login-mnemonic__suggestion",
                    onClick: () => e(n)
                }, n)
            })) : null
        }
    }
}, function(e, t, n) {
    "use strict";
    var r = n(0),
        o = n.n(r),
        a = n(9),
        i = n(8),
        s = n(1);

    function l() {
        return (l = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }
    t.default = (e => {
        const {
            handleSubmit: t,
            handlePress: n,
            handleSelect: r,
            value: c,
            status: u,
            restoreFailed: d,
            handleChange: f,
            inputRef: p,
            validMnemonic: h
        } = e, m = u || (h ? 'Click the arrow or press "ENTER" to restore.' : null), v = {
            values: c,
            onChange: f,
            onPress: n,
            onSelect: r
        };
        return o.a.createElement("form", {
            onSubmit: t,
            className: "x-login-form x-login-form--restore",
            autoComplete: "off"
        }, o.a.createElement("div", {
            className: "x-login-form__container"
        }, o.a.createElement("div", {
            className: "x-login-mnemonic"
        }, o.a.createElement("div", {
            className: "x-login-mnemonic__row"
        }, o.a.createElement(s.default, l({
            inputRef: p,
            index: 0
        }, v)), o.a.createElement(s.default, l({
            index: 1
        }, v)), o.a.createElement(s.default, l({
            index: 2
        }, v)), o.a.createElement(s.default, l({
            index: 3
        }, v)), o.a.createElement(s.default, l({
            index: 4
        }, v)), o.a.createElement(s.default, l({
            index: 5
        }, v))), o.a.createElement("div", {
            className: "x-login-mnemonic__row"
        }, o.a.createElement(s.default, l({
            index: 6
        }, v)), o.a.createElement(s.default, l({
            index: 7
        }, v)), o.a.createElement(s.default, l({
            index: 8
        }, v)), o.a.createElement(s.default, l({
            index: 9
        }, v)), o.a.createElement(s.default, l({
            index: 10
        }, v)), o.a.createElement(s.default, l({
            index: 11
        }, v)))), o.a.createElement(i.default, {
            id: "restore-form-submit",
            show: !d && h
        })), o.a.createElement("div", {
            id: "restore-form-text",
            className: "x-login-form__loading-text"
        }, "One moment, Exodus is restoring from your backup..."), o.a.createElement("div", {
            className: "x-login-form__loading loading-line"
        }), o.a.createElement(a.default, {
            status: m,
            hasError: d
        }))
    })
}, function(e, t, n) {
    "use strict";
    var r = n(0),
        o = n.n(r);

    function a() {
        return (a = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }
    t.default = (e => o.a.createElement("svg", a({
        width: 80,
        height: 80,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 80 80"
    }, e), o.a.createElement("mask", {
        id: "a",
        style: {
            maskType: "alpha"
        },
        maskUnits: "userSpaceOnUse",
        x: 0,
        y: 0,
        width: 80,
        height: 80
    }, o.a.createElement("path", {
        d: "M79.521 22.337 45.453 0v12.489L67.308 26.69l-2.571 8.136H45.453v10.348h19.284l2.571 8.136-21.855 14.2V80l34.068-22.266-5.57-17.698 5.57-17.699ZM15.814 45.174h19.212V34.826H15.742l-2.5-8.136 21.784-14.2V0L.958 22.337l5.57 17.699-5.57 17.698L35.098 80V67.511L13.242 53.31l2.57-8.136Z",
        fill: "#1D1D1B"
    })), o.a.createElement("g", {
        mask: "url(#a)"
    }, o.a.createElement("path", {
        d: "M79.521 22.337 45.453 0v12.489L67.308 26.69l-2.571 8.136H45.453v10.348h19.284l2.571 8.136-21.855 14.2V80l34.068-22.266-5.57-17.698 5.57-17.699ZM15.814 45.174h19.212V34.826H15.742l-2.5-8.136 21.784-14.2V0L.958 22.337l5.57 17.699-5.57 17.698L35.098 80V67.511L13.242 53.31l2.57-8.136Z",
        fill: "#fff"
    }), o.a.createElement("path", {
        fill: "url(#b)",
        d: "M1.06 0h86.955v88.477H1.06z"
    }), o.a.createElement("ellipse", {
        cx: 5.822,
        cy: 17.544,
        rx: 76.484,
        ry: 82.924,
        transform: "rotate(-33.93 5.822 17.544)",
        fill: "url(#c)"
    })), o.a.createElement("defs", null, o.a.createElement("radialGradient", {
        id: "c",
        cx: 0,
        cy: 0,
        r: 1,
        gradientUnits: "userSpaceOnUse",
        gradientTransform: "rotate(72.256 -9.106 12.76) scale(62.739 58.8096)"
    }, o.a.createElement("stop", {
        offset: .12,
        stopColor: "#8952FF",
        stopOpacity: .87
    }), o.a.createElement("stop", {
        offset: 1,
        stopColor: "#DABDFF",
        stopOpacity: 0
    })), o.a.createElement("linearGradient", {
        id: "b",
        x1: 68.662,
        y1: 85.897,
        x2: 45.75,
        y2: -8.292,
        gradientUnits: "userSpaceOnUse"
    }, o.a.createElement("stop", {
        stopColor: "#0B46F9"
    }), o.a.createElement("stop", {
        offset: 1,
        stopColor: "#BBFBE0"
    })))))
}, function(e, t, n) {
    "use strict";
    var r = n(0),
        o = n.n(r);

    function a() {
        return (a = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }
    t.default = (e => o.a.createElement("svg", a({
        width: 80,
        height: 80,
        viewBox: "0 0 80 80",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, e), o.a.createElement("mask", {
        id: "a",
        style: {
            maskType: "alpha"
        },
        maskUnits: "userSpaceOnUse",
        x: 0,
        y: 0,
        width: 80,
        height: 80
    }, o.a.createElement("path", {
        d: "M79.52 22.337 45.453 0v12.489L67.306 26.69l-2.571 8.136H45.452v10.348h19.284l2.57 8.136-21.852 14.2V80L79.52 57.734l-5.571-17.698 5.57-17.699ZM15.813 45.174h19.212V34.826H15.742l-2.5-8.136 21.783-14.2V0L.958 22.337l5.57 17.699-5.57 17.698L35.097 80V67.511L13.242 53.31l2.571-8.136Z",
        fill: "#1D1D1B"
    })), o.a.createElement("g", {
        mask: "url(#a)"
    }, o.a.createElement("path", {
        d: "M79.52 22.337 45.453 0v12.489L67.306 26.69l-2.571 8.136H45.452v10.348h19.284l2.57 8.136-21.852 14.2V80L79.52 57.734l-5.571-17.698 5.57-17.699ZM15.813 45.174h19.212V34.826H15.742l-2.5-8.136 21.783-14.2V0L.958 22.337l5.57 17.699-5.57 17.698L35.097 80V67.511L13.242 53.31l2.571-8.136Z",
        fill: "#fff"
    }), o.a.createElement("path", {
        fill: "url(#b)",
        d: "M1.06 0h86.954v88.477H1.06z"
    }), o.a.createElement("ellipse", {
        cx: 39.846,
        cy: -6.199,
        rx: 71.48,
        ry: 77.499,
        transform: "rotate(-33.93 39.846 -6.199)",
        fill: "url(#c)"
    })), o.a.createElement("defs", null, o.a.createElement("radialGradient", {
        id: "c",
        cx: 0,
        cy: 0,
        r: 1,
        gradientUnits: "userSpaceOnUse",
        gradientTransform: "matrix(17.87014 55.8451 -52.3476 16.75096 39.846 -6.199)"
    }, o.a.createElement("stop", {
        offset: .182,
        stopColor: "#FAA"
    }), o.a.createElement("stop", {
        offset: 1,
        stopColor: "#FF9A9A",
        stopOpacity: 0
    })), o.a.createElement("linearGradient", {
        id: "b",
        x1: 74.24,
        y1: 111.68,
        x2: 39.496,
        y2: -23.167,
        gradientUnits: "userSpaceOnUse"
    }, o.a.createElement("stop", {
        offset: .042,
        stopColor: "#FF1D1D"
    }), o.a.createElement("stop", {
        offset: 1,
        stopColor: "#F365FF"
    })))))
}, function(e, t, n) {
    e.exports = n(45)
}, function(e, t) {
    var n = 1e3,
        r = 60 * n,
        o = 60 * r,
        a = 24 * o,
        i = 365.25 * a;

    function s(e, t, n) {
        if (!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + n : Math.ceil(e / t) + " " + n + "s"
    }
    e.exports = function(e, t) {
        t = t || {};
        var l, c = typeof e;
        if ("string" === c && e.length > 0) return function(e) {
            if ((e = String(e)).length > 1e4) return;
            var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
            if (!t) return;
            var s = parseFloat(t[1]);
            switch ((t[2] || "ms").toLowerCase()) {
                case "years":
                case "year":
                case "yrs":
                case "yr":
                case "y":
                    return s * i;
                case "days":
                case "day":
                case "d":
                    return s * a;
                case "hours":
                case "hour":
                case "hrs":
                case "hr":
                case "h":
                    return s * o;
                case "minutes":
                case "minute":
                case "mins":
                case "min":
                case "m":
                    return s * r;
                case "seconds":
                case "second":
                case "secs":
                case "sec":
                case "s":
                    return s * n;
                case "milliseconds":
                case "millisecond":
                case "msecs":
                case "msec":
                case "ms":
                    return s;
                default:
                    return
            }
        }(e);
        if ("number" === c && !1 === isNaN(e)) return t.long ? s(l = e, a, "day") || s(l, o, "hour") || s(l, r, "minute") || s(l, n, "second") || l + " ms" : function(e) {
            if (e >= a) return Math.round(e / a) + "d";
            if (e >= o) return Math.round(e / o) + "h";
            if (e >= r) return Math.round(e / r) + "m";
            if (e >= n) return Math.round(e / n) + "s";
            return e + "ms"
        }(e);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
    }
}, function(e, t, n) {
    "use strict";
    var r = n(15);
    n.o(r, "ENV_BUILD_EDEN") && n.d(t, "ENV_BUILD_EDEN", function() {
        return r.ENV_BUILD_EDEN
    })
}, function(e, t, n) {
    "use strict";
    var r = n(31),
        o = n(28),
        a = n(27);
    t.default = r.ENV_BUILD_EDEN ? o.default : a.default
}, function(e, t, n) {
    var r = n(18),
        o = n(57),
        a = n(55),
        i = "Expected a function",
        s = Math.max,
        l = Math.min;
    e.exports = function(e, t, n) {
        var c, u, d, f, p, h, m = 0,
            v = !1,
            g = !1,
            y = !0;
        if ("function" != typeof e) throw new TypeError(i);

        function b(t) {
            var n = c,
                r = u;
            return c = u = void 0, m = t, f = e.apply(r, n)
        }

        function k(e) {
            var n = e - h;
            return void 0 === h || n >= t || n < 0 || g && e - m >= d
        }

        function w() {
            var e = o();
            if (k(e)) return x(e);
            p = setTimeout(w, function(e) {
                var n = t - (e - h);
                return g ? l(n, d - (e - m)) : n
            }(e))
        }

        function x(e) {
            return p = void 0, y && c ? b(e) : (c = u = void 0, f)
        }

        function E() {
            var e = o(),
                n = k(e);
            if (c = arguments, u = this, h = e, n) {
                if (void 0 === p) return function(e) {
                    return m = e, p = setTimeout(w, t), v ? b(e) : f
                }(h);
                if (g) return clearTimeout(p), p = setTimeout(w, t), b(h)
            }
            return void 0 === p && (p = setTimeout(w, t)), f
        }
        return t = a(t) || 0, r(n) && (v = !!n.leading, d = (g = "maxWait" in n) ? s(a(n.maxWait) || 0, t) : d, y = "trailing" in n ? !!n.trailing : y), E.cancel = function() {
            void 0 !== p && clearTimeout(p), m = 0, c = h = u = p = void 0
        }, E.flush = function() {
            return void 0 === p ? f : x(o())
        }, E
    }
}, function(e, t) {
    function n(e) {
        if (!(this instanceof n)) return new n(e);
        this.value = e
    }

    function r(e, t, n) {
        var r = [],
            a = [],
            i = !0;
        return function e(s) {
            var l = n ? o(s) : s,
                c = {},
                u = {
                    node: l,
                    node_: s,
                    path: [].concat(r),
                    parent: a.slice(-1)[0],
                    key: r.slice(-1)[0],
                    isRoot: 0 === r.length,
                    level: r.length,
                    circular: null,
                    update: function(e) {
                        u.isRoot || (u.parent.node[u.key] = e), u.node = e
                    },
                    delete: function() {
                        delete u.parent.node[u.key]
                    },
                    remove: function() {
                        Array.isArray(u.parent.node) ? u.parent.node.splice(u.key, 1) : delete u.parent.node[u.key]
                    },
                    before: function(e) {
                        c.before = e
                    },
                    after: function(e) {
                        c.after = e
                    },
                    pre: function(e) {
                        c.pre = e
                    },
                    post: function(e) {
                        c.post = e
                    },
                    stop: function() {
                        i = !1
                    }
                };
            if (!i) return u;
            if ("object" == typeof l && null !== l) {
                u.isLeaf = 0 == Object.keys(l).length;
                for (var d = 0; d < a.length; d++)
                    if (a[d].node_ === s) {
                        u.circular = a[d];
                        break
                    }
            } else u.isLeaf = !0;
            u.notLeaf = !u.isLeaf, u.notRoot = !u.isRoot;
            var f = t.call(u, u.node);
            if (void 0 !== f && u.update && u.update(f), c.before && c.before.call(u, u.node), "object" == typeof u.node && null !== u.node && !u.circular) {
                a.push(u);
                var p = Object.keys(u.node);
                p.forEach(function(t, o) {
                    r.push(t), c.pre && c.pre.call(u, u.node[t], t);
                    var a = e(u.node[t]);
                    n && Object.hasOwnProperty.call(u.node, t) && (u.node[t] = a.node), a.isLast = o == p.length - 1, a.isFirst = 0 == o, c.post && c.post.call(u, a), r.pop()
                }), a.pop()
            }
            return c.after && c.after.call(u, u.node), u
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
            var a = function() {
                t = !1
            }.bind(this);
            if (!this.isRoot) {
                if ("object" != typeof r) return a();
                r = r[this.key]
            }
            var i = r;
            this.post(function() {
                r = i
            });
            var s = function(e) {
                return Object.prototype.toString.call(e)
            };
            if (this.circular) n(e).get(this.circular.path) !== i && a();
            else if (typeof i != typeof o) a();
            else if (null === i || null === o || void 0 === i || void 0 === o) i !== o && a();
            else if (i.__proto__ !== o.__proto__) a();
            else if (i === o);
            else if ("function" == typeof i) i instanceof RegExp ? i.toString() != o.toString() && a() : i !== o && a();
            else if ("object" == typeof i)
                if ("[object Arguments]" === s(o) || "[object Arguments]" === s(i)) s(i) !== s(o) && a();
                else if (i instanceof Date || o instanceof Date) i instanceof Date && o instanceof Date && i.getTime() === o.getTime() || a();
            else {
                var l = Object.keys(i),
                    c = Object.keys(o);
                if (l.length !== c.length) return a();
                for (var u = 0; u < l.length; u++) {
                    var d = l[u];
                    Object.hasOwnProperty.call(o, d) || a()
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
            for (var a = 0; a < e.length; a++)
                if (e[a] === r) return t[a];
            if ("object" == typeof r && null !== r) {
                var i = o(r);
                return e.push(r), t.push(i), Object.keys(r).forEach(function(e) {
                    i[e] = n(r[e])
                }), e.pop(), t.pop(), i
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
    var r = n(34),
        o = n.n(r);
    t.default = (e => void 0 === globalThis.Buffer ? e : (o()(e).forEach(function(e) {
        e instanceof Uint8Array && this.update(globalThis.Buffer.from(e))
    }), e))
}, function(e, t, n) {
    "use strict";
    n.d(t, "wrapIpc", function() {
        return s
    });
    var r = n(35);
    const o = new WeakMap,
        a = new WeakMap;

    function i(e, t, n) {
        const i = a.get(e);
        if (i && (i.filter !== t || i.useBuffers !== n)) throw new Error("Attempting to register the same handler with different parameters");
        a.set(e, {
            filter: t,
            useBuffers: n
        });
        const s = o.get(e);
        if (s) return s;
        const l = (o, ...a) => {
            if (!0 !== t(o)) return;
            const i = n ? Object(r.default)(a) : a;
            return e(o, ...i)
        };
        return o.set(e, l), l
    }

    function s(e, t) {
        return {
            on(n, r, o = !0) {
                e.on(n, i(r, t, o))
            },
            once(n, r, o = !0) {
                e.once(n, i(r, t, o))
            },
            removeListener(t, n) {
                e.removeListener(t, o.get(n))
            },
            removeAllListeners(t) {
                e.removeAllListeners(t)
            },
            handle(n, r, o = !0) {
                e.handle(n, i(r, t, o))
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
        return a
    });
    var r = n(37),
        o = n(7);

    function a(e, t, n, a, i, s, {
        wrap: l,
        unwrap: c
    } = {}) {
        const u = `${o.CHANNEL_PREFIX}:${a}:call`,
            d = async (e, u) => {
                const d = n(e, u);
                if (!i.includes(d)) return void console.error(`Skipping unexpected message from (${d}) to channel: ${a}`);
                const {
                    func: f,
                    args: p,
                    token: h
                } = u.payload, [m, v] = await async function(e, t) {
                    if ("function" == typeof s[e]) try {
                        c && (t = c(e, t));
                        let n = await s[e](...t);
                        return l && (n = l(e, n)), [null, n]
                    } catch (e) {
                        return [e, null]
                    }
                    try {
                        return [null, s[e]]
                    } catch (e) {
                        return [e]
                    }
                }(f, p), g = m ? Object(r.toObject)(m) : null;
                t(d, `${o.CHANNEL_PREFIX}:${a}:response:${h}`, [g, v])
            };
        return e.on(u, d), {
            stop: () => e.removeListener(u, d)
        }
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "fromObject", function() {
        return s
    });
    class r extends Error {
        constructor(...e) {
            super(...e), this.name = "UnknownError"
        }
    }
    const o = globalThis,
        a = [...[Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError, URIError], ...[o.RTCError, o.OverconstrainedError, o.DOMError, o.MediaError], r, class extends Error {
            constructor(...e) {
                super(...e), this.name = "AssertionError"
            }
        }],
        i = new Map;
    for (const e of a) e && (e === Error || e.prototype instanceof Error) && i.set(e.name, e);

    function s(e) {
        const t = new(i.get(e.name) || r)(e.message);
        for (const n of Object.keys(e)) n in t || ["__proto__", "name", "message"].includes(n) || (t[n] = e[n]);
        return e.stack && (t.stack = e.stack), t
    }
}, function(e, t, n) {
    "use strict";
    const r = globalThis.crypto;
    t.randomUUID = r.randomUUID.bind(r)
}, function(e, t, n) {
    "use strict";
    var r = n(3);
    const o = [{
        label: "Undo",
        role: "undo"
    }, {
        label: "Redo",
        role: "redo"
    }, {
        type: "separator"
    }, {
        label: "Cut",
        role: "cut"
    }, {
        label: "Copy",
        role: "copy"
    }, {
        label: "Paste",
        role: "paste"
    }, {
        type: "separator"
    }, {
        label: "Select all",
        role: "selectall"
    }];
    t.default = function(e = o) {
        document.body.addEventListener("contextmenu", t => {
            let n = t.target;
            for (; n;) {
                if (n.nodeName.match(/^(input|textarea)$/i) || n.isContentEditable) {
                    t.preventDefault(), t.stopPropagation(), r.rpcRenderer.send("app:showPopupMenu", e);
                    break
                }
                n = n.parentNode
            }
        })
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        const t = e.slice(1);
        return t ? function(e = "") {
            return Object.freeze(JSON.parse(decodeURIComponent(e)))
        }(t) : {}
    }
    n.d(t, "fromHash", function() {
        return r
    })
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
    e.exports = {
        name: "exodus",
        productName: "Exodus",
        version: "25.24.2",
        releaseDate: "25.6.9",
        description: "Secure, manage, and trade blockchain assets."
    }
}, function(e, t, n) {
    "use strict";
    e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
}, function(e, t, n) {
    "use strict";
    var r = n(46);

    function o() {}

    function a() {}
    a.resetWarningCache = o, e.exports = function() {
        function e(e, t, n, o, a, i) {
            if (i !== r) {
                var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                throw s.name = "Invariant Violation", s
            }
        }

        function t() {
            return e
        }
        e.isRequired = e;
        var n = {
            array: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: a,
            resetWarningCache: o
        };
        return n.PropTypes = n, n
    }
}, function(e, t) {
    e.exports = function(e) {
        return null != e && "object" == typeof e
    }
}, function(e, t) {
    var n = Object.prototype.toString;
    e.exports = function(e) {
        return n.call(e)
    }
}, function(e, t, n) {
    var r = n(16),
        o = Object.prototype,
        a = o.hasOwnProperty,
        i = o.toString,
        s = r ? r.toStringTag : void 0;
    e.exports = function(e) {
        var t = a.call(e, s),
            n = e[s];
        try {
            e[s] = void 0;
            var r = !0
        } catch (e) {}
        var o = i.call(e);
        return r && (t ? e[s] = n : delete e[s]), o
    }
}, function(e, t, n) {
    var r = n(16),
        o = n(50),
        a = n(49),
        i = "[object Null]",
        s = "[object Undefined]",
        l = r ? r.toStringTag : void 0;
    e.exports = function(e) {
        return null == e ? void 0 === e ? s : i : l && l in Object(e) ? o(e) : a(e)
    }
}, function(e, t, n) {
    var r = n(51),
        o = n(48),
        a = "[object Symbol]";
    e.exports = function(e) {
        return "symbol" == typeof e || o(e) && r(e) == a
    }
}, function(e, t) {
    var n = /\s/;
    e.exports = function(e) {
        for (var t = e.length; t-- && n.test(e.charAt(t)););
        return t
    }
}, function(e, t, n) {
    var r = n(53),
        o = /^\s+/;
    e.exports = function(e) {
        return e ? e.slice(0, r(e) + 1).replace(o, "") : e
    }
}, function(e, t, n) {
    var r = n(54),
        o = n(18),
        a = n(52),
        i = NaN,
        s = /^[-+]0x[0-9a-f]+$/i,
        l = /^0b[01]+$/i,
        c = /^0o[0-7]+$/i,
        u = parseInt;
    e.exports = function(e) {
        if ("number" == typeof e) return e;
        if (a(e)) return i;
        if (o(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = o(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = r(e);
        var n = l.test(e);
        return n || c.test(e) ? u(e.slice(2), n ? 2 : 8) : s.test(e) ? i : +e
    }
}, function(e, t) {
    e.exports = !1
}, function(e, t, n) {
    var r = n(17);
    e.exports = function() {
        return r.Date.now()
    }
}, function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, "App", function() {
        return b
    });
    var r = n(6),
        o = n(4),
        a = n.n(o),
        i = n(0),
        s = n.n(i),
        l = n(33),
        c = n.n(l),
        u = n(12),
        d = n.n(u),
        f = n(32),
        p = n(11),
        h = n(3),
        m = n(26),
        v = n(23),
        g = n(22);
    const y = Array.from({
        length: 12
    }, () => ({
        value: null,
        error: null
    }));
    class b extends s.a.Component {
        constructor(e) {
            super(e), this.check12PassphraseIsValid = (e => e.every(e => Boolean(e.value) && r.includes(e.value))), this.state = {
                passphrase: "",
                progress: !1,
                status: null,
                loginFailed: !1,
                restoreFailed: !1,
                showLoginAgain: !1,
                capslock: !1,
                passphrase12: y,
                showPassphrase: !1,
                recoverFromPhrase: this.props.recoverFromPhrase
            }, this.focusOnInput = this.focusOnInput.bind(this), this.handleClickLogo = this.handleClickLogo.bind(this), this.handleClickQuit = this.handleClickQuit.bind(this), this.handleClickRestore = this.handleClickRestore.bind(this), this.handleSubmit = this.handleSubmit.bind(this), this.handleClickLogin = this.handleClickLogin.bind(this), this.handleChangePassphrase = this.handleChangePassphrase.bind(this), this.handleChange12Pasphrase = this.handleChange12Pasphrase.bind(this), this.handlePress12Pasphrase = this.handlePress12Pasphrase.bind(this), this.updateErrorsOn12PassphraseChange = c()(this.updateErrorsOn12PassphraseChange, 400), this.handleSelect = this.handleSelect.bind(this)
        }
        componentDidMount() {
            let e = !1;
            this.focusOnInput(), h.rpcRenderer.on("main:passphrase:invalid", () => {
                let t = this.state.recoverFromPhrase ? "Invalid 12-Word Phrase" : "The password you entered is incorrect",
                    n = {
                        status: t += e ? " (CAPS LOCK is on)" : "",
                        progress: !1
                    };
                this.state.recoverFromPhrase ? n.restoreFailed = !0 : n.loginFailed = !0, this.state.recoverFromPhrase || (n.passphrase = ""), this.setState(n, () => this.focusOnInput())
            }), h.rpcRenderer.on("main:saltconn:failed", () => {
                this.setState({
                    status: "Check Internet connection!",
                    progress: !1,
                    loginFailed: !0,
                    restoreFailed: !0
                }, () => this.focusOnInput())
            }), document.addEventListener("keydown", t => {
                e = t.getModifierState("CapsLock")
            }), document.addEventListener("keyup", t => {
                e = t.getModifierState("CapsLock")
            }), this.state.recoverFromPhrase && console.log("To set BIP39 passphrase, type globalThis.BIP39_PASS = 'your passphrase'")
        }
        componentDidUpdate(e, t) {
            t.restoreFailed && t.passphrase12 !== this.state.passphrase12 && this.setState({
                restoreFailed: !1,
                status: null
            }), t.loginFailed && t.passphrase !== this.state.passphrase && this.setState({
                loginFailed: !1,
                status: null
            })
        }
        focusOnInput() {
            setTimeout(() => {
                this.state.recoverFromPhrase ? this.passphrase12Input.focus() : this.input.focus()
            }, 900)
        }
        handleClickQuit() {
            h.rpcRenderer.sendSync("app:quit")
        }
        handleClickRestore() {
            this.setState({
                recoverFromPhrase: !0,
                status: null,
                passphrase: "",
                loginFailed: !1
            }, this.focusOnInput)
        }
        handleClickLogin() {
            this.setState({
                recoverFromPhrase: !1,
                status: null,
                restoreFailed: !1,
                passphrase12: y,
                showLoginAgain: !0
            }, this.focusOnInput)
        }
        handleSubmit(e) {
            e.preventDefault();
            const { recoverFromPhrase: t } = this.state;
            const n = t ? null : "Unlocking...";
            
            this.setState({
                progress: !0,
                status: n
            }, () => {
                t ? p.default.setMnemonic({
                    mnemonic: this.state.passphrase12.map(e => e.value).join(" "),
                    passphrase: globalThis.BIP39_PASS
                }) : p.default.setPassphrase(this.state.passphrase)
            })
        }
        handleClickLogo() {
            this.setState(e => ({
                showPassphrase: !e.showPassphrase
            }))
        }
        handleChangePassphrase(e) {
            const t = e.target.selectionStart;
            this.setState({
                passphrase: e.target.value
            }, () => {
                this.input.setSelectionRange(t, t)
            })
        }
        handlePress12Pasphrase(e, t) {
            if (32 === e.keyCode && t !== this.state.passphrase12.length - 1) {
                document.getElementById(`x-login-mnemonic__input-${t+1}`).focus(), e.preventDefault()
            }
        }
        get12PassphraseState(e) {
            return this.check12PassphraseIsValid(e) ? e : e.map(e => ({
                ...e,
                error: Boolean(e.value) && !r.includes(e.value)
            }))
        }
        updateErrorsOn12PassphraseChange(e) {
            const t = this.get12PassphraseState(e);
            t !== e && this.setState({
                passphrase12: t
            })
        }
        handleChange12Pasphrase(e) {
            const {
                name: t,
                value: n
            } = e.target, {
                passphrase12: r
            } = this.state, o = e.target.selectionStart, a = e.target.selectionEnd;
            let i = [...r];
            const s = n.split(" ");
            "insertFromPaste" === e.inputType && 12 === s.length ? i = s.map(e => ({
                value: e,
                error: null
            })) : i[t] = {
                value: n,
                error: null
            }, this.setState({
                passphrase12: i
            }, () => {
                this.updateErrorsOn12PassphraseChange(i), e.target.setSelectionRange(o, a)
            })
        }
        handleSelect(e, t) {
            let n = [...this.state.passphrase12];
            n[t] = {
                value: e,
                error: null
            }, this.setState({
                passphrase12: this.get12PassphraseState(n)
            })
        }
        render() {
            let {
                status: e,
                passphrase: t,
                progress: n,
                loginFailed: r,
                restoreFailed: o,
                showPassphrase: i,
                passphrase12: l,
                recoverFromPhrase: c,
                showLoginAgain: u
            } = this.state;
            const d = !this.props.recoverFromPhrase;
            return s.a.createElement("div", {
                className: a()("x-login", {
                    "x-login--logging": n,
                    "x-login--error": c ? o : r,
                    "x-login--restore": c,
                    "x-login--again": u && !c
                })
            }, s.a.createElement("div", {
                className: "x-login__bg-top"
            }), s.a.createElement("div", {
                className: "x-login__bg-wrapper"
            }, s.a.createElement("div", {
                className: "x-login__logo"
            }, s.a.createElement(f.default, null), s.a.createElement(v.default, {
                className: "x-login__logo--shield-icon"
            })), s.a.createElement("div", {
                className: "x-login-content"
            }, s.a.createElement("h1", {
                className: "x-login-content__heading"
            }, c ? "Restore Wallet" : "Unlock to Continue"), s.a.createElement("span", {
                className: "x-login-content__subheading"
            }, c ? "Type your 12-Word Phrase" : "Your wallet is secured"), s.a.createElement(g.default, {
                hidden: c,
                passphrase: t,
                handleChangePassphrase: this.handleChangePassphrase,
                handleClickLogo: this.handleClickLogo,
                handleSubmit: this.handleSubmit,
                progress: n,
                showPassphrase: i,
                status: e,
                inputRef: e => {
                    this.input = e
                },
                loginFailed: r
            }), s.a.createElement(m.default, {
                value: l,
                handleSelect: this.handleSelect,
                handleSubmit: this.handleSubmit,
                handleChange: this.handleChange12Pasphrase,
                handlePress: this.handlePress12Pasphrase,
                status: e,
                inputRef: e => {
                    this.passphrase12Input = e
                },
                validMnemonic: this.check12PassphraseIsValid(l),
                restoreFailed: o
            }), s.a.createElement("div", {
                className: "x-login-links"
            }, s.a.createElement("span", {
                className: "x-login-links__item",
                onClick: () => {
                    h.rpcRenderer.invoke("openExternal", "https://www.exodus.com/support")
                },
                id: "x-login-links__item1"
            }, s.a.createElement("span", {
                className: "x-login-links__icon"
            }, s.a.createElement("svg", {
                viewBox: "0 0 20 20",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink"
            }, s.a.createElement("path", {
                d: "M10,0 C15.5131817,0 20,4.4848058 20,9.99899376 C20,15.5131817 15.5131817,19.9989938 10,19.9989938 C4.48681827,19.9989938 -1.24344979e-14,15.514188 -1.24344979e-14,10 C-1.24344979e-14,4.48581203 4.48681827,0 10,0 Z M10,19.0460857 C14.9889314,19.0460857 19.047092,14.9879251 19.047092,9.99899376 C19.047092,5.01006239 14.9889314,0.951901791 10,0.951901791 C5.01106863,0.951901791 0.95290803,5.01006239 0.95290803,9.99899376 C0.95290803,14.9879251 5.01106863,19.0460857 10,19.0460857 Z M9.5240491,13.3326625 L10.4759509,13.3326625 L10.4759509,14.2845643 L9.5240491,14.2845643 L9.5240491,13.3326625 Z M10,5.71342322 C11.3795532,5.71342322 12.3807607,6.71463071 12.381767,8.09519018 C12.381767,8.93741195 11.7951298,9.78969612 11.2497484,10.2253975 C10.5997183,10.7436104 10.4769571,11.0082512 10.4769571,11.88871 L10.4769571,12.3797545 L9.52505534,12.3797545 L9.52505534,11.88871 C9.52505534,10.7214731 9.77762125,10.181123 10.6550614,9.48078084 C11.0354196,9.17589052 11.4288589,8.57516603 11.4288589,8.09418394 C11.4288589,7.2398873 10.8542966,6.66532502 10,6.66532502 C9.11853492,6.66532502 8.57114107,7.21271886 8.57114107,8.09418394 L7.61923928,8.09418394 C7.61923928,6.69249346 8.59830952,5.71342322 10,5.71342322 Z"
            }))), s.a.createElement("span", {
                className: "x-login-links__text"
            }, "Help")), !c && s.a.createElement("span", {
                onClick: this.handleClickRestore,
                className: "x-login-links__item",
                id: "x-login-links__item2"
            }, s.a.createElement("span", {
                className: "x-login-links__icon"
            }, s.a.createElement("svg", {
                viewBox: "0 0 22 20",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink"
            }, s.a.createElement("path", {
                d: "M2.38364737,7.84859185 L0.0842241804,4.21327044 C-0.0194402241,4.04994224 -0.0279926338,3.84368777 0.0617942405,3.67233805 C0.151581115,3.50098832 0.326037814,3.39063022 0.519332343,3.38290784 C0.712626872,3.37518546 0.895331415,3.47127449 0.998501617,3.63491531 L2.68786206,6.30574901 C4.59301403,1.51512794 9.82830954,-1.0415734 14.7777608,0.40154358 C19.7272121,1.84466056 22.768006,6.81443045 21.7998842,11.8782624 C20.8317624,16.9420944 16.17215,20.4396727 11.0394139,19.9552404 C5.90667786,19.4708081 1.98372603,15.1631998 1.9801182,10.0076551 C1.9801182,9.70894913 2.22226721,9.46680012 2.52097315,9.46680012 C2.81967909,9.46680012 3.0618281,9.70894913 3.0618281,10.0076551 C3.06374538,14.6174946 6.57503074,18.4678949 11.1651715,18.8936079 C15.7553123,19.3193208 19.9148275,16.1803495 20.7644996,11.6494908 C21.6141716,7.11863201 18.8745835,2.68587167 14.4420788,1.41956768 C10.0095741,0.15326368 5.3417947,2.46984373 3.66977882,6.76577049 L6.55849864,5.95754119 C6.84592987,5.87776667 7.14369057,6.04573211 7.2240793,6.33299216 C7.30446803,6.62025221 7.13713947,6.91837127 6.85005191,6.99937385 L2.98956177,8.07946119 L2.98842327,8.07977489 L2.98655732,8.08031574 C2.97957759,8.08226282 2.97261137,8.08152185 2.96561271,8.08318768 C2.93197857,8.09120773 2.89764558,8.09594528 2.86309636,8.09733375 C2.85580023,8.09763122 2.84860956,8.10038687 2.84130802,8.10038687 L2.84089426,8.10033819 L2.84051567,8.10038687 L2.83803855,8.09997312 C2.83468795,8.09993796 2.83145364,8.09883462 2.82811927,8.09875079 C2.79461976,8.09773938 2.76128803,8.09360008 2.72855869,8.08638684 C2.72086503,8.08473723 2.71297666,8.08460472 2.7053506,8.08264142 L2.70160518,8.08203025 C2.69429283,8.08008318 2.68800539,8.07643511 2.68084176,8.07420679 C2.67069262,8.07105901 2.6613818,8.06686468 2.6514463,8.06311926 C2.63079087,8.05604496 2.61057882,8.0477369 2.59091922,8.03823993 C2.58151105,8.03335331 2.57317377,8.02678463 2.56403061,8.02133822 C2.55074451,8.01336601 2.53723666,8.00565613 2.524797,7.99666171 C2.52147074,7.99426572 2.51778752,7.99268642 2.51452075,7.99020931 C2.50532892,7.98324851 2.49745407,7.97507348 2.48877335,7.96756371 C2.47860528,7.95881538 2.46914843,7.94955595 2.45959152,7.93996659 C2.4411024,7.92137597 2.42400072,7.9014552 2.40842394,7.88036437 C2.4028937,7.87293843 2.39700649,7.86622102 2.39186837,7.85847868 C2.38943993,7.85483061 2.38600821,7.85232104 2.38364737,7.84859185 Z M11.9859348,3.15678061 C12.2846346,3.15679554 12.5267748,3.3989358 12.5267898,3.69763556 L12.5267898,9.46680012 L18.2959543,9.46680012 C18.5946603,9.46680012 18.8368093,9.70894913 18.8368093,10.0076551 C18.8368093,10.306361 18.5946603,10.54851 18.2959543,10.54851 L11.9859348,10.54851 C11.6872351,10.5484951 11.4450948,10.3063548 11.4450799,10.0076551 L11.4450799,3.69763556 C11.4450948,3.3989358 11.6872351,3.15679554 11.9859348,3.15678061 Z"
            }))), s.a.createElement("span", {
                className: "x-login-links__text"
            }, "Restore")), c && d && s.a.createElement("span", {
                onClick: this.handleClickLogin,
                className: "x-login-links__item",
                id: "x-login-links__item2"
            }, s.a.createElement("span", {
                className: "x-login-links__icon x-login-links__icon--come-back"
            }, s.a.createElement("svg", {
                width: "17",
                height: "12",
                xmlns: "http://www.w3.org/2000/svg"
            }, s.a.createElement("g", {
                fill: "#FFF"
            }, s.a.createElement("path", {
                d: "M12.044 12H.642C.282 12 0 11.745 0 11.42c0-.325.282-.58.642-.58h11.402c2.029 0 3.698-1.508 3.698-3.34 0-1.832-1.67-3.34-3.698-3.34H5.778c-.36 0-.642-.255-.642-.58 0-.325.282-.58.642-.58h6.266C14.792 3 17 5.018 17 7.477 17 10.005 14.792 12 12.044 12z"
            }), s.a.createElement("path", {
                d: "M7.308 7a.69.69 0 0 1-.511-.22L4.16 3.943a.526.526 0 0 1 0-.758L6.797.226c.242-.269.645-.293.94-.098a.58.58 0 0 1 .108.856L5.56 3.552l2.285 2.47c.242.244.189.636-.08.856A1.174 1.174 0 0 1 7.308 7z"
            })))), s.a.createElement("span", {
                className: "x-login-links__text"
            }, "Back to Login")), s.a.createElement("span", {
                className: "x-login-links__item",
                id: "x-login-links__item3",
                onClick: this.handleClickQuit
            }, s.a.createElement("span", {
                className: "x-login-links__icon"
            }, s.a.createElement("svg", {
                viewBox: "0 0 21 22",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink"
            }, s.a.createElement("path", {
                d: "M11.6345058,1.21251149 C16.6893858,1.89505653 20.5,6.26045793 20.5,11.3684211 C20.5,17.0204396 15.9020186,21.6184211 10.25,21.6184211 C4.59798144,21.6184211 0,17.0204396 0,11.3684211 C0,6.26045793 3.81061424,1.89505653 8.86549422,1.21251149 L9.11319966,1.17906458 L9.25072398,2.1961288 L9.00293241,2.22959302 C4.45616617,2.84363317 1.02631579,6.77302644 1.02631579,11.3684211 C1.02631579,16.4542972 5.16412382,20.5921053 10.25,20.5921053 C15.3358762,20.5921053 19.4736842,16.4542972 19.4736842,11.3684211 C19.4736842,6.77302644 16.0438338,2.84363317 11.4970676,2.22959302 L11.249276,2.1961288 L11.3868003,1.17906458 L11.6345058,1.21251149 Z M10.7631579,0 L10.7631579,8.65789474 L9.73684211,8.65789474 L9.73684211,0 L10.7631579,0 Z"
            }))), s.a.createElement("span", {
                className: "x-login-links__text"
            }, "Quit"))))))
        }
    }
    b.propTypes = {
        recoverFromLink: d.a.bool,
        recoverFromPhrase: d.a.bool
    }
}, function(e, t, n) {
    /*!
     * inferno v1.1.2
     * (c) 2017 Dominic Gannaway
     * Released under the MIT License.
     */
    ! function(e) {
        "use strict";
        var t = "$NO_OP",
            n = "a runtime error occured! Use Inferno in development environment to find the error.",
            r = window.document,
            o = Array.isArray;

        function a(e) {
            var t = typeof e;
            return "string" === t || "number" === t
        }

        function i(e) {
            return p(e) || f(e)
        }

        function s(e) {
            return f(e) || !1 === e || function(e) {
                return !0 === e
            }(e) || p(e)
        }

        function l(e) {
            return "function" == typeof e
        }

        function c(e) {
            return "o" === e[0] && "n" === e[1] && e.length > 3
        }

        function u(e) {
            return "string" == typeof e
        }

        function d(e) {
            return "number" == typeof e
        }

        function f(e) {
            return null === e
        }

        function p(e) {
            return void 0 === e
        }

        function h(e) {
            return "object" == typeof e
        }

        function m(e) {
            throw e || (e = n), new Error("Inferno Error: " + e)
        }
        var v = {};

        function g(e, t) {
            return t.key = e, t
        }

        function y(e, t) {
            return d(e) && (e = "." + e), f(t.key) || "." === t.key[0] ? g(e, t) : t
        }

        function b(e, t) {
            return t.key = e + t.key, t
        }

        function k(e, t, n, r) {
            for (; n < e.length; n++) {
                var i = e[n],
                    l = r + "." + n;
                s(i) || (o(i) ? k(i, t, 0, l) : (a(i) ? i = N(i) : (P(i) && i.dom || i.key && "." === i.key[0]) && (i = S(i)), i = f(i.key) || "." === i.key[0] ? g(l, i) : b(r, i), t.push(i)))
            }
        }

        function w(e) {
            return o(e) ? function(e) {
                var t;
                e.$ ? e = e.slice() : e.$ = !0;
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    if (s(r) || o(r)) {
                        var i = (t || e).slice(0, n);
                        return k(e, i, n, ""), i
                    }
                    a(r) ? (t || (t = e.slice(0, n)), t.push(y(n, N(r)))) : P(r) && r.dom || f(r.key) && !(64 & r.flags) ? (t || (t = e.slice(0, n)), t.push(y(n, S(r)))) : t && t.push(y(n, S(r)))
                }
                return t || e
            }(e) : P(e) && e.dom ? S(e) : e
        }

        function x(e, t) {
            for (var n in e) p(t[n]) && (t[n] = e[n])
        }

        function E(e) {
            var t = e.props,
                n = !f(t),
                r = e.type,
                o = e.children;
            u(r) && 28 & e.flags && (function(e, t) {
                t.flags = "svg" === e ? 128 : "input" === e ? 512 : "select" === e ? 2048 : "textarea" === e ? 1024 : "media" === e ? 256 : 2
            }(r, e), n && t.children && (e.children = t.children, o = t.children)), n && function(e, t, n) {
                28 & e.flags || !i(n) || i(t.children) || (e.children = t.children), t.ref && (e.ref = t.ref, delete t.ref), t.events && (e.events = t.events), i(t.key) || (e.key = t.key, delete t.key)
            }(e, t, o), s(o) || (e.children = w(o)), n && !s(t.children) && (t.children = w(t.children))
        }
        var _ = {
            recyclingEnabled: !0,
            findDOMNodeEnabled: !1,
            roots: null,
            createVNode: null,
            beforeRender: null,
            afterRender: null,
            afterMount: null,
            afterUpdate: null,
            beforeUnmount: null
        };

        function C(e, t, n, r, o, a, i, s) {
            var l;
            16 & e && (e = p((l = t).prototype) || p(l.prototype.render) ? 8 : 4);
            var c = {
                children: p(r) ? null : r,
                dom: null,
                events: o || null,
                flags: e,
                key: p(a) ? null : a,
                props: n || null,
                ref: i || null,
                type: t
            };
            return s || E(c), _.createVNode && _.createVNode(c), c
        }

        function S(e, t) {
            for (var n = [], r = arguments.length - 2; r-- > 0;) n[r] = arguments[r + 2];
            var a, l = n;
            if (n.length > 0 && !f(n[0]) && (t || (t = {}), 1 === n.length && (l = n[0]), p(t.children) ? t.children = l : o(l) ? o(t.children) ? t.children = t.children.concat(l) : t.children = [t.children].concat(l) : o(t.children) ? t.children.push(l) : (t.children = [t.children], t.children.push(l))), l = null, o(e)) {
                for (var c = [], u = 0; u < e.length; u++) c.push(S(e[u]));
                a = c
            } else {
                var d = e.flags,
                    h = e.events || t && t.events || null,
                    m = i(e.key) ? t ? t.key : null : e.key,
                    v = e.ref || (t ? t.ref : null);
                if (28 & d) {
                    var g = (a = C(d, e.type, Object.assign({}, e.props, t), null, h, m, v, !0)).props;
                    if (g) {
                        var y = g.children;
                        if (y)
                            if (o(y))
                                for (var b = 0; b < y.length; b++) {
                                    var k = y[b];
                                    !s(k) && P(k) && (g.children[b] = S(k))
                                } else P(y) && (g.children = S(y))
                    }
                    a.children = null
                } else 3970 & d ? (l = t && t.children || e.children, a = C(d, e.type, Object.assign({}, e.props, t), l, h, m, v, !l)) : 1 & d && (a = N(e.children))
            }
            return a
        }

        function O() {
            return C(4096)
        }

        function N(e) {
            return C(1, null, null, e, null, null, null, !0)
        }

        function P(e) {
            return !!e.flags
        }
        var L = function() {
            this.listeners = [], this.fastUnmount = !0
        };

        function M(e, t, n) {
            e.split(",").forEach(function(e) {
                return t[e] = n
            })
        }
        L.prototype.addListener = function(e) {
            this.listeners.push(e)
        }, L.prototype.trigger = function() {
            for (var e = 0; e < this.listeners.length; e++) this.listeners[e]()
        };
        var j = "http://www.w3.org/2000/svg",
            A = {},
            I = {},
            U = {},
            T = {},
            F = {},
            R = {
                httpEquiv: "http-equiv",
                acceptCharset: "accept-charset"
            },
            D = /^(accentH|arabicF|capH|font[FSVW]|glyph[NO]|horiz[AO]|panose1|renderingI|strikethrough[PT]|underline[PT]|v[AHIM]|vert[AO]|xH|alignmentB|baselineS|clip[PR]|color[IPR]|dominantB|enableB|fill[OR]|flood[COF]|imageR|letterS|lightingC|marker[EMS]|pointerE|shapeR|stop[CO]|stroke[DLMOW]|text[ADR]|unicodeB|wordS|writingM).*/;

        function V(e, t, n) {
            return t + "-" + n.toLowerCase()
        }
        var B = {};
        M("xlink:href,xlink:arcrole,xlink:actuate,xlink:role,xlink:titlef,xlink:type", U, "http://www.w3.org/1999/xlink"), M("xml:base,xml:lang,xml:space", U, "http://www.w3.org/XML/1998/namespace"), M("volume,defaultValue,defaultChecked", A, !0), M("children,ref,key,selected,checked,value,multiple", F, !0), M("onClick,onMouseDown,onMouseUp,onMouseMove,onSubmit,onDblClick,onKeyDown,onKeyUp,onKeyPress", B, !0), M("muted,scoped,loop,open,checked,default,capture,disabled,readOnly,required,autoplay,controls,seamless,reversed,allowfullscreen,novalidate,hidden", I, !0), M("animationIterationCount,borderImageOutset,borderImageSlice,borderImageWidth,boxFlex,boxFlexGroup,boxOrdinalGroup,columnCount,flex,flexGrow,flexPositive,flexShrink,flexNegative,flexOrder,gridRow,gridColumn,fontWeight,lineClamp,lineHeight,opacity,order,orphans,tabSize,widows,zIndex,zoom,fillOpacity,floodOpacity,stopOpacity,strokeDasharray,strokeDashoffset,strokeMiterlimit,strokeOpacity,strokeWidth,", T, !0);
        var z = r && !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform),
            W = new Map;

        function q(e, t, n, r) {
            var o = W.get(e);
            if (n) {
                if (!o) {
                    o = {
                        items: new Map,
                        count: 0,
                        docEvent: null
                    };
                    var a = function(e, t) {
                        var n = function(e) {
                            var n = {
                                stopPropagation: !1,
                                dom: document
                            };
                            Object.defineProperty(e, "currentTarget", {
                                configurable: !0,
                                get: function() {
                                    return n.dom
                                }
                            }), e.stopPropagation = function() {
                                n.stopPropagation = !0
                            };
                            var r = t.count;
                            r > 0 && function e(t, n, r, o, a) {
                                var i = r.get(n);
                                if (!i || (o--, a.dom = n, i.event ? i.event(i.data, t) : i(t), !a.stopPropagation)) {
                                    var s = n.parentNode;
                                    o > 0 && (s || s === document.body) && e(t, s, r, o, a)
                                }
                            }(e, e.target, t.items, r, n)
                        };
                        return document.addEventListener(H(e), n), n
                    }(e, o);
                    o.docEvent = a, W.set(e, o)
                }
                t || (o.count++, z && "onClick" === e && function(e) {
                    e.onclick = $
                }(r)), o.items.set(r, n)
            } else o && o.items.has(r) && (o.count--, o.items.delete(r), 0 === o.count && (document.removeEventListener(H(e), o.docEvent), W.delete(e)))
        }

        function H(e) {
            return e.substr(2).toLowerCase()
        }

        function $() {}

        function Z(e) {
            return "checkbox" === e || "radio" === e
        }

        function G(e, t) {
            var n = e.props || v;
            if (J(e, t), function(e) {
                    return Z(e.type) ? !i(e.checked) : !i(e.value)
                }(n)) {
                var r = ne.get(t);
                r || (r = {
                    vNode: e
                }, Z(n.type) ? (t.onclick = function(e) {
                    var t = this.vNode,
                        n = t.events || v,
                        r = t.dom;
                    if (n.onClick) {
                        var o = n.onClick;
                        o.event ? o.event(o.data, e) : o(e)
                    } else n.onclick && n.onclick(e);
                    J(this.vNode, r)
                }.bind(r), t.onclick.wrapped = !0) : (t.oninput = function(e) {
                    var t = this.vNode,
                        n = t.events || v,
                        r = t.dom;
                    if (n.onInput) {
                        var o = n.onInput;
                        o.event ? o.event(o.data, e) : o(e)
                    } else n.oninput && n.oninput(e);
                    J(this.vNode, r)
                }.bind(r), t.oninput.wrapped = !0), n.onChange && (t.onchange = function(e) {
                    var t = (this.vNode.events || v).onChange;
                    t.event ? t.event(t.data, e) : t(e)
                }.bind(r), t.onchange.wrapped = !0), ne.set(t, r)), r.vNode = e
            }
        }

        function J(e, t) {
            var n, r, o = e.props || v,
                a = o.type,
                s = o.value,
                l = o.checked,
                c = o.multiple;
            a && a !== t.type && (t.type = a), c && c !== t.multiple && (t.multiple = c), Z(a) ? (i(s) || (t.value = s), t.checked = l, "radio" === a && o.name && (n = o.name, r = document.querySelectorAll('input[type="radio"][name="' + n + '"]'), [].forEach.call(r, function(e) {
                var t = ne.get(e);
                if (t) {
                    var n = t.vNode.props;
                    n && (e.checked = t.vNode.props.checked)
                }
            }))) : i(s) || t.value === s ? i(l) || (t.checked = l) : t.value = s
        }

        function K(e, t) {
            var n = e.type;
            if ("optgroup" === n) {
                var r = e.children;
                if (o(r))
                    for (var a = 0; a < r.length; a++) X(r[a], t);
                else P(r) && X(r, t)
            } else X(e, t)
        }

        function X(e, t) {
            var n = e.props || v,
                r = e.dom;
            r.value = n.value, o(t) && -1 !== t.indexOf(n.value) || n.value === t ? r.selected = !0 : r.selected = n.selected || !1
        }

        function Y(e, t) {
            var n = e.props || v;
            if (Q(e, t), function(e) {
                    return !i(e.value)
                }(n)) {
                var r = ne.get(t);
                r || (r = {
                    vNode: e
                }, t.onchange = function(e) {
                    var t = this.vNode,
                        n = t.events || v,
                        r = t.dom;
                    if (n.onChange) {
                        var o = n.onChange;
                        o.event ? o.event(o.data, e) : o(e)
                    } else n.onchange && n.onchange(e);
                    Q(this.vNode, r)
                }.bind(r), t.onchange.wrapped = !0, ne.set(t, r)), r.vNode = e
            }
        }

        function Q(e, t) {
            var n = e.props || v;
            n.multiple !== t.multiple && (t.multiple = n.multiple);
            var r = e.children,
                a = n.value;
            if (o(r))
                for (var i = 0; i < r.length; i++) K(r[i], a);
            else P(r) && K(r, a)
        }

        function ee(e, t) {
            var n = e.props || v;
            te(e, t);
            var r = ne.get(t);
            (function(e) {
                return !i(e.value)
            })(n) && (r || (r = {
                vNode: e
            }, t.oninput = function(e) {
                var t = this.vNode,
                    n = t.events || v,
                    r = t.dom;
                if (n.onInput) {
                    var o = n.onInput;
                    o.event ? o.event(o.data, e) : o(e)
                } else n.oninput && n.oninput(e);
                te(this.vNode, r)
            }.bind(r), t.oninput.wrapped = !0, n.onChange && (t.onchange = function(e) {
                var t = (this.vNode.events || v).onChange;
                t.event ? t.event(t.data, e) : t(e)
            }.bind(r), t.onchange.wrapped = !0), ne.set(t, r)), r.vNode = e)
        }

        function te(e, t) {
            var n = e.props || v,
                r = n.value;
            t.value !== r && (i(r) || (t.value = r))
        }
        var ne = new Map;

        function re(e, t, n) {
            512 & e ? G(t, n) : 2048 & e ? Y(t, n) : 1024 & e && ee(t, n)
        }

        function oe(e, t, n, r, a) {
            var c = e.flags;
            28 & c ? function(e, t, n, r, o) {
                var a = e.children,
                    s = 4 & e.flags,
                    l = e.ref,
                    c = e.dom;
                if (!ae.has(e) || o || t) {
                    if (ae.set(e), !o)
                        if (s) {
                            if (!a._unmounted) {
                                a._ignoreSetState = !0, _.beforeUnmount && _.beforeUnmount(e), a.componentWillUnmount && a.componentWillUnmount(), l && !o && l(null), a._unmounted = !0, _.findDOMNodeEnabled && Fe.delete(a);
                                var u = a._lifecycle;
                                u.fastUnmount || oe(a._lastInput, null, u, !1, o)
                            }
                        } else i(l) || i(l.onComponentWillUnmount) || l.onComponentWillUnmount(c), n.fastUnmount || oe(a, null, n, !1, o);
                    if (t) {
                        var d = a._lastInput;
                        i(d) && (d = a), je(t, c)
                    }
                    _.recyclingEnabled && !s && (t || r) && function(e) {
                        var t = e.type,
                            n = e.key,
                            r = e.ref;
                        if (!r || !(r.onComponentWillMount || r.onComponentWillUnmount || r.onComponentDidMount || r.onComponentWillUpdate || r.onComponentDidUpdate)) {
                            var o = pe.get(t);
                            if (p(o) && (o = {
                                    nonKeyed: [],
                                    keyed: new Map
                                }, pe.set(t, o)), f(n)) o.nonKeyed.push(e);
                            else {
                                var a = o.keyed.get(n);
                                p(a) && (a = [], o.keyed.set(n, a)), a.push(e)
                            }
                        }
                    }(e)
                }
            }(e, t, n, r, a) : 3970 & c ? function(e, t, n, r, a) {
                var c = e.dom,
                    u = e.ref,
                    d = e.events;
                if (!ae.has(e) || a || t) {
                    if (ae.set(e), !n.fastUnmount) {
                        u && !a && function(e) {
                            if (l(e)) e(null);
                            else {
                                if (s(e)) return;
                                m()
                            }
                        }(u);
                        var v = e.children;
                        i(v) || function(e, t, n) {
                            if (o(e))
                                for (var r = 0; r < e.length; r++) {
                                    var a = e[r];
                                    !s(a) && h(a) && oe(a, null, t, !1, n)
                                } else h(e) && oe(e, null, t, !1, n)
                        }(v, n, a)
                    }
                    if (!f(d))
                        for (var g in d) de(g, d[g], null, c), d[g] = null;
                    t && je(t, c), _.recyclingEnabled && (t || r) && function(e) {
                        var t = e.type,
                            n = e.key,
                            r = he.get(t);
                        if (p(r) && (r = {
                                nonKeyed: [],
                                keyed: new Map
                            }, he.set(t, r)), f(n)) r.nonKeyed.push(e);
                        else {
                            var o = r.keyed.get(n);
                            p(o) && (o = [], r.keyed.set(n, o)), o.push(e)
                        }
                    }(e)
                }
            }(e, t, n, r, a) : 4097 & c && function(e, t) {
                t && je(t, e.dom)
            }(e, t)
        }
        var ae = new WeakMap;

        function ie(e, t, n, r, o, a, i) {
            if (e !== t) {
                var s = e.flags,
                    l = t.flags;
                28 & l ? 28 & s ? ce(e, t, n, r, o, a, 4 & l, i) : Ce(n, ke(t, null, r, o, a, 4 & l), e, r, i) : 3970 & l ? 3970 & s ? le(e, t, n, r, o, a, i) : Ce(n, ye(t, null, r, o, a), e, r, i) : 1 & l ? 1 & s ? function(e, t) {
                    var n = t.children,
                        r = e.dom;
                    t.dom = r, e.children !== n && (r.nodeValue = n)
                }(e, t) : Ce(n, ve(t, null), e, r, i) : 4096 & l ? 4096 & s ? function(e, t) {
                    t.dom = e.dom
                }(e, t) : Ce(n, ge(t, null), e, r, i) : function(e, t, n, r, o, a, i) {
                    Ce(n, me(t, null, r, o, a), e, r, i)
                }(e, t, n, r, o, a, i)
            }
        }

        function se(e, t, n, r) {
            P(e) ? oe(e, t, n, !0, r) : o(e) ? Ae(t, e, n, r) : t.textContent = ""
        }

        function le(e, t, n, r, l, c, u) {
            var d = t.type,
                h = e.type;
            if (h !== d) Le(e, t, n, r, l, c, u);
            else {
                var m = e.dom,
                    g = e.props,
                    y = t.props,
                    b = e.children,
                    k = t.children,
                    w = e.flags,
                    x = t.flags,
                    E = e.ref,
                    _ = t.ref,
                    C = e.events,
                    O = t.events;
                t.dom = m, (c || 128 & x) && (c = !0), b !== k && function(e, t, n, r, l, c, u, d, h) {
                    var m = !1,
                        v = !1;
                    64 & t ? m = !0 : 32 & e && 32 & t ? (v = !0, m = !0) : s(r) ? se(n, l, c, h) : s(n) ? a(r) ? Oe(l, r) : o(r) ? be(r, l, c, u, d) : me(r, l, c, u, d) : a(r) ? a(n) ? function(e, t) {
                        e.firstChild.nodeValue = t
                    }(l, r) : (se(n, l, c, h), Oe(l, r)) : o(r) ? o(n) ? (m = !0, function(e, t) {
                        return t.length && !i(t[0]) && !i(t[0].key) && e.length && !i(e[0]) && !i(e[0].key)
                    }(n, r) && (v = !0)) : (se(n, l, c, h), be(r, l, c, u, d)) : o(n) ? (Ae(l, n, c, h), me(r, l, c, u, d)) : P(r) && (P(n) ? ie(n, r, l, c, u, d, h) : (se(n, l, c, h), me(r, l, c, u, d))), m && (v ? function(e, t, n, r, o, a, i) {
                        var s, l, c, u, d, h, m, v = e.length,
                            g = t.length,
                            y = v - 1,
                            b = g - 1,
                            k = 0,
                            w = 0;
                        if (0 !== v)
                            if (0 !== g) {
                                var x = e[k],
                                    E = t[w],
                                    _ = e[y],
                                    C = t[b];
                                E.dom && (t[w] = E = S(E)), C.dom && (t[b] = C = S(C));
                                e: for (;;) {
                                    for (; x.key === E.key;) {
                                        if (ie(x, E, n, r, o, a, i), w++, ++k > y || w > b) break e;
                                        x = e[k], (E = t[w]).dom && (t[w] = E = S(E))
                                    }
                                    for (; _.key === C.key;) {
                                        if (ie(_, C, n, r, o, a, i), b--, k > --y || w > b) break e;
                                        _ = e[y], (C = t[b]).dom && (t[b] = C = S(C))
                                    }
                                    if (_.key !== E.key) {
                                        if (x.key !== C.key) break;
                                        ie(x, C, n, r, o, a, i), d = (h = b + 1) < t.length ? t[h].dom : null, Pe(n, C.dom, d), b--, x = e[++k], (C = t[b]).dom && (t[b] = C = S(C))
                                    } else ie(_, E, n, r, o, a, i), Pe(n, E.dom, x.dom), w++, _ = e[--y], (E = t[w]).dom && (t[w] = E = S(E))
                                }
                                if (k > y) {
                                    if (w <= b)
                                        for (d = (h = b + 1) < t.length ? t[h].dom : null; w <= b;)(m = t[w]).dom && (t[w] = m = S(m)), w++, Pe(n, me(m, null, r, o, a), d)
                                } else if (w > b)
                                    for (; k <= y;) oe(e[k++], n, r, !1, i);
                                else {
                                    v = y - k + 1, g = b - w + 1;
                                    var O = e,
                                        N = new Array(g);
                                    for (s = 0; s < g; s++) N[s] = -1;
                                    var P = !1,
                                        L = 0,
                                        M = 0;
                                    if (g <= 4 || v * g <= 16) {
                                        for (s = k; s <= y; s++)
                                            if (c = e[s], M < g)
                                                for (l = w; l <= b; l++)
                                                    if (u = t[l], c.key === u.key) {
                                                        N[l - w] = s, L > l ? P = !0 : L = l, u.dom && (t[l] = u = S(u)), ie(c, u, n, r, o, a, i), M++, O[s] = null;
                                                        break
                                                    }
                                    } else {
                                        var j = new Map;
                                        for (s = w; s <= b; s++) m = t[s], j.set(m.key, s);
                                        for (s = k; s <= y; s++) c = e[s], M < g && (p(l = j.get(c.key)) || (u = t[l], N[l - w] = s, L > l ? P = !0 : L = l, u.dom && (t[l] = u = S(u)), ie(c, u, n, r, o, a, i), M++, O[s] = null))
                                    }
                                    if (v === e.length && 0 === M)
                                        for (Ae(n, e, r, i); w < g;)(m = t[w]).dom && (t[w] = m = S(m)), w++, Pe(n, me(m, null, r, o, a), null);
                                    else {
                                        for (s = v - M; s > 0;) f(c = O[k++]) || (oe(c, n, r, !0, i), s--);
                                        if (P) {
                                            var A = function(e) {
                                                var t, n, r, o, a, i = e.slice(0),
                                                    s = [];
                                                for (s.push(0), t = 0; t < e.length; t++)
                                                    if (-1 !== e[t])
                                                        if (n = s[s.length - 1], e[n] < e[t]) i[t] = n, s.push(t);
                                                        else {
                                                            for (r = 0, o = s.length - 1; r < o;) e[s[a = (r + o) / 2 | 0]] < e[t] ? r = a + 1 : o = a;
                                                            e[t] < e[s[r]] && (r > 0 && (i[t] = s[r - 1]), s[r] = t)
                                                        } for (r = s.length, o = s[r - 1]; r-- > 0;) s[r] = o, o = i[o];
                                                return s
                                            }(N);
                                            for (l = A.length - 1, s = g - 1; s >= 0; s--) - 1 === N[s] ? ((m = t[L = s + w]).dom && (t[L] = m = S(m)), d = (h = L + 1) < t.length ? t[h].dom : null, Pe(n, me(m, n, r, o, a), d)) : l < 0 || s !== A[l] ? (m = t[L = s + w], d = (h = L + 1) < t.length ? t[h].dom : null, Pe(n, m.dom, d)) : l--
                                        } else if (M !== g)
                                            for (s = g - 1; s >= 0; s--) - 1 === N[s] && ((m = t[L = s + w]).dom && (t[L] = m = S(m)), d = (h = L + 1) < t.length ? t[h].dom : null, Pe(n, me(m, null, r, o, a), d))
                                    }
                                }
                            } else Ae(n, e, r, i);
                        else 0 !== g && be(t, n, r, o, a)
                    }(n, r, l, c, u, d, h) : function(e, t, n, r, o, a, i) {
                        for (var s = e.length, l = t.length, c = s > l ? l : s, u = 0; u < c; u++) {
                            var d = t[u];
                            d.dom && (d = t[u] = S(d)), ie(e[u], d, n, r, o, a, i)
                        }
                        if (s < l)
                            for (u = c; u < l; u++) {
                                var f = t[u];
                                f.dom && (f = t[u] = S(f)), Ne(n, me(f, null, r, o, a))
                            } else if (0 === l) Ae(n, e, r, i);
                            else if (s > l)
                            for (u = c; u < s; u++) oe(e[u], n, r, !1, i)
                    }(n, r, l, c, u, d, h))
                }(w, x, b, k, m, r, l, c, u), 2 & x || re(x, t, m), g !== y && function(e, t, n, r, o, a) {
                    if (e = e || v, (t = t || v) !== v)
                        for (var s in t) {
                            var l = t[s],
                                c = e[s];
                            i(l) ? fe(s, l, n) : ue(s, c, l, n, a, r)
                        }
                    if (e !== v)
                        for (var u in e) i(t[u]) && fe(u, e[u], n)
                }(g, y, m, r, 0, c), C !== O && function(e, t, n, r) {
                    if (e = e || v, (t = t || v) !== v)
                        for (var o in t) de(o, e[o], t[o], n);
                    if (e !== v)
                        for (var a in e) i(t[a]) && de(a, e[a], null, n)
                }(C, O, m), _ && (E !== _ || u) && Ee(m, _, r)
            }
        }

        function ce(e, n, r, l, c, u, d, g) {
            var y = e.type,
                b = n.type,
                k = n.props || v,
                w = e.key,
                E = n.key,
                C = b.defaultProps;
            if (p(C) || (x(C, k), n.props = k), y !== b)
                if (d) Le(e, n, r, l, c, u, g);
                else {
                    var P = e.children._lastInput || e.children,
                        L = Se(n, b, k, c);
                    oe(e, null, l, !1, g), ie(P, L, r, l, c, u, g);
                    var M = n.dom = L.dom;
                    n.children = L, xe(n.ref, M, l)
                }
            else if (d) {
                if (w !== E) return Le(e, n, r, l, c, u, g), !1;
                var j = e.children;
                if (j._unmounted) {
                    if (f(r)) return !0;
                    Me(r, ke(n, null, l, c, u, 4 & n.flags), e.dom)
                } else {
                    var A = j.state,
                        I = j.state,
                        U = j.props,
                        T = j.getChildContext();
                    n.children = j, j._isSVG = u, T = i(T) ? c : Object.assign({}, c, T);
                    var F = j._lastInput,
                        R = j._updateComponent(A, I, U, k, c, !1, !1),
                        D = !0;
                    if (j._childContext = T, s(R) ? R = O() : R === t ? (R = F, D = !1) : a(R) ? R = N(R) : o(R) ? m() : h(R) && R.dom && (R = S(R)), 28 & R.flags ? R.parentVNode = n : 28 & F.flags && (F.parentVNode = n), j._lastInput = R, j._vNode = n, D) {
                        var V = l.fastUnmount,
                            B = j._lifecycle;
                        l.fastUnmount = B.fastUnmount, ie(F, R, r, l, T, u, g), B.fastUnmount = l.fastUnmount, l.fastUnmount = V, j.componentDidUpdate(U, A), _.afterUpdate && _.afterUpdate(n), _.findDOMNodeEnabled && Fe.set(j, R.dom)
                    }
                    n.dom = R.dom
                }
            } else {
                var z = !0,
                    W = e.props,
                    q = n.ref,
                    H = !i(q),
                    $ = e.children,
                    Z = $;
                n.dom = e.dom, n.children = $, w !== E ? z = !0 : H && !i(q.onComponentShouldUpdate) && (z = q.onComponentShouldUpdate(W, k)), !1 !== z && (H && !i(q.onComponentWillUpdate) && q.onComponentWillUpdate(W, k), s(Z = b(k, c)) ? Z = O() : a(Z) && Z !== t ? Z = N(Z) : o(Z) ? m() : h(Z) && Z.dom && (Z = S(Z)), Z !== t && (ie($, Z, r, l, c, u, g), n.children = Z, H && !i(q.onComponentDidUpdate) && q.onComponentDidUpdate(W, k), n.dom = Z.dom)), 28 & Z.flags ? Z.parentVNode = n : 28 & $.flags && ($.parentVNode = n)
            }
            return !1
        }

        function ue(e, t, n, r, o, a) {
            if (!F[e])
                if (I[e]) r[e] = !!n;
                else if (A[e]) {
                var s = i(n) ? "" : n;
                r[e] !== s && (r[e] = s)
            } else if (t !== n)
                if (c(e)) de(e, t, n, r);
                else if (i(n)) r.removeAttribute(e);
            else if ("className" === e) o ? r.setAttribute("class", n) : r.className = n;
            else if ("style" === e) ! function(e, t, n) {
                if (u(t)) n.style.cssText = t;
                else {
                    for (var r in t) {
                        var o = t[r];
                        d(o) && !T[r] ? n.style[r] = o + "px" : n.style[r] = o
                    }
                    if (!i(e))
                        for (var a in e) i(t[a]) && (n.style[a] = "")
                }
            }(t, n, r);
            else if ("dangerouslySetInnerHTML" === e) {
                var l = t && t.__html,
                    f = n && n.__html;
                l !== f && (i(f) || (r.innerHTML = f))
            } else if ("childrenType" !== e && "ref" !== e && "key" !== e) {
                var p;
                R[e] ? p = R[e] : o && e.match(D) ? (p = e.replace(/([a-z])([A-Z]|1)/g, V), R[e] = p) : p = e;
                var h = U[e];
                h ? r.setAttributeNS(h, p, n) : r.setAttribute(p, n)
            }
        }

        function de(e, t, n, r, o) {
            if (t !== n) {
                var a = e.toLowerCase(),
                    s = r[a];
                if (s && s.wrapped) return;
                if (B[e]) q(e, t, n, r);
                else if (t !== n)
                    if (l(n) || i(n)) r[a] = n;
                    else {
                        var c = n.event;
                        c && l(c) ? (r._data || (r[a] = function(e) {
                            c(e.currentTarget._data, e)
                        }), r._data = n.data) : m()
                    }
            }
        }

        function fe(e, t, n) {
            "className" === e ? n.removeAttribute("class") : "value" === e ? n.value = "" : "style" === e ? n.removeAttribute("style") : c(e) ? q(name, t, null, n) : n.removeAttribute(e)
        }
        var pe = new Map,
            he = new Map;

        function me(e, t, n, r, o) {
            var a = e.flags;
            return 3970 & a ? ye(e, t, n, r, o) : 28 & a ? ke(e, t, n, r, o, 4 & a) : 4096 & a ? ge(e, t) : 1 & a ? ve(e, t) : void m()
        }

        function ve(e, t) {
            var n = document.createTextNode(e.children);
            return e.dom = n, t && Ne(t, n), n
        }

        function ge(e, t) {
            var n = document.createTextNode("");
            return e.dom = n, t && Ne(t, n), n
        }

        function ye(e, t, n, r, i) {
            if (_.recyclingEnabled) {
                var s = function(e, t, n, r) {
                    var o = e.type,
                        a = e.key,
                        i = he.get(o);
                    if (!p(i)) {
                        var s = null === a ? i.nonKeyed : i.keyed.get(a);
                        if (!p(s)) {
                            var l = s.pop();
                            if (!p(l)) return le(l, e, null, t, n, r, !0), e.dom
                        }
                    }
                    return null
                }(e, n, r, i);
                if (!f(s)) return f(t) || Ne(t, s), s
            }
            var l = e.type,
                c = e.flags;
            (i || 128 & c) && (i = !0);
            var u = function(e, t) {
                    return !0 === t ? document.createElementNS(j, e) : document.createElement(e)
                }(l, i),
                d = e.children,
                h = e.props,
                m = e.events,
                v = e.ref;
            if (e.dom = u, f(d) || (a(d) ? Oe(u, d) : o(d) ? be(d, u, n, r, i) : P(d) && me(d, u, n, r, i)), 2 & c || re(c, e, u), !f(h))
                for (var g in h) ue(g, null, h[g], u, i, n);
            if (!f(m))
                for (var y in m) de(y, null, m[y], u);
            return f(v) || Ee(u, v, n), f(t) || Ne(t, u), u
        }

        function be(e, t, n, r, o) {
            for (var a = 0; a < e.length; a++) {
                var i = e[a];
                s(i) || (i.dom && (e[a] = i = S(i)), me(e[a], t, n, r, o))
            }
        }

        function ke(e, t, n, r, o, a) {
            if (_.recyclingEnabled) {
                var i = function(e, t, n, r) {
                    var o = e.type,
                        a = e.key,
                        i = pe.get(o);
                    if (!p(i)) {
                        var s = null === a ? i.nonKeyed : i.keyed.get(a);
                        if (!p(s)) {
                            var l = s.pop();
                            if (!p(l)) {
                                var c = e.flags,
                                    u = ce(l, e, null, t, n, r, 4 & c, !0);
                                if (!u) return e.dom
                            }
                        }
                    }
                    return null
                }(e, n, r, o);
                if (!f(i)) return f(t) || Ne(t, i), i
            }
            var s, l = e.type,
                c = e.props || v,
                u = l.defaultProps,
                d = e.ref;
            if (p(u) || (x(u, c), e.props = c), a) {
                var h = _e(e, l, c, r, o),
                    m = h._lastInput,
                    g = n.fastUnmount;
                n.fastUnmount = !0, h._vNode = e, e.dom = s = me(m, null, n, h._childContext, o);
                var y = h._lifecycle = new L;
                y.fastUnmount = p(h.componentWillUnmount) && n.fastUnmount, n.fastUnmount = g && y.fastUnmount, f(t) || Ne(t, s), we(e, d, h, n), _.findDOMNodeEnabled && Fe.set(h, s), e.children = h
            } else {
                var b = Se(e, l, c, r);
                e.dom = s = me(b, null, n, r, o), e.children = b, xe(d, s, n), f(t) || Ne(t, s)
            }
            return s
        }

        function we(e, t, n, r) {
            t && (l(t) ? t(n) : m());
            var o = n.componentDidMount,
                a = _.afterMount;
            p(o) && f(a) || r.addListener(function() {
                a && a(e), o && n.componentDidMount()
            })
        }

        function xe(e, t, n) {
            e && (i(e.onComponentWillMount) || e.onComponentWillMount(), i(e.onComponentDidMount) || n.addListener(function() {
                return e.onComponentDidMount(t)
            }), i(e.onComponentWillUnmount) || (n.fastUnmount = !1))
        }

        function Ee(e, t, n) {
            if (l(t)) n.fastUnmount = !1, n.addListener(function() {
                return t(e)
            });
            else {
                if (s(t)) return;
                m()
            }
        }

        function _e(e, t, n, r, c) {
            p(r) && (r = {});
            var u = new t(n, r);
            u.context = r, u.props === v && (u.props = n), u._patch = ie, _.findDOMNodeEnabled && (u._componentToDOMNodeMap = Fe), u._unmounted = !1, u._pendingSetState = !0, u._isSVG = c, l(u.componentWillMount) && u.componentWillMount();
            var d = u.getChildContext();
            i(d) ? u._childContext = r : u._childContext = Object.assign({}, r, d), _.beforeRender && _.beforeRender(u);
            var f = u.render(n, u.state, r);
            return _.afterRender && _.afterRender(u), o(f) ? m() : s(f) ? f = O() : a(f) ? f = N(f) : (f.dom && (f = S(f)), 28 & f.flags && (f.parentVNode = e)), u._pendingSetState = !1, u._lastInput = f, u
        }

        function Ce(e, t, n, r, o) {
            28 & n.flags && (oe(n, null, r, !1, o), n = n.children._lastInput || n.children), Me(e, t, n.dom), oe(n, null, r, !1, o)
        }

        function Se(e, t, n, r) {
            var i = t(n, r);
            return o(i) ? m() : s(i) ? i = O() : a(i) ? i = N(i) : (i.dom && (i = S(i)), 28 & i.flags && (i.parentVNode = e)), i
        }

        function Oe(e, t) {
            "" !== t ? e.textContent = t : e.appendChild(document.createTextNode(""))
        }

        function Ne(e, t) {
            e.appendChild(t)
        }

        function Pe(e, t, n) {
            i(n) ? Ne(e, t) : e.insertBefore(t, n)
        }

        function Le(e, t, n, r, o, a, i) {
            oe(e, null, r, !1, i);
            var s = me(t, null, r, o, a);
            t.dom = s, Me(n, s, e.dom)
        }

        function Me(e, t, n) {
            e || (e = n.parentNode), e.replaceChild(t, n)
        }

        function je(e, t) {
            e.removeChild(t)
        }

        function Ae(e, t, n, r) {
            e.textContent = "", (!n.fastUnmount || n.fastUnmount && _.recyclingEnabled && !r) && function(e, t, n, r) {
                for (var o = 0; o < t.length; o++) {
                    var a = t[o];
                    s(a) || oe(a, e, n, !0, r)
                }
            }(null, t, n, r)
        }

        function Ie(e, t, n, r, i) {
            var s = e.type,
                l = e.children,
                c = e.props,
                u = e.events,
                d = e.flags,
                p = e.ref;
            if ((i || 128 & d) && (i = !0), 1 !== t.nodeType || t.tagName.toLowerCase() !== s) {
                var m = ye(e, null, n, r, i);
                return e.dom = m, Me(t.parentNode, m, t), m
            }
            if (e.dom = t, l && function(e, t, n, r, i) {
                    ! function(e) {
                        for (var t = e.firstChild; t;)
                            if (8 === t.nodeType)
                                if ("!" === t.data) {
                                    var n = document.createTextNode("");
                                    e.replaceChild(n, t), t = t.nextSibling
                                } else {
                                    var r = t.previousSibling;
                                    e.removeChild(t), t = r || e.firstChild
                                }
                        else t = t.nextSibling
                    }(t);
                    var s = t.firstChild;
                    if (o(e))
                        for (var l = 0; l < e.length; l++) {
                            var c = e[l];
                            h(c) && !f(c) && (s ? s = (s = Ue(c, s, n, r, i)).nextSibling : me(c, t, n, r, i))
                        } else a(e) ? (s && 3 === s.nodeType ? s.nodeValue !== e && (s.nodeValue = e) : e && (t.textContent = e), s = s.nextSibling) : h(e) && (Ue(e, s, n, r, i), s = s.nextSibling);
                    for (; s;) t.removeChild(s), s = s.nextSibling
                }(l, t, n, r, i), 2 & d || re(d, e, t), c)
                for (var v in c) ue(v, null, c[v], t, i, n);
            if (u)
                for (var g in u) de(g, null, u[g], t);
            return p && Ee(t, p, n), t
        }

        function Ue(e, t, n, r, o) {
            var a = e.flags;
            return 28 & a ? function(e, t, n, r, o, a) {
                var i = e.type,
                    s = e.props || v,
                    l = e.ref;
                if (e.dom = t, a) {
                    var c = t.namespaceURI === j,
                        u = i.defaultProps;
                    p(u) || (x(u, s), e.props = s);
                    var d = _e(e, i, s, r, c),
                        f = n.fastUnmount,
                        h = d._lastInput;
                    n.fastUnmount = !0, d._vComponent = e, d._vNode = e, Ue(h, t, n, d._childContext, c);
                    var m = d._lifecycle = new L;
                    m.fastUnmount = p(d.componentWillUnmount) && n.fastUnmount, n.fastUnmount = f && m.fastUnmount, we(e, l, d, n), _.findDOMNodeEnabled && Fe.set(d, t), e.children = d
                } else {
                    var g = Se(e, i, s, r);
                    Ue(g, t, n, r, o), e.children = g, e.dom = g.dom, xe(l, t, n)
                }
                return t
            }(e, t, n, r, o, 4 & a) : 3970 & a ? Ie(e, t, n, r, o) : 1 & a ? function(e, t) {
                if (3 !== t.nodeType) {
                    var n = ve(e, null);
                    return e.dom = n, Me(t.parentNode, n, t), n
                }
                var r = e.children;
                return t.nodeValue !== r && (t.nodeValue = r), e.dom = t, t
            }(e, t) : 4096 & a ? function(e, t) {
                e.dom = t
            }(e, t) : void m()
        }
        var Te = [],
            Fe = new Map;

        function Re(e) {
            _.findDOMNodeEnabled || m();
            var t = e && e.nodeType ? e : null;
            return Fe.get(e) || t
        }
        _.roots = Te;
        var De = r ? document.body : null;

        function Ve(e, n) {
            if (De === n && m(), e !== t) {
                var r = function(e) {
                    for (var t = 0; t < Te.length; t++) {
                        var n = Te[t];
                        if (n.dom === e) return n
                    }
                    return null
                }(n);
                if (f(r)) {
                    var o = new L;
                    s(e) || (e.dom && (e = S(e)), function(e, t, n) {
                        var r = t && t.firstChild;
                        if (r) {
                            for (Ue(e, r, n, {}, !1), r = t.firstChild; r = r.nextSibling;) t.removeChild(r);
                            return !0
                        }
                        return !1
                    }(e, n, o) || me(e, n, o, {}, !1), r = function(e, t, n) {
                        var r = {
                            dom: e,
                            input: t,
                            lifecycle: n
                        };
                        return Te.push(r), r
                    }(n, e, o), o.trigger())
                } else {
                    var a = r.lifecycle;
                    a.listeners = [], i(e) ? (oe(r.input, n, a, !1, !1), function(e) {
                        for (var t = 0; t < Te.length; t++)
                            if (Te[t] === e) return void Te.splice(t, 1)
                    }(r)) : (e.dom && (e = S(e)), ie(r.input, e, n, a, {}, !1, !1)), a.trigger(), r.input = e
                }
                if (r) {
                    var l = r.input;
                    if (l && 28 & l.flags) return l.children
                }
            }
        }

        function Be(e) {
            var t = e || null;
            return function(e, n) {
                t || (t = e), Ve(n, t)
            }
        }

        function ze(e, t) {
            return {
                data: e,
                event: t
            }
        }
        var We = {
            linkEvent: ze,
            createVNode: C,
            cloneVNode: S,
            NO_OP: t,
            EMPTY_OBJ: v,
            render: Ve,
            findDOMNode: Re,
            createRenderer: Be,
            options: _,
            version: "1.1.2"
        };
        e.default = We, e.linkEvent = ze, e.createVNode = C, e.cloneVNode = S, e.NO_OP = t, e.EMPTY_OBJ = v, e.render = Ve, e.findDOMNode = Re, e.createRenderer = Be, e.options = _, e.version = "1.1.2", Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }(t)
}, function(e, t, n) {
    /*!
     * inferno-component v1.1.2
     * (c) 2017 Dominic Gannaway
     * Released under the MIT License.
     */
    e.exports = function(e) {
        "use strict";
        var t = "a runtime error occured! Use Inferno in development environment to find the error.",
            n = window.document,
            r = Array.isArray;

        function o(e) {
            return i(e) || a(e)
        }

        function a(e) {
            return null === e
        }

        function i(e) {
            return void 0 === e
        }

        function s(e) {
            throw e || (e = t), new Error("Inferno Error: " + e)
        }
        var l = function() {
            this.listeners = [], this.fastUnmount = !0
        };
        l.prototype.addListener = function(e) {
            this.listeners.push(e)
        }, l.prototype.trigger = function() {
            for (var e = 0; e < this.listeners.length; e++) this.listeners[e]()
        };
        var c = new Map;

        function u(e, t, r, o) {
            for (var a in "function" == typeof t && (t = t(e.state)), t) e._pendingState[a] = t[a];
            !e._pendingSetState && n ? o || e._blockRender ? (e._pendingSetState = !0, d(e, !1, r)) : function(e, t, n) {
                var r = c.get(e);
                r || (r = [], c.set(e, r), Promise.resolve().then(function() {
                    c.delete(e), d(e, t, function() {
                        for (var e = 0; e < r.length; e++) r[e]()
                    })
                })), n && r.push(n)
            }(e, !1, r) : (e.state = Object.assign({}, e.state, e._pendingState), e._pendingState = {})
        }

        function d(t, n, c) {
            if (t._deferSetState && !n || t._blockRender || t._unmounted) o(c) || c();
            else {
                t._pendingSetState = !1;
                var u = t._pendingState,
                    d = t.state,
                    f = Object.assign({}, d, u),
                    p = t.props,
                    h = t.context;
                t._pendingState = {};
                var m = t._updateComponent(d, f, p, p, h, n, !0),
                    v = !0;
                a(C = m) || !1 === C || function(e) {
                    return !0 === e
                }(C) || i(C) ? m = e.createVNode(4096) : m === e.NO_OP ? (m = t._lastInput, v = !1) : function(e) {
                    var t = typeof e;
                    return "string" === t || "number" === t
                }(m) ? (_ = m, m = e.createVNode(1, null, null, _)) : r(m) && s();
                var g = t._lastInput,
                    y = t._vNode,
                    b = g.dom && g.dom.parentNode || (g.dom = y.dom);
                if (t._lastInput = m, v) {
                    var k = t._lifecycle;
                    k ? k.listeners = [] : k = new l, t._lifecycle = k;
                    var w = t.getChildContext();
                    w = o(w) ? Object.assign({}, h, t._childContext) : Object.assign({}, h, t._childContext, w), t._patch(g, m, b, k, w, t._isSVG, !1), k.trigger(), t.componentDidUpdate(p, d), e.options.afterUpdate && e.options.afterUpdate(y)
                }
                var x = y.dom = m.dom,
                    E = t._componentToDOMNodeMap;
                E && E.set(t, m.dom),
                    function e(t, n) {
                        if (28 & t.flags) {
                            var r = t.parentVNode;
                            r && (r.dom = n, e(r, n))
                        }
                    }(y, x), o(c) || c()
            }
            var _, C
        }
        var f = function(t, n) {
            this.state = {}, this.refs = {}, this._blockRender = !1, this._ignoreSetState = !1, this._blockSetState = !1, this._deferSetState = !1, this._pendingSetState = !1, this._pendingState = {}, this._lastInput = null, this._vNode = null, this._unmounted = !0, this._lifecycle = null, this._childContext = null, this._patch = null, this._isSVG = !1, this._componentToDOMNodeMap = null, this.props = t || e.EMPTY_OBJ, this.context = n || {}
        };
        return f.prototype.render = function(e, t, n) {}, f.prototype.forceUpdate = function(e) {
            this._unmounted || n && d(this, !0, e)
        }, f.prototype.setState = function(e, t) {
            this._unmounted || (this._blockSetState ? s() : this._ignoreSetState || u(this, e, t, !1))
        }, f.prototype.setStateSync = function(e) {
            this._unmounted || (this._blockSetState ? s() : this._ignoreSetState || u(this, e, null, !0))
        }, f.prototype.componentWillMount = function() {}, f.prototype.componentDidUpdate = function(e, t, n) {}, f.prototype.shouldComponentUpdate = function(e, t, n) {
            return !0
        }, f.prototype.componentWillReceiveProps = function(e, t) {}, f.prototype.componentWillUpdate = function(e, t, n) {}, f.prototype.getChildContext = function() {}, f.prototype._updateComponent = function(t, n, r, o, a, i, l) {
            if (!0 === this._unmounted && s(), (r !== o || o === e.EMPTY_OBJ || t !== n || i) && (r === o && o !== e.EMPTY_OBJ || (l || (this._blockRender = !0, this.componentWillReceiveProps(o, a), this._blockRender = !1), this._pendingSetState && (n = Object.assign({}, n, this._pendingState), this._pendingSetState = !1, this._pendingState = {})), !1 !== this.shouldComponentUpdate(o, n, a) || i)) {
                this._blockSetState = !0, this.componentWillUpdate(o, n, a), this._blockSetState = !1, this.props = o;
                var c = this.state = n;
                this.context = a, e.options.beforeRender && e.options.beforeRender(this);
                var u = this.render(o, c, a);
                return e.options.afterRender && e.options.afterRender(this), u
            }
            return e.NO_OP
        }, f
    }(n(19))
}, function(e, t, n) {
    e.exports = n(60), e.exports.default = e.exports
}, function(e, t) {
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function() {
                return e.l
            }
        }), Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function() {
                return e.i
            }
        }), e.webpackPolyfill = 1), e
    }
}, function(e, t, n) {
    (function(e) {
        var t;
        t = function(e, t) {
            "use strict";
            var n = Symbol.for && Symbol.for("react.element") || 60103,
                r = {
                    isValidElement: function(e) {
                        return "object" == typeof e && null !== e && e.$$typeof === n
                    }
                },
                o = {
                    prop: "prop",
                    context: "context",
                    childContext: "child context"
                },
                a = {
                    thatReturns: function(e) {
                        return function() {
                            return e
                        }
                    }
                },
                i = Symbol.iterator,
                s = "@@iterator",
                l = "<<anonymous>>",
                c = {
                    array: d("array"),
                    bool: d("boolean"),
                    func: d("function"),
                    number: d("number"),
                    object: d("object"),
                    string: d("string"),
                    any: u(a.thatReturns(null)),
                    arrayOf: function(e) {
                        return u(function(t, n, r, a, i) {
                            var s = t[n];
                            if (!Array.isArray(s)) {
                                var l = o[a],
                                    c = p(s);
                                return new Error("Invalid " + l + " `" + i + "` of type `" + c + "` supplied to `" + r + "`, expected an array.")
                            }
                            for (var u = 0; u < s.length; u++) {
                                var d = e(s, u, r, a, i + "[" + u + "]");
                                if (d instanceof Error) return d
                            }
                            return null
                        })
                    },
                    element: function() {
                        return u(function(e, t, n, a, i) {
                            if (!r.isValidElement(e[t])) {
                                var s = o[a];
                                return new Error("Invalid " + s + " `" + i + "` supplied to `" + n + "`, expected a single ReactElement.")
                            }
                            return null
                        })
                    }(),
                    instanceOf: function(e) {
                        return u(function(t, n, r, a, i) {
                            if (!(t[n] instanceof e)) {
                                var s = o[a],
                                    c = e.name || l,
                                    u = function(e) {
                                        if (!e.constructor || !e.constructor.name) return l;
                                        return e.constructor.name
                                    }(t[n]);
                                return new Error("Invalid " + s + " `" + i + "` of type `" + u + "` supplied to `" + r + "`, expected instance of `" + c + "`.")
                            }
                            return null
                        })
                    },
                    node: function() {
                        return u(function(e, t, n, r, a) {
                            if (!f(e[t])) {
                                var i = o[r];
                                return new Error("Invalid " + i + " `" + a + "` supplied to `" + n + "`, expected a ReactNode.")
                            }
                            return null
                        })
                    }(),
                    objectOf: function(e) {
                        return u(function(t, n, r, a, i) {
                            var s = t[n],
                                l = p(s);
                            if ("object" !== l) {
                                var c = o[a];
                                return new Error("Invalid " + c + " `" + i + "` of type `" + l + "` supplied to `" + r + "`, expected an object.")
                            }
                            for (var u in s)
                                if (s.hasOwnProperty(u)) {
                                    var d = e(s, u, r, a, i + "." + u);
                                    if (d instanceof Error) return d
                                } return null
                        })
                    },
                    oneOf: function(e) {
                        if (!Array.isArray(e)) return u(function() {
                            return new Error("Invalid argument supplied to oneOf, expected an instance of array.")
                        });
                        return u(function(t, n, r, a, i) {
                            for (var s = t[n], l = 0; l < e.length; l++)
                                if (s === e[l]) return null;
                            var c = o[a],
                                u = JSON.stringify(e);
                            return new Error("Invalid " + c + " `" + i + "` of value `" + s + "` supplied to `" + r + "`, expected one of " + u + ".")
                        })
                    },
                    oneOfType: function(e) {
                        if (!Array.isArray(e)) return u(function() {
                            return new Error("Invalid argument supplied to oneOfType, expected an instance of array.")
                        });
                        return u(function(t, n, r, a, i) {
                            for (var s = 0; s < e.length; s++) {
                                var l = e[s];
                                if (null == l(t, n, r, a, i)) return null
                            }
                            var c = o[a];
                            return new Error("Invalid " + c + " `" + i + "` supplied to `" + r + "`.")
                        })
                    },
                    shape: function(e) {
                        return u(function(t, n, r, a, i) {
                            var s = t[n],
                                l = p(s);
                            if ("object" !== l) {
                                var c = o[a];
                                return new Error("Invalid " + c + " `" + i + "` of type `" + l + "` supplied to `" + r + "`, expected `object`.")
                            }
                            for (var u in e) {
                                var d = e[u];
                                if (d) {
                                    var f = d(s, u, r, a, i + "." + u);
                                    if (f) return f
                                }
                            }
                            return null
                        })
                    }
                };

            function u(e) {
                function t(t, n, r, a, i, s) {
                    if (a = a || l, s = s || r, null == n[r]) {
                        var c = o[i];
                        return t ? new Error("Required " + c + " `" + s + "` was not specified in `" + a + "`.") : null
                    }
                    return e(n, r, a, i, s)
                }
                var n = t.bind(null, !1);
                return n.isRequired = t.bind(null, !0), n
            }

            function d(e) {
                return u(function(t, n, r, a, i) {
                    var s = t[n];
                    if (p(s) !== e) {
                        var l = o[a],
                            c = function(e) {
                                var t = p(e);
                                if ("object" === t) {
                                    if (e instanceof Date) return "date";
                                    if (e instanceof RegExp) return "regexp"
                                }
                                return t
                            }(s);
                        return new Error("Invalid " + l + " `" + i + "` of type `" + c + "` supplied to `" + r + "`, expected `" + e + "`.")
                    }
                    return null
                })
            }

            function f(e) {
                switch (typeof e) {
                    case "number":
                    case "string":
                    case "undefined":
                        return !0;
                    case "boolean":
                        return !e;
                    case "object":
                        if (Array.isArray(e)) return e.every(f);
                        if (null === e || r.isValidElement(e)) return !0;
                        var t = function(e) {
                            var t = e && (i && e[i] || e[s]);
                            if ("function" == typeof t) return t
                        }(e);
                        if (!t) return !1;
                        var n, o = t.call(e);
                        if (t !== e.entries) {
                            for (; !(n = o.next()).done;)
                                if (!f(n.value)) return !1
                        } else
                            for (; !(n = o.next()).done;) {
                                var a = n.value;
                                if (a && !f(a[1])) return !1
                            }
                        return !0;
                    default:
                        return !1
                }
            }

            function p(e) {
                var t = typeof e;
                return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : t
            }
            t.exports = c
        }, "function" == typeof define && define.amd ? define("PropTypes", ["exports", "module"], t) : t(0, e)
    }).call(this, n(62)(e))
}, function(e, t, n) {
    /*!
     * inferno-compat v1.1.2
     * (c) 2017 Dominic Gannaway
     * Released under the MIT License.
     */
    ! function(e, t, n, r) {
        "use strict";

        function o(e) {
            return null === e
        }

        function a(e) {
            return void 0 === e
        }

        function i(e) {
            return "object" == typeof e
        }

        function s(e) {
            var t = i(e) && !1 === o(e);
            if (!1 === t) return !1;
            var n = e.flags;
            return !!(3998 & n)
        }
        t = "default" in t ? t.default : t, n = "default" in n ? n.default : n;
        var l = {
            constructor: 1,
            render: 1,
            shouldComponentUpdate: 1,
            componentWillReceiveProps: 1,
            componentWillUpdate: 1,
            componentDidUpdate: 1,
            componentWillMount: 1,
            componentDidMount: 1,
            componentWillUnmount: 1,
            componentDidUnmount: 1
        };

        function c(e, t, n) {
            for (var r in t) !0 !== n && (a(i = t[r]) || o(i)) || (e[r] = t[r]);
            var i;
            return e
        }

        function u(e, t, n) {
            var r = t[e];
            t[e] = function() {
                for (var e, o = arguments, i = 0; i < n.length; i++) {
                    var s = n[i],
                        l = s.apply(t, o);
                    a(l) || (e = l)
                }
                if (r) {
                    var c = r.call(t);
                    a(c) || (e = c)
                }
                return e
            }
        }

        function d(e) {
            var t = function(t) {
                function n(r) {
                    t.call(this, r), this.isMounted = function() {
                            return !this._unmounted
                        }, c(this, e), n.mixins && function(e, t) {
                            for (var n in t)
                                if (t.hasOwnProperty(n)) {
                                    var r = t[n];
                                    "function" == typeof r[0] ? u(n, e, r) : e[n] = r
                                }
                        }(this, n.mixins),
                        function(e) {
                            for (var t in e) {
                                var n = e[t];
                                "function" != typeof n || n.__bound || l[t] || ((e[t] = n.bind(e)).__bound = !0)
                            }
                        }(this), e.getInitialState && (this.state = e.getInitialState.call(this))
                }
                return t && (n.__proto__ = t), n.prototype = Object.create(t && t.prototype), n.prototype.constructor = n, n
            }(n);
            return t.displayName = e.displayName || "Component", t.propTypes = e.propTypes, t.defaultProps = e.getDefaultProps ? e.getDefaultProps() : void 0, t.mixins = e.mixins && function e(t, n) {
                void 0 === n && (n = {});
                for (var r = 0; r < t.length; r++) {
                    var o = t[r];
                    for (var a in o.mixins && e(o.mixins, n), o) o.hasOwnProperty(a) && "function" == typeof o[a] && (n[a] || (n[a] = [])).push(o[a])
                }
                return n
            }(e.mixins), e.statics && c(t, e.statics), t
        }
        var f = {
            onComponentWillMount: !0,
            onComponentDidMount: !0,
            onComponentWillUnmount: !0,
            onComponentShouldUpdate: !0,
            onComponentWillUpdate: !0,
            onComponentDidUpdate: !0
        };

        function p(e) {
            return r.render(null, e), !0
        }

        function h(e) {
            return null == e
        }
        r.options.findDOMNodeEnabled = !0;
        var m = [],
            v = {
                map: function(e, t, n) {
                    return h(e) ? e : (e = v.toArray(e), n && n !== e && (t = t.bind(n)), e.map(t))
                },
                forEach: function(e, t, n) {
                    if (h(e)) return e;
                    e = v.toArray(e), n && n !== e && (t = t.bind(n)), e.forEach(t)
                },
                count: function(e) {
                    return (e = v.toArray(e)).length
                },
                only: function(e) {
                    if (1 !== (e = v.toArray(e)).length) throw new Error("Children.only() expects only one child.");
                    return e[0]
                },
                toArray: function(e) {
                    return h(e) ? [] : Array.isArray && Array.isArray(e) ? e : m.concat(e)
                }
            },
            g = null;
        n.prototype.isReactComponent = {}, r.options.beforeRender = function(e) {
            g = e
        }, r.options.afterRender = function() {
            g = null
        };
        var y = {
            xlinkActuate: "xlink:actuate",
            xlinkArcrole: "xlink:arcrole",
            xlinkHref: "xlink:href",
            xlinkRole: "xlink:role",
            xlinkShow: "xlink:show",
            xlinkTitle: "xlink:title",
            xlinkType: "xlink:type"
        };
        "undefined" == typeof Event || Event.prototype.persist || (Event.prototype.persist = function() {});
        var b = function(e) {
                return function(t, n) {
                    for (var r = [], o = arguments.length - 2; o-- > 0;) r[o] = arguments[o + 2];
                    var a = n || {},
                        i = a.ref;
                    return "string" == typeof i && (a.ref = function(e) {
                        this && this.refs && (this.refs[i] = e)
                    }.bind(g || null)), "string" == typeof t && function(e, t) {
                        if (("input" === e || "textarea" === e) && t.onChange) {
                            var n, r = t.type;
                            t[n = "checkbox" === r ? "onclick" : "file" === r ? "onchange" : "oninput"] || (t[n] = t.onChange, delete t.onChange)
                        }
                        for (var o in t) y[o] && (t[y[o]] = t[o], delete t[o])
                    }(t, a), e.apply(void 0, [t, a].concat(r))
                }
            },
            k = b(function(e, t) {
                for (var n, s = [], l = arguments.length - 2; l-- > 0;) s[l] = arguments[l + 2];
                if (o(n = e) || !1 === n || function(e) {
                        return !0 === e
                    }(n) || a(n) || i(e)) throw new Error("Inferno Error: createElement() name parameter cannot be undefined, null, false or true, It must be a string, class or function.");
                var c, u, d = s,
                    p = null,
                    h = null,
                    m = null,
                    v = 0;
                if (s && (1 === s.length ? d = s[0] : 0 === s.length && (d = void 0)), function(e) {
                        return "string" == typeof e
                    }(e)) {
                    switch (v = 2, e) {
                        case "svg":
                            v = 128;
                            break;
                        case "input":
                            v = 512;
                            break;
                        case "textarea":
                            v = 1024;
                            break;
                        case "select":
                            v = 2048
                    }
                    for (var g in t) "key" === g ? (h = t.key, delete t.key) : "children" === g && a(d) ? d = t.children : "ref" === g ? p = t.ref : "o" === (u = g)[0] && "n" === u[1] && u.length > 3 && (m || (m = {}), m[g] = t[g], delete t[g])
                } else
                    for (var y in v = a((c = e).prototype) || a(c.prototype.render) ? 8 : 4, a(d) || (t || (t = {}), t.children = d, d = null), t) f[y] ? (p || (p = {}), p[y] = t[y]) : "key" === y && (h = t.key, delete t.key);
                return r.createVNode(v, e, t, d, m, h, p)
            }),
            w = b(r.cloneVNode),
            x = r.options.createVNode;

        function E(e, t) {
            for (var n in e)
                if (!(n in t)) return !0;
            for (var r in t)
                if (e[r] !== t[r]) return !0;
            return !1
        }

        function _(e, t) {
            n.call(this, e, t)
        }
        r.options.createVNode = function(e) {
            var t = e.children,
                n = e.props;
            h(e.props) && (n = e.props = {}), !h(t) && h(n.children) && (n.children = t), x && x(e)
        }, _.prototype = new n({}, {}), _.prototype.shouldComponentUpdate = function(e, t) {
            return E(this.props, e) || E(this.state, t)
        };
        var C = function(e) {
            function t() {
                e.apply(this, arguments)
            }
            return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.getChildContext = function() {
                return this.props.context
            }, t.prototype.render = function(e) {
                return e.children
            }, t
        }(n);

        function S(e, t, n, o) {
            var a = r.createVNode(4, C, {
                    context: e.context,
                    children: t
                }),
                i = r.render(a, n);
            return o && o.call(i), i
        }
        var O = "a abbr address area article aside audio b base bdi bdo big blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr circle clipPath defs ellipse g image line linearGradient mask path pattern polygon polyline radialGradient rect stop svg text tspan".split(" ");

        function N(e) {
            return k.bind(null, e)
        }
        for (var P = {}, L = O.length; L--;) P[O[L]] = N(O[L]);
        var M = {
            createVNode: r.createVNode,
            render: r.render,
            isValidElement: s,
            createElement: k,
            Component: n,
            PureComponent: _,
            unmountComponentAtNode: p,
            cloneElement: w,
            PropTypes: t,
            createClass: d,
            findDOMNode: r.findDOMNode,
            Children: v,
            cloneVNode: r.cloneVNode,
            NO_OP: r.NO_OP,
            version: "15.4.1",
            unstable_renderSubtreeIntoContainer: S,
            createFactory: N,
            DOM: P
        };
        e.createVNode = r.createVNode, e.render = r.render, e.isValidElement = s, e.createElement = k, e.Component = n, e.PureComponent = _, e.unmountComponentAtNode = p, e.cloneElement = w, e.PropTypes = t, e.createClass = d, e.findDOMNode = r.findDOMNode, e.Children = v, e.cloneVNode = r.cloneVNode, e.NO_OP = r.NO_OP, e.version = "15.4.1", e.unstable_renderSubtreeIntoContainer = S, e.createFactory = N, e.DOM = P, e.default = M, Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }(t, n(63), n(61), n(19))
}, function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, "targeted", function() {
        return l
    }), n.d(t, "rpcRenderer", function() {
        return v
    }), n.d(t, "rpcListener", function() {
        return g
    }), n.d(t, "createServer", function() {
        return y
    }), n.d(t, "createClient", function() {
        return b
    }), n.d(t, "createClientMethod", function() {
        return k
    });
    var r = n(10),
        o = n(13),
        a = n(38),
        i = n(36);
    const s = Object(i.wrapIpc)(r.ipcRenderer, function(e) {
        return 0 === e.senderId || void 0 === e.senderId || (console.error("Blocked direct IPC communication from a non-browser process"), !1)
    });

    function l(e, t, n) {
        "#" === e ? r.ipcRenderer.send(t, {
            channel: t,
            payload: n
        }) : r.ipcRenderer.send("ipc:target:send", {
            target: e,
            channel: t,
            payload: n
        })
    }
    const {
        on: c,
        once: u,
        removeListener: d,
        removeAllListeners: f,
        send: p,
        sendSync: h,
        invoke: m
    } = s, v = {
        on: c,
        once: u,
        removeListener: d,
        removeAllListeners: f,
        send: p,
        sendSync: h,
        invoke: m
    }, g = v;

    function y(...e) {
        return Object(a.createServerImplementation)(s, l, (e, t) => t.origin, ...e)
    }

    function b(...e) {
        return Object(o.createClientImplementation)(s, l, ...e)
    }

    function k(...e) {
        return Object(o.createClientMethodImplementation)(s, l, ...e)
    }
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(42),
        o = n(41);
    const a = Object(r.fromHash)(window.location.hash),
        i = () => {
            window.requestAnimationFrame(() => {
                const e = n(0),
                    {
                        App: t
                    } = n(58),
                    {
                        recoverFromPhrase: r,
                        recoverFromLink: i
                    } = a,
                    s = e.createElement(t, {
                        recoverFromLink: i,
                        recoverFromPhrase: r
                    }),
                    l = document.getElementById("app-container");
                e.render(s, l), window.requestAnimationFrame(() => Object(o.default)())
            })
        };
    ["complete", "loaded", "interactive"].includes(document.readyState) ? i() : document.addEventListener("DOMContentLoaded", i, {
        once: !0
    })
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
    crypto && crypto.subtle && (Object.freeze(crypto), Object.freeze(crypto.subtle))
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(21);
    n.d(t, "sanitizeErrorMessage", function() {
        return r.default
    });
    var o = n(5);
    n.d(t, "parseStackTrace", function() {
        return o.default
    }), n.d(t, "captureStackTrace", function() {
        return o.captureStackTrace
    });
    var a = n(20);
    for (var i in a)["sanitizeErrorMessage", "parseStackTrace", "captureStackTrace", "default"].indexOf(i) < 0 && function(e) {
        n.d(t, e, function() {
            return a[e]
        })
    }(i)
}, function(e, t, n) {
    const {
        captureStackTrace: r
    } = n(68), o = (...e) => {
        const t = e.reduce((e, t) => (t instanceof Error && r(t), e.concat((e => e instanceof Error && e.stack)(t) ? t.stack : t, "\n")), "").trim();
        console._errorOriginal(t)
    };
    console._errorOriginal || (console._errorOriginal = console.error.bind(console), console.error = o)
}, function(e, t, n) {
    n(69), n(67)
}, function(e, t, n) {
    n(70), n(66)
}]);