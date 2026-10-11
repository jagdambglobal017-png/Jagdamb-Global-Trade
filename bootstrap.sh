#!/usr/bin/env bash

# 1️⃣ Create the Vite + React + TS template
npm create vite@latest jagdamb-gt -- --template react

cd jagdamb-gt

# 2️⃣ Install all dev & runtime deps
npm i -D tailwindcss postcss autoprefixer
npm i -D @vitejs/plugin-react
npm i framer-motion lucide-react
npm i classnames
npm i react-intersection-observer
npm i react-hook-form @hookform/resolvers yup
npm i react-countup

# 3️⃣ Tailwind init
npx tailwindcss init -p
