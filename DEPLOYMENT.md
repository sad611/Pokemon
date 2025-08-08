# Pokémon React Native Web App

This is a React Native app built with Expo that can run on web, iOS, and Android. The web version can be deployed to GitHub Pages.

## 🚀 Deployment to GitHub Pages

Your app is now configured to automatically deploy to GitHub Pages! Here's what you need to do:

### Option 1: Automatic Deployment (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Add GitHub Pages deployment"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository settings on GitHub
   - Scroll down to "Pages" in the left sidebar
   - Under "Source", select "Deploy from a branch"
   - Select "gh-pages" branch and "/ (root)" folder
   - Click "Save"

3. **Wait for deployment:**
   - The GitHub Action will automatically build and deploy your app
   - Your app will be available at: `https://sad611.github.io/Pokemon`

### Option 2: Manual Deployment

If you prefer to deploy manually:

```bash
# Install dependencies
npm install --legacy-peer-deps

# Install web dependencies
npm install react-dom react-native-web @expo/metro-runtime --legacy-peer-deps

# Build for web
npx expo export --platform web

# Deploy the dist folder to GitHub Pages
# (You can use any static hosting service)
```

## 🔧 Local Development

### Web Development
```bash
npm install --legacy-peer-deps
npx expo start --web
```

### Mobile Development
```bash
npm install --legacy-peer-deps
npx expo start --android  # For Android
npx expo start --ios      # For iOS
```

## 📱 Platform Support

- ✅ **Web** - Deployable to GitHub Pages
- ✅ **iOS** - Requires Expo Go app or development build
- ✅ **Android** - Requires Expo Go app or development build

## 🛠️ Technologies Used

- React Native + Expo
- React Navigation
- MobX for state management
- React Native Paper for UI components
- Styled Components

## 📝 Notes

- The app uses `--legacy-peer-deps` due to some dependency conflicts
- Web deployment creates a `dist` folder with static assets
- The GitHub Action automatically handles the build and deployment process

## 🌐 Live Demo

Once deployed, your app will be available at:
**https://sad611.github.io/Pokemon**
