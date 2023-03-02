# react-2023-02-09

# ДЗ.

## Как делать:

0. Сделать форк этого репозитория в свой аккаунт (только 1 раз в самом начале).

1. Перед выполнением ДЗ сделайте пул мастера этого репозитория себе в форк (чтобы иметь актуальный код);
2. Обновить зависимости `yarn` или `npm i`;
3. Создайте новую ветку от актуального мастера для выполнения ДЗ;
4. Выполните ДЗ в этой ветке;
5. Сделайте Pull Request этой ветки в мастер моего репозитория;
6. Напишите мне в личные сообщения дискорда ссылку на PR.

**Важно! В результате всех этих манипуляций в вашем мастере должны быть только мои комиты, все ваши комиты должны быть в отдельных ветках под каждую домашку.**

Дедлайн – 23:00 по GMT+3 за день до занятия.

## HW1

1. Сделать реализацию компонента Menu и Reviews таким образом, чтобы они принимали в пропсы меню и отзывы соответственно и отрисовывали их одной строкой(логика получения строки уже есть, ее просто нужно перенести).
2. Сделать реализацию Restaurant таким образом, что он будет отображать название ресторана и отрисовывать компоненты Menu и Reviews.
3. (Optional) Дополнительно необходимо написать реализацию всех этих компонентов с использованием обычного js(React.createElement).

## HW2

1. Сделать компонент Dish, который будет отрисовывать детали блюда.
2. В компоненте Dish необходимо добавить кнопки +- и кол-во блюда в заказе (-0+).
3. Кол-во блюда храним в локальном состоянии. По клику на кнопки уменьшаем или увеличиваем кол-во. Мин 0, макс 6.
4. (Доп задание). Если кол-во блюда больше 0, то отрисовыввем ингредиенты это блюда и против каждого ингредиента рисуем -1+ (дефолтное состояние 1, мин 0, макс 6)(Для блюда делаем отдельный компонент с своим состоянием).

## HW3

1. необходимо сделать компонент Rating:
    1. в пропсы он принимает value, onChange, size;
    2. value(min 1, max 5) - текущее значение рейтинга, если рейтинг 3, то рисуем 3 золотых звезды и 2 черных (звезды есть в forLessons, оптимизировать);
    3. size - размер звездочек рейтинга(s, m, l значнеие в пикселях выбираем сами);
    4. onChange - принимает функцию и вызывает при кике на звездочку, передавая этйо функции значение рейтинга соответствующее этой звезде(этот проп опциональный, если мы не передали функцию, то компонент просто отображает рейтинг, если передали, то он работает как инпут для рейтинга);
2. Используем компонент Рейтинга в следующих местах:
    1. Отзывы, размер s;
    2. Форма нового отзыва(вместо обычного инпута для рейтинга), размер l;
3. (Опционально) Добавить стили в приложение для всех компонентов;