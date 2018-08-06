<?php require_once 'lib/swift_required.php';

  $transport = Swift_SmtpTransport::newInstance('ssl://smtp.gmail.com', 465)
      ->setUsername('contactoefflex@gmail.com')
      ->setPassword('con.efflex.$140382');

  $mailer = Swift_Mailer::newInstance($transport);

  $message = Swift_Message::newInstance('Contacto Efflex: ' . $_POST['name'])
      ->setFrom(array('contactoefflex@gmail.com' => 'Contacto Efflex'))
      ->setTo(array('contactoefflex@gmail.com' => 'Receiver Name'))
      ->setBody('<b>Nombre:</b>'.$_POST['name'].'<br /><b>Email:</b>'.$_POST['email'].'<br /><b>Teléfono:</b>'.$_POST['phone'].'<br /><b>Mensaje:</b>'.$_POST['message'], 'text/html');

  $result = $mailer->send($message);
  echo $result;

?>
