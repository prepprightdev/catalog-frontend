import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import type { Course } from "../../types/types";
import { mockCoursesData } from "../../mock/mockCoursesData";

interface CourseFilters {
  search?: string;
  category?: string;
  level?: string;
  priceRange?: [number, number];
  rating?: number;
}

interface CoursesState {
  courses: Course[];
  isLoading: boolean;
  error: string | null;
  filters: CourseFilters;
  hasLoaded: boolean;
}

const initialState: CoursesState = {
  courses: [],
  isLoading: false,
  error: null,
  filters: {},
  hasLoaded: false,
};

// Simulate API fetch: return full mock data after delay
export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async (_, { rejectWithValue }) => {
    try {
      return await new Promise<Course[]>((resolve) => {
        setTimeout(() => resolve(mockCoursesData), 700);
      });
    } catch (err) {
      return rejectWithValue("Failed to fetch courses");
    }
  }
);

const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setFilters(state, action: PayloadAction<CourseFilters>) {
      state.filters = action.payload;
    },
    clearFilters(state) {
      state.filters = {};
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCourses.fulfilled, (state, action: PayloadAction<Course[]>) => {
        state.courses = action.payload;
        state.isLoading = false;
        state.hasLoaded = true;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.error = action.payload as string;
        state.isLoading = false;
      });
  },
});

// Export correctly for named imports
export const { setFilters, clearFilters } = courseSlice.actions;
export default courseSlice.reducer;
