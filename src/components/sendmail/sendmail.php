<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require './phpmailer/src/Exception.php';
require './phpmailer/src/PHPMailer.php';
require './phpmailer/src/SMTP.php';
//Load Composer's autoloader
require 'vendor/autoload.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
   $mail->CharSet = 'UTF-8';
   $mail->setLanguage('en', 'phpmailer/language/');
   $mail->IsHTML(true);

   //Server settings
   // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
   $mail->isSMTP();                                            //Send using SMTP
   $mail->Host = 'smtp.gmail.com';                     //Set the SMTP server to send through
   $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
   $mail->Username   = 'lospokess@gmail.com';                    //SMTP username
   $mail->Password   = 'jwonucjrfsksuihm';                               //SMTP password
   $mail->Port       = '587';                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
   $mail->SMTPSecure = 'TLS';            //Enable implicit TLS encryption
   // $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
   
   //Recipients
   $mail->setFrom('lospokess@gmail.com', 'Iojik Jenia');
   // $mail->addAddress('joe@example.net', 'Joe User');     //Add a recipient
   $mail->addAddress('kordunianu.e@gmail.com');               //Name is optional
   // $mail->addReplyTo('info@example.com', 'Information');
   // $mail->addCC('cc@example.com');
   // $mail->addBCC('bcc@example.com');
$mail->Subject = "E-mail from Portfolio";

   //Attachments
   // $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
   // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name
   $body = `<h1>Hi! It's Kordunianu Eugene!</h1>`;

   if(trim(!empty($_POST['name']))){
      $body .= "<p>Name: <strong>".$_POST['name']."</strong></p>";
   }
   if(trim(!empty($_POST['email']))){
      $body .= "<p>E-mail: <strong>".$_POST['email']."</strong></p>";
   }
   if(trim(!empty($_POST['message']))){
      $body .= "<p>Message: <strong>".$_POST['message']."</strong></p>";
   }
   if(trim(!empty($_POST['like']))){
      $body .= "<p>You like me portfolio?: <strong>".$_POST['like']."</strong></p>";
   }
   if(trim(!empty($_POST['thebest']))){
      $body .= "<strong><a href='https://www.youtube.com/@AmnesiaQ-wp3wu'>#ukrainianrap</a>I will be back!</strong>";
   }
   
   // Add FIle
   if(trim(!empty($_FILES['image']['tmp_name']))){
      $filesTmpName = $_FILES['image']['tmp_name'];
      $fileName = $_FILES['image']['tmp_name'];
      $mail->addAttachment($filesTmpName, $fileName);
   }


   //Content
   // $mail->isHTML(true);                                  //Set email format to HTML
   // $mail->Subject = 'Here is the subject';
   $mail->Body = $body;

   // $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

   $mail->send();
   $mail->smtpClose(); 
   echo 'Message has been sent';
} catch (Exception $e) {
   echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>