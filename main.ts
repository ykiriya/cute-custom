let paw = 0
let n = 0
function 前進_Line (数値: number) {
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
input.onButtonPressed(Button.A, function () {
    n = 2
    for (let index = 0; index < 4; index++) {
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
})
input.onButtonPressed(Button.B, function () {
    n = 2
    for (let index = 0; index < 4; index++) {
        前進_Line(n)
    }
})
