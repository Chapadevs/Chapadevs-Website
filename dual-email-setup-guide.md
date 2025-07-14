# EmailJS Dual Email Setup Guide

This guide will help you configure EmailJS to send emails to both you (admin) and your customers when they fill out the contact form.

## 🎯 Overview

When a user submits the form, **TWO emails** will be sent:
1. **Admin Email** → `admin@chapadevs.com` (notification about new inquiry)
2. **User Email** → `customer@email.com` (confirmation that their inquiry was received)

## 📋 Step-by-Step Setup

### Step 1: Create User Confirmation Template

1. **Login to EmailJS Dashboard**: https://dashboard.emailjs.com/
2. **Go to Email Templates** 
3. **Click "Create New Template"**
4. **Name it**: `User Confirmation Template`

### Step 2: Configure User Template

**Template Settings:**
- **To Email**: `{{customer_email}}`
- **From Name**: `Chapadevs Team`
- **From Email**: `admin@chapadevs.com`
- **Subject**: `Thank you for your inquiry - We'll be in touch soon!`

**Template HTML** (copy and paste this):

```html
<div style="font-family: Inter, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
  <div style="background-color: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
    
    <!-- Header -->
    <div style="text-align: center; margin-bottom: 30px;">
      <h1 style="color: #22c55e; margin: 0; font-size: 28px;">Thank You, {{customer_name}}!</h1>
      <p style="color: #6b7280; margin: 10px 0 0 0; font-size: 16px;">We've received your project inquiry</p>
    </div>

    <!-- Main Content -->
    <div style="margin-bottom: 30px;">
      <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
        Thank you for reaching out to Chapadevs! We're excited about the possibility of working with {{company_name}} on your {{project_type}} project.
      </p>
      
      <div style="background-color: #f0fdf4; border-left: 4px solid #22c55e; padding: 20px; margin: 20px 0; border-radius: 0 8px 8px 0;">
        <h3 style="color: #16a34a; margin: 0 0 10px 0; font-size: 18px;">What happens next?</h3>
        <ul style="color: #374151; margin: 0; padding-left: 20px; line-height: 1.6;">
          <li>Our team will review your requirements within 24 hours</li>
          <li>We'll prepare a custom proposal tailored to your needs</li>
          <li>We'll schedule a consultation call to discuss your vision</li>
          <li>You'll receive a detailed project timeline and pricing</li>
        </ul>
      </div>

      <p style="color: #374151; font-size: 16px; line-height: 1.6;">
        In the meantime, feel free to check out our <a href="https://chapadevs.github.io/portfolio" style="color: #22c55e; text-decoration: none;">recent projects</a> to see examples of our work.
      </p>
    </div>

    <!-- Project Summary -->
    <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <h3 style="color: #374151; margin: 0 0 15px 0; font-size: 18px;">Your Project Summary:</h3>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="color: #6b7280; padding: 8px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600;">Project Type:</td>
          <td style="color: #374151; padding: 8px 0; border-bottom: 1px solid #e5e7eb;">{{project_type}}</td>
        </tr>
        <tr>
          <td style="color: #6b7280; padding: 8px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600;">Budget Range:</td>
          <td style="color: #374151; padding: 8px 0; border-bottom: 1px solid #e5e7eb;">{{budget}}</td>
        </tr>
        <tr>
          <td style="color: #6b7280; padding: 8px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600;">Timeline:</td>
          <td style="color: #374151; padding: 8px 0; border-bottom: 1px solid #e5e7eb;">{{timeline}}</td>
        </tr>
        <tr>
          <td style="color: #6b7280; padding: 8px 0; font-weight: 600;">Preferred Contact:</td>
          <td style="color: #374151; padding: 8px 0;">{{contact_method}}</td>
        </tr>
      </table>
    </div>

    <!-- Contact Info -->
    <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
      <p style="color: #6b7280; margin: 0; font-size: 14px;">
        Questions? Reply to this email or contact us at 
        <a href="mailto:admin@chapadevs.com" style="color: #22c55e; text-decoration: none;">admin@chapadevs.com</a>
      </p>
      <p style="color: #9ca3af; margin: 10px 0 0 0; font-size: 12px;">
        Chapadevs - Your Digital Vision, Our Code
      </p>
    </div>
  </div>
</div>
```

### Step 3: Get Template ID

1. **Save the template**
2. **Copy the Template ID** (it will look like `template_xxxxxxx`)
3. **Note it down** - you'll need this for the next step

### Step 4: Update Environment Configuration

1. **Open**: `src/environments/environment.ts`
2. **Replace**: `template_USER_CONFIRMATION` with your **actual template ID**
3. **Do the same** for `src/environments/environment.prod.ts`

**Example:**
```typescript
export const environment = {
  production: false,
  emailService: {
    serviceId: 'service_odqilgs',
    templateId: 'template_oaix3xd', // Admin notification template
    userTemplateId: 'template_abc123', // 👈 Replace with YOUR template ID
    publicKey: '9_v1yNhDsF7w1lmFF'
  },
  // ...
};
```

## ✅ Testing the Setup

### Test Checklist:
1. **Fill out the contact form** on your website
2. **Check admin email** (`admin@chapadevs.com`) - you should receive the detailed inquiry
3. **Check user email** (the email you used in the form) - user should receive confirmation
4. **Check console logs** for any EmailJS errors

### Expected Results:
- ✅ Admin receives detailed project inquiry with all form data
- ✅ User receives professional confirmation email with project summary
- ✅ Success message shows: "We've also sent you a confirmation email"

## 🔧 Troubleshooting

### Common Issues:

**"User email not sending"**
- ✅ Check that `userTemplateId` in environment.ts matches your EmailJS template ID
- ✅ Verify template uses `{{customer_email}}` in the "To Email" field
- ✅ Check browser console for EmailJS errors

**"Template variables not showing"**
- ✅ Ensure template variables match exactly: `{{customer_name}}`, `{{project_type}}`, etc.
- ✅ Check that variables are wrapped in double curly braces

**"Emails going to spam"**
- ✅ User should check spam/junk folder
- ✅ Consider adding admin@chapadevs.com to email contacts

### Debug Tips:
1. **Check browser console** for detailed error messages
2. **Test with your own email** first
3. **Verify EmailJS dashboard** shows both emails being sent
4. **Test template preview** in EmailJS dashboard

## 🎯 Benefits of Dual Email System

### For You (Admin):
- Get detailed project information immediately
- All form data organized and ready for follow-up
- Professional workflow management

### For Customers:
- Immediate confirmation their inquiry was received
- Professional impression of your business
- Clear next steps and expectations
- Project summary for their records

## 📈 Next Steps

Once this is working:
1. **Monitor email delivery rates** in EmailJS dashboard
2. **A/B test different confirmation email content**
3. **Consider adding** auto-responder sequences
4. **Track conversion rates** from inquiry to project

---

🚀 **Ready to get more professional inquiries with instant confirmations!** 