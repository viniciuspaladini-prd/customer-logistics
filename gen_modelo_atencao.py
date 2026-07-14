import json, sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

with open('C:/Users/vpaladini/AppData/Local/Temp/claude/C--Users-vpaladini/6a9e617e-563f-4e48-a6f2-bf28fff96aef/scratchpad/monthly_data.json', encoding='utf-8') as f:
    RAW = json.load(f)
with open('C:/Users/vpaladini/AppData/Local/Temp/claude/C--Users-vpaladini/6a9e617e-563f-4e48-a6f2-bf28fff96aef/scratchpad/tpv_data.json', encoding='utf-8') as f:
    meta = json.load(f)
with open('C:/Users/vpaladini/AppData/Local/Temp/claude/C--Users-vpaladini/6a9e617e-563f-4e48-a6f2-bf28fff96aef/scratchpad/conv_ids.json', encoding='utf-8') as f:
    CONV_IDS_DATA = json.load(f)
with open('C:/Users/vpaladini/AppData/Local/Temp/claude/C--Users-vpaladini/6a9e617e-563f-4e48-a6f2-bf28fff96aef/scratchpad/uc_tpv.json', encoding='utf-8') as f:
    UC_TPV_DATA = json.load(f)
with open('C:/Users/vpaladini/AppData/Local/Temp/claude/C--Users-vpaladini/6a9e617e-563f-4e48-a6f2-bf28fff96aef/scratchpad/opp_detail.json', encoding='utf-8') as f:
    OPP_DETAIL_DATA = json.load(f)
TPV_RISCO_DATA = {"Big Seller|Transaction Declined": {"monthly_mi": 25.099999999999998, "sellers": 185}, "SMB|Transaction Declined": {"monthly_mi": 33.40000000000002, "sellers": 12777}, "SMB|Fees and Commissions": {"monthly_mi": 28.999999999999996, "sellers": 12800}, "Big Seller|Refund Not Received": {"monthly_mi": 25.7, "sellers": 153}, "Big Seller|Access Issues": {"monthly_mi": 11.5, "sellers": 55}, "SMB|Product Not Received": {"monthly_mi": 10.399999999999999, "sellers": 5241}, "Big Seller|Fees and Commissions": {"monthly_mi": 10.0, "sellers": 307}, "SMB|Refund Not Received": {"monthly_mi": 12.499999999999998, "sellers": 4962}, "SMB|Failed Transaction": {"monthly_mi": 12.899999999999995, "sellers": 4674}, "Big Seller|Product Not Received": {"monthly_mi": 4.5, "sellers": 88}, "SMB|Blocked or Suspended": {"monthly_mi": 6.6000000000000005, "sellers": 3825}, "SMB|Money Held": {"monthly_mi": 9.199999999999996, "sellers": 6789}, "Big Seller|Failed Transaction": {"monthly_mi": 6.5, "sellers": 89}, "Longtail|Fees and Commissions": {"monthly_mi": 2.1, "sellers": 104166}, "SMB|Access Issues": {"monthly_mi": 4.500000000000001, "sellers": 1832}, "SMB|Incorrect Charge": {"monthly_mi": 6.500000000000002, "sellers": 3040}, "Longtail|Transaction Declined": {"monthly_mi": 2.1999999999999997, "sellers": 107576}, "SMB|Account Recovery": {"monthly_mi": 1.7, "sellers": 1059}, "Big Seller|Blocked or Suspended": {"monthly_mi": 1.2, "sellers": 60}, "Big Seller|Account Recovery": {"monthly_mi": 0.7, "sellers": 22}, "Big Seller|Money Held": {"monthly_mi": 2.6000000000000005, "sellers": 92}, "Big Seller|Incorrect Charge": {"monthly_mi": 1.5, "sellers": 67}, "Longtail|Failed Transaction": {"monthly_mi": 0.8999999999999999, "sellers": 38074}, "Longtail|Blocked or Suspended": {"monthly_mi": 0.3, "sellers": 30735}, "Longtail|Money Held": {"monthly_mi": 0.6000000000000001, "sellers": 37411}, "Longtail|Access Issues": {"monthly_mi": 0.4, "sellers": 15908}, "Longtail|Incorrect Charge": {"monthly_mi": 0.2, "sellers": 42389}, "Longtail|Product Not Received": {"monthly_mi": 0.2, "sellers": 44442}, "Longtail|Refund Not Received": {"monthly_mi": 0.2, "sellers": 77151}, "Longtail|Account Recovery": {"monthly_mi": 0.0, "sellers": 12573}}
with open('C:/Users/vpaladini/AppData/Local/Temp/claude/C--Users-vpaladini/6a9e617e-563f-4e48-a6f2-bf28fff96aef/scratchpad/opportunities.json', encoding='utf-8') as f:
    OPPS_DATA = json.load(f)
with open('C:/Users/vpaladini/AppData/Local/Temp/claude/C--Users-vpaladini/6a9e617e-563f-4e48-a6f2-bf28fff96aef/scratchpad/cx_data.json', encoding='utf-8') as f:
    CX_DATA = json.load(f)
with open('C:/Users/vpaladini/AppData/Local/Temp/claude/C--Users-vpaladini/6a9e617e-563f-4e48-a6f2-bf28fff96aef/scratchpad/nps_data.json', encoding='utf-8') as f:
    NPS_DATA = json.load(f)
TPV_DATA = meta['tpv']
DEFL_DATA = meta['defl']

LOGO = "iVBORw0KGgoAAAANSUhEUgAAAI4AAAAlCAMAAACj+CEXAAAAolBMVEVMaXEIAIAFAIgKAIAJAYAOAIMGAIAJAIAJAIAJAIAJAYEKAYAJAH8KAYAJAIAJAX8KAIAJAIEJAIAJAH8JAH8FTbUHMKEJAYAJAIAFYMELD4oHKZwKAID///8AvP8NE4319PoWIpUNCYYyP6MAtvxsecAmMJwBqvTW1OuutNyCjMmRmtDJyeUDgdgDeNIEbMrl5PICmulTY7ZBUa0Did0CkeJpwjfHAAAAHHRSTlMAOwn40RAi7+AvdJNQr2jCRhmCn1r8/rml/fDtxpUefAAAAAlwSFlzAAALEwAACxMBAJqcGAAABg9JREFUeJzVWGl3qkgQbfZ9F1xyCQJKXBKTaPL//9qc6mb16XuZzOScmftBsKG7rrWXjP3XEVnhzLdt2/ZnrqTLPydIdv0/nC7FgbJ6SJenl4+Pl9Nr+rCC6bg/RMkDtN881mNjlb48PU6w+Vw+KJ70E3TM39GxPCX9fLyJp+XKnN3aI81CmTEtnFntQhS63S2TJZek6cOS5M4koWk5DKOOjj7z3ejq4GihLDeP9/GyUn/RkGUCMFxfARDodIgHAIK5liiAxSSVlgyfMRbS6zBsxphNW2xOR5/TKpKJnlwjnRrp/TVNl6fx2klxpj4UGRjBlJnG5QHwGdM4DctS+iW9u3WZ3+/S5G7PfHSyg2xip1NRXrbbc11lp0FlT4U60akDBL4DQIl9lQQ6wNzSbcDQ6B5BoquAGloeYLIYcDSZPmUD8MIZEdFiwJQ01yCWHeb187Yo0hcuevPxmpX7nGN9bArh3E8vadGcV2SSDioMmbEFYDOmAwkzoJDKF8CMifN1ADpjmmmakRvHEWM2kITEjjGJ6JgAOYE/Uo9Xr/M8f942VZmmWVXiQt9b7LZNhQpFfdjl+XE10o+BgNxAnKfA0wHD8zxPBeJISJyJS+vafhKQfRMbcMQBoD10213pwKaTvn4+HvZvzZlut2VVP3frPb2teoMOBY4BzxocydHBH/riMjg+VCCJuUJJvbBavhqgtK9Vu04YF11fSFVls99tq21+jTq+S0cHVElAb+l02tF1nQVAIsmhoMO1YwJRS0Pv1RgcJvLOZLljxRd35dhswnaVdo9O5zuypsktHVKYLlxIU7g5fCBxAVKyRQZShQ/HgMcP1aupxOay39dla6Z13bxd8TnHd+kkgOpalIaslg5JU90wIGE8DVHu8SmyEsk1gQXRM3wpVoBQhOuVQdbbut4ODM/FxJR5/ry6SyfqckjMOjpSm2wMnSoU6Jsp93nHiBjZULhbG66Ha3tMcajaoO9QRffoMM3h8nxuHuHDIit7FO08/RoO2XPWrzLZMbpcTVCKqt52IXQL++o4eM7xUrRavQ3ZksapiQeNZbXupllWnyc0y+pyvKyP9mDzdEqL4nyf0XMh7LnblsiWn9nNYvpvAbwuvS+L8pjnu2vH5XgrL+v1oalSXjEefpbOe1ezy7Isq3PdjBw5z9/qNwqwcqheq6G4/ACM175GZtv8rTg8X+rzyL33FOrretkXUl4TBCJ74S1EgxnZief43EkkZz5PWs6zRTBPfuds15hnA519nu/yfN0c6mbQz56S0CHtXnodOriZiGIzYiwUzYYh8YxGCDTGtDaKF1+nE/fWenwt952hSpFtjhTk++JwLF66XrXoqxZVZIMiNmCU2NS5SdmWVk1aXfDarsyJUhfGf4aFQT2vWdX6clPz6F43dDkXWcfm8RV9Vl4Ac5lZBiBZvD+QFSi06vBiBY2qgMWYC96JfBEBBu95TC/rHSloeyjP62cKqmO+boYX3hWqQQJtq+IAMWUU2bIB8LooqkPYNRJBVwG+ghDof/vjJq0gsvC6eiMN7aqmyPqO8KlA0m80APrRM+q8IqctEKwtzQ7gJrxN5fdftxYVk49RY/pRbC9konK3bg75W3XqfYvYGNotOlStlIDS/T+nQw3iyF6P78u0XOd77PMdymL05L0Yd7REh6pVDMQxkMh8hZlQiOQccLu+Jphs+yPIG7PJIJEWZbEsq2r5PnTumyWv1RM6HuNlPFxw7+ANzIKrhOLLlUTNliD6oC9DMoBqMmY9EY/NeOWjvA5YSjWmZ5B1aKgIfZO8iDquYE4ZySUVGQtPmf6KL4AGEBTLq3l4wOYlo25lWq0o1/DcZ7FunKKMKJoZ3uVF/DnPB38PMs1FwHisGvCZFlxCP+72dDQnUBOKfMszTdUT9UJKgoW04P4i+3NV9b5Tc6U2oWfL08hhnj6WGecyNEhjOjfOCWc0sGs0tHyDxfggMS0TijLLsqwURLgV7F/1fZsODaE2dXv9RPNt6HZr7ClM52ZSFc3pNeT2COXKtN+D5sZzsxvuASNw/HtKD+nPlBsn0F8X+PX/jv8j/gK9SgGqRn5lnwAAAABJRU5ErkJggg=="

UC_TO_PROD = {
    # Instore (Point)
    'Malfunction':'Instore (Point)','How To / Usage Guidance':'Instore (Point)',
    'Error Troubleshooting':'Instore (Point)','Configuration Setup':'Instore (Point)',
    'Replacement Request':'Instore (Point)','Supply Issues':'Instore (Point)',
    'Transaction Declined':'Instore (Point)','Product Not Received':'Instore (Point)',
    'Fees and Commissions':'Instore (Point)','Point Tap':'Instore (Point)',
    # Online Payments
    'Payment Status Inquiry':'Online Payments','Refund Not Received':'Online Payments',
    'Transaction Cancellation Request':'Online Payments','Incorrect Charge':'Online Payments',
    'Refund Pending':'Online Payments','Unauthorized Charge':'Online Payments',
    'Tx Cancellation Req':'Online Payments','Failed Transaction':'Online Payments',
    'Duplicate Charge':'Online Payments','Chargeback':'Online Payments',
    # Conta (cross: banco, cartão, crédito, investimentos, seguros — perfil seller)
    'Account Inquiry':'Conta','Account Recovery':'Conta',
    'Document Request':'Conta','Available Balance':'Conta',
    'Eligibility Check':'Conta',
    # Banking / transferências
    'Bank Account':'Conta','Cash In':'Conta','Withdrawals':'Conta',
    'Bank Account Statement':'Conta','Check Returns':'Conta',
    'Transaction History':'Conta','Period Statement':'Conta','Periodic Statement':'Conta',
    # Cartão MP
    'Lost or Stolen':'Conta','Lost Or Stolen':'Conta','Card Delivery Delay':'Conta',
    # Crédito / empréstimo
    'Limit Inquiry':'Conta','Loan Payoff':'Conta','Debt Negotiation':'Conta',
    'Approval Status':'Conta','Application Request':'Conta',
    'Overdue Debt And Collections':'Conta','Overdue Debt and Collections':'Conta',
    # Investimentos
    'Rates & Returns':'Conta','Rates And Returns':'Conta','Account Interests':'Conta',
    # Perfil / identidade
    'Profile Update':'Conta','Profile Data Modification':'Conta',
    'Registration Issues':'Conta','Account And Identity Verification':'Conta',
    'Account and Identity Verification':'Conta',
    # Cancelamento / encerramento
    'Account Cancellation':'Conta','Account Closure':'Conta',
    # Outros conta
    'Security Settings':'Conta','Subscription Issues':'Conta','Subscriptions':'Conta',
    'Collaborator Accounts':'Conta','Business Account':'Conta',
    # Restricciones & Bloqueos (dentro de Conta — impacto direto em TPV e principalidade)
    'Blocked or Suspended':'Conta','Blocked Or Suspended':'Conta',
    'Money Held':'Conta','Access Issues':'Conta',
    'Account Restrictions & Blocks':'Conta',
    'Fraudulent Activity':'Conta','Fraud Report':'Conta',
    'Limit Inquiry':'Conta','Loan Payoff':'Conta','Debt Negotiation':'Conta',
    'Rates & Returns':'Conta','Rates And Returns':'Conta','Account Interests':'Conta',
    'Security Settings':'Conta','Registration Issues':'Conta',
    'Profile Update':'Conta','Profile Data Modification':'Conta',
    'Lost or Stolen':'Conta','Lost Or Stolen':'Conta',
    'Fraud Report':'Conta','Fraudulent Activity':'Conta',
    'Account And Identity Verification':'Conta','Account Cancellation':'Conta',
    'Account Closure':'Conta','Change Request':'Conta',
    'Reimbursement Request':'Conta','Claim Filing':'Conta',
}
OPP = {
    'Malfunction':'Maxwell resolve bem. Foco: manter deflection alto e reduzir os ~8% que escapam para CX. Impacto direto em NPS de funcionamento.',
    'How To / Usage Guidance':'Excelente: Maxwell resolve >95% sem CX. Canal ideal — expandir cobertura para novos use cases.',
    'Supply Issues':'Maxwell resolve bem (CX<5%). Oportunidade de automacao de reposicao de insumos.',
    'Replacement Request':'CSAT alto (>4.0). Fluxo de troca bem resolvido. Manter.',
    'Transaction Declined':'Critico para NPS: CSAT baixo (3.0-3.2), CX alto. Melhorar mensagem de rechazo e proximos passos. Impacto direto em TPV (transacoes nao completadas).',
    'Product Not Received':'Critico: CX alto (29%). Depende de logistica. Maxwell pode dar visibilidade de status de entrega.',
    'Blocked or Suspended':'Critico: CX alto (28-31%), CSAT baixo. Skill userrestrictions com 40% non-response. Oportunidade: autogestao. Impacto em TPV (seller nao cobra).',
    'Money Held':'Pior CSAT (2.75-2.91). Maxwell nao consegue liberar fundos. Oportunidade: visibilidade de prazo + autogestao. Critico para principalidade.',
    'Access Issues':'Casos incluem T&Cs nao aceitos — oportunidade de skill especifica para resolver sem CX.',
    'Account Recovery':'Quase 100% unresolved. Maxwell nao tem resolucao. Oportunidade prioritaria de Q3.',
    'Payment Status Inquiry':'Maxwell resolve bem (CX<5%). Manter.',
    'Refund Not Received':'Atencao: CX 12%. Melhorar visibilidade do status de reembolso.',
    'Incorrect Charge':'Atencao moderada. Sellers confundem chargeback com reembolso — oportunidade educativa.',
    'Fees and Commissions':'Atencao: CX 11%. Oportunidade de explicar estrutura tarifaria de forma proativa.',
    'Point Tap':'Maxwell resolve bem. Manter.',
}
MONTHS = ['2026-01','2026-02','2026-03','2026-04','2026-05','2026-06']
MONTH_LBL = {'2026-01':'Jan','2026-02':'Fev','2026-03':'Mar','2026-04':'Abr','2026-05':'Mai','2026-06':'Jun'}
SEGS = ['Big Seller','SMB','Longtail']
SEG_COLOR = {'Big Seller':'#e64b17','SMB':'#d99000','Longtail':'#1e7e34'}
PRODS = ['Instore (Point)','Online Payments','Conta']
PROD_ICON = {'Instore (Point)':'📟','Online Payments':'💳','Conta':'🏦'}

def fmt_tpv(v):
    if v >= 1000000: return f'{v/1000000:.1f}T'
    if v >= 1000: return f'{v/1000:.0f}B'
    return f'{v:.0f}M'

def fmt_n(v):
    if v >= 1000000000: return f'{v/1000000000:.1f}B'
    if v >= 1000000: return f'{v/1000000:.1f}M'
    if v >= 1000: return f'{v/1000:.0f}K'
    return str(v)

HTML = r'''<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Modelo de Atencao Adquiring MP</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
body{font-family:'Inter',-apple-system,'Segoe UI',sans-serif;background:#f4f5f9;color:#282834;font-size:13px;margin:0;padding-top:50px;padding-left:200px}
.topbar{background:#1A1A2E;display:flex;align-items:center;gap:12px;padding:0 18px;height:50px;position:fixed;top:0;left:0;right:0;z-index:9999}
.topbar img{height:22px}
.topbar h1{color:#fff;font-size:14px;font-weight:700;flex:1}
.top-badge{background:#ffe600;color:#1A1A2E;font-size:10px;font-weight:700;padding:2px 8px;border-radius:9999px}
.body-wrap{display:block}

/* SIDEBAR */
.sidebar{width:200px;background:#1e2235;display:flex;flex-direction:column;padding:12px 0;overflow-y:auto;position:fixed;top:50px;left:0;bottom:0;z-index:100}
.sb-sec{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:#4a5270;padding:8px 14px 3px;margin-top:6px}
.nav-item{display:flex;align-items:center;gap:8px;padding:8px 14px;cursor:pointer;color:#7a85a0;font-size:12px;font-weight:600;border-left:3px solid transparent;transition:.15s;user-select:none}
.nav-item:hover{color:#fff;background:rgba(255,255,255,.05)}
.nav-item.active{color:#fff;border-left-color:#3b5bdb;background:rgba(59,91,219,.15)}
.nav-icon{font-size:13px;width:16px;text-align:center;flex-shrink:0}
.sb-foot{margin-top:auto;padding:10px 14px;font-size:9px;color:#3a4460;line-height:1.6}

/* MAIN */
.main{display:block}
.panel{display:none}
.panel.active{display:block}

/* HOME PANEL */
.ph{background:#fff;border-bottom:1px solid #d0d4e6;padding:14px 20px;flex-shrink:0}
.ph h2{font-size:16px;font-weight:700;margin-bottom:3px}
.ph p{font-size:12px;color:#646587}
.obj-section{padding:16px 20px 40px;background:#f4f5f9}
.obj-card{background:#fff;border-radius:14px;padding:18px 20px;margin-bottom:12px;border:1px solid #d0d4e6}
.obj-card h3{font-size:14px;font-weight:700;margin-bottom:6px;display:flex;align-items:center;gap:8px}
.obj-card p{font-size:12px;color:#646587;line-height:1.6}
.obj-card ul{padding-left:18px;font-size:12px;color:#646587;line-height:1.8}
.kpi-row{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:12px}
.kpi-card{background:#fff;border-radius:10px;padding:14px 16px;border:1px solid #d0d4e6;border-top:3px solid}
.kpi-val{font-size:22px;font-weight:700}
.kpi-lbl{font-size:10px;color:#646587;text-transform:uppercase;letter-spacing:.4px;margin-top:3px}
.kpi-sub{font-size:10px;color:#9c9ebf;margin-top:2px}
.seg-overview{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:12px}
.seg-ov{background:#fff;border-radius:10px;padding:12px 14px;border:1px solid #d0d4e6}
.seg-ov h4{font-size:12px;font-weight:700;margin-bottom:8px}
.seg-ov-row{display:flex;justify-content:space-between;font-size:11px;color:#646587;margin-bottom:3px}
.seg-ov-row strong{color:#282834;font-weight:600}

/* CHANNELS PANEL */
.grid3{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;padding:14px;align-content:start}
.col{border-radius:12px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,.08);background:#fff;display:flex;flex-direction:column}
.seg-hdr{padding:10px 13px;display:flex;align-items:center;justify-content:space-between}
.seg-hdr h3{color:#fff;font-size:13px;font-weight:700}
.ch-body{padding:9px;flex:1}
.ch-lbl{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#9c9ebf;margin:3px 0 2px;display:flex;align-items:center;gap:5px}
.ch-lbl::after{content:'';flex:1;height:1px;background:#e7e9f3}
.ch{border-radius:7px;padding:7px 10px;font-size:11px;font-weight:600;display:flex;align-items:center;gap:6px;border:1.5px solid transparent;margin-bottom:5px}
.ch-icon{font-size:11px;width:14px;text-align:center;flex-shrink:0}
.ch-sub{font-size:9px;font-weight:400;margin-left:auto;opacity:.7;white-space:nowrap}
.ch-cx{background:#d3f9d8;border-color:#2f9e44;color:#1e5e2a}
.ch-yes{background:#fff9db;border-color:#e67700;color:#7a4000}
.ch-no{background:#f1f3f5;border-color:#bbb;color:#868e96}
.ch-wai{background:#fff4e6;border-color:#f59f00;color:#7a4000}
.ch-gray{background:#f1f3f5;border-color:#bbb;color:#868e96}
.ch-mx{background:#e9f1ff;border-color:#3b5bdb;color:#3b5bdb;cursor:pointer}
.ch-mx:hover{background:#3b5bdb;color:#fff}
.ch-note{font-size:10px;color:#9c9ebf;padding:5px 8px;background:#f8f9fa;border-radius:6px;line-height:1.4;margin-top:4px}
.col-bs .seg-hdr{background:#e64b17}
.col-smb .seg-hdr{background:#d99000}
.col-lt .seg-hdr{background:#1e7e34}

/* MAXWELL PANEL */
.seg-tabs{display:flex;background:#fff;border-bottom:2px solid #d0d4e6;padding:0 18px;position:sticky;top:50px;z-index:198}
.seg-tab{padding:10px 16px;font-size:12px;font-weight:600;color:#646587;border:none;background:none;cursor:pointer;border-bottom:3px solid transparent;margin-bottom:-2px}
.seg-tab.active{color:#3b5bdb;border-bottom-color:#3b5bdb}
.ctrl-bar{background:#fff;padding:7px 18px;border-bottom:1px solid #d0d4e6;display:flex;align-items:center;gap:6px;flex-wrap:wrap;position:sticky;top:50px;z-index:199}
.ctrl-lbl{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#9c9ebf;margin-right:2px}
.m-btn{padding:3px 10px;border-radius:9999px;border:1.5px solid #d0d4e6;background:#fff;font-size:11px;font-weight:600;color:#646587;cursor:pointer}
.m-btn.active{background:#3b5bdb;border-color:#3b5bdb;color:#fff}
.mx-leg{background:#f4f5f9;padding:5px 18px;border-bottom:1px solid #d0d4e6;display:flex;gap:8px;flex-wrap:wrap;align-items:center;position:sticky;top:92px;z-index:197}
.leg-lbl{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#9c9ebf;margin-right:2px}
.leg{font-size:10px;font-weight:600;padding:2px 8px;border-radius:9999px;border:1px solid transparent}
.lg{background:#d3f9d8;color:#1e7e34;border-color:#a0e8a6}
.ly{background:#fff3bf;color:#7a6000;border-color:#e0c060}
.lr{background:#ffe3e3;color:#9e0015;border-color:#f0a0a0}

/* SEG CONTENT — vertical layout */
.seg-content{display:none}
.seg-content.active{display:block}

/* Segment KPI bar */
.seg-kpi-bar{background:#fff;border-bottom:1px solid #e7e9f3;padding:8px 18px;display:flex;gap:24px;align-items:center;flex-shrink:0}
.skpi{text-align:center}
.skpi-val{font-size:16px;font-weight:700;color:#282834}
.skpi-lbl{font-size:9px;color:#9c9ebf;text-transform:uppercase;letter-spacing:.4px;margin-top:1px}
.skpi-div{width:1px;height:30px;background:#e7e9f3}
.skpi-note{font-size:10px;color:#646587;margin-left:auto;font-style:italic}

/* Chart area — full width, fixed height */
.chart-area{background:#fff;border-bottom:1px solid #e7e9f3;padding:14px 18px}
.chart-title{font-size:11px;font-weight:700;color:#646587;text-transform:uppercase;letter-spacing:.5px;margin-bottom:2px}
.chart-sub{font-size:10px;color:#9c9ebf;margin-bottom:8px}
.chart-wrap{position:relative;height:260px}

/* List area — below chart, scrollable */
.list-area{background:#fafbfc;border-top:1px solid #e7e9f3}

/* PRODUCT SECTIONS */
.prod-hdr{padding:10px 14px;font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:.8px;display:flex;align-items:center;gap:7px;position:sticky;top:0;z-index:10}

/* ACCORDION */
.acc-item{border-bottom:1px solid #f0f0f0}
.acc-hdr{display:flex;align-items:center;gap:8px;padding:8px 14px;cursor:pointer;transition:background .12s}
.acc-hdr:hover{background:#f0f4ff}
.acc-dot{width:8px;height:8px;border-radius:50%;flex-shrink:0}
.acc-g{background:#2f9e44}.acc-y{background:#e67700}.acc-r{background:#e03131}
.acc-name{font-size:11px;font-weight:600;color:#282834;flex:1}
.acc-kpis{display:flex;gap:14px}
.acc-kpi{text-align:right;min-width:36px}
.acc-kpi strong{display:block;font-size:12px;font-weight:700;color:#282834;line-height:1.2}
.acc-kpi span{font-size:8px;color:#9c9ebf;text-transform:uppercase;letter-spacing:.3px}
.acc-arrow{font-size:10px;color:#9c9ebf;transition:transform .2s;flex-shrink:0}
.acc-hdr.open .acc-arrow{transform:rotate(180deg)}
.acc-body{display:none;padding:10px 14px;background:#f8f9fd;border-top:1px solid #e7e9f3}
.acc-hdr.open + .acc-body{display:block}
.acc-top-stats{display:flex;gap:16px;margin-bottom:10px;flex-wrap:wrap}
.acc-stat{background:#fff;border-radius:8px;padding:7px 12px;border:1px solid #e7e9f3;text-align:center;min-width:60px}
.acc-stat strong{display:block;font-size:13px;font-weight:700}
.acc-stat span{font-size:8px;color:#9c9ebf;text-transform:uppercase;letter-spacing:.3px}
.acc-trend-title{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.4px;color:#9c9ebf;margin-bottom:5px;margin-top:8px}
.trend-row{display:flex;align-items:flex-end;gap:4px;height:44px;margin-bottom:4px}
.tb-wrap{display:flex;flex-direction:column;align-items:center;gap:2px;flex:1}
.tb{width:100%;border-radius:3px 3px 0 0;min-height:2px}
.tb-lbl{font-size:8px;color:#9c9ebf}
.acc-opp{margin-top:8px;background:#e9f1ff;border-radius:7px;padding:7px 10px;font-size:10px;color:#3b5bdb;line-height:1.55}
.acc-convs{margin-top:8px}
.conv-ids-title{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.4px;color:#9c9ebf;margin-bottom:5px}
.conv-id{font-family:monospace;font-size:10px;color:#3b5bdb;cursor:pointer;display:inline-block;padding:2px 6px;background:#e9f1ff;border-radius:4px;margin:2px;border:none}
.conv-id:hover{background:#3b5bdb;color:#fff}

/* SEG×SITE CROSS TABLE */
.cross-tbl{width:100%;border-collapse:collapse;font-size:10px;margin-bottom:2px}
.cross-tbl thead tr{background:#282834}
.cross-tbl thead th{padding:5px 8px;color:#fff;font-weight:700;font-size:9px;text-transform:uppercase;letter-spacing:.3px;text-align:left;white-space:nowrap}
.cross-tbl tbody tr:hover td{background:#f0f4ff}
.cross-tbl td{padding:5px 8px;border-bottom:1px solid #f0f0f0;vertical-align:middle}
.cross-tbl tr:last-child td{border-bottom:none}
.cross-tbl .seg-cell{font-weight:700;white-space:nowrap}
.cross-tbl .num{text-align:right;font-weight:600;font-family:monospace;font-size:11px}
.csat-good{color:#2f9e44;font-weight:700}
.csat-mid{color:#e67700;font-weight:700}
.csat-bad{color:#e03131;font-weight:700}
.csat-na{color:#9c9ebf}
.seg-row-bs{border-left:3px solid #e64b17}
.seg-row-smb{border-left:3px solid #d99000}
.seg-row-lt{border-left:3px solid #1e7e34}

/* SEG TREND SPARKLINES */
.seg-trend-wrap{margin-top:8px}
.seg-trend-title{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.4px;color:#9c9ebf;margin-bottom:6px;display:flex;align-items:center;gap:5px}
.seg-trend-title::after{content:'';flex:1;height:1px;background:#e7e9f3}
.seg-spark-row{display:flex;align-items:center;gap:8px;margin-bottom:5px}
.seg-spark-lbl{font-size:10px;font-weight:700;width:72px;flex-shrink:0}
.seg-spark-bars{display:flex;align-items:flex-end;gap:2px;height:28px;flex:1}
.seg-spark-bar{flex:1;border-radius:2px 2px 0 0;min-height:1px;position:relative}
.seg-spark-bar:hover::after{content:attr(data-tip);position:absolute;bottom:100%;left:50%;transform:translateX(-50%);background:#282834;color:#fff;font-size:8px;padding:2px 5px;border-radius:3px;white-space:nowrap;z-index:10;pointer-events:none}
.seg-spark-val{font-size:10px;font-weight:700;width:36px;text-align:right;flex-shrink:0}

/* SITE BREAKDOWN TABLE */
.site-breakdown{margin-top:8px}
.site-breakdown-title{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.4px;color:#9c9ebf;margin-bottom:5px;display:flex;align-items:center;gap:5px}
.site-breakdown-title::after{content:'';flex:1;height:1px;background:#e7e9f3}
.site-tbl{width:100%;border-collapse:collapse;font-size:11px}
.site-tbl th{background:#f0f2f8;padding:4px 8px;text-align:left;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.3px;color:#9c9ebf;border-bottom:1px solid #e7e9f3}
.site-tbl td{padding:5px 8px;border-bottom:1px solid #f0f0f0;vertical-align:middle}
.site-tbl tr:last-child td{border-bottom:none}
.site-tbl tr:hover td{background:#f8f9ff}
.site-badge{display:inline-block;padding:2px 7px;border-radius:9999px;font-size:10px;font-weight:700}
.site-MLB{background:#e9f1ff;color:#3b5bdb}
.site-MLA{background:#fff4e6;color:#e67700}
.site-MLM{background:#d3f9d8;color:#1e7e34}
.site-MLC{background:#f3f0ff;color:#7048e8}
</style>
</head>
<body>

<div class="topbar">
  <img src="data:image/png;base64,LOGO_B64" alt="MP">
  <h1>MODELO DE ATENÇÃO ADQUIRING MP</h1>
  <span class="top-badge">Jan–Jun 2026</span>
</div>

<div class="body-wrap">
<aside class="sidebar">
  <div class="sb-sec">Visão</div>
  <div class="nav-item active" onclick="showPanel('home',this)"><span class="nav-icon">🏠</span>Objetivos</div>
  <div class="nav-item" onclick="showPanel('canais',this)"><span class="nav-icon">📡</span>Canais de Atendimento</div>
  <div class="nav-item" onclick="showPanel('maxwell',this)"><span class="nav-icon">🤖</span>Maxwell — Dores</div>
  <div class="sb-sec" style="margin-top:10px">Maxwell por Segmento</div>
  <div class="nav-item" onclick="goMaxwellSeg('Big Seller',this)"><span class="nav-icon">🔴</span>Big Seller</div>
  <div class="nav-item" onclick="goMaxwellSeg('SMB',this)"><span class="nav-icon">🟠</span>SMB</div>
  <div class="nav-item" onclick="goMaxwellSeg('Longtail',this)"><span class="nav-icon">🟢</span>Longtail</div>
  <div class="sb-sec" style="margin-top:12px">CX &amp; Calidad</div>
  <div class="nav-item" onclick="showPanel('cx',this)"><span class="nav-icon">📞</span>CX — Contact Rate</div>
  <div class="sb-sec" style="margin-top:12px">Análisis</div>
  <div class="nav-item" onclick="showPanel('opps',this)"><span class="nav-icon">💡</span>Oportunidades</div>
  <div class="sb-foot">BigQuery · Jan–Jun 2026<br>CX Fintech · Adquiring MP</div>
</aside>

<div class="main">

<!-- ══ HOME ══════════════════════════════════════════════ -->
<div class="panel active" id="panel-home">
  <div class="ph">
    <h2>🗺️ Mapeamento de Oportunidades — Adquiring MP</h2>
    <p>Visão estratégica cross-segmento: canais de atendimento, dores no Maxwell e impacto em negócio.</p>
  </div>
  <div class="obj-section">

    <div class="obj-card" style="border-top:4px solid #3b5bdb">
      <h3>🎯 Objetivo desta Exploração</h3>
      <p>Mapear, para cada segmento de seller MP (Big Seller, SMB, Longtail), <strong>quais canais de atendimento existem</strong>, <strong>onde estão as principais dores no Maxwell e CX</strong> e <strong>qual o impacto financeiro</strong> — cruzando volume de conversas, CSAT, NPS, CX escalation, Deflection e TPV em risco.</p>
      <p style="margin-top:8px">As <strong>3 verticais de análise</strong>: 📟 Instore (Point) · 💳 Online Payments · 🏦 Conta (inclui conta geral, crédito, investimentos, restricciones & bloqueos)</p>
      <p style="margin-top:8px">Produto final: <strong>matriz de relevância e impacto</strong> consolidando Maxwell + CX, apresentada ao negócio com visão integral do ciclo de vida do seller.</p>
    </div>


    </div>

    <div class="obj-card" style="border-top:4px solid #2f9e44">
      <h3>✅ Próximos Passos</h3>
      <div style="display:flex;flex-direction:column;gap:8px;margin-top:6px">
        <div style="display:flex;align-items:flex-start;gap:10px;padding:8px 12px;background:#f4f5f9;border-radius:8px">
          <span style="background:#3b5bdb;color:#fff;font-size:9px;font-weight:700;padding:2px 7px;border-radius:9999px;flex-shrink:0;margin-top:1px">Vinicius</span>
          <div><strong style="font-size:11px">Ajustar filtros</strong> — Revisar integridade dos dados no documento mestre para garantir precisão do heatmap.</div>
        </div>
        <div style="display:flex;align-items:flex-start;gap:10px;padding:8px 12px;background:#f4f5f9;border-radius:8px">
          <span style="background:#1e7e34;color:#fff;font-size:9px;font-weight:700;padding:2px 7px;border-radius:9999px;flex-shrink:0;margin-top:1px">Lari</span>
          <div><strong style="font-size:11px">Investigar soporte</strong> — Validar hipótese de que sellers usam admin de abastecimento para reparações em vez dos canais oficiais.</div>
        </div>
        <div style="display:flex;align-items:flex-start;gap:10px;padding:8px 12px;background:#fff9db;border-radius:8px;border-left:3px solid #ffe600">
          <span style="background:#3b5bdb;color:#fff;font-size:9px;font-weight:700;padding:2px 7px;border-radius:9999px;flex-shrink:0;margin-top:1px">Vinicius</span>
          <div><strong style="font-size:11px">Estructurar matriz</strong> — Reorganizar matriz de riscos com 3 verticais (Instore · Online · Conta) para visão integral do ciclo do seller. <em style="color:#e67700">← em andamento</em></div>
        </div>
        <div style="display:flex;align-items:flex-start;gap:10px;padding:8px 12px;background:#f4f5f9;border-radius:8px">
          <span style="background:#646587;color:#fff;font-size:9px;font-weight:700;padding:2px 7px;border-radius:9999px;flex-shrink:0;margin-top:1px">Grupo</span>
          <div><strong style="font-size:11px">Alinear hallazgos</strong> — Apresentar experiência do seller e pontos de dor para Ani e Cris para alinhar estratégias.</div>
        </div>
        <div style="display:flex;align-items:flex-start;gap:10px;padding:8px 12px;background:#f4f5f9;border-radius:8px">
          <span style="background:#1e7e34;color:#fff;font-size:9px;font-weight:700;padding:2px 7px;border-radius:9999px;flex-shrink:0;margin-top:1px">Lari</span>
          <div><strong style="font-size:11px">Compartir análisis</strong> — Compartilhar análise de casos pendentes (Luli) via chat com Facu para revisão.</div>
        </div>
      </div>
    </div>

    <div class="kpi-row">
      <div class="kpi-card" style="border-top-color:#e64b17">
        <div class="kpi-val" style="color:#e64b17">SEG_BS_SELLERS</div>
        <div class="kpi-lbl">Sellers Big Seller</div>
        <div class="kpi-sub">TPV: SEG_BS_TPV USD</div>
      </div>
      <div class="kpi-card" style="border-top-color:#d99000">
        <div class="kpi-val" style="color:#d99000">SEG_SMB_SELLERS</div>
        <div class="kpi-lbl">Sellers SMB</div>
        <div class="kpi-sub">TPV: SEG_SMB_TPV USD</div>
      </div>
      <div class="kpi-card" style="border-top-color:#1e7e34">
        <div class="kpi-val" style="color:#1e7e34">SEG_LT_SELLERS</div>
        <div class="kpi-lbl">Sellers Longtail</div>
        <div class="kpi-sub">TPV: SEG_LT_TPV USD</div>
      </div>
    </div>

    <div class="obj-card">
      <h3>📡 O que mapeamos</h3>
      <ul>
        <li><strong>Canais de atendimento</strong> por segmento: CX/Top Off, Consultor Certificado (CC), WhatsApp Inbound, Maxwell, Notificações, App</li>
        <li><strong>Lacunas</strong>: quais canais não estão mapeados (cinza) ou sem acesso (Longtail sem CC)</li>
        <li><strong>Dores no Maxwell</strong>: volume, CSAT, CX%, Deflection% e Unresolved% por use case — dados reais BigQuery Jan–Jun 2026</li>
        <li><strong>Oportunidades</strong>: para cada use case crítico, qual melhoria pode ser feita e qual impacto esperado em NPS / CX / TPV</li>
      </ul>
    </div>

    <div class="obj-card" style="border-left:4px solid #e03131">
      <h3>🔴 Principais Alertas Identificados</h3>
      <ul>
        <li><strong>Skill userrestrictions com 40% de non-response</strong> — causa direta do CSAT baixo em Blocked/Suspended e Money Held</li>
        <li><strong>Deflection ≠ Resolution</strong>: 64% deflectado do CX, mas 77% termina com outcome=unresolved (Conta)</li>
        <li><strong>Money Held</strong>: pior CSAT de toda a base (2.75–2.91). Maxwell não consegue liberar fundos — impacto direto em principalidade</li>
        <li><strong>Transaction Declined</strong>: skill Activities com informação imprecisa — seller não entende motivo do rechazo nem próximos passos. Impacto em TPV perdido</li>
      </ul>
    </div>

    <div class="obj-card">
      <h3>🧭 Como navegar</h3>
      <p><strong>📡 Canais de Atendimento</strong> — visão de quais canais cada segmento acessa, com Maxwell como canal clicável que leva às dores</p>
      <p style="margin-top:4px"><strong>🤖 Maxwell — Dores</strong> — bubble chart (Volume vs CSAT) + accordion por use case com tendência mensal, deflection, unresolved e oportunidade</p>
    </div>

  </div>
</div>

<!-- ══ CANAIS ═════════════════════════════════════════════ -->
<div class="panel" id="panel-canais">
  <div class="ph"><h2>📡 Canais de Atendimento por Segmento</h2><p>Mapeamento de canais disponíveis por segmento de seller. Maxwell listado como canal — clique para ver as dores do segmento.</p></div>
  <div class="grid3">

    <div class="col col-bs">
      <div class="seg-hdr"><h3>🔴 BIG SELLER</h3></div>
      <div class="ch-body">
        <div class="ch-lbl">Canales Mapeados</div>

        <div class="ch ch-cx" style="flex-direction:column;align-items:flex-start;gap:6px">
          <div style="display:flex;align-items:center;gap:6px;width:100%">
            <span class="ch-icon">✅</span>
            <strong>CX</strong>
            <span class="ch-sub" style="margin-left:auto">Célula de Atención Exclusiva</span>
          </div>
          <div style="padding-left:22px;display:flex;flex-direction:column;gap:3px;width:100%">
            <div style="font-size:10px;color:#1e5e2a;display:flex;align-items:center;gap:5px">
              <span style="opacity:.6">↳</span> WhatsApp Inbound
            </div>
            <div style="font-size:10px;color:#1e5e2a;display:flex;align-items:center;gap:5px">
              <span style="opacity:.6">↳</span> C2C
            </div>
            <div style="font-size:10px;color:#1e5e2a;display:flex;align-items:center;gap:5px">
              <span style="opacity:.6">↳</span> E-mail
            </div>
            <div style="font-size:10px;color:#1e5e2a;display:flex;align-items:center;gap:5px">
              <span style="opacity:.6">↳</span> Chat
            </div>
          </div>
        </div>

        <div class="ch ch-yes" style="flex-direction:column;align-items:flex-start;gap:6px">
          <div style="display:flex;align-items:center;gap:6px;width:100%">
            <span class="ch-icon">✅</span>
            <strong>KAM</strong>
          </div>
          <div style="padding-left:22px;display:flex;flex-direction:column;gap:3px;width:100%">
            <div style="font-size:10px;color:#7a4000;display:flex;align-items:center;gap:5px">
              <span style="opacity:.6">↳</span> WhatsApp KAM
            </div>
            <div style="font-size:10px;color:#7a4000;display:flex;align-items:center;gap:5px">
              <span style="opacity:.6">↳</span> Admin de Abastecimento
            </div>
          </div>
        </div>

        <div class="ch ch-mx" onclick="goMaxwellSeg('Big Seller',null)"><span class="ch-icon">🤖</span>Maxwell<span class="ch-sub">Ver dolores →</span></div>

        <div class="ch-lbl" style="margin-top:6px">Pendente</div>
        <div class="ch ch-gray" style="border-style:dashed"><span class="ch-icon">⏳</span>Entender direcionamento dos canais atualmente</div>

        <div style="margin-top:10px;background:#1e2235;border-radius:8px;padding:10px 12px;border-left:3px solid #ffe600">
          <div style="font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:#ffe600;margin-bottom:5px">📋 1er Deep Dive — Equipo Hunting Big Seller MLA</div>
          <div style="font-size:11px;color:#c8cfe0;line-height:1.6">Para post-venta utilizan el <strong style="color:#fff">admin de abastecimiento</strong> para generar los envíos. Para cualquier otro problema, dirigen al seller a <strong style="color:#fff">CX sin acompañamiento exclusivo</strong>, sin entendimiento de si el problema fue resuelto <span style="color:#f0a0a0;font-style:italic">(sin gestión clara).</span></div>
        </div>
      </div>
    </div>

    <div class="col col-smb">
      <div class="seg-hdr"><h3>🟠 SMB</h3></div>
      <div class="ch-body">
        <div class="ch-lbl">Canales Mapeados</div>

        <div class="ch ch-cx" style="flex-direction:column;align-items:flex-start;gap:6px">
          <div style="display:flex;align-items:center;gap:6px;width:100%">
            <span class="ch-icon">✅</span>
            <strong>CX</strong>
            <span class="ch-sub" style="margin-left:auto">Célula de Atención Exclusiva</span>
          </div>
          <div style="padding-left:22px;display:flex;flex-direction:column;gap:3px;width:100%">
            <div style="font-size:10px;color:#1e5e2a;display:flex;align-items:center;gap:5px">
              <span style="opacity:.6">↳</span> WhatsApp Inbound
            </div>
            <div style="font-size:10px;color:#1e5e2a;display:flex;align-items:center;gap:5px">
              <span style="opacity:.6">↳</span> C2C
            </div>
            <div style="font-size:10px;color:#1e5e2a;display:flex;align-items:center;gap:5px">
              <span style="opacity:.6">↳</span> E-mail
            </div>
            <div style="font-size:10px;color:#1e5e2a;display:flex;align-items:center;gap:5px">
              <span style="opacity:.6">↳</span> Chat
            </div>
          </div>
        </div>

        <div class="ch ch-yes" style="flex-direction:column;align-items:flex-start;gap:6px">
          <div style="display:flex;align-items:center;gap:6px;width:100%">
            <span class="ch-icon">✅</span>
            <strong>Consultor</strong>
          </div>
          <div style="padding-left:22px;display:flex;flex-direction:column;gap:3px;width:100%">
            <div style="font-size:10px;color:#7a4000;display:flex;align-items:center;gap:5px">
              <span style="opacity:.6">↳</span> FAST
            </div>
            <div style="font-size:10px;color:#7a4000;display:flex;align-items:center;gap:5px">
              <span style="opacity:.6">↳</span> CX
            </div>
          </div>
        </div>

        <div class="ch ch-mx" onclick="goMaxwellSeg('SMB',null)"><span class="ch-icon">🤖</span>Maxwell<span class="ch-sub">Ver dolores →</span></div>

        <div class="ch-lbl" style="margin-top:6px">Pendente</div>
        <div class="ch ch-gray" style="border-style:dashed"><span class="ch-icon">⏳</span>Entender direcionamento dos canais atualmente</div>
      </div>
    </div>

    <div class="col col-lt">
      <div class="seg-hdr"><h3>🟢 LONGTAIL</h3></div>
      <div class="ch-body">
        <div class="ch-lbl">Canales Mapeados</div>

        <div class="ch ch-cx" style="flex-direction:column;align-items:flex-start;gap:6px">
          <div style="display:flex;align-items:center;gap:6px;width:100%">
            <span class="ch-icon">✅</span>
            <strong>CX</strong>
            <span class="ch-sub" style="margin-left:auto">Célula Genérica</span>
          </div>
          <div style="padding-left:22px;display:flex;flex-direction:column;gap:3px;width:100%">
            <div style="font-size:10px;color:#1e5e2a;display:flex;align-items:center;gap:5px">
              <span style="opacity:.6">↳</span> WhatsApp Inbound
            </div>
            <div style="font-size:10px;color:#1e5e2a;display:flex;align-items:center;gap:5px">
              <span style="opacity:.6">↳</span> C2C
            </div>
            <div style="font-size:10px;color:#1e5e2a;display:flex;align-items:center;gap:5px">
              <span style="opacity:.6">↳</span> E-mail
            </div>
            <div style="font-size:10px;color:#1e5e2a;display:flex;align-items:center;gap:5px">
              <span style="opacity:.6">↳</span> Chat
            </div>
          </div>
        </div>

        <div class="ch ch-mx" onclick="goMaxwellSeg('Longtail',null)"><span class="ch-icon">🤖</span>Maxwell<span class="ch-sub">Ver dolores →</span></div>

        <div class="ch-lbl" style="margin-top:6px">Pendente</div>
        <div class="ch ch-gray" style="border-style:dashed"><span class="ch-icon">⏳</span>Entender direcionamento dos canais atualmente</div>
      </div>
    </div>

  </div>
</div>

<!-- ══ MAXWELL ════════════════════════════════════════════ -->
<div class="panel" id="panel-maxwell">
  <div class="ph">
    <h2>🤖 Maxwell — Volume vs CSAT</h2>
    <p>Visão geral cross-segmento. Use a sidebar para filtrar por segmento específico.
      <span id="seg-filter-badge" style="display:none;align-items:center;gap:4px;margin-left:10px;background:#e9f1ff;color:#3b5bdb;border:1px solid #b0bef5;border-radius:9999px;padding:2px 10px;font-size:11px;font-weight:700"></span>
    </p>
  </div>
  <!-- sem tabs de segmento — visão geral, segmentos aparecem no breakdown de cada use case -->
  <div class="ctrl-bar">
    <span class="ctrl-lbl">Mês:</span>
    <button class="m-btn active" onclick="setMonth('ALL',this)">Todos</button>
    <button class="m-btn" onclick="setMonth('2026-01',this)">Jan/26</button>
    <button class="m-btn" onclick="setMonth('2026-02',this)">Fev/26</button>
    <button class="m-btn" onclick="setMonth('2026-03',this)">Mar/26</button>
    <button class="m-btn" onclick="setMonth('2026-04',this)">Abr/26</button>
    <button class="m-btn" onclick="setMonth('2026-05',this)">Mai/26</button>
    <button class="m-btn" onclick="setMonth('2026-06',this)">Jun/26</button>
    <span class="ctrl-lbl" style="margin-left:10px">Site:</span>
    <button class="m-btn active" onclick="setSite('ALL',this)">Todos</button>
    <button class="m-btn" onclick="setSite('MLB',this)">🇧🇷 MLB</button>
    <button class="m-btn" onclick="setSite('MLA',this)">🇦🇷 MLA</button>
    <button class="m-btn" onclick="setSite('MLM',this)">🇲🇽 MLM</button>
    <button class="m-btn" onclick="setSite('MLC',this)">🇨🇱 MLC</button>
  </div>
  <div class="mx-leg">
    <span class="leg-lbl">Legenda:</span>
    <span class="leg lg">● Resolve bem — CSAT≥3.8 e CX&lt;10%</span>
    <span class="leg ly">● Atenção — CX 10–20% ou CSAT 3.2–3.8</span>
    <span class="leg lr">● Crítico — CX&gt;20% ou CSAT&lt;3.2</span>
    <span style="font-size:10px;color:#9c9ebf;margin-left:8px">Tamanho da bolha = volume · Linha vertical = CSAT médio ponderado</span>
  </div>

  <!-- VISÃO GERAL — todos os segmentos, breakdown por segmento e site dentro de cada use case -->
  <div class="seg-content active" id="sc-ALL">
    <div class="seg-kpi-bar" id="kpi-ALL"></div>
    <div class="chart-area">
      <div class="chart-title">VOLUME DE CONVERSAS VS CSAT — TODOS OS SEGMENTOS</div>
      <div class="chart-sub">Bolha = volume total · Cor = produto · Eixo Y log · Linha vertical = CSAT médio ponderado · Segmentos aparecem no detalhe de cada use case</div>
      <div class="chart-wrap"><canvas id="chart-ALL"></canvas></div>
    </div>
    <div class="list-area" id="list-ALL"></div>
  </div>
</div>


<!-- ══ OPORTUNIDADES ════════════════════════════════════ -->
<div class="panel" id="panel-opps">
  <div class="ph">
    <h2>💡 Oportunidades por Segmento &amp; Produto</h2>
    <p>Mapeamento de oportunidades priorizadas por impacto (TPV, sellers, CSAT) com detalhamento de experiência e próximos passos.</p>
  </div>
  <div style="padding:14px 14px 40px" id="opps-content"></div>
</div>


<!-- ══ CX PANEL ══════════════════════════════════════════ -->
<div class="panel" id="panel-cx">
  <div class="ph">
    <h2>📞 CX — Contact Rate por Segmento</h2>
    <p>Casos abiertos en CX (DM_CX_CR_POINT) para Point y Online Payments · Jan–Jun 2026 · Segmentos: Big Sellers, SMB, Longtail</p>
  </div>
  <div class="ctrl-bar">
    <span class="ctrl-lbl">Mes:</span>
    <button class="m-btn active" onclick="setCxMonth('ALL',this)">Todos</button>
    <span class="ctrl-lbl" style="margin-left:10px">Site:</span>
    <button class="m-btn active" onclick="setCxSiteFilter('ALL',this)">Todos</button>
    <button class="m-btn" onclick="setCxSiteFilter('MLB',this)">🇧🇷 MLB</button>
    <button class="m-btn" onclick="setCxSiteFilter('MLA',this)">🇦🇷 MLA</button>
    <button class="m-btn" onclick="setCxSiteFilter('MLM',this)">🇲🇽 MLM</button>
    <button class="m-btn" onclick="setCxSiteFilter('MLC',this)">🇨🇱 MLC</button>
    <button class="m-btn" onclick="setCxMonth('2026-01',this)">Ene/26</button>
    <button class="m-btn" onclick="setCxMonth('2026-02',this)">Feb/26</button>
    <button class="m-btn" onclick="setCxMonth('2026-03',this)">Mar/26</button>
    <button class="m-btn" onclick="setCxMonth('2026-04',this)">Abr/26</button>
    <button class="m-btn" onclick="setCxMonth('2026-05',this)">May/26</button>
    <button class="m-btn" onclick="setCxMonth('2026-06',this)">Jun/26</button>
    <span class="ctrl-lbl" style="margin-left:10px">Segmento:</span>
    <button class="m-btn active" onclick="setCxSeg('ALL',this)">Todos</button>
    <button class="m-btn" onclick="setCxSeg('BIG SELLERS',this)">🔴 Big Seller</button>
    <button class="m-btn" onclick="setCxSeg('SMB',this)">🟠 SMB</button>
    <button class="m-btn" onclick="setCxSeg('LONGTAIL',this)">🟢 Longtail</button>
  </div>
  <!-- CX CHART AREA -->
  <div class="chart-area" style="height:260px">
    <div class="chart-title">VOLUMEN DE CASOS CX VS NPS — ADQUIRING</div>
    <div class="chart-sub">Burbuja = volumen de casos · Eje Y log · X = NPS (0–100) · Línea vertical = NPS promedio ponderado · Color = segmento</div>
    <div class="chart-wrap"><canvas id="cx-chart"></canvas></div>
  </div>
  <div style="padding:14px 14px 40px" id="cx-content"></div>
</div>

</div><!-- /main -->
</div><!-- /body-wrap -->

<script>
const RAW = __DATA__;
const TPV_META = __TPV__;
const DEFL_META = __DEFL__;
const MONTHS = ['2026-01','2026-02','2026-03','2026-04','2026-05','2026-06'];
const MONTH_LBL = {'2026-01':'Jan','2026-02':'Fev','2026-03':'Mar','2026-04':'Abr','2026-05':'Mai','2026-06':'Jun'};
const SEGS = ['Big Seller','SMB','Longtail'];
const PRODS = ['Instore (Point)','Online Payments','Conta'];
const PROD_ICON = {'Instore (Point)':'📟','Online Payments':'💳','Conta':'🏦'};
const UC_TO_PROD = __UC_MAP__;
const OPP = __OPP__;
const CHARTS = {};
let currentMonth = 'ALL', currentSeg = 'ALL', currentSite = 'ALL';
const SEG_COLOR = {'Big Seller':'#e64b17','SMB':'#d99000','Longtail':'#1e7e34'};
const SEG_ICON  = {'Big Seller':'🔴','SMB':'🟠','Longtail':'🟢'};
const UC_TPV = __UC_TPV__;

function fmtTpv(v) {
  if(!v) return '—';
  if(v>=1e6) return (v/1e6).toFixed(1)+'T';
  if(v>=1e3) return (v/1e3).toFixed(0)+'B';
  return v.toFixed(0)+'M';
}

const CONV_IDS = __CONV_IDS__;

// ── SEGMENT × SITE CROSS-BREAKDOWN (L3 detalhado) ────────
function getSegSiteBreakdown(uc, month) {
  const map = {};
  for (const r of RAW) {
    if (r.uc !== uc) continue;
    if (month !== 'ALL' && r.m !== month) continue;
    const k = r.seg + '|' + r.site;
    if (!map[k]) map[k]={seg:r.seg,site:r.site,vol:0,csat_n:0,csat_s:0,cx_s:0,defl_s:0,unres_s:0,n:0};
    const d=map[k];
    d.vol+=r.vol; d.n+=r.vol;
    d.csat_n+=(r.csat_n||0);
    if(r.csat) d.csat_s+=r.csat*(r.csat_n||0);
    d.cx_s+=(r.cx||0)*r.vol; d.defl_s+=(r.defl||0)*r.vol; d.unres_s+=(r.unres||0)*r.vol;
  }
  const segOrder = ['Big Seller','SMB','Longtail'];
  const siteOrder = ['MLB','MLA','MLM','MLC'];
  return Object.values(map)
    .map(d=>({
      seg:d.seg, site:d.site, vol:d.vol, csat_n:d.csat_n,
      csat:d.csat_n>0?Math.round(d.csat_s/d.csat_n*100)/100:null,
      cx:  d.n>0?Math.round(d.cx_s/d.n*10)/10:0,
      defl:d.n>0?Math.round(d.defl_s/d.n*10)/10:0,
      unres:d.n>0?Math.round(d.unres_s/d.n*10)/10:0,
    }))
    .sort((a,b)=>{
      const si=segOrder.indexOf(a.seg)-segOrder.indexOf(b.seg);
      if(si!==0) return si;
      return siteOrder.indexOf(a.site)-siteOrder.indexOf(b.site);
    });
}

// Monthly trend per segment for a given use case
function getSegTrend(uc, month) {
  const res = {};
  const segs = ['Big Seller','SMB','Longtail'];
  for (const s of segs) {
    res[s] = {};
    for (const m of MONTHS) res[s][m] = {vol:0,csat_n:0,csat_s:0,n:0};
  }
  for (const r of RAW) {
    if (r.uc !== uc || !res[r.seg] || !res[r.seg][r.m]) continue;
    const d = res[r.seg][r.m];
    d.vol+=r.vol; d.n+=r.vol;
    d.csat_n+=(r.csat_n||0);
    if(r.csat) d.csat_s+=r.csat*(r.csat_n||0);
  }
  return segs.map(s=>({
    seg:s,
    months: MONTHS.map(m=>({
      m, vol:res[s][m].vol,
      csat:res[s][m].csat_n>0?Math.round(res[s][m].csat_s/res[s][m].csat_n*100)/100:null
    }))
  })).filter(s=>s.months.some(t=>t.vol>0));
}

// ── SEGMENT BREAKDOWN ────────────────────────────────────
function getSegBreakdown(uc, month) {
  const map = {};
  for (const r of RAW) {
    if (r.uc !== uc) continue;
    if (month !== 'ALL' && r.m !== month) continue;
    if (!map[r.seg]) map[r.seg]={seg:r.seg,vol:0,csat_n:0,csat_s:0,cx_s:0,defl_s:0,unres_s:0,n:0};
    const d=map[r.seg];
    d.vol+=r.vol; d.n+=r.vol;
    d.csat_n+=(r.csat_n||0);
    if(r.csat) d.csat_s+=r.csat*(r.csat_n||0);
    d.cx_s+=(r.cx||0)*r.vol; d.defl_s+=(r.defl||0)*r.vol; d.unres_s+=(r.unres||0)*r.vol;
  }
  return Object.values(map).map(d=>({
    seg:d.seg, vol:d.vol, csat_n:d.csat_n,
    csat:d.csat_n>0?Math.round(d.csat_s/d.csat_n*100)/100:null,
    cx:d.n>0?Math.round(d.cx_s/d.n*10)/10:0,
    defl:d.n>0?Math.round(d.defl_s/d.n*10)/10:0,
    unres:d.n>0?Math.round(d.unres_s/d.n*10)/10:0,
  })).sort((a,b)=>b.vol-a.vol);
}

// ── SITE BREAKDOWN (L3) ──────────────────────────────────
function getSiteBreakdown(seg, uc, month) {
  const map = {};
  for (const r of RAW) {
    if (r.seg !== seg || r.uc !== uc) continue;
    if (month !== 'ALL' && r.m !== month) continue;
    if (!map[r.site]) map[r.site]={site:r.site,vol:0,csat_n:0,csat_s:0,cx_s:0,defl_s:0,n:0};
    map[r.site].vol   += r.vol;
    map[r.site].n     += r.vol;
    map[r.site].csat_n+= r.csat_n||0;
    if(r.csat) map[r.site].csat_s += r.csat*(r.csat_n||0);
    map[r.site].cx_s  += r.cx*r.vol;
    map[r.site].defl_s+= (r.defl||0)*r.vol;
  }
  return Object.values(map)
    .map(d=>({
      site:d.site, vol:d.vol, csat_n:d.csat_n,
      csat:d.csat_n>0?Math.round(d.csat_s/d.csat_n*100)/100:null,
      cx:d.n>0?Math.round(d.cx_s/d.n*10)/10:0,
      defl:d.n>0?Math.round(d.defl_s/d.n*10)/10:0
    }))
    .sort((a,b)=>b.vol-a.vol);
}

function aggregate(month, seg) {
  const map = {};
  for (const r of RAW) {
    if (seg && r.seg !== seg) continue;
    if (month !== 'ALL' && r.m !== month) continue;
    if (currentSite !== 'ALL' && r.site !== currentSite) continue;
    if (!r.uc) continue;
    const k = r.seg+'|'+r.uc;
    if (!map[k]) map[k]={seg:r.seg,uc:r.uc,vol:0,csat_n:0,csat_s:0,csat_prom_sum:0,cx_s:0,defl_s:0,unres_s:0,n:0};
    map[k].vol   += r.vol;
    map[k].n     += r.vol;
    map[k].csat_n+= r.csat_n||0;
    map[k].csat_prom_sum += r.csat_prom||0;
    if (r.csat)  map[k].csat_s += r.csat * (r.csat_n||0);
    map[k].cx_s  += r.cx   * r.vol;
    map[k].defl_s+= (r.defl||0)  * r.vol;
    map[k].unres_s+=(r.unres||0) * r.vol;
  }
  return Object.values(map).map(d=>({
    seg:d.seg, uc:d.uc, vol:d.vol,
    csat_n: d.csat_n,
    csat_prom: d.csat_prom_sum,  // count of scores >= 4
    cx:   d.n>0?Math.round(d.cx_s/d.n*10)/10:0,
    defl: d.n>0?Math.round(d.defl_s/d.n*10)/10:0,
    unres:d.n>0?Math.round(d.unres_s/d.n*10)/10:0,
    // CSAT-nota: average score (1-5)
    csat_nota: d.csat_n>0?Math.round(d.csat_s/d.csat_n*100)/100:null,
    // CSAT%: promotors (score 4-5) / total * 100
    csat: d.csat_n>0?Math.round(d.csat_prom_sum/d.csat_n*1000)/10:null,
  }));
}

function getTrend(seg,uc){
  const res={}; for(const m of MONTHS) res[m]={vol:0,cx_s:0,csat_s:0,csat_n:0,csat_prom_sum:0,n:0};
  for(const r of RAW){
    if(r.seg!==seg||r.uc!==uc||!res[r.m]) continue;
    res[r.m].vol+=r.vol; res[r.m].cx_s+=r.cx*r.vol;
    res[r.m].n+=r.vol;
    res[r.m].csat_n+=(r.csat_n||0);
    if(r.csat) res[r.m].csat_s+=r.csat*(r.csat_n||0);
  }
  return MONTHS.map(m=>({m,vol:res[m].vol,
    cx:res[m].n>0?Math.round(res[m].cx_s/res[m].n*10)/10:null,
    csat:res[m].csat_n>0?Math.round(res[m].csat_prom_sum/res[m].csat_n*1000)/10:null,
    csat_nota:res[m].csat_n>0?Math.round(res[m].csat_s/res[m].csat_n*100)/100:null
  }));
}

// csat here is CSAT% (0-100), not nota (1-5)
function ucColor(csat,cx,a){
  a=a||1;
  if(cx>20||csat<50) return `rgba(224,49,49,${a})`;
  if(cx>10||csat<75) return `rgba(230,119,0,${a})`;
  return `rgba(47,158,68,${a})`;
}
function ucDot(csat,cx){ return cx>20||csat<50?'acc-r':cx>10||csat<75?'acc-y':'acc-g'; }

function fmtN(v){ if(v>=1e9) return (v/1e9).toFixed(1)+'B'; if(v>=1e6) return (v/1e6).toFixed(1)+'M'; if(v>=1e3) return (v/1e3).toFixed(0)+'K'; return v; }

function renderKpiBar(seg) {
  const el = document.getElementById('kpi-ALL');
  if(!el) return;
  const segsToSum = seg==='ALL' ? ['Big Seller','SMB','Longtail'] : [seg];
  let totSellers=0, totTpv=0, totTpn=0;
  for(const s of segsToSum){
    const t=TPV_META[s]||{};
    totSellers+=(t.sellers||0); totTpv+=(t.tpv_mi||0); totTpn+=(t.tpn||0);
  }
  const rows = aggregate(currentMonth, seg==='ALL'?null:seg);
  const totalConvs = rows.reduce((s,r)=>s+r.vol,0);
  const csatRows = rows.filter(r=>r.csat!=null&&r.csat_n>0);
  const avgCsatNota = csatRows.reduce((s,r)=>s+(r.csat_nota||0)*r.csat_n,0)/Math.max(csatRows.reduce((s,r)=>s+r.csat_n,0),1);
  const avgCsat = csatRows.reduce((s,r)=>s+(r.csat||0)*r.csat_n,0)/Math.max(csatRows.reduce((s,r)=>s+r.csat_n,0),1);
  const avgCx = rows.reduce((s,r)=>s+r.cx*r.vol,0)/Math.max(totalConvs,1);
  const avgDefl = rows.reduce((s,r)=>s+(r.defl||0)*r.vol,0)/Math.max(totalConvs,1);
  const tpvStr = totTpv>=1e6?(totTpv/1e6).toFixed(1)+'T':totTpv>=1e3?(totTpv/1e3).toFixed(0)+'B':totTpv+'M';
  el.innerHTML = `
    <div class="skpi"><div class="skpi-val">${fmtN(totSellers)}</div><div class="skpi-lbl">Sellers</div></div>
    <div class="skpi-div"></div>
    <div class="skpi"><div class="skpi-val">${tpvStr}</div><div class="skpi-lbl">TPV USD Jan–Jun</div></div>
    <div class="skpi-div"></div>
    <div class="skpi"><div class="skpi-val">${fmtN(totTpn)}</div><div class="skpi-lbl">Transações</div></div>
    <div class="skpi-div"></div>
    <div class="skpi"><div class="skpi-val">${fmtN(totalConvs)}</div><div class="skpi-lbl">Conversas Maxwell</div></div>
    <div class="skpi-div"></div>
    <div class="skpi"><div class="skpi-val" style="color:${avgCsat<50?'#e03131':avgCsat<75?'#e67700':'#2f9e44'}">${avgCsat.toFixed(1)}%</div><div class="skpi-lbl">CSAT%</div><div style="font-size:9px;color:#9c9ebf">nota: ${avgCsatNota.toFixed(2)}</div></div>
    <div class="skpi-div"></div>
    <div class="skpi"><div class="skpi-val" style="color:${avgCx>20?'#e03131':avgCx>10?'#e67700':'#2f9e44'}">${avgCx.toFixed(1)}%</div><div class="skpi-lbl">CX médio</div></div>
    <div class="skpi-div"></div>
    <div class="skpi"><div class="skpi-val" style="color:${avgDefl>80?'#2f9e44':avgDefl>60?'#e67700':'#e03131'}">${avgDefl.toFixed(1)}%</div><div class="skpi-lbl">Deflection</div></div>
    <div class="skpi-note">* TPV Jan–Jun 2026 · USD (TPV_DOL) · BQ</div>`;
}

function renderChart(seg, rows) {
  const ctx = document.getElementById('chart-ALL');
  if(!ctx) return;
  // Update chart title to reflect active filter
  const titleEl = ctx.closest('.chart-area')?.querySelector('.chart-title');
  if(titleEl) {
    const segLabel = (seg&&seg!=='ALL') ? ' — '+(SEG_ICON[seg]||'')+' '+seg : ' — TODOS LOS SEGMENTOS';
    titleEl.textContent = 'VOLUMEN DE CONVERSACIONES VS CSAT'+segLabel;
  }
  if(CHARTS[seg]) { CHARTS[seg].destroy(); delete CHARTS[seg]; }
  const maxVol = Math.max(...rows.map(r=>r.vol),1);
  const R_MAX=26, R_MIN=5;
  let csatSum=0, volSum=0;
  rows.forEach(r=>{csatSum+=r.csat*r.vol; volSum+=r.vol;});
  const avgCsat = volSum>0?csatSum/volSum:3;

  // Maxwell chart: color by product category
  const PROD_COLORS_CHART = {
    'Instore (Point)': {bg:'rgba(67,76,228,0.82)', bd:'rgba(67,76,228,1)'},
    'Online Payments': {bg:'rgba(47,158,68,0.82)', bd:'rgba(47,158,68,1)'},
    'Conta':           {bg:'rgba(230,119,0,0.82)', bd:'rgba(230,119,0,1)'},
  };
  const datasets = PRODS.map(prod=>{
    const pts = rows.filter(r=>(UC_TO_PROD[r.uc]||'Online Payments')===prod && r.csat!=null && r.csat>0);
    const col = PROD_COLORS_CHART[prod]||{bg:'rgba(100,100,100,0.8)',bd:'rgba(100,100,100,1)'};
    return {
      label: (PROD_ICON[prod]||'') + ' ' + prod,
      data:pts.map(r=>({
        x:r.csat, y:r.vol,
        r:Math.max(R_MIN,Math.round(Math.sqrt(r.vol/maxVol)*R_MAX)),
        uc:r.uc, vol:r.vol, csat_n:r.csat_n, cx:r.cx, csat:r.csat, defl:r.defl, unres:r.unres
      })),
      backgroundColor:pts.map(r=>col.bg),
      borderColor:pts.map(r=>col.bd),
      borderWidth:1.5
    };
  }).filter(d=>d.data.length>0);

  const vlinePlugin = {id:'vl',afterDraw(chart){
    const {ctx:c,scales:sc}=chart; if(!sc.x||!sc.y) return;
    const x=sc.x.getPixelForValue(avgCsat);
    c.save(); c.setLineDash([5,4]); c.strokeStyle='#3b5bdb'; c.lineWidth=1.5; c.globalAlpha=.6;
    c.beginPath(); c.moveTo(x,sc.y.top); c.lineTo(x,sc.y.bottom); c.stroke();
    c.setLineDash([]); c.globalAlpha=1; c.font='9px Inter,sans-serif';
    c.fillStyle='#3b5bdb'; c.textAlign='center';
    c.fillText('Avg '+avgCsat.toFixed(2),x,sc.y.top-4); c.restore();
  }};

  CHARTS[seg] = new Chart(ctx, {
    type:'bubble', data:{datasets}, plugins:[vlinePlugin],
    options:{
      responsive:true, maintainAspectRatio:false,
      plugins:{
        legend:{position:'bottom',labels:{font:{size:10},boxWidth:10}},
        tooltip:{callbacks:{label(c){const d=c.raw;
          const sig=d.csat_n<30?' ⚠️ baixa amostragem':'';
          return [d.uc,`Conversas: ${fmtN(d.vol)}`,`CSAT: ${d.csat} (${d.csat_n} resp.)${sig}`,`CX: ${d.cx}%  |  Defl: ${d.defl}%  |  Unres: ${d.unres}%`];}}}
      },
      scales:{
        x:{min:0,max:100,title:{display:true,text:'CSAT% (promotores 4-5 / total)',font:{size:10},color:'#646587'},grid:{color:'#f0f0f0'},ticks:{font:{size:9}}},
        y:{type:'logarithmic',title:{display:true,text:'Volume (log)',font:{size:10},color:'#646587'},grid:{color:'#f0f0f0'},
          ticks:{font:{size:9},callback(v){if(v===100000)return'100K';if(v===10000)return'10K';if(v===1000)return'1K';if(v===500)return'500';if(v>=1000000)return(v/1000000).toFixed(0)+'M';return null;}}}
      }
    }
  });
}

function buildList(seg, rows) {
  const listId = (seg==null||seg==='ALL') ? 'ALL' : seg;
  const el = document.getElementById('list-'+listId);
  if(!el) return;
  const pm={};
  for(const p of PRODS) pm[p]=[];
  for(const r of [...rows].sort((a,b)=>b.vol-a.vol)){
    const p=UC_TO_PROD[r.uc]||'Online Payments';
    if(pm[p]) pm[p].push(r);
  }
  let html='';
  for(const prod of PRODS){
    if(!pm[prod]||!pm[prod].length) continue;
    const _prodColors={'Instore (Point)':{bg:'#434ce4',tx:'#fff'},'Online Payments':{bg:'#2f9e44',tx:'#fff'},'Conta':{bg:'#e67700',tx:'#fff'}};
    const _pc=_prodColors[prod]||{bg:'#555',tx:'#fff'};
    html+=`<div style="background:${_pc.bg};color:${_pc.tx};padding:10px 14px;font-size:12px;font-weight:800;letter-spacing:.8px;text-transform:uppercase;display:flex;align-items:center;gap:7px;position:sticky;top:0;z-index:10">${PROD_ICON[prod]||''} ${prod}</div>`;
    for(const r of pm[prod]){
      const defl_key=r.seg+'|'+r.uc;
      const dm=DEFL_META[defl_key]||{defl:null,unres:null};
      const trend=getTrend(r.seg,r.uc);
      const maxV=Math.max(...trend.map(t=>t.vol),1);
      const uid=(r.seg+r.uc).replace(/\W/g,'_');
      const volK=r.vol>=1000?(r.vol/1000).toFixed(1)+'K':r.vol;
      const csatStr = r.csat!=null ? r.csat : '—';
      const dot=r.csat!=null?ucDot(r.csat,r.cx):'acc-g';
      const lowSample = r.csat_n!=null && r.csat_n<30;
      const opp=OPP[r.uc]||'';
      const bars=trend.map(t=>{
        const pct=Math.max(t.vol/maxV*100,1);
        const c=t.vol===0?'#e0e0e0':ucColor(r.csat,r.cx,0.75);
        return `<div class="tb-wrap"><div class="tb" style="height:${Math.round(pct*0.36)+2}px;background:${c}"></div><div class="tb-lbl">${MONTH_LBL[t.m]}</div></div>`;
      }).join('');
      const rec=trend.filter(t=>t.vol>0).slice(-3).map(t=>`<div class="acc-stat"><strong>${(t.vol/1000).toFixed(0)}K</strong><span>${MONTH_LBL[t.m]}</span></div>`).join('');
      const deflH=dm.defl!=null?`<div class="acc-stat"><strong style="color:${dm.defl<60?'#e03131':dm.defl<80?'#e67700':'#2f9e44'}">${dm.defl}%</strong><span>Deflection</span></div>`:'';
      const unresH=dm.unres!=null?`<div class="acc-stat"><strong style="color:${dm.unres>70?'#e03131':dm.unres>50?'#e67700':'#2f9e44'}">${dm.unres}%</strong><span>Unresolved</span></div>`:'';
      // L3: Seg × Site cross-table
      const crossData = getSegSiteBreakdown(r.uc, currentMonth);
      const segBorderClass = {'Big Seller':'seg-row-bs','SMB':'seg-row-smb','Longtail':'seg-row-lt'};
      let prevSeg = null;
      const crossRows = crossData.map(d=>{
        const volK = d.vol>=1000?(d.vol/1000).toFixed(1)+'K':d.vol;
        const csatStr = d.csat!=null?d.csat.toFixed(2):'—';
        const csatCls = d.csat==null?'csat-na':d.csat<3.2?'csat-bad':d.csat<3.8?'csat-mid':'csat-good';
        const cxColor = d.cx>20?'color:#e03131':d.cx>10?'color:#e67700':'color:#2f9e44';
        const segShow = d.seg !== prevSeg;
        prevSeg = d.seg;
        const bdrClass = segBorderClass[d.seg]||'';
        // TPV for this segment x uc
        const tpvEntry = UC_TPV[d.seg+'|'+r.uc]||{};
        const tpvStr = tpvEntry.tpv_mi ? fmtTpv(tpvEntry.tpv_mi) : '—';
        return `<tr class="${bdrClass}">
          <td class="seg-cell">${segShow?`${SEG_ICON[d.seg]||''} ${d.seg}`:''}</td>
          <td><span class="site-badge site-${d.site}">${d.site}</span></td>
          <td class="num">${volK}</td>
          <td class="num ${csatCls}">${csatStr}${d.csat_n?` <small style="color:#9c9ebf;font-weight:400">(${d.csat_n})</small>`:''}</td>
          <td class="num" style="${cxColor}">${d.cx}%</td>
          <td class="num">${d.defl}%</td>
          <td class="num">${d.unres}%</td>
          <td class="num" style="color:#3b5bdb;font-weight:700">${segShow?tpvStr:''}</td>
        </tr>`;
      }).join('');
      // Total TPV for this use case across all segments
      const totalTpv = ['Big Seller','SMB','Longtail'].reduce((s,sg)=>{
        const e=UC_TPV[sg+'|'+r.uc]; return s+(e?e.tpv_mi:0);
      },0);
      const totalTpvStr = totalTpv>0?fmtTpv(totalTpv):'—';
      const crossTableHtml = crossData.length ? `
        <div class="site-breakdown">
          <div class="site-breakdown-title">Segmento × Site (L3 detalhado) · TPV total do use case: <strong style="color:#3b5bdb">${totalTpvStr} LC</strong></div>
          <table class="cross-tbl">
            <thead><tr><th>Segmento</th><th>Site</th><th>Convs</th><th>CSAT (N)</th><th>CX%</th><th>Defl%</th><th>Unres%</th><th>TPV USD</th></tr></thead>
            <tbody>${crossRows}</tbody>
          </table>
        </div>` : '';

      // Sparkline de tendência por segmento
      const segTrends = getSegTrend(r.uc, currentMonth);
      const sparkHtml = segTrends.length ? (() => {
        const allVols = segTrends.flatMap(s=>s.months.map(t=>t.vol));
        const maxV = Math.max(...allVols, 1);
        const rows2 = segTrends.map(s=>{
          const bars = s.months.map(t=>{
            const h = Math.max(Math.round(t.vol/maxV*24),1);
            const c = SEG_COLOR[s.seg]||'#aaa';
            const volStr = t.vol>=1000?(t.vol/1000).toFixed(0)+'K':t.vol;
            const tip = `${MONTH_LBL[t.m]}: ${volStr}${t.csat?', CSAT '+t.csat:''}`;
            return `<div class="seg-spark-bar" style="height:${h}px;background:${c};opacity:.75" data-tip="${tip}"></div>`;
          }).join('');
          const last = s.months.filter(t=>t.vol>0).pop();
          const lastV = last?(last.vol>=1000?(last.vol/1000).toFixed(0)+'K':last.vol):'—';
          return `<div class="seg-spark-row">
            <div class="seg-spark-lbl" style="color:${SEG_COLOR[s.seg]}">${SEG_ICON[s.seg]} ${s.seg}</div>
            <div class="seg-spark-bars">${bars}</div>
            <div class="seg-spark-val">${lastV}</div>
          </div>`;
        }).join('');
        return `<div class="seg-trend-wrap"><div class="seg-trend-title">Tendência por Segmento (Jan–Jun)</div>${rows2}</div>`;
      })() : '';

      // Legacy segTable removed — now using crossTableHtml
      const segTableHtml = '';

      // Site breakdown (L3)
      const sites = getSiteBreakdown(seg==null?null:r.seg, r.uc, currentMonth);
      const siteRows = sites.map(s=>{
        const csatStr = s.csat!=null?s.csat.toFixed(2):'—';
        const csatColor = s.csat==null?'#9c9ebf':s.csat<3.2?'#e03131':s.csat<3.8?'#e67700':'#2f9e44';
        const cxColor = s.cx>20?'#e03131':s.cx>10?'#e67700':'#2f9e44';
        const sVolK = s.vol>=1000?(s.vol/1000).toFixed(1)+'K':s.vol;
        return `<tr>
          <td><span class="site-badge site-${s.site}">${s.site}</span></td>
          <td style="font-weight:600">${sVolK}</td>
          <td><strong style="color:${csatColor}">${csatStr}</strong>${s.csat_n?` <small style="color:#9c9ebf">(${s.csat_n})</small>`:''}</td>
          <td style="color:${cxColor};font-weight:600">${s.cx}%</td>
          <td>${s.defl}%</td>
        </tr>`;
      }).join('');
      const siteTableHtml = sites.length ? `
        <div class="site-breakdown">
          <div class="site-breakdown-title">Quebra por Site (L3)</div>
          <table class="site-tbl">
            <thead><tr><th>Site</th><th>Convs</th><th>CSAT</th><th>CX%</th><th>Defl%</th></tr></thead>
            <tbody>${siteRows}</tbody>
          </table>
        </div>` : '';

      // Conv IDs — rich format with site, segment, outcome, CSAT
      const rawIds = CONV_IDS[r.uc]||[];
      const idHtml = rawIds.length ? `
        <div class="acc-convs">
          <div class="conv-ids-title">Conversation IDs — exemplos recentes (clique para copiar)</div>
          <table style="width:100%;border-collapse:collapse;font-size:10px;margin-top:4px">
            <thead><tr style="background:#f0f2f8">
              <th style="padding:4px 7px;text-align:left;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.3px;color:#9c9ebf">ID</th>
              <th style="padding:4px 7px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.3px;color:#9c9ebf">Site</th>
              <th style="padding:4px 7px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.3px;color:#9c9ebf">Seg</th>
              <th style="padding:4px 7px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.3px;color:#9c9ebf">Outcome</th>
              <th style="padding:4px 7px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.3px;color:#9c9ebf">CSAT</th>
              <th style="padding:4px 7px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.3px;color:#9c9ebf">Data</th>
            </tr></thead>
            <tbody>${rawIds.slice(0,6).map(entry=>{
              const id = typeof entry==='string'?entry:entry.id;
              const site = typeof entry==='object'?entry.site:'—';
              const seg = typeof entry==='object'?entry.seg:'—';
              const out = typeof entry==='object'?entry.outcome:'—';
              const csat = typeof entry==='object'&&entry.csat?entry.csat:'—';
              const dt = typeof entry==='object'?entry.dt:'—';
              const outColor = out==='resolved'?'color:#2f9e44':out==='unresolved'?'color:#e03131':'color:#9c9ebf';
              return `<tr style="border-bottom:1px solid #f0f0f0">
                <td style="padding:4px 7px"><button class="conv-id" onclick="navigator.clipboard.writeText('${id}');this.textContent='✅';setTimeout(()=>this.textContent='${id.substring(0,12)}...',1500)" title="${id}">${id.substring(0,12)}...</button></td>
                <td style="padding:4px 7px"><span class="site-badge site-${site}">${site}</span></td>
                <td style="padding:4px 7px;font-size:10px;color:#646587">${seg}</td>
                <td style="padding:4px 7px;font-size:10px;font-weight:600;${outColor}">${out}</td>
                <td style="padding:4px 7px;font-size:10px;font-weight:600">${csat}</td>
                <td style="padding:4px 7px;font-size:10px;color:#9c9ebf">${dt}</td>
              </tr>`;
            }).join('')}</tbody>
          </table>
        </div>` : '';
      html+=`<div class="acc-item">
        <div class="acc-hdr" onclick="this.classList.toggle('open');document.getElementById('ab-${uid}').style.display=this.classList.contains('open')?'block':'none'">
          <div class="acc-dot ${dot}"></div>
          <div class="acc-name">${r.uc}</div>
          <div class="acc-kpis">
            <div class="acc-kpi"><strong>${volK}</strong><span>Convs</span></div>
            <div class="acc-kpi"><strong style="${lowSample?'color:#9c9ebf':''}">${csatStr}%${lowSample?' ⚠':''}</strong><span>CSAT%</span></div>
            <div class="acc-kpi"><strong style="font-size:10px;color:#9c9ebf">${r.csat_nota!=null?r.csat_nota:'—'}</strong><span>nota</span></div>
            <div class="acc-kpi"><strong>${r.cx}%</strong><span>CX</span></div>
            <div class="acc-kpi"><strong>${r.defl!=null?r.defl+'%':'—'}</strong><span>Defl</span></div>
            <div class="acc-kpi"><strong>${r.unres!=null?r.unres+'%':'—'}</strong><span>Unres</span></div>
            ${(()=>{const segFilter=(seg==null||seg==='ALL')?null:seg;const segsForTpv=segFilter?[segFilter]:['Big Seller','SMB','Longtail'];const t=segsForTpv.reduce((s,sg)=>{const e=UC_TPV[sg+'|'+r.uc];return s+(e?e.tpv_mi:0);},0);return t>0?`<div class="acc-kpi"><strong style="color:#3b5bdb">${fmtTpv(t)}</strong><span>TPV USD</span></div>`:'';})()}
          </div>
          <div class="acc-arrow">▾</div>
        </div>
        <div class="acc-body" id="ab-${uid}" style="display:none">
          <div class="acc-top-stats">${rec}${deflH}${unresH}</div>
          <div class="acc-trend-title">Volume mensal (Jan–Jun/26)</div>
          <div class="trend-row">${bars}</div>
          ${crossTableHtml}
          ${sparkHtml}
          ${opp?`<div class="acc-opp">💡 ${opp}</div>`:''}
          ${idHtml}
        </div>
      </div>`;
    }
  }
  el.innerHTML=html||'<div style="padding:20px;text-align:center;font-size:11px;color:#9c9ebf">Sem dados.</div>';
}

function render(month,seg){
  const segFilter = (seg==null||seg==='ALL') ? null : seg;
  const rows=aggregate(month,segFilter);
  // Always render into the single ALL panel (filter is applied via data, not separate panels)
  renderKpiBar(seg||'ALL');
  renderChart('ALL',rows);
  buildList('ALL',rows);
}

function setMonth(m,btn){
  currentMonth=m;
  document.querySelectorAll('.m-btn').forEach(b=>b.classList.remove('active'));
  if(btn) btn.classList.add('active');
  render(m,currentSeg);
}

function showSegTab(seg,btn){
  currentSeg=seg;
  document.querySelectorAll('.seg-tab').forEach(b=>b.classList.remove('active'));
  if(btn) btn.classList.add('active');
  document.querySelectorAll('.seg-content').forEach(c=>c.classList.remove('active'));
  document.getElementById('sc-'+seg).classList.add('active');
  setTimeout(()=>render(currentMonth,seg),50);
}

function showPanel(id,btn){
  document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(b=>b.classList.remove('active'));
  document.getElementById('panel-'+id).classList.add('active');
  if(btn) btn.classList.add('active');
  if(id==='maxwell') setTimeout(()=>render(currentMonth,'ALL'),50);
  if(id==='opps') setTimeout(()=>renderOpps(),50);
  if(id==='cx') setTimeout(()=>renderCx(),50);
}

function goMaxwellSeg(seg, btn) {
  currentSeg = seg || 'ALL';
  document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active'));
  document.getElementById('panel-maxwell').classList.add('active');
  document.querySelectorAll('.nav-item').forEach(b=>b.classList.remove('active'));
  if(btn) btn.classList.add('active');
  // Update segment filter badge
  const badge = document.getElementById('seg-filter-badge');
  if(badge) {
    if(seg && seg!=='ALL') {
      badge.innerHTML = `${SEG_ICON[seg]||''} ${seg} <button onclick="clearSegFilter()" style="margin-left:6px;background:none;border:none;cursor:pointer;color:inherit;font-size:11px">✕</button>`;
      badge.style.display='inline-flex';
    } else {
      badge.style.display='none';
    }
  }
  setTimeout(()=>render(currentMonth, seg||'ALL'), 50);
}

function clearSegFilter() {
  goMaxwellSeg('ALL', null);
  document.querySelectorAll('.nav-item').forEach(b=>b.classList.remove('active'));
  // Re-activate the Maxwell nav item
  document.querySelectorAll('.nav-item').forEach(b=>{
    if(b.textContent.trim().startsWith('🤖')) b.classList.add('active');
  });
}


const CX_RAW = __CX_DATA__;
const NPS_RAW = __NPS_DATA__;
const SEG_MAP = {'BIG SELLERS':'Big Seller','SMB':'SMB','LONGTAIL':'Longtail'};
const SEG_MAP_REV = {'Big Seller':'BIG SELLERS','SMB':'SMB','Longtail':'LONGTAIL'};
let cxMonth='ALL', cxSeg='ALL', npsMonth='ALL', cxSiteF='ALL';

// Map CX product field to the 3 acquiring categories
const CX_PROD_MAP = {
  'Point':'Instore (Point)', 'Redelcom':'Instore (Point)',
  'Online Payments':'Online Payments',
};
function getCxProd(prod) { return CX_PROD_MAP[prod]||'Instore (Point)'; }

// CDU keywords that suggest Conta category
const CONTA_CDUS = ['cuenta','bloqueo','suspensión','acceso','recuperac','documento',
  'crédito','credito','inversión','inversion','tasa','limite','límite','fraude',
  'seguridad','perfil','kyc','identidad'];
function isCuentaCdu(cdu) {
  const c=(cdu||'').toLowerCase();
  return CONTA_CDUS.some(k=>c.includes(k));
}
function getCxCategory(r) {
  // Override with Conta if CDU matches
  if(isCuentaCdu(r.cdu)) return 'Conta';
  return getCxProd(r.prod);
}

function calcNps(prom,det,pass_){
  const n=prom+det+pass_; return n>0?Math.round((prom-det)/n*100):null;
}

// ── CX RENDERING ──────────────────────────────────────────
const CX_CHARTS = {};

function buildNpsMap(month) {
  // Build CDU -> NPS map from NPS_RAW (BT_CX_NPS_DETAIL)
  const map = {};
  for(const r of NPS_RAW) {
    if(month!=='ALL'&&r.m!==month) continue;
    const k = r.cdu.toLowerCase().trim();
    if(!map[k]) map[k]={prom:0,det:0,pass_:0};
    map[k].prom+=r.prom; map[k].det+=r.det; map[k].pass_+=r.pass_;
  }
  const npsMap = {};
  for(const [k,v] of Object.entries(map)) {
    const nps = calcNps(v.prom,v.det,v.pass_);
    if(nps!=null) npsMap[k]=nps;
  }
  return npsMap;
}

function renderCxChart(cduRows, totalCases) {
  const ctx = document.getElementById('cx-chart');
  if(!ctx) return;
  if(CX_CHARTS['cx']) { CX_CHARTS['cx'].destroy(); delete CX_CHARTS['cx']; }
  const maxCases = Math.max(...cduRows.map(r=>r.cases), 1);
  const R_MAX=26, R_MIN=5;
  // Build NPS map from NPS_RAW by CDU
  const npsMap = buildNpsMap(cxMonth);
  // Lookup NPS for each cduRow
  function getNps(cdu) {
    const k = (cdu||'').toLowerCase().trim();
    if(npsMap[k]!=null) return npsMap[k];
    // Fuzzy: find best partial match
    let best=null, bestLen=0;
    for(const [mk,mv] of Object.entries(npsMap)){
      if(k.includes(mk)||mk.includes(k)){
        const l=Math.min(k.length,mk.length);
        if(l>bestLen){bestLen=l;best=mv;}
      }
    }
    return best;
  }
  // Weighted avg NPS from NPS_RAW (total)
  let nSum=0, nW=0;
  for(const r of Object.values(cduRows)){
    const nps=getNps(r.cdu);
    if(nps!=null){nSum+=nps*r.cases;nW+=r.cases;}
  }
  const avgNps = nW>0 ? Math.round(nSum/nW) : 65;
  // Datasets by product category (Instore, Online Payments, Conta)
  const CX_CAT_ORDER = ['Instore (Point)','Online Payments','Conta'];
  const CX_CAT_COLORS = {
    'Instore (Point)': {bg:'rgba(67,76,228,0.82)',bd:'rgba(67,76,228,1)'},
    'Online Payments': {bg:'rgba(47,158,68,0.82)',bd:'rgba(47,158,68,1)'},
    'Conta':           {bg:'rgba(230,119,0,0.82)',bd:'rgba(230,119,0,1)'},
  };
  const catDatasets = {};
  for(const cat of CX_CAT_ORDER) catDatasets[cat]=[];
  for(const r of cduRows){
    const nps=getNps(r.cdu);
    if(nps==null) continue;
    const cat = getCxCategory(r);
    if(!catDatasets[cat]) catDatasets[cat]=[];
    catDatasets[cat].push({
      x: nps, y: r.cases,
      r: Math.max(R_MIN, Math.round(Math.sqrt(r.cases/maxCases)*R_MAX)),
      cdu: r.cdu, cases: r.cases, nps: nps,
      cr: r.mad>0?Math.round(r.cases/r.mad*10000)/100:null
    });
  }
  const datasets = CX_CAT_ORDER.filter(c=>catDatasets[c]&&catDatasets[c].length>0).map(c=>{
    const col = CX_CAT_COLORS[c]||{bg:'rgba(100,100,100,0.8)',bd:'rgba(100,100,100,1)'};
    return {
      label: (PROD_ICON[c]||'') + ' ' + c,
      data: catDatasets[c],
      backgroundColor: col.bg, borderColor: col.bd, borderWidth: 1.5
    };
  });
  const vlinePlugin = {id:'vl',afterDraw(chart){
    const {ctx:c,scales:sc}=chart; if(!sc.x||!sc.y) return;
    const x=sc.x.getPixelForValue(avgNps);
    c.save(); c.setLineDash([5,4]); c.strokeStyle='#3b5bdb'; c.lineWidth=1.5; c.globalAlpha=.6;
    c.beginPath(); c.moveTo(x,sc.y.top); c.lineTo(x,sc.y.bottom); c.stroke();
    c.setLineDash([]); c.globalAlpha=1; c.font='9px Inter,sans-serif';
    c.fillStyle='#3b5bdb'; c.textAlign='center';
    c.fillText('NPS avg '+avgNps, x, sc.y.top-4); c.restore();
  }};
  CX_CHARTS['cx'] = new Chart(ctx, {
    type:'bubble', data:{datasets}, plugins:[vlinePlugin],
    options:{
      responsive:true, maintainAspectRatio:false,
      plugins:{
        legend:{position:'bottom',labels:{font:{size:10},boxWidth:10}},
        tooltip:{callbacks:{label(c){const d=c.raw;
          return [d.cdu||'—', `Casos: ${fmtN(d.cases)}`, `NPS: ${d.nps}`, d.cr!=null?`CR: ${d.cr}‱`:''];
        }}}
      },
      scales:{
        x:{min:-20,max:100,title:{display:true,text:'NPS (−100 a 100)',font:{size:10},color:'#646587'},
           grid:{color:'#f0f0f0'},ticks:{font:{size:9}}},
        y:{type:'logarithmic',title:{display:true,text:'Casos CX (log)',font:{size:10},color:'#646587'},
           grid:{color:'#f0f0f0'},ticks:{font:{size:9},callback(v){
             if(v===10000)return'10K'; if(v===1000)return'1K'; if(v===100)return'100';
             if(v>=100000)return(v/1000).toFixed(0)+'K'; return null;
           }}}
      }
    }
  });
}

function renderCx(){
  const el=document.getElementById('cx-content');
  if(!el) return;
  // Aggregate
  const map={};
  for(const r of CX_RAW){
    if(cxMonth!=='ALL'&&r.m!==cxMonth) continue;
    if(cxSeg!=='ALL'&&r.seg!==cxSeg) continue;
    const k=r.seg+'|'+r.cdu;
    if(!map[k]) map[k]={seg:r.seg,cdu:r.cdu,prod:r.prod,cases:0,prom:0,det:0,pass_:0,mad:0};
    map[k].cases+=r.cases; map[k].prom+=r.prom; map[k].det+=r.det;
    map[k].pass_+=r.pass_; map[k].mad+=r.mad;
  }
  const rows=Object.values(map).sort((a,b)=>b.cases-a.cases);
  const totalCases=rows.reduce((s,r)=>s+r.cases,0);
  const totalMad=rows.reduce((s,r)=>s+r.mad,0);
  const cr=totalMad>0?Math.round(totalCases/totalMad*10000)/100:null;

  // KPI bar
  const segAgg={};
  for(const r of rows){
    const s=SEG_MAP[r.seg]||r.seg;
    if(!segAgg[s]) segAgg[s]={cases:0,prom:0,det:0,pass_:0};
    segAgg[s].cases+=r.cases; segAgg[s].prom+=r.prom;
    segAgg[s].det+=r.det; segAgg[s].pass_+=r.pass_;
  }

  let kpiHtml=`<div style="display:flex;gap:20px;background:#fff;padding:12px 16px;border-radius:10px;border:1px solid #e7e9f3;margin-bottom:14px;flex-wrap:wrap;align-items:center">
    <div class="skpi"><div class="skpi-val">${fmtN(totalCases)}</div><div class="skpi-lbl">Casos CX Total</div></div>
    <div class="skpi-div"></div>
    ${cr!=null?`<div class="skpi"><div class="skpi-val" style="color:${cr>2?'#e03131':cr>1?'#e67700':'#2f9e44'}">${cr}‱</div><div class="skpi-lbl">CR (casos/MAD)</div></div><div class="skpi-div"></div>`:''}`;
  for(const [seg,d] of Object.entries(segAgg)){
    const nps=calcNps(d.prom,d.det,d.pass_);
    kpiHtml+=`<div class="skpi"><div class="skpi-val" style="color:${SEG_COLOR[seg]||'#282834'}">${fmtN(d.cases)}</div><div class="skpi-lbl">${SEG_ICON[seg]||''} ${seg}</div></div>`;
  }
  kpiHtml+='</div>';

  // CDU table with accordion
  const cduAgg={};
  for(const r of rows){
    if(!cduAgg[r.cdu]) cduAgg[r.cdu]={cdu:r.cdu,cases:0,prom:0,det:0,pass_:0,segs:{}};
    cduAgg[r.cdu].cases+=r.cases; cduAgg[r.cdu].prom+=r.prom;
    cduAgg[r.cdu].det+=r.det; cduAgg[r.cdu].pass_+=r.pass_;
    const s=SEG_MAP[r.seg]||r.seg;
    if(!cduAgg[r.cdu].segs[s]) cduAgg[r.cdu].segs[s]={cases:0,prom:0,det:0,pass_:0};
    cduAgg[r.cdu].segs[s].cases+=r.cases;
    cduAgg[r.cdu].segs[s].prom+=r.prom; cduAgg[r.cdu].segs[s].det+=r.det;
    cduAgg[r.cdu].segs[s].pass_+=r.pass_;
  }
  const cduRows=Object.values(cduAgg).sort((a,b)=>b.cases-a.cases);
  const maxCases=Math.max(...cduRows.map(r=>r.cases),1);

  setTimeout(()=>renderCxChart(cduRows, totalCases), 50);

  // Group cduRows by the 3 categories
  const CAT_ORDER = ['Instore (Point)','Online Payments','Conta'];
  const CAT_COLORS = {'Instore (Point)':'#434ce4','Online Payments':'#2f9e44','Conta':'#e67700'};
  const CAT_ICONS  = {'Instore (Point)':'📟','Online Payments':'💳','Conta':'🏦'};
  const catMap = {};
  for(const cat of CAT_ORDER) catMap[cat]=[];
  for(const r of cduRows) {
    const cat = getCxCategory(r);
    if(!catMap[cat]) catMap[cat]=[];
    catMap[cat].push(r);
  }
  for(const cat of CAT_ORDER) catMap[cat].sort((a,b)=>b.cases-a.cases);

  let tblHtml=`<div style="background:#fff;border-radius:10px;border:1px solid #e7e9f3;overflow:hidden">`;
  let globalIdx=0;
  for(const cat of CAT_ORDER) {
    const catRows = catMap[cat]||[];
    if(!catRows.length) continue;
    const catTotal = catRows.reduce((s,r)=>s+r.cases,0);
    const _catStyle = PROD_DIV_STYLE[cat]||{bg:CAT_COLORS[cat]||'#c5d4f0',text:'#ffffff'};
    tblHtml+=`<div style="background:${_catStyle.bg};padding:7px 14px;display:flex;align-items:center;gap:8px">
      <span style="font-size:14px">${CAT_ICONS[cat]}</span>
      <span style="color:#fff;font-size:12px;font-weight:700">${cat}</span>
      <span style="background:rgba(255,255,255,.2);color:#fff;font-size:10px;font-weight:700;padding:1px 8px;border-radius:9999px;margin-left:auto">${fmtN(catTotal)} casos</span>
    </div>
    <div style="background:#282834;padding:6px 14px;display:flex">
      <div style="flex:1;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.3px;color:#aaa">CDU</div>
      <div style="width:90px;text-align:right;font-size:9px;font-weight:700;color:#aaa">Casos</div>
      <div style="width:70px;text-align:right;font-size:9px;font-weight:700;color:#aaa">% Total</div>
      <div style="width:80px;text-align:right;font-size:9px;font-weight:700;color:#aaa">NPS CX</div>
      <div style="width:20px"></div>
    </div>`;
    catRows.slice(0,20).forEach((r)=>{const idx=globalIdx++;
    const nps=calcNps(r.prom,r.det,r.pass_);
    const pct=Math.round(r.cases/totalCases*100*10)/10;
    const barW=Math.round(r.cases/maxCases*100);
    const npsColor=nps==null?'#9c9ebf':nps>=70?'#2f9e44':nps>=50?'#e67700':'#e03131';
    const uid='cx_'+idx;
    // Segment breakdown rows
    const segRows=Object.entries(r.segs).sort((a,b)=>b[1].cases-a[1].cases).map(([seg,d])=>{
      const sNps=calcNps(d.prom,d.det,d.pass_);
      return `<div style="display:flex;padding:4px 14px 4px 28px;background:#f8f9fd;border-top:1px solid #f0f0f0;font-size:10px">
        <div style="flex:1;color:#646587">${SEG_ICON[seg]||''} ${seg}</div>
        <div style="width:90px;text-align:right;font-weight:600">${fmtN(d.cases)}</div>
        <div style="width:70px"></div>
        <div style="width:80px;text-align:right;font-weight:700;color:${sNps==null?'#9c9ebf':sNps>=70?'#2f9e44':sNps>=50?'#e67700':'#e03131'}">${sNps!=null?sNps:'—'}</div>
        <div style="width:20px"></div>
      </div>`;
    }).join('');
    tblHtml+=`<div style="border-bottom:1px solid #f0f0f0">
      <div onclick="document.getElementById('cx-seg-${uid}').style.display=document.getElementById('cx-seg-${uid}').style.display==='none'?'block':'none'"
        style="display:flex;align-items:center;padding:8px 14px;cursor:pointer;transition:.12s" onmouseover="this.style.background='#f8f9ff'" onmouseout="this.style.background='#fff'">
        <div style="flex:1">
          <div style="font-size:11px;font-weight:600;color:#282834;margin-bottom:3px">${r.cdu||'(sin CDU)'}</div>
          <div style="height:4px;background:#e7e9f3;border-radius:2px;width:100%"><div style="height:4px;background:#3b5bdb;border-radius:2px;width:${barW}%"></div></div>
        </div>
        <div style="width:90px;text-align:right;font-size:12px;font-weight:700">${fmtN(r.cases)}</div>
        <div style="width:70px;text-align:right;font-size:11px;color:#9c9ebf">${pct}%</div>
        <div style="width:80px;text-align:right;font-size:13px;font-weight:700;color:${npsColor}">${nps!=null?nps:'—'}</div>
        <div style="width:20px;text-align:center;font-size:10px;color:#9c9ebf">▾</div>
      </div>
      <div id="cx-seg-${uid}" style="display:none">${segRows}</div>
    </div>`;
    });
    tblHtml+='</div>';
  } // end category loop
  tblHtml+='</div>';
  el.innerHTML = kpiHtml + tblHtml;
}

// ── NPS RENDERING ─────────────────────────────────────────
function renderNps(){
  const el=document.getElementById('nps-content');
  if(!el) return;
  const map={};
  for(const r of NPS_RAW){
    if(npsMonth!=='ALL'&&r.m!==npsMonth) continue;
    const k=r.seg+'|'+r.cdu;
    if(!map[k]) map[k]={seg:r.seg,cdu:r.cdu,prod:r.prod,n:0,prom:0,det:0,pass_:0,top_det:r.top_det||''};
    map[k].n+=r.n; map[k].prom+=r.prom; map[k].det+=r.det; map[k].pass_+=r.pass_;
    if(r.top_det) map[k].top_det=r.top_det;
  }
  const rows=Object.values(map).sort((a,b)=>b.n-a.n);
  const segAgg={};
  for(const r of rows){
    const s=SEG_MAP[r.seg]||r.seg;
    if(!segAgg[s]) segAgg[s]={n:0,prom:0,det:0,pass_:0};
    segAgg[s].n+=r.n; segAgg[s].prom+=r.prom; segAgg[s].det+=r.det; segAgg[s].pass_+=r.pass_;
  }
  // KPI bar
  let kpiHtml=`<div style="display:flex;gap:20px;background:#fff;padding:12px 16px;border-radius:10px;border:1px solid #e7e9f3;margin-bottom:14px;flex-wrap:wrap;align-items:center">`;
  for(const [seg,d] of Object.entries(segAgg)){
    const nps=calcNps(d.prom,d.det,d.pass_);
    const color=nps==null?'#9c9ebf':nps>=70?'#2f9e44':nps>=50?'#e67700':'#e03131';
    kpiHtml+=`<div class="skpi">
      <div class="skpi-val" style="color:${color}">${nps!=null?nps:'—'}</div>
      <div class="skpi-lbl">${SEG_ICON[seg]||''} ${seg} NPS</div>
      <div style="font-size:9px;color:#9c9ebf">${d.n.toLocaleString()} resp.</div>
    </div><div class="skpi-div"></div>`;
  }
  kpiHtml+='</div>';

  // CDU NPS table
  const cduAgg={};
  for(const r of rows){
    if(!cduAgg[r.cdu]) cduAgg[r.cdu]={cdu:r.cdu,n:0,prom:0,det:0,pass_:0,top_det:'',segs:{}};
    cduAgg[r.cdu].n+=r.n; cduAgg[r.cdu].prom+=r.prom; cduAgg[r.cdu].det+=r.det; cduAgg[r.cdu].pass_+=r.pass_;
    if(r.top_det) cduAgg[r.cdu].top_det=r.top_det;
    const s=SEG_MAP[r.seg]||r.seg;
    if(!cduAgg[r.cdu].segs[s]) cduAgg[r.cdu].segs[s]={n:0,prom:0,det:0,pass_:0};
    cduAgg[r.cdu].segs[s].n+=r.n; cduAgg[r.cdu].segs[s].prom+=r.prom;
    cduAgg[r.cdu].segs[s].det+=r.det; cduAgg[r.cdu].segs[s].pass_+=r.pass_;
  }
  const cduRows=Object.values(cduAgg).sort((a,b)=>b.n-a.n);

  let tblHtml=`<div style="background:#fff;border-radius:10px;border:1px solid #e7e9f3;overflow:hidden">
    <div style="background:#282834;padding:8px 14px;display:flex">
      <div style="flex:1;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.3px;color:#fff">CDU</div>
      <div style="width:70px;text-align:right;font-size:10px;font-weight:700;color:#fff">Resp.</div>
      <div style="width:70px;text-align:right;font-size:10px;font-weight:700;color:#fff">NPS</div>
      <div style="width:160px;font-size:10px;font-weight:700;color:#aaa;padding-left:12px">Top Detracción</div>
      <div style="width:20px"></div>
    </div>`;

  cduRows.slice(0,30).forEach((r,idx)=>{
    const nps=typeof getNps==='function'?getNps(r.cdu):calcNps(r.prom,r.det,r.pass_);
    const npsColor=nps==null?'#9c9ebf':nps>=70?'#2f9e44':nps>=50?'#e67700':'#e03131';
    const uid='nps_'+idx;
    const segRows=Object.entries(r.segs).sort((a,b)=>b[1].n-a[1].n).map(([seg,d])=>{
      const sNps=calcNps(d.prom,d.det,d.pass_);
      const pct_p=d.n>0?Math.round(d.prom/d.n*100):0;
      const pct_d=d.n>0?Math.round(d.det/d.n*100):0;
      return `<div style="display:flex;padding:5px 14px 5px 28px;background:#f8f9fd;border-top:1px solid #f0f0f0;font-size:10px;align-items:center">
        <div style="flex:1;color:#646587">${SEG_ICON[seg]||''} ${seg}</div>
        <div style="width:70px;text-align:right;font-weight:600">${d.n.toLocaleString()}</div>
        <div style="width:70px;text-align:right;font-weight:700;color:${sNps==null?'#9c9ebf':sNps>=70?'#2f9e44':sNps>=50?'#e67700':'#e03131'}">${sNps!=null?sNps:'—'}</div>
        <div style="width:160px;padding-left:12px;font-size:9px;color:#9c9ebf">
          <span style="color:#2f9e44">▲${pct_p}%</span>
          <span style="color:#e03131">▼${pct_d}%</span>
        </div>
        <div style="width:20px"></div>
      </div>`;
    }).join('');
    tblHtml+=`<div style="border-bottom:1px solid #f0f0f0">
      <div onclick="document.getElementById('nps-seg-${uid}').style.display=document.getElementById('nps-seg-${uid}').style.display==='none'?'block':'none'"
        style="display:flex;align-items:center;padding:8px 14px;cursor:pointer;transition:.12s" onmouseover="this.style.background='#f8f9ff'" onmouseout="this.style.background='#fff'">
        <div style="flex:1;font-size:11px;font-weight:600;color:#282834">${r.cdu||'(sin CDU)'}</div>
        <div style="width:70px;text-align:right;font-size:11px;font-weight:700">${r.n.toLocaleString()}</div>
        <div style="width:70px;text-align:right;font-size:14px;font-weight:800;color:${npsColor}">${nps!=null?nps:'—'}</div>
        <div style="width:160px;padding-left:12px;font-size:10px;color:#9c9ebf;font-style:italic">${r.top_det?r.top_det.substring(0,30):''}</div>
        <div style="width:20px;text-align:center;font-size:10px;color:#9c9ebf">▾</div>
      </div>
      <div id="nps-seg-${uid}" style="display:none">${segRows}</div>
    </div>`;
  });
  tblHtml+='</div>';
  el.innerHTML=kpiHtml+tblHtml;
}

function setCxMonth(m,btn){
  cxMonth=m;
  document.querySelectorAll('.ctrl-bar .m-btn').forEach(b=>{if(b.onclick&&b.onclick.toString().includes('setCxMonth'))b.classList.remove('active');});
  btn.classList.add('active');
  renderCx();
}
function setCxSiteFilter(s,btn){
  cxSiteF=s;
  document.querySelectorAll('.ctrl-bar .m-btn').forEach(b=>{if(b.onclick&&b.onclick.toString().includes('setCxSiteFilter'))b.classList.remove('active');});
  btn.classList.add('active'); renderCx();
}
function setCxSeg(s,btn){
  cxSeg=s;
  document.querySelectorAll('.ctrl-bar .m-btn').forEach(b=>{if(b.onclick&&b.onclick.toString().includes('setCxSeg'))b.classList.remove('active');});
  btn.classList.add('active');
  renderCx();
}
function setNpsMonth(m,btn){
  npsMonth=m;
  document.querySelectorAll('.ctrl-bar .m-btn').forEach(b=>{if(b.onclick&&b.onclick.toString().includes('setNpsMonth'))b.classList.remove('active');});
  btn.classList.add('active');
  renderNps();
}

// ── OPORTUNIDADES ──────────────────────────────────────────
const OPPS = __OPPS__;
let oppFilterSeg = null;
let oppFilterProd = null;
const OPP_DETAIL = __OPP_DETAIL__;
const TPV_RISCO = __TPV_RISCO__;
const PROD_COLOR_MAP = {'Instore (Point)':'#434ce4','Online Payments':'#2f9e44','Conta':'#e67700'};
// Product divider colors (background + text) for section headers in lists
const PROD_DIV_STYLE = {
  'Instore (Point)':   {bg:'#434ce4', text:'#ffffff'},
  'Online Payments':   {bg:'#2f9e44', text:'#ffffff'},
  'Conta':             {bg:'#e67700', text:'#ffffff'},
};

function renderOpps() {
  const el = document.getElementById('opps-content');
  if(!el) return;

  // Group by segment
  const segMap = {'Big Seller':[],'SMB':[],'Longtail':[]};
  for(const o of OPPS) {
    if(oppFilterSeg && o.seg!==oppFilterSeg) continue;
    if(oppFilterProd && o.prod!==oppFilterProd) continue;
    if(segMap[o.seg]) segMap[o.seg].push(o);
  }
  // Sort each segment by score desc
  for(const s of Object.keys(segMap)) segMap[s].sort((a,b)=>b.score-a.score);

  // Matrix header
  const prods = ['Instore (Point)','Online Payments','Conta'];
  const segs  = ['Big Seller','SMB','Longtail'];

  // Compute matrix cell worst score
  function cellScore(seg,prod) {
    const items = (segMap[seg]||[]).filter(o=>o.prod===prod);
    if(!items.length) return 0;
    return Math.max(...items.map(i=>i.score));
  }
  function cellColor(score) {
    if(score>=70) return '#ffe3e3';
    if(score>=50) return '#fff3bf';
    if(score>0)   return '#d3f9d8';
    return '#f1f3f5';
  }
  function cellBorder(score) {
    if(score>=70) return '#f0a0a0';
    if(score>=50) return '#e0c060';
    if(score>0)   return '#a0e8a6';
    return '#bbb';
  }

  // Build 3 separate matrices (one per segment)
  const SEG_HDR_COLORS = {'Big Seller':'#e64b17','SMB':'#d99000','Longtail':'#1e7e34'};

  function buildSegMatrix(seg) {
    const segColor = SEG_HDR_COLORS[seg]||'#333';
    const segOppsList = (segMap[seg]||[]);
    // Group by product
    const byProd = {};
    for(const p of prods) byProd[p]=[];
    for(const o of segOppsList) { if(byProd[o.prod]) byProd[o.prod].push(o); }

    const prodCells = prods.map(prod=>{
      const items = byProd[prod].slice(0,2);
      const sc = items[0]?items[0].score:0;
      const bg = sc>=70?'#ffe3e3':sc>=50?'#fff3bf':sc>0?'#f4f9f4':'#f8f9fa';
      const tpvStr = items[0]&&items[0].tpv_mi>0?(items[0].tpv_mi>=1000?(items[0].tpv_mi/1000).toFixed(0)+'B':items[0].tpv_mi.toFixed(0)+'M'):'';
      const prioLabel = sc>=70?'🔴 Crítico':sc>=50?'🟡 Atención':sc>0?'🟢 OK':'';
      const _ps = PROD_DIV_STYLE[prod]||{bg:'#434ce4',text:'#fff'};
      return `<td style="padding:10px 12px;border:1px solid #e7e9f3;background:${bg};vertical-align:top;cursor:pointer;width:33.3%" onclick="selectOppCell('${seg}','${prod}')">
        ${items[0]?`<div style="font-size:11px;font-weight:700;color:#282834;margin-bottom:4px">${items[0].uc}</div>
        <div style="font-size:10px;color:#646587">CX:${items[0].cx}% · CSAT:${items[0].csat?items[0].csat.toFixed(0)+'%':'—'}</div>
        ${tpvStr?`<div style="font-size:10px;color:#3b5bdb;font-weight:700;margin-top:2px">TPV: USD ${tpvStr}</div>`:''}
        <div style="margin-top:6px"><span style="font-size:9px;font-weight:700;padding:2px 8px;border-radius:4px;background:${sc>=70?'#ffe3e3':sc>=50?'#fff3bf':'#d3f9d8'};color:${sc>=70?'#9e0015':sc>=50?'#7a6000':'#1e7e34'}">${prioLabel}</span></div>`
        :'<div style="font-size:10px;color:#c0c0c0;font-style:italic">Sin datos</div>'}
      </td>`;
    }).join('');

    return `<div style="margin-bottom:16px;border-radius:12px;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,.1)">
      <div style="background:${segColor};padding:10px 14px;display:flex;align-items:center;gap:8px">
        <span style="font-size:16px">${SEG_ICON[seg]||''}</span>
        <span style="color:#fff;font-size:14px;font-weight:700">${seg}</span>
        <span style="background:rgba(255,255,255,.2);color:#fff;font-size:10px;font-weight:700;padding:2px 8px;border-radius:9999px;margin-left:auto">${segOppsList.length} oportunidades</span>
      </div>
      <table style="width:100%;border-collapse:collapse;table-layout:fixed">
        <thead><tr>
          ${prods.map(p=>{const _ps=PROD_DIV_STYLE[p]||{bg:'#444',text:'#fff'};return `<th style="padding:8px 12px;background:${_ps.bg};color:${_ps.text};font-size:10px;font-weight:700;text-align:center">${PROD_ICON[p]||''} ${p}</th>`;}).join('')}
        </tr></thead>
        <tbody><tr>${prodCells}</tr></tbody>
      </table>
    </div>`;
  }

  let matrixHtml = '<div style="margin-bottom:20px">' +
    '<div style="font-size:12px;font-weight:700;color:#646587;text-transform:uppercase;letter-spacing:.5px;margin-bottom:12px">Mapa de Prioridades por Segmento</div>' +
    segs.map(seg=>buildSegMatrix(seg)).join('') +
    '</div>';

    const filterBadge = (oppFilterSeg||oppFilterProd) ? `
    <div style="display:flex;align-items:center;gap:10px;background:#1e2235;border-radius:9px;padding:8px 14px;margin-bottom:14px">
      <span style="font-size:13px">&#128269;</span>
      <span style="font-size:12px;color:#c8cfe0">Filtrando: <strong style="color:#ffe600">${oppFilterSeg||'Todos'}</strong> &times; <strong style="color:#ffe600">${oppFilterProd||'Todos'}</strong></span>
      <button onclick="clearOppFilter()" style="margin-left:auto;background:#e03131;color:#fff;border:none;border-radius:5px;padding:3px 10px;font-size:11px;font-weight:700;cursor:pointer">&times; Limpiar</button>
    </div>` : '';
    let cardsHtml = filterBadge;
  const activeSegs = oppFilterSeg ? segs.filter(s=>s===oppFilterSeg) : segs;
  for(const seg of activeSegs) {
    const items = (segMap[seg]||[]).filter(o=>o.score>=45 && o.vol>=100);
    if(!items.length) continue;
    cardsHtml += `<div id="opp-${seg.replace(' ','_')}" style="margin-bottom:20px">
      <div style="display:flex;align-items:center;gap:8px;padding:10px 14px;background:${SEG_COLOR[seg]||'#333'};border-radius:10px 10px 0 0">
        <span style="font-size:16px">${SEG_ICON[seg]||''}</span>
        <span style="color:#fff;font-size:14px;font-weight:700">${seg}</span>
        <span style="background:rgba(255,255,255,.2);color:#fff;font-size:10px;font-weight:700;padding:2px 8px;border-radius:9999px;margin-left:auto">${items.length} oportunidades</span>
      </div>
      <div style="border:1px solid #e7e9f3;border-top:none;border-radius:0 0 10px 10px;overflow:hidden">
      ${items.map((o,idx)=>{
        const det = OPP_DETAIL[o.uc]||null;
        const prioColor = o.score>=70?'#e03131':o.score>=50?'#e67700':'#2f9e44';
        const prioLbl = o.score>=70?'CRÍTICO':o.score>=50?'ATENCIÓN':'MONITOREAR';
        const tpvStr = o.tpv_mi>=1000?(o.tpv_mi/1000).toFixed(0)+'B':o.tpv_mi.toFixed(0)+'M';
        const uid = (seg+o.uc).replace(/\W/g,'_');
        return `<div style="border-bottom:1px solid #f0f0f0;${idx===0?'':''}">
          <div onclick="document.getElementById('od-${uid}').style.display=document.getElementById('od-${uid}').style.display==='none'?'block':'none';this.querySelector('.oarr').style.transform=document.getElementById('od-${uid}').style.display==='block'?'rotate(180deg)':'rotate(0deg)'"
            style="display:flex;align-items:flex-start;gap:10px;padding:12px 14px;cursor:pointer;background:#fff;transition:.12s" onmouseover="this.style.background='#f8f9ff'" onmouseout="this.style.background='#fff'">
            <div style="width:8px;height:8px;border-radius:50%;background:${prioColor};flex-shrink:0;margin-top:4px"></div>
            <div style="flex:1">
              <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:4px">
                <span style="font-size:12px;font-weight:700;color:#282834">${o.uc}</span>
                <span style="background:${PROD_COLOR_MAP[o.prod]||'#aaa'};color:#fff;font-size:9px;font-weight:700;padding:1px 7px;border-radius:9999px">${o.prod}</span>
                <span style="background:${prioColor};color:#fff;font-size:9px;font-weight:700;padding:1px 7px;border-radius:9999px">${prioLbl}</span>
              </div>
              <div style="display:flex;gap:16px;flex-wrap:wrap">
                <span style="font-size:10px;color:#646587">Convs: <strong>${o.vol>=1000?(o.vol/1000).toFixed(0)+'K':o.vol}</strong></span>
                <span style="font-size:10px;color:${o.csat&&o.csat<50?'#e03131':o.csat&&o.csat<75?'#e67700':'#2f9e44'}">CSAT: <strong>${o.csat||'—'}</strong></span>
                <span style="font-size:10px;color:${o.cx>20?'#e03131':o.cx>10?'#e67700':'#2f9e44'}">CX: <strong>${o.cx}%</strong></span>
                <span style="font-size:10px;color:#9c9ebf">Unres: <strong>${o.unres}%</strong></span>
                ${o.tpv_mi>0?`<span style="font-size:10px;color:#3b5bdb;font-weight:700">TPV: ${tpvStr} LC</span>`:''}
                ${o.sellers>0?`<span style="font-size:10px;color:#9c9ebf">Sellers: ${o.sellers>=1000?(o.sellers/1000).toFixed(0)+'K':o.sellers}</span>`:''}
              </div>
            </div>
            <span class="oarr" style="font-size:11px;color:#9c9ebf;flex-shrink:0;transition:transform .2s">▾</span>
          </div>
          <div id="od-${uid}" style="display:none;padding:12px 14px 14px 34px;background:#f8f9fd;border-top:1px solid #e7e9f3">
            ${det?`
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:10px">
                <div style="background:#fff;border-radius:8px;padding:10px 12px;border:1px solid #e7e9f3">
                  <div style="font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.4px;color:#9c9ebf;margin-bottom:5px">Problema Raíz</div>
                  <div style="font-size:11px;color:#282834;line-height:1.5">${det.problema}</div>
                </div>
                <div style="background:#fff;border-radius:8px;padding:10px 12px;border:1px solid #e7e9f3">
                  <div style="font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.4px;color:#9c9ebf;margin-bottom:5px">Maxwell Hoy</div>
                  <div style="font-size:11px;color:#646587;line-height:1.5">${det.hoje}</div>
                </div>
              </div>
              <div style="background:#e9f1ff;border-radius:8px;padding:10px 12px;border:1px solid #b0bef5;margin-bottom:8px">
                <div style="font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.4px;color:#3b5bdb;margin-bottom:6px">✏️ Mejoras de Experiencia</div>
                <ul style="padding-left:16px;font-size:11px;color:#282834;line-height:1.8">${det.melhorar.map(m=>`<li>${m}</li>`).join('')}</ul>
              </div>
              <div style="display:flex;gap:10px;flex-wrap:wrap">
                <div style="background:#d3f9d8;border-radius:7px;padding:7px 10px;font-size:10px;color:#1e5e2a;flex:1">
                  <strong>Impacto Esperado:</strong> ${det.impacto}
                  ${(()=>{
                    const rk = TPV_RISCO[o.seg+'|'+o.uc];
                    if(!rk) return '';
                    const monthly = Math.round(rk.monthly_mi);
                    const det2 = OPP_DETAIL[o.uc];
                    const pcts = det2&&det2.risco_pct?det2.risco_pct:[0.05,0.15];
                    const low=Math.round(monthly*pcts[0]), high=Math.round(monthly*pcts[1]);
                    const label = det2&&det2.tpv_context?det2.tpv_context
                      .replace('{tpv_monthly}',monthly>=1000?(monthly/1000).toFixed(1)+'B':monthly+'M')
                      .replace('{sellers}',rk.sellers>=1000?(rk.sellers/1000).toFixed(0)+'K':rk.sellers)
                      .replace('{risco_low}',low>=1000?(low/1000).toFixed(1)+'B':low+'M')
                      .replace('{risco_high}',high>=1000?(high/1000).toFixed(1)+'B':high+'M')
                      .replace('{daily}',Math.round(monthly/30))
                      :'';
                    return label?`<div style="margin-top:6px;background:#1e2235;border-radius:5px;padding:6px 9px;color:#ffe600;font-size:10px;line-height:1.5"><strong>💰 TPV em Risco:</strong> ${label}</div>`:'';
                  })()}
                </div>
                <div style="background:#f4f5f9;border-radius:7px;padding:7px 10px;font-size:10px;color:#646587">
                  <strong>Owner:</strong> ${det.owner}
                </div>
              </div>`
            :`<div style="font-size:11px;color:#9c9ebf;padding:8px">Detalle de experiencia próximamente.</div>`}
          ${(()=>{
            const rawIds = CONV_IDS[o.uc]||[];
            if(!rawIds.length) return '';
            const sample = rawIds.slice(0,4);
            const rows2 = sample.map(entry=>{
              const id=typeof entry==='string'?entry:entry.id;
              const site=typeof entry==='object'?entry.site:'—';
              const seg2=typeof entry==='object'?entry.seg:'—';
              const out=typeof entry==='object'?entry.outcome:'—';
              const csat=typeof entry==='object'&&entry.csat?entry.csat:'—';
              const dt=typeof entry==='object'?entry.dt:'—';
              const outColor=out==='resolved'?'color:#2f9e44':out==='unresolved'?'color:#e03131':'color:#9c9ebf';
              return `<tr style="border-bottom:1px solid #f0f0f0">
                <td style="padding:4px 8px"><button style="font-family:monospace;font-size:10px;cursor:pointer;color:#3b5bdb;background:#e9f1ff;border:none;border-radius:4px;padding:2px 6px" onclick="navigator.clipboard.writeText('${id}');this.textContent='✅';setTimeout(()=>this.textContent='${id.substring(0,12)}...',1500)" title="${id}">${id.substring(0,12)}...</button></td>
                <td style="padding:4px 8px;font-size:10px"><span style="background:${site==='MLB'?'#e9f1ff':site==='MLA'?'#fff4e6':site==='MLM'?'#d3f9d8':'#f3f0ff'};padding:1px 6px;border-radius:9999px;font-weight:700;font-size:9px">${site}</span></td>
                <td style="padding:4px 8px;font-size:10px;color:#646587">${seg2}</td>
                <td style="padding:4px 8px;font-size:10px;font-weight:600;${outColor}">${out}</td>
                <td style="padding:4px 8px;font-size:10px">${csat}</td>
                <td style="padding:4px 8px;font-size:10px;color:#9c9ebf">${dt}</td>
              </tr>`;
            }).join('');
            return `<div style="margin-top:8px">
              <div style="font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.4px;color:#9c9ebf;margin-bottom:5px">Conversation IDs — ejemplos recientes (clic para copiar)</div>
              <table style="width:100%;border-collapse:collapse;font-size:10px;background:#fff;border-radius:6px;overflow:hidden;border:1px solid #e7e9f3">
                <thead><tr style="background:#f4f5f9"><th style="padding:4px 8px;text-align:left;font-size:9px;font-weight:700;color:#9c9ebf">ID</th><th style="padding:4px 8px;font-size:9px;font-weight:700;color:#9c9ebf">Site</th><th style="padding:4px 8px;font-size:9px;font-weight:700;color:#9c9ebf">Seg</th><th style="padding:4px 8px;font-size:9px;font-weight:700;color:#9c9ebf">Outcome</th><th style="padding:4px 8px;font-size:9px;font-weight:700;color:#9c9ebf">CSAT</th><th style="padding:4px 8px;font-size:9px;font-weight:700;color:#9c9ebf">Fecha</th></tr></thead>
                <tbody>${rows2}</tbody>
              </table>
            </div>`;
          })()}
          ${seg==='Big Seller'?'<div style="border-top:2px solid #ffe600;background:#1e2235;padding:12px 14px"><div style="font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:#ffe600;margin-bottom:6px">📋 1er Deep Dive — Equipo Hunting Big Seller MLA</div><div style="font-size:11px;color:#c8cfe0;line-height:1.6">Para post-venta utilizan el <strong style=\"color:#fff\">admin de abastecimiento</strong> para generar los envíos. Para cualquier otro problema, dirigen al seller a <strong style=\"color:#fff\">CX sin acompañamiento exclusivo</strong>, sin entendimiento de si el problema fue resuelto <span style=\"color:#f0a0a0;font-style:italic\">(sin gestión clara).</span></div></div>':''}
          </div>
        </div>`;
      }).join('')}
      </div>
    </div>`;
  }

  el.innerHTML = matrixHtml + '<div id="opps-cards" style="scroll-margin-top:16px"></div>' + cardsHtml;
}

function selectOppCell(seg, prod) {
  // Toggle: click same cell twice = clear filter
  if(oppFilterSeg===seg && oppFilterProd===prod) {
    oppFilterSeg=null; oppFilterProd=null;
  } else {
    oppFilterSeg=seg; oppFilterProd=prod;
  }
  renderOpps();
  // Scroll to cards
  setTimeout(()=>{
    const panel=document.querySelector('.panel.active');
    const anchor=document.getElementById('opps-cards');
    if(anchor&&panel){
      const offset=anchor.getBoundingClientRect().top+panel.scrollTop-120;
      panel.scrollTo({top:offset,behavior:'smooth'});
    }
  },200);
}

function clearOppFilter() {
  oppFilterSeg=null; oppFilterProd=null;
  renderOpps();
}

// -- setSite: filter by site --
function setSite(site, btn) {
  currentSite = site;
  document.querySelectorAll('.ctrl-bar .m-btn').forEach(b => {
    if(b.onclick && b.onclick.toString().includes("setSite(")) b.classList.remove('active');
  });
  if(btn) btn.classList.add('active');
  render(currentMonth, currentSeg === 'ALL' ? null : currentSeg);
}

// -- filtroConv --
function filtroConv(tipo) {
  document.querySelectorAll('#conv-tbody tr[data-ctipo]').forEach(row => {
    const t = row.getAttribute('data-ctipo');
    row.style.display = (tipo === 'todos' || t === tipo) ? '' : 'none';
  });
}

// Init: render general view (ALL segments)
setTimeout(()=>{ render('ALL','ALL'); },0);
setTimeout(()=>{ if(document.getElementById('panel-opps').classList.contains('active')) renderOpps(); },100);
</script>

</body>
</html>'''

# Fill in segment KPIs
bs = TPV_DATA.get('Big Seller',{})
smb = TPV_DATA.get('SMB',{})
lt = TPV_DATA.get('Longtail',{})

def fmt_sellers(v):
    if v >= 1000000: return f'{v/1000000:.1f}M'
    if v >= 1000: return f'{v/1000:.0f}K'
    return str(v)

def fmt_tpv(v):
    if v >= 1000000: return f'{v/1000000:.1f}T'
    if v >= 1000: return f'{v/1000:.0f}B'
    return f'{v:.0f}M'

HTML_FINAL = HTML\
    .replace('SEG_BS_SELLERS', fmt_sellers(bs.get('sellers',0)))\
    .replace('SEG_BS_TPV', fmt_tpv(bs.get('tpv_mi',0)))\
    .replace('SEG_SMB_SELLERS', fmt_sellers(smb.get('sellers',0)))\
    .replace('SEG_SMB_TPV', fmt_tpv(smb.get('tpv_mi',0)))\
    .replace('SEG_LT_SELLERS', fmt_sellers(lt.get('sellers',0)))\
    .replace('SEG_LT_TPV', fmt_tpv(lt.get('tpv_mi',0)))

final = HTML_FINAL\
    .replace('LOGO_B64', LOGO)\
    .replace('__DATA__', json.dumps(RAW, ensure_ascii=False))\
    .replace('__TPV__', json.dumps(TPV_DATA, ensure_ascii=False))\
    .replace('__DEFL__', json.dumps(DEFL_DATA, ensure_ascii=False))\
    .replace('__UC_MAP__', json.dumps(UC_TO_PROD, ensure_ascii=False))\
    .replace('__OPP__', json.dumps(OPP, ensure_ascii=False))\
    .replace('__CONV_IDS__', json.dumps(CONV_IDS_DATA, ensure_ascii=False))\
    .replace('__UC_TPV__', json.dumps(UC_TPV_DATA, ensure_ascii=False))\
    .replace('__OPPS__', json.dumps(OPPS_DATA, ensure_ascii=False))\
    .replace('__OPP_DETAIL__', json.dumps(OPP_DETAIL_DATA, ensure_ascii=False))\
    .replace('__TPV_RISCO__', json.dumps(TPV_RISCO_DATA, ensure_ascii=False))\
    .replace('__CX_DATA__', json.dumps(CX_DATA, ensure_ascii=False))\
    .replace('__NPS_DATA__', json.dumps(NPS_DATA, ensure_ascii=False))

# ── SPANISH TRANSLATION PASS ─────────────────────────────
ES = [
    ('pt-BR','es'),
    ('Modelo de Atencao Adquiring MP','Modelo de Atención Adquiring MP'),
    ('MODELO DE ATENÇÃO ADQUIRING MP','MODELO DE ATENCIÓN ADQUIRING MP'),
    ('MODELO DE ATENCAO ADQUIRING MP','MODELO DE ATENCIÓN ADQUIRING MP'),
    ('Jan–Jun 2026','Ene–Jun 2026'),
    ('Canais de Atendimento','Canales de Atención'),
    ('Canales de Atendimento','Canales de Atención'),
    ('Canais','Canales'),
    ('Não mapeados','No mapeados'),
    ('Não mapeado','No mapeado'),
    ('sem acesso','sin acceso'),
    ('Ver dores →','Ver dolores →'),
    ('Mapeados','Mapeados'),
    ('Objetivos','Objetivos'),
    ('Maxwell — Dores','Maxwell — Dolores'),
    ('Maxwell por Segmento','Maxwell por Segmento'),
    ('Maxwell — Dolores por Segmento','Maxwell — Dolores'),
    ('Maxwell — Volume vs CSAT','Maxwell — Volumen vs CSAT'),
    ('Visão geral cross-segmento','Vista general cross-segmento'),
    ('Oportunidades por Segmento','Oportunidades por Segmento'),
    ('Mapeamento de oportunidades priorizadas por impacto','Mapeo de oportunidades priorizadas por impacto'),
    ('detalhamento de experiência','detalle de experiencia'),
    ('próximos passos','próximos pasos'),
    ('Bubble chart: X=CSAT, Y=volume (log). Accordion com deflection, unresolved, tendência e oportunidade por use case.','Bubble chart: X=CSAT, Y=volumen (log). Acordeón con deflection, unresolved, tendencia y oportunidad por use case.'),
    ('Bolha = volume total · Cor = produto · Eixo Y log · Linha vertical = CSAT médio ponderado · Segmentos aparecem no detalhe de cada use case','Burbuja = volumen total · Color = producto · Eje Y log · Línea vertical = CSAT prom. ponderado · Segmentos en el detalle'),
    ('Use a sidebar para filtrar por segmento específico.','Usa el sidebar para filtrar por segmento específico.'),
    ('Todos os segmentos','Todos los segmentos'),
    ('Ene-Jun 2026','Ene-Jun 2026'),
    ('Jan-Jun 2026','Ene-Jun 2026'),
    ('Jan–Jun 2026','Ene–Jun 2026'),
    ('jan–jun 2026','ene–jun 2026'),
    ('Ene-Jun/26','Ene-Jun/26'),
    ('Jan–Jun/26','Ene–Jun/26'),
    ('Tendência por Segmento','Tendencia por Segmento'),
    ('Tendência de Volume','Tendencia de Volumen'),
    ('Tendência','Tendencia'),
    ('Quebra por Site','Desglose por Site'),
    ('Segmento × Site (L3 detalhado)','Segmento × Site (L3 detallado)'),
    ('Volume mensal','Volumen mensual'),
    ('exemplos recentes (clique para copiar)','ejemplos recientes (clic para copiar)'),
    ('Conversation IDs — ejemplos recentes','Conversation IDs — ejemplos recientes'),
    ('Por Segmento','Por Segmento'),
    ('Desglose por Site (L3)','Desglose por Site (L3)'),
    ('VOLUME DE CONVERSAS VS CSAT —','VOLUMEN DE CONVERSACIONES VS CSAT —'),
    ('Bolha = volume · Eixo Y em escala logarítmica · Linha vertical = CSAT médio ponderado','Burbuja = volumen · Eje Y escala logarítmica · Línea vertical = CSAT prom. ponderado'),
    ('Tamanho da bolha = volume · Linha vertical = CSAT médio ponderado','Tamaño burbuja = volumen · Línea vertical = CSAT prom. ponderado'),
    ('Sellers ativos','Sellers activos'),
    ('Transações','Transacciones'),
    ('Conversas Maxwell','Conversaciones Maxwell'),
    ('Canais de atendimento','Canales de atención'),
    ('célula exclusiva','célula exclusiva'),
    ('Maxwell cobre 71% da carteira SMB','Maxwell cubre 71% de la cartera SMB'),
    ('Sem CC. Maxwell é o único canal de autogestão','Sin CC. Maxwell es el único canal de autogestión'),
    ('Canal prioritário: CC dedicado','Canal prioritario: CC dedicado'),
    ('BigQuery · Jan–Jun 2026','BigQuery · Ene–Jun 2026'),
    ('BigQuery · Ene–Jun 2026\\nCX Fintech · Adquiring MP','BigQuery · Ene–Jun 2026\\nCX Fintech · Adquiring MP'),
    ('Visão estratégica cross-segmento: canais de atendimento, dores no Maxwell e impacto em negócio.','Visión estratégica cross-segmento: canales de atención, dolores en Maxwell e impacto en negocio.'),
    ('Mapeamento de Oportunidades','Mapeo de Oportunidades'),
    ('MAXWELL POR SEGMENTO','MAXWELL POR SEGMENTO'),
    ('Filtrar','Filtrar'),
    ('Sin res.','Sin res.'),
    ('Desglose por Site (L3) · TPV total do use case:','Desglose por Site (L3) · TPV total del use case:'),
    ('TPV total do use case','TPV total del use case'),
    ('Filtrado por:','Filtrado por:'),
    ('Limpiar filtro','Limpiar filtro'),
    ('🔲 Sem acesso','🔲 Sin acceso'),
    ('migra para Maxwell Q3','→ Maxwell Q3'),
    ('→ Maxwell Q3','→ Maxwell Q3'),
    ('Ver dolores →','Ver dolores →'),
    ('VOLUME DE CONVERSAS VS CSAT — TODOS OS SEGMENTOS','VOLUMEN DE CONVERSACIONES VS CSAT — TODOS LOS SEGMENTOS'),
    ('Burbuja = volumen total · Color = producto · Eje Y log · Línea vertical = CSAT prom. ponderado · Segmentos aparecem no detalhe de cada use case','Burbuja = volumen total · Color = producto · Eje Y log · Línea vertical = CSAT prom. ponderado · Segmentos en el detalle'),
    ('Mês:','Mes:'),
    ('Jan/26','Ene/26'),
    ('Fev/26','Feb/26'),
    ('Mai/26','May/26'),
]
for pt, es in ES:
    final = final.replace(pt, es)

# Month label fix in JS
final = final.replace(
    "{'2026-01':'Jan','2026-02':'Fev','2026-03':'Mar','2026-04':'Abr','2026-05':'Mai','2026-06':'Jun'}",
    "{'2026-01':'Ene','2026-02':'Feb','2026-03':'Mar','2026-04':'Abr','2026-05':'May','2026-06':'Jun'}"
)

path = 'C:/Users/vpaladini/projetos/acquiring-explorer/modelo-atencao.html'
with open(path, 'w', encoding='utf-8') as f:
    f.write(final)
print(f'OK: {len(final)//1024}KB -> {path}')
