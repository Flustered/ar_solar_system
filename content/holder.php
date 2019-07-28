<?php

$thisSpot = $_GET["spot"];
if (!$thisSpot) {
    $thisSpot = "a";
}

$spotData = json_decode(file_get_contents("../params.json"));
$mySpot = $spotData->$thisSpot;

$projectRoot = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://{$_SERVER['HTTP_HOST']}{$_SERVER['REQUEST_URI']}";


?>
<html>

<head>


    <!-- include aframe obviously -->
    <script src="https://aframe.io/releases/0.9.2/aframe.min.js"></script>


    <!-- include ar.js for a-frame -->
    <script src="https://jeromeetienne.github.io/AR.js/aframe/build/aframe-ar.js"></script>


    <script lang="javascript">

    </script>

</head>

<body style='margin : 0px; overflow: hidden;'>

    <a-scene arjs='sourceType: webcam; debugUIEnabled: false;'>
        <!-- <a-scene stats> -->


        <a-assets>
            <a-asset-item id="assetHolder" src="<?php echo $projectRoot ?>assets/<?php echo $mySpot->asset?>"></a-asset-item>
        </a-assets>

        <!-- use your gltf model -->
        <a-entity 
            gltf-model="#assetHolder" 
            <?php if (property_exists($mySpot, "rotation")){ echo 'rotation="'.$mySpot->rotation.'"';}?> 
            <?php if (property_exists($mySpot, "scale")){ echo 'scale="'.$mySpot->scale.'"';}?> 
            <?php if (property_exists($mySpot, "position")){ echo 'position="'.$mySpot->position.'"';}?> 
            <?php if (property_exists($mySpot, "animation")){
                 echo 'animation="'.$mySpot->animation.'"';}
                 ?>
            >
        </a-entity>


        <!-- define a camera which will move according to the marker position -->
        <a-marker-camera preset='hiro'></a-marker-camera>
    </a-scene>



</body>