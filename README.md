# react-tailwind-portfolio

👨‍🎨 An open-source portfolio template built with React and Tailwind.

![Open React template preview](./demo.png)

## Table of contents

* [Quick Start](#quick-start)
* [Usage](#usage)
  * [Available Scripts](#available-scripts)
    * [npm start](#npm-start)
    * [npm test](#npm-test)
    * [npm run build](#npm-run-build)
    * [npm run eject](#npm-run-eject)
  * [Learn More](#learn-more)
    * [Code Splitting](#code-splitting)
    * [Analyzing the Bundle Size](#analyzing-the-bundle-size)
    * [Making a Progressive Web App](#making-a-progressive-web-app)
    * [Advanced Configuration](#advanced-configuration)
    * [Deployment](#deployment)
    * [npm run build fails to minify](#npm-run-build-fails-to-minify)
  * [Google Analytics Setup](#google-analytics-setup)
* [Deploy to Vercel](#deploy-to-vercel)
* [Terms and License](#terms-and-license)

## Usage

This project was bootstrapped with Create React App.

### Quick Start

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd react-tailwind-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Customize your portfolio:**
   Edit `src/assets/data.js` to add your information, skills, and projects.

## Usage

### Available Scripts

In the project directory, you can run:

#### `npm install`
To install the dependencies package.

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

#### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

#### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

#### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

#### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

#### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

### Google Analytics Setup

In order to track visitors, you need to set an [environment variable](https://create-react-app.dev/docs/adding-custom-environment-variables/) called `REACT_APP_GA_CODE` storing your GA Tracking ID.

## Deploy to Vercel

This project is fully compatible with Vercel and can be deployed with a single click.

### Option 1: Deploy with Vercel CLI

```bash
npm install -g vercel
vercel
```

### Option 2: Deploy via GitHub

1. Push this repository to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect the project settings
6. Click "Deploy"

### Option 3: Deploy Button

Click the button below to deploy directly to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourname%2Freact-tailwind-portfolio)

### Environment Variables on Vercel

To use Google Analytics on Vercel:

1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add `REACT_APP_GA_CODE` with your Google Analytics tracking ID

## Terms and License

- Released under the [GPL](https://www.gnu.org/licenses/gpl-3.0.html).
- Use it for personal and commercial projects, but please don't republish, redistribute, or resell the template.
- Attribution is not required, although it is really appreciated.
