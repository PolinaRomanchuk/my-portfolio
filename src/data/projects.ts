export interface ProjectData {
  id: number;
  photoURL: string;
  name: string;
  description: string;
  features: string[];
  purpose: string;
  technologies: string[];
  repo: string;
  deploy?: string;
  task?: string;
  setting?: string;
}

export const Projects: ProjectData[] = [
  {
    id: 1,
    photoURL: '/shelter.jpg',
    name: 'Shelter',
    description: 'Shelter — сайт о приюте животных.',
    purpose: 'Верстка по макету Figma',
    technologies: ['JavaScript', 'CSS', 'HTML', 'Figma'],
    repo: 'https://github.com/PolinaRomanchuk/rss_stage_0/tree/shelter',
    deploy:
      'https://rolling-scopes-school.github.io/polinaromanchuk-JSFEPRESCHOOL2024Q2/shelter/',
    task: 'https://github.com/rolling-scopes-school/tasks/blob/master/tasks/shelter/shelter.md',
    features: [
      'Адаптивная вёрстка',
      'Фиксированная вёрстка по PerfectPixel',
      'Бургер-меню',
      'Бесконечный слайдер-карусель',
      'Пагинация',
      'Попап с информацией о питомце',
    ],
  },
  {
    id: 2,
    photoURL: '/audio.jpg',
    name: 'Audio Player',
    description: 'Кастомный музыкальный плеер.',
    purpose: 'Работа с медиа.',
    technologies: ['JavaScript', 'CSS', 'HTML'],
    repo: 'https://github.com/PolinaRomanchuk/rss_stage_0/tree/audio-player',
    deploy:
      'https://rolling-scopes-school.github.io/polinaromanchuk-JSFEPRESCHOOL2024Q2/audio-player/',
    task: 'https://github.com/rolling-scopes-school/tasks/blob/master/tasks/js30%23/js30-2.md',
    features: [
      'Кнопка Play/Pause с изменением иконки',
      'Кнопки Вперёд/Назад для переключения треков',
      'Зацикливание списка треков: после последнего воспроизводится первый',
      'Прогресс-бар с возможностью перемотки',
      'Отображение текущего времени трека и общей длительности',
    ],
  },
  {
    id: 3,
    photoURL: '/image-galery.jpg',
    name: 'Image Gallery',
    description: 'Галерея изображений с поиском по ключевым словам.',
    purpose: 'Работа с Unsplash API.',
    technologies: ['JavaScript', 'CSS', 'Unsplash API', 'HTML'],
    repo: 'https://github.com/PolinaRomanchuk/rss_stage_0/tree/image-gallery',
    deploy:
      'https://rolling-scopes-school.github.io/polinaromanchuk-JSFEPRESCHOOL2024Q2/image-gallery/',
    task: 'https://github.com/rolling-scopes-school/tasks/blob/master/tasks/js30%23/js30-5.md',
    features: [
      'Отображение изображений, полученных от Unsplash API при загрузке страницы',
      'Поиск изображений по ключевым словам',
      'Вывод списка доступных категорий',
      'Возможность отправки запроса нажатием клавиши Enter',
    ],
  },
  {
    id: 4,
    photoURL: '/memory-game.jpg',
    name: 'Memory Game',
    description: 'Классическая игра на запоминание пар карточек.',
    purpose: 'Игра на запоминание.',
    technologies: ['JavaScript', 'CSS', 'HTML'],
    repo: 'https://github.com/PolinaRomanchuk/rss_stage_0/tree/random-game',
    deploy:
      'https://rolling-scopes-school.github.io/polinaromanchuk-JSFEPRESCHOOL2024Q2/random-game/',
    task: 'https://github.com/rolling-scopes-school/tasks/blob/master/tasks/js30%23/js30-9.md',
    features: [
      'Игровое поле с парными карточками',
      '3 уровня сложности, 2 цели игры: на время, на количество ходов',
      'Таблица рекордов с историей последних 10 попыток',
      'По окончанию игры выводится её результат, реализовано завершение игры при достижении игровой цели',
    ],
  },
  {
    id: 5,
    photoURL: '/christmas-shop.jpg',
    name: 'Christmas Shop',
    description: 'Cайт интернет-магазина подарков к Рождеству.',
    purpose: 'Верстка по макету Figma.',
    technologies: ['JavaScript', 'CSS', 'HTML', 'Figma'],
    repo: 'https://github.com/PolinaRomanchuk/rss_stage_1/tree/christmas-shop',
    deploy:
      'https://rolling-scopes-school.github.io/polinaromanchuk-JSFE2024Q4/christmas-shop/',
    task: 'https://github.com/rolling-scopes-school/tasks/blob/master/tasks/christmas-shop/christmas-shop.md',
    features: [
      'Адаптивная вёрстка',
      'Фиксированная вёрстка по PerfectPixel',
      'Фильтрация подарков',
      'Модальные окна',
      'Таймер обратного отсчета до нового года',
      'Карусель',
    ],
  },
  {
    id: 6,
    photoURL: '/saymon-say.jpg',
    name: 'Simon Says',
    description: 'Игра на запоминание последовательности.',
    purpose: 'Игра на запоминание.',
    technologies: ['JavaScript', 'CSS', 'HTML'],
    repo: 'https://github.com/PolinaRomanchuk/rss_stage_1/tree/simon-says',
    deploy:
      'https://rolling-scopes-school.github.io/polinaromanchuk-JSFE2024Q4/simon-says/',
    task: 'https://github.com/rolling-scopes-school/tasks/tree/master/stage1/tasks/simon-says',
    features: [
      '3 уровня сложности: easy — только цифры, medium — только буквы, hard — буквы и цифры',
      '5 раундов с усложнением: длина последовательности растёт на 2 символа с каждым раундом',
      'Экранная и физическая клавиатура (ввод с обеих)',
      'Кнопка Repeat - одноразовое повторение последовательности',
      'New Game - перезапуск с сохранением выбранного уровня сложности',
      'Автоматическая проверка введённой последовательности: немедленное завершение при ошибке, поздравление при правильном вводе',
      'Финальное сообщение после победы в 5 раунде',
    ],
  },
  {
    id: 7,
    photoURL: '/nonograms.jpg',
    name: 'Nonograms',
    description: 'Головоломка японские кроссворды.',
    purpose: 'Игра кроссворды.',
    technologies: ['JavaScript', 'CSS'],
    repo: 'https://github.com/PolinaRomanchuk/rss_stage_1/tree/nonograms',
    deploy:
      'https://rolling-scopes-school.github.io/polinaromanchuk-JSFE2024Q4/nonograms/',
    task: 'https://github.com/rolling-scopes-school/tasks/tree/master/tasks/nonograms',
    features: [
      'Классические нонограммы 5x5, 10x10, 15x15',
      'Возможность выбора уровня сложности и шаблона',
      'Заполнение ячеек: левая кнопка мыши — чёрный цвет, правая — крестик',
      'Сохранение и восстановление последней игры',
      'Поддержка светлой/тёмной темы',
      'Таблица рекордов (последние 5 побед)',
      'Случайная игра по нажатию кнопки Random',
      'Кнопка Solution - заполнение правильным ответом (не считается победой)',
    ],
  },
  {
    id: 8,
    photoURL: '/decision.jpg',
    name: 'Decision Making Tool',
    description:
      'SPA-приложение для случайного выбора одного из заданных вариантов на основе их веса.',
    purpose: 'SPA-приложение.',
    technologies: [
      'TypeScript',
      'CSS',
      'Prettier',
      'ESLint',
      'Husky',
      'Webpack',
      'File API',
      'Canvas API',
      'SPA',
    ],
    repo: 'https://github.com/PolinaRomanchuk/rss_stage_1/tree/decision-making-tool',
    deploy:
      'https://rolling-scopes-school.github.io/polinaromanchuk-JSFE2024Q4/decision-making-tool/',
    task: 'https://github.com/rolling-scopes-school/tasks/blob/master/stage2/tasks/decision-making-tool/README.md',
    features: [
      'Полноценный интерфейс для редактирования списка опций: добавление, удаление, изменение',
      'Поддержка сохранения и загрузки списка из .json',
      'Вставка списка из CSV-подобного формата',
      'Интерактивные модальные окна (пастинг, ошибки, предупреждения)',
      'Возможность включения/отключения звука и сохранения состояния mute',
      'Обработка неизвестных маршрутов (страница 404)',
      'Колесо выбора: сектора с весами и уникальными цветами, отображение названий, эффект вращения',
    ],
  },
  {
    id: 9,
    photoURL: '/race.jpg',
    name: 'Async Race',
    description:
      'SPA-приложение, позволяющее управлять коллекцией автомобилей.',
    purpose: 'SPA-приложение.',
    technologies: [
      'TypeScript',
      'CSS',
      'Prettier',
      'ESLint',
      'Husky',
      'Webpack',
      'REST API',
      'SPA',
    ],
    repo: 'https://github.com/PolinaRomanchuk/rss_stage_1/tree/async-race',
    deploy:
      'https://rolling-scopes-school.github.io/polinaromanchuk-JSFE2024Q4/async-race/#',
    task: 'https://github.com/rolling-scopes-school/tasks/tree/master/stage2/tasks/async-race',
    features: [
      'Добавление, изменение и удаление автомобилей',
      'Выбор цвета машины из палитры',
      'Пагинация',
      'Генерация 100 случайных машин',
      'Кнопки запуска и остановки двигателя для каждой машины',
      'Анимация движения автомобиля',
      'Запуск гонки между всеми машинами текущей страницы',
      'Сброс всех машин на старт',
      'Отображение имени победителя',
      'Таблица с победителями: машина, имя, количество побед, лучшее время',
      'Сортировка по победам и по времени',
    ],
    setting:
      'Для просмотра приложения необходимо обязательно запустить отдельно сервер - https://github.com/mikhama/async-race-api',
  },
  {
    id: 10,
    photoURL: '/chat.jpg',
    name: 'Fun Chat',
    description:
      'SPA-чат с авторизацией, списком пользователей и приватными диалогами.',
    purpose: 'SPA-приложение.',
    technologies: [
      'TypeScript',
      'CSS',
      'Prettier',
      'ESLint',
      'Husky',
      'Webpack',
      'REST API',
      'SPA',
      'WebSocket',
    ],
    repo: 'https://github.com/PolinaRomanchuk/rss_stage_1/tree/fun-chat',
    deploy:
      'https://rolling-scopes-school.github.io/polinaromanchuk-JSFE2024Q4/fun-chat/#login',
    task: 'https://github.com/rolling-scopes-school/tasks/blob/master/stage2/tasks/fun-chat/README.md',
    features: [
      'Авторизация пользователя с валидацией логина и пароля (регистрация и логин здесь не разделены)',
      'Общий список пользователей с отображением онлайн-статуса',
      'Отображение количества непрочитанных сообщений от пользователей',
      'Диалоги 1-на-1 с полной историей переписки',
      'Поддержка реального времени через WebSocket',
      'Индикация доставленных и прочитанных сообщений',
      'Разделение прочитанных/непрочитанных сообщений визуально',
      'Возможность редактирования и удаления своих сообщений',
      'Обработка потери соединения и повторной авторизации',
    ],
    setting:
      'Для просмотра приложения необходимо обязательно запустить отдельно сервер - https://github.com/rolling-scopes-school/fun-chat-server/tree/main',
  },
  {
    id: 11,
    photoURL: '/e-commerce.jpg',
    name: 'eCommerce-Application',
    description: 'SPA онлайн-магазин по продаже цветов и растений.',
    purpose: 'SPA-приложение, eCommerce.',
    technologies: [
      'TypeScript',
      'React',
      'SCSS',
      'Prettier',
      'ESLint',
      'Husky',
      'Webpack',
      'REST API',
      'SPA',
      'Jest',
      'Commercetools API',
    ],
    repo: 'https://github.com/PolinaRomanchuk/eCommerce-Flowers',
    deploy: 'https://floral-muse.netlify.app/',
    task: 'https://github.com/rolling-scopes-school/tasks/tree/master/tasks/eCommerce-Application',
    features: [
      'Авторизация/регистрация пользователя с валидацией логина и пароля',
      'Каталог товаров',
      'Корзина',
      'Страница с детализацией товара',
      'Страница о нас',
      'Фильтрация, пагинация, сортировка, поиск',
    ],
  },
  {
    id: 12,
    photoURL: '/portfolio.jpg',
    name: 'Portfolio',
    description: 'Сайт-портфолио о проектах.',
    purpose: 'Портфолио.',
    technologies: [
      'TypeScript',
      'React',
      'MUI',
      'Prettier',
      'ESLint',
      'Husky',
      'Vite',
      'SPA',
    ],
    repo: 'https://github.com/PolinaRomanchuk/my-portfolio',
    features: ['Список работ', 'Фильтрация по технологиям', 'Модальные окна'],
  },
];
