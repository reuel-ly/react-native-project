# React Native Project Documentation

## Overview

This project is a React Native application built using Expo. It supports both **mobile** and **web** environments, allowing flexible development and testing.

---

## Prerequisites

Before running the project, make sure you have the following installed:

* Node.js (recommended LTS version)
* npm (comes with Node.js)
* Expo CLI (optional, but helpful)

---

## Mobile Setup

### Install Required Dependency

To enable tunneling (useful for testing on real devices), install ngrok:

```
npm install @expo/ngrok@4.1.0
```

### Run on Mobile

Start the development server with tunnel support:

```
npx expo start --tunnel
```

### Notes

* The `--tunnel` option allows you to access the app from your mobile device even if you're not on the same network.
* Open the Expo Go app on your phone and scan the QR code.

---

## Web Setup

### Install Required Dependencies

To run the project in a web browser, install the following:

```
npx expo install react-dom react-native-web @expo/metro-runtime
```

### Run on Web

Start the project for web:

```
npx expo start --web
```


