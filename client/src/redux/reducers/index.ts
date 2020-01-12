import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";
import { generalReducer, mobileMenuReducer } from "./reducer";
import { aboutReducer } from "./aboutReducer";
import { articlesReucer } from "./articlesReucer";
import { bannerReducer } from "./bannerReducer";
import { descReducer } from "./descReducer";
import { doctorReducer } from "./doctorReducer";
import { doctorsReducer } from "./doctorsReducer";
import { eventReducer } from "./eventReducer";
import { feedbackReducer } from "./feedbackReducer";
import { photoReducer } from "./photoReducer";
import { saleReducer } from "./saleReducer";
import { salesReducer } from "./salesReducer";
import { scheduleReducer } from "./scheduleReducer";
import { serviceReducer } from "./serviceReducer";
import { servicesReducer } from "./servicesReducer";
import { vacanciesReducer } from "./vacanciesReducer";
import { videoReducer } from "./videoReducer";
import { formReducer } from "./formReducer";

export const reducer = combineReducers({
  generalReducer,
  mobileMenuReducer,
  formReducer,
  aboutReducer,
  articlesReucer,
  bannerReducer,
  descReducer,
  doctorReducer,
  doctorsReducer,
  eventReducer,
  feedbackReducer,
  photoReducer,
  saleReducer,
  salesReducer,
  scheduleReducer,
  serviceReducer,
  servicesReducer,
  vacanciesReducer,
  videoReducer,
  form: reduxFormReducer
});
