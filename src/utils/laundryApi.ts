// const baseUrl = "https://postirai.pro/api/v1/laundry";
const baseUrl = "https://briefly-amusing-quetzal.ngrok-free.app/api/v1/laundry";

const checkResponse = (res: any) => {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(`Ошибка ${res.status}`);
};

export const getLaundries = () => {
  return fetch(`${baseUrl}/list`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "ngrok-skip-browser-warning": "true",
    },
  }).then(checkResponse);
};

export const getDevices = (locationId: number, clientId?: number) => {
  return fetch(
    `${baseUrl}/${locationId}/devices${
      clientId ? `?tg_client_id=${clientId}&tg_chat_id=${clientId}` : ""
    }`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true",
      },
    }
  ).then(checkResponse);
};
