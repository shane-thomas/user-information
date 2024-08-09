# User Information App

This is a React Native application built with Expo Go that fetches and displays user data from the [Random Data API](https://random-data-api.com). The app renders 80 users individually on separate screens, displaying their avatar, username, ID, UID, password, first name, last name, and email ID. Users can navigate back and forth between different users using "Prev" and "Next" buttons at the bottom of the screen.

## Features

- **Fetches Data from API:** Retrieves 80 users' data from the Random Data API.
- **User Profiles:** Displays each user's information on a separate screen with a well-designed layout.
- **Navigation:** Users can navigate between different profiles using the "Previos User" and "Next User" buttons.
- **Simple & Clean Design:** The app follows a simple, user-friendly design to present user data in an aesthetically pleasing way.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/shane-thomas/user-information.git
2. **Navigate to the project directory:**
   ```bash
   cd user-information
3. **Install dependencies and expo**
   ```bash
   npx install
   npx install-expo-modules@latest
4. **Install Expo Go on your physical device where you want to run the app**\
   [Android Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www)\
   [iOS Link](https://itunes.apple.com/app/apple-store/id982107779)
   
6. **Start the server for your app in Expo Go by typing this in the terminal**
   ```bash
   npx expo start -c
7. **Use the Expo Go app to scan the QR code and launch the app on your mobile device or run it on an emulator using the options provided in the terminal.**

## How to Use
 - Upon launching the app, the first user's data will be displayed.
 - Use the "Next" button at the bottom of the screen to navigate to the next user.
 - Use the "Prev" button to go back to the previous user.

## Android Users
Android users can directly download the latest APK from the GitHub Releases page. Simply visit the [releases](https://github.com/shane-thomas/user-information/releases/tag/v1.0.0) page and download the latest APK file to install the app on your Android device.
