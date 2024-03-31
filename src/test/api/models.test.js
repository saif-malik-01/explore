import { getModels } from "../../api/models";

describe("getModels API", () => {
  test("should return an array of models", async () => {
    const models = await getModels();
    expect(Array.isArray(models)).toBe(true);
  });
});
