# 🔐 Environment Variables Setup Guide

## 📋 Required Environment Variables

Create a `.env` file in the project root with these variables:

```bash
# Chapadevs Environment Variables
# DO NOT COMMIT THIS FILE TO GIT

# EmailJS Configuration (Required)
EMAILJS_SERVICE_ID=your_service_id_here
EMAILJS_TEMPLATE_ID=your_template_id_here  
EMAILJS_PUBLIC_KEY=your_public_key_here

# Application Configuration
APP_NAME=Chapadevs
APP_URL_DEV=http://localhost:4200
APP_URL_PROD=https://your-domain.vercel.app

# Contact Information  
CONTACT_EMAIL=admin@chapadevs.com
SUPPORT_EMAIL=support@chapadevs.com

# Analytics (Optional - leave empty if not using)
GOOGLE_ANALYTICS_ID=
HOTJAR_ID=

# Feature Flags (true/false)
ENABLE_ANALYTICS=false
ENABLE_CHAT_WIDGET=false
MAINTENANCE_MODE=false
```

## 🚀 Setup Instructions

### 1. Create Local .env File
```bash
# Copy template to .env
cp environment-template.md .env

# Edit .env with your actual values
nano .env  # or use your preferred editor
```

### 2. Replace Placeholder Values
- `your_service_id_here` → Your actual EmailJS Service ID
- `your_template_id_here` → Your actual EmailJS Template ID  
- `your_public_key_here` → Your actual EmailJS Public Key
- `your-domain.vercel.app` → Your actual production domain

### 3. Current Values (for reference)
```bash
EMAILJS_SERVICE_ID=service_odqilgs
EMAILJS_TEMPLATE_ID=template_oaix3xd
EMAILJS_PUBLIC_KEY=9_v1yNhDsF7w1lmFF
```

## 🔒 Security Best Practices

### ✅ What's Protected
- `.env` file is in `.gitignore` ✓
- Sensitive keys won't be committed ✓
- Production variables separate from code ✓

### 🚀 Production Deployment (Vercel)
```bash
# Set environment variables in Vercel dashboard
vercel env add EMAILJS_SERVICE_ID
vercel env add EMAILJS_TEMPLATE_ID  
vercel env add EMAILJS_PUBLIC_KEY

# Or use Vercel CLI
vercel env add production
```

### 🔧 Development Setup
```bash
# 1. Create .env file with your values
echo "EMAILJS_SERVICE_ID=service_odqilgs" > .env
echo "EMAILJS_TEMPLATE_ID=template_oaix3xd" >> .env
echo "EMAILJS_PUBLIC_KEY=9_v1yNhDsF7w1lmFF" >> .env

# 2. Restart development server
ng serve
```

## 📁 File Structure
```
chapadevs-website/
├── .env                     # ← Your local secrets (DO NOT COMMIT)
├── .env.example             # ← Template file (safe to commit)
├── .gitignore              # ← Contains .env (protects secrets)
├── environment-template.md  # ← This guide
├── src/environments/
│   ├── environment.ts       # ← Development config
│   └── environment.prod.ts  # ← Production config
```

## ⚠️ Important Notes

1. **Never commit `.env` to git** - it's already in `.gitignore`
2. **Use environment variables in production** - don't hardcode secrets
3. **Rotate keys regularly** - update EmailJS keys periodically  
4. **Test locally first** - verify .env works before deploying

## 🧪 Testing Your Setup

```bash
# 1. Create .env with your values
# 2. Restart ng serve
# 3. Test contact form submission
# 4. Check console for "✅ Email sent successfully"
# 5. Verify email received at admin@chapadevs.com
``` 