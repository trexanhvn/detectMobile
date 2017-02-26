function parse () {
    Parse.initialize("ButterflyWow", "");
    Parse.serverURL = "http://ec2-54-214-97-245.us-west-2.compute.amazonaws.com:1337/parse";

    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({clientIP: getIP()}).then(function(object) {
        alert("yay! it worked");
    })
}
function getIP(json) {
    axios.get('https://api.ipify.org?format=jsonp').then(function (json){
        console.log(testing(json))
    })

}
function testing(data) {
    document.write("My public IP address is: ", data.ip);
}
function handleAction () {
    document.getElementsByClassName('btn-success').addEventListener("click", handleYes());
    document.getElementsByClassName('btn-primary').addEventListener("click", handleNo());
}

function handleYes() {
    console.log('Yes');
}

function handleNo() {
    console.log('No');
}