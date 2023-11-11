<?php
if(isset($_POST["input_content"])) {
    // Code
}else if(isset($_FILES["file"])) {
    $imagesFolder = "images/";
    $uploadedImages = [];

    foreach($_FILES["file"]["error"] as $key => $error) {
        if($error == UPLOAD_ERR_OK) {
            $tmp_name = $_FILES["file"]["tmp_name"][$key];
            $name = basename($_FILES["file"]["name"][$key]);
            $uploadPath = $imagesFolder . $name;

            if(move_uploaded_file($tmp_name, $uploadPath)) {
                $uploadedImages[] = $name;
            }
        }
    }

}
