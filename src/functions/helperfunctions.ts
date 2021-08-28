const helperFunctions = `function request<ResponseType>(
  method: Method,
  url: string,
  data: string | FormData | undefined,
  params: object
): AxiosPromise<ResponseType> {
  const token = store.getState().session.token; // import store from redux
  
  const config: AxiosRequestConfig = {
    method,
    baseURL, // import from config file
    url,
    headers: {
      Authorization: token || 'empty'
    },
    data,
    params
  };

  return axios(config);
}

export default request;
`;

export default helperFunctions;
