<div align="center">
  <h1>Saylor</h1>
  <p>Mono-repo Docker-first : API GraphQL + Dashboard + services de développement.</p>
</div>

## À propos

Ce dépôt regroupe le backend (API GraphQL) et le frontend (Dashboard) dans un seul mono-repo, avec une stack Docker Compose prête pour le développement local.

Objectifs:
- Branding "Saylor" (logo + intitulés)
- Workflow Docker-only (pas de Node/pnpm sur l'hôte)
- Help Center interne dans le Dashboard (routes `/help`)

## Structure du dépôt

- `saleor/` : backend (API GraphQL)
- `saleor-dashboard/` : frontend (Dashboard)
- `docker-compose.yml` : stack de dev
- `backend.env` / `common.env` : variables d'environnement (dev)

## Pré-requis

- Docker + Docker Compose (Docker Desktop ou Docker Engine)

## Démarrage rapide (recommandé)

1) Builder et démarrer la stack:

```bash
docker compose up -d --build
```

2) Appliquer les migrations (premier lancement ou après reset DB):

```bash
docker compose run --rm api python3 manage.py migrate
```

3) Créer un compte admin et charger des données d'exemple:

```bash
docker compose run --rm api python3 manage.py populatedb --createsuperuser
```

Par défaut, `--createsuperuser` crée `admin@example.com` / `admin`.

4) Ouvrir le Dashboard:

- Dashboard: http://localhost:9000
- API GraphQL: http://localhost:8000/graphql/

## Premiers pas

- Connexion Dashboard: utilisez l'utilisateur admin créé ci-dessus.
- Help Center interne: http://localhost:9000/help (et sous-pages `/help/api`, `/help/extensions`, `/help/support`).

## URLs locales

- API (GraphQL): http://localhost:8000/graphql/
- Dashboard: http://localhost:9000
- Jaeger (traces): http://localhost:16686
- Mailpit (emails): http://localhost:8025

## Configuration (env)

La stack charge des variables via `common.env` et `backend.env` (et quelques variables directement dans `docker-compose.yml`).

Variables utiles:

- `SITE_NAME` (backend): nom de l'instance (utilisé dans certains emails/contexts) — par défaut "Saylor".
- `API_URL` (dashboard): URL GraphQL utilisée par le Dashboard (ex: `http://localhost:8000/graphql/`).
- `SUPPORT_URL` (dashboard): URL du lien “Support” affiché dans `/help/support`.

Exemple (dans `common.env` ou via l'environnement Compose):

```env
SITE_NAME=Saylor
SUPPORT_URL=https://support.example.com
```

Note: en dev, le Dashboard est servi par Vite. Si l'URL GraphQL est mauvaise, vous verrez typiquement des erreurs du type `Unexpected end of JSON input` (souvent causées par une réponse HTML 404 au lieu de JSON).

## Commandes utiles

- Voir l'état des services: `docker compose ps`
- Voir les logs: `docker compose logs -f api` (ou `dashboard`, `worker`)
- Ouvrir un shell dans un conteneur: `docker compose exec api bash` / `docker compose exec dashboard sh`
- Rebuild d'un seul service: `docker compose build dashboard && docker compose up -d dashboard`

## Dépannage

### Reset base de données (supprime les données)

La méthode la plus simple (supprime tous les volumes):

```bash
docker compose down --volumes
```

Ensuite relancez:

```bash
docker compose up -d --build
docker compose run --rm api python3 manage.py migrate
docker compose run --rm api python3 manage.py populatedb --createsuperuser
```

### Rebuild propre (images + cache)

Attention: ceci peut être long et supprime aussi les volumes si vous utilisez `down --volumes`.

```bash
docker compose build --no-cache
docker compose up -d
```

### Démarrer seulement une partie

- Backend uniquement: `docker compose up -d api worker`
- Tout (backend + dashboard): `docker compose up -d`


