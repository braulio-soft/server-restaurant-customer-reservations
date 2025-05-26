/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
export const shorthands = undefined;

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 */
export const up = (pgm) => {
    pgm.createTable('payments', {
        id: 'id',
        placeholder_name: { type: 'varchar(100)' },
        type: {
            type: 'varchar(50)',
            notNull: true,
            check: "type IN ('VISA', 'MASTERCARD', 'AMEX', 'OTHER')",
        },
        quantity: { type: 'integer' },
        cvc: { type: 'varchar(10)', notNull: true },
        card_number: { type: 'varchar(20)', notNull: true },
        expiration_date: { type: 'date', notNull: true },
        payment_plan: { type: 'varchar(100)' },
    });

    pgm.createTable('plans', {
        id: 'id',
        type: {
            type: 'varchar(50)',
            notNull: true,
            check: "type IN ('Standard', 'Lvl 1', 'Lvl 2')",
        },
        plan_term: { type: 'varchar(100)' },
        price: { type: 'numeric(10,2)', notNull: true },
        description: { type: 'text' },
        created_at: {
            type: 'timestamp',
            default: pgm.func('current_timestamp'),
        },
        updated_at: {
            type: 'timestamp',
            default: pgm.func('current_timestamp'),
        },
        deleted_at: { type: 'timestamp' },
    });

    pgm.createTable('products', {
        id: 'id',
        plan_id: {
            type: 'integer',
            references: 'plans',
            onDelete: 'set null',
        },
        name: { type: 'varchar(255)', notNull: true },
        type: {
            type: 'varchar(50)',
            notNull: true,
            check: "type IN ('Movie', 'Streaming Service')",
        },
        category: { type: 'varchar(100)' },
        price: { type: 'numeric(10,2)' },
        payment_date: { type: 'date' },
        rating: { type: 'numeric(2,1)' },
        release_date: { type: 'date' },
        created_at: {
            type: 'timestamp',
            default: pgm.func('current_timestamp'),
        },
        updated_at: {
            type: 'timestamp',
            default: pgm.func('current_timestamp'),
        },
        deleted_at: { type: 'timestamp' },
    });

    pgm.createTable('users', {
        id: 'id',
        first_name: { type: 'varchar(100)' },
        last_name: { type: 'varchar(100)' },
        email: { type: 'varchar(255)', notNull: true, unique: true },
        password: { type: 'varchar(255)', notNull: true },
        phone_number: { type: 'varchar(20)' },
        age: { type: 'integer' },
        created_at: {
            type: 'timestamp',
            default: pgm.func('current_timestamp'),
        },
        updated_at: {
            type: 'timestamp',
            default: pgm.func('current_timestamp'),
        },
        deleted_at: { type: 'timestamp' },
    });

    pgm.createTable('cart', {
        id: 'id',
        user_id: {
            type: 'integer',
            references: 'users',
            onDelete: 'cascade',
            notNull: true,
        },
        payment_id: {
            type: 'integer',
            references: 'payments',
            onDelete: 'set null',
        },
        total_amount: { type: 'numeric(10,2)', notNull: true },
        taxes: { type: 'numeric(10,2)' },
        shipping: { type: 'numeric(10,2)' },
        discount_code: { type: 'varchar(100)' },
        created_at: {
            type: 'timestamp',
            default: pgm.func('current_timestamp'),
        },
        updated_at: {
            type: 'timestamp',
            default: pgm.func('current_timestamp'),
        },
        deleted_at: { type: 'timestamp' },
    });

    pgm.addColumn('users', {
        cart_id: {
            type: 'integer',
            references: 'cart',
            onDelete: 'set null',
        },
    });

    pgm.createTable('items', {
        id: 'id',
        cart_id: {
            type: 'integer',
            references: 'cart',
            onDelete: 'cascade',
            notNull: true,
        },
        product_id: {
            type: 'integer',
            references: 'products',
            onDelete: 'cascade',
            notNull: true,
        },
        created_at: {
            type: 'timestamp',
            default: pgm.func('current_timestamp'),
        },
        updated_at: {
            type: 'timestamp',
            default: pgm.func('current_timestamp'),
        },
        deleted_at: { type: 'timestamp' },
    });
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 */
export const down = (pgm) => {
    pgm.dropTable('items');
    pgm.dropColumn('users', 'cart_id');
    pgm.dropTable('cart');
    pgm.dropTable('users');
    pgm.dropTable('products');
    pgm.dropTable('plans');
    pgm.dropTable('payments');
};
