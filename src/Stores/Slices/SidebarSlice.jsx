import { createSlice} from '@reduxjs/toolkit';

const SidebarSlice = createSlice({
    name:'sidebar',
    initialState:{
        isOpen: false
    },
    reducers:{
        toggleSidebar:(state) => {
            state.isOpen =!state.isOpen;
        }
    }
    
})

export default SidebarSlice.reducer
export const {toggleSidebar} = SidebarSlice.actions