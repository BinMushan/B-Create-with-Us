document.addEventListener("DOMContentLoaded", () => {
    const faqs = document.querySelectorAll(".faq");

    faqs.forEach((faq) => {
        const button = faq.querySelector(".toggle-btn");
        const answer = faq.querySelector(".answer");

        button.addEventListener("click", () => {
           
            faqs.forEach((otherFaq) => {
                const otherButton = otherFaq.querySelector(".toggle-btn");
                const otherAnswer = otherFaq.querySelector(".answer");

                if (otherFaq !== faq) {
                    otherButton.setAttribute("aria-expanded", "false");
                    otherAnswer.hidden = true;
                }
            });

            
            const isExpanded = button.getAttribute("aria-expanded") === "true";
            button.setAttribute("aria-expanded", !isExpanded);
            answer.hidden = isExpanded;
        });
    });
});

function updateDateTime() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    document.getElementById('datetime').textContent = now.toLocaleString('en-US', options);
  }
  

  setInterval(updateDateTime, 1000);
  updateDateTime();
  


