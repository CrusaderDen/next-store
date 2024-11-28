## Запуск приложения - npm run dev

# Описание приложения и принятых решений

## 1. Используемые технологии

- Приложение реализовано с использованием TypeScript.
- Для стилизации использованы CSS-модули и SASS в синтаксисе SCSS.

## 2. Архитектура API

- Данные по товарам организованы в две структуры, связанные по ID.
- Созданы следующие эндпоинты:
    - `/api/products` — возвращает список товаров.
    - `/api/products/[id]` — возвращает детали товара по его ID.
- Методы для работы со структурами данных вынесены в объект-репозиторий.

## 3. Роутинг

- Роуты вынесены в отдельные объекты:
    - `PATH`
    - `API_PATH`

## 4. Запросы к API

- Запросы к API организованы в сервисный объект.

## 5. Главная страница

- Главная страница включает:
    - Заголовок.
    - Строку поиска.
    - Список товаров (название, цена, краткое описание).
- Первоначальная загрузка страницы осуществляется с использованием Server-Side Rendering (SSR).
- Страница товара открывается по динамическому роуту и также использует SSR, включает карточку товара с названием,
  ценой, изображением и подробным описанием.

## 6. Поиск

- При вводе текста в поле `input` создается query-параметр `name` с текущим значением строки поиска (при очистке строки
  параметр удаляется).
- Логика фильтрации:
    - Если параметр `name` присутствует, выполняется GET-запрос к API с query-параметром, возвращая нужные товары.
      Фильтрация осуществляется на сервере, так как при использовании пагинации, пользователю могут быть загружены не
      все товары.
    - Пользователь может скопировать адресную строку и переслать ее другому пользователю, что позволит сразу отобразить
      товары с нужной фильтрацией (строка поиска автоматически подставится в поле `input`)
    - Поиск осуществляется с дебаунсом 300 мс при вводе текста.

## 7. Лоадер

- Добавлен лоадер для переключения между страницами, привязанный к изменению роута.
- Лоадер отключается при изменении query-параметров (например, набор текста в `input`), чтобы избежать слишком частых
  срабатываний.

## 8. Управление состоянием

- В текущей реализации использование React Context или других механизмов для управления состоянием приложения посчитал
  избыточным(хотя в требованиях есть). Вроде нет ничего, что можно было бы вынести в это состояние.

## 9. Оптимизации

- Для оптимизации изображений задействован встроенный в Next.js компонент `Image`.
- Использованы динамические импорты для компонент SearchInput и DynamicProductsList, для максимального быстрого
  отображения страницы ProductsMainContent, где пользователь может увидеть список товаров. Скрипты для SearchInput и
  DynamicProductsList будут загружены, если пользователь начнет с ними взаимодействовать. То есть, например, при первом
  клике на какую-то карточку товара пользователь подождет чуть дольше, подгрузится необходимый скрипт.