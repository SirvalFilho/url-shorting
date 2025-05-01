export function ShorterLinkTemplate(originalLink, shortLink) {
    return `
       <div class="d-flex flex-row justify-content-between w-75 bg-white p-3 align-items-center rounded">
          <div class="original-link">
            <p class="mb-0">${originalLink}</p>
          </div>
          <div class="short-link d-flex flex-row align-items-center gap-3">
            <p class="mb-0">${shortLink}</p>
            <button>Copy</button>
          </div>
        </div>
    `;
}