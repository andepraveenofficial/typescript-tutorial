enum SeatChoice {
    AISLE = 10,
    MIDDLE, // Numbers will continue
    WINDOW = 31,
    FOURTH
}

enum SeatChoice1 {
    AISLE = "aisle",
    MIDDLE = "middle",
    WINDOW = 4,
    FOURTH
}

// Avoid Unnecessary js code -> check in TS playground
const enum SeatChoice2 {
    AISLE = "aisle",
    MIDDLE = "middle",
    WINDOW = 4,
    FOURTH
}

const hcSeat = SeatChoice.AISLE

