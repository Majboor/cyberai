# Saudi Cyber AI (by techrealm)

Saudi Cyber AI is a cybersecurity initiative by **techrealm**. It provides an AI-powered website compliance workflow (region selection → laws → scan → report) with a modern landing page and a `/compliance-check` experience.

## Local development

```sh
npm i
npm run dev
```

## Frontend API base URL

The frontend defaults to:

- `https://cyberaiapi.digitalsoftwaremarket.online`

Optionally override at build-time with:

```sh
VITE_API_BASE_URL=https://cyberaiapi.digitalsoftwaremarket.online
```

## Tech stack

- Vite + React + TypeScript
- Tailwind CSS + shadcn/ui

