#!/bin/bash

# Navigate to src directory or create it if it doesn't exist
mkdir -p src/components
mkdir -p src/pages

# Create component files
touch src/components/Header.js
touch src/components/Footer.js
touch src/components/HeroBanner.js
touch src/components/ServiceCard.js

# Create page files
touch src/pages/HomePage.js
touch src/pages/ServicesPage.js
touch src/pages/AboutPage.js
touch src/pages/ContactPage.js

# Create App.js and index.js in src
touch src/App.js
touch src/index.js

echo "All folders and files have been created successfully!"
