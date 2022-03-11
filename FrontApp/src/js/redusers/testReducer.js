
const initState = ()=> ({
    test: null,
});

export const testReducer = (state = initState(), action) => {
    switch (action.type){
        default:
            return state;
    }

}