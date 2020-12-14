export const handleSubmit = async (e, boroughs, selected, feedback) => {
  e.preventDefault();

  let boroughInfo;

  Object.values(boroughs).forEach((item) => {
    if (item.borough === selected.arrondissement) {
      boroughInfo = boroughs[item.id];
    }
  });

  const { data, date } = feedback;
  const { état } = selected;

  const patchObj = {
    method: "PATCH",
    body: JSON.stringify({
      data,
      date,
      état: état,
    }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  let patchResponse = await fetch(`/fountain/${selected._id}`, patchObj);
  patchResponse = await patchResponse.json();

  let updatedFountain = await fetch(`/fountain/${selected._id}`);
  updatedFountain = await updatedFountain.json();

  const postObj = {
    method: "POST",
    body: JSON.stringify({
      feedback: feedback,
      fountainData: selected,
      boroughInfo: boroughInfo,
    }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  let postResponse = await fetch("/posttweet", postObj);
  postResponse = await postResponse.json();

  return {
    patch: patchResponse,
    post: postResponse,
    fountain: updatedFountain,
  };
};
