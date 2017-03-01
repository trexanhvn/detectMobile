function running(json) {
    var client = new ClientJS();
    var infoDevice = {
        browser: client.getBrowser(),
        OS: client.getOS(),
        OSVersion: client.getOSVersion(),
        device: client.getDevice(),
        CPU: client.getCPU(),
        isMobile: client.isMobile(),
        isMobileMajor: client.isMobileMajor(),
        isMobileAndroid: client.isMobileAndroid(),
        isMobileOpera: client.isMobileOpera(),
        isMobileWindows: client.isMobileWindows(),
        isMobileBlackBerry: client.isMobileBlackBerry(),
        isMobileIOS: client.isMobileIOS(),
        isIphone: client.isIphone(),
        isIpad: client.isIpad(),
        isIpod: client.isIpod(),
        screenPrint: client.getScreenPrint(),
        colorDepth: client.getColorDepth(),
        currentResolution: client.getCurrentResolution(),
        availableResolution: client.getAvailableResolution(),
        deviceXDPI: client.getDeviceXDPI(),
        deviceYDPI: client.getDeviceYDPI(),
        plugins: client.getPlugins(),
        isJava: client.isJava(),
        javaVersion: client.getJavaVersion(),
        isFlash: client.isFlash(),
        flashVersion: client.getFlashVersion(),
        isSilverlight: client.isSilverlight(),
        silverlightVersion: client.getSilverlightVersion(),
        isMimeTypes: client.isMimeTypes(),
        mimeTypes: client.getMimeTypes(),
        fonts: client.getFonts(),
        isLocalStorage: client.isLocalStorage(),
        isSessionStorage: client.isSessionStorage(),
        isCookie: client.isCookie(),
        timeZone: client.getTimeZone(),
        language: client.getLanguage(),
        isCanvas: client.isCanvas(),
        canvasPrint: client.getCanvasPrint(),
        
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