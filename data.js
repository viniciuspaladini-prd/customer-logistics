// ============================================================
// DATA.JS — Fonte de dados do dashboard
// Atualizado: 2026-05-22 18:14 via BigQuery (google-cloud-bigquery)
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
    mes:      '2026-05',
    dias_base: 22,  // dias de dados disponíveis (extração 2026-05-22)
    dias_mes:  31,  // total de dias em março/26
  },

  // ────────────────────────────────────────────────────────
  // MONTHLY
  // ────────────────────────────────────────────────────────
  monthly: [
  {
    "site": "MLA",
    "mes": "2025-09",
    "qtd_trocas": 4125,
    "mad": 572187,
    "trocas_mad_pct": 0.7209,
    "delta_trocas": null,
    "delta_mad": null,
    "delta_pp": null
  },
  {
    "site": "MLA",
    "mes": "2025-10",
    "qtd_trocas": 4444,
    "mad": 586929,
    "trocas_mad_pct": 0.7572,
    "delta_trocas": 319,
    "delta_mad": 14742,
    "delta_pp": 0.0363
  },
  {
    "site": "MLA",
    "mes": "2025-11",
    "qtd_trocas": 5178,
    "mad": 582961,
    "trocas_mad_pct": 0.8882,
    "delta_trocas": 734,
    "delta_mad": -3968,
    "delta_pp": 0.131
  },
  {
    "site": "MLA",
    "mes": "2025-12",
    "qtd_trocas": 5582,
    "mad": 603557,
    "trocas_mad_pct": 0.9249,
    "delta_trocas": 404,
    "delta_mad": 20596,
    "delta_pp": 0.0367
  },
  {
    "site": "MLA",
    "mes": "2026-01",
    "qtd_trocas": 7773,
    "mad": 577959,
    "trocas_mad_pct": 1.3449,
    "delta_trocas": 2191,
    "delta_mad": -25598,
    "delta_pp": 0.42
  },
  {
    "site": "MLA",
    "mes": "2026-02",
    "qtd_trocas": 17280,
    "mad": 588978,
    "trocas_mad_pct": 2.9339,
    "delta_trocas": 9507,
    "delta_mad": 11019,
    "delta_pp": 1.589
  },
  {
    "site": "MLA",
    "mes": "2026-03",
    "qtd_trocas": 9452,
    "mad": 588101,
    "trocas_mad_pct": 1.6072,
    "delta_trocas": -7828,
    "delta_mad": -877,
    "delta_pp": -1.3267
  },
  {
    "site": "MLA",
    "mes": "2026-04",
    "qtd_trocas": 5854,
    "mad": 580099,
    "trocas_mad_pct": 1.0091,
    "delta_trocas": -3598,
    "delta_mad": -8002,
    "delta_pp": -0.5981
  },
  {
    "site": "MLA",
    "mes": "2026-05",
    "qtd_trocas": 4785,
    "mad": 540000,
    "trocas_mad_pct": 0.8861,
    "delta_trocas": -269,
    "delta_mad": -10000,
    "delta_pp": 0.1055,
    "parcial": false
  },
  {
    "site": "MLB",
    "mes": "2025-09",
    "qtd_trocas": 30221,
    "mad": 2769069,
    "trocas_mad_pct": 1.0914,
    "delta_trocas": null,
    "delta_mad": null,
    "delta_pp": null
  },
  {
    "site": "MLB",
    "mes": "2025-10",
    "qtd_trocas": 31390,
    "mad": 2772726,
    "trocas_mad_pct": 1.1321,
    "delta_trocas": 1169,
    "delta_mad": 3657,
    "delta_pp": 0.0407
  },
  {
    "site": "MLB",
    "mes": "2025-11",
    "qtd_trocas": 24237,
    "mad": 2720015,
    "trocas_mad_pct": 0.8911,
    "delta_trocas": -7153,
    "delta_mad": -52711,
    "delta_pp": -0.241
  },
  {
    "site": "MLB",
    "mes": "2025-12",
    "qtd_trocas": 28431,
    "mad": 2681127,
    "trocas_mad_pct": 1.0604,
    "delta_trocas": 4194,
    "delta_mad": -38888,
    "delta_pp": 0.1693
  },
  {
    "site": "MLB",
    "mes": "2026-01",
    "qtd_trocas": 29763,
    "mad": 2598760,
    "trocas_mad_pct": 1.1453,
    "delta_trocas": 1332,
    "delta_mad": -82367,
    "delta_pp": 0.0849
  },
  {
    "site": "MLB",
    "mes": "2026-02",
    "qtd_trocas": 26408,
    "mad": 2578883,
    "trocas_mad_pct": 1.024,
    "delta_trocas": -3355,
    "delta_mad": -19877,
    "delta_pp": -0.1213
  },
  {
    "site": "MLB",
    "mes": "2026-03",
    "qtd_trocas": 25670,
    "mad": 2617547,
    "trocas_mad_pct": 0.9807,
    "delta_trocas": -738,
    "delta_mad": 38664,
    "delta_pp": -0.0433
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "qtd_trocas": 22854,
    "mad": 2588587,
    "trocas_mad_pct": 0.8829,
    "delta_trocas": -2816,
    "delta_mad": -28960,
    "delta_pp": -0.0978
  },
  {
    "site": "MLB",
    "mes": "2026-05",
    "qtd_trocas": 24036,
    "mad": 2590000,
    "trocas_mad_pct": 0.9281,
    "delta_trocas": 3045,
    "delta_mad": 0,
    "delta_pp": 0.1573,
    "parcial": false
  },
  {
    "site": "MLC",
    "mes": "2025-09",
    "qtd_trocas": 933,
    "mad": 135651,
    "trocas_mad_pct": 0.6878,
    "delta_trocas": null,
    "delta_mad": null,
    "delta_pp": null
  },
  {
    "site": "MLC",
    "mes": "2025-10",
    "qtd_trocas": 1246,
    "mad": 144250,
    "trocas_mad_pct": 0.8638,
    "delta_trocas": 313,
    "delta_mad": 8599,
    "delta_pp": 0.176
  },
  {
    "site": "MLC",
    "mes": "2025-11",
    "qtd_trocas": 1376,
    "mad": 147445,
    "trocas_mad_pct": 0.9332,
    "delta_trocas": 130,
    "delta_mad": 3195,
    "delta_pp": 0.0694
  },
  {
    "site": "MLC",
    "mes": "2025-12",
    "qtd_trocas": 1511,
    "mad": 157948,
    "trocas_mad_pct": 0.9566,
    "delta_trocas": 135,
    "delta_mad": 10503,
    "delta_pp": 0.0234
  },
  {
    "site": "MLC",
    "mes": "2026-01",
    "qtd_trocas": 1928,
    "mad": 158325,
    "trocas_mad_pct": 1.2177,
    "delta_trocas": 417,
    "delta_mad": 377,
    "delta_pp": 0.2611
  },
  {
    "site": "MLC",
    "mes": "2026-02",
    "qtd_trocas": 1548,
    "mad": 162409,
    "trocas_mad_pct": 0.9531,
    "delta_trocas": -380,
    "delta_mad": 4084,
    "delta_pp": -0.2646
  },
  {
    "site": "MLC",
    "mes": "2026-03",
    "qtd_trocas": 1571,
    "mad": 169920,
    "trocas_mad_pct": 0.9246,
    "delta_trocas": 23,
    "delta_mad": 7511,
    "delta_pp": -0.0285
  },
  {
    "site": "MLC",
    "mes": "2026-04",
    "qtd_trocas": 1542,
    "mad": 174601,
    "trocas_mad_pct": 0.8832,
    "delta_trocas": -29,
    "delta_mad": 4681,
    "delta_pp": -0.0414
  },
  {
    "site": "MLC",
    "mes": "2026-05",
    "qtd_trocas": 1618,
    "mad": 162000,
    "trocas_mad_pct": 0.9988,
    "delta_trocas": 76,
    "delta_mad": -9278,
    "delta_pp": 0.2129,
    "parcial": false
  },
  {
    "site": "MLM",
    "mes": "2025-09",
    "qtd_trocas": 6505,
    "mad": 959191,
    "trocas_mad_pct": 0.6782,
    "delta_trocas": null,
    "delta_mad": null,
    "delta_pp": null
  },
  {
    "site": "MLM",
    "mes": "2025-10",
    "qtd_trocas": 7406,
    "mad": 1016303,
    "trocas_mad_pct": 0.7287,
    "delta_trocas": 901,
    "delta_mad": 57112,
    "delta_pp": 0.0505
  },
  {
    "site": "MLM",
    "mes": "2025-11",
    "qtd_trocas": 7507,
    "mad": 1082144,
    "trocas_mad_pct": 0.6937,
    "delta_trocas": 101,
    "delta_mad": 65841,
    "delta_pp": -0.035
  },
  {
    "site": "MLM",
    "mes": "2025-12",
    "qtd_trocas": 7160,
    "mad": 1128173,
    "trocas_mad_pct": 0.6347,
    "delta_trocas": -347,
    "delta_mad": 46029,
    "delta_pp": -0.059
  },
  {
    "site": "MLM",
    "mes": "2026-01",
    "qtd_trocas": 10794,
    "mad": 1141996,
    "trocas_mad_pct": 0.9452,
    "delta_trocas": 3634,
    "delta_mad": 13823,
    "delta_pp": 0.3105
  },
  {
    "site": "MLM",
    "mes": "2026-02",
    "qtd_trocas": 12407,
    "mad": 1189700,
    "trocas_mad_pct": 1.0429,
    "delta_trocas": 1613,
    "delta_mad": 47704,
    "delta_pp": 0.0977
  },
  {
    "site": "MLM",
    "mes": "2026-03",
    "qtd_trocas": 9544,
    "mad": 1259947,
    "trocas_mad_pct": 0.7575,
    "delta_trocas": -2863,
    "delta_mad": 70247,
    "delta_pp": -0.2854
  },
  {
    "site": "MLM",
    "mes": "2026-04",
    "qtd_trocas": 9700,
    "mad": 1271291,
    "trocas_mad_pct": 0.763,
    "delta_trocas": 156,
    "delta_mad": 11344,
    "delta_pp": 0.0055
  },
  {
    "site": "MLM",
    "mes": "2026-05",
    "qtd_trocas": 11185,
    "mad": 1290000,
    "trocas_mad_pct": 0.8670,
    "delta_trocas": 1485,
    "delta_mad": 77660,
    "delta_pp": 0.1279,
    "parcial": false
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
    "qtd_delivered": 3953,
    "mad": 617263,
    "delivered_mad_pct": 0.6404
  },
  {
    "site": "MLA",
    "mes": "2026-01",
    "qtd_delivered": 5692,
    "mad": 590570,
    "delivered_mad_pct": 0.9638
  },
  {
    "site": "MLA",
    "mes": "2026-02",
    "qtd_delivered": 13355,
    "mad": 601142,
    "delivered_mad_pct": 2.2216
  },
  {
    "site": "MLA",
    "mes": "2026-03",
    "qtd_delivered": 6610,
    "mad": 524055,
    "delivered_mad_pct": 1.2613
  },
  {
    "site": "MLA",
    "mes": "2026-04",
    "qtd_delivered": 4286,
    "mad": null,
    "delivered_mad_pct": null
  },
  {
    "site": "MLA",
    "mes": "2026-05",
    "qtd_delivered": 2676,
    "mad": null,
    "delivered_mad_pct": null
  },
  {
    "site": "MLB",
    "mes": "2025-09",
    "qtd_delivered": 20018,
    "mad": 2779021,
    "delivered_mad_pct": 0.7203
  },
  {
    "site": "MLB",
    "mes": "2025-10",
    "qtd_delivered": 20755,
    "mad": 2782565,
    "delivered_mad_pct": 0.7459
  },
  {
    "site": "MLB",
    "mes": "2025-11",
    "qtd_delivered": 16535,
    "mad": 2729381,
    "delivered_mad_pct": 0.6058
  },
  {
    "site": "MLB",
    "mes": "2025-12",
    "qtd_delivered": 17469,
    "mad": 2690341,
    "delivered_mad_pct": 0.6493
  },
  {
    "site": "MLB",
    "mes": "2026-01",
    "qtd_delivered": 20495,
    "mad": 2607538,
    "delivered_mad_pct": 0.786
  },
  {
    "site": "MLB",
    "mes": "2026-02",
    "qtd_delivered": 18308,
    "mad": 2587550,
    "delivered_mad_pct": 0.7075
  },
  {
    "site": "MLB",
    "mes": "2026-03",
    "qtd_delivered": 16696,
    "mad": 2237382,
    "delivered_mad_pct": 0.7462
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "qtd_delivered": 14186,
    "mad": null,
    "delivered_mad_pct": null
  },
  {
    "site": "MLB",
    "mes": "2026-05",
    "qtd_delivered": 7802,
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
    "qtd_delivered": 758,
    "mad": 147643,
    "delivered_mad_pct": 0.5134
  },
  {
    "site": "MLC",
    "mes": "2025-11",
    "qtd_delivered": 918,
    "mad": 149295,
    "delivered_mad_pct": 0.6149
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
    "qtd_delivered": 1222,
    "mad": 164417,
    "delivered_mad_pct": 0.7432
  },
  {
    "site": "MLC",
    "mes": "2026-03",
    "qtd_delivered": 1215,
    "mad": 156844,
    "delivered_mad_pct": 0.7747
  },
  {
    "site": "MLC",
    "mes": "2026-04",
    "qtd_delivered": 1215,
    "mad": null,
    "delivered_mad_pct": null
  },
  {
    "site": "MLC",
    "mes": "2026-05",
    "qtd_delivered": 1003,
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
    "qtd_delivered": 6822,
    "mad": 1186377,
    "delivered_mad_pct": 0.575
  },
  {
    "site": "MLM",
    "mes": "2026-02",
    "qtd_delivered": 8862,
    "mad": 1236011,
    "delivered_mad_pct": 0.717
  },
  {
    "site": "MLM",
    "mes": "2026-03",
    "qtd_delivered": 6936,
    "mad": 1120762,
    "delivered_mad_pct": 0.6189
  },
  {
    "site": "MLM",
    "mes": "2026-04",
    "qtd_delivered": 6711,
    "mad": null,
    "delivered_mad_pct": null
  },
  {
    "site": "MLM",
    "mes": "2026-05",
    "qtd_delivered": 4875,
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
    "qtd_trocas": 16701,
    "mad": null,
    "trocas_mad_pct": null,
    "pct_trocas_no_mes": 55.2
  },
  {
    "site": "MLB",
    "mes": "2025-09",
    "device_canonical": "Point Pro 2",
    "familia": "OUTRO",
    "qtd_trocas": 9085,
    "mad": 762864,
    "trocas_mad_pct": 1.1909,
    "pct_trocas_no_mes": 30.0
  },
  {
    "site": "MLB",
    "mes": "2025-09",
    "device_canonical": "Point Smart 2",
    "familia": "OUTRO",
    "qtd_trocas": 2836,
    "mad": 332069,
    "trocas_mad_pct": 0.854,
    "pct_trocas_no_mes": 9.4
  },
  {
    "site": "MLB",
    "mes": "2025-09",
    "device_canonical": "Point Pro 3",
    "familia": "OUTRO",
    "qtd_trocas": 1053,
    "mad": 231439,
    "trocas_mad_pct": 0.455,
    "pct_trocas_no_mes": 3.5
  },
  {
    "site": "MLB",
    "mes": "2025-09",
    "device_canonical": "Point MINI",
    "familia": "MINI",
    "qtd_trocas": 322,
    "mad": 274600,
    "trocas_mad_pct": 0.1173,
    "pct_trocas_no_mes": 1.1
  },
  {
    "site": "MLB",
    "mes": "2025-09",
    "device_canonical": "Point Mini NFC",
    "familia": "OUTRO",
    "qtd_trocas": 94,
    "mad": 121982,
    "trocas_mad_pct": 0.0771,
    "pct_trocas_no_mes": 0.3
  },
  {
    "site": "MLB",
    "mes": "2025-09",
    "device_canonical": "Point Mini NFC 1",
    "familia": "OUTRO",
    "qtd_trocas": 67,
    "mad": 284808,
    "trocas_mad_pct": 0.0235,
    "pct_trocas_no_mes": 0.2
  },
  {
    "site": "MLB",
    "mes": "2025-09",
    "device_canonical": "Point AIR 2",
    "familia": "AIR",
    "qtd_trocas": 50,
    "mad": 11869,
    "trocas_mad_pct": 0.4213,
    "pct_trocas_no_mes": 0.2
  },
  {
    "site": "MLB",
    "mes": "2025-09",
    "device_canonical": "Undefined",
    "familia": "OUTRO",
    "qtd_trocas": 17,
    "mad": 7850,
    "trocas_mad_pct": 0.2166,
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
    "device_canonical": "Point Smart",
    "familia": "OUTRO",
    "qtd_trocas": 2,
    "mad": 274568,
    "trocas_mad_pct": 0.0007,
    "pct_trocas_no_mes": null
  },
  {
    "site": "MLB",
    "mes": "2025-09",
    "device_canonical": "Point Smart 2 N950",
    "familia": "OUTRO",
    "qtd_trocas": 2,
    "mad": 1243,
    "trocas_mad_pct": 0.1609,
    "pct_trocas_no_mes": null
  },
  {
    "site": "MLB",
    "mes": "2025-10",
    "device_canonical": null,
    "familia": "OUTRO",
    "qtd_trocas": 17048,
    "mad": null,
    "trocas_mad_pct": null,
    "pct_trocas_no_mes": 54.3
  },
  {
    "site": "MLB",
    "mes": "2025-10",
    "device_canonical": "Point Pro 2",
    "familia": "OUTRO",
    "qtd_trocas": 8098,
    "mad": 731907,
    "trocas_mad_pct": 1.1064,
    "pct_trocas_no_mes": 25.8
  },
  {
    "site": "MLB",
    "mes": "2025-10",
    "device_canonical": "Point Smart 2",
    "familia": "OUTRO",
    "qtd_trocas": 4462,
    "mad": 362035,
    "trocas_mad_pct": 1.2325,
    "pct_trocas_no_mes": 14.2
  },
  {
    "site": "MLB",
    "mes": "2025-10",
    "device_canonical": "Point Pro 3",
    "familia": "OUTRO",
    "qtd_trocas": 1040,
    "mad": 282922,
    "trocas_mad_pct": 0.3676,
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
    "qtd_trocas": 142,
    "mad": 116869,
    "trocas_mad_pct": 0.1215,
    "pct_trocas_no_mes": 0.5
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
    "mad": 274621,
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
    "mad": 1196,
    "trocas_mad_pct": 0.2508,
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
    "device_canonical": "Point Smart",
    "familia": "OUTRO",
    "qtd_trocas": 1,
    "mad": 260589,
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
    "qtd_trocas": 11743,
    "mad": null,
    "trocas_mad_pct": null,
    "pct_trocas_no_mes": 48.4
  },
  {
    "site": "MLB",
    "mes": "2025-11",
    "device_canonical": "Point Pro 2",
    "familia": "OUTRO",
    "qtd_trocas": 7153,
    "mad": 694524,
    "trocas_mad_pct": 1.0299,
    "pct_trocas_no_mes": 29.5
  },
  {
    "site": "MLB",
    "mes": "2025-11",
    "device_canonical": "Point Smart 2",
    "familia": "OUTRO",
    "qtd_trocas": 3543,
    "mad": 389121,
    "trocas_mad_pct": 0.9105,
    "pct_trocas_no_mes": 14.6
  },
  {
    "site": "MLB",
    "mes": "2025-11",
    "device_canonical": "Point Pro 3",
    "familia": "OUTRO",
    "qtd_trocas": 1026,
    "mad": 313829,
    "trocas_mad_pct": 0.3269,
    "pct_trocas_no_mes": 4.2
  },
  {
    "site": "MLB",
    "mes": "2025-11",
    "device_canonical": "Point MINI",
    "familia": "MINI",
    "qtd_trocas": 370,
    "mad": 242666,
    "trocas_mad_pct": 0.1525,
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
    "qtd_trocas": 115,
    "mad": 108609,
    "trocas_mad_pct": 0.1059,
    "pct_trocas_no_mes": 0.5
  },
  {
    "site": "MLB",
    "mes": "2025-11",
    "device_canonical": "Point Mini NFC 1",
    "familia": "OUTRO",
    "qtd_trocas": 80,
    "mad": 259404,
    "trocas_mad_pct": 0.0308,
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
    "qtd_trocas": 15553,
    "mad": null,
    "trocas_mad_pct": null,
    "pct_trocas_no_mes": 54.7
  },
  {
    "site": "MLB",
    "mes": "2025-12",
    "device_canonical": "Point Pro 2",
    "familia": "OUTRO",
    "qtd_trocas": 7436,
    "mad": 666568,
    "trocas_mad_pct": 1.1156,
    "pct_trocas_no_mes": 26.1
  },
  {
    "site": "MLB",
    "mes": "2025-12",
    "device_canonical": "Point Smart 2",
    "familia": "OUTRO",
    "qtd_trocas": 3816,
    "mad": 413761,
    "trocas_mad_pct": 0.9223,
    "pct_trocas_no_mes": 13.4
  },
  {
    "site": "MLB",
    "mes": "2025-12",
    "device_canonical": "Point Pro 3",
    "familia": "OUTRO",
    "qtd_trocas": 994,
    "mad": 335134,
    "trocas_mad_pct": 0.2966,
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
    "mad": 103016,
    "trocas_mad_pct": 0.098,
    "pct_trocas_no_mes": 0.4
  },
  {
    "site": "MLB",
    "mes": "2025-12",
    "device_canonical": "Point Mini NFC 1",
    "familia": "OUTRO",
    "qtd_trocas": 67,
    "mad": 247543,
    "trocas_mad_pct": 0.0271,
    "pct_trocas_no_mes": 0.2
  },
  {
    "site": "MLB",
    "mes": "2025-12",
    "device_canonical": "Undefined",
    "familia": "OUTRO",
    "qtd_trocas": 20,
    "mad": 5852,
    "trocas_mad_pct": 0.3418,
    "pct_trocas_no_mes": 0.1
  },
  {
    "site": "MLB",
    "mes": "2025-12",
    "device_canonical": "Point Smart",
    "familia": "OUTRO",
    "qtd_trocas": 6,
    "mad": 234496,
    "trocas_mad_pct": 0.0026,
    "pct_trocas_no_mes": null
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
    "mad": 1116,
    "trocas_mad_pct": 0.0896,
    "pct_trocas_no_mes": null
  },
  {
    "site": "MLB",
    "mes": "2026-01",
    "device_canonical": null,
    "familia": "OUTRO",
    "qtd_trocas": 14984,
    "mad": null,
    "trocas_mad_pct": null,
    "pct_trocas_no_mes": 50.3
  },
  {
    "site": "MLB",
    "mes": "2026-01",
    "device_canonical": "Point Pro 2",
    "familia": "OUTRO",
    "qtd_trocas": 8048,
    "mad": 624296,
    "trocas_mad_pct": 1.2891,
    "pct_trocas_no_mes": 27.0
  },
  {
    "site": "MLB",
    "mes": "2026-01",
    "device_canonical": "Point Smart 2",
    "familia": "OUTRO",
    "qtd_trocas": 4732,
    "mad": 437412,
    "trocas_mad_pct": 1.0818,
    "pct_trocas_no_mes": 15.9
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
    "qtd_trocas": 357,
    "mad": 203924,
    "trocas_mad_pct": 0.1751,
    "pct_trocas_no_mes": 1.2
  },
  {
    "site": "MLB",
    "mes": "2026-01",
    "device_canonical": "Point AIR 2",
    "familia": "AIR",
    "qtd_trocas": 232,
    "mad": 42487,
    "trocas_mad_pct": 0.546,
    "pct_trocas_no_mes": 0.8
  },
  {
    "site": "MLB",
    "mes": "2026-01",
    "device_canonical": "Point Mini NFC",
    "familia": "OUTRO",
    "qtd_trocas": 138,
    "mad": 92912,
    "trocas_mad_pct": 0.1485,
    "pct_trocas_no_mes": 0.5
  },
  {
    "site": "MLB",
    "mes": "2026-01",
    "device_canonical": "Point Mini NFC 1",
    "familia": "OUTRO",
    "qtd_trocas": 62,
    "mad": 225109,
    "trocas_mad_pct": 0.0275,
    "pct_trocas_no_mes": 0.2
  },
  {
    "site": "MLB",
    "mes": "2026-01",
    "device_canonical": "Undefined",
    "familia": "OUTRO",
    "qtd_trocas": 18,
    "mad": 5606,
    "trocas_mad_pct": 0.3211,
    "pct_trocas_no_mes": 0.1
  },
  {
    "site": "MLB",
    "mes": "2026-01",
    "device_canonical": "Point Smart",
    "familia": "OUTRO",
    "qtd_trocas": 9,
    "mad": 218493,
    "trocas_mad_pct": 0.0041,
    "pct_trocas_no_mes": null
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
    "device_canonical": "Point Smart 2 N950",
    "familia": "OUTRO",
    "qtd_trocas": 4,
    "mad": 1072,
    "trocas_mad_pct": 0.3731,
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
    "mes": "2026-02",
    "device_canonical": null,
    "familia": "OUTRO",
    "qtd_trocas": 13738,
    "mad": null,
    "trocas_mad_pct": null,
    "pct_trocas_no_mes": 51.9
  },
  {
    "site": "MLB",
    "mes": "2026-02",
    "device_canonical": "Point Pro 2",
    "familia": "OUTRO",
    "qtd_trocas": 6566,
    "mad": 598312,
    "trocas_mad_pct": 1.0974,
    "pct_trocas_no_mes": 24.8
  },
  {
    "site": "MLB",
    "mes": "2026-02",
    "device_canonical": "Point Smart 2",
    "familia": "OUTRO",
    "qtd_trocas": 4224,
    "mad": 460266,
    "trocas_mad_pct": 0.9177,
    "pct_trocas_no_mes": 16.0
  },
  {
    "site": "MLB",
    "mes": "2026-02",
    "device_canonical": "Point Pro 3",
    "familia": "OUTRO",
    "qtd_trocas": 992,
    "mad": 392498,
    "trocas_mad_pct": 0.2527,
    "pct_trocas_no_mes": 3.8
  },
  {
    "site": "MLB",
    "mes": "2026-02",
    "device_canonical": "Point AIR 2",
    "familia": "AIR",
    "qtd_trocas": 370,
    "mad": 53678,
    "trocas_mad_pct": 0.6893,
    "pct_trocas_no_mes": 1.4
  },
  {
    "site": "MLB",
    "mes": "2026-02",
    "device_canonical": "Point MINI",
    "familia": "MINI",
    "qtd_trocas": 300,
    "mad": 189232,
    "trocas_mad_pct": 0.1585,
    "pct_trocas_no_mes": 1.1
  },
  {
    "site": "MLB",
    "mes": "2026-02",
    "device_canonical": "Point Mini NFC",
    "familia": "OUTRO",
    "qtd_trocas": 128,
    "mad": 86742,
    "trocas_mad_pct": 0.1476,
    "pct_trocas_no_mes": 0.5
  },
  {
    "site": "MLB",
    "mes": "2026-02",
    "device_canonical": "Point Mini NFC 1",
    "familia": "OUTRO",
    "qtd_trocas": 92,
    "mad": 213222,
    "trocas_mad_pct": 0.0431,
    "pct_trocas_no_mes": 0.3
  },
  {
    "site": "MLB",
    "mes": "2026-02",
    "device_canonical": "Undefined",
    "familia": "OUTRO",
    "qtd_trocas": 15,
    "mad": 5523,
    "trocas_mad_pct": 0.2716,
    "pct_trocas_no_mes": 0.1
  },
  {
    "site": "MLB",
    "mes": "2026-02",
    "device_canonical": "Point Smart 2 N950",
    "familia": "OUTRO",
    "qtd_trocas": 10,
    "mad": 1029,
    "trocas_mad_pct": 0.9718,
    "pct_trocas_no_mes": null
  },
  {
    "site": "MLB",
    "mes": "2026-02",
    "device_canonical": "Point Smart",
    "familia": "OUTRO",
    "qtd_trocas": 7,
    "mad": 206980,
    "trocas_mad_pct": 0.0034,
    "pct_trocas_no_mes": null
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
    "mes": "2026-03",
    "device_canonical": null,
    "familia": "OUTRO",
    "qtd_trocas": 12656,
    "mad": null,
    "trocas_mad_pct": null,
    "pct_trocas_no_mes": 49.2
  },
  {
    "site": "MLB",
    "mes": "2026-03",
    "device_canonical": "Point Pro 2",
    "familia": "OUTRO",
    "qtd_trocas": 6665,
    "mad": 579916,
    "trocas_mad_pct": 1.1493,
    "pct_trocas_no_mes": 25.9
  },
  {
    "site": "MLB",
    "mes": "2026-03",
    "device_canonical": "Point Smart 2",
    "familia": "OUTRO",
    "qtd_trocas": 4312,
    "mad": 485307,
    "trocas_mad_pct": 0.8885,
    "pct_trocas_no_mes": 16.8
  },
  {
    "site": "MLB",
    "mes": "2026-03",
    "device_canonical": "Point Pro 3",
    "familia": "OUTRO",
    "qtd_trocas": 1107,
    "mad": 428588,
    "trocas_mad_pct": 0.2583,
    "pct_trocas_no_mes": 4.3
  },
  {
    "site": "MLB",
    "mes": "2026-03",
    "device_canonical": "Point AIR 2",
    "familia": "AIR",
    "qtd_trocas": 379,
    "mad": 61141,
    "trocas_mad_pct": 0.6199,
    "pct_trocas_no_mes": 1.5
  },
  {
    "site": "MLB",
    "mes": "2026-03",
    "device_canonical": "Point MINI",
    "familia": "MINI",
    "qtd_trocas": 316,
    "mad": 186444,
    "trocas_mad_pct": 0.1695,
    "pct_trocas_no_mes": 1.2
  },
  {
    "site": "MLB",
    "mes": "2026-03",
    "device_canonical": "Point Mini NFC 1",
    "familia": "OUTRO",
    "qtd_trocas": 133,
    "mad": 212657,
    "trocas_mad_pct": 0.0625,
    "pct_trocas_no_mes": 0.5
  },
  {
    "site": "MLB",
    "mes": "2026-03",
    "device_canonical": "Point Mini NFC",
    "familia": "OUTRO",
    "qtd_trocas": 118,
    "mad": 85635,
    "trocas_mad_pct": 0.1378,
    "pct_trocas_no_mes": 0.5
  },
  {
    "site": "MLB",
    "mes": "2026-03",
    "device_canonical": "Undefined",
    "familia": "OUTRO",
    "qtd_trocas": 24,
    "mad": 5610,
    "trocas_mad_pct": 0.4278,
    "pct_trocas_no_mes": 0.1
  },
  {
    "site": "MLB",
    "mes": "2026-03",
    "device_canonical": "Point Smart 2 N950",
    "familia": "OUTRO",
    "qtd_trocas": 12,
    "mad": 1021,
    "trocas_mad_pct": 1.1753,
    "pct_trocas_no_mes": null
  },
  {
    "site": "MLB",
    "mes": "2026-03",
    "device_canonical": "Point Smart",
    "familia": "OUTRO",
    "qtd_trocas": 6,
    "mad": 199746,
    "trocas_mad_pct": 0.003,
    "pct_trocas_no_mes": null
  },
  {
    "site": "MLB",
    "mes": "2026-03",
    "device_canonical": "Point Mini (ME30S)",
    "familia": "OUTRO",
    "qtd_trocas": 5,
    "mad": 11906,
    "trocas_mad_pct": 0.042,
    "pct_trocas_no_mes": null
  },
  {
    "site": "MLB",
    "mes": "2026-03",
    "device_canonical": "Point Mini ME30NFC",
    "familia": "OUTRO",
    "qtd_trocas": 2,
    "mad": 5366,
    "trocas_mad_pct": 0.0373,
    "pct_trocas_no_mes": null
  },
  {
    "site": "MLB",
    "mes": "2026-03",
    "device_canonical": "Point Air",
    "familia": "OUTRO",
    "qtd_trocas": 1,
    "mad": 184677,
    "trocas_mad_pct": 0.0005,
    "pct_trocas_no_mes": null
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "device_canonical": null,
    "familia": "OUTRO",
    "qtd_trocas": 11232,
    "mad": null,
    "trocas_mad_pct": null,
    "pct_trocas_no_mes": 49.0
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "device_canonical": "Point Pro 2",
    "familia": "OUTRO",
    "qtd_trocas": 5611,
    "mad": 556286,
    "trocas_mad_pct": 1.0087,
    "pct_trocas_no_mes": 24.5
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "device_canonical": "Point Smart 2",
    "familia": "OUTRO",
    "qtd_trocas": 4163,
    "mad": 502077,
    "trocas_mad_pct": 0.8292,
    "pct_trocas_no_mes": 18.2
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "device_canonical": "Point Pro 3",
    "familia": "OUTRO",
    "qtd_trocas": 902,
    "mad": 452985,
    "trocas_mad_pct": 0.1991,
    "pct_trocas_no_mes": 3.9
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "device_canonical": "Point AIR 2",
    "familia": "AIR",
    "qtd_trocas": 378,
    "mad": 66976,
    "trocas_mad_pct": 0.5644,
    "pct_trocas_no_mes": 1.7
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "device_canonical": "Point MINI",
    "familia": "MINI",
    "qtd_trocas": 328,
    "mad": 173763,
    "trocas_mad_pct": 0.1888,
    "pct_trocas_no_mes": 1.4
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "device_canonical": "Point Mini NFC 1",
    "familia": "OUTRO",
    "qtd_trocas": 132,
    "mad": 201172,
    "trocas_mad_pct": 0.0656,
    "pct_trocas_no_mes": 0.6
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "device_canonical": "Point Mini NFC",
    "familia": "OUTRO",
    "qtd_trocas": 116,
    "mad": 80671,
    "trocas_mad_pct": 0.1438,
    "pct_trocas_no_mes": 0.5
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "device_canonical": "Undefined",
    "familia": "OUTRO",
    "qtd_trocas": 16,
    "mad": 5462,
    "trocas_mad_pct": 0.2929,
    "pct_trocas_no_mes": 0.1
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "device_canonical": "Point Mini (ME30S)",
    "familia": "OUTRO",
    "qtd_trocas": 9,
    "mad": 11116,
    "trocas_mad_pct": 0.081,
    "pct_trocas_no_mes": null
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "device_canonical": "Point Smart 2 N950",
    "familia": "OUTRO",
    "qtd_trocas": 6,
    "mad": 967,
    "trocas_mad_pct": 0.6205,
    "pct_trocas_no_mes": null
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "device_canonical": "Point Mini ME30NFC",
    "familia": "OUTRO",
    "qtd_trocas": 4,
    "mad": 4959,
    "trocas_mad_pct": 0.0807,
    "pct_trocas_no_mes": null
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "device_canonical": "Point Smart",
    "familia": "OUTRO",
    "qtd_trocas": 4,
    "mad": 192121,
    "trocas_mad_pct": 0.0021,
    "pct_trocas_no_mes": null
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "device_canonical": "UNKNOWN",
    "familia": "OUTRO",
    "qtd_trocas": 1,
    "mad": 428,
    "trocas_mad_pct": 0.2336,
    "pct_trocas_no_mes": null
  },
  {
    "site": "MLB",
    "mes": "2026-05",
    "device_canonical": null,
    "familia": "OUTRO",
    "qtd_trocas": 8820,
    "mad": null,
    "trocas_mad_pct": null,
    "pct_trocas_no_mes": 47.9
  },
  {
    "site": "MLB",
    "mes": "2026-05",
    "device_canonical": "Point Pro 2",
    "familia": "OUTRO",
    "qtd_trocas": 4353,
    "mad": 507277,
    "trocas_mad_pct": 0.8581,
    "pct_trocas_no_mes": 23.7
  },
  {
    "site": "MLB",
    "mes": "2026-05",
    "device_canonical": "Point Smart 2",
    "familia": "OUTRO",
    "qtd_trocas": 3630,
    "mad": 496514,
    "trocas_mad_pct": 0.7311,
    "pct_trocas_no_mes": 19.7
  },
  {
    "site": "MLB",
    "mes": "2026-05",
    "device_canonical": "Point Pro 3",
    "familia": "OUTRO",
    "qtd_trocas": 801,
    "mad": 449574,
    "trocas_mad_pct": 0.1782,
    "pct_trocas_no_mes": 4.4
  },
  {
    "site": "MLB",
    "mes": "2026-05",
    "device_canonical": "Point AIR 2",
    "familia": "AIR",
    "qtd_trocas": 316,
    "mad": 66678,
    "trocas_mad_pct": 0.4739,
    "pct_trocas_no_mes": 1.7
  },
  {
    "site": "MLB",
    "mes": "2026-05",
    "device_canonical": "Point MINI",
    "familia": "MINI",
    "qtd_trocas": 244,
    "mad": 141909,
    "trocas_mad_pct": 0.1719,
    "pct_trocas_no_mes": 1.3
  },
  {
    "site": "MLB",
    "mes": "2026-05",
    "device_canonical": "Point Mini NFC 1",
    "familia": "OUTRO",
    "qtd_trocas": 131,
    "mad": 165901,
    "trocas_mad_pct": 0.079,
    "pct_trocas_no_mes": 0.7
  },
  {
    "site": "MLB",
    "mes": "2026-05",
    "device_canonical": "Point Mini NFC",
    "familia": "OUTRO",
    "qtd_trocas": 74,
    "mad": 66597,
    "trocas_mad_pct": 0.1111,
    "pct_trocas_no_mes": 0.4
  },
  {
    "site": "MLB",
    "mes": "2026-05",
    "device_canonical": "Point Smart 2 N950",
    "familia": "OUTRO",
    "qtd_trocas": 10,
    "mad": 908,
    "trocas_mad_pct": 1.1013,
    "pct_trocas_no_mes": 0.1
  },
  {
    "site": "MLB",
    "mes": "2026-05",
    "device_canonical": "Undefined",
    "familia": "OUTRO",
    "qtd_trocas": 8,
    "mad": 5008,
    "trocas_mad_pct": 0.1597,
    "pct_trocas_no_mes": null
  },
  {
    "site": "MLB",
    "mes": "2026-05",
    "device_canonical": "Point Mini (ME30S)",
    "familia": "OUTRO",
    "qtd_trocas": 7,
    "mad": 8795,
    "trocas_mad_pct": 0.0796,
    "pct_trocas_no_mes": null
  },
  {
    "site": "MLB",
    "mes": "2026-05",
    "device_canonical": "Point Smart",
    "familia": "OUTRO",
    "qtd_trocas": 5,
    "mad": 179224,
    "trocas_mad_pct": 0.0028,
    "pct_trocas_no_mes": null
  },
  {
    "site": "MLB",
    "mes": "2026-05",
    "device_canonical": "Point Mini ME30NFC",
    "familia": "OUTRO",
    "qtd_trocas": 3,
    "mad": 3946,
    "trocas_mad_pct": 0.076,
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
    "qtd": 14175
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "n1": "CX",
    "n2": "CX",
    "qtd": 3331
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "qtd": 1881
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "qtd": 1535
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "n1": "FDV",
    "n2": "FDV",
    "qtd": 1020
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "qtd": 792
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "qtd": 52
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "n1": "FAQ",
    "n2": "VERDI_FORM",
    "qtd": 33
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "n1": "FAQ",
    "n2": "POINT",
    "qtd": 32
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "n1": "CC_VIRTUAL",
    "n2": "CC_VIRTUAL",
    "qtd": 2
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "n1": "TLV",
    "n2": "TLV",
    "qtd": 1
  },
  {
    "site": "MLB",
    "mes": "2026-05",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "qtd": 11483
  },
  {
    "site": "MLB",
    "mes": "2026-05",
    "n1": "CX",
    "n2": "CX",
    "qtd": 2629
  },
  {
    "site": "MLB",
    "mes": "2026-05",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "qtd": 2035
  },
  {
    "site": "MLB",
    "mes": "2026-05",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "qtd": 1200
  },
  {
    "site": "MLB",
    "mes": "2026-05",
    "n1": "FDV",
    "n2": "FDV",
    "qtd": 917
  },
  {
    "site": "MLB",
    "mes": "2026-05",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "qtd": 53
  },
  {
    "site": "MLB",
    "mes": "2026-05",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "qtd": 18
  },
  {
    "site": "MLB",
    "mes": "2026-05",
    "n1": "CC_VIRTUAL",
    "n2": "CC_VIRTUAL",
    "qtd": 18
  },
  {
    "site": "MLB",
    "mes": "2026-05",
    "n1": "FAQ",
    "n2": "VERDI_FORM",
    "qtd": 14
  },
  {
    "site": "MLB",
    "mes": "2026-05",
    "n1": "TLV",
    "n2": "TLV",
    "qtd": 3
  },
  {
    "site": "MLB",
    "mes": "2026-05",
    "n1": "FAQ",
    "n2": "POINT",
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
    "qtd_trocas": 16913
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "canal": "CX",
    "qtd_trocas": 3331
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "canal": "CERTIFIED_CONSULTANT",
    "qtd_trocas": 1535
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "canal": "FDV",
    "qtd_trocas": 1020
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "canal": "CX_NIVEL_2",
    "qtd_trocas": 52
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "canal": "CC_VIRTUAL",
    "qtd_trocas": 2
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "canal": "TLV",
    "qtd_trocas": 1
  },
  {
    "site": "MLB",
    "mes": "2026-05",
    "canal": "FAQ",
    "qtd_trocas": 13551
  },
  {
    "site": "MLB",
    "mes": "2026-05",
    "canal": "CX",
    "qtd_trocas": 2629
  },
  {
    "site": "MLB",
    "mes": "2026-05",
    "canal": "CERTIFIED_CONSULTANT",
    "qtd_trocas": 1200
  },
  {
    "site": "MLB",
    "mes": "2026-05",
    "canal": "FDV",
    "qtd_trocas": 917
  },
  {
    "site": "MLB",
    "mes": "2026-05",
    "canal": "CX_NIVEL_2",
    "qtd_trocas": 53
  },
  {
    "site": "MLB",
    "mes": "2026-05",
    "canal": "CC_VIRTUAL",
    "qtd_trocas": 18
  },
  {
    "site": "MLB",
    "mes": "2026-05",
    "canal": "TLV",
    "qtd_trocas": 3
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
    "qtd_trocas": 4018
  },
  {
    "site": "MLA",
    "mes": "2026-04",
    "canal": "CERTIFIED_CONSULTANT",
    "qtd_trocas": 1173
  },
  {
    "site": "MLA",
    "mes": "2026-04",
    "canal": "CX",
    "qtd_trocas": 529
  },
  {
    "site": "MLA",
    "mes": "2026-04",
    "canal": "CX_NIVEL_2",
    "qtd_trocas": 85
  },
  {
    "site": "MLA",
    "mes": "2026-04",
    "canal": "CC_VIRTUAL",
    "qtd_trocas": 49
  },
  {
    "site": "MLA",
    "mes": "2026-05",
    "canal": "FAQ",
    "qtd_trocas": 3009
  },
  {
    "site": "MLA",
    "mes": "2026-05",
    "canal": "CERTIFIED_CONSULTANT",
    "qtd_trocas": 776
  },
  {
    "site": "MLA",
    "mes": "2026-05",
    "canal": "CX",
    "qtd_trocas": 248
  },
  {
    "site": "MLA",
    "mes": "2026-05",
    "canal": "CX_NIVEL_2",
    "qtd_trocas": 109
  },
  {
    "site": "MLA",
    "mes": "2026-05",
    "canal": "CC_VIRTUAL",
    "qtd_trocas": 42
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
    "qtd_trocas": 844
  },
  {
    "site": "MLC",
    "mes": "2026-04",
    "canal": "FAQ",
    "qtd_trocas": 633
  },
  {
    "site": "MLC",
    "mes": "2026-04",
    "canal": "CX_NIVEL_2",
    "qtd_trocas": 65
  },
  {
    "site": "MLC",
    "mes": "2026-05",
    "canal": "FAQ",
    "qtd_trocas": 686
  },
  {
    "site": "MLC",
    "mes": "2026-05",
    "canal": "CX",
    "qtd_trocas": 590
  },
  {
    "site": "MLC",
    "mes": "2026-05",
    "canal": "CX_NIVEL_2",
    "qtd_trocas": 70
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
    "qtd_trocas": 8558
  },
  {
    "site": "MLM",
    "mes": "2026-04",
    "canal": "CX",
    "qtd_trocas": 695
  },
  {
    "site": "MLM",
    "mes": "2026-04",
    "canal": "CERTIFIED_CONSULTANT",
    "qtd_trocas": 372
  },
  {
    "site": "MLM",
    "mes": "2026-04",
    "canal": "CX_NIVEL_2",
    "qtd_trocas": 42
  },
  {
    "site": "MLM",
    "mes": "2026-04",
    "canal": "FDV",
    "qtd_trocas": 33
  },
  {
    "site": "MLM",
    "mes": "2026-05",
    "canal": "FAQ",
    "qtd_trocas": 7710
  },
  {
    "site": "MLM",
    "mes": "2026-05",
    "canal": "CERTIFIED_CONSULTANT",
    "qtd_trocas": 656
  },
  {
    "site": "MLM",
    "mes": "2026-05",
    "canal": "CX",
    "qtd_trocas": 476
  },
  {
    "site": "MLM",
    "mes": "2026-05",
    "canal": "CX_NIVEL_2",
    "qtd_trocas": 82
  },
  {
    "site": "MLM",
    "mes": "2026-05",
    "canal": "FDV",
    "qtd_trocas": 36
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
    "qtd_trocas": 9525
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd_trocas": 3223
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd_trocas": 2899
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd_trocas": 1776
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "motivo": "Otros Problemas",
    "qtd_trocas": 1533
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "motivo": "No es posible imprimir el comprobante",
    "qtd_trocas": 1448
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd_trocas": 523
  },
  {
    "site": "MLB",
    "mes": "2026-05",
    "motivo": "El lector no se prende o no se carga",
    "qtd_trocas": 7593
  },
  {
    "site": "MLB",
    "mes": "2026-05",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd_trocas": 2779
  },
  {
    "site": "MLB",
    "mes": "2026-05",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd_trocas": 1685
  },
  {
    "site": "MLB",
    "mes": "2026-05",
    "motivo": "Otros Problemas",
    "qtd_trocas": 1123
  },
  {
    "site": "MLB",
    "mes": "2026-05",
    "motivo": "No es posible imprimir el comprobante",
    "qtd_trocas": 1077
  },
  {
    "site": "MLB",
    "mes": "2026-05",
    "motivo": "Lector no atiende mis necesidades de funcionamiento",
    "qtd_trocas": 1060
  },
  {
    "site": "MLB",
    "mes": "2026-05",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd_trocas": 896
  }
],

  // ── DADOS DIÁRIOS — canal N1×N2 × motivo ───────────────────
  // MLB | últimos 35 dias | REPAIR | BUCKET IS NULL
  // Populado via: python queries/daily_canal_motivo.py
  // Estrutura: { site, dia:'YYYY-MM-DD', n1, n2, motivo, qtd }
daily: [
  {
    "dia": "2026-05-22",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 201
  },
  {
    "dia": "2026-05-22",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Lector no atiende mis necesidades de funcionamiento",
    "qtd": 117
  },
  {
    "dia": "2026-05-22",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 66
  },
  {
    "dia": "2026-05-22",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 44
  },
  {
    "dia": "2026-05-22",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 41
  },
  {
    "dia": "2026-05-22",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 32
  },
  {
    "dia": "2026-05-22",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 28
  },
  {
    "dia": "2026-05-22",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 27
  },
  {
    "dia": "2026-05-22",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 22
  },
  {
    "dia": "2026-05-22",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 20
  },
  {
    "dia": "2026-05-22",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 18
  },
  {
    "dia": "2026-05-22",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Otros Problemas",
    "qtd": 16
  },
  {
    "dia": "2026-05-22",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 14
  },
  {
    "dia": "2026-05-22",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 12
  },
  {
    "dia": "2026-05-22",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 11
  },
  {
    "dia": "2026-05-22",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 8
  },
  {
    "dia": "2026-05-22",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 7
  },
  {
    "dia": "2026-05-22",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Problemas de señal",
    "qtd": 7
  },
  {
    "dia": "2026-05-22",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Otros Problemas",
    "qtd": 7
  },
  {
    "dia": "2026-05-22",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 6
  },
  {
    "dia": "2026-05-22",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 5
  },
  {
    "dia": "2026-05-22",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 5
  },
  {
    "dia": "2026-05-22",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 5
  },
  {
    "dia": "2026-05-22",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 4
  },
  {
    "dia": "2026-05-22",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 4
  },
  {
    "dia": "2026-05-22",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 4
  },
  {
    "dia": "2026-05-22",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 4
  },
  {
    "dia": "2026-05-22",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Lector no atiende mis necesidades de tarjetas aceptadas",
    "qtd": 3
  },
  {
    "dia": "2026-05-22",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Visor tactil no funciona",
    "qtd": 3
  },
  {
    "dia": "2026-05-22",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 3
  },
  {
    "dia": "2026-05-22",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 3
  },
  {
    "dia": "2026-05-22",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 3
  },
  {
    "dia": "2026-05-22",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla blanca cargando con mensaje \"buscando información\"",
    "qtd": 3
  },
  {
    "dia": "2026-05-22",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Tamper detected\"",
    "qtd": 3
  },
  {
    "dia": "2026-05-22",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Sólo el wifi no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-05-22",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Sólo el chip no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-05-22",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Pantalla rota",
    "qtd": 2
  },
  {
    "dia": "2026-05-22",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 2
  },
  {
    "dia": "2026-05-22",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Teclado/botón roto",
    "qtd": 2
  },
  {
    "dia": "2026-05-22",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 2
  },
  {
    "dia": "2026-05-22",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-05-22",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-05-22",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-05-22",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Init Config Error\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-22",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-22",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Smartpos Paró\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-22",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-22",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Sólo el wifi no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-05-22",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 1
  },
  {
    "dia": "2026-05-22",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Lector funciona lento",
    "qtd": 1
  },
  {
    "dia": "2026-05-22",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-05-22",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 1
  },
  {
    "dia": "2026-05-22",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensagem \"Sua Point parou de funcionar. Reinicie-a para cobrar\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-22",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-05-22",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 1
  },
  {
    "dia": "2026-05-22",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 1
  },
  {
    "dia": "2026-05-22",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Reboot in progress\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-22",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Lector funciona lento",
    "qtd": 1
  },
  {
    "dia": "2026-05-22",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-22",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 1
  },
  {
    "dia": "2026-05-22",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Defeito no leitor do chip",
    "qtd": 1
  },
  {
    "dia": "2026-05-22",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el wifi no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-05-22",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"No conecta con MP\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-22",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-05-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 244
  },
  {
    "dia": "2026-05-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Lector no atiende mis necesidades de funcionamiento",
    "qtd": 140
  },
  {
    "dia": "2026-05-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 82
  },
  {
    "dia": "2026-05-21",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 65
  },
  {
    "dia": "2026-05-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 44
  },
  {
    "dia": "2026-05-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 40
  },
  {
    "dia": "2026-05-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 38
  },
  {
    "dia": "2026-05-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 35
  },
  {
    "dia": "2026-05-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Problemas de señal",
    "qtd": 25
  },
  {
    "dia": "2026-05-21",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 25
  },
  {
    "dia": "2026-05-21",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 23
  },
  {
    "dia": "2026-05-21",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 20
  },
  {
    "dia": "2026-05-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 19
  },
  {
    "dia": "2026-05-21",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 13
  },
  {
    "dia": "2026-05-21",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Otros Problemas",
    "qtd": 12
  },
  {
    "dia": "2026-05-21",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 11
  },
  {
    "dia": "2026-05-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 9
  },
  {
    "dia": "2026-05-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Lector no atiende mis necesidades de tarjetas aceptadas",
    "qtd": 8
  },
  {
    "dia": "2026-05-21",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 8
  },
  {
    "dia": "2026-05-21",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 8
  },
  {
    "dia": "2026-05-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 7
  },
  {
    "dia": "2026-05-21",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Otros Problemas",
    "qtd": 6
  },
  {
    "dia": "2026-05-21",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Lector funciona lento",
    "qtd": 5
  },
  {
    "dia": "2026-05-21",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 5
  },
  {
    "dia": "2026-05-21",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 5
  },
  {
    "dia": "2026-05-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 5
  },
  {
    "dia": "2026-05-21",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 5
  },
  {
    "dia": "2026-05-21",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Sólo el chip no funciona",
    "qtd": 4
  },
  {
    "dia": "2026-05-21",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Teclado/botón roto",
    "qtd": 4
  },
  {
    "dia": "2026-05-21",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla rota",
    "qtd": 4
  },
  {
    "dia": "2026-05-21",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 4
  },
  {
    "dia": "2026-05-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 4
  },
  {
    "dia": "2026-05-21",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 3
  },
  {
    "dia": "2026-05-21",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 3
  },
  {
    "dia": "2026-05-21",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 3
  },
  {
    "dia": "2026-05-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 3
  },
  {
    "dia": "2026-05-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 3
  },
  {
    "dia": "2026-05-21",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 2
  },
  {
    "dia": "2026-05-21",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"No conecta con MP\"",
    "qtd": 2
  },
  {
    "dia": "2026-05-21",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Visor tactil no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-05-21",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Lector funciona lento",
    "qtd": 2
  },
  {
    "dia": "2026-05-21",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Pantalla rota",
    "qtd": 2
  },
  {
    "dia": "2026-05-21",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 2
  },
  {
    "dia": "2026-05-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 2
  },
  {
    "dia": "2026-05-21",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 2
  },
  {
    "dia": "2026-05-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Sólo el chip no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-05-21",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 2
  },
  {
    "dia": "2026-05-21",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "Otros Problemas",
    "qtd": 1
  },
  {
    "dia": "2026-05-21",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"HW attack\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-21",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Smartpos Paró\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-21",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-21",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla blanca cargando con logo MP / androind iniciando",
    "qtd": 1
  },
  {
    "dia": "2026-05-21",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 1
  },
  {
    "dia": "2026-05-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Chip con defecto",
    "qtd": 1
  },
  {
    "dia": "2026-05-21",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Reboot & Authority\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-21",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Defeito no leitor do chip",
    "qtd": 1
  },
  {
    "dia": "2026-05-21",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Sticker de seguridad de la caja roto",
    "qtd": 1
  },
  {
    "dia": "2026-05-21",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 1
  },
  {
    "dia": "2026-05-21",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-21",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-05-21",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-05-21",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 257
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Lector no atiende mis necesidades de funcionamiento",
    "qtd": 112
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 70
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 58
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 47
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 42
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 41
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Problemas de señal",
    "qtd": 40
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 38
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 38
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 37
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 21
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 15
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 14
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 14
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 12
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 9
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Otros Problemas",
    "qtd": 9
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 9
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 9
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 8
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Otros Problemas",
    "qtd": 8
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 7
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Lector funciona lento",
    "qtd": 7
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 6
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 5
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla rota",
    "qtd": 4
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Pantalla rota",
    "qtd": 4
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Visor tactil no funciona",
    "qtd": 4
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el chip no funciona",
    "qtd": 4
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 4
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Lector no atiende mis necesidades de tarjetas aceptadas",
    "qtd": 4
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 4
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 3
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 3
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 3
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 3
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 2
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Teclado/botón roto",
    "qtd": 2
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 2
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla rota",
    "qtd": 2
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Visor tactil no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Sólo el chip no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Sólo el wifi no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"No conecta con MP\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 1
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Chip con defecto",
    "qtd": 1
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 1
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla blanca cargando con mensaje \"buscando información\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Maquininha trava com mensagem \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ningun punto de acceso encontrado\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Lector funciona lento",
    "qtd": 1
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensagem \"Password Required\" / \"Enter password\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Init Config Error\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 1
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla blanca cargando con mensaje \"buscando información\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Defeito no leitor do chip",
    "qtd": 1
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Tamper detected\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla blanca cargando con logo MP / androind iniciando",
    "qtd": 1
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 1
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Defeito no leitor do chip",
    "qtd": 1
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 1
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 1
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 266
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Lector no atiende mis necesidades de funcionamiento",
    "qtd": 135
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 96
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 79
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Problemas de señal",
    "qtd": 66
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 56
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 51
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 48
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 42
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 39
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 38
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 23
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 23
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 22
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 14
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 12
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Otros Problemas",
    "qtd": 11
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 11
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 11
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Lector funciona lento",
    "qtd": 9
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 9
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 8
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 7
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 7
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla rota",
    "qtd": 6
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 6
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 5
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Pantalla rota",
    "qtd": 5
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 5
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 5
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 5
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 4
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el chip no funciona",
    "qtd": 4
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Sólo el chip no funciona",
    "qtd": 4
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 4
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 4
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 3
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 3
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 3
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Teclado/botón roto",
    "qtd": 3
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Visor tactil no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 2
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Teclado/botón roto",
    "qtd": 2
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensagem \"Sua Point parou de funcionar. Reinicie-a para cobrar\"",
    "qtd": 2
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Otros Problemas",
    "qtd": 2
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 2
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 2
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 2
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Sólo el chip no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el wifi no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "CC_VIRTUAL",
    "n2": "CC_VIRTUAL",
    "motivo": "Otros Problemas",
    "qtd": 1
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 1
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 1
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "Otros Problemas",
    "qtd": 1
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 1
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Lector no atiende mis necesidades de tarjetas aceptadas",
    "qtd": 1
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 1
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla blanca cargando con mensaje \"buscando información\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Init Config Error\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Defeito no leitor do chip",
    "qtd": 1
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Maquininha trava com mensagem \"Não conecta com MP\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensagem \"Sua Point parou de funcionar. Reinicie-a para cobrar\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensagem \"Sua Point parou de funcionar. Reinicie-a para cobrar\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla blanca cargando con mensaje \"buscando información\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 218
  },
  {
    "dia": "2026-05-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Lector no atiende mis necesidades de funcionamiento",
    "qtd": 99
  },
  {
    "dia": "2026-05-18",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 71
  },
  {
    "dia": "2026-05-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 50
  },
  {
    "dia": "2026-05-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 46
  },
  {
    "dia": "2026-05-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 44
  },
  {
    "dia": "2026-05-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 43
  },
  {
    "dia": "2026-05-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 36
  },
  {
    "dia": "2026-05-18",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 29
  },
  {
    "dia": "2026-05-18",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 23
  },
  {
    "dia": "2026-05-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Problemas de señal",
    "qtd": 23
  },
  {
    "dia": "2026-05-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 22
  },
  {
    "dia": "2026-05-18",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 21
  },
  {
    "dia": "2026-05-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 10
  },
  {
    "dia": "2026-05-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 9
  },
  {
    "dia": "2026-05-18",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Otros Problemas",
    "qtd": 8
  },
  {
    "dia": "2026-05-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Lector no atiende mis necesidades de tarjetas aceptadas",
    "qtd": 8
  },
  {
    "dia": "2026-05-18",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 7
  },
  {
    "dia": "2026-05-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 6
  },
  {
    "dia": "2026-05-18",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 6
  },
  {
    "dia": "2026-05-18",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 6
  },
  {
    "dia": "2026-05-18",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 6
  },
  {
    "dia": "2026-05-18",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Otros Problemas",
    "qtd": 5
  },
  {
    "dia": "2026-05-18",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 5
  },
  {
    "dia": "2026-05-18",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 5
  },
  {
    "dia": "2026-05-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 5
  },
  {
    "dia": "2026-05-18",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"HW attack\"",
    "qtd": 4
  },
  {
    "dia": "2026-05-18",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 4
  },
  {
    "dia": "2026-05-18",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 4
  },
  {
    "dia": "2026-05-18",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Lector funciona lento",
    "qtd": 4
  },
  {
    "dia": "2026-05-18",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Pantalla rota",
    "qtd": 4
  },
  {
    "dia": "2026-05-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Sólo el chip no funciona",
    "qtd": 4
  },
  {
    "dia": "2026-05-18",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 4
  },
  {
    "dia": "2026-05-18",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 3
  },
  {
    "dia": "2026-05-18",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 3
  },
  {
    "dia": "2026-05-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 3
  },
  {
    "dia": "2026-05-18",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 3
  },
  {
    "dia": "2026-05-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 3
  },
  {
    "dia": "2026-05-18",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Teclado/botón roto",
    "qtd": 2
  },
  {
    "dia": "2026-05-18",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensagem \"Sua Point parou de funcionar. Reinicie-a para cobrar\"",
    "qtd": 2
  },
  {
    "dia": "2026-05-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Pantalla rota",
    "qtd": 2
  },
  {
    "dia": "2026-05-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 2
  },
  {
    "dia": "2026-05-18",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "Teclado/botón roto",
    "qtd": 2
  },
  {
    "dia": "2026-05-18",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla rota",
    "qtd": 2
  },
  {
    "dia": "2026-05-18",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-18",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Lector funciona lento",
    "qtd": 1
  },
  {
    "dia": "2026-05-18",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 1
  },
  {
    "dia": "2026-05-18",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Maquininha trava com a luz ao redor da point ligada em azul",
    "qtd": 1
  },
  {
    "dia": "2026-05-18",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Defeito no leitor do chip",
    "qtd": 1
  },
  {
    "dia": "2026-05-18",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ningun punto de acceso encontrado\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 1
  },
  {
    "dia": "2026-05-18",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-05-18",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 1
  },
  {
    "dia": "2026-05-18",
    "site": "MLB",
    "n1": "CC_VIRTUAL",
    "n2": "CC_VIRTUAL",
    "motivo": "Otros Problemas",
    "qtd": 1
  },
  {
    "dia": "2026-05-18",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-05-18",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-05-18",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-05-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Chip con defecto",
    "qtd": 1
  },
  {
    "dia": "2026-05-18",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla blanca cargando con mensaje \"buscando información\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-18",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla blanca cargando con mensaje \"buscando información\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 1
  },
  {
    "dia": "2026-05-18",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 1
  },
  {
    "dia": "2026-05-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 1
  },
  {
    "dia": "2026-05-18",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 1
  },
  {
    "dia": "2026-05-18",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 1
  },
  {
    "dia": "2026-05-18",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-05-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 108
  },
  {
    "dia": "2026-05-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Lector no atiende mis necesidades de funcionamiento",
    "qtd": 60
  },
  {
    "dia": "2026-05-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 45
  },
  {
    "dia": "2026-05-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 38
  },
  {
    "dia": "2026-05-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 29
  },
  {
    "dia": "2026-05-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 23
  },
  {
    "dia": "2026-05-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 23
  },
  {
    "dia": "2026-05-17",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 15
  },
  {
    "dia": "2026-05-17",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 14
  },
  {
    "dia": "2026-05-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 14
  },
  {
    "dia": "2026-05-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Problemas de señal",
    "qtd": 12
  },
  {
    "dia": "2026-05-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 10
  },
  {
    "dia": "2026-05-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 7
  },
  {
    "dia": "2026-05-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 6
  },
  {
    "dia": "2026-05-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Lector no atiende mis necesidades de tarjetas aceptadas",
    "qtd": 6
  },
  {
    "dia": "2026-05-17",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 5
  },
  {
    "dia": "2026-05-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 5
  },
  {
    "dia": "2026-05-17",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 5
  },
  {
    "dia": "2026-05-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 5
  },
  {
    "dia": "2026-05-17",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 4
  },
  {
    "dia": "2026-05-17",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 4
  },
  {
    "dia": "2026-05-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 3
  },
  {
    "dia": "2026-05-17",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 2
  },
  {
    "dia": "2026-05-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 2
  },
  {
    "dia": "2026-05-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 2
  },
  {
    "dia": "2026-05-17",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ningun punto de acceso encontrado\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-05-17",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 1
  },
  {
    "dia": "2026-05-17",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-05-17",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-17",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 1
  },
  {
    "dia": "2026-05-16",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 153
  },
  {
    "dia": "2026-05-16",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Lector no atiende mis necesidades de funcionamiento",
    "qtd": 95
  },
  {
    "dia": "2026-05-16",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 54
  },
  {
    "dia": "2026-05-16",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 40
  },
  {
    "dia": "2026-05-16",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 35
  },
  {
    "dia": "2026-05-16",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 26
  },
  {
    "dia": "2026-05-16",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 22
  },
  {
    "dia": "2026-05-16",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 22
  },
  {
    "dia": "2026-05-16",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 20
  },
  {
    "dia": "2026-05-16",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 16
  },
  {
    "dia": "2026-05-16",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Problemas de señal",
    "qtd": 15
  },
  {
    "dia": "2026-05-16",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 7
  },
  {
    "dia": "2026-05-16",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 7
  },
  {
    "dia": "2026-05-16",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 6
  },
  {
    "dia": "2026-05-16",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 5
  },
  {
    "dia": "2026-05-16",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 5
  },
  {
    "dia": "2026-05-16",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 5
  },
  {
    "dia": "2026-05-16",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Sólo el chip no funciona",
    "qtd": 4
  },
  {
    "dia": "2026-05-16",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 4
  },
  {
    "dia": "2026-05-16",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Lector no atiende mis necesidades de tarjetas aceptadas",
    "qtd": 3
  },
  {
    "dia": "2026-05-16",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Lector funciona lento",
    "qtd": 3
  },
  {
    "dia": "2026-05-16",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 3
  },
  {
    "dia": "2026-05-16",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 3
  },
  {
    "dia": "2026-05-16",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla rota",
    "qtd": 2
  },
  {
    "dia": "2026-05-16",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 2
  },
  {
    "dia": "2026-05-16",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Tamper detected\"",
    "qtd": 2
  },
  {
    "dia": "2026-05-16",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 2
  },
  {
    "dia": "2026-05-16",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Teclado/botón roto",
    "qtd": 2
  },
  {
    "dia": "2026-05-16",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 2
  },
  {
    "dia": "2026-05-16",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 2
  },
  {
    "dia": "2026-05-16",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 2
  },
  {
    "dia": "2026-05-16",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 2
  },
  {
    "dia": "2026-05-16",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Otros Problemas",
    "qtd": 2
  },
  {
    "dia": "2026-05-16",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 2
  },
  {
    "dia": "2026-05-16",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 2
  },
  {
    "dia": "2026-05-16",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 2
  },
  {
    "dia": "2026-05-16",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 1
  },
  {
    "dia": "2026-05-16",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Init Config Error\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-16",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 1
  },
  {
    "dia": "2026-05-16",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-16",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Lector funciona lento",
    "qtd": 1
  },
  {
    "dia": "2026-05-16",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 1
  },
  {
    "dia": "2026-05-16",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"HW ATTACK. Sua Point não funciona. Peça a troca em mercadopago\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-16",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 1
  },
  {
    "dia": "2026-05-16",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ningun punto de acceso encontrado\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-16",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Sticker de seguridad de la caja roto",
    "qtd": 1
  },
  {
    "dia": "2026-05-16",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-05-16",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Chip con defecto",
    "qtd": 1
  },
  {
    "dia": "2026-05-16",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 1
  },
  {
    "dia": "2026-05-16",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "POINT",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-16",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensagem \"Password Required\" / \"Enter password\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-16",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"No conecta con MP\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-16",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensagem \"Sua Point parou de funcionar. Reinicie-a para cobrar\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-15",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 210
  },
  {
    "dia": "2026-05-15",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Lector no atiende mis necesidades de funcionamiento",
    "qtd": 123
  },
  {
    "dia": "2026-05-15",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 61
  },
  {
    "dia": "2026-05-15",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 55
  },
  {
    "dia": "2026-05-15",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 49
  },
  {
    "dia": "2026-05-15",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 42
  },
  {
    "dia": "2026-05-15",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 34
  },
  {
    "dia": "2026-05-15",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 33
  },
  {
    "dia": "2026-05-15",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 29
  },
  {
    "dia": "2026-05-15",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 28
  },
  {
    "dia": "2026-05-15",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Problemas de señal",
    "qtd": 27
  },
  {
    "dia": "2026-05-15",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 25
  },
  {
    "dia": "2026-05-15",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 17
  },
  {
    "dia": "2026-05-15",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Otros Problemas",
    "qtd": 11
  },
  {
    "dia": "2026-05-15",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 8
  },
  {
    "dia": "2026-05-15",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 7
  },
  {
    "dia": "2026-05-15",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Lector no atiende mis necesidades de tarjetas aceptadas",
    "qtd": 7
  },
  {
    "dia": "2026-05-15",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 6
  },
  {
    "dia": "2026-05-15",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 6
  },
  {
    "dia": "2026-05-15",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Lector funciona lento",
    "qtd": 5
  },
  {
    "dia": "2026-05-15",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 5
  },
  {
    "dia": "2026-05-15",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 5
  },
  {
    "dia": "2026-05-15",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Sólo el chip no funciona",
    "qtd": 4
  },
  {
    "dia": "2026-05-15",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 4
  },
  {
    "dia": "2026-05-15",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 4
  },
  {
    "dia": "2026-05-15",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 4
  },
  {
    "dia": "2026-05-15",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 4
  },
  {
    "dia": "2026-05-15",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 4
  },
  {
    "dia": "2026-05-15",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Otros Problemas",
    "qtd": 4
  },
  {
    "dia": "2026-05-15",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Pantalla rota",
    "qtd": 4
  },
  {
    "dia": "2026-05-15",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el chip no funciona",
    "qtd": 3
  },
  {
    "dia": "2026-05-15",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Chip con defecto",
    "qtd": 3
  },
  {
    "dia": "2026-05-15",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 3
  },
  {
    "dia": "2026-05-15",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Teclado/botón roto",
    "qtd": 3
  },
  {
    "dia": "2026-05-15",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 3
  },
  {
    "dia": "2026-05-15",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Teclado/botón roto",
    "qtd": 3
  },
  {
    "dia": "2026-05-15",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 3
  },
  {
    "dia": "2026-05-15",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Lector funciona lento",
    "qtd": 3
  },
  {
    "dia": "2026-05-15",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 3
  },
  {
    "dia": "2026-05-15",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 2
  },
  {
    "dia": "2026-05-15",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla rota",
    "qtd": 2
  },
  {
    "dia": "2026-05-15",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Teclado/botón roto",
    "qtd": 2
  },
  {
    "dia": "2026-05-15",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Visor tactil no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-05-15",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 2
  },
  {
    "dia": "2026-05-15",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 2
  },
  {
    "dia": "2026-05-15",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "Otros Problemas",
    "qtd": 2
  },
  {
    "dia": "2026-05-15",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 2
  },
  {
    "dia": "2026-05-15",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "VERDI_FORM",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-05-15",
    "site": "MLB",
    "n1": "CC_VIRTUAL",
    "n2": "CC_VIRTUAL",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 1
  },
  {
    "dia": "2026-05-15",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Defeito no leitor do chip",
    "qtd": 1
  },
  {
    "dia": "2026-05-15",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla blanca cargando con mensaje \"buscando información\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-15",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Smartpos Paró\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-15",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensagem \"Password Required\" / \"Enter password\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-15",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Init Config Error\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-15",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Defeito no leitor do chip",
    "qtd": 1
  },
  {
    "dia": "2026-05-15",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-05-15",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensagem \"Password Required\" / \"Enter password\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-15",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-05-15",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 1
  },
  {
    "dia": "2026-05-15",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensagem \"Sua Point parou de funcionar. Reinicie-a para cobrar\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-15",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Maquininha trava com mensagem \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-15",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 1
  },
  {
    "dia": "2026-05-15",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-15",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Lector funciona lento",
    "qtd": 1
  },
  {
    "dia": "2026-05-15",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 278
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Lector no atiende mis necesidades de funcionamiento",
    "qtd": 122
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 67
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 63
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 48
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 47
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 42
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 41
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Problemas de señal",
    "qtd": 28
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 26
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 20
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 20
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 13
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 13
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 9
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 8
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 7
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Otros Problemas",
    "qtd": 7
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 7
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Pantalla rota",
    "qtd": 6
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 6
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 5
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 5
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Otros Problemas",
    "qtd": 5
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Visor tactil no funciona",
    "qtd": 5
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 5
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 5
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Lector funciona lento",
    "qtd": 4
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 4
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Sólo el chip no funciona",
    "qtd": 3
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Teclado/botón roto",
    "qtd": 3
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla rota",
    "qtd": 3
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 3
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 3
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 3
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Visor tactil no funciona",
    "qtd": 3
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el chip no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El dispositivo emite ruido",
    "qtd": 2
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 2
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Visor tactil no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensagem \"Sua Point parou de funcionar. Reinicie-a para cobrar\"",
    "qtd": 2
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Defeito no leitor do chip",
    "qtd": 2
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Lector no atiende mis necesidades de tarjetas aceptadas",
    "qtd": 2
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Tamper detected\"",
    "qtd": 2
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Teclado/botón roto",
    "qtd": 2
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 2
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla rota",
    "qtd": 2
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 2
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 2
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensagem \"Sua Point parou de funcionar. Reinicie-a para cobrar\"",
    "qtd": 2
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Init Config Error\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Maquininha trava com mensagem \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 1
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Chip con defecto",
    "qtd": 1
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensagem \"Sua Point parou de funcionar. Reinicie-a para cobrar\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Lector funciona lento",
    "qtd": 1
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Lector funciona lento",
    "qtd": 1
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 1
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla blanca cargando con logo MP / androind iniciando",
    "qtd": 1
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "CC_VIRTUAL",
    "n2": "CC_VIRTUAL",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"HW attack\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Smartpos Paró\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 1
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla blanca cargando con logo MP / androind iniciando",
    "qtd": 1
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla blanca cargando con mensaje \"buscando información\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 1
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el wifi no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 285
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 122
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 93
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 75
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Lector no atiende mis necesidades de funcionamiento",
    "qtd": 57
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 55
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 45
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 39
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 35
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 29
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 25
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 14
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 11
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 10
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Otros Problemas",
    "qtd": 9
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 9
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 9
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 8
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 8
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 8
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 7
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 7
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 6
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 6
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el chip no funciona",
    "qtd": 6
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla rota",
    "qtd": 5
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 5
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Problemas de señal",
    "qtd": 4
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 4
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Teclado/botón roto",
    "qtd": 4
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 4
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 4
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 4
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 3
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Defeito no leitor do chip",
    "qtd": 3
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Otros Problemas",
    "qtd": 3
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 2
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Lector funciona lento",
    "qtd": 2
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Lector funciona lento",
    "qtd": 2
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 2
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Visor tactil no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Tamper detected\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla blanca cargando con logo MP / androind iniciando",
    "qtd": 1
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Init Config Error\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Smartpos Paró\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 1
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Maquininha trava com mensagem \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla blanca cargando con logo MP / androind iniciando",
    "qtd": 1
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 1
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Lector no atiende mis necesidades de tarjetas aceptadas",
    "qtd": 1
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Lector funciona lento",
    "qtd": 1
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "n1": "CC_VIRTUAL",
    "n2": "CC_VIRTUAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 1
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla blanca cargando con mensaje \"buscando información\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 1
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 1
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ningun punto de acceso encontrado\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Sólo el wifi no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 319
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 146
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 109
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 80
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 62
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 47
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 46
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 35
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 29
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 26
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 23
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 14
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 11
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 10
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 8
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Otros Problemas",
    "qtd": 8
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 8
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Pantalla rota",
    "qtd": 7
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 7
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 7
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 6
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Visor tactil no funciona",
    "qtd": 6
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla rota",
    "qtd": 6
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Smartpos Paró\"",
    "qtd": 6
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el chip no funciona",
    "qtd": 6
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Lector funciona lento",
    "qtd": 5
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 5
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 5
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 5
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 4
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 4
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 4
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 4
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensagem \"Password Required\" / \"Enter password\"",
    "qtd": 3
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Teclado/botón roto",
    "qtd": 3
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 3
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 3
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 3
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 3
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 3
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Init Config Error\"",
    "qtd": 2
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 2
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Teclado/botón roto",
    "qtd": 2
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 2
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Teclado/botón roto",
    "qtd": 2
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Lector funciona lento",
    "qtd": 2
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 2
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Sólo el chip no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"No conecta con MP\"",
    "qtd": 2
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Otros Problemas",
    "qtd": 1
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla blanca cargando con mensaje \"buscando información\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 1
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 1
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Maquininha trava com a luz ao redor da point ligada em azul",
    "qtd": 1
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla blanca cargando con logo MP / androind iniciando",
    "qtd": 1
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Reboot & Authority\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 1
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensagem \"Sua Point parou de funcionar. Reinicie-a para cobrar\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Irruption\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Defeito no leitor do chip",
    "qtd": 1
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Defeito no leitor do chip",
    "qtd": 1
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 1
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 1
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Sticker de seguridad de la caja roto",
    "qtd": 1
  },
  {
    "dia": "2026-05-11",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 236
  },
  {
    "dia": "2026-05-11",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 127
  },
  {
    "dia": "2026-05-11",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 96
  },
  {
    "dia": "2026-05-11",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 54
  },
  {
    "dia": "2026-05-11",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 53
  },
  {
    "dia": "2026-05-11",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 53
  },
  {
    "dia": "2026-05-11",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 47
  },
  {
    "dia": "2026-05-11",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 30
  },
  {
    "dia": "2026-05-11",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 27
  },
  {
    "dia": "2026-05-11",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 24
  },
  {
    "dia": "2026-05-11",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 13
  },
  {
    "dia": "2026-05-11",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 13
  },
  {
    "dia": "2026-05-11",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 9
  },
  {
    "dia": "2026-05-11",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 8
  },
  {
    "dia": "2026-05-11",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Otros Problemas",
    "qtd": 8
  },
  {
    "dia": "2026-05-11",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 7
  },
  {
    "dia": "2026-05-11",
    "site": "MLB",
    "n1": "CC_VIRTUAL",
    "n2": "CC_VIRTUAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 7
  },
  {
    "dia": "2026-05-11",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 6
  },
  {
    "dia": "2026-05-11",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el chip no funciona",
    "qtd": 6
  },
  {
    "dia": "2026-05-11",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 5
  },
  {
    "dia": "2026-05-11",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 5
  },
  {
    "dia": "2026-05-11",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Pantalla rota",
    "qtd": 4
  },
  {
    "dia": "2026-05-11",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 4
  },
  {
    "dia": "2026-05-11",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 4
  },
  {
    "dia": "2026-05-11",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Lector funciona lento",
    "qtd": 4
  },
  {
    "dia": "2026-05-11",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla rota",
    "qtd": 3
  },
  {
    "dia": "2026-05-11",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 3
  },
  {
    "dia": "2026-05-11",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 3
  },
  {
    "dia": "2026-05-11",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 3
  },
  {
    "dia": "2026-05-11",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 3
  },
  {
    "dia": "2026-05-11",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 3
  },
  {
    "dia": "2026-05-11",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 3
  },
  {
    "dia": "2026-05-11",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Lector funciona lento",
    "qtd": 2
  },
  {
    "dia": "2026-05-11",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 2
  },
  {
    "dia": "2026-05-11",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 2
  },
  {
    "dia": "2026-05-11",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensagem \"Password Required\" / \"Enter password\"",
    "qtd": 2
  },
  {
    "dia": "2026-05-11",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 2
  },
  {
    "dia": "2026-05-11",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Visor tactil no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-05-11",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 2
  },
  {
    "dia": "2026-05-11",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Otros Problemas",
    "qtd": 2
  },
  {
    "dia": "2026-05-11",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 2
  },
  {
    "dia": "2026-05-11",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 2
  },
  {
    "dia": "2026-05-11",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 1
  },
  {
    "dia": "2026-05-11",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-05-11",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 1
  },
  {
    "dia": "2026-05-11",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-05-11",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sticker de seguridad de la caja roto",
    "qtd": 1
  },
  {
    "dia": "2026-05-11",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Smartpos Paró\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-11",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-05-11",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-05-11",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 1
  },
  {
    "dia": "2026-05-11",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-11",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensagem \"Sua Point parou de funcionar. Reinicie-a para cobrar\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-11",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 1
  },
  {
    "dia": "2026-05-11",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-05-11",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Maquininha trava com a luz ao redor da point ligada em azul",
    "qtd": 1
  },
  {
    "dia": "2026-05-11",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"HW attack\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-11",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 1
  },
  {
    "dia": "2026-05-11",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla blanca cargando con logo MP / androind iniciando",
    "qtd": 1
  },
  {
    "dia": "2026-05-11",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla blanca cargando con logo MP / androind iniciando",
    "qtd": 1
  },
  {
    "dia": "2026-05-11",
    "site": "MLB",
    "n1": "TLV",
    "n2": "TLV",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 1
  },
  {
    "dia": "2026-05-11",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Defeito no leitor do chip",
    "qtd": 1
  },
  {
    "dia": "2026-05-11",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 1
  },
  {
    "dia": "2026-05-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 97
  },
  {
    "dia": "2026-05-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 68
  },
  {
    "dia": "2026-05-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 52
  },
  {
    "dia": "2026-05-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 28
  },
  {
    "dia": "2026-05-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 23
  },
  {
    "dia": "2026-05-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 9
  },
  {
    "dia": "2026-05-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 9
  },
  {
    "dia": "2026-05-10",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 8
  },
  {
    "dia": "2026-05-10",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 7
  },
  {
    "dia": "2026-05-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 5
  },
  {
    "dia": "2026-05-10",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 5
  },
  {
    "dia": "2026-05-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 5
  },
  {
    "dia": "2026-05-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 5
  },
  {
    "dia": "2026-05-10",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 4
  },
  {
    "dia": "2026-05-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 3
  },
  {
    "dia": "2026-05-10",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Lector funciona lento",
    "qtd": 2
  },
  {
    "dia": "2026-05-10",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 2
  },
  {
    "dia": "2026-05-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 2
  },
  {
    "dia": "2026-05-10",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 2
  },
  {
    "dia": "2026-05-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 1
  },
  {
    "dia": "2026-05-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 1
  },
  {
    "dia": "2026-05-10",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 1
  },
  {
    "dia": "2026-05-10",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 1
  },
  {
    "dia": "2026-05-10",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 1
  },
  {
    "dia": "2026-05-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-05-10",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-05-10",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-05-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Reboot & Authority\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-10",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 167
  },
  {
    "dia": "2026-05-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 95
  },
  {
    "dia": "2026-05-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 82
  },
  {
    "dia": "2026-05-09",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 31
  },
  {
    "dia": "2026-05-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 29
  },
  {
    "dia": "2026-05-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 28
  },
  {
    "dia": "2026-05-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 21
  },
  {
    "dia": "2026-05-09",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 21
  },
  {
    "dia": "2026-05-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 15
  },
  {
    "dia": "2026-05-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 9
  },
  {
    "dia": "2026-05-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 8
  },
  {
    "dia": "2026-05-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 8
  },
  {
    "dia": "2026-05-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 8
  },
  {
    "dia": "2026-05-09",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 6
  },
  {
    "dia": "2026-05-09",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 5
  },
  {
    "dia": "2026-05-09",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 4
  },
  {
    "dia": "2026-05-09",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 4
  },
  {
    "dia": "2026-05-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 3
  },
  {
    "dia": "2026-05-09",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 3
  },
  {
    "dia": "2026-05-09",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 3
  },
  {
    "dia": "2026-05-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Sólo el chip no funciona",
    "qtd": 3
  },
  {
    "dia": "2026-05-09",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el chip no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-05-09",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 2
  },
  {
    "dia": "2026-05-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 2
  },
  {
    "dia": "2026-05-09",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 2
  },
  {
    "dia": "2026-05-09",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 2
  },
  {
    "dia": "2026-05-09",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 1
  },
  {
    "dia": "2026-05-09",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-09",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Defeito no leitor do chip",
    "qtd": 1
  },
  {
    "dia": "2026-05-09",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 1
  },
  {
    "dia": "2026-05-09",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el wifi no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-05-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-05-09",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Smartpos Paró\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 1
  },
  {
    "dia": "2026-05-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 1
  },
  {
    "dia": "2026-05-09",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Otros Problemas",
    "qtd": 1
  },
  {
    "dia": "2026-05-09",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 1
  },
  {
    "dia": "2026-05-09",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 1
  },
  {
    "dia": "2026-05-09",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Lector funciona lento",
    "qtd": 1
  },
  {
    "dia": "2026-05-09",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-05-09",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla blanca cargando con logo MP / androind iniciando",
    "qtd": 1
  },
  {
    "dia": "2026-05-09",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 468
  },
  {
    "dia": "2026-05-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 226
  },
  {
    "dia": "2026-05-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 96
  },
  {
    "dia": "2026-05-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 79
  },
  {
    "dia": "2026-05-08",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 76
  },
  {
    "dia": "2026-05-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 55
  },
  {
    "dia": "2026-05-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 54
  },
  {
    "dia": "2026-05-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 52
  },
  {
    "dia": "2026-05-08",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 44
  },
  {
    "dia": "2026-05-08",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 35
  },
  {
    "dia": "2026-05-08",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 27
  },
  {
    "dia": "2026-05-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 25
  },
  {
    "dia": "2026-05-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 23
  },
  {
    "dia": "2026-05-08",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Otros Problemas",
    "qtd": 14
  },
  {
    "dia": "2026-05-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 12
  },
  {
    "dia": "2026-05-08",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 10
  },
  {
    "dia": "2026-05-08",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 10
  },
  {
    "dia": "2026-05-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 8
  },
  {
    "dia": "2026-05-08",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 8
  },
  {
    "dia": "2026-05-08",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 7
  },
  {
    "dia": "2026-05-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 7
  },
  {
    "dia": "2026-05-08",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 6
  },
  {
    "dia": "2026-05-08",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 6
  },
  {
    "dia": "2026-05-08",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 6
  },
  {
    "dia": "2026-05-08",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 4
  },
  {
    "dia": "2026-05-08",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 4
  },
  {
    "dia": "2026-05-08",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla rota",
    "qtd": 4
  },
  {
    "dia": "2026-05-08",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Smartpos Paró\"",
    "qtd": 4
  },
  {
    "dia": "2026-05-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 4
  },
  {
    "dia": "2026-05-08",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Teclado/botón roto",
    "qtd": 3
  },
  {
    "dia": "2026-05-08",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 3
  },
  {
    "dia": "2026-05-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 3
  },
  {
    "dia": "2026-05-08",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 3
  },
  {
    "dia": "2026-05-08",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla rota",
    "qtd": 3
  },
  {
    "dia": "2026-05-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 3
  },
  {
    "dia": "2026-05-08",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Otros Problemas",
    "qtd": 3
  },
  {
    "dia": "2026-05-08",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 3
  },
  {
    "dia": "2026-05-08",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"No conecta con MP\"",
    "qtd": 2
  },
  {
    "dia": "2026-05-08",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Lector funciona lento",
    "qtd": 2
  },
  {
    "dia": "2026-05-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Sólo el chip no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-05-08",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 2
  },
  {
    "dia": "2026-05-08",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 2
  },
  {
    "dia": "2026-05-08",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla blanca cargando con mensaje \"buscando información\"",
    "qtd": 2
  },
  {
    "dia": "2026-05-08",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Visor tactil no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-05-08",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Lector funciona lento",
    "qtd": 2
  },
  {
    "dia": "2026-05-08",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 2
  },
  {
    "dia": "2026-05-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 2
  },
  {
    "dia": "2026-05-08",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Pantalla rota",
    "qtd": 2
  },
  {
    "dia": "2026-05-08",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Defeito no leitor do chip",
    "qtd": 2
  },
  {
    "dia": "2026-05-08",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Init Config Error\"",
    "qtd": 2
  },
  {
    "dia": "2026-05-08",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 2
  },
  {
    "dia": "2026-05-08",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla blanca cargando con logo MP / androind iniciando",
    "qtd": 1
  },
  {
    "dia": "2026-05-08",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el wifi no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-05-08",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-05-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 1
  },
  {
    "dia": "2026-05-08",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 1
  },
  {
    "dia": "2026-05-08",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensagem \"Password Required\" / \"Enter password\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Lector funciona lento",
    "qtd": 1
  },
  {
    "dia": "2026-05-08",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 1
  },
  {
    "dia": "2026-05-08",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 1
  },
  {
    "dia": "2026-05-08",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-05-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Otros Problemas",
    "qtd": 1
  },
  {
    "dia": "2026-05-08",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 1
  },
  {
    "dia": "2026-05-08",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Lector funciona lento",
    "qtd": 1
  },
  {
    "dia": "2026-05-08",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-08",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 258
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 130
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 101
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 79
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 49
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 39
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 38
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 35
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 32
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 28
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 17
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 13
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Otros Problemas",
    "qtd": 12
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 11
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 10
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 10
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 8
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Lector funciona lento",
    "qtd": 8
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 6
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 5
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Visor tactil no funciona",
    "qtd": 5
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 5
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 5
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 5
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla rota",
    "qtd": 4
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 4
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 4
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 4
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Visor tactil no funciona",
    "qtd": 4
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Otros Problemas",
    "qtd": 4
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "Otros Problemas",
    "qtd": 4
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 4
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 3
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla rota",
    "qtd": 3
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el chip no funciona",
    "qtd": 3
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Pantalla rota",
    "qtd": 3
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 3
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Visor tactil no funciona",
    "qtd": 3
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 3
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 3
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 2
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 2
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Sólo el chip no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "CC_VIRTUAL",
    "n2": "CC_VIRTUAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 2
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Teclado/botón roto",
    "qtd": 2
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Sólo el chip no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 2
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Init Config Error\"",
    "qtd": 2
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "Mensaje \"Tamper detected\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Problemas de señal",
    "qtd": 1
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 1
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"HW attack\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "Sólo el wifi no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensagem \"Password Required\" / \"Enter password\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Irruption\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla blanca cargando con logo MP / androind iniciando",
    "qtd": 1
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 1
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla blanca cargando con mensaje \"buscando información\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Defeito no leitor do chip",
    "qtd": 1
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"HW ATTACK. Sua Point não funciona. Peça a troca em mercadopago\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 1
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "CC_VIRTUAL",
    "n2": "CC_VIRTUAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 1
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el wifi no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Sólo el wifi no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 201
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 69
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 68
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 63
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 47
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 40
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 24
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 24
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 21
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 18
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Otros Problemas",
    "qtd": 13
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 13
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 12
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 10
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 9
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 9
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 8
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 8
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 7
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Otros Problemas",
    "qtd": 7
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 7
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Lector funciona lento",
    "qtd": 6
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 6
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 6
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 5
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 4
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Visor tactil no funciona",
    "qtd": 4
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 4
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 4
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 3
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Teclado/botón roto",
    "qtd": 3
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Visor tactil no funciona",
    "qtd": 3
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "VERDI_FORM",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 3
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Sólo el chip no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 2
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Smartpos Paró\"",
    "qtd": 2
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 2
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Lector funciona lento",
    "qtd": 2
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensagem \"Sua Point parou de funcionar. Reinicie-a para cobrar\"",
    "qtd": 2
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "VERDI_FORM",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 2
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Sólo el chip no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "CC_VIRTUAL",
    "n2": "CC_VIRTUAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 2
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"No conecta con MP\"",
    "qtd": 2
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 2
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el chip no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Pantalla rota",
    "qtd": 2
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 2
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "VERDI_FORM",
    "motivo": "Lector funciona lento",
    "qtd": 1
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla blanca cargando con mensaje \"buscando información\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "Mensagem \"Sua Point parou de funcionar. Reinicie-a para cobrar\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla blanca cargando con logo MP / androind iniciando",
    "qtd": 1
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 1
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 1
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "TLV",
    "n2": "TLV",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 1
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Lector funciona lento",
    "qtd": 1
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 1
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el wifi no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"HW attack\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 1
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Init Config Error\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 251
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 114
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 82
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 76
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 54
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 36
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 29
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 26
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 25
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 16
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 16
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 15
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Otros Problemas",
    "qtd": 12
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 12
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 12
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 7
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 7
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 7
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 6
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 6
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 5
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Lector funciona lento",
    "qtd": 5
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Otros Problemas",
    "qtd": 4
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 4
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 4
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 4
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Visor tactil no funciona",
    "qtd": 3
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 3
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Tamper detected\"",
    "qtd": 3
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Pantalla rota",
    "qtd": 3
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Lector funciona lento",
    "qtd": 3
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 3
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Visor tactil no funciona",
    "qtd": 3
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 3
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el wifi no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 2
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 2
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 2
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Teclado/botón roto",
    "qtd": 2
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Defeito no leitor do chip",
    "qtd": 2
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Teclado/botón roto",
    "qtd": 2
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 2
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El dispositivo emite ruido",
    "qtd": 2
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 2
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla blanca cargando con logo MP / androind iniciando",
    "qtd": 1
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 1
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 1
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Maquininha trava com mensagem \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 1
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "CC_VIRTUAL",
    "n2": "CC_VIRTUAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 1
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"HW attack\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Sólo el wifi no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "Otros Problemas",
    "qtd": 1
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"HW attack\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Init Config Error\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensagem \"Sua Point parou de funcionar. Reinicie-a para cobrar\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 1
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "VERDI_FORM",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Irruption\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 1
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "TLV",
    "n2": "TLV",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 1
  },
  {
    "dia": "2026-05-04",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 265
  },
  {
    "dia": "2026-05-04",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 125
  },
  {
    "dia": "2026-05-04",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 119
  },
  {
    "dia": "2026-05-04",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 70
  },
  {
    "dia": "2026-05-04",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 69
  },
  {
    "dia": "2026-05-04",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 56
  },
  {
    "dia": "2026-05-04",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 43
  },
  {
    "dia": "2026-05-04",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 23
  },
  {
    "dia": "2026-05-04",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 18
  },
  {
    "dia": "2026-05-04",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 17
  },
  {
    "dia": "2026-05-04",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 16
  },
  {
    "dia": "2026-05-04",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 12
  },
  {
    "dia": "2026-05-04",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 10
  },
  {
    "dia": "2026-05-04",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Otros Problemas",
    "qtd": 9
  },
  {
    "dia": "2026-05-04",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 9
  },
  {
    "dia": "2026-05-04",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 8
  },
  {
    "dia": "2026-05-04",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 7
  },
  {
    "dia": "2026-05-04",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 7
  },
  {
    "dia": "2026-05-04",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 6
  },
  {
    "dia": "2026-05-04",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 5
  },
  {
    "dia": "2026-05-04",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 4
  },
  {
    "dia": "2026-05-04",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 4
  },
  {
    "dia": "2026-05-04",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el chip no funciona",
    "qtd": 4
  },
  {
    "dia": "2026-05-04",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 3
  },
  {
    "dia": "2026-05-04",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"No conecta con MP\"",
    "qtd": 3
  },
  {
    "dia": "2026-05-04",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 3
  },
  {
    "dia": "2026-05-04",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 3
  },
  {
    "dia": "2026-05-04",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Otros Problemas",
    "qtd": 3
  },
  {
    "dia": "2026-05-04",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla rota",
    "qtd": 3
  },
  {
    "dia": "2026-05-04",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 3
  },
  {
    "dia": "2026-05-04",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 3
  },
  {
    "dia": "2026-05-04",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 2
  },
  {
    "dia": "2026-05-04",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Pantalla rota",
    "qtd": 2
  },
  {
    "dia": "2026-05-04",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Pantalla rota",
    "qtd": 2
  },
  {
    "dia": "2026-05-04",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 2
  },
  {
    "dia": "2026-05-04",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 2
  },
  {
    "dia": "2026-05-04",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el wifi no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-05-04",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Visor tactil no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-05-04",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Visor tactil no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-05-04",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Teclado/botón roto",
    "qtd": 2
  },
  {
    "dia": "2026-05-04",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Lector funciona lento",
    "qtd": 2
  },
  {
    "dia": "2026-05-04",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 1
  },
  {
    "dia": "2026-05-04",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 1
  },
  {
    "dia": "2026-05-04",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-05-04",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Smartpos Paró\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-04",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"HW attack\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-04",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla blanca cargando con mensaje \"buscando información\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-04",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Init Config Error\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-04",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 1
  },
  {
    "dia": "2026-05-04",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"HW attack\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-04",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 1
  },
  {
    "dia": "2026-05-04",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-04",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-04",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Aparece el mensaje \"POS tampered, pls reboot o authority\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-04",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-05-04",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensagem \"Password Required\" / \"Enter password\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-04",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-04",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Problemas de señal",
    "qtd": 1
  },
  {
    "dia": "2026-05-04",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-05-04",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ningun punto de acceso encontrado\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-04",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-04",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 1
  },
  {
    "dia": "2026-05-04",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 1
  },
  {
    "dia": "2026-05-04",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Reboot & Authority\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-04",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-05-03",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 127
  },
  {
    "dia": "2026-05-03",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 91
  },
  {
    "dia": "2026-05-03",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 72
  },
  {
    "dia": "2026-05-03",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 24
  },
  {
    "dia": "2026-05-03",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 20
  },
  {
    "dia": "2026-05-03",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 19
  },
  {
    "dia": "2026-05-03",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 16
  },
  {
    "dia": "2026-05-03",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 13
  },
  {
    "dia": "2026-05-03",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 10
  },
  {
    "dia": "2026-05-03",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 9
  },
  {
    "dia": "2026-05-03",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 5
  },
  {
    "dia": "2026-05-03",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 3
  },
  {
    "dia": "2026-05-03",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 3
  },
  {
    "dia": "2026-05-03",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 3
  },
  {
    "dia": "2026-05-03",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 2
  },
  {
    "dia": "2026-05-03",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 2
  },
  {
    "dia": "2026-05-03",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 1
  },
  {
    "dia": "2026-05-03",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 1
  },
  {
    "dia": "2026-05-03",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 1
  },
  {
    "dia": "2026-05-03",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-05-03",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 1
  },
  {
    "dia": "2026-05-03",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Tamper detected\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-03",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-02",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 142
  },
  {
    "dia": "2026-05-02",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 82
  },
  {
    "dia": "2026-05-02",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 73
  },
  {
    "dia": "2026-05-02",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 38
  },
  {
    "dia": "2026-05-02",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 29
  },
  {
    "dia": "2026-05-02",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 28
  },
  {
    "dia": "2026-05-02",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 28
  },
  {
    "dia": "2026-05-02",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 24
  },
  {
    "dia": "2026-05-02",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 15
  },
  {
    "dia": "2026-05-02",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 8
  },
  {
    "dia": "2026-05-02",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 7
  },
  {
    "dia": "2026-05-02",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 7
  },
  {
    "dia": "2026-05-02",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 7
  },
  {
    "dia": "2026-05-02",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 4
  },
  {
    "dia": "2026-05-02",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 4
  },
  {
    "dia": "2026-05-02",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensagem \"Sua Point parou de funcionar. Reinicie-a para cobrar\"",
    "qtd": 3
  },
  {
    "dia": "2026-05-02",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 3
  },
  {
    "dia": "2026-05-02",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 3
  },
  {
    "dia": "2026-05-02",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Sólo el chip no funciona",
    "qtd": 3
  },
  {
    "dia": "2026-05-02",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 3
  },
  {
    "dia": "2026-05-02",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 3
  },
  {
    "dia": "2026-05-02",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 3
  },
  {
    "dia": "2026-05-02",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 3
  },
  {
    "dia": "2026-05-02",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el wifi no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-05-02",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 2
  },
  {
    "dia": "2026-05-02",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Lector funciona lento",
    "qtd": 2
  },
  {
    "dia": "2026-05-02",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-02",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Tamper detected\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-02",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla blanca cargando con logo MP / androind iniciando",
    "qtd": 1
  },
  {
    "dia": "2026-05-02",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 1
  },
  {
    "dia": "2026-05-02",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "VERDI_FORM",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 1
  },
  {
    "dia": "2026-05-02",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-05-02",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-02",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 1
  },
  {
    "dia": "2026-05-02",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-01",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 129
  },
  {
    "dia": "2026-05-01",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 82
  },
  {
    "dia": "2026-05-01",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 74
  },
  {
    "dia": "2026-05-01",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 35
  },
  {
    "dia": "2026-05-01",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 31
  },
  {
    "dia": "2026-05-01",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 25
  },
  {
    "dia": "2026-05-01",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 18
  },
  {
    "dia": "2026-05-01",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 15
  },
  {
    "dia": "2026-05-01",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 14
  },
  {
    "dia": "2026-05-01",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 6
  },
  {
    "dia": "2026-05-01",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 6
  },
  {
    "dia": "2026-05-01",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 5
  },
  {
    "dia": "2026-05-01",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 5
  },
  {
    "dia": "2026-05-01",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 5
  },
  {
    "dia": "2026-05-01",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 4
  },
  {
    "dia": "2026-05-01",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 4
  },
  {
    "dia": "2026-05-01",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 3
  },
  {
    "dia": "2026-05-01",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla rota",
    "qtd": 3
  },
  {
    "dia": "2026-05-01",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 3
  },
  {
    "dia": "2026-05-01",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 2
  },
  {
    "dia": "2026-05-01",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "VERDI_FORM",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 2
  },
  {
    "dia": "2026-05-01",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 2
  },
  {
    "dia": "2026-05-01",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 2
  },
  {
    "dia": "2026-05-01",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 2
  },
  {
    "dia": "2026-05-01",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "VERDI_FORM",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 2
  },
  {
    "dia": "2026-05-01",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el chip no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-05-01",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Visor tactil no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-05-01",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-01",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-01",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-05-01",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "VERDI_FORM",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 1
  },
  {
    "dia": "2026-05-01",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 1
  },
  {
    "dia": "2026-05-01",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 1
  },
  {
    "dia": "2026-05-01",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 1
  },
  {
    "dia": "2026-05-01",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-05-01",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 1
  },
  {
    "dia": "2026-05-01",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensagem \"Sua Point parou de funcionar. Reinicie-a para cobrar\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-01",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Maquininha trava com mensagem \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-05-01",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 1
  },
  {
    "dia": "2026-05-01",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 1
  },
  {
    "dia": "2026-05-01",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-05-01",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensagem \"Sua Point parou de funcionar. Reinicie-a para cobrar\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-30",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 217
  },
  {
    "dia": "2026-04-30",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 132
  },
  {
    "dia": "2026-04-30",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 108
  },
  {
    "dia": "2026-04-30",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 54
  },
  {
    "dia": "2026-04-30",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 45
  },
  {
    "dia": "2026-04-30",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 41
  },
  {
    "dia": "2026-04-30",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 32
  },
  {
    "dia": "2026-04-30",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 26
  },
  {
    "dia": "2026-04-30",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 18
  },
  {
    "dia": "2026-04-30",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 14
  },
  {
    "dia": "2026-04-30",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 14
  },
  {
    "dia": "2026-04-30",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 14
  },
  {
    "dia": "2026-04-30",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 10
  },
  {
    "dia": "2026-04-30",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 10
  },
  {
    "dia": "2026-04-30",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Otros Problemas",
    "qtd": 10
  },
  {
    "dia": "2026-04-30",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 9
  },
  {
    "dia": "2026-04-30",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 7
  },
  {
    "dia": "2026-04-30",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Otros Problemas",
    "qtd": 7
  },
  {
    "dia": "2026-04-30",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 7
  },
  {
    "dia": "2026-04-30",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 6
  },
  {
    "dia": "2026-04-30",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 6
  },
  {
    "dia": "2026-04-30",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 6
  },
  {
    "dia": "2026-04-30",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 5
  },
  {
    "dia": "2026-04-30",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 5
  },
  {
    "dia": "2026-04-30",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 4
  },
  {
    "dia": "2026-04-30",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 4
  },
  {
    "dia": "2026-04-30",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 4
  },
  {
    "dia": "2026-04-30",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 4
  },
  {
    "dia": "2026-04-30",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 4
  },
  {
    "dia": "2026-04-30",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Tamper detected\"",
    "qtd": 3
  },
  {
    "dia": "2026-04-30",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Lector funciona lento",
    "qtd": 3
  },
  {
    "dia": "2026-04-30",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 3
  },
  {
    "dia": "2026-04-30",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla rota",
    "qtd": 2
  },
  {
    "dia": "2026-04-30",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Pantalla rota",
    "qtd": 2
  },
  {
    "dia": "2026-04-30",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensagem \"Sua Point parou de funcionar. Reinicie-a para cobrar\"",
    "qtd": 2
  },
  {
    "dia": "2026-04-30",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 2
  },
  {
    "dia": "2026-04-30",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensagem \"Password Required\" / \"Enter password\"",
    "qtd": 2
  },
  {
    "dia": "2026-04-30",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 2
  },
  {
    "dia": "2026-04-30",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 2
  },
  {
    "dia": "2026-04-30",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Sólo el chip no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-04-30",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 2
  },
  {
    "dia": "2026-04-30",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-30",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 1
  },
  {
    "dia": "2026-04-30",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-30",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Smartpos Paró\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-30",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "Otros Problemas",
    "qtd": 1
  },
  {
    "dia": "2026-04-30",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-04-30",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Lector funciona lento",
    "qtd": 1
  },
  {
    "dia": "2026-04-30",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-30",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 1
  },
  {
    "dia": "2026-04-30",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-30",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el wifi no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-30",
    "site": "MLB",
    "n1": "CC_VIRTUAL",
    "n2": "CC_VIRTUAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 1
  },
  {
    "dia": "2026-04-30",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 1
  },
  {
    "dia": "2026-04-30",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-30",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla blanca cargando con logo MP / androind iniciando",
    "qtd": 1
  },
  {
    "dia": "2026-04-30",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 1
  },
  {
    "dia": "2026-04-30",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-30",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-30",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-04-30",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 1
  },
  {
    "dia": "2026-04-30",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-30",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Irruption\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-29",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 248
  },
  {
    "dia": "2026-04-29",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 121
  },
  {
    "dia": "2026-04-29",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 110
  },
  {
    "dia": "2026-04-29",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 59
  },
  {
    "dia": "2026-04-29",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 56
  },
  {
    "dia": "2026-04-29",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 41
  },
  {
    "dia": "2026-04-29",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 36
  },
  {
    "dia": "2026-04-29",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 35
  },
  {
    "dia": "2026-04-29",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 27
  },
  {
    "dia": "2026-04-29",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 22
  },
  {
    "dia": "2026-04-29",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 20
  },
  {
    "dia": "2026-04-29",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Otros Problemas",
    "qtd": 12
  },
  {
    "dia": "2026-04-29",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 9
  },
  {
    "dia": "2026-04-29",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 8
  },
  {
    "dia": "2026-04-29",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 7
  },
  {
    "dia": "2026-04-29",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Otros Problemas",
    "qtd": 7
  },
  {
    "dia": "2026-04-29",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 7
  },
  {
    "dia": "2026-04-29",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 7
  },
  {
    "dia": "2026-04-29",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 7
  },
  {
    "dia": "2026-04-29",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 6
  },
  {
    "dia": "2026-04-29",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 6
  },
  {
    "dia": "2026-04-29",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 6
  },
  {
    "dia": "2026-04-29",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Lector funciona lento",
    "qtd": 5
  },
  {
    "dia": "2026-04-29",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 5
  },
  {
    "dia": "2026-04-29",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 5
  },
  {
    "dia": "2026-04-29",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 5
  },
  {
    "dia": "2026-04-29",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 4
  },
  {
    "dia": "2026-04-29",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Sólo el chip no funciona",
    "qtd": 4
  },
  {
    "dia": "2026-04-29",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 3
  },
  {
    "dia": "2026-04-29",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla rota",
    "qtd": 3
  },
  {
    "dia": "2026-04-29",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 3
  },
  {
    "dia": "2026-04-29",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 3
  },
  {
    "dia": "2026-04-29",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 2
  },
  {
    "dia": "2026-04-29",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el chip no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-04-29",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Pantalla rota",
    "qtd": 2
  },
  {
    "dia": "2026-04-29",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Sólo el chip no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-04-29",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 2
  },
  {
    "dia": "2026-04-29",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla blanca cargando con mensaje \"buscando información\"",
    "qtd": 2
  },
  {
    "dia": "2026-04-29",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Defeito no leitor do chip",
    "qtd": 2
  },
  {
    "dia": "2026-04-29",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 2
  },
  {
    "dia": "2026-04-29",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Lector funciona lento",
    "qtd": 2
  },
  {
    "dia": "2026-04-29",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El dispositivo emite ruido",
    "qtd": 1
  },
  {
    "dia": "2026-04-29",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-29",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Defeito no leitor do chip",
    "qtd": 1
  },
  {
    "dia": "2026-04-29",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Tamper detected\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-29",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-04-29",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-04-29",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ningun punto de acceso encontrado\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-29",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-29",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-29",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"No conecta con MP\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-29",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 1
  },
  {
    "dia": "2026-04-29",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Sólo el wifi no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-29",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-04-29",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"HW attack\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-29",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla blanca cargando con logo MP / androind iniciando",
    "qtd": 1
  },
  {
    "dia": "2026-04-29",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el wifi no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-29",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-29",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensagem \"Sua Point parou de funcionar. Reinicie-a para cobrar\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-29",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Defeito no leitor do chip",
    "qtd": 1
  },
  {
    "dia": "2026-04-29",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El dispositivo emite ruido",
    "qtd": 1
  },
  {
    "dia": "2026-04-29",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 1
  },
  {
    "dia": "2026-04-29",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Smartpos Paró\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-29",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Smartpos Paró\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-29",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla blanca cargando con mensaje \"buscando información\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-28",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 256
  },
  {
    "dia": "2026-04-28",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 149
  },
  {
    "dia": "2026-04-28",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 126
  },
  {
    "dia": "2026-04-28",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 69
  },
  {
    "dia": "2026-04-28",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 52
  },
  {
    "dia": "2026-04-28",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 36
  },
  {
    "dia": "2026-04-28",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 34
  },
  {
    "dia": "2026-04-28",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 33
  },
  {
    "dia": "2026-04-28",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 28
  },
  {
    "dia": "2026-04-28",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 27
  },
  {
    "dia": "2026-04-28",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 17
  },
  {
    "dia": "2026-04-28",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 15
  },
  {
    "dia": "2026-04-28",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 13
  },
  {
    "dia": "2026-04-28",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 12
  },
  {
    "dia": "2026-04-28",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 11
  },
  {
    "dia": "2026-04-28",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 10
  },
  {
    "dia": "2026-04-28",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Otros Problemas",
    "qtd": 10
  },
  {
    "dia": "2026-04-28",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 8
  },
  {
    "dia": "2026-04-28",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 7
  },
  {
    "dia": "2026-04-28",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 7
  },
  {
    "dia": "2026-04-28",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 6
  },
  {
    "dia": "2026-04-28",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Pantalla rota",
    "qtd": 5
  },
  {
    "dia": "2026-04-28",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 5
  },
  {
    "dia": "2026-04-28",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Teclado/botón roto",
    "qtd": 4
  },
  {
    "dia": "2026-04-28",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Lector funciona lento",
    "qtd": 4
  },
  {
    "dia": "2026-04-28",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 3
  },
  {
    "dia": "2026-04-28",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Lector funciona lento",
    "qtd": 3
  },
  {
    "dia": "2026-04-28",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Teclado/botón roto",
    "qtd": 3
  },
  {
    "dia": "2026-04-28",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 3
  },
  {
    "dia": "2026-04-28",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Teclado/botón roto",
    "qtd": 3
  },
  {
    "dia": "2026-04-28",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 3
  },
  {
    "dia": "2026-04-28",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 2
  },
  {
    "dia": "2026-04-28",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el chip no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-04-28",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 2
  },
  {
    "dia": "2026-04-28",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Visor tactil no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-04-28",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 2
  },
  {
    "dia": "2026-04-28",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 2
  },
  {
    "dia": "2026-04-28",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 2
  },
  {
    "dia": "2026-04-28",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Init Config Error\"",
    "qtd": 2
  },
  {
    "dia": "2026-04-28",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla rota",
    "qtd": 2
  },
  {
    "dia": "2026-04-28",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 2
  },
  {
    "dia": "2026-04-28",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "Otros Problemas",
    "qtd": 2
  },
  {
    "dia": "2026-04-28",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla rota",
    "qtd": 2
  },
  {
    "dia": "2026-04-28",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensagem \"Sua Point parou de funcionar. Reinicie-a para cobrar\"",
    "qtd": 2
  },
  {
    "dia": "2026-04-28",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 1
  },
  {
    "dia": "2026-04-28",
    "site": "MLB",
    "n1": "TLV",
    "n2": "TLV",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 1
  },
  {
    "dia": "2026-04-28",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 1
  },
  {
    "dia": "2026-04-28",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla blanca cargando con logo MP / androind iniciando",
    "qtd": 1
  },
  {
    "dia": "2026-04-28",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-28",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 1
  },
  {
    "dia": "2026-04-28",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Smartpos Paró\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-28",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 1
  },
  {
    "dia": "2026-04-28",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"HW ATTACK. Sua Point não funciona. Peça a troca em mercadopago\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-28",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 1
  },
  {
    "dia": "2026-04-28",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-28",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el wifi no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-28",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-28",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-28",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-28",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Tamper detected\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-28",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Otros Problemas",
    "qtd": 1
  },
  {
    "dia": "2026-04-27",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 254
  },
  {
    "dia": "2026-04-27",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 121
  },
  {
    "dia": "2026-04-27",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 120
  },
  {
    "dia": "2026-04-27",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 76
  },
  {
    "dia": "2026-04-27",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 49
  },
  {
    "dia": "2026-04-27",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 45
  },
  {
    "dia": "2026-04-27",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 37
  },
  {
    "dia": "2026-04-27",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 32
  },
  {
    "dia": "2026-04-27",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 30
  },
  {
    "dia": "2026-04-27",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 25
  },
  {
    "dia": "2026-04-27",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 23
  },
  {
    "dia": "2026-04-27",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 16
  },
  {
    "dia": "2026-04-27",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 14
  },
  {
    "dia": "2026-04-27",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 12
  },
  {
    "dia": "2026-04-27",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Otros Problemas",
    "qtd": 11
  },
  {
    "dia": "2026-04-27",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 8
  },
  {
    "dia": "2026-04-27",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 7
  },
  {
    "dia": "2026-04-27",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 7
  },
  {
    "dia": "2026-04-27",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 6
  },
  {
    "dia": "2026-04-27",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 6
  },
  {
    "dia": "2026-04-27",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el chip no funciona",
    "qtd": 6
  },
  {
    "dia": "2026-04-27",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Otros Problemas",
    "qtd": 5
  },
  {
    "dia": "2026-04-27",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 5
  },
  {
    "dia": "2026-04-27",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 5
  },
  {
    "dia": "2026-04-27",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 5
  },
  {
    "dia": "2026-04-27",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 4
  },
  {
    "dia": "2026-04-27",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla rota",
    "qtd": 4
  },
  {
    "dia": "2026-04-27",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 4
  },
  {
    "dia": "2026-04-27",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Visor tactil no funciona",
    "qtd": 4
  },
  {
    "dia": "2026-04-27",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 4
  },
  {
    "dia": "2026-04-27",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 4
  },
  {
    "dia": "2026-04-27",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 3
  },
  {
    "dia": "2026-04-27",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Teclado/botón roto",
    "qtd": 3
  },
  {
    "dia": "2026-04-27",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 3
  },
  {
    "dia": "2026-04-27",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 3
  },
  {
    "dia": "2026-04-27",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 3
  },
  {
    "dia": "2026-04-27",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 2
  },
  {
    "dia": "2026-04-27",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 2
  },
  {
    "dia": "2026-04-27",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Tamper detected\"",
    "qtd": 2
  },
  {
    "dia": "2026-04-27",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 2
  },
  {
    "dia": "2026-04-27",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Teclado/botón roto",
    "qtd": 2
  },
  {
    "dia": "2026-04-27",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Lector funciona lento",
    "qtd": 1
  },
  {
    "dia": "2026-04-27",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ningun punto de acceso encontrado\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-27",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla blanca cargando con logo MP / androind iniciando",
    "qtd": 1
  },
  {
    "dia": "2026-04-27",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensagem \"Sua Point parou de funcionar. Reinicie-a para cobrar\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-27",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-27",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensagem \"Password Required\" / \"Enter password\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-27",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Irruption\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-27",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-27",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 1
  },
  {
    "dia": "2026-04-27",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Defeito no leitor do chip",
    "qtd": 1
  },
  {
    "dia": "2026-04-27",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"HW attack\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-27",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"HW ATTACK. Sua Point não funciona. Peça a troca em mercadopago\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-27",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Tamper detected\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-27",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-04-27",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla blanca cargando con logo MP / androind iniciando",
    "qtd": 1
  },
  {
    "dia": "2026-04-27",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 1
  },
  {
    "dia": "2026-04-27",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-04-27",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Init Config Error\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-27",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-27",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"No conecta con MP\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-27",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensagem \"Sua Point parou de funcionar. Reinicie-a para cobrar\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-27",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 1
  },
  {
    "dia": "2026-04-27",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 1
  },
  {
    "dia": "2026-04-26",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 129
  },
  {
    "dia": "2026-04-26",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 65
  },
  {
    "dia": "2026-04-26",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 65
  },
  {
    "dia": "2026-04-26",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 31
  },
  {
    "dia": "2026-04-26",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 30
  },
  {
    "dia": "2026-04-26",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 17
  },
  {
    "dia": "2026-04-26",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 15
  },
  {
    "dia": "2026-04-26",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 11
  },
  {
    "dia": "2026-04-26",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 9
  },
  {
    "dia": "2026-04-26",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 7
  },
  {
    "dia": "2026-04-26",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 5
  },
  {
    "dia": "2026-04-26",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 4
  },
  {
    "dia": "2026-04-26",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 3
  },
  {
    "dia": "2026-04-26",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 2
  },
  {
    "dia": "2026-04-26",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 2
  },
  {
    "dia": "2026-04-26",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 2
  },
  {
    "dia": "2026-04-26",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el wifi no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-04-26",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Sólo el chip no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-04-26",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 2
  },
  {
    "dia": "2026-04-26",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 2
  },
  {
    "dia": "2026-04-26",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 2
  },
  {
    "dia": "2026-04-26",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"HW attack\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-26",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-26",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 1
  },
  {
    "dia": "2026-04-26",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ningun punto de acceso encontrado\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-26",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Tamper detected\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-26",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-26",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"HW attack\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-26",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 1
  },
  {
    "dia": "2026-04-26",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-04-26",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 1
  },
  {
    "dia": "2026-04-26",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 1
  },
  {
    "dia": "2026-04-26",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-04-26",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla blanca cargando con logo MP / androind iniciando",
    "qtd": 1
  },
  {
    "dia": "2026-04-26",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 1
  },
  {
    "dia": "2026-04-26",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Problemas de señal",
    "qtd": 1
  },
  {
    "dia": "2026-04-26",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-26",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Otros Problemas",
    "qtd": 1
  },
  {
    "dia": "2026-04-26",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-25",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 151
  },
  {
    "dia": "2026-04-25",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 100
  },
  {
    "dia": "2026-04-25",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 91
  },
  {
    "dia": "2026-04-25",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 40
  },
  {
    "dia": "2026-04-25",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 37
  },
  {
    "dia": "2026-04-25",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 33
  },
  {
    "dia": "2026-04-25",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 17
  },
  {
    "dia": "2026-04-25",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 15
  },
  {
    "dia": "2026-04-25",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 12
  },
  {
    "dia": "2026-04-25",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 10
  },
  {
    "dia": "2026-04-25",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 8
  },
  {
    "dia": "2026-04-25",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 4
  },
  {
    "dia": "2026-04-25",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla rota",
    "qtd": 4
  },
  {
    "dia": "2026-04-25",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 4
  },
  {
    "dia": "2026-04-25",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 4
  },
  {
    "dia": "2026-04-25",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 3
  },
  {
    "dia": "2026-04-25",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 3
  },
  {
    "dia": "2026-04-25",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 3
  },
  {
    "dia": "2026-04-25",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 3
  },
  {
    "dia": "2026-04-25",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 3
  },
  {
    "dia": "2026-04-25",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el chip no funciona",
    "qtd": 3
  },
  {
    "dia": "2026-04-25",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 2
  },
  {
    "dia": "2026-04-25",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 2
  },
  {
    "dia": "2026-04-25",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 2
  },
  {
    "dia": "2026-04-25",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 2
  },
  {
    "dia": "2026-04-25",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Visor tactil no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-04-25",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Otros Problemas",
    "qtd": 2
  },
  {
    "dia": "2026-04-25",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-25",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Otros Problemas",
    "qtd": 1
  },
  {
    "dia": "2026-04-25",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 1
  },
  {
    "dia": "2026-04-25",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-25",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-25",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-04-25",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el wifi no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-25",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 1
  },
  {
    "dia": "2026-04-25",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-25",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 1
  },
  {
    "dia": "2026-04-25",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Smartpos Paró\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-25",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-25",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 1
  },
  {
    "dia": "2026-04-25",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-04-25",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 1
  },
  {
    "dia": "2026-04-25",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 1
  },
  {
    "dia": "2026-04-25",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-25",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Lector funciona lento",
    "qtd": 1
  },
  {
    "dia": "2026-04-25",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Init Config Error\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-24",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 234
  },
  {
    "dia": "2026-04-24",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 93
  },
  {
    "dia": "2026-04-24",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 87
  },
  {
    "dia": "2026-04-24",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 65
  },
  {
    "dia": "2026-04-24",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 64
  },
  {
    "dia": "2026-04-24",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 46
  },
  {
    "dia": "2026-04-24",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 39
  },
  {
    "dia": "2026-04-24",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 26
  },
  {
    "dia": "2026-04-24",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 23
  },
  {
    "dia": "2026-04-24",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 22
  },
  {
    "dia": "2026-04-24",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 15
  },
  {
    "dia": "2026-04-24",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 13
  },
  {
    "dia": "2026-04-24",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 11
  },
  {
    "dia": "2026-04-24",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Otros Problemas",
    "qtd": 10
  },
  {
    "dia": "2026-04-24",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 10
  },
  {
    "dia": "2026-04-24",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Otros Problemas",
    "qtd": 9
  },
  {
    "dia": "2026-04-24",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 8
  },
  {
    "dia": "2026-04-24",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 7
  },
  {
    "dia": "2026-04-24",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 6
  },
  {
    "dia": "2026-04-24",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 6
  },
  {
    "dia": "2026-04-24",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 6
  },
  {
    "dia": "2026-04-24",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 6
  },
  {
    "dia": "2026-04-24",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 5
  },
  {
    "dia": "2026-04-24",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 5
  },
  {
    "dia": "2026-04-24",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el chip no funciona",
    "qtd": 5
  },
  {
    "dia": "2026-04-24",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla rota",
    "qtd": 5
  },
  {
    "dia": "2026-04-24",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 4
  },
  {
    "dia": "2026-04-24",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Visor tactil no funciona",
    "qtd": 4
  },
  {
    "dia": "2026-04-24",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 4
  },
  {
    "dia": "2026-04-24",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 4
  },
  {
    "dia": "2026-04-24",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 4
  },
  {
    "dia": "2026-04-24",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Lector funciona lento",
    "qtd": 4
  },
  {
    "dia": "2026-04-24",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 4
  },
  {
    "dia": "2026-04-24",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla rota",
    "qtd": 3
  },
  {
    "dia": "2026-04-24",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 3
  },
  {
    "dia": "2026-04-24",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Lector funciona lento",
    "qtd": 3
  },
  {
    "dia": "2026-04-24",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Teclado/botón roto",
    "qtd": 3
  },
  {
    "dia": "2026-04-24",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 3
  },
  {
    "dia": "2026-04-24",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensagem \"Sua Point parou de funcionar. Reinicie-a para cobrar\"",
    "qtd": 2
  },
  {
    "dia": "2026-04-24",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Sólo el chip no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-04-24",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Lector funciona lento",
    "qtd": 2
  },
  {
    "dia": "2026-04-24",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Pantalla rota",
    "qtd": 2
  },
  {
    "dia": "2026-04-24",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 2
  },
  {
    "dia": "2026-04-24",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensagem \"Sua Point parou de funcionar. Reinicie-a para cobrar\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-24",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-24",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 1
  },
  {
    "dia": "2026-04-24",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Init Config Error\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-24",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 1
  },
  {
    "dia": "2026-04-24",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 1
  },
  {
    "dia": "2026-04-24",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 1
  },
  {
    "dia": "2026-04-24",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 1
  },
  {
    "dia": "2026-04-24",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-24",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-24",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "Lector funciona lento",
    "qtd": 1
  },
  {
    "dia": "2026-04-24",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ningun punto de acceso encontrado\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-24",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla blanca cargando con logo MP / androind iniciando",
    "qtd": 1
  },
  {
    "dia": "2026-04-24",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-24",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Maquininha trava com mensagem \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-24",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 1
  },
  {
    "dia": "2026-04-24",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Irruption\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-24",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-24",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Maquininha trava com a luz ao redor da point ligada em azul",
    "qtd": 1
  },
  {
    "dia": "2026-04-24",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-04-23",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 226
  },
  {
    "dia": "2026-04-23",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 110
  },
  {
    "dia": "2026-04-23",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 103
  },
  {
    "dia": "2026-04-23",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 57
  },
  {
    "dia": "2026-04-23",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 55
  },
  {
    "dia": "2026-04-23",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 55
  },
  {
    "dia": "2026-04-23",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 38
  },
  {
    "dia": "2026-04-23",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 30
  },
  {
    "dia": "2026-04-23",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 30
  },
  {
    "dia": "2026-04-23",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 28
  },
  {
    "dia": "2026-04-23",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Otros Problemas",
    "qtd": 15
  },
  {
    "dia": "2026-04-23",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 15
  },
  {
    "dia": "2026-04-23",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 14
  },
  {
    "dia": "2026-04-23",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 13
  },
  {
    "dia": "2026-04-23",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 11
  },
  {
    "dia": "2026-04-23",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Otros Problemas",
    "qtd": 11
  },
  {
    "dia": "2026-04-23",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 10
  },
  {
    "dia": "2026-04-23",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 10
  },
  {
    "dia": "2026-04-23",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 9
  },
  {
    "dia": "2026-04-23",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 7
  },
  {
    "dia": "2026-04-23",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 7
  },
  {
    "dia": "2026-04-23",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 7
  },
  {
    "dia": "2026-04-23",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 6
  },
  {
    "dia": "2026-04-23",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 6
  },
  {
    "dia": "2026-04-23",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 6
  },
  {
    "dia": "2026-04-23",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 5
  },
  {
    "dia": "2026-04-23",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 5
  },
  {
    "dia": "2026-04-23",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 4
  },
  {
    "dia": "2026-04-23",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Lector funciona lento",
    "qtd": 4
  },
  {
    "dia": "2026-04-23",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Lector funciona lento",
    "qtd": 4
  },
  {
    "dia": "2026-04-23",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 4
  },
  {
    "dia": "2026-04-23",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 3
  },
  {
    "dia": "2026-04-23",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Visor tactil no funciona",
    "qtd": 3
  },
  {
    "dia": "2026-04-23",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla blanca cargando con logo MP / androind iniciando",
    "qtd": 3
  },
  {
    "dia": "2026-04-23",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 3
  },
  {
    "dia": "2026-04-23",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Teclado/botón roto",
    "qtd": 3
  },
  {
    "dia": "2026-04-23",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla rota",
    "qtd": 3
  },
  {
    "dia": "2026-04-23",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 3
  },
  {
    "dia": "2026-04-23",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Pantalla rota",
    "qtd": 3
  },
  {
    "dia": "2026-04-23",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 2
  },
  {
    "dia": "2026-04-23",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 2
  },
  {
    "dia": "2026-04-23",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Visor tactil no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-04-23",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 2
  },
  {
    "dia": "2026-04-23",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Smartpos Paró\"",
    "qtd": 2
  },
  {
    "dia": "2026-04-23",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Teclado/botón roto",
    "qtd": 2
  },
  {
    "dia": "2026-04-23",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 2
  },
  {
    "dia": "2026-04-23",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Sólo el chip no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-04-23",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla blanca cargando con logo MP / androind iniciando",
    "qtd": 1
  },
  {
    "dia": "2026-04-23",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 1
  },
  {
    "dia": "2026-04-23",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 1
  },
  {
    "dia": "2026-04-23",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Smartpos Paró\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-23",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla blanca cargando con mensaje \"buscando información\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-23",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Defeito no leitor do chip",
    "qtd": 1
  },
  {
    "dia": "2026-04-23",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Lector funciona lento",
    "qtd": 1
  },
  {
    "dia": "2026-04-23",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 1
  },
  {
    "dia": "2026-04-23",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensagem \"Sua Point parou de funcionar. Reinicie-a para cobrar\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-23",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-23",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensagem \"Sua Point parou de funcionar. Reinicie-a para cobrar\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-23",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-22",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 268
  },
  {
    "dia": "2026-04-22",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 115
  },
  {
    "dia": "2026-04-22",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 113
  },
  {
    "dia": "2026-04-22",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 73
  },
  {
    "dia": "2026-04-22",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 71
  },
  {
    "dia": "2026-04-22",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 47
  },
  {
    "dia": "2026-04-22",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 30
  },
  {
    "dia": "2026-04-22",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 27
  },
  {
    "dia": "2026-04-22",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 25
  },
  {
    "dia": "2026-04-22",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 22
  },
  {
    "dia": "2026-04-22",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 20
  },
  {
    "dia": "2026-04-22",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 10
  },
  {
    "dia": "2026-04-22",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 10
  },
  {
    "dia": "2026-04-22",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 9
  },
  {
    "dia": "2026-04-22",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Otros Problemas",
    "qtd": 9
  },
  {
    "dia": "2026-04-22",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 9
  },
  {
    "dia": "2026-04-22",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 7
  },
  {
    "dia": "2026-04-22",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Otros Problemas",
    "qtd": 6
  },
  {
    "dia": "2026-04-22",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 6
  },
  {
    "dia": "2026-04-22",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 5
  },
  {
    "dia": "2026-04-22",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 5
  },
  {
    "dia": "2026-04-22",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Visor tactil no funciona",
    "qtd": 5
  },
  {
    "dia": "2026-04-22",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 5
  },
  {
    "dia": "2026-04-22",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 4
  },
  {
    "dia": "2026-04-22",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 4
  },
  {
    "dia": "2026-04-22",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 4
  },
  {
    "dia": "2026-04-22",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla rota",
    "qtd": 3
  },
  {
    "dia": "2026-04-22",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 3
  },
  {
    "dia": "2026-04-22",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 3
  },
  {
    "dia": "2026-04-22",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Pantalla rota",
    "qtd": 3
  },
  {
    "dia": "2026-04-22",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 3
  },
  {
    "dia": "2026-04-22",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 3
  },
  {
    "dia": "2026-04-22",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 3
  },
  {
    "dia": "2026-04-22",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Lector funciona lento",
    "qtd": 2
  },
  {
    "dia": "2026-04-22",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Defeito no leitor do chip",
    "qtd": 2
  },
  {
    "dia": "2026-04-22",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Visor tactil no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-04-22",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 2
  },
  {
    "dia": "2026-04-22",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Teclado/botón roto",
    "qtd": 2
  },
  {
    "dia": "2026-04-22",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el wifi no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-04-22",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 2
  },
  {
    "dia": "2026-04-22",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-22",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-22",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Irruption\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-22",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-22",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 1
  },
  {
    "dia": "2026-04-22",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-04-22",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 1
  },
  {
    "dia": "2026-04-22",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 1
  },
  {
    "dia": "2026-04-22",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensagem \"Sua Point parou de funcionar. Reinicie-a para cobrar\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-22",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Defeito no leitor do chip",
    "qtd": 1
  },
  {
    "dia": "2026-04-22",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 1
  },
  {
    "dia": "2026-04-22",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensagem \"Sua Point parou de funcionar. Reinicie-a para cobrar\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-22",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 1
  },
  {
    "dia": "2026-04-22",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-04-22",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-04-22",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 1
  },
  {
    "dia": "2026-04-22",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-22",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Lector funciona lento",
    "qtd": 1
  },
  {
    "dia": "2026-04-22",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla blanca cargando con logo MP / androind iniciando",
    "qtd": 1
  },
  {
    "dia": "2026-04-22",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Tamper detected\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-22",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-22",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 172
  },
  {
    "dia": "2026-04-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 83
  },
  {
    "dia": "2026-04-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 71
  },
  {
    "dia": "2026-04-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 60
  },
  {
    "dia": "2026-04-21",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 30
  },
  {
    "dia": "2026-04-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 28
  },
  {
    "dia": "2026-04-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 21
  },
  {
    "dia": "2026-04-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 15
  },
  {
    "dia": "2026-04-21",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 10
  },
  {
    "dia": "2026-04-21",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 7
  },
  {
    "dia": "2026-04-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 4
  },
  {
    "dia": "2026-04-21",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 4
  },
  {
    "dia": "2026-04-21",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Otros Problemas",
    "qtd": 4
  },
  {
    "dia": "2026-04-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 4
  },
  {
    "dia": "2026-04-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 3
  },
  {
    "dia": "2026-04-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 3
  },
  {
    "dia": "2026-04-21",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el chip no funciona",
    "qtd": 3
  },
  {
    "dia": "2026-04-21",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 3
  },
  {
    "dia": "2026-04-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 3
  },
  {
    "dia": "2026-04-21",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 3
  },
  {
    "dia": "2026-04-21",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 2
  },
  {
    "dia": "2026-04-21",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 2
  },
  {
    "dia": "2026-04-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 2
  },
  {
    "dia": "2026-04-21",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 2
  },
  {
    "dia": "2026-04-21",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 2
  },
  {
    "dia": "2026-04-21",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla rota",
    "qtd": 2
  },
  {
    "dia": "2026-04-21",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 2
  },
  {
    "dia": "2026-04-21",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 2
  },
  {
    "dia": "2026-04-21",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 2
  },
  {
    "dia": "2026-04-21",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 2
  },
  {
    "dia": "2026-04-21",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-21",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-04-21",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Lector funciona lento",
    "qtd": 1
  },
  {
    "dia": "2026-04-21",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 1
  },
  {
    "dia": "2026-04-21",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-04-21",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-21",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Otros Problemas",
    "qtd": 1
  },
  {
    "dia": "2026-04-21",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensagem \"Sua Point parou de funcionar. Reinicie-a para cobrar\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-21",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Pantalla blanca cargando con mensaje \"buscando información\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-21",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 1
  },
  {
    "dia": "2026-04-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 198
  },
  {
    "dia": "2026-04-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 110
  },
  {
    "dia": "2026-04-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 83
  },
  {
    "dia": "2026-04-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 83
  },
  {
    "dia": "2026-04-20",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 67
  },
  {
    "dia": "2026-04-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 31
  },
  {
    "dia": "2026-04-20",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 26
  },
  {
    "dia": "2026-04-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 26
  },
  {
    "dia": "2026-04-20",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 21
  },
  {
    "dia": "2026-04-20",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 15
  },
  {
    "dia": "2026-04-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 11
  },
  {
    "dia": "2026-04-20",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 9
  },
  {
    "dia": "2026-04-20",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"HW attack\"",
    "qtd": 8
  },
  {
    "dia": "2026-04-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 8
  },
  {
    "dia": "2026-04-20",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 7
  },
  {
    "dia": "2026-04-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 7
  },
  {
    "dia": "2026-04-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 6
  },
  {
    "dia": "2026-04-20",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 6
  },
  {
    "dia": "2026-04-20",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Otros Problemas",
    "qtd": 5
  },
  {
    "dia": "2026-04-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 5
  },
  {
    "dia": "2026-04-20",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 5
  },
  {
    "dia": "2026-04-20",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 4
  },
  {
    "dia": "2026-04-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 4
  },
  {
    "dia": "2026-04-20",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Lector funciona lento",
    "qtd": 3
  },
  {
    "dia": "2026-04-20",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 3
  },
  {
    "dia": "2026-04-20",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla rota",
    "qtd": 3
  },
  {
    "dia": "2026-04-20",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Pantalla rota",
    "qtd": 3
  },
  {
    "dia": "2026-04-20",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 3
  },
  {
    "dia": "2026-04-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 3
  },
  {
    "dia": "2026-04-20",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Teclado/botón roto",
    "qtd": 3
  },
  {
    "dia": "2026-04-20",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 3
  },
  {
    "dia": "2026-04-20",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 3
  },
  {
    "dia": "2026-04-20",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla blanca cargando con mensaje \"buscando información\"",
    "qtd": 2
  },
  {
    "dia": "2026-04-20",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 2
  },
  {
    "dia": "2026-04-20",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Tamper detected\"",
    "qtd": 2
  },
  {
    "dia": "2026-04-20",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla blanca cargando con logo MP / androind iniciando",
    "qtd": 2
  },
  {
    "dia": "2026-04-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 2
  },
  {
    "dia": "2026-04-20",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Lector funciona lento",
    "qtd": 2
  },
  {
    "dia": "2026-04-20",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 2
  },
  {
    "dia": "2026-04-20",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Visor tactil no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-04-20",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Otros Problemas",
    "qtd": 2
  },
  {
    "dia": "2026-04-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 2
  },
  {
    "dia": "2026-04-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 1
  },
  {
    "dia": "2026-04-20",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 1
  },
  {
    "dia": "2026-04-20",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 1
  },
  {
    "dia": "2026-04-20",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-20",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el wifi no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-20",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 1
  },
  {
    "dia": "2026-04-20",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Smartpos Paró\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-20",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-20",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensagem \"Sua Point parou de funcionar. Reinicie-a para cobrar\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-20",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-04-20",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"No conecta con MP\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-20",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 1
  },
  {
    "dia": "2026-04-20",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-20",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Unauthorized\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-20",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 1
  },
  {
    "dia": "2026-04-20",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 1
  },
  {
    "dia": "2026-04-20",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Smartpos Paró\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-20",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensagem \"Password Required\" / \"Enter password\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-20",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Init Config Error\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-20",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-04-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 112
  },
  {
    "dia": "2026-04-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 53
  },
  {
    "dia": "2026-04-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 50
  },
  {
    "dia": "2026-04-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 47
  },
  {
    "dia": "2026-04-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 23
  },
  {
    "dia": "2026-04-19",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 13
  },
  {
    "dia": "2026-04-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 12
  },
  {
    "dia": "2026-04-19",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 11
  },
  {
    "dia": "2026-04-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 9
  },
  {
    "dia": "2026-04-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 6
  },
  {
    "dia": "2026-04-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 5
  },
  {
    "dia": "2026-04-19",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 5
  },
  {
    "dia": "2026-04-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 5
  },
  {
    "dia": "2026-04-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 3
  },
  {
    "dia": "2026-04-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 3
  },
  {
    "dia": "2026-04-19",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 2
  },
  {
    "dia": "2026-04-19",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 2
  },
  {
    "dia": "2026-04-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 2
  },
  {
    "dia": "2026-04-19",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 2
  },
  {
    "dia": "2026-04-19",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-04-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Lector funciona lento",
    "qtd": 1
  },
  {
    "dia": "2026-04-19",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Visor tactil no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-19",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 1
  },
  {
    "dia": "2026-04-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 1
  },
  {
    "dia": "2026-04-19",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Lector no atiende mis necesidades de tasas y plazos",
    "qtd": 1
  },
  {
    "dia": "2026-04-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 160
  },
  {
    "dia": "2026-04-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 107
  },
  {
    "dia": "2026-04-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 54
  },
  {
    "dia": "2026-04-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 53
  },
  {
    "dia": "2026-04-18",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 29
  },
  {
    "dia": "2026-04-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 29
  },
  {
    "dia": "2026-04-18",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 20
  },
  {
    "dia": "2026-04-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 13
  },
  {
    "dia": "2026-04-18",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 12
  },
  {
    "dia": "2026-04-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 12
  },
  {
    "dia": "2026-04-18",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 7
  },
  {
    "dia": "2026-04-18",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 5
  },
  {
    "dia": "2026-04-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 5
  },
  {
    "dia": "2026-04-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 5
  },
  {
    "dia": "2026-04-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 5
  },
  {
    "dia": "2026-04-18",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Otros Problemas",
    "qtd": 4
  },
  {
    "dia": "2026-04-18",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 4
  },
  {
    "dia": "2026-04-18",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Lector funciona lento",
    "qtd": 4
  },
  {
    "dia": "2026-04-18",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 4
  },
  {
    "dia": "2026-04-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 3
  },
  {
    "dia": "2026-04-18",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 3
  },
  {
    "dia": "2026-04-18",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Otros Problemas",
    "qtd": 3
  },
  {
    "dia": "2026-04-18",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 3
  },
  {
    "dia": "2026-04-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 2
  },
  {
    "dia": "2026-04-18",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 2
  },
  {
    "dia": "2026-04-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Sólo el chip no funciona",
    "qtd": 2
  },
  {
    "dia": "2026-04-18",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 2
  },
  {
    "dia": "2026-04-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 2
  },
  {
    "dia": "2026-04-18",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 2
  },
  {
    "dia": "2026-04-18",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 1
  },
  {
    "dia": "2026-04-18",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 1
  },
  {
    "dia": "2026-04-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 1
  },
  {
    "dia": "2026-04-18",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el wifi no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 1
  },
  {
    "dia": "2026-04-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensagem \"Sua Point parou de funcionar. Reinicie-a para cobrar\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-18",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 1
  },
  {
    "dia": "2026-04-18",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-04-18",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-18",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla rota",
    "qtd": 1
  },
  {
    "dia": "2026-04-18",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 1
  },
  {
    "dia": "2026-04-18",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-18",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Init Config Error\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-18",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Smartpos Paró\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-18",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 1
  },
  {
    "dia": "2026-04-18",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-18",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla blanca cargando con logo MP / androind iniciando",
    "qtd": 1
  },
  {
    "dia": "2026-04-18",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Defeito no leitor do chip",
    "qtd": 1
  },
  {
    "dia": "2026-04-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 189
  },
  {
    "dia": "2026-04-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 108
  },
  {
    "dia": "2026-04-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 67
  },
  {
    "dia": "2026-04-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 58
  },
  {
    "dia": "2026-04-17",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 58
  },
  {
    "dia": "2026-04-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 40
  },
  {
    "dia": "2026-04-17",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Otros Problemas",
    "qtd": 26
  },
  {
    "dia": "2026-04-17",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 21
  },
  {
    "dia": "2026-04-17",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 21
  },
  {
    "dia": "2026-04-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 18
  },
  {
    "dia": "2026-04-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Otros Problemas",
    "qtd": 16
  },
  {
    "dia": "2026-04-17",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Otros Problemas",
    "qtd": 10
  },
  {
    "dia": "2026-04-17",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 10
  },
  {
    "dia": "2026-04-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 8
  },
  {
    "dia": "2026-04-17",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 8
  },
  {
    "dia": "2026-04-17",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 7
  },
  {
    "dia": "2026-04-17",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el chip no funciona",
    "qtd": 6
  },
  {
    "dia": "2026-04-17",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 6
  },
  {
    "dia": "2026-04-17",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 5
  },
  {
    "dia": "2026-04-17",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 5
  },
  {
    "dia": "2026-04-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 4
  },
  {
    "dia": "2026-04-17",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla rota",
    "qtd": 4
  },
  {
    "dia": "2026-04-17",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Otros Problemas",
    "qtd": 4
  },
  {
    "dia": "2026-04-17",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 4
  },
  {
    "dia": "2026-04-17",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 4
  },
  {
    "dia": "2026-04-17",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 3
  },
  {
    "dia": "2026-04-17",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Pantalla rota",
    "qtd": 3
  },
  {
    "dia": "2026-04-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 3
  },
  {
    "dia": "2026-04-17",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Visor tactil no funciona",
    "qtd": 3
  },
  {
    "dia": "2026-04-17",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Visor tactil no funciona",
    "qtd": 3
  },
  {
    "dia": "2026-04-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El lector no reconoce la tarjeta (diferentes tarjetas y clientes)",
    "qtd": 3
  },
  {
    "dia": "2026-04-17",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No es posible imprimir el comprobante",
    "qtd": 3
  },
  {
    "dia": "2026-04-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Bloqueo de seguridad\"",
    "qtd": 2
  },
  {
    "dia": "2026-04-17",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Teclado/botón roto",
    "qtd": 2
  },
  {
    "dia": "2026-04-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ped Tampered\"",
    "qtd": 2
  },
  {
    "dia": "2026-04-17",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Lector funciona lento",
    "qtd": 2
  },
  {
    "dia": "2026-04-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-17",
    "site": "MLB",
    "n1": "CX_NIVEL_2",
    "n2": "CX_NIVEL_2",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 1
  },
  {
    "dia": "2026-04-17",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Pantalla blanca cargando con logo MP / androind iniciando",
    "qtd": 1
  },
  {
    "dia": "2026-04-17",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"HW ATTACK. Sua Point não funciona. Peça a troca em mercadopago\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-04-17",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Sólo el wifi no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-17",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-17",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Init Config Error\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-17",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensagem \"Password Required\" / \"Enter password\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-17",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 1
  },
  {
    "dia": "2026-04-17",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Sólo el chip no funciona",
    "qtd": 1
  },
  {
    "dia": "2026-04-17",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla blanca cargando con logo MP / androind iniciando",
    "qtd": 1
  },
  {
    "dia": "2026-04-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_CHAT",
    "motivo": "Mi dispositivo no reconoce el lector",
    "qtd": 1
  },
  {
    "dia": "2026-04-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "El chip y wifi no funcionan",
    "qtd": 1
  },
  {
    "dia": "2026-04-17",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Teclado/botón roto",
    "qtd": 1
  },
  {
    "dia": "2026-04-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Mensaje \"Ningun punto de acceso encontrado\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "HELP_PORTAL",
    "motivo": "Pantalla blanca cargando y sin mensaje",
    "qtd": 1
  },
  {
    "dia": "2026-04-17",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "No permite cobrar con NFC (la luz azul no enciende)",
    "qtd": 1
  },
  {
    "dia": "2026-04-17",
    "site": "MLB",
    "n1": "FDV",
    "n2": "FDV",
    "motivo": "Pantalla blanca cargando con mensaje \"buscando información\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-17",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Defeito no Leitor de Cartões",
    "qtd": 1
  },
  {
    "dia": "2026-04-17",
    "site": "MLB",
    "n1": "CERTIFIED_CONSULTANT",
    "n2": "CERTIFIED_CONSULTANT",
    "motivo": "Mensaje \"Escaneie o código QR para pedir a troca dessa maquininha\"",
    "qtd": 1
  },
  {
    "dia": "2026-04-17",
    "site": "MLB",
    "n1": "FAQ",
    "n2": "MAXWELL_FORM",
    "motivo": "El lector no se prende o no se carga",
    "qtd": 1
  },
  {
    "dia": "2026-04-17",
    "site": "MLB",
    "n1": "CX",
    "n2": "CX",
    "motivo": "Mensaje \"No es posible hacer ventas\"",
    "qtd": 1
  }
],

  // ── BLOQUEIOS DE POLITICA DE TROCAS ─────────────────────────
  // Multi-site | REPAIR | Set/25+
  // Populado via: python queries/blocked_policy.py
  // Estrutura: { dia:'YYYY-MM-DD', site, canal:'FORM'|'CX'|'MAXWELL', qtd_bloqueados }
  blocked: [
  {
    "dia": "2026-05-22",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 9
  },
  {
    "dia": "2026-05-22",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 7
  },
  {
    "dia": "2026-05-22",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 36
  },
  {
    "dia": "2026-05-22",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 24
  },
  {
    "dia": "2026-05-22",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 3
  },
  {
    "dia": "2026-05-22",
    "site": "MLC",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-05-22",
    "site": "MLM",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 6
  },
  {
    "dia": "2026-05-22",
    "site": "MLM",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 7
  },
  {
    "dia": "2026-05-21",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 9
  },
  {
    "dia": "2026-05-21",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 5
  },
  {
    "dia": "2026-05-21",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 203
  },
  {
    "dia": "2026-05-21",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 38
  },
  {
    "dia": "2026-05-21",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 3
  },
  {
    "dia": "2026-05-21",
    "site": "MLC",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-05-21",
    "site": "MLM",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-05-21",
    "site": "MLM",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 2
  },
  {
    "dia": "2026-05-20",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 12
  },
  {
    "dia": "2026-05-20",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 5
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 265
  },
  {
    "dia": "2026-05-20",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 47
  },
  {
    "dia": "2026-05-20",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 6
  },
  {
    "dia": "2026-05-20",
    "site": "MLC",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 2
  },
  {
    "dia": "2026-05-20",
    "site": "MLM",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 2
  },
  {
    "dia": "2026-05-20",
    "site": "MLM",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 3
  },
  {
    "dia": "2026-05-19",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 25
  },
  {
    "dia": "2026-05-19",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 7
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 271
  },
  {
    "dia": "2026-05-19",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 41
  },
  {
    "dia": "2026-05-19",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 3
  },
  {
    "dia": "2026-05-19",
    "site": "MLC",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 2
  },
  {
    "dia": "2026-05-19",
    "site": "MLM",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 3
  },
  {
    "dia": "2026-05-19",
    "site": "MLM",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 2
  },
  {
    "dia": "2026-05-18",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 18
  },
  {
    "dia": "2026-05-18",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 11
  },
  {
    "dia": "2026-05-18",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 243
  },
  {
    "dia": "2026-05-18",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 31
  },
  {
    "dia": "2026-05-18",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 4
  },
  {
    "dia": "2026-05-18",
    "site": "MLM",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-05-18",
    "site": "MLM",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 2
  },
  {
    "dia": "2026-05-17",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 7
  },
  {
    "dia": "2026-05-17",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-05-17",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 161
  },
  {
    "dia": "2026-05-17",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 25
  },
  {
    "dia": "2026-05-17",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-05-16",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 11
  },
  {
    "dia": "2026-05-16",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 4
  },
  {
    "dia": "2026-05-16",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 170
  },
  {
    "dia": "2026-05-16",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 37
  },
  {
    "dia": "2026-05-16",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 3
  },
  {
    "dia": "2026-05-16",
    "site": "MLC",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-05-15",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 21
  },
  {
    "dia": "2026-05-15",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 4
  },
  {
    "dia": "2026-05-15",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 218
  },
  {
    "dia": "2026-05-15",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 44
  },
  {
    "dia": "2026-05-15",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 6
  },
  {
    "dia": "2026-05-15",
    "site": "MLC",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-05-15",
    "site": "MLM",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-05-15",
    "site": "MLM",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 2
  },
  {
    "dia": "2026-05-14",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 24
  },
  {
    "dia": "2026-05-14",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 6
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 274
  },
  {
    "dia": "2026-05-14",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 33
  },
  {
    "dia": "2026-05-14",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 5
  },
  {
    "dia": "2026-05-14",
    "site": "MLC",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-05-14",
    "site": "MLM",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 2
  },
  {
    "dia": "2026-05-13",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 32
  },
  {
    "dia": "2026-05-13",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 2
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 253
  },
  {
    "dia": "2026-05-13",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 39
  },
  {
    "dia": "2026-05-13",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 7
  },
  {
    "dia": "2026-05-13",
    "site": "MLC",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 3
  },
  {
    "dia": "2026-05-13",
    "site": "MLM",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 3
  },
  {
    "dia": "2026-05-13",
    "site": "MLM",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-05-12",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 30
  },
  {
    "dia": "2026-05-12",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 3
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 259
  },
  {
    "dia": "2026-05-12",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 43
  },
  {
    "dia": "2026-05-12",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 4
  },
  {
    "dia": "2026-05-12",
    "site": "MLC",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 2
  },
  {
    "dia": "2026-05-12",
    "site": "MLM",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-05-11",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 24
  },
  {
    "dia": "2026-05-11",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 7
  },
  {
    "dia": "2026-05-11",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 225
  },
  {
    "dia": "2026-05-11",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 63
  },
  {
    "dia": "2026-05-11",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 4
  },
  {
    "dia": "2026-05-11",
    "site": "MLC",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 2
  },
  {
    "dia": "2026-05-11",
    "site": "MLM",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 3
  },
  {
    "dia": "2026-05-11",
    "site": "MLM",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-05-10",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 11
  },
  {
    "dia": "2026-05-10",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-05-10",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 130
  },
  {
    "dia": "2026-05-10",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 20
  },
  {
    "dia": "2026-05-10",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-05-10",
    "site": "MLM",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-05-10",
    "site": "MLM",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 2
  },
  {
    "dia": "2026-05-09",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 24
  },
  {
    "dia": "2026-05-09",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 11
  },
  {
    "dia": "2026-05-09",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 188
  },
  {
    "dia": "2026-05-09",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 24
  },
  {
    "dia": "2026-05-09",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 2
  },
  {
    "dia": "2026-05-09",
    "site": "MLM",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-05-09",
    "site": "MLM",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 3
  },
  {
    "dia": "2026-05-08",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 22
  },
  {
    "dia": "2026-05-08",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 7
  },
  {
    "dia": "2026-05-08",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 214
  },
  {
    "dia": "2026-05-08",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 52
  },
  {
    "dia": "2026-05-08",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 16
  },
  {
    "dia": "2026-05-08",
    "site": "MLM",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-05-08",
    "site": "MLM",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-05-07",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 17
  },
  {
    "dia": "2026-05-07",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 11
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 171
  },
  {
    "dia": "2026-05-07",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 52
  },
  {
    "dia": "2026-05-07",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-05-07",
    "site": "MLC",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 16
  },
  {
    "dia": "2026-05-07",
    "site": "MLM",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 2
  },
  {
    "dia": "2026-05-06",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 3
  },
  {
    "dia": "2026-05-06",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 11
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 7
  },
  {
    "dia": "2026-05-06",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 37
  },
  {
    "dia": "2026-05-06",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 3
  },
  {
    "dia": "2026-05-06",
    "site": "MLC",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 2
  },
  {
    "dia": "2026-05-06",
    "site": "MLM",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-05-06",
    "site": "MLM",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-05-05",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 3
  },
  {
    "dia": "2026-05-05",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 13
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 22
  },
  {
    "dia": "2026-05-05",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 33
  },
  {
    "dia": "2026-05-05",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 6
  },
  {
    "dia": "2026-05-05",
    "site": "MLM",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-05-05",
    "site": "MLM",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-05-04",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 27
  },
  {
    "dia": "2026-05-04",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 9
  },
  {
    "dia": "2026-05-04",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 184
  },
  {
    "dia": "2026-05-04",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 43
  },
  {
    "dia": "2026-05-04",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 4
  },
  {
    "dia": "2026-05-04",
    "site": "MLM",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-05-03",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 40
  },
  {
    "dia": "2026-05-03",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 2
  },
  {
    "dia": "2026-05-03",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 147
  },
  {
    "dia": "2026-05-03",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 22
  },
  {
    "dia": "2026-05-03",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-05-03",
    "site": "MLM",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-05-02",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 31
  },
  {
    "dia": "2026-05-02",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 3
  },
  {
    "dia": "2026-05-02",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 169
  },
  {
    "dia": "2026-05-02",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 26
  },
  {
    "dia": "2026-05-02",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 3
  },
  {
    "dia": "2026-05-02",
    "site": "MLM",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-05-01",
    "site": "MLA",
    "canal": "CX",
    "qtd_bloqueados": 37
  },
  {
    "dia": "2026-05-01",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 16
  },
  {
    "dia": "2026-05-01",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 5
  },
  {
    "dia": "2026-05-01",
    "site": "MLB",
    "canal": "CX",
    "qtd_bloqueados": 681
  },
  {
    "dia": "2026-05-01",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 182
  },
  {
    "dia": "2026-05-01",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 41
  },
  {
    "dia": "2026-05-01",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-05-01",
    "site": "MLM",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 3
  },
  {
    "dia": "2026-05-01",
    "site": "MLM",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-04-30",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 48
  },
  {
    "dia": "2026-04-30",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 9
  },
  {
    "dia": "2026-04-30",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 242
  },
  {
    "dia": "2026-04-30",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 44
  },
  {
    "dia": "2026-04-30",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 6
  },
  {
    "dia": "2026-04-30",
    "site": "MLM",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-04-29",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 52
  },
  {
    "dia": "2026-04-29",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 3
  },
  {
    "dia": "2026-04-29",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 248
  },
  {
    "dia": "2026-04-29",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 45
  },
  {
    "dia": "2026-04-29",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 5
  },
  {
    "dia": "2026-04-29",
    "site": "MLM",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 3
  },
  {
    "dia": "2026-04-29",
    "site": "MLM",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-04-28",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 71
  },
  {
    "dia": "2026-04-28",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 5
  },
  {
    "dia": "2026-04-28",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 260
  },
  {
    "dia": "2026-04-28",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 26
  },
  {
    "dia": "2026-04-28",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 2
  },
  {
    "dia": "2026-04-28",
    "site": "MLC",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-04-28",
    "site": "MLM",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 2
  },
  {
    "dia": "2026-04-28",
    "site": "MLM",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 4
  },
  {
    "dia": "2026-04-27",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 34
  },
  {
    "dia": "2026-04-27",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 5
  },
  {
    "dia": "2026-04-27",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 112
  },
  {
    "dia": "2026-04-27",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 36
  },
  {
    "dia": "2026-04-27",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 4
  },
  {
    "dia": "2026-04-27",
    "site": "MLC",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-04-27",
    "site": "MLM",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 2
  },
  {
    "dia": "2026-04-27",
    "site": "MLM",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 3
  },
  {
    "dia": "2026-04-26",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 17
  },
  {
    "dia": "2026-04-26",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 4
  },
  {
    "dia": "2026-04-26",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 161
  },
  {
    "dia": "2026-04-26",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 25
  },
  {
    "dia": "2026-04-26",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 2
  },
  {
    "dia": "2026-04-26",
    "site": "MLM",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-04-25",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 46
  },
  {
    "dia": "2026-04-25",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 4
  },
  {
    "dia": "2026-04-25",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 194
  },
  {
    "dia": "2026-04-25",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 40
  },
  {
    "dia": "2026-04-25",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 2
  },
  {
    "dia": "2026-04-25",
    "site": "MLM",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-04-24",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 35
  },
  {
    "dia": "2026-04-24",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 5
  },
  {
    "dia": "2026-04-24",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 112
  },
  {
    "dia": "2026-04-24",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 51
  },
  {
    "dia": "2026-04-24",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 3
  },
  {
    "dia": "2026-04-24",
    "site": "MLC",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-04-23",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 47
  },
  {
    "dia": "2026-04-23",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 10
  },
  {
    "dia": "2026-04-23",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 198
  },
  {
    "dia": "2026-04-23",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 49
  },
  {
    "dia": "2026-04-23",
    "site": "MLC",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-04-23",
    "site": "MLM",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-04-23",
    "site": "MLM",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-04-22",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 42
  },
  {
    "dia": "2026-04-22",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 9
  },
  {
    "dia": "2026-04-22",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 223
  },
  {
    "dia": "2026-04-22",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 42
  },
  {
    "dia": "2026-04-22",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-04-22",
    "site": "MLM",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-04-22",
    "site": "MLM",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 2
  },
  {
    "dia": "2026-04-21",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 38
  },
  {
    "dia": "2026-04-21",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 6
  },
  {
    "dia": "2026-04-21",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 182
  },
  {
    "dia": "2026-04-21",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 36
  },
  {
    "dia": "2026-04-21",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 5
  },
  {
    "dia": "2026-04-21",
    "site": "MLC",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-04-21",
    "site": "MLM",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-04-21",
    "site": "MLM",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 4
  },
  {
    "dia": "2026-04-20",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 56
  },
  {
    "dia": "2026-04-20",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 4
  },
  {
    "dia": "2026-04-20",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 197
  },
  {
    "dia": "2026-04-20",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 32
  },
  {
    "dia": "2026-04-20",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 2
  },
  {
    "dia": "2026-04-20",
    "site": "MLM",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-04-20",
    "site": "MLM",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-04-19",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 32
  },
  {
    "dia": "2026-04-19",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 5
  },
  {
    "dia": "2026-04-19",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 146
  },
  {
    "dia": "2026-04-19",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 19
  },
  {
    "dia": "2026-04-19",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 2
  },
  {
    "dia": "2026-04-19",
    "site": "MLC",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-04-19",
    "site": "MLM",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-04-18",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 38
  },
  {
    "dia": "2026-04-18",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-04-18",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 186
  },
  {
    "dia": "2026-04-18",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 25
  },
  {
    "dia": "2026-04-18",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 2
  },
  {
    "dia": "2026-04-17",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 58
  },
  {
    "dia": "2026-04-17",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 9
  },
  {
    "dia": "2026-04-17",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 232
  },
  {
    "dia": "2026-04-17",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 34
  },
  {
    "dia": "2026-04-17",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 2
  },
  {
    "dia": "2026-04-17",
    "site": "MLC",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-04-17",
    "site": "MLM",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 2
  },
  {
    "dia": "2026-04-16",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 57
  },
  {
    "dia": "2026-04-16",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 8
  },
  {
    "dia": "2026-04-16",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 258
  },
  {
    "dia": "2026-04-16",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 46
  },
  {
    "dia": "2026-04-16",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 8
  },
  {
    "dia": "2026-04-16",
    "site": "MLC",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 2
  },
  {
    "dia": "2026-04-16",
    "site": "MLM",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 2
  },
  {
    "dia": "2026-04-16",
    "site": "MLM",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-04-15",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 60
  },
  {
    "dia": "2026-04-15",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 9
  },
  {
    "dia": "2026-04-15",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 250
  },
  {
    "dia": "2026-04-15",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 29
  },
  {
    "dia": "2026-04-15",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 9
  },
  {
    "dia": "2026-04-15",
    "site": "MLC",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-04-15",
    "site": "MLM",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 2
  },
  {
    "dia": "2026-04-15",
    "site": "MLM",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 4
  },
  {
    "dia": "2026-04-14",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 80
  },
  {
    "dia": "2026-04-14",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 8
  },
  {
    "dia": "2026-04-14",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 264
  },
  {
    "dia": "2026-04-14",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 42
  },
  {
    "dia": "2026-04-14",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 7
  },
  {
    "dia": "2026-04-14",
    "site": "MLC",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 3
  },
  {
    "dia": "2026-04-14",
    "site": "MLM",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-04-14",
    "site": "MLM",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-04-13",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 81
  },
  {
    "dia": "2026-04-13",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 7
  },
  {
    "dia": "2026-04-13",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 233
  },
  {
    "dia": "2026-04-13",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 58
  },
  {
    "dia": "2026-04-13",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 4
  },
  {
    "dia": "2026-04-13",
    "site": "MLC",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 3
  },
  {
    "dia": "2026-04-13",
    "site": "MLM",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 2
  },
  {
    "dia": "2026-04-12",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 19
  },
  {
    "dia": "2026-04-12",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-04-12",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 178
  },
  {
    "dia": "2026-04-12",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 28
  },
  {
    "dia": "2026-04-12",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 3
  },
  {
    "dia": "2026-04-12",
    "site": "MLM",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 1
  },
  {
    "dia": "2026-04-11",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 41
  },
  {
    "dia": "2026-04-11",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 4
  },
  {
    "dia": "2026-04-11",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 191
  },
  {
    "dia": "2026-04-11",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 39
  },
  {
    "dia": "2026-04-11",
    "site": "MLC",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 6
  },
  {
    "dia": "2026-04-11",
    "site": "MLC",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 2
  },
  {
    "dia": "2026-04-11",
    "site": "MLM",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 2
  },
  {
    "dia": "2026-04-10",
    "site": "MLA",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 81
  },
  {
    "dia": "2026-04-10",
    "site": "MLA",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 6
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "canal": "MAXWELL_CHAT",
    "qtd_bloqueados": 248
  },
  {
    "dia": "2026-04-10",
    "site": "MLB",
    "canal": "MAXWELL_FORM",
    "qtd_bloqueados": 50
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
    "qtd_bloqueados": 5
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
    "qtd_bloqueados": 36
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
    "qtd_bloqueados": 37
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
    "qtd_bloqueados": 824
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
    "g1": 0,
    "g3": 0,
    "g4": 1322,
    "total": 1322,
    "g1_pct": 0.0,
    "g3_pct": 0.0,
    "g4_pct": 100.0
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
    "g1": 10,
    "g3": 0,
    "g4": 1469,
    "total": 1479,
    "g1_pct": 0.68,
    "g3_pct": 0.0,
    "g4_pct": 99.32
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
    "g1": 181,
    "g3": 0,
    "g4": 1766,
    "total": 1947,
    "g1_pct": 9.3,
    "g3_pct": 0.0,
    "g4_pct": 90.7
  },
  {
    "site": "MLA",
    "mes": "2025-03",
    "tipo": "SMB",
    "g1": 0,
    "g3": 0,
    "g4": 811,
    "total": 811,
    "g1_pct": 0.0,
    "g3_pct": 0.0,
    "g4_pct": 100.0
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
    "g1": 1372,
    "g3": 0,
    "g4": 2014,
    "total": 3386,
    "g1_pct": 40.52,
    "g3_pct": 0.0,
    "g4_pct": 59.48
  },
  {
    "site": "MLA",
    "mes": "2025-12",
    "tipo": "SMB",
    "g1": 199,
    "g3": 0,
    "g4": 1155,
    "total": 1354,
    "g1_pct": 14.7,
    "g3_pct": 0.0,
    "g4_pct": 85.3
  },
  {
    "site": "MLA",
    "mes": "2026-01",
    "tipo": "Longtail",
    "g1": 3039,
    "g3": 0,
    "g4": 1540,
    "total": 4579,
    "g1_pct": 66.37,
    "g3_pct": 0.0,
    "g4_pct": 33.63
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
    "g1": 5086,
    "g3": 0,
    "g4": 2980,
    "total": 8066,
    "g1_pct": 63.05,
    "g3_pct": 0.0,
    "g4_pct": 36.95
  },
  {
    "site": "MLA",
    "mes": "2026-02",
    "tipo": "SMB",
    "g1": 1079,
    "g3": 0,
    "g4": 6915,
    "total": 7994,
    "g1_pct": 13.5,
    "g3_pct": 0.0,
    "g4_pct": 86.5
  },
  {
    "site": "MLA",
    "mes": "2026-03",
    "tipo": "Longtail",
    "g1": 2448,
    "g3": 0,
    "g4": 799,
    "total": 3247,
    "g1_pct": 75.39,
    "g3_pct": 0.0,
    "g4_pct": 24.61
  },
  {
    "site": "MLA",
    "mes": "2026-03",
    "tipo": "SMB",
    "g1": 713,
    "g3": 0,
    "g4": 4790,
    "total": 5503,
    "g1_pct": 12.96,
    "g3_pct": 0.0,
    "g4_pct": 87.04
  },
  {
    "site": "MLA",
    "mes": "2026-04",
    "tipo": "Longtail",
    "g1": 1683,
    "g3": 0,
    "g4": 493,
    "total": 2176,
    "g1_pct": 77.34,
    "g3_pct": 0.0,
    "g4_pct": 22.66
  },
  {
    "site": "MLA",
    "mes": "2026-04",
    "tipo": "SMB",
    "g1": 682,
    "g3": 0,
    "g4": 2601,
    "total": 3283,
    "g1_pct": 20.77,
    "g3_pct": 0.0,
    "g4_pct": 79.23
  },
  {
    "site": "MLA",
    "mes": "2026-05",
    "tipo": "Longtail",
    "g1": 925,
    "g3": 0,
    "g4": 442,
    "total": 1367,
    "g1_pct": 67.67,
    "g3_pct": 0.0,
    "g4_pct": 32.33
  },
  {
    "site": "MLA",
    "mes": "2026-05",
    "tipo": "SMB",
    "g1": 287,
    "g3": 0,
    "g4": 1769,
    "total": 2056,
    "g1_pct": 13.96,
    "g3_pct": 0.0,
    "g4_pct": 86.04
  },
  {
    "site": "MLB",
    "mes": "2025-01",
    "tipo": "Longtail",
    "g1": 13,
    "g3": 903,
    "g4": 22732,
    "total": 23648,
    "g1_pct": 0.05,
    "g3_pct": 3.82,
    "g4_pct": 96.13
  },
  {
    "site": "MLB",
    "mes": "2025-01",
    "tipo": "SMB",
    "g1": 0,
    "g3": 2241,
    "g4": 3762,
    "total": 6003,
    "g1_pct": 0.0,
    "g3_pct": 37.33,
    "g4_pct": 62.67
  },
  {
    "site": "MLB",
    "mes": "2025-02",
    "tipo": "Longtail",
    "g1": 20,
    "g3": 714,
    "g4": 21737,
    "total": 22471,
    "g1_pct": 0.09,
    "g3_pct": 3.18,
    "g4_pct": 96.73
  },
  {
    "site": "MLB",
    "mes": "2025-02",
    "tipo": "SMB",
    "g1": 0,
    "g3": 2056,
    "g4": 3589,
    "total": 5645,
    "g1_pct": 0.0,
    "g3_pct": 36.42,
    "g4_pct": 63.58
  },
  {
    "site": "MLB",
    "mes": "2025-03",
    "tipo": "Longtail",
    "g1": 163,
    "g3": 814,
    "g4": 21609,
    "total": 22586,
    "g1_pct": 0.72,
    "g3_pct": 3.6,
    "g4_pct": 95.67
  },
  {
    "site": "MLB",
    "mes": "2025-03",
    "tipo": "SMB",
    "g1": 0,
    "g3": 2170,
    "g4": 4293,
    "total": 6463,
    "g1_pct": 0.0,
    "g3_pct": 33.58,
    "g4_pct": 66.42
  },
  {
    "site": "MLB",
    "mes": "2025-04",
    "tipo": "Longtail",
    "g1": 875,
    "g3": 815,
    "g4": 19927,
    "total": 21617,
    "g1_pct": 4.05,
    "g3_pct": 3.77,
    "g4_pct": 92.18
  },
  {
    "site": "MLB",
    "mes": "2025-04",
    "tipo": "SMB",
    "g1": 3,
    "g3": 2404,
    "g4": 4986,
    "total": 7393,
    "g1_pct": 0.04,
    "g3_pct": 32.52,
    "g4_pct": 67.44
  },
  {
    "site": "MLB",
    "mes": "2025-05",
    "tipo": "Longtail",
    "g1": 744,
    "g3": 829,
    "g4": 20299,
    "total": 21872,
    "g1_pct": 3.4,
    "g3_pct": 3.79,
    "g4_pct": 92.81
  },
  {
    "site": "MLB",
    "mes": "2025-05",
    "tipo": "SMB",
    "g1": 0,
    "g3": 2281,
    "g4": 4774,
    "total": 7055,
    "g1_pct": 0.0,
    "g3_pct": 32.33,
    "g4_pct": 67.67
  },
  {
    "site": "MLB",
    "mes": "2025-06",
    "tipo": "Longtail",
    "g1": 535,
    "g3": 785,
    "g4": 19271,
    "total": 20591,
    "g1_pct": 2.6,
    "g3_pct": 3.81,
    "g4_pct": 93.59
  },
  {
    "site": "MLB",
    "mes": "2025-06",
    "tipo": "SMB",
    "g1": 143,
    "g3": 2100,
    "g4": 4720,
    "total": 6963,
    "g1_pct": 2.05,
    "g3_pct": 30.16,
    "g4_pct": 67.79
  },
  {
    "site": "MLB",
    "mes": "2025-07",
    "tipo": "Longtail",
    "g1": 986,
    "g3": 768,
    "g4": 20214,
    "total": 21968,
    "g1_pct": 4.49,
    "g3_pct": 3.5,
    "g4_pct": 92.02
  },
  {
    "site": "MLB",
    "mes": "2025-07",
    "tipo": "SMB",
    "g1": 520,
    "g3": 2072,
    "g4": 5664,
    "total": 8256,
    "g1_pct": 6.3,
    "g3_pct": 25.1,
    "g4_pct": 68.6
  },
  {
    "site": "MLB",
    "mes": "2025-08",
    "tipo": "Longtail",
    "g1": 3455,
    "g3": 615,
    "g4": 18681,
    "total": 22751,
    "g1_pct": 15.19,
    "g3_pct": 2.7,
    "g4_pct": 82.11
  },
  {
    "site": "MLB",
    "mes": "2025-08",
    "tipo": "SMB",
    "g1": 687,
    "g3": 1803,
    "g4": 5712,
    "total": 8202,
    "g1_pct": 8.38,
    "g3_pct": 21.98,
    "g4_pct": 69.64
  },
  {
    "site": "MLB",
    "mes": "2025-09",
    "tipo": "Longtail",
    "g1": 4815,
    "g3": 529,
    "g4": 15207,
    "total": 20551,
    "g1_pct": 23.43,
    "g3_pct": 2.57,
    "g4_pct": 74.0
  },
  {
    "site": "MLB",
    "mes": "2025-09",
    "tipo": "SMB",
    "g1": 1038,
    "g3": 2573,
    "g4": 7489,
    "total": 11100,
    "g1_pct": 9.35,
    "g3_pct": 23.18,
    "g4_pct": 67.47
  },
  {
    "site": "MLB",
    "mes": "2025-10",
    "tipo": "Longtail",
    "g1": 5458,
    "g3": 607,
    "g4": 16082,
    "total": 22147,
    "g1_pct": 24.64,
    "g3_pct": 2.74,
    "g4_pct": 72.61
  },
  {
    "site": "MLB",
    "mes": "2025-10",
    "tipo": "SMB",
    "g1": 2035,
    "g3": 2298,
    "g4": 7562,
    "total": 11895,
    "g1_pct": 17.11,
    "g3_pct": 19.32,
    "g4_pct": 63.57
  },
  {
    "site": "MLB",
    "mes": "2025-11",
    "tipo": "Longtail",
    "g1": 3463,
    "g3": 495,
    "g4": 14650,
    "total": 18608,
    "g1_pct": 18.61,
    "g3_pct": 2.66,
    "g4_pct": 78.73
  },
  {
    "site": "MLB",
    "mes": "2025-11",
    "tipo": "SMB",
    "g1": 2457,
    "g3": 1686,
    "g4": 6432,
    "total": 10575,
    "g1_pct": 23.23,
    "g3_pct": 15.94,
    "g4_pct": 60.82
  },
  {
    "site": "MLB",
    "mes": "2025-12",
    "tipo": "Longtail",
    "g1": 2426,
    "g3": 332,
    "g4": 16777,
    "total": 19535,
    "g1_pct": 12.42,
    "g3_pct": 1.7,
    "g4_pct": 85.88
  },
  {
    "site": "MLB",
    "mes": "2025-12",
    "tipo": "SMB",
    "g1": 2454,
    "g3": 1574,
    "g4": 6520,
    "total": 10548,
    "g1_pct": 23.27,
    "g3_pct": 14.92,
    "g4_pct": 61.81
  },
  {
    "site": "MLB",
    "mes": "2026-01",
    "tipo": "Longtail",
    "g1": 4314,
    "g3": 313,
    "g4": 18712,
    "total": 23339,
    "g1_pct": 18.48,
    "g3_pct": 1.34,
    "g4_pct": 80.17
  },
  {
    "site": "MLB",
    "mes": "2026-01",
    "tipo": "SMB",
    "g1": 3380,
    "g3": 1873,
    "g4": 10131,
    "total": 15384,
    "g1_pct": 21.97,
    "g3_pct": 12.17,
    "g4_pct": 65.85
  },
  {
    "site": "MLB",
    "mes": "2026-02",
    "tipo": "Longtail",
    "g1": 3487,
    "g3": 248,
    "g4": 22729,
    "total": 26464,
    "g1_pct": 13.18,
    "g3_pct": 0.94,
    "g4_pct": 85.89
  },
  {
    "site": "MLB",
    "mes": "2026-02",
    "tipo": "SMB",
    "g1": 3177,
    "g3": 1712,
    "g4": 16034,
    "total": 20923,
    "g1_pct": 15.18,
    "g3_pct": 8.18,
    "g4_pct": 76.63
  },
  {
    "site": "MLB",
    "mes": "2026-03",
    "tipo": "Longtail",
    "g1": 3300,
    "g3": 236,
    "g4": 15937,
    "total": 19473,
    "g1_pct": 16.95,
    "g3_pct": 1.21,
    "g4_pct": 81.84
  },
  {
    "site": "MLB",
    "mes": "2026-03",
    "tipo": "SMB",
    "g1": 2923,
    "g3": 1459,
    "g4": 11474,
    "total": 15856,
    "g1_pct": 18.43,
    "g3_pct": 9.2,
    "g4_pct": 72.36
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "tipo": "Longtail",
    "g1": 3046,
    "g3": 143,
    "g4": 13291,
    "total": 16480,
    "g1_pct": 18.48,
    "g3_pct": 0.87,
    "g4_pct": 80.65
  },
  {
    "site": "MLB",
    "mes": "2026-04",
    "tipo": "SMB",
    "g1": 2922,
    "g3": 1156,
    "g4": 8201,
    "total": 12279,
    "g1_pct": 23.8,
    "g3_pct": 9.41,
    "g4_pct": 66.79
  },
  {
    "site": "MLB",
    "mes": "2026-05",
    "tipo": "Longtail",
    "g1": 1397,
    "g3": 70,
    "g4": 7713,
    "total": 9180,
    "g1_pct": 15.22,
    "g3_pct": 0.76,
    "g4_pct": 84.02
  },
  {
    "site": "MLB",
    "mes": "2026-05",
    "tipo": "SMB",
    "g1": 2043,
    "g3": 666,
    "g4": 5826,
    "total": 8535,
    "g1_pct": 23.94,
    "g3_pct": 7.8,
    "g4_pct": 68.26
  },
  {
    "site": "MLC",
    "mes": "2025-01",
    "tipo": "Longtail",
    "g1": 0,
    "g3": 0,
    "g4": 51,
    "total": 51,
    "g1_pct": 0.0,
    "g3_pct": 0.0,
    "g4_pct": 100.0
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
    "g1": 1,
    "g3": 0,
    "g4": 48,
    "total": 49,
    "g1_pct": 2.04,
    "g3_pct": 0.0,
    "g4_pct": 97.96
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
    "g1": 107,
    "g3": 0,
    "g4": 24,
    "total": 131,
    "g1_pct": 81.68,
    "g3_pct": 0.0,
    "g4_pct": 18.32
  },
  {
    "site": "MLC",
    "mes": "2025-11",
    "tipo": "Longtail",
    "g1": 136,
    "g3": 0,
    "g4": 5,
    "total": 141,
    "g1_pct": 96.45,
    "g3_pct": 0.0,
    "g4_pct": 3.55
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
    "g1": 81,
    "g3": 0,
    "g4": 3,
    "total": 84,
    "g1_pct": 96.43,
    "g3_pct": 0.0,
    "g4_pct": 3.57
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
    "g1": 67,
    "g3": 0,
    "g4": 5,
    "total": 72,
    "g1_pct": 93.06,
    "g3_pct": 0.0,
    "g4_pct": 6.94
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
    "g1": 87,
    "g3": 0,
    "g4": 12,
    "total": 99,
    "g1_pct": 87.88,
    "g3_pct": 0.0,
    "g4_pct": 12.12
  },
  {
    "site": "MLC",
    "mes": "2026-04",
    "tipo": "SMB",
    "g1": 81,
    "g3": 0,
    "g4": 157,
    "total": 238,
    "g1_pct": 34.03,
    "g3_pct": 0.0,
    "g4_pct": 65.97
  },
  {
    "site": "MLC",
    "mes": "2026-05",
    "tipo": "Longtail",
    "g1": 64,
    "g3": 0,
    "g4": 8,
    "total": 72,
    "g1_pct": 88.89,
    "g3_pct": 0.0,
    "g4_pct": 11.11
  },
  {
    "site": "MLC",
    "mes": "2026-05",
    "tipo": "SMB",
    "g1": 81,
    "g3": 0,
    "g4": 159,
    "total": 240,
    "g1_pct": 33.75,
    "g3_pct": 0.0,
    "g4_pct": 66.25
  },
  {
    "site": "MLM",
    "mes": "2025-01",
    "tipo": "Longtail",
    "g1": 5,
    "g3": 0,
    "g4": 2068,
    "total": 2073,
    "g1_pct": 0.24,
    "g3_pct": 0.0,
    "g4_pct": 99.76
  },
  {
    "site": "MLM",
    "mes": "2025-01",
    "tipo": "SMB",
    "g1": 0,
    "g3": 0,
    "g4": 581,
    "total": 581,
    "g1_pct": 0.0,
    "g3_pct": 0.0,
    "g4_pct": 100.0
  },
  {
    "site": "MLM",
    "mes": "2025-02",
    "tipo": "Longtail",
    "g1": 3,
    "g3": 0,
    "g4": 1825,
    "total": 1828,
    "g1_pct": 0.16,
    "g3_pct": 0.0,
    "g4_pct": 99.84
  },
  {
    "site": "MLM",
    "mes": "2025-02",
    "tipo": "SMB",
    "g1": 1,
    "g3": 0,
    "g4": 585,
    "total": 586,
    "g1_pct": 0.17,
    "g3_pct": 0.0,
    "g4_pct": 99.83
  },
  {
    "site": "MLM",
    "mes": "2025-03",
    "tipo": "Longtail",
    "g1": 27,
    "g3": 0,
    "g4": 2080,
    "total": 2107,
    "g1_pct": 1.28,
    "g3_pct": 0.0,
    "g4_pct": 98.72
  },
  {
    "site": "MLM",
    "mes": "2025-03",
    "tipo": "SMB",
    "g1": 1,
    "g3": 0,
    "g4": 1017,
    "total": 1018,
    "g1_pct": 0.1,
    "g3_pct": 0.0,
    "g4_pct": 99.9
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
    "g1": 2538,
    "g3": 0,
    "g4": 1989,
    "total": 4527,
    "g1_pct": 56.06,
    "g3_pct": 0.0,
    "g4_pct": 43.94
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
    "g1": 3148,
    "g3": 0,
    "g4": 2674,
    "total": 5822,
    "g1_pct": 54.07,
    "g3_pct": 0.0,
    "g4_pct": 45.93
  },
  {
    "site": "MLM",
    "mes": "2026-02",
    "tipo": "SMB",
    "g1": 410,
    "g3": 0,
    "g4": 4121,
    "total": 4531,
    "g1_pct": 9.05,
    "g3_pct": 0.0,
    "g4_pct": 90.95
  },
  {
    "site": "MLM",
    "mes": "2026-03",
    "tipo": "Longtail",
    "g1": 2541,
    "g3": 0,
    "g4": 2139,
    "total": 4680,
    "g1_pct": 54.29,
    "g3_pct": 0.0,
    "g4_pct": 45.71
  },
  {
    "site": "MLM",
    "mes": "2026-03",
    "tipo": "SMB",
    "g1": 436,
    "g3": 0,
    "g4": 2323,
    "total": 2759,
    "g1_pct": 15.8,
    "g3_pct": 0.0,
    "g4_pct": 84.2
  },
  {
    "site": "MLM",
    "mes": "2026-04",
    "tipo": "Longtail",
    "g1": 2383,
    "g3": 0,
    "g4": 2564,
    "total": 4947,
    "g1_pct": 48.17,
    "g3_pct": 0.0,
    "g4_pct": 51.83
  },
  {
    "site": "MLM",
    "mes": "2026-04",
    "tipo": "SMB",
    "g1": 380,
    "g3": 0,
    "g4": 1789,
    "total": 2169,
    "g1_pct": 17.52,
    "g3_pct": 0.0,
    "g4_pct": 82.48
  },
  {
    "site": "MLM",
    "mes": "2026-05",
    "tipo": "Longtail",
    "g1": 1637,
    "g3": 0,
    "g4": 1885,
    "total": 3522,
    "g1_pct": 46.48,
    "g3_pct": 0.0,
    "g4_pct": 53.52
  },
  {
    "site": "MLM",
    "mes": "2026-05",
    "tipo": "SMB",
    "g1": 344,
    "g3": 0,
    "g4": 1664,
    "total": 2008,
    "g1_pct": 17.13,
    "g3_pct": 0.0,
    "g4_pct": 82.87
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
