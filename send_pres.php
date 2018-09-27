<?
 if($_SERVER["REQUEST_METHOD"] == "POST")
{
	function mail_utf8($to, $from_user, $from_email, $subject = '(No subject)', $message = '')
   {
      $from_user = "=?UTF-8?B?".base64_encode($from_user)."?=";
      $subject = "=?UTF-8?B?".base64_encode($subject)."?=";

      $headers = "From: $from_user <$from_email>\r\n".
               "MIME-Version: 1.0" . "\r\n" .
               "Content-type: text/html; charset=UTF-8" . "\r\n";

     return mail($to, $subject, $message, $headers, "-f".$from_email);
   }


session_start();

$name = $_POST["name"];
$tel = $_POST["tel"];


$subject = 'Заявка на презентацию - ЖК Первый Николаевский';
//$from = 'zk-moskovskiy.novmetr.ru';


$error = array();

if (count($error))
{
    echo implode('<br />',$error);
}else
{
    // Отправка email
	mail_utf8( 'nahodkaekbb@gmail.com, lobudova@nahodka.pro, 79222220707@ya.ru',
		'ЖК Первый Николаевский',
		'admin@nahodka-an.ru',
		$subject,
		'<b>Данные клиента:</b><br>Имя: '.$name.'<br>Телефон: '.$tel);

    echo 'true';
}

$roistatData = array(
    'roistat' => isset($_COOKIE['roistat_visit']) ? $_COOKIE['roistat_visit'] : null,
    'key'     => 'NTQwODo3ODE1NDo3MzlhNWVlN2E3NjQyNzgxYWUzOTYxMGQ4NjllMWEzMA==', // Замените SECRET_KEY на секретный ключ из пункта меню Настройки -> Интеграция со сделками в нижней части экрана и строчке Ключ для интеграций
    'title'   => 'Заявка на презентацию - ЖК Первый Николаевский',
    'comment' => 'Комментарий к заявке',
    'name'    => $name,
    'phone'   => $tel,
	'email'   => $email,
    'is_need_callback' => '0', // Для автоматического использования обратного звонка при отправке контакта и сделки нужно поменять 0 на 1
    'fields'  => array(
    // Массив дополнительных полей, если нужны, или просто пустой массив

    ),
);

file_get_contents("https://cloud.roistat.com/api/proxy/1.0/leads/add?" . http_build_query($roistatData));

}
?>
