<?php
    $name = $_POST["name"];
    $email = $_POST["email"];
    $sms = $_POST["sms"];

    $arr = array(
        'Имя: ' => $name,
        'E-mail: ' => $email,
        'Сообщение: ' => $sms
    );

    foreach($arr as $key => $value) {
        $txt .= "<b>".$key."</b>".$value."%0A";
    };

    $token = "6247997395:AAH6TEZXOzTRocWvrhaYhaweqk633xMSa_c";
    $chat_id = "-1001986934190";

    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

?>