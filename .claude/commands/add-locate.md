## Commands

### /add-locale <locale>
Adds a new locale to the site using next-intl.
- Extracts all hardcoded strings from page.tsx and component files into 
  messages/en.json if not already extracted.
- Creates messages/<locale>.json with the same keys and placeholder values 
  marked [TRANSLATE].
- Does not translate content — translation is done manually or in a 
  separate task.
- Does not modify component logic beyond replacing hardcoded strings with 
  t() calls.