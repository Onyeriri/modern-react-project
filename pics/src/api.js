import axios from "axios";

async function searchImage(term) {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID yZ44y7DgBkeKzY0SWfkiPbUnoCMu41EvPBMGEJ3OmvM",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
}

export default searchImage;
