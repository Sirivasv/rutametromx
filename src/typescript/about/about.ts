import { AsyncMessager } from "../classes/asyncMessager";

window.onload = async (): Promise<void> => {
    // tslint:disable-next-line:no-console
    console.log("Init in home Typescript");
    try {

        const localMessager: AsyncMessager = new AsyncMessager("Saul");

        const asyncMessage: string = await localMessager.getAsyncMessage("Bye buddy");
        // tslint:disable-next-line:no-console
        console.log(asyncMessage);
        // tslint:disable-next-line:no-console
        console.log(localMessager.getSuperArray());

    } catch (err) {

        // tslint:disable-next-line:no-console
        console.log(`ERROR: - ${err}`);

    }
};
