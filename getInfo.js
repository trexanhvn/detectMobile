function running(json) {
    var client = new ClientJS();
    var infoDevice = {
        browser: client.getBrowser(),
        OS: client.getOS(),
        OSVersion: client.getOSVersion(),
        screenResolution: client.getCurrentResolution(),
    }
    var yes = document.getElementsByClassName('question-yes')[0];
    yes.addEventListener("click", function (event) {
        parse(json.ip, event.target, infoDevice);
    });
    var no = document.getElementsByClassName('question-no')[0];
    no.addEventListener("click", function (event) {
        parse(json.ip, event.target, infoDevice)
    });
}

function parse(ipAddress, ele, infoDevice) {
    Parse.initialize("ButterflyWow", "");
    Parse.serverURL = "http://ec2-54-214-97-245.us-west-2.compute.amazonaws.com:1337/parse";
    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({
        idStore: location.search.substr(1).split('id=')[1],
        clientIP: ipAddress,
        answer: ele.getAttribute('val'),
        info: infoDevice
    }).then(function(object) {
        console.log(document.getElementsByClassName('question-section'))
        document.getElementsByClassName('question-section')[0].style.display = 'none'
        document.getElementsByClassName('alert')[0].style.display = 'block'
    })
}