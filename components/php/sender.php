<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $course = $_POST["course"];
  $name = $_POST["name"];
  $kidName = $_POST["kidName"];
  $tel = $_POST["tel"];

  // Здесь можно добавить код для отправки письма на указанный email с данными формы

  // Пример отправки письма с помощью PHP
  $to = "interfax.salut@gmail.com";
  $subject = "Новая запись на курс $course";
  $body = "Курс: $course\n\nИмя: $name\nИмя ребенка: $kidName\nТелефон для связи: $tel";

  // Отправка письма
  mail($to, $subject, $body);

  // Ответ на запрос (можно возвращать любую информацию)
  echo "Письмо успешно отправлено!";
}
?>