const BASE_URL = "Sæt api her";

export const setBrightness = async (brightness) => {
  const scaledBrightness = Math.round((brightness / 100) * 254);

  await fetch(BASE_URL, {
    method: 'PUT',
    body: JSON.stringify({ bri: scaledBrightness }),
    headers: { 'Content-Type': 'application/json' }
  });
};

export const setColor = async (color) => {
  await fetch(BASE_URL, {
    method: 'PUT',
    body: JSON.stringify({ xy: color }),
    headers: { 'Content-Type': 'application/json' }
  });
};

export const triggerHueAlert = async (lselect) => {
    await fetch(BASE_URL, {
      method: 'PUT',
      body: JSON.stringify({ alert: lselect }),
      headers: { 'Content-Type': 'application/json' }
    });
  };


//   export const turnOnGroupLights = async (groupId) => {
//     const url = `http://192.168.8.100/api/UWLC8FXmuEF4M0xcJtw70QqFOYocc-Qclvp6PH10/groups/${groupId}/action`;
//     await fetch(url, {
//       method: 'PUT',
//       body: JSON.stringify({ on: true }),
//       headers: { 'Content-Type': 'application/json' }
//     });
//   };