<?php
  $to = "aryasarkar60@gmail.com"; // Replace with your email address
  $subject = "Message from Website";

  if (isset($_POST["name"]) && isset($_POST["email"]) && isset($_POST["message"])) {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $headers = "From: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    mail($to, $subject, $message, $headers);

    echo "Email sent successfully!";
  } else {
    echo "Error: Please fill in all fields.";
  }
?>