 import ShorterLinkTemplate from "./ShorterLinkTemplate.js";
 class Main{
    constructor(){
        this.verifyForm();
    }

    verifyForm(){
        const inputLink = document.querySelector("#input-link");
        const form = document.querySelector("#input-link-form");

        inputLink.addEventListener("input", () => {
                inputLink.classList.remove("is-invalid");
                inputLink.classList.remove("is-valid");
        })   

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            if (inputLink.value.trim() === "") {
                inputLink.classList.add("is-invalid");
              } else {
                inputLink.classList.remove("is-invalid");
                inputLink.classList.add("is-valid");
              }  
            this.submitData();
        })
        
    }

    async submitData(){
        const inputLink = document.querySelector("#input-link");
        const form = document.querySelector("#input-link-form");
        const linksOutput = document.querySelector(".links-output");

        if(form.checkValidity()){
            const originalLink = inputLink.value;
            try {
                const shortLink = await this.getShortLink(originalLink); 
                linksOutput.innerHTML += new ShorterLinkTemplate(originalLink, shortLink);
            } catch (error) {
                console.error("Erro ao encurtar link:", error.message);
            }
        }
    }

    async getShortLink(originalLink) {
        /*
        A API usada a baixo causa erro de cross origin pois precisa de um servidor para funcionar.
        try {
        const apiUrl ="https://cleanuri.com/api/v1/shorten";
       
        const response = await fetch(apiUrl,{
                method: "POST",
                body: `{"url":"${originalLink}"}`,
              });
         
          const data = await response.json();
      
          if (data.ok) {
            return data.result.full_short_link;
          } else {
            throw new Error("Erro ao encurtar link: " + data.error);
          }
        } catch (error) {
          console.error("Erro na requisição:", error);
          throw error;
        }
        */
      }
 }

 document.addEventListener("DOMContentLoaded", () => {
    new Main();
  });
 

