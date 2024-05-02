# WINbd

Как запустить проект:

1. После открытия проекта, запустите 2 терминала.
2. В первом введите команду cd client, во втором cd server.
3. Зайдите в папку server и создайте файл .env
4. Скопируйте то, что находится в файле .env.example и вставьте в файл .env
5. Поменяйте в строке DB_NAME postgres на свое название.
6. Поменяйте в строке DB_USER postgres на свой ник.
7. Поменяйте в строке DB_PASS pass на свой пароль.
8. Сделайте в обоих терминалах npm i
9. Во 2 терминале запустите команду npm run db, которая создаст базу данных.
10. Далее в 1 терминале запустите команду npm run dev, а во втором npm start
11. В первом терминале появится ссылка на localhost, зажмите ctrl и нажмите на эту ссылку
