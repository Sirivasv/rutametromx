import { AsyncMessager } from "../classes/asyncMessager";

const MY_ONE: number = 1;
const MY_TWO: number = 2;

window.onload = async function(this: GlobalEventHandlers, ev: Event): Promise<void> {
    // tslint:disable-next-line:no-console
    console.log("Init in home Typescript");
    try {

        const localMessager: AsyncMessager = new AsyncMessager("Francis");

        const asyncMessage: string = await localMessager.getAsyncMessage("Hello buddy");
        // tslint:disable-next-line:no-console
        console.log(asyncMessage);
        // tslint:disable-next-line:no-console
        console.log(localMessager.getSuperArray());

        // Get a new instance of local messager
        const localMessager2: AsyncMessager = new AsyncMessager("David");

        // Show initial values for both classes
        // tslint:disable-next-line:no-console
        console.log(localMessager.nontrivial.getValues());
        // tslint:disable-next-line:no-console
        console.log(localMessager2.nontrivial.getValues());

        // Change the value of the second
        localMessager2.changeNonTrivial(MY_ONE, MY_TWO);

        // Show initial values for both classes
        // tslint:disable-next-line:no-console
        console.log(localMessager.nontrivial.getValues());
        // tslint:disable-next-line:no-console
        console.log(localMessager2.nontrivial.getValues());

    } catch (err) {

        // tslint:disable-next-line:no-console
        console.log(`ERROR: - ${err}`);

    }

};
