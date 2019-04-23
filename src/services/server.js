import store from "../store";
import { itemsLoaded, itemsError } from "../actions";

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

  getItemsUrl = async () => {
    await this.getResource()
      .then(res => (!res.ok ? res : Promise.reject(res)))
      .then(res => {
        res.map(async i => {
          const url = await fetch(i.url);
          await url
            .json()
            .then(res => store.dispatch(itemsLoaded(res)));
        });
      })
      .catch(error => store.dispatch(itemsError(error)));
  };
}

export default SwapiService;
