document.getElementById("digitOne").innerHTML = Math.floor(Math.random() * 10);
document.getElementById("digitTwo").innerHTML = Math.floor(Math.random() * 10);

document.getElementById("openform").addEventListener("click", function() {
    document.getElementById("form").style.display = "block";
    document.getElementById("openform").style.display = "none";
    document.getElementById("contacts").style.display = "none";
});
document.getElementById("closeform").addEventListener("click", function() {
    document.getElementById("form").style.display = "none";
    document.getElementById("openform").style.display = "block";
    document.getElementById("contacts").style.display = "block";
});
document.getElementById("send").addEventListener("click", function() {
    if (document.getElementById("result").value == Number(document.getElementById("digitOne").innerHTML)+Number(document.getElementById("digitTwo").innerHTML)) {
        if (!document.getElementById("message").value) {
            document.getElementById("modalLabel").innerHTML = "Ошибка!";
            document.getElementById("modalBody").innerHTML = "Отсутствует сообщение. Пожалуйста, введите текст Вашего сообщения.";
            document.getElementById("modalButton").click();
        } else {
            if (!document.getElementById("sender").value) {
                document.getElementById("modalLabel").innerHTML = "Ошибка!";
                document.getElementById("modalBody").innerHTML = "Вы не указали, как с Вами связаться. Пожалуйста, Вашу почту или телефон, для того, чтобы Вы смогли получить ответ на обращение.";
                document.getElementById("modalButton").click();
            } else {
                document.getElementById("form").style.display = "none";
                document.getElementById("contacts").style.display = "block";
                document.getElementById("sendingAlert").style.display = "block";
                var data = {
                    sender: document.getElementById("sender").value,
                    message: document.getElementById("message").value
                };
                emailjs.send("98ao6eu_2n3s4t5h", "q8j76kx_z135m7", data, "5GRA6dKh_D6prtfJR")
                    .then(function(response) {
                        document.getElementById("sendingAlert").style.display = "none";
                        document.getElementById("successAlert").style.display = "block";
                        console.log('Email sent successfully!', response.status, response.text);
                    }, function(error) {
                        document.getElementById("sendingAlert").style.display = "none";
                        document.getElementById("errorAlert").style.display = "block";
                        console.log('Cannot send email. Send this error to Avicus:', error);
                    });
            }
        }
    } else {
        document.getElementById("modalLabel").innerHTML = "Ошибка!";
        document.getElementById("modalBody").innerHTML = "Неправильно введена капча. Пожалуйста, посчитайте, сколько будет " + document.getElementById("digitOne").innerHTML + "+" + document.getElementById("digitTwo").innerHTML + ", и введите результат в поле для ответа.";
        document.getElementById("modalButton").click();
    }
});