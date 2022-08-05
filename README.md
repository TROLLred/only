# Warning Legacy Code

## Техническое задание
Требуется написать приложение в соответствии с макетом. Все запросы к серверу нужно имитировать на стороне фронта. </br>
Макет - [Figma](https://www.figma.com/file/jyTp0gnYwVBkppUgab90ju/Only-forms?node-id=0%3A1).
1. На странице "Авторизация" пользователь вводит данные (логин: *steve.jobs@example.com*, пароль: *password*), в случае ошибки выводить сообщение в соответствии с дизайном. В момент отправки запроса на сервер (имитация), следует отключать кнопку.
2. После того, как пользователь успешно авторизовался, его должно перенести на страницу "Профиль" ([/profile](https://github.com/TROLLred/only/blob/main/src/pages/Profile.tsx)), где отображается почта под которой он авторизовался.
3. При нажатии на кнопку "Выйти", необходимо произвести выход из системы с возвращением на страницу "Авторизация" ([/login](https://github.com/TROLLred/only/blob/main/src/pages/Login.tsx))
## Стек
- [React](https://ru.reactjs.org/), 
- [Typescript](https://create-react-app.dev/docs/adding-typescript/) `npx create-react-app . --template typescript`, 
- [React Router Dom](https://www.npmjs.com/package/react-router-dom) `npm i react-router-dom @types/react-router-dom`, 
- [Styled-Components](https://styled-components.com/) `npm i styled-components @types/styled-components`,
- [React Hook Form](https://react-hook-form.com/ru/) `npm i react-hook-form`.

## Комментарии о проделанной работе
Для собственного удобства использовал дополнительные библиотеки:
- REST API: [Axios](https://www.npmjs.com/package/axios) `npm i axios`
- Store: [Redux](https://redux.js.org/) `npm i redux react-redux redux-think @types/react-redux @types/redux-thunk`

Структура приложения расширяемая:
- Реализованны public и private routes, логика авторизации и расширения маршрутов;
- Реализована возможность расширения store, reducers, action-creators.

Кастомные хуки:
- useActions позволяет сделать dispatch всех action-creators;
- useTypedSelector.

Программа запускается на следующих портах:
- Клиент:
```
http://localhost:3000
```
- Фейковая [нереляционная база данных пользователей](https://github.com/TROLLred/only/blob/main/public/users.json):
```
http://localhost:3000/users.json
```
## От себя
Данное задание выполнено за 3 дня. </br>
Столкнулся со следующими трудностями:
- Не мог правильно подобрать интерфейсы и дженерики из-за конфликта тайпскрипта с styled-components и react-hook-form, пришлось отказаться от функциональных UI компонентов для input и button;
- Сначала пытался хранить авторизацию через useContext, но опять конфликтовал с typescript, пришлось залезать в свои старые проекты и вспоминать, как работать с redux в typescript проектах, что повлекло за собой дополнительную подгрузку 3-х Redux пакетов;
- Хотел использовать Bootstrap или MUI, но сетка в шаблоне фигмы оказалась больно специфичной (мало того, что сетка в шаблоне на весь экран, так еще и между столбцами нет отступов) и я отринул данную идею, ограничился Flexbox Layout.

Считаю, что тестовое задание выполнил успешно с полным соблюдением ТЗ, но жду фидбэк, чтобы учесть ошибки, которые я не заметил. (О, нет, я забыл сделать регулярное выражение для логина, но меня об этом не просили, так что ладно).
