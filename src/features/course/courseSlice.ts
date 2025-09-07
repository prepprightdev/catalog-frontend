import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import type { Course } from "../../types/Course";

// Mocked JSON data import or define inline for now
import { mockCoursesData } from "../../mock/mockCoursesData"; // Create a file with your provided JSON

interface CoursesState {
  courses: Course[];
  isLoading: boolean;
  error: string | null;
}

const initialState: CoursesState = {
  courses: [],
  isLoading: false,
  error: null,
};

// Simulate API fetch: return full mock data after delay
export const fetchFeaturedCourses = createAsyncThunk(
  "courses/fetchFeaturedCourses",
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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFeaturedCourses.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchFeaturedCourses.fulfilled, (state, action: PayloadAction<Course[]>) => {
        state.courses = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchFeaturedCourses.rejected, (state, action) => {
        state.error = action.payload as string;
        state.isLoading = false;
      });
  },
});

export default courseSlice.reducer;
