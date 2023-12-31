<?php include 'header.php'; ?>
<link rel="stylesheet" href="css/seoPages.css">

<div id="formSection">
    <form>
        <h2>Service SEO</h2>
        <div class="inputs">
            <label>Title</label>
            <input id="seoTitle" name="seoTitle" type="text" placeholder="Type Title">
        </div>
        <div class="inputs">
            <label>Keywords</label>
            <input id="seoKeywords" name="seoKeywords" type="text" placeholder="Type Keywords">
        </div>
        <div class="inputs">
            <label>Description</label>
            <input id="seoAuthor" name="seoAuthor" type="text" placeholder="Description">
        </div>
        <input type="text" id="seoPageID" name="seoPage" value="Service" hidden>
        <button>Submit</button>
    </form>
</div>


<script src="js/seoPages.js"></script>
<script src="js/seoServices.js"></script>