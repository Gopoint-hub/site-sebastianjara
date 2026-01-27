# Guía de Migración a Render - sebastianjara.com

## Paso 1: Crear cuenta en Render (si no tienes)

1. Ve a [render.com](https://render.com)
2. Regístrate con tu cuenta de GitHub (recomendado para conectar repositorios fácilmente)

---

## Paso 2: Crear el Web Service en Render

1. En el Dashboard de Render, haz clic en **"New +"** → **"Web Service"**

2. Conecta tu repositorio:
   - Selecciona **"Build and deploy from a Git repository"**
   - Conecta tu cuenta de GitHub si no lo has hecho
   - Busca y selecciona: `Gopoint-hub/site-sebastianjara`

3. Configura el servicio:
   | Campo | Valor |
   |-------|-------|
   | **Name** | `sebastianjara` |
   | **Region** | Oregon (US West) o el más cercano |
   | **Branch** | `main` |
   | **Runtime** | Node |
   | **Build Command** | `pnpm install && pnpm run build` |
   | **Start Command** | `pnpm run start` |
   | **Instance Type** | Free (o Starter si necesitas más recursos) |

4. Variables de entorno (en la sección "Environment"):
   - `NODE_ENV` = `production`
   - `DATABASE_URL` = (tu URL de base de datos MySQL/TiDB si la usas)

5. Haz clic en **"Create Web Service"**

---

## Paso 3: Configurar el Dominio sebastianjara.com

### En Render:

1. Una vez creado el servicio, ve a **Settings** → **Custom Domains**
2. Haz clic en **"Add Custom Domain"**
3. Ingresa: `sebastianjara.com`
4. También agrega: `www.sebastianjara.com`
5. Render te mostrará los registros DNS necesarios

### En tu proveedor de dominio (donde compraste sebastianjara.com):

Configura los siguientes registros DNS:

**Para el dominio raíz (sebastianjara.com):**
```
Tipo: A
Nombre: @ (o vacío)
Valor: La IP que Render te proporcione
```

**Para www (www.sebastianjara.com):**
```
Tipo: CNAME
Nombre: www
Valor: sebastianjara.onrender.com (o el subdominio que Render te asigne)
```

**Alternativa recomendada - Usar CNAME flattening si tu proveedor lo soporta:**
```
Tipo: CNAME
Nombre: @ (o vacío)
Valor: sebastianjara.onrender.com
```

---

## Paso 4: Desconectar de Vercel

1. Ve a [vercel.com/dashboard](https://vercel.com/dashboard)
2. Selecciona el proyecto `site-sebastianjara`
3. Ve a **Settings** → **Domains**
4. Elimina el dominio `sebastianjara.com`
5. Opcionalmente, elimina el proyecto de Vercel si ya no lo necesitas

---

## Paso 5: Verificar el despliegue

1. Espera a que el build en Render termine (puedes ver el progreso en "Logs")
2. Una vez completado, visita:
   - Tu URL de Render: `https://sebastianjara.onrender.com`
   - Tu dominio personalizado: `https://sebastianjara.com` (después de propagar DNS)

**Nota:** La propagación de DNS puede tomar entre 5 minutos y 48 horas.

---

## Solución de problemas comunes

### El build falla
- Verifica que las variables de entorno estén configuradas
- Revisa los logs en Render para ver el error específico

### El dominio no funciona
- Verifica que los registros DNS estén correctos
- Usa [dnschecker.org](https://dnschecker.org) para verificar la propagación
- Asegúrate de haber desconectado el dominio de Vercel primero

### La página carga pero hay errores
- Verifica que `DATABASE_URL` esté configurada si usas base de datos
- Revisa los logs del servicio en Render

---

## Configuración del archivo render.yaml

El archivo `render.yaml` ya está incluido en el repositorio con la configuración básica:

```yaml
services:
  - type: web
    name: sebastianjara
    runtime: node
    region: oregon
    plan: free
    buildCommand: pnpm install && pnpm run build
    startCommand: pnpm run start
    envVars:
      - key: NODE_ENV
        value: production
      - key: DATABASE_URL
        sync: false
    healthCheckPath: /
```

Este archivo permite que Render detecte automáticamente la configuración del proyecto.
