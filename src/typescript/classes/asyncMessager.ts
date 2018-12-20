import { NonTrivial } from "./nonTrivial";

const MY_FIVE: number = 5;
const MY_SIX: number = 6;

/**
 * An abstract class to illustrate my point.
 */

export class AsyncMessager {
    /**
     * A non trivial element to test some principles
     */

    public nontrivial: NonTrivial = new NonTrivial(MY_FIVE, MY_SIX);

    /**
     * A name to print
     */
    private readonly nameToPrint: string;

    /**
     * A super array
     */
    private readonly supperArray: string[];

    public constructor(nameToPrint: string) {
        this.nameToPrint = nameToPrint;
        this.supperArray = [
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
            "tessssst",
        ];
    }

    /**
     * This is a method to change the nontrivial method
     * @param nxi: number this is the new x value
     * @param nyi: number this is the new y value
     */

    public changeNonTrivial(nxi: number, nyi: number): void {
        this.nontrivial.xi = nxi;
        this.nontrivial.yi = nyi;
    }

    /**
     * This is a method to return the super array
     */
    public async getAsyncMessage(messageToPrint: string): Promise<string> {
        return new Promise((resolve: CallableFunction, reject: CallableFunction): void => {
            resolve(`This is an async message to: ${this.nameToPrint} - ${messageToPrint}`);
        });
    }

    /**
     * This is a method to return the super array
     */
    public getSuperArray(): string[] {
        return this.supperArray;
    }

}
