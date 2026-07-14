# Modelo de Atenção Adquiring MP

Dashboard interativo de análise de experiência de sellers em Adquiring MP.

**URL publicada:** https://viniciuspaladini-prd.github.io/customer-logistics/modelo-atencao.html

## Como editar

### 1. Clonar o repositório
```bash
git clone https://github.com/viniciuspaladini-prd/customer-logistics.git
cd customer-logistics
```

### 2. Editar o gerador
O arquivo `gen_modelo_atencao.py` contém todo o HTML, CSS e JS do dashboard.
Os dados estão nos arquivos `data_*.json`.

### 3. Regenerar o HTML
```bash
python gen_modelo_atencao.py
```
Isso gera o `modelo-atencao.html`.

### 4. Publicar
```bash
git add modelo-atencao.html
git commit -m "update: descrição da mudança"
git push origin main
```

O GitHub Pages atualiza automaticamente em ~1-2 minutos.

## Dados (BigQuery)
Os `data_*.json` contêm os dados pré-processados. Para atualizar com dados mais recentes:
- Precisa de acesso ao BigQuery `meli-bi-data`
- Rodar as queries do script e salvar os JSONs
- Depois regenerar o HTML

## Estrutura
| Arquivo | Conteúdo |
|---------|---------|
| `gen_modelo_atencao.py` | Gerador do dashboard (Python) |
| `data_monthly.json` | Dados Maxwell mensais por segmento/use case |
| `data_tpv.json` | TPV por segmento (USD) |
| `data_uc_tpv.json` | TPV por use case × segmento |
| `data_opportunities.json` | Oportunidades priorizadas com score |
| `data_opp_detail.json` | Detalhes de experiência por oportunidade |
| `data_cx.json` | Dados de CX (DM_CX_CR_POINT) |
| `data_nps.json` | Dados de NPS (BT_CX_NPS_DETAIL) |
| `data_conv_ids.json` | Conversation IDs de exemplo |
| `data_tpv_risco.json` | TPV cluster por use case |
