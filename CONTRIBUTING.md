# Contributing to Armored Turtle Manual Translations

Thanks for your interest in helping translate Armored Turtle's interactive manuals! This guide will help you get started with contributing.

---

## Overview

This repository holds all translation files for the manuals on [armoredturtle.xyz](https://armoredturtle.xyz). You can help by:

- Translating existing manuals into new languages
- Improving grammar or clarity in current translations
- Reporting issues or inconsistencies in translations

---

## How to Contribute

### 1. Fork the Repo

Click the **Fork** button in the upper-right corner of this page.

### 2. Clone Your Fork

```bash
git clone https://github.com/your-username/armored-turtle-translations.git
cd armored-turtle-translations
````

### 3. Create a Branch

```bash
git checkout -b add-french-example-manual
```

### 4. Add or Edit a Translation

Navigate to the correct folder:
`translations/<language-code>/manuals/<manual-name>.js`

Use this structure for each translation file:

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
```

**Tips:**

* Keep `step-id` and `sub-manual-id` keys unchanged.
* Use proper grammar, but keep instructions short and direct.
* Try to match the tone of the original.
* Retain formatting, such as **bold**, *italics*, and line breaks (`\n`).

---

## Testing

Currently there is no way to preview how your translation will appear on the site. To ensure compatibility, be sure:

* Your JavaScript syntax is valid
* You match the structure and total line number of the English version
* No keys are missing

---

## 5. Commit and Push

```bash
git add .
git commit -m "Add French translation for example-manual"
git push origin add-french-example-manual
```

---

## 6. Submit a Pull Request

Go to your fork and click **"New Pull Request"**.

Use our pull request template and fill out all sections before submitting.

---

## Contact

Need help?

* Open an [Issue](https://github.com/Vooks916/AT-Manual-Translations/issues)
* Join our [Discord](https://discord.gg/AaVHfeYgw2)

---

## Thank You!

Your contributions help us make high-quality manuals accessible worldwide. We appreciate your help! 🐢
