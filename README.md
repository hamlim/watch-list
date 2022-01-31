# Watch List

A shared movie/show list manager!

## Getting Started:

```sh
yarn
```

```sh
yarn dev
```

## Deploying:

```sh
yarn deploy
```

When you're ready to deploy to production:

```sh
yarn deploy-prod
```

## Configuring the DB:

### Local Dev:

Create a `.env.local` file and add the following content:

```env
NEXT_PUBLIC_SUPABASE_URL=<your supabase url here>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your supabase anonymous key here>
// todo - movie api key: https://www.themoviedb.org/
```

### Production:

If you're deploying on Vercel, add the above two secrets from your `.env.local`
file to the project and deploy!

## Documentation:

- `/documentation`
  - colors
- `/documentation/button`
  - Buttons
- `/documentation/input`
  - Inputs
- `/documentation/type-scale`
  - Font sizes
