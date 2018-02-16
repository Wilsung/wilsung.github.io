<?php
	print_r($_POST);
	$first_name = $_POST['first_name'];
	$last_name = $_POST['last_name'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	$from = "From: ".$email;
	$to = 'wou123@yahoo.com';
	$subject = $_POST['subject'];

	$body = "From: $first_name $last_name\n E-mail: $email\n Message:\n $message";

	if (isset($_POST['submit'])){
		mail($to, $subject, $body, $from);
		echo "<p>Mail sent!</p>";
	}
?>