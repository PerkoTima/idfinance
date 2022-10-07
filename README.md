# Тестовое задание FRONTEND Lab ID FINANCE

Необходимо создать масштабируемый SPA регистрации с двумя шагами и неизменным url. Сайт должен быть адаптивным и корректно отображаться на разных устройствах. Приложение должно иметь понятный код и архитектуру.

## Требуемые технологии:
* ReactJS
* Redux / React Context
* Styled components / scc modules (можно что-то другое)
* Любой css фреймворк 
* Можно использовать TypeScript

### Условия следующие:

1. Шапка и футер должны быть высотой не более 200px, содержать векторное лого и быть “приклеены” к верху и низу страницы соответственно.

2. Под шапкой должны находится хлебные крошки, показывающие текущий этап прохождения регистрации (SignUpInfo / PersonalInfo).

3. На элементах форм необходимо использовать controlled и uncontrolled компоненты.

4. Переход на следующий шаг должен быть после валидации, которая хранится в JSON Schema (см. ниже, это stub на предполагаемый ответ сервера при инициализации приложения).

5. Приложение должно работать при изменении JSON Schema (см. ниже).

6. После заполнения анкеты отобразить модальное окно с заполненной информацией.

### Содержание SignUpInfo:
1. Mobile phone (маскированный инпут)
2. Email (email инпут)
3. Password (инпут пароль)
4. Repeat Password (должно совпадать с Password)
5. Next (кнопка для валидации и перехода на следующий этап)

### Содержание PersonalInfo:
1. First Name (текстовый инпут)
2. Last Name (текстовый инпут)
3. Sex (радиогруппа)
4. Birthday (3 инпут формата DD MM YYYY)
5. Your Favorite Ocean (селект, элементы приходят в JSON SCHEMA)
6. Hobby (группа чекбоксов с возможностью выбора нескольких элементов, элементы приходят в JSON SCHEMA)
7. Change SignUp Information (кнопка, позволяющая изменить данные с первого шага)
8. Complete (кнопка завершения регистрации, по нажатию на которую показывается модальное окно с заполненной анкетой)


JSON Schema:

{
    "firstName": {
      "required": true,
      "minLength": "2",
      "maxLength": "30"
    },
    "lastName": {
      "required": true,
      "minLength": "2",
      "maxLength": "30"
    },
    "mobilePhone": {
      "required": true,
      "regExp": "^\\+375\\d{9}$"
    },
    "password": {
      "required": true,
      "minLength": "8",
      "maxLength": "20"
    },
    "email": {
      "required": true,
      "regExp": "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$"
    },
    "birthday": {
      "required": true,
      "minAge": "18",
      "maxAge": "90"
    },
    "ocean": {
      "required": true,
      "oneOf": [
        "Atlantic",
        "Pacific",
        "Indian",
        "Arctic"
      ]
    },
    "hobby": {
      "required": true,
      "anyOf": [
        "Sport",
        "Beauty",
        "IT",
        "Pets"
      ]
    },
    "sex": {
      "required": true
    }
}

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.