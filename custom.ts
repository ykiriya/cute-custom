


/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon="/UF076"
//%color=#ff8800 block="中学学習"

namespace Custom {

    /**
    * TODO: describe your function here
    * @param m describe parameter here, eg: 3
    */
    //%block="左折　　回転角 $m "
    export function turn_L(m: number): void {
        cuteBot.motors(-30, 30);
        basic.pause(100 * m);
        cuteBot.stopcar()
        basic.pause(200);
    }

    /**
    * TODO: describe your function here
    * @param l describe parameter here, eg: 3
    */
    //%block="右折　　回転角 $l "
    export function Turn_R(l: number): void {
        cuteBot.motors(30, -30);
        basic.pause(100 * n);
        cuteBot.stopcar()
        basic.pause(200);
    }

    //%block="止まる"
    export function Stop_c(): void {
        cuteBot.stopcar()
    }

    /**
 * TODO: describe your function here
 * @param n describe parameter here, eg: 2
 * @param m describe parameter here, eg: 3
 * @param e describe parameter here
 */
    //% block="前進 Line      調整 $n "
    export function Forward_line(n: number): void {
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
    * @param k describe parameter here, eg: 3
    */
    //%block="前進    距離 $k　調整 $i"
    export function Forward_dis(k: number, i: number): void {
        cuteBot.motors(20, 20 + i);
        basic.pause(100 * k);
        cuteBot.stopcar()
    }

}
