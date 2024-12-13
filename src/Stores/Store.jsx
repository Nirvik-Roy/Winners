import { configureStore } from "@reduxjs/toolkit";
import SidebarSlice from "./Slices/SidebarSlice";


const store = configureStore(
    {
        reducer: {
            sidebar: SidebarSlice
        }
    }
)

export default store