### /add-locale <locale>
Adds a new locale to the site using next-intl.
- Message files already exist under messages/ for EN and ES.
- Configures next-intl routing and middleware for the new locale.
- Replaces hardcoded strings in components with t() calls, using the
  existing keys in messages/en.json as the reference.
- Does not create or translate message files — that is done separately.
- Does not modify component logic beyond replacing hardcoded strings.