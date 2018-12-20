/**
 * An abstract class to illustrate my point.
 */
export class NonTrivial {
    /**
     * An abstract class to illustrate my point.
     */
    public xi: number;

    /**
     * An abstract class to illustrate my point.
     */
    public yi: number;

    public constructor(xi: number, yi: number) {
        this.xi = xi;
        this.yi = yi;
    }

    /**
     * An abstract class to illustrate my point.
     */
    public getValues(): string {
        return `${this.xi} - ${this.yi}`;
    }
}
