# Armored Turtle Manual Translations

Welcome to the official translations repository for [Armored Turtle's interactive 3D manuals](https://armoredturtle.xyz)!

This repo allows community members to contribute translations for our build manuals into multiple languages. Every contribution helps make our projects more accessible to makers around the world.

---

## Repository Structure

Translations are organized by [ISO 639 language code](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) (e.g., `en`, `de`, `fr`) and manual name:

```

translations/
  en/
    manuals/
      example-manual.js
    en.json
  de/
    manuals/
      example-manual.js
    de.json
  ...

````

Each language has a single .json file containing general translations used across the site. Those files use the following format:

```json
{
  "group_name_1": {
    "phrase_1": "Translation 1"
  },
  "group_name_2": {
    "phrase_2": "Translation 2",
    "phrase_3": "Translation 3"
  }
}
````

Each javascript file corresponds to one manual and uses the following format:

```js
export default {
  name: "Translated Manual Name",
  subManuals: {
    sub-manual-id: {
      name: "Sub manual name"
  },
  steps: {
    step-id: {
      title: "Translated Title",
      content: `
        <p>Translated description of this step in HTML formatting</p>
      `
      parts: [
        "Part 1",
        "Part 2"
      ]
    },
    ...
  }
};
````

---

## How to Contribute

We welcome and appreciate contributions from the community! 

If you'd like to help translate or improve a manual:

1. Fork this repo
2. Add or update files in `translations/<language>/`
3. Submit a pull request

For step-by-step instructions, check out our [CONTRIBUTING.md](CONTRIBUTING.md).

---

### Maintainer note: syncing translations from the website repo (Windows)

This is a personal workflow for maintainers who also have the sibling repo `ArmoredTurtleWebsite`. Most contributors can ignore this section.

Assuming both repos are siblings under the same parent directory:

```
<parent>/ArmoredTurtleWebsite
<parent>/AT-Manual-Translations (this repo)
```

Run the sync script to copy `ArmoredTurtleWebsite/public/translations` into this repo’s `translations`:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\scripts\sync-translations.ps1
```

Optional flags:

- **-Clean**: empties this repo’s `translations` folder before copying
- **-WebsitePath <path>**: override the default sibling location of `ArmoredTurtleWebsite`

Examples:

```powershell
# Clean sync from sibling repo
powershell -NoProfile -ExecutionPolicy Bypass -File .\scripts\sync-translations.ps1 -Clean

# Sync from a custom website path
powershell -NoProfile -ExecutionPolicy Bypass -File .\scripts\sync-translations.ps1 -WebsitePath "C:\\dev\\ArmoredTurtleWebsite"
```