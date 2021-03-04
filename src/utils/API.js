import axios from "axios";

const BASEURL = "https://randomuser.me/api/";
const URLOPTIONS = `?page=1&results=25&nat=us&seed=stay_the_same`;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  search: function () {
    return axios.get(BASEURL + URLOPTIONS);
  },
};
