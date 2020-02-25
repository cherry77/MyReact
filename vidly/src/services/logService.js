// import Raven from 'raven.js'

function init(){
    // Raven.config("http://", {
    //     release: "1-0-0",
    //     environment: "development-test"
    // }).install();
}

function log(error){
    // Raven.captureException(error);
    console.log(error);
}

export default {
    init,
    log
}
