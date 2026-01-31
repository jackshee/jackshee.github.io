# Font Setup Instructions

## Recommended Font: Space Grotesk

The theme has been updated to use **Space Grotesk**, a modern, clean sans-serif font that matches the Lever theme aesthetic. This font is already configured to load from Google Fonts.

### Current Configuration

The font is configured in `_config.yml`:
```yaml
fonts:
  primary: "Space Grotesk"
  secondary: "Space Grotesk"
  google_fonts: "Space+Grotesk:wght@300;400;500;600;700"
```

### Font Weights Available

- 300: Light
- 400: Regular
- 500: Medium
- 600: Semi-bold
- 700: Bold

### Alternative Font Options

If you prefer a different font, here are some alternatives that work well with the Lever theme aesthetic:

1. **Inter** (already in config as fallback)
   - Google Fonts: `Inter:wght@300;400;500;600;700`
   - Similar clean, modern look

2. **DM Sans**
   - Google Fonts: `DM+Sans:wght@400;500;700`
   - Slightly more rounded, friendly appearance

3. **Work Sans**
   - Google Fonts: `Work+Sans:wght@300;400;500;600;700`
   - Professional and readable

### How to Change Fonts

1. Update `_config.yml`:
   ```yaml
   fonts:
     primary: "Your Font Name"
     secondary: "Your Font Name"
     google_fonts: "Your+Font+Name:wght@300;400;500;600;700"
   ```

2. Update `_sass/main.scss` variables:
   ```scss
   $font-primary: 'Your Font Name', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
   $font-secondary: 'Your Font Name', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
   ```

### Font Loading

Fonts are automatically loaded from Google Fonts via the link tag in `_layouts/default.html`. No manual download is required - the fonts are served from Google's CDN.

If you want to host fonts locally instead:

1. Download fonts from [Google Fonts](https://fonts.google.com/specimen/Space+Grotesk)
2. Place font files in `assets/fonts/`
3. Update `_sass/main.scss` with `@font-face` declarations
4. Remove the Google Fonts link from `_layouts/default.html`

