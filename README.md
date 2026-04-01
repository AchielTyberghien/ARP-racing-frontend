# ARP Frontend

Angular single-page application for the ARP Racing photography website.

## What this project is

This app renders the public website and consumes backend APIs for dynamic content:

- Carousel images
- Library event overview
- Event galleries
- Contact form submission

## How it works

### Routing

The frontend exposes these main routes:

- `/` home
- `/about`
- `/portfolio`
- `/library`
- `/archive/:eventName`
- `/contact`

### Data flow

1. Pages call `ApiService`.
2. `ApiService` uses `environment.apiUrl`.
3. HTTP calls are made to:
   - `/carousel`
   - `/library`
   - `/library/:id`
   - `/contact`
4. Responses are cached where relevant using `shareReplay(1)`.

### Images

Image loading is configured using Angular's ImageKit loader and environment settings.

## Tech stack

- Angular
- RxJS
- Tailwind CSS + Bootstrap/CoreUI
- ImageKit Angular integration

## Local development

```bash
npm install
npm run start
```

App runs at `http://localhost:4200`.

## Build

```bash
npm run build
```

Production output is generated in `dist/arpweb_ng_v19`.

## Environment configuration

This project expects Angular environment files:

- `src/environments/environment.ts`
- `src/environments/environment.production.ts`

At minimum, define:

- `apiUrl` (backend base URL)
- `imagekit.urlEndpoint` (ImageKit public URL endpoint)

## Testing

```bash
npm run test
```
