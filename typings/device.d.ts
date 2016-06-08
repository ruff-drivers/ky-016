export declare class LED extends RuffDevice {
    /**
     * Turn on the LED.
     */
    turnOn(): void;

    /**
     * Turn off the LED.
     */
    turnOff(): void;

    /**
     * set the intensity of LED.
     * @param r intensitu of RED component.
     * @param g intensitu of Green component.
     * @param b intensitu of Blue component.
     */
    setRGB(r: number, g: number, b: number): void;

    /**
     * get the intensity of LED.
     * @returns the array [r, g, b] of the intensity of Red, Green, and Blue component respectively
     */
    getRGB(): [number, number, number];

    /**
     * get the working state of LED.
     * @returns 'ture' means turn on, 'false' means turn off.
     */
    isOn(): boolean;

}

export default LED;
