document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("my-form");
    const userList = document.getElementById("users");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const dataNasc = document.getElementById("dataNasc").value;
        const email = document.getElementById("email").value;

        const age = calculateAge(dataNasc);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (age >= 18 && emailRegex.test(email)) {
            let listItem = document.createElement("li");
            listItem.textContent = `${name} - ${email}`;
            userList.appendChild(listItem);
        } else {
            if (age < 18) {
                showMessage("Apenas maiores de 18 anos podem se inscrever.");
            } else {
                showMessage("Digite um email válido.");
            }
        }

        form.reset();
    });

    function calculateAge(birthday) {
        const today = new Date();
        const birthDate = new Date(birthday);
        let age = today.getFullYear() - birthDate.getFullYear();
        const month = today.getMonth() - birthDate.getMonth();
        if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    function showMessage(message) {
        const msgContainer = document.querySelector(".msg");
        msgContainer.textContent = message;
        msgContainer.style.display = "block";
        setTimeout(() => {
            msgContainer.style.display = "none";
        }, 3000);
    }

    const btnExcluir = document.querySelector(".btn2");
    btnExcluir.addEventListener("click", (event) => {
        event.preventDefault();
        const selectedItem = document.getElementById("curso").value;

        const lis = userList.getElementsByTagName("li");
        for (let i = 0; i < lis.length; i++) {
            const itemText = lis[i].textContent;
            const itemValue = itemText.split(" - ")[1];

            if (itemValue === selectedItem) {
                userList.removeChild(lis[i]);
                break;
            }
        }
    });
});
