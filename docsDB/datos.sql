-- Llenado de la tabla roles
INSERT INTO roles (name, description) VALUES
('user', 'Usuario estándar'),
('admin', 'Administrador'),
('cliente', 'Cliente regular');

-- Llenado de la tabla categories
INSERT INTO categories (name, description) VALUES
('minibordados', 'Bordados en miniatura'),
('fotografias bordadas', 'Fotografías personalizadas bordadas'),
('talleres', 'Talleres de bordado'),
('bordados en bastidor', 'Bordados en bastidor'),
('trabajos por pedido', 'Bordados personalizados por pedido');

-- Llenado de la tabla users
INSERT INTO users (first_name, last_name, email, password, roles_id) VALUES
('Juan', 'Perez', 'juan@example.com', '12345678', 1),
('María', 'González', 'maria@example.com', 'pass1234', 3),
('Carlos', 'Martínez', 'carlos@example.com', 'pass5678', 3),
('Laura', 'López', 'laura@example.com', '1234pass', 3),                                                                                                                                                                                                                                                                                                 
('Pedro', 'Rodríguez', 'pedro@example.com', '4567pass', 3),
('Ana', 'Sánchez', 'ana@example.com', 'passabcd', 3),
('Sofía', 'Romero', 'sofia@example.com', 'passefgh', 3),
('Diego', 'Gómez', 'diego@example.com', 'abcdpass', 3),
('Lucía', 'Díaz', 'lucia@example.com', 'efghpass', 3),
('Marta', 'Muñoz', 'marta@example.com', '87654321', 3);

-- Llenado de la tabla products
INSERT INTO products (title, description, img, price, categories_id, colors, discount) VALUES
('Mascotas', 'Bordado en bastidor de tus mascotas', 'imagen1.jpg', '10.50', 1, 'Rojo, Azul', '0.10'),
('Fotos Bordadas', 'Tus fotos preferidas, con detalles bordados que realzan el espiritu de la imagen', 'imagen2.jpg', 20.75, 2, 'Verde', NULL),
('Personas Mágicas', 'Fotos tuyas o de una persona que quieras homenajear', 'imagen3.jpg', 15.99, 3, 'Negro, Blanco', 0.05),
('Nombres bordados', 'Un regalo ideal para el nacimiento de esa personita especial', 'imagen4.jpg', 30.00, 4, 'Amarillo', NULL),
('Talleres de bordado y algo mas', 'No dejes de seguirnos en nuestras redes, para enterarte de nuestros talleres', 'imagen5.jpg', 25.49, 5, 'Gris', 0.15),
('Mini Dijes Bordados', 'Collares, o adornos colgantes, con diseños propios y a pedido', 'imagen6.jpg', 18.75, 1, 'Azul', NULL),
('1 de Agosto', 'Foto propia sobre el ritual del 1º de Agosto en honor a la Pachamama, intervenida con bordado sobre papel.', 'imagen7.jpg', 12.99, 2, 'Rojo, Verde', 0.08),
('Rositas', 'Dije minibordado en bastidor, consultame por otros modelos en stock, o por la realización de motivos a pedido.', 'imagen8.jpg', 22.00, 3, 'Negro', NULL),
('Producto 9', 'Descripción del producto 9', 'imagen9.jpg', 17.25, 4, 'Blanco', 0.12),
('Producto 10', 'Descripción del producto 10', 'imagen10.jpg', 28.50, 5, 'Amarillo, Gris', 0.20),
('Producto 11', 'Descripción del producto 11', 'imagen11.jpg', 14.99, 1, 'Verde', NULL),
('Producto 12', 'Descripción del producto 12', 'imagen12.jpg', 32.75, 2, 'Rojo', 0.25),
('Producto 13', 'Descripción del producto 13', 'imagen13.jpg', 19.99, 3, 'Negro, Blanco', NULL),
('Producto 14', 'Descripción del producto 14', 'imagen14.jpg', 27.00, 4, 'Amarillo, Gris', 0.18),
('Producto 15', 'Descripción del producto 15', 'imagen15.jpg', 21.50, 5, 'Azul, Rojo', NULL),
('Producto 16', 'Descripción del producto 16', 'imagen16.jpg', 16.75, 1, 'Verde, Negro', 0.07),
('Producto 17', 'Descripción del producto 17', 'imagen17.jpg', 11.99, 2, 'Rojo, Azul', NULL),
('Producto 18', 'Descripción del producto 18', 'imagen18.jpg', 23.00, 3, 'Amarillo', 0.14),
('Producto 19', 'Descripción del producto 19', 'imagen19.jpg', 18.25, 4, 'Gris', NULL),
('Producto 20', 'Descripción del producto 20', 'imagen20.jpg', 29.50, 5, 'Blanco, Verde', 0.22);

-- Llenado de la tabla orders
INSERT INTO orders (users_id, order_date, payment_method, status, adress_order) VALUES
(1, '2024-01-01', 'Tarjeta de crédito', 'En proceso', 'Calle 123, Ciudad'),
(2, '2024-01-02', 'Transferencia bancaria', 'Enviado', 'Av. Principal 456, Pueblo'),
(3, '2024-01-03', 'Efectivo', 'Entregado', 'Ruta 789, Villa'),
(4, '2024-01-04', 'Tarjeta de crédito', 'En proceso', 'Boulevard 321, Pueblo'),
(5, '2024-01-05', 'Transferencia bancaria', 'Enviado', 'Calle 4567, Ciudad'),
(1, '2024-01-06', 'Tarjeta de crédito', 'En proceso', 'Av. Libertador 123, Ciudad'),
(2, '2024-01-07', 'Efectivo', 'Entregado', 'Av. Bolívar 456, Pueblo'),
(3, '2024-01-08', 'Transferencia bancaria', 'En proceso', 'Calle Principal 789, Villa'),
(4, '2024-01-09', 'Efectivo', 'Enviado', 'Av. Central 321, Pueblo'),
(5, '2024-01-10', 'Tarjeta de crédito', 'Entregado', 'Calle 7890, Ciudad'),
(1, '2024-01-11', 'Transferencia bancaria', 'Enviado', 'Ruta 12, Villa'),
(2, '2024-01-12', 'Tarjeta de crédito', 'En proceso', 'Calle 345, Pueblo'),
(3, '2024-01-13', 'Efectivo', 'Entregado', 'Av. Principal 678, Ciudad'),
(4, '2024-01-14', 'Tarjeta de crédito', 'En proceso', 'Boulevard 901, Villa'),
(5, '2024-01-15', 'Transferencia bancaria', 'Enviado', 'Av. Libertador 234, Ciudad'),
(1, '2024-01-16', 'Efectivo', 'Entregado', 'Av. Bolívar 567, Pueblo'),
(2, '2024-01-17', 'Transferencia bancaria', 'En proceso', 'Calle Principal 890, Ciudad'),
(3, '2024-01-18', 'Tarjeta de crédito', 'Enviado', 'Boulevard 1234, Villa'),
(4, '2024-01-19', 'Efectivo', 'Enviado', 'Av. Central 567, Ciudad'),
(5, '2024-01-20', 'Tarjeta de crédito', 'Entregado', 'Calle 890, Pueblo');

-- Llenado de la tabla orders_detail
INSERT INTO orders_detail (orders_id, products_id, quantity, price, discount) VALUES
(1, 1, 2, 20.00, 0.05),
(1, 3, 1, 15.99, NULL),
(2, 2, 3, 62.25, 0.10),
(2, 5, 1, 25.49, NULL),
(3, 4, 1, 30.00, NULL),
(4, 6, 2, 37.50, 0.15),
(4, 8, 1, 22.00, NULL),
(5, 10, 2, 57.00, 0.20),
(5, 12, 1, 32.75, NULL),
(6, 14, 3, 81.00, 0.18),
(6, 16, 1, 16.75, NULL),
(7, 18, 1, 23.00, NULL),
(7, 20, 2, 59.00, 0.22),
(8, 1, 2, 20.00, 0.05),
(8, 3, 1, 15.99, NULL),
(9, 2, 3, 62.25, 0.10),
(9, 5, 1, 25.49, NULL),
(10, 4, 1, 30.00, NULL),
(11, 6, 2, 37.50, 0.15),
(11, 8, 1, 22.00, NULL),
(12, 10, 2, 57.00, 0.20),
(12, 12, 1, 32.75, NULL),
(13, 14, 3, 81.00, 0.18),
(13, 16, 1, 16.75, NULL),
(14, 18, 1, 23.00, NULL),
(14, 20, 2, 59.00, 0.22),
(15, 1, 2, 20.00, 0.05),
(15, 3, 1, 15.99, NULL),
(16, 2, 3, 62.25, 0.10),
(16, 5, 1, 25.49, NULL),
(17, 4, 1, 30.00, NULL),
(18, 6, 2, 37.50, 0.15),
(18, 8, 1, 22.00, NULL),
(19, 10, 2, 57.00, 0.20),
(19, 12, 1, 32.75, NULL),
(20, 14, 3, 81.00, 0.18),
(20, 16, 1, 16.75, NULL);

-- Llenado de la tabla stock
INSERT INTO stock (products_id, quantity) VALUES
(1, 100),
(2, 50),
(3, 75),
(4, 30),
(5, 60),
(6, 90),
(7, 25),
(8, 40),
(9, 80),
(10, 20),
(11, 70),
(12, 35),
(13, 55),
(14, 45),
(15, 85),
(16, 65),
(17, 95),
(18, 15),
(19, 100),
(20, 50);
