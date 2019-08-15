-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 15, 2019 at 07:24 AM
-- Server version: 10.1.32-MariaDB
-- PHP Version: 5.6.36

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `imm`
--

-- --------------------------------------------------------

--
-- Table structure for table `cartItems`
--

CREATE TABLE `cartItems` (
  `id` int(255) NOT NULL,
  `shoppingCartId` int(255) NOT NULL,
  `productId` int(255) NOT NULL,
  `quantity` int(255) NOT NULL,
  `name` varchar(11) NOT NULL,
  `price` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cartItems`
--

INSERT INTO `cartItems` (`id`, `shoppingCartId`, `productId`, `quantity`, `name`, `price`, `createdAt`, `updatedAt`) VALUES
(1, 4, 12, 12, 'test_produc', 0, '2019-08-15 05:12:59', '2019-08-15 05:12:59');

-- --------------------------------------------------------

--
-- Table structure for table `shopping_carts`
--

CREATE TABLE `shopping_carts` (
  `id` int(255) NOT NULL,
  `userId` int(255) NOT NULL,
  `subtotal` varchar(11) NOT NULL,
  `discounts` varchar(11) NOT NULL,
  `taxes` varchar(11) NOT NULL,
  `total` varchar(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `shopping_carts`
--

INSERT INTO `shopping_carts` (`id`, `userId`, `subtotal`, `discounts`, `taxes`, `total`, `createdAt`, `updatedAt`) VALUES
(1, 11, 'test', 'test', 'test', 'test', '2019-08-15 05:05:57', '2019-08-15 05:05:57'),
(2, 11, 'test', 'test', 'test', 'test', '2019-08-15 05:06:28', '2019-08-15 05:06:28'),
(3, 11, 'test', 'test', 'test', 'test', '2019-08-15 05:12:30', '2019-08-15 05:12:30'),
(4, 11, 'test', 'test', 'test', 'test', '2019-08-15 05:12:59', '2019-08-15 05:12:59');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cartItems`
--
ALTER TABLE `cartItems`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `shopping_carts`
--
ALTER TABLE `shopping_carts`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cartItems`
--
ALTER TABLE `cartItems`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `shopping_carts`
--
ALTER TABLE `shopping_carts`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
