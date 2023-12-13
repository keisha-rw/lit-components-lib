# Lit components library with SSR
This repo has been created to test SSR issues with React-wrapped lit components in Next.js apps.  Please see https://github.com/keisha-rw/next-learn for the corresponding Next.js test app.

## Viewing the issue
1. Pull down this code locally
2. Run `npm i`
3. Run `npm run prepare-local-assets` - this script runs build, runs npm pack on all the built packages, and prepares them for consumption in `tgz-packages`
4. Pull down https://github.com/keisha-rw/next-learn locally
5. cd to `/basics/demo` in the repo so you're at the base level of the demo app
6. Run `npm i`
7. Run `npm run install-local-pds` - this script installs the local packages that were zipped up in step 3
8. Run `npm run dev` and pull up http://localhost:3000
9. When the page loads, you should see an issue with Lit's hydration script
