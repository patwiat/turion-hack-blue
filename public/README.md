# Client

To run in development:
```sh
# (parcel index.html)
npm run start
```

To compile into `dist/`:
```sh
# (parcel build index.html)
npm run build
```

You can detect development mode using the globally defined `IS_DEV` constant--
will be `true` in development (when run with the Parcel dev server, `parcel index.html`) and false in
production.