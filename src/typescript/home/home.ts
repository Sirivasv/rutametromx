import {AsyncMessager} from "../classes/AsyncMessager";

window.onload = async function(this: GlobalEventHandlers, ev: Event): Promise<void> {
    // tslint:disable-next-line:no-console
    console.log("Init in home Typescript");
    try {

        const localMessager = new AsyncMessager("Francis");

        const asyncMessage = await localMessager.getAsyncMessage("Hello buddy");
        // tslint:disable-next-line:no-console
        console.log(asyncMessage);
        // tslint:disable-next-line:no-console
        console.log(localMessager.getSuperArray());

    } catch (err) {

        // tslint:disable-next-line:no-console
        console.log(`ERROR: - ${err}`);

    }

};
