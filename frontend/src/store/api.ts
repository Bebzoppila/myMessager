type optionsType = {
  method: string;
  headers: {
    "Content-Type": string;
  };
  body?: string;
};
type optionsParams = {
  method:string, 
  body?: string, 
  token?:string
}

export const createOptions = ({method, body, token}:optionsParams) => {
    if(method == "GET"){
        return {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer ' + token,
          },
        };
    }
    return {
        method: method,
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer ' + token,
        },
        body: body
    }
}