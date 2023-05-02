export interface Podcast {
  "im:name": { "label": string; };
  "im:image": Array<{
    "label": string;
    "attributes": { "height": string; }
  }>;
  "summary": {
    "label": string;
  };
  "im:price": { "label": string; "attributes": { "amount": string; "currency": string; } };
  "im:contentType": { "attributes": { "term": string; "label": string; } };
  "rights": { "label": string; };
  "title": { "label": string; };
  "link": {
    "attributes": {
      "rel": string;
      "type": string;
      "href": string;
    }
  };
  "id": {
    "label": string;
    "attributes": { "im:id": string; }
  };
  "im:artist": {
    "label": string;
    "attributes": { "href": string; }
  };
  "category": {
    "attributes": {
      "im:id": string;
      "term": string;
      "scheme": string;
      "label": string;
    }
  };
  "im:releaseDate": { "label": string; "attributes": { "label": string; } }
}

export interface Episode {
  "feedUrl": string;
  "artistIds": number[];
  "closedCaptioning": string;
  "collectionId": number;
  "collectionName": string;
  "episodeFileExtension": string;
  "episodeContentType": string;
  "description": string;
  "artworkUrl160": string;
  "artworkUrl60": string;
  "artistViewUrl": string;
  "releaseDate": string;
  "contentAdvisoryRating": string;
  "trackViewUrl": string;
  "trackId": number;
  "trackName": string;
  "shortDescription": string;
  "country": string;
  "collectionViewUrl": string;
  "episodeUrl": string;
  "trackTimeMillis": number;
  "artworkUrl600": string;
  "previewUrl": string;
  "episodeGuid": string;
  "genres": Array<
    {
      "name": string;
      "id": string
    }>;
  "kind": string;
  "wrapperType": string;
}
