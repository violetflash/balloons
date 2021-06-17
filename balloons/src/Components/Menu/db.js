const defaultDescription = `Фольгированный воздушный шар - прекрасно подходит для оформления детских праздников, а также 
            может использоваться в качестве самостоятельного подарка или в составе фонтана из шаров. Имеет встроенный 
            клапан, который позволяет гелию оставаться внутри шара длительное время (до 3-4 недель).`;

const additions = ['Гелий', 'Пакетик', 'Бантик', 'Подарочная упаковка', 'Фатин', 'Индивидуальная упаковка с полиграфией',
    'Конфетти', 'Лента'];

const db = {

    foiled: [
        {
            name: 'Школа',
            img: './baloons/foiled/01.jpg',
            id: 1,
            price: 60,
            country: 'Россия',
            size: '17"/43 см',
            description: defaultDescription
        },
        {
            name: 'Лесные друзья',
            img: './baloons/foiled/02.jpg',
            id: 2,
            price: 62,
            country: 'Россия',
            size: '19"/48см',
            description: `Воздушный шар в стиле Ретро создан по мотивам открыток известного художника Владимира Зарубина.
            Живые эмоции зверей, красочные иллюстрации и дополненная тематика - черты любимых карточек. Подарите 
            счастье и красивый воздушный шар как ребенку так и взрослому. Каждый найдет для себя что-то интересное 
            и новое. Отлично сочетается с латексными и оформительскими фольгированными шарами.
            Имеет надежный обратный клапан, который сохраняет гелий или воздух внутри шара длительное время.`
        },
        {
            name: 'Волшебный лес',
            img: './baloons/foiled/03.jpg',
            id: 3,
            price: 62,
            country: 'Россия',
            size: '19"/48см',
            description: `Волшебный сказочный лес со зверятами Вудленд изображен на воздушном шаре. Woodlend - это 
            удивительные милые животные и красочные иллюстрации. Используйте как самостоятельный подарок или в составе 
            фонтана из шаров. Будет отлично сочетаться с фигурами: Лиса, Енот, Олененок, Зайчик и Ежик
            Шар имеет надежный обратный клапан, который сохраняет гелий или воздух внутри шара длительное время.`
        },
        {
            name: 'Цум Цум',
            img: './baloons/foiled/04.jpg',
            id: 4,
            price: 62,
            country: 'Испания',
            size: '18"/46см',
            description: defaultDescription
        },
        {
            name: 'Холодное сердце Голография',
            img: './baloons/foiled/05.jpg',
            id: 5,
            price: 62,
            country: 'Испания',
            size: '18"/46см',
            description: `Сестры Эльза и Анна из мультфильма "Холодное Сердце" - всегда желанные гостьи на празднике каждой принцессы!
            Объем гелия в воздушном шаре 0,014 куб. м.
            Шар имеет встроенный клапан, который позволяет гелию оставаться внутри шара длительное время (до 3-4 недель).`
        },
        {
            name: 'Тигренок',
            img: './baloons/foiled/06.jpg',
            id: 6,
            price: 60,
            country: 'Россия',
            size: '19"/48см',
            description: defaultDescription
        },
        {
            name: 'Леди Баг',
            img: './baloons/foiled/07.jpg',
            id: 7,
            price: 32,
            country: 'Испания',
            size: '18"/46см',
            description: `Фольгированный воздушный шар - прекрасно подходит для оформления детских праздников, а также 
            может использоваться в качестве самостоятельного подарка или в составе фонтана из шаров. Имеет встроенный 
            клапан, который позволяет гелию оставаться внутри шара длительное время (до 3-4 недель).`
        },
        {
            name: 'Комплимент для мамы',
            img: './baloons/foiled/08.jpg',
            id: 8,
            price: 77,
            country: 'Испания',
            size: '18"/46см',
            description: defaultDescription
        },
        {
            name: 'Комплимент для папы',
            img: './baloons/foiled/09.jpg',
            id: 9,
            price: 77,
            country: 'Россия',
            size: '19"/48см',
            description: defaultDescription
        },
        {
            name: 'Любимой мамочке!',
            img: './baloons/foiled/10.jpg',
            id: 10,
            price: 60,
            country: 'Испания',
            size: '18"/46см',
            description: defaultDescription
        },
        {
            name: 'Любимой мамочке. Цветы',
            img: './baloons/foiled/11.jpg',
            id: 11,
            price: 60,
            country: 'Испания',
            size: '18"/46см',
            description: defaultDescription
        },
        {
            name: 'Смелый и сильный',
            img: './baloons/foiled/12.jpg',
            id: 12,
            price: 60,
            country: 'Испания',
            size: '18"/46см',
            description: defaultDescription
        },
        {
            name: 'Покоряй вершины',
            img: './baloons/foiled/13.jpg',
            id: 13,
            price: 60,
            country: 'Россия',
            size: '19"/48см',
            description: defaultDescription
        },
        {
            name: 'Живи Ярко!',
            img: './baloons/foiled/14.jpg',
            id: 14,
            price: 62,
            country: 'Испания',
            size: '18"/46см',
            description: defaultDescription
        },
        {
            name: 'Смайл',
            img: './baloons/foiled/15.jpg',
            id: 15,
            price: 50,
            country: 'Испания',
            size: '18"/46см',
            description: defaultDescription
        },
        {
            name: 'Краски жизни',
            img: './baloons/foiled/16.jpg',
            id: 16,
            price: 62,
            country: 'Россия',
            size: '19"/48см',
            description: defaultDescription
        },
        {
            name: 'Ловец снов в упаковке',
            img: './baloons/foiled/17.jpg',
            id: 17,
            price: 330,
            country: 'Россия',
            size: '19"/48см',
            description: defaultDescription
        },
        {
            name: 'Летние цветы в упаковке',
            img: './baloons/foiled/18.jpg',
            id: 18,
            price: 82,
            country: 'Россия',
            size: '19"/48см',
            description: defaultDescription
        },
        {
            name: 'Ты наша гордость',
            img: './baloons/foiled/19.jpg',
            id: 19,
            price: 60,
            country: 'Россия',
            size: '19"/48см',
            description: defaultDescription
        },
        {
            name: 'Счастья, добра, тепла',
            img: './baloons/foiled/20.jpg',
            id: 20,
            price: 82,
            country: 'Россия',
            size: '19"/48см',
            description: defaultDescription
        },
        {
            name: 'Будь счастлива!',
            img: './baloons/foiled/21.jpg',
            id: 21,
            price: 62,
            country: 'Россия',
            size: '19"/48см',
            description: defaultDescription
        },
        {
            name: 'Пусть сбудутся все мечты',
            img: './baloons/foiled/22.jpg',
            id: 22,
            price: 72,
            country: 'Россия',
            size: '19"/48см',
            description: defaultDescription
        },
        {
            name: 'Лучшие друзья',
            img: './baloons/foiled/23.jpg',
            id: 23,
            price: 45,
            country: 'Испания',
            size: '18"/46см',
            description: defaultDescription
        },
        {
            name: 'Всего Cвежего',
            img: './baloons/foiled/24.jpg',
            id: 24,
            price: 62,
            country: 'Испания',
            size: '18"/46см',
            description: defaultDescription
        },
        {
            name: 'Сердце',
            img: './baloons/foiled/25.jpg',
            id: 25,
            price: 72,
            country: 'Испания',
            size: '18"/46см',
            description: defaultDescription
        },
        {
            name: 'Ты самый лучший',
            img: './baloons/foiled/26.jpg',
            id: 26,
            price: 60,
            country: 'Россия',
            size: '19"/48см',
            description: defaultDescription
        },
        {
            name: 'Детка, ты просто космос',
            img: './baloons/foiled/27.jpg',
            id: 27,
            price: 72,
            country: 'Россия',
            size: '19"/48см',
            description: defaultDescription
        },
        {
            name: 'Счастье это ты!',
            img: './baloons/foiled/28.jpg',
            id: 28,
            price: 72,
            country: 'Испания',
            size: '18"/46см',
            description: defaultDescription
        },
        {
            name: 'Сияй',
            img: './baloons/foiled/29.jpg',
            id: 29,
            price: 60,
            country: 'Испания',
            size: '18"/46см',
            description: defaultDescription
        },
        {
            name: 'Ты просто огонь',
            img: './baloons/foiled/30.jpg',
            id: 30,
            price: 92,
            country: 'Россия',
            size: '19"/48см',
            description: defaultDescription
        },
        {
            name: 'Синий мрамор',
            img: './baloons/foiled/31.jpg',
            id: 31,
            price: 172,
            country: 'Россия',
            size: '19"/48см',
            description: defaultDescription
        },
    ],
    other: [
        {
            name: 'Ручной насос',
            img: '/baloons/other/01.jpg',
            id: 901,
            price: 250,
            size: '48см',
            country: 'Россия',
            choices: ['Фиолетовый', 'Белый', 'Синий', 'Красный'],
        },
        {
            name: 'Стойка для шаров',
            img: '/baloons/other/02.jpg',
            id: 902,
            price: 1340,
            size: '150см/48см',
            country: 'Россия',
            choices: ['20 отверстий', '30 отверстий', '40 отверстий', '50 отверстий'],
        },
        {
            name: 'Сетка для сброса / запуска шаров',
            img: '/baloons/other/03.jpg',
            id: 903,
            price: 900,
            size: '200см * 100см',
            country: 'Испания',
            choices: ['100 шаров', '200 шаров', '300 шаров', '500 шаров'],
        },
        {
            name: 'Конфетти, квадраты',
            img: '/baloons/other/04.jpg',
            id: 904,
            price: 980,
            size: 'квадраты 2см',
            country: 'Испания',
            choices: ['Золото', 'Серебро', 'Ассортимент цветов'],
        },
        {
            name: 'Воздух',
            img: '/baloons/other/05.jpg',
            id: 905,
            price: 2600,
            size: 'без размера',
            country: 'Россия',
            choices: ['Простой', 'Апельсиновый', 'Клубничный', 'Лесные ароматы'],
        },
    ]
};

export default db;
