<?php

$recepient = "freeramzs@mail.ru";
$sitename = "Зентиси медиа";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$mes = trim($_POST["message"]);
$ref = $_SERVER['HTTP_REFERER'];
$message = '
                <html>
                    <head>
                        <title>callback</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Телефон: '.$_POST['phone'].'</p>
                    </body>
                </html>';

$pagetitle = "Заказ звонка с сайта \"$sitename\"";
$headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
$headers .= "From: Зентиси медиа <from@example.com>\r\n"; //Наименование и почта отправителя
mail($recepient, $pagetitle, $message, $headers);