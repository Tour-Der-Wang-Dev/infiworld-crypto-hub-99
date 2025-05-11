
# InfiWorld Crypto Hub

A comprehensive platform connecting cryptocurrency users with services, marketplace listings, and physical locations that accept crypto payments.

## 🌟 Features

- **Crypto Payment Locations Map**: Find stores, restaurants, and services that accept cryptocurrency payments
- **Crypto Marketplace**: Buy and sell items using cryptocurrency
- **Freelance Services**: Hire professionals who accept cryptocurrency payments
- **Travel Reservations**: Book travel accommodations with cryptocurrency
- **Identity Verification**: KYC process for enhanced security

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or bun package manager
- Supabase account
- Mapbox API key

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd infiworld-crypto-hub
```

2. Install dependencies:
```bash
npm install
# or
bun install
```

3. Environment setup:
   - Create a `.env` file in the root directory
   - Add the following variables:
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
MAPBOX_TOKEN=your-mapbox-token
```

4. Start the development server:
```bash
npm run dev
# or
bun dev
```

5. Open [http://localhost:8080](http://localhost:8080) in your browser to see the application.

## 🛠️ Technologies Used

- **Frontend Framework**: React with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Backend**: Supabase (Authentication, Database, Storage)
- **Maps**: Mapbox
- **State Management**: React Query with TanStack
- **Routing**: React Router

## 🧪 Testing

Run tests with:

```bash
npm test
# or
bun test
```

## 🚢 Deployment

The app can be deployed using the built-in deployment feature in Lovable.

1. Navigate to Project > Settings > Deployment
2. Click "Deploy" to build and deploy your application
3. For custom domains, follow the instructions in the Lovable documentation

## 🤝 Contributing

We welcome contributions to InfiWorld Crypto Hub! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

### Coding Standards

- Follow the existing code style
- Write meaningful commit messages
- Update documentation when necessary
- Add tests for new features

## 📃 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [Supabase](https://supabase.com) for backend services
- [Mapbox](https://mapbox.com) for mapping functionality
- [shadcn/ui](https://ui.shadcn.com) for UI components
- [Tailwind CSS](https://tailwindcss.com) for styling
