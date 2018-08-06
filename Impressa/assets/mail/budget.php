<?php require_once 'lib/swift_required.php';

  $transport = Swift_SmtpTransport::newInstance('ssl://smtp.gmail.com', 465)
      ->setUsername('contactoefflex@gmail.com')
      ->setPassword('con.efflex.$140382');

  $mailer = Swift_Mailer::newInstance($transport);

  $message = Swift_Message::newInstance('Contacto Impressa: ' . $_POST['name'])
      ->setFrom(array('contactoefflex@gmail.com' => 'Contacto IMPRESSA'))
      ->setTo(array('ventas@impressa.com.mx' => ''))
      ->setBody('<b>Nombre:</b>'.$_POST['cotName'].'<br /><b>Email:</b>'.$_POST['cotEmail'].'<br /><b>Teléfono:</b>'.$_POST['cotPhone'].'<br /><b>Servicio:</b>'.$_POST['cotService'].'<br /><b>Otros:</b>'.$_POST['cotOtros'].'<br /><b>Acabados:</b>'.$_POST['cotFinishments'].'<br /><b>Tipo de papel:</b>'.$_POST['cotPref'].'<br /><b>Número de tintas (frente y reverso):</b>'.$_POST['cotInk'].'<br /><b>Cantidad:</b>'.$_POST['cotQuantity'], 'text/html');

  $result = $mailer->send($message);
  echo $result;

?>
