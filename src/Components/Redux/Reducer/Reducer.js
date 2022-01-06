import { createSlice } from "@reduxjs/toolkit"

const SiteReducer = createSlice({
    name: "blogWorld",
    initialState: {
        addUser: []
    },
    reducers: {
        addUser: (state, { payload }) => {
            state.addUser.push(payload)
        }
    }
})

export const { addUser } = SiteReducer.actions;
export default SiteReducer.reducer;