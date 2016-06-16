export declare class LED extends RuffDevice {
    /**
     * Set all of RGB values to 0xff.
     */
    turnOn(callback?: (error: any) => void): void;
    /**
     * Set all of RGB values to 0x00.
     */
    turnOff(callback?: (error: any) => void): void;
    /**
     * Set the intensity of LED RGB.
     * @param rgb A 24-bit number (8 bits per color).
     */
    setRGB(rgb: number, callback?: (error: any) => void): void;
    /**
     * Set the intensity of LED RGB.
     * @param rgb An array with R, G, B intensity as values.
     */
    setRGB(rgb: number[], callback?: (error: any) => void): void;
    /**
     * Set the intensity of LED RGB.
     * @param r Intensity of RED component.
     * @param g Intensity of Green component.
     * @param b Intensity of Blue component.
     */
    setRGB(r: number, g: number, b: number, callback?: (error: any) => void): void;
    /**
     * Get the intensity of LED.
     * @returns the array [r, g, b] of the intensity of Red, Green, and Blue component respectively
     */
    getRGB(callback: (error: any, rgb: [number, number, number]) => void): void;
}

export default LED;
