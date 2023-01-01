# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

Структура

1. Вхідний масив для опрацювання (arrayOrder)
   [{
   id: ІПН,
   name: ПІБ,
   day30t: кількість днів,
   day100t: кількість днів,
   period30:[1, 2, 3 ...],
   period100:[ 4, 5, 6 ... 30]
   }]

2. Масиви фільтрації
   2.1 Масив людей, які отримали гз (arrayGZ)
   [{
   id: ІПН,
   name: ПІБ,
   dayGZ: кількість днів,
   periodGZ:[ 4, 5, 6 ... 30]
   }]

   2.2 Масив позбавлень (arrayLost)
   [{
   id: ІПН,
   name: ПІБ,
   }]

3. Результат масив на виплату (arrayRewardDay)
   [{
   id: ІПН,
   day30t: кількість днів,
   day100t: кількість днів,
   }]

Завдання

1. Фронт таблиця.+
2. Імпорт вхідного масиву з наказу (спочатку руцями).+
3. Імпор масивів фільтрації (спочатку руцями).+
4. Функції фільтра та перебору масивів.
   4.1 Фільтр по повному позбавленню.
   4.2 Фільтр по кількості дні гз.
   4.3 Фільтр 30 і 100.
5. Вивід результату в таблиці ексель.
