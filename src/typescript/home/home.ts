import '../classes/asyncMessager';

window.onload = async function(): Promise<void> {
    console.log("Init in home Typescript");
    try {

        let localMessager = new asyncMessager("Francis");
        
        let asyncMessage = await localMessager.getAsyncMessage("Hello buddy");
        console.log(asyncMessage);
        console.log(localMessager.supperArray);

    } catch(err) {
        
        console.log(`ERROR: - ${err}`);

    }
};