class SwapiService {
  _URL =
    "https://api.github.com/search/users?&q=location:%22Odessa%22&s=followers";

  getResource = async () => {
    const res = await fetch(this._URL);
    if (!res.ok) {
      throw new Error(
        `Could not fetch ${this._URL}` +
          `, recerved ${res.status}`
      );
    }
    const json = await res.json();
    const itemsUrl = json.items.filter(
      (el, i) => (el = i < 10)
    );
    return itemsUrl;
  };
}

export default SwapiService;
