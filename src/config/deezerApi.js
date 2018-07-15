import axios from 'axios';
import {
  deezerUrl,
  corsAnywhere,
  searchResultLimit,
  deezerOAuthUrl,
  deezerOAuthRedirect,
  deezerAppId,
  deezerAppPermissions,
} from '../config';

const deezerBaseUrl = corsAnywhere + deezerUrl;

// Method may be: album, artist, history, playlist, radio, track, user.
const search = method => (query, limit = searchResultLimit, advSearch) => {
  const q = advSearch ? `${advSearch}:${query}` : query;
  axios.get(`${deezerBaseUrl}search/${method}/`, {
    params: {
      q,
      limit,
    },
  });
};

export const searchTracks = search('track');

export const oauthLink = `${deezerOAuthUrl}?app_id=${deezerAppId}` +
  `&redirect_uri=${deezerOAuthRedirect}&perms=${deezerAppPermissions.toString()}&response_type=token`;
