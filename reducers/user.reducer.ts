import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterUserDto, OrderByDto, PaginationDto, User } from '@/gql/graphql';

interface UserState {
    user: User | null;
    fetching: boolean;
    filterUserDto: FilterUserDto,
    paginationDto: PaginationDto,
    orderByDto: OrderByDto
}

const initialState: UserState = {
    user: null,
    fetching: false,
    filterUserDto: {} as FilterUserDto,
    paginationDto: { page: 1, pageSize: 10 } as PaginationDto,
    orderByDto: {} as OrderByDto,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        },
        setFilterUser: (state, action: PayloadAction<FilterUserDto>) => {
            state.filterUserDto = action.payload;
        },
        setPaginationUser: (state, action: PayloadAction<PaginationDto>) => {
            state.paginationDto = action.payload;
        },
        setOrderByUser: (state, action: PayloadAction<OrderByDto>) => {
            state.orderByDto = action.payload;
        },
    },
});

export const { setUser, setFilterUser, setPaginationUser, setOrderByUser } = userSlice.actions;
export default userSlice.reducer;