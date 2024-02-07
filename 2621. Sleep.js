/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    return await new Promise(resolve => setTimeout(resolve,millis));
    // .then(resolve => {
    // console.log(millis);
    // })
}


let t = Date.now();
sleep(1000).then(() => console.log(Date.now() - t)); // 1000
