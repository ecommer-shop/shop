#!/usr/bin/env bash
set -e

API="http://localhost:3000/admin-api"

echo "=== Login ==="
RESPONSE=$(curl -s -D - http://localhost:3000/admin-api \
  -H "Content-Type: application/json" \
  -d '{
    "query": "mutation { login(username: \"superadmin\", password: \"superpass\") { ...on CurrentUser { id identifier } } }"
  }')

TOKEN=$(echo "$RESPONSE" | grep -i "vendure-auth-token:" | sed 's/.*: //' | tr -d '\r')

if [ -z "$TOKEN" ]; then
  echo "ERROR: No se pudo obtener el token de autenticación"
  echo "$RESPONSE"
  exit 1
fi

AUTH="Authorization: Bearer $TOKEN"

# Helper: run a GraphQL mutation and extract a field
gql() {
  curl -s --max-time 10 "$API" -H "Content-Type: application/json" -H "$AUTH" -d "$1"
}

echo "=== Limpiar datos existentes ==="
EXISTING_CATS=$(gql '{"query":"{ blogCategories { id name } }"}')
for id in $(echo "$EXISTING_CATS" | python3 -c "import json,sys; d=json.load(sys.stdin); [print(c['id']) for c in d.get('data',{}).get('blogCategories',[])]" 2>/dev/null); do
  echo "  Eliminando categoría $id"
  gql "{\"query\":\"mutation { deleteBlogCategory(id: \\\"$id\\\") }\"}" > /dev/null
done

EXISTING_TAGS=$(gql '{"query":"{ blogTags { id name } }"}')
for id in $(echo "$EXISTING_TAGS" | python3 -c "import json,sys; d=json.load(sys.stdin); [print(t['id']) for t in d.get('data',{}).get('blogTags',[])]" 2>/dev/null); do
  echo "  Eliminando tag $id"
  gql "{\"query\":\"mutation { deleteBlogTag(id: \\\"$id\\\") }\"}" > /dev/null
done

echo "=== Crear categorías ==="
CAT_NEGOCIOS=$(gql '{
  "query": "mutation($input: CreateBlogCategoryInput!) { createBlogCategory(input: $input) { id } }",
  "variables": {
    "input": {
      "name": "Negocios y Emprendimiento",
      "description": "Consejos, historias y guías para emprendedores del Cauca",
      "languageCode": "es",
      "metaTitle": "Negocios y Emprendimiento | Blog Ecommer",
      "metaDescription": "Todo sobre emprendimiento digital en Popayán y el Cauca"
    }
  }
}' | jq -r '.data.createBlogCategory.id')
echo "  Categoría 'Negocios' -> id: $CAT_NEGOCIOS"

CAT_TECNOLOGIA=$(gql '{
  "query": "mutation($input: CreateBlogCategoryInput!) { createBlogCategory(input: $input) { id } }",
  "variables": {
    "input": {
      "name": "Tecnología",
      "description": "Innovación, herramientas digitales y tendencias tech",
      "languageCode": "es"
    }
  }
}' | jq -r '.data.createBlogCategory.id')
echo "  Categoría 'Tecnología' -> id: $CAT_TECNOLOGIA"

CAT_COMERCIO=$(gql '{
  "query": "mutation($input: CreateBlogCategoryInput!) { createBlogCategory(input: $input) { id } }",
  "variables": {
    "input": {
      "name": "Comercio Digital",
      "description": "Guías de e-commerce, ventas online y marketplaces",
      "languageCode": "es"
    }
  }
}' | jq -r '.data.createBlogCategory.id')
echo "  Categoría 'Comercio' -> id: $CAT_COMERCIO"

echo "=== Crear tags ==="
TAG_LANZAMIENTO=$(gql '{
  "query": "mutation($input: CreateBlogTagInput!) { createBlogTag(input: $input) { id } }",
  "variables": { "input": { "name": "lanzamiento" } }
}' | jq -r '.data.createBlogTag.id')
echo "  Tag 'lanzamiento' -> id: $TAG_LANZAMIENTO"

TAG_TUTORIAL=$(gql '{
  "query": "mutation($input: CreateBlogTagInput!) { createBlogTag(input: $input) { id } }",
  "variables": { "input": { "name": "tutorial" } }
}' | jq -r '.data.createBlogTag.id')
echo "  Tag 'tutorial' -> id: $TAG_TUTORIAL"

TAG_POPAYAN=$(gql '{
  "query": "mutation($input: CreateBlogTagInput!) { createBlogTag(input: $input) { id } }",
  "variables": { "input": { "name": "Popayán" } }
}' | jq -r '.data.createBlogTag.id')
echo "  Tag 'Popayán' -> id: $TAG_POPAYAN"

echo "=== Crear posts ==="

create_post() {
  local title="$1" content="$2" excerpt="$3" cats="$4" tags="$5" metaTitle="$6" metaDesc="$7"

  gql "$(python3 -c "
import json
payload = {
    'query': 'mutation(\$input: CreateBlogPostInput!) { createBlogPost(input: \$input) { id title slug status } }',
    'variables': {
        'input': {
            'title': $(python3 -c "import json; print(json.dumps('''$title'''))"),
            'content': $(python3 -c "import json; print(json.dumps('''$content'''.replace(chr(10),'')))"),
            'excerpt': $(python3 -c "import json; print(json.dumps('''$excerpt'''))"),
            'languageCode': 'es',
            'status': 'published',
            'categoryIds': $cats,
            'tagIds': $tags,
            'metaTitle': $(python3 -c "import json; print(json.dumps('''$metaTitle'''))"),
            'metaDescription': $(python3 -c "import json; print(json.dumps('''$metaDesc'''))")
        }
    }
}
print(json.dumps(payload))
")" | jq '{title: .data.createBlogPost.title, slug: .data.createBlogPost.slug, status: .data.createBlogPost.status}'
}

CONTENT1=$(cat <<'ENDCONTENT'
<h2>Nace una nueva forma de vender en el Cauca</h2><p>Hoy es un día especial para Popayán. Lanzamos Ecommer, una plataforma de comercio electrónico diseñada específicamente para microempresarios colombianos, creada desde nuestra ciudad y pensando en las necesidades reales de nuestros comerciantes locales.</p><h3>¿Por qué Ecommer?</h3><p>Sabemos que vender online en Colombia tiene retos únicos: la facturación electrónica con DIAN, los pagos seguros, la logística de última milla. Por eso construimos Ecommer como una plataforma de integración: combinamos los mejores proveedores del mercado —Vendure, Wompi, Clerk, Azure, DIAN— en una experiencia unificada.</p><h3>¿Qué ofrecemos?</h3><ul><li><strong>Tienda online</strong> — Crea tu tienda en minutos, sin saber programar</li><li><strong>SimetrIA</strong> — Nuestro agente de IA que vende desde WhatsApp, Instagram y Facebook</li><li><strong>Messenger</strong> — Acceso a más de 15,000 entregas mensuales en Popayán desde el día uno</li><li><strong>Cumplimiento nativo</strong> — Facturación electrónica DIAN, PCI DSS, protección de datos</li></ul><p>Y lo mejor: los primeros 3 meses son completamente gratis. Solo pagas las comisiones por transacción que cobra Wompi.</p><p>Si tienes un negocio en Popayán o en cualquier municipio del Cauca, Ecommer es tu plataforma.</p>
ENDCONTENT
)

CONTENT2=$(cat <<'ENDCONTENT'
<h2>Tu nueva vendedora digital</h2><p>Imagina tener una vendedora que nunca duerme, atiende a todos tus clientes al mismo tiempo y cierra ventas directamente desde WhatsApp, Instagram y Facebook. Eso es SimetrIA.</p><h3>¿Cómo funciona?</h3><p>SimetrIA es un agente de inteligencia artificial propio de Ecommer que conversa con tus clientes, les recomienda productos, resuelve dudas y completa la compra sin que el cliente tenga que salir del chat.</p><h3>Beneficios para tu negocio</h3><ul><li><strong>Disponibilidad 24/7</strong> — Atiende a tus clientes incluso mientras duermes</li><li><strong>Multi-canal</strong> — Funciona en WhatsApp, Instagram y Facebook simultáneamente</li><li><strong>Sin barrera técnica</strong> — Tus clientes compran desde la app que ya usan todos los días</li><li><strong>Integración total</strong> — Las ventas se sincronizan automáticamente con tu inventario y facturación</li></ul><p>En un país donde el 87% de los colombianos usa WhatsApp a diario, SimetrIA no es un lujo: es una necesidad para cualquier negocio local que quiera vender más.</p>
ENDCONTENT
)

CONTENT3=$(cat <<'ENDCONTENT'
<h2>Vender online nunca fue tan fácil</h2><p>Si tienes un negocio en Popayán o en el Cauca y quieres empezar a vender por internet, estás en el lugar correcto. Esta guía te lleva paso a paso para que tengas tu tienda online funcionando en menos de 10 minutos.</p><h3>Paso 1: Regístrate</h3><p>Ingresa a ecommer.shop y crea tu cuenta con tu correo electrónico. No necesitas ningún conocimiento técnico.</p><h3>Paso 2: Sube tus productos</h3><p>Agrega fotos, precios y descripciones de tus productos. Es tan fácil como publicar en Instagram. Puedes empezar con 5 productos y después agregar más.</p><h3>Paso 3: Elige tus métodos de pago</h3><p>Conecta tu tienda con Wompi para aceptar pagos con tarjeta de crédito, débito, Nequi y más. Los pagos son seguros y están certificados PCI-DSS.</p><h3>Paso 4: Configura tus envíos</h3><p>Activa Messenger como tu aliado de logística y llega a toda Popayán con más de 15,000 entregas mensuales disponibles.</p><h3>Paso 5: ¡Empieza a vender!</h3><p>Comparte tu tienda en redes sociales, activa SimetrIA para vender desde WhatsApp y gestiona tus pedidos desde el panel de control.</p><p><strong>¿Sabías que?</strong> Los primeros 3 meses son completamente gratis. No hay tarifas ocultas ni compromisos. Solo pagas las comisiones por transacción cuando vendes.</p>
ENDCONTENT
)

echo "  Creando post 1/3..."
create_post \
  "Ecommer llega a Popayán: la plataforma que transforma el comercio local" \
  "$CONTENT1" \
  "Conoce Ecommer, la nueva plataforma de e-commerce creada en Popayán para microempresarios colombianos. 3 meses gratis, integración con DIAN y pagos seguros." \
  "[$CAT_NEGOCIOS]" "[$TAG_LANZAMIENTO, $TAG_POPAYAN]" \
  "Ecommer llega a Popayán: plataforma de e-commerce para el Cauca" \
  "Lanzamos Ecommer en Popayán: la plataforma que transforma el comercio local con IA, pagos seguros y facturación electrónica DIAN. 3 meses gratis."

echo "  Creando post 2/3..."
create_post \
  "SimetrIA: el agente de IA que vende por ti desde WhatsApp e Instagram" \
  "$CONTENT2" \
  "Conoce SimetrIA, el agente de inteligencia artificial de Ecommer que vende por ti en WhatsApp, Instagram y Facebook. Disponible 24/7, sin comisiones extras." \
  "[$CAT_TECNOLOGIA]" "[$TAG_POPAYAN]" \
  "SimetrIA: agente de IA para vender en WhatsApp e Instagram" \
  "SimetrIA es el asistente de IA de Ecommer que automatiza tus ventas en WhatsApp, Instagram y Facebook. Multi-canal, 24/7, sin comisiones adicionales."

echo "  Creando post 3/3..."
create_post \
  "Cómo crear tu tienda online en Ecommer en menos de 10 minutos" \
  "$CONTENT3" \
  "Guía paso a paso para crear tu tienda online en Ecommer. Regístrate gratis, sube productos, conecta pagos seguros y empieza a vender en Popayán." \
  "[$CAT_COMERCIO]" "[$TAG_TUTORIAL, $TAG_POPAYAN]" \
  "Cómo crear tu tienda online gratis en Ecommer | Tutorial" \
  "Aprende a crear tu tienda online en Ecommer en 10 minutos. Registro gratis, pagos seguros con Wompi, envíos con Messenger y atención con IA."

echo ""
echo "=== ¡Blog seed completado! ==="
echo "Visita http://localhost:3001/es/blog para ver los posts"
