# Code a Cuisine

[![Angular](https://img.shields.io/badge/Angular-20.3.15-red?style=for-the-badge&logo=angular)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Supabase](https://img.shields.io/badge/Supabase-Database-green?style=for-the-badge&logo=supabase)](https://supabase.com/)
[![n8n](https://img.shields.io/badge/n8n-Workflow-orange?style=for-the-badge&logo=n8n)](https://n8n.io/)

An intelligent recipe discovery application that generates personalized dish recommendations based on your ingredients using AI-powered workflows.



## 🍳 About The Project

<img width="1248" height="746" style="border-radius:16" alt="mockup Hellgate Shadowfall" src="https://github.com/user-attachments/assets/d05445a5-5487-48d2-943e-506de1489f07"/>
<img width="1248" height="746" style="border-radius:16" alt="mockup Hellgate Shadowfall" src="https://github.com/user-attachments/assets/7f46d8dc-dc9c-4c2f-8e2a-31959d5af234"/>
<img width="1248" height="746" style="border-radius:16" alt="mockup Hellgate Shadowfall" src="https://github.com/user-attachments/assets/0d77dbda-4b59-47a4-b5ae-68520144682c"/>



**Code a Cuisine** is a modern web application that helps you discover new recipes based on ingredients you have at hand. Simply enter an ingredient, and the AI will suggest three delicious dishes you can prepare.

The application leverages:
- **AI-powered recipe generation** through n8n workflows and Groq AI
- **User management** with daily request limits (3 requests per day, resets at midnight)
- **Persistent cookbook** that stores all previously generated recipes
- **Responsive design** optimized for devices down to 320px width

---

## ✨ Features

- 🔍 **Ingredient-Based Recipe Search**: Enter any ingredient and receive 3 AI-curated dish recommendations
- 🎯 **Advanced Filtering Options**: 
  - **Portions**: Specify how many servings you need
  - **Cooking Time**: Quick (<20min), Medium (25-40min), or Complex (45+ min)
  - **Cuisine Type**: German, Italian, Indian, Japanese, Gourmet, or Fusion
  - **Dietary Preferences**: Vegetarian, Vegan, Keto, or No preferences
- 📚 **Personal Cookbook**: All generated recipes are automatically saved to your cookbook for future reference
- 🔒 **Rate Limiting**: Fair usage policy with 3 requests per day per user (resets daily at midnight)
- 👤 **User Authentication**: Secure user data management via Supabase
- 📱 **Fully Responsive**: Optimized for all devices from mobile (320px) to desktop
- ⚡ **Real-time AI Processing**: Powered by n8n workflows with Groq AI integration

---

## 🛠️ Built With

### Frontend
- [Angular](https://angular.io/) (v20.3.15) - Progressive web application framework
- [TypeScript](https://www.typescriptlang.org/) - Strongly typed programming language
- Responsive CSS (supports down to 320px)

### Backend & Services
- [n8n](https://n8n.io/) - Workflow automation for AI recipe generation
- [Groq AI](https://groq.com/) - AI assistant for intelligent recipe recommendations
- [Supabase](https://supabase.com/) - Backend-as-a-Service for user management and data storage

---

## 🚀 Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v18 or higher)
  ```bash
  node --version
  ```
- **npm** or **yarn**
  ```bash
  npm --version
  ```
- **Angular CLI** (v20.3.15)
  ```bash
  npm install -g @angular/cli@20.3.15
  ```

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/croser93/Code-a-Cuisine.git
   cd .\codecuisine
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (see [Environment Variables](#environment-variables) section)

4. **Run the development server**
   ```bash
   ng serve
   ```

5. **Open your browser**
   ```
   Navigate to http://localhost:4200/
   ```

---

## 🔐 Environment Variables

The application requires specific environment variables to function properly. These are **not included** in the repository for security reasons.

### Setup Instructions

1. **Create environment files** based on the templates:

   Create `src/environments/environment.ts` for local development:
   ```typescript
   export const environment = {
     production: false,
     supabaseUrl: 'YOUR_SUPABASE_PROJECT_URL',
     supabaseKey: 'YOUR_SUPABASE_ANON_KEY'
     n8nWebhookURL: 'YOUR_N8N_WEBHOOK_URL',
   };
   ```

2. **Required Variables**:

   | Variable | Description | Example |
   |----------|-------------|---------|
   | `webhookUrl` | Your n8n webhook endpoint URL | `https://your-n8n.com/webhook/xxx` |
   | `supabaseUrl` | Your Supabase project URL | `https://www.supabase.co` |
   | `supabaseKey` | Your Supabase anonymous/public key | `eyasdasdsadsadas...` |

3. **How to get these values**:

   - **n8n Webhook**: 
     - Set up an n8n workflow with a webhook trigger
     - Configure Groq AI integration in your workflow
     - Copy the webhook URL from n8n
   
   - **Supabase**:
     - Create a project at [Supabase](https://supabase.com/)
     - Go to Settings > API
     - Copy the Project URL and anon/public key

---

## 💡 Usage

1. **Sign up / Log in** to create your account
2. **Enter an ingredient** in the search field (e.g., "chicken", "tomatoes", "pasta")
3. **Set your preferences**:
   - Choose number of portions needed
   - Select cooking time (Quick: <20min, Medium: 25-40min, Complex: 45+ min)
   - Pick a cuisine type (German, Italian, Indian, Japanese, Gourmet, Fusion)
   - Set dietary preferences (Vegetarian, Vegan, Keto, or No preferences)
4. **View 3 AI-generated recipes** tailored to your ingredient and preferences
5. **Access your Cookbook** to see all previously generated recipes
6. **Daily limit**: You can make 3 recipe requests per day (resets at midnight UTC)

---

## 📁 Project Structure

```
codecuisine/

├── public/
│      └── assets/             # Assets 
├── src/
│   ├── app/
│       ├── feature/           # Feature
│       │     ├──components/   # Components
│       │     └──shared/       # Shared    
│       ├── core/              # Services
│       └── environments/      # Environment configuration (gitignored)
├── angular.json               # Angular CLI configuration
├── package.json               # Dependencies
└── README.md                  # This file
```

---

## 📱 Responsive Design

Code a Cuisine is fully responsive and optimized for:
- 📱 **Mobile devices** (down to 320px width)
- 📱 **Tablets** (768px and up)
- 💻 **Desktops** (1024px and up)

The application adapts seamlessly to all screen sizes for an optimal user experience.
