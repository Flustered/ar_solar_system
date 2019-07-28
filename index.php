<?php

$projectRoot = $_SERVER['SCRIPT_URL'];

$thisSpot = $_GET["spot"];
if (!$thisSpot) {
  $thisSpot = "a";
}

$spotData = json_decode(file_get_contents("params.json"));
$mySpot = $spotData->$thisSpot;

$runMode = $spotData->runMode;


//echo "<pre>" . print_r($mySpot, 1) . "</pre>";
?>

<html lang="en">

<head>
  <meta charset="utf-8">

  <title>SolAR System - <?php echo $mySpot->title ?></title>
  <meta name="description" content="SolAR System">
  <meta name="author" content="fluster.co.uk">

  <link rel="stylesheet" href="styles.css?v=1.0">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"> </script>

  <!-- jQuery Modal -->
   <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.css" /> 


  <?php
  
  if (property_exists($mySpot, "next")) {
    $nextlinkID = $projectRoot.'?spot=' . $mySpot->next->id;
  } else {
    $nextlinkID = "#";
  }

  if (property_exists($mySpot, "previous")) {
    $previouslinkID = $projectRoot.'?spot=' . $mySpot->previous->id;
  } else {
    $previouslinkID = "#";
  }

  ?>

</head>

<body style='margin : 0px; overflow: hidden;'>

  <div class="topOverlay">
    <span class="title">SolAR System</span>
    <a href="#ex1" rel="modal:open"><span id="currentSpotName"><?php echo $mySpot->title ?></span> <img height="15px" src="assets/images/icon-info-grey.png" /></a>
    <?php if ($runMode == "test"){?>
    <a id="previousLink" href="<?php echo $previouslinkID ?>">
      <</a> <a id="nextLink" href="<?php echo $nextlinkID ?>">>
    </a>
    <?php } ?>

    <a class='reload' href="#" onClick="location.reload();">Reload</a>

    <!-- Modal HTML embedded directly into document -->
    <div id="ex1" class="modal">
      <p>
        <h2><span id="popSpotName"><?php echo $mySpot->title ?></span></h2>
        <span id="popSpotDescription"><?php echo $mySpot->description ?></span>
      </p>

    </div>

  </div>

  <iframe frameborder="0" id="frameHolder" width="100%" height="100%" src="content/holder.php?spot=<?php echo $thisSpot ?>">
  </iframe>


</body>

</html>