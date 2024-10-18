document.addEventListener('DOMContentLoaded', function () {
    const chatIcon = document.getElementById('chatIcon');
    const chatContainer = document.getElementById('chatContainer');
    const minimize = document.getElementById('minimize');
    const expand = document.getElementById('expand');
    const close = document.getElementById('close');
    const chatBody = document.getElementById('chatBody');
    const chatInput = document.getElementById('chatInput');
    const userInput = document.getElementById('userInput');
    const sendButton = document.getElementById('sendButton');


    chatIcon.addEventListener('click', function () {
        chatContainer.style.display = 'block';
        chatBody.style.display = 'block';
        chatInput.style.display = 'flex';
        chatIcon.style.display = 'none';
    });

    minimize.addEventListener('click', function () {
        chatBody.style.display = 'none';
        chatInput.style.display = 'none';

    });

    expand.addEventListener('click', function () {
        chatBody.style.display = 'block';
        chatInput.style.display = 'flex';
        userInput.style.display = 'block';
        sendButton.style.display = 'block';
    });

    close.addEventListener('click', function () {
        chatContainer.style.display = 'none';
        chatIcon.style.display = 'flex';
        chatIcon.style.position = 'fixed'; // Aseguramos que el icono tenga la misma posición que inicialmente.
        chatIcon.style.bottom = '20px'; // Aseguramos que el icono tenga la misma posición que inicialmente.
        chatIcon.style.right = '20px'; // Aseguramos que el icono tenga la misma posición que inicialmente.
        chatIcon.style.width = '100px'; // Ajustamos el ancho del chat icon.
        chatIcon.style.height = '100px';
    });

    sendButton.addEventListener('click', sendMessage);

    userInput.addEventListener('keydown', function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            sendMessage();
        }
    });

    function sendMessage() {
        const message = userInput.value;
        if (message.trim() !== '') {
            addMessage('User', message);

            // Lógica para obtener la respuesta del bot
            const response = get_response(message);
            addMessage('Donnis', response);

            userInput.value = '';
        }
    }

    const welcomeMessage = "Hola, para mí será un gusto atenderte, soy el asistente virtual de Cosmic Glow. \n Elige una de las siguientes opciones para continuar:\n1. Mini Donas y Paletas de Chocolate.\n2. Anchetas Sorpresa y desayunos a tu puerta.\n3. Maquillaje y Accesorios.\n4. Hablemos por WhatsApp.\n5. Deseo ver su catálogo. \n6. Siguenos por Instagram.";
    addMessage('Donnis', welcomeMessage);

    function addMessage(sender, message) {
        const newMessage = document.createElement('p');
        newMessage.innerText = sender + ": " + message;
        chatBody.appendChild(newMessage);
        chatBody.scrollTop = chatBody.scrollHeight;
    }
});

function get_response(message) {
    if (message === '1') {
        return "Has seleccionado Mini Donas y Paletas de Chocolate.\n1.1. Donas de Chocolate\n1.2. Paletas de Chocolate\n1.3. Deseo contactarlos por WhatsApp\n1.4. Deseo ver el menu anterior";
    } else if (message === '1.1') {
        return "Has seleccionado Donas de Chocolate te ofrecemos las siguientes opciones: \n1.1.1. Donas de Chocolate Surtidas\n1.1.2. Paletas Oreo cubiertas de Chocolate \n1.1.3. Deseo ver el catalogo de donas y paletas oreo\n1.1.4. Deseo contactarlos por WhatsApp\n2.4. Deseo ver el menu anterior";
    } else if (message === '1.2') {
        return "Has seleccionado Paletas de Chocolate te ofrecemos las siguientes opciones: \n1.2.1. Donas de Chocolate Surtidas\n1.2.2. Paletas Oreo cubiertas de Chocolate \n1.2.3. Deseo ver el catalogo de donas y paletas oreo\n1.2.4. Deseo contactarlos por WhatsApp\n1.2.4. Deseo ver el menu anterior";
    } else if (message === '1.3') {
        const confirmWhatsApp = confirm("¿Deseas contactarnos por WhatsApp?");

        if (confirmWhatsApp) {
            const phoneNumber = "573012491404";
            const messageText = encodeURIComponent("Hola, quiero contactar con ustedes.");
            window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${messageText}`);
        } else {
            return "¿En qué más puedo ayudarte? \n Elige una de las siguientes opciones para continuar:\n1. Mini Donas y Paletas de Chocolate.\n2. Anchetas Sorpresa y desayunos a tu puerta.\n3. Maquillaje y Accesorios.\n4. Hablemos por WhatsApp.\n5. Deseo ver su catálogo. \n6. Siguenos por Instagram.";
        }

        return "Has seleccionado Hablemos por WhatsApp. ¡Contáctanos ahora mismo!";
    } else if (message === '1.4') {
        return "Hola, para mí será un gusto atenderte, soy  el asistente virtual de Cosmic Glow. \n Elige una de las siguientes opciones para continuar:\n1. Mini Donas y Paletas de Chocolate.\n2. Anchetas Sorpresa y desayunos a tu puerta.\n3. Maquillaje y Accesorios.\n4. Hablemos por WhatsApp.\n5. Deseo ver su catálogo.";
    } else if (message === '2') {
        return "Has seleccionado Anchetas Sorpresa y desayunos a tu puerta.\n2.1. Ancheta Sorpresa\n2.2. Desayuno Especial\n2.3. Deseo contactarlos por WhatsApp\n2.4. Deseo descargar su catalogo\n2.5. Deseo ver el menu anterior";
    } else if (message === '2.1') {
        return "Has seleccionado Ancheta Sorpresa. ¡Sorprende a tus seres queridos!";
    } else if (message === '2.2') {
        return "Has seleccionado Desayuno Especial. ¡Un comienzo perfecto para el día!";
    } else if (message === '2.3') {
        const confirmWhatsApp = confirm("¿Deseas contactarnos por WhatsApp?");

        if (confirmWhatsApp) {
            const phoneNumber = "573012491404";
            const messageText = encodeURIComponent("Hola, quiero contactar con ustedes.");
            window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${messageText}`);
        } else {
            return "¿En qué más puedo ayudarte?";
        }

        return "Has seleccionado Hablemos por WhatsApp. ¡Contáctanos ahora mismo!";
    } else if (message === '2.4') {
        const confirmDownload = confirm("¿Deseas descargar nuestro catálogo?");
        if (confirmDownload) {
            const link = document.createElement('a');
            link.href = 'https://visualgraphicmd.com.co/chat-box-2/catalogo.pdf'; // Reemplaza con la ruta correcta a tu archivo PDF
            link.download = 'catalogo.pdf'; // Nombre del archivo
            link.target = '_blank'; // Abre el enlace en una nueva pestaña
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link); // Elimina el enlace después de iniciar la descarga
        } else {
            return "¿En qué más puedo ayudarte?";
        }
        return "Has seleccionado Deseo ver su catálogo. ¡Echa un vistazo a nuestra increíble colección!";
    
    } else if (message === '2.5') {
        return "Hola, para mí será un gusto atenderte, soy  el asistente virtual de Cosmic Glow. \n Elige una de las siguientes opciones para continuar:\n1. Mini Donas y Paletas de Chocolate.\n2. Anchetas Sorpresa y desayunos a tu puerta.\n3. Maquillaje y Accesorios.\n4. Hablemos por WhatsApp.\n5. Deseo ver su catálogo.";
    } else if (message === '3') {
        const confirmInstagram = confirm("¿Deseas visitar nuestra web de Maquillaje Cosmic Glow?");
        if (confirmInstagram) {
            const link = document.createElement('a');
            link.href = 'https://visualgraphicmd.com.co/cosmic-glow/index.html'; // Reemplaza con la ruta correcta a tu archivo PDF
              link.target = '_blank'; // Abre el enlace en una nueva pestaña
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link); // Elimina el enlace después de iniciar la descarga
        } else {
            return "¿En qué más puedo ayudarte?\n Elige una de las siguientes opciones para continuar:\n1. Mini Donas y Paletas de Chocolate.\n2. Anchetas Sorpresa y desayunos a tu puerta.\n3. Maquillaje y Accesorios.\n4. Hablemos por WhatsApp.\n5. Deseo ver su catálogo.";
        }
        return "Que te parecio nuestra página aliada, En qué más puedo ayudarte \n Elige una de las siguientes opciones para continuar:\n1. Mini Donas y Paletas de Chocolate.\n2. Anchetas Sorpresa y desayunos a tu puerta.\n3. Maquillaje y Accesorios.\n4. Hablemos por WhatsApp.\n5. Deseo ver su catálogo. \n6. Siguenos por Instagram.";
    
    } else if (message === '3.1') {
        return "Has seleccionado Maquillaje. ¡Descubre nuestros productos de alta calidad!";
    } else if (message === '3.2') {
        return "Has seleccionado Accesorios. ¡Completa tu look con estilo!";
    } else if (message === '4') {
        const confirmWhatsApp = confirm("¿Deseas contactarnos por WhatsApp?");
        if (confirmWhatsApp) {
            window.open("https://api.whatsapp.com/send?phone=573214076057", "_blank");
        } else {
            return "¿En qué más puedo ayudarte?";
        }

        return "Has seleccionado Hablemos por WhatsApp. ¡Contáctanos ahora mismo!";
    } else if (message === '5') {
        const confirmDownload = confirm("¿Deseas descargar nuestro catálogo?");
        if (confirmDownload) {
            const link = document.createElement('a');
            link.href = 'https://visualgraphicmd.com.co/chat-box-2/catalogo.pdf'; // Reemplaza con la ruta correcta a tu archivo PDF
            link.download = 'catalogo.pdf'; // Nombre del archivo
            link.target = '_blank'; // Abre el enlace en una nueva pestaña
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link); // Elimina el enlace después de iniciar la descarga
        } else {
            return "¿En qué más puedo ayudarte?";
        }
        return "Has seleccionado Deseo ver su catálogo. ¡Echa un vistazo a nuestra increíble colección!";
    } else if (message === '6') {
        const confirmInstagram = confirm("¿Deseas visitar nuestro Instagram?");
        if (confirmInstagram) {
            const link = document.createElement('a');
            link.href = 'https://www.instagram.com/minidonasglow'; // Reemplaza con la ruta correcta a tu archivo PDF
              link.target = '_blank'; // Abre el enlace en una nueva pestaña
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link); // Elimina el enlace después de iniciar la descarga
        } else {
            return "¿En qué más puedo ayudarte?\n Elige una de las siguientes opciones para continuar:\n1. Mini Donas y Paletas de Chocolate.\n2. Anchetas Sorpresa y desayunos a tu puerta.\n3. Maquillaje y Accesorios.\n4. Hablemos por WhatsApp.\n5. Deseo ver su catálogo.";
        }
        return "Espero te hayas unido a nuestra comunnidad, En qué más puedo ayudarte";
    }
    else {
        return "No entendí tu elección. Por favor, selecciona un número del 1 al 6.";
    }
}

var header = document.querySelector("h3")

function getRandomColor() {
    var letters = "1234567890ABCDEF";
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color
}


function changeHeaderColor() {
    colorInput = getRandomColor()
    header.style.color = colorInput;
}

setInterval("changeHeaderColor()", 100);
