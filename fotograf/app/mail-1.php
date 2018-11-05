<?php

$recepient = "1daymovie.ru@gmail.com";
$sitename = "Фотограф";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$mes = trim($_POST["message"]);
$ref = $_SERVER['HTTP_REFERER'];
$message = '
                <html>
                    <head>
                        <title>callback</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Электронная почта: '.$_POST['email'].'</p>
                        <p>Сообщение: '.$_POST['mes'].'</p>
                    </body>
                </html>';

$pagetitle = "Отзыв с сайта \"$sitename\"";
$headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
$headers .= "From: Фотограф <from@example.com>\r\n"; //Наименование и почта отправителя
mail($recepient, $pagetitle, $message, $headers);