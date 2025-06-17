# 🧩 Armored Turtle Manual Translations

Welcome to the official translations repository for [Armored Turtle's interactive 3D manuals](https://armoredturtle.xyz)!

This repo allows community members to contribute translations for our build manuals into multiple languages. Every contribution helps make our projects more accessible to makers around the world.

---

## 📁 Repository Structure

Translations are organized by language code (e.g., `en`, `es`, `fr`) and manual name:

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
    "sub-manual-id": {
      name: "Sub manual name"
  },
  steps: {
    "step-id": {
      title: "Translated Title",
      content: "Translated description of this step"
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

## 🚀 How to Contribute

We welcome and appreciate contributions from the community! 

If you'd like to help translate or improve a manual:

1. Fork this repo
2. Add or update files in `translations/<language>/`
3. Submit a pull request

For step-by-step instructions, check out our [CONTRIBUTING.md](CONTRIBUTING.md).
