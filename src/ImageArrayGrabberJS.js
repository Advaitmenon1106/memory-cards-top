import { createClient } from "pexels";

export function ImageArrayGrabberJS(page_num = 1) {
  const client = createClient(
    "w93M0NVwaG2KkpiVWcIizUINC4lWLaUP9siQKz7dknMuIgR7lfgUrOoL"
  );

  const query = "forest";

  const resultsPromise = client.photos.search({
    query,
    per_page: 80,
    page: page_num,
    orientation:'square'
  });
  return resultsPromise;

  // const client = createClient('w93M0NVwaG2KkpiVWcIizUINC4lWLaUP9siQKz7dknMuIgR7lfgUrOoL');
  // const query = 'tree';
  // const searchResults = client.photos.search({ query, per_page: 80, page:page_num })
  // return searchResults
}
