// ============================================================
// DATA.JS — Fonte de dados do dashboard
// Atualizado: 2026-04-10 18:18 via BigQuery (google-cloud-bigquery)
// MLB: REPAIR | BUCKET IS NULL | excl. cust 75554443 jan/26
// MLA/MLM: REPAIR | sem filtro bucket (não aplicável)
// Mapeamento MAD corrigido (POINT_DEVICE_TYPE ≠ CURRENT_DEVICE_NAME)
// ⚠ Mar/26 parcial | MLA Point SMART 2 MAD incompleto (null)
// ⚠ MLA Fev/26 e MLM Fev/26: spike — possível campanha não filtrada
// ============================================================

const DATA = {

  meta: 0.75,  // Meta Trocas/MAD (%) — confirmar com time

  // Projeção do mês em aberto
  projecao: {
    mes:      '2026-04',
    dias_base: 10,  // dias de dados disponíveis (extração 2026-04-10)
    dias_mes:  30,  // total de dias em março/26
  },

  // ────────────────────────────────────────────────────────
  // MONTHLY
  // ────────────────────────────────────────────────────────
  monthly: [
  {
    "site": "MLA",
    "mes": "2025-09",
    "qtd_trocas": 4125,
    "mad": 585632,
    "trocas_mad_pct": 0.7044,
    "delta_trocas": null,
    "delta_mad": null,
    "delta_pp": null
  },
  {
    "site": "MLA",
    "mes": "2025-10",
    "qtd_trocas": 4444,
    "mad": 601139,
    "trocas_mad_pct": 0.7393,
    "delta_trocas": 319,
    "delta_mad": 15507,
    "delta_pp": 0.0349
  },
  {
    "site": "MLA",
    "mes": "2025-11",
    "qtd_trocas": 5178,
    "mad": 596840,
    "trocas_mad_pct": 0.8676,
    "delta_trocas": 734,
    "delta_mad": -4299,
    "delta_pp": 0.1283
  },
  {
    "site": "MLA",
    "mes": "2025-12",
    "qtd_trocas": 5582,
    "mad": 617263,
    "trocas_mad_pct": 0.9043,
    "delta_trocas": 404,
    "delta_mad": 20423,
    "delta_pp": 0.0367
  },
  {
    "site": "MLA",
    "mes": "2026-01",
    "qtd_trocas": 7773,
    "mad": 590570,
    "trocas_mad_pct": 1.3162,
    "delta_trocas": 2191,
    "delta_mad": -26693,
    "delta_pp": 0.4119
  },
  {
    "site": "MLA",
    "mes": "2026-02",
    "qtd_trocas": 17280,
    "mad": 601142,
    "trocas_mad_pct": 2.8745,
    "delta_trocas": 9507,
    "delta_mad": 10572,
    "delta_pp": 1.5583
  },
  {
    "site": "MLA",
    "mes": "2026-03",
    "qtd_trocas": 9452,
    "mad": 524055,
    "trocas_mad_pct": 1.8036,
    "delta_trocas": -7828,
    "delta_mad": -77087,
    "delta_pp": -1.0709
  },
  {
    "site": "MLA",
    "mes": "2026-04",
    "qtd_trocas": 1879,
    "mad": null,
    "trocas_mad_pct": null,
    "delta_trocas": -7573,
    "delta_mad": null,
    "delta_pp": null,
    "parcial": true
  },
  {
    "site": "MLB",
    "mes": "2025-09",
    "qtd_trocas": 30221,
    "mad": 2779021,
    "trocas_mad_pct": 1.0875,
    "delta_trocas": null,
    "delta_mad": null,
    "delta_pp": null
  },
  {
    "site": "MLB",
    "mes": "2025-10",
    "qtd_trocas": 31390,
    "mad": 2782565,
    "trocas_mad_pct": 1.1281,
    "delta_trocas": 1169,
    "delta_mad": 3544,
    "delta_pp": 0.0406
  },
  {
    "site": "MLB",
    "mes": "2025-11",
    "qtd_trocas": 24237,
    "mad": 2729381,
    "trocas_mad_pct": 0.888,
    "delta_trocas": -7153,
    "delta_mad": -53184,
    "delta_pp": -0.2401
  },
  {
    "site": "MLB",
    "mes": "2025-12",
    "qtd_trocas": 28431,
    "mad": 2690341,
    "trocas_mad_pct": 1.0568,
    "delta_trocas": 4194,
    "delta_mad": -39040,
    "delta_pp": 0.1688
  },
  {
    "site": "MLB",
    "mes": "2026-01",
    "qtd_trocas": 29763,
    "mad": 2607538,
    "trocas_mad_pct": 1.1414,
    "delta_trocas": 1332,
    "delta_mad": -82803,
    "delta_pp": 0.0846
  },
  {
    "site": "MLB",
    "mes": "2026-02",
    "qtd_trocas": 26408,
    "mad": 2587550,
    "trocas_mad_pct": 1.0206,
    "delta_trocas": -3355,
    "delta_mad": -19988,
    "delta_pp": -0.1208
  },
  {
    "site": "MLB",
    "mes": "2026-03",
    "qtd_trocas": 25670,
    "mad": 2237382,
    "trocas_mad_pct": 1.1473,
    "delta_trocas": -738,
    "delta_mad": -350168,
    "delta_pp": 0.1267
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "qtd_trocas": 7081,
    "mad": null,
    "trocas_mad_pct": null,
    "delta_trocas": -18589,
    "delta_mad": null,
    "delta_pp": null,
    "parcial": true
  },
  {
    "site": "MLC",
    "mes": "2025-09",
    "qtd_trocas": 933,
    "mad": 138585,
    "trocas_mad_pct": 0.6732,
    "delta_trocas": null,
    "delta_mad": null,
    "delta_pp": null
  },
  {
    "site": "MLC",
    "mes": "2025-10",
    "qtd_trocas": 1246,
    "mad": 147643,
    "trocas_mad_pct": 0.8439,
    "delta_trocas": 313,
    "delta_mad": 9058,
    "delta_pp": 0.1707
  },
  {
    "site": "MLC",
    "mes": "2025-11",
    "qtd_trocas": 1376,
    "mad": 149295,
    "trocas_mad_pct": 0.9217,
    "delta_trocas": 130,
    "delta_mad": 1652,
    "delta_pp": 0.0778
  },
  {
    "site": "MLC",
    "mes": "2025-12",
    "qtd_trocas": 1511,
    "mad": 159936,
    "trocas_mad_pct": 0.9448,
    "delta_trocas": 135,
    "delta_mad": 10641,
    "delta_pp": 0.0231
  },
  {
    "site": "MLC",
    "mes": "2026-01",
    "qtd_trocas": 1928,
    "mad": 160306,
    "trocas_mad_pct": 1.2027,
    "delta_trocas": 417,
    "delta_mad": 370,
    "delta_pp": 0.2579
  },
  {
    "site": "MLC",
    "mes": "2026-02",
    "qtd_trocas": 1548,
    "mad": 164417,
    "trocas_mad_pct": 0.9415,
    "delta_trocas": -380,
    "delta_mad": 4111,
    "delta_pp": -0.2612
  },
  {
    "site": "MLC",
    "mes": "2026-03",
    "qtd_trocas": 1571,
    "mad": 156844,
    "trocas_mad_pct": 1.0016,
    "delta_trocas": 23,
    "delta_mad": -7573,
    "delta_pp": 0.0601
  },
  {
    "site": "MLC",
    "mes": "2026-04",
    "qtd_trocas": 500,
    "mad": null,
    "trocas_mad_pct": null,
    "delta_trocas": -1071,
    "delta_mad": null,
    "delta_pp": null,
    "parcial": true
  },
  {
    "site": "MLM",
    "mes": "2025-09",
    "qtd_trocas": 6505,
    "mad": 1003860,
    "trocas_mad_pct": 0.648,
    "delta_trocas": null,
    "delta_mad": null,
    "delta_pp": null
  },
  {
    "site": "MLM",
    "mes": "2025-10",
    "qtd_trocas": 7406,
    "mad": 1061546,
    "trocas_mad_pct": 0.6977,
    "delta_trocas": 901,
    "delta_mad": 57686,
    "delta_pp": 0.0497
  },
  {
    "site": "MLM",
    "mes": "2025-11",
    "qtd_trocas": 7507,
    "mad": 1126451,
    "trocas_mad_pct": 0.6664,
    "delta_trocas": 101,
    "delta_mad": 64905,
    "delta_pp": -0.0313
  },
  {
    "site": "MLM",
    "mes": "2025-12",
    "qtd_trocas": 7160,
    "mad": 1172367,
    "trocas_mad_pct": 0.6107,
    "delta_trocas": -347,
    "delta_mad": 45916,
    "delta_pp": -0.0557
  },
  {
    "site": "MLM",
    "mes": "2026-01",
    "qtd_trocas": 10794,
    "mad": 1186377,
    "trocas_mad_pct": 0.9098,
    "delta_trocas": 3634,
    "delta_mad": 14010,
    "delta_pp": 0.2991
  },
  {
    "site": "MLM",
    "mes": "2026-02",
    "qtd_trocas": 12407,
    "mad": 1236011,
    "trocas_mad_pct": 1.0038,
    "delta_trocas": 1613,
    "delta_mad": 49634,
    "delta_pp": 0.094
  },
  {
    "site": "MLM",
    "mes": "2026-03",
    "qtd_trocas": 9544,
    "mad": 1120762,
    "trocas_mad_pct": 0.8516,
    "delta_trocas": -2863,
    "delta_mad": -115249,
    "delta_pp": -0.1522
  },
  {
    "site": "MLM",
    "mes": "2026-04",
    "qtd_trocas": 2963,
    "mad": null,
    "trocas_mad_pct": null,
    "delta_trocas": -6581,
    "delta_mad": null,
    "delta_pp": null,
    "parcial": true
  }
],

  // ────────────────────────────────────────────────────────
  // SHIPPING DELIVERED — execute python queries/shipping_delivered.py
  // ────────────────────────────────────────────────────────
  byShipping: [
  {
    "site": "MLA",
    "mes": "2025-09",
    "qtd_delivered": 3055,
    "mad": 585632,
    "delivered_mad_pct": 0.5217
  },
  {
    "site": "MLA",
    "mes": "2025-10",
    "qtd_delivered": 3177,
    "mad": 601139,
    "delivered_mad_pct": 0.5285
  },
  {
    "site": "MLA",
    "mes": "2025-11",
    "qtd_delivered": 3735,
    "mad": 596840,
    "delivered_mad_pct": 0.6258
  },
  {
    "site": "MLA",
    "mes": "2025-12",
    "qtd_delivered": 3952,
    "mad": 617263,
    "delivered_mad_pct": 0.6402
  },
  {
    "site": "MLA",
    "mes": "2026-01",
    "qtd_delivered": 5690,
    "mad": 590570,
    "delivered_mad_pct": 0.9635
  },
  {
    "site": "MLA",
    "mes": "2026-02",
    "qtd_delivered": 13342,
    "mad": 601142,
    "delivered_mad_pct": 2.2194
  },
  {
    "site": "MLA",
    "mes": "2026-03",
    "qtd_delivered": 6573,
    "mad": 524055,
    "delivered_mad_pct": 1.2543
  },
  {
    "site": "MLA",
    "mes": "2026-04",
    "qtd_delivered": 1009,
    "mad": null,
    "delivered_mad_pct": null
  },
  {
    "site": "MLB",
    "mes": "2025-09",
    "qtd_delivered": 20016,
    "mad": 2779021,
    "delivered_mad_pct": 0.7203
  },
  {
    "site": "MLB",
    "mes": "2025-10",
    "qtd_delivered": 20754,
    "mad": 2782565,
    "delivered_mad_pct": 0.7459
  },
  {
    "site": "MLB",
    "mes": "2025-11",
    "qtd_delivered": 16536,
    "mad": 2729381,
    "delivered_mad_pct": 0.6059
  },
  {
    "site": "MLB",
    "mes": "2025-12",
    "qtd_delivered": 17462,
    "mad": 2690341,
    "delivered_mad_pct": 0.6491
  },
  {
    "site": "MLB",
    "mes": "2026-01",
    "qtd_delivered": 20465,
    "mad": 2607538,
    "delivered_mad_pct": 0.7848
  },
  {
    "site": "MLB",
    "mes": "2026-02",
    "qtd_delivered": 18190,
    "mad": 2587550,
    "delivered_mad_pct": 0.703
  },
  {
    "site": "MLB",
    "mes": "2026-03",
    "qtd_delivered": 15465,
    "mad": 2237382,
    "delivered_mad_pct": 0.6912
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "qtd_delivered": 2052,
    "mad": null,
    "delivered_mad_pct": null
  },
  {
    "site": "MLC",
    "mes": "2025-09",
    "qtd_delivered": 523,
    "mad": 138585,
    "delivered_mad_pct": 0.3774
  },
  {
    "site": "MLC",
    "mes": "2025-10",
    "qtd_delivered": 757,
    "mad": 147643,
    "delivered_mad_pct": 0.5127
  },
  {
    "site": "MLC",
    "mes": "2025-11",
    "qtd_delivered": 917,
    "mad": 149295,
    "delivered_mad_pct": 0.6142
  },
  {
    "site": "MLC",
    "mes": "2025-12",
    "qtd_delivered": 1176,
    "mad": 159936,
    "delivered_mad_pct": 0.7353
  },
  {
    "site": "MLC",
    "mes": "2026-01",
    "qtd_delivered": 1607,
    "mad": 160306,
    "delivered_mad_pct": 1.0025
  },
  {
    "site": "MLC",
    "mes": "2026-02",
    "qtd_delivered": 1220,
    "mad": 164417,
    "delivered_mad_pct": 0.742
  },
  {
    "site": "MLC",
    "mes": "2026-03",
    "qtd_delivered": 1207,
    "mad": 156844,
    "delivered_mad_pct": 0.7696
  },
  {
    "site": "MLC",
    "mes": "2026-04",
    "qtd_delivered": 340,
    "mad": null,
    "delivered_mad_pct": null
  },
  {
    "site": "MLM",
    "mes": "2025-09",
    "qtd_delivered": 4576,
    "mad": 1003860,
    "delivered_mad_pct": 0.4558
  },
  {
    "site": "MLM",
    "mes": "2025-10",
    "qtd_delivered": 4577,
    "mad": 1061546,
    "delivered_mad_pct": 0.4312
  },
  {
    "site": "MLM",
    "mes": "2025-11",
    "qtd_delivered": 4499,
    "mad": 1126451,
    "delivered_mad_pct": 0.3994
  },
  {
    "site": "MLM",
    "mes": "2025-12",
    "qtd_delivered": 4781,
    "mad": 1172367,
    "delivered_mad_pct": 0.4078
  },
  {
    "site": "MLM",
    "mes": "2026-01",
    "qtd_delivered": 6819,
    "mad": 1186377,
    "delivered_mad_pct": 0.5748
  },
  {
    "site": "MLM",
    "mes": "2026-02",
    "qtd_delivered": 8845,
    "mad": 1236011,
    "delivered_mad_pct": 0.7156
  },
  {
    "site": "MLM",
    "mes": "2026-03",
    "qtd_delivered": 6886,
    "mad": 1120762,
    "delivered_mad_pct": 0.6144
  },
  {
    "site": "MLM",
    "mes": "2026-04",
    "qtd_delivered": 1209,
    "mad": null,
    "delivered_mad_pct": null
  }
],

  // ────────────────────────────────────────────────────────
  // BY MODEL
  // ────────────────────────────────────────────────────────
  byModel: [
  {
    "site": "MLB",
    "mes": "2025-09",
    "device_canonical": null,
    "familia": "OUTRO",
    "qtd_trocas": 17430,
    "mad": null,
    "trocas_mad_pct": null,
    "pct_trocas_no_mes": 57.6
  },
  {
    "site": "MLB",
    "mes": "2025-09",
    "device_canonical": "Point Pro 2",
    "familia": "OUTRO",
    "qtd_trocas": 8392,
    "mad": 762864,
    "trocas_mad_pct": 1.1001,
    "pct_trocas_no_mes": 27.8
  },
  {
    "site": "MLB",
    "mes": "2025-09",
    "device_canonical": "Point Smart 2",
    "familia": "OUTRO",
    "qtd_trocas": 2816,
    "mad": 332037,
    "trocas_mad_pct": 0.8481,
    "pct_trocas_no_mes": 9.3
  },
  {
    "site": "MLB",
    "mes": "2025-09",
    "device_canonical": "Point Pro 3",
    "familia": "OUTRO",
    "qtd_trocas": 1040,
    "mad": 231439,
    "trocas_mad_pct": 0.4494,
    "pct_trocas_no_mes": 3.4
  },
  {
    "site": "MLB",
    "mes": "2025-09",
    "device_canonical": "Point MINI",
    "familia": "MINI",
    "qtd_trocas": 322,
    "mad": 274601,
    "trocas_mad_pct": 0.1173,
    "pct_trocas_no_mes": 1.1
  },
  {
    "site": "MLB",
    "mes": "2025-09",
    "device_canonical": "Point Mini NFC",
    "familia": "OUTRO",
    "qtd_trocas": 93,
    "mad": 121915,
    "trocas_mad_pct": 0.0763,
    "pct_trocas_no_mes": 0.3
  },
  {
    "site": "MLB",
    "mes": "2025-09",
    "device_canonical": "Point Mini NFC 1",
    "familia": "OUTRO",
    "qtd_trocas": 67,
    "mad": 284874,
    "trocas_mad_pct": 0.0235,
    "pct_trocas_no_mes": 0.2
  },
  {
    "site": "MLB",
    "mes": "2025-09",
    "device_canonical": "Point AIR 2",
    "familia": "AIR",
    "qtd_trocas": 49,
    "mad": 11869,
    "trocas_mad_pct": 0.4128,
    "pct_trocas_no_mes": 0.2
  },
  {
    "site": "MLB",
    "mes": "2025-09",
    "device_canonical": "Undefined",
    "familia": "OUTRO",
    "qtd_trocas": 19,
    "mad": 7859,
    "trocas_mad_pct": 0.2418,
    "pct_trocas_no_mes": 0.1
  },
  {
    "site": "MLB",
    "mes": "2025-09",
    "device_canonical": "Point Mini (ME30S)",
    "familia": "OUTRO",
    "qtd_trocas": 4,
    "mad": 17250,
    "trocas_mad_pct": 0.0232,
    "pct_trocas_no_mes": null
  },
  {
    "site": "MLB",
    "mes": "2025-09",
    "device_canonical": "Point Mini ME30NFC",
    "familia": "OUTRO",
    "qtd_trocas": 3,
    "mad": 7858,
    "trocas_mad_pct": 0.0382,
    "pct_trocas_no_mes": null
  },
  {
    "site": "MLB",
    "mes": "2025-09",
    "device_canonical": "Point Smart 2 N950",
    "familia": "OUTRO",
    "qtd_trocas": 2,
    "mad": 1275,
    "trocas_mad_pct": 0.1569,
    "pct_trocas_no_mes": null
  },
  {
    "site": "MLB",
    "mes": "2025-10",
    "device_canonical": null,
    "familia": "OUTRO",
    "qtd_trocas": 17307,
    "mad": null,
    "trocas_mad_pct": null,
    "pct_trocas_no_mes": 55.1
  },
  {
    "site": "MLB",
    "mes": "2025-10",
    "device_canonical": "Point Pro 2",
    "familia": "OUTRO",
    "qtd_trocas": 7848,
    "mad": 731907,
    "trocas_mad_pct": 1.0723,
    "pct_trocas_no_mes": 25.0
  },
  {
    "site": "MLB",
    "mes": "2025-10",
    "device_canonical": "Point Smart 2",
    "familia": "OUTRO",
    "qtd_trocas": 4456,
    "mad": 362022,
    "trocas_mad_pct": 1.2309,
    "pct_trocas_no_mes": 14.2
  },
  {
    "site": "MLB",
    "mes": "2025-10",
    "device_canonical": "Point Pro 3",
    "familia": "OUTRO",
    "qtd_trocas": 1038,
    "mad": 282922,
    "trocas_mad_pct": 0.3669,
    "pct_trocas_no_mes": 3.3
  },
  {
    "site": "MLB",
    "mes": "2025-10",
    "device_canonical": "Point MINI",
    "familia": "MINI",
    "qtd_trocas": 389,
    "mad": 262026,
    "trocas_mad_pct": 0.1485,
    "pct_trocas_no_mes": 1.2
  },
  {
    "site": "MLB",
    "mes": "2025-10",
    "device_canonical": "Point Mini NFC",
    "familia": "OUTRO",
    "qtd_trocas": 141,
    "mad": 116848,
    "trocas_mad_pct": 0.1207,
    "pct_trocas_no_mes": 0.4
  },
  {
    "site": "MLB",
    "mes": "2025-10",
    "device_canonical": "Point AIR 2",
    "familia": "AIR",
    "qtd_trocas": 107,
    "mad": 19008,
    "trocas_mad_pct": 0.5629,
    "pct_trocas_no_mes": 0.3
  },
  {
    "site": "MLB",
    "mes": "2025-10",
    "device_canonical": "Point Mini NFC 1",
    "familia": "OUTRO",
    "qtd_trocas": 78,
    "mad": 274642,
    "trocas_mad_pct": 0.0284,
    "pct_trocas_no_mes": 0.2
  },
  {
    "site": "MLB",
    "mes": "2025-10",
    "device_canonical": "Undefined",
    "familia": "OUTRO",
    "qtd_trocas": 13,
    "mad": 7770,
    "trocas_mad_pct": 0.1673,
    "pct_trocas_no_mes": null
  },
  {
    "site": "MLB",
    "mes": "2025-10",
    "device_canonical": "Point Mini (ME30S)",
    "familia": "OUTRO",
    "qtd_trocas": 12,
    "mad": 16632,
    "trocas_mad_pct": 0.0722,
    "pct_trocas_no_mes": null
  },
  {
    "site": "MLB",
    "mes": "2025-10",
    "device_canonical": "Point Mini ME30NFC",
    "familia": "OUTRO",
    "qtd_trocas": 3,
    "mad": 7475,
    "trocas_mad_pct": 0.0401,
    "pct_trocas_no_mes": null
  },
  {
    "site": "MLB",
    "mes": "2025-10",
    "device_canonical": "Point Smart 2 N950",
    "familia": "OUTRO",
    "qtd_trocas": 3,
    "mad": 1209,
    "trocas_mad_pct": 0.2481,
    "pct_trocas_no_mes": null
  },
  {
    "site": "MLB",
    "mes": "2025-10",
    "device_canonical": "Point Air",
    "familia": "OUTRO",
    "qtd_trocas": 1,
    "mad": 226357,
    "trocas_mad_pct": 0.0004,
    "pct_trocas_no_mes": null
  },
  {
    "site": "MLB",
    "mes": "2025-10",
    "device_canonical": "Point Genius N950",
    "familia": "OUTRO",
    "qtd_trocas": 1,
    "mad": 25,
    "trocas_mad_pct": 4.0,
    "pct_trocas_no_mes": null
  },
  {
    "site": "MLB",
    "mes": "2025-11",
    "device_canonical": null,
    "familia": "OUTRO",
    "qtd_trocas": 11970,
    "mad": null,
    "trocas_mad_pct": null,
    "pct_trocas_no_mes": 49.4
  },
  {
    "site": "MLB",
    "mes": "2025-11",
    "device_canonical": "Point Pro 2",
    "familia": "OUTRO",
    "qtd_trocas": 6988,
    "mad": 694524,
    "trocas_mad_pct": 1.0062,
    "pct_trocas_no_mes": 28.8
  },
  {
    "site": "MLB",
    "mes": "2025-11",
    "device_canonical": "Point Smart 2",
    "familia": "OUTRO",
    "qtd_trocas": 3490,
    "mad": 389121,
    "trocas_mad_pct": 0.8969,
    "pct_trocas_no_mes": 14.4
  },
  {
    "site": "MLB",
    "mes": "2025-11",
    "device_canonical": "Point Pro 3",
    "familia": "OUTRO",
    "qtd_trocas": 1024,
    "mad": 313829,
    "trocas_mad_pct": 0.3263,
    "pct_trocas_no_mes": 4.2
  },
  {
    "site": "MLB",
    "mes": "2025-11",
    "device_canonical": "Point MINI",
    "familia": "MINI",
    "qtd_trocas": 364,
    "mad": 242666,
    "trocas_mad_pct": 0.15,
    "pct_trocas_no_mes": 1.5
  },
  {
    "site": "MLB",
    "mes": "2025-11",
    "device_canonical": "Point AIR 2",
    "familia": "AIR",
    "qtd_trocas": 183,
    "mad": 25416,
    "trocas_mad_pct": 0.72,
    "pct_trocas_no_mes": 0.8
  },
  {
    "site": "MLB",
    "mes": "2025-11",
    "device_canonical": "Point Mini NFC",
    "familia": "OUTRO",
    "qtd_trocas": 114,
    "mad": 108609,
    "trocas_mad_pct": 0.105,
    "pct_trocas_no_mes": 0.5
  },
  {
    "site": "MLB",
    "mes": "2025-11",
    "device_canonical": "Point Mini NFC 1",
    "familia": "OUTRO",
    "qtd_trocas": 81,
    "mad": 259404,
    "trocas_mad_pct": 0.0312,
    "pct_trocas_no_mes": 0.3
  },
  {
    "site": "MLB",
    "mes": "2025-11",
    "device_canonical": "Undefined",
    "familia": "OUTRO",
    "qtd_trocas": 14,
    "mad": 7411,
    "trocas_mad_pct": 0.1889,
    "pct_trocas_no_mes": 0.1
  },
  {
    "site": "MLB",
    "mes": "2025-11",
    "device_canonical": "Point Mini (ME30S)",
    "familia": "OUTRO",
    "qtd_trocas": 7,
    "mad": 15423,
    "trocas_mad_pct": 0.0454,
    "pct_trocas_no_mes": null
  },
  {
    "site": "MLB",
    "mes": "2025-11",
    "device_canonical": "Point Mini ME30NFC",
    "familia": "OUTRO",
    "qtd_trocas": 5,
    "mad": 7036,
    "trocas_mad_pct": 0.0711,
    "pct_trocas_no_mes": null
  },
  {
    "site": "MLB",
    "mes": "2025-11",
    "device_canonical": "Point Smart 2 N950",
    "familia": "OUTRO",
    "qtd_trocas": 2,
    "mad": 1149,
    "trocas_mad_pct": 0.1741,
    "pct_trocas_no_mes": null
  },
  {
    "site": "MLB",
    "mes": "2025-12",
    "device_canonical": null,
    "familia": "OUTRO",
    "qtd_trocas": 16088,
    "mad": null,
    "trocas_mad_pct": null,
    "pct_trocas_no_mes": 56.6
  },
  {
    "site": "MLB",
    "mes": "2025-12",
    "device_canonical": "Point Pro 2",
    "familia": "OUTRO",
    "qtd_trocas": 6983,
    "mad": 666568,
    "trocas_mad_pct": 1.0476,
    "pct_trocas_no_mes": 24.5
  },
  {
    "site": "MLB",
    "mes": "2025-12",
    "device_canonical": "Point Smart 2",
    "familia": "OUTRO",
    "qtd_trocas": 3735,
    "mad": 413754,
    "trocas_mad_pct": 0.9027,
    "pct_trocas_no_mes": 13.1
  },
  {
    "site": "MLB",
    "mes": "2025-12",
    "device_canonical": "Point Pro 3",
    "familia": "OUTRO",
    "qtd_trocas": 991,
    "mad": 335134,
    "trocas_mad_pct": 0.2957,
    "pct_trocas_no_mes": 3.5
  },
  {
    "site": "MLB",
    "mes": "2025-12",
    "device_canonical": "Point MINI",
    "familia": "MINI",
    "qtd_trocas": 294,
    "mad": 226898,
    "trocas_mad_pct": 0.1296,
    "pct_trocas_no_mes": 1.0
  },
  {
    "site": "MLB",
    "mes": "2025-12",
    "device_canonical": "Point AIR 2",
    "familia": "AIR",
    "qtd_trocas": 148,
    "mad": 33301,
    "trocas_mad_pct": 0.4444,
    "pct_trocas_no_mes": 0.5
  },
  {
    "site": "MLB",
    "mes": "2025-12",
    "device_canonical": "Point Mini NFC",
    "familia": "OUTRO",
    "qtd_trocas": 101,
    "mad": 102986,
    "trocas_mad_pct": 0.0981,
    "pct_trocas_no_mes": 0.4
  },
  {
    "site": "MLB",
    "mes": "2025-12",
    "device_canonical": "Point Mini NFC 1",
    "familia": "OUTRO",
    "qtd_trocas": 73,
    "mad": 247573,
    "trocas_mad_pct": 0.0295,
    "pct_trocas_no_mes": 0.3
  },
  {
    "site": "MLB",
    "mes": "2025-12",
    "device_canonical": "Undefined",
    "familia": "OUTRO",
    "qtd_trocas": 20,
    "mad": 7342,
    "trocas_mad_pct": 0.2724,
    "pct_trocas_no_mes": 0.1
  },
  {
    "site": "MLB",
    "mes": "2025-12",
    "device_canonical": "Point Mini (ME30S)",
    "familia": "OUTRO",
    "qtd_trocas": 6,
    "mad": 14321,
    "trocas_mad_pct": 0.0419,
    "pct_trocas_no_mes": null
  },
  {
    "site": "MLB",
    "mes": "2025-12",
    "device_canonical": "Point Mini ME30NFC",
    "familia": "OUTRO",
    "qtd_trocas": 5,
    "mad": 6565,
    "trocas_mad_pct": 0.0762,
    "pct_trocas_no_mes": null
  },
  {
    "site": "MLB",
    "mes": "2025-12",
    "device_canonical": "Point Smart 2 N950",
    "familia": "OUTRO",
    "qtd_trocas": 1,
    "mad": 1123,
    "trocas_mad_pct": 0.089,
    "pct_trocas_no_mes": null
  },
  {
    "site": "MLB",
    "mes": "2026-01",
    "device_canonical": null,
    "familia": "OUTRO",
    "qtd_trocas": 15092,
    "mad": null,
    "trocas_mad_pct": null,
    "pct_trocas_no_mes": 50.6
  },
  {
    "site": "MLB",
    "mes": "2026-01",
    "device_canonical": "Point Pro 2",
    "familia": "OUTRO",
    "qtd_trocas": 7960,
    "mad": 624296,
    "trocas_mad_pct": 1.275,
    "pct_trocas_no_mes": 26.7
  },
  {
    "site": "MLB",
    "mes": "2026-01",
    "device_canonical": "Point Smart 2",
    "familia": "OUTRO",
    "qtd_trocas": 4713,
    "mad": 437399,
    "trocas_mad_pct": 1.0775,
    "pct_trocas_no_mes": 15.8
  },
  {
    "site": "MLB",
    "mes": "2026-01",
    "device_canonical": "Point Pro 3",
    "familia": "OUTRO",
    "qtd_trocas": 1181,
    "mad": 362512,
    "trocas_mad_pct": 0.3258,
    "pct_trocas_no_mes": 4.0
  },
  {
    "site": "MLB",
    "mes": "2026-01",
    "device_canonical": "Point MINI",
    "familia": "MINI",
    "qtd_trocas": 356,
    "mad": 203924,
    "trocas_mad_pct": 0.1746,
    "pct_trocas_no_mes": 1.2
  },
  {
    "site": "MLB",
    "mes": "2026-01",
    "device_canonical": "Point AIR 2",
    "familia": "AIR",
    "qtd_trocas": 231,
    "mad": 42487,
    "trocas_mad_pct": 0.5437,
    "pct_trocas_no_mes": 0.8
  },
  {
    "site": "MLB",
    "mes": "2026-01",
    "device_canonical": "Point Mini NFC",
    "familia": "OUTRO",
    "qtd_trocas": 136,
    "mad": 92851,
    "trocas_mad_pct": 0.1465,
    "pct_trocas_no_mes": 0.5
  },
  {
    "site": "MLB",
    "mes": "2026-01",
    "device_canonical": "Point Mini NFC 1",
    "familia": "OUTRO",
    "qtd_trocas": 101,
    "mad": 225170,
    "trocas_mad_pct": 0.0449,
    "pct_trocas_no_mes": 0.3
  },
  {
    "site": "MLB",
    "mes": "2026-01",
    "device_canonical": "Point Smart 2 N950",
    "familia": "OUTRO",
    "qtd_trocas": 23,
    "mad": 1084,
    "trocas_mad_pct": 2.1218,
    "pct_trocas_no_mes": 0.1
  },
  {
    "site": "MLB",
    "mes": "2026-01",
    "device_canonical": "Undefined",
    "familia": "OUTRO",
    "qtd_trocas": 19,
    "mad": 7044,
    "trocas_mad_pct": 0.2697,
    "pct_trocas_no_mes": 0.1
  },
  {
    "site": "MLB",
    "mes": "2026-01",
    "device_canonical": "Point Mini (ME30S)",
    "familia": "OUTRO",
    "qtd_trocas": 6,
    "mad": 12931,
    "trocas_mad_pct": 0.0464,
    "pct_trocas_no_mes": null
  },
  {
    "site": "MLB",
    "mes": "2026-01",
    "device_canonical": "Point Mini ME30NFC",
    "familia": "OUTRO",
    "qtd_trocas": 5,
    "mad": 5853,
    "trocas_mad_pct": 0.0854,
    "pct_trocas_no_mes": null
  },
  {
    "site": "MLB",
    "mes": "2026-01",
    "device_canonical": "Point Air",
    "familia": "OUTRO",
    "qtd_trocas": 3,
    "mad": 193299,
    "trocas_mad_pct": 0.0016,
    "pct_trocas_no_mes": null
  },
  {
    "site": "MLB",
    "mes": "2026-01",
    "device_canonical": "UNKNOWN",
    "familia": "OUTRO",
    "qtd_trocas": 2,
    "mad": 524,
    "trocas_mad_pct": 0.3817,
    "pct_trocas_no_mes": null
  },
  {
    "site": "MLB",
    "mes": "2026-01",
    "device_canonical": "Point Smart",
    "familia": "OUTRO",
    "qtd_trocas": 1,
    "mad": 217057,
    "trocas_mad_pct": 0.0005,
    "pct_trocas_no_mes": null
  },
  {
    "site": "MLB",
    "mes": "2026-02",
    "device_canonical": null,
    "familia": "OUTRO",
    "qtd_trocas": 13767,
    "mad": null,
    "trocas_mad_pct": null,
    "pct_trocas_no_mes": 52.0
  },
  {
    "site": "MLB",
    "mes": "2026-02",
    "device_canonical": "Point Pro 2",
    "familia": "OUTRO",
    "qtd_trocas": 6553,
    "mad": 598312,
    "trocas_mad_pct": 1.0952,
    "pct_trocas_no_mes": 24.8
  },
  {
    "site": "MLB",
    "mes": "2026-02",
    "device_canonical": "Point Smart 2",
    "familia": "OUTRO",
    "qtd_trocas": 4212,
    "mad": 460250,
    "trocas_mad_pct": 0.9152,
    "pct_trocas_no_mes": 15.9
  },
  {
    "site": "MLB",
    "mes": "2026-02",
    "device_canonical": "Point Pro 3",
    "familia": "OUTRO",
    "qtd_trocas": 992,
    "mad": 392497,
    "trocas_mad_pct": 0.2527,
    "pct_trocas_no_mes": 3.7
  },
  {
    "site": "MLB",
    "mes": "2026-02",
    "device_canonical": "Point AIR 2",
    "familia": "AIR",
    "qtd_trocas": 367,
    "mad": 53678,
    "trocas_mad_pct": 0.6837,
    "pct_trocas_no_mes": 1.4
  },
  {
    "site": "MLB",
    "mes": "2026-02",
    "device_canonical": "Point MINI",
    "familia": "MINI",
    "qtd_trocas": 299,
    "mad": 189232,
    "trocas_mad_pct": 0.158,
    "pct_trocas_no_mes": 1.1
  },
  {
    "site": "MLB",
    "mes": "2026-02",
    "device_canonical": "Point Mini NFC",
    "familia": "OUTRO",
    "qtd_trocas": 121,
    "mad": 86654,
    "trocas_mad_pct": 0.1396,
    "pct_trocas_no_mes": 0.5
  },
  {
    "site": "MLB",
    "mes": "2026-02",
    "device_canonical": "Point Mini NFC 1",
    "familia": "OUTRO",
    "qtd_trocas": 113,
    "mad": 213310,
    "trocas_mad_pct": 0.053,
    "pct_trocas_no_mes": 0.4
  },
  {
    "site": "MLB",
    "mes": "2026-02",
    "device_canonical": "Point Smart 2 N950",
    "familia": "OUTRO",
    "qtd_trocas": 23,
    "mad": 1045,
    "trocas_mad_pct": 2.201,
    "pct_trocas_no_mes": 0.1
  },
  {
    "site": "MLB",
    "mes": "2026-02",
    "device_canonical": "Undefined",
    "familia": "OUTRO",
    "qtd_trocas": 18,
    "mad": 6980,
    "trocas_mad_pct": 0.2579,
    "pct_trocas_no_mes": 0.1
  },
  {
    "site": "MLB",
    "mes": "2026-02",
    "device_canonical": "Point Mini (ME30S)",
    "familia": "OUTRO",
    "qtd_trocas": 4,
    "mad": 11962,
    "trocas_mad_pct": 0.0334,
    "pct_trocas_no_mes": null
  },
  {
    "site": "MLB",
    "mes": "2026-02",
    "device_canonical": "Point Air",
    "familia": "OUTRO",
    "qtd_trocas": 3,
    "mad": 188308,
    "trocas_mad_pct": 0.0016,
    "pct_trocas_no_mes": null
  },
  {
    "site": "MLB",
    "mes": "2026-02",
    "device_canonical": "Point Mini ME30NFC",
    "familia": "OUTRO",
    "qtd_trocas": 3,
    "mad": 5406,
    "trocas_mad_pct": 0.0555,
    "pct_trocas_no_mes": null
  },
  {
    "site": "MLB",
    "mes": "2026-02",
    "device_canonical": "Point Smart",
    "familia": "OUTRO",
    "qtd_trocas": 1,
    "mad": 205534,
    "trocas_mad_pct": 0.0005,
    "pct_trocas_no_mes": null
  },
  {
    "site": "MLB",
    "mes": "2026-03",
    "device_canonical": null,
    "familia": "OUTRO",
    "qtd_trocas": 12967,
    "mad": null,
    "trocas_mad_pct": null,
    "pct_trocas_no_mes": 50.5
  },
  {
    "site": "MLB",
    "mes": "2026-03",
    "device_canonical": "Point Pro 2",
    "familia": "OUTRO",
    "qtd_trocas": 6608,
    "mad": 515759,
    "trocas_mad_pct": 1.2812,
    "pct_trocas_no_mes": 25.7
  },
  {
    "site": "MLB",
    "mes": "2026-03",
    "device_canonical": "Point Smart 2",
    "familia": "OUTRO",
    "qtd_trocas": 4089,
    "mad": 440851,
    "trocas_mad_pct": 0.9275,
    "pct_trocas_no_mes": 15.9
  },
  {
    "site": "MLB",
    "mes": "2026-03",
    "device_canonical": "Point Pro 3",
    "familia": "OUTRO",
    "qtd_trocas": 1106,
    "mad": 375926,
    "trocas_mad_pct": 0.2942,
    "pct_trocas_no_mes": 4.3
  },
  {
    "site": "MLB",
    "mes": "2026-03",
    "device_canonical": "Point AIR 2",
    "familia": "AIR",
    "qtd_trocas": 354,
    "mad": 48893,
    "trocas_mad_pct": 0.724,
    "pct_trocas_no_mes": 1.4
  },
  {
    "site": "MLB",
    "mes": "2026-03",
    "device_canonical": "Point MINI",
    "familia": "MINI",
    "qtd_trocas": 310,
    "mad": 142844,
    "trocas_mad_pct": 0.217,
    "pct_trocas_no_mes": 1.2
  },
  {
    "site": "MLB",
    "mes": "2026-03",
    "device_canonical": "Point Mini NFC 1",
    "familia": "OUTRO",
    "qtd_trocas": 135,
    "mad": 161747,
    "trocas_mad_pct": 0.0835,
    "pct_trocas_no_mes": 0.5
  },
  {
    "site": "MLB",
    "mes": "2026-03",
    "device_canonical": "Point Mini NFC",
    "familia": "OUTRO",
    "qtd_trocas": 76,
    "mad": 65797,
    "trocas_mad_pct": 0.1155,
    "pct_trocas_no_mes": 0.3
  },
  {
    "site": "MLB",
    "mes": "2026-03",
    "device_canonical": "Undefined",
    "familia": "OUTRO",
    "qtd_trocas": 25,
    "mad": 5957,
    "trocas_mad_pct": 0.4197,
    "pct_trocas_no_mes": 0.1
  },
  {
    "site": "MLB",
    "mes": "2026-03",
    "device_canonical": "Point Smart 2 N950",
    "familia": "OUTRO",
    "qtd_trocas": 12,
    "mad": 965,
    "trocas_mad_pct": 1.2435,
    "pct_trocas_no_mes": null
  },
  {
    "site": "MLB",
    "mes": "2026-03",
    "device_canonical": "Point Mini (ME30S)",
    "familia": "OUTRO",
    "qtd_trocas": 5,
    "mad": 8572,
    "trocas_mad_pct": 0.0583,
    "pct_trocas_no_mes": null
  },
  {
    "site": "MLB",
    "mes": "2026-03",
    "device_canonical": "Point Mini ME30NFC",
    "familia": "OUTRO",
    "qtd_trocas": 2,
    "mad": 3957,
    "trocas_mad_pct": 0.0505,
    "pct_trocas_no_mes": null
  },
  {
    "site": "MLB",
    "mes": "2026-03",
    "device_canonical": "Point Air",
    "familia": "OUTRO",
    "qtd_trocas": 1,
    "mad": 151179,
    "trocas_mad_pct": 0.0007,
    "pct_trocas_no_mes": null
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "device_canonical": null,
    "familia": "OUTRO",
    "qtd_trocas": 3834,
    "mad": null,
    "trocas_mad_pct": null,
    "pct_trocas_no_mes": 54.1
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "device_canonical": "Point Pro 2",
    "familia": "OUTRO",
    "qtd_trocas": 1709,
    "mad": null,
    "trocas_mad_pct": null,
    "pct_trocas_no_mes": 24.1
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "device_canonical": "Point Smart 2",
    "familia": "OUTRO",
    "qtd_trocas": 999,
    "mad": null,
    "trocas_mad_pct": null,
    "pct_trocas_no_mes": 14.1
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "device_canonical": "Point Pro 3",
    "familia": "OUTRO",
    "qtd_trocas": 265,
    "mad": null,
    "trocas_mad_pct": null,
    "pct_trocas_no_mes": 3.7
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "device_canonical": "Point AIR 2",
    "familia": "AIR",
    "qtd_trocas": 101,
    "mad": null,
    "trocas_mad_pct": null,
    "pct_trocas_no_mes": 1.4
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "device_canonical": "Point MINI",
    "familia": "MINI",
    "qtd_trocas": 88,
    "mad": null,
    "trocas_mad_pct": null,
    "pct_trocas_no_mes": 1.2
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "device_canonical": "Point Mini NFC 1",
    "familia": "OUTRO",
    "qtd_trocas": 47,
    "mad": null,
    "trocas_mad_pct": null,
    "pct_trocas_no_mes": 0.7
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "device_canonical": "Point Mini NFC",
    "familia": "OUTRO",
    "qtd_trocas": 26,
    "mad": null,
    "trocas_mad_pct": null,
    "pct_trocas_no_mes": 0.4
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "device_canonical": "Point Mini (ME30S)",
    "familia": "OUTRO",
    "qtd_trocas": 5,
    "mad": null,
    "trocas_mad_pct": null,
    "pct_trocas_no_mes": 0.1
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "device_canonical": "Undefined",
    "familia": "OUTRO",
    "qtd_trocas": 5,
    "mad": null,
    "trocas_mad_pct": null,
    "pct_trocas_no_mes": 0.1
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "device_canonical": "Point Mini ME30NFC",
    "familia": "OUTRO",
    "qtd_trocas": 1,
    "mad": null,
    "trocas_mad_pct": null,
    "pct_trocas_no_mes": null
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "device_canonical": "Point Smart 2 N950",
    "familia": "OUTRO",
    "qtd_trocas": 1,
    "mad": null,
    "trocas_mad_pct": null,
    "pct_trocas_no_mes": null
  }
],

  // ── Canal N1×N2 combinado ──────────────────────────────────
  // n2 = N1 quando SO_SOURCE_CHANNEL é null (canal sem subcategoria)
  // MLB | REPAIR | BUCKET IS NULL | excl. cust 75554443 jan/26
  byCanal2D: [
  {
    "site": "MLB",
    "mes": "2025-09",
    "n1": "FAQ",
    "n2": "VERDI_FORM",
    "qtd": 16422
  },
  {
    "site": "MLB",
    "mes": "2025-09",
    "n1": "CX",
    "n2": "CX",
    "qtd": 5140
  },
  {
    "site": "MLB",
    "mes": "2025-09",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "qtd": 3668
  },
  {
    "site": "MLB",
    "mes": "2025-09",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "qtd": 3446
  },
  {
    "site": "MLB",
    "mes": "2025-09",
    "n1": "FDV",
    "n2": "FDV",
    "qtd": 843
  },
  {
    "site": "MLB",
    "mes": "2025-09",
    "n1": "TLV",
    "n2": "TLV",
    "qtd": 604
  },
  {
    "site": "MLB",
    "mes": "2025-09",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "qtd": 85
  },
  {
    "site": "MLB",
    "mes": "2025-09",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "qtd": 7
  },
  {
    "site": "MLB",
    "mes": "2025-09",
    "n1": "FAQ",
    "n2": "POINT",
    "qtd": 6
  },
  {
    "site": "MLB",
    "mes": "2025-10",
    "n1": "FAQ",
    "n2": "VERDI_FORM",
    "qtd": 10432
  },
  {
    "site": "MLB",
    "mes": "2025-10",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "qtd": 7686
  },
  {
    "site": "MLB",
    "mes": "2025-10",
    "n1": "CX",
    "n2": "CX",
    "qtd": 5876
  },
  {
    "site": "MLB",
    "mes": "2025-10",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "qtd": 2968
  },
  {
    "site": "MLB",
    "mes": "2025-10",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "qtd": 2747
  },
  {
    "site": "MLB",
    "mes": "2025-10",
    "n1": "FDV",
    "n2": "FDV",
    "qtd": 1203
  },
  {
    "site": "MLB",
    "mes": "2025-10",
    "n1": "TLV",
    "n2": "TLV",
    "qtd": 329
  },
  {
    "site": "MLB",
    "mes": "2025-10",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "qtd": 124
  },
  {
    "site": "MLB",
    "mes": "2025-10",
    "n1": "FAQ",
    "n2": "POINT",
    "qtd": 25
  },
  {
    "site": "MLB",
    "mes": "2025-11",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "qtd": 13694
  },
  {
    "site": "MLB",
    "mes": "2025-11",
    "n1": "CX",
    "n2": "CX",
    "qtd": 3600
  },
  {
    "site": "MLB",
    "mes": "2025-11",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "qtd": 2486
  },
  {
    "site": "MLB",
    "mes": "2025-11",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "qtd": 2008
  },
  {
    "site": "MLB",
    "mes": "2025-11",
    "n1": "FAQ",
    "n2": "VERDI_FORM",
    "qtd": 1524
  },
  {
    "site": "MLB",
    "mes": "2025-11",
    "n1": "FDV",
    "n2": "FDV",
    "qtd": 783
  },
  {
    "site": "MLB",
    "mes": "2025-11",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "qtd": 65
  },
  {
    "site": "MLB",
    "mes": "2025-11",
    "n1": "CC_VIRTUAL",
    "n2": "CC_VIRTUAL",
    "qtd": 33
  },
  {
    "site": "MLB",
    "mes": "2025-11",
    "n1": "FAQ",
    "n2": "POINT",
    "qtd": 32
  },
  {
    "site": "MLB",
    "mes": "2025-11",
    "n1": "TLV",
    "n2": "TLV",
    "qtd": 12
  },
  {
    "site": "MLB",
    "mes": "2025-12",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "qtd": 14651
  },
  {
    "site": "MLB",
    "mes": "2025-12",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "qtd": 7516
  },
  {
    "site": "MLB",
    "mes": "2025-12",
    "n1": "CX",
    "n2": "CX",
    "qtd": 3274
  },
  {
    "site": "MLB",
    "mes": "2025-12",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "qtd": 1949
  },
  {
    "site": "MLB",
    "mes": "2025-12",
    "n1": "FDV",
    "n2": "FDV",
    "qtd": 841
  },
  {
    "site": "MLB",
    "mes": "2025-12",
    "n1": "FAQ",
    "n2": "VERDI_FORM",
    "qtd": 72
  },
  {
    "site": "MLB",
    "mes": "2025-12",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "qtd": 56
  },
  {
    "site": "MLB",
    "mes": "2025-12",
    "n1": "CC_VIRTUAL",
    "n2": "CC_VIRTUAL",
    "qtd": 37
  },
  {
    "site": "MLB",
    "mes": "2025-12",
    "n1": "FAQ",
    "n2": "POINT",
    "qtd": 31
  },
  {
    "site": "MLB",
    "mes": "2025-12",
    "n1": "TLV",
    "n2": "TLV",
    "qtd": 4
  },
  {
    "site": "MLB",
    "mes": "2026-01",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "qtd": 9757
  },
  {
    "site": "MLB",
    "mes": "2026-01",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "qtd": 9107
  },
  {
    "site": "MLB",
    "mes": "2026-01",
    "n1": "CX",
    "n2": "CX",
    "qtd": 4472
  },
  {
    "site": "MLB",
    "mes": "2026-01",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "qtd": 3254
  },
  {
    "site": "MLB",
    "mes": "2026-01",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "qtd": 1907
  },
  {
    "site": "MLB",
    "mes": "2026-01",
    "n1": "FDV",
    "n2": "FDV",
    "qtd": 917
  },
  {
    "site": "MLB",
    "mes": "2026-01",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "qtd": 144
  },
  {
    "site": "MLB",
    "mes": "2026-01",
    "n1": "FAQ",
    "n2": "VERDI_FORM",
    "qtd": 86
  },
  {
    "site": "MLB",
    "mes": "2026-01",
    "n1": "CC_VIRTUAL",
    "n2": "CC_VIRTUAL",
    "qtd": 64
  },
  {
    "site": "MLB",
    "mes": "2026-01",
    "n1": "FAQ",
    "n2": "POINT",
    "qtd": 46
  },
  {
    "site": "MLB",
    "mes": "2026-01",
    "n1": "TLV",
    "n2": "TLV",
    "qtd": 9
  },
  {
    "site": "MLB",
    "mes": "2026-02",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "qtd": 11903
  },
  {
    "site": "MLB",
    "mes": "2026-02",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "qtd": 5518
  },
  {
    "site": "MLB",
    "mes": "2026-02",
    "n1": "CX",
    "n2": "CX",
    "qtd": 4238
  },
  {
    "site": "MLB",
    "mes": "2026-02",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "qtd": 1767
  },
  {
    "site": "MLB",
    "mes": "2026-02",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "qtd": 1594
  },
  {
    "site": "MLB",
    "mes": "2026-02",
    "n1": "FDV",
    "n2": "FDV",
    "qtd": 1101
  },
  {
    "site": "MLB",
    "mes": "2026-02",
    "n1": "FAQ",
    "n2": "POINT",
    "qtd": 95
  },
  {
    "site": "MLB",
    "mes": "2026-02",
    "n1": "FAQ",
    "n2": "VERDI_FORM",
    "qtd": 65
  },
  {
    "site": "MLB",
    "mes": "2026-02",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "qtd": 61
  },
  {
    "site": "MLB",
    "mes": "2026-02",
    "n1": "CC_VIRTUAL",
    "n2": "CC_VIRTUAL",
    "qtd": 55
  },
  {
    "site": "MLB",
    "mes": "2026-02",
    "n1": "TLV",
    "n2": "TLV",
    "qtd": 11
  },
  {
    "site": "MLB",
    "mes": "2026-03",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "qtd": 13471
  },
  {
    "site": "MLB",
    "mes": "2026-03",
    "n1": "CX",
    "n2": "CX",
    "qtd": 3526
  },
  {
    "site": "MLB",
    "mes": "2026-03",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "qtd": 3410
  },
  {
    "site": "MLB",
    "mes": "2026-03",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "qtd": 1923
  },
  {
    "site": "MLB",
    "mes": "2026-03",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "qtd": 1901
  },
  {
    "site": "MLB",
    "mes": "2026-03",
    "n1": "FDV",
    "n2": "FDV",
    "qtd": 1155
  },
  {
    "site": "MLB",
    "mes": "2026-03",
    "n1": "FAQ",
    "n2": "POINT",
    "qtd": 86
  },
  {
    "site": "MLB",
    "mes": "2026-03",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "qtd": 81
  },
  {
    "site": "MLB",
    "mes": "2026-03",
    "n1": "CC_VIRTUAL",
    "n2": "CC_VIRTUAL",
    "qtd": 58
  },
  {
    "site": "MLB",
    "mes": "2026-03",
    "n1": "FAQ",
    "n2": "VERDI_FORM",
    "qtd": 51
  },
  {
    "site": "MLB",
    "mes": "2026-03",
    "n1": "TLV",
    "n2": "TLV",
    "qtd": 8
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "qtd": 4271
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "n1": "CX",
    "n2": "CX",
    "qtd": 1043
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "qtd": 615
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "qtd": 516
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "qtd": 436
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "n1": "FDV",
    "n2": "FDV",
    "qtd": 142
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "n1": "FAQ",
    "n2": "VERDI_FORM",
    "qtd": 24
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "n1": "FAQ",
    "n2": "POINT",
    "qtd": 19
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "qtd": 14
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "n1": "CC_VIRTUAL",
    "n2": "CC_VIRTUAL",
    "qtd": 1
  }
],

  // ── Canal N1 (SO_CALL_CENTER) ──────────────────────────────
  // MLB | REPAIR | BUCKET IS NULL | excl. cust 75554443 jan/26
  byCanal: [
  {
    "site": "MLB",
    "mes": "2025-09",
    "canal": "FAQ",
    "qtd_trocas": 20103
  },
  {
    "site": "MLB",
    "mes": "2025-09",
    "canal": "CX",
    "qtd_trocas": 5140
  },
  {
    "site": "MLB",
    "mes": "2025-09",
    "canal": "CERTIFIED_CONSULTANT",
    "qtd_trocas": 3446
  },
  {
    "site": "MLB",
    "mes": "2025-09",
    "canal": "FDV",
    "qtd_trocas": 843
  },
  {
    "site": "MLB",
    "mes": "2025-09",
    "canal": "TLV",
    "qtd_trocas": 604
  },
  {
    "site": "MLB",
    "mes": "2025-09",
    "canal": "CX_NIVEL_2",
    "qtd_trocas": 85
  },
  {
    "site": "MLB",
    "mes": "2025-10",
    "canal": "FAQ",
    "qtd_trocas": 20890
  },
  {
    "site": "MLB",
    "mes": "2025-10",
    "canal": "CX",
    "qtd_trocas": 5876
  },
  {
    "site": "MLB",
    "mes": "2025-10",
    "canal": "CERTIFIED_CONSULTANT",
    "qtd_trocas": 2968
  },
  {
    "site": "MLB",
    "mes": "2025-10",
    "canal": "FDV",
    "qtd_trocas": 1203
  },
  {
    "site": "MLB",
    "mes": "2025-10",
    "canal": "TLV",
    "qtd_trocas": 329
  },
  {
    "site": "MLB",
    "mes": "2025-10",
    "canal": "CX_NIVEL_2",
    "qtd_trocas": 124
  },
  {
    "site": "MLB",
    "mes": "2025-11",
    "canal": "FAQ",
    "qtd_trocas": 17736
  },
  {
    "site": "MLB",
    "mes": "2025-11",
    "canal": "CX",
    "qtd_trocas": 3600
  },
  {
    "site": "MLB",
    "mes": "2025-11",
    "canal": "CERTIFIED_CONSULTANT",
    "qtd_trocas": 2008
  },
  {
    "site": "MLB",
    "mes": "2025-11",
    "canal": "FDV",
    "qtd_trocas": 783
  },
  {
    "site": "MLB",
    "mes": "2025-11",
    "canal": "CX_NIVEL_2",
    "qtd_trocas": 65
  },
  {
    "site": "MLB",
    "mes": "2025-11",
    "canal": "CC_VIRTUAL",
    "qtd_trocas": 33
  },
  {
    "site": "MLB",
    "mes": "2025-11",
    "canal": "TLV",
    "qtd_trocas": 12
  },
  {
    "site": "MLB",
    "mes": "2025-12",
    "canal": "FAQ",
    "qtd_trocas": 22270
  },
  {
    "site": "MLB",
    "mes": "2025-12",
    "canal": "CX",
    "qtd_trocas": 3274
  },
  {
    "site": "MLB",
    "mes": "2025-12",
    "canal": "CERTIFIED_CONSULTANT",
    "qtd_trocas": 1949
  },
  {
    "site": "MLB",
    "mes": "2025-12",
    "canal": "FDV",
    "qtd_trocas": 841
  },
  {
    "site": "MLB",
    "mes": "2025-12",
    "canal": "CX_NIVEL_2",
    "qtd_trocas": 56
  },
  {
    "site": "MLB",
    "mes": "2025-12",
    "canal": "CC_VIRTUAL",
    "qtd_trocas": 37
  },
  {
    "site": "MLB",
    "mes": "2025-12",
    "canal": "TLV",
    "qtd_trocas": 4
  },
  {
    "site": "MLB",
    "mes": "2026-01",
    "canal": "FAQ",
    "qtd_trocas": 22250
  },
  {
    "site": "MLB",
    "mes": "2026-01",
    "canal": "CX",
    "qtd_trocas": 4472
  },
  {
    "site": "MLB",
    "mes": "2026-01",
    "canal": "CERTIFIED_CONSULTANT",
    "qtd_trocas": 1907
  },
  {
    "site": "MLB",
    "mes": "2026-01",
    "canal": "FDV",
    "qtd_trocas": 917
  },
  {
    "site": "MLB",
    "mes": "2026-01",
    "canal": "CX_NIVEL_2",
    "qtd_trocas": 144
  },
  {
    "site": "MLB",
    "mes": "2026-01",
    "canal": "CC_VIRTUAL",
    "qtd_trocas": 64
  },
  {
    "site": "MLB",
    "mes": "2026-01",
    "canal": "TLV",
    "qtd_trocas": 9
  },
  {
    "site": "MLB",
    "mes": "2026-02",
    "canal": "FAQ",
    "qtd_trocas": 19348
  },
  {
    "site": "MLB",
    "mes": "2026-02",
    "canal": "CX",
    "qtd_trocas": 4238
  },
  {
    "site": "MLB",
    "mes": "2026-02",
    "canal": "CERTIFIED_CONSULTANT",
    "qtd_trocas": 1594
  },
  {
    "site": "MLB",
    "mes": "2026-02",
    "canal": "FDV",
    "qtd_trocas": 1101
  },
  {
    "site": "MLB",
    "mes": "2026-02",
    "canal": "CX_NIVEL_2",
    "qtd_trocas": 61
  },
  {
    "site": "MLB",
    "mes": "2026-02",
    "canal": "CC_VIRTUAL",
    "qtd_trocas": 55
  },
  {
    "site": "MLB",
    "mes": "2026-02",
    "canal": "TLV",
    "qtd_trocas": 11
  },
  {
    "site": "MLB",
    "mes": "2026-03",
    "canal": "FAQ",
    "qtd_trocas": 18919
  },
  {
    "site": "MLB",
    "mes": "2026-03",
    "canal": "CX",
    "qtd_trocas": 3526
  },
  {
    "site": "MLB",
    "mes": "2026-03",
    "canal": "CERTIFIED_CONSULTANT",
    "qtd_trocas": 1923
  },
  {
    "site": "MLB",
    "mes": "2026-03",
    "canal": "FDV",
    "qtd_trocas": 1155
  },
  {
    "site": "MLB",
    "mes": "2026-03",
    "canal": "CX_NIVEL_2",
    "qtd_trocas": 81
  },
  {
    "site": "MLB",
    "mes": "2026-03",
    "canal": "CC_VIRTUAL",
    "qtd_trocas": 58
  },
  {
    "site": "MLB",
    "mes": "2026-03",
    "canal": "TLV",
    "qtd_trocas": 8
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "canal": "FAQ",
    "qtd_trocas": 5445
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "canal": "CX",
    "qtd_trocas": 1043
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "canal": "CERTIFIED_CONSULTANT",
    "qtd_trocas": 436
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "canal": "FDV",
    "qtd_trocas": 142
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "canal": "CX_NIVEL_2",
    "qtd_trocas": 14
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "canal": "CC_VIRTUAL",
    "qtd_trocas": 1
  },
  {
    "site": "MLA",
    "mes": "2025-09",
    "canal": "FAQ",
    "qtd_trocas": 2926
  },
  {
    "site": "MLA",
    "mes": "2025-09",
    "canal": "CX",
    "qtd_trocas": 663
  },
  {
    "site": "MLA",
    "mes": "2025-09",
    "canal": "CERTIFIED_CONSULTANT",
    "qtd_trocas": 512
  },
  {
    "site": "MLA",
    "mes": "2025-09",
    "canal": "CX_NIVEL_2",
    "qtd_trocas": 24
  },
  {
    "site": "MLA",
    "mes": "2025-10",
    "canal": "FAQ",
    "qtd_trocas": 3147
  },
  {
    "site": "MLA",
    "mes": "2025-10",
    "canal": "CERTIFIED_CONSULTANT",
    "qtd_trocas": 672
  },
  {
    "site": "MLA",
    "mes": "2025-10",
    "canal": "CX",
    "qtd_trocas": 613
  },
  {
    "site": "MLA",
    "mes": "2025-10",
    "canal": "CX_NIVEL_2",
    "qtd_trocas": 12
  },
  {
    "site": "MLA",
    "mes": "2025-11",
    "canal": "FAQ",
    "qtd_trocas": 3952
  },
  {
    "site": "MLA",
    "mes": "2025-11",
    "canal": "CERTIFIED_CONSULTANT",
    "qtd_trocas": 668
  },
  {
    "site": "MLA",
    "mes": "2025-11",
    "canal": "CX",
    "qtd_trocas": 526
  },
  {
    "site": "MLA",
    "mes": "2025-11",
    "canal": "CC_VIRTUAL",
    "qtd_trocas": 19
  },
  {
    "site": "MLA",
    "mes": "2025-11",
    "canal": "CX_NIVEL_2",
    "qtd_trocas": 13
  },
  {
    "site": "MLA",
    "mes": "2025-12",
    "canal": "FAQ",
    "qtd_trocas": 4309
  },
  {
    "site": "MLA",
    "mes": "2025-12",
    "canal": "CERTIFIED_CONSULTANT",
    "qtd_trocas": 788
  },
  {
    "site": "MLA",
    "mes": "2025-12",
    "canal": "CX",
    "qtd_trocas": 457
  },
  {
    "site": "MLA",
    "mes": "2025-12",
    "canal": "CX_NIVEL_2",
    "qtd_trocas": 18
  },
  {
    "site": "MLA",
    "mes": "2025-12",
    "canal": "CC_VIRTUAL",
    "qtd_trocas": 10
  },
  {
    "site": "MLA",
    "mes": "2026-01",
    "canal": "FAQ",
    "qtd_trocas": 6210
  },
  {
    "site": "MLA",
    "mes": "2026-01",
    "canal": "CERTIFIED_CONSULTANT",
    "qtd_trocas": 878
  },
  {
    "site": "MLA",
    "mes": "2026-01",
    "canal": "CX",
    "qtd_trocas": 627
  },
  {
    "site": "MLA",
    "mes": "2026-01",
    "canal": "CC_VIRTUAL",
    "qtd_trocas": 35
  },
  {
    "site": "MLA",
    "mes": "2026-01",
    "canal": "CX_NIVEL_2",
    "qtd_trocas": 23
  },
  {
    "site": "MLA",
    "mes": "2026-02",
    "canal": "FAQ",
    "qtd_trocas": 12928
  },
  {
    "site": "MLA",
    "mes": "2026-02",
    "canal": "CERTIFIED_CONSULTANT",
    "qtd_trocas": 2706
  },
  {
    "site": "MLA",
    "mes": "2026-02",
    "canal": "CX",
    "qtd_trocas": 1481
  },
  {
    "site": "MLA",
    "mes": "2026-02",
    "canal": "CC_VIRTUAL",
    "qtd_trocas": 97
  },
  {
    "site": "MLA",
    "mes": "2026-02",
    "canal": "CX_NIVEL_2",
    "qtd_trocas": 68
  },
  {
    "site": "MLA",
    "mes": "2026-03",
    "canal": "FAQ",
    "qtd_trocas": 6470
  },
  {
    "site": "MLA",
    "mes": "2026-03",
    "canal": "CERTIFIED_CONSULTANT",
    "qtd_trocas": 2143
  },
  {
    "site": "MLA",
    "mes": "2026-03",
    "canal": "CX",
    "qtd_trocas": 681
  },
  {
    "site": "MLA",
    "mes": "2026-03",
    "canal": "CX_NIVEL_2",
    "qtd_trocas": 86
  },
  {
    "site": "MLA",
    "mes": "2026-03",
    "canal": "CC_VIRTUAL",
    "qtd_trocas": 72
  },
  {
    "site": "MLA",
    "mes": "2026-04",
    "canal": "FAQ",
    "qtd_trocas": 1328
  },
  {
    "site": "MLA",
    "mes": "2026-04",
    "canal": "CERTIFIED_CONSULTANT",
    "qtd_trocas": 363
  },
  {
    "site": "MLA",
    "mes": "2026-04",
    "canal": "CX",
    "qtd_trocas": 158
  },
  {
    "site": "MLA",
    "mes": "2026-04",
    "canal": "CX_NIVEL_2",
    "qtd_trocas": 17
  },
  {
    "site": "MLA",
    "mes": "2026-04",
    "canal": "CC_VIRTUAL",
    "qtd_trocas": 13
  },
  {
    "site": "MLC",
    "mes": "2025-09",
    "canal": "CX",
    "qtd_trocas": 752
  },
  {
    "site": "MLC",
    "mes": "2025-09",
    "canal": "FAQ",
    "qtd_trocas": 170
  },
  {
    "site": "MLC",
    "mes": "2025-09",
    "canal": "CX_NIVEL_2",
    "qtd_trocas": 11
  },
  {
    "site": "MLC",
    "mes": "2025-10",
    "canal": "CX",
    "qtd_trocas": 1008
  },
  {
    "site": "MLC",
    "mes": "2025-10",
    "canal": "FAQ",
    "qtd_trocas": 223
  },
  {
    "site": "MLC",
    "mes": "2025-10",
    "canal": "CX_NIVEL_2",
    "qtd_trocas": 15
  },
  {
    "site": "MLC",
    "mes": "2025-11",
    "canal": "CX",
    "qtd_trocas": 1045
  },
  {
    "site": "MLC",
    "mes": "2025-11",
    "canal": "FAQ",
    "qtd_trocas": 302
  },
  {
    "site": "MLC",
    "mes": "2025-11",
    "canal": "CX_NIVEL_2",
    "qtd_trocas": 29
  },
  {
    "site": "MLC",
    "mes": "2025-12",
    "canal": "CX",
    "qtd_trocas": 1130
  },
  {
    "site": "MLC",
    "mes": "2025-12",
    "canal": "FAQ",
    "qtd_trocas": 371
  },
  {
    "site": "MLC",
    "mes": "2025-12",
    "canal": "CX_NIVEL_2",
    "qtd_trocas": 10
  },
  {
    "site": "MLC",
    "mes": "2026-01",
    "canal": "CX",
    "qtd_trocas": 1045
  },
  {
    "site": "MLC",
    "mes": "2026-01",
    "canal": "FAQ",
    "qtd_trocas": 875
  },
  {
    "site": "MLC",
    "mes": "2026-01",
    "canal": "CX_NIVEL_2",
    "qtd_trocas": 8
  },
  {
    "site": "MLC",
    "mes": "2026-02",
    "canal": "CX",
    "qtd_trocas": 964
  },
  {
    "site": "MLC",
    "mes": "2026-02",
    "canal": "FAQ",
    "qtd_trocas": 579
  },
  {
    "site": "MLC",
    "mes": "2026-02",
    "canal": "CX_NIVEL_2",
    "qtd_trocas": 5
  },
  {
    "site": "MLC",
    "mes": "2026-03",
    "canal": "CX",
    "qtd_trocas": 935
  },
  {
    "site": "MLC",
    "mes": "2026-03",
    "canal": "FAQ",
    "qtd_trocas": 582
  },
  {
    "site": "MLC",
    "mes": "2026-03",
    "canal": "CX_NIVEL_2",
    "qtd_trocas": 54
  },
  {
    "site": "MLC",
    "mes": "2026-04",
    "canal": "CX",
    "qtd_trocas": 272
  },
  {
    "site": "MLC",
    "mes": "2026-04",
    "canal": "FAQ",
    "qtd_trocas": 219
  },
  {
    "site": "MLC",
    "mes": "2026-04",
    "canal": "CX_NIVEL_2",
    "qtd_trocas": 9
  },
  {
    "site": "MLM",
    "mes": "2025-09",
    "canal": "FAQ",
    "qtd_trocas": 5545
  },
  {
    "site": "MLM",
    "mes": "2025-09",
    "canal": "CX",
    "qtd_trocas": 581
  },
  {
    "site": "MLM",
    "mes": "2025-09",
    "canal": "CERTIFIED_CONSULTANT",
    "qtd_trocas": 299
  },
  {
    "site": "MLM",
    "mes": "2025-09",
    "canal": "CX_NIVEL_2",
    "qtd_trocas": 71
  },
  {
    "site": "MLM",
    "mes": "2025-09",
    "canal": "FDV",
    "qtd_trocas": 9
  },
  {
    "site": "MLM",
    "mes": "2025-10",
    "canal": "FAQ",
    "qtd_trocas": 5896
  },
  {
    "site": "MLM",
    "mes": "2025-10",
    "canal": "CERTIFIED_CONSULTANT",
    "qtd_trocas": 922
  },
  {
    "site": "MLM",
    "mes": "2025-10",
    "canal": "CX",
    "qtd_trocas": 502
  },
  {
    "site": "MLM",
    "mes": "2025-10",
    "canal": "CX_NIVEL_2",
    "qtd_trocas": 78
  },
  {
    "site": "MLM",
    "mes": "2025-10",
    "canal": "FDV",
    "qtd_trocas": 8
  },
  {
    "site": "MLM",
    "mes": "2025-11",
    "canal": "FAQ",
    "qtd_trocas": 5877
  },
  {
    "site": "MLM",
    "mes": "2025-11",
    "canal": "CERTIFIED_CONSULTANT",
    "qtd_trocas": 1130
  },
  {
    "site": "MLM",
    "mes": "2025-11",
    "canal": "CX",
    "qtd_trocas": 450
  },
  {
    "site": "MLM",
    "mes": "2025-11",
    "canal": "CX_NIVEL_2",
    "qtd_trocas": 42
  },
  {
    "site": "MLM",
    "mes": "2025-11",
    "canal": "FDV",
    "qtd_trocas": 8
  },
  {
    "site": "MLM",
    "mes": "2025-12",
    "canal": "FAQ",
    "qtd_trocas": 6197
  },
  {
    "site": "MLM",
    "mes": "2025-12",
    "canal": "CX",
    "qtd_trocas": 462
  },
  {
    "site": "MLM",
    "mes": "2025-12",
    "canal": "CERTIFIED_CONSULTANT",
    "qtd_trocas": 459
  },
  {
    "site": "MLM",
    "mes": "2025-12",
    "canal": "CX_NIVEL_2",
    "qtd_trocas": 35
  },
  {
    "site": "MLM",
    "mes": "2025-12",
    "canal": "FDV",
    "qtd_trocas": 7
  },
  {
    "site": "MLM",
    "mes": "2026-01",
    "canal": "FAQ",
    "qtd_trocas": 8637
  },
  {
    "site": "MLM",
    "mes": "2026-01",
    "canal": "CERTIFIED_CONSULTANT",
    "qtd_trocas": 1664
  },
  {
    "site": "MLM",
    "mes": "2026-01",
    "canal": "CX",
    "qtd_trocas": 464
  },
  {
    "site": "MLM",
    "mes": "2026-01",
    "canal": "FDV",
    "qtd_trocas": 16
  },
  {
    "site": "MLM",
    "mes": "2026-01",
    "canal": "CX_NIVEL_2",
    "qtd_trocas": 13
  },
  {
    "site": "MLM",
    "mes": "2026-02",
    "canal": "FAQ",
    "qtd_trocas": 10169
  },
  {
    "site": "MLM",
    "mes": "2026-02",
    "canal": "CERTIFIED_CONSULTANT",
    "qtd_trocas": 1482
  },
  {
    "site": "MLM",
    "mes": "2026-02",
    "canal": "CX",
    "qtd_trocas": 722
  },
  {
    "site": "MLM",
    "mes": "2026-02",
    "canal": "CX_NIVEL_2",
    "qtd_trocas": 24
  },
  {
    "site": "MLM",
    "mes": "2026-02",
    "canal": "FDV",
    "qtd_trocas": 10
  },
  {
    "site": "MLM",
    "mes": "2026-03",
    "canal": "FAQ",
    "qtd_trocas": 8342
  },
  {
    "site": "MLM",
    "mes": "2026-03",
    "canal": "CX",
    "qtd_trocas": 659
  },
  {
    "site": "MLM",
    "mes": "2026-03",
    "canal": "CERTIFIED_CONSULTANT",
    "qtd_trocas": 476
  },
  {
    "site": "MLM",
    "mes": "2026-03",
    "canal": "CX_NIVEL_2",
    "qtd_trocas": 40
  },
  {
    "site": "MLM",
    "mes": "2026-03",
    "canal": "FDV",
    "qtd_trocas": 27
  },
  {
    "site": "MLM",
    "mes": "2026-04",
    "canal": "FAQ",
    "qtd_trocas": 2654
  },
  {
    "site": "MLM",
    "mes": "2026-04",
    "canal": "CX",
    "qtd_trocas": 215
  },
  {
    "site": "MLM",
    "mes": "2026-04",
    "canal": "CERTIFIED_CONSULTANT",
    "qtd_trocas": 82
  },
  {
    "site": "MLM",
    "mes": "2026-04",
    "canal": "CX_NIVEL_2",
    "qtd_trocas": 9
  },
  {
    "site": "MLM",
    "mes": "2026-04",
    "canal": "FDV",
    "qtd_trocas": 3
  }
],

  // ── Canal N2 (SO_SOURCE_CHANNEL) ───────────────────────────
  // android/ios/app/web/… consolidados em MAXWELL_FORM (mesma plataforma)
  bySubCanal: [
    // ── Set/25 ──
    { site:'MLB', mes:'2025-09', subcanal:'VERDI_FORM',    qtd_trocas:16422 },
    { site:'MLB', mes:'2025-09', subcanal:'(sem canal)',   qtd_trocas:10118 },
    { site:'MLB', mes:'2025-09', subcanal:'HELP_PORTAL',   qtd_trocas:3668  },
    { site:'MLB', mes:'2025-09', subcanal:'MAXWELL_FORM',  qtd_trocas:7     },
    { site:'MLB', mes:'2025-09', subcanal:'POINT',         qtd_trocas:6     },
    // ── Out/25 ──
    { site:'MLB', mes:'2025-10', subcanal:'(sem canal)',   qtd_trocas:10500 },
    { site:'MLB', mes:'2025-10', subcanal:'VERDI_FORM',    qtd_trocas:10432 },
    { site:'MLB', mes:'2025-10', subcanal:'MAXWELL_FORM',  qtd_trocas:7686  },
    { site:'MLB', mes:'2025-10', subcanal:'HELP_PORTAL',   qtd_trocas:2747  },
    { site:'MLB', mes:'2025-10', subcanal:'POINT',         qtd_trocas:25    },
    // ── Nov/25 ──
    { site:'MLB', mes:'2025-11', subcanal:'MAXWELL_FORM',  qtd_trocas:13694 },
    { site:'MLB', mes:'2025-11', subcanal:'(sem canal)',   qtd_trocas:6501  },
    { site:'MLB', mes:'2025-11', subcanal:'HELP_PORTAL',   qtd_trocas:2486  },
    { site:'MLB', mes:'2025-11', subcanal:'VERDI_FORM',    qtd_trocas:1524  },
    { site:'MLB', mes:'2025-11', subcanal:'POINT',         qtd_trocas:32    },
    // ── Dez/25 ──
    { site:'MLB', mes:'2025-12', subcanal:'MAXWELL_FORM',  qtd_trocas:14651 },
    { site:'MLB', mes:'2025-12', subcanal:'HELP_PORTAL',   qtd_trocas:7516  },
    { site:'MLB', mes:'2025-12', subcanal:'(sem canal)',   qtd_trocas:6161  },
    { site:'MLB', mes:'2025-12', subcanal:'VERDI_FORM',    qtd_trocas:72    },
    { site:'MLB', mes:'2025-12', subcanal:'POINT',         qtd_trocas:31    },
    // ── Jan/26 ──
    { site:'MLB', mes:'2026-01', subcanal:'MAXWELL_FORM',  qtd_trocas:9757  },
    { site:'MLB', mes:'2026-01', subcanal:'MAXWELL_CHAT',  qtd_trocas:9107  },
    { site:'MLB', mes:'2026-01', subcanal:'(sem canal)',   qtd_trocas:7513  },
    { site:'MLB', mes:'2026-01', subcanal:'HELP_PORTAL',   qtd_trocas:3254  },
    { site:'MLB', mes:'2026-01', subcanal:'VERDI_FORM',    qtd_trocas:86    },
    { site:'MLB', mes:'2026-01', subcanal:'POINT',         qtd_trocas:46    },
    // ── Fev/26 ──
    { site:'MLB', mes:'2026-02', subcanal:'MAXWELL_CHAT',  qtd_trocas:11903 },
    { site:'MLB', mes:'2026-02', subcanal:'(sem canal)',   qtd_trocas:7060  },
    { site:'MLB', mes:'2026-02', subcanal:'MAXWELL_FORM',  qtd_trocas:5518  },
    { site:'MLB', mes:'2026-02', subcanal:'HELP_PORTAL',   qtd_trocas:1767  },
    { site:'MLB', mes:'2026-02', subcanal:'POINT',         qtd_trocas:95    },
    { site:'MLB', mes:'2026-02', subcanal:'VERDI_FORM',    qtd_trocas:65    },
  ],

  // ── Motivo (SO_REASON_NAME) — top 7 por mês ────────────────
  byMotivo: [
  {
    "site": "MLB",
    "mes": "2025-09",
    "motivo": "El lector no se prende o no se carga",
    "qtd_trocas": 10523
  },
  {
    "site": "MLB",
    "mes": "2025-09",
    "motivo": "Otros Problemas",
    "qtd_trocas": 4533
  },
  {
    "site": "MLB",
    "mes": "2025-09",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd_trocas": 2296
  },
  {
    "site": "MLB",
    "mes": "2025-09",
    "motivo": "El chip y wifi no funcionan",
    "qtd_trocas": 2047
  },
  {
    "site": "MLB",
    "mes": "2025-09",
    "motivo": "Troca Grátis da PRO2",
    "qtd_trocas": 1902
  },
  {
    "site": "MLB",
    "mes": "2025-09",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd_trocas": 1375
  },
  {
    "site": "MLB",
    "mes": "2025-09",
    "motivo": "No es posible imprimir el comprobante",
    "qtd_trocas": 1237
  },
  {
    "site": "MLB",
    "mes": "2025-10",
    "motivo": "El lector no se prende o no se carga",
    "qtd_trocas": 11955
  },
  {
    "site": "MLB",
    "mes": "2025-10",
    "motivo": "Otros Problemas",
    "qtd_trocas": 6022
  },
  {
    "site": "MLB",
    "mes": "2025-10",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd_trocas": 2557
  },
  {
    "site": "MLB",
    "mes": "2025-10",
    "motivo": "El chip y wifi no funcionan",
    "qtd_trocas": 1828
  },
  {
    "site": "MLB",
    "mes": "2025-10",
    "motivo": "No es posible imprimir el comprobante",
    "qtd_trocas": 1648
  },
  {
    "site": "MLB",
    "mes": "2025-10",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd_trocas": 1267
  },
  {
    "site": "MLB",
    "mes": "2025-10",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd_trocas": 1016
  },
  {
    "site": "MLB",
    "mes": "2025-11",
    "motivo": "El lector no se prende o no se carga",
    "qtd_trocas": 8740
  },
  {
    "site": "MLB",
    "mes": "2025-11",
    "motivo": "Otros Problemas",
    "qtd_trocas": 4793
  },
  {
    "site": "MLB",
    "mes": "2025-11",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd_trocas": 1980
  },
  {
    "site": "MLB",
    "mes": "2025-11",
    "motivo": "No es posible imprimir el comprobante",
    "qtd_trocas": 1360
  },
  {
    "site": "MLB",
    "mes": "2025-11",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd_trocas": 1253
  },
  {
    "site": "MLB",
    "mes": "2025-11",
    "motivo": "El chip y wifi no funcionan",
    "qtd_trocas": 1159
  },
  {
    "site": "MLB",
    "mes": "2025-11",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd_trocas": 1008
  },
  {
    "site": "MLB",
    "mes": "2025-12",
    "motivo": "El lector no se prende o no se carga",
    "qtd_trocas": 9256
  },
  {
    "site": "MLB",
    "mes": "2025-12",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd_trocas": 5441
  },
  {
    "site": "MLB",
    "mes": "2025-12",
    "motivo": "Otros Problemas",
    "qtd_trocas": 4862
  },
  {
    "site": "MLB",
    "mes": "2025-12",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd_trocas": 1736
  },
  {
    "site": "MLB",
    "mes": "2025-12",
    "motivo": "No es posible imprimir el comprobante",
    "qtd_trocas": 1486
  },
  {
    "site": "MLB",
    "mes": "2025-12",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd_trocas": 932
  },
  {
    "site": "MLB",
    "mes": "2025-12",
    "motivo": "El chip y wifi no funcionan",
    "qtd_trocas": 797
  },
  {
    "site": "MLB",
    "mes": "2026-01",
    "motivo": "El lector no se prende o no se carga",
    "qtd_trocas": 11177
  },
  {
    "site": "MLB",
    "mes": "2026-01",
    "motivo": "Otros Problemas",
    "qtd_trocas": 3626
  },
  {
    "site": "MLB",
    "mes": "2026-01",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd_trocas": 3510
  },
  {
    "site": "MLB",
    "mes": "2026-01",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd_trocas": 2607
  },
  {
    "site": "MLB",
    "mes": "2026-01",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd_trocas": 1904
  },
  {
    "site": "MLB",
    "mes": "2026-01",
    "motivo": "No es posible imprimir el comprobante",
    "qtd_trocas": 1856
  },
  {
    "site": "MLB",
    "mes": "2026-01",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd_trocas": 1191
  },
  {
    "site": "MLB",
    "mes": "2026-02",
    "motivo": "El lector no se prende o no se carga",
    "qtd_trocas": 11506
  },
  {
    "site": "MLB",
    "mes": "2026-02",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd_trocas": 3293
  },
  {
    "site": "MLB",
    "mes": "2026-02",
    "motivo": "Otros Problemas",
    "qtd_trocas": 2527
  },
  {
    "site": "MLB",
    "mes": "2026-02",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd_trocas": 2296
  },
  {
    "site": "MLB",
    "mes": "2026-02",
    "motivo": "No es posible imprimir el comprobante",
    "qtd_trocas": 1723
  },
  {
    "site": "MLB",
    "mes": "2026-02",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd_trocas": 1420
  },
  {
    "site": "MLB",
    "mes": "2026-02",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd_trocas": 648
  },
  {
    "site": "MLB",
    "mes": "2026-03",
    "motivo": "El lector no se prende o no se carga",
    "qtd_trocas": 11024
  },
  {
    "site": "MLB",
    "mes": "2026-03",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd_trocas": 3495
  },
  {
    "site": "MLB",
    "mes": "2026-03",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd_trocas": 2428
  },
  {
    "site": "MLB",
    "mes": "2026-03",
    "motivo": "Otros Problemas",
    "qtd_trocas": 2162
  },
  {
    "site": "MLB",
    "mes": "2026-03",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd_trocas": 1647
  },
  {
    "site": "MLB",
    "mes": "2026-03",
    "motivo": "No es posible imprimir el comprobante",
    "qtd_trocas": 1421
  },
  {
    "site": "MLB",
    "mes": "2026-03",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd_trocas": 798
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "motivo": "El lector no se prende o no se carga",
    "qtd_trocas": 3047
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd_trocas": 1080
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd_trocas": 818
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd_trocas": 517
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "motivo": "Otros Problemas",
    "qtd_trocas": 489
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "motivo": "No es posible imprimir el comprobante",
    "qtd_trocas": 366
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd_trocas": 190
  }
],

  // ── DADOS DIÁRIOS — canal N1×N2 × motivo ───────────────────
  // MLB | últimos 35 dias | REPAIR | BUCKET IS NULL
  // Populado via: python queries/daily_canal_motivo.py
  // Estrutura: { site, dia:'YYYY-MM-DD', n1, n2, motivo, qtd }
daily: [
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 212
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 144
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 66
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 52
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 49
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 44
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 32
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 25
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 25
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 22
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 18
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 16
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Otros Problemas",
    "qtd": 15
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 10
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 9
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 7
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Lector funciona lento",
    "qtd": 7
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 7
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 7
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 6
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Teclado/botón roto",
    "qtd": 4
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla rota",
    "qtd": 4
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Pantalla rota",
    "qtd": 4
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 4
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Otros Problemas",
    "qtd": 3
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Otros Problemas",
    "qtd": 3
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Visor tactil no funciona",
    "qtd": 3
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Visor tactil no funciona",
    "qtd": 3
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 3
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 3
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 3
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 2
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 2
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 2
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 2
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 2
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 2
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 2
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Teclado/botón roto",
    "qtd": 2
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 2
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"HW attack\"",
    "qtd": 2
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "POINT",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 2
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 2
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 2
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Pantalla rota",
    "qtd": 2
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 2
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Tamper detected\"",
    "qtd": 2
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 2
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla blanca cargando con mensaje \"buscando información\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "POINT",
    "motivo": "Maquininha trava com mensagem \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensagem \"Sua Point parou de funcionar. Reinicie-a para cobrar\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"No conecta con MP\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "POINT",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 1
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensagem \"Sua Point parou de funcionar. Reinicie-a para cobrar\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 1
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Maquininha trava com a luz ao redor da point ligada em azul",
    "qtd": 1
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Reboot & Authority\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla blanca cargando con logo MP / androind iniciando",
    "qtd": 1
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "POINT",
    "motivo": "Otros Problemas",
    "qtd": 1
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 1
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "VERDI_FORM",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 1
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Init Config Error\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"HW attack\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 1
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 1
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el wifi no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Smartpos Paró\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Pantalla blanca cargando con logo MP / androind iniciando",
    "qtd": 1
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Smartpos Paró\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensagem \"Sua Point parou de funcionar. Reinicie-a para cobrar\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 222
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 99
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 75
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 66
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 59
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 42
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 32
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 31
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 24
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 19
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 18
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Otros Problemas",
    "qtd": 15
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Otros Problemas",
    "qtd": 15
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 13
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 9
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 8
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 7
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 5
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 5
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 5
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 5
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 5
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Sólo el chip no funciona",
    "qtd": 4
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el chip no funciona",
    "qtd": 4
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 4
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 3
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 3
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 3
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 3
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 3
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Lector funciona lento",
    "qtd": 3
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 2
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 2
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 2
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 2
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 2
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Pantalla rota",
    "qtd": 2
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla rota",
    "qtd": 2
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 2
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 2
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Teclado/botón roto",
    "qtd": 2
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 2
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Lector funciona lento",
    "qtd": 2
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 2
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Maquininha trava com mensagem \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Maquininha trava com a luz ao redor da point ligada em azul",
    "qtd": 1
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensagem \"Password Required\" / \"Enter password\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"No conecta con MP\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Maquininha trava com mensagem \"Não conecta com MP\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Lector funciona lento",
    "qtd": 1
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Tamper detected\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Irruption\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensagem \"Sua Point parou de funcionar. Reinicie-a para cobrar\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla blanca cargando con mensaje \"buscando información\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "POINT",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensagem \"Password Required\" / \"Enter password\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 1
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 1
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el wifi no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Init Config Error\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "VERDI_FORM",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 240
  },
  {
    "dia": "2026-04-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 101
  },
  {
    "dia": "2026-04-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 89
  },
  {
    "dia": "2026-04-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 64
  },
  {
    "dia": "2026-04-08",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 61
  },
  {
    "dia": "2026-04-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 31
  },
  {
    "dia": "2026-04-08",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 30
  },
  {
    "dia": "2026-04-08",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 24
  },
  {
    "dia": "2026-04-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 19
  },
  {
    "dia": "2026-04-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 19
  },
  {
    "dia": "2026-04-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 14
  },
  {
    "dia": "2026-04-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Otros Problemas",
    "qtd": 10
  },
  {
    "dia": "2026-04-08",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 8
  },
  {
    "dia": "2026-04-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 8
  },
  {
    "dia": "2026-04-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 8
  },
  {
    "dia": "2026-04-08",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 7
  },
  {
    "dia": "2026-04-08",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 6
  },
  {
    "dia": "2026-04-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 6
  },
  {
    "dia": "2026-04-08",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 6
  },
  {
    "dia": "2026-04-08",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 5
  },
  {
    "dia": "2026-04-08",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Otros Problemas",
    "qtd": 5
  },
  {
    "dia": "2026-04-08",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 5
  },
  {
    "dia": "2026-04-08",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Lector funciona lento",
    "qtd": 4
  },
  {
    "dia": "2026-04-08",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Teclado/botón roto",
    "qtd": 4
  },
  {
    "dia": "2026-04-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 4
  },
  {
    "dia": "2026-04-08",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 3
  },
  {
    "dia": "2026-04-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 3
  },
  {
    "dia": "2026-04-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 3
  },
  {
    "dia": "2026-04-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 3
  },
  {
    "dia": "2026-04-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 3
  },
  {
    "dia": "2026-04-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 2
  },
  {
    "dia": "2026-04-08",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Maquininha trava com a luz ao redor da point ligada em azul",
    "qtd": 2
  },
  {
    "dia": "2026-04-08",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"No conecta con MP\"",
    "qtd": 2
  },
  {
    "dia": "2026-04-08",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el chip no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-04-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 2
  },
  {
    "dia": "2026-04-08",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla rota",
    "qtd": 2
  },
  {
    "dia": "2026-04-08",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el wifi no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-04-08",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Lector funciona lento",
    "qtd": 2
  },
  {
    "dia": "2026-04-08",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-08",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-08",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-08",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Init Config Error\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensagem \"Sua Point parou de funcionar. Reinicie-a para cobrar\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-08",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensagem \"Password Required\" / \"Enter password\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-08",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 1
  },
  {
    "dia": "2026-04-08",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 1
  },
  {
    "dia": "2026-04-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-08",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ningun punto de acceso encontrado\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Pantalla blanca cargando con mensaje \"buscando información\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-08",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Maquininha trava com mensagem \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-08",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"HW ATTACK. Sua Point não funciona. Peça a troca em mercadopago\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 1
  },
  {
    "dia": "2026-04-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 1
  },
  {
    "dia": "2026-04-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Sólo el wifi no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-08",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensagem \"Password Required\" / \"Enter password\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-08",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-04-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 284
  },
  {
    "dia": "2026-04-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 91
  },
  {
    "dia": "2026-04-07",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 89
  },
  {
    "dia": "2026-04-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 89
  },
  {
    "dia": "2026-04-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 63
  },
  {
    "dia": "2026-04-07",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 37
  },
  {
    "dia": "2026-04-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 35
  },
  {
    "dia": "2026-04-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 34
  },
  {
    "dia": "2026-04-07",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 29
  },
  {
    "dia": "2026-04-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 26
  },
  {
    "dia": "2026-04-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 21
  },
  {
    "dia": "2026-04-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 20
  },
  {
    "dia": "2026-04-07",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 10
  },
  {
    "dia": "2026-04-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Otros Problemas",
    "qtd": 10
  },
  {
    "dia": "2026-04-07",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 8
  },
  {
    "dia": "2026-04-07",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 8
  },
  {
    "dia": "2026-04-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 7
  },
  {
    "dia": "2026-04-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 7
  },
  {
    "dia": "2026-04-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 6
  },
  {
    "dia": "2026-04-07",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 6
  },
  {
    "dia": "2026-04-07",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Lector funciona lento",
    "qtd": 5
  },
  {
    "dia": "2026-04-07",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 5
  },
  {
    "dia": "2026-04-07",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 5
  },
  {
    "dia": "2026-04-07",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 5
  },
  {
    "dia": "2026-04-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 5
  },
  {
    "dia": "2026-04-07",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 5
  },
  {
    "dia": "2026-04-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 3
  },
  {
    "dia": "2026-04-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 3
  },
  {
    "dia": "2026-04-07",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Otros Problemas",
    "qtd": 3
  },
  {
    "dia": "2026-04-07",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el chip no funciona",
    "qtd": 3
  },
  {
    "dia": "2026-04-07",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Teclado/botón roto",
    "qtd": 3
  },
  {
    "dia": "2026-04-07",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 3
  },
  {
    "dia": "2026-04-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 3
  },
  {
    "dia": "2026-04-07",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Teclado/botón roto",
    "qtd": 3
  },
  {
    "dia": "2026-04-07",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ningun punto de acceso encontrado\"",
    "qtd": 2
  },
  {
    "dia": "2026-04-07",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"No conecta con MP\"",
    "qtd": 2
  },
  {
    "dia": "2026-04-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 2
  },
  {
    "dia": "2026-04-07",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 2
  },
  {
    "dia": "2026-04-07",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Pantalla rota",
    "qtd": 2
  },
  {
    "dia": "2026-04-07",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "POINT",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-07",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Reboot & Authority\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "POINT",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Reboot & Authority\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-04-07",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Maquininha trava com a luz ao redor da point ligada em azul",
    "qtd": 1
  },
  {
    "dia": "2026-04-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 1
  },
  {
    "dia": "2026-04-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "POINT",
    "motivo": "Maquininha trava com mensagem \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"HW attack\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-07",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla blanca cargando con logo MP / androind iniciando",
    "qtd": 1
  },
  {
    "dia": "2026-04-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-07",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Tamper detected\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 264
  },
  {
    "dia": "2026-04-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 88
  },
  {
    "dia": "2026-04-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 80
  },
  {
    "dia": "2026-04-06",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 71
  },
  {
    "dia": "2026-04-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 57
  },
  {
    "dia": "2026-04-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 36
  },
  {
    "dia": "2026-04-06",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 35
  },
  {
    "dia": "2026-04-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 18
  },
  {
    "dia": "2026-04-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 14
  },
  {
    "dia": "2026-04-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 14
  },
  {
    "dia": "2026-04-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Otros Problemas",
    "qtd": 12
  },
  {
    "dia": "2026-04-06",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 11
  },
  {
    "dia": "2026-04-06",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 8
  },
  {
    "dia": "2026-04-06",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 7
  },
  {
    "dia": "2026-04-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 7
  },
  {
    "dia": "2026-04-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 7
  },
  {
    "dia": "2026-04-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 7
  },
  {
    "dia": "2026-04-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 5
  },
  {
    "dia": "2026-04-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 4
  },
  {
    "dia": "2026-04-06",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 4
  },
  {
    "dia": "2026-04-06",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 4
  },
  {
    "dia": "2026-04-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 4
  },
  {
    "dia": "2026-04-06",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Otros Problemas",
    "qtd": 3
  },
  {
    "dia": "2026-04-06",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 3
  },
  {
    "dia": "2026-04-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Pantalla rota",
    "qtd": 3
  },
  {
    "dia": "2026-04-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 3
  },
  {
    "dia": "2026-04-06",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla rota",
    "qtd": 3
  },
  {
    "dia": "2026-04-06",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 3
  },
  {
    "dia": "2026-04-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 2
  },
  {
    "dia": "2026-04-06",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 2
  },
  {
    "dia": "2026-04-06",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 2
  },
  {
    "dia": "2026-04-06",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 2
  },
  {
    "dia": "2026-04-06",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 2
  },
  {
    "dia": "2026-04-06",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Lector funciona lento",
    "qtd": 2
  },
  {
    "dia": "2026-04-06",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 2
  },
  {
    "dia": "2026-04-06",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Teclado/botón roto",
    "qtd": 2
  },
  {
    "dia": "2026-04-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 2
  },
  {
    "dia": "2026-04-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Teclado/botón roto",
    "qtd": 2
  },
  {
    "dia": "2026-04-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"HW attack\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-06",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Otros Problemas",
    "qtd": 1
  },
  {
    "dia": "2026-04-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensagem \"Sua Point parou de funcionar. Reinicie-a para cobrar\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-06",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 1
  },
  {
    "dia": "2026-04-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El dispositivo emite ruido",
    "qtd": 1
  },
  {
    "dia": "2026-04-06",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-06",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Lector funciona lento",
    "qtd": 1
  },
  {
    "dia": "2026-04-06",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 1
  },
  {
    "dia": "2026-04-06",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-04-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 1
  },
  {
    "dia": "2026-04-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 1
  },
  {
    "dia": "2026-04-06",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 1
  },
  {
    "dia": "2026-04-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "POINT",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-06",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "VERDI_FORM",
    "motivo": "Lector funciona lento",
    "qtd": 1
  },
  {
    "dia": "2026-04-06",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 1
  },
  {
    "dia": "2026-04-06",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-06",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Smartpos Paró\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Smartpos Paró\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-05",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 98
  },
  {
    "dia": "2026-04-05",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 58
  },
  {
    "dia": "2026-04-05",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 49
  },
  {
    "dia": "2026-04-05",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 24
  },
  {
    "dia": "2026-04-05",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 17
  },
  {
    "dia": "2026-04-05",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 16
  },
  {
    "dia": "2026-04-05",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 9
  },
  {
    "dia": "2026-04-05",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Otros Problemas",
    "qtd": 6
  },
  {
    "dia": "2026-04-05",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 6
  },
  {
    "dia": "2026-04-05",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 5
  },
  {
    "dia": "2026-04-05",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 5
  },
  {
    "dia": "2026-04-05",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 4
  },
  {
    "dia": "2026-04-05",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 3
  },
  {
    "dia": "2026-04-05",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 3
  },
  {
    "dia": "2026-04-05",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 3
  },
  {
    "dia": "2026-04-05",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "VERDI_FORM",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 3
  },
  {
    "dia": "2026-04-05",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 2
  },
  {
    "dia": "2026-04-05",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 2
  },
  {
    "dia": "2026-04-05",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 2
  },
  {
    "dia": "2026-04-05",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 1
  },
  {
    "dia": "2026-04-05",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-05",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Otros Problemas",
    "qtd": 1
  },
  {
    "dia": "2026-04-05",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-05",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-05",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-05",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 1
  },
  {
    "dia": "2026-04-05",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "POINT",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-05",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 1
  },
  {
    "dia": "2026-04-05",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "POINT",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-05",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 1
  },
  {
    "dia": "2026-04-05",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Lector funciona lento",
    "qtd": 1
  },
  {
    "dia": "2026-04-05",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Smartpos Paró\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-05",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Lector funciona lento",
    "qtd": 1
  },
  {
    "dia": "2026-04-05",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-05",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 1
  },
  {
    "dia": "2026-04-05",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"HW attack\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-05",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-05",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla blanca cargando con logo MP / androind iniciando",
    "qtd": 1
  },
  {
    "dia": "2026-04-05",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-04-05",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 1
  },
  {
    "dia": "2026-04-05",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Defeito no leitor do chip",
    "qtd": 1
  },
  {
    "dia": "2026-04-05",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 1
  },
  {
    "dia": "2026-04-05",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Reboot & Authority\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-05",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-04",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 152
  },
  {
    "dia": "2026-04-04",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 72
  },
  {
    "dia": "2026-04-04",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 52
  },
  {
    "dia": "2026-04-04",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 35
  },
  {
    "dia": "2026-04-04",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 30
  },
  {
    "dia": "2026-04-04",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 18
  },
  {
    "dia": "2026-04-04",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 18
  },
  {
    "dia": "2026-04-04",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 16
  },
  {
    "dia": "2026-04-04",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 12
  },
  {
    "dia": "2026-04-04",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 8
  },
  {
    "dia": "2026-04-04",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 7
  },
  {
    "dia": "2026-04-04",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 7
  },
  {
    "dia": "2026-04-04",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 5
  },
  {
    "dia": "2026-04-04",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "VERDI_FORM",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 5
  },
  {
    "dia": "2026-04-04",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 5
  },
  {
    "dia": "2026-04-04",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "VERDI_FORM",
    "motivo": "Lector funciona lento",
    "qtd": 4
  },
  {
    "dia": "2026-04-04",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "VERDI_FORM",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 4
  },
  {
    "dia": "2026-04-04",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 3
  },
  {
    "dia": "2026-04-04",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 3
  },
  {
    "dia": "2026-04-04",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 2
  },
  {
    "dia": "2026-04-04",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 2
  },
  {
    "dia": "2026-04-04",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Otros Problemas",
    "qtd": 2
  },
  {
    "dia": "2026-04-04",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 2
  },
  {
    "dia": "2026-04-04",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 2
  },
  {
    "dia": "2026-04-04",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla rota",
    "qtd": 2
  },
  {
    "dia": "2026-04-04",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 2
  },
  {
    "dia": "2026-04-04",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 2
  },
  {
    "dia": "2026-04-04",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 2
  },
  {
    "dia": "2026-04-04",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 2
  },
  {
    "dia": "2026-04-04",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla blanca cargando con logo MP / androind iniciando",
    "qtd": 1
  },
  {
    "dia": "2026-04-04",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-04-04",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 1
  },
  {
    "dia": "2026-04-04",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el wifi no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-04",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 1
  },
  {
    "dia": "2026-04-04",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 1
  },
  {
    "dia": "2026-04-04",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Otros Problemas",
    "qtd": 1
  },
  {
    "dia": "2026-04-04",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "POINT",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-04",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 1
  },
  {
    "dia": "2026-04-04",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-04",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Otros Problemas",
    "qtd": 1
  },
  {
    "dia": "2026-04-04",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"No conecta con MP\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-04",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "VERDI_FORM",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 1
  },
  {
    "dia": "2026-04-04",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-04",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-04",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 1
  },
  {
    "dia": "2026-04-04",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Lector funciona lento",
    "qtd": 1
  },
  {
    "dia": "2026-04-04",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-04",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 1
  },
  {
    "dia": "2026-04-04",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-04",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Lector funciona lento",
    "qtd": 1
  },
  {
    "dia": "2026-04-04",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensagem \"Password Required\" / \"Enter password\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-04",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "VERDI_FORM",
    "motivo": "Mensaje \"Smartpos Paró\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-04",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 1
  },
  {
    "dia": "2026-04-03",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 87
  },
  {
    "dia": "2026-04-03",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 42
  },
  {
    "dia": "2026-04-03",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 39
  },
  {
    "dia": "2026-04-03",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 31
  },
  {
    "dia": "2026-04-03",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 16
  },
  {
    "dia": "2026-04-03",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 13
  },
  {
    "dia": "2026-04-03",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 12
  },
  {
    "dia": "2026-04-03",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 9
  },
  {
    "dia": "2026-04-03",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 8
  },
  {
    "dia": "2026-04-03",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 7
  },
  {
    "dia": "2026-04-03",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 5
  },
  {
    "dia": "2026-04-03",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 5
  },
  {
    "dia": "2026-04-03",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Otros Problemas",
    "qtd": 4
  },
  {
    "dia": "2026-04-03",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 4
  },
  {
    "dia": "2026-04-03",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 3
  },
  {
    "dia": "2026-04-03",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 3
  },
  {
    "dia": "2026-04-03",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 3
  },
  {
    "dia": "2026-04-03",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 3
  },
  {
    "dia": "2026-04-03",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 2
  },
  {
    "dia": "2026-04-03",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 2
  },
  {
    "dia": "2026-04-03",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla rota",
    "qtd": 2
  },
  {
    "dia": "2026-04-03",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 2
  },
  {
    "dia": "2026-04-03",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ningun punto de acceso encontrado\"",
    "qtd": 2
  },
  {
    "dia": "2026-04-03",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Smartpos Paró\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-03",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-03",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"HW attack\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-03",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-03",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-04-03",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 1
  },
  {
    "dia": "2026-04-03",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"HW attack\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-03",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Smartpos Paró\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-03",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "POINT",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-03",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Lector funciona lento",
    "qtd": 1
  },
  {
    "dia": "2026-04-03",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Init Config Error\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-03",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 1
  },
  {
    "dia": "2026-04-03",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-03",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-03",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Sólo el wifi no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-03",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-03",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 1
  },
  {
    "dia": "2026-04-03",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-04-03",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 1
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 190
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 82
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 69
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 46
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 34
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 32
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 26
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 23
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 22
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 21
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 18
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 13
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 11
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Otros Problemas",
    "qtd": 10
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 9
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 9
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 8
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 7
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 6
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 6
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Otros Problemas",
    "qtd": 5
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 5
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Lector funciona lento",
    "qtd": 4
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla rota",
    "qtd": 4
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 4
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 3
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 3
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 3
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 3
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 3
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Visor tactil no funciona",
    "qtd": 3
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Visor tactil no funciona",
    "qtd": 3
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 3
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 2
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Otros Problemas",
    "qtd": 2
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 2
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Teclado/botón roto",
    "qtd": 2
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 2
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "POINT",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 2
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 2
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 2
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Visor tactil no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 2
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 2
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el chip no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Maquininha trava com a luz ao redor da point ligada em azul",
    "qtd": 1
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Smartpos Paró\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 1
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"HW attack\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 1
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "CC_VIRTUAL",
    "n2": "CC_VIRTUAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 1
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 1
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el wifi no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 1
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 1
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"HW attack\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ningun punto de acceso encontrado\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Maquininha trava com a luz ao redor da point ligada em azul",
    "qtd": 1
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 1
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "POINT",
    "motivo": "Otros Problemas",
    "qtd": 1
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 1
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 1
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Irruption\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 1
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla blanca cargando con mensaje \"buscando información\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 1
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-01",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 231
  },
  {
    "dia": "2026-04-01",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 77
  },
  {
    "dia": "2026-04-01",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 67
  },
  {
    "dia": "2026-04-01",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 66
  },
  {
    "dia": "2026-04-01",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 64
  },
  {
    "dia": "2026-04-01",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 35
  },
  {
    "dia": "2026-04-01",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 29
  },
  {
    "dia": "2026-04-01",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 29
  },
  {
    "dia": "2026-04-01",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 27
  },
  {
    "dia": "2026-04-01",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 18
  },
  {
    "dia": "2026-04-01",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 15
  },
  {
    "dia": "2026-04-01",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 12
  },
  {
    "dia": "2026-04-01",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 11
  },
  {
    "dia": "2026-04-01",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 10
  },
  {
    "dia": "2026-04-01",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Otros Problemas",
    "qtd": 9
  },
  {
    "dia": "2026-04-01",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 8
  },
  {
    "dia": "2026-04-01",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 8
  },
  {
    "dia": "2026-04-01",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 7
  },
  {
    "dia": "2026-04-01",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 6
  },
  {
    "dia": "2026-04-01",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 6
  },
  {
    "dia": "2026-04-01",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 5
  },
  {
    "dia": "2026-04-01",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla rota",
    "qtd": 5
  },
  {
    "dia": "2026-04-01",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 4
  },
  {
    "dia": "2026-04-01",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Otros Problemas",
    "qtd": 4
  },
  {
    "dia": "2026-04-01",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Lector funciona lento",
    "qtd": 4
  },
  {
    "dia": "2026-04-01",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 4
  },
  {
    "dia": "2026-04-01",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Otros Problemas",
    "qtd": 4
  },
  {
    "dia": "2026-04-01",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 3
  },
  {
    "dia": "2026-04-01",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 3
  },
  {
    "dia": "2026-04-01",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 3
  },
  {
    "dia": "2026-04-01",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 3
  },
  {
    "dia": "2026-04-01",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 3
  },
  {
    "dia": "2026-04-01",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 3
  },
  {
    "dia": "2026-04-01",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 3
  },
  {
    "dia": "2026-04-01",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "POINT",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 2
  },
  {
    "dia": "2026-04-01",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 2
  },
  {
    "dia": "2026-04-01",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Sólo el chip no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-04-01",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el wifi no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-04-01",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Sólo el chip no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-04-01",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "VERDI_FORM",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 2
  },
  {
    "dia": "2026-04-01",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 2
  },
  {
    "dia": "2026-04-01",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 2
  },
  {
    "dia": "2026-04-01",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensagem \"Sua Point parou de funcionar. Reinicie-a para cobrar\"",
    "qtd": 2
  },
  {
    "dia": "2026-04-01",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 2
  },
  {
    "dia": "2026-04-01",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-01",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 1
  },
  {
    "dia": "2026-04-01",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 1
  },
  {
    "dia": "2026-04-01",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Defeito no leitor do chip",
    "qtd": 1
  },
  {
    "dia": "2026-04-01",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-04-01",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-01",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-04-01",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Init Config Error\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-01",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 1
  },
  {
    "dia": "2026-04-01",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "VERDI_FORM",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 1
  },
  {
    "dia": "2026-04-01",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Defeito no leitor do chip",
    "qtd": 1
  },
  {
    "dia": "2026-04-01",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-04-01",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensagem \"Sua Point parou de funcionar. Reinicie-a para cobrar\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-01",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-01",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-01",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla blanca cargando con mensaje \"buscando información\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-01",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-01",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 1
  },
  {
    "dia": "2026-04-01",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-01",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Lector funciona lento",
    "qtd": 1
  },
  {
    "dia": "2026-04-01",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 1
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 197
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 78
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 71
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 69
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 58
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 33
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 25
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 24
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 24
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Otros Problemas",
    "qtd": 21
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 18
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 17
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 16
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 14
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 9
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 8
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Otros Problemas",
    "qtd": 8
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 7
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Lector funciona lento",
    "qtd": 7
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 6
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Otros Problemas",
    "qtd": 6
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 6
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 5
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 5
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 5
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 5
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 4
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Pantalla rota",
    "qtd": 4
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "POINT",
    "motivo": "Maquininha trava com mensagem \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 4
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 4
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 4
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 4
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 4
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 3
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla rota",
    "qtd": 3
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 3
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el chip no funciona",
    "qtd": 3
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Visor tactil no funciona",
    "qtd": 3
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 3
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Teclado/botón roto",
    "qtd": 2
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 2
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 2
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Visor tactil no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "POINT",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Sólo el chip no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Visor tactil no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 2
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 1
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 1
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Defeito no leitor do chip",
    "qtd": 1
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 1
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensagem \"Sua Point parou de funcionar. Reinicie-a para cobrar\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Lector funciona lento",
    "qtd": 1
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Sólo el wifi no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla blanca cargando con mensaje \"buscando información\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 1
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Maquininha trava com mensagem \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla blanca cargando con mensaje \"buscando información\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"No conecta con MP\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el wifi no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Defeito no leitor do chip",
    "qtd": 1
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 1
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 243
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 92
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 85
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 62
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 51
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 28
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 21
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 19
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 16
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 14
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 11
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Otros Problemas",
    "qtd": 10
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 10
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Otros Problemas",
    "qtd": 9
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 8
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 8
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 7
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 7
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 7
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el chip no funciona",
    "qtd": 6
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 5
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 5
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 5
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 5
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Otros Problemas",
    "qtd": 5
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Visor tactil no funciona",
    "qtd": 4
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 4
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 3
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 3
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 3
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Teclado/botón roto",
    "qtd": 3
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 3
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 3
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 3
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 3
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 3
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Sólo el chip no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "POINT",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla blanca cargando con mensaje \"buscando información\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla rota",
    "qtd": 2
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 2
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Lector funciona lento",
    "qtd": 2
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Pantalla rota",
    "qtd": 2
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Teclado/botón roto",
    "qtd": 2
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "CC_VIRTUAL",
    "n2": "CC_VIRTUAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 2
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 2
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla blanca cargando con logo MP / androind iniciando",
    "qtd": 2
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Defeito no leitor do chip",
    "qtd": 2
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Sólo el chip no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensagem \"Sua Point parou de funcionar. Reinicie-a para cobrar\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Lector funciona lento",
    "qtd": 1
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"No conecta con MP\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "POINT",
    "motivo": "Maquininha trava com mensagem \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el wifi no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ningun punto de acceso encontrado\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Init Config Error\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 1
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 1
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Defeito no leitor do chip",
    "qtd": 1
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Lector funciona lento",
    "qtd": 1
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El dispositivo emite ruido",
    "qtd": 1
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla blanca cargando con mensaje \"buscando información\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"No conecta con MP\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 1
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 1
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Sólo el wifi no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "Otros Problemas",
    "qtd": 1
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Maquininha trava com a luz ao redor da point ligada em azul",
    "qtd": 1
  },
  {
    "dia": "2026-03-29",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 115
  },
  {
    "dia": "2026-03-29",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 49
  },
  {
    "dia": "2026-03-29",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 42
  },
  {
    "dia": "2026-03-29",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 39
  },
  {
    "dia": "2026-03-29",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 16
  },
  {
    "dia": "2026-03-29",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 14
  },
  {
    "dia": "2026-03-29",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 13
  },
  {
    "dia": "2026-03-29",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 8
  },
  {
    "dia": "2026-03-29",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Otros Problemas",
    "qtd": 5
  },
  {
    "dia": "2026-03-29",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 5
  },
  {
    "dia": "2026-03-29",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 4
  },
  {
    "dia": "2026-03-29",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 4
  },
  {
    "dia": "2026-03-29",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 4
  },
  {
    "dia": "2026-03-29",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 3
  },
  {
    "dia": "2026-03-29",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 3
  },
  {
    "dia": "2026-03-29",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 3
  },
  {
    "dia": "2026-03-29",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 3
  },
  {
    "dia": "2026-03-29",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla rota",
    "qtd": 2
  },
  {
    "dia": "2026-03-29",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "POINT",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-29",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-29",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-29",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-29",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 2
  },
  {
    "dia": "2026-03-29",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Visor tactil no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-03-29",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 2
  },
  {
    "dia": "2026-03-29",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-29",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 1
  },
  {
    "dia": "2026-03-29",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 1
  },
  {
    "dia": "2026-03-29",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-29",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensagem \"Password Required\" / \"Enter password\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-29",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "POINT",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-29",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 1
  },
  {
    "dia": "2026-03-29",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 1
  },
  {
    "dia": "2026-03-29",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-29",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 1
  },
  {
    "dia": "2026-03-29",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-29",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"No conecta con MP\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-29",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "POINT",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-29",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-29",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 1
  },
  {
    "dia": "2026-03-28",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 142
  },
  {
    "dia": "2026-03-28",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 64
  },
  {
    "dia": "2026-03-28",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 64
  },
  {
    "dia": "2026-03-28",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 42
  },
  {
    "dia": "2026-03-28",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 28
  },
  {
    "dia": "2026-03-28",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 20
  },
  {
    "dia": "2026-03-28",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 14
  },
  {
    "dia": "2026-03-28",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 13
  },
  {
    "dia": "2026-03-28",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 12
  },
  {
    "dia": "2026-03-28",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 8
  },
  {
    "dia": "2026-03-28",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 8
  },
  {
    "dia": "2026-03-28",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Otros Problemas",
    "qtd": 7
  },
  {
    "dia": "2026-03-28",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 6
  },
  {
    "dia": "2026-03-28",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 6
  },
  {
    "dia": "2026-03-28",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 4
  },
  {
    "dia": "2026-03-28",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 4
  },
  {
    "dia": "2026-03-28",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 3
  },
  {
    "dia": "2026-03-28",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el chip no funciona",
    "qtd": 3
  },
  {
    "dia": "2026-03-28",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 3
  },
  {
    "dia": "2026-03-28",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 3
  },
  {
    "dia": "2026-03-28",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 3
  },
  {
    "dia": "2026-03-28",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 3
  },
  {
    "dia": "2026-03-28",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 2
  },
  {
    "dia": "2026-03-28",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla rota",
    "qtd": 2
  },
  {
    "dia": "2026-03-28",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Sólo el chip no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-03-28",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 2
  },
  {
    "dia": "2026-03-28",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Tamper detected\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-28",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla rota",
    "qtd": 2
  },
  {
    "dia": "2026-03-28",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 1
  },
  {
    "dia": "2026-03-28",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 1
  },
  {
    "dia": "2026-03-28",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla blanca cargando con mensaje \"buscando información\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-28",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"HW attack\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-28",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-28",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Otros Problemas",
    "qtd": 1
  },
  {
    "dia": "2026-03-28",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-28",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Ningun punto de acceso encontrado\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-28",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 1
  },
  {
    "dia": "2026-03-28",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 1
  },
  {
    "dia": "2026-03-28",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Reboot in progress\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-28",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Lector funciona lento",
    "qtd": 1
  },
  {
    "dia": "2026-03-28",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 1
  },
  {
    "dia": "2026-03-28",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 1
  },
  {
    "dia": "2026-03-28",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-03-28",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sticker de seguridad de la caja roto",
    "qtd": 1
  },
  {
    "dia": "2026-03-28",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-28",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-03-28",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "Otros Problemas",
    "qtd": 1
  },
  {
    "dia": "2026-03-28",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 1
  },
  {
    "dia": "2026-03-28",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-28",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "POINT",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-28",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-28",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Sticker de seguridad de la caja roto",
    "qtd": 1
  },
  {
    "dia": "2026-03-28",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-28",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 1
  },
  {
    "dia": "2026-03-28",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-03-28",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 1
  },
  {
    "dia": "2026-03-28",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Defeito no leitor do chip",
    "qtd": 1
  },
  {
    "dia": "2026-03-28",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Lector funciona lento",
    "qtd": 1
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 221
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 80
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 58
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 44
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 42
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 31
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 24
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 17
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 17
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 16
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 15
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 13
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Otros Problemas",
    "qtd": 9
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Otros Problemas",
    "qtd": 9
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 8
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 6
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 6
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 6
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Otros Problemas",
    "qtd": 6
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 6
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 5
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Lector funciona lento",
    "qtd": 5
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 5
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Visor tactil no funciona",
    "qtd": 5
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Lector funciona lento",
    "qtd": 4
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 4
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 4
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Pantalla rota",
    "qtd": 4
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 4
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 4
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 4
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 4
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 4
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Sólo el chip no funciona",
    "qtd": 4
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 3
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "CC_VIRTUAL",
    "n2": "CC_VIRTUAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 3
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Visor tactil no funciona",
    "qtd": 3
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"HW attack\"",
    "qtd": 3
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla rota",
    "qtd": 3
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 2
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el chip no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "POINT",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Visor tactil no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 2
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 2
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Smartpos Paró\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el wifi no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 1
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Sólo el wifi no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 1
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "CC_VIRTUAL",
    "n2": "CC_VIRTUAL",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 1
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "POINT",
    "motivo": "Maquininha trava com mensagem \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 1
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 1
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Tamper detected\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Sticker de seguridad de la caja roto",
    "qtd": 1
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Defeito no leitor do chip",
    "qtd": 1
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 1
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensagem \"Sua Point parou de funcionar. Reinicie-a para cobrar\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 1
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensagem \"Sua Point parou de funcionar. Reinicie-a para cobrar\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Pantalla blanca cargando con mensaje \"buscando información\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 1
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 1
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "POINT",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 228
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 77
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 76
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 61
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 50
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 29
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 28
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 27
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 25
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 24
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Otros Problemas",
    "qtd": 11
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 9
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 9
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 8
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Otros Problemas",
    "qtd": 7
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Otros Problemas",
    "qtd": 6
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 6
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 6
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Sólo el chip no funciona",
    "qtd": 5
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Lector funciona lento",
    "qtd": 5
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 5
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 5
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 5
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Visor tactil no funciona",
    "qtd": 5
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 5
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Visor tactil no funciona",
    "qtd": 4
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 4
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 4
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 4
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 4
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 4
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el chip no funciona",
    "qtd": 3
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 3
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 3
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 3
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla rota",
    "qtd": 3
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 2
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Sólo el wifi no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 2
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla rota",
    "qtd": 2
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 2
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 2
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 2
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "CC_VIRTUAL",
    "n2": "CC_VIRTUAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 2
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Lector funciona lento",
    "qtd": 2
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"HW attack\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "POINT",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensagem \"Password Required\" / \"Enter password\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 1
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 1
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 1
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 1
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "CC_VIRTUAL",
    "n2": "CC_VIRTUAL",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Tamper detected\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Lector funciona lento",
    "qtd": 1
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 1
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Defeito no leitor do chip",
    "qtd": 1
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Defeito no leitor do chip",
    "qtd": 1
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"HW attack\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "CC_VIRTUAL",
    "n2": "CC_VIRTUAL",
    "motivo": "Otros Problemas",
    "qtd": 1
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 1
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 1
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 1
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Sticker de seguridad de la caja roto",
    "qtd": 1
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "CC_VIRTUAL",
    "n2": "CC_VIRTUAL",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 1
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Sticker de seguridad de la caja roto",
    "qtd": 1
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 228
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 82
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 74
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 58
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 55
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 41
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 35
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 32
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 22
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 17
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Otros Problemas",
    "qtd": 15
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Otros Problemas",
    "qtd": 14
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 13
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 13
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 12
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 11
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 10
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 10
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Otros Problemas",
    "qtd": 10
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 10
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla rota",
    "qtd": 9
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Pantalla rota",
    "qtd": 8
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 7
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 7
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 6
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 6
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Teclado/botón roto",
    "qtd": 5
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Visor tactil no funciona",
    "qtd": 5
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 5
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 5
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 4
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 4
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 4
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Lector funciona lento",
    "qtd": 4
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 4
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 4
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 4
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 3
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Sólo el chip no funciona",
    "qtd": 3
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Lector funciona lento",
    "qtd": 3
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Defeito no leitor do chip",
    "qtd": 3
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Defeito no leitor do chip",
    "qtd": 3
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Sólo el chip no funciona",
    "qtd": 3
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 3
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el chip no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 2
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 2
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 2
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 2
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Teclado/botón roto",
    "qtd": 2
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"No conecta con MP\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Smartpos Paró\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "CC_VIRTUAL",
    "n2": "CC_VIRTUAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 1
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 1
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"HW attack\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla blanca cargando con mensaje \"buscando información\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "CC_VIRTUAL",
    "n2": "CC_VIRTUAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 1
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensagem \"Password Required\" / \"Enter password\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Unauthorized\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 1
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "POINT",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Init Config Error\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla blanca cargando con logo MP / androind iniciando",
    "qtd": 1
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 1
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Irruption\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 1
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Reboot & Authority\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 1
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 284
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 85
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 67
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 66
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 54
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 48
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 39
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 31
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 31
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Otros Problemas",
    "qtd": 19
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 17
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 17
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 12
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 12
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Otros Problemas",
    "qtd": 11
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 11
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Otros Problemas",
    "qtd": 10
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 10
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 9
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 8
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 7
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 6
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 6
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 6
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 5
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 5
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Teclado/botón roto",
    "qtd": 5
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 5
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 5
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 5
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 5
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Pantalla rota",
    "qtd": 5
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 5
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 4
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 4
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 4
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 3
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla rota",
    "qtd": 3
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Sólo el chip no funciona",
    "qtd": 3
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 3
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Visor tactil no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 2
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 2
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 2
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Sólo el chip no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Lector funciona lento",
    "qtd": 2
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Visor tactil no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla rota",
    "qtd": 2
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Lector funciona lento",
    "qtd": 2
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Visor tactil no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Teclado/botón roto",
    "qtd": 2
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 1
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"No conecta con MP\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Reboot & Authority\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Defeito no leitor do chip",
    "qtd": 1
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Defeito no leitor do chip",
    "qtd": 1
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "CC_VIRTUAL",
    "n2": "CC_VIRTUAL",
    "motivo": "Lector funciona lento",
    "qtd": 1
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "POINT",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Maquininha trava com mensagem \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "TLV",
    "n2": "TLV",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 1
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensagem \"Password Required\" / \"Enter password\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 1
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Lector funciona lento",
    "qtd": 1
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 1
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 1
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 1
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ningun punto de acceso encontrado\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "CC_VIRTUAL",
    "n2": "CC_VIRTUAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 1
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "POINT",
    "motivo": "Maquininha trava com mensagem \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Smartpos Paró\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "Otros Problemas",
    "qtd": 1
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 238
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 101
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 85
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 57
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 55
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 35
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 28
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 23
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 20
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 19
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 14
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 10
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 10
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Otros Problemas",
    "qtd": 9
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Otros Problemas",
    "qtd": 9
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 9
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 9
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 9
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 8
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 7
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 7
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Otros Problemas",
    "qtd": 6
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 6
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Teclado/botón roto",
    "qtd": 5
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 5
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 5
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 5
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Visor tactil no funciona",
    "qtd": 4
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 3
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 3
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 3
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 3
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el chip no funciona",
    "qtd": 3
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Teclado/botón roto",
    "qtd": 3
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla rota",
    "qtd": 3
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 3
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 3
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Teclado/botón roto",
    "qtd": 3
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 3
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 3
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Lector funciona lento",
    "qtd": 2
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 2
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Sólo el chip no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 2
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Pantalla rota",
    "qtd": 2
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Tamper detected\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 2
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 2
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 2
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 2
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla blanca cargando con mensaje \"buscando información\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "CC_VIRTUAL",
    "n2": "CC_VIRTUAL",
    "motivo": "Otros Problemas",
    "qtd": 1
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensagem \"Sua Point parou de funcionar. Reinicie-a para cobrar\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "Otros Problemas",
    "qtd": 1
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 1
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Init Config Error\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "POINT",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"No conecta con MP\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 1
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 1
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Lector funciona lento",
    "qtd": 1
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 1
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Defeito no leitor do chip",
    "qtd": 1
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Lector funciona lento",
    "qtd": 1
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 1
  },
  {
    "dia": "2026-03-22",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 116
  },
  {
    "dia": "2026-03-22",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 41
  },
  {
    "dia": "2026-03-22",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 39
  },
  {
    "dia": "2026-03-22",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 25
  },
  {
    "dia": "2026-03-22",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 16
  },
  {
    "dia": "2026-03-22",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 15
  },
  {
    "dia": "2026-03-22",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 14
  },
  {
    "dia": "2026-03-22",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 13
  },
  {
    "dia": "2026-03-22",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Otros Problemas",
    "qtd": 9
  },
  {
    "dia": "2026-03-22",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 9
  },
  {
    "dia": "2026-03-22",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 8
  },
  {
    "dia": "2026-03-22",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 5
  },
  {
    "dia": "2026-03-22",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 5
  },
  {
    "dia": "2026-03-22",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 5
  },
  {
    "dia": "2026-03-22",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 4
  },
  {
    "dia": "2026-03-22",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 4
  },
  {
    "dia": "2026-03-22",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 4
  },
  {
    "dia": "2026-03-22",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 3
  },
  {
    "dia": "2026-03-22",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 3
  },
  {
    "dia": "2026-03-22",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Lector funciona lento",
    "qtd": 3
  },
  {
    "dia": "2026-03-22",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "POINT",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 3
  },
  {
    "dia": "2026-03-22",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-22",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Otros Problemas",
    "qtd": 2
  },
  {
    "dia": "2026-03-22",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 2
  },
  {
    "dia": "2026-03-22",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "POINT",
    "motivo": "Maquininha trava com mensagem \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-22",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Teclado/botón roto",
    "qtd": 2
  },
  {
    "dia": "2026-03-22",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 2
  },
  {
    "dia": "2026-03-22",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-22",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "POINT",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-22",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 2
  },
  {
    "dia": "2026-03-22",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 1
  },
  {
    "dia": "2026-03-22",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 1
  },
  {
    "dia": "2026-03-22",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"HW attack\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-22",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 1
  },
  {
    "dia": "2026-03-22",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 1
  },
  {
    "dia": "2026-03-22",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Otros Problemas",
    "qtd": 1
  },
  {
    "dia": "2026-03-22",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el wifi no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-22",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 176
  },
  {
    "dia": "2026-03-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 61
  },
  {
    "dia": "2026-03-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 57
  },
  {
    "dia": "2026-03-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 45
  },
  {
    "dia": "2026-03-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 29
  },
  {
    "dia": "2026-03-21",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 24
  },
  {
    "dia": "2026-03-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 23
  },
  {
    "dia": "2026-03-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 21
  },
  {
    "dia": "2026-03-21",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 14
  },
  {
    "dia": "2026-03-21",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 12
  },
  {
    "dia": "2026-03-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 12
  },
  {
    "dia": "2026-03-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Otros Problemas",
    "qtd": 10
  },
  {
    "dia": "2026-03-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 8
  },
  {
    "dia": "2026-03-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 7
  },
  {
    "dia": "2026-03-21",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Otros Problemas",
    "qtd": 6
  },
  {
    "dia": "2026-03-21",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 6
  },
  {
    "dia": "2026-03-21",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 5
  },
  {
    "dia": "2026-03-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 4
  },
  {
    "dia": "2026-03-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 4
  },
  {
    "dia": "2026-03-21",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 4
  },
  {
    "dia": "2026-03-21",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 3
  },
  {
    "dia": "2026-03-21",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 3
  },
  {
    "dia": "2026-03-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 3
  },
  {
    "dia": "2026-03-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 3
  },
  {
    "dia": "2026-03-21",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 3
  },
  {
    "dia": "2026-03-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 2
  },
  {
    "dia": "2026-03-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 2
  },
  {
    "dia": "2026-03-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 2
  },
  {
    "dia": "2026-03-21",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el chip no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-03-21",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 2
  },
  {
    "dia": "2026-03-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-21",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Pantalla rota",
    "qtd": 2
  },
  {
    "dia": "2026-03-21",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 1
  },
  {
    "dia": "2026-03-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Tamper detected\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-21",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 1
  },
  {
    "dia": "2026-03-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Reboot & Authority\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-21",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "POINT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 1
  },
  {
    "dia": "2026-03-21",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensagem \"Password Required\" / \"Enter password\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 1
  },
  {
    "dia": "2026-03-21",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Otros Problemas",
    "qtd": 1
  },
  {
    "dia": "2026-03-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"HW attack\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 1
  },
  {
    "dia": "2026-03-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-21",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Lector funciona lento",
    "qtd": 1
  },
  {
    "dia": "2026-03-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 1
  },
  {
    "dia": "2026-03-21",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Lector funciona lento",
    "qtd": 1
  },
  {
    "dia": "2026-03-21",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 1
  },
  {
    "dia": "2026-03-21",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "POINT",
    "motivo": "Otros Problemas",
    "qtd": 1
  },
  {
    "dia": "2026-03-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 1
  },
  {
    "dia": "2026-03-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-21",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 1
  },
  {
    "dia": "2026-03-21",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ningun punto de acceso encontrado\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-21",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-03-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensagem \"Password Required\" / \"Enter password\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 224
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 88
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 66
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 48
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 36
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 35
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 33
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 28
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 27
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 18
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Otros Problemas",
    "qtd": 16
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 15
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 14
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 13
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 9
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 9
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 9
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Otros Problemas",
    "qtd": 8
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Otros Problemas",
    "qtd": 8
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 7
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Visor tactil no funciona",
    "qtd": 6
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 6
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 6
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 5
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 5
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 5
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 5
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 4
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Lector funciona lento",
    "qtd": 4
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 4
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 3
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 3
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Pantalla rota",
    "qtd": 3
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Defeito no leitor do chip",
    "qtd": 3
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 3
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 3
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 3
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el chip no funciona",
    "qtd": 3
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Init Config Error\"",
    "qtd": 3
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 3
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 2
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 2
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Teclado/botón roto",
    "qtd": 2
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Visor tactil no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Pantalla rota",
    "qtd": 2
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 2
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Tamper detected\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Smartpos Paró\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "CC_VIRTUAL",
    "n2": "CC_VIRTUAL",
    "motivo": "Otros Problemas",
    "qtd": 1
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "CC_VIRTUAL",
    "n2": "CC_VIRTUAL",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 1
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 1
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Smartpos Paró\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 1
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensagem \"Sua Point parou de funcionar. Reinicie-a para cobrar\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El dispositivo emite ruido",
    "qtd": 1
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "CC_VIRTUAL",
    "n2": "CC_VIRTUAL",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Sticker de seguridad de la caja roto",
    "qtd": 1
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "Otros Problemas",
    "qtd": 1
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Maquininha trava com mensagem \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "TLV",
    "n2": "TLV",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 1
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "POINT",
    "motivo": "Otros Problemas",
    "qtd": 1
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "CC_VIRTUAL",
    "n2": "CC_VIRTUAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 1
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 1
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensagem \"Password Required\" / \"Enter password\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Defeito no leitor do chip",
    "qtd": 1
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Smartpos Paró\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Sólo el wifi no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Lector funciona lento",
    "qtd": 1
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 1
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 243
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 110
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 76
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 65
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 62
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 47
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 44
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 29
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 28
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 27
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Otros Problemas",
    "qtd": 21
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 19
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 12
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 11
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 11
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 10
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 9
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 9
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Lector funciona lento",
    "qtd": 9
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 8
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 8
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 7
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 7
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Otros Problemas",
    "qtd": 7
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Pantalla rota",
    "qtd": 6
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 6
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 6
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 5
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 5
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Teclado/botón roto",
    "qtd": 5
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 5
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 4
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Visor tactil no funciona",
    "qtd": 4
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 3
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Lector funciona lento",
    "qtd": 3
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "POINT",
    "motivo": "Otros Problemas",
    "qtd": 3
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 3
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 3
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 3
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Sólo el chip no funciona",
    "qtd": 3
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "CC_VIRTUAL",
    "n2": "CC_VIRTUAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 2
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Tamper detected\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 2
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el wifi no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "POINT",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 2
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Sólo el chip no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla rota",
    "qtd": 2
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Visor tactil no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 1
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 1
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 1
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Maquininha trava com a luz ao redor da point ligada em azul",
    "qtd": 1
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensagem \"Password Required\" / \"Enter password\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 1
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 1
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensagem \"Sua Point parou de funcionar. Reinicie-a para cobrar\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "CC_VIRTUAL",
    "n2": "CC_VIRTUAL",
    "motivo": "Mensaje \"Tamper detected\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 1
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "POINT",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Sólo el wifi no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 1
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 259
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 95
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 80
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 72
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 63
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 42
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 41
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 27
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 25
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 23
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Otros Problemas",
    "qtd": 22
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 19
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Otros Problemas",
    "qtd": 15
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 13
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 12
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 12
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 11
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Otros Problemas",
    "qtd": 11
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 11
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 7
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 7
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Lector funciona lento",
    "qtd": 7
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Teclado/botón roto",
    "qtd": 6
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 6
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 5
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 5
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 4
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Visor tactil no funciona",
    "qtd": 4
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Lector funciona lento",
    "qtd": 4
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Sólo el chip no funciona",
    "qtd": 4
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 4
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el chip no funciona",
    "qtd": 4
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 4
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 4
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 3
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Sólo el chip no funciona",
    "qtd": 3
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla rota",
    "qtd": 3
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Visor tactil no funciona",
    "qtd": 3
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Lector funciona lento",
    "qtd": 3
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 3
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 3
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 3
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 3
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Teclado/botón roto",
    "qtd": 3
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 2
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Lector funciona lento",
    "qtd": 2
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Pantalla rota",
    "qtd": 2
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 2
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 2
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 2
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 2
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "POINT",
    "motivo": "Maquininha trava com mensagem \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 2
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Visor tactil no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 2
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensagem \"Sua Point parou de funcionar. Reinicie-a para cobrar\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ningun punto de acceso encontrado\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 1
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Maquininha trava com mensagem \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"HW attack\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Smartpos Paró\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 1
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el wifi no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 1
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 1
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 1
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Defeito no leitor do chip",
    "qtd": 1
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 1
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Sólo el wifi no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 1
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Init Config Error\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensagem \"Sua Point parou de funcionar. Reinicie-a para cobrar\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla blanca cargando con mensaje \"buscando información\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"No conecta con MP\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 292
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 102
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 77
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 65
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 41
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 32
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 31
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 26
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 19
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Otros Problemas",
    "qtd": 16
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 13
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 13
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 12
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "CC_VIRTUAL",
    "n2": "CC_VIRTUAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 10
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Otros Problemas",
    "qtd": 10
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 8
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 8
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 8
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Pantalla rota",
    "qtd": 8
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 8
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 8
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 6
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 6
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 6
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 6
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Otros Problemas",
    "qtd": 6
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 5
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 5
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 5
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 4
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 4
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla rota",
    "qtd": 4
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 4
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Teclado/botón roto",
    "qtd": 4
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Sólo el chip no funciona",
    "qtd": 3
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Visor tactil no funciona",
    "qtd": 3
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 3
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 3
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 3
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Teclado/botón roto",
    "qtd": 2
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Teclado/botón roto",
    "qtd": 2
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "Otros Problemas",
    "qtd": 2
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 2
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 2
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 2
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Sólo el chip no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Pantalla rota",
    "qtd": 2
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Visor tactil no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Lector funciona lento",
    "qtd": 2
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Defeito no leitor do chip",
    "qtd": 2
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "CC_VIRTUAL",
    "n2": "CC_VIRTUAL",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 1
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 1
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Smartpos Paró\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Init Config Error\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "POINT",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 1
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Maquininha trava com mensagem \"Não conecta com MP\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"HW attack\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 1
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 1
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 1
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Pantalla blanca cargando con mensaje \"buscando información\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Sólo el wifi no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensagem \"Sua Point parou de funcionar. Reinicie-a para cobrar\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Tamper detected\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 1
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 1
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Smartpos Paró\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Lector funciona lento",
    "qtd": 1
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 1
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Sólo el wifi no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 255
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 128
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 76
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 69
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 62
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 40
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 37
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 29
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 29
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Otros Problemas",
    "qtd": 19
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 17
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 16
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 15
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 14
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Otros Problemas",
    "qtd": 13
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 12
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 11
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Otros Problemas",
    "qtd": 11
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 7
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 6
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 6
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 6
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 6
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 5
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Teclado/botón roto",
    "qtd": 5
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla rota",
    "qtd": 4
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Lector funciona lento",
    "qtd": 4
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 4
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 4
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 4
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 4
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 4
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 3
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 3
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Pantalla rota",
    "qtd": 2
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 2
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla rota",
    "qtd": 2
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 2
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Teclado/botón roto",
    "qtd": 2
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Lector funciona lento",
    "qtd": 2
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 2
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Sólo el wifi no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensagem \"Password Required\" / \"Enter password\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Visor tactil no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "CC_VIRTUAL",
    "n2": "CC_VIRTUAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 2
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Sólo el chip no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "POINT",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Visor tactil no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 2
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"HW attack\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Tamper detected\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Maquininha trava com mensagem \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Reboot in progress\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Lector funciona lento",
    "qtd": 1
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 1
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 1
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 1
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "POINT",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Tamper detected\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Lector funciona lento",
    "qtd": 1
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Defeito no leitor do chip",
    "qtd": 1
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Tamper detected\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 1
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla blanca cargando con logo MP / androind iniciando",
    "qtd": 1
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Lector funciona lento",
    "qtd": 1
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 1
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"No conecta con MP\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 1
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Smartpos Paró\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 1
  },
  {
    "dia": "2026-03-15",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 109
  },
  {
    "dia": "2026-03-15",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 68
  },
  {
    "dia": "2026-03-15",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 43
  },
  {
    "dia": "2026-03-15",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 27
  },
  {
    "dia": "2026-03-15",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 25
  },
  {
    "dia": "2026-03-15",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 20
  },
  {
    "dia": "2026-03-15",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Otros Problemas",
    "qtd": 13
  },
  {
    "dia": "2026-03-15",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 13
  },
  {
    "dia": "2026-03-15",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 8
  },
  {
    "dia": "2026-03-15",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 7
  },
  {
    "dia": "2026-03-15",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 7
  },
  {
    "dia": "2026-03-15",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 6
  },
  {
    "dia": "2026-03-15",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 5
  },
  {
    "dia": "2026-03-15",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 5
  },
  {
    "dia": "2026-03-15",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Sólo el chip no funciona",
    "qtd": 3
  },
  {
    "dia": "2026-03-15",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 3
  },
  {
    "dia": "2026-03-15",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 3
  },
  {
    "dia": "2026-03-15",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 3
  },
  {
    "dia": "2026-03-15",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 3
  },
  {
    "dia": "2026-03-15",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-15",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 2
  },
  {
    "dia": "2026-03-15",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 2
  },
  {
    "dia": "2026-03-15",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 2
  },
  {
    "dia": "2026-03-15",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 2
  },
  {
    "dia": "2026-03-15",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 2
  },
  {
    "dia": "2026-03-15",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 2
  },
  {
    "dia": "2026-03-15",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ningun punto de acceso encontrado\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-15",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-15",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-15",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-15",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-15",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-15",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-15",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-03-15",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-03-15",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 1
  },
  {
    "dia": "2026-03-15",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "POINT",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-15",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 1
  },
  {
    "dia": "2026-03-15",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-15",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensagem \"Sua Point parou de funcionar. Reinicie-a para cobrar\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-15",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-15",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Tamper detected\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 166
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 89
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 54
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 42
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 37
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 26
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Otros Problemas",
    "qtd": 24
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 19
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Otros Problemas",
    "qtd": 14
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 12
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 11
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 10
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 9
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 7
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 6
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 5
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 5
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Otros Problemas",
    "qtd": 5
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Lector funciona lento",
    "qtd": 4
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 4
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 4
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 4
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 4
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Pantalla rota",
    "qtd": 3
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 3
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 3
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Visor tactil no funciona",
    "qtd": 3
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 3
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 3
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 3
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 2
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 2
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "POINT",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Maquininha trava com mensagem \"Não conecta com MP\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 1
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 1
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensagem \"Sua Point parou de funcionar. Reinicie-a para cobrar\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ningun punto de acceso encontrado\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Lector funciona lento",
    "qtd": 1
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "POINT",
    "motivo": "Otros Problemas",
    "qtd": 1
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 1
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Maquininha trava com mensagem \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Defeito no leitor do chip",
    "qtd": 1
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 1
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 1
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Lector funciona lento",
    "qtd": 1
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensagem \"Password Required\" / \"Enter password\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Tamper detected\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 1
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Smartpos Paró\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Tamper detected\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "POINT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 1
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Lector funciona lento",
    "qtd": 1
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 231
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 77
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 67
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 65
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 52
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 44
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 39
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 33
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 25
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 20
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Otros Problemas",
    "qtd": 19
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 17
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 14
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 14
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Otros Problemas",
    "qtd": 14
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 12
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 12
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 11
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 11
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 9
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 9
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 7
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 7
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 7
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 6
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 6
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Visor tactil no funciona",
    "qtd": 6
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 5
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Otros Problemas",
    "qtd": 5
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 5
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 5
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 4
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el chip no funciona",
    "qtd": 4
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Lector funciona lento",
    "qtd": 4
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 3
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Teclado/botón roto",
    "qtd": 3
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla blanca cargando con logo MP / androind iniciando",
    "qtd": 3
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 3
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Pantalla rota",
    "qtd": 3
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 3
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 3
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensagem \"Sua Point parou de funcionar. Reinicie-a para cobrar\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Tamper detected\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Visor tactil no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 2
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Teclado/botón roto",
    "qtd": 2
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 2
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 2
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensagem \"Sua Point parou de funcionar. Reinicie-a para cobrar\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Tamper detected\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 2
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Lector funciona lento",
    "qtd": 1
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Tamper detected\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "POINT",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 1
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Smartpos Paró\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensagem \"Sua Point parou de funcionar. Reinicie-a para cobrar\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 1
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Smartpos Paró\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 1
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Defeito no leitor do chip",
    "qtd": 1
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "TLV",
    "n2": "TLV",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 1
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 1
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 1
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 1
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 1
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Maquininha trava com a luz ao redor da point ligada em azul",
    "qtd": 1
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 1
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla blanca cargando con mensaje \"buscando información\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"No conecta con MP\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "POINT",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 224
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 103
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 72
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 62
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 45
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 39
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 38
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 35
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 29
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Otros Problemas",
    "qtd": 27
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 23
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 18
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 15
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Otros Problemas",
    "qtd": 14
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 14
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 13
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 12
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 12
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Otros Problemas",
    "qtd": 10
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 9
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Lector funciona lento",
    "qtd": 9
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 9
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 9
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Pantalla rota",
    "qtd": 8
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 8
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 7
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 6
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 6
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Visor tactil no funciona",
    "qtd": 5
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 5
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el chip no funciona",
    "qtd": 5
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 5
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 5
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Visor tactil no funciona",
    "qtd": 5
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 4
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 4
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 4
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 4
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "CC_VIRTUAL",
    "n2": "CC_VIRTUAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 3
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 3
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 3
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Teclado/botón roto",
    "qtd": 2
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Pantalla rota",
    "qtd": 2
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Teclado/botón roto",
    "qtd": 2
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Defeito no leitor do chip",
    "qtd": 2
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Teclado/botón roto",
    "qtd": 2
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "POINT",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "POINT",
    "motivo": "Otros Problemas",
    "qtd": 2
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Sólo el wifi no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Visor tactil no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 2
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Sólo el chip no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 2
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla rota",
    "qtd": 2
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Defeito no leitor do chip",
    "qtd": 1
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Init Config Error\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Smartpos Paró\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Reboot & Authority\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Maquininha trava com a luz ao redor da point ligada em azul",
    "qtd": 1
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 1
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 1
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensagem \"Sua Point parou de funcionar. Reinicie-a para cobrar\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 1
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Maquininha trava com mensagem \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "POINT",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 1
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Maquininha trava com mensagem \"Não conecta com MP\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Sticker de seguridad de la caja roto",
    "qtd": 1
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 1
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Defeito no leitor do chip",
    "qtd": 1
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensagem \"Sua Point parou de funcionar. Reinicie-a para cobrar\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"HW ATTACK. Sua Point não funciona. Peça a troca em mercadopago\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensagem \"Sua Point parou de funcionar. Reinicie-a para cobrar\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla blanca cargando con logo MP / androind iniciando",
    "qtd": 1
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 1
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 1
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 1
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "VERDI_FORM",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 1
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensagem \"Password Required\" / \"Enter password\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Lector funciona lento",
    "qtd": 1
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el wifi no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Lector funciona lento",
    "qtd": 1
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 222
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 115
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 74
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 72
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 49
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 47
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 30
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 26
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 22
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Otros Problemas",
    "qtd": 21
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Otros Problemas",
    "qtd": 17
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 15
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 15
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 13
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 12
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 10
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 9
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 9
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Visor tactil no funciona",
    "qtd": 9
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 7
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Otros Problemas",
    "qtd": 6
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 6
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 6
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 6
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 6
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 5
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 4
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 4
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 4
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Lector funciona lento",
    "qtd": 4
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 3
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 3
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ningun punto de acceso encontrado\"",
    "qtd": 3
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 3
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Pantalla rota",
    "qtd": 3
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 3
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 3
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 3
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Sólo el chip no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensagem \"Sua Point parou de funcionar. Reinicie-a para cobrar\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 2
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 2
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 2
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Visor tactil no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 2
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 2
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el chip no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 2
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Teclado/botón roto",
    "qtd": 2
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Lector funciona lento",
    "qtd": 2
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 2
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 2
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Maquininha trava com a luz ao redor da point ligada em azul",
    "qtd": 1
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Sólo el wifi no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 1
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el wifi no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensagem \"Sua Point parou de funcionar. Reinicie-a para cobrar\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Defeito no leitor do chip",
    "qtd": 1
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "VERDI_FORM",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 1
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Lector funciona lento",
    "qtd": 1
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"No conecta con MP\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Tamper detected\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Tamper detected\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "CC_VIRTUAL",
    "n2": "CC_VIRTUAL",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 1
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Defeito no leitor do chip",
    "qtd": 1
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Init Config Error\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 1
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Irruption\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Discontinuidad",
    "qtd": 1
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Tamper detected\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Smartpos Paró\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla blanca cargando con logo MP / androind iniciando",
    "qtd": 1
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 1
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "POINT",
    "motivo": "Otros Problemas",
    "qtd": 1
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "POINT",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Defeito no leitor do chip",
    "qtd": 1
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 1
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 321
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 113
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 93
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 77
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 60
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 57
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 46
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 40
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 30
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 30
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 21
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 20
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 16
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 16
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Otros Problemas",
    "qtd": 14
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 11
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 11
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Otros Problemas",
    "qtd": 11
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 10
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Lector funciona lento",
    "qtd": 9
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 8
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 8
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 8
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Otros Problemas",
    "qtd": 7
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 7
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Pantalla rota",
    "qtd": 6
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 6
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 6
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 6
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 5
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 5
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 5
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el chip no funciona",
    "qtd": 5
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 5
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 4
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 4
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Sólo el chip no funciona",
    "qtd": 4
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Visor tactil no funciona",
    "qtd": 4
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 4
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Lector funciona lento",
    "qtd": 4
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 4
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Visor tactil no funciona",
    "qtd": 3
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "CC_VIRTUAL",
    "n2": "CC_VIRTUAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 3
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 3
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Sólo el chip no funciona",
    "qtd": 3
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Visor tactil no funciona",
    "qtd": 3
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Smartpos Paró\"",
    "qtd": 3
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 3
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Pantalla rota",
    "qtd": 3
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Sólo el chip no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Tamper detected\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Defeito no leitor do chip",
    "qtd": 2
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "POINT",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Visor tactil no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 2
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Teclado/botón roto",
    "qtd": 2
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Teclado/botón roto",
    "qtd": 2
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Tamper detected\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"HW attack\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "CC_VIRTUAL",
    "n2": "CC_VIRTUAL",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 1
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Maquininha trava com a luz ao redor da point ligada em azul",
    "qtd": 1
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Defeito no leitor do chip",
    "qtd": 1
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Sólo el wifi no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 1
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "CC_VIRTUAL",
    "n2": "CC_VIRTUAL",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el wifi no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 1
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Irruption\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensagem \"Password Required\" / \"Enter password\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "POINT",
    "motivo": "Otros Problemas",
    "qtd": 1
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "POINT",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Reboot & Authority\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 1
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"HW attack\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensagem \"Sua Point parou de funcionar. Reinicie-a para cobrar\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ningun punto de acceso encontrado\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Maquininha trava com mensagem \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Maquininha trava com mensagem \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensagem \"Sua Point parou de funcionar. Reinicie-a para cobrar\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla blanca cargando con logo MP / androind iniciando",
    "qtd": 1
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla blanca cargando con mensaje \"buscando información\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 265
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 121
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 73
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 70
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 65
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 60
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 38
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 36
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Otros Problemas",
    "qtd": 32
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 26
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 21
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 20
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 16
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 14
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 14
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 13
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 12
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Otros Problemas",
    "qtd": 10
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 9
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 9
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 9
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 8
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 8
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 7
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Otros Problemas",
    "qtd": 7
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 6
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 6
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 6
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 5
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Visor tactil no funciona",
    "qtd": 5
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 4
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 4
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Lector funciona lento",
    "qtd": 4
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Tamper detected\"",
    "qtd": 4
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Pantalla rota",
    "qtd": 4
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "VERDI_FORM",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 4
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 3
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "VERDI_FORM",
    "motivo": "Sólo el chip no funciona",
    "qtd": 3
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 3
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 3
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 3
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "VERDI_FORM",
    "motivo": "Sólo el wifi no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "VERDI_FORM",
    "motivo": "Lector funciona lento",
    "qtd": 2
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Visor tactil no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Lector funciona lento",
    "qtd": 2
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Teclado/botón roto",
    "qtd": 2
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Teclado/botón roto",
    "qtd": 2
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla rota",
    "qtd": 2
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "VERDI_FORM",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 2
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 2
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Lector funciona lento",
    "qtd": 2
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el chip no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 2
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 2
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 2
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Teclado/botón roto",
    "qtd": 2
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Teclado/botón roto",
    "qtd": 2
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Sólo el chip no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "VERDI_FORM",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 2
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "POINT",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 1
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "VERDI_FORM",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 1
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla blanca cargando con logo MP / androind iniciando",
    "qtd": 1
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "Otros Problemas",
    "qtd": 1
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 1
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensagem \"Password Required\" / \"Enter password\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 1
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 1
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "CC_VIRTUAL",
    "n2": "CC_VIRTUAL",
    "motivo": "Otros Problemas",
    "qtd": 1
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"No conecta con MP\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensagem \"Password Required\" / \"Enter password\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "CC_VIRTUAL",
    "n2": "CC_VIRTUAL",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "VERDI_FORM",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 1
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Sólo el wifi no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "VERDI_FORM",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Reboot in progress\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 1
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "POINT",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el wifi no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Defeito no leitor do chip",
    "qtd": 1
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Maquininha trava com mensagem \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensagem \"Sua Point parou de funcionar. Reinicie-a para cobrar\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Smartpos Paró\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Smartpos Paró\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 1
  },
  {
    "dia": "2026-03-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 102
  },
  {
    "dia": "2026-03-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 70
  },
  {
    "dia": "2026-03-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 42
  },
  {
    "dia": "2026-03-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 30
  },
  {
    "dia": "2026-03-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 24
  },
  {
    "dia": "2026-03-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 16
  },
  {
    "dia": "2026-03-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 15
  },
  {
    "dia": "2026-03-08",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 12
  },
  {
    "dia": "2026-03-08",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 11
  },
  {
    "dia": "2026-03-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 10
  },
  {
    "dia": "2026-03-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 8
  },
  {
    "dia": "2026-03-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 8
  },
  {
    "dia": "2026-03-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Otros Problemas",
    "qtd": 7
  },
  {
    "dia": "2026-03-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 5
  },
  {
    "dia": "2026-03-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 5
  },
  {
    "dia": "2026-03-08",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 5
  },
  {
    "dia": "2026-03-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 4
  },
  {
    "dia": "2026-03-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 4
  },
  {
    "dia": "2026-03-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Teclado/botón roto",
    "qtd": 3
  },
  {
    "dia": "2026-03-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 3
  },
  {
    "dia": "2026-03-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 3
  },
  {
    "dia": "2026-03-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Visor tactil no funciona",
    "qtd": 3
  },
  {
    "dia": "2026-03-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 3
  },
  {
    "dia": "2026-03-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 3
  },
  {
    "dia": "2026-03-08",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 2
  },
  {
    "dia": "2026-03-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Sólo el chip no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-03-08",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-08",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-03-08",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-08",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 1
  },
  {
    "dia": "2026-03-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Maquininha trava com mensagem \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 1
  },
  {
    "dia": "2026-03-08",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 1
  },
  {
    "dia": "2026-03-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-03-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Init Config Error\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-08",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 1
  },
  {
    "dia": "2026-03-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "POINT",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "POINT",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 1
  },
  {
    "dia": "2026-03-08",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 1
  },
  {
    "dia": "2026-03-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"HW attack\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-08",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-03-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-08",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-08",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Irruption\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-08",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-03-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 150
  },
  {
    "dia": "2026-03-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 83
  },
  {
    "dia": "2026-03-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 52
  },
  {
    "dia": "2026-03-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 38
  },
  {
    "dia": "2026-03-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 37
  },
  {
    "dia": "2026-03-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Otros Problemas",
    "qtd": 31
  },
  {
    "dia": "2026-03-07",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 22
  },
  {
    "dia": "2026-03-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 19
  },
  {
    "dia": "2026-03-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 15
  },
  {
    "dia": "2026-03-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 14
  },
  {
    "dia": "2026-03-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 11
  },
  {
    "dia": "2026-03-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 10
  },
  {
    "dia": "2026-03-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 9
  },
  {
    "dia": "2026-03-07",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 9
  },
  {
    "dia": "2026-03-07",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 7
  },
  {
    "dia": "2026-03-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 7
  },
  {
    "dia": "2026-03-07",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 7
  },
  {
    "dia": "2026-03-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 6
  },
  {
    "dia": "2026-03-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 6
  },
  {
    "dia": "2026-03-07",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 6
  },
  {
    "dia": "2026-03-07",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Otros Problemas",
    "qtd": 4
  },
  {
    "dia": "2026-03-07",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 4
  },
  {
    "dia": "2026-03-07",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 4
  },
  {
    "dia": "2026-03-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 3
  },
  {
    "dia": "2026-03-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Pantalla rota",
    "qtd": 3
  },
  {
    "dia": "2026-03-07",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla rota",
    "qtd": 3
  },
  {
    "dia": "2026-03-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Sólo el chip no funciona",
    "qtd": 3
  },
  {
    "dia": "2026-03-07",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 3
  },
  {
    "dia": "2026-03-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 3
  },
  {
    "dia": "2026-03-07",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 2
  },
  {
    "dia": "2026-03-07",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 2
  },
  {
    "dia": "2026-03-07",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 2
  },
  {
    "dia": "2026-03-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Visor tactil no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-03-07",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el chip no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-03-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-07",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Otros Problemas",
    "qtd": 2
  },
  {
    "dia": "2026-03-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 1
  },
  {
    "dia": "2026-03-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "POINT",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-07",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-07",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-03-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Tamper detected\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 1
  },
  {
    "dia": "2026-03-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "POINT",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-07",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 1
  },
  {
    "dia": "2026-03-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 1
  },
  {
    "dia": "2026-03-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "VERDI_FORM",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 1
  },
  {
    "dia": "2026-03-07",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-07",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-07",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Tamper detected\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-07",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 1
  },
  {
    "dia": "2026-03-07",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 1
  },
  {
    "dia": "2026-03-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-03-07",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Init Config Error\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Sólo el wifi no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-07",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-07",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 1
  },
  {
    "dia": "2026-03-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 1
  },
  {
    "dia": "2026-03-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Defeito no leitor do chip",
    "qtd": 1
  },
  {
    "dia": "2026-03-07",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Maquininha trava com a luz ao redor da point ligada em azul",
    "qtd": 1
  },
  {
    "dia": "2026-03-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "POINT",
    "motivo": "Otros Problemas",
    "qtd": 1
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 188
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 75
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 70
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 50
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 47
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 46
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Otros Problemas",
    "qtd": 36
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 30
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 26
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 26
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 20
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 18
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 15
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 14
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Otros Problemas",
    "qtd": 12
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 11
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 9
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 8
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 8
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 7
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 7
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 7
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Otros Problemas",
    "qtd": 7
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 6
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 6
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Visor tactil no funciona",
    "qtd": 6
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 5
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 5
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 5
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 5
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 5
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Pantalla rota",
    "qtd": 5
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Sólo el chip no funciona",
    "qtd": 4
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Sólo el chip no funciona",
    "qtd": 4
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 4
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 3
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 3
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 3
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 3
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 3
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Lector funciona lento",
    "qtd": 3
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 2
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla rota",
    "qtd": 2
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Visor tactil no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 2
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 2
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Tamper detected\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Teclado/botón roto",
    "qtd": 2
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 2
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 2
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el wifi no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 1
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "POINT",
    "motivo": "Otros Problemas",
    "qtd": 1
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensagem \"Sua Point parou de funcionar. Reinicie-a para cobrar\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"No conecta con MP\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Lector funciona lento",
    "qtd": 1
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensagem \"Sua Point parou de funcionar. Reinicie-a para cobrar\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 1
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Connecting\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 1
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Maquininha trava com mensagem \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla blanca cargando con logo MP / androind iniciando",
    "qtd": 1
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 1
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Init Config Error\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"HW attack\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Defeito no leitor do chip",
    "qtd": 1
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla blanca cargando con mensaje \"buscando información\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Defeito no leitor do chip",
    "qtd": 1
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "CC_VIRTUAL",
    "n2": "CC_VIRTUAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 1
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "CC_VIRTUAL",
    "n2": "CC_VIRTUAL",
    "motivo": "Otros Problemas",
    "qtd": 1
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 1
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Irruption\"",
    "qtd": 1
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 1
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  }
],

  // ── BLOQUEIOS DE POLITICA DE TROCAS ─────────────────────────
  // Multi-site | REPAIR | Set/25+
  // Populado via: python queries/blocked_policy.py
  // Estrutura: { dia:'YYYY-MM-DD', site, canal:'FORM'|'CX'|'MAXWELL', qtd_bloqueados }
  blocked: [
  {
    "dia": "2026-04-10",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 61
  },
  {
    "dia": "2026-04-10",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 3
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 205
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 33
  },
  {
    "dia": "2026-04-10",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 8
  },
  {
    "dia": "2026-04-10",
    "site": "MLC",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 2
  },
  {
    "dia": "2026-04-10",
    "site": "MLM",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-04-09",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 91
  },
  {
    "dia": "2026-04-09",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 10
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 222
  },
  {
    "dia": "2026-04-09",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 35
  },
  {
    "dia": "2026-04-09",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 4
  },
  {
    "dia": "2026-04-09",
    "site": "MLC",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 2
  },
  {
    "dia": "2026-04-09",
    "site": "MLM",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 2
  },
  {
    "dia": "2026-04-09",
    "site": "MLM",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-04-08",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 81
  },
  {
    "dia": "2026-04-08",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 11
  },
  {
    "dia": "2026-04-08",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 253
  },
  {
    "dia": "2026-04-08",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 41
  },
  {
    "dia": "2026-04-08",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 8
  },
  {
    "dia": "2026-04-08",
    "site": "MLC",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 4
  },
  {
    "dia": "2026-04-08",
    "site": "MLM",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 3
  },
  {
    "dia": "2026-04-07",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 74
  },
  {
    "dia": "2026-04-07",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 7
  },
  {
    "dia": "2026-04-07",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 218
  },
  {
    "dia": "2026-04-07",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 39
  },
  {
    "dia": "2026-04-07",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 7
  },
  {
    "dia": "2026-04-07",
    "site": "MLC",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 0
  },
  {
    "dia": "2026-04-07",
    "site": "MLM",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-04-07",
    "site": "MLM",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 3
  },
  {
    "dia": "2026-04-06",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 79
  },
  {
    "dia": "2026-04-06",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 7
  },
  {
    "dia": "2026-04-06",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 209
  },
  {
    "dia": "2026-04-06",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 53
  },
  {
    "dia": "2026-04-06",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 4
  },
  {
    "dia": "2026-04-06",
    "site": "MLM",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-04-06",
    "site": "MLM",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-04-05",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 29
  },
  {
    "dia": "2026-04-05",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 3
  },
  {
    "dia": "2026-04-05",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 117
  },
  {
    "dia": "2026-04-05",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 29
  },
  {
    "dia": "2026-04-05",
    "site": "MLM",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-04-04",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 53
  },
  {
    "dia": "2026-04-04",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 4
  },
  {
    "dia": "2026-04-04",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 155
  },
  {
    "dia": "2026-04-04",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 41
  },
  {
    "dia": "2026-04-04",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-04-03",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 39
  },
  {
    "dia": "2026-04-03",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 2
  },
  {
    "dia": "2026-04-03",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 152
  },
  {
    "dia": "2026-04-03",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 31
  },
  {
    "dia": "2026-04-03",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 2
  },
  {
    "dia": "2026-04-03",
    "site": "MLC",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-04-03",
    "site": "MLM",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 2
  },
  {
    "dia": "2026-04-03",
    "site": "MLM",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-04-02",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 40
  },
  {
    "dia": "2026-04-02",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 3
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 170
  },
  {
    "dia": "2026-04-02",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 35
  },
  {
    "dia": "2026-04-02",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 2
  },
  {
    "dia": "2026-04-02",
    "site": "MLC",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-04-01",
    "site": "MLA",
    "canal": "CX",
    "qtd_bloqueados": 10
  },
  {
    "dia": "2026-04-01",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 71
  },
  {
    "dia": "2026-04-01",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 9
  },
  {
    "dia": "2026-04-01",
    "site": "MLB",
    "canal": "CX",
    "qtd_bloqueados": 262
  },
  {
    "dia": "2026-04-01",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 186
  },
  {
    "dia": "2026-04-01",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 38
  },
  {
    "dia": "2026-04-01",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 4
  },
  {
    "dia": "2026-04-01",
    "site": "MLC",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-04-01",
    "site": "MLM",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-04-01",
    "site": "MLM",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-03-31",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 77
  },
  {
    "dia": "2026-03-31",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 12
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 211
  },
  {
    "dia": "2026-03-31",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 43
  },
  {
    "dia": "2026-03-31",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 3
  },
  {
    "dia": "2026-03-31",
    "site": "MLM",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 2
  },
  {
    "dia": "2026-03-30",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 75
  },
  {
    "dia": "2026-03-30",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 9
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 208
  },
  {
    "dia": "2026-03-30",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 56
  },
  {
    "dia": "2026-03-30",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 2
  },
  {
    "dia": "2026-03-30",
    "site": "MLC",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-03-30",
    "site": "MLM",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-03-29",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 25
  },
  {
    "dia": "2026-03-29",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 6
  },
  {
    "dia": "2026-03-29",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 151
  },
  {
    "dia": "2026-03-29",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 30
  },
  {
    "dia": "2026-03-29",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 3
  },
  {
    "dia": "2026-03-29",
    "site": "MLM",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-03-28",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 55
  },
  {
    "dia": "2026-03-28",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 4
  },
  {
    "dia": "2026-03-28",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 181
  },
  {
    "dia": "2026-03-28",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 37
  },
  {
    "dia": "2026-03-28",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 2
  },
  {
    "dia": "2026-03-28",
    "site": "MLC",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 2
  },
  {
    "dia": "2026-03-28",
    "site": "MLM",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 3
  },
  {
    "dia": "2026-03-27",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 75
  },
  {
    "dia": "2026-03-27",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 12
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 189
  },
  {
    "dia": "2026-03-27",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 48
  },
  {
    "dia": "2026-03-27",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 3
  },
  {
    "dia": "2026-03-27",
    "site": "MLM",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-03-26",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 93
  },
  {
    "dia": "2026-03-26",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 8
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 208
  },
  {
    "dia": "2026-03-26",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 49
  },
  {
    "dia": "2026-03-26",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 4
  },
  {
    "dia": "2026-03-26",
    "site": "MLC",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 2
  },
  {
    "dia": "2026-03-25",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 112
  },
  {
    "dia": "2026-03-25",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 13
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 250
  },
  {
    "dia": "2026-03-25",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 55
  },
  {
    "dia": "2026-03-25",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 2
  },
  {
    "dia": "2026-03-25",
    "site": "MLM",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 2
  },
  {
    "dia": "2026-03-25",
    "site": "MLM",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 4
  },
  {
    "dia": "2026-03-24",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 34
  },
  {
    "dia": "2026-03-24",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 4
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 261
  },
  {
    "dia": "2026-03-24",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 49
  },
  {
    "dia": "2026-03-24",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 2
  },
  {
    "dia": "2026-03-24",
    "site": "MLM",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 4
  },
  {
    "dia": "2026-03-23",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 54
  },
  {
    "dia": "2026-03-23",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 8
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 225
  },
  {
    "dia": "2026-03-23",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 56
  },
  {
    "dia": "2026-03-23",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 3
  },
  {
    "dia": "2026-03-23",
    "site": "MLM",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 2
  },
  {
    "dia": "2026-03-23",
    "site": "MLM",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 2
  },
  {
    "dia": "2026-03-22",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 28
  },
  {
    "dia": "2026-03-22",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 4
  },
  {
    "dia": "2026-03-22",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 146
  },
  {
    "dia": "2026-03-22",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 35
  },
  {
    "dia": "2026-03-22",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-03-22",
    "site": "MLM",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-03-22",
    "site": "MLM",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 3
  },
  {
    "dia": "2026-03-21",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 48
  },
  {
    "dia": "2026-03-21",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 6
  },
  {
    "dia": "2026-03-21",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 179
  },
  {
    "dia": "2026-03-21",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 41
  },
  {
    "dia": "2026-03-21",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 3
  },
  {
    "dia": "2026-03-21",
    "site": "MLC",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-03-21",
    "site": "MLM",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-03-21",
    "site": "MLM",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-03-20",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 70
  },
  {
    "dia": "2026-03-20",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 11
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 259
  },
  {
    "dia": "2026-03-20",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 45
  },
  {
    "dia": "2026-03-20",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 4
  },
  {
    "dia": "2026-03-20",
    "site": "MLM",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 5
  },
  {
    "dia": "2026-03-19",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 89
  },
  {
    "dia": "2026-03-19",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 7
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 254
  },
  {
    "dia": "2026-03-19",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 64
  },
  {
    "dia": "2026-03-19",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 5
  },
  {
    "dia": "2026-03-19",
    "site": "MLC",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-03-19",
    "site": "MLM",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-03-18",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 98
  },
  {
    "dia": "2026-03-18",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 10
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 272
  },
  {
    "dia": "2026-03-18",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 55
  },
  {
    "dia": "2026-03-18",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 6
  },
  {
    "dia": "2026-03-18",
    "site": "MLM",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 2
  },
  {
    "dia": "2026-03-18",
    "site": "MLM",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-03-17",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 107
  },
  {
    "dia": "2026-03-17",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 10
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 242
  },
  {
    "dia": "2026-03-17",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 45
  },
  {
    "dia": "2026-03-17",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 6
  },
  {
    "dia": "2026-03-17",
    "site": "MLC",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-03-17",
    "site": "MLM",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 5
  },
  {
    "dia": "2026-03-17",
    "site": "MLM",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-03-16",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 117
  },
  {
    "dia": "2026-03-16",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 12
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 238
  },
  {
    "dia": "2026-03-16",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 52
  },
  {
    "dia": "2026-03-16",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 3
  },
  {
    "dia": "2026-03-16",
    "site": "MLC",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-03-16",
    "site": "MLM",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-03-15",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 30
  },
  {
    "dia": "2026-03-15",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 3
  },
  {
    "dia": "2026-03-15",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 153
  },
  {
    "dia": "2026-03-15",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 30
  },
  {
    "dia": "2026-03-15",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 2
  },
  {
    "dia": "2026-03-15",
    "site": "MLM",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 2
  },
  {
    "dia": "2026-03-15",
    "site": "MLM",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 2
  },
  {
    "dia": "2026-03-14",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 69
  },
  {
    "dia": "2026-03-14",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 6
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 190
  },
  {
    "dia": "2026-03-14",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 29
  },
  {
    "dia": "2026-03-14",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-03-14",
    "site": "MLM",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-03-14",
    "site": "MLM",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-03-13",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 79
  },
  {
    "dia": "2026-03-13",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 11
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 249
  },
  {
    "dia": "2026-03-13",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 42
  },
  {
    "dia": "2026-03-13",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 2
  },
  {
    "dia": "2026-03-13",
    "site": "MLM",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-03-13",
    "site": "MLM",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 2
  },
  {
    "dia": "2026-03-12",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 117
  },
  {
    "dia": "2026-03-12",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 16
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 226
  },
  {
    "dia": "2026-03-12",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 43
  },
  {
    "dia": "2026-03-11",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 125
  },
  {
    "dia": "2026-03-11",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 12
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 235
  },
  {
    "dia": "2026-03-11",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 43
  },
  {
    "dia": "2026-03-10",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 111
  },
  {
    "dia": "2026-03-10",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 18
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 282
  },
  {
    "dia": "2026-03-10",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 65
  },
  {
    "dia": "2026-03-09",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 118
  },
  {
    "dia": "2026-03-09",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 12
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 273
  },
  {
    "dia": "2026-03-09",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 51
  },
  {
    "dia": "2026-03-08",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 47
  },
  {
    "dia": "2026-03-08",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 7
  },
  {
    "dia": "2026-03-08",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 137
  },
  {
    "dia": "2026-03-08",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 29
  },
  {
    "dia": "2026-03-07",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 74
  },
  {
    "dia": "2026-03-07",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 12
  },
  {
    "dia": "2026-03-07",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 197
  },
  {
    "dia": "2026-03-07",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 40
  },
  {
    "dia": "2026-03-06",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 113
  },
  {
    "dia": "2026-03-06",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 9
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 236
  },
  {
    "dia": "2026-03-06",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 40
  },
  {
    "dia": "2026-03-05",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 78
  },
  {
    "dia": "2026-03-05",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 9
  },
  {
    "dia": "2026-03-05",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 260
  },
  {
    "dia": "2026-03-05",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 53
  },
  {
    "dia": "2026-03-04",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 253
  },
  {
    "dia": "2026-03-04",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 60
  },
  {
    "dia": "2026-03-03",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 2
  },
  {
    "dia": "2026-03-03",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 307
  },
  {
    "dia": "2026-03-03",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 70
  },
  {
    "dia": "2026-03-02",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-03-02",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 285
  },
  {
    "dia": "2026-03-02",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 59
  },
  {
    "dia": "2026-03-01",
    "site": "MLA",
    "canal": "CX",
    "qtd_bloqueados": 22
  },
  {
    "dia": "2026-03-01",
    "site": "MLB",
    "canal": "CX",
    "qtd_bloqueados": 1153
  },
  {
    "dia": "2026-03-01",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 167
  },
  {
    "dia": "2026-03-01",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 47
  },
  {
    "dia": "2026-02-28",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-02-28",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 218
  },
  {
    "dia": "2026-02-28",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 57
  },
  {
    "dia": "2026-02-27",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-02-27",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 245
  },
  {
    "dia": "2026-02-27",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 63
  },
  {
    "dia": "2026-02-26",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 2
  },
  {
    "dia": "2026-02-26",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 271
  },
  {
    "dia": "2026-02-26",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 61
  },
  {
    "dia": "2026-02-25",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 14
  },
  {
    "dia": "2026-02-25",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 3
  },
  {
    "dia": "2026-02-25",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 302
  },
  {
    "dia": "2026-02-25",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 67
  },
  {
    "dia": "2026-02-24",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 114
  },
  {
    "dia": "2026-02-24",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 20
  },
  {
    "dia": "2026-02-24",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 312
  },
  {
    "dia": "2026-02-24",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 72
  },
  {
    "dia": "2026-02-24",
    "site": "MLC",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-02-23",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 108
  },
  {
    "dia": "2026-02-23",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 24
  },
  {
    "dia": "2026-02-23",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 301
  },
  {
    "dia": "2026-02-23",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 74
  },
  {
    "dia": "2026-02-22",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 166
  },
  {
    "dia": "2026-02-22",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 38
  },
  {
    "dia": "2026-02-21",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 209
  },
  {
    "dia": "2026-02-21",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 53
  },
  {
    "dia": "2026-02-20",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 253
  },
  {
    "dia": "2026-02-20",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 46
  },
  {
    "dia": "2026-02-19",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-02-19",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 254
  },
  {
    "dia": "2026-02-19",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 70
  },
  {
    "dia": "2026-02-18",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-02-18",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 238
  },
  {
    "dia": "2026-02-18",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 60
  },
  {
    "dia": "2026-02-17",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 205
  },
  {
    "dia": "2026-02-17",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 46
  },
  {
    "dia": "2026-02-16",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 196
  },
  {
    "dia": "2026-02-16",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 35
  },
  {
    "dia": "2026-02-15",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 159
  },
  {
    "dia": "2026-02-15",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 33
  },
  {
    "dia": "2026-02-14",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 205
  },
  {
    "dia": "2026-02-14",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 46
  },
  {
    "dia": "2026-02-13",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 231
  },
  {
    "dia": "2026-02-13",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 50
  },
  {
    "dia": "2026-02-12",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 260
  },
  {
    "dia": "2026-02-12",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 70
  },
  {
    "dia": "2026-02-11",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 294
  },
  {
    "dia": "2026-02-11",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 55
  },
  {
    "dia": "2026-02-10",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 318
  },
  {
    "dia": "2026-02-10",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 76
  },
  {
    "dia": "2026-02-09",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 277
  },
  {
    "dia": "2026-02-09",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 61
  },
  {
    "dia": "2026-02-08",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 203
  },
  {
    "dia": "2026-02-08",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 45
  },
  {
    "dia": "2026-02-07",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 199
  },
  {
    "dia": "2026-02-07",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 60
  },
  {
    "dia": "2026-02-06",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 265
  },
  {
    "dia": "2026-02-06",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 63
  },
  {
    "dia": "2026-02-05",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 250
  },
  {
    "dia": "2026-02-05",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 73
  },
  {
    "dia": "2026-02-04",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 275
  },
  {
    "dia": "2026-02-04",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 47
  },
  {
    "dia": "2026-02-03",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 254
  },
  {
    "dia": "2026-02-03",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 45
  },
  {
    "dia": "2026-02-02",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 277
  },
  {
    "dia": "2026-02-02",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 40
  },
  {
    "dia": "2026-02-01",
    "site": "MLA",
    "canal": "CX",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-02-01",
    "site": "MLB",
    "canal": "CX",
    "qtd_bloqueados": 1154
  },
  {
    "dia": "2026-02-01",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 166
  },
  {
    "dia": "2026-02-01",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 26
  },
  {
    "dia": "2026-01-31",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 221
  },
  {
    "dia": "2026-01-31",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 25
  },
  {
    "dia": "2026-01-30",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 289
  },
  {
    "dia": "2026-01-30",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 35
  },
  {
    "dia": "2026-01-29",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 290
  },
  {
    "dia": "2026-01-29",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 57
  },
  {
    "dia": "2026-01-28",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 297
  },
  {
    "dia": "2026-01-28",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 66
  },
  {
    "dia": "2026-01-27",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 313
  },
  {
    "dia": "2026-01-27",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 80
  },
  {
    "dia": "2026-01-26",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 282
  },
  {
    "dia": "2026-01-26",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 96
  },
  {
    "dia": "2026-01-25",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 173
  },
  {
    "dia": "2026-01-25",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 52
  },
  {
    "dia": "2026-01-24",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 223
  },
  {
    "dia": "2026-01-24",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 65
  },
  {
    "dia": "2026-01-23",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 197
  },
  {
    "dia": "2026-01-23",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 72
  },
  {
    "dia": "2026-01-22",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 87
  },
  {
    "dia": "2026-01-21",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 91
  },
  {
    "dia": "2026-01-20",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 91
  },
  {
    "dia": "2026-01-19",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 80
  },
  {
    "dia": "2026-01-18",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 52
  },
  {
    "dia": "2026-01-17",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 69
  },
  {
    "dia": "2026-01-16",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 142
  },
  {
    "dia": "2026-01-15",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 342
  },
  {
    "dia": "2026-01-14",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 348
  },
  {
    "dia": "2026-01-13",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 422
  },
  {
    "dia": "2026-01-12",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 364
  },
  {
    "dia": "2026-01-11",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 188
  },
  {
    "dia": "2026-01-10",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 242
  },
  {
    "dia": "2026-01-09",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 297
  },
  {
    "dia": "2026-01-08",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 350
  },
  {
    "dia": "2026-01-07",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 314
  },
  {
    "dia": "2026-01-06",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 315
  },
  {
    "dia": "2026-01-05",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 110
  },
  {
    "dia": "2026-01-04",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 176
  },
  {
    "dia": "2026-01-03",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 210
  },
  {
    "dia": "2026-01-02",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 217
  },
  {
    "dia": "2026-01-01",
    "site": "MLB",
    "canal": "CX",
    "qtd_bloqueados": 1664
  },
  {
    "dia": "2026-01-01",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 98
  },
  {
    "dia": "2025-12-31",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 128
  },
  {
    "dia": "2025-12-30",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 206
  },
  {
    "dia": "2025-12-29",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 249
  },
  {
    "dia": "2025-12-28",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 166
  },
  {
    "dia": "2025-12-27",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 189
  },
  {
    "dia": "2025-12-26",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 242
  },
  {
    "dia": "2025-12-25",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 121
  },
  {
    "dia": "2025-12-24",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 134
  },
  {
    "dia": "2025-12-23",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 244
  },
  {
    "dia": "2025-12-22",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 237
  },
  {
    "dia": "2025-12-21",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 162
  },
  {
    "dia": "2025-12-20",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 212
  },
  {
    "dia": "2025-12-19",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 268
  },
  {
    "dia": "2025-12-18",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 299
  },
  {
    "dia": "2025-12-17",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 262
  },
  {
    "dia": "2025-12-16",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 319
  },
  {
    "dia": "2025-12-15",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 306
  },
  {
    "dia": "2025-12-14",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 188
  },
  {
    "dia": "2025-12-13",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 249
  },
  {
    "dia": "2025-12-12",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 292
  },
  {
    "dia": "2025-12-11",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 338
  },
  {
    "dia": "2025-12-10",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 312
  },
  {
    "dia": "2025-12-09",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 330
  },
  {
    "dia": "2025-12-08",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 326
  },
  {
    "dia": "2025-12-07",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 176
  },
  {
    "dia": "2025-12-06",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 211
  },
  {
    "dia": "2025-12-05",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 258
  },
  {
    "dia": "2025-12-04",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 302
  },
  {
    "dia": "2025-12-03",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 300
  },
  {
    "dia": "2025-12-02",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 308
  },
  {
    "dia": "2025-12-01",
    "site": "MLB",
    "canal": "CX",
    "qtd_bloqueados": 1199
  },
  {
    "dia": "2025-12-01",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 329
  },
  {
    "dia": "2025-11-30",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 190
  },
  {
    "dia": "2025-11-29",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 211
  },
  {
    "dia": "2025-11-28",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 273
  },
  {
    "dia": "2025-11-27",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 327
  },
  {
    "dia": "2025-11-26",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 303
  },
  {
    "dia": "2025-11-25",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 314
  },
  {
    "dia": "2025-11-24",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 302
  },
  {
    "dia": "2025-11-23",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 200
  },
  {
    "dia": "2025-11-22",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 221
  },
  {
    "dia": "2025-11-21",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 334
  },
  {
    "dia": "2025-11-20",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 270
  },
  {
    "dia": "2025-11-19",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 315
  },
  {
    "dia": "2025-11-18",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 363
  },
  {
    "dia": "2025-11-17",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 344
  },
  {
    "dia": "2025-11-16",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 234
  },
  {
    "dia": "2025-11-15",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 248
  },
  {
    "dia": "2025-11-14",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 322
  },
  {
    "dia": "2025-11-13",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 354
  },
  {
    "dia": "2025-11-12",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 382
  },
  {
    "dia": "2025-11-11",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 362
  },
  {
    "dia": "2025-11-10",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 355
  },
  {
    "dia": "2025-11-09",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 199
  },
  {
    "dia": "2025-11-08",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 237
  },
  {
    "dia": "2025-11-07",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 299
  },
  {
    "dia": "2025-11-06",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 339
  },
  {
    "dia": "2025-11-05",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 343
  },
  {
    "dia": "2025-11-04",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 372
  },
  {
    "dia": "2025-11-03",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 339
  },
  {
    "dia": "2025-11-02",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 216
  },
  {
    "dia": "2025-11-01",
    "site": "MLB",
    "canal": "CX",
    "qtd_bloqueados": 1197
  },
  {
    "dia": "2025-11-01",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 256
  },
  {
    "dia": "2025-10-31",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 286
  },
  {
    "dia": "2025-10-30",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 326
  },
  {
    "dia": "2025-10-29",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 300
  },
  {
    "dia": "2025-10-28",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 354
  },
  {
    "dia": "2025-10-27",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 363
  },
  {
    "dia": "2025-10-26",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 203
  },
  {
    "dia": "2025-10-25",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 258
  },
  {
    "dia": "2025-10-24",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 376
  },
  {
    "dia": "2025-10-23",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 353
  },
  {
    "dia": "2025-10-22",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 328
  },
  {
    "dia": "2025-10-21",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 436
  },
  {
    "dia": "2025-10-20",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 315
  },
  {
    "dia": "2025-10-19",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 226
  },
  {
    "dia": "2025-10-18",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 262
  },
  {
    "dia": "2025-10-17",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 380
  },
  {
    "dia": "2025-10-16",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 345
  },
  {
    "dia": "2025-10-15",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 391
  },
  {
    "dia": "2025-10-14",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 385
  },
  {
    "dia": "2025-10-13",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 360
  },
  {
    "dia": "2025-10-12",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 170
  },
  {
    "dia": "2025-10-11",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 289
  },
  {
    "dia": "2025-10-10",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 296
  },
  {
    "dia": "2025-10-09",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 43
  },
  {
    "dia": "2025-10-01",
    "site": "MLB",
    "canal": "CX",
    "qtd_bloqueados": 1233
  },
  {
    "dia": "2025-09-05",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 190
  },
  {
    "dia": "2025-09-04",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 349
  },
  {
    "dia": "2025-09-03",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 360
  },
  {
    "dia": "2025-09-02",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 368
  },
  {
    "dia": "2025-09-01",
    "site": "MLB",
    "canal": "CX",
    "qtd_bloqueados": 1355
  },
  {
    "dia": "2025-09-01",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 413
  }
],

  // LEADTIME — SMB (priority=TRUE, target 24h) e Longtail (target 48h)
  // G1=dentro do target | G3=carteirado via logística | G4=fora do target
  // G2 (CC s/ medição) excluído do share
  // Fonte: queries/leadtime.py (MLB only)
  byLeadtime: [
  {
    "site": "MLA",
    "mes": "2025-01",
    "tipo": "Longtail",
    "g1": 6,
    "g3": 0,
    "g4": 1316,
    "total": 1322,
    "g1_pct": 0.45,
    "g3_pct": 0.0,
    "g4_pct": 99.55
  },
  {
    "site": "MLA",
    "mes": "2025-01",
    "tipo": "SMB",
    "g1": 0,
    "g3": 0,
    "g4": 411,
    "total": 411,
    "g1_pct": 0.0,
    "g3_pct": 0.0,
    "g4_pct": 100.0
  },
  {
    "site": "MLA",
    "mes": "2025-02",
    "tipo": "Longtail",
    "g1": 102,
    "g3": 0,
    "g4": 1377,
    "total": 1479,
    "g1_pct": 6.9,
    "g3_pct": 0.0,
    "g4_pct": 93.1
  },
  {
    "site": "MLA",
    "mes": "2025-02",
    "tipo": "SMB",
    "g1": 0,
    "g3": 0,
    "g4": 471,
    "total": 471,
    "g1_pct": 0.0,
    "g3_pct": 0.0,
    "g4_pct": 100.0
  },
  {
    "site": "MLA",
    "mes": "2025-03",
    "tipo": "Longtail",
    "g1": 1522,
    "g3": 0,
    "g4": 425,
    "total": 1947,
    "g1_pct": 78.17,
    "g3_pct": 0.0,
    "g4_pct": 21.83
  },
  {
    "site": "MLA",
    "mes": "2025-03",
    "tipo": "SMB",
    "g1": 169,
    "g3": 0,
    "g4": 642,
    "total": 811,
    "g1_pct": 20.84,
    "g3_pct": 0.0,
    "g4_pct": 79.16
  },
  {
    "site": "MLA",
    "mes": "2025-04",
    "tipo": "Longtail",
    "g1": 1562,
    "g3": 0,
    "g4": 567,
    "total": 2129,
    "g1_pct": 73.37,
    "g3_pct": 0.0,
    "g4_pct": 26.63
  },
  {
    "site": "MLA",
    "mes": "2025-04",
    "tipo": "SMB",
    "g1": 171,
    "g3": 0,
    "g4": 762,
    "total": 933,
    "g1_pct": 18.33,
    "g3_pct": 0.0,
    "g4_pct": 81.67
  },
  {
    "site": "MLA",
    "mes": "2025-05",
    "tipo": "Longtail",
    "g1": 1449,
    "g3": 0,
    "g4": 775,
    "total": 2224,
    "g1_pct": 65.15,
    "g3_pct": 0.0,
    "g4_pct": 34.85
  },
  {
    "site": "MLA",
    "mes": "2025-05",
    "tipo": "SMB",
    "g1": 126,
    "g3": 0,
    "g4": 885,
    "total": 1011,
    "g1_pct": 12.46,
    "g3_pct": 0.0,
    "g4_pct": 87.54
  },
  {
    "site": "MLA",
    "mes": "2025-06",
    "tipo": "Longtail",
    "g1": 1511,
    "g3": 0,
    "g4": 599,
    "total": 2110,
    "g1_pct": 71.61,
    "g3_pct": 0.0,
    "g4_pct": 28.39
  },
  {
    "site": "MLA",
    "mes": "2025-06",
    "tipo": "SMB",
    "g1": 133,
    "g3": 0,
    "g4": 770,
    "total": 903,
    "g1_pct": 14.73,
    "g3_pct": 0.0,
    "g4_pct": 85.27
  },
  {
    "site": "MLA",
    "mes": "2025-07",
    "tipo": "Longtail",
    "g1": 1736,
    "g3": 0,
    "g4": 619,
    "total": 2355,
    "g1_pct": 73.72,
    "g3_pct": 0.0,
    "g4_pct": 26.28
  },
  {
    "site": "MLA",
    "mes": "2025-07",
    "tipo": "SMB",
    "g1": 191,
    "g3": 0,
    "g4": 901,
    "total": 1092,
    "g1_pct": 17.49,
    "g3_pct": 0.0,
    "g4_pct": 82.51
  },
  {
    "site": "MLA",
    "mes": "2025-08",
    "tipo": "Longtail",
    "g1": 1860,
    "g3": 0,
    "g4": 655,
    "total": 2515,
    "g1_pct": 73.96,
    "g3_pct": 0.0,
    "g4_pct": 26.04
  },
  {
    "site": "MLA",
    "mes": "2025-08",
    "tipo": "SMB",
    "g1": 130,
    "g3": 0,
    "g4": 812,
    "total": 942,
    "g1_pct": 13.8,
    "g3_pct": 0.0,
    "g4_pct": 86.2
  },
  {
    "site": "MLA",
    "mes": "2025-09",
    "tipo": "Longtail",
    "g1": 1665,
    "g3": 0,
    "g4": 879,
    "total": 2544,
    "g1_pct": 65.45,
    "g3_pct": 0.0,
    "g4_pct": 34.55
  },
  {
    "site": "MLA",
    "mes": "2025-09",
    "tipo": "SMB",
    "g1": 111,
    "g3": 0,
    "g4": 912,
    "total": 1023,
    "g1_pct": 10.85,
    "g3_pct": 0.0,
    "g4_pct": 89.15
  },
  {
    "site": "MLA",
    "mes": "2025-10",
    "tipo": "Longtail",
    "g1": 1632,
    "g3": 0,
    "g4": 1111,
    "total": 2743,
    "g1_pct": 59.5,
    "g3_pct": 0.0,
    "g4_pct": 40.5
  },
  {
    "site": "MLA",
    "mes": "2025-10",
    "tipo": "SMB",
    "g1": 112,
    "g3": 0,
    "g4": 994,
    "total": 1106,
    "g1_pct": 10.13,
    "g3_pct": 0.0,
    "g4_pct": 89.87
  },
  {
    "site": "MLA",
    "mes": "2025-11",
    "tipo": "Longtail",
    "g1": 2001,
    "g3": 0,
    "g4": 1176,
    "total": 3177,
    "g1_pct": 62.98,
    "g3_pct": 0.0,
    "g4_pct": 37.02
  },
  {
    "site": "MLA",
    "mes": "2025-11",
    "tipo": "SMB",
    "g1": 300,
    "g3": 0,
    "g4": 926,
    "total": 1226,
    "g1_pct": 24.47,
    "g3_pct": 0.0,
    "g4_pct": 75.53
  },
  {
    "site": "MLA",
    "mes": "2025-12",
    "tipo": "Longtail",
    "g1": 1371,
    "g3": 0,
    "g4": 2015,
    "total": 3386,
    "g1_pct": 40.49,
    "g3_pct": 0.0,
    "g4_pct": 59.51
  },
  {
    "site": "MLA",
    "mes": "2025-12",
    "tipo": "SMB",
    "g1": 199,
    "g3": 0,
    "g4": 1154,
    "total": 1353,
    "g1_pct": 14.71,
    "g3_pct": 0.0,
    "g4_pct": 85.29
  },
  {
    "site": "MLA",
    "mes": "2026-01",
    "tipo": "Longtail",
    "g1": 3039,
    "g3": 0,
    "g4": 1538,
    "total": 4577,
    "g1_pct": 66.4,
    "g3_pct": 0.0,
    "g4_pct": 33.6
  },
  {
    "site": "MLA",
    "mes": "2026-01",
    "tipo": "SMB",
    "g1": 233,
    "g3": 0,
    "g4": 1758,
    "total": 1991,
    "g1_pct": 11.7,
    "g3_pct": 0.0,
    "g4_pct": 88.3
  },
  {
    "site": "MLA",
    "mes": "2026-02",
    "tipo": "Longtail",
    "g1": 5078,
    "g3": 0,
    "g4": 2977,
    "total": 8055,
    "g1_pct": 63.04,
    "g3_pct": 0.0,
    "g4_pct": 36.96
  },
  {
    "site": "MLA",
    "mes": "2026-02",
    "tipo": "SMB",
    "g1": 1079,
    "g3": 0,
    "g4": 6913,
    "total": 7992,
    "g1_pct": 13.5,
    "g3_pct": 0.0,
    "g4_pct": 86.5
  },
  {
    "site": "MLA",
    "mes": "2026-03",
    "tipo": "Longtail",
    "g1": 2429,
    "g3": 0,
    "g4": 785,
    "total": 3214,
    "g1_pct": 75.58,
    "g3_pct": 0.0,
    "g4_pct": 24.42
  },
  {
    "site": "MLA",
    "mes": "2026-03",
    "tipo": "SMB",
    "g1": 712,
    "g3": 0,
    "g4": 4787,
    "total": 5499,
    "g1_pct": 12.95,
    "g3_pct": 0.0,
    "g4_pct": 87.05
  },
  {
    "site": "MLA",
    "mes": "2026-04",
    "tipo": "Longtail",
    "g1": 278,
    "g3": 0,
    "g4": 153,
    "total": 431,
    "g1_pct": 64.5,
    "g3_pct": 0.0,
    "g4_pct": 35.5
  },
  {
    "site": "MLA",
    "mes": "2026-04",
    "tipo": "SMB",
    "g1": 165,
    "g3": 0,
    "g4": 735,
    "total": 900,
    "g1_pct": 18.33,
    "g3_pct": 0.0,
    "g4_pct": 81.67
  },
  {
    "site": "MLB",
    "mes": "2025-01",
    "tipo": "Longtail",
    "g1": 40,
    "g3": 896,
    "g4": 22712,
    "total": 23648,
    "g1_pct": 0.17,
    "g3_pct": 3.79,
    "g4_pct": 96.04
  },
  {
    "site": "MLB",
    "mes": "2025-01",
    "tipo": "SMB",
    "g1": 0,
    "g3": 2228,
    "g4": 3775,
    "total": 6003,
    "g1_pct": 0.0,
    "g3_pct": 37.11,
    "g4_pct": 62.89
  },
  {
    "site": "MLB",
    "mes": "2025-02",
    "tipo": "Longtail",
    "g1": 317,
    "g3": 698,
    "g4": 21455,
    "total": 22470,
    "g1_pct": 1.41,
    "g3_pct": 3.11,
    "g4_pct": 95.48
  },
  {
    "site": "MLB",
    "mes": "2025-02",
    "tipo": "SMB",
    "g1": 0,
    "g3": 2054,
    "g4": 3591,
    "total": 5645,
    "g1_pct": 0.0,
    "g3_pct": 36.39,
    "g4_pct": 63.61
  },
  {
    "site": "MLB",
    "mes": "2025-03",
    "tipo": "Longtail",
    "g1": 1363,
    "g3": 740,
    "g4": 20483,
    "total": 22586,
    "g1_pct": 6.03,
    "g3_pct": 3.28,
    "g4_pct": 90.69
  },
  {
    "site": "MLB",
    "mes": "2025-03",
    "tipo": "SMB",
    "g1": 0,
    "g3": 2167,
    "g4": 4296,
    "total": 6463,
    "g1_pct": 0.0,
    "g3_pct": 33.53,
    "g4_pct": 66.47
  },
  {
    "site": "MLB",
    "mes": "2025-04",
    "tipo": "Longtail",
    "g1": 875,
    "g3": 806,
    "g4": 19936,
    "total": 21617,
    "g1_pct": 4.05,
    "g3_pct": 3.73,
    "g4_pct": 92.22
  },
  {
    "site": "MLB",
    "mes": "2025-04",
    "tipo": "SMB",
    "g1": 3,
    "g3": 2396,
    "g4": 4993,
    "total": 7392,
    "g1_pct": 0.04,
    "g3_pct": 32.41,
    "g4_pct": 67.55
  },
  {
    "site": "MLB",
    "mes": "2025-05",
    "tipo": "Longtail",
    "g1": 743,
    "g3": 812,
    "g4": 20316,
    "total": 21871,
    "g1_pct": 3.4,
    "g3_pct": 3.71,
    "g4_pct": 92.89
  },
  {
    "site": "MLB",
    "mes": "2025-05",
    "tipo": "SMB",
    "g1": 0,
    "g3": 2265,
    "g4": 4790,
    "total": 7055,
    "g1_pct": 0.0,
    "g3_pct": 32.1,
    "g4_pct": 67.9
  },
  {
    "site": "MLB",
    "mes": "2025-06",
    "tipo": "Longtail",
    "g1": 535,
    "g3": 776,
    "g4": 19280,
    "total": 20591,
    "g1_pct": 2.6,
    "g3_pct": 3.77,
    "g4_pct": 93.63
  },
  {
    "site": "MLB",
    "mes": "2025-06",
    "tipo": "SMB",
    "g1": 143,
    "g3": 2079,
    "g4": 4741,
    "total": 6963,
    "g1_pct": 2.05,
    "g3_pct": 29.86,
    "g4_pct": 68.09
  },
  {
    "site": "MLB",
    "mes": "2025-07",
    "tipo": "Longtail",
    "g1": 986,
    "g3": 754,
    "g4": 20228,
    "total": 21968,
    "g1_pct": 4.49,
    "g3_pct": 3.43,
    "g4_pct": 92.08
  },
  {
    "site": "MLB",
    "mes": "2025-07",
    "tipo": "SMB",
    "g1": 520,
    "g3": 2057,
    "g4": 5679,
    "total": 8256,
    "g1_pct": 6.3,
    "g3_pct": 24.92,
    "g4_pct": 68.79
  },
  {
    "site": "MLB",
    "mes": "2025-08",
    "tipo": "Longtail",
    "g1": 3455,
    "g3": 605,
    "g4": 18690,
    "total": 22750,
    "g1_pct": 15.19,
    "g3_pct": 2.66,
    "g4_pct": 82.15
  },
  {
    "site": "MLB",
    "mes": "2025-08",
    "tipo": "SMB",
    "g1": 687,
    "g3": 1790,
    "g4": 5725,
    "total": 8202,
    "g1_pct": 8.38,
    "g3_pct": 21.82,
    "g4_pct": 69.8
  },
  {
    "site": "MLB",
    "mes": "2025-09",
    "tipo": "Longtail",
    "g1": 4815,
    "g3": 508,
    "g4": 15225,
    "total": 20548,
    "g1_pct": 23.43,
    "g3_pct": 2.47,
    "g4_pct": 74.09
  },
  {
    "site": "MLB",
    "mes": "2025-09",
    "tipo": "SMB",
    "g1": 1038,
    "g3": 2555,
    "g4": 7508,
    "total": 11101,
    "g1_pct": 9.35,
    "g3_pct": 23.02,
    "g4_pct": 67.63
  },
  {
    "site": "MLB",
    "mes": "2025-10",
    "tipo": "Longtail",
    "g1": 5458,
    "g3": 589,
    "g4": 16098,
    "total": 22145,
    "g1_pct": 24.65,
    "g3_pct": 2.66,
    "g4_pct": 72.69
  },
  {
    "site": "MLB",
    "mes": "2025-10",
    "tipo": "SMB",
    "g1": 2035,
    "g3": 2277,
    "g4": 7585,
    "total": 11897,
    "g1_pct": 17.11,
    "g3_pct": 19.14,
    "g4_pct": 63.76
  },
  {
    "site": "MLB",
    "mes": "2025-11",
    "tipo": "Longtail",
    "g1": 3463,
    "g3": 484,
    "g4": 14661,
    "total": 18608,
    "g1_pct": 18.61,
    "g3_pct": 2.6,
    "g4_pct": 78.79
  },
  {
    "site": "MLB",
    "mes": "2025-11",
    "tipo": "SMB",
    "g1": 2457,
    "g3": 1671,
    "g4": 6447,
    "total": 10575,
    "g1_pct": 23.23,
    "g3_pct": 15.8,
    "g4_pct": 60.96
  },
  {
    "site": "MLB",
    "mes": "2025-12",
    "tipo": "Longtail",
    "g1": 2425,
    "g3": 318,
    "g4": 16785,
    "total": 19528,
    "g1_pct": 12.42,
    "g3_pct": 1.63,
    "g4_pct": 85.95
  },
  {
    "site": "MLB",
    "mes": "2025-12",
    "tipo": "SMB",
    "g1": 2454,
    "g3": 1557,
    "g4": 6535,
    "total": 10546,
    "g1_pct": 23.27,
    "g3_pct": 14.76,
    "g4_pct": 61.97
  },
  {
    "site": "MLB",
    "mes": "2026-01",
    "tipo": "Longtail",
    "g1": 4307,
    "g3": 295,
    "g4": 18701,
    "total": 23303,
    "g1_pct": 18.48,
    "g3_pct": 1.27,
    "g4_pct": 80.25
  },
  {
    "site": "MLB",
    "mes": "2026-01",
    "tipo": "SMB",
    "g1": 3379,
    "g3": 1834,
    "g4": 10170,
    "total": 15383,
    "g1_pct": 21.97,
    "g3_pct": 11.92,
    "g4_pct": 66.11
  },
  {
    "site": "MLB",
    "mes": "2026-02",
    "tipo": "Longtail",
    "g1": 3447,
    "g3": 225,
    "g4": 22646,
    "total": 26318,
    "g1_pct": 13.1,
    "g3_pct": 0.85,
    "g4_pct": 86.05
  },
  {
    "site": "MLB",
    "mes": "2026-02",
    "tipo": "SMB",
    "g1": 3176,
    "g3": 1680,
    "g4": 16056,
    "total": 20912,
    "g1_pct": 15.19,
    "g3_pct": 8.03,
    "g4_pct": 76.78
  },
  {
    "site": "MLB",
    "mes": "2026-03",
    "tipo": "Longtail",
    "g1": 3008,
    "g3": 192,
    "g4": 14989,
    "total": 18189,
    "g1_pct": 16.54,
    "g3_pct": 1.06,
    "g4_pct": 82.41
  },
  {
    "site": "MLB",
    "mes": "2026-03",
    "tipo": "SMB",
    "g1": 2921,
    "g3": 1395,
    "g4": 11417,
    "total": 15733,
    "g1_pct": 18.57,
    "g3_pct": 8.87,
    "g4_pct": 72.57
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "tipo": "Longtail",
    "g1": 321,
    "g3": 11,
    "g4": 1800,
    "total": 2132,
    "g1_pct": 15.06,
    "g3_pct": 0.52,
    "g4_pct": 84.43
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "tipo": "SMB",
    "g1": 807,
    "g3": 208,
    "g4": 1842,
    "total": 2857,
    "g1_pct": 28.25,
    "g3_pct": 7.28,
    "g4_pct": 64.47
  },
  {
    "site": "MLC",
    "mes": "2025-01",
    "tipo": "Longtail",
    "g1": 1,
    "g3": 0,
    "g4": 50,
    "total": 51,
    "g1_pct": 1.96,
    "g3_pct": 0.0,
    "g4_pct": 98.04
  },
  {
    "site": "MLC",
    "mes": "2025-02",
    "tipo": "Longtail",
    "g1": 0,
    "g3": 0,
    "g4": 53,
    "total": 53,
    "g1_pct": 0.0,
    "g3_pct": 0.0,
    "g4_pct": 100.0
  },
  {
    "site": "MLC",
    "mes": "2025-03",
    "tipo": "Longtail",
    "g1": 39,
    "g3": 0,
    "g4": 10,
    "total": 49,
    "g1_pct": 79.59,
    "g3_pct": 0.0,
    "g4_pct": 20.41
  },
  {
    "site": "MLC",
    "mes": "2025-04",
    "tipo": "Longtail",
    "g1": 35,
    "g3": 0,
    "g4": 11,
    "total": 46,
    "g1_pct": 76.09,
    "g3_pct": 0.0,
    "g4_pct": 23.91
  },
  {
    "site": "MLC",
    "mes": "2025-05",
    "tipo": "Longtail",
    "g1": 45,
    "g3": 0,
    "g4": 7,
    "total": 52,
    "g1_pct": 86.54,
    "g3_pct": 0.0,
    "g4_pct": 13.46
  },
  {
    "site": "MLC",
    "mes": "2025-06",
    "tipo": "Longtail",
    "g1": 63,
    "g3": 0,
    "g4": 14,
    "total": 77,
    "g1_pct": 81.82,
    "g3_pct": 0.0,
    "g4_pct": 18.18
  },
  {
    "site": "MLC",
    "mes": "2025-07",
    "tipo": "Longtail",
    "g1": 69,
    "g3": 0,
    "g4": 16,
    "total": 85,
    "g1_pct": 81.18,
    "g3_pct": 0.0,
    "g4_pct": 18.82
  },
  {
    "site": "MLC",
    "mes": "2025-08",
    "tipo": "Longtail",
    "g1": 93,
    "g3": 0,
    "g4": 19,
    "total": 112,
    "g1_pct": 83.04,
    "g3_pct": 0.0,
    "g4_pct": 16.96
  },
  {
    "site": "MLC",
    "mes": "2025-09",
    "tipo": "Longtail",
    "g1": 89,
    "g3": 0,
    "g4": 21,
    "total": 110,
    "g1_pct": 80.91,
    "g3_pct": 0.0,
    "g4_pct": 19.09
  },
  {
    "site": "MLC",
    "mes": "2025-10",
    "tipo": "Longtail",
    "g1": 106,
    "g3": 0,
    "g4": 24,
    "total": 130,
    "g1_pct": 81.54,
    "g3_pct": 0.0,
    "g4_pct": 18.46
  },
  {
    "site": "MLC",
    "mes": "2025-11",
    "tipo": "Longtail",
    "g1": 135,
    "g3": 0,
    "g4": 5,
    "total": 140,
    "g1_pct": 96.43,
    "g3_pct": 0.0,
    "g4_pct": 3.57
  },
  {
    "site": "MLC",
    "mes": "2025-11",
    "tipo": "SMB",
    "g1": 40,
    "g3": 0,
    "g4": 54,
    "total": 94,
    "g1_pct": 42.55,
    "g3_pct": 0.0,
    "g4_pct": 57.45
  },
  {
    "site": "MLC",
    "mes": "2025-12",
    "tipo": "Longtail",
    "g1": 41,
    "g3": 0,
    "g4": 7,
    "total": 48,
    "g1_pct": 85.42,
    "g3_pct": 0.0,
    "g4_pct": 14.58
  },
  {
    "site": "MLC",
    "mes": "2025-12",
    "tipo": "SMB",
    "g1": 142,
    "g3": 0,
    "g4": 233,
    "total": 375,
    "g1_pct": 37.87,
    "g3_pct": 0.0,
    "g4_pct": 62.13
  },
  {
    "site": "MLC",
    "mes": "2026-01",
    "tipo": "Longtail",
    "g1": 25,
    "g3": 0,
    "g4": 2,
    "total": 27,
    "g1_pct": 92.59,
    "g3_pct": 0.0,
    "g4_pct": 7.41
  },
  {
    "site": "MLC",
    "mes": "2026-01",
    "tipo": "SMB",
    "g1": 383,
    "g3": 0,
    "g4": 478,
    "total": 861,
    "g1_pct": 44.48,
    "g3_pct": 0.0,
    "g4_pct": 55.52
  },
  {
    "site": "MLC",
    "mes": "2026-02",
    "tipo": "Longtail",
    "g1": 79,
    "g3": 0,
    "g4": 3,
    "total": 82,
    "g1_pct": 96.34,
    "g3_pct": 0.0,
    "g4_pct": 3.66
  },
  {
    "site": "MLC",
    "mes": "2026-02",
    "tipo": "SMB",
    "g1": 184,
    "g3": 0,
    "g4": 287,
    "total": 471,
    "g1_pct": 39.07,
    "g3_pct": 0.0,
    "g4_pct": 60.93
  },
  {
    "site": "MLC",
    "mes": "2026-03",
    "tipo": "Longtail",
    "g1": 61,
    "g3": 0,
    "g4": 4,
    "total": 65,
    "g1_pct": 93.85,
    "g3_pct": 0.0,
    "g4_pct": 6.15
  },
  {
    "site": "MLC",
    "mes": "2026-03",
    "tipo": "SMB",
    "g1": 111,
    "g3": 0,
    "g4": 182,
    "total": 293,
    "g1_pct": 37.88,
    "g3_pct": 0.0,
    "g4_pct": 62.12
  },
  {
    "site": "MLC",
    "mes": "2026-04",
    "tipo": "Longtail",
    "g1": 15,
    "g3": 0,
    "g4": 5,
    "total": 20,
    "g1_pct": 75.0,
    "g3_pct": 0.0,
    "g4_pct": 25.0
  },
  {
    "site": "MLC",
    "mes": "2026-04",
    "tipo": "SMB",
    "g1": 15,
    "g3": 0,
    "g4": 55,
    "total": 70,
    "g1_pct": 21.43,
    "g3_pct": 0.0,
    "g4_pct": 78.57
  },
  {
    "site": "MLM",
    "mes": "2025-01",
    "tipo": "Longtail",
    "g1": 7,
    "g3": 0,
    "g4": 2066,
    "total": 2073,
    "g1_pct": 0.34,
    "g3_pct": 0.0,
    "g4_pct": 99.66
  },
  {
    "site": "MLM",
    "mes": "2025-01",
    "tipo": "SMB",
    "g1": 1,
    "g3": 0,
    "g4": 580,
    "total": 581,
    "g1_pct": 0.17,
    "g3_pct": 0.0,
    "g4_pct": 99.83
  },
  {
    "site": "MLM",
    "mes": "2025-02",
    "tipo": "Longtail",
    "g1": 75,
    "g3": 0,
    "g4": 1753,
    "total": 1828,
    "g1_pct": 4.1,
    "g3_pct": 0.0,
    "g4_pct": 95.9
  },
  {
    "site": "MLM",
    "mes": "2025-02",
    "tipo": "SMB",
    "g1": 1,
    "g3": 0,
    "g4": 586,
    "total": 587,
    "g1_pct": 0.17,
    "g3_pct": 0.0,
    "g4_pct": 99.83
  },
  {
    "site": "MLM",
    "mes": "2025-03",
    "tipo": "Longtail",
    "g1": 1092,
    "g3": 0,
    "g4": 1015,
    "total": 2107,
    "g1_pct": 51.83,
    "g3_pct": 0.0,
    "g4_pct": 48.17
  },
  {
    "site": "MLM",
    "mes": "2025-03",
    "tipo": "SMB",
    "g1": 85,
    "g3": 0,
    "g4": 932,
    "total": 1017,
    "g1_pct": 8.36,
    "g3_pct": 0.0,
    "g4_pct": 91.64
  },
  {
    "site": "MLM",
    "mes": "2025-04",
    "tipo": "Longtail",
    "g1": 767,
    "g3": 0,
    "g4": 1321,
    "total": 2088,
    "g1_pct": 36.73,
    "g3_pct": 0.0,
    "g4_pct": 63.27
  },
  {
    "site": "MLM",
    "mes": "2025-04",
    "tipo": "SMB",
    "g1": 58,
    "g3": 0,
    "g4": 1152,
    "total": 1210,
    "g1_pct": 4.79,
    "g3_pct": 0.0,
    "g4_pct": 95.21
  },
  {
    "site": "MLM",
    "mes": "2025-05",
    "tipo": "Longtail",
    "g1": 902,
    "g3": 0,
    "g4": 1161,
    "total": 2063,
    "g1_pct": 43.72,
    "g3_pct": 0.0,
    "g4_pct": 56.28
  },
  {
    "site": "MLM",
    "mes": "2025-05",
    "tipo": "SMB",
    "g1": 92,
    "g3": 0,
    "g4": 887,
    "total": 979,
    "g1_pct": 9.4,
    "g3_pct": 0.0,
    "g4_pct": 90.6
  },
  {
    "site": "MLM",
    "mes": "2025-06",
    "tipo": "Longtail",
    "g1": 1601,
    "g3": 0,
    "g4": 937,
    "total": 2538,
    "g1_pct": 63.08,
    "g3_pct": 0.0,
    "g4_pct": 36.92
  },
  {
    "site": "MLM",
    "mes": "2025-06",
    "tipo": "SMB",
    "g1": 204,
    "g3": 0,
    "g4": 922,
    "total": 1126,
    "g1_pct": 18.12,
    "g3_pct": 0.0,
    "g4_pct": 81.88
  },
  {
    "site": "MLM",
    "mes": "2025-07",
    "tipo": "Longtail",
    "g1": 1938,
    "g3": 0,
    "g4": 1219,
    "total": 3157,
    "g1_pct": 61.39,
    "g3_pct": 0.0,
    "g4_pct": 38.61
  },
  {
    "site": "MLM",
    "mes": "2025-07",
    "tipo": "SMB",
    "g1": 212,
    "g3": 0,
    "g4": 1394,
    "total": 1606,
    "g1_pct": 13.2,
    "g3_pct": 0.0,
    "g4_pct": 86.8
  },
  {
    "site": "MLM",
    "mes": "2025-08",
    "tipo": "Longtail",
    "g1": 1944,
    "g3": 0,
    "g4": 1229,
    "total": 3173,
    "g1_pct": 61.27,
    "g3_pct": 0.0,
    "g4_pct": 38.73
  },
  {
    "site": "MLM",
    "mes": "2025-08",
    "tipo": "SMB",
    "g1": 200,
    "g3": 0,
    "g4": 1367,
    "total": 1567,
    "g1_pct": 12.76,
    "g3_pct": 0.0,
    "g4_pct": 87.24
  },
  {
    "site": "MLM",
    "mes": "2025-09",
    "tipo": "Longtail",
    "g1": 1968,
    "g3": 0,
    "g4": 1213,
    "total": 3181,
    "g1_pct": 61.87,
    "g3_pct": 0.0,
    "g4_pct": 38.13
  },
  {
    "site": "MLM",
    "mes": "2025-09",
    "tipo": "SMB",
    "g1": 260,
    "g3": 0,
    "g4": 1443,
    "total": 1703,
    "g1_pct": 15.27,
    "g3_pct": 0.0,
    "g4_pct": 84.73
  },
  {
    "site": "MLM",
    "mes": "2025-10",
    "tipo": "Longtail",
    "g1": 1713,
    "g3": 0,
    "g4": 1745,
    "total": 3458,
    "g1_pct": 49.54,
    "g3_pct": 0.0,
    "g4_pct": 50.46
  },
  {
    "site": "MLM",
    "mes": "2025-10",
    "tipo": "SMB",
    "g1": 141,
    "g3": 0,
    "g4": 1908,
    "total": 2049,
    "g1_pct": 6.88,
    "g3_pct": 0.0,
    "g4_pct": 93.12
  },
  {
    "site": "MLM",
    "mes": "2025-11",
    "tipo": "Longtail",
    "g1": 1800,
    "g3": 0,
    "g4": 1709,
    "total": 3509,
    "g1_pct": 51.3,
    "g3_pct": 0.0,
    "g4_pct": 48.7
  },
  {
    "site": "MLM",
    "mes": "2025-11",
    "tipo": "SMB",
    "g1": 185,
    "g3": 0,
    "g4": 1942,
    "total": 2127,
    "g1_pct": 8.7,
    "g3_pct": 0.0,
    "g4_pct": 91.3
  },
  {
    "site": "MLM",
    "mes": "2025-12",
    "tipo": "Longtail",
    "g1": 1499,
    "g3": 0,
    "g4": 1830,
    "total": 3329,
    "g1_pct": 45.03,
    "g3_pct": 0.0,
    "g4_pct": 54.97
  },
  {
    "site": "MLM",
    "mes": "2025-12",
    "tipo": "SMB",
    "g1": 224,
    "g3": 0,
    "g4": 1693,
    "total": 1917,
    "g1_pct": 11.68,
    "g3_pct": 0.0,
    "g4_pct": 88.32
  },
  {
    "site": "MLM",
    "mes": "2026-01",
    "tipo": "Longtail",
    "g1": 2537,
    "g3": 0,
    "g4": 1987,
    "total": 4524,
    "g1_pct": 56.08,
    "g3_pct": 0.0,
    "g4_pct": 43.92
  },
  {
    "site": "MLM",
    "mes": "2026-01",
    "tipo": "SMB",
    "g1": 294,
    "g3": 0,
    "g4": 3680,
    "total": 3974,
    "g1_pct": 7.4,
    "g3_pct": 0.0,
    "g4_pct": 92.6
  },
  {
    "site": "MLM",
    "mes": "2026-02",
    "tipo": "Longtail",
    "g1": 3143,
    "g3": 0,
    "g4": 2666,
    "total": 5809,
    "g1_pct": 54.11,
    "g3_pct": 0.0,
    "g4_pct": 45.89
  },
  {
    "site": "MLM",
    "mes": "2026-02",
    "tipo": "SMB",
    "g1": 409,
    "g3": 0,
    "g4": 4118,
    "total": 4527,
    "g1_pct": 9.03,
    "g3_pct": 0.0,
    "g4_pct": 90.97
  },
  {
    "site": "MLM",
    "mes": "2026-03",
    "tipo": "Longtail",
    "g1": 2525,
    "g3": 0,
    "g4": 2109,
    "total": 4634,
    "g1_pct": 54.49,
    "g3_pct": 0.0,
    "g4_pct": 45.51
  },
  {
    "site": "MLM",
    "mes": "2026-03",
    "tipo": "SMB",
    "g1": 436,
    "g3": 0,
    "g4": 2319,
    "total": 2755,
    "g1_pct": 15.83,
    "g3_pct": 0.0,
    "g4_pct": 84.17
  },
  {
    "site": "MLM",
    "mes": "2026-04",
    "tipo": "Longtail",
    "g1": 468,
    "g3": 0,
    "g4": 342,
    "total": 810,
    "g1_pct": 57.78,
    "g3_pct": 0.0,
    "g4_pct": 42.22
  },
  {
    "site": "MLM",
    "mes": "2026-04",
    "tipo": "SMB",
    "g1": 158,
    "g3": 0,
    "g4": 319,
    "total": 477,
    "g1_pct": 33.12,
    "g3_pct": 0.0,
    "g4_pct": 66.88
  }
],

  // ────────────────────────────────────────────────────────
  // META MENSAL — Trajetória planejada de redução (MLB)
  // Pedidos/MAD = intenção (solicitação aberta)
  // Trocas/MAD  = conclusão (RSO_TRACKING_STATUS = SHIPPING_DELIVERED)
  // Fonte: Roadmap 2026 — DEZ/25 baseline → DEZ/26 target
  // ────────────────────────────────────────────────────────
  metaMensal: {
    MLB: [
      { mes:'2025-12', pedidos_mad:0.92, trocas_mad:0.66 },
      { mes:'2026-01', pedidos_mad:0.97, trocas_mad:0.72 },
      { mes:'2026-02', pedidos_mad:0.94, trocas_mad:0.70 },
      { mes:'2026-03', pedidos_mad:0.92, trocas_mad:0.69 },
      { mes:'2026-04', pedidos_mad:0.90, trocas_mad:0.68 },
      { mes:'2026-05', pedidos_mad:0.88, trocas_mad:0.67 },
      { mes:'2026-06', pedidos_mad:0.84, trocas_mad:0.64 },
      { mes:'2026-07', pedidos_mad:0.81, trocas_mad:0.63 },
      { mes:'2026-08', pedidos_mad:0.71, trocas_mad:0.56 },
      { mes:'2026-09', pedidos_mad:0.70, trocas_mad:0.55 },
      { mes:'2026-10', pedidos_mad:0.67, trocas_mad:0.53 },
      { mes:'2026-11', pedidos_mad:0.65, trocas_mad:0.51 },
      { mes:'2026-12', pedidos_mad:0.60, trocas_mad:0.50 },
    ],
  },

};
