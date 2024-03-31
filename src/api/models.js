import axios from "axios";

export const getModels = async () => {
  try {
    const response = await axios.get(`/api/models`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getModelById = async (id) => {
  try {
    const response = await axios.get(`/api/models/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const increaseVisitorById = async (id) => {
  try {
    await axios.put(`/api/models/${id}/visit`);
  } catch (error) {
    console.log(error);
  }
};

export const getModelResponse = async (id, text) => {
  try {
    const response = await axios.get(`/api/model/${id}/sandbox`, {
      params: {
        q: text,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getModelByQuery = async (query) => {
  try {
    const response = await axios.get(`/api/search`, {
      params: {
        term: query,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const addModel = async (data) => {
  try {
    const response = await axios.post(`/api/model`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.status;
  } catch (error) {
    console.log(error);
  }
};
