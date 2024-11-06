namespace agent {
    /**
     * Agent moves forward one block.
     */
    //% block="`2d.agent` Step forward"
    //% weight=990
    export function stepForward(): void {
        agent.move(FORWARD, 1);
    }

    /**
     * The agent turns to the left.
     */
    //% block="`2d.agent` Turn left"
    //% weight=980
    export function turnL(): void {
        agent.turn(LEFT_TURN);
    }

    /**
     * The agent turns to the right.
     */
    //% block="`2d.agent` Turn right"
    //% weight=970
    export function turnR(): void {
        agent.turn(RIGHT_TURN);
    }
}