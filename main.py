paw = 0
n = 0
def 前進_Line(数値: number):
    global paw
    if cuteBot.tracking(cuteBot.TrackingState.L_R_UNLINE):
        while cuteBot.tracking(cuteBot.TrackingState.L_R_UNLINE):
            cuteBot.motors(20, 20 + paw / n)
        if cuteBot.tracking(cuteBot.TrackingState.L_R_LINE):
            while cuteBot.tracking(cuteBot.TrackingState.L_R_LINE) or (cuteBot.tracking(cuteBot.TrackingState.L_UNLINE_R_LINE) or cuteBot.tracking(cuteBot.TrackingState.L_LINE_R_UNLINE)):
                cuteBot.motors(20, 20 + paw / n)
        elif cuteBot.tracking(cuteBot.TrackingState.L_UNLINE_R_LINE):
            while cuteBot.tracking(cuteBot.TrackingState.L_UNLINE_R_LINE):
                cuteBot.motors(20, 20 + paw / n)
                paw += -1
            while cuteBot.tracking(cuteBot.TrackingState.L_R_LINE) or (cuteBot.tracking(cuteBot.TrackingState.L_UNLINE_R_LINE) or cuteBot.tracking(cuteBot.TrackingState.L_LINE_R_UNLINE)):
                cuteBot.motors(20, 20 + paw / n)
        else:
            while cuteBot.tracking(cuteBot.TrackingState.L_LINE_R_UNLINE):
                cuteBot.motors(20, 20 + paw / n)
                paw += 1
            while cuteBot.tracking(cuteBot.TrackingState.L_R_LINE) or (cuteBot.tracking(cuteBot.TrackingState.L_UNLINE_R_LINE) or cuteBot.tracking(cuteBot.TrackingState.L_LINE_R_UNLINE)):
                cuteBot.motors(20, 20 + paw / n)
    else:
        while cuteBot.tracking(cuteBot.TrackingState.L_R_LINE) or (cuteBot.tracking(cuteBot.TrackingState.L_UNLINE_R_LINE) or cuteBot.tracking(cuteBot.TrackingState.L_LINE_R_UNLINE)):
            cuteBot.motors(20, 20 + paw / n)

def on_button_pressed_a():
    global n, paw
    n = 2
    for index in range(4):
        if cuteBot.tracking(cuteBot.TrackingState.L_R_UNLINE):
            while cuteBot.tracking(cuteBot.TrackingState.L_R_UNLINE):
                cuteBot.motors(20, 20 + paw / n)
            if cuteBot.tracking(cuteBot.TrackingState.L_R_LINE):
                while cuteBot.tracking(cuteBot.TrackingState.L_R_LINE) or (cuteBot.tracking(cuteBot.TrackingState.L_UNLINE_R_LINE) or cuteBot.tracking(cuteBot.TrackingState.L_LINE_R_UNLINE)):
                    cuteBot.motors(20, 20 + paw / n)
            elif cuteBot.tracking(cuteBot.TrackingState.L_UNLINE_R_LINE):
                while cuteBot.tracking(cuteBot.TrackingState.L_UNLINE_R_LINE):
                    cuteBot.motors(20, 20 + paw / n)
                    paw += -1
                while cuteBot.tracking(cuteBot.TrackingState.L_R_LINE) or (cuteBot.tracking(cuteBot.TrackingState.L_UNLINE_R_LINE) or cuteBot.tracking(cuteBot.TrackingState.L_LINE_R_UNLINE)):
                    cuteBot.motors(20, 20 + paw / n)
            else:
                while cuteBot.tracking(cuteBot.TrackingState.L_LINE_R_UNLINE):
                    cuteBot.motors(20, 20 + paw / n)
                    paw += 1
                while cuteBot.tracking(cuteBot.TrackingState.L_R_LINE) or (cuteBot.tracking(cuteBot.TrackingState.L_UNLINE_R_LINE) or cuteBot.tracking(cuteBot.TrackingState.L_LINE_R_UNLINE)):
                    cuteBot.motors(20, 20 + paw / n)
        else:
            while cuteBot.tracking(cuteBot.TrackingState.L_R_LINE) or (cuteBot.tracking(cuteBot.TrackingState.L_UNLINE_R_LINE) or cuteBot.tracking(cuteBot.TrackingState.L_LINE_R_UNLINE)):
                cuteBot.motors(20, 20 + paw / n)
input.on_button_pressed(Button.A, on_button_pressed_a)
