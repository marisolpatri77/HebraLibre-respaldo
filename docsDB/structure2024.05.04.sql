CREATE DATABASE IF NOT EXISTS `hebralibredb`  DEFAULT CHARACTER SET utf8;
USE `hebralibredb`;
CREATE TABLE IF NOT EXISTS `roles` (
`id` INT NOT NULL auto_increment,
`name` VARCHAR(45) NOT NULL,
`description` VARCHAR (120) NULL,
primary key(`id`)
);
CREATE TABLE IF NOT EXISTS `categories` (
`id` INT NOT NULL auto_increment,
`name` VARCHAR(45) NOT NULL,
`description` VARCHAR (120) NULL,
primary key(`id`)
);
CREATE TABLE IF NOT EXISTS `users` (
`id` INT NOT NULL auto_increment,
`first_name` VARCHAR (45) NOT NULL,
`last_name` VARCHAR(45) NULL,
`email` VARCHAR(45) NOT NULL unique,
`password` VARCHAR(8) NOT NULL,
`roles_id` INT NOT NULL,
`image` VARCHAR(45) NULL,
PRIMARY KEY (`id`),
FOREIGN KEY (`roles_id`) REFERENCES `roles` (`id`)
);
CREATE TABLE IF NOT EXISTS `products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `description` TEXT NOT NULL,
  `img` VARCHAR(45) NOT NULL,
  `price` DECIMAL(10, 2) NULL,
  `categories_id` INT NOT NULL,
  `colors` VARCHAR(20) NULL,
  `discount` DECIMAL(10, 2) NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`categories_id`) REFERENCES `categories` (`id`)
  );
 CREATE TABLE IF NOT EXISTS `orders` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `users_id` INT NOT NULL,
  `order_date` DATE NULL,
  `payment_method` VARCHAR(45) NOT NULL,
  `status` VARCHAR(45) NULL,
  `adress_order` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`users_id`) REFERENCES `users` (`id`)
  );
CREATE TABLE IF NOT EXISTS `orders_detail` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `orders_id` INT NOT NULL,
  `products_id` INT NOT NULL,
  `quantity` INT NOT NULL,
  `price` DECIMAL(10, 2) NOT NULL,
  `discount` DECIMAL(10, 2) NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`orders_id`) REFERENCES `orders` (`id`),
  FOREIGN KEY (`products_id`) REFERENCES `products` (`id`)
  );
 CREATE TABLE IF NOT EXISTS `stock` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `products_id` INT NOT NULL,
  `quantity` INT NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`products_id`) REFERENCES `products` (`id`)
  ); 



