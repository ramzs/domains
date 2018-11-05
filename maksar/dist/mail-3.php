<?php

$recepient = "freeramzs@mail.ru";
$sitename = "МаксАр";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$service = trim($_POST["service"]);
$ref = $_SERVER['HTTP_REFERER'];
$message = '
                <html>
                    <head>
                        <title>callback</title>
                    </head>
                    <body>
                    	<p>Услуга: '.$_POST['service'].'</p>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Телефон: '.$_POST['phone'].'</p>
                    </body>
                </html>';

$pagetitle = "Заявка услуги с сайта \"$sitename\"";
$headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
$headers .= "From: МаксАр <from@example.com>\r\n"; //Наименование и почта отправителя
mail($recepient, $pagetitle, $message, $headers);