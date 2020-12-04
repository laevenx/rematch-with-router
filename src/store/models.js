export const count = {
	state: 0,
	reducers: {
		increment(state, payload) {
            console.log(state)
            return state + 1
        } 
	},
	effects: dispatch => ({
		async asyncIncrement(payload,rootState) {
            console.log(payload)
			await new Promise(resolve => {
				setTimeout(resolve, 1000)
			})

			dispatch.count.increment()
		},
	}),
}
