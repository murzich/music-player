export const startQuery = 'artist:"system of a down"';
export const defaultStepSeconds = 5;
export const deezerUrl = 'https://api.deezer.com/';
export const deezerSearch = `${deezerUrl}search/track`;
export const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
export const baseUrl = corsAnywhere + deezerSearch;
export const searchResultLimit = 15;

export const deezerOAuthUrl = 'https://connect.deezer.com/oauth/auth.php';
export const deezerOAuthRedirect = 'http://localhost:3000';
export const deezerAppId = '287644';
export const deezerAppPremissions = [
  'basic_access',
  'email',
  'offline_access',
  'manage_library',
  'manage_community',
  'delete_library',
  'listening_history',
];
