import { IEducation } from '@shared/models/education.interface';

export const education: IEducation[] = [
    {
        educationTitle: 'SCHOOL',
        educationLogo: [
            {
                id: '0',
                slideNumber: 0,
                src: 'assets/img/educational_establishments/school/hs_132.jpeg',
                title: 'First slide',
                subtitle:
                    'Nulla vitae elit libero, a pharetra augue mollis interdum.',
            },
            {
                id: '1',
                slideNumber: 1,
                src: 'assets/img/educational_establishments/school/main_132.jpeg',
                title: 'First slide',
                subtitle:
                    'Nulla vitae elit libero, a pharetra augue mollis interdum.',
            },
            {
                id: '2',
                slideNumber: 2,
                src: 'assets/img/educational_establishments/school/hs_132_full.jpeg',
                title: 'First slide',
                subtitle:
                    'Nulla vitae elit libero, a pharetra augue mollis interdum.',
            },
        ],
        educationPlaceName: [
            {
                name: '132',
                link: 'http://sch132.minsk.edu.by/',
                address: 'г.Минск, ул.П.Глебки, д.86',
                phone: '+375 17 337-46-43',
            },
        ],
    },
    {
        educationTitle: 'UNIVERSITY',
        educationLogo: [
            {
                id: '0',
                slideNumber: 0,
                src: 'assets/img/educational_establishments/university/miu_aside.jpg',
                title: 'First slide',
                subtitle:
                    'Nulla vitae elit libero, a pharetra augue mollis interdum.',
            },
            {
                id: '1',
                slideNumber: 1,
                src: 'assets/img/educational_establishments/university/miu_corpus.jpeg',
                title: 'First slide',
                subtitle:
                    'Nulla vitae elit libero, a pharetra augue mollis interdum.',
            },
            {
                id: '2',
                slideNumber: 2,
                src: 'assets/img/educational_establishments/university/miu_main.jpeg',
                title: 'First slide',
                subtitle:
                    'Nulla vitae elit libero, a pharetra augue mollis interdum.',
            },
        ],
        educationPlaceName: [
            {
                name: 'MIU',
                link: 'http://miu.by/',
                address: 'г.Минск, ул.Лазо, д.12',
                phone: '+375 17 351-26-27',
            },
        ],
    },
    {
        educationTitle: 'COURSES',
        educationPlaceName: [
            {
                name: 'TMS',
                link: 'https://teachmeskills.by/',
                address: 'г.Минск, ул.Тимирязева, д.67, оф.1101',
                phone: '+375 29 105-59-59',
                grade: 'Front-end developer',
                certificatePath: 'assets/img/certificate/frontend.jpg',
                certificateLink: '',
            },
            {
                name: 'IT-ACADEMY',
                link: 'https://www.it-academy.by/',
                address: 'г.Минск, ул.Скрыганова, д.14, эт.5',
                phone: '+375 44 781-54-12',
                grade: 'C# developer',
                certificatePath: 'assets/img/certificate/web-design.jpg',
                certificateLink:
                    'https://vk.com/doc348769408_600252239?hash=FYdq3hRtY13M6YzSy1quSPQnso3XjuKzbLqPpKllBDX&dl=PO4r4gz66CZTgO5aB9fAzwv9CGQgQ6Z3Y2Q0FeGKZwc',
            },
            {
                name: 'HIGHLIGHTS',
                link: 'https://vk.com/highlights_highlights7',
                address: 'г.Москва',
                phone: '',
                grade: 'Основы веб-дизайна в Adobe-Photoshop',
                certificatePath: 'assets/img/certificate/web-design.jpg',
                certificateLink:
                    'https://vk.com/doc348769408_600252239?hash=FYdq3hRtY13M6YzSy1quSPQnso3XjuKzbLqPpKllBDX&dl=PO4r4gz66CZTgO5aB9fAzwv9CGQgQ6Z3Y2Q0FeGKZwc',
            },
            {
                name: 'STEPIK',
                link: 'https://stepik.org/',
                address: 'г.Москва',
                phone: '',
                grade: 'Основы програмирования на C#',
                certificatePath: 'assets/img/certificate/beginner.jpg',
                certificateLink: 'https://stepik.org/cert/320534',
            },
            {
                name: 'STEPIK',
                link: 'https://stepik.org/',
                address: 'г.Москва',
                phone: '',
                grade: 'Базовые навыки Excel>',
                certificatePath: 'assets/img/certificate/stepik-excel.png',
                certificateLink: 'https://stepik.org/cert/1953522',
            },
        ],
    },
];
