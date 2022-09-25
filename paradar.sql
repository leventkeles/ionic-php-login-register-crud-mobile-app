-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Anamakine: 127.0.0.1
-- Üretim Zamanı: 06 Haz 2022, 13:27:16
-- Sunucu sürümü: 10.4.18-MariaDB
-- PHP Sürümü: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Veritabanı: `paradar`
--

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `advert`
--

CREATE TABLE `advert` (
  `id` int(11) NOT NULL,
  `advert_title` varchar(120) CHARACTER SET utf8 COLLATE utf8_turkish_ci NOT NULL,
  `advert_desc` longtext CHARACTER SET utf8 NOT NULL,
  `location` varchar(32) CHARACTER SET utf8 NOT NULL,
  `price` int(12) NOT NULL,
  `deadline` varchar(16) CHARACTER SET utf8 NOT NULL,
  `workarea` varchar(36) CHARACTER SET utf8 COLLATE utf8_turkish_ci NOT NULL,
  `userId_FK` int(11) NOT NULL,
  `invertImg` varchar(100) CHARACTER SET utf8 DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Tablo döküm verisi `advert`
--

INSERT INTO `advert` (`id`, `advert_title`, `advert_desc`, `location`, `price`, `deadline`, `workarea`, `userId_FK`, `invertImg`) VALUES
(93, 'Ev Temizliği Yapacak Kişi Aranıyor', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'Çankaya', 546, '2022-08-04T22:23', 'Temizlik', 18, '1654370732daginikodaresmiii.jpg'),
(133, 'PHP Websitesi için Hatalar Düzeltilecek', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'Yenimahalle', 400, '2022-06-20T23:24', 'Yazılım', 19, '1654374309PHP_Logo.png'),
(134, 'Eşyalar Eryaman\'a Taşınacak', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'Gölbaşı', 1000, '2022-07-04T23:27', 'Taşıma', 19, '1654374540download.jpg'),
(135, 'Bahçedeki Çimler Biçilecek 500mt2', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'Etimesgut', 350, '2022-06-24T23:29', 'Bakım', 19, '1654374728grass-014.jpg'),
(137, 'Part Time Barista Olacak Öğrenci Aranıyor', 'Deneme denme edeneme ', 'Çankaya', 1000, '2022-06-24T23:29', 'Bakım', 17, '1654503778parttimebarista.jpg');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `username` varchar(250) CHARACTER SET utf8 NOT NULL,
  `password` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `status` varchar(250) CHARACTER SET utf8 NOT NULL,
  `created_at` varchar(250) CHARACTER SET utf8 NOT NULL,
  `fullname` varchar(100) CHARACTER SET utf8 NOT NULL,
  `profile_desc` text CHARACTER SET utf8 DEFAULT NULL,
  `user_phone` varchar(30) CHARACTER SET utf8 NOT NULL,
  `user_mail` varchar(64) CHARACTER SET utf8 NOT NULL,
  `user_birth` varchar(8) CHARACTER SET utf8 NOT NULL,
  `user_tc` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Tablo döküm verisi `users`
--

INSERT INTO `users` (`user_id`, `username`, `password`, `status`, `created_at`, `fullname`, `profile_desc`, `user_phone`, `user_mail`, `user_birth`, `user_tc`) VALUES
(17, 'levantino', 'deneme', 'y', '2022-05-20', 'Levantino Keles', 'Levent ekels güncel', '5462734100', 'levent@pww', '1999-05-', 2135326342),
(18, 'ahmetkocer', 'deneme', 'y', '2022-06-04', 'Ahmet  KOÇER', NULL, '5462734188', 'ahmetkocer@mail.com', '1974-02-', 2147483647),
(19, 'umutyildiz', 'deneme', 'y', '2022-06-04', 'Umut Yıldız', 'Dr Yildiz is working at the Spectrum Engineering group of Communication Architectures and Research section of NASA?s Jet Propulsion Laboratory (JPL), California Institute of Technology. He received his Bachelors degree from the University of Ankara, Masters degree from the Kapteyn Astronomical Institute (University of Groningen) and his PhD from the Leiden Observatory (Leiden University) on the field of Molecular Astrophysics. ', '54262734152', 'umutyildiz@mail.com', '1982-06-', 2147483647),
(23, 'deneme', 'deneme', 'y', '2022-06-06', 'deneme deneme', 'deneme', '54637400', 'denem@y', '2001-06-', 2147483647);

--
-- Dökümü yapılmış tablolar için indeksler
--

--
-- Tablo için indeksler `advert`
--
ALTER TABLE `advert`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- Dökümü yapılmış tablolar için AUTO_INCREMENT değeri
--

--
-- Tablo için AUTO_INCREMENT değeri `advert`
--
ALTER TABLE `advert`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=152;

--
-- Tablo için AUTO_INCREMENT değeri `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
