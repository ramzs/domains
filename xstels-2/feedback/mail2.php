<?php

$recepient = "freeramzs@mail.ru";
$sitename = "Х-Стелс";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$ref = $_SERVER['HTTP_REFERER'];
$message = "Имя: $name \nТелефон: $phone \nСтраница: $ref";

$pagetitle = "Забронировать с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: x-stels<info@rus-extreme.ru>\r\n");