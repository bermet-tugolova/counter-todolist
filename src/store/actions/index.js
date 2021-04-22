export const INCREASE_COUNT = "INCREASE_COUNT"//action
export const DECREASE_COUNT = "DECREASE_COUNT"//action

export const increaseCount = () => ({//action creator
    type: INCREASE_COUNT,
});
export const decreaseCount = () => ({//action creator
    type: DECREASE_COUNT,
})