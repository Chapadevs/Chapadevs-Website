// Development Environment Configuration
// ⚠️ WARNING: These values will be visible in the compiled JavaScript
// For production, replace these values during build process

export const environment = {
  production: false,
  
  // EmailJS Configuration
  // TODO: Replace with environment variables during production build
  emailService: {
    serviceId: 'service_odqilgs',        // 🔄 Replace in production
    templateId: 'template_oaix3xd',      // 🔄 Replace in production  
    publicKey: '9_v1yNhDsF7w1lmFF'       // 🔄 Replace in production
  },
  
  // Application Configuration
  app: {
    name: 'ChaPaDevs',
    url: 'http://localhost:4200',
    version: '1.0.0',
    environment: 'development'
  },
  
  // Contact Configuration
  contact: {
    email: 'admin@chapadevs.com',
    supportEmail: 'support@chapadevs.com'
  },
  
  // Feature Flags
  features: {
    enableAnalytics: false,
    enableChatWidget: false,
    enableDebugMode: true,              // Only true in development
    maintenanceMode: false
  },
  
  // Analytics (for future use)
  analytics: {
    googleAnalyticsId: '',
    hotjarId: ''
  },
  
  // API Configuration (for future backend)
  api: {
    baseUrl: 'http://localhost:3000',
    timeout: 10000
  }
}; 