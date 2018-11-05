<?php

$recepient = "freeramzs@mail.ru";
$sitename = "МаксАр";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$ploshad = trim($_POST["ploshad"]);
$ref = $_SERVER['HTTP_REFERER'];
$message = '
                <html>
                    <head>
                        <title>callback</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Телефон: '.$_POST['phone'].'</p>
                        <p>Площадь: '.$_POST['ploshad'].' кв/м</p>
                    </body>
                </html>';

$pagetitle = "Заявка на просчет с сайта \"$sitename\"";
$headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
$headers .= "From: МаксАр <from@example.com>\r\n"; //Наименование и почта отправителя
mail($recepient, $pagetitle, $message, $headers);