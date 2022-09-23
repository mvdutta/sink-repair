import { getRequests } from "./dataAccess.js";

export const Requests = () => {
  const requests = getRequests();
  let liArray = requests.map((request) => {
    return `<li id="${request.id}">
            ${request.description}
            </li>`;
  });
  let html = `
        <ul>
            ${liArray.join("")}
        </ul>
    `;

  return html;
};
