export const initialState = {
  aqiData: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "AQI_API_CALL":
      const timeStamp = Date.now();
      const updatedData = state.aqiData;
      action.data.forEach(({ city, aqi }) => {
        if (updatedData[city]) {
          updatedData[city].push({ aqi, timeStamp });
        } else {
          updatedData[city] = [{ aqi, timeStamp }];
        }
      });
      return { ...state.aqiData, aqiData: updatedData };

    default:
      return state;
  }
};

export default reducer;
