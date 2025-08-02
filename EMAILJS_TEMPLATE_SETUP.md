# ChaPaDevs EmailJS Template Setup Guide

## Overview
This EmailJS template has been designed specifically for ChaPaDevs user confirmation emails, incorporating the brand's design principles with sharp edges, geometric patterns, and the official color palette.

## Brand Design Features Applied

### 🎨 **Color Palette**
- **Primary Green**: `#10b981` - Used for main headings, links, and accents
- **Teal**: `#0d9488` - Used for secondary elements and hover states
- **Light Green**: `#a7f3d0` - Used for subtle backgrounds and accents
- **Dark Charcoal**: `#111827` - Used for footer background
- **Muted Grey**: `#6b7280` - Used for secondary text

### 🔤 **Typography**
- **Code Bold** font family for headings and brand elements
- **Inter** font family for body text (fallback to Arial, sans-serif)
- Sharp, technical aesthetic with proper hierarchy

### 🎯 **Design Elements**
- **Sharp edges** - No rounded corners (border-radius: 0)
- **Geometric patterns** - Subtle background patterns in header
- **Code symbols** - `<` and `/>` symbols incorporated throughout
- **Triangular accents** - Used for visual hierarchy and brand identity

## Template Variables

The template uses the following EmailJS variables:

| Variable | Description | Example |
|----------|-------------|---------|
| `{{customer_name}}` | Customer's full name | "John Doe" |
| `{{company_name}}` | Company/organization name | "Acme Corp" |
| `{{project_type}}` | Type of project requested | "New Website Design & Development" |
| `{{budget}}` | Budget range selected | "$500 - $1,500" |
| `{{timeline}}` | Desired timeline | "Within 1-2 weeks" |
| `{{contact_method}}` | Preferred contact method | "Email" |
| `{{submission_date}}` | Date of form submission | "12/15/2024" |

## Setup Instructions

### 1. EmailJS Account Setup
1. Log in to your EmailJS account at [emailjs.com](https://www.emailjs.com)
2. Navigate to **Email Templates** section
3. Click **Create New Template**

### 2. Template Configuration
1. **Template Name**: `ChaPaDevs User Confirmation`
2. **Subject**: `Thank you for your inquiry - ChaPaDevs`
3. **Template Type**: HTML

### 3. Copy Template Code
1. Copy the entire HTML code from `emailjs-template-chapadevs.html`
2. Paste it into the EmailJS template editor
3. Save the template

### 4. Update Environment Configuration
Update your `src/environments/environment.ts` file with the new template ID:

```typescript
export const environment = {
  production: false,
  emailService: {
    serviceId: 'service_odqilgs',
    templateId: 'template_oaix3xd', // Admin notification template
    userTemplateId: 'template_NEW_ID_HERE', // New user confirmation template
    publicKey: '9_v1yNhDsF7w1lmFF'
  },
  googleAnalytics: {
    trackingId: 'G-V0TMPBGDQD'
  }
};
```

### 5. Test the Template
1. Use EmailJS's built-in testing feature
2. Fill in test values for all variables
3. Send a test email to verify formatting
4. Check on different email clients (Gmail, Outlook, Apple Mail)

## Email Client Compatibility

### ✅ **Fully Supported**
- Gmail (Web & Mobile)
- Outlook (Web & Desktop)
- Apple Mail
- Thunderbird
- Yahoo Mail

### ⚠️ **Partial Support**
- Some older email clients may not support CSS Grid
- Background images may not display in all clients
- Custom fonts may fall back to system fonts

## Customization Options

### Colors
To modify colors, update the CSS variables in the `<style>` section:

```css
/* Primary brand colors */
--primary-green: #10b981;
--teal: #0d9488;
--light-green: #a7f3d0;
--dark-charcoal: #111827;
--muted-grey: #6b7280;
```

### Typography
To change fonts, update the font-family declarations:

```css
/* For headings */
font-family: 'Code Bold', monospace;

/* For body text */
font-family: 'Inter', Arial, sans-serif;
```

### Layout
The template uses a 600px max-width container for optimal email client compatibility. Adjust as needed:

```css
.email-container {
    max-width: 600px; /* Adjust this value */
}
```

## Troubleshooting

### Common Issues

1. **Images not displaying**
   - Ensure all images are hosted on a public server
   - Use absolute URLs for all image sources

2. **Fonts not loading**
   - Email clients have limited font support
   - Always provide fallback fonts

3. **CSS not applying**
   - Some email clients strip CSS
   - Use inline styles for critical styling
   - Test in multiple email clients

4. **Layout breaking**
   - Use table-based layouts for complex structures
   - Test on mobile devices
   - Use responsive design principles

## Best Practices

### ✅ **Do's**
- Keep the design clean and professional
- Use the brand color palette consistently
- Include clear call-to-action buttons
- Test across multiple email clients
- Optimize for mobile devices
- Use semantic HTML structure

### ❌ **Don'ts**
- Don't use complex CSS animations
- Don't rely on external CSS files
- Don't use JavaScript (not supported in emails)
- Don't use rounded corners (against brand guidelines)
- Don't use generic fonts (stick to brand typography)

## Support

For technical support or customization requests:
- Email: admin@chapadevs.com
- GitHub: [ChaPaDevs Repository](https://github.com/chapadevs)

---

**Template Version**: 1.0  
**Last Updated**: December 2024  
**Compatible with**: EmailJS v3.x 