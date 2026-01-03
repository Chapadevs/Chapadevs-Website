# ChaPaDevs Website

## 🎯 **Project Overview**

ChaPaDevs company website built with Angular and deployed using GitHub Actions to Google Cloud Run.

## 🚀 **Deployment**

This project uses **GitHub Actions** for automated deployment to **Google Cloud Run**.

### **How it works:**
```
Push to main → GitHub Actions → Build Angular → Deploy to Cloud Run → Live Website
```

### **Features:**
- ✅ Automated deployment on every push to main branch
- ✅ Angular build optimization
- ✅ Cloud Run hosting for scalability
- ✅ Simple and reliable CI/CD pipeline

## 📁 **Project Structure**

```
Chapadevs-Website/
├── .github/workflows/          # GitHub Actions for deployment
├── frontend/                   # Angular application
│   ├── src/                   # Source code
│   ├── package.json           # Dependencies
│   └── angular.json           # Angular configuration
├── Dockerfile                 # Container configuration
└── README.md                  # This file
```

## 🚀 **Development**

### **Local Development:**
```bash
cd frontend
npm install
npm start
```

### **Deployment:**
Deployment is automatic! Just push your changes to the main branch:

```bash
git add .
git commit -m "Your changes"
git push origin main
```

GitHub Actions will automatically:
1. Build the Angular application
2. Create a Docker container
3. Deploy to Google Cloud Run
4. Make your website live

## 🛠️ **Technologies**

- **Frontend**: Angular
- **Deployment**: GitHub Actions + Google Cloud Run
- **Styling**: SCSS
- **Container**: Docker