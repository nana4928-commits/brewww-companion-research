# BREWWW Companion — Mobile Research Build

This folder packages the existing BREWWW Companion design-component prototype
as an installable mobile PWA for moderated usability research.

## Research scope

- Runs in a mobile browser and can be added to the home screen.
- Supports the existing onboarding, discovery, brewing, tasting, log, and
  comparison interactions.
- Bluetooth kettle and scale states are simulated. No hardware compatibility,
  account backend, or production persistence is claimed.
- Participant-generated state is session-based and resets when the page reloads.

## Local preview

Serve this directory over HTTP rather than opening `index.html` directly:

```sh
python3 -m http.server 4173
```

Then open `http://localhost:4173`.
