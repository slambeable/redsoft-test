export default {
  data() {
    return {
      placeholder: {
        navigation: [
          'Каталог',
          'Доставка',
          'Оплата',
          'Контакты',
          'О галерее',
        ],
        contact: {
          phone: '+7 (495) 555-55-55',
          map: 'г. Москва, ул. Расплетина, 24',
        },
      },
      products: [
        {
          img: 'birth_of_venus',
          title: '«Рождение Венеры»\nСандро Боттичелли',
          price: '1000000',
          discount: '2000000',
          button: 'active',
          isSale: true,
        },
        {
          img: 'the_last_supper',
          title: '«Тайная вечеря»\nЛеонардо да Винчи',
          price: '3000000',
          discount: '',
          button: 'active',
          isSale: true,
        },
        {
          img: 'the_creation_of_adam',
          title: '«Сотворение Адама»\nМикеланджело',
          price: '5000000',
          discount: '6000000',
          button: 'cart',
          isSale: true,
        },
        {
          img: 'anatomy_lesson',
          title: '«Урок анатомии»\nРембрандт',
          price: '',
          discount: '',
          button: 'active',
          isSale: false,
        },
      ],
    };
  },
};
