#!/bin/bash
# Script para gerar e publicar o dashboard
echo "1. Gerando HTML..."
python gen_modelo_atencao.py

echo "2. Enviando para repo de trabalho (vpaladini_meli)..."
git add modelo-atencao.html gen_modelo_atencao.py data_*.json
git commit -m "update: ${1:-atualização dashboard}"
git push meli main

echo "3. Publicando no GitHub Pages (viniciuspaladini-prd)..."
git push origin main

echo "✅ Publicado em: https://viniciuspaladini-prd.github.io/customer-logistics/modelo-atencao.html"
