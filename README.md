# RouteFinder

Приложение доступно по ссылке(для пользователей из Москвы): https://84.201.162.111/map/atms <br />
Для пользователей из других городов: http://84.201.162.111/map/atms <br />
Swagger: http://84.201.162.111/gis-api/docs

Разделение действует ввиду алгоритма выбора точек на карте относительно локации пользователя в радиусе 50км. Для HTTP используется стандартная точка на карте в Москве.

## Описание алгоритма загруженности

Алгоритм загруженности отделения предоставляет оценку загрузки на основе временной цены услуги и их количества в системе электронных очередей.
В рамках хакатона реальное исполнение алгоритма произведено не было. В качестве используемых данных по загрузке было использовано собственное решение, приближенно моделирующее загруженность банка по времени. В рамках хакатона реального исполнения алгоритма не было.

## Запуск приложения

### Запуск базы данных

```
sudo docker-compose --file docker-compose.yml down;
sudo docker-compose --file docker-compose.yml up -d;
sudo docker system prune --all --force;

```

### Запуск backend'a

```
cd backend && npm i && npm run start:dev
```

Через Postman или браузер необходимо выполнить get запросы для миграции данных и json в базу:

```
http://localhost:5000/api/migration/migrationAtm
http://localhost:5000/api/migration/migrationBank
http://localhost:5000/api/migration/job
```

После этого backend приложение готово к использованию

### Запуск frontend'a

Для локальной работы YandexAPI необходимо создать `.env` файл и заполнить следующим образом

```
VITE_API_URL=http://84.201.162.111/gis-api //Ссылка на бэкэнд
VITE_API_KEY= //Ваш ключ к Гео декодеру
```

```
cd frontent && npm i && npm run dev
```
