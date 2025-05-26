-- USERS
INSERT INTO
    users (
        first_name,
        last_name,
        email,
        password,
        phone_number,
        age,
        created_at
    )
VALUES
    (
        'Paula',
        'Humphrey',
        'michael56@franklin.org',
        'hashed@4)D3Gidnv',
        '+1-308-335-4183',
        59,
        '2025-05-26 04:14:43.302142'
    ),
    (
        'Joseph',
        'King',
        'rogerlopez@cook.com',
        'hashedZ%W9XqbqVH',
        '+1-308-335-8920',
        18,
        '2025-05-26 04:14:43.302142'
    ),
    (
        'Eric',
        'Keith',
        'kimberlymills@yahoo.com',
        'hashed!@U2sEeS09',
        '+1-308-335-5430',
        29,
        '2025-05-26 04:14:43.302142'
    ),
    (
        'Leslie',
        'Ramirez',
        'ogonzalez@gmail.com',
        'hashedR1P0HRBu*t',
        '+1-308-335-7251',
        35,
        '2025-05-26 04:14:43.302142'
    ),
    (
        'Philip',
        'Martinez',
        'kevinsparks@gmail.com',
        'hashedinXnvQ)I@3',
        '+1-891-005-2156',
        20,
        '2025-05-26 04:14:43.302142'
    );

--PAYMENTS
INSERT INTO
    payments(
        placeholder_name,
        type,
        quantity,
        cvc,
        card_number,
        expiration_date,
        payment_plan
    )
VALUES
    (
        'David Card',
        'OTHER',
        1,
        '578',
        '4991652209288846',
        '2026-10-09',
        'Monthly'
    ),
    (
        'Tanner Card',
        'VISA',
        1,
        '672',
        '4991652209288846',
        '2028-01-20',
        'Annual'
    ),
    (
        'Ryan Card',
        'VISA',
        1,
        '278',
        '4991652209288846',
        '2026-07-26',
        'Annual'
    ),
    (
        'Jessica Card',
        'AMEX',
        1,
        '446',
        '4991652209288846',
        '2026-04-18',
        'Monthly'
    );

--PLANS
INSERT INTO
    plans(type, plan_term, price, description, created_at)
VALUES
    (
        'Standard',
        'Annual',
        17.64,
        'Pull knowledge fly law cut.',
        '2025-05-26 04:14:43.302142'
    ),
    (
        'Standard',
        'Monthly',
        11.53,
        'Establish trade finally data to court.',
        '2025-05-26 04:14:43.302142'
    ),
    (
        'Lvl 2',
        'Monthly',
        17.34,
        'Represent travel once political morning.',
        '2025-05-26 04:14:43.302142'
    ),
    (
        'Lvl 2',
        'Monthly',
        9.98,
        'Customer magazine option community contain.',
        '2025-05-26 04:14:43.302142'
    ),
    (
        'Lvl 1',
        'Annual',
        9.87,
        'Civil teach tough involve.',
        '2025-05-26 04:14:43.302142'
    ),
    (
        'Lvl 2',
        'Annual',
        16.73,
        'Which good idea program oil close opportunity discussion.',
        '2025-05-26 04:14:43.302142'
    ),
    (
        'Lvl 1',
        'Annual',
        18.67,
        'Stay development value many itself.',
        '2025-05-26 04:14:43.302142'
    ),
    (
        'Lvl 2',
        'Annual',
        15.92,
        'Care option vote store.',
        '2025-05-26 04:14:43.302142'
    ),
    (
        'Lvl 1',
        'Monthly',
        12.14,
        'Response consumer product summer area tell.',
        '2025-05-26 04:14:43.302142'
    ),
    (
        'Lvl 2',
        'Annual',
        17.3,
        'Trouble teach return much western guess because.',
        '2025-05-26 04:14:43.302142'
    ),
    (
        'Standard',
        'Annual',
        13.55,
        'Whatever dog where enter.',
        '2025-05-26 04:14:43.302142'
    ),
    (
        'Lvl 1',
        'Annual',
        13.69,
        'Almost they Mr sport leader.',
        '2025-05-26 04:14:43.302142'
    ),
    (
        'Lvl 1',
        'Monthly',
        7.93,
        'View two wrong down.',
        '2025-05-26 04:14:43.302142'
    ),
    (
        'Lvl 1',
        'Monthly',
        13.17,
        'Theory record of vote just rock.',
        '2025-05-26 04:14:43.302142'
    ),
    (
        'Lvl 1',
        'Annual',
        7.56,
        'Key first bit unit stop address program.',
        '2025-05-26 04:14:43.302142'
    ),
    (
        'Standard',
        'Monthly',
        6.95,
        'Detail less family get artist certain.',
        '2025-05-26 04:14:43.302142'
    ),
    (
        'Standard',
        'Monthly',
        13.97,
        'Wrong million official chair.',
        '2025-05-26 04:14:43.302142'
    ),
    (
        'Standard',
        'Annual',
        13.45,
        'Station situation near some surface.',
        '2025-05-26 04:14:43.302142'
    ),
    (
        'Lvl 1',
        'Monthly',
        6.95,
        'Organization ok happen police enter next finish worry.',
        '2025-05-26 04:14:43.302142'
    ),
    (
        'Lvl 1',
        'Monthly',
        19.48,
        'Evening radio else whom management article.',
        '2025-05-26 04:14:43.302142'
    ),
    (
        'Lvl 2',
        'Annual',
        7.56,
        'Project paper officer where.',
        '2025-05-26 04:14:43.302142'
    ),
    (
        'Lvl 2',
        'Monthly',
        8.85,
        'Good century property improve experience a stage play.',
        '2025-05-26 04:14:43.302142'
    ),
    (
        'Lvl 1',
        'Annual',
        13.5,
        'Sit unit matter fly.',
        '2025-05-26 04:14:43.302142'
    ),
    (
        'Standard',
        'Monthly',
        19.39,
        'Arm economic quite she information example employee.',
        '2025-05-26 04:14:43.302142'
    ),
    (
        'Standard',
        'Monthly',
        19.3,
        'Herself artist choose although lead near amount.',
        '2025-05-26 04:14:43.302142'
    ),
    (
        'Standard',
        'Monthly',
        13.73,
        'Teach within final agency step.',
        '2025-05-26 04:14:43.302142'
    ),
    (
        'Standard',
        'Monthly',
        15.87,
        'Trouble report investment middle.',
        '2025-05-26 04:14:43.302142'
    ),
    (
        'Lvl 2',
        'Monthly',
        5.24,
        'Car security reality fire visit morning hospital.',
        '2025-05-26 04:14:43.302142'
    ),
    (
        'Lvl 2',
        'Annual',
        17.25,
        'Project particularly last table market.',
        '2025-05-26 04:14:43.302142'
    ),
    (
        'Lvl 2',
        'Monthly',
        9.71,
        'View lose full effort pull push receive.',
        '2025-05-26 04:14:43.302142'
    );

--PRODUCTS
INSERT INTO
    products(
        plan_id,
        name,
        type,
        category,
        price,
        payment_date,
        rating,
        release_date,
        created_at
    )
VALUES
    (
        1,
        'Inception',
        'Movie',
        'Comedy',
        21.71,
        '2025-07-22',
        4.3,
        '2011-04-28',
        '2025-05-26 04:14:43.302142'
    ),
    (
        2,
        'The Matrix',
        'Streaming Service',
        'Comedy',
        11.86,
        '2025-08-07',
        3.3,
        '2007-04-19',
        '2025-05-26 04:14:43.302142'
    ),
    (
        3,
        'Disney+',
        'Streaming Service',
        'Drama',
        20.01,
        '2025-07-24',
        3.3,
        '2016-04-01',
        '2025-05-26 04:14:43.302142'
    ),
    (
        4,
        'The Matrix',
        'Movie',
        'Comedy',
        16.58,
        '2025-06-26',
        3.3,
        '2011-01-11',
        '2025-05-26 04:14:43.302142'
    ),
    (
        5,
        'Netflix',
        'Streaming Service',
        'Comedy',
        21.62,
        '2025-08-19',
        4.8,
        '2014-06-27',
        '2025-05-26 04:14:43.302142'
    ),
    (
        6,
        'Disney+',
        'Movie',
        'Drama',
        5.02,
        '2025-05-30',
        3.7,
        '2007-05-13',
        '2025-05-26 04:14:43.302142'
    ),
    (
        7,
        'Disney+',
        'Streaming Service',
        'Drama',
        8.44,
        '2025-07-03',
        4.0,
        '2006-01-12',
        '2025-05-26 04:14:43.302142'
    ),
    (
        8,
        'Netflix',
        'Movie',
        'Comedy',
        5.14,
        '2025-06-09',
        4.8,
        '2009-12-16',
        '2025-05-26 04:14:43.302142'
    ),
    (
        9,
        'Inception',
        'Movie',
        'Comedy',
        6.55,
        '2025-08-15',
        4.7,
        '2015-12-18',
        '2025-05-26 04:14:43.302142'
    ),
    (
        10,
        'Inception',
        'Streaming Service',
        'Action',
        16.12,
        '2025-07-11',
        4.1,
        '2006-10-17',
        '2025-05-26 04:14:43.302142'
    ),
    (
        11,
        'Interstellar',
        'Streaming Service',
        'Comedy',
        5.91,
        '2025-08-23',
        5.0,
        '2007-11-15',
        '2025-05-26 04:14:43.302142'
    ),
    (
        12,
        'Interstellar',
        'Streaming Service',
        'Sci-Fi',
        15.71,
        '2025-06-28',
        3.4,
        '2013-03-14',
        '2025-05-26 04:14:43.302142'
    ),
    (
        13,
        'Interstellar',
        'Streaming Service',
        'Horror',
        13.45,
        '2025-08-02',
        4.7,
        '2004-03-08',
        '2025-05-26 04:14:43.302142'
    ),
    (
        14,
        'Inception',
        'Movie',
        'Comedy',
        10.53,
        '2025-07-14',
        4.1,
        '2012-02-19',
        '2025-05-26 04:14:43.302142'
    ),
    (
        15,
        'The Matrix',
        'Movie',
        'Sci-Fi',
        19.2,
        '2025-06-04',
        3.4,
        '2014-02-20',
        '2025-05-26 04:14:43.302142'
    ),
    (
        16,
        'The Matrix',
        'Movie',
        'Horror',
        22.81,
        '2025-07-09',
        3.2,
        '2004-05-14',
        '2025-05-26 04:14:43.302142'
    ),
    (
        17,
        'Netflix',
        'Movie',
        'Drama',
        23.02,
        '2025-07-09',
        4.1,
        '2016-05-14',
        '2025-05-26 04:14:43.302142'
    ),
    (
        18,
        'Disney+',
        'Movie',
        'Drama',
        17.31,
        '2025-08-17',
        3.8,
        '2015-04-23',
        '2025-05-26 04:14:43.302142'
    ),
    (
        19,
        'Netflix',
        'Movie',
        'Action',
        11.2,
        '2025-05-31',
        4.3,
        '2010-03-26',
        '2025-05-26 04:14:43.302142'
    ),
    (
        20,
        'Interstellar',
        'Streaming Service',
        'Comedy',
        6.72,
        '2025-07-28',
        4.2,
        '2012-02-28',
        '2025-05-26 04:14:43.302142'
    ),
    (
        21,
        'Inception',
        'Streaming Service',
        'Sci-Fi',
        22.9,
        '2025-07-04',
        3.6,
        '2007-07-25',
        '2025-05-26 04:14:43.302142'
    ),
    (
        22,
        'Interstellar',
        'Movie',
        'Comedy',
        23.77,
        '2025-05-29',
        4.7,
        '2011-06-18',
        '2025-05-26 04:14:43.302142'
    ),
    (
        23,
        'Disney+',
        'Streaming Service',
        'Horror',
        24.35,
        '2025-06-10',
        5.0,
        '2011-10-23',
        '2025-05-26 04:14:43.302142'
    ),
    (
        24,
        'Interstellar',
        'Movie',
        'Comedy',
        19.65,
        '2025-07-14',
        3.2,
        '2007-08-10',
        '2025-05-26 04:14:43.302142'
    ),
    (
        25,
        'Prime Video',
        'Streaming Service',
        'Drama',
        7.86,
        '2025-06-16',
        3.3,
        '2006-10-27',
        '2025-05-26 04:14:43.302142'
    ),
    (
        26,
        'Inception',
        'Streaming Service',
        'Horror',
        20.97,
        '2025-08-19',
        3.2,
        '2008-03-05',
        '2025-05-26 04:14:43.302142'
    ),
    (
        27,
        'Inception',
        'Streaming Service',
        'Sci-Fi',
        24.13,
        '2025-06-24',
        4.1,
        '2004-08-07',
        '2025-05-26 04:14:43.302142'
    ),
    (
        28,
        'Netflix',
        'Movie',
        'Comedy',
        21.88,
        '2025-06-07',
        3.4,
        '2012-05-02',
        '2025-05-26 04:14:43.302142'
    ),
    (
        29,
        'Inception',
        'Movie',
        'Horror',
        9.87,
        '2025-07-11',
        4.0,
        '2009-12-19',
        '2025-05-26 04:14:43.302142'
    ),
    (
        30,
        'Netflix',
        'Streaming Service',
        'Sci-Fi',
        15.41,
        '2025-08-18',
        4.4,
        '2007-06-20',
        '2025-05-26 04:14:43.302142'
    );

--CART
INSERT INTO
    cart(
        user_id,
        payment_id,
        total_amount,
        taxes,
        shipping,
        discount_code,
        created_at
    )
VALUES
    (
        1,
        1,
        84.7,
        1.69,
        3.69,
        'CODE1',
        '2025-05-26 04:14:43.302142'
    ),
    (
        2,
        2,
        32.94,
        1.77,
        7.45,
        'CODE2',
        '2025-05-26 04:14:43.302142'
    ),
    (
        3,
        3,
        86.58,
        2.95,
        6.62,
        'CODE3',
        '2025-05-26 04:14:43.302142'
    ),
    (
        4,
        4,
        19.98,
        3.8,
        9.23,
        'CODE4',
        '2025-05-26 04:14:43.302142'
    ),
    (
        5,
        5,
        23.83,
        4.5,
        8.63,
        'CODE5',
        '2025-05-26 04:14:43.302142'
    );

--ITEMS
INSERT INTO
    items(cart_id, product_id, created_at)
VALUES
    (1, 1, '2025-05-26 04:14:43.302142'),
    (2, 2, '2025-05-26 04:14:43.302142'),
    (3, 3, '2025-05-26 04:14:43.302142'),
    (4, 4, '2025-05-26 04:14:43.302142'),
    (5, 5, '2025-05-26 04:14:43.302142');