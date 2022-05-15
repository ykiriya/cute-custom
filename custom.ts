


/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon="/UF076"
//%color=#ff8800 block="中学学習"

namespace Custom {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 2
     * @param m describe parameter here, eg: 3
     * @param e describe parameter here
     */
    //% block="前 Line       調整 $n "
    export function foo(n: number): void {
        let paw = 0
        if (cuteBot.tracking(cuteBot.TrackingState.L_R_unline)) {
            while (cuteBot.tracking(cuteBot.TrackingState.L_R_unline)) {
                cuteBot.motors(20, 20 + paw / n)
            }
            if (cuteBot.tracking(cuteBot.TrackingState.L_R_line)) {
                while (cuteBot.tracking(cuteBot.TrackingState.L_R_line) || (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line) || cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline))) {
                    cuteBot.motors(20, 20 + paw / n)
                }
            } else if (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line)) {
                while (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line)) {
                    cuteBot.motors(20, 20 + paw / n)
                    paw += -1
                }
                while (cuteBot.tracking(cuteBot.TrackingState.L_R_line) || (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line) || cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline))) {
                    cuteBot.motors(20, 20 + paw / n)
                }
            } else {
                while (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline)) {
                    cuteBot.motors(20, 20 + paw / n)
                    paw += 1
                }
                while (cuteBot.tracking(cuteBot.TrackingState.L_R_line) || (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line) || cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline))) {
                    cuteBot.motors(20, 20 + paw / n)
                }
            }
        } else {
            while (cuteBot.tracking(cuteBot.TrackingState.L_R_line) || (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line) || cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline))) {
                cuteBot.motors(20, 20 + paw / n)
            }
        }

    }
    /**
    * TODO: describe your function here
    * @param m describe parameter here, eg: 3
    */
    //%block="左折　　回転角 $m "
    export function fo3(m: number): void {
        cuteBot.motors(-30, 30);
        basic.pause(100 * m);
        cuteBot.stopcar()
        basic.pause(100);
    }



}
