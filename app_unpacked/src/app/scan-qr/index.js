! function(e) {
	var t = {};

	function o(s) {
		if (t[s]) return t[s].exports;
		var n = t[s] = {
			i: s,
			l: !1,
			exports: {}
		};
		return e[s].call(n.exports, n, n.exports, o), n.l = !0, n.exports
	}
	o.m = e, o.c = t, o.d = function(e, t, s) {
		o.o(e, t) || Object.defineProperty(e, t, {
			enumerable: !0,
			get: s
		})
	}, o.r = function(e) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, o.t = function(e, t) {
		if (1 & t && (e = o(e)), 8 & t) return e;
		if (4 & t && "object" == typeof e && e && e.__esModule) return e;
		var s = Object.create(null);
		if (o.r(s), Object.defineProperty(s, "default", {
				enumerable: !0,
				value: e
			}), 2 & t && "string" != typeof e)
			for (var n in e) o.d(s, n, function(t) {
				return e[t]
			}.bind(null, n));
		return s
	}, o.n = function(e) {
		var t = e && e.__esModule ? function() {
			return e.default
		} : function() {
			return e
		};
		return o.d(t, "a", t), t
	}, o.o = function(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, o.p = "", o(o.s = 359)
}([function(e, t, o) {
	e.exports = o(353), e.exports.default = e.exports
}, function(e, t, o) {
	"use strict";
	o.d(t, "fiatUnit", function() {
		return s
	}), o.d(t, "themeName", function() {
		return n
	}), o.d(t, "adaLegacyAddressEnabled", function() {
		return r
	}), o.d(t, "moneroInitialHeight", function() {
		return a
	}), o.d(t, "moneroSubaddressesEnabled", function() {
		return d
	}), o.d(t, "bitcoinLegacyAddressEnabled", function() {
		return u
	}), o.d(t, "bitcoinTaprootAddressEnabled", function() {
		return c
	}), o.d(t, "rbfEnabledBitcoin", function() {
		return l
	}), o.d(t, "rbfEnabledEthereum", function() {
		return i
	}), o.d(t, "wentThroughFiatOnboarding", function() {
		return f
	});
	const s = "fiat.unit",
		n = "theme.name",
		r = "adaLegacyAddressEnabled",
		a = "moneroInitialHeight",
		d = "moneroSubaddressesEnabled",
		u = "bitcoinLegacyAddressEnabled",
		c = "bitcoinTaprootAddressEnabled",
		l = "advanced.advancedMode.assets.bitcoin",
		i = "advanced.advancedMode.assets.ethereum",
		f = "fiatOnramp.wentThroughFiatOnboarding"
}, function(e, t, o) {
	"use strict";
	o.d(t, "rpcRenderer", function() {
		return m
	});
	var s = o(8);
	const n = o.n(s).a || s,
		{
			targeted: r,
			rpcListener: a,
			createServer: d
		} = n,
		{
			mainBroadcastListener: u,
			broadcast: c,
			rpcMain: l
		} = n,
		{
			createClient: i,
			createClientMethod: f,
			rpcRenderer: m
		} = n
}, function(e, t, o) {
	"use strict";
	o.d(t, "captureStackTrace", function() {
		return n
	}), o.d(t, "stackFramesToString", function() {
		return r
	}), o.d(t, "default", function() {
		return a
	});
	const s = new WeakMap;

	function n(e) {
		if (s.has(e)) return;
		const {
			prepareStackTrace: t
		} = Error;
		let o, n;
		Error.prepareStackTrace = ((e, s) => (n = e, o = s.map(e => ({
			function: e.getFunctionName(),
			method: e.getMethodName(),
			file: e.getFileName(),
			line: e.getLineNumber(),
			column: e.getColumnNumber(),
			async: null == e.isAsync ? void 0 : e.isAsync(),
			toplevel: e.isToplevel()
		})), t ? t(e, s) : e.stack));
		try {
			e.stack
		} finally {
			Error.prepareStackTrace = t
		}
		n === e && Array.isArray(o) ? s.set(e, o) : s.set(e, void 0)
	}

	function r(e) {
		if (void 0 !== e) return e.map(e => {
			const {
				function: t,
				file: o,
				line: s,
				column: n
			} = e;
			return `    at ${t||"unknownFn"}${o?` (${o}${null===s?"":`:${s}:${n}`})`:""}`
		}).join("\n")
	}

	function a(e) {
		return s.has(e) ? s.get(e) : (n(e), s.get(e))
	}
}, function(e, t, o) {
	"use strict";
	o.d(t, "CHANNEL_PREFIX", function() {
		return s
	});
	const s = "electron-rpc-broadcast"
}, function(e, t, o) {
	"use strict";
	{
		const {
			ipcRenderer: t
		} = globalThis.exodusPreload;
		e.exports = {
			ipcRenderer: t
		}
	}
}, function(e, t, o) {
	"use strict";
	o.d(t, "getCurrentScreen", function() {
		return n
	}), o.d(t, "default", function() {
		return r
	});
	var s = o(2);
	async function n() {
		return s.rpcRenderer.invoke("screen:display:current")
	}
	async function r(e) {
		const t = await s.rpcRenderer.invoke("screen:capturer:sources");
		console.log(`[setupCapturer] displayId=${e}, screen sources: ${JSON.stringify(t)}`);
		const o = function(e, t) {
			return e && e.length && e.reduce((e, o) => o.display_id === String(t) && o || e, e[0])
		}(t, e);
		if (!o) throw console.log(`[setupCapturer] was not able to find source with display_id=${e}`), new Error("Cannot setup desktop capturer");
		const n = await s.rpcRenderer.invoke("screen:display:all"),
			r = function(e, t) {
				return 1 === e.length && "screen:0:0" === e[0].id && t.length > 1
			}(t, n),
			a = r ? function(e) {
				const {
					width: t,
					height: o
				} = function(e) {
					const {
						width: t,
						height: o
					} = e.reduce(({
						width: e,
						height: t
					}, {
						bounds: o
					}) => ({
						width: e < o.width + o.x ? o.width + o.x : e,
						height: t < o.height + o.y ? o.height + o.y : t
					}), {
						width: 0,
						height: 0
					});
					return {
						width: t,
						height: o
					}
				}(e);
				return {
					minWidth: t,
					maxWidth: t,
					minHeight: o,
					maxHeight: o
				}
			}(n) : {};
		return {
			media: await
			function(e, t = {}) {
				return navigator.mediaDevices.getUserMedia({
					audio: !1,
					video: {
						mandatory: {
							chromeMediaSource: "desktop",
							chromeMediaSourceId: e.id,
							...t
						}
					}
				})
			}(o, a),
			shouldCompensateForScreen: !r
		}
	}
}, function(e, t, o) {
	"use strict";
	o.d(t, "createClientImplementation", function() {
		return a
	}), o.d(t, "createClientMethodImplementation", function() {
		return d
	});
	var s = o(20),
		n = o(19),
		r = o(4);

	function a(e, t, o, s, n = {}) {
		return new Proxy({}, {
			get: (r, a, u) => "string" == typeof a ? d(e, t, o, s, a, n) : void 0
		})
	}

	function d(e, t, o, a, d, {
		wrap: u,
		unwrap: c
	} = {}) {
		if ("main" === o) throw new Error("Use 'ui' as the target instead of 'main'");
		return function(...l) {
			const i = Object(s.randomUUID)(),
				f = `${r.CHANNEL_PREFIX}:${a}:response:${i}`;
			return new Promise((s, m) => {
				const v = `${r.CHANNEL_PREFIX}:${a}:call`;
				u && (l = u(d, l));
				const g = {
					func: d,
					args: l,
					token: i
				};
				e.once(f, (e, {
					payload: t
				}) => {
					const [o, r] = t;
					o ? m(Object(n.fromObject)(o)) : s(c ? c(d, r) : r)
				}), setTimeout(() => {
					try {
						t(o, v, g)
					} catch (e) {
						m(e)
					}
				}, 0)
			})
		}
	}
}, function(e, t, o) {
	e.exports = o(345)
}, function(e, t, o) {
	"use strict";
	var s = o(336),
		n = o(335),
		r = o(334),
		a = o(333),
		d = o(332),
		u = o(331),
		c = o(330),
		l = o(329),
		i = o(328),
		f = o(327),
		m = o(326),
		v = o(325),
		g = o(324),
		h = o(323),
		p = o(322),
		k = o(321),
		_ = o(320),
		B = o(319),
		b = o(318),
		C = o(317),
		w = o(316),
		y = o(315),
		x = o(314),
		P = o(313),
		E = o(312),
		M = o(311),
		S = o(310),
		O = o(309),
		N = o(308),
		A = o(307),
		L = o(306),
		I = o(305),
		j = o(304),
		U = o(303),
		R = o(302),
		T = o(301),
		z = o(300),
		D = o(299),
		F = o(298),
		q = o(297),
		V = o(296),
		X = o(295),
		W = o(294),
		$ = o(293),
		H = o(292),
		Z = o(291),
		G = o(290),
		J = o(289),
		K = o(288),
		Q = o(287),
		Y = o(286),
		ee = o(285),
		te = o(284),
		oe = o(283),
		se = o(282),
		ne = o(281),
		re = o(280),
		ae = o(279),
		de = o(278),
		ue = o(277),
		ce = o(276),
		le = o(275),
		ie = o(274),
		fe = o(273),
		me = o(272),
		ve = o(271),
		ge = o(270),
		he = o(269),
		pe = o(268),
		ke = o(267),
		_e = o(266),
		Be = o(265),
		be = o(264),
		Ce = o(263),
		we = o(262),
		ye = o(261),
		xe = o(260),
		Pe = o(259),
		Ee = o(258),
		Me = o(257),
		Se = o(256),
		Oe = o(255),
		Ne = o(254),
		Ae = o(253),
		Le = o(252),
		Ie = o(251),
		je = o(250),
		Ue = o(249),
		Re = o(248),
		Te = o(247),
		ze = o(246),
		De = o(245),
		Fe = o(244),
		qe = o(243),
		Ve = o(242),
		Xe = o(241),
		We = o(240),
		$e = o(239),
		He = o(238),
		Ze = o(237),
		Ge = o(236),
		Je = o(235),
		Ke = o(234),
		Qe = o(233),
		Ye = o(232),
		et = o(231),
		tt = o(230),
		ot = o(229),
		st = o(228),
		nt = o(227),
		rt = o(226),
		at = o(225),
		dt = o(224),
		ut = o(223),
		ct = o(222),
		lt = o(221),
		it = o(220),
		ft = o(219),
		mt = o(218),
		vt = o(217),
		gt = o(216),
		ht = o(215),
		pt = o(214),
		kt = o(213),
		_t = o(212),
		Bt = o(211),
		bt = o(210),
		Ct = o(209),
		wt = o(208),
		yt = o(207),
		xt = o(206),
		Pt = o(205),
		Et = o(204),
		Mt = o(203),
		St = o(202),
		Ot = o(201),
		Nt = o(200),
		At = o(199),
		Lt = o(198),
		It = o(197),
		jt = o(196),
		Ut = o(195),
		Rt = o(194),
		Tt = o(193),
		zt = o(192),
		Dt = o(191),
		Ft = o(190),
		qt = o(189),
		Vt = o(188),
		Xt = o(187),
		Wt = o(186),
		$t = o(185),
		Ht = o(184),
		Zt = o(183),
		Gt = o(182),
		Jt = o(181),
		Kt = o(180),
		Qt = o(179),
		Yt = o(178),
		eo = o(177),
		to = o(176),
		oo = o(175),
		so = o(174),
		no = o(173),
		ro = o(172),
		ao = o(171),
		uo = o(170),
		co = o(169),
		lo = o(168),
		io = o(167),
		fo = o(166),
		mo = o(165),
		vo = o(164),
		go = o(163),
		ho = o(162),
		po = o(161),
		ko = o(160),
		_o = o(159),
		Bo = o(158),
		bo = o(157),
		Co = o(156),
		wo = o(155),
		yo = o(154),
		xo = o(153),
		Po = o(152),
		Eo = o(151),
		Mo = o(150),
		So = o(149),
		Oo = o(148),
		No = o(147),
		Ao = o(146),
		Lo = o(145),
		Io = o(144),
		jo = o(143),
		Uo = o(142),
		Ro = o(141),
		To = o(140),
		zo = o(139),
		Do = o(138),
		Fo = o(137),
		qo = o(136),
		Vo = o(135),
		Xo = o(134),
		Wo = o(133),
		$o = o(132),
		Ho = o(131),
		Zo = o(130),
		Go = o(129),
		Jo = o(128),
		Ko = o(127),
		Qo = o(126),
		Yo = o(125),
		es = o(124),
		ts = o(123),
		os = o(122),
		ss = o(121),
		ns = o(120),
		rs = o(119),
		as = o(118),
		ds = o(117),
		us = o(116),
		cs = o(115),
		ls = o(114),
		is = o(113),
		fs = o(112),
		ms = o(111),
		vs = o(110),
		gs = o(109),
		hs = o(108),
		ps = o(107),
		ks = o(106),
		_s = o(105),
		Bs = o(104),
		bs = o(103),
		Cs = o(102),
		ws = o(101),
		ys = o(100),
		xs = o(99),
		Ps = o(98),
		Es = o(97),
		Ms = o(96),
		Ss = o(95),
		Os = o(94),
		Ns = o(93),
		As = o(92),
		Ls = o(91),
		Is = o(90),
		js = o(89),
		Us = o(88),
		Rs = o(87),
		Ts = o(86),
		zs = o(85),
		Ds = o(84),
		Fs = o(83),
		qs = o(82),
		Vs = o(81),
		Xs = o(80),
		Ws = o(79),
		$s = o(78),
		Hs = o(77),
		Zs = o(76),
		Gs = o(75),
		Js = o(74),
		Ks = o(73),
		Qs = o(72),
		Ys = o(71),
		en = o(70),
		tn = o(69),
		on = o(68),
		sn = o(67),
		nn = o(66),
		rn = o(65),
		an = o(64),
		dn = o(63),
		un = o(62),
		cn = o(61),
		ln = o(60),
		fn = o(59),
		mn = o(58),
		vn = o(57),
		gn = o(56),
		hn = o(55),
		pn = o(54),
		kn = o(53),
		_n = o(52),
		Bn = o(51),
		bn = o(50),
		Cn = o(49),
		wn = o(48),
		yn = o(47),
		xn = o(46),
		Pn = o(45),
		En = o(44),
		Mn = o(43),
		Sn = o(42),
		On = o(41),
		Nn = o(40),
		An = o(39),
		Ln = o(38),
		In = o(37),
		jn = o(36),
		Un = o(35),
		Rn = o(34),
		Tn = o(33),
		zn = o(32),
		Dn = o(31),
		Fn = o(30),
		qn = o(29),
		Vn = o(28),
		Xn = o(27),
		Wn = o(26),
		$n = o(25),
		Hn = o(24),
		Zn = o(23),
		Gn = o(22);
	t.default = {
		"1inch_bsc_61c44543": D.default,
		"2b1k_solana_f3924eb0": an.default,
		"4zmm_solanadevnet_1318d07d": On.default,
		"6p6x_solana_056c2704": dn.default,
		"7atg_solana_3506aeb0": un.default,
		"7dhb_solana_c9e04412": cn.default,
		"7i5k_solana_c9e04412": ln.default,
		aave: Re.default,
		aave_matic_bfdf3c37: ys.default,
		ach_ethereum_fbad19a6: Te.default,
		ada_bsc_db5f96ab: F.default,
		airswap: ze.default,
		alchemix: De.default,
		algorand: s.default,
		ali_ethereum_9ae8d1eb: Fe.default,
		alice_bsc_06579e0c: q.default,
		alpaca_bsc_5a5767ef: V.default,
		amp: qe.default,
		ankr: Ve.default,
		ape: Xe.default,
		api3: We.default,
		aptos: g.default,
		aragonv2: $e.default,
		arb_ethereumarbone_aa4791c0: es.default,
		ark: h.default,
		audius: He.default,
		audius_solana: fn.default,
		aurora: p.default,
		aurora_aurora_4cb82266: k.default,
		avalanchec: _.default,
		avax_bsc_6383077e: X.default,
		axelar: M.default,
		axieinfinity: Ze.default,
		balancer: Ge.default,
		bancor: Je.default,
		band_ethereum_a9ddc2a2: Ke.default,
		basemainnet: S.default,
		bat: Qe.default,
		bcash: N.default,
		bgold: A.default,
		bitcoin: L.default,
		bitcoinregtest: I.default,
		bitcoinsv: j.default,
		bitcointestnet: U.default,
		bittorrentv2: Tn.default,
		blok_matic_79cb78bc: xs.default,
		blur_ethereum_ef097961: Ye.default,
		bnbmainnet: R.default,
		bnx_bsc_08fb5f48: W.default,
		bone_ethereum_1cdd7eb5: et.default,
		brise_bsc_41a56649: $.default,
		bsc: H.default,
		bsw_bsc_1af7c444: Z.default,
		busd: tt.default,
		busd_bnbmainnet: T.default,
		busd_bsc: G.default,
		cardano: Pe.default,
		cbeth_ethereum_32621dca: ot.default,
		celr_bsc_af903611: J.default,
		chainlink: st.default,
		chiliz: nt.default,
		chr_bsc_03abf483: K.default,
		civic: rt.default,
		compound: at.default,
		cosmos: Se.default,
		coti: dt.default,
		cro: ut.default,
		cronos: Oe.default,
		crv: ct.default,
		cvx: lt.default,
		dai_bsc_709f85b7: Q.default,
		dai_matic_845af41b: Ps.default,
		dai_optimism_6343ae93: $s.default,
		dash: Ne.default,
		decentraland: it.default,
		decred: Ae.default,
		dent: ft.default,
		dezx_solana_3b523050: mn.default,
		digibyte: Le.default,
		dllr_rootstock_6cfc3a7b: sn.default,
		dodo_bsc_afd0876f: Y.default,
		dogecoin: Ie.default,
		dragon: mt.default,
		dydx: vt.default,
		eche_solana_c5cba5c4: vn.default,
		eden: n.default,
		elrond: je.default,
		enjincoin: gt.default,
		ens: ht.default,
		eosio: Ue.default,
		eth_bsc_f1d2a904: ee.default,
		ethereum: pt.default,
		ethereumarbnova: Yo.default,
		ethereumarbone: ts.default,
		ethereumclassic: cs.default,
		ethereumholesky: ls.default,
		ethereumsepolia: is.default,
		eurs_ethereum_32177ca7: kt.default,
		exit: r.default,
		fantom: _t.default,
		fantommainnet: fs.default,
		fet_ethereum_6609900b: Bt.default,
		filecoin: vs.default,
		flare: gs.default,
		floki_bsc_c4112b36: te.default,
		flux_bsc_2e3e61bf: oe.default,
		forth_ethereum_52c00d9e: bt.default,
		fox: Ct.default,
		frax: wt.default,
		frax_share: yt.default,
		fuaf_solana_2f933a22: gn.default,
		funfair: xt.default,
		fusdt_fantommainnet_b94eea88: ms.default,
		gal_bsc: se.default,
		gala_ethereum_3e0e1736: Pt.default,
		geminidollar: Et.default,
		gems_algorand_60d192b2: a.default,
		ghst_matic_d2b95a36: Es.default,
		gmt_bsc: ne.default,
		gmx_avalanchec_c7b658d1: B.default,
		gmx_ethereumarbone_34725f35: os.default,
		gnosis: Mt.default,
		gns_matic_4ae7a3c1: Ms.default,
		golemv2: St.default,
		gst_bsc: re.default,
		hedera: hs.default,
		high_bsc_1204b987: ae.default,
		holo: Ot.default,
		huobi: Nt.default,
		iconmainnet: ps.default,
		iexec: At.default,
		illuvium: Lt.default,
		imx: It.default,
		inj_bsc_47753064: de.default,
		injective: ks.default,
		iota_bsc_32b417ef: ue.default,
		iotx_bsc_3d250dac: ce.default,
		jasmy_ethereum_2c1e076b: jt.default,
		joe_avalanchec_872bcd49: b.default,
		jupy_solana_ed7ebe51: hn.default,
		just_tron: zn.default,
		kava: _s.default,
		kyberv2: Ut.default,
		leash_ethereum_562b149d: Rt.default,
		leo: Tt.default,
		lidodao: zt.default,
		lightningnetwork: Bs.default,
		lina_bsc_e410b173: le.default,
		link_ethereumarbone_63f7deae: ss.default,
		link_matic_0fc0671d: Ss.default,
		lisk: bs.default,
		litecoin: Cs.default,
		livepeer: Dt.default,
		looks_ethereum_222f7656: Ft.default,
		loomv2: qt.default,
		loopring: Vt.default,
		lqty_ethereum_126a91b0: Xt.default,
		ltc_bsc_2a538e9a: ie.default,
		magic_ethereumarbone_57601877: ns.default,
		maker: Wt.default,
		mantle: ws.default,
		mask_ethereum_c2890c79: $t.default,
		matic: Os.default,
		matic_bsc_4cef25c8: fe.default,
		mbox_bsc: me.default,
		mcd: Ht.default,
		mdt_ethereum_1bb644a2: Zt.default,
		mdx_bsc_d000e0cd: ve.default,
		mefn_solana_5d11b887: pn.default,
		metis_ethereum_54dc1156: Gt.default,
		monero: zs.default,
		msol_solana_c9e04412: kn.default,
		mvx_matic_60b5e17b: Ns.default,
		mxc_ethereum_c4923be4: Jt.default,
		nano: Ds.default,
		near_bsc_02be202a: ge.default,
		nem: Fs.default,
		neo: qs.default,
		neogas: Vs.default,
		nexo_ethereum_fe4d2476: Kt.default,
		numeraire: Qt.default,
		ogn_ethereum_fcc7cc39: Yt.default,
		olympusv2: eo.default,
		omisego: to.default,
		oneinch: oo.default,
		ontology: Xs.default,
		ontologygas: Ws.default,
		op_optimism_4a7ee59d: Hs.default,
		optimism: Zs.default,
		opul_algorand_35471831: d.default,
		orca_solana: _n.default,
		osmosis: Qs.default,
		ousd_ethereum_48fcf72d: so.default,
		pancakeswap: he.default,
		paxgold: no.default,
		paxos: ro.default,
		pepe_ethereum_22ed551c: ao.default,
		perp_ethereum_c75f71b4: uo.default,
		png_avalanchec_4c320d14: C.default,
		pol_ethereum_e5c9fadc: co.default,
		poli_solana_0cc3745c: Bn.default,
		polkadot: Ys.default,
		polygon: lo.default,
		powerledger: io.default,
		pyusd_ethereum_871d3761: fo.default,
		qi_avalanchec_19fd2065: w.default,
		qtumignition: en.default,
		quant: mo.default,
		radar_ethereum_e4d48030: vo.default,
		rarible: go.default,
		ravencoin: tn.default,
		raydium: bn.default,
		rdnt_ethereumarbone_58d922a3: rs.default,
		reef_bsc_d662ee25: pe.default,
		ren: ho.default,
		render: po.default,
		request: ko.default,
		reth_ethereum_40b16905: _o.default,
		rif_rootstock_c62f668d: nn.default,
		ripple: on.default,
		rlb_ethereum_a7e53179: Bo.default,
		rndr_solana_4b3ba195: Cn.default,
		rootstock: rn.default,
		rpl_ethereum_2f6fb917: bo.default,
		rsr_ethereum_a5eb8f84: Co.default,
		sand_matic_0472de85: As.default,
		sandbox: wo.default,
		savax_avalanchec_4c4408bd: y.default,
		sdao_ethereum_c59ee345: yo.default,
		serum: wn.default,
		shibainu: xo.default,
		shibainu_bsc: ke.default,
		smile_algorand: u.default,
		smoothlovepotion: Po.default,
		smoothlovepotion_solana: yn.default,
		snek_cardano_3831f600: Ee.default,
		snx: Eo.default,
		solana: xn.default,
		solanadevnet: Nn.default,
		solanatestnet: An.default,
		sportx_matic: Ls.default,
		sqr_bsc_2fadeb84: _e.default,
		staratlas_solana: Pn.default,
		status: Mo.default,
		stbl_algorand: c.default,
		stellar: Ln.default,
		steth: So.default,
		stg_ethereum_08004d24: Oo.default,
		stmatic_matic_bac42ee5: Is.default,
		storj: No.default,
		sun_tron: Dn.default,
		sushiswap: Ao.default,
		syn_ethereum_c7f5e6b8: Lo.default,
		tel_ethereum_02bc2dbb: Io.default,
		tetherusd: jo.default,
		tetherusd_solana: En.default,
		tetherusd_tezos: In.default,
		tetherusd_tron: Fn.default,
		tezos: jn.default,
		tfuel: Un.default,
		thegraph: Uo.default,
		thegraph_solana: Mn.default,
		theta: Rn.default,
		thorchain_bnbmainnet: z.default,
		tinyusdc_algorand: l.default,
		tlm_bsc_8df4c3e8: Be.default,
		toncoin_bsc_a76181ea: be.default,
		trb_ethereum_ad699fe9: Ro.default,
		tronmainnet: qn.default,
		tru_ethereum_922b250a: To.default,
		trueusd: zo.default,
		uma: Do.default,
		uni_bsc_98044f4e: Ce.default,
		uniswap: Fo.default,
		usdc_avalanchec_185c8bd7: x.default,
		usdc_basemainnet_b5a52617: O.default,
		usdc_ethereumarbone_2e1129c4: as.default,
		usdc_matic_0a883d9b: js.default,
		usdc_optimism_68bb70cd: Gs.default,
		usdcoin: qo.default,
		usdcoin_algorand: i.default,
		usdcoin_bsc: we.default,
		usdcoin_solana: Sn.default,
		usdd_tron: Vn.default,
		usdt_avalanchec_d80c1afa: P.default,
		usdt_bsc_ddedf0f8: ye.default,
		usdt_ethereumarbone_efa95268: ds.default,
		usdt_matic_86e249c1: Us.default,
		usdt_optimism_26487766: Js.default,
		usdte_avalanchec_7d310603: E.default,
		vechainthor: Xn.default,
		verasity: Vo.default,
		vertcoin: $n.default,
		vest_algorand_120e7149: f.default,
		vethor: Wn.default,
		viberate: Xo.default,
		voyager: Wo.default,
		waves: Hn.default,
		wbtc: $o.default,
		wbtc_matic_298d6ace: Rs.default,
		weth: Ho.default,
		weth_ethereumarbone_c53d6bd0: us.default,
		weth_matic: Ts.default,
		wld_optimism_59dbb49e: Ks.default,
		wnxm_ethereum_52ead9a6: Zo.default,
		woo_ethereum_0b749579: Go.default,
		worldmobil_cardano_262abe57: Me.default,
		xet_algorand_a17ef051: m.default,
		xvs_bsc_62e8348a: xe.default,
		yfi: Jo.default,
		ygg: Ko.default,
		yieldly_algorand: v.default,
		zcash: Zn.default,
		zerox: Qo.default,
		zilliqa: Gn.default
	}
}, function(e, t, o) {
	"use strict";
	o.d(t, "QA_FEATURES", function() {
		return d
	});
	var s = o(1),
		n = o(339),
		r = o.n(n),
		a = o(338);
	o.n(a).a;
	const d = !1;
	r()("3s"), s.fiatUnit, s.moneroInitialHeight, s.moneroInitialHeight, s.moneroSubaddressesEnabled, s.moneroSubaddressesEnabled, s.themeName, s.rbfEnabledBitcoin, s.rbfEnabledEthereum, s.adaLegacyAddressEnabled, s.bitcoinLegacyAddressEnabled, s.bitcoinTaprootAddressEnabled, s.wentThroughFiatOnboarding
}, function(e, t, o) {
	e.exports = o(348), e.exports.default = e.exports
}, function(e, t, o) {
	"use strict";
	o.r(t), o.d(t, "SafeError", function() {
		return p
	});
	var s = o(344),
		n = o.n(s),
		r = o(3),
		a = o(343),
		d = 0;

	function u(e) {
		return "__private_" + d++ + "_" + e
	}

	function c(e, t) {
		if (!Object.prototype.hasOwnProperty.call(e, t)) throw new TypeError("attempted to use private field on non-instance");
		return e
	}

	function l(e) {
		return new Set(e)
	}
	const i = l(["EPIPE"]),
		f = l(["Error", "AssertionError", "TypeError", "RangeError", "UnknownError", "SafeErrorFailedToParse", "TimeoutError"]),
		m = {
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
		v = l(Object.values(m).flatMap(e => Object.values(e)));

	function g(e) {
		if ("string" == typeof e && "" !== e) return function(e) {
			return v.has(e)
		}(e) ? e : [...v].find(t => e.includes(t))
	}
	const h = Symbol("SafeError");
	class p {
		static from(e) {
			let t, o, s;
			try {
				const {
					name: a,
					message: d,
					hint: u,
					code: c
				} = e;
				n = a, t = f.has(n) ? a : "UnknownError";
				const l = `${c}`;
				o = function(e) {
					return i.has(e) || /^(EXOD-)?\d{1,4}$/u.test(e)
				}(l) ? l : void 0, s = g(u) || g(d);
				const m = Object(r.default)(e);
				return new p({
					name: t,
					code: o,
					hint: s,
					stack: m,
					initSymbol: h
				})
			} catch {
				try {
					return t ? new p({
						name: t,
						code: o,
						hint: s,
						initSymbol: h
					}) : w
				} catch {
					return w
				}
			}
			var n
		}
		get name() {
			return c(this, k)[k]
		}
		get code() {
			return c(this, _)[_]
		}
		get hint() {
			return c(this, B)[B]
		}
		get stackFrames() {
			var e;
			return null == (e = c(this, b)[b]) ? void 0 : e.map(e => ({
				__proto__: null,
				...e
			}))
		}
		get stack() {
			const e = Object(r.stackFramesToString)(this.stackFrames);
			return e ? `${this.name}: ${this.code||this.hint||"unknownHint"}\n${e}` : void 0
		}
		get timestamp() {
			return c(this, C)[C]
		}
		toJSON() {
			return Object(a.omitUndefined)({
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
			hint: o,
			stack: s,
			initSymbol: r
		}) {
			Object.defineProperty(this, k, {
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, _, {
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, B, {
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, b, {
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, C, {
				writable: !0,
				value: void 0
			}), n()(r === h, "SafeError: use SafeError.from()"), c(this, k)[k] = e, c(this, _)[_] = t, c(this, B)[B] = o, c(this, b)[b] = null == s ? void 0 : s.map(e => ({
				...e
			})), c(this, C)[C] = Date.now()
		}
	}
	p.hints = m;
	var k = u("name"),
		_ = u("code"),
		B = u("hint"),
		b = u("stackFrames"),
		C = u("timestamp");
	const w = new p({
		initSymbol: h,
		name: "SafeErrorFailedToParse"
	})
}, function(e, t, o) {
	"use strict";
	t.default = (e => e.replaceAll(/(?:[A-Za-z]{3,20}\s+){11}[A-Za-z]{3,20}/gu, "****").replaceAll(/(?:0x)?[\dA-Fa-f]{20,}/gu, "****").replaceAll(/[1-9A-HJ-NP-Za-km-z]{50,}/gu, "****").replaceAll(/(?:[\d+/A-Za-z]{4}){3,}(?:[\d+/A-Za-z]{2}==|[\d+/A-Za-z]{3}=|[\d+/A-Za-z]{4})/gu, "****"))
}, function(e, t) {
	function o(e) {
		if (!(this instanceof o)) return new o(e);
		this.value = e
	}

	function s(e, t, o) {
		var s = [],
			r = [],
			a = !0;
		return function e(d) {
			var u = o ? n(d) : d,
				c = {},
				l = {
					node: u,
					node_: d,
					path: [].concat(s),
					parent: r.slice(-1)[0],
					key: s.slice(-1)[0],
					isRoot: 0 === s.length,
					level: s.length,
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
						a = !1
					}
				};
			if (!a) return l;
			if ("object" == typeof u && null !== u) {
				l.isLeaf = 0 == Object.keys(u).length;
				for (var i = 0; i < r.length; i++)
					if (r[i].node_ === d) {
						l.circular = r[i];
						break
					}
			} else l.isLeaf = !0;
			l.notLeaf = !l.isLeaf, l.notRoot = !l.isRoot;
			var f = t.call(l, l.node);
			if (void 0 !== f && l.update && l.update(f), c.before && c.before.call(l, l.node), "object" == typeof l.node && null !== l.node && !l.circular) {
				r.push(l);
				var m = Object.keys(l.node);
				m.forEach(function(t, n) {
					s.push(t), c.pre && c.pre.call(l, l.node[t], t);
					var r = e(l.node[t]);
					o && Object.hasOwnProperty.call(l.node, t) && (l.node[t] = r.node), r.isLast = n == m.length - 1, r.isFirst = 0 == n, c.post && c.post.call(l, r), s.pop()
				}), r.pop()
			}
			return c.after && c.after.call(l, l.node), l
		}(e).node
	}

	function n(e) {
		var t;
		return "object" == typeof e && null !== e ? (t = Array.isArray(e) ? [] : e instanceof Date ? new Date(e) : e instanceof Boolean ? new Boolean(e) : e instanceof Number ? new Number(e) : e instanceof String ? new String(e) : Object.create(Object.getPrototypeOf(e)), Object.keys(e).forEach(function(o) {
			t[o] = e[o]
		}), t) : e
	}
	e.exports = o, o.prototype.get = function(e) {
		for (var t = this.value, o = 0; o < e.length; o++) {
			var s = e[o];
			if (!Object.hasOwnProperty.call(t, s)) {
				t = void 0;
				break
			}
			t = t[s]
		}
		return t
	}, o.prototype.set = function(e, t) {
		for (var o = this.value, s = 0; s < e.length - 1; s++) {
			var n = e[s];
			Object.hasOwnProperty.call(o, n) || (o[n] = {}), o = o[n]
		}
		return o[e[s]] = t, t
	}, o.prototype.map = function(e) {
		return s(this.value, e, !0)
	}, o.prototype.forEach = function(e) {
		return this.value = s(this.value, e, !1), this.value
	}, o.prototype.reduce = function(e, t) {
		var o = 1 === arguments.length,
			s = o ? this.value : t;
		return this.forEach(function(t) {
			this.isRoot && o || (s = e.call(this, s, t))
		}), s
	}, o.prototype.deepEqual = function(e) {
		if (1 !== arguments.length) throw new Error("deepEqual requires exactly one object to compare against");
		var t = !0,
			s = e;
		return this.forEach(function(n) {
			var r = function() {
				t = !1
			}.bind(this);
			if (!this.isRoot) {
				if ("object" != typeof s) return r();
				s = s[this.key]
			}
			var a = s;
			this.post(function() {
				s = a
			});
			var d = function(e) {
				return Object.prototype.toString.call(e)
			};
			if (this.circular) o(e).get(this.circular.path) !== a && r();
			else if (typeof a != typeof n) r();
			else if (null === a || null === n || void 0 === a || void 0 === n) a !== n && r();
			else if (a.__proto__ !== n.__proto__) r();
			else if (a === n);
			else if ("function" == typeof a) a instanceof RegExp ? a.toString() != n.toString() && r() : a !== n && r();
			else if ("object" == typeof a)
				if ("[object Arguments]" === d(n) || "[object Arguments]" === d(a)) d(a) !== d(n) && r();
				else if (a instanceof Date || n instanceof Date) a instanceof Date && n instanceof Date && a.getTime() === n.getTime() || r();
			else {
				var u = Object.keys(a),
					c = Object.keys(n);
				if (u.length !== c.length) return r();
				for (var l = 0; l < u.length; l++) {
					var i = u[l];
					Object.hasOwnProperty.call(n, i) || r()
				}
			}
		}), t
	}, o.prototype.paths = function() {
		var e = [];
		return this.forEach(function(t) {
			e.push(this.path)
		}), e
	}, o.prototype.nodes = function() {
		var e = [];
		return this.forEach(function(t) {
			e.push(this.node)
		}), e
	}, o.prototype.clone = function() {
		var e = [],
			t = [];
		return function o(s) {
			for (var r = 0; r < e.length; r++)
				if (e[r] === s) return t[r];
			if ("object" == typeof s && null !== s) {
				var a = n(s);
				return e.push(s), t.push(a), Object.keys(s).forEach(function(e) {
					a[e] = o(s[e])
				}), e.pop(), t.pop(), a
			}
			return s
		}(this.value)
	}, Object.keys(o.prototype).forEach(function(e) {
		o[e] = function(t) {
			var s = [].slice.call(arguments, 1),
				n = o(t);
			return n[e].apply(n, s)
		}
	})
}, function(e, t, o) {
	"use strict";
	var s = o(14),
		n = o.n(s);
	t.default = (e => void 0 === globalThis.Buffer ? e : (n()(e).forEach(function(e) {
		e instanceof Uint8Array && this.update(globalThis.Buffer.from(e))
	}), e))
}, function(e, t, o) {
	"use strict";
	o.d(t, "wrapIpc", function() {
		return d
	});
	var s = o(15);
	const n = new WeakMap,
		r = new WeakMap;

	function a(e, t, o) {
		const a = r.get(e);
		if (a && (a.filter !== t || a.useBuffers !== o)) throw new Error("Attempting to register the same handler with different parameters");
		r.set(e, {
			filter: t,
			useBuffers: o
		});
		const d = n.get(e);
		if (d) return d;
		const u = (n, ...r) => {
			if (!0 !== t(n)) return;
			const a = o ? Object(s.default)(r) : r;
			return e(n, ...a)
		};
		return n.set(e, u), u
	}

	function d(e, t) {
		return {
			on(o, s, n = !0) {
				e.on(o, a(s, t, n))
			},
			once(o, s, n = !0) {
				e.once(o, a(s, t, n))
			},
			removeListener(t, o) {
				e.removeListener(t, n.get(o))
			},
			removeAllListeners(t) {
				e.removeAllListeners(t)
			},
			handle(o, s, n = !0) {
				e.handle(o, a(s, t, n))
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
	function o(e) {
		return e instanceof Error ? {
			...e,
			name: e.name,
			message: e.message,
			stack: s(e.stack)
		} : {
			name: e.name || "UNKNOWN",
			message: JSON.stringify(e)
		}
	}

	function s(e) {
		return e.replace(/\/Users\/[^/]+/g, "").replace(/\\Users\\[^\\]+/g, "").replace(/\/home\/[^/]+/g, "")
	}
	e.exports = {
		toObject: o,
		JSONReplacer: function(e, t) {
			return t instanceof Error ? o(t) : t
		},
		cleanStack: s
	}
}, function(e, t, o) {
	"use strict";
	o.d(t, "createServerImplementation", function() {
		return r
	});
	var s = o(17),
		n = o(4);

	function r(e, t, o, r, a, d, {
		wrap: u,
		unwrap: c
	} = {}) {
		const l = `${n.CHANNEL_PREFIX}:${r}:call`,
			i = async (e, l) => {
				const i = o(e, l);
				if (!a.includes(i)) return void console.error(`Skipping unexpected message from (${i}) to channel: ${r}`);
				const {
					func: f,
					args: m,
					token: v
				} = l.payload, [g, h] = await async function(e, t) {
					if ("function" == typeof d[e]) try {
						c && (t = c(e, t));
						let o = await d[e](...t);
						return u && (o = u(e, o)), [null, o]
					} catch (e) {
						return [e, null]
					}
					try {
						return [null, d[e]]
					} catch (e) {
						return [e]
					}
				}(f, m), p = g ? Object(s.toObject)(g) : null;
				t(i, `${n.CHANNEL_PREFIX}:${r}:response:${v}`, [p, h])
			};
		return e.on(l, i), {
			stop: () => e.removeListener(l, i)
		}
	}
}, function(e, t, o) {
	"use strict";
	o.d(t, "fromObject", function() {
		return d
	});
	class s extends Error {
		constructor(...e) {
			super(...e), this.name = "UnknownError"
		}
	}
	const n = globalThis,
		r = [...[Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError, URIError], ...[n.RTCError, n.OverconstrainedError, n.DOMError, n.MediaError], s, class extends Error {
			constructor(...e) {
				super(...e), this.name = "AssertionError"
			}
		}],
		a = new Map;
	for (const e of r) e && (e === Error || e.prototype instanceof Error) && a.set(e.name, e);

	function d(e) {
		const t = new(a.get(e.name) || s)(e.message);
		for (const o of Object.keys(e)) o in t || ["__proto__", "name", "message"].includes(o) || (t[o] = e[o]);
		return e.stack && (t.stack = e.stack), t
	}
}, function(e, t, o) {
	"use strict";
	const s = globalThis.crypto;
	t.randomUUID = s.randomUUID.bind(s)
}, function(e, t, o) {
	"use strict";
	var s = o(0),
		n = o.n(s);

	function r() {
		return (r = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var o = arguments[t];
				for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (e[s] = o[s])
			}
			return e
		}).apply(this, arguments)
	}
	t.default = (e => n.a.createElement("svg", r({
		width: 36,
		height: 36,
		viewBox: "0 0 36 36",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, e), n.a.createElement("path", {
		d: "M35.784 10.052 20.454 0v5.62l9.834 6.39-1.157 3.662h-8.678v4.656h8.678l1.157 3.661-9.835 6.391V36l15.331-10.02-2.507-7.964 2.507-7.964ZM7.116 20.328h8.645v-4.656H7.084L5.959 12.01l9.801-6.39V0L.431 10.052l2.507 7.964L.43 25.98 15.793 36v-5.62L5.96 23.99l1.157-3.662Z",
		opacity: .1,
		fill: "#fff"
	})))
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/zilliqa-meta/assets/svg/zilliqa.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/zcash-meta/assets/svg/zcash.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/waves-meta/assets/svg/waves.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/vertcoin-meta/assets/svg/vertcoin.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/vechainthor-meta/assets/svg/vethor.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/vechainthor-meta/assets/svg/vechainthor.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/tronmainnet-meta/assets/svg/usdd_tron.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/tronmainnet-meta/assets/svg/tronmainnet.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/tronmainnet-meta/assets/svg/tetherusd_tron.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/tronmainnet-meta/assets/svg/sun_tron.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/tronmainnet-meta/assets/svg/just_tron.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/tronmainnet-meta/assets/svg/bittorrentv2.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/theta-meta/assets/svg/theta.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/theta-meta/assets/svg/tfuel.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/tezos-meta/assets/svg/tezos.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/tezos-meta/assets/svg/tetherusd_tezos.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/stellar-meta/assets/svg/stellar.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/solanatestnet-meta/assets/svg/solanatestnet.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/solanadevnet-meta/assets/svg/solanadevnet.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/solanadevnet-meta/assets/svg/4zmm_solanadevnet_1318d07d.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/solana-meta/assets/svg/usdcoin_solana.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/solana-meta/assets/svg/thegraph_solana.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/solana-meta/assets/svg/tetherusd_solana.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/solana-meta/assets/svg/staratlas_solana.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/solana-meta/assets/svg/solana.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/solana-meta/assets/svg/smoothlovepotion_solana.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/solana-meta/assets/svg/serum.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/solana-meta/assets/svg/rndr_solana_4b3ba195.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/solana-meta/assets/svg/raydium.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/solana-meta/assets/svg/poli_solana_0cc3745c.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/solana-meta/assets/svg/orca_solana.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/solana-meta/assets/svg/msol_solana_c9e04412.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/solana-meta/assets/svg/mefn_solana_5d11b887.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/solana-meta/assets/svg/jupy_solana_ed7ebe51.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/solana-meta/assets/svg/fuaf_solana_2f933a22.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/solana-meta/assets/svg/eche_solana_c5cba5c4.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/solana-meta/assets/svg/dezx_solana_3b523050.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/solana-meta/assets/svg/audius_solana.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/solana-meta/assets/svg/7i5k_solana_c9e04412.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/solana-meta/assets/svg/7dhb_solana_c9e04412.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/solana-meta/assets/svg/7atg_solana_3506aeb0.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/solana-meta/assets/svg/6p6x_solana_056c2704.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/solana-meta/assets/svg/2b1k_solana_f3924eb0.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/rootstock-meta/assets/svg/rootstock.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/rootstock-meta/assets/svg/rif_rootstock_c62f668d.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/rootstock-meta/assets/svg/dllr_rootstock_6cfc3a7b.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ripple-meta/assets/svg/ripple.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ravencoin-meta/assets/svg/ravencoin.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/qtumignition-meta/assets/svg/qtumignition.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/polkadot-meta/assets/svg/polkadot.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/osmosis-meta/assets/svg/osmosis.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/optimism-meta/assets/svg/wld_optimism_59dbb49e.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/optimism-meta/assets/svg/usdt_optimism_26487766.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/optimism-meta/assets/svg/usdc_optimism_68bb70cd.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/optimism-meta/assets/svg/optimism.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/optimism-meta/assets/svg/op_optimism_4a7ee59d.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/optimism-meta/assets/svg/dai_optimism_6343ae93.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ontology-meta/assets/svg/ontologygas.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ontology-meta/assets/svg/ontology.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/neo-meta/assets/svg/neogas.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/neo-meta/assets/svg/neo.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/nem-meta/assets/svg/nem.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/nano-meta/assets/svg/nano.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/monero-meta/assets/svg/monero.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/matic-meta/assets/svg/weth_matic.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/matic-meta/assets/svg/wbtc_matic_298d6ace.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/matic-meta/assets/svg/usdt_matic_86e249c1.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/matic-meta/assets/svg/usdc_matic_0a883d9b.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/matic-meta/assets/svg/stmatic_matic_bac42ee5.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/matic-meta/assets/svg/sportx_matic.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/matic-meta/assets/svg/sand_matic_0472de85.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/matic-meta/assets/svg/mvx_matic_60b5e17b.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/matic-meta/assets/svg/matic.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/matic-meta/assets/svg/link_matic_0fc0671d.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/matic-meta/assets/svg/gns_matic_4ae7a3c1.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/matic-meta/assets/svg/ghst_matic_d2b95a36.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/matic-meta/assets/svg/dai_matic_845af41b.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/matic-meta/assets/svg/blok_matic_79cb78bc.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/matic-meta/assets/svg/aave_matic_bfdf3c37.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/mantle-meta/assets/svg/mantle.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/litecoin-meta/assets/svg/litecoin.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/lisk-meta/assets/svg/lisk.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/lightningnetwork-meta/assets/svg/lightningnetwork.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/kava-meta/assets/svg/kava.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/injective-meta/assets/svg/injective.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/iconmainnet-meta/assets/svg/iconmainnet.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/hedera-meta/assets/svg/hedera.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/flare-meta/assets/svg/flare.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/filecoin-meta/assets/svg/filecoin.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/fantommainnet-meta/assets/svg/fusdt_fantommainnet_b94eea88.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/fantommainnet-meta/assets/svg/fantommainnet.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereumsepolia-meta/assets/svg/ethereumsepolia.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereumholesky-meta/assets/svg/ethereumholesky.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereumclassic-meta/assets/svg/ethereumclassic.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereumarbone-meta/assets/svg/weth_ethereumarbone_c53d6bd0.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereumarbone-meta/assets/svg/usdt_ethereumarbone_efa95268.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereumarbone-meta/assets/svg/usdc_ethereumarbone_2e1129c4.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereumarbone-meta/assets/svg/rdnt_ethereumarbone_58d922a3.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereumarbone-meta/assets/svg/magic_ethereumarbone_57601877.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereumarbone-meta/assets/svg/link_ethereumarbone_63f7deae.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereumarbone-meta/assets/svg/gmx_ethereumarbone_34725f35.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereumarbone-meta/assets/svg/ethereumarbone.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereumarbone-meta/assets/svg/arb_ethereumarbone_aa4791c0.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereumarbnova-meta/assets/svg/ethereumarbnova.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/zerox.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/ygg.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/yfi.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/woo_ethereum_0b749579.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/wnxm_ethereum_52ead9a6.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/weth.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/wbtc.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/voyager.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/viberate.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/verasity.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/usdcoin.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/uniswap.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/uma.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/trueusd.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/tru_ethereum_922b250a.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/trb_ethereum_ad699fe9.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/thegraph.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/tetherusd.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/tel_ethereum_02bc2dbb.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/syn_ethereum_c7f5e6b8.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/sushiswap.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/storj.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/stg_ethereum_08004d24.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/steth.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/status.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/snx.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/smoothlovepotion.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/shibainu.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/sdao_ethereum_c59ee345.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/sandbox.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/rsr_ethereum_a5eb8f84.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/rpl_ethereum_2f6fb917.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/rlb_ethereum_a7e53179.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/reth_ethereum_40b16905.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/request.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/render.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/ren.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/rarible.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/radar_ethereum_e4d48030.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/quant.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/pyusd_ethereum_871d3761.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/powerledger.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/polygon.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/pol_ethereum_e5c9fadc.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/perp_ethereum_c75f71b4.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/pepe_ethereum_22ed551c.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/paxos.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/paxgold.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/ousd_ethereum_48fcf72d.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/oneinch.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/omisego.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/olympusv2.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/ogn_ethereum_fcc7cc39.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/numeraire.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/nexo_ethereum_fe4d2476.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/mxc_ethereum_c4923be4.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/metis_ethereum_54dc1156.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/mdt_ethereum_1bb644a2.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/mcd.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/mask_ethereum_c2890c79.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/maker.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/lqty_ethereum_126a91b0.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/loopring.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/loomv2.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/looks_ethereum_222f7656.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/livepeer.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/lidodao.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/leo.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/leash_ethereum_562b149d.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/kyberv2.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/jasmy_ethereum_2c1e076b.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/imx.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/illuvium.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/iexec.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/huobi.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/holo.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/golemv2.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/gnosis.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/geminidollar.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/gala_ethereum_3e0e1736.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/funfair.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/frax_share.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/frax.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/fox.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/forth_ethereum_52c00d9e.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/fet_ethereum_6609900b.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/fantom.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/eurs_ethereum_32177ca7.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/ethereum.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/ens.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/enjincoin.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/dydx.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/dragon.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/dent.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/decentraland.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/cvx.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/crv.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/cro.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/coti.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/compound.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/civic.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/chiliz.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/chainlink.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/cbeth_ethereum_32621dca.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/busd.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/bone_ethereum_1cdd7eb5.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/blur_ethereum_ef097961.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/bat.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/band_ethereum_a9ddc2a2.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/bancor.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/balancer.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/axieinfinity.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/audius.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/aragonv2.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/api3.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/ape.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/ankr.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/amp.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/ali_ethereum_9ae8d1eb.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/alchemix.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/airswap.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/ach_ethereum_fbad19a6.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ethereum-meta/assets/svg/aave.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/eosio-meta/assets/svg/eosio.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/elrond-meta/assets/svg/elrond.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/dogecoin-meta/assets/svg/dogecoin.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/digibyte-meta/assets/svg/digibyte.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/decred-meta/assets/svg/decred.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/dash-meta/assets/svg/dash.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/cronos-meta/assets/svg/cronos.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/cosmos-meta/assets/svg/cosmos.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/cardano-meta/assets/svg/worldmobil_cardano_262abe57.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/cardano-meta/assets/svg/snek_cardano_3831f600.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/cardano-meta/assets/svg/cardano.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/bsc-meta/assets/svg/xvs_bsc_62e8348a.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/bsc-meta/assets/svg/usdt_bsc_ddedf0f8.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/bsc-meta/assets/svg/usdcoin_bsc.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/bsc-meta/assets/svg/uni_bsc_98044f4e.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/bsc-meta/assets/svg/toncoin_bsc_a76181ea.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/bsc-meta/assets/svg/tlm_bsc_8df4c3e8.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/bsc-meta/assets/svg/sqr_bsc_2fadeb84.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/bsc-meta/assets/svg/shibainu_bsc.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/bsc-meta/assets/svg/reef_bsc_d662ee25.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/bsc-meta/assets/svg/pancakeswap.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/bsc-meta/assets/svg/near_bsc_02be202a.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/bsc-meta/assets/svg/mdx_bsc_d000e0cd.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/bsc-meta/assets/svg/mbox_bsc.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/bsc-meta/assets/svg/matic_bsc_4cef25c8.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/bsc-meta/assets/svg/ltc_bsc_2a538e9a.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/bsc-meta/assets/svg/lina_bsc_e410b173.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/bsc-meta/assets/svg/iotx_bsc_3d250dac.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/bsc-meta/assets/svg/iota_bsc_32b417ef.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/bsc-meta/assets/svg/inj_bsc_47753064.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/bsc-meta/assets/svg/high_bsc_1204b987.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/bsc-meta/assets/svg/gst_bsc.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/bsc-meta/assets/svg/gmt_bsc.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/bsc-meta/assets/svg/gal_bsc.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/bsc-meta/assets/svg/flux_bsc_2e3e61bf.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/bsc-meta/assets/svg/floki_bsc_c4112b36.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/bsc-meta/assets/svg/eth_bsc_f1d2a904.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/bsc-meta/assets/svg/dodo_bsc_afd0876f.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/bsc-meta/assets/svg/dai_bsc_709f85b7.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/bsc-meta/assets/svg/chr_bsc_03abf483.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/bsc-meta/assets/svg/celr_bsc_af903611.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/bsc-meta/assets/svg/busd_bsc.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/bsc-meta/assets/svg/bsw_bsc_1af7c444.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/bsc-meta/assets/svg/bsc.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/bsc-meta/assets/svg/brise_bsc_41a56649.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/bsc-meta/assets/svg/bnx_bsc_08fb5f48.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/bsc-meta/assets/svg/avax_bsc_6383077e.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/bsc-meta/assets/svg/alpaca_bsc_5a5767ef.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/bsc-meta/assets/svg/alice_bsc_06579e0c.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/bsc-meta/assets/svg/ada_bsc_db5f96ab.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/bsc-meta/assets/svg/1inch_bsc_61c44543.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/bnbmainnet-meta/assets/svg/thorchain_bnbmainnet.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/bnbmainnet-meta/assets/svg/busd_bnbmainnet.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/bnbmainnet-meta/assets/svg/bnbmainnet.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/bitcointestnet-meta/assets/svg/bitcointestnet.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/bitcoinsv-meta/assets/svg/bitcoinsv.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/bitcoinregtest-meta/assets/svg/bitcoinregtest.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/bitcoin-meta/assets/svg/bitcoin.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/bgold-meta/assets/svg/bgold.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/bcash-meta/assets/svg/bcash.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/basemainnet-meta/assets/svg/usdc_basemainnet_b5a52617.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/basemainnet-meta/assets/svg/basemainnet.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/axelar-meta/assets/svg/axelar.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/avalanchec-meta/assets/svg/usdte_avalanchec_7d310603.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/avalanchec-meta/assets/svg/usdt_avalanchec_d80c1afa.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/avalanchec-meta/assets/svg/usdc_avalanchec_185c8bd7.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/avalanchec-meta/assets/svg/savax_avalanchec_4c4408bd.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/avalanchec-meta/assets/svg/qi_avalanchec_19fd2065.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/avalanchec-meta/assets/svg/png_avalanchec_4c320d14.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/avalanchec-meta/assets/svg/joe_avalanchec_872bcd49.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/avalanchec-meta/assets/svg/gmx_avalanchec_c7b658d1.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/avalanchec-meta/assets/svg/avalanchec.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/aurora-meta/assets/svg/aurora_aurora_4cb82266.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/aurora-meta/assets/svg/aurora.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/ark-meta/assets/svg/ark.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/aptos-meta/assets/svg/aptos.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/algorand-meta/assets/svg/yieldly_algorand.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/algorand-meta/assets/svg/xet_algorand_a17ef051.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/algorand-meta/assets/svg/vest_algorand_120e7149.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/algorand-meta/assets/svg/usdcoin_algorand.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/algorand-meta/assets/svg/tinyusdc_algorand.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/algorand-meta/assets/svg/stbl_algorand.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/algorand-meta/assets/svg/smile_algorand.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/algorand-meta/assets/svg/opul_algorand_35471831.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/algorand-meta/assets/svg/gems_algorand_60d192b2.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/algorand-meta/assets/svg/exit.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/algorand-meta/assets/svg/eden.svg"
}, function(e, t, o) {
	"use strict";
	t.default = "../node_modules/@exodus/algorand-meta/assets/svg/algorand.svg"
}, function(e, t, o) {
	"use strict";
	var s = o(9);
	o.d(t, "default", function() {
		return s.default
	})
}, function(e, t, o) {
	e.exports = o(346)
}, function(e, t) {
	var o = 1e3,
		s = 60 * o,
		n = 60 * s,
		r = 24 * n,
		a = 365.25 * r;

	function d(e, t, o) {
		if (!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + o : Math.ceil(e / t) + " " + o + "s"
	}
	e.exports = function(e, t) {
		t = t || {};
		var u, c = typeof e;
		if ("string" === c && e.length > 0) return function(e) {
			if ((e = String(e)).length > 1e4) return;
			var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
			if (!t) return;
			var d = parseFloat(t[1]);
			switch ((t[2] || "ms").toLowerCase()) {
				case "years":
				case "year":
				case "yrs":
				case "yr":
				case "y":
					return d * a;
				case "days":
				case "day":
				case "d":
					return d * r;
				case "hours":
				case "hour":
				case "hrs":
				case "hr":
				case "h":
					return d * n;
				case "minutes":
				case "minute":
				case "mins":
				case "min":
				case "m":
					return d * s;
				case "seconds":
				case "second":
				case "secs":
				case "sec":
				case "s":
					return d * o;
				case "milliseconds":
				case "millisecond":
				case "msecs":
				case "msec":
				case "ms":
					return d;
				default:
					return
			}
		}(e);
		if ("number" === c && !1 === isNaN(e)) return t.long ? d(u = e, r, "day") || d(u, n, "hour") || d(u, s, "minute") || d(u, o, "second") || u + " ms" : function(e) {
			if (e >= r) return Math.round(e / r) + "d";
			if (e >= n) return Math.round(e / n) + "h";
			if (e >= s) return Math.round(e / s) + "m";
			if (e >= o) return Math.round(e / o) + "s";
			return e + "ms"
		}(e);
		throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
	}
}, function(e, t, o) {
	"use strict";
	var s = o(10);
	o.o(s, "QA_FEATURES") && o.d(t, "QA_FEATURES", function() {
		return s.QA_FEATURES
	})
}, function(e, t, o) {
	var s;
	self, s = function() {
		return function(e) {
			var t = {};

			function o(s) {
				if (t[s]) return t[s].exports;
				var n = t[s] = {
					i: s,
					l: !1,
					exports: {}
				};
				return e[s].call(n.exports, n, n.exports, o), n.l = !0, n.exports
			}
			return o.m = e, o.c = t, o.d = function(e, t, s) {
				o.o(e, t) || Object.defineProperty(e, t, {
					configurable: !1,
					enumerable: !0,
					get: s
				})
			}, o.n = function(e) {
				var t = e && e.__esModule ? function() {
					return e.default
				} : function() {
					return e
				};
				return o.d(t, "a", t), t
			}, o.o = function(e, t) {
				return Object.prototype.hasOwnProperty.call(e, t)
			}, o.p = "", o(o.s = 3)
		}([function(e, t, o) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = function() {
				function e(e, t) {
					this.width = t, this.height = e.length / t, this.data = e
				}
				return e.createEmpty = function(t, o) {
					return new e(new Uint8ClampedArray(t * o), t)
				}, e.prototype.get = function(e, t) {
					return !(e < 0 || e >= this.width || t < 0 || t >= this.height) && !!this.data[t * this.width + e]
				}, e.prototype.set = function(e, t, o) {
					this.data[t * this.width + e] = o ? 1 : 0
				}, e.prototype.setRegion = function(e, t, o, s, n) {
					for (var r = t; r < t + s; r++)
						for (var a = e; a < e + o; a++) this.set(a, r, !!n)
				}, e
			}();
			t.BitMatrix = s
		}, function(e, t, o) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = o(2);
			t.addOrSubtractGF = function(e, t) {
				return e ^ t
			};
			var n = function() {
				function e(e, t, o) {
					this.primitive = e, this.size = t, this.generatorBase = o, this.expTable = new Array(this.size), this.logTable = new Array(this.size);
					for (var n = 1, r = 0; r < this.size; r++) this.expTable[r] = n, (n *= 2) >= this.size && (n = (n ^ this.primitive) & this.size - 1);
					for (r = 0; r < this.size - 1; r++) this.logTable[this.expTable[r]] = r;
					this.zero = new s.default(this, Uint8ClampedArray.from([0])), this.one = new s.default(this, Uint8ClampedArray.from([1]))
				}
				return e.prototype.multiply = function(e, t) {
					return 0 === e || 0 === t ? 0 : this.expTable[(this.logTable[e] + this.logTable[t]) % (this.size - 1)]
				}, e.prototype.inverse = function(e) {
					if (0 === e) throw new Error("Can't invert 0");
					return this.expTable[this.size - this.logTable[e] - 1]
				}, e.prototype.buildMonomial = function(e, t) {
					if (e < 0) throw new Error("Invalid monomial degree less than 0");
					if (0 === t) return this.zero;
					var o = new Uint8ClampedArray(e + 1);
					return o[0] = t, new s.default(this, o)
				}, e.prototype.log = function(e) {
					if (0 === e) throw new Error("Can't take log(0)");
					return this.logTable[e]
				}, e.prototype.exp = function(e) {
					return this.expTable[e]
				}, e
			}();
			t.default = n
		}, function(e, t, o) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = o(1),
				n = function() {
					function e(e, t) {
						if (0 === t.length) throw new Error("No coefficients.");
						this.field = e;
						var o = t.length;
						if (o > 1 && 0 === t[0]) {
							for (var s = 1; s < o && 0 === t[s];) s++;
							if (s === o) this.coefficients = e.zero.coefficients;
							else {
								this.coefficients = new Uint8ClampedArray(o - s);
								for (var n = 0; n < this.coefficients.length; n++) this.coefficients[n] = t[s + n]
							}
						} else this.coefficients = t
					}
					return e.prototype.degree = function() {
						return this.coefficients.length - 1
					}, e.prototype.isZero = function() {
						return 0 === this.coefficients[0]
					}, e.prototype.getCoefficient = function(e) {
						return this.coefficients[this.coefficients.length - 1 - e]
					}, e.prototype.addOrSubtract = function(t) {
						if (this.isZero()) return t;
						if (t.isZero()) return this;
						var o = this.coefficients,
							n = t.coefficients;
						o.length > n.length && (o = (r = [n, o])[0], n = r[1]);
						for (var r, a = new Uint8ClampedArray(n.length), d = n.length - o.length, u = 0; u < d; u++) a[u] = n[u];
						for (u = d; u < n.length; u++) a[u] = s.addOrSubtractGF(o[u - d], n[u]);
						return new e(this.field, a)
					}, e.prototype.multiply = function(t) {
						if (0 === t) return this.field.zero;
						if (1 === t) return this;
						for (var o = this.coefficients.length, s = new Uint8ClampedArray(o), n = 0; n < o; n++) s[n] = this.field.multiply(this.coefficients[n], t);
						return new e(this.field, s)
					}, e.prototype.multiplyPoly = function(t) {
						if (this.isZero() || t.isZero()) return this.field.zero;
						for (var o = this.coefficients, n = o.length, r = t.coefficients, a = r.length, d = new Uint8ClampedArray(n + a - 1), u = 0; u < n; u++)
							for (var c = o[u], l = 0; l < a; l++) d[u + l] = s.addOrSubtractGF(d[u + l], this.field.multiply(c, r[l]));
						return new e(this.field, d)
					}, e.prototype.multiplyByMonomial = function(t, o) {
						if (t < 0) throw new Error("Invalid degree less than 0");
						if (0 === o) return this.field.zero;
						for (var s = this.coefficients.length, n = new Uint8ClampedArray(s + t), r = 0; r < s; r++) n[r] = this.field.multiply(this.coefficients[r], o);
						return new e(this.field, n)
					}, e.prototype.evaluateAt = function(e) {
						var t = 0;
						if (0 === e) return this.getCoefficient(0);
						var o = this.coefficients.length;
						if (1 === e) return this.coefficients.forEach(function(e) {
							t = s.addOrSubtractGF(t, e)
						}), t;
						t = this.coefficients[0];
						for (var n = 1; n < o; n++) t = s.addOrSubtractGF(this.field.multiply(e, t), this.coefficients[n]);
						return t
					}, e
				}();
			t.default = n
		}, function(e, t, o) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = o(4),
				n = o(5),
				r = o(11),
				a = o(12);

			function d(e) {
				var t = a.locate(e);
				if (!t) return null;
				var o = r.extract(e, t),
					s = n.decode(o.matrix);
				return s ? {
					binaryData: s.bytes,
					data: s.text,
					chunks: s.chunks,
					location: {
						topRightCorner: o.mappingFunction(t.dimension, 0),
						topLeftCorner: o.mappingFunction(0, 0),
						bottomRightCorner: o.mappingFunction(t.dimension, t.dimension),
						bottomLeftCorner: o.mappingFunction(0, t.dimension),
						topRightFinderPattern: t.topRight,
						topLeftFinderPattern: t.topLeft,
						bottomLeftFinderPattern: t.bottomLeft,
						bottomRightAlignmentPattern: t.alignmentPattern
					}
				} : null
			}
			var u = {
				inversionAttempts: "attemptBoth"
			};

			function c(e, t, o, n) {
				void 0 === n && (n = {});
				var r = u;
				Object.keys(r || {}).forEach(function(e) {
					r[e] = n[e] || r[e]
				});
				var a = "attemptBoth" === r.inversionAttempts || "invertFirst" === r.inversionAttempts,
					c = "onlyInvert" === r.inversionAttempts || "invertFirst" === r.inversionAttempts,
					l = s.binarize(e, t, o, a),
					i = l.binarized,
					f = l.inverted,
					m = d(c ? f : i);
				return m || "attemptBoth" !== r.inversionAttempts && "invertFirst" !== r.inversionAttempts || (m = d(c ? i : f)), m
			}
			c.default = c, t.default = c
		}, function(e, t, o) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = o(0),
				n = 8,
				r = 24;

			function a(e, t, o) {
				return e < t ? t : e > o ? o : e
			}
			var d = function() {
				function e(e, t) {
					this.width = e, this.data = new Uint8ClampedArray(e * t)
				}
				return e.prototype.get = function(e, t) {
					return this.data[t * this.width + e]
				}, e.prototype.set = function(e, t, o) {
					this.data[t * this.width + e] = o
				}, e
			}();
			t.binarize = function(e, t, o, u) {
				if (e.length !== t * o * 4) throw new Error("Malformed data passed to binarizer.");
				for (var c = new d(t, o), l = 0; l < t; l++)
					for (var i = 0; i < o; i++) {
						var f = e[4 * (i * t + l) + 0],
							m = e[4 * (i * t + l) + 1],
							v = e[4 * (i * t + l) + 2];
						c.set(l, i, .2126 * f + .7152 * m + .0722 * v)
					}
				for (var g = Math.ceil(t / n), h = Math.ceil(o / n), p = new d(g, h), k = 0; k < h; k++)
					for (var _ = 0; _ < g; _++) {
						var B = 0,
							b = 1 / 0,
							C = 0;
						for (i = 0; i < n; i++)
							for (l = 0; l < n; l++) {
								var w = c.get(_ * n + l, k * n + i);
								B += w, b = Math.min(b, w), C = Math.max(C, w)
							}
						var y = B / Math.pow(n, 2);
						if (C - b <= r && (y = b / 2, k > 0 && _ > 0)) {
							var x = (p.get(_, k - 1) + 2 * p.get(_ - 1, k) + p.get(_ - 1, k - 1)) / 4;
							b < x && (y = x)
						}
						p.set(_, k, y)
					}
				var P = s.BitMatrix.createEmpty(t, o),
					E = null;
				for (u && (E = s.BitMatrix.createEmpty(t, o)), k = 0; k < h; k++)
					for (_ = 0; _ < g; _++) {
						for (var M = a(_, 2, g - 3), S = a(k, 2, h - 3), O = (B = 0, -2); O <= 2; O++)
							for (var N = -2; N <= 2; N++) B += p.get(M + O, S + N);
						var A = B / 25;
						for (O = 0; O < n; O++)
							for (N = 0; N < n; N++) {
								l = _ * n + O, i = k * n + N;
								var L = c.get(l, i);
								P.set(l, i, L <= A), u && E.set(l, i, !(L <= A))
							}
					}
				return u ? {
					binarized: P,
					inverted: E
				} : {
					binarized: P
				}
			}
		}, function(e, t, o) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = o(0),
				n = o(6),
				r = o(9),
				a = o(10);

			function d(e, t) {
				for (var o = e ^ t, s = 0; o;) s++, o &= o - 1;
				return s
			}

			function u(e, t) {
				return t << 1 | e
			}
			var c = [{
					bits: 21522,
					formatInfo: {
						errorCorrectionLevel: 1,
						dataMask: 0
					}
				}, {
					bits: 20773,
					formatInfo: {
						errorCorrectionLevel: 1,
						dataMask: 1
					}
				}, {
					bits: 24188,
					formatInfo: {
						errorCorrectionLevel: 1,
						dataMask: 2
					}
				}, {
					bits: 23371,
					formatInfo: {
						errorCorrectionLevel: 1,
						dataMask: 3
					}
				}, {
					bits: 17913,
					formatInfo: {
						errorCorrectionLevel: 1,
						dataMask: 4
					}
				}, {
					bits: 16590,
					formatInfo: {
						errorCorrectionLevel: 1,
						dataMask: 5
					}
				}, {
					bits: 20375,
					formatInfo: {
						errorCorrectionLevel: 1,
						dataMask: 6
					}
				}, {
					bits: 19104,
					formatInfo: {
						errorCorrectionLevel: 1,
						dataMask: 7
					}
				}, {
					bits: 30660,
					formatInfo: {
						errorCorrectionLevel: 0,
						dataMask: 0
					}
				}, {
					bits: 29427,
					formatInfo: {
						errorCorrectionLevel: 0,
						dataMask: 1
					}
				}, {
					bits: 32170,
					formatInfo: {
						errorCorrectionLevel: 0,
						dataMask: 2
					}
				}, {
					bits: 30877,
					formatInfo: {
						errorCorrectionLevel: 0,
						dataMask: 3
					}
				}, {
					bits: 26159,
					formatInfo: {
						errorCorrectionLevel: 0,
						dataMask: 4
					}
				}, {
					bits: 25368,
					formatInfo: {
						errorCorrectionLevel: 0,
						dataMask: 5
					}
				}, {
					bits: 27713,
					formatInfo: {
						errorCorrectionLevel: 0,
						dataMask: 6
					}
				}, {
					bits: 26998,
					formatInfo: {
						errorCorrectionLevel: 0,
						dataMask: 7
					}
				}, {
					bits: 5769,
					formatInfo: {
						errorCorrectionLevel: 3,
						dataMask: 0
					}
				}, {
					bits: 5054,
					formatInfo: {
						errorCorrectionLevel: 3,
						dataMask: 1
					}
				}, {
					bits: 7399,
					formatInfo: {
						errorCorrectionLevel: 3,
						dataMask: 2
					}
				}, {
					bits: 6608,
					formatInfo: {
						errorCorrectionLevel: 3,
						dataMask: 3
					}
				}, {
					bits: 1890,
					formatInfo: {
						errorCorrectionLevel: 3,
						dataMask: 4
					}
				}, {
					bits: 597,
					formatInfo: {
						errorCorrectionLevel: 3,
						dataMask: 5
					}
				}, {
					bits: 3340,
					formatInfo: {
						errorCorrectionLevel: 3,
						dataMask: 6
					}
				}, {
					bits: 2107,
					formatInfo: {
						errorCorrectionLevel: 3,
						dataMask: 7
					}
				}, {
					bits: 13663,
					formatInfo: {
						errorCorrectionLevel: 2,
						dataMask: 0
					}
				}, {
					bits: 12392,
					formatInfo: {
						errorCorrectionLevel: 2,
						dataMask: 1
					}
				}, {
					bits: 16177,
					formatInfo: {
						errorCorrectionLevel: 2,
						dataMask: 2
					}
				}, {
					bits: 14854,
					formatInfo: {
						errorCorrectionLevel: 2,
						dataMask: 3
					}
				}, {
					bits: 9396,
					formatInfo: {
						errorCorrectionLevel: 2,
						dataMask: 4
					}
				}, {
					bits: 8579,
					formatInfo: {
						errorCorrectionLevel: 2,
						dataMask: 5
					}
				}, {
					bits: 11994,
					formatInfo: {
						errorCorrectionLevel: 2,
						dataMask: 6
					}
				}, {
					bits: 11245,
					formatInfo: {
						errorCorrectionLevel: 2,
						dataMask: 7
					}
				}],
				l = [function(e) {
					return (e.y + e.x) % 2 == 0
				}, function(e) {
					return e.y % 2 == 0
				}, function(e) {
					return e.x % 3 == 0
				}, function(e) {
					return (e.y + e.x) % 3 == 0
				}, function(e) {
					return (Math.floor(e.y / 2) + Math.floor(e.x / 3)) % 2 == 0
				}, function(e) {
					return e.x * e.y % 2 + e.x * e.y % 3 == 0
				}, function(e) {
					return (e.y * e.x % 2 + e.y * e.x % 3) % 2 == 0
				}, function(e) {
					return ((e.y + e.x) % 2 + e.y * e.x % 3) % 2 == 0
				}];

			function i(e, t, o) {
				for (var n = l[o.dataMask], r = e.height, a = function(e) {
						var t = 17 + 4 * e.versionNumber,
							o = s.BitMatrix.createEmpty(t, t);
						o.setRegion(0, 0, 9, 9, !0), o.setRegion(t - 8, 0, 8, 9, !0), o.setRegion(0, t - 8, 9, 8, !0);
						for (var n = 0, r = e.alignmentPatternCenters; n < r.length; n++)
							for (var a = r[n], d = 0, u = e.alignmentPatternCenters; d < u.length; d++) {
								var c = u[d];
								6 === a && 6 === c || 6 === a && c === t - 7 || a === t - 7 && 6 === c || o.setRegion(a - 2, c - 2, 5, 5, !0)
							}
						return o.setRegion(6, 9, 1, t - 17, !0), o.setRegion(9, 6, t - 17, 1, !0), e.versionNumber > 6 && (o.setRegion(t - 11, 0, 3, 6, !0), o.setRegion(0, t - 11, 6, 3, !0)), o
					}(t), d = [], c = 0, i = 0, f = !0, m = r - 1; m > 0; m -= 2) {
					6 === m && m--;
					for (var v = 0; v < r; v++)
						for (var g = f ? r - 1 - v : v, h = 0; h < 2; h++) {
							var p = m - h;
							if (!a.get(p, g)) {
								i++;
								var k = e.get(p, g);
								n({
									y: g,
									x: p
								}) && (k = !k), c = u(k, c), 8 === i && (d.push(c), i = 0, c = 0)
							}
						}
					f = !f
				}
				return d
			}

			function f(e) {
				var t = function(e) {
					var t = e.height,
						o = Math.floor((t - 17) / 4);
					if (o <= 6) return a.VERSIONS[o - 1];
					for (var s = 0, n = 5; n >= 0; n--)
						for (var r = t - 9; r >= t - 11; r--) s = u(e.get(r, n), s);
					var c = 0;
					for (r = 5; r >= 0; r--)
						for (n = t - 9; n >= t - 11; n--) c = u(e.get(r, n), c);
					for (var l, i = 1 / 0, f = 0, m = a.VERSIONS; f < m.length; f++) {
						var v = m[f];
						if (v.infoBits === s || v.infoBits === c) return v;
						var g = d(s, v.infoBits);
						g < i && (l = v, i = g), (g = d(c, v.infoBits)) < i && (l = v, i = g)
					}
					return i <= 3 ? l : void 0
				}(e);
				if (!t) return null;
				var o = function(e) {
					for (var t = 0, o = 0; o <= 8; o++) 6 !== o && (t = u(e.get(o, 8), t));
					for (var s = 7; s >= 0; s--) 6 !== s && (t = u(e.get(8, s), t));
					var n = e.height,
						r = 0;
					for (s = n - 1; s >= n - 7; s--) r = u(e.get(8, s), r);
					for (o = n - 8; o < n; o++) r = u(e.get(o, 8), r);
					for (var a = 1 / 0, l = null, i = 0, f = c; i < f.length; i++) {
						var m = f[i],
							v = m.bits,
							g = m.formatInfo;
						if (v === t || v === r) return g;
						var h = d(t, v);
						h < a && (l = g, a = h), t !== r && (h = d(r, v)) < a && (l = g, a = h)
					}
					return a <= 3 ? l : null
				}(e);
				if (!o) return null;
				var s = function(e, t, o) {
					var s = t.errorCorrectionLevels[o],
						n = [],
						r = 0;
					if (s.ecBlocks.forEach(function(e) {
							for (var t = 0; t < e.numBlocks; t++) n.push({
								numDataCodewords: e.dataCodewordsPerBlock,
								codewords: []
							}), r += e.dataCodewordsPerBlock + s.ecCodewordsPerBlock
						}), e.length < r) return null;
					e = e.slice(0, r);
					for (var a = s.ecBlocks[0].dataCodewordsPerBlock, d = 0; d < a; d++)
						for (var u = 0, c = n; u < c.length; u++) c[u].codewords.push(e.shift());
					if (s.ecBlocks.length > 1) {
						var l = s.ecBlocks[0].numBlocks,
							i = s.ecBlocks[1].numBlocks;
						for (d = 0; d < i; d++) n[l + d].codewords.push(e.shift())
					}
					for (; e.length > 0;)
						for (var f = 0, m = n; f < m.length; f++) m[f].codewords.push(e.shift());
					return n
				}(i(e, t, o), t, o.errorCorrectionLevel);
				if (!s) return null;
				for (var l = s.reduce(function(e, t) {
						return e + t.numDataCodewords
					}, 0), f = new Uint8ClampedArray(l), m = 0, v = 0, g = s; v < g.length; v++) {
					var h = g[v],
						p = r.decode(h.codewords, h.codewords.length - h.numDataCodewords);
					if (!p) return null;
					for (var k = 0; k < h.numDataCodewords; k++) f[m++] = p[k]
				}
				try {
					return n.decode(f, t.versionNumber)
				} catch (e) {
					return null
				}
			}
			t.decode = function(e) {
				if (null == e) return null;
				var t = f(e);
				if (t) return t;
				for (var o = 0; o < e.width; o++)
					for (var s = o + 1; s < e.height; s++) e.get(o, s) !== e.get(s, o) && (e.set(o, s, !e.get(o, s)), e.set(s, o, !e.get(s, o)));
				return f(e)
			}
		}, function(e, t, o) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s, n, r = o(7),
				a = o(8);

			function d(e, t) {
				for (var o = [], s = "", n = [10, 12, 14][t], r = e.readBits(n); r >= 3;) {
					if ((c = e.readBits(10)) >= 1e3) throw new Error("Invalid numeric value above 999");
					var a = Math.floor(c / 100),
						d = Math.floor(c / 10) % 10,
						u = c % 10;
					o.push(48 + a, 48 + d, 48 + u), s += a.toString() + d.toString() + u.toString(), r -= 3
				}
				if (2 === r) {
					if ((c = e.readBits(7)) >= 100) throw new Error("Invalid numeric value above 99");
					a = Math.floor(c / 10), d = c % 10;
					o.push(48 + a, 48 + d), s += a.toString() + d.toString()
				} else if (1 === r) {
					var c;
					if ((c = e.readBits(4)) >= 10) throw new Error("Invalid numeric value above 9");
					o.push(48 + c), s += c.toString()
				}
				return {
					bytes: o,
					text: s
				}
			}! function(e) {
				e.Numeric = "numeric", e.Alphanumeric = "alphanumeric", e.Byte = "byte", e.Kanji = "kanji", e.ECI = "eci"
			}(s = t.Mode || (t.Mode = {})),
			function(e) {
				e[e.Terminator = 0] = "Terminator", e[e.Numeric = 1] = "Numeric", e[e.Alphanumeric = 2] = "Alphanumeric", e[e.Byte = 4] = "Byte", e[e.Kanji = 8] = "Kanji", e[e.ECI = 7] = "ECI"
			}(n || (n = {}));
			var u = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

			function c(e, t) {
				for (var o = [], s = "", n = [9, 11, 13][t], r = e.readBits(n); r >= 2;) {
					var a = e.readBits(11),
						d = Math.floor(a / 45),
						c = a % 45;
					o.push(u[d].charCodeAt(0), u[c].charCodeAt(0)), s += u[d] + u[c], r -= 2
				}
				if (1 === r) {
					d = e.readBits(6);
					o.push(u[d].charCodeAt(0)), s += u[d]
				}
				return {
					bytes: o,
					text: s
				}
			}

			function l(e, t) {
				for (var o = [], s = "", n = [8, 16, 16][t], r = e.readBits(n), a = 0; a < r; a++) {
					var d = e.readBits(8);
					o.push(d)
				}
				try {
					s += decodeURIComponent(o.map(function(e) {
						return "%" + ("0" + e.toString(16)).substr(-2)
					}).join(""))
				} catch (e) {}
				return {
					bytes: o,
					text: s
				}
			}

			function i(e, t) {
				for (var o = [], s = "", n = [8, 10, 12][t], r = e.readBits(n), d = 0; d < r; d++) {
					var u = e.readBits(13),
						c = Math.floor(u / 192) << 8 | u % 192;
					c += c < 7936 ? 33088 : 49472, o.push(c >> 8, 255 & c), s += String.fromCharCode(a.shiftJISTable[c])
				}
				return {
					bytes: o,
					text: s
				}
			}
			t.decode = function(e, t) {
				for (var o, a, u, f, m = new r.BitStream(e), v = t <= 9 ? 0 : t <= 26 ? 1 : 2, g = {
						text: "",
						bytes: [],
						chunks: []
					}; m.available() >= 4;) {
					var h = m.readBits(4);
					if (h === n.Terminator) return g;
					if (h === n.ECI) 0 === m.readBits(1) ? g.chunks.push({
						type: s.ECI,
						assignmentNumber: m.readBits(7)
					}) : 0 === m.readBits(1) ? g.chunks.push({
						type: s.ECI,
						assignmentNumber: m.readBits(14)
					}) : 0 === m.readBits(1) ? g.chunks.push({
						type: s.ECI,
						assignmentNumber: m.readBits(21)
					}) : g.chunks.push({
						type: s.ECI,
						assignmentNumber: -1
					});
					else if (h === n.Numeric) {
						var p = d(m, v);
						g.text += p.text, (o = g.bytes).push.apply(o, p.bytes), g.chunks.push({
							type: s.Numeric,
							text: p.text
						})
					} else if (h === n.Alphanumeric) {
						var k = c(m, v);
						g.text += k.text, (a = g.bytes).push.apply(a, k.bytes), g.chunks.push({
							type: s.Alphanumeric,
							text: k.text
						})
					} else if (h === n.Byte) {
						var _ = l(m, v);
						g.text += _.text, (u = g.bytes).push.apply(u, _.bytes), g.chunks.push({
							type: s.Byte,
							bytes: _.bytes,
							text: _.text
						})
					} else if (h === n.Kanji) {
						var B = i(m, v);
						g.text += B.text, (f = g.bytes).push.apply(f, B.bytes), g.chunks.push({
							type: s.Kanji,
							bytes: B.bytes,
							text: B.text
						})
					}
				}
			}
		}, function(e, t, o) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = function() {
				function e(e) {
					this.byteOffset = 0, this.bitOffset = 0, this.bytes = e
				}
				return e.prototype.readBits = function(e) {
					if (e < 1 || e > 32 || e > this.available()) throw new Error("Cannot read " + e.toString() + " bits");
					var t = 0;
					if (this.bitOffset > 0) {
						var o = 8 - this.bitOffset,
							s = e < o ? e : o,
							n = 255 >> 8 - s << (r = o - s);
						t = (this.bytes[this.byteOffset] & n) >> r, e -= s, this.bitOffset += s, 8 === this.bitOffset && (this.bitOffset = 0, this.byteOffset++)
					}
					if (e > 0) {
						for (; e >= 8;) t = t << 8 | 255 & this.bytes[this.byteOffset], this.byteOffset++, e -= 8;
						if (e > 0) {
							var r;
							n = 255 >> (r = 8 - e) << r;
							t = t << e | (this.bytes[this.byteOffset] & n) >> r, this.bitOffset += e
						}
					}
					return t
				}, e.prototype.available = function() {
					return 8 * (this.bytes.length - this.byteOffset) - this.bitOffset
				}, e
			}();
			t.BitStream = s
		}, function(e, t, o) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.shiftJISTable = {
				32: 32,
				33: 33,
				34: 34,
				35: 35,
				36: 36,
				37: 37,
				38: 38,
				39: 39,
				40: 40,
				41: 41,
				42: 42,
				43: 43,
				44: 44,
				45: 45,
				46: 46,
				47: 47,
				48: 48,
				49: 49,
				50: 50,
				51: 51,
				52: 52,
				53: 53,
				54: 54,
				55: 55,
				56: 56,
				57: 57,
				58: 58,
				59: 59,
				60: 60,
				61: 61,
				62: 62,
				63: 63,
				64: 64,
				65: 65,
				66: 66,
				67: 67,
				68: 68,
				69: 69,
				70: 70,
				71: 71,
				72: 72,
				73: 73,
				74: 74,
				75: 75,
				76: 76,
				77: 77,
				78: 78,
				79: 79,
				80: 80,
				81: 81,
				82: 82,
				83: 83,
				84: 84,
				85: 85,
				86: 86,
				87: 87,
				88: 88,
				89: 89,
				90: 90,
				91: 91,
				92: 165,
				93: 93,
				94: 94,
				95: 95,
				96: 96,
				97: 97,
				98: 98,
				99: 99,
				100: 100,
				101: 101,
				102: 102,
				103: 103,
				104: 104,
				105: 105,
				106: 106,
				107: 107,
				108: 108,
				109: 109,
				110: 110,
				111: 111,
				112: 112,
				113: 113,
				114: 114,
				115: 115,
				116: 116,
				117: 117,
				118: 118,
				119: 119,
				120: 120,
				121: 121,
				122: 122,
				123: 123,
				124: 124,
				125: 125,
				126: 8254,
				33088: 12288,
				33089: 12289,
				33090: 12290,
				33091: 65292,
				33092: 65294,
				33093: 12539,
				33094: 65306,
				33095: 65307,
				33096: 65311,
				33097: 65281,
				33098: 12443,
				33099: 12444,
				33100: 180,
				33101: 65344,
				33102: 168,
				33103: 65342,
				33104: 65507,
				33105: 65343,
				33106: 12541,
				33107: 12542,
				33108: 12445,
				33109: 12446,
				33110: 12291,
				33111: 20189,
				33112: 12293,
				33113: 12294,
				33114: 12295,
				33115: 12540,
				33116: 8213,
				33117: 8208,
				33118: 65295,
				33119: 92,
				33120: 12316,
				33121: 8214,
				33122: 65372,
				33123: 8230,
				33124: 8229,
				33125: 8216,
				33126: 8217,
				33127: 8220,
				33128: 8221,
				33129: 65288,
				33130: 65289,
				33131: 12308,
				33132: 12309,
				33133: 65339,
				33134: 65341,
				33135: 65371,
				33136: 65373,
				33137: 12296,
				33138: 12297,
				33139: 12298,
				33140: 12299,
				33141: 12300,
				33142: 12301,
				33143: 12302,
				33144: 12303,
				33145: 12304,
				33146: 12305,
				33147: 65291,
				33148: 8722,
				33149: 177,
				33150: 215,
				33152: 247,
				33153: 65309,
				33154: 8800,
				33155: 65308,
				33156: 65310,
				33157: 8806,
				33158: 8807,
				33159: 8734,
				33160: 8756,
				33161: 9794,
				33162: 9792,
				33163: 176,
				33164: 8242,
				33165: 8243,
				33166: 8451,
				33167: 65509,
				33168: 65284,
				33169: 162,
				33170: 163,
				33171: 65285,
				33172: 65283,
				33173: 65286,
				33174: 65290,
				33175: 65312,
				33176: 167,
				33177: 9734,
				33178: 9733,
				33179: 9675,
				33180: 9679,
				33181: 9678,
				33182: 9671,
				33183: 9670,
				33184: 9633,
				33185: 9632,
				33186: 9651,
				33187: 9650,
				33188: 9661,
				33189: 9660,
				33190: 8251,
				33191: 12306,
				33192: 8594,
				33193: 8592,
				33194: 8593,
				33195: 8595,
				33196: 12307,
				33208: 8712,
				33209: 8715,
				33210: 8838,
				33211: 8839,
				33212: 8834,
				33213: 8835,
				33214: 8746,
				33215: 8745,
				33224: 8743,
				33225: 8744,
				33226: 172,
				33227: 8658,
				33228: 8660,
				33229: 8704,
				33230: 8707,
				33242: 8736,
				33243: 8869,
				33244: 8978,
				33245: 8706,
				33246: 8711,
				33247: 8801,
				33248: 8786,
				33249: 8810,
				33250: 8811,
				33251: 8730,
				33252: 8765,
				33253: 8733,
				33254: 8757,
				33255: 8747,
				33256: 8748,
				33264: 8491,
				33265: 8240,
				33266: 9839,
				33267: 9837,
				33268: 9834,
				33269: 8224,
				33270: 8225,
				33271: 182,
				33276: 9711,
				33359: 65296,
				33360: 65297,
				33361: 65298,
				33362: 65299,
				33363: 65300,
				33364: 65301,
				33365: 65302,
				33366: 65303,
				33367: 65304,
				33368: 65305,
				33376: 65313,
				33377: 65314,
				33378: 65315,
				33379: 65316,
				33380: 65317,
				33381: 65318,
				33382: 65319,
				33383: 65320,
				33384: 65321,
				33385: 65322,
				33386: 65323,
				33387: 65324,
				33388: 65325,
				33389: 65326,
				33390: 65327,
				33391: 65328,
				33392: 65329,
				33393: 65330,
				33394: 65331,
				33395: 65332,
				33396: 65333,
				33397: 65334,
				33398: 65335,
				33399: 65336,
				33400: 65337,
				33401: 65338,
				33409: 65345,
				33410: 65346,
				33411: 65347,
				33412: 65348,
				33413: 65349,
				33414: 65350,
				33415: 65351,
				33416: 65352,
				33417: 65353,
				33418: 65354,
				33419: 65355,
				33420: 65356,
				33421: 65357,
				33422: 65358,
				33423: 65359,
				33424: 65360,
				33425: 65361,
				33426: 65362,
				33427: 65363,
				33428: 65364,
				33429: 65365,
				33430: 65366,
				33431: 65367,
				33432: 65368,
				33433: 65369,
				33434: 65370,
				33439: 12353,
				33440: 12354,
				33441: 12355,
				33442: 12356,
				33443: 12357,
				33444: 12358,
				33445: 12359,
				33446: 12360,
				33447: 12361,
				33448: 12362,
				33449: 12363,
				33450: 12364,
				33451: 12365,
				33452: 12366,
				33453: 12367,
				33454: 12368,
				33455: 12369,
				33456: 12370,
				33457: 12371,
				33458: 12372,
				33459: 12373,
				33460: 12374,
				33461: 12375,
				33462: 12376,
				33463: 12377,
				33464: 12378,
				33465: 12379,
				33466: 12380,
				33467: 12381,
				33468: 12382,
				33469: 12383,
				33470: 12384,
				33471: 12385,
				33472: 12386,
				33473: 12387,
				33474: 12388,
				33475: 12389,
				33476: 12390,
				33477: 12391,
				33478: 12392,
				33479: 12393,
				33480: 12394,
				33481: 12395,
				33482: 12396,
				33483: 12397,
				33484: 12398,
				33485: 12399,
				33486: 12400,
				33487: 12401,
				33488: 12402,
				33489: 12403,
				33490: 12404,
				33491: 12405,
				33492: 12406,
				33493: 12407,
				33494: 12408,
				33495: 12409,
				33496: 12410,
				33497: 12411,
				33498: 12412,
				33499: 12413,
				33500: 12414,
				33501: 12415,
				33502: 12416,
				33503: 12417,
				33504: 12418,
				33505: 12419,
				33506: 12420,
				33507: 12421,
				33508: 12422,
				33509: 12423,
				33510: 12424,
				33511: 12425,
				33512: 12426,
				33513: 12427,
				33514: 12428,
				33515: 12429,
				33516: 12430,
				33517: 12431,
				33518: 12432,
				33519: 12433,
				33520: 12434,
				33521: 12435,
				33600: 12449,
				33601: 12450,
				33602: 12451,
				33603: 12452,
				33604: 12453,
				33605: 12454,
				33606: 12455,
				33607: 12456,
				33608: 12457,
				33609: 12458,
				33610: 12459,
				33611: 12460,
				33612: 12461,
				33613: 12462,
				33614: 12463,
				33615: 12464,
				33616: 12465,
				33617: 12466,
				33618: 12467,
				33619: 12468,
				33620: 12469,
				33621: 12470,
				33622: 12471,
				33623: 12472,
				33624: 12473,
				33625: 12474,
				33626: 12475,
				33627: 12476,
				33628: 12477,
				33629: 12478,
				33630: 12479,
				33631: 12480,
				33632: 12481,
				33633: 12482,
				33634: 12483,
				33635: 12484,
				33636: 12485,
				33637: 12486,
				33638: 12487,
				33639: 12488,
				33640: 12489,
				33641: 12490,
				33642: 12491,
				33643: 12492,
				33644: 12493,
				33645: 12494,
				33646: 12495,
				33647: 12496,
				33648: 12497,
				33649: 12498,
				33650: 12499,
				33651: 12500,
				33652: 12501,
				33653: 12502,
				33654: 12503,
				33655: 12504,
				33656: 12505,
				33657: 12506,
				33658: 12507,
				33659: 12508,
				33660: 12509,
				33661: 12510,
				33662: 12511,
				33664: 12512,
				33665: 12513,
				33666: 12514,
				33667: 12515,
				33668: 12516,
				33669: 12517,
				33670: 12518,
				33671: 12519,
				33672: 12520,
				33673: 12521,
				33674: 12522,
				33675: 12523,
				33676: 12524,
				33677: 12525,
				33678: 12526,
				33679: 12527,
				33680: 12528,
				33681: 12529,
				33682: 12530,
				33683: 12531,
				33684: 12532,
				33685: 12533,
				33686: 12534,
				33695: 913,
				33696: 914,
				33697: 915,
				33698: 916,
				33699: 917,
				33700: 918,
				33701: 919,
				33702: 920,
				33703: 921,
				33704: 922,
				33705: 923,
				33706: 924,
				33707: 925,
				33708: 926,
				33709: 927,
				33710: 928,
				33711: 929,
				33712: 931,
				33713: 932,
				33714: 933,
				33715: 934,
				33716: 935,
				33717: 936,
				33718: 937,
				33727: 945,
				33728: 946,
				33729: 947,
				33730: 948,
				33731: 949,
				33732: 950,
				33733: 951,
				33734: 952,
				33735: 953,
				33736: 954,
				33737: 955,
				33738: 956,
				33739: 957,
				33740: 958,
				33741: 959,
				33742: 960,
				33743: 961,
				33744: 963,
				33745: 964,
				33746: 965,
				33747: 966,
				33748: 967,
				33749: 968,
				33750: 969,
				33856: 1040,
				33857: 1041,
				33858: 1042,
				33859: 1043,
				33860: 1044,
				33861: 1045,
				33862: 1025,
				33863: 1046,
				33864: 1047,
				33865: 1048,
				33866: 1049,
				33867: 1050,
				33868: 1051,
				33869: 1052,
				33870: 1053,
				33871: 1054,
				33872: 1055,
				33873: 1056,
				33874: 1057,
				33875: 1058,
				33876: 1059,
				33877: 1060,
				33878: 1061,
				33879: 1062,
				33880: 1063,
				33881: 1064,
				33882: 1065,
				33883: 1066,
				33884: 1067,
				33885: 1068,
				33886: 1069,
				33887: 1070,
				33888: 1071,
				33904: 1072,
				33905: 1073,
				33906: 1074,
				33907: 1075,
				33908: 1076,
				33909: 1077,
				33910: 1105,
				33911: 1078,
				33912: 1079,
				33913: 1080,
				33914: 1081,
				33915: 1082,
				33916: 1083,
				33917: 1084,
				33918: 1085,
				33920: 1086,
				33921: 1087,
				33922: 1088,
				33923: 1089,
				33924: 1090,
				33925: 1091,
				33926: 1092,
				33927: 1093,
				33928: 1094,
				33929: 1095,
				33930: 1096,
				33931: 1097,
				33932: 1098,
				33933: 1099,
				33934: 1100,
				33935: 1101,
				33936: 1102,
				33937: 1103,
				33951: 9472,
				33952: 9474,
				33953: 9484,
				33954: 9488,
				33955: 9496,
				33956: 9492,
				33957: 9500,
				33958: 9516,
				33959: 9508,
				33960: 9524,
				33961: 9532,
				33962: 9473,
				33963: 9475,
				33964: 9487,
				33965: 9491,
				33966: 9499,
				33967: 9495,
				33968: 9507,
				33969: 9523,
				33970: 9515,
				33971: 9531,
				33972: 9547,
				33973: 9504,
				33974: 9519,
				33975: 9512,
				33976: 9527,
				33977: 9535,
				33978: 9501,
				33979: 9520,
				33980: 9509,
				33981: 9528,
				33982: 9538,
				34975: 20124,
				34976: 21782,
				34977: 23043,
				34978: 38463,
				34979: 21696,
				34980: 24859,
				34981: 25384,
				34982: 23030,
				34983: 36898,
				34984: 33909,
				34985: 33564,
				34986: 31312,
				34987: 24746,
				34988: 25569,
				34989: 28197,
				34990: 26093,
				34991: 33894,
				34992: 33446,
				34993: 39925,
				34994: 26771,
				34995: 22311,
				34996: 26017,
				34997: 25201,
				34998: 23451,
				34999: 22992,
				35000: 34427,
				35001: 39156,
				35002: 32098,
				35003: 32190,
				35004: 39822,
				35005: 25110,
				35006: 31903,
				35007: 34999,
				35008: 23433,
				35009: 24245,
				35010: 25353,
				35011: 26263,
				35012: 26696,
				35013: 38343,
				35014: 38797,
				35015: 26447,
				35016: 20197,
				35017: 20234,
				35018: 20301,
				35019: 20381,
				35020: 20553,
				35021: 22258,
				35022: 22839,
				35023: 22996,
				35024: 23041,
				35025: 23561,
				35026: 24799,
				35027: 24847,
				35028: 24944,
				35029: 26131,
				35030: 26885,
				35031: 28858,
				35032: 30031,
				35033: 30064,
				35034: 31227,
				35035: 32173,
				35036: 32239,
				35037: 32963,
				35038: 33806,
				35039: 34915,
				35040: 35586,
				35041: 36949,
				35042: 36986,
				35043: 21307,
				35044: 20117,
				35045: 20133,
				35046: 22495,
				35047: 32946,
				35048: 37057,
				35049: 30959,
				35050: 19968,
				35051: 22769,
				35052: 28322,
				35053: 36920,
				35054: 31282,
				35055: 33576,
				35056: 33419,
				35057: 39983,
				35058: 20801,
				35059: 21360,
				35060: 21693,
				35061: 21729,
				35062: 22240,
				35063: 23035,
				35064: 24341,
				35065: 39154,
				35066: 28139,
				35067: 32996,
				35068: 34093,
				35136: 38498,
				35137: 38512,
				35138: 38560,
				35139: 38907,
				35140: 21515,
				35141: 21491,
				35142: 23431,
				35143: 28879,
				35144: 32701,
				35145: 36802,
				35146: 38632,
				35147: 21359,
				35148: 40284,
				35149: 31418,
				35150: 19985,
				35151: 30867,
				35152: 33276,
				35153: 28198,
				35154: 22040,
				35155: 21764,
				35156: 27421,
				35157: 34074,
				35158: 39995,
				35159: 23013,
				35160: 21417,
				35161: 28006,
				35162: 29916,
				35163: 38287,
				35164: 22082,
				35165: 20113,
				35166: 36939,
				35167: 38642,
				35168: 33615,
				35169: 39180,
				35170: 21473,
				35171: 21942,
				35172: 23344,
				35173: 24433,
				35174: 26144,
				35175: 26355,
				35176: 26628,
				35177: 27704,
				35178: 27891,
				35179: 27945,
				35180: 29787,
				35181: 30408,
				35182: 31310,
				35183: 38964,
				35184: 33521,
				35185: 34907,
				35186: 35424,
				35187: 37613,
				35188: 28082,
				35189: 30123,
				35190: 30410,
				35191: 39365,
				35192: 24742,
				35193: 35585,
				35194: 36234,
				35195: 38322,
				35196: 27022,
				35197: 21421,
				35198: 20870,
				35200: 22290,
				35201: 22576,
				35202: 22852,
				35203: 23476,
				35204: 24310,
				35205: 24616,
				35206: 25513,
				35207: 25588,
				35208: 27839,
				35209: 28436,
				35210: 28814,
				35211: 28948,
				35212: 29017,
				35213: 29141,
				35214: 29503,
				35215: 32257,
				35216: 33398,
				35217: 33489,
				35218: 34199,
				35219: 36960,
				35220: 37467,
				35221: 40219,
				35222: 22633,
				35223: 26044,
				35224: 27738,
				35225: 29989,
				35226: 20985,
				35227: 22830,
				35228: 22885,
				35229: 24448,
				35230: 24540,
				35231: 25276,
				35232: 26106,
				35233: 27178,
				35234: 27431,
				35235: 27572,
				35236: 29579,
				35237: 32705,
				35238: 35158,
				35239: 40236,
				35240: 40206,
				35241: 40644,
				35242: 23713,
				35243: 27798,
				35244: 33659,
				35245: 20740,
				35246: 23627,
				35247: 25014,
				35248: 33222,
				35249: 26742,
				35250: 29281,
				35251: 20057,
				35252: 20474,
				35253: 21368,
				35254: 24681,
				35255: 28201,
				35256: 31311,
				35257: 38899,
				35258: 19979,
				35259: 21270,
				35260: 20206,
				35261: 20309,
				35262: 20285,
				35263: 20385,
				35264: 20339,
				35265: 21152,
				35266: 21487,
				35267: 22025,
				35268: 22799,
				35269: 23233,
				35270: 23478,
				35271: 23521,
				35272: 31185,
				35273: 26247,
				35274: 26524,
				35275: 26550,
				35276: 27468,
				35277: 27827,
				35278: 28779,
				35279: 29634,
				35280: 31117,
				35281: 31166,
				35282: 31292,
				35283: 31623,
				35284: 33457,
				35285: 33499,
				35286: 33540,
				35287: 33655,
				35288: 33775,
				35289: 33747,
				35290: 34662,
				35291: 35506,
				35292: 22057,
				35293: 36008,
				35294: 36838,
				35295: 36942,
				35296: 38686,
				35297: 34442,
				35298: 20420,
				35299: 23784,
				35300: 25105,
				35301: 29273,
				35302: 30011,
				35303: 33253,
				35304: 33469,
				35305: 34558,
				35306: 36032,
				35307: 38597,
				35308: 39187,
				35309: 39381,
				35310: 20171,
				35311: 20250,
				35312: 35299,
				35313: 22238,
				35314: 22602,
				35315: 22730,
				35316: 24315,
				35317: 24555,
				35318: 24618,
				35319: 24724,
				35320: 24674,
				35321: 25040,
				35322: 25106,
				35323: 25296,
				35324: 25913,
				35392: 39745,
				35393: 26214,
				35394: 26800,
				35395: 28023,
				35396: 28784,
				35397: 30028,
				35398: 30342,
				35399: 32117,
				35400: 33445,
				35401: 34809,
				35402: 38283,
				35403: 38542,
				35404: 35997,
				35405: 20977,
				35406: 21182,
				35407: 22806,
				35408: 21683,
				35409: 23475,
				35410: 23830,
				35411: 24936,
				35412: 27010,
				35413: 28079,
				35414: 30861,
				35415: 33995,
				35416: 34903,
				35417: 35442,
				35418: 37799,
				35419: 39608,
				35420: 28012,
				35421: 39336,
				35422: 34521,
				35423: 22435,
				35424: 26623,
				35425: 34510,
				35426: 37390,
				35427: 21123,
				35428: 22151,
				35429: 21508,
				35430: 24275,
				35431: 25313,
				35432: 25785,
				35433: 26684,
				35434: 26680,
				35435: 27579,
				35436: 29554,
				35437: 30906,
				35438: 31339,
				35439: 35226,
				35440: 35282,
				35441: 36203,
				35442: 36611,
				35443: 37101,
				35444: 38307,
				35445: 38548,
				35446: 38761,
				35447: 23398,
				35448: 23731,
				35449: 27005,
				35450: 38989,
				35451: 38990,
				35452: 25499,
				35453: 31520,
				35454: 27179,
				35456: 27263,
				35457: 26806,
				35458: 39949,
				35459: 28511,
				35460: 21106,
				35461: 21917,
				35462: 24688,
				35463: 25324,
				35464: 27963,
				35465: 28167,
				35466: 28369,
				35467: 33883,
				35468: 35088,
				35469: 36676,
				35470: 19988,
				35471: 39993,
				35472: 21494,
				35473: 26907,
				35474: 27194,
				35475: 38788,
				35476: 26666,
				35477: 20828,
				35478: 31427,
				35479: 33970,
				35480: 37340,
				35481: 37772,
				35482: 22107,
				35483: 40232,
				35484: 26658,
				35485: 33541,
				35486: 33841,
				35487: 31909,
				35488: 21e3,
				35489: 33477,
				35490: 29926,
				35491: 20094,
				35492: 20355,
				35493: 20896,
				35494: 23506,
				35495: 21002,
				35496: 21208,
				35497: 21223,
				35498: 24059,
				35499: 21914,
				35500: 22570,
				35501: 23014,
				35502: 23436,
				35503: 23448,
				35504: 23515,
				35505: 24178,
				35506: 24185,
				35507: 24739,
				35508: 24863,
				35509: 24931,
				35510: 25022,
				35511: 25563,
				35512: 25954,
				35513: 26577,
				35514: 26707,
				35515: 26874,
				35516: 27454,
				35517: 27475,
				35518: 27735,
				35519: 28450,
				35520: 28567,
				35521: 28485,
				35522: 29872,
				35523: 29976,
				35524: 30435,
				35525: 30475,
				35526: 31487,
				35527: 31649,
				35528: 31777,
				35529: 32233,
				35530: 32566,
				35531: 32752,
				35532: 32925,
				35533: 33382,
				35534: 33694,
				35535: 35251,
				35536: 35532,
				35537: 36011,
				35538: 36996,
				35539: 37969,
				35540: 38291,
				35541: 38289,
				35542: 38306,
				35543: 38501,
				35544: 38867,
				35545: 39208,
				35546: 33304,
				35547: 20024,
				35548: 21547,
				35549: 23736,
				35550: 24012,
				35551: 29609,
				35552: 30284,
				35553: 30524,
				35554: 23721,
				35555: 32747,
				35556: 36107,
				35557: 38593,
				35558: 38929,
				35559: 38996,
				35560: 39e3,
				35561: 20225,
				35562: 20238,
				35563: 21361,
				35564: 21916,
				35565: 22120,
				35566: 22522,
				35567: 22855,
				35568: 23305,
				35569: 23492,
				35570: 23696,
				35571: 24076,
				35572: 24190,
				35573: 24524,
				35574: 25582,
				35575: 26426,
				35576: 26071,
				35577: 26082,
				35578: 26399,
				35579: 26827,
				35580: 26820,
				35648: 27231,
				35649: 24112,
				35650: 27589,
				35651: 27671,
				35652: 27773,
				35653: 30079,
				35654: 31048,
				35655: 23395,
				35656: 31232,
				35657: 32e3,
				35658: 24509,
				35659: 35215,
				35660: 35352,
				35661: 36020,
				35662: 36215,
				35663: 36556,
				35664: 36637,
				35665: 39138,
				35666: 39438,
				35667: 39740,
				35668: 20096,
				35669: 20605,
				35670: 20736,
				35671: 22931,
				35672: 23452,
				35673: 25135,
				35674: 25216,
				35675: 25836,
				35676: 27450,
				35677: 29344,
				35678: 30097,
				35679: 31047,
				35680: 32681,
				35681: 34811,
				35682: 35516,
				35683: 35696,
				35684: 25516,
				35685: 33738,
				35686: 38816,
				35687: 21513,
				35688: 21507,
				35689: 21931,
				35690: 26708,
				35691: 27224,
				35692: 35440,
				35693: 30759,
				35694: 26485,
				35695: 40653,
				35696: 21364,
				35697: 23458,
				35698: 33050,
				35699: 34384,
				35700: 36870,
				35701: 19992,
				35702: 20037,
				35703: 20167,
				35704: 20241,
				35705: 21450,
				35706: 21560,
				35707: 23470,
				35708: 24339,
				35709: 24613,
				35710: 25937,
				35712: 26429,
				35713: 27714,
				35714: 27762,
				35715: 27875,
				35716: 28792,
				35717: 29699,
				35718: 31350,
				35719: 31406,
				35720: 31496,
				35721: 32026,
				35722: 31998,
				35723: 32102,
				35724: 26087,
				35725: 29275,
				35726: 21435,
				35727: 23621,
				35728: 24040,
				35729: 25298,
				35730: 25312,
				35731: 25369,
				35732: 28192,
				35733: 34394,
				35734: 35377,
				35735: 36317,
				35736: 37624,
				35737: 28417,
				35738: 31142,
				35739: 39770,
				35740: 20136,
				35741: 20139,
				35742: 20140,
				35743: 20379,
				35744: 20384,
				35745: 20689,
				35746: 20807,
				35747: 31478,
				35748: 20849,
				35749: 20982,
				35750: 21332,
				35751: 21281,
				35752: 21375,
				35753: 21483,
				35754: 21932,
				35755: 22659,
				35756: 23777,
				35757: 24375,
				35758: 24394,
				35759: 24623,
				35760: 24656,
				35761: 24685,
				35762: 25375,
				35763: 25945,
				35764: 27211,
				35765: 27841,
				35766: 29378,
				35767: 29421,
				35768: 30703,
				35769: 33016,
				35770: 33029,
				35771: 33288,
				35772: 34126,
				35773: 37111,
				35774: 37857,
				35775: 38911,
				35776: 39255,
				35777: 39514,
				35778: 20208,
				35779: 20957,
				35780: 23597,
				35781: 26241,
				35782: 26989,
				35783: 23616,
				35784: 26354,
				35785: 26997,
				35786: 29577,
				35787: 26704,
				35788: 31873,
				35789: 20677,
				35790: 21220,
				35791: 22343,
				35792: 24062,
				35793: 37670,
				35794: 26020,
				35795: 27427,
				35796: 27453,
				35797: 29748,
				35798: 31105,
				35799: 31165,
				35800: 31563,
				35801: 32202,
				35802: 33465,
				35803: 33740,
				35804: 34943,
				35805: 35167,
				35806: 35641,
				35807: 36817,
				35808: 37329,
				35809: 21535,
				35810: 37504,
				35811: 20061,
				35812: 20534,
				35813: 21477,
				35814: 21306,
				35815: 29399,
				35816: 29590,
				35817: 30697,
				35818: 33510,
				35819: 36527,
				35820: 39366,
				35821: 39368,
				35822: 39378,
				35823: 20855,
				35824: 24858,
				35825: 34398,
				35826: 21936,
				35827: 31354,
				35828: 20598,
				35829: 23507,
				35830: 36935,
				35831: 38533,
				35832: 20018,
				35833: 27355,
				35834: 37351,
				35835: 23633,
				35836: 23624,
				35904: 25496,
				35905: 31391,
				35906: 27795,
				35907: 38772,
				35908: 36705,
				35909: 31402,
				35910: 29066,
				35911: 38536,
				35912: 31874,
				35913: 26647,
				35914: 32368,
				35915: 26705,
				35916: 37740,
				35917: 21234,
				35918: 21531,
				35919: 34219,
				35920: 35347,
				35921: 32676,
				35922: 36557,
				35923: 37089,
				35924: 21350,
				35925: 34952,
				35926: 31041,
				35927: 20418,
				35928: 20670,
				35929: 21009,
				35930: 20804,
				35931: 21843,
				35932: 22317,
				35933: 29674,
				35934: 22411,
				35935: 22865,
				35936: 24418,
				35937: 24452,
				35938: 24693,
				35939: 24950,
				35940: 24935,
				35941: 25001,
				35942: 25522,
				35943: 25658,
				35944: 25964,
				35945: 26223,
				35946: 26690,
				35947: 28179,
				35948: 30054,
				35949: 31293,
				35950: 31995,
				35951: 32076,
				35952: 32153,
				35953: 32331,
				35954: 32619,
				35955: 33550,
				35956: 33610,
				35957: 34509,
				35958: 35336,
				35959: 35427,
				35960: 35686,
				35961: 36605,
				35962: 38938,
				35963: 40335,
				35964: 33464,
				35965: 36814,
				35966: 39912,
				35968: 21127,
				35969: 25119,
				35970: 25731,
				35971: 28608,
				35972: 38553,
				35973: 26689,
				35974: 20625,
				35975: 27424,
				35976: 27770,
				35977: 28500,
				35978: 31348,
				35979: 32080,
				35980: 34880,
				35981: 35363,
				35982: 26376,
				35983: 20214,
				35984: 20537,
				35985: 20518,
				35986: 20581,
				35987: 20860,
				35988: 21048,
				35989: 21091,
				35990: 21927,
				35991: 22287,
				35992: 22533,
				35993: 23244,
				35994: 24314,
				35995: 25010,
				35996: 25080,
				35997: 25331,
				35998: 25458,
				35999: 26908,
				36000: 27177,
				36001: 29309,
				36002: 29356,
				36003: 29486,
				36004: 30740,
				36005: 30831,
				36006: 32121,
				36007: 30476,
				36008: 32937,
				36009: 35211,
				36010: 35609,
				36011: 36066,
				36012: 36562,
				36013: 36963,
				36014: 37749,
				36015: 38522,
				36016: 38997,
				36017: 39443,
				36018: 40568,
				36019: 20803,
				36020: 21407,
				36021: 21427,
				36022: 24187,
				36023: 24358,
				36024: 28187,
				36025: 28304,
				36026: 29572,
				36027: 29694,
				36028: 32067,
				36029: 33335,
				36030: 35328,
				36031: 35578,
				36032: 38480,
				36033: 20046,
				36034: 20491,
				36035: 21476,
				36036: 21628,
				36037: 22266,
				36038: 22993,
				36039: 23396,
				36040: 24049,
				36041: 24235,
				36042: 24359,
				36043: 25144,
				36044: 25925,
				36045: 26543,
				36046: 28246,
				36047: 29392,
				36048: 31946,
				36049: 34996,
				36050: 32929,
				36051: 32993,
				36052: 33776,
				36053: 34382,
				36054: 35463,
				36055: 36328,
				36056: 37431,
				36057: 38599,
				36058: 39015,
				36059: 40723,
				36060: 20116,
				36061: 20114,
				36062: 20237,
				36063: 21320,
				36064: 21577,
				36065: 21566,
				36066: 23087,
				36067: 24460,
				36068: 24481,
				36069: 24735,
				36070: 26791,
				36071: 27278,
				36072: 29786,
				36073: 30849,
				36074: 35486,
				36075: 35492,
				36076: 35703,
				36077: 37264,
				36078: 20062,
				36079: 39881,
				36080: 20132,
				36081: 20348,
				36082: 20399,
				36083: 20505,
				36084: 20502,
				36085: 20809,
				36086: 20844,
				36087: 21151,
				36088: 21177,
				36089: 21246,
				36090: 21402,
				36091: 21475,
				36092: 21521,
				36160: 21518,
				36161: 21897,
				36162: 22353,
				36163: 22434,
				36164: 22909,
				36165: 23380,
				36166: 23389,
				36167: 23439,
				36168: 24037,
				36169: 24039,
				36170: 24055,
				36171: 24184,
				36172: 24195,
				36173: 24218,
				36174: 24247,
				36175: 24344,
				36176: 24658,
				36177: 24908,
				36178: 25239,
				36179: 25304,
				36180: 25511,
				36181: 25915,
				36182: 26114,
				36183: 26179,
				36184: 26356,
				36185: 26477,
				36186: 26657,
				36187: 26775,
				36188: 27083,
				36189: 27743,
				36190: 27946,
				36191: 28009,
				36192: 28207,
				36193: 28317,
				36194: 30002,
				36195: 30343,
				36196: 30828,
				36197: 31295,
				36198: 31968,
				36199: 32005,
				36200: 32024,
				36201: 32094,
				36202: 32177,
				36203: 32789,
				36204: 32771,
				36205: 32943,
				36206: 32945,
				36207: 33108,
				36208: 33167,
				36209: 33322,
				36210: 33618,
				36211: 34892,
				36212: 34913,
				36213: 35611,
				36214: 36002,
				36215: 36092,
				36216: 37066,
				36217: 37237,
				36218: 37489,
				36219: 30783,
				36220: 37628,
				36221: 38308,
				36222: 38477,
				36224: 38917,
				36225: 39321,
				36226: 39640,
				36227: 40251,
				36228: 21083,
				36229: 21163,
				36230: 21495,
				36231: 21512,
				36232: 22741,
				36233: 25335,
				36234: 28640,
				36235: 35946,
				36236: 36703,
				36237: 40633,
				36238: 20811,
				36239: 21051,
				36240: 21578,
				36241: 22269,
				36242: 31296,
				36243: 37239,
				36244: 40288,
				36245: 40658,
				36246: 29508,
				36247: 28425,
				36248: 33136,
				36249: 29969,
				36250: 24573,
				36251: 24794,
				36252: 39592,
				36253: 29403,
				36254: 36796,
				36255: 27492,
				36256: 38915,
				36257: 20170,
				36258: 22256,
				36259: 22372,
				36260: 22718,
				36261: 23130,
				36262: 24680,
				36263: 25031,
				36264: 26127,
				36265: 26118,
				36266: 26681,
				36267: 26801,
				36268: 28151,
				36269: 30165,
				36270: 32058,
				36271: 33390,
				36272: 39746,
				36273: 20123,
				36274: 20304,
				36275: 21449,
				36276: 21766,
				36277: 23919,
				36278: 24038,
				36279: 24046,
				36280: 26619,
				36281: 27801,
				36282: 29811,
				36283: 30722,
				36284: 35408,
				36285: 37782,
				36286: 35039,
				36287: 22352,
				36288: 24231,
				36289: 25387,
				36290: 20661,
				36291: 20652,
				36292: 20877,
				36293: 26368,
				36294: 21705,
				36295: 22622,
				36296: 22971,
				36297: 23472,
				36298: 24425,
				36299: 25165,
				36300: 25505,
				36301: 26685,
				36302: 27507,
				36303: 28168,
				36304: 28797,
				36305: 37319,
				36306: 29312,
				36307: 30741,
				36308: 30758,
				36309: 31085,
				36310: 25998,
				36311: 32048,
				36312: 33756,
				36313: 35009,
				36314: 36617,
				36315: 38555,
				36316: 21092,
				36317: 22312,
				36318: 26448,
				36319: 32618,
				36320: 36001,
				36321: 20916,
				36322: 22338,
				36323: 38442,
				36324: 22586,
				36325: 27018,
				36326: 32948,
				36327: 21682,
				36328: 23822,
				36329: 22524,
				36330: 30869,
				36331: 40442,
				36332: 20316,
				36333: 21066,
				36334: 21643,
				36335: 25662,
				36336: 26152,
				36337: 26388,
				36338: 26613,
				36339: 31364,
				36340: 31574,
				36341: 32034,
				36342: 37679,
				36343: 26716,
				36344: 39853,
				36345: 31545,
				36346: 21273,
				36347: 20874,
				36348: 21047,
				36416: 23519,
				36417: 25334,
				36418: 25774,
				36419: 25830,
				36420: 26413,
				36421: 27578,
				36422: 34217,
				36423: 38609,
				36424: 30352,
				36425: 39894,
				36426: 25420,
				36427: 37638,
				36428: 39851,
				36429: 30399,
				36430: 26194,
				36431: 19977,
				36432: 20632,
				36433: 21442,
				36434: 23665,
				36435: 24808,
				36436: 25746,
				36437: 25955,
				36438: 26719,
				36439: 29158,
				36440: 29642,
				36441: 29987,
				36442: 31639,
				36443: 32386,
				36444: 34453,
				36445: 35715,
				36446: 36059,
				36447: 37240,
				36448: 39184,
				36449: 26028,
				36450: 26283,
				36451: 27531,
				36452: 20181,
				36453: 20180,
				36454: 20282,
				36455: 20351,
				36456: 21050,
				36457: 21496,
				36458: 21490,
				36459: 21987,
				36460: 22235,
				36461: 22763,
				36462: 22987,
				36463: 22985,
				36464: 23039,
				36465: 23376,
				36466: 23629,
				36467: 24066,
				36468: 24107,
				36469: 24535,
				36470: 24605,
				36471: 25351,
				36472: 25903,
				36473: 23388,
				36474: 26031,
				36475: 26045,
				36476: 26088,
				36477: 26525,
				36478: 27490,
				36480: 27515,
				36481: 27663,
				36482: 29509,
				36483: 31049,
				36484: 31169,
				36485: 31992,
				36486: 32025,
				36487: 32043,
				36488: 32930,
				36489: 33026,
				36490: 33267,
				36491: 35222,
				36492: 35422,
				36493: 35433,
				36494: 35430,
				36495: 35468,
				36496: 35566,
				36497: 36039,
				36498: 36060,
				36499: 38604,
				36500: 39164,
				36501: 27503,
				36502: 20107,
				36503: 20284,
				36504: 20365,
				36505: 20816,
				36506: 23383,
				36507: 23546,
				36508: 24904,
				36509: 25345,
				36510: 26178,
				36511: 27425,
				36512: 28363,
				36513: 27835,
				36514: 29246,
				36515: 29885,
				36516: 30164,
				36517: 30913,
				36518: 31034,
				36519: 32780,
				36520: 32819,
				36521: 33258,
				36522: 33940,
				36523: 36766,
				36524: 27728,
				36525: 40575,
				36526: 24335,
				36527: 35672,
				36528: 40235,
				36529: 31482,
				36530: 36600,
				36531: 23437,
				36532: 38635,
				36533: 19971,
				36534: 21489,
				36535: 22519,
				36536: 22833,
				36537: 23241,
				36538: 23460,
				36539: 24713,
				36540: 28287,
				36541: 28422,
				36542: 30142,
				36543: 36074,
				36544: 23455,
				36545: 34048,
				36546: 31712,
				36547: 20594,
				36548: 26612,
				36549: 33437,
				36550: 23649,
				36551: 34122,
				36552: 32286,
				36553: 33294,
				36554: 20889,
				36555: 23556,
				36556: 25448,
				36557: 36198,
				36558: 26012,
				36559: 29038,
				36560: 31038,
				36561: 32023,
				36562: 32773,
				36563: 35613,
				36564: 36554,
				36565: 36974,
				36566: 34503,
				36567: 37034,
				36568: 20511,
				36569: 21242,
				36570: 23610,
				36571: 26451,
				36572: 28796,
				36573: 29237,
				36574: 37196,
				36575: 37320,
				36576: 37675,
				36577: 33509,
				36578: 23490,
				36579: 24369,
				36580: 24825,
				36581: 20027,
				36582: 21462,
				36583: 23432,
				36584: 25163,
				36585: 26417,
				36586: 27530,
				36587: 29417,
				36588: 29664,
				36589: 31278,
				36590: 33131,
				36591: 36259,
				36592: 37202,
				36593: 39318,
				36594: 20754,
				36595: 21463,
				36596: 21610,
				36597: 23551,
				36598: 25480,
				36599: 27193,
				36600: 32172,
				36601: 38656,
				36602: 22234,
				36603: 21454,
				36604: 21608,
				36672: 23447,
				36673: 23601,
				36674: 24030,
				36675: 20462,
				36676: 24833,
				36677: 25342,
				36678: 27954,
				36679: 31168,
				36680: 31179,
				36681: 32066,
				36682: 32333,
				36683: 32722,
				36684: 33261,
				36685: 33311,
				36686: 33936,
				36687: 34886,
				36688: 35186,
				36689: 35728,
				36690: 36468,
				36691: 36655,
				36692: 36913,
				36693: 37195,
				36694: 37228,
				36695: 38598,
				36696: 37276,
				36697: 20160,
				36698: 20303,
				36699: 20805,
				36700: 21313,
				36701: 24467,
				36702: 25102,
				36703: 26580,
				36704: 27713,
				36705: 28171,
				36706: 29539,
				36707: 32294,
				36708: 37325,
				36709: 37507,
				36710: 21460,
				36711: 22809,
				36712: 23487,
				36713: 28113,
				36714: 31069,
				36715: 32302,
				36716: 31899,
				36717: 22654,
				36718: 29087,
				36719: 20986,
				36720: 34899,
				36721: 36848,
				36722: 20426,
				36723: 23803,
				36724: 26149,
				36725: 30636,
				36726: 31459,
				36727: 33308,
				36728: 39423,
				36729: 20934,
				36730: 24490,
				36731: 26092,
				36732: 26991,
				36733: 27529,
				36734: 28147,
				36736: 28310,
				36737: 28516,
				36738: 30462,
				36739: 32020,
				36740: 24033,
				36741: 36981,
				36742: 37255,
				36743: 38918,
				36744: 20966,
				36745: 21021,
				36746: 25152,
				36747: 26257,
				36748: 26329,
				36749: 28186,
				36750: 24246,
				36751: 32210,
				36752: 32626,
				36753: 26360,
				36754: 34223,
				36755: 34295,
				36756: 35576,
				36757: 21161,
				36758: 21465,
				36759: 22899,
				36760: 24207,
				36761: 24464,
				36762: 24661,
				36763: 37604,
				36764: 38500,
				36765: 20663,
				36766: 20767,
				36767: 21213,
				36768: 21280,
				36769: 21319,
				36770: 21484,
				36771: 21736,
				36772: 21830,
				36773: 21809,
				36774: 22039,
				36775: 22888,
				36776: 22974,
				36777: 23100,
				36778: 23477,
				36779: 23558,
				36780: 23567,
				36781: 23569,
				36782: 23578,
				36783: 24196,
				36784: 24202,
				36785: 24288,
				36786: 24432,
				36787: 25215,
				36788: 25220,
				36789: 25307,
				36790: 25484,
				36791: 25463,
				36792: 26119,
				36793: 26124,
				36794: 26157,
				36795: 26230,
				36796: 26494,
				36797: 26786,
				36798: 27167,
				36799: 27189,
				36800: 27836,
				36801: 28040,
				36802: 28169,
				36803: 28248,
				36804: 28988,
				36805: 28966,
				36806: 29031,
				36807: 30151,
				36808: 30465,
				36809: 30813,
				36810: 30977,
				36811: 31077,
				36812: 31216,
				36813: 31456,
				36814: 31505,
				36815: 31911,
				36816: 32057,
				36817: 32918,
				36818: 33750,
				36819: 33931,
				36820: 34121,
				36821: 34909,
				36822: 35059,
				36823: 35359,
				36824: 35388,
				36825: 35412,
				36826: 35443,
				36827: 35937,
				36828: 36062,
				36829: 37284,
				36830: 37478,
				36831: 37758,
				36832: 37912,
				36833: 38556,
				36834: 38808,
				36835: 19978,
				36836: 19976,
				36837: 19998,
				36838: 20055,
				36839: 20887,
				36840: 21104,
				36841: 22478,
				36842: 22580,
				36843: 22732,
				36844: 23330,
				36845: 24120,
				36846: 24773,
				36847: 25854,
				36848: 26465,
				36849: 26454,
				36850: 27972,
				36851: 29366,
				36852: 30067,
				36853: 31331,
				36854: 33976,
				36855: 35698,
				36856: 37304,
				36857: 37664,
				36858: 22065,
				36859: 22516,
				36860: 39166,
				36928: 25325,
				36929: 26893,
				36930: 27542,
				36931: 29165,
				36932: 32340,
				36933: 32887,
				36934: 33394,
				36935: 35302,
				36936: 39135,
				36937: 34645,
				36938: 36785,
				36939: 23611,
				36940: 20280,
				36941: 20449,
				36942: 20405,
				36943: 21767,
				36944: 23072,
				36945: 23517,
				36946: 23529,
				36947: 24515,
				36948: 24910,
				36949: 25391,
				36950: 26032,
				36951: 26187,
				36952: 26862,
				36953: 27035,
				36954: 28024,
				36955: 28145,
				36956: 30003,
				36957: 30137,
				36958: 30495,
				36959: 31070,
				36960: 31206,
				36961: 32051,
				36962: 33251,
				36963: 33455,
				36964: 34218,
				36965: 35242,
				36966: 35386,
				36967: 36523,
				36968: 36763,
				36969: 36914,
				36970: 37341,
				36971: 38663,
				36972: 20154,
				36973: 20161,
				36974: 20995,
				36975: 22645,
				36976: 22764,
				36977: 23563,
				36978: 29978,
				36979: 23613,
				36980: 33102,
				36981: 35338,
				36982: 36805,
				36983: 38499,
				36984: 38765,
				36985: 31525,
				36986: 35535,
				36987: 38920,
				36988: 37218,
				36989: 22259,
				36990: 21416,
				36992: 36887,
				36993: 21561,
				36994: 22402,
				36995: 24101,
				36996: 25512,
				36997: 27700,
				36998: 28810,
				36999: 30561,
				37000: 31883,
				37001: 32736,
				37002: 34928,
				37003: 36930,
				37004: 37204,
				37005: 37648,
				37006: 37656,
				37007: 38543,
				37008: 29790,
				37009: 39620,
				37010: 23815,
				37011: 23913,
				37012: 25968,
				37013: 26530,
				37014: 36264,
				37015: 38619,
				37016: 25454,
				37017: 26441,
				37018: 26905,
				37019: 33733,
				37020: 38935,
				37021: 38592,
				37022: 35070,
				37023: 28548,
				37024: 25722,
				37025: 23544,
				37026: 19990,
				37027: 28716,
				37028: 30045,
				37029: 26159,
				37030: 20932,
				37031: 21046,
				37032: 21218,
				37033: 22995,
				37034: 24449,
				37035: 24615,
				37036: 25104,
				37037: 25919,
				37038: 25972,
				37039: 26143,
				37040: 26228,
				37041: 26866,
				37042: 26646,
				37043: 27491,
				37044: 28165,
				37045: 29298,
				37046: 29983,
				37047: 30427,
				37048: 31934,
				37049: 32854,
				37050: 22768,
				37051: 35069,
				37052: 35199,
				37053: 35488,
				37054: 35475,
				37055: 35531,
				37056: 36893,
				37057: 37266,
				37058: 38738,
				37059: 38745,
				37060: 25993,
				37061: 31246,
				37062: 33030,
				37063: 38587,
				37064: 24109,
				37065: 24796,
				37066: 25114,
				37067: 26021,
				37068: 26132,
				37069: 26512,
				37070: 30707,
				37071: 31309,
				37072: 31821,
				37073: 32318,
				37074: 33034,
				37075: 36012,
				37076: 36196,
				37077: 36321,
				37078: 36447,
				37079: 30889,
				37080: 20999,
				37081: 25305,
				37082: 25509,
				37083: 25666,
				37084: 25240,
				37085: 35373,
				37086: 31363,
				37087: 31680,
				37088: 35500,
				37089: 38634,
				37090: 32118,
				37091: 33292,
				37092: 34633,
				37093: 20185,
				37094: 20808,
				37095: 21315,
				37096: 21344,
				37097: 23459,
				37098: 23554,
				37099: 23574,
				37100: 24029,
				37101: 25126,
				37102: 25159,
				37103: 25776,
				37104: 26643,
				37105: 26676,
				37106: 27849,
				37107: 27973,
				37108: 27927,
				37109: 26579,
				37110: 28508,
				37111: 29006,
				37112: 29053,
				37113: 26059,
				37114: 31359,
				37115: 31661,
				37116: 32218,
				37184: 32330,
				37185: 32680,
				37186: 33146,
				37187: 33307,
				37188: 33337,
				37189: 34214,
				37190: 35438,
				37191: 36046,
				37192: 36341,
				37193: 36984,
				37194: 36983,
				37195: 37549,
				37196: 37521,
				37197: 38275,
				37198: 39854,
				37199: 21069,
				37200: 21892,
				37201: 28472,
				37202: 28982,
				37203: 20840,
				37204: 31109,
				37205: 32341,
				37206: 33203,
				37207: 31950,
				37208: 22092,
				37209: 22609,
				37210: 23720,
				37211: 25514,
				37212: 26366,
				37213: 26365,
				37214: 26970,
				37215: 29401,
				37216: 30095,
				37217: 30094,
				37218: 30990,
				37219: 31062,
				37220: 31199,
				37221: 31895,
				37222: 32032,
				37223: 32068,
				37224: 34311,
				37225: 35380,
				37226: 38459,
				37227: 36961,
				37228: 40736,
				37229: 20711,
				37230: 21109,
				37231: 21452,
				37232: 21474,
				37233: 20489,
				37234: 21930,
				37235: 22766,
				37236: 22863,
				37237: 29245,
				37238: 23435,
				37239: 23652,
				37240: 21277,
				37241: 24803,
				37242: 24819,
				37243: 25436,
				37244: 25475,
				37245: 25407,
				37246: 25531,
				37248: 25805,
				37249: 26089,
				37250: 26361,
				37251: 24035,
				37252: 27085,
				37253: 27133,
				37254: 28437,
				37255: 29157,
				37256: 20105,
				37257: 30185,
				37258: 30456,
				37259: 31379,
				37260: 31967,
				37261: 32207,
				37262: 32156,
				37263: 32865,
				37264: 33609,
				37265: 33624,
				37266: 33900,
				37267: 33980,
				37268: 34299,
				37269: 35013,
				37270: 36208,
				37271: 36865,
				37272: 36973,
				37273: 37783,
				37274: 38684,
				37275: 39442,
				37276: 20687,
				37277: 22679,
				37278: 24974,
				37279: 33235,
				37280: 34101,
				37281: 36104,
				37282: 36896,
				37283: 20419,
				37284: 20596,
				37285: 21063,
				37286: 21363,
				37287: 24687,
				37288: 25417,
				37289: 26463,
				37290: 28204,
				37291: 36275,
				37292: 36895,
				37293: 20439,
				37294: 23646,
				37295: 36042,
				37296: 26063,
				37297: 32154,
				37298: 21330,
				37299: 34966,
				37300: 20854,
				37301: 25539,
				37302: 23384,
				37303: 23403,
				37304: 23562,
				37305: 25613,
				37306: 26449,
				37307: 36956,
				37308: 20182,
				37309: 22810,
				37310: 22826,
				37311: 27760,
				37312: 35409,
				37313: 21822,
				37314: 22549,
				37315: 22949,
				37316: 24816,
				37317: 25171,
				37318: 26561,
				37319: 33333,
				37320: 26965,
				37321: 38464,
				37322: 39364,
				37323: 39464,
				37324: 20307,
				37325: 22534,
				37326: 23550,
				37327: 32784,
				37328: 23729,
				37329: 24111,
				37330: 24453,
				37331: 24608,
				37332: 24907,
				37333: 25140,
				37334: 26367,
				37335: 27888,
				37336: 28382,
				37337: 32974,
				37338: 33151,
				37339: 33492,
				37340: 34955,
				37341: 36024,
				37342: 36864,
				37343: 36910,
				37344: 38538,
				37345: 40667,
				37346: 39899,
				37347: 20195,
				37348: 21488,
				37349: 22823,
				37350: 31532,
				37351: 37261,
				37352: 38988,
				37353: 40441,
				37354: 28381,
				37355: 28711,
				37356: 21331,
				37357: 21828,
				37358: 23429,
				37359: 25176,
				37360: 25246,
				37361: 25299,
				37362: 27810,
				37363: 28655,
				37364: 29730,
				37365: 35351,
				37366: 37944,
				37367: 28609,
				37368: 35582,
				37369: 33592,
				37370: 20967,
				37371: 34552,
				37372: 21482,
				37440: 21481,
				37441: 20294,
				37442: 36948,
				37443: 36784,
				37444: 22890,
				37445: 33073,
				37446: 24061,
				37447: 31466,
				37448: 36799,
				37449: 26842,
				37450: 35895,
				37451: 29432,
				37452: 40008,
				37453: 27197,
				37454: 35504,
				37455: 20025,
				37456: 21336,
				37457: 22022,
				37458: 22374,
				37459: 25285,
				37460: 25506,
				37461: 26086,
				37462: 27470,
				37463: 28129,
				37464: 28251,
				37465: 28845,
				37466: 30701,
				37467: 31471,
				37468: 31658,
				37469: 32187,
				37470: 32829,
				37471: 32966,
				37472: 34507,
				37473: 35477,
				37474: 37723,
				37475: 22243,
				37476: 22727,
				37477: 24382,
				37478: 26029,
				37479: 26262,
				37480: 27264,
				37481: 27573,
				37482: 30007,
				37483: 35527,
				37484: 20516,
				37485: 30693,
				37486: 22320,
				37487: 24347,
				37488: 24677,
				37489: 26234,
				37490: 27744,
				37491: 30196,
				37492: 31258,
				37493: 32622,
				37494: 33268,
				37495: 34584,
				37496: 36933,
				37497: 39347,
				37498: 31689,
				37499: 30044,
				37500: 31481,
				37501: 31569,
				37502: 33988,
				37504: 36880,
				37505: 31209,
				37506: 31378,
				37507: 33590,
				37508: 23265,
				37509: 30528,
				37510: 20013,
				37511: 20210,
				37512: 23449,
				37513: 24544,
				37514: 25277,
				37515: 26172,
				37516: 26609,
				37517: 27880,
				37518: 34411,
				37519: 34935,
				37520: 35387,
				37521: 37198,
				37522: 37619,
				37523: 39376,
				37524: 27159,
				37525: 28710,
				37526: 29482,
				37527: 33511,
				37528: 33879,
				37529: 36015,
				37530: 19969,
				37531: 20806,
				37532: 20939,
				37533: 21899,
				37534: 23541,
				37535: 24086,
				37536: 24115,
				37537: 24193,
				37538: 24340,
				37539: 24373,
				37540: 24427,
				37541: 24500,
				37542: 25074,
				37543: 25361,
				37544: 26274,
				37545: 26397,
				37546: 28526,
				37547: 29266,
				37548: 30010,
				37549: 30522,
				37550: 32884,
				37551: 33081,
				37552: 33144,
				37553: 34678,
				37554: 35519,
				37555: 35548,
				37556: 36229,
				37557: 36339,
				37558: 37530,
				37559: 38263,
				37560: 38914,
				37561: 40165,
				37562: 21189,
				37563: 25431,
				37564: 30452,
				37565: 26389,
				37566: 27784,
				37567: 29645,
				37568: 36035,
				37569: 37806,
				37570: 38515,
				37571: 27941,
				37572: 22684,
				37573: 26894,
				37574: 27084,
				37575: 36861,
				37576: 37786,
				37577: 30171,
				37578: 36890,
				37579: 22618,
				37580: 26626,
				37581: 25524,
				37582: 27131,
				37583: 20291,
				37584: 28460,
				37585: 26584,
				37586: 36795,
				37587: 34086,
				37588: 32180,
				37589: 37716,
				37590: 26943,
				37591: 28528,
				37592: 22378,
				37593: 22775,
				37594: 23340,
				37595: 32044,
				37596: 29226,
				37597: 21514,
				37598: 37347,
				37599: 40372,
				37600: 20141,
				37601: 20302,
				37602: 20572,
				37603: 20597,
				37604: 21059,
				37605: 35998,
				37606: 21576,
				37607: 22564,
				37608: 23450,
				37609: 24093,
				37610: 24213,
				37611: 24237,
				37612: 24311,
				37613: 24351,
				37614: 24716,
				37615: 25269,
				37616: 25402,
				37617: 25552,
				37618: 26799,
				37619: 27712,
				37620: 30855,
				37621: 31118,
				37622: 31243,
				37623: 32224,
				37624: 33351,
				37625: 35330,
				37626: 35558,
				37627: 36420,
				37628: 36883,
				37696: 37048,
				37697: 37165,
				37698: 37336,
				37699: 40718,
				37700: 27877,
				37701: 25688,
				37702: 25826,
				37703: 25973,
				37704: 28404,
				37705: 30340,
				37706: 31515,
				37707: 36969,
				37708: 37841,
				37709: 28346,
				37710: 21746,
				37711: 24505,
				37712: 25764,
				37713: 36685,
				37714: 36845,
				37715: 37444,
				37716: 20856,
				37717: 22635,
				37718: 22825,
				37719: 23637,
				37720: 24215,
				37721: 28155,
				37722: 32399,
				37723: 29980,
				37724: 36028,
				37725: 36578,
				37726: 39003,
				37727: 28857,
				37728: 20253,
				37729: 27583,
				37730: 28593,
				37731: 3e4,
				37732: 38651,
				37733: 20814,
				37734: 21520,
				37735: 22581,
				37736: 22615,
				37737: 22956,
				37738: 23648,
				37739: 24466,
				37740: 26007,
				37741: 26460,
				37742: 28193,
				37743: 30331,
				37744: 33759,
				37745: 36077,
				37746: 36884,
				37747: 37117,
				37748: 37709,
				37749: 30757,
				37750: 30778,
				37751: 21162,
				37752: 24230,
				37753: 22303,
				37754: 22900,
				37755: 24594,
				37756: 20498,
				37757: 20826,
				37758: 20908,
				37760: 20941,
				37761: 20992,
				37762: 21776,
				37763: 22612,
				37764: 22616,
				37765: 22871,
				37766: 23445,
				37767: 23798,
				37768: 23947,
				37769: 24764,
				37770: 25237,
				37771: 25645,
				37772: 26481,
				37773: 26691,
				37774: 26812,
				37775: 26847,
				37776: 30423,
				37777: 28120,
				37778: 28271,
				37779: 28059,
				37780: 28783,
				37781: 29128,
				37782: 24403,
				37783: 30168,
				37784: 31095,
				37785: 31561,
				37786: 31572,
				37787: 31570,
				37788: 31958,
				37789: 32113,
				37790: 21040,
				37791: 33891,
				37792: 34153,
				37793: 34276,
				37794: 35342,
				37795: 35588,
				37796: 35910,
				37797: 36367,
				37798: 36867,
				37799: 36879,
				37800: 37913,
				37801: 38518,
				37802: 38957,
				37803: 39472,
				37804: 38360,
				37805: 20685,
				37806: 21205,
				37807: 21516,
				37808: 22530,
				37809: 23566,
				37810: 24999,
				37811: 25758,
				37812: 27934,
				37813: 30643,
				37814: 31461,
				37815: 33012,
				37816: 33796,
				37817: 36947,
				37818: 37509,
				37819: 23776,
				37820: 40199,
				37821: 21311,
				37822: 24471,
				37823: 24499,
				37824: 28060,
				37825: 29305,
				37826: 30563,
				37827: 31167,
				37828: 31716,
				37829: 27602,
				37830: 29420,
				37831: 35501,
				37832: 26627,
				37833: 27233,
				37834: 20984,
				37835: 31361,
				37836: 26932,
				37837: 23626,
				37838: 40182,
				37839: 33515,
				37840: 23493,
				37841: 37193,
				37842: 28702,
				37843: 22136,
				37844: 23663,
				37845: 24775,
				37846: 25958,
				37847: 27788,
				37848: 35930,
				37849: 36929,
				37850: 38931,
				37851: 21585,
				37852: 26311,
				37853: 37389,
				37854: 22856,
				37855: 37027,
				37856: 20869,
				37857: 20045,
				37858: 20970,
				37859: 34201,
				37860: 35598,
				37861: 28760,
				37862: 25466,
				37863: 37707,
				37864: 26978,
				37865: 39348,
				37866: 32260,
				37867: 30071,
				37868: 21335,
				37869: 26976,
				37870: 36575,
				37871: 38627,
				37872: 27741,
				37873: 20108,
				37874: 23612,
				37875: 24336,
				37876: 36841,
				37877: 21250,
				37878: 36049,
				37879: 32905,
				37880: 34425,
				37881: 24319,
				37882: 26085,
				37883: 20083,
				37884: 20837,
				37952: 22914,
				37953: 23615,
				37954: 38894,
				37955: 20219,
				37956: 22922,
				37957: 24525,
				37958: 35469,
				37959: 28641,
				37960: 31152,
				37961: 31074,
				37962: 23527,
				37963: 33905,
				37964: 29483,
				37965: 29105,
				37966: 24180,
				37967: 24565,
				37968: 25467,
				37969: 25754,
				37970: 29123,
				37971: 31896,
				37972: 20035,
				37973: 24316,
				37974: 20043,
				37975: 22492,
				37976: 22178,
				37977: 24745,
				37978: 28611,
				37979: 32013,
				37980: 33021,
				37981: 33075,
				37982: 33215,
				37983: 36786,
				37984: 35223,
				37985: 34468,
				37986: 24052,
				37987: 25226,
				37988: 25773,
				37989: 35207,
				37990: 26487,
				37991: 27874,
				37992: 27966,
				37993: 29750,
				37994: 30772,
				37995: 23110,
				37996: 32629,
				37997: 33453,
				37998: 39340,
				37999: 20467,
				38000: 24259,
				38001: 25309,
				38002: 25490,
				38003: 25943,
				38004: 26479,
				38005: 30403,
				38006: 29260,
				38007: 32972,
				38008: 32954,
				38009: 36649,
				38010: 37197,
				38011: 20493,
				38012: 22521,
				38013: 23186,
				38014: 26757,
				38016: 26995,
				38017: 29028,
				38018: 29437,
				38019: 36023,
				38020: 22770,
				38021: 36064,
				38022: 38506,
				38023: 36889,
				38024: 34687,
				38025: 31204,
				38026: 30695,
				38027: 33833,
				38028: 20271,
				38029: 21093,
				38030: 21338,
				38031: 25293,
				38032: 26575,
				38033: 27850,
				38034: 30333,
				38035: 31636,
				38036: 31893,
				38037: 33334,
				38038: 34180,
				38039: 36843,
				38040: 26333,
				38041: 28448,
				38042: 29190,
				38043: 32283,
				38044: 33707,
				38045: 39361,
				38046: 40614,
				38047: 20989,
				38048: 31665,
				38049: 30834,
				38050: 31672,
				38051: 32903,
				38052: 31560,
				38053: 27368,
				38054: 24161,
				38055: 32908,
				38056: 30033,
				38057: 30048,
				38058: 20843,
				38059: 37474,
				38060: 28300,
				38061: 30330,
				38062: 37271,
				38063: 39658,
				38064: 20240,
				38065: 32624,
				38066: 25244,
				38067: 31567,
				38068: 38309,
				38069: 40169,
				38070: 22138,
				38071: 22617,
				38072: 34532,
				38073: 38588,
				38074: 20276,
				38075: 21028,
				38076: 21322,
				38077: 21453,
				38078: 21467,
				38079: 24070,
				38080: 25644,
				38081: 26001,
				38082: 26495,
				38083: 27710,
				38084: 27726,
				38085: 29256,
				38086: 29359,
				38087: 29677,
				38088: 30036,
				38089: 32321,
				38090: 33324,
				38091: 34281,
				38092: 36009,
				38093: 31684,
				38094: 37318,
				38095: 29033,
				38096: 38930,
				38097: 39151,
				38098: 25405,
				38099: 26217,
				38100: 30058,
				38101: 30436,
				38102: 30928,
				38103: 34115,
				38104: 34542,
				38105: 21290,
				38106: 21329,
				38107: 21542,
				38108: 22915,
				38109: 24199,
				38110: 24444,
				38111: 24754,
				38112: 25161,
				38113: 25209,
				38114: 25259,
				38115: 26e3,
				38116: 27604,
				38117: 27852,
				38118: 30130,
				38119: 30382,
				38120: 30865,
				38121: 31192,
				38122: 32203,
				38123: 32631,
				38124: 32933,
				38125: 34987,
				38126: 35513,
				38127: 36027,
				38128: 36991,
				38129: 38750,
				38130: 39131,
				38131: 27147,
				38132: 31800,
				38133: 20633,
				38134: 23614,
				38135: 24494,
				38136: 26503,
				38137: 27608,
				38138: 29749,
				38139: 30473,
				38140: 32654,
				38208: 40763,
				38209: 26570,
				38210: 31255,
				38211: 21305,
				38212: 30091,
				38213: 39661,
				38214: 24422,
				38215: 33181,
				38216: 33777,
				38217: 32920,
				38218: 24380,
				38219: 24517,
				38220: 30050,
				38221: 31558,
				38222: 36924,
				38223: 26727,
				38224: 23019,
				38225: 23195,
				38226: 32016,
				38227: 30334,
				38228: 35628,
				38229: 20469,
				38230: 24426,
				38231: 27161,
				38232: 27703,
				38233: 28418,
				38234: 29922,
				38235: 31080,
				38236: 34920,
				38237: 35413,
				38238: 35961,
				38239: 24287,
				38240: 25551,
				38241: 30149,
				38242: 31186,
				38243: 33495,
				38244: 37672,
				38245: 37618,
				38246: 33948,
				38247: 34541,
				38248: 39981,
				38249: 21697,
				38250: 24428,
				38251: 25996,
				38252: 27996,
				38253: 28693,
				38254: 36007,
				38255: 36051,
				38256: 38971,
				38257: 25935,
				38258: 29942,
				38259: 19981,
				38260: 20184,
				38261: 22496,
				38262: 22827,
				38263: 23142,
				38264: 23500,
				38265: 20904,
				38266: 24067,
				38267: 24220,
				38268: 24598,
				38269: 25206,
				38270: 25975,
				38272: 26023,
				38273: 26222,
				38274: 28014,
				38275: 29238,
				38276: 31526,
				38277: 33104,
				38278: 33178,
				38279: 33433,
				38280: 35676,
				38281: 36e3,
				38282: 36070,
				38283: 36212,
				38284: 38428,
				38285: 38468,
				38286: 20398,
				38287: 25771,
				38288: 27494,
				38289: 33310,
				38290: 33889,
				38291: 34154,
				38292: 37096,
				38293: 23553,
				38294: 26963,
				38295: 39080,
				38296: 33914,
				38297: 34135,
				38298: 20239,
				38299: 21103,
				38300: 24489,
				38301: 24133,
				38302: 26381,
				38303: 31119,
				38304: 33145,
				38305: 35079,
				38306: 35206,
				38307: 28149,
				38308: 24343,
				38309: 25173,
				38310: 27832,
				38311: 20175,
				38312: 29289,
				38313: 39826,
				38314: 20998,
				38315: 21563,
				38316: 22132,
				38317: 22707,
				38318: 24996,
				38319: 25198,
				38320: 28954,
				38321: 22894,
				38322: 31881,
				38323: 31966,
				38324: 32027,
				38325: 38640,
				38326: 25991,
				38327: 32862,
				38328: 19993,
				38329: 20341,
				38330: 20853,
				38331: 22592,
				38332: 24163,
				38333: 24179,
				38334: 24330,
				38335: 26564,
				38336: 20006,
				38337: 34109,
				38338: 38281,
				38339: 38491,
				38340: 31859,
				38341: 38913,
				38342: 20731,
				38343: 22721,
				38344: 30294,
				38345: 30887,
				38346: 21029,
				38347: 30629,
				38348: 34065,
				38349: 31622,
				38350: 20559,
				38351: 22793,
				38352: 29255,
				38353: 31687,
				38354: 32232,
				38355: 36794,
				38356: 36820,
				38357: 36941,
				38358: 20415,
				38359: 21193,
				38360: 23081,
				38361: 24321,
				38362: 38829,
				38363: 20445,
				38364: 33303,
				38365: 37610,
				38366: 22275,
				38367: 25429,
				38368: 27497,
				38369: 29995,
				38370: 35036,
				38371: 36628,
				38372: 31298,
				38373: 21215,
				38374: 22675,
				38375: 24917,
				38376: 25098,
				38377: 26286,
				38378: 27597,
				38379: 31807,
				38380: 33769,
				38381: 20515,
				38382: 20472,
				38383: 21253,
				38384: 21574,
				38385: 22577,
				38386: 22857,
				38387: 23453,
				38388: 23792,
				38389: 23791,
				38390: 23849,
				38391: 24214,
				38392: 25265,
				38393: 25447,
				38394: 25918,
				38395: 26041,
				38396: 26379,
				38464: 27861,
				38465: 27873,
				38466: 28921,
				38467: 30770,
				38468: 32299,
				38469: 32990,
				38470: 33459,
				38471: 33804,
				38472: 34028,
				38473: 34562,
				38474: 35090,
				38475: 35370,
				38476: 35914,
				38477: 37030,
				38478: 37586,
				38479: 39165,
				38480: 40179,
				38481: 40300,
				38482: 20047,
				38483: 20129,
				38484: 20621,
				38485: 21078,
				38486: 22346,
				38487: 22952,
				38488: 24125,
				38489: 24536,
				38490: 24537,
				38491: 25151,
				38492: 26292,
				38493: 26395,
				38494: 26576,
				38495: 26834,
				38496: 20882,
				38497: 32033,
				38498: 32938,
				38499: 33192,
				38500: 35584,
				38501: 35980,
				38502: 36031,
				38503: 37502,
				38504: 38450,
				38505: 21536,
				38506: 38956,
				38507: 21271,
				38508: 20693,
				38509: 21340,
				38510: 22696,
				38511: 25778,
				38512: 26420,
				38513: 29287,
				38514: 30566,
				38515: 31302,
				38516: 37350,
				38517: 21187,
				38518: 27809,
				38519: 27526,
				38520: 22528,
				38521: 24140,
				38522: 22868,
				38523: 26412,
				38524: 32763,
				38525: 20961,
				38526: 30406,
				38528: 25705,
				38529: 30952,
				38530: 39764,
				38531: 40635,
				38532: 22475,
				38533: 22969,
				38534: 26151,
				38535: 26522,
				38536: 27598,
				38537: 21737,
				38538: 27097,
				38539: 24149,
				38540: 33180,
				38541: 26517,
				38542: 39850,
				38543: 26622,
				38544: 40018,
				38545: 26717,
				38546: 20134,
				38547: 20451,
				38548: 21448,
				38549: 25273,
				38550: 26411,
				38551: 27819,
				38552: 36804,
				38553: 20397,
				38554: 32365,
				38555: 40639,
				38556: 19975,
				38557: 24930,
				38558: 28288,
				38559: 28459,
				38560: 34067,
				38561: 21619,
				38562: 26410,
				38563: 39749,
				38564: 24051,
				38565: 31637,
				38566: 23724,
				38567: 23494,
				38568: 34588,
				38569: 28234,
				38570: 34001,
				38571: 31252,
				38572: 33032,
				38573: 22937,
				38574: 31885,
				38575: 27665,
				38576: 30496,
				38577: 21209,
				38578: 22818,
				38579: 28961,
				38580: 29279,
				38581: 30683,
				38582: 38695,
				38583: 40289,
				38584: 26891,
				38585: 23167,
				38586: 23064,
				38587: 20901,
				38588: 21517,
				38589: 21629,
				38590: 26126,
				38591: 30431,
				38592: 36855,
				38593: 37528,
				38594: 40180,
				38595: 23018,
				38596: 29277,
				38597: 28357,
				38598: 20813,
				38599: 26825,
				38600: 32191,
				38601: 32236,
				38602: 38754,
				38603: 40634,
				38604: 25720,
				38605: 27169,
				38606: 33538,
				38607: 22916,
				38608: 23391,
				38609: 27611,
				38610: 29467,
				38611: 30450,
				38612: 32178,
				38613: 32791,
				38614: 33945,
				38615: 20786,
				38616: 26408,
				38617: 40665,
				38618: 30446,
				38619: 26466,
				38620: 21247,
				38621: 39173,
				38622: 23588,
				38623: 25147,
				38624: 31870,
				38625: 36016,
				38626: 21839,
				38627: 24758,
				38628: 32011,
				38629: 38272,
				38630: 21249,
				38631: 20063,
				38632: 20918,
				38633: 22812,
				38634: 29242,
				38635: 32822,
				38636: 37326,
				38637: 24357,
				38638: 30690,
				38639: 21380,
				38640: 24441,
				38641: 32004,
				38642: 34220,
				38643: 35379,
				38644: 36493,
				38645: 38742,
				38646: 26611,
				38647: 34222,
				38648: 37971,
				38649: 24841,
				38650: 24840,
				38651: 27833,
				38652: 30290,
				38720: 35565,
				38721: 36664,
				38722: 21807,
				38723: 20305,
				38724: 20778,
				38725: 21191,
				38726: 21451,
				38727: 23461,
				38728: 24189,
				38729: 24736,
				38730: 24962,
				38731: 25558,
				38732: 26377,
				38733: 26586,
				38734: 28263,
				38735: 28044,
				38736: 29494,
				38737: 29495,
				38738: 30001,
				38739: 31056,
				38740: 35029,
				38741: 35480,
				38742: 36938,
				38743: 37009,
				38744: 37109,
				38745: 38596,
				38746: 34701,
				38747: 22805,
				38748: 20104,
				38749: 20313,
				38750: 19982,
				38751: 35465,
				38752: 36671,
				38753: 38928,
				38754: 20653,
				38755: 24188,
				38756: 22934,
				38757: 23481,
				38758: 24248,
				38759: 25562,
				38760: 25594,
				38761: 25793,
				38762: 26332,
				38763: 26954,
				38764: 27096,
				38765: 27915,
				38766: 28342,
				38767: 29076,
				38768: 29992,
				38769: 31407,
				38770: 32650,
				38771: 32768,
				38772: 33865,
				38773: 33993,
				38774: 35201,
				38775: 35617,
				38776: 36362,
				38777: 36965,
				38778: 38525,
				38779: 39178,
				38780: 24958,
				38781: 25233,
				38782: 27442,
				38784: 27779,
				38785: 28020,
				38786: 32716,
				38787: 32764,
				38788: 28096,
				38789: 32645,
				38790: 34746,
				38791: 35064,
				38792: 26469,
				38793: 33713,
				38794: 38972,
				38795: 38647,
				38796: 27931,
				38797: 32097,
				38798: 33853,
				38799: 37226,
				38800: 20081,
				38801: 21365,
				38802: 23888,
				38803: 27396,
				38804: 28651,
				38805: 34253,
				38806: 34349,
				38807: 35239,
				38808: 21033,
				38809: 21519,
				38810: 23653,
				38811: 26446,
				38812: 26792,
				38813: 29702,
				38814: 29827,
				38815: 30178,
				38816: 35023,
				38817: 35041,
				38818: 37324,
				38819: 38626,
				38820: 38520,
				38821: 24459,
				38822: 29575,
				38823: 31435,
				38824: 33870,
				38825: 25504,
				38826: 30053,
				38827: 21129,
				38828: 27969,
				38829: 28316,
				38830: 29705,
				38831: 30041,
				38832: 30827,
				38833: 31890,
				38834: 38534,
				38835: 31452,
				38836: 40845,
				38837: 20406,
				38838: 24942,
				38839: 26053,
				38840: 34396,
				38841: 20102,
				38842: 20142,
				38843: 20698,
				38844: 20001,
				38845: 20940,
				38846: 23534,
				38847: 26009,
				38848: 26753,
				38849: 28092,
				38850: 29471,
				38851: 30274,
				38852: 30637,
				38853: 31260,
				38854: 31975,
				38855: 33391,
				38856: 35538,
				38857: 36988,
				38858: 37327,
				38859: 38517,
				38860: 38936,
				38861: 21147,
				38862: 32209,
				38863: 20523,
				38864: 21400,
				38865: 26519,
				38866: 28107,
				38867: 29136,
				38868: 29747,
				38869: 33256,
				38870: 36650,
				38871: 38563,
				38872: 40023,
				38873: 40607,
				38874: 29792,
				38875: 22593,
				38876: 28057,
				38877: 32047,
				38878: 39006,
				38879: 20196,
				38880: 20278,
				38881: 20363,
				38882: 20919,
				38883: 21169,
				38884: 23994,
				38885: 24604,
				38886: 29618,
				38887: 31036,
				38888: 33491,
				38889: 37428,
				38890: 38583,
				38891: 38646,
				38892: 38666,
				38893: 40599,
				38894: 40802,
				38895: 26278,
				38896: 27508,
				38897: 21015,
				38898: 21155,
				38899: 28872,
				38900: 35010,
				38901: 24265,
				38902: 24651,
				38903: 24976,
				38904: 28451,
				38905: 29001,
				38906: 31806,
				38907: 32244,
				38908: 32879,
				38976: 34030,
				38977: 36899,
				38978: 37676,
				38979: 21570,
				38980: 39791,
				38981: 27347,
				38982: 28809,
				38983: 36034,
				38984: 36335,
				38985: 38706,
				38986: 21172,
				38987: 23105,
				38988: 24266,
				38989: 24324,
				38990: 26391,
				38991: 27004,
				38992: 27028,
				38993: 28010,
				38994: 28431,
				38995: 29282,
				38996: 29436,
				38997: 31725,
				38998: 32769,
				38999: 32894,
				39000: 34635,
				39001: 37070,
				39002: 20845,
				39003: 40595,
				39004: 31108,
				39005: 32907,
				39006: 37682,
				39007: 35542,
				39008: 20525,
				39009: 21644,
				39010: 35441,
				39011: 27498,
				39012: 36036,
				39013: 33031,
				39014: 24785,
				39015: 26528,
				39016: 40434,
				39017: 20121,
				39018: 20120,
				39019: 39952,
				39020: 35435,
				39021: 34241,
				39022: 34152,
				39023: 26880,
				39024: 28286,
				39025: 30871,
				39026: 33109,
				39071: 24332,
				39072: 19984,
				39073: 19989,
				39074: 20010,
				39075: 20017,
				39076: 20022,
				39077: 20028,
				39078: 20031,
				39079: 20034,
				39080: 20054,
				39081: 20056,
				39082: 20098,
				39083: 20101,
				39084: 35947,
				39085: 20106,
				39086: 33298,
				39087: 24333,
				39088: 20110,
				39089: 20126,
				39090: 20127,
				39091: 20128,
				39092: 20130,
				39093: 20144,
				39094: 20147,
				39095: 20150,
				39096: 20174,
				39097: 20173,
				39098: 20164,
				39099: 20166,
				39100: 20162,
				39101: 20183,
				39102: 20190,
				39103: 20205,
				39104: 20191,
				39105: 20215,
				39106: 20233,
				39107: 20314,
				39108: 20272,
				39109: 20315,
				39110: 20317,
				39111: 20311,
				39112: 20295,
				39113: 20342,
				39114: 20360,
				39115: 20367,
				39116: 20376,
				39117: 20347,
				39118: 20329,
				39119: 20336,
				39120: 20369,
				39121: 20335,
				39122: 20358,
				39123: 20374,
				39124: 20760,
				39125: 20436,
				39126: 20447,
				39127: 20430,
				39128: 20440,
				39129: 20443,
				39130: 20433,
				39131: 20442,
				39132: 20432,
				39133: 20452,
				39134: 20453,
				39135: 20506,
				39136: 20520,
				39137: 20500,
				39138: 20522,
				39139: 20517,
				39140: 20485,
				39141: 20252,
				39142: 20470,
				39143: 20513,
				39144: 20521,
				39145: 20524,
				39146: 20478,
				39147: 20463,
				39148: 20497,
				39149: 20486,
				39150: 20547,
				39151: 20551,
				39152: 26371,
				39153: 20565,
				39154: 20560,
				39155: 20552,
				39156: 20570,
				39157: 20566,
				39158: 20588,
				39159: 20600,
				39160: 20608,
				39161: 20634,
				39162: 20613,
				39163: 20660,
				39164: 20658,
				39232: 20681,
				39233: 20682,
				39234: 20659,
				39235: 20674,
				39236: 20694,
				39237: 20702,
				39238: 20709,
				39239: 20717,
				39240: 20707,
				39241: 20718,
				39242: 20729,
				39243: 20725,
				39244: 20745,
				39245: 20737,
				39246: 20738,
				39247: 20758,
				39248: 20757,
				39249: 20756,
				39250: 20762,
				39251: 20769,
				39252: 20794,
				39253: 20791,
				39254: 20796,
				39255: 20795,
				39256: 20799,
				39257: 20800,
				39258: 20818,
				39259: 20812,
				39260: 20820,
				39261: 20834,
				39262: 31480,
				39263: 20841,
				39264: 20842,
				39265: 20846,
				39266: 20864,
				39267: 20866,
				39268: 22232,
				39269: 20876,
				39270: 20873,
				39271: 20879,
				39272: 20881,
				39273: 20883,
				39274: 20885,
				39275: 20886,
				39276: 20900,
				39277: 20902,
				39278: 20898,
				39279: 20905,
				39280: 20906,
				39281: 20907,
				39282: 20915,
				39283: 20913,
				39284: 20914,
				39285: 20912,
				39286: 20917,
				39287: 20925,
				39288: 20933,
				39289: 20937,
				39290: 20955,
				39291: 20960,
				39292: 34389,
				39293: 20969,
				39294: 20973,
				39296: 20976,
				39297: 20981,
				39298: 20990,
				39299: 20996,
				39300: 21003,
				39301: 21012,
				39302: 21006,
				39303: 21031,
				39304: 21034,
				39305: 21038,
				39306: 21043,
				39307: 21049,
				39308: 21071,
				39309: 21060,
				39310: 21067,
				39311: 21068,
				39312: 21086,
				39313: 21076,
				39314: 21098,
				39315: 21108,
				39316: 21097,
				39317: 21107,
				39318: 21119,
				39319: 21117,
				39320: 21133,
				39321: 21140,
				39322: 21138,
				39323: 21105,
				39324: 21128,
				39325: 21137,
				39326: 36776,
				39327: 36775,
				39328: 21164,
				39329: 21165,
				39330: 21180,
				39331: 21173,
				39332: 21185,
				39333: 21197,
				39334: 21207,
				39335: 21214,
				39336: 21219,
				39337: 21222,
				39338: 39149,
				39339: 21216,
				39340: 21235,
				39341: 21237,
				39342: 21240,
				39343: 21241,
				39344: 21254,
				39345: 21256,
				39346: 30008,
				39347: 21261,
				39348: 21264,
				39349: 21263,
				39350: 21269,
				39351: 21274,
				39352: 21283,
				39353: 21295,
				39354: 21297,
				39355: 21299,
				39356: 21304,
				39357: 21312,
				39358: 21318,
				39359: 21317,
				39360: 19991,
				39361: 21321,
				39362: 21325,
				39363: 20950,
				39364: 21342,
				39365: 21353,
				39366: 21358,
				39367: 22808,
				39368: 21371,
				39369: 21367,
				39370: 21378,
				39371: 21398,
				39372: 21408,
				39373: 21414,
				39374: 21413,
				39375: 21422,
				39376: 21424,
				39377: 21430,
				39378: 21443,
				39379: 31762,
				39380: 38617,
				39381: 21471,
				39382: 26364,
				39383: 29166,
				39384: 21486,
				39385: 21480,
				39386: 21485,
				39387: 21498,
				39388: 21505,
				39389: 21565,
				39390: 21568,
				39391: 21548,
				39392: 21549,
				39393: 21564,
				39394: 21550,
				39395: 21558,
				39396: 21545,
				39397: 21533,
				39398: 21582,
				39399: 21647,
				39400: 21621,
				39401: 21646,
				39402: 21599,
				39403: 21617,
				39404: 21623,
				39405: 21616,
				39406: 21650,
				39407: 21627,
				39408: 21632,
				39409: 21622,
				39410: 21636,
				39411: 21648,
				39412: 21638,
				39413: 21703,
				39414: 21666,
				39415: 21688,
				39416: 21669,
				39417: 21676,
				39418: 21700,
				39419: 21704,
				39420: 21672,
				39488: 21675,
				39489: 21698,
				39490: 21668,
				39491: 21694,
				39492: 21692,
				39493: 21720,
				39494: 21733,
				39495: 21734,
				39496: 21775,
				39497: 21780,
				39498: 21757,
				39499: 21742,
				39500: 21741,
				39501: 21754,
				39502: 21730,
				39503: 21817,
				39504: 21824,
				39505: 21859,
				39506: 21836,
				39507: 21806,
				39508: 21852,
				39509: 21829,
				39510: 21846,
				39511: 21847,
				39512: 21816,
				39513: 21811,
				39514: 21853,
				39515: 21913,
				39516: 21888,
				39517: 21679,
				39518: 21898,
				39519: 21919,
				39520: 21883,
				39521: 21886,
				39522: 21912,
				39523: 21918,
				39524: 21934,
				39525: 21884,
				39526: 21891,
				39527: 21929,
				39528: 21895,
				39529: 21928,
				39530: 21978,
				39531: 21957,
				39532: 21983,
				39533: 21956,
				39534: 21980,
				39535: 21988,
				39536: 21972,
				39537: 22036,
				39538: 22007,
				39539: 22038,
				39540: 22014,
				39541: 22013,
				39542: 22043,
				39543: 22009,
				39544: 22094,
				39545: 22096,
				39546: 29151,
				39547: 22068,
				39548: 22070,
				39549: 22066,
				39550: 22072,
				39552: 22123,
				39553: 22116,
				39554: 22063,
				39555: 22124,
				39556: 22122,
				39557: 22150,
				39558: 22144,
				39559: 22154,
				39560: 22176,
				39561: 22164,
				39562: 22159,
				39563: 22181,
				39564: 22190,
				39565: 22198,
				39566: 22196,
				39567: 22210,
				39568: 22204,
				39569: 22209,
				39570: 22211,
				39571: 22208,
				39572: 22216,
				39573: 22222,
				39574: 22225,
				39575: 22227,
				39576: 22231,
				39577: 22254,
				39578: 22265,
				39579: 22272,
				39580: 22271,
				39581: 22276,
				39582: 22281,
				39583: 22280,
				39584: 22283,
				39585: 22285,
				39586: 22291,
				39587: 22296,
				39588: 22294,
				39589: 21959,
				39590: 22300,
				39591: 22310,
				39592: 22327,
				39593: 22328,
				39594: 22350,
				39595: 22331,
				39596: 22336,
				39597: 22351,
				39598: 22377,
				39599: 22464,
				39600: 22408,
				39601: 22369,
				39602: 22399,
				39603: 22409,
				39604: 22419,
				39605: 22432,
				39606: 22451,
				39607: 22436,
				39608: 22442,
				39609: 22448,
				39610: 22467,
				39611: 22470,
				39612: 22484,
				39613: 22482,
				39614: 22483,
				39615: 22538,
				39616: 22486,
				39617: 22499,
				39618: 22539,
				39619: 22553,
				39620: 22557,
				39621: 22642,
				39622: 22561,
				39623: 22626,
				39624: 22603,
				39625: 22640,
				39626: 27584,
				39627: 22610,
				39628: 22589,
				39629: 22649,
				39630: 22661,
				39631: 22713,
				39632: 22687,
				39633: 22699,
				39634: 22714,
				39635: 22750,
				39636: 22715,
				39637: 22712,
				39638: 22702,
				39639: 22725,
				39640: 22739,
				39641: 22737,
				39642: 22743,
				39643: 22745,
				39644: 22744,
				39645: 22757,
				39646: 22748,
				39647: 22756,
				39648: 22751,
				39649: 22767,
				39650: 22778,
				39651: 22777,
				39652: 22779,
				39653: 22780,
				39654: 22781,
				39655: 22786,
				39656: 22794,
				39657: 22800,
				39658: 22811,
				39659: 26790,
				39660: 22821,
				39661: 22828,
				39662: 22829,
				39663: 22834,
				39664: 22840,
				39665: 22846,
				39666: 31442,
				39667: 22869,
				39668: 22864,
				39669: 22862,
				39670: 22874,
				39671: 22872,
				39672: 22882,
				39673: 22880,
				39674: 22887,
				39675: 22892,
				39676: 22889,
				39744: 22904,
				39745: 22913,
				39746: 22941,
				39747: 20318,
				39748: 20395,
				39749: 22947,
				39750: 22962,
				39751: 22982,
				39752: 23016,
				39753: 23004,
				39754: 22925,
				39755: 23001,
				39756: 23002,
				39757: 23077,
				39758: 23071,
				39759: 23057,
				39760: 23068,
				39761: 23049,
				39762: 23066,
				39763: 23104,
				39764: 23148,
				39765: 23113,
				39766: 23093,
				39767: 23094,
				39768: 23138,
				39769: 23146,
				39770: 23194,
				39771: 23228,
				39772: 23230,
				39773: 23243,
				39774: 23234,
				39775: 23229,
				39776: 23267,
				39777: 23255,
				39778: 23270,
				39779: 23273,
				39780: 23254,
				39781: 23290,
				39782: 23291,
				39783: 23308,
				39784: 23307,
				39785: 23318,
				39786: 23346,
				39787: 23248,
				39788: 23338,
				39789: 23350,
				39790: 23358,
				39791: 23363,
				39792: 23365,
				39793: 23360,
				39794: 23377,
				39795: 23381,
				39796: 23386,
				39797: 23387,
				39798: 23397,
				39799: 23401,
				39800: 23408,
				39801: 23411,
				39802: 23413,
				39803: 23416,
				39804: 25992,
				39805: 23418,
				39806: 23424,
				39808: 23427,
				39809: 23462,
				39810: 23480,
				39811: 23491,
				39812: 23495,
				39813: 23497,
				39814: 23508,
				39815: 23504,
				39816: 23524,
				39817: 23526,
				39818: 23522,
				39819: 23518,
				39820: 23525,
				39821: 23531,
				39822: 23536,
				39823: 23542,
				39824: 23539,
				39825: 23557,
				39826: 23559,
				39827: 23560,
				39828: 23565,
				39829: 23571,
				39830: 23584,
				39831: 23586,
				39832: 23592,
				39833: 23608,
				39834: 23609,
				39835: 23617,
				39836: 23622,
				39837: 23630,
				39838: 23635,
				39839: 23632,
				39840: 23631,
				39841: 23409,
				39842: 23660,
				39843: 23662,
				39844: 20066,
				39845: 23670,
				39846: 23673,
				39847: 23692,
				39848: 23697,
				39849: 23700,
				39850: 22939,
				39851: 23723,
				39852: 23739,
				39853: 23734,
				39854: 23740,
				39855: 23735,
				39856: 23749,
				39857: 23742,
				39858: 23751,
				39859: 23769,
				39860: 23785,
				39861: 23805,
				39862: 23802,
				39863: 23789,
				39864: 23948,
				39865: 23786,
				39866: 23819,
				39867: 23829,
				39868: 23831,
				39869: 23900,
				39870: 23839,
				39871: 23835,
				39872: 23825,
				39873: 23828,
				39874: 23842,
				39875: 23834,
				39876: 23833,
				39877: 23832,
				39878: 23884,
				39879: 23890,
				39880: 23886,
				39881: 23883,
				39882: 23916,
				39883: 23923,
				39884: 23926,
				39885: 23943,
				39886: 23940,
				39887: 23938,
				39888: 23970,
				39889: 23965,
				39890: 23980,
				39891: 23982,
				39892: 23997,
				39893: 23952,
				39894: 23991,
				39895: 23996,
				39896: 24009,
				39897: 24013,
				39898: 24019,
				39899: 24018,
				39900: 24022,
				39901: 24027,
				39902: 24043,
				39903: 24050,
				39904: 24053,
				39905: 24075,
				39906: 24090,
				39907: 24089,
				39908: 24081,
				39909: 24091,
				39910: 24118,
				39911: 24119,
				39912: 24132,
				39913: 24131,
				39914: 24128,
				39915: 24142,
				39916: 24151,
				39917: 24148,
				39918: 24159,
				39919: 24162,
				39920: 24164,
				39921: 24135,
				39922: 24181,
				39923: 24182,
				39924: 24186,
				39925: 40636,
				39926: 24191,
				39927: 24224,
				39928: 24257,
				39929: 24258,
				39930: 24264,
				39931: 24272,
				39932: 24271,
				40000: 24278,
				40001: 24291,
				40002: 24285,
				40003: 24282,
				40004: 24283,
				40005: 24290,
				40006: 24289,
				40007: 24296,
				40008: 24297,
				40009: 24300,
				40010: 24305,
				40011: 24307,
				40012: 24304,
				40013: 24308,
				40014: 24312,
				40015: 24318,
				40016: 24323,
				40017: 24329,
				40018: 24413,
				40019: 24412,
				40020: 24331,
				40021: 24337,
				40022: 24342,
				40023: 24361,
				40024: 24365,
				40025: 24376,
				40026: 24385,
				40027: 24392,
				40028: 24396,
				40029: 24398,
				40030: 24367,
				40031: 24401,
				40032: 24406,
				40033: 24407,
				40034: 24409,
				40035: 24417,
				40036: 24429,
				40037: 24435,
				40038: 24439,
				40039: 24451,
				40040: 24450,
				40041: 24447,
				40042: 24458,
				40043: 24456,
				40044: 24465,
				40045: 24455,
				40046: 24478,
				40047: 24473,
				40048: 24472,
				40049: 24480,
				40050: 24488,
				40051: 24493,
				40052: 24508,
				40053: 24534,
				40054: 24571,
				40055: 24548,
				40056: 24568,
				40057: 24561,
				40058: 24541,
				40059: 24755,
				40060: 24575,
				40061: 24609,
				40062: 24672,
				40064: 24601,
				40065: 24592,
				40066: 24617,
				40067: 24590,
				40068: 24625,
				40069: 24603,
				40070: 24597,
				40071: 24619,
				40072: 24614,
				40073: 24591,
				40074: 24634,
				40075: 24666,
				40076: 24641,
				40077: 24682,
				40078: 24695,
				40079: 24671,
				40080: 24650,
				40081: 24646,
				40082: 24653,
				40083: 24675,
				40084: 24643,
				40085: 24676,
				40086: 24642,
				40087: 24684,
				40088: 24683,
				40089: 24665,
				40090: 24705,
				40091: 24717,
				40092: 24807,
				40093: 24707,
				40094: 24730,
				40095: 24708,
				40096: 24731,
				40097: 24726,
				40098: 24727,
				40099: 24722,
				40100: 24743,
				40101: 24715,
				40102: 24801,
				40103: 24760,
				40104: 24800,
				40105: 24787,
				40106: 24756,
				40107: 24560,
				40108: 24765,
				40109: 24774,
				40110: 24757,
				40111: 24792,
				40112: 24909,
				40113: 24853,
				40114: 24838,
				40115: 24822,
				40116: 24823,
				40117: 24832,
				40118: 24820,
				40119: 24826,
				40120: 24835,
				40121: 24865,
				40122: 24827,
				40123: 24817,
				40124: 24845,
				40125: 24846,
				40126: 24903,
				40127: 24894,
				40128: 24872,
				40129: 24871,
				40130: 24906,
				40131: 24895,
				40132: 24892,
				40133: 24876,
				40134: 24884,
				40135: 24893,
				40136: 24898,
				40137: 24900,
				40138: 24947,
				40139: 24951,
				40140: 24920,
				40141: 24921,
				40142: 24922,
				40143: 24939,
				40144: 24948,
				40145: 24943,
				40146: 24933,
				40147: 24945,
				40148: 24927,
				40149: 24925,
				40150: 24915,
				40151: 24949,
				40152: 24985,
				40153: 24982,
				40154: 24967,
				40155: 25004,
				40156: 24980,
				40157: 24986,
				40158: 24970,
				40159: 24977,
				40160: 25003,
				40161: 25006,
				40162: 25036,
				40163: 25034,
				40164: 25033,
				40165: 25079,
				40166: 25032,
				40167: 25027,
				40168: 25030,
				40169: 25018,
				40170: 25035,
				40171: 32633,
				40172: 25037,
				40173: 25062,
				40174: 25059,
				40175: 25078,
				40176: 25082,
				40177: 25076,
				40178: 25087,
				40179: 25085,
				40180: 25084,
				40181: 25086,
				40182: 25088,
				40183: 25096,
				40184: 25097,
				40185: 25101,
				40186: 25100,
				40187: 25108,
				40188: 25115,
				40256: 25118,
				40257: 25121,
				40258: 25130,
				40259: 25134,
				40260: 25136,
				40261: 25138,
				40262: 25139,
				40263: 25153,
				40264: 25166,
				40265: 25182,
				40266: 25187,
				40267: 25179,
				40268: 25184,
				40269: 25192,
				40270: 25212,
				40271: 25218,
				40272: 25225,
				40273: 25214,
				40274: 25234,
				40275: 25235,
				40276: 25238,
				40277: 25300,
				40278: 25219,
				40279: 25236,
				40280: 25303,
				40281: 25297,
				40282: 25275,
				40283: 25295,
				40284: 25343,
				40285: 25286,
				40286: 25812,
				40287: 25288,
				40288: 25308,
				40289: 25292,
				40290: 25290,
				40291: 25282,
				40292: 25287,
				40293: 25243,
				40294: 25289,
				40295: 25356,
				40296: 25326,
				40297: 25329,
				40298: 25383,
				40299: 25346,
				40300: 25352,
				40301: 25327,
				40302: 25333,
				40303: 25424,
				40304: 25406,
				40305: 25421,
				40306: 25628,
				40307: 25423,
				40308: 25494,
				40309: 25486,
				40310: 25472,
				40311: 25515,
				40312: 25462,
				40313: 25507,
				40314: 25487,
				40315: 25481,
				40316: 25503,
				40317: 25525,
				40318: 25451,
				40320: 25449,
				40321: 25534,
				40322: 25577,
				40323: 25536,
				40324: 25542,
				40325: 25571,
				40326: 25545,
				40327: 25554,
				40328: 25590,
				40329: 25540,
				40330: 25622,
				40331: 25652,
				40332: 25606,
				40333: 25619,
				40334: 25638,
				40335: 25654,
				40336: 25885,
				40337: 25623,
				40338: 25640,
				40339: 25615,
				40340: 25703,
				40341: 25711,
				40342: 25718,
				40343: 25678,
				40344: 25898,
				40345: 25749,
				40346: 25747,
				40347: 25765,
				40348: 25769,
				40349: 25736,
				40350: 25788,
				40351: 25818,
				40352: 25810,
				40353: 25797,
				40354: 25799,
				40355: 25787,
				40356: 25816,
				40357: 25794,
				40358: 25841,
				40359: 25831,
				40360: 33289,
				40361: 25824,
				40362: 25825,
				40363: 25260,
				40364: 25827,
				40365: 25839,
				40366: 25900,
				40367: 25846,
				40368: 25844,
				40369: 25842,
				40370: 25850,
				40371: 25856,
				40372: 25853,
				40373: 25880,
				40374: 25884,
				40375: 25861,
				40376: 25892,
				40377: 25891,
				40378: 25899,
				40379: 25908,
				40380: 25909,
				40381: 25911,
				40382: 25910,
				40383: 25912,
				40384: 30027,
				40385: 25928,
				40386: 25942,
				40387: 25941,
				40388: 25933,
				40389: 25944,
				40390: 25950,
				40391: 25949,
				40392: 25970,
				40393: 25976,
				40394: 25986,
				40395: 25987,
				40396: 35722,
				40397: 26011,
				40398: 26015,
				40399: 26027,
				40400: 26039,
				40401: 26051,
				40402: 26054,
				40403: 26049,
				40404: 26052,
				40405: 26060,
				40406: 26066,
				40407: 26075,
				40408: 26073,
				40409: 26080,
				40410: 26081,
				40411: 26097,
				40412: 26482,
				40413: 26122,
				40414: 26115,
				40415: 26107,
				40416: 26483,
				40417: 26165,
				40418: 26166,
				40419: 26164,
				40420: 26140,
				40421: 26191,
				40422: 26180,
				40423: 26185,
				40424: 26177,
				40425: 26206,
				40426: 26205,
				40427: 26212,
				40428: 26215,
				40429: 26216,
				40430: 26207,
				40431: 26210,
				40432: 26224,
				40433: 26243,
				40434: 26248,
				40435: 26254,
				40436: 26249,
				40437: 26244,
				40438: 26264,
				40439: 26269,
				40440: 26305,
				40441: 26297,
				40442: 26313,
				40443: 26302,
				40444: 26300,
				40512: 26308,
				40513: 26296,
				40514: 26326,
				40515: 26330,
				40516: 26336,
				40517: 26175,
				40518: 26342,
				40519: 26345,
				40520: 26352,
				40521: 26357,
				40522: 26359,
				40523: 26383,
				40524: 26390,
				40525: 26398,
				40526: 26406,
				40527: 26407,
				40528: 38712,
				40529: 26414,
				40530: 26431,
				40531: 26422,
				40532: 26433,
				40533: 26424,
				40534: 26423,
				40535: 26438,
				40536: 26462,
				40537: 26464,
				40538: 26457,
				40539: 26467,
				40540: 26468,
				40541: 26505,
				40542: 26480,
				40543: 26537,
				40544: 26492,
				40545: 26474,
				40546: 26508,
				40547: 26507,
				40548: 26534,
				40549: 26529,
				40550: 26501,
				40551: 26551,
				40552: 26607,
				40553: 26548,
				40554: 26604,
				40555: 26547,
				40556: 26601,
				40557: 26552,
				40558: 26596,
				40559: 26590,
				40560: 26589,
				40561: 26594,
				40562: 26606,
				40563: 26553,
				40564: 26574,
				40565: 26566,
				40566: 26599,
				40567: 27292,
				40568: 26654,
				40569: 26694,
				40570: 26665,
				40571: 26688,
				40572: 26701,
				40573: 26674,
				40574: 26702,
				40576: 26803,
				40577: 26667,
				40578: 26713,
				40579: 26723,
				40580: 26743,
				40581: 26751,
				40582: 26783,
				40583: 26767,
				40584: 26797,
				40585: 26772,
				40586: 26781,
				40587: 26779,
				40588: 26755,
				40589: 27310,
				40590: 26809,
				40591: 26740,
				40592: 26805,
				40593: 26784,
				40594: 26810,
				40595: 26895,
				40596: 26765,
				40597: 26750,
				40598: 26881,
				40599: 26826,
				40600: 26888,
				40601: 26840,
				40602: 26914,
				40603: 26918,
				40604: 26849,
				40605: 26892,
				40606: 26829,
				40607: 26836,
				40608: 26855,
				40609: 26837,
				40610: 26934,
				40611: 26898,
				40612: 26884,
				40613: 26839,
				40614: 26851,
				40615: 26917,
				40616: 26873,
				40617: 26848,
				40618: 26863,
				40619: 26920,
				40620: 26922,
				40621: 26906,
				40622: 26915,
				40623: 26913,
				40624: 26822,
				40625: 27001,
				40626: 26999,
				40627: 26972,
				40628: 27e3,
				40629: 26987,
				40630: 26964,
				40631: 27006,
				40632: 26990,
				40633: 26937,
				40634: 26996,
				40635: 26941,
				40636: 26969,
				40637: 26928,
				40638: 26977,
				40639: 26974,
				40640: 26973,
				40641: 27009,
				40642: 26986,
				40643: 27058,
				40644: 27054,
				40645: 27088,
				40646: 27071,
				40647: 27073,
				40648: 27091,
				40649: 27070,
				40650: 27086,
				40651: 23528,
				40652: 27082,
				40653: 27101,
				40654: 27067,
				40655: 27075,
				40656: 27047,
				40657: 27182,
				40658: 27025,
				40659: 27040,
				40660: 27036,
				40661: 27029,
				40662: 27060,
				40663: 27102,
				40664: 27112,
				40665: 27138,
				40666: 27163,
				40667: 27135,
				40668: 27402,
				40669: 27129,
				40670: 27122,
				40671: 27111,
				40672: 27141,
				40673: 27057,
				40674: 27166,
				40675: 27117,
				40676: 27156,
				40677: 27115,
				40678: 27146,
				40679: 27154,
				40680: 27329,
				40681: 27171,
				40682: 27155,
				40683: 27204,
				40684: 27148,
				40685: 27250,
				40686: 27190,
				40687: 27256,
				40688: 27207,
				40689: 27234,
				40690: 27225,
				40691: 27238,
				40692: 27208,
				40693: 27192,
				40694: 27170,
				40695: 27280,
				40696: 27277,
				40697: 27296,
				40698: 27268,
				40699: 27298,
				40700: 27299,
				40768: 27287,
				40769: 34327,
				40770: 27323,
				40771: 27331,
				40772: 27330,
				40773: 27320,
				40774: 27315,
				40775: 27308,
				40776: 27358,
				40777: 27345,
				40778: 27359,
				40779: 27306,
				40780: 27354,
				40781: 27370,
				40782: 27387,
				40783: 27397,
				40784: 34326,
				40785: 27386,
				40786: 27410,
				40787: 27414,
				40788: 39729,
				40789: 27423,
				40790: 27448,
				40791: 27447,
				40792: 30428,
				40793: 27449,
				40794: 39150,
				40795: 27463,
				40796: 27459,
				40797: 27465,
				40798: 27472,
				40799: 27481,
				40800: 27476,
				40801: 27483,
				40802: 27487,
				40803: 27489,
				40804: 27512,
				40805: 27513,
				40806: 27519,
				40807: 27520,
				40808: 27524,
				40809: 27523,
				40810: 27533,
				40811: 27544,
				40812: 27541,
				40813: 27550,
				40814: 27556,
				40815: 27562,
				40816: 27563,
				40817: 27567,
				40818: 27570,
				40819: 27569,
				40820: 27571,
				40821: 27575,
				40822: 27580,
				40823: 27590,
				40824: 27595,
				40825: 27603,
				40826: 27615,
				40827: 27628,
				40828: 27627,
				40829: 27635,
				40830: 27631,
				40832: 40638,
				40833: 27656,
				40834: 27667,
				40835: 27668,
				40836: 27675,
				40837: 27684,
				40838: 27683,
				40839: 27742,
				40840: 27733,
				40841: 27746,
				40842: 27754,
				40843: 27778,
				40844: 27789,
				40845: 27802,
				40846: 27777,
				40847: 27803,
				40848: 27774,
				40849: 27752,
				40850: 27763,
				40851: 27794,
				40852: 27792,
				40853: 27844,
				40854: 27889,
				40855: 27859,
				40856: 27837,
				40857: 27863,
				40858: 27845,
				40859: 27869,
				40860: 27822,
				40861: 27825,
				40862: 27838,
				40863: 27834,
				40864: 27867,
				40865: 27887,
				40866: 27865,
				40867: 27882,
				40868: 27935,
				40869: 34893,
				40870: 27958,
				40871: 27947,
				40872: 27965,
				40873: 27960,
				40874: 27929,
				40875: 27957,
				40876: 27955,
				40877: 27922,
				40878: 27916,
				40879: 28003,
				40880: 28051,
				40881: 28004,
				40882: 27994,
				40883: 28025,
				40884: 27993,
				40885: 28046,
				40886: 28053,
				40887: 28644,
				40888: 28037,
				40889: 28153,
				40890: 28181,
				40891: 28170,
				40892: 28085,
				40893: 28103,
				40894: 28134,
				40895: 28088,
				40896: 28102,
				40897: 28140,
				40898: 28126,
				40899: 28108,
				40900: 28136,
				40901: 28114,
				40902: 28101,
				40903: 28154,
				40904: 28121,
				40905: 28132,
				40906: 28117,
				40907: 28138,
				40908: 28142,
				40909: 28205,
				40910: 28270,
				40911: 28206,
				40912: 28185,
				40913: 28274,
				40914: 28255,
				40915: 28222,
				40916: 28195,
				40917: 28267,
				40918: 28203,
				40919: 28278,
				40920: 28237,
				40921: 28191,
				40922: 28227,
				40923: 28218,
				40924: 28238,
				40925: 28196,
				40926: 28415,
				40927: 28189,
				40928: 28216,
				40929: 28290,
				40930: 28330,
				40931: 28312,
				40932: 28361,
				40933: 28343,
				40934: 28371,
				40935: 28349,
				40936: 28335,
				40937: 28356,
				40938: 28338,
				40939: 28372,
				40940: 28373,
				40941: 28303,
				40942: 28325,
				40943: 28354,
				40944: 28319,
				40945: 28481,
				40946: 28433,
				40947: 28748,
				40948: 28396,
				40949: 28408,
				40950: 28414,
				40951: 28479,
				40952: 28402,
				40953: 28465,
				40954: 28399,
				40955: 28466,
				40956: 28364,
				161: 65377,
				162: 65378,
				163: 65379,
				164: 65380,
				165: 65381,
				166: 65382,
				167: 65383,
				168: 65384,
				169: 65385,
				170: 65386,
				171: 65387,
				172: 65388,
				173: 65389,
				174: 65390,
				175: 65391,
				176: 65392,
				177: 65393,
				178: 65394,
				179: 65395,
				180: 65396,
				181: 65397,
				182: 65398,
				183: 65399,
				184: 65400,
				185: 65401,
				186: 65402,
				187: 65403,
				188: 65404,
				189: 65405,
				190: 65406,
				191: 65407,
				192: 65408,
				193: 65409,
				194: 65410,
				195: 65411,
				196: 65412,
				197: 65413,
				198: 65414,
				199: 65415,
				200: 65416,
				201: 65417,
				202: 65418,
				203: 65419,
				204: 65420,
				205: 65421,
				206: 65422,
				207: 65423,
				208: 65424,
				209: 65425,
				210: 65426,
				211: 65427,
				212: 65428,
				213: 65429,
				214: 65430,
				215: 65431,
				216: 65432,
				217: 65433,
				218: 65434,
				219: 65435,
				220: 65436,
				221: 65437,
				222: 65438,
				223: 65439,
				57408: 28478,
				57409: 28435,
				57410: 28407,
				57411: 28550,
				57412: 28538,
				57413: 28536,
				57414: 28545,
				57415: 28544,
				57416: 28527,
				57417: 28507,
				57418: 28659,
				57419: 28525,
				57420: 28546,
				57421: 28540,
				57422: 28504,
				57423: 28558,
				57424: 28561,
				57425: 28610,
				57426: 28518,
				57427: 28595,
				57428: 28579,
				57429: 28577,
				57430: 28580,
				57431: 28601,
				57432: 28614,
				57433: 28586,
				57434: 28639,
				57435: 28629,
				57436: 28652,
				57437: 28628,
				57438: 28632,
				57439: 28657,
				57440: 28654,
				57441: 28635,
				57442: 28681,
				57443: 28683,
				57444: 28666,
				57445: 28689,
				57446: 28673,
				57447: 28687,
				57448: 28670,
				57449: 28699,
				57450: 28698,
				57451: 28532,
				57452: 28701,
				57453: 28696,
				57454: 28703,
				57455: 28720,
				57456: 28734,
				57457: 28722,
				57458: 28753,
				57459: 28771,
				57460: 28825,
				57461: 28818,
				57462: 28847,
				57463: 28913,
				57464: 28844,
				57465: 28856,
				57466: 28851,
				57467: 28846,
				57468: 28895,
				57469: 28875,
				57470: 28893,
				57472: 28889,
				57473: 28937,
				57474: 28925,
				57475: 28956,
				57476: 28953,
				57477: 29029,
				57478: 29013,
				57479: 29064,
				57480: 29030,
				57481: 29026,
				57482: 29004,
				57483: 29014,
				57484: 29036,
				57485: 29071,
				57486: 29179,
				57487: 29060,
				57488: 29077,
				57489: 29096,
				57490: 29100,
				57491: 29143,
				57492: 29113,
				57493: 29118,
				57494: 29138,
				57495: 29129,
				57496: 29140,
				57497: 29134,
				57498: 29152,
				57499: 29164,
				57500: 29159,
				57501: 29173,
				57502: 29180,
				57503: 29177,
				57504: 29183,
				57505: 29197,
				57506: 29200,
				57507: 29211,
				57508: 29224,
				57509: 29229,
				57510: 29228,
				57511: 29232,
				57512: 29234,
				57513: 29243,
				57514: 29244,
				57515: 29247,
				57516: 29248,
				57517: 29254,
				57518: 29259,
				57519: 29272,
				57520: 29300,
				57521: 29310,
				57522: 29314,
				57523: 29313,
				57524: 29319,
				57525: 29330,
				57526: 29334,
				57527: 29346,
				57528: 29351,
				57529: 29369,
				57530: 29362,
				57531: 29379,
				57532: 29382,
				57533: 29380,
				57534: 29390,
				57535: 29394,
				57536: 29410,
				57537: 29408,
				57538: 29409,
				57539: 29433,
				57540: 29431,
				57541: 20495,
				57542: 29463,
				57543: 29450,
				57544: 29468,
				57545: 29462,
				57546: 29469,
				57547: 29492,
				57548: 29487,
				57549: 29481,
				57550: 29477,
				57551: 29502,
				57552: 29518,
				57553: 29519,
				57554: 40664,
				57555: 29527,
				57556: 29546,
				57557: 29544,
				57558: 29552,
				57559: 29560,
				57560: 29557,
				57561: 29563,
				57562: 29562,
				57563: 29640,
				57564: 29619,
				57565: 29646,
				57566: 29627,
				57567: 29632,
				57568: 29669,
				57569: 29678,
				57570: 29662,
				57571: 29858,
				57572: 29701,
				57573: 29807,
				57574: 29733,
				57575: 29688,
				57576: 29746,
				57577: 29754,
				57578: 29781,
				57579: 29759,
				57580: 29791,
				57581: 29785,
				57582: 29761,
				57583: 29788,
				57584: 29801,
				57585: 29808,
				57586: 29795,
				57587: 29802,
				57588: 29814,
				57589: 29822,
				57590: 29835,
				57591: 29854,
				57592: 29863,
				57593: 29898,
				57594: 29903,
				57595: 29908,
				57596: 29681,
				57664: 29920,
				57665: 29923,
				57666: 29927,
				57667: 29929,
				57668: 29934,
				57669: 29938,
				57670: 29936,
				57671: 29937,
				57672: 29944,
				57673: 29943,
				57674: 29956,
				57675: 29955,
				57676: 29957,
				57677: 29964,
				57678: 29966,
				57679: 29965,
				57680: 29973,
				57681: 29971,
				57682: 29982,
				57683: 29990,
				57684: 29996,
				57685: 30012,
				57686: 30020,
				57687: 30029,
				57688: 30026,
				57689: 30025,
				57690: 30043,
				57691: 30022,
				57692: 30042,
				57693: 30057,
				57694: 30052,
				57695: 30055,
				57696: 30059,
				57697: 30061,
				57698: 30072,
				57699: 30070,
				57700: 30086,
				57701: 30087,
				57702: 30068,
				57703: 30090,
				57704: 30089,
				57705: 30082,
				57706: 30100,
				57707: 30106,
				57708: 30109,
				57709: 30117,
				57710: 30115,
				57711: 30146,
				57712: 30131,
				57713: 30147,
				57714: 30133,
				57715: 30141,
				57716: 30136,
				57717: 30140,
				57718: 30129,
				57719: 30157,
				57720: 30154,
				57721: 30162,
				57722: 30169,
				57723: 30179,
				57724: 30174,
				57725: 30206,
				57726: 30207,
				57728: 30204,
				57729: 30209,
				57730: 30192,
				57731: 30202,
				57732: 30194,
				57733: 30195,
				57734: 30219,
				57735: 30221,
				57736: 30217,
				57737: 30239,
				57738: 30247,
				57739: 30240,
				57740: 30241,
				57741: 30242,
				57742: 30244,
				57743: 30260,
				57744: 30256,
				57745: 30267,
				57746: 30279,
				57747: 30280,
				57748: 30278,
				57749: 30300,
				57750: 30296,
				57751: 30305,
				57752: 30306,
				57753: 30312,
				57754: 30313,
				57755: 30314,
				57756: 30311,
				57757: 30316,
				57758: 30320,
				57759: 30322,
				57760: 30326,
				57761: 30328,
				57762: 30332,
				57763: 30336,
				57764: 30339,
				57765: 30344,
				57766: 30347,
				57767: 30350,
				57768: 30358,
				57769: 30355,
				57770: 30361,
				57771: 30362,
				57772: 30384,
				57773: 30388,
				57774: 30392,
				57775: 30393,
				57776: 30394,
				57777: 30402,
				57778: 30413,
				57779: 30422,
				57780: 30418,
				57781: 30430,
				57782: 30433,
				57783: 30437,
				57784: 30439,
				57785: 30442,
				57786: 34351,
				57787: 30459,
				57788: 30472,
				57789: 30471,
				57790: 30468,
				57791: 30505,
				57792: 30500,
				57793: 30494,
				57794: 30501,
				57795: 30502,
				57796: 30491,
				57797: 30519,
				57798: 30520,
				57799: 30535,
				57800: 30554,
				57801: 30568,
				57802: 30571,
				57803: 30555,
				57804: 30565,
				57805: 30591,
				57806: 30590,
				57807: 30585,
				57808: 30606,
				57809: 30603,
				57810: 30609,
				57811: 30624,
				57812: 30622,
				57813: 30640,
				57814: 30646,
				57815: 30649,
				57816: 30655,
				57817: 30652,
				57818: 30653,
				57819: 30651,
				57820: 30663,
				57821: 30669,
				57822: 30679,
				57823: 30682,
				57824: 30684,
				57825: 30691,
				57826: 30702,
				57827: 30716,
				57828: 30732,
				57829: 30738,
				57830: 31014,
				57831: 30752,
				57832: 31018,
				57833: 30789,
				57834: 30862,
				57835: 30836,
				57836: 30854,
				57837: 30844,
				57838: 30874,
				57839: 30860,
				57840: 30883,
				57841: 30901,
				57842: 30890,
				57843: 30895,
				57844: 30929,
				57845: 30918,
				57846: 30923,
				57847: 30932,
				57848: 30910,
				57849: 30908,
				57850: 30917,
				57851: 30922,
				57852: 30956,
				57920: 30951,
				57921: 30938,
				57922: 30973,
				57923: 30964,
				57924: 30983,
				57925: 30994,
				57926: 30993,
				57927: 31001,
				57928: 31020,
				57929: 31019,
				57930: 31040,
				57931: 31072,
				57932: 31063,
				57933: 31071,
				57934: 31066,
				57935: 31061,
				57936: 31059,
				57937: 31098,
				57938: 31103,
				57939: 31114,
				57940: 31133,
				57941: 31143,
				57942: 40779,
				57943: 31146,
				57944: 31150,
				57945: 31155,
				57946: 31161,
				57947: 31162,
				57948: 31177,
				57949: 31189,
				57950: 31207,
				57951: 31212,
				57952: 31201,
				57953: 31203,
				57954: 31240,
				57955: 31245,
				57956: 31256,
				57957: 31257,
				57958: 31264,
				57959: 31263,
				57960: 31104,
				57961: 31281,
				57962: 31291,
				57963: 31294,
				57964: 31287,
				57965: 31299,
				57966: 31319,
				57967: 31305,
				57968: 31329,
				57969: 31330,
				57970: 31337,
				57971: 40861,
				57972: 31344,
				57973: 31353,
				57974: 31357,
				57975: 31368,
				57976: 31383,
				57977: 31381,
				57978: 31384,
				57979: 31382,
				57980: 31401,
				57981: 31432,
				57982: 31408,
				57984: 31414,
				57985: 31429,
				57986: 31428,
				57987: 31423,
				57988: 36995,
				57989: 31431,
				57990: 31434,
				57991: 31437,
				57992: 31439,
				57993: 31445,
				57994: 31443,
				57995: 31449,
				57996: 31450,
				57997: 31453,
				57998: 31457,
				57999: 31458,
				58000: 31462,
				58001: 31469,
				58002: 31472,
				58003: 31490,
				58004: 31503,
				58005: 31498,
				58006: 31494,
				58007: 31539,
				58008: 31512,
				58009: 31513,
				58010: 31518,
				58011: 31541,
				58012: 31528,
				58013: 31542,
				58014: 31568,
				58015: 31610,
				58016: 31492,
				58017: 31565,
				58018: 31499,
				58019: 31564,
				58020: 31557,
				58021: 31605,
				58022: 31589,
				58023: 31604,
				58024: 31591,
				58025: 31600,
				58026: 31601,
				58027: 31596,
				58028: 31598,
				58029: 31645,
				58030: 31640,
				58031: 31647,
				58032: 31629,
				58033: 31644,
				58034: 31642,
				58035: 31627,
				58036: 31634,
				58037: 31631,
				58038: 31581,
				58039: 31641,
				58040: 31691,
				58041: 31681,
				58042: 31692,
				58043: 31695,
				58044: 31668,
				58045: 31686,
				58046: 31709,
				58047: 31721,
				58048: 31761,
				58049: 31764,
				58050: 31718,
				58051: 31717,
				58052: 31840,
				58053: 31744,
				58054: 31751,
				58055: 31763,
				58056: 31731,
				58057: 31735,
				58058: 31767,
				58059: 31757,
				58060: 31734,
				58061: 31779,
				58062: 31783,
				58063: 31786,
				58064: 31775,
				58065: 31799,
				58066: 31787,
				58067: 31805,
				58068: 31820,
				58069: 31811,
				58070: 31828,
				58071: 31823,
				58072: 31808,
				58073: 31824,
				58074: 31832,
				58075: 31839,
				58076: 31844,
				58077: 31830,
				58078: 31845,
				58079: 31852,
				58080: 31861,
				58081: 31875,
				58082: 31888,
				58083: 31908,
				58084: 31917,
				58085: 31906,
				58086: 31915,
				58087: 31905,
				58088: 31912,
				58089: 31923,
				58090: 31922,
				58091: 31921,
				58092: 31918,
				58093: 31929,
				58094: 31933,
				58095: 31936,
				58096: 31941,
				58097: 31938,
				58098: 31960,
				58099: 31954,
				58100: 31964,
				58101: 31970,
				58102: 39739,
				58103: 31983,
				58104: 31986,
				58105: 31988,
				58106: 31990,
				58107: 31994,
				58108: 32006,
				58176: 32002,
				58177: 32028,
				58178: 32021,
				58179: 32010,
				58180: 32069,
				58181: 32075,
				58182: 32046,
				58183: 32050,
				58184: 32063,
				58185: 32053,
				58186: 32070,
				58187: 32115,
				58188: 32086,
				58189: 32078,
				58190: 32114,
				58191: 32104,
				58192: 32110,
				58193: 32079,
				58194: 32099,
				58195: 32147,
				58196: 32137,
				58197: 32091,
				58198: 32143,
				58199: 32125,
				58200: 32155,
				58201: 32186,
				58202: 32174,
				58203: 32163,
				58204: 32181,
				58205: 32199,
				58206: 32189,
				58207: 32171,
				58208: 32317,
				58209: 32162,
				58210: 32175,
				58211: 32220,
				58212: 32184,
				58213: 32159,
				58214: 32176,
				58215: 32216,
				58216: 32221,
				58217: 32228,
				58218: 32222,
				58219: 32251,
				58220: 32242,
				58221: 32225,
				58222: 32261,
				58223: 32266,
				58224: 32291,
				58225: 32289,
				58226: 32274,
				58227: 32305,
				58228: 32287,
				58229: 32265,
				58230: 32267,
				58231: 32290,
				58232: 32326,
				58233: 32358,
				58234: 32315,
				58235: 32309,
				58236: 32313,
				58237: 32323,
				58238: 32311,
				58240: 32306,
				58241: 32314,
				58242: 32359,
				58243: 32349,
				58244: 32342,
				58245: 32350,
				58246: 32345,
				58247: 32346,
				58248: 32377,
				58249: 32362,
				58250: 32361,
				58251: 32380,
				58252: 32379,
				58253: 32387,
				58254: 32213,
				58255: 32381,
				58256: 36782,
				58257: 32383,
				58258: 32392,
				58259: 32393,
				58260: 32396,
				58261: 32402,
				58262: 32400,
				58263: 32403,
				58264: 32404,
				58265: 32406,
				58266: 32398,
				58267: 32411,
				58268: 32412,
				58269: 32568,
				58270: 32570,
				58271: 32581,
				58272: 32588,
				58273: 32589,
				58274: 32590,
				58275: 32592,
				58276: 32593,
				58277: 32597,
				58278: 32596,
				58279: 32600,
				58280: 32607,
				58281: 32608,
				58282: 32616,
				58283: 32617,
				58284: 32615,
				58285: 32632,
				58286: 32642,
				58287: 32646,
				58288: 32643,
				58289: 32648,
				58290: 32647,
				58291: 32652,
				58292: 32660,
				58293: 32670,
				58294: 32669,
				58295: 32666,
				58296: 32675,
				58297: 32687,
				58298: 32690,
				58299: 32697,
				58300: 32686,
				58301: 32694,
				58302: 32696,
				58303: 35697,
				58304: 32709,
				58305: 32710,
				58306: 32714,
				58307: 32725,
				58308: 32724,
				58309: 32737,
				58310: 32742,
				58311: 32745,
				58312: 32755,
				58313: 32761,
				58314: 39132,
				58315: 32774,
				58316: 32772,
				58317: 32779,
				58318: 32786,
				58319: 32792,
				58320: 32793,
				58321: 32796,
				58322: 32801,
				58323: 32808,
				58324: 32831,
				58325: 32827,
				58326: 32842,
				58327: 32838,
				58328: 32850,
				58329: 32856,
				58330: 32858,
				58331: 32863,
				58332: 32866,
				58333: 32872,
				58334: 32883,
				58335: 32882,
				58336: 32880,
				58337: 32886,
				58338: 32889,
				58339: 32893,
				58340: 32895,
				58341: 32900,
				58342: 32902,
				58343: 32901,
				58344: 32923,
				58345: 32915,
				58346: 32922,
				58347: 32941,
				58348: 20880,
				58349: 32940,
				58350: 32987,
				58351: 32997,
				58352: 32985,
				58353: 32989,
				58354: 32964,
				58355: 32986,
				58356: 32982,
				58357: 33033,
				58358: 33007,
				58359: 33009,
				58360: 33051,
				58361: 33065,
				58362: 33059,
				58363: 33071,
				58364: 33099,
				58432: 38539,
				58433: 33094,
				58434: 33086,
				58435: 33107,
				58436: 33105,
				58437: 33020,
				58438: 33137,
				58439: 33134,
				58440: 33125,
				58441: 33126,
				58442: 33140,
				58443: 33155,
				58444: 33160,
				58445: 33162,
				58446: 33152,
				58447: 33154,
				58448: 33184,
				58449: 33173,
				58450: 33188,
				58451: 33187,
				58452: 33119,
				58453: 33171,
				58454: 33193,
				58455: 33200,
				58456: 33205,
				58457: 33214,
				58458: 33208,
				58459: 33213,
				58460: 33216,
				58461: 33218,
				58462: 33210,
				58463: 33225,
				58464: 33229,
				58465: 33233,
				58466: 33241,
				58467: 33240,
				58468: 33224,
				58469: 33242,
				58470: 33247,
				58471: 33248,
				58472: 33255,
				58473: 33274,
				58474: 33275,
				58475: 33278,
				58476: 33281,
				58477: 33282,
				58478: 33285,
				58479: 33287,
				58480: 33290,
				58481: 33293,
				58482: 33296,
				58483: 33302,
				58484: 33321,
				58485: 33323,
				58486: 33336,
				58487: 33331,
				58488: 33344,
				58489: 33369,
				58490: 33368,
				58491: 33373,
				58492: 33370,
				58493: 33375,
				58494: 33380,
				58496: 33378,
				58497: 33384,
				58498: 33386,
				58499: 33387,
				58500: 33326,
				58501: 33393,
				58502: 33399,
				58503: 33400,
				58504: 33406,
				58505: 33421,
				58506: 33426,
				58507: 33451,
				58508: 33439,
				58509: 33467,
				58510: 33452,
				58511: 33505,
				58512: 33507,
				58513: 33503,
				58514: 33490,
				58515: 33524,
				58516: 33523,
				58517: 33530,
				58518: 33683,
				58519: 33539,
				58520: 33531,
				58521: 33529,
				58522: 33502,
				58523: 33542,
				58524: 33500,
				58525: 33545,
				58526: 33497,
				58527: 33589,
				58528: 33588,
				58529: 33558,
				58530: 33586,
				58531: 33585,
				58532: 33600,
				58533: 33593,
				58534: 33616,
				58535: 33605,
				58536: 33583,
				58537: 33579,
				58538: 33559,
				58539: 33560,
				58540: 33669,
				58541: 33690,
				58542: 33706,
				58543: 33695,
				58544: 33698,
				58545: 33686,
				58546: 33571,
				58547: 33678,
				58548: 33671,
				58549: 33674,
				58550: 33660,
				58551: 33717,
				58552: 33651,
				58553: 33653,
				58554: 33696,
				58555: 33673,
				58556: 33704,
				58557: 33780,
				58558: 33811,
				58559: 33771,
				58560: 33742,
				58561: 33789,
				58562: 33795,
				58563: 33752,
				58564: 33803,
				58565: 33729,
				58566: 33783,
				58567: 33799,
				58568: 33760,
				58569: 33778,
				58570: 33805,
				58571: 33826,
				58572: 33824,
				58573: 33725,
				58574: 33848,
				58575: 34054,
				58576: 33787,
				58577: 33901,
				58578: 33834,
				58579: 33852,
				58580: 34138,
				58581: 33924,
				58582: 33911,
				58583: 33899,
				58584: 33965,
				58585: 33902,
				58586: 33922,
				58587: 33897,
				58588: 33862,
				58589: 33836,
				58590: 33903,
				58591: 33913,
				58592: 33845,
				58593: 33994,
				58594: 33890,
				58595: 33977,
				58596: 33983,
				58597: 33951,
				58598: 34009,
				58599: 33997,
				58600: 33979,
				58601: 34010,
				58602: 34e3,
				58603: 33985,
				58604: 33990,
				58605: 34006,
				58606: 33953,
				58607: 34081,
				58608: 34047,
				58609: 34036,
				58610: 34071,
				58611: 34072,
				58612: 34092,
				58613: 34079,
				58614: 34069,
				58615: 34068,
				58616: 34044,
				58617: 34112,
				58618: 34147,
				58619: 34136,
				58620: 34120,
				58688: 34113,
				58689: 34306,
				58690: 34123,
				58691: 34133,
				58692: 34176,
				58693: 34212,
				58694: 34184,
				58695: 34193,
				58696: 34186,
				58697: 34216,
				58698: 34157,
				58699: 34196,
				58700: 34203,
				58701: 34282,
				58702: 34183,
				58703: 34204,
				58704: 34167,
				58705: 34174,
				58706: 34192,
				58707: 34249,
				58708: 34234,
				58709: 34255,
				58710: 34233,
				58711: 34256,
				58712: 34261,
				58713: 34269,
				58714: 34277,
				58715: 34268,
				58716: 34297,
				58717: 34314,
				58718: 34323,
				58719: 34315,
				58720: 34302,
				58721: 34298,
				58722: 34310,
				58723: 34338,
				58724: 34330,
				58725: 34352,
				58726: 34367,
				58727: 34381,
				58728: 20053,
				58729: 34388,
				58730: 34399,
				58731: 34407,
				58732: 34417,
				58733: 34451,
				58734: 34467,
				58735: 34473,
				58736: 34474,
				58737: 34443,
				58738: 34444,
				58739: 34486,
				58740: 34479,
				58741: 34500,
				58742: 34502,
				58743: 34480,
				58744: 34505,
				58745: 34851,
				58746: 34475,
				58747: 34516,
				58748: 34526,
				58749: 34537,
				58750: 34540,
				58752: 34527,
				58753: 34523,
				58754: 34543,
				58755: 34578,
				58756: 34566,
				58757: 34568,
				58758: 34560,
				58759: 34563,
				58760: 34555,
				58761: 34577,
				58762: 34569,
				58763: 34573,
				58764: 34553,
				58765: 34570,
				58766: 34612,
				58767: 34623,
				58768: 34615,
				58769: 34619,
				58770: 34597,
				58771: 34601,
				58772: 34586,
				58773: 34656,
				58774: 34655,
				58775: 34680,
				58776: 34636,
				58777: 34638,
				58778: 34676,
				58779: 34647,
				58780: 34664,
				58781: 34670,
				58782: 34649,
				58783: 34643,
				58784: 34659,
				58785: 34666,
				58786: 34821,
				58787: 34722,
				58788: 34719,
				58789: 34690,
				58790: 34735,
				58791: 34763,
				58792: 34749,
				58793: 34752,
				58794: 34768,
				58795: 38614,
				58796: 34731,
				58797: 34756,
				58798: 34739,
				58799: 34759,
				58800: 34758,
				58801: 34747,
				58802: 34799,
				58803: 34802,
				58804: 34784,
				58805: 34831,
				58806: 34829,
				58807: 34814,
				58808: 34806,
				58809: 34807,
				58810: 34830,
				58811: 34770,
				58812: 34833,
				58813: 34838,
				58814: 34837,
				58815: 34850,
				58816: 34849,
				58817: 34865,
				58818: 34870,
				58819: 34873,
				58820: 34855,
				58821: 34875,
				58822: 34884,
				58823: 34882,
				58824: 34898,
				58825: 34905,
				58826: 34910,
				58827: 34914,
				58828: 34923,
				58829: 34945,
				58830: 34942,
				58831: 34974,
				58832: 34933,
				58833: 34941,
				58834: 34997,
				58835: 34930,
				58836: 34946,
				58837: 34967,
				58838: 34962,
				58839: 34990,
				58840: 34969,
				58841: 34978,
				58842: 34957,
				58843: 34980,
				58844: 34992,
				58845: 35007,
				58846: 34993,
				58847: 35011,
				58848: 35012,
				58849: 35028,
				58850: 35032,
				58851: 35033,
				58852: 35037,
				58853: 35065,
				58854: 35074,
				58855: 35068,
				58856: 35060,
				58857: 35048,
				58858: 35058,
				58859: 35076,
				58860: 35084,
				58861: 35082,
				58862: 35091,
				58863: 35139,
				58864: 35102,
				58865: 35109,
				58866: 35114,
				58867: 35115,
				58868: 35137,
				58869: 35140,
				58870: 35131,
				58871: 35126,
				58872: 35128,
				58873: 35148,
				58874: 35101,
				58875: 35168,
				58876: 35166,
				58944: 35174,
				58945: 35172,
				58946: 35181,
				58947: 35178,
				58948: 35183,
				58949: 35188,
				58950: 35191,
				58951: 35198,
				58952: 35203,
				58953: 35208,
				58954: 35210,
				58955: 35219,
				58956: 35224,
				58957: 35233,
				58958: 35241,
				58959: 35238,
				58960: 35244,
				58961: 35247,
				58962: 35250,
				58963: 35258,
				58964: 35261,
				58965: 35263,
				58966: 35264,
				58967: 35290,
				58968: 35292,
				58969: 35293,
				58970: 35303,
				58971: 35316,
				58972: 35320,
				58973: 35331,
				58974: 35350,
				58975: 35344,
				58976: 35340,
				58977: 35355,
				58978: 35357,
				58979: 35365,
				58980: 35382,
				58981: 35393,
				58982: 35419,
				58983: 35410,
				58984: 35398,
				58985: 35400,
				58986: 35452,
				58987: 35437,
				58988: 35436,
				58989: 35426,
				58990: 35461,
				58991: 35458,
				58992: 35460,
				58993: 35496,
				58994: 35489,
				58995: 35473,
				58996: 35493,
				58997: 35494,
				58998: 35482,
				58999: 35491,
				59000: 35524,
				59001: 35533,
				59002: 35522,
				59003: 35546,
				59004: 35563,
				59005: 35571,
				59006: 35559,
				59008: 35556,
				59009: 35569,
				59010: 35604,
				59011: 35552,
				59012: 35554,
				59013: 35575,
				59014: 35550,
				59015: 35547,
				59016: 35596,
				59017: 35591,
				59018: 35610,
				59019: 35553,
				59020: 35606,
				59021: 35600,
				59022: 35607,
				59023: 35616,
				59024: 35635,
				59025: 38827,
				59026: 35622,
				59027: 35627,
				59028: 35646,
				59029: 35624,
				59030: 35649,
				59031: 35660,
				59032: 35663,
				59033: 35662,
				59034: 35657,
				59035: 35670,
				59036: 35675,
				59037: 35674,
				59038: 35691,
				59039: 35679,
				59040: 35692,
				59041: 35695,
				59042: 35700,
				59043: 35709,
				59044: 35712,
				59045: 35724,
				59046: 35726,
				59047: 35730,
				59048: 35731,
				59049: 35734,
				59050: 35737,
				59051: 35738,
				59052: 35898,
				59053: 35905,
				59054: 35903,
				59055: 35912,
				59056: 35916,
				59057: 35918,
				59058: 35920,
				59059: 35925,
				59060: 35938,
				59061: 35948,
				59062: 35960,
				59063: 35962,
				59064: 35970,
				59065: 35977,
				59066: 35973,
				59067: 35978,
				59068: 35981,
				59069: 35982,
				59070: 35988,
				59071: 35964,
				59072: 35992,
				59073: 25117,
				59074: 36013,
				59075: 36010,
				59076: 36029,
				59077: 36018,
				59078: 36019,
				59079: 36014,
				59080: 36022,
				59081: 36040,
				59082: 36033,
				59083: 36068,
				59084: 36067,
				59085: 36058,
				59086: 36093,
				59087: 36090,
				59088: 36091,
				59089: 36100,
				59090: 36101,
				59091: 36106,
				59092: 36103,
				59093: 36111,
				59094: 36109,
				59095: 36112,
				59096: 40782,
				59097: 36115,
				59098: 36045,
				59099: 36116,
				59100: 36118,
				59101: 36199,
				59102: 36205,
				59103: 36209,
				59104: 36211,
				59105: 36225,
				59106: 36249,
				59107: 36290,
				59108: 36286,
				59109: 36282,
				59110: 36303,
				59111: 36314,
				59112: 36310,
				59113: 36300,
				59114: 36315,
				59115: 36299,
				59116: 36330,
				59117: 36331,
				59118: 36319,
				59119: 36323,
				59120: 36348,
				59121: 36360,
				59122: 36361,
				59123: 36351,
				59124: 36381,
				59125: 36382,
				59126: 36368,
				59127: 36383,
				59128: 36418,
				59129: 36405,
				59130: 36400,
				59131: 36404,
				59132: 36426,
				59200: 36423,
				59201: 36425,
				59202: 36428,
				59203: 36432,
				59204: 36424,
				59205: 36441,
				59206: 36452,
				59207: 36448,
				59208: 36394,
				59209: 36451,
				59210: 36437,
				59211: 36470,
				59212: 36466,
				59213: 36476,
				59214: 36481,
				59215: 36487,
				59216: 36485,
				59217: 36484,
				59218: 36491,
				59219: 36490,
				59220: 36499,
				59221: 36497,
				59222: 36500,
				59223: 36505,
				59224: 36522,
				59225: 36513,
				59226: 36524,
				59227: 36528,
				59228: 36550,
				59229: 36529,
				59230: 36542,
				59231: 36549,
				59232: 36552,
				59233: 36555,
				59234: 36571,
				59235: 36579,
				59236: 36604,
				59237: 36603,
				59238: 36587,
				59239: 36606,
				59240: 36618,
				59241: 36613,
				59242: 36629,
				59243: 36626,
				59244: 36633,
				59245: 36627,
				59246: 36636,
				59247: 36639,
				59248: 36635,
				59249: 36620,
				59250: 36646,
				59251: 36659,
				59252: 36667,
				59253: 36665,
				59254: 36677,
				59255: 36674,
				59256: 36670,
				59257: 36684,
				59258: 36681,
				59259: 36678,
				59260: 36686,
				59261: 36695,
				59262: 36700,
				59264: 36706,
				59265: 36707,
				59266: 36708,
				59267: 36764,
				59268: 36767,
				59269: 36771,
				59270: 36781,
				59271: 36783,
				59272: 36791,
				59273: 36826,
				59274: 36837,
				59275: 36834,
				59276: 36842,
				59277: 36847,
				59278: 36999,
				59279: 36852,
				59280: 36869,
				59281: 36857,
				59282: 36858,
				59283: 36881,
				59284: 36885,
				59285: 36897,
				59286: 36877,
				59287: 36894,
				59288: 36886,
				59289: 36875,
				59290: 36903,
				59291: 36918,
				59292: 36917,
				59293: 36921,
				59294: 36856,
				59295: 36943,
				59296: 36944,
				59297: 36945,
				59298: 36946,
				59299: 36878,
				59300: 36937,
				59301: 36926,
				59302: 36950,
				59303: 36952,
				59304: 36958,
				59305: 36968,
				59306: 36975,
				59307: 36982,
				59308: 38568,
				59309: 36978,
				59310: 36994,
				59311: 36989,
				59312: 36993,
				59313: 36992,
				59314: 37002,
				59315: 37001,
				59316: 37007,
				59317: 37032,
				59318: 37039,
				59319: 37041,
				59320: 37045,
				59321: 37090,
				59322: 37092,
				59323: 25160,
				59324: 37083,
				59325: 37122,
				59326: 37138,
				59327: 37145,
				59328: 37170,
				59329: 37168,
				59330: 37194,
				59331: 37206,
				59332: 37208,
				59333: 37219,
				59334: 37221,
				59335: 37225,
				59336: 37235,
				59337: 37234,
				59338: 37259,
				59339: 37257,
				59340: 37250,
				59341: 37282,
				59342: 37291,
				59343: 37295,
				59344: 37290,
				59345: 37301,
				59346: 37300,
				59347: 37306,
				59348: 37312,
				59349: 37313,
				59350: 37321,
				59351: 37323,
				59352: 37328,
				59353: 37334,
				59354: 37343,
				59355: 37345,
				59356: 37339,
				59357: 37372,
				59358: 37365,
				59359: 37366,
				59360: 37406,
				59361: 37375,
				59362: 37396,
				59363: 37420,
				59364: 37397,
				59365: 37393,
				59366: 37470,
				59367: 37463,
				59368: 37445,
				59369: 37449,
				59370: 37476,
				59371: 37448,
				59372: 37525,
				59373: 37439,
				59374: 37451,
				59375: 37456,
				59376: 37532,
				59377: 37526,
				59378: 37523,
				59379: 37531,
				59380: 37466,
				59381: 37583,
				59382: 37561,
				59383: 37559,
				59384: 37609,
				59385: 37647,
				59386: 37626,
				59387: 37700,
				59388: 37678,
				59456: 37657,
				59457: 37666,
				59458: 37658,
				59459: 37667,
				59460: 37690,
				59461: 37685,
				59462: 37691,
				59463: 37724,
				59464: 37728,
				59465: 37756,
				59466: 37742,
				59467: 37718,
				59468: 37808,
				59469: 37804,
				59470: 37805,
				59471: 37780,
				59472: 37817,
				59473: 37846,
				59474: 37847,
				59475: 37864,
				59476: 37861,
				59477: 37848,
				59478: 37827,
				59479: 37853,
				59480: 37840,
				59481: 37832,
				59482: 37860,
				59483: 37914,
				59484: 37908,
				59485: 37907,
				59486: 37891,
				59487: 37895,
				59488: 37904,
				59489: 37942,
				59490: 37931,
				59491: 37941,
				59492: 37921,
				59493: 37946,
				59494: 37953,
				59495: 37970,
				59496: 37956,
				59497: 37979,
				59498: 37984,
				59499: 37986,
				59500: 37982,
				59501: 37994,
				59502: 37417,
				59503: 38e3,
				59504: 38005,
				59505: 38007,
				59506: 38013,
				59507: 37978,
				59508: 38012,
				59509: 38014,
				59510: 38017,
				59511: 38015,
				59512: 38274,
				59513: 38279,
				59514: 38282,
				59515: 38292,
				59516: 38294,
				59517: 38296,
				59518: 38297,
				59520: 38304,
				59521: 38312,
				59522: 38311,
				59523: 38317,
				59524: 38332,
				59525: 38331,
				59526: 38329,
				59527: 38334,
				59528: 38346,
				59529: 28662,
				59530: 38339,
				59531: 38349,
				59532: 38348,
				59533: 38357,
				59534: 38356,
				59535: 38358,
				59536: 38364,
				59537: 38369,
				59538: 38373,
				59539: 38370,
				59540: 38433,
				59541: 38440,
				59542: 38446,
				59543: 38447,
				59544: 38466,
				59545: 38476,
				59546: 38479,
				59547: 38475,
				59548: 38519,
				59549: 38492,
				59550: 38494,
				59551: 38493,
				59552: 38495,
				59553: 38502,
				59554: 38514,
				59555: 38508,
				59556: 38541,
				59557: 38552,
				59558: 38549,
				59559: 38551,
				59560: 38570,
				59561: 38567,
				59562: 38577,
				59563: 38578,
				59564: 38576,
				59565: 38580,
				59566: 38582,
				59567: 38584,
				59568: 38585,
				59569: 38606,
				59570: 38603,
				59571: 38601,
				59572: 38605,
				59573: 35149,
				59574: 38620,
				59575: 38669,
				59576: 38613,
				59577: 38649,
				59578: 38660,
				59579: 38662,
				59580: 38664,
				59581: 38675,
				59582: 38670,
				59583: 38673,
				59584: 38671,
				59585: 38678,
				59586: 38681,
				59587: 38692,
				59588: 38698,
				59589: 38704,
				59590: 38713,
				59591: 38717,
				59592: 38718,
				59593: 38724,
				59594: 38726,
				59595: 38728,
				59596: 38722,
				59597: 38729,
				59598: 38748,
				59599: 38752,
				59600: 38756,
				59601: 38758,
				59602: 38760,
				59603: 21202,
				59604: 38763,
				59605: 38769,
				59606: 38777,
				59607: 38789,
				59608: 38780,
				59609: 38785,
				59610: 38778,
				59611: 38790,
				59612: 38795,
				59613: 38799,
				59614: 38800,
				59615: 38812,
				59616: 38824,
				59617: 38822,
				59618: 38819,
				59619: 38835,
				59620: 38836,
				59621: 38851,
				59622: 38854,
				59623: 38856,
				59624: 38859,
				59625: 38876,
				59626: 38893,
				59627: 40783,
				59628: 38898,
				59629: 31455,
				59630: 38902,
				59631: 38901,
				59632: 38927,
				59633: 38924,
				59634: 38968,
				59635: 38948,
				59636: 38945,
				59637: 38967,
				59638: 38973,
				59639: 38982,
				59640: 38991,
				59641: 38987,
				59642: 39019,
				59643: 39023,
				59644: 39024,
				59712: 39025,
				59713: 39028,
				59714: 39027,
				59715: 39082,
				59716: 39087,
				59717: 39089,
				59718: 39094,
				59719: 39108,
				59720: 39107,
				59721: 39110,
				59722: 39145,
				59723: 39147,
				59724: 39171,
				59725: 39177,
				59726: 39186,
				59727: 39188,
				59728: 39192,
				59729: 39201,
				59730: 39197,
				59731: 39198,
				59732: 39204,
				59733: 39200,
				59734: 39212,
				59735: 39214,
				59736: 39229,
				59737: 39230,
				59738: 39234,
				59739: 39241,
				59740: 39237,
				59741: 39248,
				59742: 39243,
				59743: 39249,
				59744: 39250,
				59745: 39244,
				59746: 39253,
				59747: 39319,
				59748: 39320,
				59749: 39333,
				59750: 39341,
				59751: 39342,
				59752: 39356,
				59753: 39391,
				59754: 39387,
				59755: 39389,
				59756: 39384,
				59757: 39377,
				59758: 39405,
				59759: 39406,
				59760: 39409,
				59761: 39410,
				59762: 39419,
				59763: 39416,
				59764: 39425,
				59765: 39439,
				59766: 39429,
				59767: 39394,
				59768: 39449,
				59769: 39467,
				59770: 39479,
				59771: 39493,
				59772: 39490,
				59773: 39488,
				59774: 39491,
				59776: 39486,
				59777: 39509,
				59778: 39501,
				59779: 39515,
				59780: 39511,
				59781: 39519,
				59782: 39522,
				59783: 39525,
				59784: 39524,
				59785: 39529,
				59786: 39531,
				59787: 39530,
				59788: 39597,
				59789: 39600,
				59790: 39612,
				59791: 39616,
				59792: 39631,
				59793: 39633,
				59794: 39635,
				59795: 39636,
				59796: 39646,
				59797: 39647,
				59798: 39650,
				59799: 39651,
				59800: 39654,
				59801: 39663,
				59802: 39659,
				59803: 39662,
				59804: 39668,
				59805: 39665,
				59806: 39671,
				59807: 39675,
				59808: 39686,
				59809: 39704,
				59810: 39706,
				59811: 39711,
				59812: 39714,
				59813: 39715,
				59814: 39717,
				59815: 39719,
				59816: 39720,
				59817: 39721,
				59818: 39722,
				59819: 39726,
				59820: 39727,
				59821: 39730,
				59822: 39748,
				59823: 39747,
				59824: 39759,
				59825: 39757,
				59826: 39758,
				59827: 39761,
				59828: 39768,
				59829: 39796,
				59830: 39827,
				59831: 39811,
				59832: 39825,
				59833: 39830,
				59834: 39831,
				59835: 39839,
				59836: 39840,
				59837: 39848,
				59838: 39860,
				59839: 39872,
				59840: 39882,
				59841: 39865,
				59842: 39878,
				59843: 39887,
				59844: 39889,
				59845: 39890,
				59846: 39907,
				59847: 39906,
				59848: 39908,
				59849: 39892,
				59850: 39905,
				59851: 39994,
				59852: 39922,
				59853: 39921,
				59854: 39920,
				59855: 39957,
				59856: 39956,
				59857: 39945,
				59858: 39955,
				59859: 39948,
				59860: 39942,
				59861: 39944,
				59862: 39954,
				59863: 39946,
				59864: 39940,
				59865: 39982,
				59866: 39963,
				59867: 39973,
				59868: 39972,
				59869: 39969,
				59870: 39984,
				59871: 40007,
				59872: 39986,
				59873: 40006,
				59874: 39998,
				59875: 40026,
				59876: 40032,
				59877: 40039,
				59878: 40054,
				59879: 40056,
				59880: 40167,
				59881: 40172,
				59882: 40176,
				59883: 40201,
				59884: 40200,
				59885: 40171,
				59886: 40195,
				59887: 40198,
				59888: 40234,
				59889: 40230,
				59890: 40367,
				59891: 40227,
				59892: 40223,
				59893: 40260,
				59894: 40213,
				59895: 40210,
				59896: 40257,
				59897: 40255,
				59898: 40254,
				59899: 40262,
				59900: 40264,
				59968: 40285,
				59969: 40286,
				59970: 40292,
				59971: 40273,
				59972: 40272,
				59973: 40281,
				59974: 40306,
				59975: 40329,
				59976: 40327,
				59977: 40363,
				59978: 40303,
				59979: 40314,
				59980: 40346,
				59981: 40356,
				59982: 40361,
				59983: 40370,
				59984: 40388,
				59985: 40385,
				59986: 40379,
				59987: 40376,
				59988: 40378,
				59989: 40390,
				59990: 40399,
				59991: 40386,
				59992: 40409,
				59993: 40403,
				59994: 40440,
				59995: 40422,
				59996: 40429,
				59997: 40431,
				59998: 40445,
				59999: 40474,
				60000: 40475,
				60001: 40478,
				60002: 40565,
				60003: 40569,
				60004: 40573,
				60005: 40577,
				60006: 40584,
				60007: 40587,
				60008: 40588,
				60009: 40594,
				60010: 40597,
				60011: 40593,
				60012: 40605,
				60013: 40613,
				60014: 40617,
				60015: 40632,
				60016: 40618,
				60017: 40621,
				60018: 38753,
				60019: 40652,
				60020: 40654,
				60021: 40655,
				60022: 40656,
				60023: 40660,
				60024: 40668,
				60025: 40670,
				60026: 40669,
				60027: 40672,
				60028: 40677,
				60029: 40680,
				60030: 40687,
				60032: 40692,
				60033: 40694,
				60034: 40695,
				60035: 40697,
				60036: 40699,
				60037: 40700,
				60038: 40701,
				60039: 40711,
				60040: 40712,
				60041: 30391,
				60042: 40725,
				60043: 40737,
				60044: 40748,
				60045: 40766,
				60046: 40778,
				60047: 40786,
				60048: 40788,
				60049: 40803,
				60050: 40799,
				60051: 40800,
				60052: 40801,
				60053: 40806,
				60054: 40807,
				60055: 40812,
				60056: 40810,
				60057: 40823,
				60058: 40818,
				60059: 40822,
				60060: 40853,
				60061: 40860,
				60062: 40864,
				60063: 22575,
				60064: 27079,
				60065: 36953,
				60066: 29796,
				60067: 20956,
				60068: 29081
			}
		}, function(e, t, o) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = o(1),
				n = o(2);
			t.decode = function(e, t) {
				var o = new Uint8ClampedArray(e.length);
				o.set(e);
				for (var r = new s.default(285, 256, 0), a = new n.default(r, o), d = new Uint8ClampedArray(t), u = !1, c = 0; c < t; c++) {
					var l = a.evaluateAt(r.exp(c + r.generatorBase));
					d[d.length - 1 - c] = l, 0 !== l && (u = !0)
				}
				if (!u) return o;
				var i = new n.default(r, d),
					f = function(e, t, o, s) {
						t.degree() < o.degree() && (t = (h = [o, t])[0], o = h[1]);
						for (var n = t, r = o, a = e.zero, d = e.one; r.degree() >= s / 2;) {
							var u = n,
								c = a;
							if (a = d, (n = r).isZero()) return null;
							r = u;
							for (var l = e.zero, i = n.getCoefficient(n.degree()), f = e.inverse(i); r.degree() >= n.degree() && !r.isZero();) {
								var m = r.degree() - n.degree(),
									v = e.multiply(r.getCoefficient(r.degree()), f);
								l = l.addOrSubtract(e.buildMonomial(m, v)), r = r.addOrSubtract(n.multiplyByMonomial(m, v))
							}
							if (d = l.multiplyPoly(a).addOrSubtract(c), r.degree() >= n.degree()) return null
						}
						var g = d.getCoefficient(0);
						if (0 === g) return null;
						var h, p = e.inverse(g);
						return [d.multiply(p), r.multiply(p)]
					}(r, r.buildMonomial(t, 1), i, t);
				if (null === f) return null;
				var m = function(e, t) {
					var o = t.degree();
					if (1 === o) return [t.getCoefficient(1)];
					for (var s = new Array(o), n = 0, r = 1; r < e.size && n < o; r++) 0 === t.evaluateAt(r) && (s[n] = e.inverse(r), n++);
					return n !== o ? null : s
				}(r, f[0]);
				if (null == m) return null;
				for (var v = function(e, t, o) {
						for (var n = o.length, r = new Array(n), a = 0; a < n; a++) {
							for (var d = e.inverse(o[a]), u = 1, c = 0; c < n; c++) a !== c && (u = e.multiply(u, s.addOrSubtractGF(1, e.multiply(o[c], d))));
							r[a] = e.multiply(t.evaluateAt(d), e.inverse(u)), 0 !== e.generatorBase && (r[a] = e.multiply(r[a], d))
						}
						return r
					}(r, f[1], m), g = 0; g < m.length; g++) {
					var h = o.length - 1 - r.log(m[g]);
					if (h < 0) return null;
					o[h] = s.addOrSubtractGF(o[h], v[g])
				}
				return o
			}
		}, function(e, t, o) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.VERSIONS = [{
				infoBits: null,
				versionNumber: 1,
				alignmentPatternCenters: [],
				errorCorrectionLevels: [{
					ecCodewordsPerBlock: 7,
					ecBlocks: [{
						numBlocks: 1,
						dataCodewordsPerBlock: 19
					}]
				}, {
					ecCodewordsPerBlock: 10,
					ecBlocks: [{
						numBlocks: 1,
						dataCodewordsPerBlock: 16
					}]
				}, {
					ecCodewordsPerBlock: 13,
					ecBlocks: [{
						numBlocks: 1,
						dataCodewordsPerBlock: 13
					}]
				}, {
					ecCodewordsPerBlock: 17,
					ecBlocks: [{
						numBlocks: 1,
						dataCodewordsPerBlock: 9
					}]
				}]
			}, {
				infoBits: null,
				versionNumber: 2,
				alignmentPatternCenters: [6, 18],
				errorCorrectionLevels: [{
					ecCodewordsPerBlock: 10,
					ecBlocks: [{
						numBlocks: 1,
						dataCodewordsPerBlock: 34
					}]
				}, {
					ecCodewordsPerBlock: 16,
					ecBlocks: [{
						numBlocks: 1,
						dataCodewordsPerBlock: 28
					}]
				}, {
					ecCodewordsPerBlock: 22,
					ecBlocks: [{
						numBlocks: 1,
						dataCodewordsPerBlock: 22
					}]
				}, {
					ecCodewordsPerBlock: 28,
					ecBlocks: [{
						numBlocks: 1,
						dataCodewordsPerBlock: 16
					}]
				}]
			}, {
				infoBits: null,
				versionNumber: 3,
				alignmentPatternCenters: [6, 22],
				errorCorrectionLevels: [{
					ecCodewordsPerBlock: 15,
					ecBlocks: [{
						numBlocks: 1,
						dataCodewordsPerBlock: 55
					}]
				}, {
					ecCodewordsPerBlock: 26,
					ecBlocks: [{
						numBlocks: 1,
						dataCodewordsPerBlock: 44
					}]
				}, {
					ecCodewordsPerBlock: 18,
					ecBlocks: [{
						numBlocks: 2,
						dataCodewordsPerBlock: 17
					}]
				}, {
					ecCodewordsPerBlock: 22,
					ecBlocks: [{
						numBlocks: 2,
						dataCodewordsPerBlock: 13
					}]
				}]
			}, {
				infoBits: null,
				versionNumber: 4,
				alignmentPatternCenters: [6, 26],
				errorCorrectionLevels: [{
					ecCodewordsPerBlock: 20,
					ecBlocks: [{
						numBlocks: 1,
						dataCodewordsPerBlock: 80
					}]
				}, {
					ecCodewordsPerBlock: 18,
					ecBlocks: [{
						numBlocks: 2,
						dataCodewordsPerBlock: 32
					}]
				}, {
					ecCodewordsPerBlock: 26,
					ecBlocks: [{
						numBlocks: 2,
						dataCodewordsPerBlock: 24
					}]
				}, {
					ecCodewordsPerBlock: 16,
					ecBlocks: [{
						numBlocks: 4,
						dataCodewordsPerBlock: 9
					}]
				}]
			}, {
				infoBits: null,
				versionNumber: 5,
				alignmentPatternCenters: [6, 30],
				errorCorrectionLevels: [{
					ecCodewordsPerBlock: 26,
					ecBlocks: [{
						numBlocks: 1,
						dataCodewordsPerBlock: 108
					}]
				}, {
					ecCodewordsPerBlock: 24,
					ecBlocks: [{
						numBlocks: 2,
						dataCodewordsPerBlock: 43
					}]
				}, {
					ecCodewordsPerBlock: 18,
					ecBlocks: [{
						numBlocks: 2,
						dataCodewordsPerBlock: 15
					}, {
						numBlocks: 2,
						dataCodewordsPerBlock: 16
					}]
				}, {
					ecCodewordsPerBlock: 22,
					ecBlocks: [{
						numBlocks: 2,
						dataCodewordsPerBlock: 11
					}, {
						numBlocks: 2,
						dataCodewordsPerBlock: 12
					}]
				}]
			}, {
				infoBits: null,
				versionNumber: 6,
				alignmentPatternCenters: [6, 34],
				errorCorrectionLevels: [{
					ecCodewordsPerBlock: 18,
					ecBlocks: [{
						numBlocks: 2,
						dataCodewordsPerBlock: 68
					}]
				}, {
					ecCodewordsPerBlock: 16,
					ecBlocks: [{
						numBlocks: 4,
						dataCodewordsPerBlock: 27
					}]
				}, {
					ecCodewordsPerBlock: 24,
					ecBlocks: [{
						numBlocks: 4,
						dataCodewordsPerBlock: 19
					}]
				}, {
					ecCodewordsPerBlock: 28,
					ecBlocks: [{
						numBlocks: 4,
						dataCodewordsPerBlock: 15
					}]
				}]
			}, {
				infoBits: 31892,
				versionNumber: 7,
				alignmentPatternCenters: [6, 22, 38],
				errorCorrectionLevels: [{
					ecCodewordsPerBlock: 20,
					ecBlocks: [{
						numBlocks: 2,
						dataCodewordsPerBlock: 78
					}]
				}, {
					ecCodewordsPerBlock: 18,
					ecBlocks: [{
						numBlocks: 4,
						dataCodewordsPerBlock: 31
					}]
				}, {
					ecCodewordsPerBlock: 18,
					ecBlocks: [{
						numBlocks: 2,
						dataCodewordsPerBlock: 14
					}, {
						numBlocks: 4,
						dataCodewordsPerBlock: 15
					}]
				}, {
					ecCodewordsPerBlock: 26,
					ecBlocks: [{
						numBlocks: 4,
						dataCodewordsPerBlock: 13
					}, {
						numBlocks: 1,
						dataCodewordsPerBlock: 14
					}]
				}]
			}, {
				infoBits: 34236,
				versionNumber: 8,
				alignmentPatternCenters: [6, 24, 42],
				errorCorrectionLevels: [{
					ecCodewordsPerBlock: 24,
					ecBlocks: [{
						numBlocks: 2,
						dataCodewordsPerBlock: 97
					}]
				}, {
					ecCodewordsPerBlock: 22,
					ecBlocks: [{
						numBlocks: 2,
						dataCodewordsPerBlock: 38
					}, {
						numBlocks: 2,
						dataCodewordsPerBlock: 39
					}]
				}, {
					ecCodewordsPerBlock: 22,
					ecBlocks: [{
						numBlocks: 4,
						dataCodewordsPerBlock: 18
					}, {
						numBlocks: 2,
						dataCodewordsPerBlock: 19
					}]
				}, {
					ecCodewordsPerBlock: 26,
					ecBlocks: [{
						numBlocks: 4,
						dataCodewordsPerBlock: 14
					}, {
						numBlocks: 2,
						dataCodewordsPerBlock: 15
					}]
				}]
			}, {
				infoBits: 39577,
				versionNumber: 9,
				alignmentPatternCenters: [6, 26, 46],
				errorCorrectionLevels: [{
					ecCodewordsPerBlock: 30,
					ecBlocks: [{
						numBlocks: 2,
						dataCodewordsPerBlock: 116
					}]
				}, {
					ecCodewordsPerBlock: 22,
					ecBlocks: [{
						numBlocks: 3,
						dataCodewordsPerBlock: 36
					}, {
						numBlocks: 2,
						dataCodewordsPerBlock: 37
					}]
				}, {
					ecCodewordsPerBlock: 20,
					ecBlocks: [{
						numBlocks: 4,
						dataCodewordsPerBlock: 16
					}, {
						numBlocks: 4,
						dataCodewordsPerBlock: 17
					}]
				}, {
					ecCodewordsPerBlock: 24,
					ecBlocks: [{
						numBlocks: 4,
						dataCodewordsPerBlock: 12
					}, {
						numBlocks: 4,
						dataCodewordsPerBlock: 13
					}]
				}]
			}, {
				infoBits: 42195,
				versionNumber: 10,
				alignmentPatternCenters: [6, 28, 50],
				errorCorrectionLevels: [{
					ecCodewordsPerBlock: 18,
					ecBlocks: [{
						numBlocks: 2,
						dataCodewordsPerBlock: 68
					}, {
						numBlocks: 2,
						dataCodewordsPerBlock: 69
					}]
				}, {
					ecCodewordsPerBlock: 26,
					ecBlocks: [{
						numBlocks: 4,
						dataCodewordsPerBlock: 43
					}, {
						numBlocks: 1,
						dataCodewordsPerBlock: 44
					}]
				}, {
					ecCodewordsPerBlock: 24,
					ecBlocks: [{
						numBlocks: 6,
						dataCodewordsPerBlock: 19
					}, {
						numBlocks: 2,
						dataCodewordsPerBlock: 20
					}]
				}, {
					ecCodewordsPerBlock: 28,
					ecBlocks: [{
						numBlocks: 6,
						dataCodewordsPerBlock: 15
					}, {
						numBlocks: 2,
						dataCodewordsPerBlock: 16
					}]
				}]
			}, {
				infoBits: 48118,
				versionNumber: 11,
				alignmentPatternCenters: [6, 30, 54],
				errorCorrectionLevels: [{
					ecCodewordsPerBlock: 20,
					ecBlocks: [{
						numBlocks: 4,
						dataCodewordsPerBlock: 81
					}]
				}, {
					ecCodewordsPerBlock: 30,
					ecBlocks: [{
						numBlocks: 1,
						dataCodewordsPerBlock: 50
					}, {
						numBlocks: 4,
						dataCodewordsPerBlock: 51
					}]
				}, {
					ecCodewordsPerBlock: 28,
					ecBlocks: [{
						numBlocks: 4,
						dataCodewordsPerBlock: 22
					}, {
						numBlocks: 4,
						dataCodewordsPerBlock: 23
					}]
				}, {
					ecCodewordsPerBlock: 24,
					ecBlocks: [{
						numBlocks: 3,
						dataCodewordsPerBlock: 12
					}, {
						numBlocks: 8,
						dataCodewordsPerBlock: 13
					}]
				}]
			}, {
				infoBits: 51042,
				versionNumber: 12,
				alignmentPatternCenters: [6, 32, 58],
				errorCorrectionLevels: [{
					ecCodewordsPerBlock: 24,
					ecBlocks: [{
						numBlocks: 2,
						dataCodewordsPerBlock: 92
					}, {
						numBlocks: 2,
						dataCodewordsPerBlock: 93
					}]
				}, {
					ecCodewordsPerBlock: 22,
					ecBlocks: [{
						numBlocks: 6,
						dataCodewordsPerBlock: 36
					}, {
						numBlocks: 2,
						dataCodewordsPerBlock: 37
					}]
				}, {
					ecCodewordsPerBlock: 26,
					ecBlocks: [{
						numBlocks: 4,
						dataCodewordsPerBlock: 20
					}, {
						numBlocks: 6,
						dataCodewordsPerBlock: 21
					}]
				}, {
					ecCodewordsPerBlock: 28,
					ecBlocks: [{
						numBlocks: 7,
						dataCodewordsPerBlock: 14
					}, {
						numBlocks: 4,
						dataCodewordsPerBlock: 15
					}]
				}]
			}, {
				infoBits: 55367,
				versionNumber: 13,
				alignmentPatternCenters: [6, 34, 62],
				errorCorrectionLevels: [{
					ecCodewordsPerBlock: 26,
					ecBlocks: [{
						numBlocks: 4,
						dataCodewordsPerBlock: 107
					}]
				}, {
					ecCodewordsPerBlock: 22,
					ecBlocks: [{
						numBlocks: 8,
						dataCodewordsPerBlock: 37
					}, {
						numBlocks: 1,
						dataCodewordsPerBlock: 38
					}]
				}, {
					ecCodewordsPerBlock: 24,
					ecBlocks: [{
						numBlocks: 8,
						dataCodewordsPerBlock: 20
					}, {
						numBlocks: 4,
						dataCodewordsPerBlock: 21
					}]
				}, {
					ecCodewordsPerBlock: 22,
					ecBlocks: [{
						numBlocks: 12,
						dataCodewordsPerBlock: 11
					}, {
						numBlocks: 4,
						dataCodewordsPerBlock: 12
					}]
				}]
			}, {
				infoBits: 58893,
				versionNumber: 14,
				alignmentPatternCenters: [6, 26, 46, 66],
				errorCorrectionLevels: [{
					ecCodewordsPerBlock: 30,
					ecBlocks: [{
						numBlocks: 3,
						dataCodewordsPerBlock: 115
					}, {
						numBlocks: 1,
						dataCodewordsPerBlock: 116
					}]
				}, {
					ecCodewordsPerBlock: 24,
					ecBlocks: [{
						numBlocks: 4,
						dataCodewordsPerBlock: 40
					}, {
						numBlocks: 5,
						dataCodewordsPerBlock: 41
					}]
				}, {
					ecCodewordsPerBlock: 20,
					ecBlocks: [{
						numBlocks: 11,
						dataCodewordsPerBlock: 16
					}, {
						numBlocks: 5,
						dataCodewordsPerBlock: 17
					}]
				}, {
					ecCodewordsPerBlock: 24,
					ecBlocks: [{
						numBlocks: 11,
						dataCodewordsPerBlock: 12
					}, {
						numBlocks: 5,
						dataCodewordsPerBlock: 13
					}]
				}]
			}, {
				infoBits: 63784,
				versionNumber: 15,
				alignmentPatternCenters: [6, 26, 48, 70],
				errorCorrectionLevels: [{
					ecCodewordsPerBlock: 22,
					ecBlocks: [{
						numBlocks: 5,
						dataCodewordsPerBlock: 87
					}, {
						numBlocks: 1,
						dataCodewordsPerBlock: 88
					}]
				}, {
					ecCodewordsPerBlock: 24,
					ecBlocks: [{
						numBlocks: 5,
						dataCodewordsPerBlock: 41
					}, {
						numBlocks: 5,
						dataCodewordsPerBlock: 42
					}]
				}, {
					ecCodewordsPerBlock: 30,
					ecBlocks: [{
						numBlocks: 5,
						dataCodewordsPerBlock: 24
					}, {
						numBlocks: 7,
						dataCodewordsPerBlock: 25
					}]
				}, {
					ecCodewordsPerBlock: 24,
					ecBlocks: [{
						numBlocks: 11,
						dataCodewordsPerBlock: 12
					}, {
						numBlocks: 7,
						dataCodewordsPerBlock: 13
					}]
				}]
			}, {
				infoBits: 68472,
				versionNumber: 16,
				alignmentPatternCenters: [6, 26, 50, 74],
				errorCorrectionLevels: [{
					ecCodewordsPerBlock: 24,
					ecBlocks: [{
						numBlocks: 5,
						dataCodewordsPerBlock: 98
					}, {
						numBlocks: 1,
						dataCodewordsPerBlock: 99
					}]
				}, {
					ecCodewordsPerBlock: 28,
					ecBlocks: [{
						numBlocks: 7,
						dataCodewordsPerBlock: 45
					}, {
						numBlocks: 3,
						dataCodewordsPerBlock: 46
					}]
				}, {
					ecCodewordsPerBlock: 24,
					ecBlocks: [{
						numBlocks: 15,
						dataCodewordsPerBlock: 19
					}, {
						numBlocks: 2,
						dataCodewordsPerBlock: 20
					}]
				}, {
					ecCodewordsPerBlock: 30,
					ecBlocks: [{
						numBlocks: 3,
						dataCodewordsPerBlock: 15
					}, {
						numBlocks: 13,
						dataCodewordsPerBlock: 16
					}]
				}]
			}, {
				infoBits: 70749,
				versionNumber: 17,
				alignmentPatternCenters: [6, 30, 54, 78],
				errorCorrectionLevels: [{
					ecCodewordsPerBlock: 28,
					ecBlocks: [{
						numBlocks: 1,
						dataCodewordsPerBlock: 107
					}, {
						numBlocks: 5,
						dataCodewordsPerBlock: 108
					}]
				}, {
					ecCodewordsPerBlock: 28,
					ecBlocks: [{
						numBlocks: 10,
						dataCodewordsPerBlock: 46
					}, {
						numBlocks: 1,
						dataCodewordsPerBlock: 47
					}]
				}, {
					ecCodewordsPerBlock: 28,
					ecBlocks: [{
						numBlocks: 1,
						dataCodewordsPerBlock: 22
					}, {
						numBlocks: 15,
						dataCodewordsPerBlock: 23
					}]
				}, {
					ecCodewordsPerBlock: 28,
					ecBlocks: [{
						numBlocks: 2,
						dataCodewordsPerBlock: 14
					}, {
						numBlocks: 17,
						dataCodewordsPerBlock: 15
					}]
				}]
			}, {
				infoBits: 76311,
				versionNumber: 18,
				alignmentPatternCenters: [6, 30, 56, 82],
				errorCorrectionLevels: [{
					ecCodewordsPerBlock: 30,
					ecBlocks: [{
						numBlocks: 5,
						dataCodewordsPerBlock: 120
					}, {
						numBlocks: 1,
						dataCodewordsPerBlock: 121
					}]
				}, {
					ecCodewordsPerBlock: 26,
					ecBlocks: [{
						numBlocks: 9,
						dataCodewordsPerBlock: 43
					}, {
						numBlocks: 4,
						dataCodewordsPerBlock: 44
					}]
				}, {
					ecCodewordsPerBlock: 28,
					ecBlocks: [{
						numBlocks: 17,
						dataCodewordsPerBlock: 22
					}, {
						numBlocks: 1,
						dataCodewordsPerBlock: 23
					}]
				}, {
					ecCodewordsPerBlock: 28,
					ecBlocks: [{
						numBlocks: 2,
						dataCodewordsPerBlock: 14
					}, {
						numBlocks: 19,
						dataCodewordsPerBlock: 15
					}]
				}]
			}, {
				infoBits: 79154,
				versionNumber: 19,
				alignmentPatternCenters: [6, 30, 58, 86],
				errorCorrectionLevels: [{
					ecCodewordsPerBlock: 28,
					ecBlocks: [{
						numBlocks: 3,
						dataCodewordsPerBlock: 113
					}, {
						numBlocks: 4,
						dataCodewordsPerBlock: 114
					}]
				}, {
					ecCodewordsPerBlock: 26,
					ecBlocks: [{
						numBlocks: 3,
						dataCodewordsPerBlock: 44
					}, {
						numBlocks: 11,
						dataCodewordsPerBlock: 45
					}]
				}, {
					ecCodewordsPerBlock: 26,
					ecBlocks: [{
						numBlocks: 17,
						dataCodewordsPerBlock: 21
					}, {
						numBlocks: 4,
						dataCodewordsPerBlock: 22
					}]
				}, {
					ecCodewordsPerBlock: 26,
					ecBlocks: [{
						numBlocks: 9,
						dataCodewordsPerBlock: 13
					}, {
						numBlocks: 16,
						dataCodewordsPerBlock: 14
					}]
				}]
			}, {
				infoBits: 84390,
				versionNumber: 20,
				alignmentPatternCenters: [6, 34, 62, 90],
				errorCorrectionLevels: [{
					ecCodewordsPerBlock: 28,
					ecBlocks: [{
						numBlocks: 3,
						dataCodewordsPerBlock: 107
					}, {
						numBlocks: 5,
						dataCodewordsPerBlock: 108
					}]
				}, {
					ecCodewordsPerBlock: 26,
					ecBlocks: [{
						numBlocks: 3,
						dataCodewordsPerBlock: 41
					}, {
						numBlocks: 13,
						dataCodewordsPerBlock: 42
					}]
				}, {
					ecCodewordsPerBlock: 30,
					ecBlocks: [{
						numBlocks: 15,
						dataCodewordsPerBlock: 24
					}, {
						numBlocks: 5,
						dataCodewordsPerBlock: 25
					}]
				}, {
					ecCodewordsPerBlock: 28,
					ecBlocks: [{
						numBlocks: 15,
						dataCodewordsPerBlock: 15
					}, {
						numBlocks: 10,
						dataCodewordsPerBlock: 16
					}]
				}]
			}, {
				infoBits: 87683,
				versionNumber: 21,
				alignmentPatternCenters: [6, 28, 50, 72, 94],
				errorCorrectionLevels: [{
					ecCodewordsPerBlock: 28,
					ecBlocks: [{
						numBlocks: 4,
						dataCodewordsPerBlock: 116
					}, {
						numBlocks: 4,
						dataCodewordsPerBlock: 117
					}]
				}, {
					ecCodewordsPerBlock: 26,
					ecBlocks: [{
						numBlocks: 17,
						dataCodewordsPerBlock: 42
					}]
				}, {
					ecCodewordsPerBlock: 28,
					ecBlocks: [{
						numBlocks: 17,
						dataCodewordsPerBlock: 22
					}, {
						numBlocks: 6,
						dataCodewordsPerBlock: 23
					}]
				}, {
					ecCodewordsPerBlock: 30,
					ecBlocks: [{
						numBlocks: 19,
						dataCodewordsPerBlock: 16
					}, {
						numBlocks: 6,
						dataCodewordsPerBlock: 17
					}]
				}]
			}, {
				infoBits: 92361,
				versionNumber: 22,
				alignmentPatternCenters: [6, 26, 50, 74, 98],
				errorCorrectionLevels: [{
					ecCodewordsPerBlock: 28,
					ecBlocks: [{
						numBlocks: 2,
						dataCodewordsPerBlock: 111
					}, {
						numBlocks: 7,
						dataCodewordsPerBlock: 112
					}]
				}, {
					ecCodewordsPerBlock: 28,
					ecBlocks: [{
						numBlocks: 17,
						dataCodewordsPerBlock: 46
					}]
				}, {
					ecCodewordsPerBlock: 30,
					ecBlocks: [{
						numBlocks: 7,
						dataCodewordsPerBlock: 24
					}, {
						numBlocks: 16,
						dataCodewordsPerBlock: 25
					}]
				}, {
					ecCodewordsPerBlock: 24,
					ecBlocks: [{
						numBlocks: 34,
						dataCodewordsPerBlock: 13
					}]
				}]
			}, {
				infoBits: 96236,
				versionNumber: 23,
				alignmentPatternCenters: [6, 30, 54, 74, 102],
				errorCorrectionLevels: [{
					ecCodewordsPerBlock: 30,
					ecBlocks: [{
						numBlocks: 4,
						dataCodewordsPerBlock: 121
					}, {
						numBlocks: 5,
						dataCodewordsPerBlock: 122
					}]
				}, {
					ecCodewordsPerBlock: 28,
					ecBlocks: [{
						numBlocks: 4,
						dataCodewordsPerBlock: 47
					}, {
						numBlocks: 14,
						dataCodewordsPerBlock: 48
					}]
				}, {
					ecCodewordsPerBlock: 30,
					ecBlocks: [{
						numBlocks: 11,
						dataCodewordsPerBlock: 24
					}, {
						numBlocks: 14,
						dataCodewordsPerBlock: 25
					}]
				}, {
					ecCodewordsPerBlock: 30,
					ecBlocks: [{
						numBlocks: 16,
						dataCodewordsPerBlock: 15
					}, {
						numBlocks: 14,
						dataCodewordsPerBlock: 16
					}]
				}]
			}, {
				infoBits: 102084,
				versionNumber: 24,
				alignmentPatternCenters: [6, 28, 54, 80, 106],
				errorCorrectionLevels: [{
					ecCodewordsPerBlock: 30,
					ecBlocks: [{
						numBlocks: 6,
						dataCodewordsPerBlock: 117
					}, {
						numBlocks: 4,
						dataCodewordsPerBlock: 118
					}]
				}, {
					ecCodewordsPerBlock: 28,
					ecBlocks: [{
						numBlocks: 6,
						dataCodewordsPerBlock: 45
					}, {
						numBlocks: 14,
						dataCodewordsPerBlock: 46
					}]
				}, {
					ecCodewordsPerBlock: 30,
					ecBlocks: [{
						numBlocks: 11,
						dataCodewordsPerBlock: 24
					}, {
						numBlocks: 16,
						dataCodewordsPerBlock: 25
					}]
				}, {
					ecCodewordsPerBlock: 30,
					ecBlocks: [{
						numBlocks: 30,
						dataCodewordsPerBlock: 16
					}, {
						numBlocks: 2,
						dataCodewordsPerBlock: 17
					}]
				}]
			}, {
				infoBits: 102881,
				versionNumber: 25,
				alignmentPatternCenters: [6, 32, 58, 84, 110],
				errorCorrectionLevels: [{
					ecCodewordsPerBlock: 26,
					ecBlocks: [{
						numBlocks: 8,
						dataCodewordsPerBlock: 106
					}, {
						numBlocks: 4,
						dataCodewordsPerBlock: 107
					}]
				}, {
					ecCodewordsPerBlock: 28,
					ecBlocks: [{
						numBlocks: 8,
						dataCodewordsPerBlock: 47
					}, {
						numBlocks: 13,
						dataCodewordsPerBlock: 48
					}]
				}, {
					ecCodewordsPerBlock: 30,
					ecBlocks: [{
						numBlocks: 7,
						dataCodewordsPerBlock: 24
					}, {
						numBlocks: 22,
						dataCodewordsPerBlock: 25
					}]
				}, {
					ecCodewordsPerBlock: 30,
					ecBlocks: [{
						numBlocks: 22,
						dataCodewordsPerBlock: 15
					}, {
						numBlocks: 13,
						dataCodewordsPerBlock: 16
					}]
				}]
			}, {
				infoBits: 110507,
				versionNumber: 26,
				alignmentPatternCenters: [6, 30, 58, 86, 114],
				errorCorrectionLevels: [{
					ecCodewordsPerBlock: 28,
					ecBlocks: [{
						numBlocks: 10,
						dataCodewordsPerBlock: 114
					}, {
						numBlocks: 2,
						dataCodewordsPerBlock: 115
					}]
				}, {
					ecCodewordsPerBlock: 28,
					ecBlocks: [{
						numBlocks: 19,
						dataCodewordsPerBlock: 46
					}, {
						numBlocks: 4,
						dataCodewordsPerBlock: 47
					}]
				}, {
					ecCodewordsPerBlock: 28,
					ecBlocks: [{
						numBlocks: 28,
						dataCodewordsPerBlock: 22
					}, {
						numBlocks: 6,
						dataCodewordsPerBlock: 23
					}]
				}, {
					ecCodewordsPerBlock: 30,
					ecBlocks: [{
						numBlocks: 33,
						dataCodewordsPerBlock: 16
					}, {
						numBlocks: 4,
						dataCodewordsPerBlock: 17
					}]
				}]
			}, {
				infoBits: 110734,
				versionNumber: 27,
				alignmentPatternCenters: [6, 34, 62, 90, 118],
				errorCorrectionLevels: [{
					ecCodewordsPerBlock: 30,
					ecBlocks: [{
						numBlocks: 8,
						dataCodewordsPerBlock: 122
					}, {
						numBlocks: 4,
						dataCodewordsPerBlock: 123
					}]
				}, {
					ecCodewordsPerBlock: 28,
					ecBlocks: [{
						numBlocks: 22,
						dataCodewordsPerBlock: 45
					}, {
						numBlocks: 3,
						dataCodewordsPerBlock: 46
					}]
				}, {
					ecCodewordsPerBlock: 30,
					ecBlocks: [{
						numBlocks: 8,
						dataCodewordsPerBlock: 23
					}, {
						numBlocks: 26,
						dataCodewordsPerBlock: 24
					}]
				}, {
					ecCodewordsPerBlock: 30,
					ecBlocks: [{
						numBlocks: 12,
						dataCodewordsPerBlock: 15
					}, {
						numBlocks: 28,
						dataCodewordsPerBlock: 16
					}]
				}]
			}, {
				infoBits: 117786,
				versionNumber: 28,
				alignmentPatternCenters: [6, 26, 50, 74, 98, 122],
				errorCorrectionLevels: [{
					ecCodewordsPerBlock: 30,
					ecBlocks: [{
						numBlocks: 3,
						dataCodewordsPerBlock: 117
					}, {
						numBlocks: 10,
						dataCodewordsPerBlock: 118
					}]
				}, {
					ecCodewordsPerBlock: 28,
					ecBlocks: [{
						numBlocks: 3,
						dataCodewordsPerBlock: 45
					}, {
						numBlocks: 23,
						dataCodewordsPerBlock: 46
					}]
				}, {
					ecCodewordsPerBlock: 30,
					ecBlocks: [{
						numBlocks: 4,
						dataCodewordsPerBlock: 24
					}, {
						numBlocks: 31,
						dataCodewordsPerBlock: 25
					}]
				}, {
					ecCodewordsPerBlock: 30,
					ecBlocks: [{
						numBlocks: 11,
						dataCodewordsPerBlock: 15
					}, {
						numBlocks: 31,
						dataCodewordsPerBlock: 16
					}]
				}]
			}, {
				infoBits: 119615,
				versionNumber: 29,
				alignmentPatternCenters: [6, 30, 54, 78, 102, 126],
				errorCorrectionLevels: [{
					ecCodewordsPerBlock: 30,
					ecBlocks: [{
						numBlocks: 7,
						dataCodewordsPerBlock: 116
					}, {
						numBlocks: 7,
						dataCodewordsPerBlock: 117
					}]
				}, {
					ecCodewordsPerBlock: 28,
					ecBlocks: [{
						numBlocks: 21,
						dataCodewordsPerBlock: 45
					}, {
						numBlocks: 7,
						dataCodewordsPerBlock: 46
					}]
				}, {
					ecCodewordsPerBlock: 30,
					ecBlocks: [{
						numBlocks: 1,
						dataCodewordsPerBlock: 23
					}, {
						numBlocks: 37,
						dataCodewordsPerBlock: 24
					}]
				}, {
					ecCodewordsPerBlock: 30,
					ecBlocks: [{
						numBlocks: 19,
						dataCodewordsPerBlock: 15
					}, {
						numBlocks: 26,
						dataCodewordsPerBlock: 16
					}]
				}]
			}, {
				infoBits: 126325,
				versionNumber: 30,
				alignmentPatternCenters: [6, 26, 52, 78, 104, 130],
				errorCorrectionLevels: [{
					ecCodewordsPerBlock: 30,
					ecBlocks: [{
						numBlocks: 5,
						dataCodewordsPerBlock: 115
					}, {
						numBlocks: 10,
						dataCodewordsPerBlock: 116
					}]
				}, {
					ecCodewordsPerBlock: 28,
					ecBlocks: [{
						numBlocks: 19,
						dataCodewordsPerBlock: 47
					}, {
						numBlocks: 10,
						dataCodewordsPerBlock: 48
					}]
				}, {
					ecCodewordsPerBlock: 30,
					ecBlocks: [{
						numBlocks: 15,
						dataCodewordsPerBlock: 24
					}, {
						numBlocks: 25,
						dataCodewordsPerBlock: 25
					}]
				}, {
					ecCodewordsPerBlock: 30,
					ecBlocks: [{
						numBlocks: 23,
						dataCodewordsPerBlock: 15
					}, {
						numBlocks: 25,
						dataCodewordsPerBlock: 16
					}]
				}]
			}, {
				infoBits: 127568,
				versionNumber: 31,
				alignmentPatternCenters: [6, 30, 56, 82, 108, 134],
				errorCorrectionLevels: [{
					ecCodewordsPerBlock: 30,
					ecBlocks: [{
						numBlocks: 13,
						dataCodewordsPerBlock: 115
					}, {
						numBlocks: 3,
						dataCodewordsPerBlock: 116
					}]
				}, {
					ecCodewordsPerBlock: 28,
					ecBlocks: [{
						numBlocks: 2,
						dataCodewordsPerBlock: 46
					}, {
						numBlocks: 29,
						dataCodewordsPerBlock: 47
					}]
				}, {
					ecCodewordsPerBlock: 30,
					ecBlocks: [{
						numBlocks: 42,
						dataCodewordsPerBlock: 24
					}, {
						numBlocks: 1,
						dataCodewordsPerBlock: 25
					}]
				}, {
					ecCodewordsPerBlock: 30,
					ecBlocks: [{
						numBlocks: 23,
						dataCodewordsPerBlock: 15
					}, {
						numBlocks: 28,
						dataCodewordsPerBlock: 16
					}]
				}]
			}, {
				infoBits: 133589,
				versionNumber: 32,
				alignmentPatternCenters: [6, 34, 60, 86, 112, 138],
				errorCorrectionLevels: [{
					ecCodewordsPerBlock: 30,
					ecBlocks: [{
						numBlocks: 17,
						dataCodewordsPerBlock: 115
					}]
				}, {
					ecCodewordsPerBlock: 28,
					ecBlocks: [{
						numBlocks: 10,
						dataCodewordsPerBlock: 46
					}, {
						numBlocks: 23,
						dataCodewordsPerBlock: 47
					}]
				}, {
					ecCodewordsPerBlock: 30,
					ecBlocks: [{
						numBlocks: 10,
						dataCodewordsPerBlock: 24
					}, {
						numBlocks: 35,
						dataCodewordsPerBlock: 25
					}]
				}, {
					ecCodewordsPerBlock: 30,
					ecBlocks: [{
						numBlocks: 19,
						dataCodewordsPerBlock: 15
					}, {
						numBlocks: 35,
						dataCodewordsPerBlock: 16
					}]
				}]
			}, {
				infoBits: 136944,
				versionNumber: 33,
				alignmentPatternCenters: [6, 30, 58, 86, 114, 142],
				errorCorrectionLevels: [{
					ecCodewordsPerBlock: 30,
					ecBlocks: [{
						numBlocks: 17,
						dataCodewordsPerBlock: 115
					}, {
						numBlocks: 1,
						dataCodewordsPerBlock: 116
					}]
				}, {
					ecCodewordsPerBlock: 28,
					ecBlocks: [{
						numBlocks: 14,
						dataCodewordsPerBlock: 46
					}, {
						numBlocks: 21,
						dataCodewordsPerBlock: 47
					}]
				}, {
					ecCodewordsPerBlock: 30,
					ecBlocks: [{
						numBlocks: 29,
						dataCodewordsPerBlock: 24
					}, {
						numBlocks: 19,
						dataCodewordsPerBlock: 25
					}]
				}, {
					ecCodewordsPerBlock: 30,
					ecBlocks: [{
						numBlocks: 11,
						dataCodewordsPerBlock: 15
					}, {
						numBlocks: 46,
						dataCodewordsPerBlock: 16
					}]
				}]
			}, {
				infoBits: 141498,
				versionNumber: 34,
				alignmentPatternCenters: [6, 34, 62, 90, 118, 146],
				errorCorrectionLevels: [{
					ecCodewordsPerBlock: 30,
					ecBlocks: [{
						numBlocks: 13,
						dataCodewordsPerBlock: 115
					}, {
						numBlocks: 6,
						dataCodewordsPerBlock: 116
					}]
				}, {
					ecCodewordsPerBlock: 28,
					ecBlocks: [{
						numBlocks: 14,
						dataCodewordsPerBlock: 46
					}, {
						numBlocks: 23,
						dataCodewordsPerBlock: 47
					}]
				}, {
					ecCodewordsPerBlock: 30,
					ecBlocks: [{
						numBlocks: 44,
						dataCodewordsPerBlock: 24
					}, {
						numBlocks: 7,
						dataCodewordsPerBlock: 25
					}]
				}, {
					ecCodewordsPerBlock: 30,
					ecBlocks: [{
						numBlocks: 59,
						dataCodewordsPerBlock: 16
					}, {
						numBlocks: 1,
						dataCodewordsPerBlock: 17
					}]
				}]
			}, {
				infoBits: 145311,
				versionNumber: 35,
				alignmentPatternCenters: [6, 30, 54, 78, 102, 126, 150],
				errorCorrectionLevels: [{
					ecCodewordsPerBlock: 30,
					ecBlocks: [{
						numBlocks: 12,
						dataCodewordsPerBlock: 121
					}, {
						numBlocks: 7,
						dataCodewordsPerBlock: 122
					}]
				}, {
					ecCodewordsPerBlock: 28,
					ecBlocks: [{
						numBlocks: 12,
						dataCodewordsPerBlock: 47
					}, {
						numBlocks: 26,
						dataCodewordsPerBlock: 48
					}]
				}, {
					ecCodewordsPerBlock: 30,
					ecBlocks: [{
						numBlocks: 39,
						dataCodewordsPerBlock: 24
					}, {
						numBlocks: 14,
						dataCodewordsPerBlock: 25
					}]
				}, {
					ecCodewordsPerBlock: 30,
					ecBlocks: [{
						numBlocks: 22,
						dataCodewordsPerBlock: 15
					}, {
						numBlocks: 41,
						dataCodewordsPerBlock: 16
					}]
				}]
			}, {
				infoBits: 150283,
				versionNumber: 36,
				alignmentPatternCenters: [6, 24, 50, 76, 102, 128, 154],
				errorCorrectionLevels: [{
					ecCodewordsPerBlock: 30,
					ecBlocks: [{
						numBlocks: 6,
						dataCodewordsPerBlock: 121
					}, {
						numBlocks: 14,
						dataCodewordsPerBlock: 122
					}]
				}, {
					ecCodewordsPerBlock: 28,
					ecBlocks: [{
						numBlocks: 6,
						dataCodewordsPerBlock: 47
					}, {
						numBlocks: 34,
						dataCodewordsPerBlock: 48
					}]
				}, {
					ecCodewordsPerBlock: 30,
					ecBlocks: [{
						numBlocks: 46,
						dataCodewordsPerBlock: 24
					}, {
						numBlocks: 10,
						dataCodewordsPerBlock: 25
					}]
				}, {
					ecCodewordsPerBlock: 30,
					ecBlocks: [{
						numBlocks: 2,
						dataCodewordsPerBlock: 15
					}, {
						numBlocks: 64,
						dataCodewordsPerBlock: 16
					}]
				}]
			}, {
				infoBits: 152622,
				versionNumber: 37,
				alignmentPatternCenters: [6, 28, 54, 80, 106, 132, 158],
				errorCorrectionLevels: [{
					ecCodewordsPerBlock: 30,
					ecBlocks: [{
						numBlocks: 17,
						dataCodewordsPerBlock: 122
					}, {
						numBlocks: 4,
						dataCodewordsPerBlock: 123
					}]
				}, {
					ecCodewordsPerBlock: 28,
					ecBlocks: [{
						numBlocks: 29,
						dataCodewordsPerBlock: 46
					}, {
						numBlocks: 14,
						dataCodewordsPerBlock: 47
					}]
				}, {
					ecCodewordsPerBlock: 30,
					ecBlocks: [{
						numBlocks: 49,
						dataCodewordsPerBlock: 24
					}, {
						numBlocks: 10,
						dataCodewordsPerBlock: 25
					}]
				}, {
					ecCodewordsPerBlock: 30,
					ecBlocks: [{
						numBlocks: 24,
						dataCodewordsPerBlock: 15
					}, {
						numBlocks: 46,
						dataCodewordsPerBlock: 16
					}]
				}]
			}, {
				infoBits: 158308,
				versionNumber: 38,
				alignmentPatternCenters: [6, 32, 58, 84, 110, 136, 162],
				errorCorrectionLevels: [{
					ecCodewordsPerBlock: 30,
					ecBlocks: [{
						numBlocks: 4,
						dataCodewordsPerBlock: 122
					}, {
						numBlocks: 18,
						dataCodewordsPerBlock: 123
					}]
				}, {
					ecCodewordsPerBlock: 28,
					ecBlocks: [{
						numBlocks: 13,
						dataCodewordsPerBlock: 46
					}, {
						numBlocks: 32,
						dataCodewordsPerBlock: 47
					}]
				}, {
					ecCodewordsPerBlock: 30,
					ecBlocks: [{
						numBlocks: 48,
						dataCodewordsPerBlock: 24
					}, {
						numBlocks: 14,
						dataCodewordsPerBlock: 25
					}]
				}, {
					ecCodewordsPerBlock: 30,
					ecBlocks: [{
						numBlocks: 42,
						dataCodewordsPerBlock: 15
					}, {
						numBlocks: 32,
						dataCodewordsPerBlock: 16
					}]
				}]
			}, {
				infoBits: 161089,
				versionNumber: 39,
				alignmentPatternCenters: [6, 26, 54, 82, 110, 138, 166],
				errorCorrectionLevels: [{
					ecCodewordsPerBlock: 30,
					ecBlocks: [{
						numBlocks: 20,
						dataCodewordsPerBlock: 117
					}, {
						numBlocks: 4,
						dataCodewordsPerBlock: 118
					}]
				}, {
					ecCodewordsPerBlock: 28,
					ecBlocks: [{
						numBlocks: 40,
						dataCodewordsPerBlock: 47
					}, {
						numBlocks: 7,
						dataCodewordsPerBlock: 48
					}]
				}, {
					ecCodewordsPerBlock: 30,
					ecBlocks: [{
						numBlocks: 43,
						dataCodewordsPerBlock: 24
					}, {
						numBlocks: 22,
						dataCodewordsPerBlock: 25
					}]
				}, {
					ecCodewordsPerBlock: 30,
					ecBlocks: [{
						numBlocks: 10,
						dataCodewordsPerBlock: 15
					}, {
						numBlocks: 67,
						dataCodewordsPerBlock: 16
					}]
				}]
			}, {
				infoBits: 167017,
				versionNumber: 40,
				alignmentPatternCenters: [6, 30, 58, 86, 114, 142, 170],
				errorCorrectionLevels: [{
					ecCodewordsPerBlock: 30,
					ecBlocks: [{
						numBlocks: 19,
						dataCodewordsPerBlock: 118
					}, {
						numBlocks: 6,
						dataCodewordsPerBlock: 119
					}]
				}, {
					ecCodewordsPerBlock: 28,
					ecBlocks: [{
						numBlocks: 18,
						dataCodewordsPerBlock: 47
					}, {
						numBlocks: 31,
						dataCodewordsPerBlock: 48
					}]
				}, {
					ecCodewordsPerBlock: 30,
					ecBlocks: [{
						numBlocks: 34,
						dataCodewordsPerBlock: 24
					}, {
						numBlocks: 34,
						dataCodewordsPerBlock: 25
					}]
				}, {
					ecCodewordsPerBlock: 30,
					ecBlocks: [{
						numBlocks: 20,
						dataCodewordsPerBlock: 15
					}, {
						numBlocks: 61,
						dataCodewordsPerBlock: 16
					}]
				}]
			}]
		}, function(e, t, o) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = o(0);

			function n(e, t, o, s) {
				var n = e.x - t.x + o.x - s.x,
					r = e.y - t.y + o.y - s.y;
				if (0 === n && 0 === r) return {
					a11: t.x - e.x,
					a12: t.y - e.y,
					a13: 0,
					a21: o.x - t.x,
					a22: o.y - t.y,
					a23: 0,
					a31: e.x,
					a32: e.y,
					a33: 1
				};
				var a = t.x - o.x,
					d = s.x - o.x,
					u = t.y - o.y,
					c = s.y - o.y,
					l = a * c - d * u,
					i = (n * c - d * r) / l,
					f = (a * r - n * u) / l;
				return {
					a11: t.x - e.x + i * t.x,
					a12: t.y - e.y + i * t.y,
					a13: i,
					a21: s.x - e.x + f * s.x,
					a22: s.y - e.y + f * s.y,
					a23: f,
					a31: e.x,
					a32: e.y,
					a33: 1
				}
			}
			t.extract = function(e, t) {
				for (var o, r, a = function(e, t, o, s) {
						var r = n(e, t, o, s);
						return {
							a11: r.a22 * r.a33 - r.a23 * r.a32,
							a12: r.a13 * r.a32 - r.a12 * r.a33,
							a13: r.a12 * r.a23 - r.a13 * r.a22,
							a21: r.a23 * r.a31 - r.a21 * r.a33,
							a22: r.a11 * r.a33 - r.a13 * r.a31,
							a23: r.a13 * r.a21 - r.a11 * r.a23,
							a31: r.a21 * r.a32 - r.a22 * r.a31,
							a32: r.a12 * r.a31 - r.a11 * r.a32,
							a33: r.a11 * r.a22 - r.a12 * r.a21
						}
					}({
						x: 3.5,
						y: 3.5
					}, {
						x: t.dimension - 3.5,
						y: 3.5
					}, {
						x: t.dimension - 6.5,
						y: t.dimension - 6.5
					}, {
						x: 3.5,
						y: t.dimension - 3.5
					}), d = n(t.topLeft, t.topRight, t.alignmentPattern, t.bottomLeft), u = (r = a, {
						a11: (o = d).a11 * r.a11 + o.a21 * r.a12 + o.a31 * r.a13,
						a12: o.a12 * r.a11 + o.a22 * r.a12 + o.a32 * r.a13,
						a13: o.a13 * r.a11 + o.a23 * r.a12 + o.a33 * r.a13,
						a21: o.a11 * r.a21 + o.a21 * r.a22 + o.a31 * r.a23,
						a22: o.a12 * r.a21 + o.a22 * r.a22 + o.a32 * r.a23,
						a23: o.a13 * r.a21 + o.a23 * r.a22 + o.a33 * r.a23,
						a31: o.a11 * r.a31 + o.a21 * r.a32 + o.a31 * r.a33,
						a32: o.a12 * r.a31 + o.a22 * r.a32 + o.a32 * r.a33,
						a33: o.a13 * r.a31 + o.a23 * r.a32 + o.a33 * r.a33
					}), c = s.BitMatrix.createEmpty(t.dimension, t.dimension), l = function(e, t) {
						var o = u.a13 * e + u.a23 * t + u.a33;
						return {
							x: (u.a11 * e + u.a21 * t + u.a31) / o,
							y: (u.a12 * e + u.a22 * t + u.a32) / o
						}
					}, i = 0; i < t.dimension; i++)
					for (var f = 0; f < t.dimension; f++) {
						var m = l(f + .5, i + .5);
						c.set(f, i, e.get(Math.floor(m.x), Math.floor(m.y)))
					}
				return {
					matrix: c,
					mappingFunction: l
				}
			}
		}, function(e, t, o) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = 4,
				n = .5,
				r = 1.5,
				a = function(e, t) {
					return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
				};

			function d(e) {
				return e.reduce(function(e, t) {
					return e + t
				})
			}

			function u(e, t, o, s) {
				var n, r, d, u, c = [{
						x: Math.floor(e.x),
						y: Math.floor(e.y)
					}],
					l = Math.abs(t.y - e.y) > Math.abs(t.x - e.x);
				l ? (n = Math.floor(e.y), r = Math.floor(e.x), d = Math.floor(t.y), u = Math.floor(t.x)) : (n = Math.floor(e.x), r = Math.floor(e.y), d = Math.floor(t.x), u = Math.floor(t.y));
				for (var i = Math.abs(d - n), f = Math.abs(u - r), m = Math.floor(-i / 2), v = n < d ? 1 : -1, g = r < u ? 1 : -1, h = !0, p = n, k = r; p !== d + v; p += v) {
					var _ = l ? k : p,
						B = l ? p : k;
					if (o.get(_, B) !== h && (h = !h, c.push({
							x: _,
							y: B
						}), c.length === s + 1)) break;
					if ((m += f) > 0) {
						if (k === u) break;
						k += g, m -= i
					}
				}
				for (var b = [], C = 0; C < s; C++) c[C] && c[C + 1] ? b.push(a(c[C], c[C + 1])) : b.push(0);
				return b
			}

			function c(e, t, o, s) {
				var n, r = t.y - e.y,
					a = t.x - e.x,
					d = u(e, t, o, Math.ceil(s / 2)),
					c = u(e, {
						x: e.x - a,
						y: e.y - r
					}, o, Math.ceil(s / 2)),
					l = d.shift() + c.shift() - 1;
				return (n = c.concat(l)).concat.apply(n, d)
			}

			function l(e, t) {
				var o = d(e) / d(t),
					s = 0;
				return t.forEach(function(t, n) {
					s += Math.pow(e[n] - t * o, 2)
				}), {
					averageSize: o,
					error: s
				}
			}

			function i(e, t, o) {
				try {
					var s = c(e, {
							x: -1,
							y: e.y
						}, o, t.length),
						n = c(e, {
							x: e.x,
							y: -1
						}, o, t.length),
						r = c(e, {
							x: Math.max(0, e.x - e.y) - 1,
							y: Math.max(0, e.y - e.x) - 1
						}, o, t.length),
						a = c(e, {
							x: Math.min(o.width, e.x + e.y) + 1,
							y: Math.min(o.height, e.y + e.x) + 1
						}, o, t.length),
						d = l(s, t),
						u = l(n, t),
						i = l(r, t),
						f = l(a, t),
						m = Math.sqrt(d.error * d.error + u.error * u.error + i.error * i.error + f.error * f.error),
						v = (d.averageSize + u.averageSize + i.averageSize + f.averageSize) / 4;
					return m + (Math.pow(d.averageSize - v, 2) + Math.pow(u.averageSize - v, 2) + Math.pow(i.averageSize - v, 2) + Math.pow(f.averageSize - v, 2)) / v
				} catch (e) {
					return 1 / 0
				}
			}
			t.locate = function(e) {
				for (var t = [], o = [], u = [], l = [], f = function(s) {
						for (var a = 0, c = !1, i = [0, 0, 0, 0, 0], f = function(t) {
								var u = e.get(t, s);
								if (u === c) a++;
								else {
									i = [i[1], i[2], i[3], i[4], a], a = 1, c = u;
									var f = d(i) / 7,
										m = Math.abs(i[0] - f) < f && Math.abs(i[1] - f) < f && Math.abs(i[2] - 3 * f) < 3 * f && Math.abs(i[3] - f) < f && Math.abs(i[4] - f) < f && !u,
										v = d(i.slice(-3)) / 3,
										g = Math.abs(i[2] - v) < v && Math.abs(i[3] - v) < v && Math.abs(i[4] - v) < v && u;
									if (m) {
										var h = t - i[3] - i[4],
											p = h - i[2],
											k = {
												startX: p,
												endX: h,
												y: s
											};
										(_ = o.filter(function(e) {
											return p >= e.bottom.startX && p <= e.bottom.endX || h >= e.bottom.startX && p <= e.bottom.endX || p <= e.bottom.startX && h >= e.bottom.endX && i[2] / (e.bottom.endX - e.bottom.startX) < r && i[2] / (e.bottom.endX - e.bottom.startX) > n
										})).length > 0 ? _[0].bottom = k : o.push({
											top: k,
											bottom: k
										})
									}
									if (g) {
										var _, B = t - i[4],
											b = B - i[3];
										k = {
											startX: b,
											y: s,
											endX: B
										}, (_ = l.filter(function(e) {
											return b >= e.bottom.startX && b <= e.bottom.endX || B >= e.bottom.startX && b <= e.bottom.endX || b <= e.bottom.startX && B >= e.bottom.endX && i[2] / (e.bottom.endX - e.bottom.startX) < r && i[2] / (e.bottom.endX - e.bottom.startX) > n
										})).length > 0 ? _[0].bottom = k : l.push({
											top: k,
											bottom: k
										})
									}
								}
							}, m = -1; m <= e.width; m++) f(m);
						t.push.apply(t, o.filter(function(e) {
							return e.bottom.y !== s && e.bottom.y - e.top.y >= 2
						})), o = o.filter(function(e) {
							return e.bottom.y === s
						}), u.push.apply(u, l.filter(function(e) {
							return e.bottom.y !== s
						})), l = l.filter(function(e) {
							return e.bottom.y === s
						})
					}, m = 0; m <= e.height; m++) f(m);
				t.push.apply(t, o.filter(function(e) {
					return e.bottom.y - e.top.y >= 2
				})), u.push.apply(u, l);
				var v = t.filter(function(e) {
					return e.bottom.y - e.top.y >= 2
				}).map(function(t) {
					var o = (t.top.startX + t.top.endX + t.bottom.startX + t.bottom.endX) / 4,
						s = (t.top.y + t.bottom.y + 1) / 2;
					if (e.get(Math.round(o), Math.round(s))) {
						var n = [t.top.endX - t.top.startX, t.bottom.endX - t.bottom.startX, t.bottom.y - t.top.y + 1],
							r = d(n) / n.length;
						return {
							score: i({
								x: Math.round(o),
								y: Math.round(s)
							}, [1, 1, 3, 1, 1], e),
							x: o,
							y: s,
							size: r
						}
					}
				}).filter(function(e) {
					return !!e
				}).sort(function(e, t) {
					return e.score - t.score
				}).map(function(e, t, o) {
					if (t > s) return null;
					var n = o.filter(function(e, o) {
						return t !== o
					}).map(function(t) {
						return {
							x: t.x,
							y: t.y,
							score: t.score + Math.pow(t.size - e.size, 2) / e.size,
							size: t.size
						}
					}).sort(function(e, t) {
						return e.score - t.score
					});
					if (n.length < 2) return null;
					var r = e.score + n[0].score + n[1].score;
					return {
						points: [e].concat(n.slice(0, 2)),
						score: r
					}
				}).filter(function(e) {
					return !!e
				}).sort(function(e, t) {
					return e.score - t.score
				});
				if (0 === v.length) return null;
				var g, h, p = function(e, t, o) {
						var s, n, r, d, u, c, l, i = a(e, t),
							f = a(t, o),
							m = a(e, o);
						return f >= i && f >= m ? (s = (d = [t, e, o])[0], n = d[1], r = d[2]) : m >= f && m >= i ? (s = (u = [e, t, o])[0], n = u[1], r = u[2]) : (s = (c = [e, o, t])[0], n = c[1], r = c[2]), (r.x - n.x) * (s.y - n.y) - (r.y - n.y) * (s.x - n.x) < 0 && (s = (l = [r, s])[0], r = l[1]), {
							bottomLeft: s,
							topLeft: n,
							topRight: r
						}
					}(v[0].points[0], v[0].points[1], v[0].points[2]),
					k = p.topRight,
					_ = p.topLeft,
					B = p.bottomLeft;
				try {
					b = function(e, t, o, s) {
						var n = (d(c(e, o, s, 5)) / 7 + d(c(e, t, s, 5)) / 7 + d(c(o, e, s, 5)) / 7 + d(c(t, e, s, 5)) / 7) / 4;
						if (n < 1) throw new Error("Invalid module size");
						var r = Math.round(a(e, t) / n),
							u = Math.round(a(e, o) / n),
							l = Math.floor((r + u) / 2) + 7;
						switch (l % 4) {
							case 0:
								l++;
								break;
							case 2:
								l--
						}
						return {
							dimension: l,
							moduleSize: n
						}
					}(_, k, B, e), g = b.dimension, h = b.moduleSize
				} catch (e) {
					return null
				}
				var b, C = k.x - _.x + B.x,
					w = k.y - _.y + B.y,
					y = (a(_, B) + a(_, k)) / 2 / h,
					x = 1 - 3 / y,
					P = {
						x: _.x + x * (C - _.x),
						y: _.y + x * (w - _.y)
					},
					E = u.map(function(t) {
						var o = (t.top.startX + t.top.endX + t.bottom.startX + t.bottom.endX) / 4,
							s = (t.top.y + t.bottom.y + 1) / 2;
						if (e.get(Math.floor(o), Math.floor(s))) {
							var n = [t.top.endX - t.top.startX, t.bottom.endX - t.bottom.startX, t.bottom.y - t.top.y + 1];
							return d(n), {
								x: o,
								y: s,
								score: i({
									x: Math.floor(o),
									y: Math.floor(s)
								}, [1, 1, 1], e) + a({
									x: o,
									y: s
								}, P)
							}
						}
					}).filter(function(e) {
						return !!e
					}).sort(function(e, t) {
						return e.score - t.score
					}),
					M = y >= 15 && E.length ? E[0] : P;
				return {
					alignmentPattern: {
						x: M.x,
						y: M.y
					},
					bottomLeft: {
						x: B.x,
						y: B.y
					},
					dimension: g,
					topLeft: {
						x: _.x,
						y: _.y
					},
					topRight: {
						x: k.x,
						y: k.y
					}
				}
			}
		}]).default
	}, e.exports = s()
}, function(e, t, o) {
	"use strict";

	function s(e) {
		const t = e.slice(1);
		return t ? function(e = "") {
			return Object.freeze(JSON.parse(decodeURIComponent(e)))
		}(t) : {}
	}
	o.d(t, "fromHash", function() {
		return s
	})
}, function(e, t, o) {
	"use strict";
	o.d(t, "omitUndefined", function() {
		return s
	});
	const s = e => Object.fromEntries(Object.entries(e).filter(([, e]) => void 0 !== e))
}, function(e, t) {
	function o(e, t) {
		if (!e) throw new Error(t || "Assertion failed")
	}
	e.exports = o, o.equal = function(e, t, o) {
		if (e != t) throw new Error(o || "Assertion failed: " + e + " != " + t)
	}
}, function(e, t, o) {
	"use strict";
	o.r(t), o.d(t, "targeted", function() {
		return u
	}), o.d(t, "rpcRenderer", function() {
		return h
	}), o.d(t, "rpcListener", function() {
		return p
	}), o.d(t, "createServer", function() {
		return k
	}), o.d(t, "createClient", function() {
		return _
	}), o.d(t, "createClientMethod", function() {
		return B
	});
	var s = o(5),
		n = o(7),
		r = o(18),
		a = o(16);
	const d = Object(a.wrapIpc)(s.ipcRenderer, function(e) {
		return 0 === e.senderId || void 0 === e.senderId || (console.error("Blocked direct IPC communication from a non-browser process"), !1)
	});

	function u(e, t, o) {
		"#" === e ? s.ipcRenderer.send(t, {
			channel: t,
			payload: o
		}) : s.ipcRenderer.send("ipc:target:send", {
			target: e,
			channel: t,
			payload: o
		})
	}
	const {
		on: c,
		once: l,
		removeListener: i,
		removeAllListeners: f,
		send: m,
		sendSync: v,
		invoke: g
	} = d, h = {
		on: c,
		once: l,
		removeListener: i,
		removeAllListeners: f,
		send: m,
		sendSync: v,
		invoke: g
	}, p = h;

	function k(...e) {
		return Object(r.createServerImplementation)(d, u, (e, t) => t.origin, ...e)
	}

	function _(...e) {
		return Object(n.createClientImplementation)(d, u, ...e)
	}

	function B(...e) {
		return Object(n.createClientMethodImplementation)(d, u, ...e)
	}
}, function(e) {
	e.exports = {
		name: "exodus",
		productName: "Exodus",
		version: "25.24.2",
		releaseDate: "25.6.9",
		description: "Secure, manage, and trade blockchain assets."
	}
}, function(e, t, o) {
	"use strict";
	o.r(t), o.d(t, "App", function() {
		return k
	});
	var s = o(0),
		n = o.n(s),
		r = o(341),
		a = o.n(r),
		d = o(340),
		u = o(337),
		c = o(21),
		l = o(2),
		i = o(6);
	const f = 300,
		m = 325,
		v = 325,
		g = 482,
		h = 88,
		p = e => {
			for (let t = 0; t < e.length; t += 4) {
				const o = (e[t] + e[t + 1] + e[t + 2]) / 3;
				e[t] = o, e[t + 1] = o, e[t + 2] = o
			}
			return e
		};
	class k extends n.a.Component {
		constructor(...e) {
			super(...e), this.state = {
				code: "",
				error: "",
				...this.props
			}, this.currentScreen = null, this.shouldCompensateForScreen = !0, this.doCapturing = (() => {
				this.setupStream().then(() => {
					setTimeout(this.captureImage, f)
				})
			}), this.handleStream = (e => {
				const t = this.refs.video;
				t.srcObject = e, t.onloadedmetadata = (e => t.play())
			}), this.handleError = (e => {
				console.log(e), this.setState({
					error: e.message || e
				})
			}), this.captureImage = (() => {
				if (d.QA_FEATURES) {
					const {
						qaQrAddress: e
					} = this.state;
					if (e) return this.sendQrData(e)
				}
				window.requestAnimationFrame(() => {
					const e = this.refs.video,
						t = this.refs.canvas.getContext("2d"),
						[o, s] = l.rpcRenderer.sendSync("sender:position:get"),
						n = this.shouldCompensateForScreen,
						r = o + g - (n ? this.currentScreen.bounds.x : 0),
						d = s + h - (n ? this.currentScreen.bounds.y : 0),
						u = m,
						c = v;
					t.drawImage(e, r, d, u, c, 0, 0, u, c);
					const i = t.getImageData(0, 0, u, c),
						f = a()(p(i.data), i.width, i.height);
					f && f.data ? this.sendQrData(f.data) : this.doCapturing()
				})
			}), this.sendQrData = (e => {
				this.setState({
					code: e,
					error: ""
				}), setTimeout(() => {
					l.rpcRenderer.send("wallet:qrCodeScan", {
						qrData: e
					})
				}, 500)
			}), this.close = (() => {
				this.state.error ? l.rpcRenderer.send("wallet:qrCodeScan", {
					error: this.state.error
				}) : l.rpcRenderer.sendSync("sender:close")
			})
		}
		componentDidMount() {
			l.rpcRenderer.on("wallet:qr:changeState", (e, t) => {
				this.setState({
					code: "",
					error: "",
					...t
				}), this.doCapturing()
			}), this.doCapturing()
		}
		componentWillUnmount() {
			l.rpcRenderer.removeAllListeners("wallet:qr:changeState")
		}
		async setupStream() {
			const e = await Object(i.getCurrentScreen)();
			if (!this.currentScreen || this.currentScreen.id !== e.id && this.shouldCompensateForScreen) return this.currentScreen = e, Object(i.default)(e.id).then(({
				media: e,
				shouldCompensateForScreen: t
			}) => {
				this.handleStream(e), this.shouldCompensateForScreen = t
			}).catch(this.handleError)
		}
		render() {
			const {
				error: e,
				assetName: t,
				assetColorLight5: o,
				assetColorLight20: s,
				displayTicker: r
			} = this.state;
			return n.a.createElement("div", {
				className: "x-modal x-qr-desktop"
			}, n.a.createElement("span", {
				id: "qr-close-button",
				className: "x-modal__close",
				title: "Close",
				onClick: this.close
			}), n.a.createElement("div", {
				className: "x-modal__container"
			}, n.a.createElement("div", {
				className: "x-qr-desktop__infocol"
			}, n.a.createElement("div", {
				className: "x-qr-desktop__drag-top"
			}), n.a.createElement("div", {
				className: "x-qr-desktop__drag"
			}, n.a.createElement("img", {
				src: u.default[t],
				id: "qr-logo",
				className: "x-qr-desktop__logo"
			}), n.a.createElement("h2", {
				id: "qr-address-text",
				className: "x-modal__title"
			}, "Scan ", r, " address ", n.a.createElement("br", null), " from a QR code"), n.a.createElement("span", {
				className: "x-qr-desktop__subtitle"
			}, "Drag this window over your QR code"), !!e && n.a.createElement("p", {
				className: "error"
			}, "Error: ", e), n.a.createElement(c.default, {
				className: "x-qr-desktop__exlogo"
			}))), n.a.createElement("div", {
				className: "x-qr-desktop__scancol"
			}, n.a.createElement("svg", {
				className: "x-qr-desktop__scancol-bg",
				viewBox: "0 0 408 494",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd",
				opacity: ".79743"
			}, n.a.createElement("path", {
				d: "m39 412h330v-330h-330v330zm0 82h-39v-494h39 330 39v494h-39-330z",
				fill: "#fff"
			}))), n.a.createElement("video", {
				ref: "video",
				style: "display:none"
			}), n.a.createElement("canvas", {
				ref: "canvas",
				style: "display:none",
				width: m,
				height: v
			}), n.a.createElement("span", {
				className: "x-qr-desktop__scancol-frame x-qr-desktop__scancol-frame--tl",
				style: `--asset-light-5-color: ${o}; --asset-light-20-color: ${s};`
			}), n.a.createElement("span", {
				className: "x-qr-desktop__scancol-frame x-qr-desktop__scancol-frame--tr",
				style: `--asset-light-5-color: ${o}; --asset-light-20-color: ${s};`
			}), n.a.createElement("span", {
				className: "x-qr-desktop__scancol-frame x-qr-desktop__scancol-frame--bl",
				style: `--asset-light-5-color: ${o}; --asset-light-20-color: ${s};`
			}), n.a.createElement("span", {
				className: "x-qr-desktop__scancol-frame x-qr-desktop__scancol-frame--br",
				style: `--asset-light-5-color: ${o}; --asset-light-20-color: ${s};`
			}))))
		}
	}
}, function(e, t, o) {
	/*!
	 * inferno v1.1.2
	 * (c) 2017 Dominic Gannaway
	 * Released under the MIT License.
	 */
	! function(e) {
		"use strict";
		var t = "$NO_OP",
			o = "a runtime error occured! Use Inferno in development environment to find the error.",
			s = window.document,
			n = Array.isArray;

		function r(e) {
			var t = typeof e;
			return "string" === t || "number" === t
		}

		function a(e) {
			return m(e) || f(e)
		}

		function d(e) {
			return f(e) || !1 === e || function(e) {
				return !0 === e
			}(e) || m(e)
		}

		function u(e) {
			return "function" == typeof e
		}

		function c(e) {
			return "o" === e[0] && "n" === e[1] && e.length > 3
		}

		function l(e) {
			return "string" == typeof e
		}

		function i(e) {
			return "number" == typeof e
		}

		function f(e) {
			return null === e
		}

		function m(e) {
			return void 0 === e
		}

		function v(e) {
			return "object" == typeof e
		}

		function g(e) {
			throw e || (e = o), new Error("Inferno Error: " + e)
		}
		var h = {};

		function p(e, t) {
			return t.key = e, t
		}

		function k(e, t) {
			return i(e) && (e = "." + e), f(t.key) || "." === t.key[0] ? p(e, t) : t
		}

		function _(e, t) {
			return t.key = e + t.key, t
		}

		function B(e, t, o, s) {
			for (; o < e.length; o++) {
				var a = e[o],
					u = s + "." + o;
				d(a) || (n(a) ? B(a, t, 0, u) : (r(a) ? a = M(a) : (S(a) && a.dom || a.key && "." === a.key[0]) && (a = P(a)), a = f(a.key) || "." === a.key[0] ? p(u, a) : _(s, a), t.push(a)))
			}
		}

		function b(e) {
			return n(e) ? function(e) {
				var t;
				e.$ ? e = e.slice() : e.$ = !0;
				for (var o = 0; o < e.length; o++) {
					var s = e[o];
					if (d(s) || n(s)) {
						var a = (t || e).slice(0, o);
						return B(e, a, o, ""), a
					}
					r(s) ? (t || (t = e.slice(0, o)), t.push(k(o, M(s)))) : S(s) && s.dom || f(s.key) && !(64 & s.flags) ? (t || (t = e.slice(0, o)), t.push(k(o, P(s)))) : t && t.push(k(o, P(s)))
				}
				return t || e
			}(e) : S(e) && e.dom ? P(e) : e
		}

		function C(e, t) {
			for (var o in e) m(t[o]) && (t[o] = e[o])
		}

		function w(e) {
			var t = e.props,
				o = !f(t),
				s = e.type,
				n = e.children;
			l(s) && 28 & e.flags && (function(e, t) {
				t.flags = "svg" === e ? 128 : "input" === e ? 512 : "select" === e ? 2048 : "textarea" === e ? 1024 : "media" === e ? 256 : 2
			}(s, e), o && t.children && (e.children = t.children, n = t.children)), o && function(e, t, o) {
				28 & e.flags || !a(o) || a(t.children) || (e.children = t.children), t.ref && (e.ref = t.ref, delete t.ref), t.events && (e.events = t.events), a(t.key) || (e.key = t.key, delete t.key)
			}(e, t, n), d(n) || (e.children = b(n)), o && !d(t.children) && (t.children = b(t.children))
		}
		var y = {
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

		function x(e, t, o, s, n, r, a, d) {
			var u;
			16 & e && (e = m((u = t).prototype) || m(u.prototype.render) ? 8 : 4);
			var c = {
				children: m(s) ? null : s,
				dom: null,
				events: n || null,
				flags: e,
				key: m(r) ? null : r,
				props: o || null,
				ref: a || null,
				type: t
			};
			return d || w(c), y.createVNode && y.createVNode(c), c
		}

		function P(e, t) {
			for (var o = [], s = arguments.length - 2; s-- > 0;) o[s] = arguments[s + 2];
			var r, u = o;
			if (o.length > 0 && !f(o[0]) && (t || (t = {}), 1 === o.length && (u = o[0]), m(t.children) ? t.children = u : n(u) ? n(t.children) ? t.children = t.children.concat(u) : t.children = [t.children].concat(u) : n(t.children) ? t.children.push(u) : (t.children = [t.children], t.children.push(u))), u = null, n(e)) {
				for (var c = [], l = 0; l < e.length; l++) c.push(P(e[l]));
				r = c
			} else {
				var i = e.flags,
					v = e.events || t && t.events || null,
					g = a(e.key) ? t ? t.key : null : e.key,
					h = e.ref || (t ? t.ref : null);
				if (28 & i) {
					var p = (r = x(i, e.type, Object.assign({}, e.props, t), null, v, g, h, !0)).props;
					if (p) {
						var k = p.children;
						if (k)
							if (n(k))
								for (var _ = 0; _ < k.length; _++) {
									var B = k[_];
									!d(B) && S(B) && (p.children[_] = P(B))
								} else S(k) && (p.children = P(k))
					}
					r.children = null
				} else 3970 & i ? (u = t && t.children || e.children, r = x(i, e.type, Object.assign({}, e.props, t), u, v, g, h, !u)) : 1 & i && (r = M(e.children))
			}
			return r
		}

		function E() {
			return x(4096)
		}

		function M(e) {
			return x(1, null, null, e, null, null, null, !0)
		}

		function S(e) {
			return !!e.flags
		}
		var O = function() {
			this.listeners = [], this.fastUnmount = !0
		};

		function N(e, t, o) {
			e.split(",").forEach(function(e) {
				return t[e] = o
			})
		}
		O.prototype.addListener = function(e) {
			this.listeners.push(e)
		}, O.prototype.trigger = function() {
			for (var e = 0; e < this.listeners.length; e++) this.listeners[e]()
		};
		var A = "http://www.w3.org/2000/svg",
			L = {},
			I = {},
			j = {},
			U = {},
			R = {},
			T = {
				httpEquiv: "http-equiv",
				acceptCharset: "accept-charset"
			},
			z = /^(accentH|arabicF|capH|font[FSVW]|glyph[NO]|horiz[AO]|panose1|renderingI|strikethrough[PT]|underline[PT]|v[AHIM]|vert[AO]|xH|alignmentB|baselineS|clip[PR]|color[IPR]|dominantB|enableB|fill[OR]|flood[COF]|imageR|letterS|lightingC|marker[EMS]|pointerE|shapeR|stop[CO]|stroke[DLMOW]|text[ADR]|unicodeB|wordS|writingM).*/;

		function D(e, t, o) {
			return t + "-" + o.toLowerCase()
		}
		var F = {};
		N("xlink:href,xlink:arcrole,xlink:actuate,xlink:role,xlink:titlef,xlink:type", j, "http://www.w3.org/1999/xlink"), N("xml:base,xml:lang,xml:space", j, "http://www.w3.org/XML/1998/namespace"), N("volume,defaultValue,defaultChecked", L, !0), N("children,ref,key,selected,checked,value,multiple", R, !0), N("onClick,onMouseDown,onMouseUp,onMouseMove,onSubmit,onDblClick,onKeyDown,onKeyUp,onKeyPress", F, !0), N("muted,scoped,loop,open,checked,default,capture,disabled,readOnly,required,autoplay,controls,seamless,reversed,allowfullscreen,novalidate,hidden", I, !0), N("animationIterationCount,borderImageOutset,borderImageSlice,borderImageWidth,boxFlex,boxFlexGroup,boxOrdinalGroup,columnCount,flex,flexGrow,flexPositive,flexShrink,flexNegative,flexOrder,gridRow,gridColumn,fontWeight,lineClamp,lineHeight,opacity,order,orphans,tabSize,widows,zIndex,zoom,fillOpacity,floodOpacity,stopOpacity,strokeDasharray,strokeDashoffset,strokeMiterlimit,strokeOpacity,strokeWidth,", U, !0);
		var q = s && !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform),
			V = new Map;

		function X(e, t, o, s) {
			var n = V.get(e);
			if (o) {
				if (!n) {
					n = {
						items: new Map,
						count: 0,
						docEvent: null
					};
					var r = function(e, t) {
						var o = function(e) {
							var o = {
								stopPropagation: !1,
								dom: document
							};
							Object.defineProperty(e, "currentTarget", {
								configurable: !0,
								get: function() {
									return o.dom
								}
							}), e.stopPropagation = function() {
								o.stopPropagation = !0
							};
							var s = t.count;
							s > 0 && function e(t, o, s, n, r) {
								var a = s.get(o);
								if (!a || (n--, r.dom = o, a.event ? a.event(a.data, t) : a(t), !r.stopPropagation)) {
									var d = o.parentNode;
									n > 0 && (d || d === document.body) && e(t, d, s, n, r)
								}
							}(e, e.target, t.items, s, o)
						};
						return document.addEventListener(W(e), o), o
					}(e, n);
					n.docEvent = r, V.set(e, n)
				}
				t || (n.count++, q && "onClick" === e && function(e) {
					e.onclick = $
				}(s)), n.items.set(s, o)
			} else n && n.items.has(s) && (n.count--, n.items.delete(s), 0 === n.count && (document.removeEventListener(W(e), n.docEvent), V.delete(e)))
		}

		function W(e) {
			return e.substr(2).toLowerCase()
		}

		function $() {}

		function H(e) {
			return "checkbox" === e || "radio" === e
		}

		function Z(e, t) {
			var o = e.props || h;
			if (G(e, t), function(e) {
					return H(e.type) ? !a(e.checked) : !a(e.value)
				}(o)) {
				var s = oe.get(t);
				s || (s = {
					vNode: e
				}, H(o.type) ? (t.onclick = function(e) {
					var t = this.vNode,
						o = t.events || h,
						s = t.dom;
					if (o.onClick) {
						var n = o.onClick;
						n.event ? n.event(n.data, e) : n(e)
					} else o.onclick && o.onclick(e);
					G(this.vNode, s)
				}.bind(s), t.onclick.wrapped = !0) : (t.oninput = function(e) {
					var t = this.vNode,
						o = t.events || h,
						s = t.dom;
					if (o.onInput) {
						var n = o.onInput;
						n.event ? n.event(n.data, e) : n(e)
					} else o.oninput && o.oninput(e);
					G(this.vNode, s)
				}.bind(s), t.oninput.wrapped = !0), o.onChange && (t.onchange = function(e) {
					var t = (this.vNode.events || h).onChange;
					t.event ? t.event(t.data, e) : t(e)
				}.bind(s), t.onchange.wrapped = !0), oe.set(t, s)), s.vNode = e
			}
		}

		function G(e, t) {
			var o, s, n = e.props || h,
				r = n.type,
				d = n.value,
				u = n.checked,
				c = n.multiple;
			r && r !== t.type && (t.type = r), c && c !== t.multiple && (t.multiple = c), H(r) ? (a(d) || (t.value = d), t.checked = u, "radio" === r && n.name && (o = n.name, s = document.querySelectorAll('input[type="radio"][name="' + o + '"]'), [].forEach.call(s, function(e) {
				var t = oe.get(e);
				if (t) {
					var o = t.vNode.props;
					o && (e.checked = t.vNode.props.checked)
				}
			}))) : a(d) || t.value === d ? a(u) || (t.checked = u) : t.value = d
		}

		function J(e, t) {
			var o = e.type;
			if ("optgroup" === o) {
				var s = e.children;
				if (n(s))
					for (var r = 0; r < s.length; r++) K(s[r], t);
				else S(s) && K(s, t)
			} else K(e, t)
		}

		function K(e, t) {
			var o = e.props || h,
				s = e.dom;
			s.value = o.value, n(t) && -1 !== t.indexOf(o.value) || o.value === t ? s.selected = !0 : s.selected = o.selected || !1
		}

		function Q(e, t) {
			var o = e.props || h;
			if (Y(e, t), function(e) {
					return !a(e.value)
				}(o)) {
				var s = oe.get(t);
				s || (s = {
					vNode: e
				}, t.onchange = function(e) {
					var t = this.vNode,
						o = t.events || h,
						s = t.dom;
					if (o.onChange) {
						var n = o.onChange;
						n.event ? n.event(n.data, e) : n(e)
					} else o.onchange && o.onchange(e);
					Y(this.vNode, s)
				}.bind(s), t.onchange.wrapped = !0, oe.set(t, s)), s.vNode = e
			}
		}

		function Y(e, t) {
			var o = e.props || h;
			o.multiple !== t.multiple && (t.multiple = o.multiple);
			var s = e.children,
				r = o.value;
			if (n(s))
				for (var a = 0; a < s.length; a++) J(s[a], r);
			else S(s) && J(s, r)
		}

		function ee(e, t) {
			var o = e.props || h;
			te(e, t);
			var s = oe.get(t);
			(function(e) {
				return !a(e.value)
			})(o) && (s || (s = {
				vNode: e
			}, t.oninput = function(e) {
				var t = this.vNode,
					o = t.events || h,
					s = t.dom;
				if (o.onInput) {
					var n = o.onInput;
					n.event ? n.event(n.data, e) : n(e)
				} else o.oninput && o.oninput(e);
				te(this.vNode, s)
			}.bind(s), t.oninput.wrapped = !0, o.onChange && (t.onchange = function(e) {
				var t = (this.vNode.events || h).onChange;
				t.event ? t.event(t.data, e) : t(e)
			}.bind(s), t.onchange.wrapped = !0), oe.set(t, s)), s.vNode = e)
		}

		function te(e, t) {
			var o = e.props || h,
				s = o.value;
			t.value !== s && (a(s) || (t.value = s))
		}
		var oe = new Map;

		function se(e, t, o) {
			512 & e ? Z(t, o) : 2048 & e ? Q(t, o) : 1024 & e && ee(t, o)
		}

		function ne(e, t, o, s, r) {
			var c = e.flags;
			28 & c ? function(e, t, o, s, n) {
				var r = e.children,
					d = 4 & e.flags,
					u = e.ref,
					c = e.dom;
				if (!re.has(e) || n || t) {
					if (re.set(e), !n)
						if (d) {
							if (!r._unmounted) {
								r._ignoreSetState = !0, y.beforeUnmount && y.beforeUnmount(e), r.componentWillUnmount && r.componentWillUnmount(), u && !n && u(null), r._unmounted = !0, y.findDOMNodeEnabled && Re.delete(r);
								var l = r._lifecycle;
								l.fastUnmount || ne(r._lastInput, null, l, !1, n)
							}
						} else a(u) || a(u.onComponentWillUnmount) || u.onComponentWillUnmount(c), o.fastUnmount || ne(r, null, o, !1, n);
					if (t) {
						var i = r._lastInput;
						a(i) && (i = r), Ae(t, c)
					}
					y.recyclingEnabled && !d && (t || s) && function(e) {
						var t = e.type,
							o = e.key,
							s = e.ref;
						if (!s || !(s.onComponentWillMount || s.onComponentWillUnmount || s.onComponentDidMount || s.onComponentWillUpdate || s.onComponentDidUpdate)) {
							var n = me.get(t);
							if (m(n) && (n = {
									nonKeyed: [],
									keyed: new Map
								}, me.set(t, n)), f(o)) n.nonKeyed.push(e);
							else {
								var r = n.keyed.get(o);
								m(r) && (r = [], n.keyed.set(o, r)), r.push(e)
							}
						}
					}(e)
				}
			}(e, t, o, s, r) : 3970 & c ? function(e, t, o, s, r) {
				var c = e.dom,
					l = e.ref,
					i = e.events;
				if (!re.has(e) || r || t) {
					if (re.set(e), !o.fastUnmount) {
						l && !r && function(e) {
							if (u(e)) e(null);
							else {
								if (d(e)) return;
								g()
							}
						}(l);
						var h = e.children;
						a(h) || function(e, t, o) {
							if (n(e))
								for (var s = 0; s < e.length; s++) {
									var r = e[s];
									!d(r) && v(r) && ne(r, null, t, !1, o)
								} else v(e) && ne(e, null, t, !1, o)
						}(h, o, r)
					}
					if (!f(i))
						for (var p in i) ie(p, i[p], null, c), i[p] = null;
					t && Ae(t, c), y.recyclingEnabled && (t || s) && function(e) {
						var t = e.type,
							o = e.key,
							s = ve.get(t);
						if (m(s) && (s = {
								nonKeyed: [],
								keyed: new Map
							}, ve.set(t, s)), f(o)) s.nonKeyed.push(e);
						else {
							var n = s.keyed.get(o);
							m(n) && (n = [], s.keyed.set(o, n)), n.push(e)
						}
					}(e)
				}
			}(e, t, o, s, r) : 4097 & c && function(e, t) {
				t && Ae(t, e.dom)
			}(e, t)
		}
		var re = new WeakMap;

		function ae(e, t, o, s, n, r, a) {
			if (e !== t) {
				var d = e.flags,
					u = t.flags;
				28 & u ? 28 & d ? ce(e, t, o, s, n, r, 4 & u, a) : xe(o, Be(t, null, s, n, r, 4 & u), e, s, a) : 3970 & u ? 3970 & d ? ue(e, t, o, s, n, r, a) : xe(o, ke(t, null, s, n, r), e, s, a) : 1 & u ? 1 & d ? function(e, t) {
					var o = t.children,
						s = e.dom;
					t.dom = s, e.children !== o && (s.nodeValue = o)
				}(e, t) : xe(o, he(t, null), e, s, a) : 4096 & u ? 4096 & d ? function(e, t) {
					t.dom = e.dom
				}(e, t) : xe(o, pe(t, null), e, s, a) : function(e, t, o, s, n, r, a) {
					xe(o, ge(t, null, s, n, r), e, s, a)
				}(e, t, o, s, n, r, a)
			}
		}

		function de(e, t, o, s) {
			S(e) ? ne(e, t, o, !0, s) : n(e) ? Le(t, e, o, s) : t.textContent = ""
		}

		function ue(e, t, o, s, u, c, l) {
			var i = t.type,
				v = e.type;
			if (v !== i) Oe(e, t, o, s, u, c, l);
			else {
				var g = e.dom,
					p = e.props,
					k = t.props,
					_ = e.children,
					B = t.children,
					b = e.flags,
					C = t.flags,
					w = e.ref,
					y = t.ref,
					x = e.events,
					E = t.events;
				t.dom = g, (c || 128 & C) && (c = !0), _ !== B && function(e, t, o, s, u, c, l, i, v) {
					var g = !1,
						h = !1;
					64 & t ? g = !0 : 32 & e && 32 & t ? (h = !0, g = !0) : d(s) ? de(o, u, c, v) : d(o) ? r(s) ? Ee(u, s) : n(s) ? _e(s, u, c, l, i) : ge(s, u, c, l, i) : r(s) ? r(o) ? function(e, t) {
						e.firstChild.nodeValue = t
					}(u, s) : (de(o, u, c, v), Ee(u, s)) : n(s) ? n(o) ? (g = !0, function(e, t) {
						return t.length && !a(t[0]) && !a(t[0].key) && e.length && !a(e[0]) && !a(e[0].key)
					}(o, s) && (h = !0)) : (de(o, u, c, v), _e(s, u, c, l, i)) : n(o) ? (Le(u, o, c, v), ge(s, u, c, l, i)) : S(s) && (S(o) ? ae(o, s, u, c, l, i, v) : (de(o, u, c, v), ge(s, u, c, l, i))), g && (h ? function(e, t, o, s, n, r, a) {
						var d, u, c, l, i, v, g, h = e.length,
							p = t.length,
							k = h - 1,
							_ = p - 1,
							B = 0,
							b = 0;
						if (0 !== h)
							if (0 !== p) {
								var C = e[B],
									w = t[b],
									y = e[k],
									x = t[_];
								w.dom && (t[b] = w = P(w)), x.dom && (t[_] = x = P(x));
								e: for (;;) {
									for (; C.key === w.key;) {
										if (ae(C, w, o, s, n, r, a), b++, ++B > k || b > _) break e;
										C = e[B], (w = t[b]).dom && (t[b] = w = P(w))
									}
									for (; y.key === x.key;) {
										if (ae(y, x, o, s, n, r, a), _--, B > --k || b > _) break e;
										y = e[k], (x = t[_]).dom && (t[_] = x = P(x))
									}
									if (y.key !== w.key) {
										if (C.key !== x.key) break;
										ae(C, x, o, s, n, r, a), i = (v = _ + 1) < t.length ? t[v].dom : null, Se(o, x.dom, i), _--, C = e[++B], (x = t[_]).dom && (t[_] = x = P(x))
									} else ae(y, w, o, s, n, r, a), Se(o, w.dom, C.dom), b++, y = e[--k], (w = t[b]).dom && (t[b] = w = P(w))
								}
								if (B > k) {
									if (b <= _)
										for (i = (v = _ + 1) < t.length ? t[v].dom : null; b <= _;)(g = t[b]).dom && (t[b] = g = P(g)), b++, Se(o, ge(g, null, s, n, r), i)
								} else if (b > _)
									for (; B <= k;) ne(e[B++], o, s, !1, a);
								else {
									h = k - B + 1, p = _ - b + 1;
									var E = e,
										M = new Array(p);
									for (d = 0; d < p; d++) M[d] = -1;
									var S = !1,
										O = 0,
										N = 0;
									if (p <= 4 || h * p <= 16) {
										for (d = B; d <= k; d++)
											if (c = e[d], N < p)
												for (u = b; u <= _; u++)
													if (l = t[u], c.key === l.key) {
														M[u - b] = d, O > u ? S = !0 : O = u, l.dom && (t[u] = l = P(l)), ae(c, l, o, s, n, r, a), N++, E[d] = null;
														break
													}
									} else {
										var A = new Map;
										for (d = b; d <= _; d++) g = t[d], A.set(g.key, d);
										for (d = B; d <= k; d++) c = e[d], N < p && (m(u = A.get(c.key)) || (l = t[u], M[u - b] = d, O > u ? S = !0 : O = u, l.dom && (t[u] = l = P(l)), ae(c, l, o, s, n, r, a), N++, E[d] = null))
									}
									if (h === e.length && 0 === N)
										for (Le(o, e, s, a); b < p;)(g = t[b]).dom && (t[b] = g = P(g)), b++, Se(o, ge(g, null, s, n, r), null);
									else {
										for (d = h - N; d > 0;) f(c = E[B++]) || (ne(c, o, s, !0, a), d--);
										if (S) {
											var L = function(e) {
												var t, o, s, n, r, a = e.slice(0),
													d = [];
												for (d.push(0), t = 0; t < e.length; t++)
													if (-1 !== e[t])
														if (o = d[d.length - 1], e[o] < e[t]) a[t] = o, d.push(t);
														else {
															for (s = 0, n = d.length - 1; s < n;) e[d[r = (s + n) / 2 | 0]] < e[t] ? s = r + 1 : n = r;
															e[t] < e[d[s]] && (s > 0 && (a[t] = d[s - 1]), d[s] = t)
														} for (s = d.length, n = d[s - 1]; s-- > 0;) d[s] = n, n = a[n];
												return d
											}(M);
											for (u = L.length - 1, d = p - 1; d >= 0; d--) - 1 === M[d] ? ((g = t[O = d + b]).dom && (t[O] = g = P(g)), i = (v = O + 1) < t.length ? t[v].dom : null, Se(o, ge(g, o, s, n, r), i)) : u < 0 || d !== L[u] ? (g = t[O = d + b], i = (v = O + 1) < t.length ? t[v].dom : null, Se(o, g.dom, i)) : u--
										} else if (N !== p)
											for (d = p - 1; d >= 0; d--) - 1 === M[d] && ((g = t[O = d + b]).dom && (t[O] = g = P(g)), i = (v = O + 1) < t.length ? t[v].dom : null, Se(o, ge(g, null, s, n, r), i))
									}
								}
							} else Le(o, e, s, a);
						else 0 !== p && _e(t, o, s, n, r)
					}(o, s, u, c, l, i, v) : function(e, t, o, s, n, r, a) {
						for (var d = e.length, u = t.length, c = d > u ? u : d, l = 0; l < c; l++) {
							var i = t[l];
							i.dom && (i = t[l] = P(i)), ae(e[l], i, o, s, n, r, a)
						}
						if (d < u)
							for (l = c; l < u; l++) {
								var f = t[l];
								f.dom && (f = t[l] = P(f)), Me(o, ge(f, null, s, n, r))
							} else if (0 === u) Le(o, e, s, a);
							else if (d > u)
							for (l = c; l < d; l++) ne(e[l], o, s, !1, a)
					}(o, s, u, c, l, i, v))
				}(b, C, _, B, g, s, u, c, l), 2 & C || se(C, t, g), p !== k && function(e, t, o, s, n, r) {
					if (e = e || h, (t = t || h) !== h)
						for (var d in t) {
							var u = t[d],
								c = e[d];
							a(u) ? fe(d, u, o) : le(d, c, u, o, r, s)
						}
					if (e !== h)
						for (var l in e) a(t[l]) && fe(l, e[l], o)
				}(p, k, g, s, 0, c), x !== E && function(e, t, o, s) {
					if (e = e || h, (t = t || h) !== h)
						for (var n in t) ie(n, e[n], t[n], o);
					if (e !== h)
						for (var r in e) a(t[r]) && ie(r, e[r], null, o)
				}(x, E, g), y && (w !== y || l) && we(g, y, s)
			}
		}

		function ce(e, o, s, u, c, l, i, p) {
			var k = e.type,
				_ = o.type,
				B = o.props || h,
				b = e.key,
				w = o.key,
				x = _.defaultProps;
			if (m(x) || (C(x, B), o.props = B), k !== _)
				if (i) Oe(e, o, s, u, c, l, p);
				else {
					var S = e.children._lastInput || e.children,
						O = Pe(o, _, B, c);
					ne(e, null, u, !1, p), ae(S, O, s, u, c, l, p);
					var N = o.dom = O.dom;
					o.children = O, Ce(o.ref, N, u)
				}
			else if (i) {
				if (b !== w) return Oe(e, o, s, u, c, l, p), !1;
				var A = e.children;
				if (A._unmounted) {
					if (f(s)) return !0;
					Ne(s, Be(o, null, u, c, l, 4 & o.flags), e.dom)
				} else {
					var L = A.state,
						I = A.state,
						j = A.props,
						U = A.getChildContext();
					o.children = A, A._isSVG = l, U = a(U) ? c : Object.assign({}, c, U);
					var R = A._lastInput,
						T = A._updateComponent(L, I, j, B, c, !1, !1),
						z = !0;
					if (A._childContext = U, d(T) ? T = E() : T === t ? (T = R, z = !1) : r(T) ? T = M(T) : n(T) ? g() : v(T) && T.dom && (T = P(T)), 28 & T.flags ? T.parentVNode = o : 28 & R.flags && (R.parentVNode = o), A._lastInput = T, A._vNode = o, z) {
						var D = u.fastUnmount,
							F = A._lifecycle;
						u.fastUnmount = F.fastUnmount, ae(R, T, s, u, U, l, p), F.fastUnmount = u.fastUnmount, u.fastUnmount = D, A.componentDidUpdate(j, L), y.afterUpdate && y.afterUpdate(o), y.findDOMNodeEnabled && Re.set(A, T.dom)
					}
					o.dom = T.dom
				}
			} else {
				var q = !0,
					V = e.props,
					X = o.ref,
					W = !a(X),
					$ = e.children,
					H = $;
				o.dom = e.dom, o.children = $, b !== w ? q = !0 : W && !a(X.onComponentShouldUpdate) && (q = X.onComponentShouldUpdate(V, B)), !1 !== q && (W && !a(X.onComponentWillUpdate) && X.onComponentWillUpdate(V, B), d(H = _(B, c)) ? H = E() : r(H) && H !== t ? H = M(H) : n(H) ? g() : v(H) && H.dom && (H = P(H)), H !== t && (ae($, H, s, u, c, l, p), o.children = H, W && !a(X.onComponentDidUpdate) && X.onComponentDidUpdate(V, B), o.dom = H.dom)), 28 & H.flags ? H.parentVNode = o : 28 & $.flags && ($.parentVNode = o)
			}
			return !1
		}

		function le(e, t, o, s, n, r) {
			if (!R[e])
				if (I[e]) s[e] = !!o;
				else if (L[e]) {
				var d = a(o) ? "" : o;
				s[e] !== d && (s[e] = d)
			} else if (t !== o)
				if (c(e)) ie(e, t, o, s);
				else if (a(o)) s.removeAttribute(e);
			else if ("className" === e) n ? s.setAttribute("class", o) : s.className = o;
			else if ("style" === e) ! function(e, t, o) {
				if (l(t)) o.style.cssText = t;
				else {
					for (var s in t) {
						var n = t[s];
						i(n) && !U[s] ? o.style[s] = n + "px" : o.style[s] = n
					}
					if (!a(e))
						for (var r in e) a(t[r]) && (o.style[r] = "")
				}
			}(t, o, s);
			else if ("dangerouslySetInnerHTML" === e) {
				var u = t && t.__html,
					f = o && o.__html;
				u !== f && (a(f) || (s.innerHTML = f))
			} else if ("childrenType" !== e && "ref" !== e && "key" !== e) {
				var m;
				T[e] ? m = T[e] : n && e.match(z) ? (m = e.replace(/([a-z])([A-Z]|1)/g, D), T[e] = m) : m = e;
				var v = j[e];
				v ? s.setAttributeNS(v, m, o) : s.setAttribute(m, o)
			}
		}

		function ie(e, t, o, s, n) {
			if (t !== o) {
				var r = e.toLowerCase(),
					d = s[r];
				if (d && d.wrapped) return;
				if (F[e]) X(e, t, o, s);
				else if (t !== o)
					if (u(o) || a(o)) s[r] = o;
					else {
						var c = o.event;
						c && u(c) ? (s._data || (s[r] = function(e) {
							c(e.currentTarget._data, e)
						}), s._data = o.data) : g()
					}
			}
		}

		function fe(e, t, o) {
			"className" === e ? o.removeAttribute("class") : "value" === e ? o.value = "" : "style" === e ? o.removeAttribute("style") : c(e) ? X(name, t, null, o) : o.removeAttribute(e)
		}
		var me = new Map,
			ve = new Map;

		function ge(e, t, o, s, n) {
			var r = e.flags;
			return 3970 & r ? ke(e, t, o, s, n) : 28 & r ? Be(e, t, o, s, n, 4 & r) : 4096 & r ? pe(e, t) : 1 & r ? he(e, t) : void g()
		}

		function he(e, t) {
			var o = document.createTextNode(e.children);
			return e.dom = o, t && Me(t, o), o
		}

		function pe(e, t) {
			var o = document.createTextNode("");
			return e.dom = o, t && Me(t, o), o
		}

		function ke(e, t, o, s, a) {
			if (y.recyclingEnabled) {
				var d = function(e, t, o, s) {
					var n = e.type,
						r = e.key,
						a = ve.get(n);
					if (!m(a)) {
						var d = null === r ? a.nonKeyed : a.keyed.get(r);
						if (!m(d)) {
							var u = d.pop();
							if (!m(u)) return ue(u, e, null, t, o, s, !0), e.dom
						}
					}
					return null
				}(e, o, s, a);
				if (!f(d)) return f(t) || Me(t, d), d
			}
			var u = e.type,
				c = e.flags;
			(a || 128 & c) && (a = !0);
			var l = function(e, t) {
					return !0 === t ? document.createElementNS(A, e) : document.createElement(e)
				}(u, a),
				i = e.children,
				v = e.props,
				g = e.events,
				h = e.ref;
			if (e.dom = l, f(i) || (r(i) ? Ee(l, i) : n(i) ? _e(i, l, o, s, a) : S(i) && ge(i, l, o, s, a)), 2 & c || se(c, e, l), !f(v))
				for (var p in v) le(p, null, v[p], l, a, o);
			if (!f(g))
				for (var k in g) ie(k, null, g[k], l);
			return f(h) || we(l, h, o), f(t) || Me(t, l), l
		}

		function _e(e, t, o, s, n) {
			for (var r = 0; r < e.length; r++) {
				var a = e[r];
				d(a) || (a.dom && (e[r] = a = P(a)), ge(e[r], t, o, s, n))
			}
		}

		function Be(e, t, o, s, n, r) {
			if (y.recyclingEnabled) {
				var a = function(e, t, o, s) {
					var n = e.type,
						r = e.key,
						a = me.get(n);
					if (!m(a)) {
						var d = null === r ? a.nonKeyed : a.keyed.get(r);
						if (!m(d)) {
							var u = d.pop();
							if (!m(u)) {
								var c = e.flags,
									l = ce(u, e, null, t, o, s, 4 & c, !0);
								if (!l) return e.dom
							}
						}
					}
					return null
				}(e, o, s, n);
				if (!f(a)) return f(t) || Me(t, a), a
			}
			var d, u = e.type,
				c = e.props || h,
				l = u.defaultProps,
				i = e.ref;
			if (m(l) || (C(l, c), e.props = c), r) {
				var v = ye(e, u, c, s, n),
					g = v._lastInput,
					p = o.fastUnmount;
				o.fastUnmount = !0, v._vNode = e, e.dom = d = ge(g, null, o, v._childContext, n);
				var k = v._lifecycle = new O;
				k.fastUnmount = m(v.componentWillUnmount) && o.fastUnmount, o.fastUnmount = p && k.fastUnmount, f(t) || Me(t, d), be(e, i, v, o), y.findDOMNodeEnabled && Re.set(v, d), e.children = v
			} else {
				var _ = Pe(e, u, c, s);
				e.dom = d = ge(_, null, o, s, n), e.children = _, Ce(i, d, o), f(t) || Me(t, d)
			}
			return d
		}

		function be(e, t, o, s) {
			t && (u(t) ? t(o) : g());
			var n = o.componentDidMount,
				r = y.afterMount;
			m(n) && f(r) || s.addListener(function() {
				r && r(e), n && o.componentDidMount()
			})
		}

		function Ce(e, t, o) {
			e && (a(e.onComponentWillMount) || e.onComponentWillMount(), a(e.onComponentDidMount) || o.addListener(function() {
				return e.onComponentDidMount(t)
			}), a(e.onComponentWillUnmount) || (o.fastUnmount = !1))
		}

		function we(e, t, o) {
			if (u(t)) o.fastUnmount = !1, o.addListener(function() {
				return t(e)
			});
			else {
				if (d(t)) return;
				g()
			}
		}

		function ye(e, t, o, s, c) {
			m(s) && (s = {});
			var l = new t(o, s);
			l.context = s, l.props === h && (l.props = o), l._patch = ae, y.findDOMNodeEnabled && (l._componentToDOMNodeMap = Re), l._unmounted = !1, l._pendingSetState = !0, l._isSVG = c, u(l.componentWillMount) && l.componentWillMount();
			var i = l.getChildContext();
			a(i) ? l._childContext = s : l._childContext = Object.assign({}, s, i), y.beforeRender && y.beforeRender(l);
			var f = l.render(o, l.state, s);
			return y.afterRender && y.afterRender(l), n(f) ? g() : d(f) ? f = E() : r(f) ? f = M(f) : (f.dom && (f = P(f)), 28 & f.flags && (f.parentVNode = e)), l._pendingSetState = !1, l._lastInput = f, l
		}

		function xe(e, t, o, s, n) {
			28 & o.flags && (ne(o, null, s, !1, n), o = o.children._lastInput || o.children), Ne(e, t, o.dom), ne(o, null, s, !1, n)
		}

		function Pe(e, t, o, s) {
			var a = t(o, s);
			return n(a) ? g() : d(a) ? a = E() : r(a) ? a = M(a) : (a.dom && (a = P(a)), 28 & a.flags && (a.parentVNode = e)), a
		}

		function Ee(e, t) {
			"" !== t ? e.textContent = t : e.appendChild(document.createTextNode(""))
		}

		function Me(e, t) {
			e.appendChild(t)
		}

		function Se(e, t, o) {
			a(o) ? Me(e, t) : e.insertBefore(t, o)
		}

		function Oe(e, t, o, s, n, r, a) {
			ne(e, null, s, !1, a);
			var d = ge(t, null, s, n, r);
			t.dom = d, Ne(o, d, e.dom)
		}

		function Ne(e, t, o) {
			e || (e = o.parentNode), e.replaceChild(t, o)
		}

		function Ae(e, t) {
			e.removeChild(t)
		}

		function Le(e, t, o, s) {
			e.textContent = "", (!o.fastUnmount || o.fastUnmount && y.recyclingEnabled && !s) && function(e, t, o, s) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					d(r) || ne(r, e, o, !0, s)
				}
			}(null, t, o, s)
		}

		function Ie(e, t, o, s, a) {
			var d = e.type,
				u = e.children,
				c = e.props,
				l = e.events,
				i = e.flags,
				m = e.ref;
			if ((a || 128 & i) && (a = !0), 1 !== t.nodeType || t.tagName.toLowerCase() !== d) {
				var g = ke(e, null, o, s, a);
				return e.dom = g, Ne(t.parentNode, g, t), g
			}
			if (e.dom = t, u && function(e, t, o, s, a) {
					! function(e) {
						for (var t = e.firstChild; t;)
							if (8 === t.nodeType)
								if ("!" === t.data) {
									var o = document.createTextNode("");
									e.replaceChild(o, t), t = t.nextSibling
								} else {
									var s = t.previousSibling;
									e.removeChild(t), t = s || e.firstChild
								}
						else t = t.nextSibling
					}(t);
					var d = t.firstChild;
					if (n(e))
						for (var u = 0; u < e.length; u++) {
							var c = e[u];
							v(c) && !f(c) && (d ? d = (d = je(c, d, o, s, a)).nextSibling : ge(c, t, o, s, a))
						} else r(e) ? (d && 3 === d.nodeType ? d.nodeValue !== e && (d.nodeValue = e) : e && (t.textContent = e), d = d.nextSibling) : v(e) && (je(e, d, o, s, a), d = d.nextSibling);
					for (; d;) t.removeChild(d), d = d.nextSibling
				}(u, t, o, s, a), 2 & i || se(i, e, t), c)
				for (var h in c) le(h, null, c[h], t, a, o);
			if (l)
				for (var p in l) ie(p, null, l[p], t);
			return m && we(t, m, o), t
		}

		function je(e, t, o, s, n) {
			var r = e.flags;
			return 28 & r ? function(e, t, o, s, n, r) {
				var a = e.type,
					d = e.props || h,
					u = e.ref;
				if (e.dom = t, r) {
					var c = t.namespaceURI === A,
						l = a.defaultProps;
					m(l) || (C(l, d), e.props = d);
					var i = ye(e, a, d, s, c),
						f = o.fastUnmount,
						v = i._lastInput;
					o.fastUnmount = !0, i._vComponent = e, i._vNode = e, je(v, t, o, i._childContext, c);
					var g = i._lifecycle = new O;
					g.fastUnmount = m(i.componentWillUnmount) && o.fastUnmount, o.fastUnmount = f && g.fastUnmount, be(e, u, i, o), y.findDOMNodeEnabled && Re.set(i, t), e.children = i
				} else {
					var p = Pe(e, a, d, s);
					je(p, t, o, s, n), e.children = p, e.dom = p.dom, Ce(u, t, o)
				}
				return t
			}(e, t, o, s, n, 4 & r) : 3970 & r ? Ie(e, t, o, s, n) : 1 & r ? function(e, t) {
				if (3 !== t.nodeType) {
					var o = he(e, null);
					return e.dom = o, Ne(t.parentNode, o, t), o
				}
				var s = e.children;
				return t.nodeValue !== s && (t.nodeValue = s), e.dom = t, t
			}(e, t) : 4096 & r ? function(e, t) {
				e.dom = t
			}(e, t) : void g()
		}
		var Ue = [],
			Re = new Map;

		function Te(e) {
			y.findDOMNodeEnabled || g();
			var t = e && e.nodeType ? e : null;
			return Re.get(e) || t
		}
		y.roots = Ue;
		var ze = s ? document.body : null;

		function De(e, o) {
			if (ze === o && g(), e !== t) {
				var s = function(e) {
					for (var t = 0; t < Ue.length; t++) {
						var o = Ue[t];
						if (o.dom === e) return o
					}
					return null
				}(o);
				if (f(s)) {
					var n = new O;
					d(e) || (e.dom && (e = P(e)), function(e, t, o) {
						var s = t && t.firstChild;
						if (s) {
							for (je(e, s, o, {}, !1), s = t.firstChild; s = s.nextSibling;) t.removeChild(s);
							return !0
						}
						return !1
					}(e, o, n) || ge(e, o, n, {}, !1), s = function(e, t, o) {
						var s = {
							dom: e,
							input: t,
							lifecycle: o
						};
						return Ue.push(s), s
					}(o, e, n), n.trigger())
				} else {
					var r = s.lifecycle;
					r.listeners = [], a(e) ? (ne(s.input, o, r, !1, !1), function(e) {
						for (var t = 0; t < Ue.length; t++)
							if (Ue[t] === e) return void Ue.splice(t, 1)
					}(s)) : (e.dom && (e = P(e)), ae(s.input, e, o, r, {}, !1, !1)), r.trigger(), s.input = e
				}
				if (s) {
					var u = s.input;
					if (u && 28 & u.flags) return u.children
				}
			}
		}

		function Fe(e) {
			var t = e || null;
			return function(e, o) {
				t || (t = e), De(o, t)
			}
		}

		function qe(e, t) {
			return {
				data: e,
				event: t
			}
		}
		var Ve = {
			linkEvent: qe,
			createVNode: x,
			cloneVNode: P,
			NO_OP: t,
			EMPTY_OBJ: h,
			render: De,
			findDOMNode: Te,
			createRenderer: Fe,
			options: y,
			version: "1.1.2"
		};
		e.default = Ve, e.linkEvent = qe, e.createVNode = x, e.cloneVNode = P, e.NO_OP = t, e.EMPTY_OBJ = h, e.render = De, e.findDOMNode = Te, e.createRenderer = Fe, e.options = y, e.version = "1.1.2", Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}(t)
}, function(e, t, o) {
	/*!
	 * inferno-component v1.1.2
	 * (c) 2017 Dominic Gannaway
	 * Released under the MIT License.
	 */
	e.exports = function(e) {
		"use strict";
		var t = "a runtime error occured! Use Inferno in development environment to find the error.",
			o = window.document,
			s = Array.isArray;

		function n(e) {
			return a(e) || r(e)
		}

		function r(e) {
			return null === e
		}

		function a(e) {
			return void 0 === e
		}

		function d(e) {
			throw e || (e = t), new Error("Inferno Error: " + e)
		}
		var u = function() {
			this.listeners = [], this.fastUnmount = !0
		};
		u.prototype.addListener = function(e) {
			this.listeners.push(e)
		}, u.prototype.trigger = function() {
			for (var e = 0; e < this.listeners.length; e++) this.listeners[e]()
		};
		var c = new Map;

		function l(e, t, s, n) {
			for (var r in "function" == typeof t && (t = t(e.state)), t) e._pendingState[r] = t[r];
			!e._pendingSetState && o ? n || e._blockRender ? (e._pendingSetState = !0, i(e, !1, s)) : function(e, t, o) {
				var s = c.get(e);
				s || (s = [], c.set(e, s), Promise.resolve().then(function() {
					c.delete(e), i(e, t, function() {
						for (var e = 0; e < s.length; e++) s[e]()
					})
				})), o && s.push(o)
			}(e, !1, s) : (e.state = Object.assign({}, e.state, e._pendingState), e._pendingState = {})
		}

		function i(t, o, c) {
			if (t._deferSetState && !o || t._blockRender || t._unmounted) n(c) || c();
			else {
				t._pendingSetState = !1;
				var l = t._pendingState,
					i = t.state,
					f = Object.assign({}, i, l),
					m = t.props,
					v = t.context;
				t._pendingState = {};
				var g = t._updateComponent(i, f, m, m, v, o, !0),
					h = !0;
				r(x = g) || !1 === x || function(e) {
					return !0 === e
				}(x) || a(x) ? g = e.createVNode(4096) : g === e.NO_OP ? (g = t._lastInput, h = !1) : function(e) {
					var t = typeof e;
					return "string" === t || "number" === t
				}(g) ? (y = g, g = e.createVNode(1, null, null, y)) : s(g) && d();
				var p = t._lastInput,
					k = t._vNode,
					_ = p.dom && p.dom.parentNode || (p.dom = k.dom);
				if (t._lastInput = g, h) {
					var B = t._lifecycle;
					B ? B.listeners = [] : B = new u, t._lifecycle = B;
					var b = t.getChildContext();
					b = n(b) ? Object.assign({}, v, t._childContext) : Object.assign({}, v, t._childContext, b), t._patch(p, g, _, B, b, t._isSVG, !1), B.trigger(), t.componentDidUpdate(m, i), e.options.afterUpdate && e.options.afterUpdate(k)
				}
				var C = k.dom = g.dom,
					w = t._componentToDOMNodeMap;
				w && w.set(t, g.dom),
					function e(t, o) {
						if (28 & t.flags) {
							var s = t.parentVNode;
							s && (s.dom = o, e(s, o))
						}
					}(k, C), n(c) || c()
			}
			var y, x
		}
		var f = function(t, o) {
			this.state = {}, this.refs = {}, this._blockRender = !1, this._ignoreSetState = !1, this._blockSetState = !1, this._deferSetState = !1, this._pendingSetState = !1, this._pendingState = {}, this._lastInput = null, this._vNode = null, this._unmounted = !0, this._lifecycle = null, this._childContext = null, this._patch = null, this._isSVG = !1, this._componentToDOMNodeMap = null, this.props = t || e.EMPTY_OBJ, this.context = o || {}
		};
		return f.prototype.render = function(e, t, o) {}, f.prototype.forceUpdate = function(e) {
			this._unmounted || o && i(this, !0, e)
		}, f.prototype.setState = function(e, t) {
			this._unmounted || (this._blockSetState ? d() : this._ignoreSetState || l(this, e, t, !1))
		}, f.prototype.setStateSync = function(e) {
			this._unmounted || (this._blockSetState ? d() : this._ignoreSetState || l(this, e, null, !0))
		}, f.prototype.componentWillMount = function() {}, f.prototype.componentDidUpdate = function(e, t, o) {}, f.prototype.shouldComponentUpdate = function(e, t, o) {
			return !0
		}, f.prototype.componentWillReceiveProps = function(e, t) {}, f.prototype.componentWillUpdate = function(e, t, o) {}, f.prototype.getChildContext = function() {}, f.prototype._updateComponent = function(t, o, s, n, r, a, u) {
			if (!0 === this._unmounted && d(), (s !== n || n === e.EMPTY_OBJ || t !== o || a) && (s === n && n !== e.EMPTY_OBJ || (u || (this._blockRender = !0, this.componentWillReceiveProps(n, r), this._blockRender = !1), this._pendingSetState && (o = Object.assign({}, o, this._pendingState), this._pendingSetState = !1, this._pendingState = {})), !1 !== this.shouldComponentUpdate(n, o, r) || a)) {
				this._blockSetState = !0, this.componentWillUpdate(n, o, r), this._blockSetState = !1, this.props = n;
				var c = this.state = o;
				this.context = r, e.options.beforeRender && e.options.beforeRender(this);
				var l = this.render(n, c, r);
				return e.options.afterRender && e.options.afterRender(this), l
			}
			return e.NO_OP
		}, f
	}(o(11))
}, function(e, t, o) {
	e.exports = o(349), e.exports.default = e.exports
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
}, function(e, t, o) {
	(function(e) {
		var t;
		t = function(e, t) {
			"use strict";
			var o = Symbol.for && Symbol.for("react.element") || 60103,
				s = {
					isValidElement: function(e) {
						return "object" == typeof e && null !== e && e.$$typeof === o
					}
				},
				n = {
					prop: "prop",
					context: "context",
					childContext: "child context"
				},
				r = {
					thatReturns: function(e) {
						return function() {
							return e
						}
					}
				},
				a = Symbol.iterator,
				d = "@@iterator",
				u = "<<anonymous>>",
				c = {
					array: i("array"),
					bool: i("boolean"),
					func: i("function"),
					number: i("number"),
					object: i("object"),
					string: i("string"),
					any: l(r.thatReturns(null)),
					arrayOf: function(e) {
						return l(function(t, o, s, r, a) {
							var d = t[o];
							if (!Array.isArray(d)) {
								var u = n[r],
									c = m(d);
								return new Error("Invalid " + u + " `" + a + "` of type `" + c + "` supplied to `" + s + "`, expected an array.")
							}
							for (var l = 0; l < d.length; l++) {
								var i = e(d, l, s, r, a + "[" + l + "]");
								if (i instanceof Error) return i
							}
							return null
						})
					},
					element: function() {
						return l(function(e, t, o, r, a) {
							if (!s.isValidElement(e[t])) {
								var d = n[r];
								return new Error("Invalid " + d + " `" + a + "` supplied to `" + o + "`, expected a single ReactElement.")
							}
							return null
						})
					}(),
					instanceOf: function(e) {
						return l(function(t, o, s, r, a) {
							if (!(t[o] instanceof e)) {
								var d = n[r],
									c = e.name || u,
									l = function(e) {
										if (!e.constructor || !e.constructor.name) return u;
										return e.constructor.name
									}(t[o]);
								return new Error("Invalid " + d + " `" + a + "` of type `" + l + "` supplied to `" + s + "`, expected instance of `" + c + "`.")
							}
							return null
						})
					},
					node: function() {
						return l(function(e, t, o, s, r) {
							if (!f(e[t])) {
								var a = n[s];
								return new Error("Invalid " + a + " `" + r + "` supplied to `" + o + "`, expected a ReactNode.")
							}
							return null
						})
					}(),
					objectOf: function(e) {
						return l(function(t, o, s, r, a) {
							var d = t[o],
								u = m(d);
							if ("object" !== u) {
								var c = n[r];
								return new Error("Invalid " + c + " `" + a + "` of type `" + u + "` supplied to `" + s + "`, expected an object.")
							}
							for (var l in d)
								if (d.hasOwnProperty(l)) {
									var i = e(d, l, s, r, a + "." + l);
									if (i instanceof Error) return i
								} return null
						})
					},
					oneOf: function(e) {
						if (!Array.isArray(e)) return l(function() {
							return new Error("Invalid argument supplied to oneOf, expected an instance of array.")
						});
						return l(function(t, o, s, r, a) {
							for (var d = t[o], u = 0; u < e.length; u++)
								if (d === e[u]) return null;
							var c = n[r],
								l = JSON.stringify(e);
							return new Error("Invalid " + c + " `" + a + "` of value `" + d + "` supplied to `" + s + "`, expected one of " + l + ".")
						})
					},
					oneOfType: function(e) {
						if (!Array.isArray(e)) return l(function() {
							return new Error("Invalid argument supplied to oneOfType, expected an instance of array.")
						});
						return l(function(t, o, s, r, a) {
							for (var d = 0; d < e.length; d++) {
								var u = e[d];
								if (null == u(t, o, s, r, a)) return null
							}
							var c = n[r];
							return new Error("Invalid " + c + " `" + a + "` supplied to `" + s + "`.")
						})
					},
					shape: function(e) {
						return l(function(t, o, s, r, a) {
							var d = t[o],
								u = m(d);
							if ("object" !== u) {
								var c = n[r];
								return new Error("Invalid " + c + " `" + a + "` of type `" + u + "` supplied to `" + s + "`, expected `object`.")
							}
							for (var l in e) {
								var i = e[l];
								if (i) {
									var f = i(d, l, s, r, a + "." + l);
									if (f) return f
								}
							}
							return null
						})
					}
				};

			function l(e) {
				function t(t, o, s, r, a, d) {
					if (r = r || u, d = d || s, null == o[s]) {
						var c = n[a];
						return t ? new Error("Required " + c + " `" + d + "` was not specified in `" + r + "`.") : null
					}
					return e(o, s, r, a, d)
				}
				var o = t.bind(null, !1);
				return o.isRequired = t.bind(null, !0), o
			}

			function i(e) {
				return l(function(t, o, s, r, a) {
					var d = t[o];
					if (m(d) !== e) {
						var u = n[r],
							c = function(e) {
								var t = m(e);
								if ("object" === t) {
									if (e instanceof Date) return "date";
									if (e instanceof RegExp) return "regexp"
								}
								return t
							}(d);
						return new Error("Invalid " + u + " `" + a + "` of type `" + c + "` supplied to `" + s + "`, expected `" + e + "`.")
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
						if (null === e || s.isValidElement(e)) return !0;
						var t = function(e) {
							var t = e && (a && e[a] || e[d]);
							if ("function" == typeof t) return t
						}(e);
						if (!t) return !1;
						var o, n = t.call(e);
						if (t !== e.entries) {
							for (; !(o = n.next()).done;)
								if (!f(o.value)) return !1
						} else
							for (; !(o = n.next()).done;) {
								var r = o.value;
								if (r && !f(r[1])) return !1
							}
						return !0;
					default:
						return !1
				}
			}

			function m(e) {
				var t = typeof e;
				return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : t
			}
			t.exports = c
		}, "function" == typeof define && define.amd ? define("PropTypes", ["exports", "module"], t) : t(0, e)
	}).call(this, o(351)(e))
}, function(e, t, o) {
	/*!
	 * inferno-compat v1.1.2
	 * (c) 2017 Dominic Gannaway
	 * Released under the MIT License.
	 */
	! function(e, t, o, s) {
		"use strict";

		function n(e) {
			return null === e
		}

		function r(e) {
			return void 0 === e
		}

		function a(e) {
			return "object" == typeof e
		}

		function d(e) {
			var t = a(e) && !1 === n(e);
			if (!1 === t) return !1;
			var o = e.flags;
			return !!(3998 & o)
		}
		t = "default" in t ? t.default : t, o = "default" in o ? o.default : o;
		var u = {
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

		function c(e, t, o) {
			for (var s in t) !0 !== o && (r(a = t[s]) || n(a)) || (e[s] = t[s]);
			var a;
			return e
		}

		function l(e, t, o) {
			var s = t[e];
			t[e] = function() {
				for (var e, n = arguments, a = 0; a < o.length; a++) {
					var d = o[a],
						u = d.apply(t, n);
					r(u) || (e = u)
				}
				if (s) {
					var c = s.call(t);
					r(c) || (e = c)
				}
				return e
			}
		}

		function i(e) {
			var t = function(t) {
				function o(s) {
					t.call(this, s), this.isMounted = function() {
							return !this._unmounted
						}, c(this, e), o.mixins && function(e, t) {
							for (var o in t)
								if (t.hasOwnProperty(o)) {
									var s = t[o];
									"function" == typeof s[0] ? l(o, e, s) : e[o] = s
								}
						}(this, o.mixins),
						function(e) {
							for (var t in e) {
								var o = e[t];
								"function" != typeof o || o.__bound || u[t] || ((e[t] = o.bind(e)).__bound = !0)
							}
						}(this), e.getInitialState && (this.state = e.getInitialState.call(this))
				}
				return t && (o.__proto__ = t), o.prototype = Object.create(t && t.prototype), o.prototype.constructor = o, o
			}(o);
			return t.displayName = e.displayName || "Component", t.propTypes = e.propTypes, t.defaultProps = e.getDefaultProps ? e.getDefaultProps() : void 0, t.mixins = e.mixins && function e(t, o) {
				void 0 === o && (o = {});
				for (var s = 0; s < t.length; s++) {
					var n = t[s];
					for (var r in n.mixins && e(n.mixins, o), n) n.hasOwnProperty(r) && "function" == typeof n[r] && (o[r] || (o[r] = [])).push(n[r])
				}
				return o
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

		function m(e) {
			return s.render(null, e), !0
		}

		function v(e) {
			return null == e
		}
		s.options.findDOMNodeEnabled = !0;
		var g = [],
			h = {
				map: function(e, t, o) {
					return v(e) ? e : (e = h.toArray(e), o && o !== e && (t = t.bind(o)), e.map(t))
				},
				forEach: function(e, t, o) {
					if (v(e)) return e;
					e = h.toArray(e), o && o !== e && (t = t.bind(o)), e.forEach(t)
				},
				count: function(e) {
					return (e = h.toArray(e)).length
				},
				only: function(e) {
					if (1 !== (e = h.toArray(e)).length) throw new Error("Children.only() expects only one child.");
					return e[0]
				},
				toArray: function(e) {
					return v(e) ? [] : Array.isArray && Array.isArray(e) ? e : g.concat(e)
				}
			},
			p = null;
		o.prototype.isReactComponent = {}, s.options.beforeRender = function(e) {
			p = e
		}, s.options.afterRender = function() {
			p = null
		};
		var k = {
			xlinkActuate: "xlink:actuate",
			xlinkArcrole: "xlink:arcrole",
			xlinkHref: "xlink:href",
			xlinkRole: "xlink:role",
			xlinkShow: "xlink:show",
			xlinkTitle: "xlink:title",
			xlinkType: "xlink:type"
		};
		"undefined" == typeof Event || Event.prototype.persist || (Event.prototype.persist = function() {});
		var _ = function(e) {
				return function(t, o) {
					for (var s = [], n = arguments.length - 2; n-- > 0;) s[n] = arguments[n + 2];
					var r = o || {},
						a = r.ref;
					return "string" == typeof a && (r.ref = function(e) {
						this && this.refs && (this.refs[a] = e)
					}.bind(p || null)), "string" == typeof t && function(e, t) {
						if (("input" === e || "textarea" === e) && t.onChange) {
							var o, s = t.type;
							t[o = "checkbox" === s ? "onclick" : "file" === s ? "onchange" : "oninput"] || (t[o] = t.onChange, delete t.onChange)
						}
						for (var n in t) k[n] && (t[k[n]] = t[n], delete t[n])
					}(t, r), e.apply(void 0, [t, r].concat(s))
				}
			},
			B = _(function(e, t) {
				for (var o, d = [], u = arguments.length - 2; u-- > 0;) d[u] = arguments[u + 2];
				if (n(o = e) || !1 === o || function(e) {
						return !0 === e
					}(o) || r(o) || a(e)) throw new Error("Inferno Error: createElement() name parameter cannot be undefined, null, false or true, It must be a string, class or function.");
				var c, l, i = d,
					m = null,
					v = null,
					g = null,
					h = 0;
				if (d && (1 === d.length ? i = d[0] : 0 === d.length && (i = void 0)), function(e) {
						return "string" == typeof e
					}(e)) {
					switch (h = 2, e) {
						case "svg":
							h = 128;
							break;
						case "input":
							h = 512;
							break;
						case "textarea":
							h = 1024;
							break;
						case "select":
							h = 2048
					}
					for (var p in t) "key" === p ? (v = t.key, delete t.key) : "children" === p && r(i) ? i = t.children : "ref" === p ? m = t.ref : "o" === (l = p)[0] && "n" === l[1] && l.length > 3 && (g || (g = {}), g[p] = t[p], delete t[p])
				} else
					for (var k in h = r((c = e).prototype) || r(c.prototype.render) ? 8 : 4, r(i) || (t || (t = {}), t.children = i, i = null), t) f[k] ? (m || (m = {}), m[k] = t[k]) : "key" === k && (v = t.key, delete t.key);
				return s.createVNode(h, e, t, i, g, v, m)
			}),
			b = _(s.cloneVNode),
			C = s.options.createVNode;

		function w(e, t) {
			for (var o in e)
				if (!(o in t)) return !0;
			for (var s in t)
				if (e[s] !== t[s]) return !0;
			return !1
		}

		function y(e, t) {
			o.call(this, e, t)
		}
		s.options.createVNode = function(e) {
			var t = e.children,
				o = e.props;
			v(e.props) && (o = e.props = {}), !v(t) && v(o.children) && (o.children = t), C && C(e)
		}, y.prototype = new o({}, {}), y.prototype.shouldComponentUpdate = function(e, t) {
			return w(this.props, e) || w(this.state, t)
		};
		var x = function(e) {
			function t() {
				e.apply(this, arguments)
			}
			return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.getChildContext = function() {
				return this.props.context
			}, t.prototype.render = function(e) {
				return e.children
			}, t
		}(o);

		function P(e, t, o, n) {
			var r = s.createVNode(4, x, {
					context: e.context,
					children: t
				}),
				a = s.render(r, o);
			return n && n.call(a), a
		}
		var E = "a abbr address area article aside audio b base bdi bdo big blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr circle clipPath defs ellipse g image line linearGradient mask path pattern polygon polyline radialGradient rect stop svg text tspan".split(" ");

		function M(e) {
			return B.bind(null, e)
		}
		for (var S = {}, O = E.length; O--;) S[E[O]] = M(E[O]);
		var N = {
			createVNode: s.createVNode,
			render: s.render,
			isValidElement: d,
			createElement: B,
			Component: o,
			PureComponent: y,
			unmountComponentAtNode: m,
			cloneElement: b,
			PropTypes: t,
			createClass: i,
			findDOMNode: s.findDOMNode,
			Children: h,
			cloneVNode: s.cloneVNode,
			NO_OP: s.NO_OP,
			version: "15.4.1",
			unstable_renderSubtreeIntoContainer: P,
			createFactory: M,
			DOM: S
		};
		e.createVNode = s.createVNode, e.render = s.render, e.isValidElement = d, e.createElement = B, e.Component = o, e.PureComponent = y, e.unmountComponentAtNode = m, e.cloneElement = b, e.PropTypes = t, e.createClass = i, e.findDOMNode = s.findDOMNode, e.Children = h, e.cloneVNode = s.cloneVNode, e.NO_OP = s.NO_OP, e.version = "15.4.1", e.unstable_renderSubtreeIntoContainer = P, e.createFactory = M, e.DOM = S, e.default = N, Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}(t, o(352), o(350), o(11))
}, function(e, t, o) {
	"use strict";
	o.r(t);
	var s = o(342);
	const n = Object(s.fromHash)(window.location.hash),
		r = () => {
			window.requestAnimationFrame(() => {
				const e = o(0),
					{
						App: t
					} = o(347);
				e.render(e.createElement(t, n), document.getElementById("app-container"))
			})
		};
	["complete", "loaded", "interactive"].includes(document.readyState) ? r() : document.addEventListener("DOMContentLoaded", r, {
		once: !0
	})
}, function(e, t, o) {
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
	const s = Object.getPrototypeOf(Int8Array);
	for (const e of [...[Object, Array, Number, String, Function, Set, Map, WeakSet, WeakMap], ...[Reflect, TypeError, BigInt, URL, Date, JSON, Math], ...[Int8Array, Int16Array, Int32Array, DataView], ...[Uint8Array, Uint16Array, Uint32Array, s]]) Object.freeze(e);
	crypto && crypto.subtle && (Object.freeze(crypto), Object.freeze(crypto.subtle))
}, function(e, t, o) {
	"use strict";
	o.r(t);
	var s = o(13);
	o.d(t, "sanitizeErrorMessage", function() {
		return s.default
	});
	var n = o(3);
	o.d(t, "parseStackTrace", function() {
		return n.default
	}), o.d(t, "captureStackTrace", function() {
		return n.captureStackTrace
	});
	var r = o(12);
	for (var a in r)["sanitizeErrorMessage", "parseStackTrace", "captureStackTrace", "default"].indexOf(a) < 0 && function(e) {
		o.d(t, e, function() {
			return r[e]
		})
	}(a)
}, function(e, t, o) {
	const {
		captureStackTrace: s
	} = o(356), n = (...e) => {
		const t = e.reduce((e, t) => (t instanceof Error && s(t), e.concat((e => e instanceof Error && e.stack)(t) ? t.stack : t, "\n")), "").trim();
		console._errorOriginal(t)
	};
	console._errorOriginal || (console._errorOriginal = console.error.bind(console), console.error = n)
}, function(e, t, o) {
	o(357), o(355)
}, function(e, t, o) {
	o(358), o(354)
}]);