import axiosWithAuth from "../utils/axiosWithAuth";

export const deleteTab = tab => {
  console.log(tab);
  axiosWithAuth()
    .delete(`/tabs/${id}/${tab.id}`)
    .then(res => {
      console.log(res);
    })
    .catch(err => console.log(err));
  }

  