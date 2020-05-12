import axios from "axios";
import { FETCH_SEASON } from "../constants";

export function fetchSeasonAnime(data) {
  console.log(data);
  return async (dispatch) => {
    try {
      const request = await axios
        .get(`/season/${data.year}/${data.season}`)
        .then((res) => res.data);

      dispatch({
        type: FETCH_SEASON,
        payload: request.anime,
      });
    } catch (err) {
      console.log("err", err);
    }
  };
}
