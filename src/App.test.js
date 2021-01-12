import App from './App'

describe("Fetch request", () => {
  test("User fetched Melbourne should return weather with location of Melbourn", async () => {
    expect.assertions(1);
    const handleSubmit = App.handleSubmit()
    const res = await handleSubmit(null, "Melbourne");
    const data = await res.json()
    expect(data.location.name).toEqual("Melbourne");
  });
})