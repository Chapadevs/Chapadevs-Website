# EmailJS Setup & Testing Guide

## After Setting Up EmailJS

1. **Replace the placeholder values** in both environment files:
   - `src/environments/environment.ts` 
   - `src/environments/environment.prod.ts`

2. **Update with your actual values:**
   ```typescript
   emailService: {
     serviceId: 'service_your_actual_id',      // From EmailJS Service
     templateId: 'template_your_actual_id',    // From EmailJS Template  
     publicKey: 'your_actual_public_key'       // From EmailJS Account
   }
   ```

## Testing Locally

1. **Start development server:**
   ```bash
   ng serve
   ```

2. **Fill out the form** with test data
3. **Submit the form**
4. **Check your email** (admin@chapadevs.com) for the inquiry

## Expected Email Format

You should receive an email like:

```
Subject: New Project Inquiry from John Doe - Acme Corp

New project inquiry received:

CONTACT INFORMATION:
- Company: Acme Corp
- Name: John Doe
- Email: john@acme.com
- Phone: +1-555-0123

PROJECT DETAILS:
- Type: website
- Description: We need a modern website for our consulting business...
- Target Audience: Small business owners in tech industry...
- Business Goals: Increase online presence and generate leads...

FEATURES REQUESTED:
- Key Features: Contact Forms, Analytics & Reporting, SEO Optimization
- Custom Features: Custom CRM integration

TIMELINE & BUDGET:
- Timeline: 1-2months
- Budget: 5k-15k

CURRENT SITUATION:
- Current Solution: Old WordPress site from 2018
- Competitors: TechConsult Pro, InnovateNow

Submitted: 12/19/2024, 2:30:15 PM
```

## Troubleshooting

- **No email received?** Check EmailJS dashboard logs
- **CORS errors?** Make sure EmailJS service is properly configured
- **Template errors?** Verify all template variables match the form data

## Next Steps After Testing

1. Test form submission
2. Verify email delivery
3. Deploy to Vercel
4. Test on production domain
5. Ready to go live! 🚀 