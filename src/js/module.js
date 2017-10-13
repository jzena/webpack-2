function hello(){
    console.log('====================================');
    console.log("Hello from JS module");
    console.log('====================================');
}

function sup(){
    console.log('====================================');
    console.log("Hello from JS sup");
    console.log('====================================');
}

export {
    hello,
    sup
};