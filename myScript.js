function loadData(name){
    if(name=="btn1"){
        document.getElementById("para").innerHTML ="The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface. The iPhone runs the iOS operating system, and in 2021 when the iPhone 13 was introduced, it offered up to 1 TB of storage and a 12-megapixel camera.";
        document.getElementById("Image").src ="images/newip1.jpg";
    }

    else if(name=="btn2"){
        document.getElementById("para").innerHTML ="Nokia Corporation is the world's largest manufacturer of mobile phones, serving customers in 130 countries. Nokia is divided into four business groups: Mobile Phones, Multimedia, Enterprise Solutions, and Networks. The Mobile Phones group markets wireless voice and data products in consumer and corporate markets.";
        document.getElementById("Image").src ="images/newnokia.jpg";

    }
    else if(name=="btn3"){
        document.getElementById("para").innerHTML = "The best Oppo phones stand out from the crowd thanks to their vibrant use of colors. Oppo phones aren't just about looks either with a plethora of useful features, from great battery life to reliable camera capabilities, excellent performance, and even a few quirky features like a pop-up camera";
        document.getElementById("image").src="images/newoppo.webp";

    }
    else if(name=="btn4"){
        document.getElementById("para").innerHTML ="Samsung, South Korean company that is one of the world's largest producers of electronic devices. Samsung specializes in the production of a wide variety of consumer and industry electronics, including appliances, digital media devices, semiconductors, memory chips, and integrated systems.";
        document.getElementById("image").src ="images/newsams.webp";
    }

    else {
        alert("invalid!!"); 
    }

}

 