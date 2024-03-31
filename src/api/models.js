const BASE_URL = "http://35.184.179.52";

export const getModels = async () => {
  try {
    const data = await fetch(BASE_URL + "/models");
    return await data.json();
  } catch (error) {
    console.log(error);
  }
};

export const getModelById = async (id) => {
  try {
    const data = await fetch(`${BASE_URL}/models/${id}`);
    return await data.json();
  } catch (error) {
    console.log(error);
  }
};

export const increaseVisitorById = async (id) => {
  try {
    await fetch(`${BASE_URL}/models/${id}/visit`, { method: "Put" });
  } catch (error) {
    console.log(error);
  }
};

export const getModelResponse = async (id, text) => {
  try {
    const data = await fetch(`${BASE_URL}/model/${id}/sandbox?q=${text}`);
    return await data.json();
  } catch (error) {
    console.log(error);
  }
};

export const getModelByQuery = async (query) => {
  try {
    const data = await fetch(`${BASE_URL}/search?term=${query}`);
    return await data.json();
  } catch (error) {
    console.log(error);
  }
};

export const addModel = async (data) => {
  try {
    const res = await fetch(`${BASE_URL}/model`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return res.status;
  } catch (error) {
    console.log(error);
  }
};
