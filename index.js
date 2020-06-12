// elements counter
var e = 0;
// Tables contenant
var portfolioImg = ["./images/image-tanya.jpg", "./images/image-john.jpg"];
var descriptionP = ['“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”','“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”'];
var descriptionName = ["Tanya Sinclair","John Tarkpor"];
var decriptionJob = ["UX Engineer","Junior Front-end Developer"];

// Assign first values
$(".portfolio").attr("src",portfolioImg[e]);
$(".descriptionText").text(descriptionP[e]);
$(".name").text(descriptionName[e]);
$(".job").text(decriptionJob[e]);

// Next Element Listener
$(".iconNext").click(function(){
    if (e < 1) {

        // Animate photo
        $(".portfolio").fadeOut(function(){
            $(".portfolio").attr("src",portfolioImg[e]);
        });
        $(".portfolio").fadeIn(function(){
            $(".portfolio").attr("src",portfolioImg[e+1]);
        });

        // Animate Description
        $(".descriptionText").fadeOut(function(){
            $(".descriptionText").text(descriptionP[e]);
        });
        $(".descriptionText").fadeIn(function(){
            $(".descriptionText").text(descriptionP[e+1]);
        });
        
        // Animate Name
        $(".name").fadeOut(function(){
            $(".name").text(descriptionName[e]);
        });
        $(".name").fadeIn(function(){
            $(".name").text(descriptionName[e+1]);
        });
        
        // Animate Title
        $(".job").fadeOut(function(){
            $(".job").text(decriptionJob[e]);
        });
        $(".job").fadeIn(function(){
            $(".job").text(decriptionJob[e+1]);
        });
        e++;  
    }
});

// Previous Element Listener
$(".iconPrev").click(function(){
    if (e > 0) {
        // Animate photo
        $(".portfolio").fadeOut(function(){
            $(".portfolio").attr("src",portfolioImg[e]);
        });
        $(".portfolio").fadeIn(function(){
            $(".portfolio").attr("src",portfolioImg[e-1]);
        });

        // Animate Description
        $(".descriptionText").fadeOut(function(){
            $(".descriptionText").text(descriptionP[e]);
        });
        $(".descriptionText").fadeIn(function(){
            $(".descriptionText").text(descriptionP[e-1]);
        });
        
        // Animate Name
        $(".name").fadeOut(function(){
            $(".name").text(descriptionName[e]);
        });
        $(".name").fadeIn(function(){
            $(".name").text(descriptionName[e-1]);
        });
        
        // Animate Title
        $(".job").fadeOut(function(){
            $(".job").text(decriptionJob[e]);
        });
        $(".job").fadeIn(function(){
            $(".job").text(decriptionJob[e-1]);
        });
        e--;  
    }
});