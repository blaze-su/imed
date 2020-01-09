export const doctors = [
    { _id: '', photo:{src: 'https://s00.yaplakal.com/pics/pics_original/2/2/9/10905922.jpg', _id: ''}, name: 'Черняк Степан Николаевич', position: 'Главный врач, мануальный терапефт, масажист', experience: 'Стаж 10 лет', "link": "/doctor" },
    { _id: '', photo:{src: 'https://s00.yaplakal.com/pics/pics_original/2/2/9/10905922.jpg', _id: ''}, name: 'Черняк Степан Николаевич', position: 'Главный врач, мануальный терапефт, масажист', experience: 'Стаж 10 лет', "link": "/doctor"  },
    { _id: '', photo:{src: 'https://s00.yaplakal.com/pics/pics_original/2/2/9/10905922.jpg', _id: ''}, name: 'Черняк Степан Николаевич', position: 'Главный врач, мануальный терапефт, масажист', experience: 'Стаж 10 лет', "link": "/doctor"  },
    { _id: '', photo:{src: 'https://s00.yaplakal.com/pics/pics_original/2/2/9/10905922.jpg', _id: ''}, name: 'Черняк Степан Николаевич', position: 'Главный врач, мануальный терапефт, масажист', experience: 'Стаж 10 лет', "link": "/doctor"  }
];

const text = 'Классический лечебный массаж - это комплекс особых процедур,' +
    ' которые применяют для скорейшего восстановления специфических функций органов' +
    ' и систем человеческого организма. Массаж гарантировано помогает при болях' +
    ' в спине различной этиологии, при проблемах с опорно-двигательным аппаратом.' +
    ' Восстановливает естественную подвижность суставов, усиливает регенеративные особенности' +
    ' тканей и приводит к нормализации обменных процессов в организме.';

export const prices = [
    {
        article: '/',
        title: 'Классический лечебный массаж',
        price: {time: '60мин', cost: '2 500 ₽'},
        data: {
          text: text
        }
    },
    {
        article: null,
        title: 'Массаж по сегментам',
        price: {
          time: '',
          cost: ''
         },
        data: {
            priceList: [
                {name: 'Массаж пояснично-крестцового отдела позвоночника', price: '800 ₽'},
                {name: 'Массаж пояснично-крестцового отдела позвоночника', price: '800 ₽'},
                {name: 'Массаж пояснично-крестцового отдела позвоночника', price: '800 ₽'},
                {name: 'Массаж пояснично-крестцового отдела позвоночника', price: '800 ₽'},
                {name: 'Массаж пояснично-крестцового отдела позвоночника', price: '800 ₽'},
                {name: 'Массаж пояснично-крестцового отдела позвоночника', price: '800 ₽'}
            ]
        }
    }
];

export const articles = [
    {title: '', text: text, img: 'statics/sale2.jpg', tags: null},
    {title: 'Косметология', text: text, img: 'statics/sale2.jpg', tags: null},
    {title: 'Массаж', text: text, img: 'statics/sale2.jpg', tags: null},
    {title: 'Гирудотерапия', text: text, img: 'statics/sale2.jpg', tags: null},
    {title: 'Гемоанализ', text: text, img: 'statics/sale2.jpg', tags: null}
];

export const tools = [
    {title: 'Массажный стол', text: text, img: 'statics/sale2.jpg', tags: null},
    {title: 'Массажный стол', text: text, img: 'statics/sale2.jpg', tags: null}
];

export const photo = {
        _id: '5d5ba7cb28343e26ec63f6c1',
        src: 'https://cdn.news-front.info/uploads/2017/06/kot-ukr--1024x768.jpg'
};
